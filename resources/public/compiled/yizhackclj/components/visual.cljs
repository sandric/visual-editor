(ns yizhackclj.components.visual
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.utils :as utils]

  			[yizhackclj.state :as state]

  			[yizhackclj.db.keyboard :as db :refer [conn]]
  			
  			[yizhackclj.components.layer :as layer-components]
  	)
)


(defn visual [layer-ids]

	[:div.visual
		{
			:on-click #(reset! state/selected-button-id nil)
		}
		
		[:div.thumbails
			(for [layer-id layer-ids]
				^{:key layer-id} [layer-components/layer-thumb-view layer-id]
			)
		]
		
		;(for[layer-id layer-ids]
		;	^{:key layer-id} [layer-components/layer-view layer-id]
		;)

		;(when @state/selected-vid [layer-components/layer-view @state/selected-vid])
	]
)