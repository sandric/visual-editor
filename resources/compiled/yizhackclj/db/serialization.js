// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.db.serialization');
goog.require('cljs.core');
goog.require('yizhackclj.utils');
goog.require('posh.core');
goog.require('yizhackclj.db.keyboard');
goog.require('datascript.core');
goog.require('yizhackclj.state');
yizhackclj.db.serialization.generate_button_datom = (function yizhackclj$db$serialization$generate_button_datom(row,column,value,layer){
return datascript.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),yizhackclj.db.keyboard.id_dec.call(null),new cljs.core.Keyword("button","row","button/row",202933993),row,new cljs.core.Keyword("button","column","button/column",-1375928483),column,new cljs.core.Keyword("button","value","button/value",-1590525793),value,new cljs.core.Keyword(null,"layer","layer",-1601820589),layer], null)], null));
});
yizhackclj.db.serialization.generate_layer_datom = (function yizhackclj$db$serialization$generate_layer_datom(name,vid,color,buttons){
var layer = yizhackclj.db.keyboard.new_entity_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),vid,new cljs.core.Keyword("layer","name","layer/name",1610851712),name,new cljs.core.Keyword("layer","color","layer/color",917251830),color], null));
var seq__26880 = cljs.core.seq.call(null,buttons);
var chunk__26881 = null;
var count__26882 = (0);
var i__26883 = (0);
while(true){
if((i__26883 < count__26882)){
var button = cljs.core._nth.call(null,chunk__26881,i__26883);
yizhackclj.db.serialization.generate_button_datom.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),layer);

var G__26884 = seq__26880;
var G__26885 = chunk__26881;
var G__26886 = count__26882;
var G__26887 = (i__26883 + (1));
seq__26880 = G__26884;
chunk__26881 = G__26885;
count__26882 = G__26886;
i__26883 = G__26887;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26880);
if(temp__4657__auto__){
var seq__26880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26880__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__26880__$1);
var G__26888 = cljs.core.chunk_rest.call(null,seq__26880__$1);
var G__26889 = c__19229__auto__;
var G__26890 = cljs.core.count.call(null,c__19229__auto__);
var G__26891 = (0);
seq__26880 = G__26888;
chunk__26881 = G__26889;
count__26882 = G__26890;
i__26883 = G__26891;
continue;
} else {
var button = cljs.core.first.call(null,seq__26880__$1);
yizhackclj.db.serialization.generate_button_datom.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(button),layer);

var G__26892 = cljs.core.next.call(null,seq__26880__$1);
var G__26893 = null;
var G__26894 = (0);
var G__26895 = (0);
seq__26880 = G__26892;
chunk__26881 = G__26893;
count__26882 = G__26894;
i__26883 = G__26895;
continue;
}
} else {
return null;
}
}
break;
}
});
yizhackclj.db.serialization.generate_keyboard_datom = (function yizhackclj$db$serialization$generate_keyboard_datom(keyboard){
cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.vid,(0));

var seq__26900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(keyboard));
var chunk__26901 = null;
var count__26902 = (0);
var i__26903 = (0);
while(true){
if((i__26903 < count__26902)){
var layer = cljs.core._nth.call(null,chunk__26901,i__26903);
yizhackclj.db.keyboard.vid_inc.call(null);

yizhackclj.db.serialization.generate_layer_datom.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"vid","vid",-2034096155).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(layer));

var G__26904 = seq__26900;
var G__26905 = chunk__26901;
var G__26906 = count__26902;
var G__26907 = (i__26903 + (1));
seq__26900 = G__26904;
chunk__26901 = G__26905;
count__26902 = G__26906;
i__26903 = G__26907;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26900);
if(temp__4657__auto__){
var seq__26900__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26900__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__26900__$1);
var G__26908 = cljs.core.chunk_rest.call(null,seq__26900__$1);
var G__26909 = c__19229__auto__;
var G__26910 = cljs.core.count.call(null,c__19229__auto__);
var G__26911 = (0);
seq__26900 = G__26908;
chunk__26901 = G__26909;
count__26902 = G__26910;
i__26903 = G__26911;
continue;
} else {
var layer = cljs.core.first.call(null,seq__26900__$1);
yizhackclj.db.keyboard.vid_inc.call(null);

yizhackclj.db.serialization.generate_layer_datom.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"vid","vid",-2034096155).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(layer),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(layer));

