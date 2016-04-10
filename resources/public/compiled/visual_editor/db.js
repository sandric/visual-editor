// Compiled by ClojureScript 1.8.40 {}
goog.provide('visual_editor.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('visual_editor.fixtures');
visual_editor.db.to_json = (function visual_editor$db$to_json(object){
return JSON.stringify(cljs.core.clj__GT_js.call(null,object));
});
visual_editor.db.parse_json = (function visual_editor$db$parse_json(json_string){
return cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json_string),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
visual_editor.db.layer_head = cljs.core.atom.call(null,(0));
visual_editor.db.layer_head_inc = (function visual_editor$db$layer_head_inc(){
return cljs.core.swap_BANG_.call(null,visual_editor.db.layer_head,cljs.core.inc);
});
visual_editor.db.layer_head_dec = (function visual_editor$db$layer_head_dec(){
return cljs.core.swap_BANG_.call(null,visual_editor.db.layer_head,cljs.core.dec);
});
visual_editor.db.layers = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
visual_editor.db.buttons = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
visual_editor.db.edit_mode = reagent.core.atom.call(null,true);
visual_editor.db.hovered_layer_id = reagent.core.atom.call(null,null);
visual_editor.db.selected_layer_id = reagent.core.atom.call(null,(1));
visual_editor.db.hovered_button = reagent.core.atom.call(null,null);
visual_editor.db.selected_button = reagent.core.atom.call(null,null);
visual_editor.db.remove_keyboard = (function visual_editor$db$remove_keyboard(){
cljs.core.reset_BANG_.call(null,visual_editor.db.layers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,visual_editor.db.buttons,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,visual_editor.db.layer_head,(0));
});
visual_editor.db.layer_ids = (function visual_editor$db$layer_ids(){
return cljs.core.take.call(null,cljs.core.deref.call(null,visual_editor.db.layer_head),cljs.core.range.call(null,(1),(cljs.core.deref.call(null,visual_editor.db.layer_head) + (1))));
});
visual_editor.db.layer_by_id = (function visual_editor$db$layer_by_id(layer_id){
return cljs.core.nth.call(null,cljs.core.deref.call(null,visual_editor.db.layers),(layer_id - (1)));
});
visual_editor.db.layer_update = (function visual_editor$db$layer_update(layer_updatable,updates){
return cljs.core.swap_BANG_.call(null,visual_editor.db.layers,(function (layers){
return cljs.core.map.call(null,(function (layer){
if(cljs.core._EQ_.call(null,layer,layer_updatable)){
return cljs.core.merge.call(null,layer,updates);
} else {
return layer;
}
}),layers);
}));
});
visual_editor.db.buttons_by_layer_id = (function visual_editor$db$buttons_by_layer_id(layer_id){
return cljs.core.filter.call(null,(function (button){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id);
}),cljs.core.deref.call(null,visual_editor.db.buttons));
});
visual_editor.db.button = (function visual_editor$db$button(layer_id,row,column){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (button__$1){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button__$1),layer_id)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button__$1),row)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button__$1),column));
}),cljs.core.deref.call(null,visual_editor.db.buttons)));
});
visual_editor.db.button_update = (function visual_editor$db$button_update(button_updatable,updates){
return cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,(function (buttons){
return cljs.core.map.call(null,(function (button){
if(cljs.core._EQ_.call(null,button,button_updatable)){
return cljs.core.merge.call(null,button,updates);
} else {
return button;
}
}),buttons);
}));
});
visual_editor.db.clone_layer = (function visual_editor$db$clone_layer(layer_id){
var layer = visual_editor.db.layer_by_id.call(null,layer_id);
var layer_buttons = visual_editor.db.buttons_by_layer_id.call(null,layer_id);
visual_editor.db.layer_head_inc.call(null);

cljs.core.swap_BANG_.call(null,visual_editor.db.layers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,visual_editor.db.layer_head),new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer)),cljs.core.str("'s clone")].join(''),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer)], null));

