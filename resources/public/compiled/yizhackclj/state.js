// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.state');
goog.require('cljs.core');
goog.require('reagent.core');
yizhackclj.state.edit_mode = reagent.core.atom.call(null,true);
yizhackclj.state.hovered_layer_id = reagent.core.atom.call(null,null);
yizhackclj.state.selected_layer_id = reagent.core.atom.call(null,(1));
yizhackclj.state.hovered_button = reagent.core.atom.call(null,null);
yizhackclj.state.selected_button = reagent.core.atom.call(null,null);

//# sourceMappingURL=state.js.map