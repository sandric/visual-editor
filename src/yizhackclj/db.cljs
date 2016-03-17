(ns yizhackclj.db
	(:require   [datascript.core :as d]
				[posh.core :as p]
				[ajax.core :refer [GET POST]]
				[reagent.core :as r]))


(defn new-entity! [conn varmap]
  ((:tempids (d/transact! conn [(merge varmap {:db/id -1})])) -1))


(def tempid (atom 0))
(defn next-tempid []
	(swap! tempid dec)
)


(def virtual-layer-id (atom 0))

(defn inc-layer-id [] (swap! virtual-layer-id inc) @virtual-layer-id)
(defn dec-layer-id [] (swap! virtual-layer-id dec) @virtual-layer-id)


(defn parse-layer [value]
	(if (.startsWith value "LN_")
		(js/parseInt (subs value 3))
		0
	)
)


(defn to-json [keyboard]
  	(.stringify js/JSON (clj->js keyboard) nil 2)
)

(defn parse-json [json]
	(js->clj (JSON.parse json) :keywordize-keys true)
)



(def schema 
	{
		:layer/button {:db/cardinality :db.cardinality/many}
	}
)

(def conn (d/create-conn schema))



(defn layer-by-virtual-id [virtual-id]
	(let [layer-id  (first @(p/q conn '[ :find [?layer-id] 
										 :in $ ?virtual-id 
										 :where 
										 	[?layer-id :layer/virtual-id ?virtual-id]
										 ] 
										virtual-id))]
		@(p/pull conn '[*] layer-id)
	)
)


(defn clone-layer! [conn layer-id layer-name]
	(let [  buttons @(p/q conn '[ 	:find ?button ?value ?row ?column
									:in $ ?layer-id
									:where 
										[?button :layer ?layer-id] 
										[?button :button/value ?value] 
										[?button :button/row ?row] 
										[?button :button/column ?column] 
									]
									layer-id)
		 	layer (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name (str layer-name "'s clone")})]

		(doseq [button buttons] 

			(d/transact!
		    	conn
					[
					    {
					    	:db/id (next-tempid)
					    	:button/row (nth button 2)
					    	:button/column (nth button 3)
					       	:button/value (nth button 1)
					       	:layer layer
					  	}])
		)
	)
)


(defn remove-layer! [conn layer-id layer-virtual-id]
	(let [  layers  			@(p/q conn '[ 	:find ?layer ?later-virtual-id
												:in $ ?layer-id
												:where 
													[?layer-id 	:layer/virtual-id ?virtual-id]
													[?layer 	:layer/virtual-id ?later-virtual-id] 
												[(> ?later-virtual-id ?virtual-id)]
											]
											layer-id)

			button-references 	@(p/q conn '[ 	:find [?button ...] 
												:in $ ?val 
												:where 
													[?button :button/value ?val] 
												] 
												(str "LN_" layer-virtual-id))]


		(doseq [button-id button-references]
			(p/transact! conn [[:db/add button-id :button/value ""]]))



		(p/transact! conn [[:db.fn/retractEntity layer-id]])
		(dec-layer-id)

		(doseq [[layer-id later-virtual-id] layers]
			(p/transact! conn [[:db/add layer-id :layer/virtual-id (dec later-virtual-id)]])

			(let [button-references 	@(p/q conn '[ 	:find [?button ...] 
												:in $ ?val 
												:where 
													[?button :button/value ?val] 
												] 
												(str "LN_" later-virtual-id))]

				(doseq [button-id button-references]
					(p/transact! conn [[:db/add button-id :button/value (str "LN_" (dec later-virtual-id))]])
				)
			)
		)
	)
)



(defn remove-keyboard []
	(let [layers-ids	@(p/q conn '[:find [?layer-id ...] 
										:where [?layer-id :layer/name]
									])]

		(reset! tempid 0)

		(reset! virtual-layer-id 0)

		(doseq [layer-id layers-ids]
			(remove-layer! conn layer-id nil)
		)
	)
)






(defn generate-button-datom [row column value layer]
    (d/transact!
    	conn
			[
			    {
			    	:db/id (next-tempid)
			    	:button/row row
			    	:button/column column
			       	:button/value value				       	
			       	:layer layer
			  	}
			]
	)
)


(defn generate-layer-datom [name virtual-id color buttons]

	(let [layer (new-entity! conn {:layer/virtual-id virtual-id :layer/name name :layer/color color})]

		(doseq [button buttons]
			(generate-button-datom (:row button) (:column button) (:value button) layer)
		)
	)
)


