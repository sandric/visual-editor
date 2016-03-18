(ns yizhackclj.components.keyboard
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db.keyboard :as db :refer [conn]]

        [yizhackclj.utils :as utils]

  			[yizhackclj.components.control :as control-components]
  			[yizhackclj.components.visual :as visual-components]
  			[yizhackclj.components.textual :as textual-components]
  	)
)
  

(defn keyboard-view []

	(let [layer-ids (db/layer-ids)]

    (println "lala")
			 
		[:div.keyboard

			[control-components/control]

			[visual-components/visual layer-ids]

			[textual-components/textual layer-ids]
		]
	)
)