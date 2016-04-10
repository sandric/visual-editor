(ns yizhackclj.state
  	(:require 
  		[reagent.core :as r]
  	)
)

(def edit-mode (r/atom true))

(def hovered-layer-id (r/atom nil))
(def selected-layer-id (r/atom 1))

(def hovered-button (r/atom nil))
(def selected-button (r/atom nil))