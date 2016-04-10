// Compiled by ClojureScript 1.8.40 {}
goog.provide('visual_editor.components.keyboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('visual_editor.db');
goog.require('visual_editor.components.layer');
goog.require('visual_editor.components.button_form');
visual_editor.components.keyboard.keyboard = (function visual_editor$components$keyboard$keyboard(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard","div.keyboard",1307558669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.visual","div.visual",-1673800973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,visual_editor.db.selected_button,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.thumbails","div.thumbails",1688874618),(function (){var iter__6990__auto__ = (function visual_editor$components$keyboard$keyboard_$_iter__8087(s__8088){
return (new cljs.core.LazySeq(null,(function (){
var s__8088__$1 = s__8088;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8088__$1);
if(temp__4657__auto__){
var s__8088__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8088__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__8088__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__8090 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__8089 = (0);
while(true){
if((i__8089 < size__6989__auto__)){
var layer = cljs.core._nth.call(null,c__6988__auto__,i__8089);
cljs.core.chunk_append.call(null,b__8090,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [visual_editor.components.layer.thumb,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null)));

var G__8091 = (i__8089 + (1));
i__8089 = G__8091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8090),visual_editor$components$keyboard$keyboard_$_iter__8087.call(null,cljs.core.chunk_rest.call(null,s__8088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8090),null);
}
} else {
var layer = cljs.core.first.call(null,s__8088__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [visual_editor.components.layer.thumb,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer)], null)),visual_editor$components$keyboard$keyboard_$_iter__8087.call(null,cljs.core.rest.call(null,s__8088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,cljs.core.deref.call(null,visual_editor.db.layers));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [visual_editor.components.layer.layer,cljs.core.deref.call(null,visual_editor.db.selected_layer_id)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [visual_editor.components.button_form.button_form], null)], null);
});

//# sourceMappingURL=keyboard.js.map