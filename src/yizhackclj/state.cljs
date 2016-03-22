(ns yizhackclj.state
  	(:require 
  		[reagent.core :as r]
  	)
)


(def edit-mode (r/atom true))

(def selected-keyboard-style (r/atom "visual"))

(def autocomplete-results (r/atom []))


(def initial-keyboard-data (r/atom ""))
(def keyboard-data (r/atom ""))


(def hovered-vid (r/atom 0))
(def selected-vid (r/atom 0))

(def hovered-button-id (r/atom nil))
(def selected-button-id (r/atom nil))