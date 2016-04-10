(ns yizhackclj.components.layer
  	(:require 
		[reagent.core :as r]

		[yizhackclj.db :as db]

		[yizhackclj.state :as state]

		[yizhackclj.components.button :as button-components]
  	)
)


(defn layer [id]

	(let [layer 		(db/layer-by-id id)
		  name    		(:name layer)
		  color    		(:color layer)
		  buttons 		(db/buttons-by-layer-id id)]

		[:div.layer 
			{
				:class (when (= @state/selected-layer-id id) "selected")
				:style {
					:background-color color
				}
			}

			[:div.control (str "ID: " id " Name: " name)]

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
							:on-click #(db/clear-layer id)
						}
						"clear"])

				(if @state/edit-mode

					[:form
						
						[:input 
							{
								:type "text" 
								:maxLength 8
								:value name
					            
					            :on-change (fn [e]
					            	(db/layer-update layer {:name (-> e .-target .-value)})
					            )
							}
						] 

						[:input 
							{
								:type "text" 
								:maxLength 8
								:value color
					            
					            :on-change (fn [e]
					            	(db/layer-update layer {:color (-> e .-target .-value)})
					            )
							}
						] 
					]

					[:pre name]
				)
			]

			[:div.layout
				(for [button buttons]
					^{:key (str id (:row button) (:column button))} [button-components/button button]
				)
			]
		]
	)
)


(defn thumb [id]

	(let [layer 		(db/layer-by-id id)
		  name    		(:name layer)
		  color    		(:color layer)
		  buttons 	 	(db/buttons-by-layer-id id)]

		[:div.layer.thumb 
			{
				:class (str (when (= @state/selected-layer-id id) "selected") (when (= @state/hovered-layer-id id) " hovered"))

				:style {
					:background-color color
				}

				:on-click (fn []
					(reset! state/selected-layer-id id)
				)
			}

			[:div.control (str "ID: " id " Name: " name)]

			[:div.layout
				(for [button buttons]
					^{:key (str id (:row button) (:column button))} [button-components/thumb button]
				)
			]
		]
	)
)