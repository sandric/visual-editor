// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27017 = [];
var len__19487__auto___27023 = arguments.length;
var i__19488__auto___27024 = (0);
while(true){
if((i__19488__auto___27024 < len__19487__auto___27023)){
args27017.push((arguments[i__19488__auto___27024]));

var G__27025 = (i__19488__auto___27024 + (1));
i__19488__auto___27024 = G__27025;
continue;
} else {
}
break;
}

var G__27019 = args27017.length;
switch (G__27019) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27017.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27020 = (function (f,blockable,meta27021){
this.f = f;
this.blockable = blockable;
this.meta27021 = meta27021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27022,meta27021__$1){
var self__ = this;
var _27022__$1 = this;
return (new cljs.core.async.t_cljs$core$async27020(self__.f,self__.blockable,meta27021__$1));
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27022){
var self__ = this;
var _27022__$1 = this;
return self__.meta27021;
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27021","meta27021",2117500531,null)], null);
});

cljs.core.async.t_cljs$core$async27020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27020";

cljs.core.async.t_cljs$core$async27020.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async27020");
});

cljs.core.async.__GT_t_cljs$core$async27020 = (function cljs$core$async$__GT_t_cljs$core$async27020(f__$1,blockable__$1,meta27021){
return (new cljs.core.async.t_cljs$core$async27020(f__$1,blockable__$1,meta27021));
});

}

