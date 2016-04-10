(ns visual-editor.components.button
  	(:require 
		[reagent.core :as r]

		[visual-editor.db :as db]
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

		(when (= button @db/hovered-button) (reset! db/hovered-layer-id (:id (db/parse-layer value))))

		[:div.button 
			{
				:style {
					:background-color 
						(get-button-color 
							value 
							(= @db/selected-button button) 
							(= @db/hovered-button button)
						)

					:opacity (if (= button @db/hovered-button) 0.5 1)

					:left (if (> column 6) (+ (* column 55) 100) (* column 55))
					:top  (* (dec row) 55)
				}

				:on-click (fn [e] (when @db/edit-mode (reset! db/selected-button button) (.stopPropagation e)))

				:on-mouse-over #(when @db/edit-mode(reset! db/hovered-button button))

				:on-mouse-out  #(when @db/edit-mode (reset! db/hovered-button button))

			}
			
			[:pre value]
		]
	)
)