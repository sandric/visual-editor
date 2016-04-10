// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.db.keyboard');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('posh.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('yizhackclj.utils');
yizhackclj.db.keyboard.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("layer","button","layer/button",1559345878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null);
yizhackclj.db.keyboard.create_db = (function yizhackclj$db$keyboard$create_db(){
yizhackclj.db.keyboard.conn = datascript.core.create_conn.call(null,yizhackclj.db.keyboard.schema);
});
yizhackclj.db.keyboard.new_entity_BANG_ = (function yizhackclj$db$keyboard$new_entity_BANG_(varmap){
return new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(datascript.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,varmap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1)], null))], null))).call(null,(-1));
});
yizhackclj.db.keyboard.id = cljs.core.atom.call(null,(0));
yizhackclj.db.keyboard.id_inc = (function yizhackclj$db$keyboard$id_inc(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.id,cljs.core.inc);
});
yizhackclj.db.keyboard.id_dec = (function yizhackclj$db$keyboard$id_dec(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.id,cljs.core.dec);
});
yizhackclj.db.keyboard.vid = cljs.core.atom.call(null,(0));
yizhackclj.db.keyboard.vid_inc = (function yizhackclj$db$keyboard$vid_inc(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.vid,cljs.core.inc);
});
yizhackclj.db.keyboard.vid_dec = (function yizhackclj$db$keyboard$vid_dec(){
return cljs.core.swap_BANG_.call(null,yizhackclj.db.keyboard.vid,cljs.core.dec);
});
yizhackclj.db.keyboard.layer_ids = (function yizhackclj$db$keyboard$layer_ids(){
return cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword("layer","name","layer/name",1610851712)], null)], null)));
});
yizhackclj.db.keyboard.layer_by_id = (function yizhackclj$db$keyboard$layer_by_id(layer_id){
return cljs.core.deref.call(null,posh.core.pull.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),layer_id));
});
yizhackclj.db.keyboard.layer_by_vid = (function yizhackclj$db$keyboard$layer_by_vid(vid){
var layer_id = cljs.core.first.call(null,cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?vid","?vid",806066053,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),new cljs.core.Symbol(null,"?vid","?vid",806066053,null)], null)], null),vid)));
return yizhackclj.db.keyboard.layer_by_id.call(null,layer_id);
});
yizhackclj.db.keyboard.clone_layer = (function yizhackclj$db$keyboard$clone_layer(layer_id){
var layer = yizhackclj.db.keyboard.layer_by_id.call(null,layer_id);
var buttons = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"?value","?value",393627875,null),new cljs.core.Symbol(null,"?row","?row",192667645,null),new cljs.core.Symbol(null,"?column","?column",-1649786684,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793),new cljs.core.Symbol(null,"?value","?value",393627875,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","row","button/row",202933993),new cljs.core.Symbol(null,"?row","?row",192667645,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","column","button/column",-1375928483),new cljs.core.Symbol(null,"?column","?column",-1649786684,null)], null)], null),layer_id));
var new_layer = yizhackclj.db.keyboard.new_entity_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),yizhackclj.db.keyboard.vid_inc.call(null),new cljs.core.Keyword("layer","name","layer/name",1610851712),[cljs.core.str(new cljs.core.Keyword("layer","name","layer/name",1610851712).cljs$core$IFn$_invoke$arity$1(layer)),cljs.core.str("'s clone")].join(''),new cljs.core.Keyword("layer","color","layer/color",917251830),new cljs.core.Keyword("layer","color","layer/color",917251830).cljs$core$IFn$_invoke$arity$1(layer)], null));
var seq__25892 = cljs.core.seq.call(null,buttons);
var chunk__25893 = null;
var count__25894 = (0);
var i__25895 = (0);
while(true){
if((i__25895 < count__25894)){
var button = cljs.core._nth.call(null,chunk__25893,i__25895);
datascript.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),yizhackclj.db.keyboard.id_dec.call(null),new cljs.core.Keyword("button","row","button/row",202933993),cljs.core.nth.call(null,button,(2)),new cljs.core.Keyword("button","column","button/column",-1375928483),cljs.core.nth.call(null,button,(3)),new cljs.core.Keyword("button","value","button/value",-1590525793),cljs.core.nth.call(null,button,(1)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new_layer], null)], null));

