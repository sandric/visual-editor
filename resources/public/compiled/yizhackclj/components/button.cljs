(ns yizhackclj.components.button
  	(:require 
		[reagent.core :as r]

		[yizhackclj.db :as db]

		[yizhackclj.state :as state]
  	)
)


(defn get-button-color [value selected hovered]

	(cond
		selected "aquamarine" 
		hovered  "lavender"
		(db/parse-layer value) (:color (db/parse-layer value))
		(> (count value) 1) "grey"
		
		:else "gainsboro"
	)
)



(defn thumb [button]

	(let [row       (:row button)
		  column    (:column button)
		  value     (:value button)]

		[:div.button.thumb 
			{
				:style {
					:background-color (get-button-color value false false)

					:left (if (> column 6) (+ (* column 11) 20) (* column 11))
					:top  (* (dec row) 11)
				}
			}
			(when (= (count value) 1) value)
		]
	)
)

(defn button [button]

	(let [row       (:row button)
		  column    (:column button)
		  value     (:value button)]

		(when (= button @state/hovered-button) (reset! state/hovered-layer-id (:id (db/parse-layer value))))

		[:div.button 
			{
				:style {
					:background-color 
						(get-button-color 
							value 
							(= @state/selected-button button) 
							(= @state/hovered-button button)
						)

					:opacity (if (= button @state/hovered-button) 0.5 1)

					:left (if (> column 6) (+ (* column 55) 100) (* column 55))
					:top  (* (dec row) 55)
				}

				:on-click (fn [e] (when @state/edit-mode (reset! state/selected-button button) (.stopPropagation e)))

				:on-mouse-over #(when @state/edit-mode(reset! state/hovered-button button))

				:on-mouse-out  #(when @state/edit-mode (reset! state/hovered-button button))

			}
			
			[:pre value]
		]
	)
)