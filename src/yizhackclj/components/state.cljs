(ns yizhackclj.components.state
  	(:require 
  		[reagent.core :as r]
  	)
  )



(def selected-keyboard-style (r/atom "visual"))

(def edit-mode (r/atom true))

(def commiting (r/atom false))


(def hovered-vid (r/atom 0))
(def selected-vid (r/atom 0))

(def hovered-button-id (r/atom nil))
(def selected-button-id (r/atom nil))