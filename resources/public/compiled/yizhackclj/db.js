// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('yizhackclj.fixtures');
yizhackclj.db.to_json = (function yizhackclj$db$to_json(object){
return JSON.stringify(cljs.core.clj__GT_js.call(null,object),null,(2));
});
yizhackclj.db.parse_json = (function yizhackclj$db$parse_json(json_string){
return cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json_string),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
yizhackclj.db.layer_head = cljs.core.atom.call(null,(0));
yizhackclj.db.layer_head_inc = (function yizhackclj$db$layer_head_inc(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.layer_head,cljs.core.inc);
});
yizhackclj.db.layer_head_dec = (function yizhackclj$db$layer_head_dec(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.layer_head,cljs.core.dec);
});
yizhackclj.db.layers = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
yizhackclj.db.buttons = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
yizhackclj.db.remove_keyboard = (function yizhackclj$db$remove_keyboard(){
cljs.core.reset_BANG_.call(null,yizhackclj.db.layers,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,yizhackclj.db.buttons,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,yizhackclj.db.layer_head,(0));
});
yizhackclj.db.layer_ids = (function yizhackclj$db$layer_ids(){
return cljs.core.take.call(null,cljs.core.deref.call(null,yizhackclj.db.layer_head),cljs.core.range.call(null,(1),(cljs.core.deref.call(null,yizhackclj.db.layer_head) + (1))));
});
yizhackclj.db.layer_by_id = (function yizhackclj$db$layer_by_id(layer_id){
return cljs.core.nth.call(null,cljs.core.deref.call(null,yizhackclj.db.layers),(layer_id - (1)));
});
yizhackclj.db.layer_update = (function yizhackclj$db$layer_update(layer_updatable,updates){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.layers,(function (layers){
return cljs.core.map.call(null,(function (layer){
if(cljs.core._EQ_.call(null,layer,layer_updatable)){
return cljs.core.merge.call(null,layer,updates);
} else {
return layer;
}
}),layers);
}));
});
yizhackclj.db.buttons_by_layer_id = (function yizhackclj$db$buttons_by_layer_id(layer_id){
return cljs.core.filter.call(null,(function (button){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id);
}),cljs.core.deref.call(null,yizhackclj.db.buttons));
});
yizhackclj.db.button = (function yizhackclj$db$button(layer_id,row,column){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (button__$1){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button__$1),layer_id)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button__$1),row)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button__$1),column));
}),cljs.core.deref.call(null,yizhackclj.db.buttons)));
});
yizhackclj.db.button_update = (function yizhackclj$db$button_update(button_updatable,updates){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,(function (buttons){
return cljs.core.map.call(null,(function (button){
if(cljs.core._EQ_.call(null,button,button_updatable)){
return cljs.core.merge.call(null,button,updates);
} else {
return button;
}
}),buttons);
}));
});
yizhackclj.db.clone_layer = (function yizhackclj$db$clone_layer(layer_id){
var layer = yizhackclj.db.layer_by_id.call(null,layer_id);
var layer_buttons = yizhackclj.db.buttons_by_layer_id.call(null,layer_id);
yizhackclj.db.layer_head_inc.call(null);

cljs.core.swap_BANG_.call(null,yizhackclj.db.layers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,yizhackclj.db.layer_head),new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer)),cljs.core.str("'s clone")].join(''),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer)], null));

var seq__38181 = cljs.core.seq.call(null,layer_buttons);
var chunk__38182 = null;
var count__38183 = (0);
var i__38184 = (0);
while(true){
if((i__38184 < count__38183)){
var button = cljs.core._nth.call(null,chunk__38182,i__38184);
cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,yizhackclj.db.layer_head)], null));

var G__38185 = seq__38181;
var G__38186 = chunk__38182;
var G__38187 = count__38183;
var G__38188 = (i__38184 + (1));
seq__38181 = G__38185;
chunk__38182 = G__38186;
count__38183 = G__38187;
i__38184 = G__38188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38181);
if(temp__4657__auto__){
var seq__38181__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38181__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__38181__$1);
var G__38189 = cljs.core.chunk_rest.call(null,seq__38181__$1);
var G__38190 = c__19229__auto__;
var G__38191 = cljs.core.count.call(null,c__19229__auto__);
var G__38192 = (0);
seq__38181 = G__38189;
chunk__38182 = G__38190;
count__38183 = G__38191;
i__38184 = G__38192;
continue;
} else {
var button = cljs.core.first.call(null,seq__38181__$1);
cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,yizhackclj.db.layer_head)], null));

var G__38193 = cljs.core.next.call(null,seq__38181__$1);
var G__38194 = null;
var G__38195 = (0);
var G__38196 = (0);
seq__38181 = G__38193;
chunk__38182 = G__38194;
count__38183 = G__38195;
i__38184 = G__38196;
continue;
}
} else {
return null;
}
}
break;
}
});
yizhackclj.db.remove_layer = (function yizhackclj$db$remove_layer(layer_id){
yizhackclj.db.layer_head_dec.call(null);

cljs.core.swap_BANG_.call(null,yizhackclj.db.layers,(function (layers){
return cljs.core.remove.call(null,(function (layer){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer),layer_id);
}),layers);
}));

