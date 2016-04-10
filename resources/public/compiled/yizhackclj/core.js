// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yizhackclj.components.keyboard');
goog.require('yizhackclj.fixtures');
goog.require('yizhackclj.db');
goog.require('yizhackclj.state');
cljs.core.enable_console_print_BANG_.call(null);
yizhackclj.core.initialize = (function yizhackclj$core$initialize(keyboard_json_string,editing){
yizhackclj.db.deserialize_keyboard.call(null,keyboard_json_string);

cljs.core.reset_BANG_.call(null,yizhackclj.state.edit_mode,editing);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.keyboard.keyboard], null),document.getElementById("app"));
});
goog.exportSymbol('yizhackclj.core.initialize', yizhackclj.core.initialize);
yizhackclj.core.initialize.call(null,yizhackclj.fixtures.keyboard,true);
yizhackclj.core.on_js_reload = (function yizhackclj$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map