// Compiled by ClojureScript 1.8.40 {}
goog.provide('visual_editor.state');
goog.require('cljs.core');
goog.require('reagent.core');
visual_editor.state.edit_mode = reagent.core.atom.call(null,true);
visual_editor.state.hovered_layer_id = reagent.core.atom.call(null,null);
visual_editor.state.selected_layer_id = reagent.core.atom.call(null,(1));
visual_editor.state.hovered_button = reagent.core.atom.call(null,null);
visual_editor.state.selected_button = reagent.core.atom.call(null,null);

//# sourceMappingURL=state.js.map