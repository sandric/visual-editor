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
return (function (p1__25595_SHARP_){
var and__18406__auto__ = pred.call(null,u,p1__25595_SHARP_);
if(cljs.core.truth_(and__18406__auto__)){
return fdb.pred.call(null,p1__25595_SHARP_);
} else {
return and__18406__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__25596_SHARP_){
return pred.call(null,db,p1__25596_SHARP_);
}),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args25597 = [];
var len__19487__auto___25600 = arguments.length;
var i__19488__auto___25601 = (0);
while(true){
if((i__19488__auto___25601 < len__19487__auto___25600)){
args25597.push((arguments[i__19488__auto___25601]));

var G__25602 = (i__19488__auto___25601 + (1));
i__19488__auto___25601 = G__25602;
continue;
} else {
}
break;
}

var G__25599 = args25597.length;
switch (G__25599) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25597.length)].join('')));

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
var args25604 = [];
var len__19487__auto___25607 = arguments.length;
var i__19488__auto___25608 = (0);
while(true){
if((i__19488__auto___25608 < len__19487__auto___25607)){
args25604.push((arguments[i__19488__auto___25608]));

var G__25609 = (i__19488__auto___25608 + (1));
i__19488__auto___25608 = G__25609;
continue;
} else {
}
break;
}

var G__25606 = args25604.length;
switch (G__25606) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25604.length)].join('')));

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
var args25611 = [];
var len__19487__auto___25614 = arguments.length;
var i__19488__auto___25615 = (0);
while(true){
if((i__19488__auto___25615 < len__19487__auto___25614)){
args25611.push((arguments[i__19488__auto___25615]));

var G__25616 = (i__19488__auto___25615 + (1));
i__19488__auto___25615 = G__25616;
continue;
} else {
}
break;
}

var G__25613 = args25611.length;
switch (G__25613) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25611.length)].join('')));

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
var args25622 = [];
var len__19487__auto___25625 = arguments.length;
var i__19488__auto___25626 = (0);
while(true){
if((i__19488__auto___25626 < len__19487__auto___25625)){
args25622.push((arguments[i__19488__auto___25626]));

var G__25627 = (i__19488__auto___25626 + (1));
i__19488__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25624 = args25622.length;
switch (G__25624) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25622.length)].join('')));

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
var args25629 = [];
var len__19487__auto___25632 = arguments.length;
var i__19488__auto___25633 = (0);
while(true){
if((i__19488__auto___25633 < len__19487__auto___25632)){
args25629.push((arguments[i__19488__auto___25633]));

var G__25634 = (i__19488__auto___25633 + (1));
i__19488__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var G__25631 = args25629.length;
switch (G__25631) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25629.length)].join('')));

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
var args25636 = [];
var len__19487__auto___25645 = arguments.length;
var i__19488__auto___25646 = (0);
while(true){
if((i__19488__auto___25646 < len__19487__auto___25645)){
args25636.push((arguments[i__19488__auto___25646]));

var G__25647 = (i__19488__auto___25646 + (1));
i__19488__auto___25646 = G__25647;
continue;
} else {
}
break;
}

