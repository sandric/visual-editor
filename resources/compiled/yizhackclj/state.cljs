(ns yizhackclj.state
  	(:require 
  		[reagent.core :as r]
  	)
)

(def keyboard-data (r/atom ""))

(def edit-mode (r/atom true))

(def hovered-vid (r/atom 0))
(def selected-vid (r/atom 0))

(def hovered-button-id (r/atom nil))
(def selected-button-id (r/atom nil))