(ns yizhackclj.core
  (:require [reagent.core :as r]
  			[posh.core :as p]
  			[datascript.core :as d]
  			[yizhackclj.db :as db :refer [conn]]
  			[yizhackclj.components :as view]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")


(db/populate-fixture-keyboard)

(p/posh! conn)

(view/initialize)


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