var G__25638 = args25636.length;
switch (G__25638) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25636.length)].join('')));

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
var seq__25639_25649 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__25640_25650 = null;
var count__25641_25651 = (0);
var i__25642_25652 = (0);
while(true){
if((i__25642_25652 < count__25641_25651)){
var vec__25643_25653 = cljs.core._nth.call(null,chunk__25640_25650,i__25642_25652);
var __25654 = cljs.core.nth.call(null,vec__25643_25653,(0),null);
var callback_25655 = cljs.core.nth.call(null,vec__25643_25653,(1),null);
callback_25655.call(null,report);

var G__25656 = seq__25639_25649;
var G__25657 = chunk__25640_25650;
var G__25658 = count__25641_25651;
var G__25659 = (i__25642_25652 + (1));
seq__25639_25649 = G__25656;
chunk__25640_25650 = G__25657;
count__25641_25651 = G__25658;
i__25642_25652 = G__25659;
continue;
} else {
var temp__4657__auto___25660 = cljs.core.seq.call(null,seq__25639_25649);
if(temp__4657__auto___25660){
var seq__25639_25661__$1 = temp__4657__auto___25660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25639_25661__$1)){
var c__19229__auto___25662 = cljs.core.chunk_first.call(null,seq__25639_25661__$1);
var G__25663 = cljs.core.chunk_rest.call(null,seq__25639_25661__$1);
var G__25664 = c__19229__auto___25662;
var G__25665 = cljs.core.count.call(null,c__19229__auto___25662);
var G__25666 = (0);
seq__25639_25649 = G__25663;
chunk__25640_25650 = G__25664;
count__25641_25651 = G__25665;
i__25642_25652 = G__25666;
continue;
} else {
var vec__25644_25667 = cljs.core.first.call(null,seq__25639_25661__$1);
var __25668 = cljs.core.nth.call(null,vec__25644_25667,(0),null);
var callback_25669 = cljs.core.nth.call(null,vec__25644_25667,(1),null);
callback_25669.call(null,report);

var G__25670 = cljs.core.next.call(null,seq__25639_25661__$1);
var G__25671 = null;
var G__25672 = (0);
var G__25673 = (0);
seq__25639_25649 = G__25670;
chunk__25640_25650 = G__25671;
count__25641_25651 = G__25672;
i__25642_25652 = G__25673;
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
var args25675 = [];
var len__19487__auto___25684 = arguments.length;
var i__19488__auto___25685 = (0);
while(true){
if((i__19488__auto___25685 < len__19487__auto___25684)){
args25675.push((arguments[i__19488__auto___25685]));

var G__25686 = (i__19488__auto___25685 + (1));
i__19488__auto___25685 = G__25686;
continue;
} else {
}
break;
}

var G__25677 = args25675.length;
switch (G__25677) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25675.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__25674_SHARP_){
return cljs.core.assoc.call(null,p1__25674_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__25678_25688 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__25679_25689 = null;
var count__25680_25690 = (0);
var i__25681_25691 = (0);
while(true){
if((i__25681_25691 < count__25680_25690)){
var vec__25682_25692 = cljs.core._nth.call(null,chunk__25679_25689,i__25681_25691);
var __25693 = cljs.core.nth.call(null,vec__25682_25692,(0),null);
var callback_25694 = cljs.core.nth.call(null,vec__25682_25692,(1),null);
callback_25694.call(null,report);

var G__25695 = seq__25678_25688;
var G__25696 = chunk__25679_25689;
var G__25697 = count__25680_25690;
var G__25698 = (i__25681_25691 + (1));
seq__25678_25688 = G__25695;
chunk__25679_25689 = G__25696;
count__25680_25690 = G__25697;
i__25681_25691 = G__25698;
continue;
} else {
var temp__4657__auto___25699 = cljs.core.seq.call(null,seq__25678_25688);
if(temp__4657__auto___25699){
var seq__25678_25700__$1 = temp__4657__auto___25699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25678_25700__$1)){
var c__19229__auto___25701 = cljs.core.chunk_first.call(null,seq__25678_25700__$1);
var G__25702 = cljs.core.chunk_rest.call(null,seq__25678_25700__$1);
var G__25703 = c__19229__auto___25701;
var G__25704 = cljs.core.count.call(null,c__19229__auto___25701);
var G__25705 = (0);
seq__25678_25688 = G__25702;
chunk__25679_25689 = G__25703;
count__25680_25690 = G__25704;
i__25681_25691 = G__25705;
continue;
} else {
var vec__25683_25706 = cljs.core.first.call(null,seq__25678_25700__$1);
var __25707 = cljs.core.nth.call(null,vec__25683_25706,(0),null);
var callback_25708 = cljs.core.nth.call(null,vec__25683_25706,(1),null);
callback_25708.call(null,report);

var G__25709 = cljs.core.next.call(null,seq__25678_25700__$1);
var G__25710 = null;
var G__25711 = (0);
var G__25712 = (0);
seq__25678_25688 = G__25709;
chunk__25679_25689 = G__25710;
count__25680_25690 = G__25711;
i__25681_25691 = G__25712;
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
var args25713 = [];
var len__19487__auto___25716 = arguments.length;
var i__19488__auto___25717 = (0);
while(true){
if((i__19488__auto___25717 < len__19487__auto___25716)){
args25713.push((arguments[i__19488__auto___25717]));

var G__25718 = (i__19488__auto___25717 + (1));
i__19488__auto___25717 = G__25718;
continue;
} else {
}
break;
}

var G__25715 = args25713.length;
switch (G__25715) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25713.length)].join('')));

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
var seq__25720_25726 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__25721_25727 = null;
var count__25722_25728 = (0);
var i__25723_25729 = (0);
while(true){
if((i__25723_25729 < count__25722_25728)){
var vec__25724_25730 = cljs.core._nth.call(null,chunk__25721_25727,i__25723_25729);
var tag_25731 = cljs.core.nth.call(null,vec__25724_25730,(0),null);
var cb_25732 = cljs.core.nth.call(null,vec__25724_25730,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_25731,cb_25732);

var G__25733 = seq__25720_25726;
var G__25734 = chunk__25721_25727;
var G__25735 = count__25722_25728;
var G__25736 = (i__25723_25729 + (1));
seq__25720_25726 = G__25733;
chunk__25721_25727 = G__25734;
count__25722_25728 = G__25735;
i__25723_25729 = G__25736;
continue;
} else {
var temp__4657__auto___25737 = cljs.core.seq.call(null,seq__25720_25726);
if(temp__4657__auto___25737){
var seq__25720_25738__$1 = temp__4657__auto___25737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25720_25738__$1)){
var c__19229__auto___25739 = cljs.core.chunk_first.call(null,seq__25720_25738__$1);
var G__25740 = cljs.core.chunk_rest.call(null,seq__25720_25738__$1);
var G__25741 = c__19229__auto___25739;
var G__25742 = cljs.core.count.call(null,c__19229__auto___25739);
var G__25743 = (0);
seq__25720_25726 = G__25740;
chunk__25721_25727 = G__25741;
count__25722_25728 = G__25742;
i__25723_25729 = G__25743;
continue;
} else {
var vec__25725_25744 = cljs.core.first.call(null,seq__25720_25738__$1);
var tag_25745 = cljs.core.nth.call(null,vec__25725_25744,(0),null);
var cb_25746 = cljs.core.nth.call(null,vec__25725_25744,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_25745,cb_25746);

var G__25747 = cljs.core.next.call(null,seq__25720_25738__$1);
var G__25748 = null;
var G__25749 = (0);
var G__25750 = (0);
seq__25720_25726 = G__25747;
chunk__25721_25727 = G__25748;
count__25722_25728 = G__25749;
i__25723_25729 = G__25750;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args25751 = [];
var len__19487__auto___25754 = arguments.length;
var i__19488__auto___25755 = (0);
while(true){
if((i__19488__auto___25755 < len__19487__auto___25754)){
args25751.push((arguments[i__19488__auto___25755]));

var G__25756 = (i__19488__auto___25755 + (1));
i__19488__auto___25755 = G__25756;
continue;
} else {
}
break;
}

var G__25753 = args25751.length;
switch (G__25753) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25751.length)].join('')));

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
var args25758 = [];
var len__19487__auto___25764 = arguments.length;
var i__19488__auto___25765 = (0);
while(true){
if((i__19488__auto___25765 < len__19487__auto___25764)){
args25758.push((arguments[i__19488__auto___25765]));

var G__25766 = (i__19488__auto___25765 + (1));
i__19488__auto___25765 = G__25766;
continue;
} else {
}
break;
}

