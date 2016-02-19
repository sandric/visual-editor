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
  (let [layer-first (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name "Layer 1"})
  		layer-second (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name "Layer 2"})]
    (d/transact!
    	conn
			[
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 1
			       	:button/value "CTRL"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 2
			       	:button/value "Q"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 3
			       	:button/value "W"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 4
			       	:button/value "E"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 5
			       	:button/value "R"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 6
			       	:button/value "T"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 7
			       	:button/value "Y"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 8
			       	:button/value "U"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 9
			       	:button/value "I"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 10
			       	:button/value "O"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 11
			       	:button/value "P"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 12
			       	:button/value "CTRL"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 1
			       	:button/value "ALT"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 2
			       	:button/value "A"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 3
			       	:button/value "S"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 4
			       	:button/value "D"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 5
			       	:button/value "F"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 6
			       	:button/value "G"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 7
			       	:button/value "H"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 8
			       	:button/value "J"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 9
			       	:button/value "K"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 10
			       	:button/value "L"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 11
			       	:button/value "L"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 12
			       	:button/value "ALT"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 2
			       	:button/value "Z"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 3
			       	:button/value "X"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 4
			       	:button/value "C"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 5
			       	:button/value "V"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 6
			       	:button/value "B"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 7
			       	:button/value "N"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 8
			       	:button/value "M"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 9
			       	:button/value "M"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 10
			       	:button/value "M"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 11
			       	:button/value "M"
			       	:layer layer-first
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 5
			       	:button/value "BKSP"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 6
			       	:button/value "SPC"
			       	:layer layer-first
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 7
			       	:button/value "ENTR"
			       	:layer layer-first
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 8
			       	:button/value "TAB"
			       	:layer layer-first
			  	}




			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 1
			       	:button/value "CTRL"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 2
			       	:button/value "Q"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 3
			       	:button/value "W"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 4
			       	:button/value "E"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 5
			       	:button/value "R"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 6
			       	:button/value "T"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 7
			       	:button/value "Y"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 8
			       	:button/value "U"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 9
			       	:button/value "I"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 10
			       	:button/value "O"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 11
			       	:button/value "P"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 1
			    	:button/column 12
			       	:button/value "CTRL"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 1
			       	:button/value "ALT"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 2
			       	:button/value "A"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 3
			       	:button/value "S"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 4
			       	:button/value "D"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 5
			       	:button/value "F"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 6
			       	:button/value "G"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 7
			       	:button/value "H"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 8
			       	:button/value "J"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 9
			       	:button/value "K"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 10
			       	:button/value "L"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 11
			       	:button/value "L"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 2
			    	:button/column 12
			       	:button/value "ALT"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 2
			       	:button/value "Z"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 3
			       	:button/value "X"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 4
			       	:button/value "C"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 5
			       	:button/value "V"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 6
			       	:button/value "B"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 7
			       	:button/value "N"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 8
			       	:button/value "M"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 9
			       	:button/value "M"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 10
			       	:button/value "M"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 3
			    	:button/column 11
			       	:button/value "M"
			       	:layer layer-second
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 5
			       	:button/value "BKSP"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 6
			       	:button/value "SPC"
			       	:layer layer-second
			  	}
			  	{
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 7
			       	:button/value "ENTR"
			       	:layer layer-second
			  	}
			    {
			    	:db/id (tempid)
			    	:button/row 4
			    	:button/column 8
			       	:button/value "TAB"
			       	:layer layer-second
			  	}
      		]
    )
  )
)


(defn populate-with-qwerty-layout! [conn layer-name]
  	(let [layer (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name layer-name})]
	    (d/transact!
	    	conn
				[
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 1
				       	:button/value "CTRL"				       	
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 2
				       	:button/value "Q"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 3
				       	:button/value "W"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 4
				       	:button/value "E"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 5
				       	:button/value "R"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 6
				       	:button/value "T"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 7
				       	:button/value "Y"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 8
				       	:button/value "U"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 9
				       	:button/value "I"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 10
				       	:button/value "O"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 11
				       	:button/value "P"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 1
				    	:button/column 12
				       	:button/value "CTRL"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 1
				       	:button/value "ALT"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 2
				       	:button/value "A"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 3
				       	:button/value "S"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 4
				       	:button/value "D"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 5
				       	:button/value "F"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 6
				       	:button/value "G"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 7
				       	:button/value "H"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 8
				       	:button/value "J"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 9
				       	:button/value "K"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 10
				       	:button/value "L"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 11
				       	:button/value "L"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 2
				    	:button/column 12
				       	:button/value "ALT"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 2
				       	:button/value "Z"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 3
				       	:button/value "X"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 4
				       	:button/value "C"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 5
				       	:button/value "V"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 6
				       	:button/value "B"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 7
				       	:button/value "N"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 8
				       	:button/value "M"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 9
				       	:button/value "M"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 10
				       	:button/value "M"
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 3
				    	:button/column 11
				       	:button/value "M"				       	
				       	:layer layer
				  	}
				  	{
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 5
				       	:button/value "BKSP"				       	
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 6
				       	:button/value "SPC"				       	
				       	:layer layer
				  	}
				  	{
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 7
				       	:button/value "ENTR"				       	
				       	:layer layer
				  	}
				    {
				    	:db/id (tempid)
				    	:button/row 4
				    	:button/column 8
				       	:button/value "TAB"				       	
				       	:layer layer
				  	}
	      		]
	    )
	  	layer
	)
)




