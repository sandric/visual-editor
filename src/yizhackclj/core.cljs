(ns yizhackclj.core
  	(:require 
  		[reagent.core :as r]
		[posh.core :as p]
		[datascript.core :as d]

		[yizhackclj.db.keyboard :as db :refer [conn]]
		[yizhackclj.db.serialization :as db-serialization]
		[yizhackclj.db.fixtures :as db-fixtures]

		[yizhackclj.components.keyboard :as keyboard-components]
	) 
)

(enable-console-print!)


(defn ^:export initialize [keyboard-data]

	(db-serialization/deserialize-keyboard keyboard-data)
	(p/posh! conn)
	(r/render-component [keyboard-components/keyboard-view] (.getElementById js/document "app"))
)

;(initialize db-fixtures/fixture-keyboard) 

 
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)