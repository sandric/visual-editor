// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.db.keyboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yizhackclj.fixtures');
yizhackclj.db.keyboard.layer_head = cljs.core.atom.call(null,(0));
yizhackclj.db.keyboard.layer_head_inc = (function yizhackclj$db$keyboard$layer_head_inc(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.layer_head,cljs.core.inc);
});
yizhackclj.db.keyboard.layer_head_dec = (function yizhackclj$db$keyboard$layer_head_dec(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.layer_head,cljs.core.dec);
});
yizhackclj.db.keyboard.layers = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
yizhackclj.db.keyboard.buttons = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
yizhackclj.db.keyboard.remove_keyboard = (function yizhackclj$db$keyboard$remove_keyboard(){
cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.layers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.buttons,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.layer_head,(0));
});
yizhackclj.db.keyboard.layer_ids = (function yizhackclj$db$keyboard$layer_ids(){
return cljs.core.take.call(null,cljs.core.deref.call(null,yizhackclj.db.keyboard.layer_head).call(null),cljs.core.range.call(null));
});
yizhackclj.db.keyboard.layer_by_id = (function yizhackclj$db$keyboard$layer_by_id(layer_id){
return cljs.core.filter.call(null,(function (layer){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer),layer_id);
}),cljs.core.deref.call(null,yizhackclj.db.keyboard.layers));
});
yizhackclj.db.keyboard.buttons_by_layer_id = (function yizhackclj$db$keyboard$buttons_by_layer_id(layer_id){
return cljs.core.filter.call(null,(function (button){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id);
}),cljs.core.deref.call(null,yizhackclj.db.keyboard.buttons));
});
