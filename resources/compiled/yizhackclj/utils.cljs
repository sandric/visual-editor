(ns yizhackclj.utils)


(defn parse-layer [value]
	(if (.startsWith value "LN_")
		(js/parseInt (subs value 3))
		0
	)
)


(defn to-json [keyboard]
  	(.stringify js/JSON (clj->js keyboard) nil 2)
)

(defn parse-json [json]
	(js->clj (JSON.parse json) :keywordize-keys true)
)