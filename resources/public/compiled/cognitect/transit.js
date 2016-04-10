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
var seq__20249_20253 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20250_20254 = null;
var count__20251_20255 = (0);
var i__20252_20256 = (0);
while(true){
if((i__20252_20256 < count__20251_20255)){
var k_20257 = cljs.core._nth.call(null,chunk__20250_20254,i__20252_20256);
var v_20258 = (b[k_20257]);
(a[k_20257] = v_20258);

var G__20259 = seq__20249_20253;
var G__20260 = chunk__20250_20254;
var G__20261 = count__20251_20255;
var G__20262 = (i__20252_20256 + (1));
seq__20249_20253 = G__20259;
chunk__20250_20254 = G__20260;
count__20251_20255 = G__20261;
i__20252_20256 = G__20262;
continue;
} else {
var temp__4657__auto___20263 = cljs.core.seq.call(null,seq__20249_20253);
if(temp__4657__auto___20263){
var seq__20249_20264__$1 = temp__4657__auto___20263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20249_20264__$1)){
var c__19229__auto___20265 = cljs.core.chunk_first.call(null,seq__20249_20264__$1);
var G__20266 = cljs.core.chunk_rest.call(null,seq__20249_20264__$1);
var G__20267 = c__19229__auto___20265;
var G__20268 = cljs.core.count.call(null,c__19229__auto___20265);
var G__20269 = (0);
seq__20249_20253 = G__20266;
chunk__20250_20254 = G__20267;
count__20251_20255 = G__20268;
i__20252_20256 = G__20269;
continue;
} else {
var k_20270 = cljs.core.first.call(null,seq__20249_20264__$1);
var v_20271 = (b[k_20270]);
(a[k_20270] = v_20271);

var G__20272 = cljs.core.next.call(null,seq__20249_20264__$1);
var G__20273 = null;
var G__20274 = (0);
var G__20275 = (0);
seq__20249_20253 = G__20272;
chunk__20250_20254 = G__20273;
count__20251_20255 = G__20274;
i__20252_20256 = G__20275;
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
var args20276 = [];
var len__19487__auto___20279 = arguments.length;
var i__19488__auto___20280 = (0);
while(true){
if((i__19488__auto___20280 < len__19487__auto___20279)){
args20276.push((arguments[i__19488__auto___20280]));

var G__20281 = (i__19488__auto___20280 + (1));
i__19488__auto___20280 = G__20281;
continue;
} else {
}
break;
}

var G__20278 = args20276.length;
switch (G__20278) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20276.length)].join('')));

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
var G__20283 = (i + (2));
var G__20284 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20283;
ret = G__20284;
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
var seq__20285_20289 = cljs.core.seq.call(null,v);
var chunk__20286_20290 = null;
var count__20287_20291 = (0);
var i__20288_20292 = (0);
while(true){
if((i__20288_20292 < count__20287_20291)){
var x_20293 = cljs.core._nth.call(null,chunk__20286_20290,i__20288_20292);
ret.push(x_20293);

var G__20294 = seq__20285_20289;
var G__20295 = chunk__20286_20290;
var G__20296 = count__20287_20291;
var G__20297 = (i__20288_20292 + (1));
seq__20285_20289 = G__20294;
chunk__20286_20290 = G__20295;
count__20287_20291 = G__20296;
i__20288_20292 = G__20297;
continue;
} else {
var temp__4657__auto___20298 = cljs.core.seq.call(null,seq__20285_20289);
if(temp__4657__auto___20298){
var seq__20285_20299__$1 = temp__4657__auto___20298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20285_20299__$1)){
var c__19229__auto___20300 = cljs.core.chunk_first.call(null,seq__20285_20299__$1);
var G__20301 = cljs.core.chunk_rest.call(null,seq__20285_20299__$1);
var G__20302 = c__19229__auto___20300;
var G__20303 = cljs.core.count.call(null,c__19229__auto___20300);
var G__20304 = (0);
seq__20285_20289 = G__20301;
chunk__20286_20290 = G__20302;
count__20287_20291 = G__20303;
i__20288_20292 = G__20304;
continue;
} else {
var x_20305 = cljs.core.first.call(null,seq__20285_20299__$1);
ret.push(x_20305);

var G__20306 = cljs.core.next.call(null,seq__20285_20299__$1);
var G__20307 = null;
var G__20308 = (0);
var G__20309 = (0);
seq__20285_20289 = G__20306;
chunk__20286_20290 = G__20307;
count__20287_20291 = G__20308;
i__20288_20292 = G__20309;
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
var seq__20310_20314 = cljs.core.seq.call(null,v);
var chunk__20311_20315 = null;
var count__20312_20316 = (0);
var i__20313_20317 = (0);
while(true){
if((i__20313_20317 < count__20312_20316)){
var x_20318 = cljs.core._nth.call(null,chunk__20311_20315,i__20313_20317);
ret.push(x_20318);

var G__20319 = seq__20310_20314;
var G__20320 = chunk__20311_20315;
var G__20321 = count__20312_20316;
var G__20322 = (i__20313_20317 + (1));
seq__20310_20314 = G__20319;
chunk__20311_20315 = G__20320;
count__20312_20316 = G__20321;
i__20313_20317 = G__20322;
continue;
} else {
var temp__4657__auto___20323 = cljs.core.seq.call(null,seq__20310_20314);
if(temp__4657__auto___20323){
var seq__20310_20324__$1 = temp__4657__auto___20323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20310_20324__$1)){
var c__19229__auto___20325 = cljs.core.chunk_first.call(null,seq__20310_20324__$1);
var G__20326 = cljs.core.chunk_rest.call(null,seq__20310_20324__$1);
var G__20327 = c__19229__auto___20325;
var G__20328 = cljs.core.count.call(null,c__19229__auto___20325);
var G__20329 = (0);
seq__20310_20314 = G__20326;
chunk__20311_20315 = G__20327;
count__20312_20316 = G__20328;
i__20313_20317 = G__20329;
continue;
} else {
var x_20330 = cljs.core.first.call(null,seq__20310_20324__$1);
ret.push(x_20330);

var G__20331 = cljs.core.next.call(null,seq__20310_20324__$1);
var G__20332 = null;
var G__20333 = (0);
var G__20334 = (0);
seq__20310_20314 = G__20331;
chunk__20311_20315 = G__20332;
count__20312_20316 = G__20333;
i__20313_20317 = G__20334;
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
var seq__20335_20339 = cljs.core.seq.call(null,v);
var chunk__20336_20340 = null;
var count__20337_20341 = (0);
var i__20338_20342 = (0);
while(true){
if((i__20338_20342 < count__20337_20341)){
var x_20343 = cljs.core._nth.call(null,chunk__20336_20340,i__20338_20342);
ret.push(x_20343);

var G__20344 = seq__20335_20339;
var G__20345 = chunk__20336_20340;
var G__20346 = count__20337_20341;
var G__20347 = (i__20338_20342 + (1));
seq__20335_20339 = G__20344;
chunk__20336_20340 = G__20345;
count__20337_20341 = G__20346;
i__20338_20342 = G__20347;
continue;
} else {
var temp__4657__auto___20348 = cljs.core.seq.call(null,seq__20335_20339);
if(temp__4657__auto___20348){
var seq__20335_20349__$1 = temp__4657__auto___20348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20335_20349__$1)){
var c__19229__auto___20350 = cljs.core.chunk_first.call(null,seq__20335_20349__$1);
var G__20351 = cljs.core.chunk_rest.call(null,seq__20335_20349__$1);
var G__20352 = c__19229__auto___20350;
var G__20353 = cljs.core.count.call(null,c__19229__auto___20350);
var G__20354 = (0);
seq__20335_20339 = G__20351;
chunk__20336_20340 = G__20352;
count__20337_20341 = G__20353;
i__20338_20342 = G__20354;
continue;
} else {
var x_20355 = cljs.core.first.call(null,seq__20335_20349__$1);
ret.push(x_20355);

var G__20356 = cljs.core.next.call(null,seq__20335_20349__$1);
var G__20357 = null;
var G__20358 = (0);
var G__20359 = (0);
seq__20335_20339 = G__20356;
chunk__20336_20340 = G__20357;
count__20337_20341 = G__20358;
i__20338_20342 = G__20359;
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
var args20360 = [];
var len__19487__auto___20371 = arguments.length;
var i__19488__auto___20372 = (0);
while(true){
if((i__19488__auto___20372 < len__19487__auto___20371)){
args20360.push((arguments[i__19488__auto___20372]));

var G__20373 = (i__19488__auto___20372 + (1));
i__19488__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var G__20362 = args20360.length;
switch (G__20362) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20360.length)].join('')));

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
var G__20363 = obj;
G__20363.push(kfn.call(null,k),vfn.call(null,v));

return G__20363;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20364 = cljs.core.clone.call(null,handlers);
x20364.forEach = ((function (x20364,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20365 = cljs.core.seq.call(null,coll);
var chunk__20366 = null;
var count__20367 = (0);
var i__20368 = (0);
while(true){
if((i__20368 < count__20367)){
var vec__20369 = cljs.core._nth.call(null,chunk__20366,i__20368);
var k = cljs.core.nth.call(null,vec__20369,(0),null);
var v = cljs.core.nth.call(null,vec__20369,(1),null);
f.call(null,v,k);

var G__20375 = seq__20365;
var G__20376 = chunk__20366;
var G__20377 = count__20367;
var G__20378 = (i__20368 + (1));
seq__20365 = G__20375;
chunk__20366 = G__20376;
count__20367 = G__20377;
i__20368 = G__20378;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20365);
if(temp__4657__auto__){
var seq__20365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20365__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__20365__$1);
var G__20379 = cljs.core.chunk_rest.call(null,seq__20365__$1);
var G__20380 = c__19229__auto__;
var G__20381 = cljs.core.count.call(null,c__19229__auto__);
var G__20382 = (0);
seq__20365 = G__20379;
chunk__20366 = G__20380;
count__20367 = G__20381;
i__20368 = G__20382;
continue;
} else {
var vec__20370 = cljs.core.first.call(null,seq__20365__$1);
var k = cljs.core.nth.call(null,vec__20370,(0),null);
var v = cljs.core.nth.call(null,vec__20370,(1),null);
f.call(null,v,k);

var G__20383 = cljs.core.next.call(null,seq__20365__$1);
var G__20384 = null;
var G__20385 = (0);
var G__20386 = (0);
seq__20365 = G__20383;
chunk__20366 = G__20384;
count__20367 = G__20385;
i__20368 = G__20386;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20364,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20364;
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
var args20387 = [];
var len__19487__auto___20393 = arguments.length;
var i__19488__auto___20394 = (0);
while(true){
if((i__19488__auto___20394 < len__19487__auto___20393)){
args20387.push((arguments[i__19488__auto___20394]));

var G__20395 = (i__19488__auto___20394 + (1));
i__19488__auto___20394 = G__20395;
continue;
} else {
}
break;
}

var G__20389 = args20387.length;
switch (G__20389) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20387.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20390 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20391){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20391 = meta20391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20392,meta20391__$1){
var self__ = this;
var _20392__$1 = this;
return (new cognitect.transit.t_cognitect$transit20390(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20391__$1));
});

cognitect.transit.t_cognitect$transit20390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20392){
var self__ = this;
var _20392__$1 = this;
return self__.meta20391;
});

cognitect.transit.t_cognitect$transit20390.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20390.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20390.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20390.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20391","meta20391",88660691,null)], null);
});

cognitect.transit.t_cognitect$transit20390.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20390.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20390";

cognitect.transit.t_cognitect$transit20390.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cognitect.transit/t_cognitect$transit20390");
});

cognitect.transit.__GT_t_cognitect$transit20390 = (function cognitect$transit$__GT_t_cognitect$transit20390(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20391){
return (new cognitect.transit.t_cognitect$transit20390(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20391));
});

}

return (new cognitect.transit.t_cognitect$transit20390(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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