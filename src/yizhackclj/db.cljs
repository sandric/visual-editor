(ns yizhackclj.db
	(:require   [datascript.core :as d]
				[posh.core :as p]))


(defn new-entity! [conn varmap]
  ((:tempids (d/transact! conn [(merge varmap {:db/id -1})])) -1))


(def tempid (let [n (atom 0)] (fn [] (swap! n dec))))


(def virtual-layer-id (atom 0))

(defn inc-layer-id [] (swap! virtual-layer-id inc) @virtual-layer-id)
(defn dec-layer-id [] (swap! virtual-layer-id dec) @virtual-layer-id)

(def schema 
	{
		:layer/button {:db/cardinality :db.cardinality/many}
	}
)

(def conn (d/create-conn schema))

(defn populate! [conn]
  (let [layer-first (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name "Layer 1" :layer/selected true})
  		layer-second (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name "Layer 2" :layer/selected false})]
    (d/transact!
    	conn
			[
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 1
			       	:button/value "CTRL"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 2
			       	:button/value "Q"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 3
			       	:button/value "W"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 4
			       	:button/value "E"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 5
			       	:button/value "R"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 6
			       	:button/value "T"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 7
			       	:button/value "Y"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 8
			       	:button/value "U"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 9
			       	:button/value "I"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 10
			       	:button/value "O"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 11
			       	:button/value "P"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 12
			       	:button/value "CTRL"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 1
			       	:button/value "ALT"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 2
			       	:button/value "A"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 3
			       	:button/value "S"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 4
			       	:button/value "D"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 5
			       	:button/value "F"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 6
			       	:button/value "G"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 7
			       	:button/value "H"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 8
			       	:button/value "J"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 9
			       	:button/value "K"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 10
			       	:button/value "L"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 11
			       	:button/value "L"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 12
			       	:button/value "ALT"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 2
			       	:button/value "Z"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 3
			       	:button/value "X"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 4
			       	:button/value "C"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 5
			       	:button/value "V"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 6
			       	:button/value "B"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 7
			       	:button/value "N"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 8
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 9
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 10
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 11
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-first
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 5
			       	:button/value "BKSP"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 6
			       	:button/value "SPC"
			       	:button/selected false
			       	:layer layer-first
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 7
			       	:button/value "ENTR"
			       	:button/selected false
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 8
			       	:button/value "TAB"
			       	:button/selected false
			       	:layer layer-first
			  	}








			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 1
			       	:button/value "CTRL"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 2
			       	:button/value "Q"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 3
			       	:button/value "W"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 4
			       	:button/value "E"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 5
			       	:button/value "R"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 6
			       	:button/value "T"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 7
			       	:button/value "Y"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 8
			       	:button/value "U"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 9
			       	:button/value "I"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 10
			       	:button/value "O"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 11
			       	:button/value "P"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 12
			       	:button/value "CTRL"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 1
			       	:button/value "ALT"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 2
			       	:button/value "A"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 3
			       	:button/value "S"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 4
			       	:button/value "D"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 5
			       	:button/value "F"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 6
			       	:button/value "G"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 7
			       	:button/value "H"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 8
			       	:button/value "J"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 9
			       	:button/value "K"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 10
			       	:button/value "L"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 11
			       	:button/value "L"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 12
			       	:button/value "ALT"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 2
			       	:button/value "Z"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 3
			       	:button/value "X"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 4
			       	:button/value "C"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 5
			       	:button/value "V"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 6
			       	:button/value "B"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 7
			       	:button/value "N"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 8
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 9
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 10
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 11
			       	:button/value "M"
			       	:button/selected false
			       	:layer layer-second
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 5
			       	:button/value "BKSP"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 6
			       	:button/value "SPC"
			       	:button/selected false
			       	:layer layer-second
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 7
			       	:button/value "ENTR"
			       	:button/selected false
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 8
			       	:button/value "TAB"
			       	:button/selected false
			       	:layer layer-second
			  	}
      		]
    )
  )
)



