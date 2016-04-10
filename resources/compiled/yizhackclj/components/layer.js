// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.layer');
goog.require('cljs.core');
goog.require('yizhackclj.components.button');
goog.require('yizhackclj.utils');
goog.require('posh.core');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('yizhackclj.db.keyboard');
goog.require('yizhackclj.state');
yizhackclj.components.layer.layer_name_input = (function yizhackclj$components$layer$layer_name_input(layer_id,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(8),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),layer_id,new cljs.core.Keyword("layer","name","layer/name",1610851712),e.target.value], null)], null));
})], null)], null);
});
yizhackclj.components.layer.layer_color_input = (function yizhackclj$components$layer$layer_color_input(layer_id,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(8),new cljs.core.Keyword(null,"value","value",305978217),color,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),layer_id,new cljs.core.Keyword("layer","color","layer/color",917251830),e.target.value], null)], null));
})], null)], null);
});
yizhackclj.components.layer.layer_view = (function yizhackclj$components$layer$layer_view(layer_vid){
var layer = yizhackclj.db.keyboard.layer_by_vid.call(null,layer_vid);
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(layer);
var vid = layer_vid;
var name = new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer);
var color = new cljs.core.Keyword("layer","color","layer/color",917251830).cljs$core$IFn$_invoke$arity$1(layer);
var buttons_ids = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null),id));
cljs.core.println.call(null,"drawing layer",id);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layer","div.layer",1408716897),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_vid),vid))?"selected":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer,id,vid,name,color,buttons_ids){
return (function (){
return yizhackclj.db.keyboard.remove_layer.call(null,id);
});})(layer,id,vid,name,color,buttons_ids))
], null),"remove"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer,id,vid,name,color,buttons_ids){
return (function (){
return yizhackclj.db.keyboard.clone_layer.call(null,id);
});})(layer,id,vid,name,color,buttons_ids))
], null),"clone"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer,id,vid,name,color,buttons_ids){
return (function (){
var seq__31947 = cljs.core.seq.call(null,buttons_ids);
var chunk__31948 = null;
var count__31949 = (0);
var i__31950 = (0);
while(true){
if((i__31950 < count__31949)){
var button_id = cljs.core._nth.call(null,chunk__31948,i__31950);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id,new cljs.core.Keyword("button","value","button/value",-1590525793),""], null)], null));

var G__31955 = seq__31947;
var G__31956 = chunk__31948;
var G__31957 = count__31949;
var G__31958 = (i__31950 + (1));
seq__31947 = G__31955;
chunk__31948 = G__31956;
count__31949 = G__31957;
i__31950 = G__31958;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31947);
if(temp__4657__auto__){
var seq__31947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31947__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__31947__$1);
var G__31959 = cljs.core.chunk_rest.call(null,seq__31947__$1);
var G__31960 = c__19229__auto__;
var G__31961 = cljs.core.count.call(null,c__19229__auto__);
var G__31962 = (0);
seq__31947 = G__31959;
chunk__31948 = G__31960;
count__31949 = G__31961;
i__31950 = G__31962;
continue;
} else {
var button_id = cljs.core.first.call(null,seq__31947__$1);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id,new cljs.core.Keyword("button","value","button/value",-1590525793),""], null)], null));

var G__31963 = cljs.core.next.call(null,seq__31947__$1);
var G__31964 = null;
var G__31965 = (0);
var G__31966 = (0);
seq__31947 = G__31963;
chunk__31948 = G__31964;
count__31949 = G__31965;
i__31950 = G__31966;
continue;
}
} else {
return null;
}
}
break;
}
});})(layer,id,vid,name,color,buttons_ids))
], null),"clear"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer_name_input,id,name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.layer.layer_color_input,id,color], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),name], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout","div.layout",-118565911),(function (){var iter__19198__auto__ = ((function (layer,id,vid,name,color,buttons_ids){
return (function yizhackclj$components$layer$layer_view_$_iter__31951(s__31952){
return (new cljs.core.LazySeq(null,((function (layer,id,vid,name,color,buttons_ids){
return (function (){
var s__31952__$1 = s__31952;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31952__$1);
if(temp__4657__auto__){
var s__31952__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31952__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__31952__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__31954 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__31953 = (0);
while(true){
if((i__31953 < size__19197__auto__)){
var button_id = cljs.core._nth.call(null,c__19196__auto__,i__31953);
cljs.core.chunk_append.call(null,b__31954,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button_view,button_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),button_id], null)));

var G__31967 = (i__31953 + (1));
i__31953 = G__31967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31954),yizhackclj$components$layer$layer_view_$_iter__31951.call(null,cljs.core.chunk_rest.call(null,s__31952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31954),null);
}
} else {
var button_id = cljs.core.first.call(null,s__31952__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button_view,button_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),button_id], null)),yizhackclj$components$layer$layer_view_$_iter__31951.call(null,cljs.core.rest.call(null,s__31952__$2)));
}
} else {
return null;
}
break;
}
});})(layer,id,vid,name,color,buttons_ids))
,null,null));
});})(layer,id,vid,name,color,buttons_ids))
;
return iter__19198__auto__.call(null,buttons_ids);
})()], null)], null);
});
yizhackclj.components.layer.layer_thumb_view = (function yizhackclj$components$layer$layer_thumb_view(layer_id){
var layer = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),layer_id));
var vid = new cljs.core.Keyword("layer","vid","layer/vid",-2120073384).cljs$core$IFn$_invoke$arity$1(layer);
var name = new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer);
var color = new cljs.core.Keyword("layer","color","layer/color",917251830).cljs$core$IFn$_invoke$arity$1(layer);
var buttons_ids = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null)], null)], null),layer_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layer.thumb","div.layer.thumb",-1803803467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_vid),vid))?"selected":null)),cljs.core.str(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.hovered_vid),vid))?" hovered":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (layer,vid,name,color,buttons_ids){
return (function (){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_vid,vid);
});})(layer,vid,name,color,buttons_ids))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),[cljs.core.str("ID: "),cljs.core.str(vid),cljs.core.str(" Name: "),cljs.core.str(name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout","div.layout",-118565911),(function (){var iter__19198__auto__ = ((function (layer,vid,name,color,buttons_ids){
return (function yizhackclj$components$layer$layer_thumb_view_$_iter__31972(s__31973){
return (new cljs.core.LazySeq(null,((function (layer,vid,name,color,buttons_ids){
return (function (){
var s__31973__$1 = s__31973;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31973__$1);
if(temp__4657__auto__){
var s__31973__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31973__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__31973__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__31975 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__31974 = (0);
while(true){
if((i__31974 < size__19197__auto__)){
var button_id = cljs.core._nth.call(null,c__19196__auto__,i__31974);
cljs.core.chunk_append.call(null,b__31975,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button_thumb_view,button_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),button_id], null)));

var G__31976 = (i__31974 + (1));
i__31974 = G__31976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31975),yizhackclj$components$layer$layer_thumb_view_$_iter__31972.call(null,cljs.core.chunk_rest.call(null,s__31973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31975),null);
}
} else {
var button_id = cljs.core.first.call(null,s__31973__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yizhackclj.components.button.button_thumb_view,button_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),button_id], null)),yizhackclj$components$layer$layer_thumb_view_$_iter__31972.call(null,cljs.core.rest.call(null,s__31973__$2)));
}
} else {
return null;
}
break;
}
});})(layer,vid,name,color,buttons_ids))
,null,null));
});})(layer,vid,name,color,buttons_ids))
;
return iter__19198__auto__.call(null,buttons_ids);
})()], null)], null);
});

//# sourceMappingURL=layer.js.map