(ns yizhackclj.components.keyboard
  	(:require 
		[reagent.core :as r]

        [yizhackclj.state :as state]

        [yizhackclj.db :as db]

        [yizhackclj.components.layer :as layer-components]
        [yizhackclj.components.button-form :as button-form-components]
  	)
)
  

(defn keyboard []

    [:div.keyboard

        [:div.visual
            {
                :on-click #(reset! state/selected-button nil)
            }

            [:div.thumbails
                (for [layer @db/layers]
                    ^{:key (:id layer)} [layer-components/thumb (:id layer)] 
                )
            ]

            [layer-components/layer @state/selected-layer-id]
        ]

        [button-form-components/button-form]
    ]
)