var seq__22999 = cljs.core.seq.call(null,layer_buttons);
var chunk__23000 = null;
var count__23001 = (0);
var i__23002 = (0);
while(true){
if((i__23002 < count__23001)){
var button = cljs.core._nth.call(null,chunk__23000,i__23002);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__23003 = seq__22999;
var G__23004 = chunk__23000;
var G__23005 = count__23001;
var G__23006 = (i__23002 + (1));
seq__22999 = G__23003;
chunk__23000 = G__23004;
count__23001 = G__23005;
i__23002 = G__23006;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22999);
if(temp__4657__auto__){
var seq__22999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22999__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__22999__$1);
var G__23007 = cljs.core.chunk_rest.call(null,seq__22999__$1);
var G__23008 = c__19229__auto__;
var G__23009 = cljs.core.count.call(null,c__19229__auto__);
var G__23010 = (0);
seq__22999 = G__23007;
chunk__23000 = G__23008;
count__23001 = G__23009;
i__23002 = G__23010;
continue;
} else {
var button = cljs.core.first.call(null,seq__22999__$1);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__23011 = cljs.core.next.call(null,seq__22999__$1);
var G__23012 = null;
var G__23013 = (0);
var G__23014 = (0);
seq__22999 = G__23011;
chunk__23000 = G__23012;
count__23001 = G__23013;
i__23002 = G__23014;
continue;
}
} else {
return null;
}
}
break;
}
});
visual_editor.db.remove_layer = (function visual_editor$db$remove_layer(layer_id){
visual_editor.db.layer_head_dec.call(null);

cljs.core.swap_BANG_.call(null,visual_editor.db.layers,(function (layers){
return cljs.core.remove.call(null,(function (layer){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer),layer_id);
}),layers);
}));

cljs.core.swap_BANG_.call(null,visual_editor.db.layers,(function (layers){
return cljs.core.map.call(null,(function (layer){
if((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer) < layer_id)){
return layer;
} else {
if((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer) > layer_id)){
return cljs.core.merge.call(null,layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer) - (1))], null));
} else {
return null;
}
}
}),layers);
}));

cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,(function (buttons){
return cljs.core.remove.call(null,(function (button){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id);
}),buttons);
}));

return cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,(function (buttons){
return cljs.core.map.call(null,(function (button){
if((new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button) < layer_id)){
return button;
} else {
if((new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button) > layer_id)){
return cljs.core.merge.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layer-id","layer-id",576786958),(new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button) - (1))], null));
} else {
return null;
}
}
}),buttons);
}));
});
visual_editor.db.clear_layer = (function visual_editor$db$clear_layer(layer_id){
return cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,(function (buttons){
return cljs.core.map.call(null,(function (button){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id)){
return cljs.core.merge.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null));
} else {
return button;
}
}),buttons);
}));
});
visual_editor.db.deserialize_layer = (function visual_editor$db$deserialize_layer(layer_json_string){
var layer_json = visual_editor.db.parse_json.call(null,layer_json_string);
visual_editor.db.layer_head_inc.call(null);

cljs.core.swap_BANG_.call(null,visual_editor.db.layers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,visual_editor.db.layer_head),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer_json),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer_json)], null));