var G__25896 = seq__25892;
var G__25897 = chunk__25893;
var G__25898 = count__25894;
var G__25899 = (i__25895 + (1));
seq__25892 = G__25896;
chunk__25893 = G__25897;
count__25894 = G__25898;
i__25895 = G__25899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25892);
if(temp__4657__auto__){
var seq__25892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25892__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__25892__$1);
var G__25900 = cljs.core.chunk_rest.call(null,seq__25892__$1);
var G__25901 = c__19229__auto__;
var G__25902 = cljs.core.count.call(null,c__19229__auto__);
var G__25903 = (0);
seq__25892 = G__25900;
chunk__25893 = G__25901;
count__25894 = G__25902;
i__25895 = G__25903;
continue;
} else {
var button = cljs.core.first.call(null,seq__25892__$1);
datascript.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),yizhackclj.db.keyboard.id_dec.call(null),new cljs.core.Keyword("button","row","button/row",202933993),cljs.core.nth.call(null,button,(2)),new cljs.core.Keyword("button","column","button/column",-1375928483),cljs.core.nth.call(null,button,(3)),new cljs.core.Keyword("button","value","button/value",-1590525793),cljs.core.nth.call(null,button,(1)),new cljs.core.Keyword(null,"layer","layer",-1601820589),new_layer], null)], null));

var G__25904 = cljs.core.next.call(null,seq__25892__$1);
var G__25905 = null;
var G__25906 = (0);
var G__25907 = (0);
seq__25892 = G__25904;
chunk__25893 = G__25905;
count__25894 = G__25906;
i__25895 = G__25907;
continue;
}
} else {
return null;
}
}
break;
}
});
yizhackclj.db.keyboard.remove_layer = (function yizhackclj$db$keyboard$remove_layer(layer_id){
var layer = yizhackclj.db.keyboard.layer_by_id.call(null,layer_id);
var layers = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?layer","?layer",-1445822882,null),new cljs.core.Symbol(null,"?later-vid","?later-vid",73776819,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer-id","?layer-id",286036562,null),new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),new cljs.core.Symbol(null,"?vid","?vid",806066053,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?layer","?layer",-1445822882,null),new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),new cljs.core.Symbol(null,"?later-vid","?later-vid",73776819,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"?later-vid","?later-vid",73776819,null),new cljs.core.Symbol(null,"?vid","?vid",806066053,null))], null)], null),layer_id));
var button_references = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793),new cljs.core.Symbol(null,"?val","?val",-44429635,null)], null)], null),[cljs.core.str("LN_"),cljs.core.str(new cljs.core.Keyword(null,"vid","vid",-2034096155).cljs$core$IFn$_invoke$arity$1(layer))].join('')));
var seq__25926_25944 = cljs.core.seq.call(null,button_references);
var chunk__25927_25945 = null;
var count__25928_25946 = (0);
var i__25929_25947 = (0);
while(true){
if((i__25929_25947 < count__25928_25946)){
var button_id_25948 = cljs.core._nth.call(null,chunk__25927_25945,i__25929_25947);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_25948,new cljs.core.Keyword("button","value","button/value",-1590525793),""], null)], null));

var G__25949 = seq__25926_25944;
var G__25950 = chunk__25927_25945;
var G__25951 = count__25928_25946;
var G__25952 = (i__25929_25947 + (1));
seq__25926_25944 = G__25949;
chunk__25927_25945 = G__25950;
count__25928_25946 = G__25951;
i__25929_25947 = G__25952;
continue;
} else {
var temp__4657__auto___25953 = cljs.core.seq.call(null,seq__25926_25944);
if(temp__4657__auto___25953){
var seq__25926_25954__$1 = temp__4657__auto___25953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25926_25954__$1)){
var c__19229__auto___25955 = cljs.core.chunk_first.call(null,seq__25926_25954__$1);
var G__25956 = cljs.core.chunk_rest.call(null,seq__25926_25954__$1);
var G__25957 = c__19229__auto___25955;
var G__25958 = cljs.core.count.call(null,c__19229__auto___25955);
var G__25959 = (0);
seq__25926_25944 = G__25956;
chunk__25927_25945 = G__25957;
count__25928_25946 = G__25958;
i__25929_25947 = G__25959;
continue;
} else {
var button_id_25960 = cljs.core.first.call(null,seq__25926_25954__$1);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_25960,new cljs.core.Keyword("button","value","button/value",-1590525793),""], null)], null));

var G__25961 = cljs.core.next.call(null,seq__25926_25954__$1);
var G__25962 = null;
var G__25963 = (0);
var G__25964 = (0);
seq__25926_25944 = G__25961;
chunk__25927_25945 = G__25962;
count__25928_25946 = G__25963;
i__25929_25947 = G__25964;
continue;
}
} else {
}
}
break;
}

posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),layer_id], null)], null));

yizhackclj.db.keyboard.vid_dec.call(null);

