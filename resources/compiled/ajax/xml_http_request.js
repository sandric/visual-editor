// Compiled by ClojureScript 1.8.40 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23460,handler){
var map__23461 = p__23460;
var map__23461__$1 = ((((!((map__23461 == null)))?((((map__23461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23461):map__23461);
var uri = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23461,map__23461__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23459_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23459_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23461,map__23461__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___23469 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___23469)){
var response_type_23470 = temp__4657__auto___23469;
this$__$1.responseType = cljs.core.name.call(null,response_type_23470);
} else {
}

var seq__23463_23471 = cljs.core.seq.call(null,headers);
var chunk__23464_23472 = null;
var count__23465_23473 = (0);
var i__23466_23474 = (0);
while(true){
if((i__23466_23474 < count__23465_23473)){
var vec__23467_23475 = cljs.core._nth.call(null,chunk__23464_23472,i__23466_23474);
var k_23476 = cljs.core.nth.call(null,vec__23467_23475,(0),null);
var v_23477 = cljs.core.nth.call(null,vec__23467_23475,(1),null);
this$__$1.setRequestHeader(k_23476,v_23477);

var G__23478 = seq__23463_23471;
var G__23479 = chunk__23464_23472;
var G__23480 = count__23465_23473;
var G__23481 = (i__23466_23474 + (1));
seq__23463_23471 = G__23478;
chunk__23464_23472 = G__23479;
count__23465_23473 = G__23480;
i__23466_23474 = G__23481;
continue;
} else {
var temp__4657__auto___23482 = cljs.core.seq.call(null,seq__23463_23471);
if(temp__4657__auto___23482){
var seq__23463_23483__$1 = temp__4657__auto___23482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23463_23483__$1)){
var c__19229__auto___23484 = cljs.core.chunk_first.call(null,seq__23463_23483__$1);
var G__23485 = cljs.core.chunk_rest.call(null,seq__23463_23483__$1);
var G__23486 = c__19229__auto___23484;
var G__23487 = cljs.core.count.call(null,c__19229__auto___23484);
var G__23488 = (0);
seq__23463_23471 = G__23485;
chunk__23464_23472 = G__23486;
count__23465_23473 = G__23487;
i__23466_23474 = G__23488;
continue;
} else {
var vec__23468_23489 = cljs.core.first.call(null,seq__23463_23483__$1);
var k_23490 = cljs.core.nth.call(null,vec__23468_23489,(0),null);
var v_23491 = cljs.core.nth.call(null,vec__23468_23489,(1),null);
this$__$1.setRequestHeader(k_23490,v_23491);

var G__23492 = cljs.core.next.call(null,seq__23463_23483__$1);
var G__23493 = null;
var G__23494 = (0);
var G__23495 = (0);
seq__23463_23471 = G__23492;
chunk__23464_23472 = G__23493;
count__23465_23473 = G__23494;
i__23466_23474 = G__23495;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18418__auto__ = body;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map