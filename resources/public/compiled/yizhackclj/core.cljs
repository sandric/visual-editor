(ns yizhackclj.core
  	(:require 
  		[reagent.core :as r]

		[yizhackclj.db :as db]
		[yizhackclj.fixtures :as fixtures]

		[yizhackclj.state :as state]

		[yizhackclj.components.keyboard :as keyboard-components]
	) 
)

(enable-console-print!)


(defn ^:export initialize [keyboard-json-string editing]
 
	(db/deserialize-keyboard keyboard-json-string)

	(reset! state/edit-mode editing)


	(r/render-component [keyboard-components/keyboard] (.getElementById js/document "app"))
)

(initialize fixtures/keyboard true) 

 
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)