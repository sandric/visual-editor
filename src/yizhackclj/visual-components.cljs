(ns yizhackclj.visual-components
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db :as db :refer [conn]]

  			[yizhackclj.state-components :as state-components]
  			[yizhackclj.layer-components :as layer-components]
  	)
)


(defn visual [layer-ids]

	[:div.visual
		{
			:class (when (= @state-components/selected-keyboard-style "visual") "active")

			:on-click #(reset! state-components/selected-button-id nil)
		}
		
		[:div.thumbails
			(for [layer-id layer-ids]
				^{:key layer-id} [layer-components/layer-thumb-view layer-id]
			)
		]
		
		(for[layer-id layer-ids]
			^{:key layer-id} [layer-components/layer-view layer-id]
		)
	]
)