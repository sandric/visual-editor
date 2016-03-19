(ns yizhackclj.components.commit
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db.keyboard :as db :refer [conn]]
  			[yizhackclj.db.serialization :as db-serialization]

  			[yizhackclj.utils :as utils]

  			[yizhackclj.components.state :as state-components]
  			[yizhackclj.components.layer :as layer-components]
  	)
)


(defn commit-name-input [name]

	[:input 
		{
			:type "text" 
			:maxLength 80 

			:on-change #(reset! name (-> % .-target .-value))
		}
	] 
)

(defn commit-description-textarea [description]

	[:textarea 
		{
			:maxLength 360 

			:on-change #(reset! description (-> % .-target .-value))
		}
	] 
)


(defn commit []

	(let [	name 		(r/atom "")
			description	(r/atom "")]

		(when @state-components/commiting

			[:div#commit
				{
					:class (when @state-components/commiting "active")
				}
				
				[commit-name-input name]
				[commit-description-textarea description]

				[:button 
		          {
		            :on-click (fn []
		            	(reset! state-components/commiting false)
		            )
		          }
		          "Cancel"]

		        [:button 
		          {
		            :on-click (fn []
		            	(if (= @state-components/selected-keyboard-style "visual")
		            		(.commit js/window @name @description (db-serialization/serialize-keyboard))
		            		(.commit js/window @name @description (.getValue (.editor js/editor)))
		            	)
		            )
		          }
		          "Commit"]
			]
		)
	)
)