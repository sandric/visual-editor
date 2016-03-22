(ns yizhackclj.components.autocomplete
  	(:require 
		[reagent.core :as r]
		[posh.core :as p]
		[dommy.core :as dommy :refer-macros [sel sel1]]

		[yizhackclj.state :as state]

		[yizhackclj.db.autocomplete :as db-autocomplete]
	)
)


(defn autocomplete-input []

	[:input 
		{
			:type "text"

			:id "autocomplete" 
			 
            :on-change (fn [e]
            	(db-autocomplete/get-layers-from-server (-> e .-target .-value))
            )
		}
	] 
)

(defn autocomplete-results []

	[:div.results
		(for [result @state/autocomplete-results]
			[:a 
				{
					:on-click (fn [e]
						(println "clicked")
						(set! (.-value (sel1 :#autocomplete)) "")
						(reset! state/autocomplete-results [])
						(db-autocomplete/get-layer-from-server result)
					)
				}

				result
			]
		)
	] 
)

(defn autocomplete []
	[:div.autocomplete
		[autocomplete-input]
		[autocomplete-results]
	]
)