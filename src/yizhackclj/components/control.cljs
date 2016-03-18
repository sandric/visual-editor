(ns yizhackclj.components.control
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db.keyboard :as db :refer [conn]]
  			[yizhackclj.db.serialization :as db-serialization]
  			[yizhackclj.db.fixtures :as db-fixtures]

  			[yizhackclj.utils :as utils]

  			[yizhackclj.components.state :as state-components]
  			[yizhackclj.components.layer :as layer-components]
  	)
)


(defn control []

	[:div.control 
		[:button 
			{
				:on-click (fn [] 
					(reset! state-components/edit-mode false)
					(.setOption js/editor "readOnly" true)
				)
			}
			"Switch to viewing mode"]
		[:button 
			{
				:on-click (fn []
					(reset! state-components/edit-mode true)
					(.setOption js/editor "readOnly" false)
				)
			}
			"Switch to editing mode"]
		[:button 
			{
				:on-click (fn []
					
					(db/remove-keyboard)

					(db-serialization/deserialize-keyboard (.getValue js/editor))


					(dommy/remove-class! (sel1 :#text) :active)

					(reset! state-components/selected-keyboard-style "visual")
				)
			}
			"Switch to visual"]
		[:button 
			{
				:on-click (fn []

					(.setValue js/editor (db-serialization/serialize-keyboard))

					
					(dommy/add-class! (sel1 :#text) :active)

					(reset! state-components/selected-keyboard-style "textual")
				)
			}
			"Switch to textual"]

		(when @state-components/edit-mode
			[:button 
				{
					:on-click #(db-fixtures/populate-empty-layout)
				}
				"new EMPTY"])
		(when @state-components/edit-mode
			[:button 
				{
					:on-click #(db-fixtures/populate-qwerty-layout)
				}
				"new QWERTY"])

		(when @state-components/edit-mode
			[:div.clone-layer
				[layer-components/clone-layer-input]
				[layer-components/clone-layer-autocomplete]
			])

	]
)