var seq__25930 = cljs.core.seq.call(null,layers);
var chunk__25931 = null;
var count__25932 = (0);
var i__25933 = (0);
while(true){
if((i__25933 < count__25932)){
var vec__25934 = cljs.core._nth.call(null,chunk__25931,i__25933);
var layer_id__$1 = cljs.core.nth.call(null,vec__25934,(0),null);
var later_vid = cljs.core.nth.call(null,vec__25934,(1),null);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),layer_id__$1,new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),(later_vid - (1))], null)], null));

var button_references_25965__$1 = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793),new cljs.core.Symbol(null,"?val","?val",-44429635,null)], null)], null),[cljs.core.str("LN_"),cljs.core.str(later_vid)].join('')));
var seq__25935_25966 = cljs.core.seq.call(null,button_references_25965__$1);
var chunk__25936_25967 = null;
var count__25937_25968 = (0);
var i__25938_25969 = (0);
while(true){
if((i__25938_25969 < count__25937_25968)){
var button_id_25970 = cljs.core._nth.call(null,chunk__25936_25967,i__25938_25969);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_25970,new cljs.core.Keyword("button","value","button/value",-1590525793),[cljs.core.str("LN_"),cljs.core.str((later_vid - (1)))].join('')], null)], null));

var G__25971 = seq__25935_25966;
var G__25972 = chunk__25936_25967;
var G__25973 = count__25937_25968;
var G__25974 = (i__25938_25969 + (1));
seq__25935_25966 = G__25971;
chunk__25936_25967 = G__25972;
count__25937_25968 = G__25973;
i__25938_25969 = G__25974;
continue;
} else {
var temp__4657__auto___25975 = cljs.core.seq.call(null,seq__25935_25966);
if(temp__4657__auto___25975){
var seq__25935_25976__$1 = temp__4657__auto___25975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25935_25976__$1)){
var c__19229__auto___25977 = cljs.core.chunk_first.call(null,seq__25935_25976__$1);
var G__25978 = cljs.core.chunk_rest.call(null,seq__25935_25976__$1);
var G__25979 = c__19229__auto___25977;
var G__25980 = cljs.core.count.call(null,c__19229__auto___25977);
var G__25981 = (0);
seq__25935_25966 = G__25978;
chunk__25936_25967 = G__25979;
count__25937_25968 = G__25980;
i__25938_25969 = G__25981;
continue;
} else {
var button_id_25982 = cljs.core.first.call(null,seq__25935_25976__$1);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_25982,new cljs.core.Keyword("button","value","button/value",-1590525793),[cljs.core.str("LN_"),cljs.core.str((later_vid - (1)))].join('')], null)], null));

var G__25983 = cljs.core.next.call(null,seq__25935_25976__$1);
var G__25984 = null;
var G__25985 = (0);
var G__25986 = (0);
seq__25935_25966 = G__25983;
chunk__25936_25967 = G__25984;
count__25937_25968 = G__25985;
i__25938_25969 = G__25986;
continue;
}
} else {
}
}
break;
}

var G__25987 = seq__25930;
var G__25988 = chunk__25931;
var G__25989 = count__25932;
var G__25990 = (i__25933 + (1));
seq__25930 = G__25987;
chunk__25931 = G__25988;
count__25932 = G__25989;
i__25933 = G__25990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25930);
if(temp__4657__auto__){
var seq__25930__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25930__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__25930__$1);
var G__25991 = cljs.core.chunk_rest.call(null,seq__25930__$1);
var G__25992 = c__19229__auto__;
var G__25993 = cljs.core.count.call(null,c__19229__auto__);
var G__25994 = (0);
seq__25930 = G__25991;
chunk__25931 = G__25992;
count__25932 = G__25993;
i__25933 = G__25994;
continue;
} else {
var vec__25939 = cljs.core.first.call(null,seq__25930__$1);
var layer_id__$1 = cljs.core.nth.call(null,vec__25939,(0),null);
var later_vid = cljs.core.nth.call(null,vec__25939,(1),null);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),layer_id__$1,new cljs.core.Keyword("layer","vid","layer/vid",-2120073384),(later_vid - (1))], null)], null));

