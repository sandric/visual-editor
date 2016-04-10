// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.state');
goog.require('cljs.core');
goog.require('reagent.core');
yizhackclj.state.keyboard_data = reagent.core.atom.call(null,"");
yizhackclj.state.edit_mode = reagent.core.atom.call(null,true);
yizhackclj.state.hovered_vid = reagent.core.atom.call(null,(0));
yizhackclj.state.selected_vid = reagent.core.atom.call(null,(0));
yizhackclj.state.hovered_button_id = reagent.core.atom.call(null,null);
yizhackclj.state.selected_button_id = reagent.core.atom.call(null,null);

//# sourceMappingURL=state.js.map