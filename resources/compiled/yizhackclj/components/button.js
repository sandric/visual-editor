// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.components.button');
goog.require('cljs.core');
goog.require('yizhackclj.utils');
goog.require('posh.core');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('yizhackclj.db.keyboard');
goog.require('yizhackclj.state');
yizhackclj.components.button.button_value_input = (function yizhackclj$components$button$button_value_input(button_id,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(4),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
document.getElementById("layers_select").value = (0);

document.getElementById("control_select").value = (0);

return posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id,new cljs.core.Keyword("button","value","button/value",-1590525793),e.target.value], null)], null));
})], null)], null);
});
yizhackclj.components.button.button_functor_select = (function yizhackclj$components$button$button_functor_select(layer_ids){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#layers_select","select#layers_select",-34204838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
if(cljs.core.not_EQ_.call(null,e.target.value,(0))){
document.getElementById("control_select").value = (0);

return posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.deref.call(null,yizhackclj.state.selected_button_id),new cljs.core.Keyword("button","value","button/value",-1590525793),[cljs.core.str("LN_"),cljs.core.str(e.target.value)].join('')], null)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),"Select layer transition"], null),(function (){var iter__19198__auto__ = (function yizhackclj$components$button$button_functor_select_$_iter__26767(s__26768){
return (new cljs.core.LazySeq(null,(function (){
var s__26768__$1 = s__26768;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26768__$1);
if(temp__4657__auto__){
var s__26768__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26768__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__26768__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__26770 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__26769 = (0);
while(true){
if((i__26769 < size__19197__auto__)){
var layer_id = cljs.core._nth.call(null,c__19196__auto__,i__26769);
cljs.core.chunk_append.call(null,b__26770,(function (){var layer = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),layer_id));
var vid = new cljs.core.Keyword("layer","vid","layer/vid",-2120073384).cljs$core$IFn$_invoke$arity$1(layer);
var name = new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),vid], null),name], null);
})());

var G__26771 = (i__26769 + (1));
i__26769 = G__26771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26770),yizhackclj$components$button$button_functor_select_$_iter__26767.call(null,cljs.core.chunk_rest.call(null,s__26768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26770),null);
}
} else {
var layer_id = cljs.core.first.call(null,s__26768__$2);
return cljs.core.cons.call(null,(function (){var layer = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),layer_id));
var vid = new cljs.core.Keyword("layer","vid","layer/vid",-2120073384).cljs$core$IFn$_invoke$arity$1(layer);
var name = new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),vid], null),name], null);
})(),yizhackclj$components$button$button_functor_select_$_iter__26767.call(null,cljs.core.rest.call(null,s__26768__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,layer_ids);
})()], null);
});
yizhackclj.components.button.button_control_select = (function yizhackclj$components$button$button_control_select(layer_ids){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#control_select","select#control_select",1884233304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
if(cljs.core.not_EQ_.call(null,e.target.value,(0))){
document.getElementById("layers_select").value = (0);

return posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.deref.call(null,yizhackclj.state.selected_button_id),new cljs.core.Keyword("button","value","button/value",-1590525793),e.target.value], null)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),"Select control button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LSHIFT"], null),"Left Shift"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RSHIFT"], null),"Right Shift"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LCTRL"], null),"Left Control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RCTRL"], null),"Right Control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LALT"], null),"Left Alt"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RALT"], null),"Right Alt"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"SPC"], null),"Space"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"BKSPC"], null),"Backspace"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"TAB"], null),"Tab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ENTR"], null),"Enter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ESC"], null),"Escape"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"UP"], null),"Arrow Up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"DOWN"], null),"Arrow Down"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LEFT"], null),"Arrow Left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RIGHT"], null),"Arrow Right"], null)], null);
});
yizhackclj.components.button.color_for_functor_button = (function yizhackclj$components$button$color_for_functor_button(functor){
var vid = yizhackclj.utils.parse_layer.call(null,functor);
var layer = yizhackclj.db.keyboard.layer_by_vid.call(null,vid);
return new cljs.core.Keyword("layer","color","layer/color",917251830).cljs$core$IFn$_invoke$arity$1(layer);
});
yizhackclj.components.button.get_button_color = (function yizhackclj$components$button$get_button_color(value,selected,hovered){
if(cljs.core.truth_(selected)){
return "aquamarine";
} else {
if(cljs.core.truth_(hovered)){
return "lavender";
} else {
if(cljs.core.truth_(value.startsWith("LN_"))){
return yizhackclj.components.button.color_for_functor_button.call(null,value);
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
yizhackclj.components.button.button_view = (function yizhackclj$components$button$button_view(button_id){
var hovered = reagent.core.atom.call(null,false);
return ((function (hovered){
return (function (){
var button = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),button_id));
var row = new cljs.core.Keyword("button","row","button/row",202933993).cljs$core$IFn$_invoke$arity$1(button);
var column = new cljs.core.Keyword("button","column","button/column",-1375928483).cljs$core$IFn$_invoke$arity$1(button);
var value = new cljs.core.Keyword("button","value","button/value",-1590525793).cljs$core$IFn$_invoke$arity$1(button);
if(cljs.core.truth_(cljs.core.deref.call(null,hovered))){
cljs.core.reset_BANG_.call(null,yizhackclj.state.hovered_vid,yizhackclj.utils.parse_layer.call(null,value));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button","div.button",-1553026367),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),yizhackclj.components.button.get_button_color.call(null,value,cljs.core._EQ_.call(null,cljs.core.deref.call(null,yizhackclj.state.selected_button_id),button_id),cljs.core.deref.call(null,hovered)),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,hovered))?0.5:(1)),new cljs.core.Keyword(null,"left","left",-399115937),(((column > (6)))?((column * (55)) + (100)):(column * (55))),new cljs.core.Keyword(null,"top","top",-1856271961),((row - (1)) * (55))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (button,row,column,value,hovered){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
cljs.core.reset_BANG_.call(null,yizhackclj.state.selected_button_id,button_id);

return e.stopPropagation();
} else {
return null;
}
});})(button,row,column,value,hovered))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (button,row,column,value,hovered){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
return cljs.core.reset_BANG_.call(null,hovered,true);
} else {
return null;
}
});})(button,row,column,value,hovered))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (button,row,column,value,hovered){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,yizhackclj.state.edit_mode))){
return cljs.core.reset_BANG_.call(null,hovered,false);
} else {
return null;
}
});})(button,row,column,value,hovered))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),value], null)], null);
});
;})(hovered))
});
yizhackclj.components.button.button_thumb_view = (function yizhackclj$components$button$button_thumb_view(button_id){
var button = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),button_id));
var row = new cljs.core.Keyword("button","row","button/row",202933993).cljs$core$IFn$_invoke$arity$1(button);
var column = new cljs.core.Keyword("button","column","button/column",-1375928483).cljs$core$IFn$_invoke$arity$1(button);
var value = new cljs.core.Keyword("button","value","button/value",-1590525793).cljs$core$IFn$_invoke$arity$1(button);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.thumb","div.button.thumb",-1976109623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),yizhackclj.components.button.get_button_color.call(null,value,false,false),new cljs.core.Keyword(null,"left","left",-399115937),(((column > (6)))?((column * (11)) + (20)):(column * (11))),new cljs.core.Keyword(null,"top","top",-1856271961),((row - (1)) * (11))], null)], null),((cljs.core._EQ_.call(null,cljs.core.count.call(null,value),(1)))?value:null)], null);
});

//# sourceMappingURL=button.js.map