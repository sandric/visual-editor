(ns yizhackclj.fixtures)

(def empty-layout
	"[	{\"row\":1,\"column\":1,\"value\":\"\"},
		{\"row\":1,\"column\":2,\"value\":\"\"},
		{\"row\":1,\"column\":3,\"value\":\"\"},
		{\"row\":1,\"column\":4,\"value\":\"\"},
		{\"row\":1,\"column\":5,\"value\":\"\"},
		{\"row\":1,\"column\":6,\"value\":\"\"},		
		{\"row\":1,\"column\":7,\"value\":\"\"},
		{\"row\":1,\"column\":8,\"value\":\"\"},
		{\"row\":1,\"column\":9,\"value\":\"\"},
		{\"row\":1,\"column\":10,\"value\":\"\"},
		{\"row\":1,\"column\":11,\"value\":\"\"},
		{\"row\":1,\"column\":12,\"value\":\"\"},
		{\"row\":2,\"column\":1,\"value\":\"\"},
		{\"row\":2,\"column\":2,\"value\":\"\"},
		{\"row\":2,\"column\":3,\"value\":\"\"},
		{\"row\":2,\"column\":4,\"value\":\"\"},
		{\"row\":2,\"column\":5,\"value\":\"\"},
		{\"row\":2,\"column\":6,\"value\":\"\"},
		{\"row\":2,\"column\":7,\"value\":\"\"},
		{\"row\":2,\"column\":8,\"value\":\"\"},
		{\"row\":2,\"column\":9,\"value\":\"\"},
		{\"row\":2,\"column\":10,\"value\":\"\"},
		{\"row\":2,\"column\":11,\"value\":\"\"},
		{\"row\":2,\"column\":12,\"value\":\"\"},
		{\"row\":3,\"column\":2,\"value\":\"\"},
		{\"row\":3,\"column\":3,\"value\":\"\"},
		{\"row\":3,\"column\":4,\"value\":\"\"},
		{\"row\":3,\"column\":5,\"value\":\"\"},
		{\"row\":3,\"column\":6,\"value\":\"\"},
		{\"row\":3,\"column\":7,\"value\":\"\"},
		{\"row\":3,\"column\":8,\"value\":\"\"},
		{\"row\":3,\"column\":9,\"value\":\"\"},
		{\"row\":3,\"column\":10,\"value\":\"\"},
		{\"row\":3,\"column\":11,\"value\":\"\"},
		{\"row\":4,\"column\":5,\"value\":\"\"},
		{\"row\":4,\"column\":6,\"value\":\"\"},
		{\"row\":4,\"column\":8,\"value\":\"\"},
		{\"row\":4,\"column\":7,\"value\":\"\"}]")

(def qwerty-layout 
	"[	{\"row\":1,\"column\":1,\"value\":\"CTRL\"},
		{\"row\":1,\"column\":2,\"value\":\"Q\"},
		{\"row\":1,\"column\":3,\"value\":\"W\"},
		{\"row\":1,\"column\":4,\"value\":\"E\"},
		{\"row\":1,\"column\":5,\"value\":\"R\"},
		{\"row\":1,\"column\":6,\"value\":\"T\"},		
		{\"row\":1,\"column\":7,\"value\":\"Y\"},
		{\"row\":1,\"column\":8,\"value\":\"U\"},
		{\"row\":1,\"column\":9,\"value\":\"I\"},
		{\"row\":1,\"column\":10,\"value\":\"O\"},
		{\"row\":1,\"column\":11,\"value\":\"P\"},
		{\"row\":1,\"column\":12,\"value\":\"CTRL\"},
		{\"row\":2,\"column\":1,\"value\":\"ALT\"},
		{\"row\":2,\"column\":2,\"value\":\"A\"},
		{\"row\":2,\"column\":3,\"value\":\"S\"},
		{\"row\":2,\"column\":4,\"value\":\"D\"},
		{\"row\":2,\"column\":5,\"value\":\"F\"},
		{\"row\":2,\"column\":6,\"value\":\"G\"},
		{\"row\":2,\"column\":7,\"value\":\"H\"},
		{\"row\":2,\"column\":8,\"value\":\"J\"},
		{\"row\":2,\"column\":9,\"value\":\"K\"},
		{\"row\":2,\"column\":10,\"value\":\"L\"},
		{\"row\":2,\"column\":11,\"value\":\"L\"},
		{\"row\":2,\"column\":12,\"value\":\"ALT\"},
		{\"row\":3,\"column\":2,\"value\":\"Z\"},
		{\"row\":3,\"column\":3,\"value\":\"X\"},
		{\"row\":3,\"column\":4,\"value\":\"C\"},
		{\"row\":3,\"column\":5,\"value\":\"V\"},
		{\"row\":3,\"column\":6,\"value\":\"B\"},
		{\"row\":3,\"column\":7,\"value\":\"N\"},
		{\"row\":3,\"column\":8,\"value\":\"M\"},
		{\"row\":3,\"column\":9,\"value\":\"M\"},
		{\"row\":3,\"column\":10,\"value\":\"M\"},
		{\"row\":3,\"column\":11,\"value\":\"M\"},
		{\"row\":4,\"column\":5,\"value\":\"BKSP\"},
		{\"row\":4,\"column\":6,\"value\":\"SPC\"},
		{\"row\":4,\"column\":8,\"value\":\"TAB\"},
		{\"row\":4,\"column\":7,\"value\":\"ENTR\"}]")

(def empty-layer (str "{\"name\":\"Empty Layer\",\"color\":\"#ffffff\",\"layout\":" empty-layout "}"))
(def qwerty-layer (str "{\"name\":\"QWERTY Layer\",\"color\":\"#ffffff\",\"layout\":" qwerty-layout "}"))


(def keyboard 
	(str 
		"{\"layers\":[{\"name\":\"Layer 1\",\"id\":1,\"color\":\"#ff0000\",\"layout\":" 
		qwerty-layout 
		"}, {\"name\":\"Layer 2\",\"id\":2,\"color\":\"#00ff00\",\"layout\":" 
		empty-layout 
		"}]}"
	)
)