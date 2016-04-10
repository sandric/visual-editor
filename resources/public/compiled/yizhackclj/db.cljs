(ns yizhackclj.db
	(:require   
		[reagent.core :as r]

		[yizhackclj.fixtures :as fixtures]
	)
)


(defn to-json [object]
  	(.stringify js/JSON (clj->js object) nil 2)
)

(defn parse-json [json-string]
	(js->clj (JSON.parse json-string) :keywordize-keys true)
)



(def layer-head (atom 0))

(defn layer-head-inc [] (swap! layer-head inc))
(defn layer-head-dec [] (swap! layer-head dec))


(def layers (r/atom []))

(def buttons (r/atom []))


(defn remove-keyboard []

	(reset! layers [])
	(reset! buttons [])

	(reset! layer-head 0)
)


(defn layer-ids []
	(take @layer-head (range 1 (+ @layer-head 1)))
)

(defn layer-by-id [layer-id]
	(nth @layers (- layer-id 1))
)

(defn layer-update [layer-updatable updates]

	(swap! layers 
		(fn [layers] 
			(map 
				(fn [layer]				
					(if (= layer layer-updatable) 	
						(merge layer updates)
						layer
					)
				)
				layers
			)
		)
	)
)

(defn buttons-by-layer-id [layer-id]

	(filter 
		(fn [button] 
			(= (:layer-id button) layer-id)
		) 
		@buttons
	)
)

(defn button [layer-id row column]

	(first 
		(filter 
			(fn [button] 
				(and 
					(= (:layer-id button) layer-id)
					(= (:row button) row)
					(= (:column button) column))
			) 
			@buttons
		)
	)
)

(defn button-update [button-updatable updates]

	(swap! buttons 
		(fn [buttons] 
			(map
				(fn [button]				
					(if (= button button-updatable) 	
						(merge button updates)
						button
					)
				) 
				buttons
			)
		)
	)
)


(defn clone-layer [layer-id]

	(let [  layer 	(layer-by-id layer-id)
			layer-buttons (buttons-by-layer-id layer-id)]

		(layer-head-inc)

		(swap! layers conj 
			{
				:id @layer-head
				:name (str (:name layer) "'s clone")
				:color (:color layer)
			}
		)
			
		(doseq [button layer-buttons] 
			(swap! buttons conj
				{
					:row (:row button)
					:column (:column button)
					:value (:value button)
					:layer-id @layer-head
				}
			)
		)
	)
)


(defn remove-layer [layer-id]

	(layer-head-dec)

	(swap! layers
		(fn [layers]
			(remove 
				(fn [layer] 
					(= (:id layer) layer-id)
				)
				layers
			)
		)
	)

	(swap! layers
		(fn [layers]
			(map 
				(fn [layer]
					(cond
						(< (:id layer) layer-id) layer
						(> (:id layer) layer-id) (merge layer {:id (- (:id layer) 1)})
					)
				)
				layers
			)
		)
	)

	(swap! buttons
		(fn [buttons]
			(remove 
				(fn [button] 
					(= (:layer-id button) layer-id)
				)
				buttons
			)
		)
	)

	(swap! buttons
		(fn [buttons]
			(map 
				(fn [button] 
					(cond
						(< (:layer-id button) layer-id) button
						(> (:layer-id button) layer-id) (merge button {:layer-id (- (:layer-id button) 1)})
					)
				)
				buttons
			)
		)
	)
)


(defn clear-layer [layer-id]

	(swap! buttons 
		(fn [buttons] 
			(map 
				(fn [button]
					(if (= (:layer-id button) layer-id) 
						(merge button {:value ""})
						button
					)
				)
				buttons
			)
		)
	)
)




(defn ^:export deserialize-layer [layer-json-string]

	(let [layer-json (parse-json layer-json-string)]
		
		(layer-head-inc)

		(swap! layers conj 
			{
				:id @layer-head
				:name (:name layer-json)
				:color (:color layer-json)
			}
		)

		(doseq [button (:layout layer-json)]
			(swap! buttons conj 
				{
					:row (:row button)
					:column (:column button)
					:value (:value button)
					:layer-id @layer-head
				}
			)
		)
	)
)


(defn ^:export deserialize-keyboard [keyboard-json-string]

	(remove-keyboard)

	(let [keyboard-json (parse-json keyboard-json-string)]

		(doseq [layer-json (:layers keyboard-json)]
		
			(deserialize-layer (to-json layer-json))
		)
	)
)


(defn ^:export serialize-keyboard []
	(to-json (@buttons))
)


(defn populate-fixture-keyboard []
	(deserialize-keyboard fixtures/keyboard)
)


(defn parse-layer [value]
	(when (.startsWith value "LN_")
		(when-let [layer-id (js/parseInt (subs value 3))]
			(when 
				(and 
					(not (js/isNaN layer-id))
					(<= layer-id @layer-head)
					(> layer-id 0)
				)

				(layer-by-id layer-id)
			)
		)
	)
)