(ns yizhackclj.components
  (:require [reagent.core :as r]
  			[posh.core :as p]
  			[yizhackclj.db :as db :refer [conn]]
  			[cognitect.transit :as t]
  			[dommy.core :as dommy :refer-macros [sel sel1]]))


(def edit-mode (r/atom true))


(def selected-keyboard-style (r/atom "visual"))


(def hovered-virtual-id (r/atom 0))
(def selected-virtual-id (r/atom 0))

(def hovered-button-id (r/atom nil))
(def selected-button-id (r/atom nil))

(defn color-for-functor-button [functor]
	(let [virtual-id 	(db/parse-layer functor)
		  layer 		(db/layer-by-virtual-id virtual-id)]

		  (:layer/color layer)
	)
)

(defn get-button-color [value selected hovered]
	(cond
		selected "aquamarine" 
		hovered  "lavender" 
		(.startsWith value "LN_") (color-for-functor-button value)
		(> (count value) 1) "grey"
		
		:else "gainsboro"
	)
)


(defn button-view [button-id]

	(let [hovered 	(r/atom false)]

		(fn []
			(let [button    @(p/pull conn '[*] button-id)
				  row       (:button/row button)
				  column    (:button/column button)
				  value     (:button/value button)]

				(when @hovered (reset! hovered-virtual-id (db/parse-layer value)))

				[:div.button 
					{
						:style {
							:background-color (get-button-color value (= @selected-button-id button-id) @hovered)

							:opacity (if @hovered 0.5 1)

							:left (if (> column 6) (+ (* column 55) 100) (* column 55))
							:top  (* (dec row) 55)
						}

						:on-click (fn [e] (when @edit-mode (reset! selected-button-id button-id) (.stopPropagation e)))

						:on-mouse-over #(when @edit-mode(reset! hovered true))

						:on-mouse-out  #(when @edit-mode (reset! hovered false))

					}
					
					[:pre value] 
				]
			)
		)
	)
)

(defn button-thumb-view [button-id]

	(let [button    @(p/pull conn '[*] button-id)
		  row       (:button/row button)
		  column    (:button/column button)
		  value     (:button/value button)]

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



(defn layer-name-input [layer-id name]
	[:input 
		{
			:type "text" 
			:maxLength 8
			:value name
            
            :on-change (fn [e]
            	(p/transact! conn [[:db/add layer-id :layer/name (-> e .-target .-value)]])
            )
		}
	] 
)

(defn layer-color-input [layer-id color]
	[:input 
		{
			:type "text" 
			:maxLength 8
			:value color
            
            :on-change (fn [e]
            	(p/transact! conn [[:db/add layer-id :layer/color (-> e .-target .-value)]])
            )
		}
	] 
)



(defn layer-view [layer-id]
	(let [layer 		@(p/pull conn '[*] layer-id)
		  virtual-id 	(:layer/virtual-id layer)
		  name    		(:layer/name layer)
		  color    		(:layer/color layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		
		[:div.layer 
			{
				:class (when (= @selected-virtual-id virtual-id) "selected")
				:style {
					:background-color color 
				}
			}

			[:div.control

				(when @edit-mode
					[:button 
						{
							:on-click #(db/remove-layer! conn layer-id virtual-id)
						}
						"remove"])
				(when @edit-mode
					[:button 
						{
							:on-click #(db/clone-layer! conn layer-id name)
						}
						"clone"])
				(when @edit-mode
					[:button 
						{
							:on-click #(doseq [button-id buttons-ids] (p/transact! conn [[:db/add button-id :button/value ""]]))
						}
						"clear"])

				(if @edit-mode
					[:form
						[layer-name-input layer-id name]
						[layer-color-input layer-id color]
					]
					[:pre name]
				)
			]

			[:div.layout
				(for [button-id buttons-ids]
					^{:key button-id} [button-view button-id]
				)
			]
		]
	)
)


(defn layer-thumb-view [layer-id]

	(let [layer 		@(p/pull conn '[*] layer-id)
		  virtual-id 	(:layer/virtual-id layer)
		  name    		(:layer/name layer)
		  color    		(:layer/color layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		[:div.layer.thumb 
			{
				:class (str (when (= @selected-virtual-id virtual-id) "selected") (when (= @hovered-virtual-id virtual-id) " hovered"))

				:style {
					:background-color color 
				}

				:on-click #(reset! selected-virtual-id virtual-id)
			}

			[:div.control (str "ID: " virtual-id " Name: " name)]

			[:div.layout
				(for [button-id buttons-ids]
					^{:key button-id} [button-thumb-view button-id]
				)
			]
		]
	)
)


(defn button-value-input [button-id value]
	[:input 
		{
			:type "text" 
			:maxLength 4
			:value value 
            
            :on-change (fn [e] 
            	(set! (.-value (sel1 :#layers_select)) 0)
            	(set! (.-value (sel1 :#control_select)) 0)
            	(p/transact! conn [[:db/add button-id :button/value (-> e .-target .-value)]])
            )
		}
	] 
)

(defn button-command-input [button-id command]
	[:input 
		{
			:type "text" 
			:maxLength 8
			:value command 
            
            :on-change (fn [e]
            	(set! (.-value (sel1 :#layers_select)) 0)
            	(set! (.-value (sel1 :#control_select)) 0)
            	(p/transact! conn [[:db/add button-id :button/command (-> e .-target .-value)]])
            )
		}
	] 
)


(defn keyboard-view []

	(let [layer-ids @(p/q conn '[:find [?layer-id ...] :where [?layer-id :layer/name]])]
			
		[:div.keyboard
			[:div.control 
				[:button 
					{
						:on-click (fn [] 
							(reset! edit-mode false)
							(.setOption js/editor "readOnly" true)
						)
					}
					"Switch to viewing mode"]
				[:button 
					{
						:on-click (fn []
							(reset! edit-mode true)
							(.setOption js/editor "readOnly" false)
						)
					}
					"Switch to editing mode"]
				[:button 
					{
						:on-click (fn []
							
							(db/remove-keyboard)

							(db/deserialize-keyboard (.getValue js/editor))


							(dommy/remove-class! (sel1 :#text) :active)

							(reset! selected-keyboard-style "visual")
						)
					}
					"Switch to visual"]
				[:button 
					{
						:on-click (fn []

							(.setValue js/editor (db/serialize-keyboard))

							
							(dommy/add-class! (sel1 :#text) :active)

							(reset! selected-keyboard-style "textual")
						)
					}
					"Switch to textual"]

				(when @edit-mode
					[:button 
						{
							:on-click #(db/populate-empty-layout)
						}
						"new EMPTY"])
				(when @edit-mode
					[:button 
						{
							:on-click #(db/populate-qwerty-layout)
						}
						"new QWERTY"])
			]

			[:div.visual
				{
					:class (when (= @selected-keyboard-style "visual") "active")

					:on-click #(reset! selected-button-id nil)
				}
				
				[:div.thumbails
					(for [layer-id layer-ids]
						^{:key layer-id} [layer-thumb-view layer-id]
					)
				]
				
				(for[layer-id layer-ids]
					^{:key layer-id} [layer-view layer-id]
				)
			]
			
			[:div.edit
				(when @selected-button-id

					(if @edit-mode

						(let [button  @(p/pull conn '[*] @selected-button-id)
						  	row       (:button/row button)
						  	column    (:button/column button)
						  	value     (:button/value button)]

						  	[:form
						  		[button-value-input @selected-button-id value]
						  		[button-command-input @selected-button-id "Command:::"]

						  		[:select#layers_select 
						  			{
						  				:on-change (fn [e] 
						  					(when (not= (-> e .-target .-value) 0)
						  						(set! (.-value (sel1 :#control_select)) 0)
						  						(p/transact! conn [[:db/add @selected-button-id :button/value (str "LN_" (-> e .-target .-value))]])
						  					)
						  				)
						  			}  

						  			[:option {:value 0} "Select layer transition"] 

						  			(for [layer-id layer-ids]
						  				(let [layer @(p/pull conn '[*] layer-id)
											virtual-id 	(:layer/virtual-id layer)
											name 		(:layer/name layer)]

											[:option {:value virtual-id} name]  
										)
									)
								]

								[:select#control_select 
						  			{
						  				:on-change (fn [e] 
						  					(when (not= (-> e .-target .-value) 0)
						  						(set! (.-value (sel1 :#layers_select)) 0)
						  						(p/transact! conn [[:db/add @selected-button-id :button/value (-> e .-target .-value)]])
						  					)
						  				)
						  			}  

						  			[:option {:value 0} "Select control button"] 

						  			[:option {:value "LSHIFT"} "Left Shift"]
						  			[:option {:value "RSHIFT"} "Right Shift"]

						  			[:option {:value "LCTRL"} "Left Control"]
						  			[:option {:value "RCTRL"} "Right Control"]

						  			[:option {:value "LALT"} "Left Alt"] 
						  			[:option {:value "RALT"} "Right Alt"]  

						  			[:option {:value "SPC"} "Space"] 
						  			[:option {:value "BKSPC"} "Backspace"]
						  			[:option {:value "TAB"} "Tab"] 
						  			[:option {:value "ENTR"} "Enter"]
									[:option {:value "ESC"} "Escape"]

									[:option {:value "UP"} "Arrow Up"]
									[:option {:value "DOWN"} "Arrow Down"]
									[:option {:value "LEFT"} "Arrow Left"]
									[:option {:value "RIGHT"} "Arrow Right"]					  			    
								]

								[:pre row]
								[:pre column]
						  	]
						)
					
						(let [button  @(p/pull conn '[*] @selected-button-id)
						  	row       (:button/row button)
						  	column    (:button/column button)
						  	value     (:button/value button)
						  	command   (:button/command button)]

						  	[:div

								[:pre value]
								[:pre command]
							  	[:pre row]
								[:pre column]

								[:pre (first @(p/q conn '[ :find [?layer-name] :where [?layer :layer/virtual-id 2][?layer :layer/name ?layer-name]]))]
							]
						)
					)
				)
			]
		]
	)
)

(defn ^:export initialize [keyboard-data]
	(db/deserialize-keyboard keyboard-data)
	(p/posh! conn)
	(r/render-component [keyboard-view] (.getElementById js/document "app"))
)