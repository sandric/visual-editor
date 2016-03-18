(ns yizhackclj.db.keyboard
	(:require   
		[datascript.core :as d]
		[posh.core :as p]
		[ajax.core :refer [GET POST]]
		[reagent.core :as r]

		[yizhackclj.utils :as utils]
	)
)



(def schema 
	{
		:layer/button {:db/cardinality :db.cardinality/many}
	}
)

(def conn (d/create-conn schema))

 
 
(defn new-entity! [varmap]
	((:tempids (d/transact! conn [(merge varmap {:db/id -1})])) -1)
)
  

(def id (atom 0))

(defn id-inc [] (swap! id inc))
(defn id-dec [] (swap! id dec))


(def vid (atom 0))

(defn vid-inc [] (swap! vid inc))
(defn vid-dec [] (swap! vid dec))




(defn layer-ids []
	@(p/q conn '[:find [?layer-id ...] :where [?layer-id :layer/name]])
)

(defn layer-by-id [layer-id]
	@(p/pull conn '[*] layer-id)
)

(defn layer-by-vid [vid]
	(let [layer-id  (first @(p/q conn '[ :find [?layer-id] 
										 :in $ ?vid 
										 :where 
										 	[?layer-id :layer/vid ?vid]
										 ] 
										vid))]
		(layer-by-id layer-id)
	)
)


(defn clone-layer [layer-id]
	(let [  layer 	(layer-by-id layer-id)
			buttons @(p/q conn '[ 	:find ?button ?value ?row ?column
									:in $ ?layer-id
									:where 
										[?button :layer ?layer-id] 
										[?button :button/value ?value]
										[?button :button/row ?row] 
										[?button :button/column ?column] 
									]
									layer-id)
		 	new-layer (new-entity! {:layer/vid (vid-inc) :layer/name (str (:layer/name layer) "'s clone") :layer/color (:layer/color layer)})]

		(doseq [button buttons] 

			(d/transact!
		    	conn
					[
					    {
					    	:db/id (id-dec)
					    	:button/row (nth button 2)
					    	:button/column (nth button 3)
					       	:button/value (nth button 1)
					       	:layer new-layer
					  	}])
		)
	)
)


(defn remove-layer [layer-id]
	(let [  layer 				(layer-by-id layer-id)
			layers  			@(p/q conn '[ 	:find ?layer ?later-vid
												:in $ ?layer-id
												:where 
													[?layer-id 	:layer/vid ?vid]
													[?layer 	:layer/vid ?later-vid] 
												[(> ?later-vid ?vid)]
											]
											layer-id)

			button-references 	@(p/q conn '[ 	:find [?button ...] 
												:in $ ?val 
												:where 
													[?button :button/value ?val] 
												] 
												(str "LN_" (:vid layer)))]


		(doseq [button-id button-references]
			(p/transact! conn [[:db/add button-id :button/value ""]]))



		(p/transact! conn [[:db.fn/retractEntity layer-id]])
		(vid-dec)

		(doseq [[layer-id later-vid] layers]
			(p/transact! conn [[:db/add layer-id :layer/vid (dec later-vid)]])

			(let [button-references 	@(p/q conn '[ 	:find [?button ...] 
														:in $ ?val 
														:where 
															[?button :button/value ?val] 
													] 
											(str "LN_" later-vid))]

				(doseq [button-id button-references]
					(p/transact! conn [[:db/add button-id :button/value (str "LN_" (dec later-vid))]])
				)
			)
		)
	)
)


(defn remove-keyboard []
	(let [layers-ids	(layer-ids)]

		(reset! id 0)

		(reset! vid 0)

		(doseq [layer-id layers-ids]
			(remove-layer layer-id)
		)
	)
)