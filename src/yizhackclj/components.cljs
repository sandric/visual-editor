(ns yizhackclj.components
  (:require [reagent.core :as r]
  			[posh.core :as p]
  			[yizhackclj.db :as db :refer [conn]]))





(defn get-button-color [value selected]
	(if selected
		"aquamarine"
		(cond
			(= value "ALT") "red"
			(= value "CTRL") "blue"
			(= value "BKSP") "yellow"
			(= value "SPC") "black"
			(= value "ENTR") "magenta"
			(= value "TAB") "white"
			:else "gainsboro"
		)
	)
)


(defn button-view [button-id]

	(let [
		  button    @(p/pull conn '[*] button-id)
		  row       (:button/row button)
		  column    (:button/column button)
		  value     (:button/value button)
		  selected  (:button/selected button)
		  ]
		[:div.button 
			{
				:style {
					:background-color (get-button-color value selected)

					:left (if (> column 6) (+ (* column 55) 100) (* column 55))
					:top  (* (dec row) 55)
				}

				:on-click #(db/select-button! button-id selected)
			}
			
			[:input 
				{
					:type "text" 
					:maxLength 4
					:value value 
	                
	                :on-change #(p/transact! conn [[:db/add button-id :button/value (-> % .-target .-value)]])
				}
			] 
		]
	)
)

(defn button-thumb-view [button-id]

	(let [
		  button    @(p/pull conn '[*] button-id)
		  row       (:button/row button)
		  column    (:button/column button)
		  value     (:button/value button)
		  selected  (:button/selected button)
		  ]
		[:div.button.thumb 
			{
				:style {
					:background-color (get-button-color value selected)

					:left (if (> column 6) (+ (* column 11) 20) (* column 11))
					:top  (* (dec row) 11)
				}
			}
			(when (= (count value) 1) value)
		]
	)
)



(defn layer-view [layer-id]
	(let [layer 		@(p/pull conn '[*] layer-id)
		  virtual-id 	(:layer/virtual-id layer)
		  name    		(:layer/name layer)
		  selected 		(:layer/selected layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		[:div.layer 
			{
				:class (when selected "selected")
			}

			[:div.control

				[:button 
					{
						:on-click #(db/remove-layer! conn layer-id)
					}
					"remove"]
				[:button 
					{
						:on-click #(db/clone-layer! conn layer-id name)
					}
					"clone"]
				[:button 
					{
						:on-click #(doseq [button-id buttons-ids] (p/transact! conn [[:db/add button-id :button/value ""]]))
					}
					"clear"]
				(str "ID: " virtual-id " Name: " name)
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
		  selected 		(:layer/selected layer)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  								:in $ ?layer-id 
		  								:where 
		  									[?button :button/value] 
		  									[?button :layer ?layer-id]  
		  							] 
		  							layer-id)]
		[:div.layer.thumb 
			{
				:class (when selected "selected")

				:on-click #(db/select-layer! layer-id selected)
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

(defn keyboard-view []
	(let [layer-ids @(p/q conn '[:find [?layer-id ...] :where [?layer-id :layer/name]])]
		[:div.keyboard
			[:div.control 
				[:button 
					{
						:on-click #(db/populate-with-empty-layout! conn "New empty layer")
					}
					"new EMPTY"]
				[:button 
					{
						:on-click #(db/populate-with-qwerty-layout! conn "New QWERTY layer")
					}
					"new QWERTY"]
				"My Keyboard"
			]

			[:div.thumbails
				(for [layer-id layer-ids]
					^{:key layer-id} [layer-thumb-view layer-id]
				)
			]
			
			(for [layer-id layer-ids]
				^{:key layer-id} [layer-view layer-id]
			)
		]
	)
)

(defn initialize []
	(r/render-component [keyboard-view] (.getElementById js/document "app"))
)