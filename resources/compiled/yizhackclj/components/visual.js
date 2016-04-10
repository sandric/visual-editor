// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.visual');
goog.require('cljs.core');
goog.require('yizhackclj.components.layer');
goog.require('yizhackclj.utils');
goog.require('posh.core');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('yizhackclj.db.keyboard');
goog.require('yizhackclj.state');
yizhackclj.components.visual.visual = (function yizhackclj$components$visual$visual(layer_ids){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.visual","div.visual",-1673800973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_button_id,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.thumbails","div.thumbails",1688874618),(function (){var iter__19198__auto__ = (function yizhackclj$components$visual$visual_$_iter__31983(s__31984){
return (new cljs.core.LazySeq(null,(function (){
var s__31984__$1 = s__31984;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31984__$1);
if(temp__4657__auto__){
var s__31984__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31984__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__31984__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__31986 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__31985 = (0);
while(true){
if((i__31985 < size__19197__auto__)){
var layer_id = cljs.core._nth.call(null,c__19196__auto__,i__31985);
cljs.core.chunk_append.call(null,b__31986,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer_thumb_view,layer_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),layer_id], null)));

var G__31987 = (i__31985 + (1));
i__31985 = G__31987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31986),yizhackclj$components$visual$visual_$_iter__31983.call(null,cljs.core.chunk_rest.call(null,s__31984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31986),null);
}
} else {
var layer_id = cljs.core.first.call(null,s__31984__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer_thumb_view,layer_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),layer_id], null)),yizhackclj$components$visual$visual_$_iter__31983.call(null,cljs.core.rest.call(null,s__31984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,layer_ids);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer_view,cljs.core.deref.call(null,yizhackclj.state.selected_vid)], null)], null);
});

//# sourceMappingURL=visual.js.map