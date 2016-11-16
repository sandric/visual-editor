(ns visual-editor.components.layer
  (:require
   [reagent.core :as r]

   [visual-editor.db :as db]

   [visual-editor.components.button :as button-components])
  )


(defn layer [id]
  (let [layer (db/layer-by-id id)
        name (:name layer)
        color (:color layer)
        buttons (db/buttons-by-layer-id id)]

    [:div.layer
     {
      :class (when (= @db/selected-layer-id id) "selected")
      :style { :background-color color }
      }

     [:div.control (str "ID: " id " Name: " name)]

     [:div.control
      (when @db/edit-mode
        [:button
         { :on-click #(db/remove-layer id) }
         "remove"])
      (when @db/edit-mode
        [:button
         { :on-click #(db/clone-layer id) }
         "clone"])
      (when @db/edit-mode
        [:button
         { :on-click #(db/clear-layer id) }
         "clear"])

      (if @db/edit-mode
        [:form
         [:input
          {
           :type "text"
           :maxLength 8
           :value name

           :on-change (fn [e]
                        (db/layer-update layer {:name (-> e .-target .-value)})
                        )
           }]

         [:input
          {
           :type "text"
           :maxLength 8
           :value color

           :on-change (fn [e]
                        (db/layer-update layer {:color (-> e .-target .-value)}))
           }]]

        [:pre name])]

     [:div.layout
      (for [button buttons]
        ^{:key (str id (:row button) (:column button))}
        [button-components/button button])]]))

(defn thumb [id]
  (let [layer (db/layer-by-id id)
        name (:name layer)
        color (:color layer)
        buttons (db/buttons-by-layer-id id)]

    [:div.layer.thumb
     {
      :class
      (str
       (when (= @db/selected-layer-id id)
         "selected")
       (when (= @db/hovered-layer-id id)
         " hovered"))

      :style { :background-color color }

      :on-click (fn []
                  (reset! db/selected-layer-id id))
      }

     [:div.control (str "ID: " id " Name: " name)]

     [:div.layout
      (for [button buttons]
        ^{:key (str id (:row button) (:column button))}
        [button-components/thumb button])]]))
