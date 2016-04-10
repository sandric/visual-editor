// Compiled by ClojureScript 1.8.40 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__4657__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__24105_SHARP_,p2__24106_SHARP_){
return cljs.core.conj.call(null,p1__24105_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__24106_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__24107_SHARP_,p2__24108_SHARP_){
return cljs.core.conj.call(null,p1__24107_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__24108_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__4655__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var datoms = temp__4655__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__4655__auto__){
return (function (p1__24109_SHARP_,p2__24110_SHARP_){
return cljs.core.conj.call(null,p1__24109_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__24110_SHARP_)));
});})(datoms,temp__4655__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__19198__auto__ = (function datascript$impl$entity$js_seq_$_iter__24119(s__24120){
return (new cljs.core.LazySeq(null,(function (){
var s__24120__$1 = s__24120;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24120__$1);
if(temp__4657__auto__){
var s__24120__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24120__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__24120__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__24122 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__24121 = (0);
while(true){
if((i__24121 < size__19197__auto__)){
var vec__24125 = cljs.core._nth.call(null,c__19196__auto__,i__24121);
var a = cljs.core.nth.call(null,vec__24125,(0),null);
var v = cljs.core.nth.call(null,vec__24125,(1),null);
cljs.core.chunk_append.call(null,b__24122,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__24127 = (i__24121 + (1));
i__24121 = G__24127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24122),datascript$impl$entity$js_seq_$_iter__24119.call(null,cljs.core.chunk_rest.call(null,s__24120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24122),null);
}
} else {
var vec__24126 = cljs.core.first.call(null,s__24120__$2);
var a = cljs.core.nth.call(null,vec__24126,(0),null);
var v = cljs.core.nth.call(null,vec__24126,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__24119.call(null,cljs.core.rest.call(null,s__24120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__24142 = null;
var G__24142__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__24129 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__24130 = null;
var count__24131 = (0);
var i__24132 = (0);
while(true){
if((i__24132 < count__24131)){
var vec__24133 = cljs.core._nth.call(null,chunk__24130,i__24132);
var a = cljs.core.nth.call(null,vec__24133,(0),null);
var v = cljs.core.nth.call(null,vec__24133,(1),null);
f.call(null,v,a,this$);

var G__24143 = seq__24129;
var G__24144 = chunk__24130;
var G__24145 = count__24131;
var G__24146 = (i__24132 + (1));
seq__24129 = G__24143;
chunk__24130 = G__24144;
count__24131 = G__24145;
i__24132 = G__24146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24129);
if(temp__4657__auto__){
var seq__24129__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24129__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__24129__$1);
var G__24147 = cljs.core.chunk_rest.call(null,seq__24129__$1);
var G__24148 = c__19229__auto__;
var G__24149 = cljs.core.count.call(null,c__19229__auto__);
var G__24150 = (0);
seq__24129 = G__24147;
chunk__24130 = G__24148;
count__24131 = G__24149;
i__24132 = G__24150;
continue;
} else {
var vec__24134 = cljs.core.first.call(null,seq__24129__$1);
var a = cljs.core.nth.call(null,vec__24134,(0),null);
var v = cljs.core.nth.call(null,vec__24134,(1),null);
f.call(null,v,a,this$);

var G__24151 = cljs.core.next.call(null,seq__24129__$1);
var G__24152 = null;
var G__24153 = (0);
var G__24154 = (0);
seq__24129 = G__24151;
chunk__24130 = G__24152;
count__24131 = G__24153;
i__24132 = G__24154;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__24142__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__24135 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__24136 = null;
var count__24137 = (0);
var i__24138 = (0);
while(true){
if((i__24138 < count__24137)){
var vec__24139 = cljs.core._nth.call(null,chunk__24136,i__24138);
var a = cljs.core.nth.call(null,vec__24139,(0),null);
var v = cljs.core.nth.call(null,vec__24139,(1),null);
f.call(use_as_this,v,a,this$);

var G__24155 = seq__24135;
var G__24156 = chunk__24136;
var G__24157 = count__24137;
var G__24158 = (i__24138 + (1));
seq__24135 = G__24155;
chunk__24136 = G__24156;
count__24137 = G__24157;
i__24138 = G__24158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24135);
if(temp__4657__auto__){
var seq__24135__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24135__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__24135__$1);
var G__24159 = cljs.core.chunk_rest.call(null,seq__24135__$1);
var G__24160 = c__19229__auto__;
var G__24161 = cljs.core.count.call(null,c__19229__auto__);
var G__24162 = (0);
seq__24135 = G__24159;
chunk__24136 = G__24160;
count__24137 = G__24161;
i__24138 = G__24162;
continue;
} else {
var vec__24140 = cljs.core.first.call(null,seq__24135__$1);
var a = cljs.core.nth.call(null,vec__24140,(0),null);
var v = cljs.core.nth.call(null,vec__24140,(1),null);
f.call(use_as_this,v,a,this$);

var G__24163 = cljs.core.next.call(null,seq__24135__$1);
var G__24164 = null;
var G__24165 = (0);
var G__24166 = (0);
seq__24135 = G__24163;
chunk__24136 = G__24164;
count__24137 = G__24165;
i__24138 = G__24166;
continue;
}
} else {
return null;
}
}
break;
}
});
G__24142 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__24142__1.call(this,f);
case 2:
return G__24142__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24142.cljs$core$IFn$_invoke$arity$1 = G__24142__1;
G__24142.cljs$core$IFn$_invoke$arity$2 = G__24142__2;
return G__24142;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__24141 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
if(datascript.db.multival_QMARK_.call(null,self__.db,attr)){
return datascript.impl.entity.multival__GT_js.call(null,G__24141);
} else {
return G__24141;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__24167 = null;
var G__24167__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__24167__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__24167 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24167__2.call(this,self__,k);
case 3:
return G__24167__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24167.cljs$core$IFn$_invoke$arity$2 = G__24167__2;
G__24167.cljs$core$IFn$_invoke$arity$3 = G__24167__3;
return G__24167;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args24128){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24128)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args24168 = [];
var len__19487__auto___24171 = arguments.length;
var i__19488__auto___24172 = (0);
while(true){
if((i__19488__auto___24172 < len__19487__auto___24171)){
args24168.push((arguments[i__19488__auto___24172]));

var G__24173 = (i__19488__auto___24172 + (1));
i__19488__auto___24172 = G__24173;
continue;
} else {
}
break;
}

var G__24170 = args24168.length;
switch (G__24170) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24168.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var or__18418__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__4655__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var datoms = temp__4655__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;
datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__4657__auto___24175 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4657__auto___24175)){
var datoms_24176 = temp__4657__auto___24175;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_24176)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map