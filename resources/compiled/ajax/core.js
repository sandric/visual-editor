// Compiled by ClojureScript 1.8.40 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k23663,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__23665 = (((k23663 instanceof cljs.core.Keyword))?k23663.fqn:null);
switch (G__23665) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23663,else__19043__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__23666,opts){
var self__ = this;
var map__23667 = p__23666;
var map__23667__$1 = ((((!((map__23667 == null)))?((((map__23667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23667):map__23667);
var request__$1 = cljs.core.get.call(null,map__23667__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__23669 = this;
var map__23669__$1 = ((((!((map__23669 == null)))?((((map__23669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23669):map__23669);
var request__$2 = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__23671,xhrio){
var self__ = this;
var map__23672 = p__23671;
var map__23672__$1 = ((((!((map__23672 == null)))?((((map__23672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23672):map__23672);
var response__$1 = cljs.core.get.call(null,map__23672__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__23674 = this;
var map__23674__$1 = ((((!((map__23674 == null)))?((((map__23674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23674):map__23674);
var response__$2 = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23662){
var self__ = this;
var G__23662__$1 = this;
return (new cljs.core.RecordIter((0),G__23662__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
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

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
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

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__23662){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__23676 = cljs.core.keyword_identical_QMARK_;
var expr__23677 = k__19048__auto__;
if(cljs.core.truth_(pred__23676.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__23677))){
return (new ajax.core.StandardInterceptor(G__23662,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23676.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__23677))){
return (new ajax.core.StandardInterceptor(self__.name,G__23662,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23676.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__23677))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__23662,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__23662),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__23662){
var self__ = this;
var this__19039__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__23662,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__23664){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__23664),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__23664),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__23664),null,cljs.core.dissoc.call(null,G__23664,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__18418__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__23680,xhrio){
var map__23683 = p__23680;
var map__23683__$1 = ((((!((map__23683 == null)))?((((map__23683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23683):map__23683);
var description = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23689 = arguments.length;
var i__19488__auto___23690 = (0);
while(true){
if((i__19488__auto___23690 < len__19487__auto___23689)){
args__19494__auto__.push((arguments[i__19488__auto___23690]));

var G__23691 = (i__19488__auto___23690 + (1));
i__19488__auto___23690 = G__23691;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq23685){
var G__23686 = cljs.core.first.call(null,seq23685);
var seq23685__$1 = cljs.core.next.call(null,seq23685);
var G__23687 = cljs.core.first.call(null,seq23685__$1);
var seq23685__$2 = cljs.core.next.call(null,seq23685__$1);
var G__23688 = cljs.core.first.call(null,seq23685__$2);
var seq23685__$3 = cljs.core.next.call(null,seq23685__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__23686,G__23687,G__23688,seq23685__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__23692_SHARP_){
return [cljs.core.str(p1__23692_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k23695,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__23697 = (((k23695 instanceof cljs.core.Keyword))?k23695.fqn:null);
switch (G__23697) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23695,else__19043__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__23698,request){
var self__ = this;
var map__23699 = p__23698;
var map__23699__$1 = ((((!((map__23699 == null)))?((((map__23699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23699):map__23699);
var content_type__$1 = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__23701 = this;
var map__23701__$1 = ((((!((map__23701 == null)))?((((map__23701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23701):map__23701);
var content_type__$2 = cljs.core.get.call(null,map__23701__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__23701,map__23701__$1,content_type__$2,map__23699,map__23699__$1,content_type__$1){
return (function (p1__23693_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__18418__auto__ = p1__23693_SHARP_;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__23701,map__23701__$1,content_type__$2,map__23699,map__23699__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__23703,xhrio){
var self__ = this;
var map__23704 = p__23703;
var map__23704__$1 = ((((!((map__23704 == null)))?((((map__23704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23704):map__23704);
var format = map__23704__$1;
var read__$1 = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__23706 = this;
var map__23706__$1 = ((((!((map__23706 == null)))?((((map__23706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23706):map__23706);
var format__$1 = map__23706__$1;
var read__$2 = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__23709 = status;
switch (G__23709) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e23710){if((e23710 instanceof Object)){
var e = e23710;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e23710;

}
}
}
}catch (e23708){if((e23708 instanceof Object)){
var e = e23708;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e23708;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23694){
var self__ = this;
var G__23694__$1 = this;
return (new cljs.core.RecordIter((0),G__23694__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
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

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
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

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__23694){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__23711 = cljs.core.keyword_identical_QMARK_;
var expr__23712 = k__19048__auto__;
if(cljs.core.truth_(pred__23711.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__23712))){
return (new ajax.core.ResponseFormat(G__23694,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23711.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__23712))){
return (new ajax.core.ResponseFormat(self__.read,G__23694,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23711.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__23712))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__23694,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__23694),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__23694){
var self__ = this;
var this__19039__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__23694,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__23696){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__23696),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__23696),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__23696),null,cljs.core.dissoc.call(null,G__23696,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args23716 = [];
var len__19487__auto___23719 = arguments.length;
var i__19488__auto___23720 = (0);
while(true){
if((i__19488__auto___23720 < len__19487__auto___23719)){
args23716.push((arguments[i__19488__auto___23720]));

var G__23721 = (i__19488__auto___23720 + (1));
i__19488__auto___23720 = G__23721;
continue;
} else {
}
break;
}

var G__23718 = args23716.length;
switch (G__23718) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23716.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args23723 = [];
var len__19487__auto___23730 = arguments.length;
var i__19488__auto___23731 = (0);
while(true){
if((i__19488__auto___23731 < len__19487__auto___23730)){
args23723.push((arguments[i__19488__auto___23731]));

var G__23732 = (i__19488__auto___23731 + (1));
i__19488__auto___23731 = G__23732;
continue;
} else {
}
break;
}

var G__23725 = args23723.length;
switch (G__23725) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23723.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__23726){
var vec__23727 = p__23726;
var key = cljs.core.nth.call(null,vec__23727,(0),null);
var value = cljs.core.nth.call(null,vec__23727,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__23728){
var vec__23729 = p__23728;
var key = cljs.core.nth.call(null,vec__23729,(0),null);
var value = cljs.core.nth.call(null,vec__23729,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__23736){
var vec__23737 = p__23736;
var k = cljs.core.nth.call(null,vec__23737,(0),null);
var v = cljs.core.nth.call(null,vec__23737,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args23738 = [];
var len__19487__auto___23741 = arguments.length;
var i__19488__auto___23742 = (0);
while(true){
if((i__19488__auto___23742 < len__19487__auto___23741)){
args23738.push((arguments[i__19488__auto___23742]));

var G__23743 = (i__19488__auto___23742 + (1));
i__19488__auto___23742 = G__23743;
continue;
} else {
}
break;
}

var G__23740 = args23738.length;
switch (G__23740) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23738.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

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
 * @implements {ajax.protocols.Interceptor}
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
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k23746,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__23748 = (((k23746 instanceof cljs.core.Keyword))?k23746.fqn:null);
switch (G__23748) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23746,else__19043__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__23749){
var self__ = this;
var map__23750 = p__23749;
var map__23750__$1 = ((((!((map__23750 == null)))?((((map__23750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23750):map__23750);
var request = map__23750__$1;
var method = cljs.core.get.call(null,map__23750__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#ajax.core.ProcessGet{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23745){
var self__ = this;
var G__23745__$1 = this;
return (new cljs.core.RecordIter((0),G__23745__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
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

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
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

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__23745){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__23752 = cljs.core.keyword_identical_QMARK_;
var expr__23753 = k__19048__auto__;
if(cljs.core.truth_(pred__23752.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__23753))){
return (new ajax.core.ProcessGet(G__23745,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__23745),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__23745){
var self__ = this;
var this__19039__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__23745,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__23747){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__23747),null,cljs.core.dissoc.call(null,G__23747,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k23757,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__23759 = k23757;
switch (G__23759) {
default:
return cljs.core.get.call(null,self__.__extmap,k23757,else__19043__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__23760){
var self__ = this;
var map__23761 = p__23760;
var map__23761__$1 = ((((!((map__23761 == null)))?((((map__23761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23761):map__23761);
var request = map__23761__$1;
var body = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__23761__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23756){
var self__ = this;
var G__23756__$1 = this;
return (new cljs.core.RecordIter((0),G__23756__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
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

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
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

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__23756){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__23763 = cljs.core.keyword_identical_QMARK_;
var expr__23764 = k__19048__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__23756),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__23756){
var self__ = this;
var this__19039__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__23756,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__23758){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__23758),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19040__auto__,k__19041__auto__){
var self__ = this;
var this__19040__auto____$1 = this;
return cljs.core._lookup.call(null,this__19040__auto____$1,k__19041__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19042__auto__,k23768,else__19043__auto__){
var self__ = this;
var this__19042__auto____$1 = this;
var G__23770 = k23768;
switch (G__23770) {
default:
return cljs.core.get.call(null,self__.__extmap,k23768,else__19043__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__23771){
var self__ = this;
var map__23772 = p__23771;
var map__23772__$1 = ((((!((map__23772 == null)))?((((map__23772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23772):map__23772);
var request = map__23772__$1;
var uri = cljs.core.get.call(null,map__23772__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23772__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__23772__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__23772__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__23772__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__23774 = ajax.core.get_request_format.call(null,format);
var map__23774__$1 = ((((!((map__23774 == null)))?((((map__23774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23774):map__23774);
var write = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__23774__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__18418__auto__ = headers;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19054__auto__,writer__19055__auto__,opts__19056__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
var pr_pair__19057__auto__ = ((function (this__19054__auto____$1){
return (function (keyval__19058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,cljs.core.pr_writer,""," ","",opts__19056__auto__,keyval__19058__auto__);
});})(this__19054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19055__auto__,pr_pair__19057__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__19056__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23767){
var self__ = this;
var G__23767__$1 = this;
return (new cljs.core.RecordIter((0),G__23767__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19038__auto__){
var self__ = this;
var this__19038__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19034__auto__){
var self__ = this;
var this__19034__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19044__auto__){
var self__ = this;
var this__19044__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19035__auto__){
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19036__auto__,other__19037__auto__){
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

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19049__auto__,k__19050__auto__){
var self__ = this;
var this__19049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19049__auto____$1),self__.__meta),k__19050__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19050__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19047__auto__,k__19048__auto__,G__23767){
var self__ = this;
var this__19047__auto____$1 = this;
var pred__23776 = cljs.core.keyword_identical_QMARK_;
var expr__23777 = k__19048__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19048__auto__,G__23767),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19052__auto__){
var self__ = this;
var this__19052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19039__auto__,G__23767){
var self__ = this;
var this__19039__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__23767,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19045__auto__,entry__19046__auto__){
var self__ = this;
var this__19045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19046__auto__)){
return cljs.core._assoc.call(null,this__19045__auto____$1,cljs.core._nth.call(null,entry__19046__auto__,(0)),cljs.core._nth.call(null,entry__19046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19045__auto____$1,entry__19046__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__19074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__19074__auto__,writer__19075__auto__){
return cljs.core._write.call(null,writer__19075__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__23769){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__23769),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__23780){
var map__23783 = p__23780;
var map__23783__$1 = ((((!((map__23783 == null)))?((((map__23783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23783):map__23783);
var type = cljs.core.get.call(null,map__23783__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__18418__auto__ = type;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__18418__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args23785 = [];
var len__19487__auto___23788 = arguments.length;
var i__19488__auto___23789 = (0);
while(true){
if((i__19488__auto___23789 < len__19487__auto___23788)){
args23785.push((arguments[i__19488__auto___23789]));

var G__23790 = (i__19488__auto___23789 + (1));
i__19488__auto___23789 = G__23790;
continue;
} else {
}
break;
}

var G__23787 = args23785.length;
switch (G__23787) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23785.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__18418__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args23792 = [];
var len__19487__auto___23795 = arguments.length;
var i__19488__auto___23796 = (0);
while(true){
if((i__19488__auto___23796 < len__19487__auto___23795)){
args23792.push((arguments[i__19488__auto___23796]));

var G__23797 = (i__19488__auto___23796 + (1));
i__19488__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var G__23794 = args23792.length;
switch (G__23794) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23792.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args23799 = [];
var len__19487__auto___23802 = arguments.length;
var i__19488__auto___23803 = (0);
while(true){
if((i__19488__auto___23803 < len__19487__auto___23802)){
args23799.push((arguments[i__19488__auto___23803]));

var G__23804 = (i__19488__auto___23803 + (1));
i__19488__auto___23803 = G__23804;
continue;
} else {
}
break;
}

var G__23801 = args23799.length;
switch (G__23801) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23799.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__18406__auto__ = prefix;
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__18406__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args23806 = [];
var len__19487__auto___23809 = arguments.length;
var i__19488__auto___23810 = (0);
while(true){
if((i__19488__auto___23810 < len__19487__auto___23809)){
args23806.push((arguments[i__19488__auto___23810]));

var G__23811 = (i__19488__auto___23810 + (1));
i__19488__auto___23810 = G__23811;
continue;
} else {
}
break;
}

var G__23808 = args23806.length;
switch (G__23808) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23806.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args23813 = [];
var len__19487__auto___23819 = arguments.length;
var i__19488__auto___23820 = (0);
while(true){
if((i__19488__auto___23820 < len__19487__auto___23819)){
args23813.push((arguments[i__19488__auto___23820]));

var G__23821 = (i__19488__auto___23820 + (1));
i__19488__auto___23820 = G__23821;
continue;
} else {
}
break;
}

var G__23815 = args23813.length;
switch (G__23815) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23813.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__23816){
var map__23817 = p__23816;
var map__23817__$1 = ((((!((map__23817 == null)))?((((map__23817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23817):map__23817);
var prefix = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args23823 = [];
var len__19487__auto___23826 = arguments.length;
var i__19488__auto___23827 = (0);
while(true){
if((i__19488__auto___23827 < len__19487__auto___23826)){
args23823.push((arguments[i__19488__auto___23827]));

var G__23828 = (i__19488__auto___23827 + (1));
i__19488__auto___23827 = G__23828;
continue;
} else {
}
break;
}

var G__23825 = args23823.length;
switch (G__23825) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23823.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args23830 = [];
var len__19487__auto___23833 = arguments.length;
var i__19488__auto___23834 = (0);
while(true){
if((i__19488__auto___23834 < len__19487__auto___23833)){
args23830.push((arguments[i__19488__auto___23834]));

var G__23835 = (i__19488__auto___23834 + (1));
i__19488__auto___23834 = G__23835;
continue;
} else {
}
break;
}

var G__23832 = args23830.length;
switch (G__23832) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23830.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args23837 = [];
var len__19487__auto___23840 = arguments.length;
var i__19488__auto___23841 = (0);
while(true){
if((i__19488__auto___23841 < len__19487__auto___23840)){
args23837.push((arguments[i__19488__auto___23841]));

var G__23842 = (i__19488__auto___23841 + (1));
i__19488__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var G__23839 = args23837.length;
switch (G__23839) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23837.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args23844 = [];
var len__19487__auto___23847 = arguments.length;
var i__19488__auto___23848 = (0);
while(true){
if((i__19488__auto___23848 < len__19487__auto___23847)){
args23844.push((arguments[i__19488__auto___23848]));

var G__23849 = (i__19488__auto___23848 + (1));
i__19488__auto___23848 = G__23849;
continue;
} else {
}
break;
}

var G__23846 = args23844.length;
switch (G__23846) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23844.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__23851){
var map__23854 = p__23851;
var map__23854__$1 = ((((!((map__23854 == null)))?((((map__23854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23854):map__23854);
var request = map__23854__$1;
var response_format = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args23856 = [];
var len__19487__auto___23859 = arguments.length;
var i__19488__auto___23860 = (0);
while(true){
if((i__19488__auto___23860 < len__19487__auto___23859)){
args23856.push((arguments[i__19488__auto___23860]));

var G__23861 = (i__19488__auto___23860 + (1));
i__19488__auto___23860 = G__23861;
continue;
} else {
}
break;
}

var G__23858 = args23856.length;
switch (G__23858) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23856.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__23863){
var map__23866 = p__23863;
var map__23866__$1 = ((((!((map__23866 == null)))?((((map__23866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23866):map__23866);
var request = map__23866__$1;
var response_format = cljs.core.get.call(null,map__23866__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args23868 = [];
var len__19487__auto___23871 = arguments.length;
var i__19488__auto___23872 = (0);
while(true){
if((i__19488__auto___23872 < len__19487__auto___23871)){
args23868.push((arguments[i__19488__auto___23872]));

var G__23873 = (i__19488__auto___23872 + (1));
i__19488__auto___23872 = G__23873;
continue;
} else {
}
break;
}

var G__23870 = args23868.length;
switch (G__23870) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23868.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__23875){
var map__23878 = p__23875;
var map__23878__$1 = ((((!((map__23878 == null)))?((((map__23878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23878):map__23878);
var opts = map__23878__$1;
var response_format = cljs.core.get.call(null,map__23878__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args23880 = [];
var len__19487__auto___23883 = arguments.length;
var i__19488__auto___23884 = (0);
while(true){
if((i__19488__auto___23884 < len__19487__auto___23883)){
args23880.push((arguments[i__19488__auto___23884]));

var G__23885 = (i__19488__auto___23884 + (1));
i__19488__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var G__23882 = args23880.length;
switch (G__23882) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23880.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__23887){
var map__23890 = p__23887;
var map__23890__$1 = ((((!((map__23890 == null)))?((((map__23890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890):map__23890);
var handler = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__23892_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__18418__auto__ = p1__23892_SHARP_;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__23893){
var map__23896 = p__23893;
var map__23896__$1 = ((((!((map__23896 == null)))?((((map__23896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23896):map__23896);
var request = map__23896__$1;
var interceptors = cljs.core.get.call(null,map__23896__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__18418__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__23899 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23899) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__23902 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23902) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__23904_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__23904_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args23905 = [];
var len__19487__auto___23918 = arguments.length;
var i__19488__auto___23919 = (0);
while(true){
if((i__19488__auto___23919 < len__19487__auto___23918)){
args23905.push((arguments[i__19488__auto___23919]));

var G__23920 = (i__19488__auto___23919 + (1));
i__19488__auto___23919 = G__23920;
continue;
} else {
}
break;
}

var G__23907 = args23905.length;
switch (G__23907) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23905.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__23908,p__23909){
var map__23910 = p__23908;
var map__23910__$1 = ((((!((map__23910 == null)))?((((map__23910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23910):map__23910);
var handler = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__23911 = p__23909;
var ok = cljs.core.nth.call(null,vec__23911,(0),null);
var result = cljs.core.nth.call(null,vec__23911,(1),null);
var temp__4655__auto___23922 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___23922)){
var h_23923 = temp__4655__auto___23922;
h_23923.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__23913){
var map__23914 = p__23913;
var map__23914__$1 = ((((!((map__23914 == null)))?((((map__23914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23914):map__23914);
var handler = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__23914,map__23914__$1,handler,error_handler,finally$){
return (function (p__23916){
var vec__23917 = p__23916;
var ok = cljs.core.nth.call(null,vec__23917,(0),null);
var result = cljs.core.nth.call(null,vec__23917,(1),null);
var temp__4655__auto___23924 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___23924)){
var h_23925 = temp__4655__auto___23924;
h_23925.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__23914,map__23914__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__23926){
var map__23929 = p__23926;
var map__23929__$1 = ((((!((map__23929 == null)))?((((map__23929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23929):map__23929);
var opts = map__23929__$1;
var method = cljs.core.get.call(null,map__23929__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__23929__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__23929__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__23929__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__23929__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__18418__auto__ = format;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23933 = arguments.length;
var i__19488__auto___23934 = (0);
while(true){
if((i__19488__auto___23934 < len__19487__auto___23933)){
args__19494__auto__.push((arguments[i__19488__auto___23934]));

var G__23935 = (i__19488__auto___23934 + (1));
i__19488__auto___23934 = G__23935;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq23931){
var G__23932 = cljs.core.first.call(null,seq23931);
var seq23931__$1 = cljs.core.next.call(null,seq23931);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__23932,seq23931__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23938 = arguments.length;
var i__19488__auto___23939 = (0);
while(true){
if((i__19488__auto___23939 < len__19487__auto___23938)){
args__19494__auto__.push((arguments[i__19488__auto___23939]));

var G__23940 = (i__19488__auto___23939 + (1));
i__19488__auto___23939 = G__23940;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq23936){
var G__23937 = cljs.core.first.call(null,seq23936);
var seq23936__$1 = cljs.core.next.call(null,seq23936);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__23937,seq23936__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23943 = arguments.length;
var i__19488__auto___23944 = (0);
while(true){
if((i__19488__auto___23944 < len__19487__auto___23943)){
args__19494__auto__.push((arguments[i__19488__auto___23944]));

var G__23945 = (i__19488__auto___23944 + (1));
i__19488__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq23941){
var G__23942 = cljs.core.first.call(null,seq23941);
var seq23941__$1 = cljs.core.next.call(null,seq23941);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__23942,seq23941__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23948 = arguments.length;
var i__19488__auto___23949 = (0);
while(true){
if((i__19488__auto___23949 < len__19487__auto___23948)){
args__19494__auto__.push((arguments[i__19488__auto___23949]));

var G__23950 = (i__19488__auto___23949 + (1));
i__19488__auto___23949 = G__23950;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq23946){
var G__23947 = cljs.core.first.call(null,seq23946);
var seq23946__$1 = cljs.core.next.call(null,seq23946);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__23947,seq23946__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23953 = arguments.length;
var i__19488__auto___23954 = (0);
while(true){
if((i__19488__auto___23954 < len__19487__auto___23953)){
args__19494__auto__.push((arguments[i__19488__auto___23954]));

var G__23955 = (i__19488__auto___23954 + (1));
i__19488__auto___23954 = G__23955;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq23951){
var G__23952 = cljs.core.first.call(null,seq23951);
var seq23951__$1 = cljs.core.next.call(null,seq23951);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__23952,seq23951__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23958 = arguments.length;
var i__19488__auto___23959 = (0);
while(true){
if((i__19488__auto___23959 < len__19487__auto___23958)){
args__19494__auto__.push((arguments[i__19488__auto___23959]));

var G__23960 = (i__19488__auto___23959 + (1));
i__19488__auto___23959 = G__23960;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq23956){
var G__23957 = cljs.core.first.call(null,seq23956);
var seq23956__$1 = cljs.core.next.call(null,seq23956);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__23957,seq23956__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23963 = arguments.length;
var i__19488__auto___23964 = (0);
while(true){
if((i__19488__auto___23964 < len__19487__auto___23963)){
args__19494__auto__.push((arguments[i__19488__auto___23964]));

var G__23965 = (i__19488__auto___23964 + (1));
i__19488__auto___23964 = G__23965;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq23961){
var G__23962 = cljs.core.first.call(null,seq23961);
var seq23961__$1 = cljs.core.next.call(null,seq23961);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__23962,seq23961__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__19494__auto__ = [];
var len__19487__auto___23968 = arguments.length;
var i__19488__auto___23969 = (0);
while(true){
if((i__19488__auto___23969 < len__19487__auto___23968)){
args__19494__auto__.push((arguments[i__19488__auto___23969]));

var G__23970 = (i__19488__auto___23969 + (1));
i__19488__auto___23969 = G__23970;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__19549__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__19549__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__19549__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq23966){
var G__23967 = cljs.core.first.call(null,seq23966);
var seq23966__$1 = cljs.core.next.call(null,seq23966);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__23967,seq23966__$1);
});

//# sourceMappingURL=core.js.map