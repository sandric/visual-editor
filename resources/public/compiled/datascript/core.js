// Compiled by ClojureScript 1.8.40 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__24530_SHARP_){
var and__18406__auto__ = pred.call(null,u,p1__24530_SHARP_);
if(cljs.core.truth_(and__18406__auto__)){
return fdb.pred.call(null,p1__24530_SHARP_);
} else {
return and__18406__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__24531_SHARP_){
return pred.call(null,db,p1__24531_SHARP_);
}),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args24532 = [];
var len__19487__auto___24535 = arguments.length;
var i__19488__auto___24536 = (0);
while(true){
if((i__19488__auto___24536 < len__19487__auto___24535)){
args24532.push((arguments[i__19488__auto___24536]));

var G__24537 = (i__19488__auto___24536 + (1));
i__19488__auto___24536 = G__24537;
continue;
} else {
}
break;
}

var G__24534 = args24532.length;
switch (G__24534) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24532.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args24539 = [];
var len__19487__auto___24542 = arguments.length;
var i__19488__auto___24543 = (0);
while(true){
if((i__19488__auto___24543 < len__19487__auto___24542)){
args24539.push((arguments[i__19488__auto___24543]));

var G__24544 = (i__19488__auto___24543 + (1));
i__19488__auto___24543 = G__24544;
continue;
} else {
}
break;
}

var G__24541 = args24539.length;
switch (G__24541) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24539.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args24546 = [];
var len__19487__auto___24549 = arguments.length;
var i__19488__auto___24550 = (0);
while(true){
if((i__19488__auto___24550 < len__19487__auto___24549)){
args24546.push((arguments[i__19488__auto___24550]));

var G__24551 = (i__19488__auto___24550 + (1));
i__19488__auto___24550 = G__24551;
continue;
} else {
}
break;
}

var G__24548 = args24546.length;
switch (G__24548) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24546.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__18406__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__18406__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__18406__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args24557 = [];
var len__19487__auto___24560 = arguments.length;
var i__19488__auto___24561 = (0);
while(true){
if((i__19488__auto___24561 < len__19487__auto___24560)){
args24557.push((arguments[i__19488__auto___24561]));

var G__24562 = (i__19488__auto___24561 + (1));
i__19488__auto___24561 = G__24562;
continue;
} else {
}
break;
}

var G__24559 = args24557.length;
switch (G__24559) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24557.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args24564 = [];
var len__19487__auto___24567 = arguments.length;
var i__19488__auto___24568 = (0);
while(true){
if((i__19488__auto___24568 < len__19487__auto___24567)){
args24564.push((arguments[i__19488__auto___24568]));

var G__24569 = (i__19488__auto___24568 + (1));
i__19488__auto___24568 = G__24569;
continue;
} else {
}
break;
}

var G__24566 = args24564.length;
switch (G__24566) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24564.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args24571 = [];
var len__19487__auto___24580 = arguments.length;
var i__19488__auto___24581 = (0);
while(true){
if((i__19488__auto___24581 < len__19487__auto___24580)){
args24571.push((arguments[i__19488__auto___24581]));

var G__24582 = (i__19488__auto___24581 + (1));
i__19488__auto___24581 = G__24582;
continue;
} else {
}
break;
}

