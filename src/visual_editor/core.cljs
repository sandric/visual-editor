(ns visual-editor.core
  	(:require 
  		[reagent.core :as r]

		[visual-editor.db :as db]
		[visual-editor.fixtures :as fixtures]

		[visual-editor.components.keyboard :as keyboard-components]
	) 
)

(enable-console-print!)


(defn ^:export initialize [keyboard-json-string editing]
 
	(db/deserialize-keyboard keyboard-json-string)

	(reset! db/edit-mode editing)


	(r/render-component [keyboard-components/keyboard] (.getElementById js/document "visual-editor"))
)

;(initialize fixtures/keyboard true) 

 
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)