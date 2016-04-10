(ns yizhackclj.components.textual
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


(defn textual [layer-ids]

	[:div.edit
		(when @state/selected-button-id

			(if @state/edit-mode

				(let [	button  @(p/pull conn '[*] @state/selected-button-id)
					  	row       (:button/row button)
					  	column    (:button/column button)
					  	value     (:button/value button)]

				  	[:form
				  		[button-components/button-value-input @state/selected-button-id value]

				  		[button-components/button-functor-select layer-ids]

						[button-components/button-control-select layer-ids]
				  	]
				)
			
				(let [	button  @(p/pull conn '[*] @state/selected-button-id)
				  		value     (:button/value button)]

				  	[:div

						[:pre value]

						[:pre (first @(p/q conn '[ :find [?layer-name] :where [?layer :layer/vid 2][?layer :layer/name ?layer-name]]))]
					]
				)
			)
		)
	]
)