var G__25760 = args25758.length;
switch (G__25760) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25758.length)].join('')));

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
if(typeof datascript.core.t_datascript$core25761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core25761 = (function (conn,tx_data,tx_meta,res,meta25762){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta25762 = meta25762;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core25761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_25763,meta25762__$1){
var self__ = this;
var _25763__$1 = this;
return (new datascript.core.t_datascript$core25761(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta25762__$1));
});})(res))
;

datascript.core.t_datascript$core25761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_25763){
var self__ = this;
var _25763__$1 = this;
return self__.meta25762;
});})(res))
;

datascript.core.t_datascript$core25761.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core25761.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core25761.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core25761.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta25762","meta25762",259348191,null)], null);
});})(res))
;

datascript.core.t_datascript$core25761.cljs$lang$type = true;

datascript.core.t_datascript$core25761.cljs$lang$ctorStr = "datascript.core/t_datascript$core25761";

datascript.core.t_datascript$core25761.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.core/t_datascript$core25761");
});})(res))
;

datascript.core.__GT_t_datascript$core25761 = ((function (res){
return (function datascript$core$__GT_t_datascript$core25761(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta25762){
return (new datascript.core.t_datascript$core25761(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta25762));
});})(res))
;

}

return (new datascript.core.t_datascript$core25761(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
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

if(typeof datascript.core.t_datascript$core25771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core25771 = (function (future_call,f,res,realized,meta25772){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta25772 = meta25772;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core25771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_25773,meta25772__$1){
var self__ = this;
var _25773__$1 = this;
return (new datascript.core.t_datascript$core25771(self__.future_call,self__.f,self__.res,self__.realized,meta25772__$1));
});})(res,realized))
;

datascript.core.t_datascript$core25771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_25773){
var self__ = this;
var _25773__$1 = this;
return self__.meta25772;
});})(res,realized))
;

datascript.core.t_datascript$core25771.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core25771.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
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

datascript.core.t_datascript$core25771.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core25771.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta25772","meta25772",-2082129957,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core25771.cljs$lang$type = true;

datascript.core.t_datascript$core25771.cljs$lang$ctorStr = "datascript.core/t_datascript$core25771";

datascript.core.t_datascript$core25771.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.core/t_datascript$core25771");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core25771 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core25771(future_call__$1,f__$1,res__$1,realized__$1,meta25772){
return (new datascript.core.t_datascript$core25771(future_call__$1,f__$1,res__$1,realized__$1,meta25772));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core25771(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args25774 = [];
var len__19487__auto___25777 = arguments.length;
var i__19488__auto___25778 = (0);
while(true){
if((i__19488__auto___25778 < len__19487__auto___25777)){
args25774.push((arguments[i__19488__auto___25778]));

var G__25779 = (i__19488__auto___25778 + (1));
i__19488__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var G__25776 = args25774.length;
switch (G__25776) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25774.length)].join('')));

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
var args25781 = [];
var len__19487__auto___25784 = arguments.length;
var i__19488__auto___25785 = (0);
while(true){
if((i__19488__auto___25785 < len__19487__auto___25784)){
args25781.push((arguments[i__19488__auto___25785]));

var G__25786 = (i__19488__auto___25785 + (1));
i__19488__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var G__25783 = args25781.length;
switch (G__25783) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25781.length)].join('')));

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