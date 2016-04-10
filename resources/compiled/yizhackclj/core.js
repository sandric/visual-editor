// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.core');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('yizhackclj.db.serialization');
goog.require('reagent.core');
goog.require('yizhackclj.db.keyboard');
goog.require('yizhackclj.components.keyboard');
goog.require('yizhackclj.db.fixtures');
goog.require('datascript.core');
goog.require('yizhackclj.state');
cljs.core.enable_console_print_BANG_.call(null);
yizhackclj.core.initialize = (function yizhackclj$core$initialize(keyboard_data,editing){
yizhackclj.db.keyboard.create_db.call(null);

cljs.core.reset_BANG_.call(null,yizhackclj.state.keyboard_data,keyboard_data);

posh.core.posh_BANG_.call(null,yizhackclj.db.keyboard.conn);

yizhackclj.db.serialization.deserialize_keyboard.call(null);

cljs.core.reset_BANG_.call(null,yizhackclj.state.edit_mode,editing);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.keyboard.keyboard_view], null),document.getElementById("app"));
});
goog.exportSymbol('yizhackclj.core.initialize', yizhackclj.core.initialize);
yizhackclj.core.initialize.call(null,yizhackclj.db.fixtures.fixture_keyboard,true);
yizhackclj.core.on_js_reload = (function yizhackclj$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map