(defn parse-layer [value]
	(if (.startsWith value "LN_")
		(js/parseInt (subs value 3))
		0
	)
)




(defn populate-with-empty-layout! [conn layer-name]
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
	(let [  buttons @(p/q conn '[ 	:find ?button ?value ?row ?column
									:in $ ?layer-id
									:where 
										[?button :layer ?layer-id] 
										[?button :button/value ?value] 
										[?button :button/row ?row] 
										[?button :button/column ?column] 
									]
									layer-id)
		 	layer (new-entity! conn {:layer/virtual-id (inc-layer-id) :layer/name (str layer-name "'s clone")})]

		(doseq [button buttons] 

			(d/transact!
		    	conn
					[
					    {
					    	:db/id (tempid)
					    	:button/row (nth button 2)
					    	:button/column (nth button 3)
					       	:button/value (nth button 1)
					       	:layer layer
					  	}])
		)
	)
)


(defn remove-layer! [conn layer-id layer-virtual-id]
	(let [  layers  			@(p/q conn '[ 	:find ?layer ?later-virtual-id
												:in $ ?layer-id
												:where 
													[?layer-id 	:layer/virtual-id ?virtual-id]
													[?layer 	:layer/virtual-id ?later-virtual-id] 
												[(> ?later-virtual-id ?virtual-id)]
											]
											layer-id)

			button-references 	@(p/q conn '[ 	:find [?button ...] 
												:in $ ?val 
												:where 
													[?button :button/value ?val] 
												] 
												(str "LN_" layer-virtual-id))]


		(doseq [button-id button-references]
			(p/transact! conn [[:db/add button-id :button/value ""]]))



		(p/transact! conn [[:db.fn/retractEntity layer-id]])
		(dec-layer-id)

		(doseq [[layer-id later-virtual-id] layers]
			(p/transact! conn [[:db/add layer-id :layer/virtual-id (dec later-virtual-id)]])

			(let [button-references 	@(p/q conn '[ 	:find [?button ...] 
												:in $ ?val 
												:where 
													[?button :button/value ?val] 
												] 
												(str "LN_" later-virtual-id))]

				(doseq [button-id button-references]
					(p/transact! conn [[:db/add button-id :button/value (str "LN_" (dec later-virtual-id))]])
				)
			)
		)
	)
)






(defn to-json [keyboard]
  	(.stringify js/JSON (clj->js keyboard))
)

(defn parse-json [json]
	(js->clj (JSON.parse json) :keywordize-keys true)
)



(defn generate-button-datom [row column value layer]
    (d/transact!
    	conn
			[
			    {
			    	:db/id (tempid)
			    	:button/row row
			    	:button/column column
			       	:button/value value				       	
			       	:layer layer
			  	}
			]
	)
)


(defn generate-layer-datom [name virtual-id buttons]

	(let [layer (new-entity! conn {:layer/virtual-id virtual-id :layer/name name})]

		(doseq [button buttons]
			(generate-button-datom (:row button) (:column button) (:value button) layer)
		)
	)
)


(defn generate-keyboard-datom [layers]
	(reset! virtual-layer-id 0)

	(doseq [layer layers]
		(inc-layer-id)
		(generate-layer-datom 
			(:name layer)
			(:id layer)
			(:buttons layer))
	)
)




(defn convert-button-to-edn [button-id]
	(let [button    @(p/pull conn '[*] button-id)
				  	row       (:button/row button)
				  	column    (:button/column button)
				  	value     (:button/value button)]

		{:row row :column column :value value}
	)
)


(defn convert-layer-to-edn [layer-id]
	(let   [layer     	@(p/pull conn '[*] layer-id)
		  	name    	(:layer/name layer)
		  	vid 		(:layer/virtual-id layer)
			buttons-ids @(p/q conn '[ 	:find [?button ...]
		  									:in $ ?layer-id 
		  									:where 
		  										[?button :button/value] 
		  										[?button :layer ?layer-id]  
		  								] 
		  								layer-id)]


		{:name name :id vid :buttons (map convert-button-to-edn buttons-ids)}
	)
)


(defn convert-keyboard-to-edn []
	(let [layers-ids	@(p/q conn '[:find [?layer-id ...] 
										:where [?layer-id :layer/name]
									])]

		(map convert-layer-to-edn layers-ids)
	)
)




(defn deserialize-layer [json]

	(let [parsed-layer (parse-json json)]
		(generate-layer-datom 
			(:name parsed-layer)
			(inc-layer-id) 
			(:buttons parsed-layer))
	)
)




(defn deserialize-keyboard [json]
	(generate-keyboard-datom (parse-json json))
)


(defn serialize-keyboard [layers]
	(to-json layers)
)