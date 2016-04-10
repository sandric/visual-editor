// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.buttom');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('yizhackclj.db');
goog.require('yizhackclj.state');
yizhackclj.components.buttom.get_button_color = (function yizhackclj$components$buttom$get_button_color(value,selected,hovered){
if(cljs.core.truth_(selected)){
return "aquamarine";
} else {
if(cljs.core.truth_(hovered)){
return "lavender";
} else {
if(cljs.core.truth_(value.startsWith("LN_"))){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(yizhackclj.db.parse_layer.call(null,value));
} else {
if((cljs.core.count.call(null,value) > (1))){
return "grey";
} else {
return "gainsboro";

}
}
}
}
});
yizhackclj.components.buttom.thumb = (function yizhackclj$components$buttom$thumb(button){
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button);
var column = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.thumb","div.button.thumb",-1976109623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),yizhackclj.components.buttom.get_button_color.call(null,value,false,false),new cljs.core.Keyword(null,"left","left",-399115937),(((column > (6)))?((column * (11)) + (20)):(column * (11))),new cljs.core.Keyword(null,"top","top",-1856271961),((row - (1)) * (11))], null)], null),((cljs.core._EQ_.call(null,cljs.core.count.call(null,value),(1)))?value:null)], null);
});
yizhackclj.components.buttom.button = (function yizhackclj$components$buttom$button(button__$1){
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button__$1);
var column = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button__$1);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button__$1);
if(cljs.core._EQ_.call(null,button__$1,cljs.core.deref.call(null,yizhackclj.state.hovered_button))){
cljs.core.reset_BANG_.call(null,yizhackclj.state.hovered_layer_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(yizhackclj.db.parse_layer.call(null,value)));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),yizhackclj.components.buttom.get_button_color.call(null,value,cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_button),button__$1),cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.hovered_button),button__$1)),new cljs.core.Keyword(null,"opacity","opacity",397153780),((cljs.core._EQ_.call(null,button__$1,cljs.core.deref.call(null,yizhackclj.state.hovered_button)))?0.5:(1)),new cljs.core.Keyword(null,"left","left",-399115937),(((column > (6)))?((column * (55)) + (100)):(column * (55))),new cljs.core.Keyword(null,"top","top",-1856271961),((row - (1)) * (55))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,column,value){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_button,button__$1);

return e.stopPropagation();
} else {
return null;
}
});})(row,column,value))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (row,column,value){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.hovered_button,button__$1);
} else {
return null;
}
});})(row,column,value))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (row,column,value){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.hovered_button,button__$1);
} else {
return null;
}
});})(row,column,value))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),value], null)], null);
});

//# sourceMappingURL=buttom.js.map