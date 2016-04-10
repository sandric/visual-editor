(ns yizhackclj.components.layer
  	(:require 
		[reagent.core :as r]
		[posh.core :as p]
		[dommy.core :as dommy :refer-macros [sel sel1]]

		[yizhackclj.utils :as utils]

		[yizhackclj.state :as state]

		[yizhackclj.db.keyboard :as db :refer [conn]]

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



(defn layer-view [layer-vid]

	(let [layer 		(db/layer-by-vid layer-vid)
		  id 			(:db/id layer)
		  vid 			layer-vid
		  name    		(:layer/name layer)
		  color    		(:layer/color layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?id]  
		  							] 
		  							id)]

		(println "drawing layer" id)
		
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
							:on-click #(db/remove-layer id)
						}
						"remove"])
				(when @state/edit-mode
					[:button 
						{
							:on-click #(db/clone-layer id)
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
						[layer-name-input id name]
						[layer-color-input id color]
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

				:on-click (fn []
					(reset! state/selected-vid vid)
				)
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