var G__26912 = cljs.core.next.call(null,seq__26900__$1);
var G__26913 = null;
var G__26914 = (0);
var G__26915 = (0);
seq__26900 = G__26912;
chunk__26901 = G__26913;
count__26902 = G__26914;
i__26903 = G__26915;
continue;
}
} else {
return null;
}
}
break;
}
});
yizhackclj.db.serialization.convert_button_to_edn = (function yizhackclj$db$serialization$convert_button_to_edn(button_id){
var button = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),button_id));
var row = new cljs.core.Keyword("button","row","button/row",202933993).cljs$core$IFn$_invoke$arity$1(button);
var column = new cljs.core.Keyword("button","column","button/column",-1375928483).cljs$core$IFn$_invoke$arity$1(button);
var value = new cljs.core.Keyword("button","value","button/value",-1590525793).cljs$core$IFn$_invoke$arity$1(button);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
yizhackclj.db.serialization.convert_layer_to_edn = (function yizhackclj$db$serialization$convert_layer_to_edn(layer_id){
var layer = cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),layer_id));
var name = new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer);
var vid = new cljs.core.Keyword("layer","vid","layer/vid",-2120073384).cljs$core$IFn$_invoke$arity$1(layer);
var color = new cljs.core.Keyword("layer","color","layer/color",917251830).cljs$core$IFn$_invoke$arity$1(layer);
var buttons_ids = cljs.core.sort.call(null,cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null)], null)], null),layer_id)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"vid","vid",-2034096155),vid,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.map.call(null,yizhackclj.db.serialization.convert_button_to_edn,buttons_ids)], null);
});
yizhackclj.db.serialization.convert_keyboard_to_edn = (function yizhackclj$db$serialization$convert_keyboard_to_edn(){
var layers_ids = cljs.core.sort.call(null,cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword("layer","name","layer/name",1610851712)], null)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.map.call(null,yizhackclj.db.serialization.convert_layer_to_edn,layers_ids)], null);
});
yizhackclj.db.serialization.deserialize_layer = (function yizhackclj$db$serialization$deserialize_layer(json){
var parsed_layer = yizhackclj.utils.parse_json.call(null,json);
return yizhackclj.db.serialization.generate_layer_datom.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(parsed_layer),yizhackclj.db.keyboard.vid_inc.call(null),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(parsed_layer),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(parsed_layer));
});
yizhackclj.db.serialization.deserialize_keyboard = (function yizhackclj$db$serialization$deserialize_keyboard(){
return yizhackclj.db.serialization.generate_keyboard_datom.call(null,yizhackclj.utils.parse_json.call(null,cljs.core.deref.call(null,yizhackclj.state.keyboard_data)));
});
goog.exportSymbol('yizhackclj.db.serialization.deserialize_keyboard', yizhackclj.db.serialization.deserialize_keyboard);
yizhackclj.db.serialization.serialize_keyboard = (function yizhackclj$db$serialization$serialize_keyboard(){
return yizhackclj.utils.to_json.call(null,yizhackclj.db.serialization.convert_keyboard_to_edn.call(null));
});
goog.exportSymbol('yizhackclj.db.serialization.serialize_keyboard', yizhackclj.db.serialization.serialize_keyboard);
yizhackclj.db.serialization.s = (function yizhackclj$db$serialization$s(){
return cljs.core.deref.call(null,yizhackclj.state.keyboard_data);
});
goog.exportSymbol('yizhackclj.db.serialization.s', yizhackclj.db.serialization.s);
yizhackclj.db.serialization.set_keyboard_data = (function yizhackclj$db$serialization$set_keyboard_data(new_keyboard_data){
return cljs.core.reset_BANG_.call(null,yizhackclj.state.keyboard_data,new_keyboard_data);
});
goog.exportSymbol('yizhackclj.db.serialization.set_keyboard_data', yizhackclj.db.serialization.set_keyboard_data);

//# sourceMappingURL=serialization.js.map