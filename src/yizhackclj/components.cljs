(ns yizhackclj.components
  	(:require 
  			[reagent.core :as r]
  			[posh.core :as p]
  			[dommy.core :as dommy :refer-macros [sel sel1]]

  			[yizhackclj.db :as db :refer [conn]]

  			[yizhackclj.keyboard-components :as keyboard-components]
  	)
)


(defn ^:export initialize [keyboard-data]

	(db/deserialize-keyboard keyboard-data)
	(p/posh! conn)
	(r/render-component [keyboard-components/keyboard-view] (.getElementById js/document "app"))
)