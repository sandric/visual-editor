(ns yizhackclj.textual-components
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db :as db :refer [conn]]

  			[yizhackclj.state-components :as state-components]
  			[yizhackclj.button-components :as button-components]
  	)
)


(defn textual [layer-ids]

	[:div.edit
		(when @state-components/selected-button-id

			(if @state-components/edit-mode

				(let [button  @(p/pull conn '[*] @state-components/selected-button-id)
				  	row       (:button/row button)
				  	column    (:button/column button)
				  	value     (:button/value button)]

				  	[:form
				  		[button-components/button-value-input @state-components/selected-button-id value]

				  		[button-components/button-command-input @state-components/selected-button-id "Command:::"]

				  		[button-components/button-functor-select layer-ids]

						[button-components/button-control-select layer-ids]
				  	]
				)
			
				(let [button  @(p/pull conn '[*] @state-components/selected-button-id)
				  	value     (:button/value button)
				  	command   (:button/command button)]

				  	[:div

						[:pre value]
						[:pre command]

						[:pre (first @(p/q conn '[ :find [?layer-name] :where [?layer :layer/vid 2][?layer :layer/name ?layer-name]]))]
					]
				)
			)
		)
	]
)