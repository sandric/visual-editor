(ns visual-editor.components.keyboard
  	(:require 
		[reagent.core :as r]

        [visual-editor.db :as db]

        [visual-editor.components.layer :as layer-components]
        [visual-editor.components.button-form :as button-form-components]
  	)
)
  

(defn keyboard []

    [:div.keyboard

        [:div.visual
            {
                :on-click #(reset! db/selected-button nil)
            }

            [:div.thumbails
                (for [layer @db/layers]
                    ^{:key (:id layer)} [layer-components/thumb (:id layer)] 
                )
            ]

            [layer-components/layer @db/selected-layer-id]
        ]

        [button-form-components/button-form]
    ]
)