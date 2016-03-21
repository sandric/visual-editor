(ns yizhackclj.components.control
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.utils :as utils]

			[yizhackclj.state :as state]

  			[yizhackclj.db.keyboard :as db :refer [conn]]
  			[yizhackclj.db.serialization :as db-serialization]
  			[yizhackclj.db.fixtures :as db-fixtures]

  			[yizhackclj.components.layer :as layer-components]
  	)
)


(defn control []

	[:div.control 
		[:button 
			{
				:on-click (fn []

					(when @state/edit-mode
						(do
							(db/remove-keyboard)
							(db-serialization/deserialize-keyboard)
						)
					)

					(dommy/remove-class! (sel1 :#editor) :visible)
					(dommy/add-class! (sel1 :#editor) :hidden)

					(reset! state/selected-keyboard-style "visual")
				)
			}
			"Switch to visual"]
		[:button
			{
				:on-click (fn []

					(when @state/edit-mode
						(do
							(reset! state/selected-button-id nil)
							(.setValue (.editor js/editor) (db-serialization/serialize-keyboard))
						)
					)
		
					(dommy/remove-class! (sel1 :#editor) :hidden)
					(dommy/add-class! (sel1 :#editor) :visible)

					(reset! state/selected-keyboard-style "textual")
				)
			}
			"Switch to textual"]

		(when @state/edit-mode
			[:button 
				{
					:on-click #(db-fixtures/populate-empty-layout)
				}
				"new EMPTY"])
		(when @state/edit-mode
			[:button 
				{
					:on-click #(db-fixtures/populate-qwerty-layout)
				}
				"new QWERTY"])

		(when @state/edit-mode
			[:div.clone-layer
				[layer-components/clone-layer-input]
				[layer-components/clone-layer-autocomplete]
			])
	]
)
