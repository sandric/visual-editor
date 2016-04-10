(ns yizhackclj.db.serialization
	(:require   
		[datascript.core :as d]
		[posh.core :as p]

		[yizhackclj.utils :as utils]

		[yizhackclj.state :as state]

		[yizhackclj.db.keyboard :as db :refer [conn]]
	)
)


(defn generate-button-datom [row column value layer]
    (d/transact!
    	conn
			[
			    {
			    	:db/id (db/id-dec)
			    	:button/row row
			    	:button/column column
			       	:button/value value				       	
			       	:layer layer
			  	}
			]
	)
)


(defn generate-layer-datom [name vid color buttons]

	(let [layer (db/new-entity! {:layer/vid vid :layer/name name :layer/color color})]

		(doseq [button buttons]
			(generate-button-datom (:row button) (:column button) (:value button) layer)
		)
	)
)


(defn generate-keyboard-datom [keyboard]
	(reset! db/vid 0)

	(doseq [layer (:layers keyboard)]
		(db/vid-inc)
		(generate-layer-datom 
			(:name layer)
			(:vid layer)
			(:color layer)
			(:layout layer))
	)
)




(defn convert-button-to-edn [button-id]
	(let [button    @(p/pull conn '[*] button-id)
				  	row       (:button/row button)
				  	column    (:button/column button)
				  	value     (:button/value button)]

		{:row row :column column :value value}
	)
)


(defn convert-layer-to-edn [layer-id]
	(let   [layer     	@(p/pull conn '[*] layer-id)
		  	name    	(:layer/name layer)
		  	vid 		(:layer/vid layer)
		  	color 		(:layer/color layer)
			buttons-ids (sort @(p/q conn '[ :find [?button ...]
		  									:in $ ?layer-id 
		  									:where 
		  										[?button :button/value] 
		  										[?button :layer ?layer-id]  
		  								] 
		  								layer-id))]


		{:name name :vid vid :color color :layout (map convert-button-to-edn buttons-ids)}
	)
)


(defn convert-keyboard-to-edn []
	(let [layers-ids	(sort 
							@(p/q conn '[	:find [?layer-id ...] 
											:where [?layer-id :layer/name]
										]
							)
						)]

		{:layers (map convert-layer-to-edn layers-ids)}
	)
)

 
(defn deserialize-layer [json]

	(let [parsed-layer (utils/parse-json json)]
		(generate-layer-datom 
			(:name parsed-layer)
			(db/vid-inc)
			(:color parsed-layer) 
			(:layout parsed-layer))
	)
)


(defn ^:export deserialize-keyboard []
	(generate-keyboard-datom (utils/parse-json @state/keyboard-data))
)


(defn ^:export serialize-keyboard []
	(utils/to-json (convert-keyboard-to-edn))
)


(defn ^:export s []
	@state/keyboard-data
)

(defn ^:export set-keyboard-data [new-keyboard-data]
	(reset! state/keyboard-data new-keyboard-data)
)