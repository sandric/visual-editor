(ns yizhackclj.components.buttom
  	(:require 
		[reagent.core :as r]
		[dommy.core :as dommy :refer-macros [sel sel1]]

		[yizhackclj.db :as db]

		[yizhackclj.state :as state]
  	)
)


; (defn button-value-input [button-id value]

; 	[:input 
; 		{
; 			:type "text" 
; 			:maxLength 4
; 			:value value 
            
;             :on-change (fn [e] 
;             	(set! (.-value (sel1 :#layers_select)) 0)
;             	(set! (.-value (sel1 :#control_select)) 0)
;             	(p/transact! conn [[:db/add button-id :button/value (-> e .-target .-value)]])
;             )
; 		}
; 	] 
; )


; (defn button-functor-select [layer-ids]

; 	[:select#layers_select 
; 		{
; 			:on-change (fn [e] 
; 				(when (not= (-> e .-target .-value) 0)
; 					(set! (.-value (sel1 :#control_select)) 0)
; 					(p/transact! conn [[:db/add @state/selected-button-id :button/value (str "LN_" (-> e .-target .-value))]])
; 				)
; 			)
; 		}  

; 		[:option {:value 0} "Select layer transition"] 

; 		(for [layer-id layer-ids]
; 			(let [layer @(p/pull conn '[*] layer-id)
				
; 				  vid 		(:layer/vid layer)
; 				  name 		(:layer/name layer)]

; 				[:option {:value vid} name]  
; 			)
; 		)
; 	]
; )


; (defn button-control-select [layer-ids]
	
; 	[:select#control_select 
; 			{
; 				:on-change (fn [e] 
; 					(when (not= (-> e .-target .-value) 0)
; 						(set! (.-value (sel1 :#layers_select)) 0)
; 						(p/transact! conn [[:db/add @state/selected-button-id :button/value (-> e .-target .-value)]])
; 					)
; 				)
; 			}  

; 			[:option {:value 0} "Select control button"] 

; 			[:option {:value "LSHIFT"} "Left Shift"]
; 			[:option {:value "RSHIFT"} "Right Shift"]

; 			[:option {:value "LCTRL"} "Left Control"]
; 			[:option {:value "RCTRL"} "Right Control"]

; 			[:option {:value "LALT"} "Left Alt"] 
; 			[:option {:value "RALT"} "Right Alt"]  

; 			[:option {:value "SPC"} "Space"] 
; 			[:option {:value "BKSPC"} "Backspace"]
; 			[:option {:value "TAB"} "Tab"] 
; 			[:option {:value "ENTR"} "Enter"]
; 			[:option {:value "ESC"} "Escape"]

; 			[:option {:value "UP"} "Arrow Up"]
; 			[:option {:value "DOWN"} "Arrow Down"]
; 			[:option {:value "LEFT"} "Arrow Left"]
; 			[:option {:value "RIGHT"} "Arrow Right"]					  			    
; 	]
; )


(defn get-button-color [value selected hovered]

	(cond
		selected "aquamarine" 
		hovered  "lavender"
		(.startsWith value "LN_") (:color (db/parse-layer value))
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