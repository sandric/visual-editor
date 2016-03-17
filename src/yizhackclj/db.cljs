(ns yizhackclj.db
	(:require   [datascript.core :as d]
				[posh.core :as p]
				[ajax.core :refer [GET POST]]
				[reagent.core :as r]))


(defn new-entity! [conn varmap]
  ((:tempids (d/transact! conn [(merge varmap {:db/id -1})])) -1))


(def id (atom 0))

(defn id-inc [] (swap! id inc))
(defn id-dec [] (swap! id dec))


(def vid (atom 0))

(defn vid-inc [] (swap! vid inc))
(defn vid-dec [] (swap! vid dec))




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



(defn layer-by-vid [vid]
	(let [layer-id  (first @(p/q conn '[ :find [?layer-id] 
										 :in $ ?vid 
										 :where 
										 	[?layer-id :layer/vid ?vid]
										 ] 
										vid))]
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
		 	layer (new-entity! conn {:layer/vid (vid-inc) :layer/name (str layer-name "'s clone")})]

		(doseq [button buttons] 

			(d/transact!
		    	conn
					[
					    {
					    	:db/id (id-dec)
					    	:button/row (nth button 2)
					    	:button/column (nth button 3)
					       	:button/value (nth button 1)
					       	:layer layer
					  	}])
		)
	)
)


(defn remove-layer! [conn layer-id layer-vid]
	(let [  layers  			@(p/q conn '[ 	:find ?layer ?later-vid
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
												(str "LN_" layer-vid))]


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
	(let [layers-ids	@(p/q conn '[:find [?layer-id ...] 
										:where [?layer-id :layer/name]
									])]

		(reset! id 0)

		(reset! vid 0)

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
			    	:db/id (id-dec)
			    	:button/row row
			    	:button/column column
			       	:button/value value				       	
			       	:layer layer
			  	}
			]
	)
)


(defn generate-layer-datom [name vid color buttons]

	(let [layer (new-entity! conn {:layer/vid vid :layer/name name :layer/color color})]

		(doseq [button buttons]
			(generate-button-datom (:row button) (:column button) (:value button) layer)
		)
	)
)


(defn generate-keyboard-datom [keyboard]
	(reset! vid 0)

	(doseq [layer (:layers keyboard)]
		(vid-inc)
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
		  	vid 		(:layer/vid layer)
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
			(vid-inc)
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