// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.layer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yizhackclj.db');
goog.require('yizhackclj.state');
goog.require('yizhackclj.components.button');
yizhackclj.components.layer.layer = (function yizhackclj$components$layer$layer(id){
var layer__$1 = yizhackclj.db.layer_by_id.call(null,id);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer__$1);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer__$1);
var buttons = yizhackclj.db.buttons_by_layer_id.call(null,id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layer","div.layer",1408716897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_layer_id),id))?"selected":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),[cljs.core.str("ID: "),cljs.core.str(id),cljs.core.str(" Name: "),cljs.core.str(name)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer__$1,name,color,buttons){
return (function (){
return yizhackclj.db.remove_layer.call(null,id);
});})(layer__$1,name,color,buttons))
], null),"remove"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer__$1,name,color,buttons){
return (function (){
return yizhackclj.db.clone_layer.call(null,id);
});})(layer__$1,name,color,buttons))
], null),"clone"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer__$1,name,color,buttons){
return (function (){
return yizhackclj.db.clear_layer.call(null,id);
});})(layer__$1,name,color,buttons))
], null),"clear"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(8),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (layer__$1,name,color,buttons){
return (function (e){
return yizhackclj.db.layer_update.call(null,layer__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),e.target.value], null));
});})(layer__$1,name,color,buttons))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(8),new cljs.core.Keyword(null,"value","value",305978217),color,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (layer__$1,name,color,buttons){
return (function (e){
return yizhackclj.db.layer_update.call(null,layer__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),e.target.value], null));
});})(layer__$1,name,color,buttons))
], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),name], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout","div.layout",-118565911),(function (){var iter__19198__auto__ = ((function (layer__$1,name,color,buttons){
return (function yizhackclj$components$layer$layer_$_iter__38587(s__38588){
return (new cljs.core.LazySeq(null,((function (layer__$1,name,color,buttons){
return (function (){
var s__38588__$1 = s__38588;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38588__$1);
if(temp__4657__auto__){
var s__38588__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38588__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__38588__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__38590 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__38589 = (0);
while(true){
if((i__38589 < size__19197__auto__)){
var button = cljs.core._nth.call(null,c__19196__auto__,i__38589);
cljs.core.chunk_append.call(null,b__38590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button,button], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id),cljs.core.str(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button)),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button))].join('')], null)));

var G__38591 = (i__38589 + (1));
i__38589 = G__38591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38590),yizhackclj$components$layer$layer_$_iter__38587.call(null,cljs.core.chunk_rest.call(null,s__38588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38590),null);
}
} else {
var button = cljs.core.first.call(null,s__38588__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button,button], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id),cljs.core.str(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button)),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button))].join('')], null)),yizhackclj$components$layer$layer_$_iter__38587.call(null,cljs.core.rest.call(null,s__38588__$2)));
}
} else {
return null;
}
break;
}
});})(layer__$1,name,color,buttons))
,null,null));
});})(layer__$1,name,color,buttons))
;
return iter__19198__auto__.call(null,buttons);
})()], null)], null);
});
yizhackclj.components.layer.thumb = (function yizhackclj$components$layer$thumb(id){
var layer = yizhackclj.db.layer_by_id.call(null,id);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer);
var buttons = yizhackclj.db.buttons_by_layer_id.call(null,id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layer.thumb","div.layer.thumb",-1803803467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_layer_id),id))?"selected":null)),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.hovered_layer_id),id))?" hovered":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer,name,color,buttons){
return (function (){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_layer_id,id);
});})(layer,name,color,buttons))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),[cljs.core.str("ID: "),cljs.core.str(id),cljs.core.str(" Name: "),cljs.core.str(name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout","div.layout",-118565911),(function (){var iter__19198__auto__ = ((function (layer,name,color,buttons){
return (function yizhackclj$components$layer$thumb_$_iter__38596(s__38597){
return (new cljs.core.LazySeq(null,((function (layer,name,color,buttons){
return (function (){
var s__38597__$1 = s__38597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38597__$1);
if(temp__4657__auto__){
var s__38597__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38597__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__38597__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__38599 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__38598 = (0);
while(true){
if((i__38598 < size__19197__auto__)){
var button = cljs.core._nth.call(null,c__19196__auto__,i__38598);
cljs.core.chunk_append.call(null,b__38599,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.thumb,button], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id),cljs.core.str(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button)),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button))].join('')], null)));

var G__38600 = (i__38598 + (1));
i__38598 = G__38600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38599),yizhackclj$components$layer$thumb_$_iter__38596.call(null,cljs.core.chunk_rest.call(null,s__38597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38599),null);
}
} else {
var button = cljs.core.first.call(null,s__38597__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.thumb,button], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(id),cljs.core.str(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button)),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button))].join('')], null)),yizhackclj$components$layer$thumb_$_iter__38596.call(null,cljs.core.rest.call(null,s__38597__$2)));
}
} else {
return null;
}
break;
}
});})(layer,name,color,buttons))
,null,null));
});})(layer,name,color,buttons))
;
return iter__19198__auto__.call(null,buttons);
})()], null)], null);
});

//# sourceMappingURL=layer.js.map