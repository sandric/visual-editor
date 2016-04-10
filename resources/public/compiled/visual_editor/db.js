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

var seq__7992 = cljs.core.seq.call(null,layer_buttons);
var chunk__7993 = null;
var count__7994 = (0);
var i__7995 = (0);
while(true){
if((i__7995 < count__7994)){
var button = cljs.core._nth.call(null,chunk__7993,i__7995);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__7996 = seq__7992;
var G__7997 = chunk__7993;
var G__7998 = count__7994;
var G__7999 = (i__7995 + (1));
seq__7992 = G__7996;
chunk__7993 = G__7997;
count__7994 = G__7998;
i__7995 = G__7999;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7992);
if(temp__4657__auto__){
var seq__7992__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7992__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__7992__$1);
var G__8000 = cljs.core.chunk_rest.call(null,seq__7992__$1);
var G__8001 = c__7021__auto__;
var G__8002 = cljs.core.count.call(null,c__7021__auto__);
var G__8003 = (0);
seq__7992 = G__8000;
chunk__7993 = G__8001;
count__7994 = G__8002;
i__7995 = G__8003;
continue;
} else {
var button = cljs.core.first.call(null,seq__7992__$1);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__8004 = cljs.core.next.call(null,seq__7992__$1);
var G__8005 = null;
var G__8006 = (0);
var G__8007 = (0);
seq__7992 = G__8004;
chunk__7993 = G__8005;
count__7994 = G__8006;
i__7995 = G__8007;
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

var seq__8012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(layer_json));
var chunk__8013 = null;
var count__8014 = (0);
var i__8015 = (0);
while(true){
if((i__8015 < count__8014)){
var button = cljs.core._nth.call(null,chunk__8013,i__8015);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__8016 = seq__8012;
var G__8017 = chunk__8013;
var G__8018 = count__8014;
var G__8019 = (i__8015 + (1));
seq__8012 = G__8016;
chunk__8013 = G__8017;
count__8014 = G__8018;
i__8015 = G__8019;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8012);
if(temp__4657__auto__){
var seq__8012__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8012__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8012__$1);
var G__8020 = cljs.core.chunk_rest.call(null,seq__8012__$1);
var G__8021 = c__7021__auto__;
var G__8022 = cljs.core.count.call(null,c__7021__auto__);
var G__8023 = (0);
seq__8012 = G__8020;
chunk__8013 = G__8021;
count__8014 = G__8022;
i__8015 = G__8023;
continue;
} else {
var button = cljs.core.first.call(null,seq__8012__$1);
cljs.core.swap_BANG_.call(null,visual_editor.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,visual_editor.db.layer_head)], null));

var G__8024 = cljs.core.next.call(null,seq__8012__$1);
var G__8025 = null;
var G__8026 = (0);
var G__8027 = (0);
seq__8012 = G__8024;
chunk__8013 = G__8025;
count__8014 = G__8026;
i__8015 = G__8027;
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
var seq__8032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(keyboard_json));
var chunk__8033 = null;
var count__8034 = (0);
var i__8035 = (0);
while(true){
if((i__8035 < count__8034)){
var layer_json = cljs.core._nth.call(null,chunk__8033,i__8035);
visual_editor.db.deserialize_layer.call(null,visual_editor.db.to_json.call(null,layer_json));

var G__8036 = seq__8032;
var G__8037 = chunk__8033;
var G__8038 = count__8034;
var G__8039 = (i__8035 + (1));
seq__8032 = G__8036;
chunk__8033 = G__8037;
count__8034 = G__8038;
i__8035 = G__8039;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8032);
if(temp__4657__auto__){
var seq__8032__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8032__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8032__$1);
var G__8040 = cljs.core.chunk_rest.call(null,seq__8032__$1);
var G__8041 = c__7021__auto__;
var G__8042 = cljs.core.count.call(null,c__7021__auto__);
var G__8043 = (0);
seq__8032 = G__8040;
chunk__8033 = G__8041;
count__8034 = G__8042;
i__8035 = G__8043;
continue;
} else {
var layer_json = cljs.core.first.call(null,seq__8032__$1);
visual_editor.db.deserialize_layer.call(null,visual_editor.db.to_json.call(null,layer_json));

var G__8044 = cljs.core.next.call(null,seq__8032__$1);
var G__8045 = null;
var G__8046 = (0);
var G__8047 = (0);
seq__8032 = G__8044;
chunk__8033 = G__8045;
count__8034 = G__8046;
i__8035 = G__8047;
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