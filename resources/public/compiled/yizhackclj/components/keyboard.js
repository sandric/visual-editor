// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.keyboard');
goog.require('cljs.core');
goog.require('yizhackclj.components.layer');
goog.require('reagent.core');
goog.require('yizhackclj.components.button_form');
goog.require('yizhackclj.db');
goog.require('yizhackclj.state');
yizhackclj.components.keyboard.keyboard = (function yizhackclj$components$keyboard$keyboard(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard","div.keyboard",1307558669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.visual","div.visual",-1673800973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_button,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.thumbails","div.thumbails",1688874618),(function (){var iter__19198__auto__ = (function yizhackclj$components$keyboard$keyboard_$_iter__38636(s__38637){
return (new cljs.core.LazySeq(null,(function (){
var s__38637__$1 = s__38637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38637__$1);
if(temp__4657__auto__){
var s__38637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38637__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__38637__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__38639 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__38638 = (0);
while(true){
if((i__38638 < size__19197__auto__)){
var layer = cljs.core._nth.call(null,c__19196__auto__,i__38638);
cljs.core.chunk_append.call(null,b__38639,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.thumb,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null)));

var G__38640 = (i__38638 + (1));
i__38638 = G__38640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38639),yizhackclj$components$keyboard$keyboard_$_iter__38636.call(null,cljs.core.chunk_rest.call(null,s__38637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38639),null);
}
} else {
var layer = cljs.core.first.call(null,s__38637__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.thumb,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null)),yizhackclj$components$keyboard$keyboard_$_iter__38636.call(null,cljs.core.rest.call(null,s__38637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,cljs.core.deref.call(null,yizhackclj.db.layers));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer,cljs.core.deref.call(null,yizhackclj.state.selected_layer_id)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button_form.button_form], null)], null);
});

//# sourceMappingURL=keyboard.js.map