(defproject visual-editor "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"
  
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]
                 [org.clojure/core.async "0.2.374" :exclusions [org.clojure/tools.reader]]
                 [reagent "0.6.0-alpha"]]
  
  :plugins [[lein-figwheel "0.5.2"]
            [lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]


  :clean-targets ["resources/public/compiled" "resources/public/visual-editor.js" "resources/public/visual-editor-min.js" "target"]



  :cljsbuild {

    :builds
      [
        {
          :id "dev"
          
          :figwheel {:on-jsload "visual-editor.core/on-js-reload"}

          :source-paths ["src"]

          :compiler 
          {
            :main visual-editor.core
            :asset-path "compiled"
            :output-to "resources/public/visual-editor.js"
            :output-dir "resources/public/compiled/"
            :optimizations :none
          }
        }

        {
          :id "min"

          :source-paths ["src"]

          :compiler 
          {
            :main visual-editor.core

            :output-to "resources/public/visual-editor-min.js"
            
            :optimizations :advanced
            :pretty-print true
          }
        }
      ]
  }



  :figwheel {

    ;; :http-server-root "resources/"
    ;; :server-port 4000
    ;; :server-ip "127.0.0.1"

    ;:css-dirs ["resources/css/"]

    ;; Start an nREPL server into the running figwheel process
    ;; :nrepl-port 7888

    ;; Server Ring Handler (optional)
    ;; if you want to embed a ring handler into the figwheel http-kit
    ;; server, this is for simple ring servers, if this
    ;; doesn't work for you just run your own server :)
    ;; :ring-handler hello_world.server/handler

    ;; To be able to open files in your editor from the heads up display
    ;; you will need to put a script on your path.
    ;; that script will have to take a file path and a line number
    ;; ie. in  ~/bin/myfile-opener
    ;; #! /bin/sh
    ;; emacsclient -n +$2 $1
    ;;
    :open-file-command "figwheel-opener"

    ;; if you want to disable the REPL
    ;; :repl false

    ;; to configure a different figwheel logfile path
    ;; :server-logfile "tmp/logs/figwheel-logfile.log"
  }
)