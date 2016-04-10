// Compiled by ClojureScript 1.8.40 {}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.arrays');
goog.require('datascript.btset');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.tx0 = (536870912);
datascript.db.default_schema = null;
datascript.db.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.db.neg_number_QMARK_ = (function datascript$db$neg_number_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});






/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__18418__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return d__$1.__hash = datascript.db.hash_datom.call(null,d__$1);
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__18406__auto__ = (o instanceof datascript.db.Datom);
if(and__18406__auto__){
return datascript.db.equiv_datom.call(null,d__$1,o);
} else {
return and__18406__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.db.seq_datom.call(null,d__$1);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,null);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,nf);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i,not_found);
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.db.assoc_datom.call(null,d__$1,k,v__$1);
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.db/Datom");
});

datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom = (function datascript$db$datom(var_args){
var args24120 = [];
var len__19487__auto___24123 = arguments.length;
var i__19488__auto___24124 = (0);
while(true){
if((i__19488__auto___24124 < len__19487__auto___24123)){
args24120.push((arguments[i__19488__auto___24124]));

var G__24125 = (i__19488__auto___24124 + (1));
i__19488__auto___24124 = G__24125;
continue;
} else {
}
break;
}

var G__24122 = args24120.length;
switch (G__24122) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24120.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,datascript.db.tx0,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;
datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (cljs.core._EQ_.call(null,d.e,o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d.added),d.tx),d.v),d.a),d.e);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__24128 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__24128)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__24128)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__24128)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"v",G__24128)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__24128)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__24128)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__24128)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,"added",G__24128)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"tx",G__24128)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__24128)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var args24129 = [];
var len__19487__auto___24134 = arguments.length;
var i__19488__auto___24135 = (0);
while(true){
if((i__19488__auto___24135 < len__19487__auto___24134)){
args24129.push((arguments[i__19488__auto___24135]));

var G__24136 = (i__19488__auto___24135 + (1));
i__19488__auto___24135 = G__24136;
continue;
} else {
}
break;
}

var G__24131 = args24129.length;
switch (G__24131) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24129.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__24132 = i;
switch (G__24132) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str("Datom/-nth: Index out of bounds: "),cljs.core.str(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__24133 = i;
switch (G__24133) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;
datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__24141 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__24141) {
case "e":
return (new datascript.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.db.IllegalArgumentException([cljs.core.str("invalid key for #datascript/Datom: "),cljs.core.str(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.call(null,datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__18406__auto__ = o1;
if(cljs.core.truth_(and__18406__auto__)){
return o2;
} else {
return and__18406__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_num = (function datascript$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__18406__auto__ = n1;
if(cljs.core.truth_(and__18406__auto__)){
return n2;
} else {
return and__18406__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.db.cmp_val = (function datascript$db$cmp_val(o1,o2){
if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2))){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__20275__auto__ = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__20275__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__20275__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__20275__auto__ = (d1.e - d2.e);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__20275__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = (d1.e - d2.e);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__20275__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__20275__auto__)){
var c__20275__auto____$1 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__20275__auto____$1)){
var c__20275__auto____$2 = (d1.e - d2.e);
if(((0) === c__20275__auto____$2)){
var c__20275__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__20275__auto____$3)){
return (0);
} else {
return c__20275__auto____$3;
}
} else {
return c__20275__auto____$2;
}
} else {
return c__20275__auto____$1;
}
} else {
return c__20275__auto__;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null)))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__19081__auto__ = (((data == null))?null:data);
var m__19082__auto__ = (datascript.db._search[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,data,pattern);
} else {
var m__19082__auto____$1 = (datascript.db._search["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,data,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__19081__auto__ = (((db == null))?null:db);
var m__19082__auto__ = (datascript.db._datoms[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,db,index,components);
} else {
var m__19082__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__19081__auto__ = (((db == null))?null:db);
var m__19082__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,db,index,components);
} else {
var m__19082__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__19081__auto__ = (((db == null))?null:db);
var m__19082__auto__ = (datascript.db._index_range[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,db,attr,start,end);
} else {
var m__19082__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,db,attr,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null)))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__19081__auto__ = (((db == null))?null:db);
var m__19082__auto__ = (datascript.db._schema[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,db);
} else {
var m__19082__auto____$1 = (datascript.db._schema["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,db);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__19081__auto__ = (((db == null))?null:db);
var m__19082__auto__ = (datascript.db._attrs_by[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,db,property);
} else {
var m__19082__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,db,property);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
}
});










/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k24146,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__24148 = (((k24146 instanceof cljs.core.Keyword))?k24146.fqn:null);
switch (G__24148) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24146,else__19043__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#datascript.db.DB{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$ = true;

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24145){
var self__ = this;
var G__24145__$1 = this;
return (new cljs.core.RecordIter((0),G__24145__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
var self__ = this;
var this__19035__auto____$1 = this;
var h__18853__auto__ = self__.__hash;
if(!((h__18853__auto__ == null))){
return h__18853__auto__;
} else {
var h__18853__auto____$1 = cljs.core.hash_imap.call(null,this__19035__auto____$1);
self__.__hash = h__18853__auto____$1;

return h__18853__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
var self__ = this;
var this__19036__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18406__auto__ = other__19037__auto__;
if(cljs.core.truth_(and__18406__auto__)){
var and__18406__auto____$1 = (this__19036__auto____$1.constructor === other__19037__auto__.constructor);
if(and__18406__auto____$1){
return cljs.core.equiv_map.call(null,this__19036__auto____$1,other__19037__auto__);
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__24145){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__24149 = cljs.core.keyword_identical_QMARK_;
var expr__24150 = k__19048__auto__;
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__24150))){
return (new datascript.db.DB(G__24145,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__24150))){
return (new datascript.db.DB(self__.schema,G__24145,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__24150))){
return (new datascript.db.DB(self__.schema,self__.eavt,G__24145,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__24150))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__24145,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__24150))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__24145,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__24150))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__24145,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24149.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__24150))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__24145,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__24145),null));
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__24145){
var self__ = this;
var this__19039__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__24145,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null)], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/DB");
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"datascript.db/DB");
});

datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,null,null,null));
});

datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__24147){
return (new datascript.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__24147),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__24147),null,cljs.core.dissoc.call(null,G__24147,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)),null));
});


datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.DB.prototype.cljs$core$ICounted$ = true;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = true;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = true;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_db.call(null,db__$1);
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = true;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.empty_db.call(null,db__$1.schema);
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = true;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = true;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs),(new datascript.db.Datom(null,null,null,null,null)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,attr))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Attribute"),cljs.core.str(cljs.core.pr_str.call(null,attr))].join(''),"should be marked as :db/index true");
}

datascript.db.validate_attr.call(null,attr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),start),attr),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null)));

return datascript.btset.slice.call(null,db__$1.avet,datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null),datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null));
});

datascript.db.DB.prototype.datascript$db$IDB$ = true;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.db.DB.prototype.datascript$db$ISearch$ = true;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__24152 = pattern;
var e = cljs.core.nth.call(null,vec__24152,(0),null);
var a = cljs.core.nth.call(null,vec__24152,(1),null);
var v = cljs.core.nth.call(null,vec__24152,(2),null);
var tx = cljs.core.nth.call(null,vec__24152,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.db.Datom(null,a,v,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
} else {
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return datascript.btset.slice.call(null,avet,(new datascript.db.Datom(null,a,v,null,null)));
} else {
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__24152,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__18406__auto__ = ((!((x == null)))?(((false) || (x.datascript$db$ISearch$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x));
if(and__18406__auto__){
var and__18406__auto____$1 = ((!((x == null)))?(((false) || (x.datascript$db$IIndexAccess$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x));
if(and__18406__auto____$1){
if(!((x == null))){
if((false) || (x.datascript$db$IDB$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
}
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k24168,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__24170 = (((k24168 instanceof cljs.core.Keyword))?k24168.fqn:null);
switch (G__24170) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24168,else__19043__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#datascript.db.FilteredDB{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24167){
var self__ = this;
var G__24167__$1 = this;
return (new cljs.core.RecordIter((0),G__24167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
var self__ = this;
var this__19035__auto____$1 = this;
var h__18853__auto__ = self__.__hash;
if(!((h__18853__auto__ == null))){
return h__18853__auto__;
} else {
var h__18853__auto____$1 = cljs.core.hash_imap.call(null,this__19035__auto____$1);
self__.__hash = h__18853__auto____$1;

return h__18853__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
var self__ = this;
var this__19036__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18406__auto__ = other__19037__auto__;
if(cljs.core.truth_(and__18406__auto__)){
var and__18406__auto____$1 = (this__19036__auto____$1.constructor === other__19037__auto__.constructor);
if(and__18406__auto____$1){
return cljs.core.equiv_map.call(null,this__19036__auto____$1,other__19037__auto__);
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__24167){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__24171 = cljs.core.keyword_identical_QMARK_;
var expr__24172 = k__19048__auto__;
if(cljs.core.truth_(pred__24171.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__24172))){
return (new datascript.db.FilteredDB(G__24167,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24171.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__24172))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__24167,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__24167),null));
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__24167){
var self__ = this;
var this__19039__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__24167,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/FilteredDB");
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"datascript.db/FilteredDB");
});

datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred){
return (new datascript.db.FilteredDB(unfiltered_db,pred,null,null,null));
});

datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__24169){
return (new datascript.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__24169),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__24169),null,cljs.core.dissoc.call(null,G__24169,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397)),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_fdb.call(null,db__$1);
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = true;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = true;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = true;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = true;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema.call(null,db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = true;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._search.call(null,db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
return null;
}
}
}
}
}
}
});
datascript.db.multimap = (function datascript$db$multimap(e,m){
return cljs.core.reduce.call(null,(function (acc,p__24177){
var vec__24178 = p__24177;
var k = cljs.core.nth.call(null,vec__24178,(0),null);
var v = cljs.core.nth.call(null,vec__24178,(1),null);
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return datascript.db.multimap.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__19198__auto__ = (function datascript$db$rschema_$_iter__24193(s__24194){
return (new cljs.core.LazySeq(null,(function (){
var s__24194__$1 = s__24194;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24194__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__24204 = cljs.core.first.call(null,xs__5205__auto__);
var a = cljs.core.nth.call(null,vec__24204,(0),null);
var kv = cljs.core.nth.call(null,vec__24204,(1),null);
var iterys__19194__auto__ = ((function (s__24194__$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__){
return (function datascript$db$rschema_$_iter__24193_$_iter__24195(s__24196){
return (new cljs.core.LazySeq(null,((function (s__24194__$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__24196__$1 = s__24196;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24196__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var vec__24206 = cljs.core.first.call(null,xs__5205__auto____$1);
var k = cljs.core.nth.call(null,vec__24206,(0),null);
var v = cljs.core.nth.call(null,vec__24206,(1),null);
var iterys__19194__auto__ = ((function (s__24196__$1,s__24194__$1,vec__24206,k,v,xs__5205__auto____$1,temp__4657__auto____$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__){
return (function datascript$db$rschema_$_iter__24193_$_iter__24195_$_iter__24197(s__24198){
return (new cljs.core.LazySeq(null,((function (s__24196__$1,s__24194__$1,vec__24206,k,v,xs__5205__auto____$1,temp__4657__auto____$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__24198__$1 = s__24198;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__24198__$1);
if(temp__4657__auto____$2){
var s__24198__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24198__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__24198__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__24200 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__24199 = (0);
while(true){
if((i__24199 < size__19197__auto__)){
var prop = cljs.core._nth.call(null,c__19196__auto__,i__24199);
cljs.core.chunk_append.call(null,b__24200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__24207 = (i__24199 + (1));
i__24199 = G__24207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24200),datascript$db$rschema_$_iter__24193_$_iter__24195_$_iter__24197.call(null,cljs.core.chunk_rest.call(null,s__24198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24200),null);
}
} else {
var prop = cljs.core.first.call(null,s__24198__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$db$rschema_$_iter__24193_$_iter__24195_$_iter__24197.call(null,cljs.core.rest.call(null,s__24198__$2)));
}
} else {
return null;
}
break;
}
});})(s__24196__$1,s__24194__$1,vec__24206,k,v,xs__5205__auto____$1,temp__4657__auto____$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__24196__$1,s__24194__$1,vec__24206,k,v,xs__5205__auto____$1,temp__4657__auto____$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__))
;
var fs__19195__auto__ = cljs.core.seq.call(null,iterys__19194__auto__.call(null,datascript.db.attr__GT_properties.call(null,k,v)));
if(fs__19195__auto__){
return cljs.core.concat.call(null,fs__19195__auto__,datascript$db$rschema_$_iter__24193_$_iter__24195.call(null,cljs.core.rest.call(null,s__24196__$1)));
} else {
var G__24208 = cljs.core.rest.call(null,s__24196__$1);
s__24196__$1 = G__24208;
continue;
}
} else {
return null;
}
break;
}
});})(s__24194__$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__24194__$1,vec__24204,a,kv,xs__5205__auto__,temp__4657__auto__))
;
var fs__19195__auto__ = cljs.core.seq.call(null,iterys__19194__auto__.call(null,kv));
if(fs__19195__auto__){
return cljs.core.concat.call(null,fs__19195__auto__,datascript$db$rschema_$_iter__24193.call(null,cljs.core.rest.call(null,s__24194__$1)));
} else {
var G__24209 = cljs.core.rest.call(null,s__24194__$1);
s__24194__$1 = G__24209;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,schema);
})());
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.fromArray([a,cljs.core.PersistentArrayMap.fromArray([k,v], true, false)], true, false))),cljs.core.str(", expected one of "),cljs.core.str(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__24216_24222 = cljs.core.seq.call(null,schema);
var chunk__24217_24223 = null;
var count__24218_24224 = (0);
var i__24219_24225 = (0);
while(true){
if((i__24219_24225 < count__24218_24224)){
var vec__24220_24226 = cljs.core._nth.call(null,chunk__24217_24223,i__24219_24225);
var a_24227 = cljs.core.nth.call(null,vec__24220_24226,(0),null);
var kv_24228 = cljs.core.nth.call(null,vec__24220_24226,(1),null);
var comp_QMARK__24229 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_24228,false);
datascript.db.validate_schema_key.call(null,a_24227,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_24228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__18406__auto__ = comp_QMARK__24229;
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_24228),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__18406__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_24227),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_24227,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a_24227,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_24228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a_24227,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_24228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a_24227,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_24228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__24230 = seq__24216_24222;
var G__24231 = chunk__24217_24223;
var G__24232 = count__24218_24224;
var G__24233 = (i__24219_24225 + (1));
seq__24216_24222 = G__24230;
chunk__24217_24223 = G__24231;
count__24218_24224 = G__24232;
i__24219_24225 = G__24233;
continue;
} else {
var temp__4657__auto___24234 = cljs.core.seq.call(null,seq__24216_24222);
if(temp__4657__auto___24234){
var seq__24216_24235__$1 = temp__4657__auto___24234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24216_24235__$1)){
var c__19229__auto___24236 = cljs.core.chunk_first.call(null,seq__24216_24235__$1);
var G__24237 = cljs.core.chunk_rest.call(null,seq__24216_24235__$1);
var G__24238 = c__19229__auto___24236;
var G__24239 = cljs.core.count.call(null,c__19229__auto___24236);
var G__24240 = (0);
seq__24216_24222 = G__24237;
chunk__24217_24223 = G__24238;
count__24218_24224 = G__24239;
i__24219_24225 = G__24240;
continue;
} else {
var vec__24221_24241 = cljs.core.first.call(null,seq__24216_24235__$1);
var a_24242 = cljs.core.nth.call(null,vec__24221_24241,(0),null);
var kv_24243 = cljs.core.nth.call(null,vec__24221_24241,(1),null);
var comp_QMARK__24244 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_24243,false);
datascript.db.validate_schema_key.call(null,a_24242,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_24243),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__18406__auto__ = comp_QMARK__24244;
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_24243),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__18406__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_24242),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_24242,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a_24242,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_24243),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a_24242,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_24243),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a_24242,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_24243),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__24245 = cljs.core.next.call(null,seq__24216_24235__$1);
var G__24246 = null;
var G__24247 = (0);
var G__24248 = (0);
seq__24216_24222 = G__24245;
chunk__24217_24223 = G__24246;
count__24218_24224 = G__24247;
i__24219_24225 = G__24248;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var args24249 = [];
var len__19487__auto___24252 = arguments.length;
var i__19488__auto___24253 = (0);
while(true){
if((i__19488__auto___24253 < len__19487__auto___24252)){
args24249.push((arguments[i__19488__auto___24253]));

var G__24254 = (i__19488__auto___24253 + (1));
i__19488__auto___24253 = G__24254;
continue;
} else {
}
break;
}

var G__24251 = args24249.length;
switch (G__24251) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24249.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.call(null,datascript.db.default_schema);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),datascript.db.validate_schema.call(null,schema),new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.db.tx0,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.db.rschema.call(null,schema)], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;
datascript.db.init_db = (function datascript$db$init_db(var_args){
var args24256 = [];
var len__19487__auto___24259 = arguments.length;
var i__19488__auto___24260 = (0);
while(true){
if((i__19488__auto___24260 < len__19487__auto___24259)){
args24256.push((arguments[i__19488__auto___24260]));

var G__24261 = (i__19488__auto___24260 + (1));
i__19488__auto___24260 = G__24261;
continue;
} else {
}
break;
}

var G__24258 = args24256.length;
switch (G__24258) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24256.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.call(null,datoms,datascript.db.default_schema);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
if(cljs.core.empty_QMARK_.call(null,datoms)){
return datascript.db.empty_db.call(null,schema);
} else {
var _ = datascript.db.validate_schema.call(null,schema);
var rschema = datascript.db.rschema.call(null,schema);
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = datascript.arrays.into_array.call(null,datoms);
var eavt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.db.cmp_datoms_eavt_quick),datascript.db.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.db.cmp_datoms_aevt_quick),datascript.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt){
return (function (arr,d){
if(cljs.core.contains_QMARK_.call(null,indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt))
,[],datoms).sort(datascript.db.cmp_datoms_avet_quick);
var avet = datascript.btset._btset_from_sorted_arr.call(null,avet_datoms,datascript.db.cmp_datoms_avet);
var max_eid = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core._rseq.call(null,eavt)));
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid))
),cljs.core.max,datascript.db.tx0,eavt);
return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),rschema], null));
}
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;
datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var and__18406__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));
if(and__18406__auto__){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__24263 = cljs.core.next.call(null,xs);
var G__24264 = cljs.core.next.call(null,ys);
xs = G__24263;
ys = G__24264;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__18406__auto__;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var or__18418__auto__ = db.__hash;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var or__18418__auto__ = db.__hash;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__18406__auto__ = ((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB));
if(and__18406__auto__){
var and__18406__auto____$1 = cljs.core._EQ_.call(null,datascript.db._schema.call(null,db),datascript.db._schema.call(null,other));
if(and__18406__auto____$1){
return datascript.db.equiv_db_index.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.db._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.db._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__24265){
var map__24270 = p__24265;
var map__24270__$1 = ((((!((map__24270 == null)))?((((map__24270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24270):map__24270);
var schema = cljs.core.get.call(null,map__24270__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__24270__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.db.init_db.call(null,cljs.core.map.call(null,((function (map__24270,map__24270__$1,schema,datoms){
return (function (p__24272){
var vec__24273 = p__24272;
var e = cljs.core.nth.call(null,vec__24273,(0),null);
var a = cljs.core.nth.call(null,vec__24273,(1),null);
var v = cljs.core.nth.call(null,vec__24273,(2),null);
var tx = cljs.core.nth.call(null,vec__24273,(3),null);
return (new datascript.db.Datom(e,a,v,tx,true));
});})(map__24270,map__24270__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
datascript.db.validate_attr.call(null,a,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,t),v),a),e),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null)));
} else {
}

return (new datascript.db.Datom(datascript.db.entid_some.call(null,db,e),a,(cljs.core.truth_((function (){var and__18406__auto__ = cljs.core.some_QMARK_.call(null,v);
if(and__18406__auto__){
return datascript.db.ref_QMARK_.call(null,db,a);
} else {
return and__18406__auto__;
}
})())?datascript.db.entid_strict.call(null,db,v):v),datascript.db.entid_some.call(null,db,t),null));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__24274){
var vec__24277 = p__24274;
var c0 = cljs.core.nth.call(null,vec__24277,(0),null);
var c1 = cljs.core.nth.call(null,vec__24277,(1),null);
var c2 = cljs.core.nth.call(null,vec__24277,(2),null);
var c3 = cljs.core.nth.call(null,vec__24277,(3),null);
var G__24278 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__24278) {
case "eavt":
return datascript.db.resolve_datom.call(null,db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.db.resolve_datom.call(null,db,c1,c0,c2,c3);

break;
case "avet":
return datascript.db.resolve_datom.call(null,db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k24281,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__24283 = (((k24281 instanceof cljs.core.Keyword))?k24281.fqn:null);
switch (G__24283) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24281,else__19043__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#datascript.db.TxReport{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$ = true;

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24280){
var self__ = this;
var G__24280__$1 = this;
return (new cljs.core.RecordIter((0),G__24280__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
var self__ = this;
var this__19035__auto____$1 = this;
var h__18853__auto__ = self__.__hash;
if(!((h__18853__auto__ == null))){
return h__18853__auto__;
} else {
var h__18853__auto____$1 = cljs.core.hash_imap.call(null,this__19035__auto____$1);
self__.__hash = h__18853__auto____$1;

return h__18853__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
var self__ = this;
var this__19036__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18406__auto__ = other__19037__auto__;
if(cljs.core.truth_(and__18406__auto__)){
var and__18406__auto____$1 = (this__19036__auto____$1.constructor === other__19037__auto__.constructor);
if(and__18406__auto____$1){
return cljs.core.equiv_map.call(null,this__19036__auto____$1,other__19037__auto__);
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__24280){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__24284 = cljs.core.keyword_identical_QMARK_;
var expr__24285 = k__19048__auto__;
if(cljs.core.truth_(pred__24284.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__24285))){
return (new datascript.db.TxReport(G__24280,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24284.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__24285))){
return (new datascript.db.TxReport(self__.db_before,G__24280,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24284.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__24285))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__24280,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24284.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__24285))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__24280,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24284.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__24285))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__24280,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__24280),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__24280){
var self__ = this;
var this__19039__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__24280,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/TxReport");
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"datascript.db/TxReport");
});

datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__24282){
return (new datascript.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__24282),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__24282),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__24282),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__24282),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__24282),null,cljs.core.dissoc.call(null,G__24282,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datascript.db._attrs_by.call(null,db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datascript.db.entid = (function datascript$db$entid(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref should contain 2 elements: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,eid),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref attribute should be marked as :db.unique/identity: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((cljs.core.second.call(null,eid) == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected number or lookup ref for entity id, got "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__18418__auto__ = datascript.db.entid.call(null,db,eid);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Nothing found for entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__18406__auto__ = datom.added;
if(cljs.core.truth_(and__18406__auto__)){
return datascript.db.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__18406__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var found = temp__4657__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot add "),cljs.core.str(cljs.core.pr_str.call(null,datom)),cljs.core.str(" because of unique constraint: "),cljs.core.str(cljs.core.pr_str.call(null,found))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity attribute "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot store nil as a value at "),cljs.core.str(cljs.core.pr_str.call(null,at))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__24289 = db;
if(((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.db.tx0))){
return cljs.core.assoc.call(null,G__24289,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__24289;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var args24290 = [];
var len__19487__auto___24294 = arguments.length;
var i__19488__auto___24295 = (0);
while(true){
if((i__19488__auto___24295 < len__19487__auto___24294)){
args24290.push((arguments[i__19488__auto___24295]));

var G__24296 = (i__19488__auto___24295 + (1));
i__19488__auto___24295 = G__24296;
continue;
} else {
}
break;
}

var G__24292 = args24290.length;
switch (G__24292) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24290.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__24293 = report;
var G__24293__$1 = ((datascript.db.neg_number_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__24293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__24293);
var G__24293__$2 = ((datascript.db.tx_id_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__24293__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__24293__$1);
return cljs.core.update_in.call(null,G__24293__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;
datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom.call(null,db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_.call(null,db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__24300 = db;
var G__24300__$1 = cljs.core.update_in.call(null,G__24300,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__24300__$2 = cljs.core.update_in.call(null,G__24300__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__24300__$3 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__24300__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_avet_quick):G__24300__$2);
return datascript.db.advance_max_eid.call(null,G__24300__$3,datom.e);

} else {
var temp__4655__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var removing = temp__4655__auto__;
var G__24301 = db;
var G__24301__$1 = cljs.core.update_in.call(null,G__24301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__24301__$2 = cljs.core.update_in.call(null,G__24301__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
if(indexing_QMARK_){
return cljs.core.update_in.call(null,G__24301__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_avet_quick);
} else {
return G__24301__$2;
}
} else {
return db;
}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),[cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__24303 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__24303,(0),null);
var ns = cljs.core.nth.call(null,vec__24303,(1),null);
var name = cljs.core.nth.call(null,vec__24303,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/_"),cljs.core.str(name)].join('');
} else {
return [cljs.core.str("_"),cljs.core.str(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__24305 = acc;
var e = cljs.core.nth.call(null,vec__24305,(0),null);
var a = cljs.core.nth.call(null,vec__24305,(1),null);
var v = cljs.core.nth.call(null,vec__24305,(2),null);
var _e = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(((_e == null)) || ((_e < (0))) || ((acc == null)) || ((_e === e))){
return acc;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Conflicting upsert: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.call(null,e)),cljs.core.str(", but entity already has :db/id "),cljs.core.str(cljs.core.pr_str.call(null,_e))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),acc], null));
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__4657__auto__ = cljs.core.not_empty.call(null,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if(cljs.core.truth_(temp__4657__auto__)){
var idents = temp__4657__auto__;
return cljs.core.first.call(null,datascript.db.check_upsert_conflict.call(null,entity,cljs.core.reduce_kv.call(null,((function (idents,temp__4657__auto__){
return (function (acc,a,v){
if(cljs.core.contains_QMARK_.call(null,idents,a)){
var temp__4655__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if(cljs.core.truth_(temp__4655__auto__)){
var e = temp__4655__auto__;
if((acc == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,acc,(0)),e)){
return acc;
} else {
var vec__24307 = acc;
var _e = cljs.core.nth.call(null,vec__24307,(0),null);
var _a = cljs.core.nth.call(null,vec__24307,(1),null);
var _v = cljs.core.nth.call(null,vec__24307,(2),null);
throw cljs.core.ex_info.call(null,[cljs.core.str("Conflicting upserts: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.call(null,_e)),cljs.core.str(", but "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str(" resolves to "),cljs.core.str(cljs.core.pr_str.call(null,e))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
} else {
return acc;
}
} else {
return acc;
}
});})(idents,temp__4657__auto__))
,null,entity)));
} else {
return null;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!((datascript.db.reverse_ref_QMARK_.call(null,a)) || (datascript.db.multival_QMARK_.call(null,db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not.call(null,(function (){var or__18418__auto__ = datascript.arrays.array_QMARK_.call(null,vs);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return (cljs.core.coll_QMARK_.call(null,vs)) && (!(cljs.core.map_QMARK_.call(null,vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datascript.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__19198__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__24316(s__24317){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__24317__$1 = s__24317;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24317__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__24323 = cljs.core.first.call(null,xs__5205__auto__);
var a = cljs.core.nth.call(null,vec__24323,(0),null);
var vs = cljs.core.nth.call(null,vec__24323,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.db.validate_attr.call(null,a,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref.call(null,a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.db.ref_QMARK_.call(null,db,straight_a))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute "),cljs.core.str(cljs.core.pr_str.call(null,a)),cljs.core.str(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false)], null))})():null);
var iterys__19194__auto__ = ((function (s__24317__$1,_,reverse_QMARK_,straight_a,___$1,vec__24323,a,vs,xs__5205__auto__,temp__4657__auto__,eid){
return (function datascript$db$explode_$_iter__24316_$_iter__24318(s__24319){
return (new cljs.core.LazySeq(null,((function (s__24317__$1,_,reverse_QMARK_,straight_a,___$1,vec__24323,a,vs,xs__5205__auto__,temp__4657__auto__,eid){
return (function (){
var s__24319__$1 = s__24319;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24319__$1);
if(temp__4657__auto____$1){
var s__24319__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24319__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__24319__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__24321 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__24320 = (0);
while(true){
if((i__24320 < size__19197__auto__)){
var v = cljs.core._nth.call(null,c__19196__auto__,i__24320);
cljs.core.chunk_append.call(null,b__24321,(((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__24324 = (i__24320 + (1));
i__24320 = G__24324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24321),datascript$db$explode_$_iter__24316_$_iter__24318.call(null,cljs.core.chunk_rest.call(null,s__24319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24321),null);
}
} else {
var v = cljs.core.first.call(null,s__24319__$2);
return cljs.core.cons.call(null,(((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$db$explode_$_iter__24316_$_iter__24318.call(null,cljs.core.rest.call(null,s__24319__$2)));
}
} else {
return null;
}
break;
}
});})(s__24317__$1,_,reverse_QMARK_,straight_a,___$1,vec__24323,a,vs,xs__5205__auto__,temp__4657__auto__,eid))
,null,null));
});})(s__24317__$1,_,reverse_QMARK_,straight_a,___$1,vec__24323,a,vs,xs__5205__auto__,temp__4657__auto__,eid))
;
var fs__19195__auto__ = cljs.core.seq.call(null,iterys__19194__auto__.call(null,datascript.db.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__19195__auto__){
return cljs.core.concat.call(null,fs__19195__auto__,datascript$db$explode_$_iter__24316.call(null,cljs.core.rest.call(null,s__24317__$1)));
} else {
var G__24325 = cljs.core.rest.call(null,s__24317__$1);
s__24317__$1 = G__24325;
continue;
}
} else {
var G__24326 = cljs.core.rest.call(null,s__24317__$1);
s__24317__$1 = G__24326;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__19198__auto__.call(null,entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__24327){
var vec__24329 = p__24327;
var _ = cljs.core.nth.call(null,vec__24329,(0),null);
var e = cljs.core.nth.call(null,vec__24329,(1),null);
var a = cljs.core.nth.call(null,vec__24329,(2),null);
var v = cljs.core.nth.call(null,vec__24329,(3),null);
var tx = cljs.core.nth.call(null,vec__24329,(4),null);
var ent = vec__24329;
datascript.db.validate_attr.call(null,a,ent);

datascript.db.validate_val.call(null,v,ent);

var tx__$1 = (function (){var or__18418__auto__ = tx;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return datascript.db.current_tx.call(null,report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict.call(null,db,e);
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
var datom = (new datascript.db.Datom(e__$1,a,v__$1,tx__$1,true));
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__4655__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var old_datom = temp__4655__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report.call(null,datascript.db.transact_report.call(null,report,(new datascript.db.Datom(e__$1,a,old_datom.v,tx__$1,false))),datom);
}
} else {
return datascript.db.transact_report.call(null,report,datom);
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx.call(null,report);
return datascript.db.transact_report.call(null,report,(new datascript.db.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (d){
return datascript.db.component_QMARK_.call(null,db,d.a);
})),cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Conflicting upsert: "),cljs.core.str(cljs.core.pr_str.call(null,tempid)),cljs.core.str(" resolves"),cljs.core.str(" both to "),cljs.core.str(cljs.core.pr_str.call(null,upserted_eid)),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
return datascript.db.transact_tx_data.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null),upserted_eid),es);
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if(((initial_es == null)) || (cljs.core.sequential_QMARK_.call(null,initial_es))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad transaction data "),cljs.core.str(cljs.core.pr_str.call(null,initial_es)),cljs.core.str(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var report = initial_report;
var es = initial_es;
while(true){
var vec__24335 = es;
var entity = cljs.core.nth.call(null,vec__24335,(0),null);
var entities = cljs.core.nthnext.call(null,vec__24335,(1));
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.db.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_.call(null,old_eid)){
var id = datascript.db.current_tx.call(null,report);
var G__24340 = datascript.db.allocate_eid.call(null,report,old_eid,id);
var G__24341 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__24340;
es = G__24341;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,old_eid)){
var id = datascript.db.entid_strict.call(null,db,old_eid);
var G__24342 = report;
var G__24343 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__24342;
es = G__24343;
continue;
} else {
var temp__4655__auto__ = datascript.db.upsert_eid.call(null,db,entity);
if(cljs.core.truth_(temp__4655__auto__)){
var upserted_eid = temp__4655__auto__;
if((datascript.db.neg_number_QMARK_.call(null,old_eid)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)) && (cljs.core.not_EQ_.call(null,upserted_eid,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)))){
return datascript.db.retry_with_tempid.call(null,initial_report,initial_es,old_eid,upserted_eid);
} else {
var G__24344 = datascript.db.allocate_eid.call(null,report,old_eid,upserted_eid);
var G__24345 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__24344;
es = G__24345;
continue;
}
} else {
if((typeof old_eid === 'number') || ((old_eid == null))){
var new_eid = (((old_eid == null))?datascript.db.next_eid.call(null,db):(((old_eid < (0)))?(function (){var or__18418__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return datascript.db.next_eid.call(null,db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__24346 = datascript.db.allocate_eid.call(null,report,old_eid,new_eid);
var G__24347 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,new_entity),entities);
report = G__24346;
es = G__24347;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected number or lookup ref for :db/id, got "),cljs.core.str(cljs.core.pr_str.call(null,old_eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__24336 = entity;
var op = cljs.core.nth.call(null,vec__24336,(0),null);
var e = cljs.core.nth.call(null,vec__24336,(1),null);
var a = cljs.core.nth.call(null,vec__24336,(2),null);
var v = cljs.core.nth.call(null,vec__24336,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__24337 = entity;
var _ = cljs.core.nth.call(null,vec__24337,(0),null);
var f = cljs.core.nth.call(null,vec__24337,(1),null);
var args = cljs.core.nthnext.call(null,vec__24337,(2));
var G__24348 = report;
var G__24349 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__24348;
es = G__24349;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__24338 = entity;
var _ = cljs.core.nth.call(null,vec__24338,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__24338,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__24338,(2),null);
var ov = cljs.core.nth.call(null,vec__24338,(3),null);
var nv = cljs.core.nth.call(null,vec__24338,(4),null);
var e__$2 = datascript.db.entid_strict.call(null,db,e__$1);
var ___$1 = datascript.db.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,nv):nv);
var ___$2 = datascript.db.validate_val.call(null,nv__$1,entity);
var datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.db.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__24338,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__24336,op,e,a,v,vec__24335,entity,entities,db){
return (function (d){
return cljs.core._EQ_.call(null,d.v,ov__$1);
});})(report,es,vec__24338,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__24336,op,e,a,v,vec__24335,entity,entities,db))
,datoms))){
var G__24350 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__24351 = entities;
report = G__24350;
es = G__24351;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__24352 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__24353 = entities;
report = G__24352;
es = G__24353;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_.call(null,e)){
var G__24354 = report;
var G__24355 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx.call(null,report),a,v], null),entities);
report = G__24354;
es = G__24355;
continue;
} else {
if((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.tx_id_QMARK_.call(null,v))){
var G__24356 = report;
var G__24357 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx.call(null,report)], null),entities);
report = G__24356;
es = G__24357;
continue;
} else {
if(datascript.db.neg_number_QMARK_.call(null,e)){
if(cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Negative entity ids are resolved for :db/add only")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
var upserted_eid = ((datascript.db.is_attr_QMARK_.call(null,db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_((function (){var and__18406__auto__ = upserted_eid;
if(cljs.core.truth_(and__18406__auto__)){
var and__18406__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__18406__auto____$1)){
return cljs.core.not_EQ_.call(null,upserted_eid,allocated_eid);
} else {
return and__18406__auto____$1;
}
} else {
return and__18406__auto__;
}
})())){
return datascript.db.retry_with_tempid.call(null,initial_report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__18418__auto__ = upserted_eid;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
var or__18418__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__18418__auto____$1)){
return or__18418__auto____$1;
} else {
return datascript.db.next_eid.call(null,db);
}
}
})();
var G__24358 = datascript.db.allocate_eid.call(null,report,e,eid);
var G__24359 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__24358;
es = G__24359;
continue;
}
}
} else {
if((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.neg_number_QMARK_.call(null,v))){
var temp__4655__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__4655__auto__)){
var vid = temp__4655__auto__;
var G__24360 = report;
var G__24361 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__24360;
es = G__24361;
continue;
} else {
var G__24362 = datascript.db.allocate_eid.call(null,report,v,datascript.db.next_eid.call(null,db));
var G__24363 = es;
report = G__24362;
es = G__24363;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__24364 = datascript.db.transact_add.call(null,report,entity);
var G__24365 = entities;
report = G__24364;
es = G__24365;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__4655__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__4655__auto__)){
var e__$1 = temp__4655__auto__;
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
datascript.db.validate_attr.call(null,a,entity);

datascript.db.validate_val.call(null,v__$1,entity);

var temp__4655__auto____$1 = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__4655__auto____$1)){
var old_datom = temp__4655__auto____$1;
var G__24366 = datascript.db.transact_retract_datom.call(null,report,old_datom);
var G__24367 = entities;
report = G__24366;
es = G__24367;
continue;
} else {
var G__24368 = report;
var G__24369 = entities;
report = G__24368;
es = G__24369;
continue;
}
} else {
var G__24370 = report;
var G__24371 = entities;
report = G__24370;
es = G__24371;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var temp__4655__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__4655__auto__)){
var e__$1 = temp__4655__auto__;
var _ = datascript.db.validate_attr.call(null,a,entity);
var datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__24372 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,datoms);
var G__24373 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,datoms),entities);
report = G__24372;
es = G__24373;
continue;
} else {
var G__24374 = report;
var G__24375 = entities;
report = G__24374;
es = G__24375;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var temp__4655__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__4655__auto__)){
var e__$1 = temp__4655__auto__;
var e_datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,es,e_datoms,e__$1,temp__4655__auto__,vec__24336,op,e,a,v,vec__24335,entity,entities,db){
return (function (a__$1){
return datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__4655__auto__,vec__24336,op,e,a,v,vec__24335,entity,entities,db))
,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
var G__24376 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__24377 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,e_datoms),entities);
report = G__24376;
es = G__24377;
continue;
} else {
var G__24378 = report;
var G__24379 = entities;
report = G__24378;
es = G__24379;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unknown operation at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_(datascript.db.datom_QMARK_.call(null,entity))){
var vec__24339 = entity;
var e = cljs.core.nth.call(null,vec__24339,(0),null);
var a = cljs.core.nth.call(null,vec__24339,(1),null);
var v = cljs.core.nth.call(null,vec__24339,(2),null);
var tx = cljs.core.nth.call(null,vec__24339,(3),null);
var added = cljs.core.nth.call(null,vec__24339,(4),null);
if(cljs.core.truth_(added)){
var G__24380 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__24381 = entities;
report = G__24380;
es = G__24381;
continue;
} else {
var G__24382 = report;
var G__24383 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__24382;
es = G__24383;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity type at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
break;
}
});

//# sourceMappingURL=db.js.map