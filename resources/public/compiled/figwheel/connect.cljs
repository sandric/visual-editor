(ns figwheel.connect (:require [visual-editor.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/visual-editor.core.on-js-reload (apply js/visual-editor.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'visual-editor.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

