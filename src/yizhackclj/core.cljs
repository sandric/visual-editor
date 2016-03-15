(ns yizhackclj.core
  (:require [reagent.core :as r]
  			[posh.core :as p]
  			[datascript.core :as d]
  			[yizhackclj.db :as db :refer [conn]]
  			[yizhackclj.components :as view]))

(enable-console-print!)


;(view/initialize db/fixture-keyboard)


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
