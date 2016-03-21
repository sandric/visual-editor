(ns yizhackclj.db.autocomplete
	(:require
		[ajax.core :refer [GET POST]]
		[reagent.core :as r]

		[yizhackclj.utils :as utils]

		[yizhackclj.db.serialization :as db-serialization]
	)
)


(def clone-layer-autocomplete-results (r/atom []))


(defn on-get-layers-request-handler [response] 
	(reset! clone-layer-autocomplete-results (utils/parse-json response))
)

(defn on-get-layers-request-error-handler [{:keys [status status-text]}]
  (println (str "Error while getting layers automoplete: " status " " status-text))
)

(defn get-layers-from-server [query]

	(GET (str "http://localhost:3000/api/layers?q=" query) {
		:response-format :raw 
		:handler on-get-layers-request-handler 
		:error-handler on-get-layers-request-error-handler
		})
)


(defn on-get-layer-request-handler [response] 
	(db-serialization/deserialize-layer response)
)

(defn on-get-layer-request-error-handler [{:keys [status status-text]}]
  (println (str "Error while getting layer: " status " " status-text))
)

(defn get-layer-from-server [path]
 
	(GET (str "http://localhost:3000/" path) {
		:response-format :raw 
		:handler on-get-layer-request-handler 
		:error-handler on-get-layer-request-error-handler
		})
)