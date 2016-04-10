// Compiled by ClojureScript 1.8.40 {}
goog.provide('visual_editor.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('visual_editor.db');
goog.require('visual_editor.fixtures');
goog.require('visual_editor.components.keyboard');
cljs.core.enable_console_print_BANG_.call(null);
visual_editor.core.initialize = (function visual_editor$core$initialize(keyboard_json_string,editing){
visual_editor.db.deserialize_keyboard.call(null,keyboard_json_string);

cljs.core.reset_BANG_.call(null,visual_editor.db.edit_mode,editing);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [visual_editor.components.keyboard.keyboard], null),document.getElementById("visual-editor"));
});
goog.exportSymbol('visual_editor.core.initialize', visual_editor.core.initialize);
visual_editor.core.initialize.call(null,visual_editor.fixtures.keyboard,true);
visual_editor.core.on_js_reload = (function visual_editor$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map