(defn deselect-buttons! []
	(let [selected-buttons @(p/q conn '[ :find [?button ...] :where [?button :button/selected true]])]
		(doseq [selected-button selected-buttons]
			(p/transact! conn [[:db/add selected-button :button/selected false]]))
	)
)


(defn select-button! [button-id selected]
	(deselect-buttons!)
	(p/transact! conn [[:db/add button-id :button/selected (not selected)]])
)


(defn deselect-layers! []
	(let [selected-layers @(p/q conn '[ :find [?layer ...] :where [?layer :layer/selected true]])]
		(doseq [selected-layer selected-layers]
			(p/transact! conn [[:db/add selected-layer :layer/selected false]]))
	)
)

(defn select-layer! [layer-id selected]
	(when (not selected)
		(deselect-layers!)
		(p/transact! conn [[:db/add layer-id :layer/selected true]])
	)
)


(defn populate-with-qwerty-layout! [conn layer-name]
	(deselect-buttons!)
  	(let [layer (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name layer-name :layer/selected false})]
	    (d/transact!
	    	conn
				[
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 1
				       	:button/value "CTRL"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 2
				       	:button/value "Q"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 3
				       	:button/value "W"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 4
				       	:button/value "E"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 5
				       	:button/value "R"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 6
				       	:button/value "T"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 7
				       	:button/value "Y"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 8
				       	:button/value "U"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 9
				       	:button/value "I"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 10
				       	:button/value "O"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 11
				       	:button/value "P"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 12
				       	:button/value "CTRL"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 1
				       	:button/value "ALT"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 2
				       	:button/value "A"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 3
				       	:button/value "S"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 4
				       	:button/value "D"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 5
				       	:button/value "F"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 6
				       	:button/value "G"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 7
				       	:button/value "H"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 8
				       	:button/value "J"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 9
				       	:button/value "K"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 10
				       	:button/value "L"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 11
				       	:button/value "L"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 12
				       	:button/value "ALT"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 2
				       	:button/value "Z"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 3
				       	:button/value "X"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 4
				       	:button/value "C"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 5
				       	:button/value "V"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 6
				       	:button/value "B"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 7
				       	:button/value "N"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 8
				       	:button/value "M"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 9
				       	:button/value "M"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 10
				       	:button/value "M"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 11
				       	:button/value "M"
				       	:button/selected false
				       	:layer layer
				  	}
				  	{
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 5
				       	:button/value "BKSP"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 6
				       	:button/value "SPC"
				       	:button/selected false
				       	:layer layer
				  	}
				  	{
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 7
				       	:button/value "ENTR"
				       	:button/selected false
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 8
				       	:button/value "TAB"
				       	:button/selected false
				       	:layer layer
				  	}
	      		]
	    )
	  	layer
	)
)

(defn populate-with-empty-layout! [conn layer-name]
	(deselect-buttons!)
	(let [layer-id 	 	(populate-with-qwerty-layout! conn layer-name)
		  buttons-ids 	@(p/q conn '[ 	:find [?button ...]
		  									:in $ ?layer-id 
		  									:where 
		  										[?button :button/value] 
		  										[?button :layer ?layer-id]  
		  								] 
		  								layer-id)]

		(doseq [button-id buttons-ids] 
			(p/transact! conn [[:db/add button-id :button/value ""]])
		)
	)
)



(defn clone-layer! [conn layer-id layer-name]
	(deselect-buttons!)
	(let [  buttons @(p/q conn '[ 	:find ?button ?value ?row ?column
									:in $ ?layer-id
									:where 
										[?button :layer ?layer-id] 
										[?button :button/value ?value] 
										[?button :button/row ?row] 
										[?button :button/column ?column] 
									]
									layer-id)
		 	layer (new-entity! conn {:layer/name (str layer-name "'s clone")})]

		(doseq [button buttons] 

			(d/transact!
		    	conn
					[
					    {
					    	:db/id (tempid)
					    	:button/row (nth button 2)
					    	:button/column (nth button 3)
					       	:button/value (nth button 1)
					       	:button/selected false
					       	:layer layer
					  	}])
		)
	)
)


(defn remove-layer! [conn layer-id]
	(let [  layers  @(p/q conn '[ 	:find ?layer ?later-virtual-id
									:in $ ?layer-id
									:where 
										[?layer-id 	:layer/virtual-id ?virtual-id]
										[?layer 	:layer/virtual-id ?later-virtual-id] 
									[(> ?later-virtual-id ?virtual-id)]
								]
								layer-id)]

		(p/transact! conn [[:db.fn/retractEntity layer-id]])
		(dec-layer-id)

		(doseq [[layer-id later-virtual-id] layers]
			(println (str "ID: " layer-id "VID: " later-virtual-id))
			(p/transact! conn [[:db/add layer-id :layer/virtual-id (dec later-virtual-id)]]))

		(select-layer! @(p/q conn '[ :find ?layer . :where [?layer :layer/name ] ]) false)
	)
)