(defn generate-keyboard-datom [keyboard]
	(reset! virtual-layer-id 0)

	(doseq [layer (:layers keyboard)]
		(inc-layer-id)
		(generate-layer-datom 
			(:name layer)
			(:id layer)
			(:color layer)
			(:buttons layer))
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
		  	vid 		(:layer/virtual-id layer)
		  	color 		(:layer/color layer)
			buttons-ids (sort @(p/q conn '[ 	:find [?button ...]
		  									:in $ ?layer-id 
		  									:where 
		  										[?button :button/value] 
		  										[?button :layer ?layer-id]  
		  								] 
		  								layer-id))]


		{:name name :id vid :color color :buttons (map convert-button-to-edn buttons-ids)}
	)
)


(defn convert-keyboard-to-edn []
	(let [layers-ids	(sort @(p/q conn '[:find [?layer-id ...] 
										:where [?layer-id :layer/name]
									]))]

		{:layers (map convert-layer-to-edn layers-ids)}
	)
)




(defn deserialize-layer [json]

	(let [parsed-layer (parse-json json)]
		(generate-layer-datom 
			(:name parsed-layer)
			(inc-layer-id)
			(:color parsed-layer) 
			(:buttons parsed-layer))
	)
)




(defn ^:export deserialize-keyboard [json]
	(generate-keyboard-datom (parse-json json))
)


(defn ^:export serialize-keyboard []
	(to-json (convert-keyboard-to-edn))
)




