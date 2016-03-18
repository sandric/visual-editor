(ns yizhackclj.keyboard-components
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db :as db :refer [conn]]

  			[yizhackclj.control-components :as control-components]
  			[yizhackclj.visual-components :as visual-components]
  			[yizhackclj.textual-components :as textual-components]
  	)
)


(defn keyboard-view []

	(let [layer-ids @(p/q conn '[:find [?layer-id ...] :where [?layer-id :layer/name]])]
			
		[:div.keyboard

			[control-components/control]

			[visual-components/visual layer-ids]

			[textual-components/textual layer-ids]
		]
	)
)