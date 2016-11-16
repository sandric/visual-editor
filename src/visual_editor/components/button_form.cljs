(ns visual-editor.components.button-form
  (:require
   [reagent.core :as r]

   [visual-editor.db :as db]

   [visual-editor.components.button :as button-components]))

(defn button-form []
  [:div.edit
   (when (and @db/edit-mode @db/selected-button)
     (let [button (db/button
                   (:layer-id @db/selected-button)
                   (:row @db/selected-button)
                   (:column @db/selected-button))

           layers-select-value (r/atom 0)
           control-select-value (r/atom 0)]

       [:form
        [:input
         {
          :type "text"
          :maxLength 4
          :value (:value button)

          :on-change (fn [e]
                       (reset! layers-select-value 0)
                       (reset! control-select-value 0)

                       (db/button-update button {:value (-> e .-target .-value)}))
          }]

        [:select
         {
          :value @layers-select-value

          :on-change (fn [e]
                       (when (not= (-> e .-target .-value) 0)
                         (reset! control-select-value 0)
                         (reset! layers-select-value (-> e .-target .-value))
                         (db/button-update button
                                           {:value (str "LN_" (-> e .-target .-value))})))
          }

         [:option {:value 0} "Select layer transition"]
         (for [layer @db/layers]
           (let [id (:id layer)
                 name (:name layer)]

             ^{:key id} [:option {:value id} name]))]

        [:select
         {
          :value @control-select-value

          :on-change (fn [e]
                       (when (not= (-> e .-target .-value) 0)
                         (reset! layers-select-value 0)
                         (reset! control-select-value (-> e .-target .-value))
                         (db/button-update button {:value (-> e .-target .-value)})))
          }

         [:option {:value 0} "Select control button"]

         [:option {:value "LSHIFT"} "Left Shift"]
         [:option {:value "RSHIFT"} "Right Shift"]

         [:option {:value "LCTRL"} "Left Control"]
         [:option {:value "RCTRL"} "Right Control"]

         [:option {:value "LALT"} "Left Alt"]
         [:option {:value "RALT"} "Right Alt"]

         [:option {:value "SPC"} "Space"]
         [:option {:value "BKSPC"} "Backspace"]
         [:option {:value "TAB"} "Tab"]
         [:option {:value "ENTR"} "Enter"]
         [:option {:value "ESC"} "Escape"]

         [:option {:value "UP"} "Arrow Up"]
         [:option {:value "DOWN"} "Arrow Down"]
         [:option {:value "LEFT"} "Arrow Left"]
         [:option {:value "RIGHT"} "Arrow Right"]]]))])