var button_references_25995__$1 = cljs.core.deref.call(null,posh.core.q.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?val","?val",-44429635,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?button","?button",1617047900,null),new cljs.core.Keyword("button","value","button/value",-1590525793),new cljs.core.Symbol(null,"?val","?val",-44429635,null)], null)], null),[cljs.core.str("LN_"),cljs.core.str(later_vid)].join('')));
var seq__25940_25996 = cljs.core.seq.call(null,button_references_25995__$1);
var chunk__25941_25997 = null;
var count__25942_25998 = (0);
var i__25943_25999 = (0);
while(true){
if((i__25943_25999 < count__25942_25998)){
var button_id_26000 = cljs.core._nth.call(null,chunk__25941_25997,i__25943_25999);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_26000,new cljs.core.Keyword("button","value","button/value",-1590525793),[cljs.core.str("LN_"),cljs.core.str((later_vid - (1)))].join('')], null)], null));

var G__26001 = seq__25940_25996;
var G__26002 = chunk__25941_25997;
var G__26003 = count__25942_25998;
var G__26004 = (i__25943_25999 + (1));
seq__25940_25996 = G__26001;
chunk__25941_25997 = G__26002;
count__25942_25998 = G__26003;
i__25943_25999 = G__26004;
continue;
} else {
var temp__4657__auto___26005__$1 = cljs.core.seq.call(null,seq__25940_25996);
if(temp__4657__auto___26005__$1){
var seq__25940_26006__$1 = temp__4657__auto___26005__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25940_26006__$1)){
var c__19229__auto___26007 = cljs.core.chunk_first.call(null,seq__25940_26006__$1);
var G__26008 = cljs.core.chunk_rest.call(null,seq__25940_26006__$1);
var G__26009 = c__19229__auto___26007;
var G__26010 = cljs.core.count.call(null,c__19229__auto___26007);
var G__26011 = (0);
seq__25940_25996 = G__26008;
chunk__25941_25997 = G__26009;
count__25942_25998 = G__26010;
i__25943_25999 = G__26011;
continue;
} else {
var button_id_26012 = cljs.core.first.call(null,seq__25940_26006__$1);
posh.core.transact_BANG_.call(null,yizhackclj.db.keyboard.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),button_id_26012,new cljs.core.Keyword("button","value","button/value",-1590525793),[cljs.core.str("LN_"),cljs.core.str((later_vid - (1)))].join('')], null)], null));

var G__26013 = cljs.core.next.call(null,seq__25940_26006__$1);
var G__26014 = null;
var G__26015 = (0);
var G__26016 = (0);
seq__25940_25996 = G__26013;
chunk__25941_25997 = G__26014;
count__25942_25998 = G__26015;
i__25943_25999 = G__26016;
continue;
}
} else {
}
}
break;
}

var G__26017 = cljs.core.next.call(null,seq__25930__$1);
var G__26018 = null;
var G__26019 = (0);
var G__26020 = (0);
seq__25930 = G__26017;
chunk__25931 = G__26018;
count__25932 = G__26019;
i__25933 = G__26020;
continue;
}
} else {
return null;
}
}
break;
}
});
yizhackclj.db.keyboard.remove_keyboard = (function yizhackclj$db$keyboard$remove_keyboard(){
var layers_ids = yizhackclj.db.keyboard.layer_ids.call(null);
cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.id,(0));

cljs.core.reset_BANG_.call(null,yizhackclj.db.keyboard.vid,(0));

var seq__26025 = cljs.core.seq.call(null,layers_ids);
var chunk__26026 = null;
var count__26027 = (0);
var i__26028 = (0);
while(true){
if((i__26028 < count__26027)){
var layer_id = cljs.core._nth.call(null,chunk__26026,i__26028);
yizhackclj.db.keyboard.remove_layer.call(null,layer_id);

var G__26029 = seq__26025;
var G__26030 = chunk__26026;
var G__26031 = count__26027;
var G__26032 = (i__26028 + (1));
seq__26025 = G__26029;
chunk__26026 = G__26030;
count__26027 = G__26031;
i__26028 = G__26032;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26025);
if(temp__4657__auto__){
var seq__26025__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26025__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__26025__$1);
var G__26033 = cljs.core.chunk_rest.call(null,seq__26025__$1);
var G__26034 = c__19229__auto__;
var G__26035 = cljs.core.count.call(null,c__19229__auto__);
var G__26036 = (0);
seq__26025 = G__26033;
chunk__26026 = G__26034;
count__26027 = G__26035;
i__26028 = G__26036;
continue;
} else {
var layer_id = cljs.core.first.call(null,seq__26025__$1);
yizhackclj.db.keyboard.remove_layer.call(null,layer_id);

var G__26037 = cljs.core.next.call(null,seq__26025__$1);
var G__26038 = null;
var G__26039 = (0);
var G__26040 = (0);
seq__26025 = G__26037;
chunk__26026 = G__26038;
count__26027 = G__26039;
i__26028 = G__26040;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=keyboard.js.map