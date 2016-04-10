(ns yizhackclj.core
  	(:require 
  		[reagent.core :as r]
		[posh.core :as p]
		[datascript.core :as d]

		[yizhackclj.state :as state]

		[yizhackclj.db.keyboard :as db :refer [conn]]
		[yizhackclj.db.serialization :as db-serialization]
		[yizhackclj.db.fixtures :as db-fixtures]

		[yizhackclj.components.keyboard :as keyboard-components]
	) 
)

(enable-console-print!)


(defn ^:export initialize [keyboard-data editing]

	(db/create-db)

	(reset! state/keyboard-data keyboard-data)

	(p/posh! conn)

 
	(db-serialization/deserialize-keyboard)

	(reset! state/edit-mode editing)


	(r/render-component [keyboard-components/keyboard-view] (.getElementById js/document "app"))
)

(initialize db-fixtures/fixture-keyboard true) 

 
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)