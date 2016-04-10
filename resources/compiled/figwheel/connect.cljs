(ns figwheel.connect (:require [yizhackclj.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/yizhackclj.core.on-js-reload (apply js/yizhackclj.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'yizhackclj.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