var seq__23019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(layer_json));
var chunk__23020 = null;
var count__23021 = (0);
var i__23022 = (0);
while(true){
if((i__23022 < count__23021)){
var button = cljs.core._nth.call(null,chunk__23020,i__23022);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__23023 = seq__23019;
var G__23024 = chunk__23020;
var G__23025 = count__23021;
var G__23026 = (i__23022 + (1));
seq__23019 = G__23023;
chunk__23020 = G__23024;
count__23021 = G__23025;
i__23022 = G__23026;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23019);
if(temp__4657__auto__){
var seq__23019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23019__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__23019__$1);
var G__23027 = cljs.core.chunk_rest.call(null,seq__23019__$1);
var G__23028 = c__19229__auto__;
var G__23029 = cljs.core.count.call(null,c__19229__auto__);
var G__23030 = (0);
seq__23019 = G__23027;
chunk__23020 = G__23028;
count__23021 = G__23029;
i__23022 = G__23030;
continue;
} else {
var button = cljs.core.first.call(null,seq__23019__$1);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__23031 = cljs.core.next.call(null,seq__23019__$1);
var G__23032 = null;
var G__23033 = (0);
var G__23034 = (0);
seq__23019 = G__23031;
chunk__23020 = G__23032;
count__23021 = G__23033;
i__23022 = G__23034;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('visual_editor.db.deserialize_layer', visual_editor.db.deserialize_layer);
visual_editor.db.deserialize_keyboard = (function visual_editor$db$deserialize_keyboard(keyboard_json_string){
visual_editor.db.remove_keyboard.call(null);

var keyboard_json = visual_editor.db.parse_json.call(null,keyboard_json_string);
var seq__23039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(keyboard_json));
var chunk__23040 = null;
var count__23041 = (0);
var i__23042 = (0);
while(true){
if((i__23042 < count__23041)){
var layer_json = cljs.core._nth.call(null,chunk__23040,i__23042);
visual_editor.db.deserialize_layer.call(null,visual_editor.db.to_json.call(null,layer_json));

var G__23043 = seq__23039;
var G__23044 = chunk__23040;
var G__23045 = count__23041;
var G__23046 = (i__23042 + (1));
seq__23039 = G__23043;
chunk__23040 = G__23044;
count__23041 = G__23045;
i__23042 = G__23046;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23039);
if(temp__4657__auto__){
var seq__23039__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23039__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__23039__$1);
var G__23047 = cljs.core.chunk_rest.call(null,seq__23039__$1);
var G__23048 = c__19229__auto__;
var G__23049 = cljs.core.count.call(null,c__19229__auto__);
var G__23050 = (0);
seq__23039 = G__23047;
chunk__23040 = G__23048;
count__23041 = G__23049;
i__23042 = G__23050;
continue;
} else {
var layer_json = cljs.core.first.call(null,seq__23039__$1);
visual_editor.db.deserialize_layer.call(null,visual_editor.db.to_json.call(null,layer_json));

var G__23051 = cljs.core.next.call(null,seq__23039__$1);
var G__23052 = null;
var G__23053 = (0);
var G__23054 = (0);
seq__23039 = G__23051;
chunk__23040 = G__23052;
count__23041 = G__23053;
i__23042 = G__23054;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('visual_editor.db.deserialize_keyboard', visual_editor.db.deserialize_keyboard);
visual_editor.db.serialize_button = (function visual_editor$db$serialize_button(button){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button);
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button);
var column = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
goog.exportSymbol('visual_editor.db.serialize_button', visual_editor.db.serialize_button);
visual_editor.db.serialize_layer = (function visual_editor$db$serialize_layer(layer){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer);
var buttons = visual_editor.db.buttons_by_layer_id.call(null,id);
var layout = cljs.core.map.call(null,((function (name,color,id,buttons){
return (function (button){
return visual_editor.db.serialize_button.call(null,button);
});})(name,color,id,buttons))
,buttons);
return visual_editor.db.to_json.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout], null));
});
goog.exportSymbol('visual_editor.db.serialize_layer', visual_editor.db.serialize_layer);
visual_editor.db.serialize_keyboard = (function visual_editor$db$serialize_keyboard(){
return clojure.string.join.call(null,",",cljs.core.map.call(null,(function (layer){
return visual_editor.db.serialize_layer.call(null,layer);
}),cljs.core.deref.call(null,visual_editor.db.layers)));
});
goog.exportSymbol('visual_editor.db.serialize_keyboard', visual_editor.db.serialize_keyboard);
visual_editor.db.populate_fixture_keyboard = (function visual_editor$db$populate_fixture_keyboard(){
return visual_editor.db.deserialize_keyboard.call(null,visual_editor.fixtures.keyboard);
});
visual_editor.db.parse_layer = (function visual_editor$db$parse_layer(value){
if(cljs.core.truth_(value.startsWith("LN_"))){
var temp__4657__auto__ = parseInt(cljs.core.subs.call(null,value,(3)));
if(cljs.core.truth_(temp__4657__auto__)){
var layer_id = temp__4657__auto__;
if((cljs.core.not.call(null,isNaN(layer_id))) && ((layer_id <= cljs.core.deref.call(null,visual_editor.db.layer_head))) && ((layer_id > (0)))){
return visual_editor.db.layer_by_id.call(null,layer_id);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=db.js.map