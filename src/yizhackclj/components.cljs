(ns yizhackclj.components
  (:require [reagent.core :as r]
  			[posh.core :as p]
  			[yizhackclj.db :as db :refer [conn]]
  			[cognitect.transit :as t]))



(def hovered-virtual-id (r/atom 0))
(def selected-virtual-id (r/atom 0))

(def hovered-button-id (r/atom 0))
(def selected-hovered-id (r/atom 0))

(defn get-button-color [value selected hovered]
	(cond
		selected "aquamarine" 
		hovered  "lavender" 
		(= value "ALT") "red"
		(= value "CTRL") "blue"
		(= value "BKSP") "yellow"
		(= value "SPC") "black"
		(= value "ENTR") "magenta"
		(= value "TAB") "white"
		(.startsWith value "LN_") "greenyellow"
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
							:background-color (get-button-color value (= @selected-hovered-id button-id) @hovered)

							:opacity (if @hovered 0.5 1)

							:left (if (> column 6) (+ (* column 55) 100) (* column 55))
							:top  (* (dec row) 55)
						}

						:on-click #(reset! selected-hovered-id button-id)

						:on-mouse-over #(reset! hovered true)

						:on-mouse-out  #(reset! hovered false)

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



(defn layer-view [layer-id]

	(let [layer 		@(p/pull conn '[*] layer-id)
		  virtual-id 	(:layer/virtual-id layer)
		  name    		(:layer/name layer)
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
			}

			[:div.control

				[:button 
					{
						:on-click #(db/remove-layer! conn layer-id virtual-id)
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

(defn keyboard-view []

	(let [layer-ids @(p/q conn '[:find [?layer-id ...] :where [?layer-id :layer/name]])]
		[:div.keyboard
			[:div.control 
				[:button 
					{
						:on-click #(db/populate-empty-layout)
					}
					"new EMPTY"]
				[:button 
					{
						:on-click #(db/populate-qwerty-layout)
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