(def empty-layout
	"[	{\"row\":1,\"column\":1,\"value\":\"\"},
		{\"row\":1,\"column\":2,\"value\":\"\"},
		{\"row\":1,\"column\":3,\"value\":\"\"},
		{\"row\":1,\"column\":4,\"value\":\"\"},
		{\"row\":1,\"column\":5,\"value\":\"\"},
		{\"row\":1,\"column\":6,\"value\":\"\"},		
		{\"row\":1,\"column\":7,\"value\":\"\"},
		{\"row\":1,\"column\":8,\"value\":\"\"},
		{\"row\":1,\"column\":9,\"value\":\"\"},
		{\"row\":1,\"column\":10,\"value\":\"\"},
		{\"row\":1,\"column\":11,\"value\":\"\"},
		{\"row\":1,\"column\":12,\"value\":\"\"},
		{\"row\":2,\"column\":1,\"value\":\"\"},
		{\"row\":2,\"column\":2,\"value\":\"\"},
		{\"row\":2,\"column\":3,\"value\":\"\"},
		{\"row\":2,\"column\":4,\"value\":\"\"},
		{\"row\":2,\"column\":5,\"value\":\"\"},
		{\"row\":2,\"column\":6,\"value\":\"\"},
		{\"row\":2,\"column\":7,\"value\":\"\"},
		{\"row\":2,\"column\":8,\"value\":\"\"},
		{\"row\":2,\"column\":9,\"value\":\"\"},
		{\"row\":2,\"column\":10,\"value\":\"\"},
		{\"row\":2,\"column\":11,\"value\":\"\"},
		{\"row\":2,\"column\":12,\"value\":\"\"},
		{\"row\":3,\"column\":2,\"value\":\"\"},
		{\"row\":3,\"column\":3,\"value\":\"\"},
		{\"row\":3,\"column\":4,\"value\":\"\"},
		{\"row\":3,\"column\":5,\"value\":\"\"},
		{\"row\":3,\"column\":6,\"value\":\"\"},
		{\"row\":3,\"column\":7,\"value\":\"\"},
		{\"row\":3,\"column\":8,\"value\":\"\"},
		{\"row\":3,\"column\":9,\"value\":\"\"},
		{\"row\":3,\"column\":10,\"value\":\"\"},
		{\"row\":3,\"column\":11,\"value\":\"\"},
		{\"row\":4,\"column\":5,\"value\":\"\"},
		{\"row\":4,\"column\":6,\"value\":\"\"},
		{\"row\":4,\"column\":8,\"value\":\"\"},
		{\"row\":4,\"column\":7,\"value\":\"\"}]")

(def qwerty-layout 
	"[	{\"row\":1,\"column\":1,\"value\":\"CTRL\"},
		{\"row\":1,\"column\":2,\"value\":\"Q\"},
		{\"row\":1,\"column\":3,\"value\":\"W\"},
		{\"row\":1,\"column\":4,\"value\":\"E\"},
		{\"row\":1,\"column\":5,\"value\":\"R\"},
		{\"row\":1,\"column\":6,\"value\":\"T\"},		
		{\"row\":1,\"column\":7,\"value\":\"Y\"},
		{\"row\":1,\"column\":8,\"value\":\"U\"},
		{\"row\":1,\"column\":9,\"value\":\"I\"},
		{\"row\":1,\"column\":10,\"value\":\"O\"},
		{\"row\":1,\"column\":11,\"value\":\"P\"},
		{\"row\":1,\"column\":12,\"value\":\"CTRL\"},
		{\"row\":2,\"column\":1,\"value\":\"ALT\"},
		{\"row\":2,\"column\":2,\"value\":\"A\"},
		{\"row\":2,\"column\":3,\"value\":\"S\"},
		{\"row\":2,\"column\":4,\"value\":\"D\"},
		{\"row\":2,\"column\":5,\"value\":\"F\"},
		{\"row\":2,\"column\":6,\"value\":\"G\"},
		{\"row\":2,\"column\":7,\"value\":\"H\"},
		{\"row\":2,\"column\":8,\"value\":\"J\"},
		{\"row\":2,\"column\":9,\"value\":\"K\"},
		{\"row\":2,\"column\":10,\"value\":\"L\"},
		{\"row\":2,\"column\":11,\"value\":\"L\"},
		{\"row\":2,\"column\":12,\"value\":\"ALT\"},
		{\"row\":3,\"column\":2,\"value\":\"Z\"},
		{\"row\":3,\"column\":3,\"value\":\"X\"},
		{\"row\":3,\"column\":4,\"value\":\"C\"},
		{\"row\":3,\"column\":5,\"value\":\"V\"},
		{\"row\":3,\"column\":6,\"value\":\"B\"},
		{\"row\":3,\"column\":7,\"value\":\"N\"},
		{\"row\":3,\"column\":8,\"value\":\"M\"},
		{\"row\":3,\"column\":9,\"value\":\"M\"},
		{\"row\":3,\"column\":10,\"value\":\"M\"},
		{\"row\":3,\"column\":11,\"value\":\"M\"},
		{\"row\":4,\"column\":5,\"value\":\"BKSP\"},
		{\"row\":4,\"column\":6,\"value\":\"SPC\"},
		{\"row\":4,\"column\":8,\"value\":\"TAB\"},
		{\"row\":4,\"column\":7,\"value\":\"ENTR\"}]")

(def empty-layer (str "{\"name\":\"Empty Layer\",\"color\":\"#ffffff\",\"buttons\":" empty-layout "}"))
(def qwerty-layer (str "{\"name\":\"QWERTY Layer\",\"color\":\"#ffffff\",\"buttons\":" qwerty-layout "}"))


(def fixture-keyboard (str "{\"layers\":[{\"name\":\"Layer 1\",\"id\":1,\"color\":\"#ff0000\",\"buttons\":" qwerty-layout "}, {\"name\":\"Layer 2\",\"id\":2,\"color\":\"#00ff00\",\"buttons\":" empty-layout "}]}"))


(defn populate-fixture-keyboard []
	(deserialize-keyboard fixture-keyboard)
)

(defn populate-empty-layout []
	(deserialize-layer empty-layer)
)

(defn populate-qwerty-layout []
	(deserialize-layer qwerty-layer)
)



(def clone-layer-autocomplete-results (r/atom []))
 


(defn on-get-layers-request-handler [response] 
	(reset! clone-layer-autocomplete-results (parse-json response))
)

(defn on-get-layers-request-error-handler [{:keys [status status-text]}]
  (println (str "Error while getting layers automoplete: " status " " status-text))
)

(defn get-layers-from-server [query]

	(GET (str "http://localhost:3000/autocomplete?q=" query) {
		:response-format :raw 
		:handler on-get-layers-request-handler 
		:error-handler on-get-layers-request-error-handler
		})
)




(defn on-get-layer-request-handler [response] 
	(deserialize-layer response)
)

(defn on-get-layer-request-error-handler [{:keys [status status-text]}]
  (println (str "Error while getting layer: " status " " status-text))
)

(defn get-layer-from-server [path]

	(GET (str "http://localhost:3000/" path) {
		:response-format :raw 
		:handler on-get-layer-request-handler 
		:error-handler on-get-layer-request-error-handler
		})
)


(defn on-post-keyboard-request-handler [response] 
	(println response)
)

(defn on-post-keyboard-request-error-handler [{:keys [status status-text]}]
	(println (str "Error while posting keyboard: " status " " status-text))
)

(defn post-keyboard-to-server []

	(POST "http://localhost:3000/keyboard/update" {
		:params {	:user "Some fkn user"
                 	:keyboardID "keyboardID"
                 	:keyboard (convert-keyboard-to-edn) }

		:format :json 
		:handler on-post-keyboard-request-handler 
		:error-handler on-post-keyboard-request-error-handler
		})
)