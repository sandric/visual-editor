// Compiled by ClojureScript 1.8.40 {}
goog.provide('visual_editor.components.button_form');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('visual_editor.db');
goog.require('visual_editor.components.button');
visual_editor.components.button_form.button_form = (function visual_editor$components$button_form$button_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.edit","div.edit",1748816207),(cljs.core.truth_((function (){var and__18406__auto__ = cljs.core.deref.call(null,visual_editor.db.edit_mode);
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.deref.call(null,visual_editor.db.selected_button);
} else {
return and__18406__auto__;
}
})())?(function (){var button = visual_editor.db.button.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visual_editor.db.selected_button)),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visual_editor.db.selected_button)),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,visual_editor.db.selected_button)));
var layers_select_value = reagent.core.atom.call(null,(0));
var control_select_value = reagent.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),(4),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (button,layers_select_value,control_select_value){
return (function (e){
cljs.core.reset_BANG_.call(null,layers_select_value,(0));

cljs.core.reset_BANG_.call(null,control_select_value,(0));

return visual_editor.db.button_update.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e.target.value], null));
});})(button,layers_select_value,control_select_value))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,layers_select_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (button,layers_select_value,control_select_value){
return (function (e){
if(cljs.core.not_EQ_.call(null,e.target.value,(0))){
cljs.core.reset_BANG_.call(null,control_select_value,(0));

cljs.core.reset_BANG_.call(null,layers_select_value,e.target.value);

return visual_editor.db.button_update.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str("LN_"),cljs.core.str(e.target.value)].join('')], null));
} else {
return null;
}
});})(button,layers_select_value,control_select_value))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),"Select layer transition"], null),(function (){var iter__19198__auto__ = ((function (button,layers_select_value,control_select_value){
return (function visual_editor$components$button_form$button_form_$_iter__23255(s__23256){
return (new cljs.core.LazySeq(null,((function (button,layers_select_value,control_select_value){
return (function (){
var s__23256__$1 = s__23256;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23256__$1);
if(temp__4657__auto__){
var s__23256__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23256__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__23256__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__23258 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__23257 = (0);
while(true){
if((i__23257 < size__19197__auto__)){
var layer = cljs.core._nth.call(null,c__19196__auto__,i__23257);
cljs.core.chunk_append.call(null,b__23258,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__23259 = (i__23257 + (1));
i__23257 = G__23259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23258),visual_editor$components$button_form$button_form_$_iter__23255.call(null,cljs.core.chunk_rest.call(null,s__23256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23258),null);
}
} else {
var layer = cljs.core.first.call(null,s__23256__$2);
return cljs.core.cons.call(null,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),visual_editor$components$button_form$button_form_$_iter__23255.call(null,cljs.core.rest.call(null,s__23256__$2)));
}
} else {
return null;
}
break;
}
});})(button,layers_select_value,control_select_value))
,null,null));
});})(button,layers_select_value,control_select_value))
;
return iter__19198__auto__.call(null,cljs.core.deref.call(null,visual_editor.db.layers));
})()], null),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,control_select_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (button,layers_select_value,control_select_value){
return (function (e){
if(cljs.core.not_EQ_.call(null,e.target.value,(0))){
cljs.core.reset_BANG_.call(null,layers_select_value,(0));

cljs.core.reset_BANG_.call(null,control_select_value,e.target.value);

return visual_editor.db.button_update.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),e.target.value], null));
} else {
return null;
}
});})(button,layers_select_value,control_select_value))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),"Select control button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LSHIFT"], null),"Left Shift"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RSHIFT"], null),"Right Shift"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LCTRL"], null),"Left Control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RCTRL"], null),"Right Control"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LALT"], null),"Left Alt"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RALT"], null),"Right Alt"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"SPC"], null),"Space"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"BKSPC"], null),"Backspace"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"TAB"], null),"Tab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ENTR"], null),"Enter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"ESC"], null),"Escape"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"UP"], null),"Arrow Up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"DOWN"], null),"Arrow Down"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"LEFT"], null),"Arrow Left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"RIGHT"], null),"Arrow Right"], null)], null)], null);
})():null)], null);
});

//# sourceMappingURL=button_form.js.map