return (new cljs.core.async.t_cljs$core$async27020(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27029 = [];
var len__19487__auto___27032 = arguments.length;
var i__19488__auto___27033 = (0);
while(true){
if((i__19488__auto___27033 < len__19487__auto___27032)){
args27029.push((arguments[i__19488__auto___27033]));

var G__27034 = (i__19488__auto___27033 + (1));
i__19488__auto___27033 = G__27034;
continue;
} else {
}
break;
}

var G__27031 = args27029.length;
switch (G__27031) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27029.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27036 = [];
var len__19487__auto___27039 = arguments.length;
var i__19488__auto___27040 = (0);
while(true){
if((i__19488__auto___27040 < len__19487__auto___27039)){
args27036.push((arguments[i__19488__auto___27040]));

var G__27041 = (i__19488__auto___27040 + (1));
i__19488__auto___27040 = G__27041;
continue;
} else {
}
break;
}

var G__27038 = args27036.length;
switch (G__27038) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27036.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27043 = [];
var len__19487__auto___27046 = arguments.length;
var i__19488__auto___27047 = (0);
while(true){
if((i__19488__auto___27047 < len__19487__auto___27046)){
args27043.push((arguments[i__19488__auto___27047]));

var G__27048 = (i__19488__auto___27047 + (1));
i__19488__auto___27047 = G__27048;
continue;
} else {
}
break;
}

var G__27045 = args27043.length;
switch (G__27045) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27043.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27050 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27050);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27050,ret){
return (function (){
return fn1.call(null,val_27050);
});})(val_27050,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27051 = [];
var len__19487__auto___27054 = arguments.length;
var i__19488__auto___27055 = (0);
while(true){
if((i__19488__auto___27055 < len__19487__auto___27054)){
args27051.push((arguments[i__19488__auto___27055]));

var G__27056 = (i__19488__auto___27055 + (1));
i__19488__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var G__27053 = args27051.length;
switch (G__27053) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27051.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19332__auto___27058 = n;
var x_27059 = (0);
while(true){
if((x_27059 < n__19332__auto___27058)){
(a[x_27059] = (0));

var G__27060 = (x_27059 + (1));
x_27059 = G__27060;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27061 = (i + (1));
i = G__27061;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27065 = (function (alt_flag,flag,meta27066){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27066 = meta27066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27067,meta27066__$1){
var self__ = this;
var _27067__$1 = this;
return (new cljs.core.async.t_cljs$core$async27065(self__.alt_flag,self__.flag,meta27066__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27067){
var self__ = this;
var _27067__$1 = this;
return self__.meta27066;
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27066","meta27066",419482520,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27065";

cljs.core.async.t_cljs$core$async27065.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async27065");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27065 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27065(alt_flag__$1,flag__$1,meta27066){
return (new cljs.core.async.t_cljs$core$async27065(alt_flag__$1,flag__$1,meta27066));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27065(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27071 = (function (alt_handler,flag,cb,meta27072){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27072 = meta27072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27073,meta27072__$1){
var self__ = this;
var _27073__$1 = this;
return (new cljs.core.async.t_cljs$core$async27071(self__.alt_handler,self__.flag,self__.cb,meta27072__$1));
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27073){
var self__ = this;
var _27073__$1 = this;
return self__.meta27072;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27072","meta27072",1308492625,null)], null);
});

cljs.core.async.t_cljs$core$async27071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27071";

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async27071");
});

cljs.core.async.__GT_t_cljs$core$async27071 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27071(alt_handler__$1,flag__$1,cb__$1,meta27072){
return (new cljs.core.async.t_cljs$core$async27071(alt_handler__$1,flag__$1,cb__$1,meta27072));
});

}

return (new cljs.core.async.t_cljs$core$async27071(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27074_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27074_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27075_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27075_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18418__auto__ = wport;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27076 = (i + (1));
i = G__27076;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18418__auto__ = ret;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18406__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18406__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___27082 = arguments.length;
var i__19488__auto___27083 = (0);
while(true){
if((i__19488__auto___27083 < len__19487__auto___27082)){
args__19494__auto__.push((arguments[i__19488__auto___27083]));

var G__27084 = (i__19488__auto___27083 + (1));
i__19488__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27079){
var map__27080 = p__27079;
var map__27080__$1 = ((((!((map__27080 == null)))?((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27080):map__27080);
var opts = map__27080__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27077){
var G__27078 = cljs.core.first.call(null,seq27077);
var seq27077__$1 = cljs.core.next.call(null,seq27077);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27078,seq27077__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27085 = [];
var len__19487__auto___27135 = arguments.length;
var i__19488__auto___27136 = (0);
while(true){
if((i__19488__auto___27136 < len__19487__auto___27135)){
args27085.push((arguments[i__19488__auto___27136]));

var G__27137 = (i__19488__auto___27136 + (1));
i__19488__auto___27136 = G__27137;
continue;
} else {
}
break;
}

var G__27087 = args27085.length;
switch (G__27087) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27085.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22859__auto___27139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___27139){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___27139){
return (function (state_27111){
var state_val_27112 = (state_27111[(1)]);
if((state_val_27112 === (7))){
var inst_27107 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27113_27140 = state_27111__$1;
(statearr_27113_27140[(2)] = inst_27107);

(statearr_27113_27140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (1))){
var state_27111__$1 = state_27111;
var statearr_27114_27141 = state_27111__$1;
(statearr_27114_27141[(2)] = null);

(statearr_27114_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (4))){
var inst_27090 = (state_27111[(7)]);
var inst_27090__$1 = (state_27111[(2)]);
var inst_27091 = (inst_27090__$1 == null);
var state_27111__$1 = (function (){var statearr_27115 = state_27111;
(statearr_27115[(7)] = inst_27090__$1);

return statearr_27115;
})();
if(cljs.core.truth_(inst_27091)){
var statearr_27116_27142 = state_27111__$1;
(statearr_27116_27142[(1)] = (5));

} else {
var statearr_27117_27143 = state_27111__$1;
(statearr_27117_27143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (13))){
var state_27111__$1 = state_27111;
var statearr_27118_27144 = state_27111__$1;
(statearr_27118_27144[(2)] = null);

(statearr_27118_27144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (6))){
var inst_27090 = (state_27111[(7)]);
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27111__$1,(11),to,inst_27090);
} else {
if((state_val_27112 === (3))){
var inst_27109 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27111__$1,inst_27109);
} else {
if((state_val_27112 === (12))){
var state_27111__$1 = state_27111;
var statearr_27119_27145 = state_27111__$1;
(statearr_27119_27145[(2)] = null);

(statearr_27119_27145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (2))){
var state_27111__$1 = state_27111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27111__$1,(4),from);
} else {
if((state_val_27112 === (11))){
var inst_27100 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
if(cljs.core.truth_(inst_27100)){
var statearr_27120_27146 = state_27111__$1;
(statearr_27120_27146[(1)] = (12));

} else {
var statearr_27121_27147 = state_27111__$1;
(statearr_27121_27147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (9))){
var state_27111__$1 = state_27111;
var statearr_27122_27148 = state_27111__$1;
(statearr_27122_27148[(2)] = null);

(statearr_27122_27148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (5))){
var state_27111__$1 = state_27111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27123_27149 = state_27111__$1;
(statearr_27123_27149[(1)] = (8));

} else {
var statearr_27124_27150 = state_27111__$1;
(statearr_27124_27150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (14))){
var inst_27105 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27125_27151 = state_27111__$1;
(statearr_27125_27151[(2)] = inst_27105);

(statearr_27125_27151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (10))){
var inst_27097 = (state_27111[(2)]);
var state_27111__$1 = state_27111;
var statearr_27126_27152 = state_27111__$1;
(statearr_27126_27152[(2)] = inst_27097);

(statearr_27126_27152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27112 === (8))){
var inst_27094 = cljs.core.async.close_BANG_.call(null,to);
var state_27111__$1 = state_27111;
var statearr_27127_27153 = state_27111__$1;
(statearr_27127_27153[(2)] = inst_27094);

(statearr_27127_27153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__22859__auto___27139))
;
return ((function (switch__22838__auto__,c__22859__auto___27139){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_27131 = [null,null,null,null,null,null,null,null];
(statearr_27131[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_27131[(1)] = (1));

return statearr_27131;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_27111){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27132){if((e27132 instanceof Object)){
var ex__22842__auto__ = e27132;
var statearr_27133_27154 = state_27111;
(statearr_27133_27154[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27155 = state_27111;
state_27111 = G__27155;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_27111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_27111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___27139))
})();
var state__22861__auto__ = (function (){var statearr_27134 = f__22860__auto__.call(null);
(statearr_27134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27139);

return statearr_27134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___27139))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27339){
var vec__27340 = p__27339;
var v = cljs.core.nth.call(null,vec__27340,(0),null);
var p = cljs.core.nth.call(null,vec__27340,(1),null);
var job = vec__27340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22859__auto___27522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results){
return (function (state_27345){
var state_val_27346 = (state_27345[(1)]);
if((state_val_27346 === (1))){
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27345__$1,(2),res,v);
} else {
if((state_val_27346 === (2))){
var inst_27342 = (state_27345[(2)]);
var inst_27343 = cljs.core.async.close_BANG_.call(null,res);
var state_27345__$1 = (function (){var statearr_27347 = state_27345;
(statearr_27347[(7)] = inst_27342);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27345__$1,inst_27343);
} else {
return null;
}
}
});})(c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results))
;
return ((function (switch__22838__auto__,c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_27351 = [null,null,null,null,null,null,null,null];
(statearr_27351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__);

(statearr_27351[(1)] = (1));

return statearr_27351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1 = (function (state_27345){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27352){if((e27352 instanceof Object)){
var ex__22842__auto__ = e27352;
var statearr_27353_27523 = state_27345;
(statearr_27353_27523[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27524 = state_27345;
state_27345 = G__27524;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = function(state_27345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1.call(this,state_27345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results))
})();
var state__22861__auto__ = (function (){var statearr_27354 = f__22860__auto__.call(null);
(statearr_27354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27522);

return statearr_27354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___27522,res,vec__27340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27355){
var vec__27356 = p__27355;
var v = cljs.core.nth.call(null,vec__27356,(0),null);
var p = cljs.core.nth.call(null,vec__27356,(1),null);
var job = vec__27356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19332__auto___27525 = n;
var __27526 = (0);
while(true){
if((__27526 < n__19332__auto___27525)){
var G__27357_27527 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27357_27527) {
case "compute":
var c__22859__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27526,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (__27526,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function (state_27370){
var state_val_27371 = (state_27370[(1)]);
if((state_val_27371 === (1))){
var state_27370__$1 = state_27370;
var statearr_27372_27530 = state_27370__$1;
(statearr_27372_27530[(2)] = null);

(statearr_27372_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (2))){
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27370__$1,(4),jobs);
} else {
if((state_val_27371 === (3))){
var inst_27368 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27370__$1,inst_27368);
} else {
if((state_val_27371 === (4))){
var inst_27360 = (state_27370[(2)]);
var inst_27361 = process.call(null,inst_27360);
var state_27370__$1 = state_27370;
if(cljs.core.truth_(inst_27361)){
var statearr_27373_27531 = state_27370__$1;
(statearr_27373_27531[(1)] = (5));

} else {
var statearr_27374_27532 = state_27370__$1;
(statearr_27374_27532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (5))){
var state_27370__$1 = state_27370;
var statearr_27375_27533 = state_27370__$1;
(statearr_27375_27533[(2)] = null);

(statearr_27375_27533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (6))){
var state_27370__$1 = state_27370;
var statearr_27376_27534 = state_27370__$1;
(statearr_27376_27534[(2)] = null);

(statearr_27376_27534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (7))){
var inst_27366 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27377_27535 = state_27370__$1;
(statearr_27377_27535[(2)] = inst_27366);

(statearr_27377_27535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27526,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
;
return ((function (__27526,switch__22838__auto__,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_27381 = [null,null,null,null,null,null,null];
(statearr_27381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__);

(statearr_27381[(1)] = (1));

return statearr_27381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1 = (function (state_27370){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27382){if((e27382 instanceof Object)){
var ex__22842__auto__ = e27382;
var statearr_27383_27536 = state_27370;
(statearr_27383_27536[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27370;
state_27370 = G__27537;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = function(state_27370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1.call(this,state_27370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__;
})()
;})(__27526,switch__22838__auto__,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
})();
var state__22861__auto__ = (function (){var statearr_27384 = f__22860__auto__.call(null);
(statearr_27384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27529);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(__27526,c__22859__auto___27529,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
);


break;
case "async":
var c__22859__auto___27538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27526,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (__27526,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function (state_27397){
var state_val_27398 = (state_27397[(1)]);
if((state_val_27398 === (1))){
var state_27397__$1 = state_27397;
var statearr_27399_27539 = state_27397__$1;
(statearr_27399_27539[(2)] = null);

(statearr_27399_27539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (2))){
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27397__$1,(4),jobs);
} else {
if((state_val_27398 === (3))){
var inst_27395 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27397__$1,inst_27395);
} else {
if((state_val_27398 === (4))){
var inst_27387 = (state_27397[(2)]);
var inst_27388 = async.call(null,inst_27387);
var state_27397__$1 = state_27397;
if(cljs.core.truth_(inst_27388)){
var statearr_27400_27540 = state_27397__$1;
(statearr_27400_27540[(1)] = (5));

} else {
var statearr_27401_27541 = state_27397__$1;
(statearr_27401_27541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (5))){
var state_27397__$1 = state_27397;
var statearr_27402_27542 = state_27397__$1;
(statearr_27402_27542[(2)] = null);

(statearr_27402_27542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (6))){
var state_27397__$1 = state_27397;
var statearr_27403_27543 = state_27397__$1;
(statearr_27403_27543[(2)] = null);

(statearr_27403_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27398 === (7))){
var inst_27393 = (state_27397[(2)]);
var state_27397__$1 = state_27397;
var statearr_27404_27544 = state_27397__$1;
(statearr_27404_27544[(2)] = inst_27393);

(statearr_27404_27544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27526,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
;
return ((function (__27526,switch__22838__auto__,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1 = (function (state_27397){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__22842__auto__ = e27409;
var statearr_27410_27545 = state_27397;
(statearr_27410_27545[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27397;
state_27397 = G__27546;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = function(state_27397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1.call(this,state_27397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__;
})()
;})(__27526,switch__22838__auto__,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
})();
var state__22861__auto__ = (function (){var statearr_27411 = f__22860__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27538);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(__27526,c__22859__auto___27538,G__27357_27527,n__19332__auto___27525,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27547 = (__27526 + (1));
__27526 = G__27547;
continue;
} else {
}
break;
}

var c__22859__auto___27548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___27548,jobs,results,process,async){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___27548,jobs,results,process,async){
return (function (state_27433){
var state_val_27434 = (state_27433[(1)]);
if((state_val_27434 === (1))){
var state_27433__$1 = state_27433;
var statearr_27435_27549 = state_27433__$1;
(statearr_27435_27549[(2)] = null);

(statearr_27435_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (2))){
var state_27433__$1 = state_27433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27433__$1,(4),from);
} else {
if((state_val_27434 === (3))){
var inst_27431 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27433__$1,inst_27431);
} else {
if((state_val_27434 === (4))){
var inst_27414 = (state_27433[(7)]);
var inst_27414__$1 = (state_27433[(2)]);
var inst_27415 = (inst_27414__$1 == null);
var state_27433__$1 = (function (){var statearr_27436 = state_27433;
(statearr_27436[(7)] = inst_27414__$1);

return statearr_27436;
})();
if(cljs.core.truth_(inst_27415)){
var statearr_27437_27550 = state_27433__$1;
(statearr_27437_27550[(1)] = (5));

} else {
var statearr_27438_27551 = state_27433__$1;
(statearr_27438_27551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (5))){
var inst_27417 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27433__$1 = state_27433;
var statearr_27439_27552 = state_27433__$1;
(statearr_27439_27552[(2)] = inst_27417);

(statearr_27439_27552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (6))){
var inst_27414 = (state_27433[(7)]);
var inst_27419 = (state_27433[(8)]);
var inst_27419__$1 = cljs.core.async.chan.call(null,(1));
var inst_27420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27421 = [inst_27414,inst_27419__$1];
var inst_27422 = (new cljs.core.PersistentVector(null,2,(5),inst_27420,inst_27421,null));
var state_27433__$1 = (function (){var statearr_27440 = state_27433;
(statearr_27440[(8)] = inst_27419__$1);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27433__$1,(8),jobs,inst_27422);
} else {
if((state_val_27434 === (7))){
var inst_27429 = (state_27433[(2)]);
var state_27433__$1 = state_27433;
var statearr_27441_27553 = state_27433__$1;
(statearr_27441_27553[(2)] = inst_27429);

(statearr_27441_27553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27434 === (8))){
var inst_27419 = (state_27433[(8)]);
var inst_27424 = (state_27433[(2)]);
var state_27433__$1 = (function (){var statearr_27442 = state_27433;
(statearr_27442[(9)] = inst_27424);

return statearr_27442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27433__$1,(9),results,inst_27419);
} else {
if((state_val_27434 === (9))){
var inst_27426 = (state_27433[(2)]);
var state_27433__$1 = (function (){var statearr_27443 = state_27433;
(statearr_27443[(10)] = inst_27426);

return statearr_27443;
})();
var statearr_27444_27554 = state_27433__$1;
(statearr_27444_27554[(2)] = null);

(statearr_27444_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22859__auto___27548,jobs,results,process,async))
;
return ((function (switch__22838__auto__,c__22859__auto___27548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_27448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__);

(statearr_27448[(1)] = (1));

return statearr_27448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1 = (function (state_27433){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27449){if((e27449 instanceof Object)){
var ex__22842__auto__ = e27449;
var statearr_27450_27555 = state_27433;
(statearr_27450_27555[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27556 = state_27433;
state_27433 = G__27556;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = function(state_27433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1.call(this,state_27433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___27548,jobs,results,process,async))
})();
var state__22861__auto__ = (function (){var statearr_27451 = f__22860__auto__.call(null);
(statearr_27451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27548);

return statearr_27451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___27548,jobs,results,process,async))
);


var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__,jobs,results,process,async){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__,jobs,results,process,async){
return (function (state_27489){
var state_val_27490 = (state_27489[(1)]);
if((state_val_27490 === (7))){
var inst_27485 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27491_27557 = state_27489__$1;
(statearr_27491_27557[(2)] = inst_27485);

(statearr_27491_27557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (20))){
var state_27489__$1 = state_27489;
var statearr_27492_27558 = state_27489__$1;
(statearr_27492_27558[(2)] = null);

(statearr_27492_27558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (1))){
var state_27489__$1 = state_27489;
var statearr_27493_27559 = state_27489__$1;
(statearr_27493_27559[(2)] = null);

(statearr_27493_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (4))){
var inst_27454 = (state_27489[(7)]);
var inst_27454__$1 = (state_27489[(2)]);
var inst_27455 = (inst_27454__$1 == null);
var state_27489__$1 = (function (){var statearr_27494 = state_27489;
(statearr_27494[(7)] = inst_27454__$1);

return statearr_27494;
})();
if(cljs.core.truth_(inst_27455)){
var statearr_27495_27560 = state_27489__$1;
(statearr_27495_27560[(1)] = (5));

} else {
var statearr_27496_27561 = state_27489__$1;
(statearr_27496_27561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (15))){
var inst_27467 = (state_27489[(8)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27489__$1,(18),to,inst_27467);
} else {
if((state_val_27490 === (21))){
var inst_27480 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27497_27562 = state_27489__$1;
(statearr_27497_27562[(2)] = inst_27480);

(statearr_27497_27562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (13))){
var inst_27482 = (state_27489[(2)]);
var state_27489__$1 = (function (){var statearr_27498 = state_27489;
(statearr_27498[(9)] = inst_27482);

return statearr_27498;
})();
var statearr_27499_27563 = state_27489__$1;
(statearr_27499_27563[(2)] = null);

(statearr_27499_27563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (6))){
var inst_27454 = (state_27489[(7)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(11),inst_27454);
} else {
if((state_val_27490 === (17))){
var inst_27475 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
if(cljs.core.truth_(inst_27475)){
var statearr_27500_27564 = state_27489__$1;
(statearr_27500_27564[(1)] = (19));

} else {
var statearr_27501_27565 = state_27489__$1;
(statearr_27501_27565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (3))){
var inst_27487 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27489__$1,inst_27487);
} else {
if((state_val_27490 === (12))){
var inst_27464 = (state_27489[(10)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(14),inst_27464);
} else {
if((state_val_27490 === (2))){
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27489__$1,(4),results);
} else {
if((state_val_27490 === (19))){
var state_27489__$1 = state_27489;
var statearr_27502_27566 = state_27489__$1;
(statearr_27502_27566[(2)] = null);

(statearr_27502_27566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (11))){
var inst_27464 = (state_27489[(2)]);
var state_27489__$1 = (function (){var statearr_27503 = state_27489;
(statearr_27503[(10)] = inst_27464);

return statearr_27503;
})();
var statearr_27504_27567 = state_27489__$1;
(statearr_27504_27567[(2)] = null);

(statearr_27504_27567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (9))){
var state_27489__$1 = state_27489;
var statearr_27505_27568 = state_27489__$1;
(statearr_27505_27568[(2)] = null);

(statearr_27505_27568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (5))){
var state_27489__$1 = state_27489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27506_27569 = state_27489__$1;
(statearr_27506_27569[(1)] = (8));

} else {
var statearr_27507_27570 = state_27489__$1;
(statearr_27507_27570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (14))){
var inst_27467 = (state_27489[(8)]);
var inst_27469 = (state_27489[(11)]);
var inst_27467__$1 = (state_27489[(2)]);
var inst_27468 = (inst_27467__$1 == null);
var inst_27469__$1 = cljs.core.not.call(null,inst_27468);
var state_27489__$1 = (function (){var statearr_27508 = state_27489;
(statearr_27508[(8)] = inst_27467__$1);

(statearr_27508[(11)] = inst_27469__$1);

return statearr_27508;
})();
if(inst_27469__$1){
var statearr_27509_27571 = state_27489__$1;
(statearr_27509_27571[(1)] = (15));

} else {
var statearr_27510_27572 = state_27489__$1;
(statearr_27510_27572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (16))){
var inst_27469 = (state_27489[(11)]);
var state_27489__$1 = state_27489;
var statearr_27511_27573 = state_27489__$1;
(statearr_27511_27573[(2)] = inst_27469);

(statearr_27511_27573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (10))){
var inst_27461 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27512_27574 = state_27489__$1;
(statearr_27512_27574[(2)] = inst_27461);

(statearr_27512_27574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (18))){
var inst_27472 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27513_27575 = state_27489__$1;
(statearr_27513_27575[(2)] = inst_27472);

(statearr_27513_27575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (8))){
var inst_27458 = cljs.core.async.close_BANG_.call(null,to);
var state_27489__$1 = state_27489;
var statearr_27514_27576 = state_27489__$1;
(statearr_27514_27576[(2)] = inst_27458);

(statearr_27514_27576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__22859__auto__,jobs,results,process,async))
;
return ((function (switch__22838__auto__,c__22859__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_27518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__);

(statearr_27518[(1)] = (1));

return statearr_27518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1 = (function (state_27489){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27519){if((e27519 instanceof Object)){
var ex__22842__auto__ = e27519;
var statearr_27520_27577 = state_27489;
(statearr_27520_27577[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27578 = state_27489;
state_27489 = G__27578;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__ = function(state_27489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1.call(this,state_27489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__,jobs,results,process,async))
})();
var state__22861__auto__ = (function (){var statearr_27521 = f__22860__auto__.call(null);
(statearr_27521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_27521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__,jobs,results,process,async))
);

return c__22859__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27579 = [];
var len__19487__auto___27582 = arguments.length;
var i__19488__auto___27583 = (0);
while(true){
if((i__19488__auto___27583 < len__19487__auto___27582)){
args27579.push((arguments[i__19488__auto___27583]));

var G__27584 = (i__19488__auto___27583 + (1));
i__19488__auto___27583 = G__27584;
continue;
} else {
}
break;
}

var G__27581 = args27579.length;
switch (G__27581) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27579.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27586 = [];
var len__19487__auto___27589 = arguments.length;
var i__19488__auto___27590 = (0);
while(true){
if((i__19488__auto___27590 < len__19487__auto___27589)){
args27586.push((arguments[i__19488__auto___27590]));

var G__27591 = (i__19488__auto___27590 + (1));
i__19488__auto___27590 = G__27591;
continue;
} else {
}
break;
}

var G__27588 = args27586.length;
switch (G__27588) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27586.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27593 = [];
var len__19487__auto___27646 = arguments.length;
var i__19488__auto___27647 = (0);
while(true){
if((i__19488__auto___27647 < len__19487__auto___27646)){
args27593.push((arguments[i__19488__auto___27647]));

var G__27648 = (i__19488__auto___27647 + (1));
i__19488__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var G__27595 = args27593.length;
switch (G__27595) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27593.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22859__auto___27650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___27650,tc,fc){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___27650,tc,fc){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (7))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27623_27651 = state_27621__$1;
(statearr_27623_27651[(2)] = inst_27617);

(statearr_27623_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (1))){
var state_27621__$1 = state_27621;
var statearr_27624_27652 = state_27621__$1;
(statearr_27624_27652[(2)] = null);

(statearr_27624_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (4))){
var inst_27598 = (state_27621[(7)]);
var inst_27598__$1 = (state_27621[(2)]);
var inst_27599 = (inst_27598__$1 == null);
var state_27621__$1 = (function (){var statearr_27625 = state_27621;
(statearr_27625[(7)] = inst_27598__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27599)){
var statearr_27626_27653 = state_27621__$1;
(statearr_27626_27653[(1)] = (5));

} else {
var statearr_27627_27654 = state_27621__$1;
(statearr_27627_27654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (13))){
var state_27621__$1 = state_27621;
var statearr_27628_27655 = state_27621__$1;
(statearr_27628_27655[(2)] = null);

(statearr_27628_27655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var inst_27598 = (state_27621[(7)]);
var inst_27604 = p.call(null,inst_27598);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27604)){
var statearr_27629_27656 = state_27621__$1;
(statearr_27629_27656[(1)] = (9));

} else {
var statearr_27630_27657 = state_27621__$1;
(statearr_27630_27657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (12))){
var state_27621__$1 = state_27621;
var statearr_27631_27658 = state_27621__$1;
(statearr_27631_27658[(2)] = null);

(statearr_27631_27658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(4),ch);
} else {
if((state_val_27622 === (11))){
var inst_27598 = (state_27621[(7)]);
var inst_27608 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(8),inst_27608,inst_27598);
} else {
if((state_val_27622 === (9))){
var state_27621__$1 = state_27621;
var statearr_27632_27659 = state_27621__$1;
(statearr_27632_27659[(2)] = tc);

(statearr_27632_27659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (5))){
var inst_27601 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27602 = cljs.core.async.close_BANG_.call(null,fc);
var state_27621__$1 = (function (){var statearr_27633 = state_27621;
(statearr_27633[(8)] = inst_27601);

return statearr_27633;
})();
var statearr_27634_27660 = state_27621__$1;
(statearr_27634_27660[(2)] = inst_27602);

(statearr_27634_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (14))){
var inst_27615 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27635_27661 = state_27621__$1;
(statearr_27635_27661[(2)] = inst_27615);

(statearr_27635_27661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (10))){
var state_27621__$1 = state_27621;
var statearr_27636_27662 = state_27621__$1;
(statearr_27636_27662[(2)] = fc);

(statearr_27636_27662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (8))){
var inst_27610 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27610)){
var statearr_27637_27663 = state_27621__$1;
(statearr_27637_27663[(1)] = (12));

} else {
var statearr_27638_27664 = state_27621__$1;
(statearr_27638_27664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__22859__auto___27650,tc,fc))
;
return ((function (switch__22838__auto__,c__22859__auto___27650,tc,fc){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_27642 = [null,null,null,null,null,null,null,null,null];
(statearr_27642[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_27642[(1)] = (1));

return statearr_27642;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_27621){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27643){if((e27643 instanceof Object)){
var ex__22842__auto__ = e27643;
var statearr_27644_27665 = state_27621;
(statearr_27644_27665[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27621;
state_27621 = G__27666;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___27650,tc,fc))
})();
var state__22861__auto__ = (function (){var statearr_27645 = f__22860__auto__.call(null);
(statearr_27645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___27650);

return statearr_27645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___27650,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__){
return (function (state_27730){
var state_val_27731 = (state_27730[(1)]);
if((state_val_27731 === (7))){
var inst_27726 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27732_27753 = state_27730__$1;
(statearr_27732_27753[(2)] = inst_27726);

(statearr_27732_27753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (1))){
var inst_27710 = init;
var state_27730__$1 = (function (){var statearr_27733 = state_27730;
(statearr_27733[(7)] = inst_27710);

return statearr_27733;
})();
var statearr_27734_27754 = state_27730__$1;
(statearr_27734_27754[(2)] = null);

(statearr_27734_27754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (4))){
var inst_27713 = (state_27730[(8)]);
var inst_27713__$1 = (state_27730[(2)]);
var inst_27714 = (inst_27713__$1 == null);
var state_27730__$1 = (function (){var statearr_27735 = state_27730;
(statearr_27735[(8)] = inst_27713__$1);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27714)){
var statearr_27736_27755 = state_27730__$1;
(statearr_27736_27755[(1)] = (5));

} else {
var statearr_27737_27756 = state_27730__$1;
(statearr_27737_27756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (6))){
var inst_27713 = (state_27730[(8)]);
var inst_27710 = (state_27730[(7)]);
var inst_27717 = (state_27730[(9)]);
var inst_27717__$1 = f.call(null,inst_27710,inst_27713);
var inst_27718 = cljs.core.reduced_QMARK_.call(null,inst_27717__$1);
var state_27730__$1 = (function (){var statearr_27738 = state_27730;
(statearr_27738[(9)] = inst_27717__$1);

return statearr_27738;
})();
if(inst_27718){
var statearr_27739_27757 = state_27730__$1;
(statearr_27739_27757[(1)] = (8));

} else {
var statearr_27740_27758 = state_27730__$1;
(statearr_27740_27758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (3))){
var inst_27728 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27730__$1,inst_27728);
} else {
if((state_val_27731 === (2))){
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27730__$1,(4),ch);
} else {
if((state_val_27731 === (9))){
var inst_27717 = (state_27730[(9)]);
var inst_27710 = inst_27717;
var state_27730__$1 = (function (){var statearr_27741 = state_27730;
(statearr_27741[(7)] = inst_27710);

return statearr_27741;
})();
var statearr_27742_27759 = state_27730__$1;
(statearr_27742_27759[(2)] = null);

(statearr_27742_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (5))){
var inst_27710 = (state_27730[(7)]);
var state_27730__$1 = state_27730;
var statearr_27743_27760 = state_27730__$1;
(statearr_27743_27760[(2)] = inst_27710);

(statearr_27743_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (10))){
var inst_27724 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27744_27761 = state_27730__$1;
(statearr_27744_27761[(2)] = inst_27724);

(statearr_27744_27761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (8))){
var inst_27717 = (state_27730[(9)]);
var inst_27720 = cljs.core.deref.call(null,inst_27717);
var state_27730__$1 = state_27730;
var statearr_27745_27762 = state_27730__$1;
(statearr_27745_27762[(2)] = inst_27720);

(statearr_27745_27762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__22859__auto__))
;
return ((function (switch__22838__auto__,c__22859__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22839__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22839__auto____0 = (function (){
var statearr_27749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27749[(0)] = cljs$core$async$reduce_$_state_machine__22839__auto__);

(statearr_27749[(1)] = (1));

return statearr_27749;
});
var cljs$core$async$reduce_$_state_machine__22839__auto____1 = (function (state_27730){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27750){if((e27750 instanceof Object)){
var ex__22842__auto__ = e27750;
var statearr_27751_27763 = state_27730;
(statearr_27751_27763[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27730;
state_27730 = G__27764;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22839__auto__ = function(state_27730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22839__auto____1.call(this,state_27730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22839__auto____0;
cljs$core$async$reduce_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22839__auto____1;
return cljs$core$async$reduce_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__))
})();
var state__22861__auto__ = (function (){var statearr_27752 = f__22860__auto__.call(null);
(statearr_27752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_27752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__))
);

return c__22859__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27765 = [];
var len__19487__auto___27817 = arguments.length;
var i__19488__auto___27818 = (0);
while(true){
if((i__19488__auto___27818 < len__19487__auto___27817)){
args27765.push((arguments[i__19488__auto___27818]));

var G__27819 = (i__19488__auto___27818 + (1));
i__19488__auto___27818 = G__27819;
continue;
} else {
}
break;
}

var G__27767 = args27765.length;
switch (G__27767) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27765.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__){
return (function (state_27792){
var state_val_27793 = (state_27792[(1)]);
if((state_val_27793 === (7))){
var inst_27774 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27794_27821 = state_27792__$1;
(statearr_27794_27821[(2)] = inst_27774);

(statearr_27794_27821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (1))){
var inst_27768 = cljs.core.seq.call(null,coll);
var inst_27769 = inst_27768;
var state_27792__$1 = (function (){var statearr_27795 = state_27792;
(statearr_27795[(7)] = inst_27769);

return statearr_27795;
})();
var statearr_27796_27822 = state_27792__$1;
(statearr_27796_27822[(2)] = null);

(statearr_27796_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (4))){
var inst_27769 = (state_27792[(7)]);
var inst_27772 = cljs.core.first.call(null,inst_27769);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27792__$1,(7),ch,inst_27772);
} else {
if((state_val_27793 === (13))){
var inst_27786 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27797_27823 = state_27792__$1;
(statearr_27797_27823[(2)] = inst_27786);

(statearr_27797_27823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (6))){
var inst_27777 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27777)){
var statearr_27798_27824 = state_27792__$1;
(statearr_27798_27824[(1)] = (8));

} else {
var statearr_27799_27825 = state_27792__$1;
(statearr_27799_27825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (3))){
var inst_27790 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27792__$1,inst_27790);
} else {
if((state_val_27793 === (12))){
var state_27792__$1 = state_27792;
var statearr_27800_27826 = state_27792__$1;
(statearr_27800_27826[(2)] = null);

(statearr_27800_27826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (2))){
var inst_27769 = (state_27792[(7)]);
var state_27792__$1 = state_27792;
if(cljs.core.truth_(inst_27769)){
var statearr_27801_27827 = state_27792__$1;
(statearr_27801_27827[(1)] = (4));

} else {
var statearr_27802_27828 = state_27792__$1;
(statearr_27802_27828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (11))){
var inst_27783 = cljs.core.async.close_BANG_.call(null,ch);
var state_27792__$1 = state_27792;
var statearr_27803_27829 = state_27792__$1;
(statearr_27803_27829[(2)] = inst_27783);

(statearr_27803_27829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (9))){
var state_27792__$1 = state_27792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27804_27830 = state_27792__$1;
(statearr_27804_27830[(1)] = (11));

} else {
var statearr_27805_27831 = state_27792__$1;
(statearr_27805_27831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (5))){
var inst_27769 = (state_27792[(7)]);
var state_27792__$1 = state_27792;
var statearr_27806_27832 = state_27792__$1;
(statearr_27806_27832[(2)] = inst_27769);

(statearr_27806_27832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (10))){
var inst_27788 = (state_27792[(2)]);
var state_27792__$1 = state_27792;
var statearr_27807_27833 = state_27792__$1;
(statearr_27807_27833[(2)] = inst_27788);

(statearr_27807_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27793 === (8))){
var inst_27769 = (state_27792[(7)]);
var inst_27779 = cljs.core.next.call(null,inst_27769);
var inst_27769__$1 = inst_27779;
var state_27792__$1 = (function (){var statearr_27808 = state_27792;
(statearr_27808[(7)] = inst_27769__$1);

return statearr_27808;
})();
var statearr_27809_27834 = state_27792__$1;
(statearr_27809_27834[(2)] = null);

(statearr_27809_27834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__22859__auto__))
;
return ((function (switch__22838__auto__,c__22859__auto__){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_27813 = [null,null,null,null,null,null,null,null];
(statearr_27813[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_27813[(1)] = (1));

return statearr_27813;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_27792){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_27792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e27814){if((e27814 instanceof Object)){
var ex__22842__auto__ = e27814;
var statearr_27815_27835 = state_27792;
(statearr_27815_27835[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27836 = state_27792;
state_27792 = G__27836;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_27792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_27792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__))
})();
var state__22861__auto__ = (function (){var statearr_27816 = f__22860__auto__.call(null);
(statearr_27816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_27816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__))
);

return c__22859__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19081__auto__ = (((_ == null))?null:_);
var m__19082__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,_);
} else {
var m__19082__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19082__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,ch);
} else {
var m__19082__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m);
} else {
var m__19082__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28058 = (function (mult,ch,cs,meta28059){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28059 = meta28059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28060,meta28059__$1){
var self__ = this;
var _28060__$1 = this;
return (new cljs.core.async.t_cljs$core$async28058(self__.mult,self__.ch,self__.cs,meta28059__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28060){
var self__ = this;
var _28060__$1 = this;
return self__.meta28059;
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28059","meta28059",1508091418,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28058";

cljs.core.async.t_cljs$core$async28058.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28058");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28058 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28058(mult__$1,ch__$1,cs__$1,meta28059){
return (new cljs.core.async.t_cljs$core$async28058(mult__$1,ch__$1,cs__$1,meta28059));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28058(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22859__auto___28279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___28279,cs,m,dchan,dctr,done){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___28279,cs,m,dchan,dctr,done){
return (function (state_28191){
var state_val_28192 = (state_28191[(1)]);
if((state_val_28192 === (7))){
var inst_28187 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28193_28280 = state_28191__$1;
(statearr_28193_28280[(2)] = inst_28187);

(statearr_28193_28280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (20))){
var inst_28092 = (state_28191[(7)]);
var inst_28102 = cljs.core.first.call(null,inst_28092);
var inst_28103 = cljs.core.nth.call(null,inst_28102,(0),null);
var inst_28104 = cljs.core.nth.call(null,inst_28102,(1),null);
var state_28191__$1 = (function (){var statearr_28194 = state_28191;
(statearr_28194[(8)] = inst_28103);

return statearr_28194;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28195_28281 = state_28191__$1;
(statearr_28195_28281[(1)] = (22));

} else {
var statearr_28196_28282 = state_28191__$1;
(statearr_28196_28282[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (27))){
var inst_28134 = (state_28191[(9)]);
var inst_28139 = (state_28191[(10)]);
var inst_28132 = (state_28191[(11)]);
var inst_28063 = (state_28191[(12)]);
var inst_28139__$1 = cljs.core._nth.call(null,inst_28132,inst_28134);
var inst_28140 = cljs.core.async.put_BANG_.call(null,inst_28139__$1,inst_28063,done);
var state_28191__$1 = (function (){var statearr_28197 = state_28191;
(statearr_28197[(10)] = inst_28139__$1);

return statearr_28197;
})();
if(cljs.core.truth_(inst_28140)){
var statearr_28198_28283 = state_28191__$1;
(statearr_28198_28283[(1)] = (30));

} else {
var statearr_28199_28284 = state_28191__$1;
(statearr_28199_28284[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (1))){
var state_28191__$1 = state_28191;
var statearr_28200_28285 = state_28191__$1;
(statearr_28200_28285[(2)] = null);

(statearr_28200_28285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (24))){
var inst_28092 = (state_28191[(7)]);
var inst_28109 = (state_28191[(2)]);
var inst_28110 = cljs.core.next.call(null,inst_28092);
var inst_28072 = inst_28110;
var inst_28073 = null;
var inst_28074 = (0);
var inst_28075 = (0);
var state_28191__$1 = (function (){var statearr_28201 = state_28191;
(statearr_28201[(13)] = inst_28074);

(statearr_28201[(14)] = inst_28073);

(statearr_28201[(15)] = inst_28075);

(statearr_28201[(16)] = inst_28109);

(statearr_28201[(17)] = inst_28072);

return statearr_28201;
})();
var statearr_28202_28286 = state_28191__$1;
(statearr_28202_28286[(2)] = null);

(statearr_28202_28286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (39))){
var state_28191__$1 = state_28191;
var statearr_28206_28287 = state_28191__$1;
(statearr_28206_28287[(2)] = null);

(statearr_28206_28287[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (4))){
var inst_28063 = (state_28191[(12)]);
var inst_28063__$1 = (state_28191[(2)]);
var inst_28064 = (inst_28063__$1 == null);
var state_28191__$1 = (function (){var statearr_28207 = state_28191;
(statearr_28207[(12)] = inst_28063__$1);

return statearr_28207;
})();
if(cljs.core.truth_(inst_28064)){
var statearr_28208_28288 = state_28191__$1;
(statearr_28208_28288[(1)] = (5));

} else {
var statearr_28209_28289 = state_28191__$1;
(statearr_28209_28289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (15))){
var inst_28074 = (state_28191[(13)]);
var inst_28073 = (state_28191[(14)]);
var inst_28075 = (state_28191[(15)]);
var inst_28072 = (state_28191[(17)]);
var inst_28088 = (state_28191[(2)]);
var inst_28089 = (inst_28075 + (1));
var tmp28203 = inst_28074;
var tmp28204 = inst_28073;
var tmp28205 = inst_28072;
var inst_28072__$1 = tmp28205;
var inst_28073__$1 = tmp28204;
var inst_28074__$1 = tmp28203;
var inst_28075__$1 = inst_28089;
var state_28191__$1 = (function (){var statearr_28210 = state_28191;
(statearr_28210[(18)] = inst_28088);

(statearr_28210[(13)] = inst_28074__$1);

(statearr_28210[(14)] = inst_28073__$1);

(statearr_28210[(15)] = inst_28075__$1);

(statearr_28210[(17)] = inst_28072__$1);

return statearr_28210;
})();
var statearr_28211_28290 = state_28191__$1;
(statearr_28211_28290[(2)] = null);

(statearr_28211_28290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (21))){
var inst_28113 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28215_28291 = state_28191__$1;
(statearr_28215_28291[(2)] = inst_28113);

(statearr_28215_28291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (31))){
var inst_28139 = (state_28191[(10)]);
var inst_28143 = done.call(null,null);
var inst_28144 = cljs.core.async.untap_STAR_.call(null,m,inst_28139);
var state_28191__$1 = (function (){var statearr_28216 = state_28191;
(statearr_28216[(19)] = inst_28143);

return statearr_28216;
})();
var statearr_28217_28292 = state_28191__$1;
(statearr_28217_28292[(2)] = inst_28144);

(statearr_28217_28292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (32))){
var inst_28134 = (state_28191[(9)]);
var inst_28132 = (state_28191[(11)]);
var inst_28131 = (state_28191[(20)]);
var inst_28133 = (state_28191[(21)]);
var inst_28146 = (state_28191[(2)]);
var inst_28147 = (inst_28134 + (1));
var tmp28212 = inst_28132;
var tmp28213 = inst_28131;
var tmp28214 = inst_28133;
var inst_28131__$1 = tmp28213;
var inst_28132__$1 = tmp28212;
var inst_28133__$1 = tmp28214;
var inst_28134__$1 = inst_28147;
var state_28191__$1 = (function (){var statearr_28218 = state_28191;
(statearr_28218[(9)] = inst_28134__$1);

(statearr_28218[(11)] = inst_28132__$1);

(statearr_28218[(20)] = inst_28131__$1);

(statearr_28218[(22)] = inst_28146);

(statearr_28218[(21)] = inst_28133__$1);

return statearr_28218;
})();
var statearr_28219_28293 = state_28191__$1;
(statearr_28219_28293[(2)] = null);

(statearr_28219_28293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (40))){
var inst_28159 = (state_28191[(23)]);
var inst_28163 = done.call(null,null);
var inst_28164 = cljs.core.async.untap_STAR_.call(null,m,inst_28159);
var state_28191__$1 = (function (){var statearr_28220 = state_28191;
(statearr_28220[(24)] = inst_28163);

return statearr_28220;
})();
var statearr_28221_28294 = state_28191__$1;
(statearr_28221_28294[(2)] = inst_28164);

(statearr_28221_28294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (33))){
var inst_28150 = (state_28191[(25)]);
var inst_28152 = cljs.core.chunked_seq_QMARK_.call(null,inst_28150);
var state_28191__$1 = state_28191;
if(inst_28152){
var statearr_28222_28295 = state_28191__$1;
(statearr_28222_28295[(1)] = (36));

} else {
var statearr_28223_28296 = state_28191__$1;
(statearr_28223_28296[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (13))){
var inst_28082 = (state_28191[(26)]);
var inst_28085 = cljs.core.async.close_BANG_.call(null,inst_28082);
var state_28191__$1 = state_28191;
var statearr_28224_28297 = state_28191__$1;
(statearr_28224_28297[(2)] = inst_28085);

(statearr_28224_28297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (22))){
var inst_28103 = (state_28191[(8)]);
var inst_28106 = cljs.core.async.close_BANG_.call(null,inst_28103);
var state_28191__$1 = state_28191;
var statearr_28225_28298 = state_28191__$1;
(statearr_28225_28298[(2)] = inst_28106);

(statearr_28225_28298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (36))){
var inst_28150 = (state_28191[(25)]);
var inst_28154 = cljs.core.chunk_first.call(null,inst_28150);
var inst_28155 = cljs.core.chunk_rest.call(null,inst_28150);
var inst_28156 = cljs.core.count.call(null,inst_28154);
var inst_28131 = inst_28155;
var inst_28132 = inst_28154;
var inst_28133 = inst_28156;
var inst_28134 = (0);
var state_28191__$1 = (function (){var statearr_28226 = state_28191;
(statearr_28226[(9)] = inst_28134);

(statearr_28226[(11)] = inst_28132);

(statearr_28226[(20)] = inst_28131);

(statearr_28226[(21)] = inst_28133);

return statearr_28226;
})();
var statearr_28227_28299 = state_28191__$1;
(statearr_28227_28299[(2)] = null);

(statearr_28227_28299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (41))){
var inst_28150 = (state_28191[(25)]);
var inst_28166 = (state_28191[(2)]);
var inst_28167 = cljs.core.next.call(null,inst_28150);
var inst_28131 = inst_28167;
var inst_28132 = null;
var inst_28133 = (0);
var inst_28134 = (0);
var state_28191__$1 = (function (){var statearr_28228 = state_28191;
(statearr_28228[(27)] = inst_28166);

(statearr_28228[(9)] = inst_28134);

(statearr_28228[(11)] = inst_28132);

(statearr_28228[(20)] = inst_28131);

(statearr_28228[(21)] = inst_28133);

return statearr_28228;
})();
var statearr_28229_28300 = state_28191__$1;
(statearr_28229_28300[(2)] = null);

(statearr_28229_28300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (43))){
var state_28191__$1 = state_28191;
var statearr_28230_28301 = state_28191__$1;
(statearr_28230_28301[(2)] = null);

(statearr_28230_28301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (29))){
var inst_28175 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28231_28302 = state_28191__$1;
(statearr_28231_28302[(2)] = inst_28175);

(statearr_28231_28302[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (44))){
var inst_28184 = (state_28191[(2)]);
var state_28191__$1 = (function (){var statearr_28232 = state_28191;
(statearr_28232[(28)] = inst_28184);

return statearr_28232;
})();
var statearr_28233_28303 = state_28191__$1;
(statearr_28233_28303[(2)] = null);

(statearr_28233_28303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (6))){
var inst_28123 = (state_28191[(29)]);
var inst_28122 = cljs.core.deref.call(null,cs);
var inst_28123__$1 = cljs.core.keys.call(null,inst_28122);
var inst_28124 = cljs.core.count.call(null,inst_28123__$1);
var inst_28125 = cljs.core.reset_BANG_.call(null,dctr,inst_28124);
var inst_28130 = cljs.core.seq.call(null,inst_28123__$1);
var inst_28131 = inst_28130;
var inst_28132 = null;
var inst_28133 = (0);
var inst_28134 = (0);
var state_28191__$1 = (function (){var statearr_28234 = state_28191;
(statearr_28234[(29)] = inst_28123__$1);

(statearr_28234[(9)] = inst_28134);

(statearr_28234[(11)] = inst_28132);

(statearr_28234[(20)] = inst_28131);

(statearr_28234[(21)] = inst_28133);

(statearr_28234[(30)] = inst_28125);

return statearr_28234;
})();
var statearr_28235_28304 = state_28191__$1;
(statearr_28235_28304[(2)] = null);

(statearr_28235_28304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (28))){
var inst_28150 = (state_28191[(25)]);
var inst_28131 = (state_28191[(20)]);
var inst_28150__$1 = cljs.core.seq.call(null,inst_28131);
var state_28191__$1 = (function (){var statearr_28236 = state_28191;
(statearr_28236[(25)] = inst_28150__$1);

return statearr_28236;
})();
if(inst_28150__$1){
var statearr_28237_28305 = state_28191__$1;
(statearr_28237_28305[(1)] = (33));

} else {
var statearr_28238_28306 = state_28191__$1;
(statearr_28238_28306[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (25))){
var inst_28134 = (state_28191[(9)]);
var inst_28133 = (state_28191[(21)]);
var inst_28136 = (inst_28134 < inst_28133);
var inst_28137 = inst_28136;
var state_28191__$1 = state_28191;
if(cljs.core.truth_(inst_28137)){
var statearr_28239_28307 = state_28191__$1;
(statearr_28239_28307[(1)] = (27));

} else {
var statearr_28240_28308 = state_28191__$1;
(statearr_28240_28308[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (34))){
var state_28191__$1 = state_28191;
var statearr_28241_28309 = state_28191__$1;
(statearr_28241_28309[(2)] = null);

(statearr_28241_28309[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (17))){
var state_28191__$1 = state_28191;
var statearr_28242_28310 = state_28191__$1;
(statearr_28242_28310[(2)] = null);

(statearr_28242_28310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (3))){
var inst_28189 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28191__$1,inst_28189);
} else {
if((state_val_28192 === (12))){
var inst_28118 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28243_28311 = state_28191__$1;
(statearr_28243_28311[(2)] = inst_28118);

(statearr_28243_28311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (2))){
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28191__$1,(4),ch);
} else {
if((state_val_28192 === (23))){
var state_28191__$1 = state_28191;
var statearr_28244_28312 = state_28191__$1;
(statearr_28244_28312[(2)] = null);

(statearr_28244_28312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (35))){
var inst_28173 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28245_28313 = state_28191__$1;
(statearr_28245_28313[(2)] = inst_28173);

(statearr_28245_28313[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (19))){
var inst_28092 = (state_28191[(7)]);
var inst_28096 = cljs.core.chunk_first.call(null,inst_28092);
var inst_28097 = cljs.core.chunk_rest.call(null,inst_28092);
var inst_28098 = cljs.core.count.call(null,inst_28096);
var inst_28072 = inst_28097;
var inst_28073 = inst_28096;
var inst_28074 = inst_28098;
var inst_28075 = (0);
var state_28191__$1 = (function (){var statearr_28246 = state_28191;
(statearr_28246[(13)] = inst_28074);

(statearr_28246[(14)] = inst_28073);

(statearr_28246[(15)] = inst_28075);

(statearr_28246[(17)] = inst_28072);

return statearr_28246;
})();
var statearr_28247_28314 = state_28191__$1;
(statearr_28247_28314[(2)] = null);

(statearr_28247_28314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (11))){
var inst_28092 = (state_28191[(7)]);
var inst_28072 = (state_28191[(17)]);
var inst_28092__$1 = cljs.core.seq.call(null,inst_28072);
var state_28191__$1 = (function (){var statearr_28248 = state_28191;
(statearr_28248[(7)] = inst_28092__$1);

return statearr_28248;
})();
if(inst_28092__$1){
var statearr_28249_28315 = state_28191__$1;
(statearr_28249_28315[(1)] = (16));

} else {
var statearr_28250_28316 = state_28191__$1;
(statearr_28250_28316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (9))){
var inst_28120 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28251_28317 = state_28191__$1;
(statearr_28251_28317[(2)] = inst_28120);

(statearr_28251_28317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (5))){
var inst_28070 = cljs.core.deref.call(null,cs);
var inst_28071 = cljs.core.seq.call(null,inst_28070);
var inst_28072 = inst_28071;
var inst_28073 = null;
var inst_28074 = (0);
var inst_28075 = (0);
var state_28191__$1 = (function (){var statearr_28252 = state_28191;
(statearr_28252[(13)] = inst_28074);

(statearr_28252[(14)] = inst_28073);

(statearr_28252[(15)] = inst_28075);

(statearr_28252[(17)] = inst_28072);

return statearr_28252;
})();
var statearr_28253_28318 = state_28191__$1;
(statearr_28253_28318[(2)] = null);

(statearr_28253_28318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (14))){
var state_28191__$1 = state_28191;
var statearr_28254_28319 = state_28191__$1;
(statearr_28254_28319[(2)] = null);

(statearr_28254_28319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (45))){
var inst_28181 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28255_28320 = state_28191__$1;
(statearr_28255_28320[(2)] = inst_28181);

(statearr_28255_28320[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (26))){
var inst_28123 = (state_28191[(29)]);
var inst_28177 = (state_28191[(2)]);
var inst_28178 = cljs.core.seq.call(null,inst_28123);
var state_28191__$1 = (function (){var statearr_28256 = state_28191;
(statearr_28256[(31)] = inst_28177);

return statearr_28256;
})();
if(inst_28178){
var statearr_28257_28321 = state_28191__$1;
(statearr_28257_28321[(1)] = (42));

} else {
var statearr_28258_28322 = state_28191__$1;
(statearr_28258_28322[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (16))){
var inst_28092 = (state_28191[(7)]);
var inst_28094 = cljs.core.chunked_seq_QMARK_.call(null,inst_28092);
var state_28191__$1 = state_28191;
if(inst_28094){
var statearr_28259_28323 = state_28191__$1;
(statearr_28259_28323[(1)] = (19));

} else {
var statearr_28260_28324 = state_28191__$1;
(statearr_28260_28324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (38))){
var inst_28170 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28261_28325 = state_28191__$1;
(statearr_28261_28325[(2)] = inst_28170);

(statearr_28261_28325[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (30))){
var state_28191__$1 = state_28191;
var statearr_28262_28326 = state_28191__$1;
(statearr_28262_28326[(2)] = null);

(statearr_28262_28326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (10))){
var inst_28073 = (state_28191[(14)]);
var inst_28075 = (state_28191[(15)]);
var inst_28081 = cljs.core._nth.call(null,inst_28073,inst_28075);
var inst_28082 = cljs.core.nth.call(null,inst_28081,(0),null);
var inst_28083 = cljs.core.nth.call(null,inst_28081,(1),null);
var state_28191__$1 = (function (){var statearr_28263 = state_28191;
(statearr_28263[(26)] = inst_28082);

return statearr_28263;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28264_28327 = state_28191__$1;
(statearr_28264_28327[(1)] = (13));

} else {
var statearr_28265_28328 = state_28191__$1;
(statearr_28265_28328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (18))){
var inst_28116 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
var statearr_28266_28329 = state_28191__$1;
(statearr_28266_28329[(2)] = inst_28116);

(statearr_28266_28329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (42))){
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28191__$1,(45),dchan);
} else {
if((state_val_28192 === (37))){
var inst_28150 = (state_28191[(25)]);
var inst_28159 = (state_28191[(23)]);
var inst_28063 = (state_28191[(12)]);
var inst_28159__$1 = cljs.core.first.call(null,inst_28150);
var inst_28160 = cljs.core.async.put_BANG_.call(null,inst_28159__$1,inst_28063,done);
var state_28191__$1 = (function (){var statearr_28267 = state_28191;
(statearr_28267[(23)] = inst_28159__$1);

return statearr_28267;
})();
if(cljs.core.truth_(inst_28160)){
var statearr_28268_28330 = state_28191__$1;
(statearr_28268_28330[(1)] = (39));

} else {
var statearr_28269_28331 = state_28191__$1;
(statearr_28269_28331[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (8))){
var inst_28074 = (state_28191[(13)]);
var inst_28075 = (state_28191[(15)]);
var inst_28077 = (inst_28075 < inst_28074);
var inst_28078 = inst_28077;
var state_28191__$1 = state_28191;
if(cljs.core.truth_(inst_28078)){
var statearr_28270_28332 = state_28191__$1;
(statearr_28270_28332[(1)] = (10));

} else {
var statearr_28271_28333 = state_28191__$1;
(statearr_28271_28333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__22859__auto___28279,cs,m,dchan,dctr,done))
;
return ((function (switch__22838__auto__,c__22859__auto___28279,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22839__auto__ = null;
var cljs$core$async$mult_$_state_machine__22839__auto____0 = (function (){
var statearr_28275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28275[(0)] = cljs$core$async$mult_$_state_machine__22839__auto__);

(statearr_28275[(1)] = (1));

return statearr_28275;
});
var cljs$core$async$mult_$_state_machine__22839__auto____1 = (function (state_28191){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_28191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e28276){if((e28276 instanceof Object)){
var ex__22842__auto__ = e28276;
var statearr_28277_28334 = state_28191;
(statearr_28277_28334[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28335 = state_28191;
state_28191 = G__28335;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22839__auto__ = function(state_28191){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22839__auto____1.call(this,state_28191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22839__auto____0;
cljs$core$async$mult_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22839__auto____1;
return cljs$core$async$mult_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___28279,cs,m,dchan,dctr,done))
})();
var state__22861__auto__ = (function (){var statearr_28278 = f__22860__auto__.call(null);
(statearr_28278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___28279);

return statearr_28278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___28279,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28336 = [];
var len__19487__auto___28339 = arguments.length;
var i__19488__auto___28340 = (0);
while(true){
if((i__19488__auto___28340 < len__19487__auto___28339)){
args28336.push((arguments[i__19488__auto___28340]));

var G__28341 = (i__19488__auto___28340 + (1));
i__19488__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28338 = args28336.length;
switch (G__28338) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28336.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,ch);
} else {
var m__19082__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,ch);
} else {
var m__19082__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m);
} else {
var m__19082__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,state_map);
} else {
var m__19082__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19081__auto__ = (((m == null))?null:m);
var m__19082__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,m,mode);
} else {
var m__19082__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___28353 = arguments.length;
var i__19488__auto___28354 = (0);
while(true){
if((i__19488__auto___28354 < len__19487__auto___28353)){
args__19494__auto__.push((arguments[i__19488__auto___28354]));

var G__28355 = (i__19488__auto___28354 + (1));
i__19488__auto___28354 = G__28355;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28347){
var map__28348 = p__28347;
var map__28348__$1 = ((((!((map__28348 == null)))?((((map__28348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var opts = map__28348__$1;
var statearr_28350_28356 = state;
(statearr_28350_28356[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28348,map__28348__$1,opts){
return (function (val){
var statearr_28351_28357 = state;
(statearr_28351_28357[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28348,map__28348__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28352_28358 = state;
(statearr_28352_28358[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28343){
var G__28344 = cljs.core.first.call(null,seq28343);
var seq28343__$1 = cljs.core.next.call(null,seq28343);
var G__28345 = cljs.core.first.call(null,seq28343__$1);
var seq28343__$2 = cljs.core.next.call(null,seq28343__$1);
var G__28346 = cljs.core.first.call(null,seq28343__$2);
var seq28343__$3 = cljs.core.next.call(null,seq28343__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28344,G__28345,G__28346,seq28343__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28522 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28523){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28523 = meta28523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28524,meta28523__$1){
var self__ = this;
var _28524__$1 = this;
return (new cljs.core.async.t_cljs$core$async28522(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28524){
var self__ = this;
var _28524__$1 = this;
return self__.meta28523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28523","meta28523",-230930288,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28522";

cljs.core.async.t_cljs$core$async28522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28523){
return (new cljs.core.async.t_cljs$core$async28522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28522(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22859__auto___28685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28622){
var state_val_28623 = (state_28622[(1)]);
if((state_val_28623 === (7))){
var inst_28540 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28624_28686 = state_28622__$1;
(statearr_28624_28686[(2)] = inst_28540);

(statearr_28624_28686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (20))){
var inst_28552 = (state_28622[(7)]);
var state_28622__$1 = state_28622;
var statearr_28625_28687 = state_28622__$1;
(statearr_28625_28687[(2)] = inst_28552);

(statearr_28625_28687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (27))){
var state_28622__$1 = state_28622;
var statearr_28626_28688 = state_28622__$1;
(statearr_28626_28688[(2)] = null);

(statearr_28626_28688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (1))){
var inst_28528 = (state_28622[(8)]);
var inst_28528__$1 = calc_state.call(null);
var inst_28530 = (inst_28528__$1 == null);
var inst_28531 = cljs.core.not.call(null,inst_28530);
var state_28622__$1 = (function (){var statearr_28627 = state_28622;
(statearr_28627[(8)] = inst_28528__$1);

return statearr_28627;
})();
if(inst_28531){
var statearr_28628_28689 = state_28622__$1;
(statearr_28628_28689[(1)] = (2));

} else {
var statearr_28629_28690 = state_28622__$1;
(statearr_28629_28690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (24))){
var inst_28582 = (state_28622[(9)]);
var inst_28575 = (state_28622[(10)]);
var inst_28596 = (state_28622[(11)]);
var inst_28596__$1 = inst_28575.call(null,inst_28582);
var state_28622__$1 = (function (){var statearr_28630 = state_28622;
(statearr_28630[(11)] = inst_28596__$1);

return statearr_28630;
})();
if(cljs.core.truth_(inst_28596__$1)){
var statearr_28631_28691 = state_28622__$1;
(statearr_28631_28691[(1)] = (29));

} else {
var statearr_28632_28692 = state_28622__$1;
(statearr_28632_28692[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (4))){
var inst_28543 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28543)){
var statearr_28633_28693 = state_28622__$1;
(statearr_28633_28693[(1)] = (8));

} else {
var statearr_28634_28694 = state_28622__$1;
(statearr_28634_28694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (15))){
var inst_28569 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28569)){
var statearr_28635_28695 = state_28622__$1;
(statearr_28635_28695[(1)] = (19));

} else {
var statearr_28636_28696 = state_28622__$1;
(statearr_28636_28696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (21))){
var inst_28574 = (state_28622[(12)]);
var inst_28574__$1 = (state_28622[(2)]);
var inst_28575 = cljs.core.get.call(null,inst_28574__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28576 = cljs.core.get.call(null,inst_28574__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28577 = cljs.core.get.call(null,inst_28574__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28622__$1 = (function (){var statearr_28637 = state_28622;
(statearr_28637[(13)] = inst_28576);

(statearr_28637[(12)] = inst_28574__$1);

(statearr_28637[(10)] = inst_28575);

return statearr_28637;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28622__$1,(22),inst_28577);
} else {
if((state_val_28623 === (31))){
var inst_28604 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28604)){
var statearr_28638_28697 = state_28622__$1;
(statearr_28638_28697[(1)] = (32));

} else {
var statearr_28639_28698 = state_28622__$1;
(statearr_28639_28698[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (32))){
var inst_28581 = (state_28622[(14)]);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28622__$1,(35),out,inst_28581);
} else {
if((state_val_28623 === (33))){
var inst_28574 = (state_28622[(12)]);
var inst_28552 = inst_28574;
var state_28622__$1 = (function (){var statearr_28640 = state_28622;
(statearr_28640[(7)] = inst_28552);

return statearr_28640;
})();
var statearr_28641_28699 = state_28622__$1;
(statearr_28641_28699[(2)] = null);

(statearr_28641_28699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (13))){
var inst_28552 = (state_28622[(7)]);
var inst_28559 = inst_28552.cljs$lang$protocol_mask$partition0$;
var inst_28560 = (inst_28559 & (64));
var inst_28561 = inst_28552.cljs$core$ISeq$;
var inst_28562 = (inst_28560) || (inst_28561);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28562)){
var statearr_28642_28700 = state_28622__$1;
(statearr_28642_28700[(1)] = (16));

} else {
var statearr_28643_28701 = state_28622__$1;
(statearr_28643_28701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (22))){
var inst_28582 = (state_28622[(9)]);
var inst_28581 = (state_28622[(14)]);
var inst_28580 = (state_28622[(2)]);
var inst_28581__$1 = cljs.core.nth.call(null,inst_28580,(0),null);
var inst_28582__$1 = cljs.core.nth.call(null,inst_28580,(1),null);
var inst_28583 = (inst_28581__$1 == null);
var inst_28584 = cljs.core._EQ_.call(null,inst_28582__$1,change);
var inst_28585 = (inst_28583) || (inst_28584);
var state_28622__$1 = (function (){var statearr_28644 = state_28622;
(statearr_28644[(9)] = inst_28582__$1);

(statearr_28644[(14)] = inst_28581__$1);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28585)){
var statearr_28645_28702 = state_28622__$1;
(statearr_28645_28702[(1)] = (23));

} else {
var statearr_28646_28703 = state_28622__$1;
(statearr_28646_28703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (36))){
var inst_28574 = (state_28622[(12)]);
var inst_28552 = inst_28574;
var state_28622__$1 = (function (){var statearr_28647 = state_28622;
(statearr_28647[(7)] = inst_28552);

return statearr_28647;
})();
var statearr_28648_28704 = state_28622__$1;
(statearr_28648_28704[(2)] = null);

(statearr_28648_28704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (29))){
var inst_28596 = (state_28622[(11)]);
var state_28622__$1 = state_28622;
var statearr_28649_28705 = state_28622__$1;
(statearr_28649_28705[(2)] = inst_28596);

(statearr_28649_28705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (6))){
var state_28622__$1 = state_28622;
var statearr_28650_28706 = state_28622__$1;
(statearr_28650_28706[(2)] = false);

(statearr_28650_28706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (28))){
var inst_28592 = (state_28622[(2)]);
var inst_28593 = calc_state.call(null);
var inst_28552 = inst_28593;
var state_28622__$1 = (function (){var statearr_28651 = state_28622;
(statearr_28651[(7)] = inst_28552);

(statearr_28651[(15)] = inst_28592);

return statearr_28651;
})();
var statearr_28652_28707 = state_28622__$1;
(statearr_28652_28707[(2)] = null);

(statearr_28652_28707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (25))){
var inst_28618 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28653_28708 = state_28622__$1;
(statearr_28653_28708[(2)] = inst_28618);

(statearr_28653_28708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (34))){
var inst_28616 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28654_28709 = state_28622__$1;
(statearr_28654_28709[(2)] = inst_28616);

(statearr_28654_28709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (17))){
var state_28622__$1 = state_28622;
var statearr_28655_28710 = state_28622__$1;
(statearr_28655_28710[(2)] = false);

(statearr_28655_28710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (3))){
var state_28622__$1 = state_28622;
var statearr_28656_28711 = state_28622__$1;
(statearr_28656_28711[(2)] = false);

(statearr_28656_28711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (12))){
var inst_28620 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28622__$1,inst_28620);
} else {
if((state_val_28623 === (2))){
var inst_28528 = (state_28622[(8)]);
var inst_28533 = inst_28528.cljs$lang$protocol_mask$partition0$;
var inst_28534 = (inst_28533 & (64));
var inst_28535 = inst_28528.cljs$core$ISeq$;
var inst_28536 = (inst_28534) || (inst_28535);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28536)){
var statearr_28657_28712 = state_28622__$1;
(statearr_28657_28712[(1)] = (5));

} else {
var statearr_28658_28713 = state_28622__$1;
(statearr_28658_28713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (23))){
var inst_28581 = (state_28622[(14)]);
var inst_28587 = (inst_28581 == null);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28587)){
var statearr_28659_28714 = state_28622__$1;
(statearr_28659_28714[(1)] = (26));

} else {
var statearr_28660_28715 = state_28622__$1;
(statearr_28660_28715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (35))){
var inst_28607 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28607)){
var statearr_28661_28716 = state_28622__$1;
(statearr_28661_28716[(1)] = (36));

} else {
var statearr_28662_28717 = state_28622__$1;
(statearr_28662_28717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (19))){
var inst_28552 = (state_28622[(7)]);
var inst_28571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28552);
var state_28622__$1 = state_28622;
var statearr_28663_28718 = state_28622__$1;
(statearr_28663_28718[(2)] = inst_28571);

(statearr_28663_28718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (11))){
var inst_28552 = (state_28622[(7)]);
var inst_28556 = (inst_28552 == null);
var inst_28557 = cljs.core.not.call(null,inst_28556);
var state_28622__$1 = state_28622;
if(inst_28557){
var statearr_28664_28719 = state_28622__$1;
(statearr_28664_28719[(1)] = (13));

} else {
var statearr_28665_28720 = state_28622__$1;
(statearr_28665_28720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (9))){
var inst_28528 = (state_28622[(8)]);
var state_28622__$1 = state_28622;
var statearr_28666_28721 = state_28622__$1;
(statearr_28666_28721[(2)] = inst_28528);

(statearr_28666_28721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (5))){
var state_28622__$1 = state_28622;
var statearr_28667_28722 = state_28622__$1;
(statearr_28667_28722[(2)] = true);

(statearr_28667_28722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (14))){
var state_28622__$1 = state_28622;
var statearr_28668_28723 = state_28622__$1;
(statearr_28668_28723[(2)] = false);

(statearr_28668_28723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (26))){
var inst_28582 = (state_28622[(9)]);
var inst_28589 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28582);
var state_28622__$1 = state_28622;
var statearr_28669_28724 = state_28622__$1;
(statearr_28669_28724[(2)] = inst_28589);

(statearr_28669_28724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (16))){
var state_28622__$1 = state_28622;
var statearr_28670_28725 = state_28622__$1;
(statearr_28670_28725[(2)] = true);

(statearr_28670_28725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (38))){
var inst_28612 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28671_28726 = state_28622__$1;
(statearr_28671_28726[(2)] = inst_28612);

(statearr_28671_28726[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (30))){
var inst_28576 = (state_28622[(13)]);
var inst_28582 = (state_28622[(9)]);
var inst_28575 = (state_28622[(10)]);
var inst_28599 = cljs.core.empty_QMARK_.call(null,inst_28575);
var inst_28600 = inst_28576.call(null,inst_28582);
var inst_28601 = cljs.core.not.call(null,inst_28600);
var inst_28602 = (inst_28599) && (inst_28601);
var state_28622__$1 = state_28622;
var statearr_28672_28727 = state_28622__$1;
(statearr_28672_28727[(2)] = inst_28602);

(statearr_28672_28727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (10))){
var inst_28528 = (state_28622[(8)]);
var inst_28548 = (state_28622[(2)]);
var inst_28549 = cljs.core.get.call(null,inst_28548,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28550 = cljs.core.get.call(null,inst_28548,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28551 = cljs.core.get.call(null,inst_28548,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28552 = inst_28528;
var state_28622__$1 = (function (){var statearr_28673 = state_28622;
(statearr_28673[(7)] = inst_28552);

(statearr_28673[(16)] = inst_28550);

(statearr_28673[(17)] = inst_28549);

(statearr_28673[(18)] = inst_28551);

return statearr_28673;
})();
var statearr_28674_28728 = state_28622__$1;
(statearr_28674_28728[(2)] = null);

(statearr_28674_28728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (18))){
var inst_28566 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28675_28729 = state_28622__$1;
(statearr_28675_28729[(2)] = inst_28566);

(statearr_28675_28729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (37))){
var state_28622__$1 = state_28622;
var statearr_28676_28730 = state_28622__$1;
(statearr_28676_28730[(2)] = null);

(statearr_28676_28730[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (8))){
var inst_28528 = (state_28622[(8)]);
var inst_28545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28528);
var state_28622__$1 = state_28622;
var statearr_28677_28731 = state_28622__$1;
(statearr_28677_28731[(2)] = inst_28545);

(statearr_28677_28731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22838__auto__,c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22839__auto__ = null;
var cljs$core$async$mix_$_state_machine__22839__auto____0 = (function (){
var statearr_28681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28681[(0)] = cljs$core$async$mix_$_state_machine__22839__auto__);

(statearr_28681[(1)] = (1));

return statearr_28681;
});
var cljs$core$async$mix_$_state_machine__22839__auto____1 = (function (state_28622){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_28622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e28682){if((e28682 instanceof Object)){
var ex__22842__auto__ = e28682;
var statearr_28683_28732 = state_28622;
(statearr_28683_28732[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28733 = state_28622;
state_28622 = G__28733;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22839__auto__ = function(state_28622){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22839__auto____1.call(this,state_28622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22839__auto____0;
cljs$core$async$mix_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22839__auto____1;
return cljs$core$async$mix_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22861__auto__ = (function (){var statearr_28684 = f__22860__auto__.call(null);
(statearr_28684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___28685);

return statearr_28684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___28685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19081__auto__ = (((p == null))?null:p);
var m__19082__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19082__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19081__auto__ = (((p == null))?null:p);
var m__19082__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,p,v,ch);
} else {
var m__19082__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28734 = [];
var len__19487__auto___28737 = arguments.length;
var i__19488__auto___28738 = (0);
while(true){
if((i__19488__auto___28738 < len__19487__auto___28737)){
args28734.push((arguments[i__19488__auto___28738]));

var G__28739 = (i__19488__auto___28738 + (1));
i__19488__auto___28738 = G__28739;
continue;
} else {
}
break;
}

var G__28736 = args28734.length;
switch (G__28736) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28734.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19081__auto__ = (((p == null))?null:p);
var m__19082__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,p);
} else {
var m__19082__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19081__auto__ = (((p == null))?null:p);
var m__19082__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19081__auto__)]);
if(!((m__19082__auto__ == null))){
return m__19082__auto__.call(null,p,v);
} else {
var m__19082__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19082__auto____$1 == null))){
return m__19082__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28742 = [];
var len__19487__auto___28867 = arguments.length;
var i__19488__auto___28868 = (0);
while(true){
if((i__19488__auto___28868 < len__19487__auto___28867)){
args28742.push((arguments[i__19488__auto___28868]));

var G__28869 = (i__19488__auto___28868 + (1));
i__19488__auto___28868 = G__28869;
continue;
} else {
}
break;
}

var G__28744 = args28742.length;
switch (G__28744) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28742.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18418__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18418__auto__,mults){
return (function (p1__28741_SHARP_){
if(cljs.core.truth_(p1__28741_SHARP_.call(null,topic))){
return p1__28741_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28741_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18418__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28746 = meta28746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28747,meta28746__$1){
var self__ = this;
var _28747__$1 = this;
return (new cljs.core.async.t_cljs$core$async28745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28747){
var self__ = this;
var _28747__$1 = this;
return self__.meta28746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28746","meta28746",1206189922,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28745";

cljs.core.async.t_cljs$core$async28745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28745");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28746){
return (new cljs.core.async.t_cljs$core$async28745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22859__auto___28871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___28871,mults,ensure_mult,p){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___28871,mults,ensure_mult,p){
return (function (state_28819){
var state_val_28820 = (state_28819[(1)]);
if((state_val_28820 === (7))){
var inst_28815 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28821_28872 = state_28819__$1;
(statearr_28821_28872[(2)] = inst_28815);

(statearr_28821_28872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (20))){
var state_28819__$1 = state_28819;
var statearr_28822_28873 = state_28819__$1;
(statearr_28822_28873[(2)] = null);

(statearr_28822_28873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (1))){
var state_28819__$1 = state_28819;
var statearr_28823_28874 = state_28819__$1;
(statearr_28823_28874[(2)] = null);

(statearr_28823_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (24))){
var inst_28798 = (state_28819[(7)]);
var inst_28807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28798);
var state_28819__$1 = state_28819;
var statearr_28824_28875 = state_28819__$1;
(statearr_28824_28875[(2)] = inst_28807);

(statearr_28824_28875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (4))){
var inst_28750 = (state_28819[(8)]);
var inst_28750__$1 = (state_28819[(2)]);
var inst_28751 = (inst_28750__$1 == null);
var state_28819__$1 = (function (){var statearr_28825 = state_28819;
(statearr_28825[(8)] = inst_28750__$1);

return statearr_28825;
})();
if(cljs.core.truth_(inst_28751)){
var statearr_28826_28876 = state_28819__$1;
(statearr_28826_28876[(1)] = (5));

} else {
var statearr_28827_28877 = state_28819__$1;
(statearr_28827_28877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (15))){
var inst_28792 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28828_28878 = state_28819__$1;
(statearr_28828_28878[(2)] = inst_28792);

(statearr_28828_28878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (21))){
var inst_28812 = (state_28819[(2)]);
var state_28819__$1 = (function (){var statearr_28829 = state_28819;
(statearr_28829[(9)] = inst_28812);

return statearr_28829;
})();
var statearr_28830_28879 = state_28819__$1;
(statearr_28830_28879[(2)] = null);

(statearr_28830_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (13))){
var inst_28774 = (state_28819[(10)]);
var inst_28776 = cljs.core.chunked_seq_QMARK_.call(null,inst_28774);
var state_28819__$1 = state_28819;
if(inst_28776){
var statearr_28831_28880 = state_28819__$1;
(statearr_28831_28880[(1)] = (16));

} else {
var statearr_28832_28881 = state_28819__$1;
(statearr_28832_28881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (22))){
var inst_28804 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28804)){
var statearr_28833_28882 = state_28819__$1;
(statearr_28833_28882[(1)] = (23));

} else {
var statearr_28834_28883 = state_28819__$1;
(statearr_28834_28883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (6))){
var inst_28800 = (state_28819[(11)]);
var inst_28750 = (state_28819[(8)]);
var inst_28798 = (state_28819[(7)]);
var inst_28798__$1 = topic_fn.call(null,inst_28750);
var inst_28799 = cljs.core.deref.call(null,mults);
var inst_28800__$1 = cljs.core.get.call(null,inst_28799,inst_28798__$1);
var state_28819__$1 = (function (){var statearr_28835 = state_28819;
(statearr_28835[(11)] = inst_28800__$1);

(statearr_28835[(7)] = inst_28798__$1);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28800__$1)){
var statearr_28836_28884 = state_28819__$1;
(statearr_28836_28884[(1)] = (19));

} else {
var statearr_28837_28885 = state_28819__$1;
(statearr_28837_28885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (25))){
var inst_28809 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28838_28886 = state_28819__$1;
(statearr_28838_28886[(2)] = inst_28809);

(statearr_28838_28886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (17))){
var inst_28774 = (state_28819[(10)]);
var inst_28783 = cljs.core.first.call(null,inst_28774);
var inst_28784 = cljs.core.async.muxch_STAR_.call(null,inst_28783);
var inst_28785 = cljs.core.async.close_BANG_.call(null,inst_28784);
var inst_28786 = cljs.core.next.call(null,inst_28774);
var inst_28760 = inst_28786;
var inst_28761 = null;
var inst_28762 = (0);
var inst_28763 = (0);
var state_28819__$1 = (function (){var statearr_28839 = state_28819;
(statearr_28839[(12)] = inst_28762);

(statearr_28839[(13)] = inst_28761);

(statearr_28839[(14)] = inst_28785);

(statearr_28839[(15)] = inst_28760);

(statearr_28839[(16)] = inst_28763);

return statearr_28839;
})();
var statearr_28840_28887 = state_28819__$1;
(statearr_28840_28887[(2)] = null);

(statearr_28840_28887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (3))){
var inst_28817 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28819__$1,inst_28817);
} else {
if((state_val_28820 === (12))){
var inst_28794 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28841_28888 = state_28819__$1;
(statearr_28841_28888[(2)] = inst_28794);

(statearr_28841_28888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (2))){
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28819__$1,(4),ch);
} else {
if((state_val_28820 === (23))){
var state_28819__$1 = state_28819;
var statearr_28842_28889 = state_28819__$1;
(statearr_28842_28889[(2)] = null);

(statearr_28842_28889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (19))){
var inst_28800 = (state_28819[(11)]);
var inst_28750 = (state_28819[(8)]);
var inst_28802 = cljs.core.async.muxch_STAR_.call(null,inst_28800);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28819__$1,(22),inst_28802,inst_28750);
} else {
if((state_val_28820 === (11))){
var inst_28774 = (state_28819[(10)]);
var inst_28760 = (state_28819[(15)]);
var inst_28774__$1 = cljs.core.seq.call(null,inst_28760);
var state_28819__$1 = (function (){var statearr_28843 = state_28819;
(statearr_28843[(10)] = inst_28774__$1);

return statearr_28843;
})();
if(inst_28774__$1){
var statearr_28844_28890 = state_28819__$1;
(statearr_28844_28890[(1)] = (13));

} else {
var statearr_28845_28891 = state_28819__$1;
(statearr_28845_28891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (9))){
var inst_28796 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28846_28892 = state_28819__$1;
(statearr_28846_28892[(2)] = inst_28796);

(statearr_28846_28892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (5))){
var inst_28757 = cljs.core.deref.call(null,mults);
var inst_28758 = cljs.core.vals.call(null,inst_28757);
var inst_28759 = cljs.core.seq.call(null,inst_28758);
var inst_28760 = inst_28759;
var inst_28761 = null;
var inst_28762 = (0);
var inst_28763 = (0);
var state_28819__$1 = (function (){var statearr_28847 = state_28819;
(statearr_28847[(12)] = inst_28762);

(statearr_28847[(13)] = inst_28761);

(statearr_28847[(15)] = inst_28760);

(statearr_28847[(16)] = inst_28763);

return statearr_28847;
})();
var statearr_28848_28893 = state_28819__$1;
(statearr_28848_28893[(2)] = null);

(statearr_28848_28893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (14))){
var state_28819__$1 = state_28819;
var statearr_28852_28894 = state_28819__$1;
(statearr_28852_28894[(2)] = null);

(statearr_28852_28894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (16))){
var inst_28774 = (state_28819[(10)]);
var inst_28778 = cljs.core.chunk_first.call(null,inst_28774);
var inst_28779 = cljs.core.chunk_rest.call(null,inst_28774);
var inst_28780 = cljs.core.count.call(null,inst_28778);
var inst_28760 = inst_28779;
var inst_28761 = inst_28778;
var inst_28762 = inst_28780;
var inst_28763 = (0);
var state_28819__$1 = (function (){var statearr_28853 = state_28819;
(statearr_28853[(12)] = inst_28762);

(statearr_28853[(13)] = inst_28761);

(statearr_28853[(15)] = inst_28760);

(statearr_28853[(16)] = inst_28763);

return statearr_28853;
})();
var statearr_28854_28895 = state_28819__$1;
(statearr_28854_28895[(2)] = null);

(statearr_28854_28895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (10))){
var inst_28762 = (state_28819[(12)]);
var inst_28761 = (state_28819[(13)]);
var inst_28760 = (state_28819[(15)]);
var inst_28763 = (state_28819[(16)]);
var inst_28768 = cljs.core._nth.call(null,inst_28761,inst_28763);
var inst_28769 = cljs.core.async.muxch_STAR_.call(null,inst_28768);
var inst_28770 = cljs.core.async.close_BANG_.call(null,inst_28769);
var inst_28771 = (inst_28763 + (1));
var tmp28849 = inst_28762;
var tmp28850 = inst_28761;
var tmp28851 = inst_28760;
var inst_28760__$1 = tmp28851;
var inst_28761__$1 = tmp28850;
var inst_28762__$1 = tmp28849;
var inst_28763__$1 = inst_28771;
var state_28819__$1 = (function (){var statearr_28855 = state_28819;
(statearr_28855[(12)] = inst_28762__$1);

(statearr_28855[(17)] = inst_28770);

(statearr_28855[(13)] = inst_28761__$1);

(statearr_28855[(15)] = inst_28760__$1);

(statearr_28855[(16)] = inst_28763__$1);

return statearr_28855;
})();
var statearr_28856_28896 = state_28819__$1;
(statearr_28856_28896[(2)] = null);

(statearr_28856_28896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (18))){
var inst_28789 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28857_28897 = state_28819__$1;
(statearr_28857_28897[(2)] = inst_28789);

(statearr_28857_28897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (8))){
var inst_28762 = (state_28819[(12)]);
var inst_28763 = (state_28819[(16)]);
var inst_28765 = (inst_28763 < inst_28762);
var inst_28766 = inst_28765;
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28766)){
var statearr_28858_28898 = state_28819__$1;
(statearr_28858_28898[(1)] = (10));

} else {
var statearr_28859_28899 = state_28819__$1;
(statearr_28859_28899[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__22859__auto___28871,mults,ensure_mult,p))
;
return ((function (switch__22838__auto__,c__22859__auto___28871,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_28819){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_28819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__22842__auto__ = e28864;
var statearr_28865_28900 = state_28819;
(statearr_28865_28900[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28901 = state_28819;
state_28819 = G__28901;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_28819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_28819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___28871,mults,ensure_mult,p))
})();
var state__22861__auto__ = (function (){var statearr_28866 = f__22860__auto__.call(null);
(statearr_28866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___28871);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___28871,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28902 = [];
var len__19487__auto___28905 = arguments.length;
var i__19488__auto___28906 = (0);
while(true){
if((i__19488__auto___28906 < len__19487__auto___28905)){
args28902.push((arguments[i__19488__auto___28906]));

var G__28907 = (i__19488__auto___28906 + (1));
i__19488__auto___28906 = G__28907;
continue;
} else {
}
break;
}

var G__28904 = args28902.length;
switch (G__28904) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28902.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28909 = [];
var len__19487__auto___28912 = arguments.length;
var i__19488__auto___28913 = (0);
while(true){
if((i__19488__auto___28913 < len__19487__auto___28912)){
args28909.push((arguments[i__19488__auto___28913]));

var G__28914 = (i__19488__auto___28913 + (1));
i__19488__auto___28913 = G__28914;
continue;
} else {
}
break;
}

var G__28911 = args28909.length;
switch (G__28911) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28909.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28916 = [];
var len__19487__auto___28987 = arguments.length;
var i__19488__auto___28988 = (0);
while(true){
if((i__19488__auto___28988 < len__19487__auto___28987)){
args28916.push((arguments[i__19488__auto___28988]));

var G__28989 = (i__19488__auto___28988 + (1));
i__19488__auto___28988 = G__28989;
continue;
} else {
}
break;
}

var G__28918 = args28916.length;
switch (G__28918) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28916.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22859__auto___28991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (7))){
var state_28957__$1 = state_28957;
var statearr_28959_28992 = state_28957__$1;
(statearr_28959_28992[(2)] = null);

(statearr_28959_28992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28960_28993 = state_28957__$1;
(statearr_28960_28993[(2)] = null);

(statearr_28960_28993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (4))){
var inst_28921 = (state_28957[(7)]);
var inst_28923 = (inst_28921 < cnt);
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28923)){
var statearr_28961_28994 = state_28957__$1;
(statearr_28961_28994[(1)] = (6));

} else {
var statearr_28962_28995 = state_28957__$1;
(statearr_28962_28995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (15))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28963_28996 = state_28957__$1;
(statearr_28963_28996[(2)] = inst_28953);

(statearr_28963_28996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (13))){
var inst_28946 = cljs.core.async.close_BANG_.call(null,out);
var state_28957__$1 = state_28957;
var statearr_28964_28997 = state_28957__$1;
(statearr_28964_28997[(2)] = inst_28946);

(statearr_28964_28997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var state_28957__$1 = state_28957;
var statearr_28965_28998 = state_28957__$1;
(statearr_28965_28998[(2)] = null);

(statearr_28965_28998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (12))){
var inst_28943 = (state_28957[(8)]);
var inst_28943__$1 = (state_28957[(2)]);
var inst_28944 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28943__$1);
var state_28957__$1 = (function (){var statearr_28966 = state_28957;
(statearr_28966[(8)] = inst_28943__$1);

return statearr_28966;
})();
if(cljs.core.truth_(inst_28944)){
var statearr_28967_28999 = state_28957__$1;
(statearr_28967_28999[(1)] = (13));

} else {
var statearr_28968_29000 = state_28957__$1;
(statearr_28968_29000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (2))){
var inst_28920 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28921 = (0);
var state_28957__$1 = (function (){var statearr_28969 = state_28957;
(statearr_28969[(7)] = inst_28921);

(statearr_28969[(9)] = inst_28920);

return statearr_28969;
})();
var statearr_28970_29001 = state_28957__$1;
(statearr_28970_29001[(2)] = null);

(statearr_28970_29001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (11))){
var inst_28921 = (state_28957[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28957,(10),Object,null,(9));
var inst_28930 = chs__$1.call(null,inst_28921);
var inst_28931 = done.call(null,inst_28921);
var inst_28932 = cljs.core.async.take_BANG_.call(null,inst_28930,inst_28931);
var state_28957__$1 = state_28957;
var statearr_28971_29002 = state_28957__$1;
(statearr_28971_29002[(2)] = inst_28932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (9))){
var inst_28921 = (state_28957[(7)]);
var inst_28934 = (state_28957[(2)]);
var inst_28935 = (inst_28921 + (1));
var inst_28921__$1 = inst_28935;
var state_28957__$1 = (function (){var statearr_28972 = state_28957;
(statearr_28972[(7)] = inst_28921__$1);

(statearr_28972[(10)] = inst_28934);

return statearr_28972;
})();
var statearr_28973_29003 = state_28957__$1;
(statearr_28973_29003[(2)] = null);

(statearr_28973_29003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var inst_28941 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28974 = state_28957;
(statearr_28974[(11)] = inst_28941);

return statearr_28974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(12),dchan);
} else {
if((state_val_28958 === (14))){
var inst_28943 = (state_28957[(8)]);
var inst_28948 = cljs.core.apply.call(null,f,inst_28943);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28957__$1,(16),out,inst_28948);
} else {
if((state_val_28958 === (16))){
var inst_28950 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28975 = state_28957;
(statearr_28975[(12)] = inst_28950);

return statearr_28975;
})();
var statearr_28976_29004 = state_28957__$1;
(statearr_28976_29004[(2)] = null);

(statearr_28976_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (10))){
var inst_28925 = (state_28957[(2)]);
var inst_28926 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28957__$1 = (function (){var statearr_28977 = state_28957;
(statearr_28977[(13)] = inst_28925);

return statearr_28977;
})();
var statearr_28978_29005 = state_28957__$1;
(statearr_28978_29005[(2)] = inst_28926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (8))){
var inst_28939 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28979_29006 = state_28957__$1;
(statearr_28979_29006[(2)] = inst_28939);

(statearr_28979_29006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22838__auto__,c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_28983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28983[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_28983[(1)] = (1));

return statearr_28983;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_28957){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e28984){if((e28984 instanceof Object)){
var ex__22842__auto__ = e28984;
var statearr_28985_29007 = state_28957;
(statearr_28985_29007[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29008 = state_28957;
state_28957 = G__29008;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22861__auto__ = (function (){var statearr_28986 = f__22860__auto__.call(null);
(statearr_28986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___28991);

return statearr_28986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___28991,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29010 = [];
var len__19487__auto___29066 = arguments.length;
var i__19488__auto___29067 = (0);
while(true){
if((i__19488__auto___29067 < len__19487__auto___29066)){
args29010.push((arguments[i__19488__auto___29067]));

var G__29068 = (i__19488__auto___29067 + (1));
i__19488__auto___29067 = G__29068;
continue;
} else {
}
break;
}

var G__29012 = args29010.length;
switch (G__29012) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29010.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29070,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29070,out){
return (function (state_29042){
var state_val_29043 = (state_29042[(1)]);
if((state_val_29043 === (7))){
var inst_29021 = (state_29042[(7)]);
var inst_29022 = (state_29042[(8)]);
var inst_29021__$1 = (state_29042[(2)]);
var inst_29022__$1 = cljs.core.nth.call(null,inst_29021__$1,(0),null);
var inst_29023 = cljs.core.nth.call(null,inst_29021__$1,(1),null);
var inst_29024 = (inst_29022__$1 == null);
var state_29042__$1 = (function (){var statearr_29044 = state_29042;
(statearr_29044[(7)] = inst_29021__$1);

(statearr_29044[(8)] = inst_29022__$1);

(statearr_29044[(9)] = inst_29023);

return statearr_29044;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29045_29071 = state_29042__$1;
(statearr_29045_29071[(1)] = (8));

} else {
var statearr_29046_29072 = state_29042__$1;
(statearr_29046_29072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (1))){
var inst_29013 = cljs.core.vec.call(null,chs);
var inst_29014 = inst_29013;
var state_29042__$1 = (function (){var statearr_29047 = state_29042;
(statearr_29047[(10)] = inst_29014);

return statearr_29047;
})();
var statearr_29048_29073 = state_29042__$1;
(statearr_29048_29073[(2)] = null);

(statearr_29048_29073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (4))){
var inst_29014 = (state_29042[(10)]);
var state_29042__$1 = state_29042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29042__$1,(7),inst_29014);
} else {
if((state_val_29043 === (6))){
var inst_29038 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29049_29074 = state_29042__$1;
(statearr_29049_29074[(2)] = inst_29038);

(statearr_29049_29074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (3))){
var inst_29040 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29042__$1,inst_29040);
} else {
if((state_val_29043 === (2))){
var inst_29014 = (state_29042[(10)]);
var inst_29016 = cljs.core.count.call(null,inst_29014);
var inst_29017 = (inst_29016 > (0));
var state_29042__$1 = state_29042;
if(cljs.core.truth_(inst_29017)){
var statearr_29051_29075 = state_29042__$1;
(statearr_29051_29075[(1)] = (4));

} else {
var statearr_29052_29076 = state_29042__$1;
(statearr_29052_29076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (11))){
var inst_29014 = (state_29042[(10)]);
var inst_29031 = (state_29042[(2)]);
var tmp29050 = inst_29014;
var inst_29014__$1 = tmp29050;
var state_29042__$1 = (function (){var statearr_29053 = state_29042;
(statearr_29053[(10)] = inst_29014__$1);

(statearr_29053[(11)] = inst_29031);

return statearr_29053;
})();
var statearr_29054_29077 = state_29042__$1;
(statearr_29054_29077[(2)] = null);

(statearr_29054_29077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (9))){
var inst_29022 = (state_29042[(8)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29042__$1,(11),out,inst_29022);
} else {
if((state_val_29043 === (5))){
var inst_29036 = cljs.core.async.close_BANG_.call(null,out);
var state_29042__$1 = state_29042;
var statearr_29055_29078 = state_29042__$1;
(statearr_29055_29078[(2)] = inst_29036);

(statearr_29055_29078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (10))){
var inst_29034 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29056_29079 = state_29042__$1;
(statearr_29056_29079[(2)] = inst_29034);

(statearr_29056_29079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (8))){
var inst_29021 = (state_29042[(7)]);
var inst_29022 = (state_29042[(8)]);
var inst_29014 = (state_29042[(10)]);
var inst_29023 = (state_29042[(9)]);
var inst_29026 = (function (){var cs = inst_29014;
var vec__29019 = inst_29021;
var v = inst_29022;
var c = inst_29023;
return ((function (cs,vec__29019,v,c,inst_29021,inst_29022,inst_29014,inst_29023,state_val_29043,c__22859__auto___29070,out){
return (function (p1__29009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29009_SHARP_);
});
;})(cs,vec__29019,v,c,inst_29021,inst_29022,inst_29014,inst_29023,state_val_29043,c__22859__auto___29070,out))
})();
var inst_29027 = cljs.core.filterv.call(null,inst_29026,inst_29014);
var inst_29014__$1 = inst_29027;
var state_29042__$1 = (function (){var statearr_29057 = state_29042;
(statearr_29057[(10)] = inst_29014__$1);

return statearr_29057;
})();
var statearr_29058_29080 = state_29042__$1;
(statearr_29058_29080[(2)] = null);

(statearr_29058_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__22859__auto___29070,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29070,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29042){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object)){
var ex__22842__auto__ = e29063;
var statearr_29064_29081 = state_29042;
(statearr_29064_29081[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29082 = state_29042;
state_29042 = G__29082;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29070,out))
})();
var state__22861__auto__ = (function (){var statearr_29065 = f__22860__auto__.call(null);
(statearr_29065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29070);

return statearr_29065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29070,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29083 = [];
var len__19487__auto___29132 = arguments.length;
var i__19488__auto___29133 = (0);
while(true){
if((i__19488__auto___29133 < len__19487__auto___29132)){
args29083.push((arguments[i__19488__auto___29133]));

var G__29134 = (i__19488__auto___29133 + (1));
i__19488__auto___29133 = G__29134;
continue;
} else {
}
break;
}

var G__29085 = args29083.length;
switch (G__29085) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29083.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29136,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29136,out){
return (function (state_29109){
var state_val_29110 = (state_29109[(1)]);
if((state_val_29110 === (7))){
var inst_29091 = (state_29109[(7)]);
var inst_29091__$1 = (state_29109[(2)]);
var inst_29092 = (inst_29091__$1 == null);
var inst_29093 = cljs.core.not.call(null,inst_29092);
var state_29109__$1 = (function (){var statearr_29111 = state_29109;
(statearr_29111[(7)] = inst_29091__$1);

return statearr_29111;
})();
if(inst_29093){
var statearr_29112_29137 = state_29109__$1;
(statearr_29112_29137[(1)] = (8));

} else {
var statearr_29113_29138 = state_29109__$1;
(statearr_29113_29138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (1))){
var inst_29086 = (0);
var state_29109__$1 = (function (){var statearr_29114 = state_29109;
(statearr_29114[(8)] = inst_29086);

return statearr_29114;
})();
var statearr_29115_29139 = state_29109__$1;
(statearr_29115_29139[(2)] = null);

(statearr_29115_29139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (4))){
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(7),ch);
} else {
if((state_val_29110 === (6))){
var inst_29104 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29116_29140 = state_29109__$1;
(statearr_29116_29140[(2)] = inst_29104);

(statearr_29116_29140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (3))){
var inst_29106 = (state_29109[(2)]);
var inst_29107 = cljs.core.async.close_BANG_.call(null,out);
var state_29109__$1 = (function (){var statearr_29117 = state_29109;
(statearr_29117[(9)] = inst_29106);

return statearr_29117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else {
if((state_val_29110 === (2))){
var inst_29086 = (state_29109[(8)]);
var inst_29088 = (inst_29086 < n);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29088)){
var statearr_29118_29141 = state_29109__$1;
(statearr_29118_29141[(1)] = (4));

} else {
var statearr_29119_29142 = state_29109__$1;
(statearr_29119_29142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (11))){
var inst_29086 = (state_29109[(8)]);
var inst_29096 = (state_29109[(2)]);
var inst_29097 = (inst_29086 + (1));
var inst_29086__$1 = inst_29097;
var state_29109__$1 = (function (){var statearr_29120 = state_29109;
(statearr_29120[(8)] = inst_29086__$1);

(statearr_29120[(10)] = inst_29096);

return statearr_29120;
})();
var statearr_29121_29143 = state_29109__$1;
(statearr_29121_29143[(2)] = null);

(statearr_29121_29143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (9))){
var state_29109__$1 = state_29109;
var statearr_29122_29144 = state_29109__$1;
(statearr_29122_29144[(2)] = null);

(statearr_29122_29144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (5))){
var state_29109__$1 = state_29109;
var statearr_29123_29145 = state_29109__$1;
(statearr_29123_29145[(2)] = null);

(statearr_29123_29145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (10))){
var inst_29101 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29124_29146 = state_29109__$1;
(statearr_29124_29146[(2)] = inst_29101);

(statearr_29124_29146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (8))){
var inst_29091 = (state_29109[(7)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29109__$1,(11),out,inst_29091);
} else {
return null;
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
}
});})(c__22859__auto___29136,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29136,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29128[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29128[(1)] = (1));

return statearr_29128;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29109){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29129){if((e29129 instanceof Object)){
var ex__22842__auto__ = e29129;
var statearr_29130_29147 = state_29109;
(statearr_29130_29147[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29148 = state_29109;
state_29109 = G__29148;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29136,out))
})();
var state__22861__auto__ = (function (){var statearr_29131 = f__22860__auto__.call(null);
(statearr_29131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29136);

return statearr_29131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29136,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29156 = (function (map_LT_,f,ch,meta29157){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29157 = meta29157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29158,meta29157__$1){
var self__ = this;
var _29158__$1 = this;
return (new cljs.core.async.t_cljs$core$async29156(self__.map_LT_,self__.f,self__.ch,meta29157__$1));
});

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29158){
var self__ = this;
var _29158__$1 = this;
return self__.meta29157;
});

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29159 = (function (map_LT_,f,ch,meta29157,_,fn1,meta29160){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29157 = meta29157;
this._ = _;
this.fn1 = fn1;
this.meta29160 = meta29160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29161,meta29160__$1){
var self__ = this;
var _29161__$1 = this;
return (new cljs.core.async.t_cljs$core$async29159(self__.map_LT_,self__.f,self__.ch,self__.meta29157,self__._,self__.fn1,meta29160__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29161){
var self__ = this;
var _29161__$1 = this;
return self__.meta29160;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29149_SHARP_){
return f1.call(null,(((p1__29149_SHARP_ == null))?null:self__.f.call(null,p1__29149_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29157","meta29157",186643218,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29156","cljs.core.async/t_cljs$core$async29156",-439797176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29160","meta29160",-1388683590,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29159";

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29159");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29159 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29159(map_LT___$1,f__$1,ch__$1,meta29157__$1,___$2,fn1__$1,meta29160){
return (new cljs.core.async.t_cljs$core$async29159(map_LT___$1,f__$1,ch__$1,meta29157__$1,___$2,fn1__$1,meta29160));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29159(self__.map_LT_,self__.f,self__.ch,self__.meta29157,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18406__auto__ = ret;
if(cljs.core.truth_(and__18406__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18406__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29157","meta29157",186643218,null)], null);
});

cljs.core.async.t_cljs$core$async29156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29156";

cljs.core.async.t_cljs$core$async29156.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29156");
});

cljs.core.async.__GT_t_cljs$core$async29156 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29156(map_LT___$1,f__$1,ch__$1,meta29157){
return (new cljs.core.async.t_cljs$core$async29156(map_LT___$1,f__$1,ch__$1,meta29157));
});

}

return (new cljs.core.async.t_cljs$core$async29156(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29165 = (function (map_GT_,f,ch,meta29166){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29166 = meta29166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29167,meta29166__$1){
var self__ = this;
var _29167__$1 = this;
return (new cljs.core.async.t_cljs$core$async29165(self__.map_GT_,self__.f,self__.ch,meta29166__$1));
});

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29167){
var self__ = this;
var _29167__$1 = this;
return self__.meta29166;
});

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29166","meta29166",673210461,null)], null);
});

cljs.core.async.t_cljs$core$async29165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29165";

cljs.core.async.t_cljs$core$async29165.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29165");
});

cljs.core.async.__GT_t_cljs$core$async29165 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29165(map_GT___$1,f__$1,ch__$1,meta29166){
return (new cljs.core.async.t_cljs$core$async29165(map_GT___$1,f__$1,ch__$1,meta29166));
});

}

return (new cljs.core.async.t_cljs$core$async29165(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29171 = (function (filter_GT_,p,ch,meta29172){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29172 = meta29172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29173,meta29172__$1){
var self__ = this;
var _29173__$1 = this;
return (new cljs.core.async.t_cljs$core$async29171(self__.filter_GT_,self__.p,self__.ch,meta29172__$1));
});

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29173){
var self__ = this;
var _29173__$1 = this;
return self__.meta29172;
});

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29172","meta29172",1761526210,null)], null);
});

cljs.core.async.t_cljs$core$async29171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29171";

cljs.core.async.t_cljs$core$async29171.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29171");
});

cljs.core.async.__GT_t_cljs$core$async29171 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29171(filter_GT___$1,p__$1,ch__$1,meta29172){
return (new cljs.core.async.t_cljs$core$async29171(filter_GT___$1,p__$1,ch__$1,meta29172));
});

}

return (new cljs.core.async.t_cljs$core$async29171(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29174 = [];
var len__19487__auto___29218 = arguments.length;
var i__19488__auto___29219 = (0);
while(true){
if((i__19488__auto___29219 < len__19487__auto___29218)){
args29174.push((arguments[i__19488__auto___29219]));

var G__29220 = (i__19488__auto___29219 + (1));
i__19488__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var G__29176 = args29174.length;
switch (G__29176) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29174.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29222,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29222,out){
return (function (state_29197){
var state_val_29198 = (state_29197[(1)]);
if((state_val_29198 === (7))){
var inst_29193 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29199_29223 = state_29197__$1;
(statearr_29199_29223[(2)] = inst_29193);

(statearr_29199_29223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (1))){
var state_29197__$1 = state_29197;
var statearr_29200_29224 = state_29197__$1;
(statearr_29200_29224[(2)] = null);

(statearr_29200_29224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (4))){
var inst_29179 = (state_29197[(7)]);
var inst_29179__$1 = (state_29197[(2)]);
var inst_29180 = (inst_29179__$1 == null);
var state_29197__$1 = (function (){var statearr_29201 = state_29197;
(statearr_29201[(7)] = inst_29179__$1);

return statearr_29201;
})();
if(cljs.core.truth_(inst_29180)){
var statearr_29202_29225 = state_29197__$1;
(statearr_29202_29225[(1)] = (5));

} else {
var statearr_29203_29226 = state_29197__$1;
(statearr_29203_29226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (6))){
var inst_29179 = (state_29197[(7)]);
var inst_29184 = p.call(null,inst_29179);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29184)){
var statearr_29204_29227 = state_29197__$1;
(statearr_29204_29227[(1)] = (8));

} else {
var statearr_29205_29228 = state_29197__$1;
(statearr_29205_29228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (3))){
var inst_29195 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29197__$1,inst_29195);
} else {
if((state_val_29198 === (2))){
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29197__$1,(4),ch);
} else {
if((state_val_29198 === (11))){
var inst_29187 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29206_29229 = state_29197__$1;
(statearr_29206_29229[(2)] = inst_29187);

(statearr_29206_29229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (9))){
var state_29197__$1 = state_29197;
var statearr_29207_29230 = state_29197__$1;
(statearr_29207_29230[(2)] = null);

(statearr_29207_29230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (5))){
var inst_29182 = cljs.core.async.close_BANG_.call(null,out);
var state_29197__$1 = state_29197;
var statearr_29208_29231 = state_29197__$1;
(statearr_29208_29231[(2)] = inst_29182);

(statearr_29208_29231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (10))){
var inst_29190 = (state_29197[(2)]);
var state_29197__$1 = (function (){var statearr_29209 = state_29197;
(statearr_29209[(8)] = inst_29190);

return statearr_29209;
})();
var statearr_29210_29232 = state_29197__$1;
(statearr_29210_29232[(2)] = null);

(statearr_29210_29232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (8))){
var inst_29179 = (state_29197[(7)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29197__$1,(11),out,inst_29179);
} else {
return null;
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
}
});})(c__22859__auto___29222,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29222,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29214 = [null,null,null,null,null,null,null,null,null];
(statearr_29214[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29214[(1)] = (1));

return statearr_29214;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29197){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29215){if((e29215 instanceof Object)){
var ex__22842__auto__ = e29215;
var statearr_29216_29233 = state_29197;
(statearr_29216_29233[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29234 = state_29197;
state_29197 = G__29234;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29222,out))
})();
var state__22861__auto__ = (function (){var statearr_29217 = f__22860__auto__.call(null);
(statearr_29217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29222);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29222,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29235 = [];
var len__19487__auto___29238 = arguments.length;
var i__19488__auto___29239 = (0);
while(true){
if((i__19488__auto___29239 < len__19487__auto___29238)){
args29235.push((arguments[i__19488__auto___29239]));

var G__29240 = (i__19488__auto___29239 + (1));
i__19488__auto___29239 = G__29240;
continue;
} else {
}
break;
}

var G__29237 = args29235.length;
switch (G__29237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29235.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__){
return (function (state_29407){
var state_val_29408 = (state_29407[(1)]);
if((state_val_29408 === (7))){
var inst_29403 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29409_29450 = state_29407__$1;
(statearr_29409_29450[(2)] = inst_29403);

(statearr_29409_29450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (20))){
var inst_29373 = (state_29407[(7)]);
var inst_29384 = (state_29407[(2)]);
var inst_29385 = cljs.core.next.call(null,inst_29373);
var inst_29359 = inst_29385;
var inst_29360 = null;
var inst_29361 = (0);
var inst_29362 = (0);
var state_29407__$1 = (function (){var statearr_29410 = state_29407;
(statearr_29410[(8)] = inst_29362);

(statearr_29410[(9)] = inst_29359);

(statearr_29410[(10)] = inst_29361);

(statearr_29410[(11)] = inst_29360);

(statearr_29410[(12)] = inst_29384);

return statearr_29410;
})();
var statearr_29411_29451 = state_29407__$1;
(statearr_29411_29451[(2)] = null);

(statearr_29411_29451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (1))){
var state_29407__$1 = state_29407;
var statearr_29412_29452 = state_29407__$1;
(statearr_29412_29452[(2)] = null);

(statearr_29412_29452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (4))){
var inst_29348 = (state_29407[(13)]);
var inst_29348__$1 = (state_29407[(2)]);
var inst_29349 = (inst_29348__$1 == null);
var state_29407__$1 = (function (){var statearr_29413 = state_29407;
(statearr_29413[(13)] = inst_29348__$1);

return statearr_29413;
})();
if(cljs.core.truth_(inst_29349)){
var statearr_29414_29453 = state_29407__$1;
(statearr_29414_29453[(1)] = (5));

} else {
var statearr_29415_29454 = state_29407__$1;
(statearr_29415_29454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (15))){
var state_29407__$1 = state_29407;
var statearr_29419_29455 = state_29407__$1;
(statearr_29419_29455[(2)] = null);

(statearr_29419_29455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (21))){
var state_29407__$1 = state_29407;
var statearr_29420_29456 = state_29407__$1;
(statearr_29420_29456[(2)] = null);

(statearr_29420_29456[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (13))){
var inst_29362 = (state_29407[(8)]);
var inst_29359 = (state_29407[(9)]);
var inst_29361 = (state_29407[(10)]);
var inst_29360 = (state_29407[(11)]);
var inst_29369 = (state_29407[(2)]);
var inst_29370 = (inst_29362 + (1));
var tmp29416 = inst_29359;
var tmp29417 = inst_29361;
var tmp29418 = inst_29360;
var inst_29359__$1 = tmp29416;
var inst_29360__$1 = tmp29418;
var inst_29361__$1 = tmp29417;
var inst_29362__$1 = inst_29370;
var state_29407__$1 = (function (){var statearr_29421 = state_29407;
(statearr_29421[(8)] = inst_29362__$1);

(statearr_29421[(9)] = inst_29359__$1);

(statearr_29421[(14)] = inst_29369);

(statearr_29421[(10)] = inst_29361__$1);

(statearr_29421[(11)] = inst_29360__$1);

return statearr_29421;
})();
var statearr_29422_29457 = state_29407__$1;
(statearr_29422_29457[(2)] = null);

(statearr_29422_29457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (22))){
var state_29407__$1 = state_29407;
var statearr_29423_29458 = state_29407__$1;
(statearr_29423_29458[(2)] = null);

(statearr_29423_29458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (6))){
var inst_29348 = (state_29407[(13)]);
var inst_29357 = f.call(null,inst_29348);
var inst_29358 = cljs.core.seq.call(null,inst_29357);
var inst_29359 = inst_29358;
var inst_29360 = null;
var inst_29361 = (0);
var inst_29362 = (0);
var state_29407__$1 = (function (){var statearr_29424 = state_29407;
(statearr_29424[(8)] = inst_29362);

(statearr_29424[(9)] = inst_29359);

(statearr_29424[(10)] = inst_29361);

(statearr_29424[(11)] = inst_29360);

return statearr_29424;
})();
var statearr_29425_29459 = state_29407__$1;
(statearr_29425_29459[(2)] = null);

(statearr_29425_29459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (17))){
var inst_29373 = (state_29407[(7)]);
var inst_29377 = cljs.core.chunk_first.call(null,inst_29373);
var inst_29378 = cljs.core.chunk_rest.call(null,inst_29373);
var inst_29379 = cljs.core.count.call(null,inst_29377);
var inst_29359 = inst_29378;
var inst_29360 = inst_29377;
var inst_29361 = inst_29379;
var inst_29362 = (0);
var state_29407__$1 = (function (){var statearr_29426 = state_29407;
(statearr_29426[(8)] = inst_29362);

(statearr_29426[(9)] = inst_29359);

(statearr_29426[(10)] = inst_29361);

(statearr_29426[(11)] = inst_29360);

return statearr_29426;
})();
var statearr_29427_29460 = state_29407__$1;
(statearr_29427_29460[(2)] = null);

(statearr_29427_29460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (3))){
var inst_29405 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29407__$1,inst_29405);
} else {
if((state_val_29408 === (12))){
var inst_29393 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29428_29461 = state_29407__$1;
(statearr_29428_29461[(2)] = inst_29393);

(statearr_29428_29461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (2))){
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29407__$1,(4),in$);
} else {
if((state_val_29408 === (23))){
var inst_29401 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29429_29462 = state_29407__$1;
(statearr_29429_29462[(2)] = inst_29401);

(statearr_29429_29462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (19))){
var inst_29388 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29430_29463 = state_29407__$1;
(statearr_29430_29463[(2)] = inst_29388);

(statearr_29430_29463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (11))){
var inst_29359 = (state_29407[(9)]);
var inst_29373 = (state_29407[(7)]);
var inst_29373__$1 = cljs.core.seq.call(null,inst_29359);
var state_29407__$1 = (function (){var statearr_29431 = state_29407;
(statearr_29431[(7)] = inst_29373__$1);

return statearr_29431;
})();
if(inst_29373__$1){
var statearr_29432_29464 = state_29407__$1;
(statearr_29432_29464[(1)] = (14));

} else {
var statearr_29433_29465 = state_29407__$1;
(statearr_29433_29465[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (9))){
var inst_29395 = (state_29407[(2)]);
var inst_29396 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29407__$1 = (function (){var statearr_29434 = state_29407;
(statearr_29434[(15)] = inst_29395);

return statearr_29434;
})();
if(cljs.core.truth_(inst_29396)){
var statearr_29435_29466 = state_29407__$1;
(statearr_29435_29466[(1)] = (21));

} else {
var statearr_29436_29467 = state_29407__$1;
(statearr_29436_29467[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (5))){
var inst_29351 = cljs.core.async.close_BANG_.call(null,out);
var state_29407__$1 = state_29407;
var statearr_29437_29468 = state_29407__$1;
(statearr_29437_29468[(2)] = inst_29351);

(statearr_29437_29468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (14))){
var inst_29373 = (state_29407[(7)]);
var inst_29375 = cljs.core.chunked_seq_QMARK_.call(null,inst_29373);
var state_29407__$1 = state_29407;
if(inst_29375){
var statearr_29438_29469 = state_29407__$1;
(statearr_29438_29469[(1)] = (17));

} else {
var statearr_29439_29470 = state_29407__$1;
(statearr_29439_29470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (16))){
var inst_29391 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29440_29471 = state_29407__$1;
(statearr_29440_29471[(2)] = inst_29391);

(statearr_29440_29471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (10))){
var inst_29362 = (state_29407[(8)]);
var inst_29360 = (state_29407[(11)]);
var inst_29367 = cljs.core._nth.call(null,inst_29360,inst_29362);
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29407__$1,(13),out,inst_29367);
} else {
if((state_val_29408 === (18))){
var inst_29373 = (state_29407[(7)]);
var inst_29382 = cljs.core.first.call(null,inst_29373);
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29407__$1,(20),out,inst_29382);
} else {
if((state_val_29408 === (8))){
var inst_29362 = (state_29407[(8)]);
var inst_29361 = (state_29407[(10)]);
var inst_29364 = (inst_29362 < inst_29361);
var inst_29365 = inst_29364;
var state_29407__$1 = state_29407;
if(cljs.core.truth_(inst_29365)){
var statearr_29441_29472 = state_29407__$1;
(statearr_29441_29472[(1)] = (10));

} else {
var statearr_29442_29473 = state_29407__$1;
(statearr_29442_29473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__22859__auto__))
;
return ((function (switch__22838__auto__,c__22859__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____0 = (function (){
var statearr_29446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29446[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__);

(statearr_29446[(1)] = (1));

return statearr_29446;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____1 = (function (state_29407){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29447){if((e29447 instanceof Object)){
var ex__22842__auto__ = e29447;
var statearr_29448_29474 = state_29407;
(statearr_29448_29474[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29475 = state_29407;
state_29407 = G__29475;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__ = function(state_29407){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____1.call(this,state_29407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22839__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__))
})();
var state__22861__auto__ = (function (){var statearr_29449 = f__22860__auto__.call(null);
(statearr_29449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__))
);

return c__22859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29476 = [];
var len__19487__auto___29479 = arguments.length;
var i__19488__auto___29480 = (0);
while(true){
if((i__19488__auto___29480 < len__19487__auto___29479)){
args29476.push((arguments[i__19488__auto___29480]));

var G__29481 = (i__19488__auto___29480 + (1));
i__19488__auto___29480 = G__29481;
continue;
} else {
}
break;
}

var G__29478 = args29476.length;
switch (G__29478) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29476.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29483 = [];
var len__19487__auto___29486 = arguments.length;
var i__19488__auto___29487 = (0);
while(true){
if((i__19488__auto___29487 < len__19487__auto___29486)){
args29483.push((arguments[i__19488__auto___29487]));

var G__29488 = (i__19488__auto___29487 + (1));
i__19488__auto___29487 = G__29488;
continue;
} else {
}
break;
}

var G__29485 = args29483.length;
switch (G__29485) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29483.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29490 = [];
var len__19487__auto___29541 = arguments.length;
var i__19488__auto___29542 = (0);
while(true){
if((i__19488__auto___29542 < len__19487__auto___29541)){
args29490.push((arguments[i__19488__auto___29542]));

var G__29543 = (i__19488__auto___29542 + (1));
i__19488__auto___29542 = G__29543;
continue;
} else {
}
break;
}

var G__29492 = args29490.length;
switch (G__29492) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29490.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29545,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29545,out){
return (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (7))){
var inst_29511 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29518_29546 = state_29516__$1;
(statearr_29518_29546[(2)] = inst_29511);

(statearr_29518_29546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (1))){
var inst_29493 = null;
var state_29516__$1 = (function (){var statearr_29519 = state_29516;
(statearr_29519[(7)] = inst_29493);

return statearr_29519;
})();
var statearr_29520_29547 = state_29516__$1;
(statearr_29520_29547[(2)] = null);

(statearr_29520_29547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (4))){
var inst_29496 = (state_29516[(8)]);
var inst_29496__$1 = (state_29516[(2)]);
var inst_29497 = (inst_29496__$1 == null);
var inst_29498 = cljs.core.not.call(null,inst_29497);
var state_29516__$1 = (function (){var statearr_29521 = state_29516;
(statearr_29521[(8)] = inst_29496__$1);

return statearr_29521;
})();
if(inst_29498){
var statearr_29522_29548 = state_29516__$1;
(statearr_29522_29548[(1)] = (5));

} else {
var statearr_29523_29549 = state_29516__$1;
(statearr_29523_29549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (6))){
var state_29516__$1 = state_29516;
var statearr_29524_29550 = state_29516__$1;
(statearr_29524_29550[(2)] = null);

(statearr_29524_29550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (3))){
var inst_29513 = (state_29516[(2)]);
var inst_29514 = cljs.core.async.close_BANG_.call(null,out);
var state_29516__$1 = (function (){var statearr_29525 = state_29516;
(statearr_29525[(9)] = inst_29513);

return statearr_29525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29516__$1,inst_29514);
} else {
if((state_val_29517 === (2))){
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29516__$1,(4),ch);
} else {
if((state_val_29517 === (11))){
var inst_29496 = (state_29516[(8)]);
var inst_29505 = (state_29516[(2)]);
var inst_29493 = inst_29496;
var state_29516__$1 = (function (){var statearr_29526 = state_29516;
(statearr_29526[(10)] = inst_29505);

(statearr_29526[(7)] = inst_29493);

return statearr_29526;
})();
var statearr_29527_29551 = state_29516__$1;
(statearr_29527_29551[(2)] = null);

(statearr_29527_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (9))){
var inst_29496 = (state_29516[(8)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29516__$1,(11),out,inst_29496);
} else {
if((state_val_29517 === (5))){
var inst_29493 = (state_29516[(7)]);
var inst_29496 = (state_29516[(8)]);
var inst_29500 = cljs.core._EQ_.call(null,inst_29496,inst_29493);
var state_29516__$1 = state_29516;
if(inst_29500){
var statearr_29529_29552 = state_29516__$1;
(statearr_29529_29552[(1)] = (8));

} else {
var statearr_29530_29553 = state_29516__$1;
(statearr_29530_29553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (10))){
var inst_29508 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29531_29554 = state_29516__$1;
(statearr_29531_29554[(2)] = inst_29508);

(statearr_29531_29554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (8))){
var inst_29493 = (state_29516[(7)]);
var tmp29528 = inst_29493;
var inst_29493__$1 = tmp29528;
var state_29516__$1 = (function (){var statearr_29532 = state_29516;
(statearr_29532[(7)] = inst_29493__$1);

return statearr_29532;
})();
var statearr_29533_29555 = state_29516__$1;
(statearr_29533_29555[(2)] = null);

(statearr_29533_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__22859__auto___29545,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29545,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29537[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29537[(1)] = (1));

return statearr_29537;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29516){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29538){if((e29538 instanceof Object)){
var ex__22842__auto__ = e29538;
var statearr_29539_29556 = state_29516;
(statearr_29539_29556[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29557 = state_29516;
state_29516 = G__29557;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29545,out))
})();
var state__22861__auto__ = (function (){var statearr_29540 = f__22860__auto__.call(null);
(statearr_29540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29545);

return statearr_29540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29545,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29558 = [];
var len__19487__auto___29628 = arguments.length;
var i__19488__auto___29629 = (0);
while(true){
if((i__19488__auto___29629 < len__19487__auto___29628)){
args29558.push((arguments[i__19488__auto___29629]));

var G__29630 = (i__19488__auto___29629 + (1));
i__19488__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var G__29560 = args29558.length;
switch (G__29560) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29558.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29632,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29632,out){
return (function (state_29598){
var state_val_29599 = (state_29598[(1)]);
if((state_val_29599 === (7))){
var inst_29594 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29600_29633 = state_29598__$1;
(statearr_29600_29633[(2)] = inst_29594);

(statearr_29600_29633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (1))){
var inst_29561 = (new Array(n));
var inst_29562 = inst_29561;
var inst_29563 = (0);
var state_29598__$1 = (function (){var statearr_29601 = state_29598;
(statearr_29601[(7)] = inst_29562);

(statearr_29601[(8)] = inst_29563);

return statearr_29601;
})();
var statearr_29602_29634 = state_29598__$1;
(statearr_29602_29634[(2)] = null);

(statearr_29602_29634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (4))){
var inst_29566 = (state_29598[(9)]);
var inst_29566__$1 = (state_29598[(2)]);
var inst_29567 = (inst_29566__$1 == null);
var inst_29568 = cljs.core.not.call(null,inst_29567);
var state_29598__$1 = (function (){var statearr_29603 = state_29598;
(statearr_29603[(9)] = inst_29566__$1);

return statearr_29603;
})();
if(inst_29568){
var statearr_29604_29635 = state_29598__$1;
(statearr_29604_29635[(1)] = (5));

} else {
var statearr_29605_29636 = state_29598__$1;
(statearr_29605_29636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (15))){
var inst_29588 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29606_29637 = state_29598__$1;
(statearr_29606_29637[(2)] = inst_29588);

(statearr_29606_29637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (13))){
var state_29598__$1 = state_29598;
var statearr_29607_29638 = state_29598__$1;
(statearr_29607_29638[(2)] = null);

(statearr_29607_29638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (6))){
var inst_29563 = (state_29598[(8)]);
var inst_29584 = (inst_29563 > (0));
var state_29598__$1 = state_29598;
if(cljs.core.truth_(inst_29584)){
var statearr_29608_29639 = state_29598__$1;
(statearr_29608_29639[(1)] = (12));

} else {
var statearr_29609_29640 = state_29598__$1;
(statearr_29609_29640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (3))){
var inst_29596 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29598__$1,inst_29596);
} else {
if((state_val_29599 === (12))){
var inst_29562 = (state_29598[(7)]);
var inst_29586 = cljs.core.vec.call(null,inst_29562);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(15),out,inst_29586);
} else {
if((state_val_29599 === (2))){
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29598__$1,(4),ch);
} else {
if((state_val_29599 === (11))){
var inst_29578 = (state_29598[(2)]);
var inst_29579 = (new Array(n));
var inst_29562 = inst_29579;
var inst_29563 = (0);
var state_29598__$1 = (function (){var statearr_29610 = state_29598;
(statearr_29610[(7)] = inst_29562);

(statearr_29610[(10)] = inst_29578);

(statearr_29610[(8)] = inst_29563);

return statearr_29610;
})();
var statearr_29611_29641 = state_29598__$1;
(statearr_29611_29641[(2)] = null);

(statearr_29611_29641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (9))){
var inst_29562 = (state_29598[(7)]);
var inst_29576 = cljs.core.vec.call(null,inst_29562);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(11),out,inst_29576);
} else {
if((state_val_29599 === (5))){
var inst_29562 = (state_29598[(7)]);
var inst_29563 = (state_29598[(8)]);
var inst_29571 = (state_29598[(11)]);
var inst_29566 = (state_29598[(9)]);
var inst_29570 = (inst_29562[inst_29563] = inst_29566);
var inst_29571__$1 = (inst_29563 + (1));
var inst_29572 = (inst_29571__$1 < n);
var state_29598__$1 = (function (){var statearr_29612 = state_29598;
(statearr_29612[(12)] = inst_29570);

(statearr_29612[(11)] = inst_29571__$1);

return statearr_29612;
})();
if(cljs.core.truth_(inst_29572)){
var statearr_29613_29642 = state_29598__$1;
(statearr_29613_29642[(1)] = (8));

} else {
var statearr_29614_29643 = state_29598__$1;
(statearr_29614_29643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (14))){
var inst_29591 = (state_29598[(2)]);
var inst_29592 = cljs.core.async.close_BANG_.call(null,out);
var state_29598__$1 = (function (){var statearr_29616 = state_29598;
(statearr_29616[(13)] = inst_29591);

return statearr_29616;
})();
var statearr_29617_29644 = state_29598__$1;
(statearr_29617_29644[(2)] = inst_29592);

(statearr_29617_29644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (10))){
var inst_29582 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29618_29645 = state_29598__$1;
(statearr_29618_29645[(2)] = inst_29582);

(statearr_29618_29645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (8))){
var inst_29562 = (state_29598[(7)]);
var inst_29571 = (state_29598[(11)]);
var tmp29615 = inst_29562;
var inst_29562__$1 = tmp29615;
var inst_29563 = inst_29571;
var state_29598__$1 = (function (){var statearr_29619 = state_29598;
(statearr_29619[(7)] = inst_29562__$1);

(statearr_29619[(8)] = inst_29563);

return statearr_29619;
})();
var statearr_29620_29646 = state_29598__$1;
(statearr_29620_29646[(2)] = null);

(statearr_29620_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__22859__auto___29632,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29632,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29624[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29624[(1)] = (1));

return statearr_29624;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29598){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29625){if((e29625 instanceof Object)){
var ex__22842__auto__ = e29625;
var statearr_29626_29647 = state_29598;
(statearr_29626_29647[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29648 = state_29598;
state_29598 = G__29648;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29632,out))
})();
var state__22861__auto__ = (function (){var statearr_29627 = f__22860__auto__.call(null);
(statearr_29627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29632);

return statearr_29627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29632,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29649 = [];
var len__19487__auto___29723 = arguments.length;
var i__19488__auto___29724 = (0);
while(true){
if((i__19488__auto___29724 < len__19487__auto___29723)){
args29649.push((arguments[i__19488__auto___29724]));

var G__29725 = (i__19488__auto___29724 + (1));
i__19488__auto___29724 = G__29725;
continue;
} else {
}
break;
}

var G__29651 = args29649.length;
switch (G__29651) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29649.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22859__auto___29727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___29727,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___29727,out){
return (function (state_29693){
var state_val_29694 = (state_29693[(1)]);
if((state_val_29694 === (7))){
var inst_29689 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29695_29728 = state_29693__$1;
(statearr_29695_29728[(2)] = inst_29689);

(statearr_29695_29728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (1))){
var inst_29652 = [];
var inst_29653 = inst_29652;
var inst_29654 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29693__$1 = (function (){var statearr_29696 = state_29693;
(statearr_29696[(7)] = inst_29653);

(statearr_29696[(8)] = inst_29654);

return statearr_29696;
})();
var statearr_29697_29729 = state_29693__$1;
(statearr_29697_29729[(2)] = null);

(statearr_29697_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (4))){
var inst_29657 = (state_29693[(9)]);
var inst_29657__$1 = (state_29693[(2)]);
var inst_29658 = (inst_29657__$1 == null);
var inst_29659 = cljs.core.not.call(null,inst_29658);
var state_29693__$1 = (function (){var statearr_29698 = state_29693;
(statearr_29698[(9)] = inst_29657__$1);

return statearr_29698;
})();
if(inst_29659){
var statearr_29699_29730 = state_29693__$1;
(statearr_29699_29730[(1)] = (5));

} else {
var statearr_29700_29731 = state_29693__$1;
(statearr_29700_29731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (15))){
var inst_29683 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29701_29732 = state_29693__$1;
(statearr_29701_29732[(2)] = inst_29683);

(statearr_29701_29732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (13))){
var state_29693__$1 = state_29693;
var statearr_29702_29733 = state_29693__$1;
(statearr_29702_29733[(2)] = null);

(statearr_29702_29733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (6))){
var inst_29653 = (state_29693[(7)]);
var inst_29678 = inst_29653.length;
var inst_29679 = (inst_29678 > (0));
var state_29693__$1 = state_29693;
if(cljs.core.truth_(inst_29679)){
var statearr_29703_29734 = state_29693__$1;
(statearr_29703_29734[(1)] = (12));

} else {
var statearr_29704_29735 = state_29693__$1;
(statearr_29704_29735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (3))){
var inst_29691 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29693__$1,inst_29691);
} else {
if((state_val_29694 === (12))){
var inst_29653 = (state_29693[(7)]);
var inst_29681 = cljs.core.vec.call(null,inst_29653);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29693__$1,(15),out,inst_29681);
} else {
if((state_val_29694 === (2))){
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29693__$1,(4),ch);
} else {
if((state_val_29694 === (11))){
var inst_29657 = (state_29693[(9)]);
var inst_29661 = (state_29693[(10)]);
var inst_29671 = (state_29693[(2)]);
var inst_29672 = [];
var inst_29673 = inst_29672.push(inst_29657);
var inst_29653 = inst_29672;
var inst_29654 = inst_29661;
var state_29693__$1 = (function (){var statearr_29705 = state_29693;
(statearr_29705[(7)] = inst_29653);

(statearr_29705[(8)] = inst_29654);

(statearr_29705[(11)] = inst_29671);

(statearr_29705[(12)] = inst_29673);

return statearr_29705;
})();
var statearr_29706_29736 = state_29693__$1;
(statearr_29706_29736[(2)] = null);

(statearr_29706_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (9))){
var inst_29653 = (state_29693[(7)]);
var inst_29669 = cljs.core.vec.call(null,inst_29653);
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29693__$1,(11),out,inst_29669);
} else {
if((state_val_29694 === (5))){
var inst_29657 = (state_29693[(9)]);
var inst_29661 = (state_29693[(10)]);
var inst_29654 = (state_29693[(8)]);
var inst_29661__$1 = f.call(null,inst_29657);
var inst_29662 = cljs.core._EQ_.call(null,inst_29661__$1,inst_29654);
var inst_29663 = cljs.core.keyword_identical_QMARK_.call(null,inst_29654,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29664 = (inst_29662) || (inst_29663);
var state_29693__$1 = (function (){var statearr_29707 = state_29693;
(statearr_29707[(10)] = inst_29661__$1);

return statearr_29707;
})();
if(cljs.core.truth_(inst_29664)){
var statearr_29708_29737 = state_29693__$1;
(statearr_29708_29737[(1)] = (8));

} else {
var statearr_29709_29738 = state_29693__$1;
(statearr_29709_29738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (14))){
var inst_29686 = (state_29693[(2)]);
var inst_29687 = cljs.core.async.close_BANG_.call(null,out);
var state_29693__$1 = (function (){var statearr_29711 = state_29693;
(statearr_29711[(13)] = inst_29686);

return statearr_29711;
})();
var statearr_29712_29739 = state_29693__$1;
(statearr_29712_29739[(2)] = inst_29687);

(statearr_29712_29739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (10))){
var inst_29676 = (state_29693[(2)]);
var state_29693__$1 = state_29693;
var statearr_29713_29740 = state_29693__$1;
(statearr_29713_29740[(2)] = inst_29676);

(statearr_29713_29740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29694 === (8))){
var inst_29653 = (state_29693[(7)]);
var inst_29657 = (state_29693[(9)]);
var inst_29661 = (state_29693[(10)]);
var inst_29666 = inst_29653.push(inst_29657);
var tmp29710 = inst_29653;
var inst_29653__$1 = tmp29710;
var inst_29654 = inst_29661;
var state_29693__$1 = (function (){var statearr_29714 = state_29693;
(statearr_29714[(7)] = inst_29653__$1);

(statearr_29714[(14)] = inst_29666);

(statearr_29714[(8)] = inst_29654);

return statearr_29714;
})();
var statearr_29715_29741 = state_29693__$1;
(statearr_29715_29741[(2)] = null);

(statearr_29715_29741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__22859__auto___29727,out))
;
return ((function (switch__22838__auto__,c__22859__auto___29727,out){
return (function() {
var cljs$core$async$state_machine__22839__auto__ = null;
var cljs$core$async$state_machine__22839__auto____0 = (function (){
var statearr_29719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29719[(0)] = cljs$core$async$state_machine__22839__auto__);

(statearr_29719[(1)] = (1));

return statearr_29719;
});
var cljs$core$async$state_machine__22839__auto____1 = (function (state_29693){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_29693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e29720){if((e29720 instanceof Object)){
var ex__22842__auto__ = e29720;
var statearr_29721_29742 = state_29693;
(statearr_29721_29742[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29743 = state_29693;
state_29693 = G__29743;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
cljs$core$async$state_machine__22839__auto__ = function(state_29693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22839__auto____1.call(this,state_29693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22839__auto____0;
cljs$core$async$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22839__auto____1;
return cljs$core$async$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___29727,out))
})();
var state__22861__auto__ = (function (){var statearr_29722 = f__22860__auto__.call(null);
(statearr_29722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___29727);

return statearr_29722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___29727,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map