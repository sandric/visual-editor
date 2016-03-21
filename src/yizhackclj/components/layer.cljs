(ns yizhackclj.components.layer
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.utils :as utils]

  			[yizhackclj.state :as state]

  			[yizhackclj.db.keyboard :as db :refer [conn]]
  			[yizhackclj.db.autocomplete :as db-autocomplete]

  			[yizhackclj.components.button :as button-components]
  	)
)



(defn layer-name-input [layer-id name]

	[:input 
		{
			:type "text" 
			:maxLength 8
			:value name
            
            :on-change (fn [e]
            	(p/transact! conn [[:db/add layer-id :layer/name (-> e .-target .-value)]])
            )
		}
	] 
)

(defn layer-color-input [layer-id color]

	[:input 
		{
			:type "text" 
			:maxLength 8
			:value color
            
            :on-change (fn [e]
            	(p/transact! conn [[:db/add layer-id :layer/color (-> e .-target .-value)]])
            )
		}
	] 
)



(defn layer-view [layer-id]

	(let [layer 		@(p/pull conn '[*] layer-id)
		  vid 			(:layer/vid layer)
		  name    		(:layer/name layer)
		  color    		(:layer/color layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		
		[:div.layer 
			{
				:class (when (= @state/selected-vid vid) "selected")
				:style {
					:background-color color 
				}
			}

			[:div.control

				(when @state/edit-mode
					[:button 
						{
							:on-click #(db/remove-layer layer-id)
						}
						"remove"])
				(when @state/edit-mode
					[:button 
						{
							:on-click #(db/clone-layer layer-id)
						}
						"clone"])
				(when @state/edit-mode
					[:button 
						{
							:on-click #(doseq [button-id buttons-ids] (p/transact! conn [[:db/add button-id :button/value ""]]))
						}
						"clear"])

				(if @state/edit-mode
					[:form
						[layer-name-input layer-id name]
						[layer-color-input layer-id color]
					]
					[:pre name]
				)
			]

			[:div.layout
				(for [button-id buttons-ids]
					^{:key button-id} [button-components/button-view button-id]
				)
			]
		]
	)
)


(defn layer-thumb-view [layer-id]

	(let [layer 		@(p/pull conn '[*] layer-id)
		  vid 			(:layer/vid layer)
		  name    		(:layer/name layer)
		  color    		(:layer/color layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		[:div.layer.thumb 
			{
				:class (str (when (= @state/selected-vid vid) "selected") (when (= @state/hovered-vid vid) " hovered"))

				:style {
					:background-color color 
				}

				:on-click #(reset! state/selected-vid vid)
			}

			[:div.control (str "ID: " vid " Name: " name)]

			[:div.layout
				(for [button-id buttons-ids]
					^{:key button-id} [button-components/button-thumb-view button-id]
				)
			]
		]
	)
)




(defn clone-layer-input []

	[:input 
		{
			:type "text"

			:id "autocomplete" 
			 
            :on-change (fn [e]
            	(println "making request for " (-> e .-target .-value))
            	(db-autocomplete/get-layers-from-server (-> e .-target .-value))
            )
		}
	] 
)

(defn clone-layer-autocomplete []

	(let [results @db-autocomplete/clone-layer-autocomplete-results]
		[:div.autocomplete 
			(for [result results]
				[:a 
					{
						:on-click (fn [e]
							(set! (.-value (sel1 :#autocomplete)) "")
							(reset! db-autocomplete/clone-layer-autocomplete-results [])
							(db-autocomplete/get-layer-from-server result)
						)
					}

					result
				]
			)
		] 
	)
)