cljs.core.swap_BANG_.call(null,yizhackclj.db.layers,(function (layers){
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

cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,(function (buttons){
return cljs.core.remove.call(null,(function (button){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id);
}),buttons);
}));

return cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,(function (buttons){
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
yizhackclj.db.clear_layer = (function yizhackclj$db$clear_layer(layer_id){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,(function (buttons){
return cljs.core.map.call(null,(function (button){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layer-id","layer-id",576786958).cljs$core$IFn$_invoke$arity$1(button),layer_id)){
return cljs.core.merge.call(null,button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null));
} else {
return button;
}
}),buttons);
}));
});
yizhackclj.db.deserialize_layer = (function yizhackclj$db$deserialize_layer(layer_json_string){
var layer_json = yizhackclj.db.parse_json.call(null,layer_json_string);
yizhackclj.db.layer_head_inc.call(null);

cljs.core.swap_BANG_.call(null,yizhackclj.db.layers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,yizhackclj.db.layer_head),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer_json),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer_json)], null));

var seq__38201 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(layer_json));
var chunk__38202 = null;
var count__38203 = (0);
var i__38204 = (0);
while(true){
if((i__38204 < count__38203)){
var button = cljs.core._nth.call(null,chunk__38202,i__38204);
cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,yizhackclj.db.layer_head)], null));

var G__38205 = seq__38201;
var G__38206 = chunk__38202;
var G__38207 = count__38203;
var G__38208 = (i__38204 + (1));
seq__38201 = G__38205;
chunk__38202 = G__38206;
count__38203 = G__38207;
i__38204 = G__38208;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38201);
if(temp__4657__auto__){
var seq__38201__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38201__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__38201__$1);
var G__38209 = cljs.core.chunk_rest.call(null,seq__38201__$1);
var G__38210 = c__19229__auto__;
var G__38211 = cljs.core.count.call(null,c__19229__auto__);
var G__38212 = (0);
seq__38201 = G__38209;
chunk__38202 = G__38210;
count__38203 = G__38211;
i__38204 = G__38212;
continue;
} else {
var button = cljs.core.first.call(null,seq__38201__$1);
cljs.core.swap_BANG_.call(null,yizhackclj.db.buttons,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"layer-id","layer-id",576786958),cljs.core.deref.call(null,yizhackclj.db.layer_head)], null));

var G__38213 = cljs.core.next.call(null,seq__38201__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__38201 = G__38213;
chunk__38202 = G__38214;
count__38203 = G__38215;
i__38204 = G__38216;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('yizhackclj.db.deserialize_layer', yizhackclj.db.deserialize_layer);
yizhackclj.db.deserialize_keyboard = (function yizhackclj$db$deserialize_keyboard(keyboard_json_string){
yizhackclj.db.remove_keyboard.call(null);

var keyboard_json = yizhackclj.db.parse_json.call(null,keyboard_json_string);
var seq__38221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(keyboard_json));
var chunk__38222 = null;
var count__38223 = (0);
var i__38224 = (0);
while(true){
if((i__38224 < count__38223)){
var layer_json = cljs.core._nth.call(null,chunk__38222,i__38224);
yizhackclj.db.deserialize_layer.call(null,yizhackclj.db.to_json.call(null,layer_json));

var G__38225 = seq__38221;
var G__38226 = chunk__38222;
var G__38227 = count__38223;
var G__38228 = (i__38224 + (1));
seq__38221 = G__38225;
chunk__38222 = G__38226;
count__38223 = G__38227;
i__38224 = G__38228;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38221);
if(temp__4657__auto__){
var seq__38221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38221__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__38221__$1);
var G__38229 = cljs.core.chunk_rest.call(null,seq__38221__$1);
var G__38230 = c__19229__auto__;
var G__38231 = cljs.core.count.call(null,c__19229__auto__);
var G__38232 = (0);
seq__38221 = G__38229;
chunk__38222 = G__38230;
count__38223 = G__38231;
i__38224 = G__38232;
continue;
} else {
var layer_json = cljs.core.first.call(null,seq__38221__$1);
yizhackclj.db.deserialize_layer.call(null,yizhackclj.db.to_json.call(null,layer_json));

var G__38233 = cljs.core.next.call(null,seq__38221__$1);
var G__38234 = null;
var G__38235 = (0);
var G__38236 = (0);
seq__38221 = G__38233;
chunk__38222 = G__38234;
count__38223 = G__38235;
i__38224 = G__38236;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('yizhackclj.db.deserialize_keyboard', yizhackclj.db.deserialize_keyboard);
yizhackclj.db.serialize_keyboard = (function yizhackclj$db$serialize_keyboard(){
return yizhackclj.db.to_json.call(null,cljs.core.deref.call(null,yizhackclj.db.buttons).call(null));
});
goog.exportSymbol('yizhackclj.db.serialize_keyboard', yizhackclj.db.serialize_keyboard);
yizhackclj.db.populate_fixture_keyboard = (function yizhackclj$db$populate_fixture_keyboard(){
return yizhackclj.db.deserialize_keyboard.call(null,yizhackclj.fixtures.keyboard);
});
yizhackclj.db.parse_layer = (function yizhackclj$db$parse_layer(value){
if(cljs.core.truth_(value.startsWith("LN_"))){
var temp__4657__auto__ = parseInt(cljs.core.subs.call(null,value,(3)));
if(cljs.core.truth_(temp__4657__auto__)){
var layer_id = temp__4657__auto__;
if((cljs.core.not.call(null,isNaN(layer_id))) && ((layer_id <= cljs.core.deref.call(null,yizhackclj.db.layer_head))) && ((layer_id > (0)))){
return yizhackclj.db.layer_by_id.call(null,layer_id);
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