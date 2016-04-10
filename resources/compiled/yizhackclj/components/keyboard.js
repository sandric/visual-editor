// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.keyboard');
goog.require('cljs.core');
goog.require('yizhackclj.components.visual');
goog.require('yizhackclj.utils');
goog.require('posh.core');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('yizhackclj.db.keyboard');
goog.require('yizhackclj.state');
goog.require('yizhackclj.components.textual');
yizhackclj.components.keyboard.keyboard_view = (function yizhackclj$components$keyboard$keyboard_view(){
var layer_ids = yizhackclj.db.keyboard.layer_ids.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard","div.keyboard",1307558669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.visual.visual,layer_ids], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.textual.textual,layer_ids], null)], null);
});

//# sourceMappingURL=keyboard.js.map