var G__24573 = args24571.length;
switch (G__24573) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24571.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__24574_24584 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__24575_24585 = null;
var count__24576_24586 = (0);
var i__24577_24587 = (0);
while(true){
if((i__24577_24587 < count__24576_24586)){
var vec__24578_24588 = cljs.core._nth.call(null,chunk__24575_24585,i__24577_24587);
var __24589 = cljs.core.nth.call(null,vec__24578_24588,(0),null);
var callback_24590 = cljs.core.nth.call(null,vec__24578_24588,(1),null);
callback_24590.call(null,report);

var G__24591 = seq__24574_24584;
var G__24592 = chunk__24575_24585;
var G__24593 = count__24576_24586;
var G__24594 = (i__24577_24587 + (1));
seq__24574_24584 = G__24591;
chunk__24575_24585 = G__24592;
count__24576_24586 = G__24593;
i__24577_24587 = G__24594;
continue;
} else {
var temp__4657__auto___24595 = cljs.core.seq.call(null,seq__24574_24584);
if(temp__4657__auto___24595){
var seq__24574_24596__$1 = temp__4657__auto___24595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24574_24596__$1)){
var c__19229__auto___24597 = cljs.core.chunk_first.call(null,seq__24574_24596__$1);
var G__24598 = cljs.core.chunk_rest.call(null,seq__24574_24596__$1);
var G__24599 = c__19229__auto___24597;
var G__24600 = cljs.core.count.call(null,c__19229__auto___24597);
var G__24601 = (0);
seq__24574_24584 = G__24598;
chunk__24575_24585 = G__24599;
count__24576_24586 = G__24600;
i__24577_24587 = G__24601;
continue;
} else {
var vec__24579_24602 = cljs.core.first.call(null,seq__24574_24596__$1);
var __24603 = cljs.core.nth.call(null,vec__24579_24602,(0),null);
var callback_24604 = cljs.core.nth.call(null,vec__24579_24602,(1),null);
callback_24604.call(null,report);

var G__24605 = cljs.core.next.call(null,seq__24574_24596__$1);
var G__24606 = null;
var G__24607 = (0);
var G__24608 = (0);
seq__24574_24584 = G__24605;
chunk__24575_24585 = G__24606;
count__24576_24586 = G__24607;
i__24577_24587 = G__24608;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args24610 = [];
var len__19487__auto___24619 = arguments.length;
var i__19488__auto___24620 = (0);
while(true){
if((i__19488__auto___24620 < len__19487__auto___24619)){
args24610.push((arguments[i__19488__auto___24620]));

var G__24621 = (i__19488__auto___24620 + (1));
i__19488__auto___24620 = G__24621;
continue;
} else {
}
break;
}

var G__24612 = args24610.length;
switch (G__24612) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24610.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__24609_SHARP_){
return cljs.core.assoc.call(null,p1__24609_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__24613_24623 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__24614_24624 = null;
var count__24615_24625 = (0);
var i__24616_24626 = (0);
while(true){
if((i__24616_24626 < count__24615_24625)){
var vec__24617_24627 = cljs.core._nth.call(null,chunk__24614_24624,i__24616_24626);
var __24628 = cljs.core.nth.call(null,vec__24617_24627,(0),null);
var callback_24629 = cljs.core.nth.call(null,vec__24617_24627,(1),null);
callback_24629.call(null,report);

var G__24630 = seq__24613_24623;
var G__24631 = chunk__24614_24624;
var G__24632 = count__24615_24625;
var G__24633 = (i__24616_24626 + (1));
seq__24613_24623 = G__24630;
chunk__24614_24624 = G__24631;
count__24615_24625 = G__24632;
i__24616_24626 = G__24633;
continue;
} else {
var temp__4657__auto___24634 = cljs.core.seq.call(null,seq__24613_24623);
if(temp__4657__auto___24634){
var seq__24613_24635__$1 = temp__4657__auto___24634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24613_24635__$1)){
var c__19229__auto___24636 = cljs.core.chunk_first.call(null,seq__24613_24635__$1);
var G__24637 = cljs.core.chunk_rest.call(null,seq__24613_24635__$1);
var G__24638 = c__19229__auto___24636;
var G__24639 = cljs.core.count.call(null,c__19229__auto___24636);
var G__24640 = (0);
seq__24613_24623 = G__24637;
chunk__24614_24624 = G__24638;
count__24615_24625 = G__24639;
i__24616_24626 = G__24640;
continue;
} else {
var vec__24618_24641 = cljs.core.first.call(null,seq__24613_24635__$1);
var __24642 = cljs.core.nth.call(null,vec__24618_24641,(0),null);
var callback_24643 = cljs.core.nth.call(null,vec__24618_24641,(1),null);
callback_24643.call(null,report);

var G__24644 = cljs.core.next.call(null,seq__24613_24635__$1);
var G__24645 = null;
var G__24646 = (0);
var G__24647 = (0);
seq__24613_24623 = G__24644;
chunk__24614_24624 = G__24645;
count__24615_24625 = G__24646;
i__24616_24626 = G__24647;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args24648 = [];
var len__19487__auto___24651 = arguments.length;
var i__19488__auto___24652 = (0);
while(true){
if((i__19488__auto___24652 < len__19487__auto___24651)){
args24648.push((arguments[i__19488__auto___24652]));

var G__24653 = (i__19488__auto___24652 + (1));
i__19488__auto___24652 = G__24653;
continue;
} else {
}
break;
}

var G__24650 = args24648.length;
switch (G__24650) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24648.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__24655_24661 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__24656_24662 = null;
var count__24657_24663 = (0);
var i__24658_24664 = (0);
while(true){
if((i__24658_24664 < count__24657_24663)){
var vec__24659_24665 = cljs.core._nth.call(null,chunk__24656_24662,i__24658_24664);
var tag_24666 = cljs.core.nth.call(null,vec__24659_24665,(0),null);
var cb_24667 = cljs.core.nth.call(null,vec__24659_24665,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_24666,cb_24667);

var G__24668 = seq__24655_24661;
var G__24669 = chunk__24656_24662;
var G__24670 = count__24657_24663;
var G__24671 = (i__24658_24664 + (1));
seq__24655_24661 = G__24668;
chunk__24656_24662 = G__24669;
count__24657_24663 = G__24670;
i__24658_24664 = G__24671;
continue;
} else {
var temp__4657__auto___24672 = cljs.core.seq.call(null,seq__24655_24661);
if(temp__4657__auto___24672){
var seq__24655_24673__$1 = temp__4657__auto___24672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24655_24673__$1)){
var c__19229__auto___24674 = cljs.core.chunk_first.call(null,seq__24655_24673__$1);
var G__24675 = cljs.core.chunk_rest.call(null,seq__24655_24673__$1);
var G__24676 = c__19229__auto___24674;
var G__24677 = cljs.core.count.call(null,c__19229__auto___24674);
var G__24678 = (0);
seq__24655_24661 = G__24675;
chunk__24656_24662 = G__24676;
count__24657_24663 = G__24677;
i__24658_24664 = G__24678;
continue;
} else {
var vec__24660_24679 = cljs.core.first.call(null,seq__24655_24673__$1);
var tag_24680 = cljs.core.nth.call(null,vec__24660_24679,(0),null);
var cb_24681 = cljs.core.nth.call(null,vec__24660_24679,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_24680,cb_24681);

var G__24682 = cljs.core.next.call(null,seq__24655_24673__$1);
var G__24683 = null;
var G__24684 = (0);
var G__24685 = (0);
seq__24655_24661 = G__24682;
chunk__24656_24662 = G__24683;
count__24657_24663 = G__24684;
i__24658_24664 = G__24685;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args24686 = [];
var len__19487__auto___24689 = arguments.length;
var i__19488__auto___24690 = (0);
while(true){
if((i__19488__auto___24690 < len__19487__auto___24689)){
args24686.push((arguments[i__19488__auto___24690]));

var G__24691 = (i__19488__auto___24690 + (1));
i__19488__auto___24690 = G__24691;
continue;
} else {
}
break;
}

var G__24688 = args24686.length;
switch (G__24688) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24686.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args24693 = [];
var len__19487__auto___24699 = arguments.length;
var i__19488__auto___24700 = (0);
while(true){
if((i__19488__auto___24700 < len__19487__auto___24699)){
args24693.push((arguments[i__19488__auto___24700]));

var G__24701 = (i__19488__auto___24700 + (1));
i__19488__auto___24700 = G__24701;
continue;
} else {
}
break;
}

var G__24695 = args24693.length;
switch (G__24695) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24693.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core24696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core24696 = (function (conn,tx_data,tx_meta,res,meta24697){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta24697 = meta24697;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core24696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_24698,meta24697__$1){
var self__ = this;
var _24698__$1 = this;
return (new datascript.core.t_datascript$core24696(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta24697__$1));
});})(res))
;

datascript.core.t_datascript$core24696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_24698){
var self__ = this;
var _24698__$1 = this;
return self__.meta24697;
});})(res))
;

