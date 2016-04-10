// Compiled by ClojureScript 1.8.40 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23502_23506 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23503_23507 = null;
var count__23504_23508 = (0);
var i__23505_23509 = (0);
while(true){
if((i__23505_23509 < count__23504_23508)){
var k_23510 = cljs.core._nth.call(null,chunk__23503_23507,i__23505_23509);
var v_23511 = (b[k_23510]);
(a[k_23510] = v_23511);

var G__23512 = seq__23502_23506;
var G__23513 = chunk__23503_23507;
var G__23514 = count__23504_23508;
var G__23515 = (i__23505_23509 + (1));
seq__23502_23506 = G__23512;
chunk__23503_23507 = G__23513;
count__23504_23508 = G__23514;
i__23505_23509 = G__23515;
continue;
} else {
var temp__4657__auto___23516 = cljs.core.seq.call(null,seq__23502_23506);
if(temp__4657__auto___23516){
var seq__23502_23517__$1 = temp__4657__auto___23516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23502_23517__$1)){
var c__19229__auto___23518 = cljs.core.chunk_first.call(null,seq__23502_23517__$1);
var G__23519 = cljs.core.chunk_rest.call(null,seq__23502_23517__$1);
var G__23520 = c__19229__auto___23518;
var G__23521 = cljs.core.count.call(null,c__19229__auto___23518);
var G__23522 = (0);
seq__23502_23506 = G__23519;
chunk__23503_23507 = G__23520;
count__23504_23508 = G__23521;
i__23505_23509 = G__23522;
continue;
} else {
var k_23523 = cljs.core.first.call(null,seq__23502_23517__$1);
var v_23524 = (b[k_23523]);
(a[k_23523] = v_23524);

var G__23525 = cljs.core.next.call(null,seq__23502_23517__$1);
var G__23526 = null;
var G__23527 = (0);
var G__23528 = (0);
seq__23502_23506 = G__23525;
chunk__23503_23507 = G__23526;
count__23504_23508 = G__23527;
i__23505_23509 = G__23528;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23529 = [];
var len__19487__auto___23532 = arguments.length;
var i__19488__auto___23533 = (0);
while(true){
if((i__19488__auto___23533 < len__19487__auto___23532)){
args23529.push((arguments[i__19488__auto___23533]));

var G__23534 = (i__19488__auto___23533 + (1));
i__19488__auto___23533 = G__23534;
continue;
} else {
}
break;
}

var G__23531 = args23529.length;
switch (G__23531) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23529.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23536 = (i + (2));
var G__23537 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23536;
ret = G__23537;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23538_23542 = cljs.core.seq.call(null,v);
var chunk__23539_23543 = null;
var count__23540_23544 = (0);
var i__23541_23545 = (0);
while(true){
if((i__23541_23545 < count__23540_23544)){
var x_23546 = cljs.core._nth.call(null,chunk__23539_23543,i__23541_23545);
ret.push(x_23546);

var G__23547 = seq__23538_23542;
var G__23548 = chunk__23539_23543;
var G__23549 = count__23540_23544;
var G__23550 = (i__23541_23545 + (1));
seq__23538_23542 = G__23547;
chunk__23539_23543 = G__23548;
count__23540_23544 = G__23549;
i__23541_23545 = G__23550;
continue;
} else {
var temp__4657__auto___23551 = cljs.core.seq.call(null,seq__23538_23542);
if(temp__4657__auto___23551){
var seq__23538_23552__$1 = temp__4657__auto___23551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23538_23552__$1)){
var c__19229__auto___23553 = cljs.core.chunk_first.call(null,seq__23538_23552__$1);
var G__23554 = cljs.core.chunk_rest.call(null,seq__23538_23552__$1);
var G__23555 = c__19229__auto___23553;
var G__23556 = cljs.core.count.call(null,c__19229__auto___23553);
var G__23557 = (0);
seq__23538_23542 = G__23554;
chunk__23539_23543 = G__23555;
count__23540_23544 = G__23556;
i__23541_23545 = G__23557;
continue;
} else {
var x_23558 = cljs.core.first.call(null,seq__23538_23552__$1);
ret.push(x_23558);

var G__23559 = cljs.core.next.call(null,seq__23538_23552__$1);
var G__23560 = null;
var G__23561 = (0);
var G__23562 = (0);
seq__23538_23542 = G__23559;
chunk__23539_23543 = G__23560;
count__23540_23544 = G__23561;
i__23541_23545 = G__23562;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23563_23567 = cljs.core.seq.call(null,v);
var chunk__23564_23568 = null;
var count__23565_23569 = (0);
var i__23566_23570 = (0);
while(true){
if((i__23566_23570 < count__23565_23569)){
var x_23571 = cljs.core._nth.call(null,chunk__23564_23568,i__23566_23570);
ret.push(x_23571);

var G__23572 = seq__23563_23567;
var G__23573 = chunk__23564_23568;
var G__23574 = count__23565_23569;
var G__23575 = (i__23566_23570 + (1));
seq__23563_23567 = G__23572;
chunk__23564_23568 = G__23573;
count__23565_23569 = G__23574;
i__23566_23570 = G__23575;
continue;
} else {
var temp__4657__auto___23576 = cljs.core.seq.call(null,seq__23563_23567);
if(temp__4657__auto___23576){
var seq__23563_23577__$1 = temp__4657__auto___23576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23563_23577__$1)){
var c__19229__auto___23578 = cljs.core.chunk_first.call(null,seq__23563_23577__$1);
var G__23579 = cljs.core.chunk_rest.call(null,seq__23563_23577__$1);
var G__23580 = c__19229__auto___23578;
var G__23581 = cljs.core.count.call(null,c__19229__auto___23578);
var G__23582 = (0);
seq__23563_23567 = G__23579;
chunk__23564_23568 = G__23580;
count__23565_23569 = G__23581;
i__23566_23570 = G__23582;
continue;
} else {
var x_23583 = cljs.core.first.call(null,seq__23563_23577__$1);
ret.push(x_23583);

var G__23584 = cljs.core.next.call(null,seq__23563_23577__$1);
var G__23585 = null;
var G__23586 = (0);
var G__23587 = (0);
seq__23563_23567 = G__23584;
chunk__23564_23568 = G__23585;
count__23565_23569 = G__23586;
i__23566_23570 = G__23587;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23588_23592 = cljs.core.seq.call(null,v);
var chunk__23589_23593 = null;
var count__23590_23594 = (0);
var i__23591_23595 = (0);
while(true){
if((i__23591_23595 < count__23590_23594)){
var x_23596 = cljs.core._nth.call(null,chunk__23589_23593,i__23591_23595);
ret.push(x_23596);

var G__23597 = seq__23588_23592;
var G__23598 = chunk__23589_23593;
var G__23599 = count__23590_23594;
var G__23600 = (i__23591_23595 + (1));
seq__23588_23592 = G__23597;
chunk__23589_23593 = G__23598;
count__23590_23594 = G__23599;
i__23591_23595 = G__23600;
continue;
} else {
var temp__4657__auto___23601 = cljs.core.seq.call(null,seq__23588_23592);
if(temp__4657__auto___23601){
var seq__23588_23602__$1 = temp__4657__auto___23601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23588_23602__$1)){
var c__19229__auto___23603 = cljs.core.chunk_first.call(null,seq__23588_23602__$1);
var G__23604 = cljs.core.chunk_rest.call(null,seq__23588_23602__$1);
var G__23605 = c__19229__auto___23603;
var G__23606 = cljs.core.count.call(null,c__19229__auto___23603);
var G__23607 = (0);
seq__23588_23592 = G__23604;
chunk__23589_23593 = G__23605;
count__23590_23594 = G__23606;
i__23591_23595 = G__23607;
continue;
} else {
var x_23608 = cljs.core.first.call(null,seq__23588_23602__$1);
ret.push(x_23608);

var G__23609 = cljs.core.next.call(null,seq__23588_23602__$1);
var G__23610 = null;
var G__23611 = (0);
var G__23612 = (0);
seq__23588_23592 = G__23609;
chunk__23589_23593 = G__23610;
count__23590_23594 = G__23611;
i__23591_23595 = G__23612;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23613 = [];
var len__19487__auto___23624 = arguments.length;
var i__19488__auto___23625 = (0);
while(true){
if((i__19488__auto___23625 < len__19487__auto___23624)){
args23613.push((arguments[i__19488__auto___23625]));

var G__23626 = (i__19488__auto___23625 + (1));
i__19488__auto___23625 = G__23626;
continue;
} else {
}
break;
}

var G__23615 = args23613.length;
switch (G__23615) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23613.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23616 = obj;
G__23616.push(kfn.call(null,k),vfn.call(null,v));

return G__23616;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23617 = cljs.core.clone.call(null,handlers);
x23617.forEach = ((function (x23617,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23618 = cljs.core.seq.call(null,coll);
var chunk__23619 = null;
var count__23620 = (0);
var i__23621 = (0);
while(true){
if((i__23621 < count__23620)){
var vec__23622 = cljs.core._nth.call(null,chunk__23619,i__23621);
var k = cljs.core.nth.call(null,vec__23622,(0),null);
var v = cljs.core.nth.call(null,vec__23622,(1),null);
f.call(null,v,k);

var G__23628 = seq__23618;
var G__23629 = chunk__23619;
var G__23630 = count__23620;
var G__23631 = (i__23621 + (1));
seq__23618 = G__23628;
chunk__23619 = G__23629;
count__23620 = G__23630;
i__23621 = G__23631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23618);
if(temp__4657__auto__){
var seq__23618__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23618__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__23618__$1);
var G__23632 = cljs.core.chunk_rest.call(null,seq__23618__$1);
var G__23633 = c__19229__auto__;
var G__23634 = cljs.core.count.call(null,c__19229__auto__);
var G__23635 = (0);
seq__23618 = G__23632;
chunk__23619 = G__23633;
count__23620 = G__23634;
i__23621 = G__23635;
continue;
} else {
var vec__23623 = cljs.core.first.call(null,seq__23618__$1);
var k = cljs.core.nth.call(null,vec__23623,(0),null);
var v = cljs.core.nth.call(null,vec__23623,(1),null);
f.call(null,v,k);

var G__23636 = cljs.core.next.call(null,seq__23618__$1);
var G__23637 = null;
var G__23638 = (0);
var G__23639 = (0);
seq__23618 = G__23636;
chunk__23619 = G__23637;
count__23620 = G__23638;
i__23621 = G__23639;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23617,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23617;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args23640 = [];
var len__19487__auto___23646 = arguments.length;
var i__19488__auto___23647 = (0);
while(true){
if((i__19488__auto___23647 < len__19487__auto___23646)){
args23640.push((arguments[i__19488__auto___23647]));

var G__23648 = (i__19488__auto___23647 + (1));
i__19488__auto___23647 = G__23648;
continue;
} else {
}
break;
}

var G__23642 = args23640.length;
switch (G__23642) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23640.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23643 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23644){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23644 = meta23644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23645,meta23644__$1){
var self__ = this;
var _23645__$1 = this;
return (new cognitect.transit.t_cognitect$transit23643(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23644__$1));
});

cognitect.transit.t_cognitect$transit23643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23645){
var self__ = this;
var _23645__$1 = this;
return self__.meta23644;
});

cognitect.transit.t_cognitect$transit23643.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23643.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23643.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23643.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23644","meta23644",2019696008,null)], null);
});

cognitect.transit.t_cognitect$transit23643.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23643.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23643";

cognitect.transit.t_cognitect$transit23643.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/t_cognitect$transit23643");
});

cognitect.transit.__GT_t_cognitect$transit23643 = (function cognitect$transit$__GT_t_cognitect$transit23643(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23644){
return (new cognitect.transit.t_cognitect$transit23643(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23644));
});

}

return (new cognitect.transit.t_cognitect$transit23643(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18418__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map