datascript.core.t_datascript$core24696.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core24696.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core24696.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core24696.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta24697","meta24697",-2107181249,null)], null);
});})(res))
;

datascript.core.t_datascript$core24696.cljs$lang$type = true;

datascript.core.t_datascript$core24696.cljs$lang$ctorStr = "datascript.core/t_datascript$core24696";

datascript.core.t_datascript$core24696.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.core/t_datascript$core24696");
});})(res))
;

datascript.core.__GT_t_datascript$core24696 = ((function (res){
return (function datascript$core$__GT_t_datascript$core24696(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta24697){
return (new datascript.core.t_datascript$core24696(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta24697));
});})(res))
;

}

return (new datascript.core.t_datascript$core24696(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core24706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core24706 = (function (future_call,f,res,realized,meta24707){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta24707 = meta24707;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core24706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_24708,meta24707__$1){
var self__ = this;
var _24708__$1 = this;
return (new datascript.core.t_datascript$core24706(self__.future_call,self__.f,self__.res,self__.realized,meta24707__$1));
});})(res,realized))
;

datascript.core.t_datascript$core24706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_24708){
var self__ = this;
var _24708__$1 = this;
return self__.meta24707;
});})(res,realized))
;

datascript.core.t_datascript$core24706.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core24706.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core24706.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core24706.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta24707","meta24707",-1527613149,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core24706.cljs$lang$type = true;

datascript.core.t_datascript$core24706.cljs$lang$ctorStr = "datascript.core/t_datascript$core24706";

datascript.core.t_datascript$core24706.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.core/t_datascript$core24706");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core24706 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core24706(future_call__$1,f__$1,res__$1,realized__$1,meta24707){
return (new datascript.core.t_datascript$core24706(future_call__$1,f__$1,res__$1,realized__$1,meta24707));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core24706(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args24709 = [];
var len__19487__auto___24712 = arguments.length;
var i__19488__auto___24713 = (0);
while(true){
if((i__19488__auto___24713 < len__19487__auto___24712)){
args24709.push((arguments[i__19488__auto___24713]));

var G__24714 = (i__19488__auto___24713 + (1));
i__19488__auto___24713 = G__24714;
continue;
} else {
}
break;
}

var G__24711 = args24709.length;
switch (G__24711) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24709.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args24716 = [];
var len__19487__auto___24719 = arguments.length;
var i__19488__auto___24720 = (0);
while(true){
if((i__19488__auto___24720 < len__19487__auto___24719)){
args24716.push((arguments[i__19488__auto___24720]));

var G__24721 = (i__19488__auto___24720 + (1));
i__19488__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var G__24718 = args24716.length;
switch (G__24718) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24716.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map