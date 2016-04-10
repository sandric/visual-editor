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
var args26980 = [];
var len__19487__auto___26986 = arguments.length;
var i__19488__auto___26987 = (0);
while(true){
if((i__19488__auto___26987 < len__19487__auto___26986)){
args26980.push((arguments[i__19488__auto___26987]));

var G__26988 = (i__19488__auto___26987 + (1));
i__19488__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var G__26982 = args26980.length;
switch (G__26982) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26980.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26983 = (function (f,blockable,meta26984){
this.f = f;
this.blockable = blockable;
this.meta26984 = meta26984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26985,meta26984__$1){
var self__ = this;
var _26985__$1 = this;
return (new cljs.core.async.t_cljs$core$async26983(self__.f,self__.blockable,meta26984__$1));
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26985){
var self__ = this;
var _26985__$1 = this;
return self__.meta26984;
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26984","meta26984",1177768934,null)], null);
});

cljs.core.async.t_cljs$core$async26983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26983";

cljs.core.async.t_cljs$core$async26983.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async26983");
});

cljs.core.async.__GT_t_cljs$core$async26983 = (function cljs$core$async$__GT_t_cljs$core$async26983(f__$1,blockable__$1,meta26984){
return (new cljs.core.async.t_cljs$core$async26983(f__$1,blockable__$1,meta26984));
});

}

return (new cljs.core.async.t_cljs$core$async26983(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26992 = [];
var len__19487__auto___26995 = arguments.length;
var i__19488__auto___26996 = (0);
while(true){
if((i__19488__auto___26996 < len__19487__auto___26995)){
args26992.push((arguments[i__19488__auto___26996]));

var G__26997 = (i__19488__auto___26996 + (1));
i__19488__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var G__26994 = args26992.length;
switch (G__26994) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26992.length)].join('')));

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
var args26999 = [];
var len__19487__auto___27002 = arguments.length;
var i__19488__auto___27003 = (0);
while(true){
if((i__19488__auto___27003 < len__19487__auto___27002)){
args26999.push((arguments[i__19488__auto___27003]));

var G__27004 = (i__19488__auto___27003 + (1));
i__19488__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var G__27001 = args26999.length;
switch (G__27001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26999.length)].join('')));

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
var args27006 = [];
var len__19487__auto___27009 = arguments.length;
var i__19488__auto___27010 = (0);
while(true){
if((i__19488__auto___27010 < len__19487__auto___27009)){
args27006.push((arguments[i__19488__auto___27010]));

var G__27011 = (i__19488__auto___27010 + (1));
i__19488__auto___27010 = G__27011;
continue;
} else {
}
break;
}

var G__27008 = args27006.length;
switch (G__27008) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27006.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27013 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27013);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27013,ret){
return (function (){
return fn1.call(null,val_27013);
});})(val_27013,ret))
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
var args27014 = [];
var len__19487__auto___27017 = arguments.length;
var i__19488__auto___27018 = (0);
while(true){
if((i__19488__auto___27018 < len__19487__auto___27017)){
args27014.push((arguments[i__19488__auto___27018]));

var G__27019 = (i__19488__auto___27018 + (1));
i__19488__auto___27018 = G__27019;
continue;
} else {
}
break;
}

var G__27016 = args27014.length;
switch (G__27016) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27014.length)].join('')));

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
var n__19332__auto___27021 = n;
var x_27022 = (0);
while(true){
if((x_27022 < n__19332__auto___27021)){
(a[x_27022] = (0));

var G__27023 = (x_27022 + (1));
x_27022 = G__27023;
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

var G__27024 = (i + (1));
i = G__27024;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27028 = (function (alt_flag,flag,meta27029){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27029 = meta27029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27030,meta27029__$1){
var self__ = this;
var _27030__$1 = this;
return (new cljs.core.async.t_cljs$core$async27028(self__.alt_flag,self__.flag,meta27029__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27030){
var self__ = this;
var _27030__$1 = this;
return self__.meta27029;
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27029","meta27029",810428606,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27028";

cljs.core.async.t_cljs$core$async27028.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async27028");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27028 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27028(alt_flag__$1,flag__$1,meta27029){
return (new cljs.core.async.t_cljs$core$async27028(alt_flag__$1,flag__$1,meta27029));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27028(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27034 = (function (alt_handler,flag,cb,meta27035){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27035 = meta27035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27036,meta27035__$1){
var self__ = this;
var _27036__$1 = this;
return (new cljs.core.async.t_cljs$core$async27034(self__.alt_handler,self__.flag,self__.cb,meta27035__$1));
});

cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27036){
var self__ = this;
var _27036__$1 = this;
return self__.meta27035;
});

cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27035","meta27035",-536475109,null)], null);
});

cljs.core.async.t_cljs$core$async27034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27034";

cljs.core.async.t_cljs$core$async27034.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async27034");
});

cljs.core.async.__GT_t_cljs$core$async27034 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27034(alt_handler__$1,flag__$1,cb__$1,meta27035){
return (new cljs.core.async.t_cljs$core$async27034(alt_handler__$1,flag__$1,cb__$1,meta27035));
});

}

return (new cljs.core.async.t_cljs$core$async27034(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27037_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27038_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27038_SHARP_,port], null));
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
var G__27039 = (i + (1));
i = G__27039;
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
var len__19487__auto___27045 = arguments.length;
var i__19488__auto___27046 = (0);
while(true){
if((i__19488__auto___27046 < len__19487__auto___27045)){
args__19494__auto__.push((arguments[i__19488__auto___27046]));

var G__27047 = (i__19488__auto___27046 + (1));
i__19488__auto___27046 = G__27047;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27042){
var map__27043 = p__27042;
var map__27043__$1 = ((((!((map__27043 == null)))?((((map__27043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27043):map__27043);
var opts = map__27043__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27040){
var G__27041 = cljs.core.first.call(null,seq27040);
var seq27040__$1 = cljs.core.next.call(null,seq27040);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27041,seq27040__$1);
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
var args27048 = [];
var len__19487__auto___27098 = arguments.length;
var i__19488__auto___27099 = (0);
while(true){
if((i__19488__auto___27099 < len__19487__auto___27098)){
args27048.push((arguments[i__19488__auto___27099]));

var G__27100 = (i__19488__auto___27099 + (1));
i__19488__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var G__27050 = args27048.length;
switch (G__27050) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27048.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26935__auto___27102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___27102){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___27102){
return (function (state_27074){
var state_val_27075 = (state_27074[(1)]);
if((state_val_27075 === (7))){
var inst_27070 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27076_27103 = state_27074__$1;
(statearr_27076_27103[(2)] = inst_27070);

(statearr_27076_27103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (1))){
var state_27074__$1 = state_27074;
var statearr_27077_27104 = state_27074__$1;
(statearr_27077_27104[(2)] = null);

(statearr_27077_27104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (4))){
var inst_27053 = (state_27074[(7)]);
var inst_27053__$1 = (state_27074[(2)]);
var inst_27054 = (inst_27053__$1 == null);
var state_27074__$1 = (function (){var statearr_27078 = state_27074;
(statearr_27078[(7)] = inst_27053__$1);

return statearr_27078;
})();
if(cljs.core.truth_(inst_27054)){
var statearr_27079_27105 = state_27074__$1;
(statearr_27079_27105[(1)] = (5));

} else {
var statearr_27080_27106 = state_27074__$1;
(statearr_27080_27106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (13))){
var state_27074__$1 = state_27074;
var statearr_27081_27107 = state_27074__$1;
(statearr_27081_27107[(2)] = null);

(statearr_27081_27107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (6))){
var inst_27053 = (state_27074[(7)]);
var state_27074__$1 = state_27074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27074__$1,(11),to,inst_27053);
} else {
if((state_val_27075 === (3))){
var inst_27072 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27074__$1,inst_27072);
} else {
if((state_val_27075 === (12))){
var state_27074__$1 = state_27074;
var statearr_27082_27108 = state_27074__$1;
(statearr_27082_27108[(2)] = null);

(statearr_27082_27108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (2))){
var state_27074__$1 = state_27074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27074__$1,(4),from);
} else {
if((state_val_27075 === (11))){
var inst_27063 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
if(cljs.core.truth_(inst_27063)){
var statearr_27083_27109 = state_27074__$1;
(statearr_27083_27109[(1)] = (12));

} else {
var statearr_27084_27110 = state_27074__$1;
(statearr_27084_27110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (9))){
var state_27074__$1 = state_27074;
var statearr_27085_27111 = state_27074__$1;
(statearr_27085_27111[(2)] = null);

(statearr_27085_27111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (5))){
var state_27074__$1 = state_27074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27086_27112 = state_27074__$1;
(statearr_27086_27112[(1)] = (8));

} else {
var statearr_27087_27113 = state_27074__$1;
(statearr_27087_27113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (14))){
var inst_27068 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27088_27114 = state_27074__$1;
(statearr_27088_27114[(2)] = inst_27068);

(statearr_27088_27114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (10))){
var inst_27060 = (state_27074[(2)]);
var state_27074__$1 = state_27074;
var statearr_27089_27115 = state_27074__$1;
(statearr_27089_27115[(2)] = inst_27060);

(statearr_27089_27115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27075 === (8))){
var inst_27057 = cljs.core.async.close_BANG_.call(null,to);
var state_27074__$1 = state_27074;
var statearr_27090_27116 = state_27074__$1;
(statearr_27090_27116[(2)] = inst_27057);

(statearr_27090_27116[(1)] = (10));


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
});})(c__26935__auto___27102))
;
return ((function (switch__26823__auto__,c__26935__auto___27102){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27094 = [null,null,null,null,null,null,null,null];
(statearr_27094[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27094[(1)] = (1));

return statearr_27094;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27074){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27095){if((e27095 instanceof Object)){
var ex__26827__auto__ = e27095;
var statearr_27096_27117 = state_27074;
(statearr_27096_27117[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27118 = state_27074;
state_27074 = G__27118;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___27102))
})();
var state__26937__auto__ = (function (){var statearr_27097 = f__26936__auto__.call(null);
(statearr_27097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27102);

return statearr_27097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___27102))
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
return (function (p__27302){
var vec__27303 = p__27302;
var v = cljs.core.nth.call(null,vec__27303,(0),null);
var p = cljs.core.nth.call(null,vec__27303,(1),null);
var job = vec__27303;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26935__auto___27485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results){
return (function (state_27308){
var state_val_27309 = (state_27308[(1)]);
if((state_val_27309 === (1))){
var state_27308__$1 = state_27308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27308__$1,(2),res,v);
} else {
if((state_val_27309 === (2))){
var inst_27305 = (state_27308[(2)]);
var inst_27306 = cljs.core.async.close_BANG_.call(null,res);
var state_27308__$1 = (function (){var statearr_27310 = state_27308;
(statearr_27310[(7)] = inst_27305);

return statearr_27310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27308__$1,inst_27306);
} else {
return null;
}
}
});})(c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results))
;
return ((function (switch__26823__auto__,c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27314 = [null,null,null,null,null,null,null,null];
(statearr_27314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27314[(1)] = (1));

return statearr_27314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27308){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27315){if((e27315 instanceof Object)){
var ex__26827__auto__ = e27315;
var statearr_27316_27486 = state_27308;
(statearr_27316_27486[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27487 = state_27308;
state_27308 = G__27487;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results))
})();
var state__26937__auto__ = (function (){var statearr_27317 = f__26936__auto__.call(null);
(statearr_27317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27485);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___27485,res,vec__27303,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27318){
var vec__27319 = p__27318;
var v = cljs.core.nth.call(null,vec__27319,(0),null);
var p = cljs.core.nth.call(null,vec__27319,(1),null);
var job = vec__27319;
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
var n__19332__auto___27488 = n;
var __27489 = (0);
while(true){
if((__27489 < n__19332__auto___27488)){
var G__27320_27490 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27320_27490) {
case "compute":
var c__26935__auto___27492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27489,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (__27489,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (1))){
var state_27333__$1 = state_27333;
var statearr_27335_27493 = state_27333__$1;
(statearr_27335_27493[(2)] = null);

(statearr_27335_27493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (2))){
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27333__$1,(4),jobs);
} else {
if((state_val_27334 === (3))){
var inst_27331 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27333__$1,inst_27331);
} else {
if((state_val_27334 === (4))){
var inst_27323 = (state_27333[(2)]);
var inst_27324 = process.call(null,inst_27323);
var state_27333__$1 = state_27333;
if(cljs.core.truth_(inst_27324)){
var statearr_27336_27494 = state_27333__$1;
(statearr_27336_27494[(1)] = (5));

} else {
var statearr_27337_27495 = state_27333__$1;
(statearr_27337_27495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (5))){
var state_27333__$1 = state_27333;
var statearr_27338_27496 = state_27333__$1;
(statearr_27338_27496[(2)] = null);

(statearr_27338_27496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (6))){
var state_27333__$1 = state_27333;
var statearr_27339_27497 = state_27333__$1;
(statearr_27339_27497[(2)] = null);

(statearr_27339_27497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (7))){
var inst_27329 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27340_27498 = state_27333__$1;
(statearr_27340_27498[(2)] = inst_27329);

(statearr_27340_27498[(1)] = (3));


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
});})(__27489,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
;
return ((function (__27489,switch__26823__auto__,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27344 = [null,null,null,null,null,null,null];
(statearr_27344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27344[(1)] = (1));

return statearr_27344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27333){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27345){if((e27345 instanceof Object)){
var ex__26827__auto__ = e27345;
var statearr_27346_27499 = state_27333;
(statearr_27346_27499[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27500 = state_27333;
state_27333 = G__27500;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(__27489,switch__26823__auto__,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
})();
var state__26937__auto__ = (function (){var statearr_27347 = f__26936__auto__.call(null);
(statearr_27347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27492);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(__27489,c__26935__auto___27492,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
);


break;
case "async":
var c__26935__auto___27501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27489,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (__27489,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function (state_27360){
var state_val_27361 = (state_27360[(1)]);
if((state_val_27361 === (1))){
var state_27360__$1 = state_27360;
var statearr_27362_27502 = state_27360__$1;
(statearr_27362_27502[(2)] = null);

(statearr_27362_27502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (2))){
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27360__$1,(4),jobs);
} else {
if((state_val_27361 === (3))){
var inst_27358 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27360__$1,inst_27358);
} else {
if((state_val_27361 === (4))){
var inst_27350 = (state_27360[(2)]);
var inst_27351 = async.call(null,inst_27350);
var state_27360__$1 = state_27360;
if(cljs.core.truth_(inst_27351)){
var statearr_27363_27503 = state_27360__$1;
(statearr_27363_27503[(1)] = (5));

} else {
var statearr_27364_27504 = state_27360__$1;
(statearr_27364_27504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (5))){
var state_27360__$1 = state_27360;
var statearr_27365_27505 = state_27360__$1;
(statearr_27365_27505[(2)] = null);

(statearr_27365_27505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (6))){
var state_27360__$1 = state_27360;
var statearr_27366_27506 = state_27360__$1;
(statearr_27366_27506[(2)] = null);

(statearr_27366_27506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27361 === (7))){
var inst_27356 = (state_27360[(2)]);
var state_27360__$1 = state_27360;
var statearr_27367_27507 = state_27360__$1;
(statearr_27367_27507[(2)] = inst_27356);

(statearr_27367_27507[(1)] = (3));


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
});})(__27489,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
;
return ((function (__27489,switch__26823__auto__,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27371 = [null,null,null,null,null,null,null];
(statearr_27371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27371[(1)] = (1));

return statearr_27371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27360){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27372){if((e27372 instanceof Object)){
var ex__26827__auto__ = e27372;
var statearr_27373_27508 = state_27360;
(statearr_27373_27508[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27509 = state_27360;
state_27360 = G__27509;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(__27489,switch__26823__auto__,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
})();
var state__26937__auto__ = (function (){var statearr_27374 = f__26936__auto__.call(null);
(statearr_27374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27501);

return statearr_27374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(__27489,c__26935__auto___27501,G__27320_27490,n__19332__auto___27488,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27510 = (__27489 + (1));
__27489 = G__27510;
continue;
} else {
}
break;
}

var c__26935__auto___27511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___27511,jobs,results,process,async){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___27511,jobs,results,process,async){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (1))){
var state_27396__$1 = state_27396;
var statearr_27398_27512 = state_27396__$1;
(statearr_27398_27512[(2)] = null);

(statearr_27398_27512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),from);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (4))){
var inst_27377 = (state_27396[(7)]);
var inst_27377__$1 = (state_27396[(2)]);
var inst_27378 = (inst_27377__$1 == null);
var state_27396__$1 = (function (){var statearr_27399 = state_27396;
(statearr_27399[(7)] = inst_27377__$1);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27378)){
var statearr_27400_27513 = state_27396__$1;
(statearr_27400_27513[(1)] = (5));

} else {
var statearr_27401_27514 = state_27396__$1;
(statearr_27401_27514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var inst_27380 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27396__$1 = state_27396;
var statearr_27402_27515 = state_27396__$1;
(statearr_27402_27515[(2)] = inst_27380);

(statearr_27402_27515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var inst_27382 = (state_27396[(8)]);
var inst_27377 = (state_27396[(7)]);
var inst_27382__$1 = cljs.core.async.chan.call(null,(1));
var inst_27383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27384 = [inst_27377,inst_27382__$1];
var inst_27385 = (new cljs.core.PersistentVector(null,2,(5),inst_27383,inst_27384,null));
var state_27396__$1 = (function (){var statearr_27403 = state_27396;
(statearr_27403[(8)] = inst_27382__$1);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27396__$1,(8),jobs,inst_27385);
} else {
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27404_27516 = state_27396__$1;
(statearr_27404_27516[(2)] = inst_27392);

(statearr_27404_27516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (8))){
var inst_27382 = (state_27396[(8)]);
var inst_27387 = (state_27396[(2)]);
var state_27396__$1 = (function (){var statearr_27405 = state_27396;
(statearr_27405[(9)] = inst_27387);

return statearr_27405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27396__$1,(9),results,inst_27382);
} else {
if((state_val_27397 === (9))){
var inst_27389 = (state_27396[(2)]);
var state_27396__$1 = (function (){var statearr_27406 = state_27396;
(statearr_27406[(10)] = inst_27389);

return statearr_27406;
})();
var statearr_27407_27517 = state_27396__$1;
(statearr_27407_27517[(2)] = null);

(statearr_27407_27517[(1)] = (2));


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
});})(c__26935__auto___27511,jobs,results,process,async))
;
return ((function (switch__26823__auto__,c__26935__auto___27511,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27411[(1)] = (1));

return statearr_27411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27396){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27412){if((e27412 instanceof Object)){
var ex__26827__auto__ = e27412;
var statearr_27413_27518 = state_27396;
(statearr_27413_27518[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27519 = state_27396;
state_27396 = G__27519;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___27511,jobs,results,process,async))
})();
var state__26937__auto__ = (function (){var statearr_27414 = f__26936__auto__.call(null);
(statearr_27414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27511);

return statearr_27414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___27511,jobs,results,process,async))
);


var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__,jobs,results,process,async){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__,jobs,results,process,async){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27520 = state_27452__$1;
(statearr_27454_27520[(2)] = inst_27448);

(statearr_27454_27520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (20))){
var state_27452__$1 = state_27452;
var statearr_27455_27521 = state_27452__$1;
(statearr_27455_27521[(2)] = null);

(statearr_27455_27521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (1))){
var state_27452__$1 = state_27452;
var statearr_27456_27522 = state_27452__$1;
(statearr_27456_27522[(2)] = null);

(statearr_27456_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27417 = (state_27452[(7)]);
var inst_27417__$1 = (state_27452[(2)]);
var inst_27418 = (inst_27417__$1 == null);
var state_27452__$1 = (function (){var statearr_27457 = state_27452;
(statearr_27457[(7)] = inst_27417__$1);

return statearr_27457;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27458_27523 = state_27452__$1;
(statearr_27458_27523[(1)] = (5));

} else {
var statearr_27459_27524 = state_27452__$1;
(statearr_27459_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (15))){
var inst_27430 = (state_27452[(8)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,(18),to,inst_27430);
} else {
if((state_val_27453 === (21))){
var inst_27443 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27460_27525 = state_27452__$1;
(statearr_27460_27525[(2)] = inst_27443);

(statearr_27460_27525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (13))){
var inst_27445 = (state_27452[(2)]);
var state_27452__$1 = (function (){var statearr_27461 = state_27452;
(statearr_27461[(9)] = inst_27445);

return statearr_27461;
})();
var statearr_27462_27526 = state_27452__$1;
(statearr_27462_27526[(2)] = null);

(statearr_27462_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var inst_27417 = (state_27452[(7)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(11),inst_27417);
} else {
if((state_val_27453 === (17))){
var inst_27438 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27438)){
var statearr_27463_27527 = state_27452__$1;
(statearr_27463_27527[(1)] = (19));

} else {
var statearr_27464_27528 = state_27452__$1;
(statearr_27464_27528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (12))){
var inst_27427 = (state_27452[(10)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(14),inst_27427);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),results);
} else {
if((state_val_27453 === (19))){
var state_27452__$1 = state_27452;
var statearr_27465_27529 = state_27452__$1;
(statearr_27465_27529[(2)] = null);

(statearr_27465_27529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (11))){
var inst_27427 = (state_27452[(2)]);
var state_27452__$1 = (function (){var statearr_27466 = state_27452;
(statearr_27466[(10)] = inst_27427);

return statearr_27466;
})();
var statearr_27467_27530 = state_27452__$1;
(statearr_27467_27530[(2)] = null);

(statearr_27467_27530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (9))){
var state_27452__$1 = state_27452;
var statearr_27468_27531 = state_27452__$1;
(statearr_27468_27531[(2)] = null);

(statearr_27468_27531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (5))){
var state_27452__$1 = state_27452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27469_27532 = state_27452__$1;
(statearr_27469_27532[(1)] = (8));

} else {
var statearr_27470_27533 = state_27452__$1;
(statearr_27470_27533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (14))){
var inst_27430 = (state_27452[(8)]);
var inst_27432 = (state_27452[(11)]);
var inst_27430__$1 = (state_27452[(2)]);
var inst_27431 = (inst_27430__$1 == null);
var inst_27432__$1 = cljs.core.not.call(null,inst_27431);
var state_27452__$1 = (function (){var statearr_27471 = state_27452;
(statearr_27471[(8)] = inst_27430__$1);

(statearr_27471[(11)] = inst_27432__$1);

return statearr_27471;
})();
if(inst_27432__$1){
var statearr_27472_27534 = state_27452__$1;
(statearr_27472_27534[(1)] = (15));

} else {
var statearr_27473_27535 = state_27452__$1;
(statearr_27473_27535[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (16))){
var inst_27432 = (state_27452[(11)]);
var state_27452__$1 = state_27452;
var statearr_27474_27536 = state_27452__$1;
(statearr_27474_27536[(2)] = inst_27432);

(statearr_27474_27536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (10))){
var inst_27424 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27475_27537 = state_27452__$1;
(statearr_27475_27537[(2)] = inst_27424);

(statearr_27475_27537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (18))){
var inst_27435 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27476_27538 = state_27452__$1;
(statearr_27476_27538[(2)] = inst_27435);

(statearr_27476_27538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (8))){
var inst_27421 = cljs.core.async.close_BANG_.call(null,to);
var state_27452__$1 = state_27452;
var statearr_27477_27539 = state_27452__$1;
(statearr_27477_27539[(2)] = inst_27421);

(statearr_27477_27539[(1)] = (10));


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
});})(c__26935__auto__,jobs,results,process,async))
;
return ((function (switch__26823__auto__,c__26935__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27452){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__26827__auto__ = e27482;
var statearr_27483_27540 = state_27452;
(statearr_27483_27540[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27541 = state_27452;
state_27452 = G__27541;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__,jobs,results,process,async))
})();
var state__26937__auto__ = (function (){var statearr_27484 = f__26936__auto__.call(null);
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__,jobs,results,process,async))
);

return c__26935__auto__;
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
var args27542 = [];
var len__19487__auto___27545 = arguments.length;
var i__19488__auto___27546 = (0);
while(true){
if((i__19488__auto___27546 < len__19487__auto___27545)){
args27542.push((arguments[i__19488__auto___27546]));

var G__27547 = (i__19488__auto___27546 + (1));
i__19488__auto___27546 = G__27547;
continue;
} else {
}
break;
}

var G__27544 = args27542.length;
switch (G__27544) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27542.length)].join('')));

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
var args27549 = [];
var len__19487__auto___27552 = arguments.length;
var i__19488__auto___27553 = (0);
while(true){
if((i__19488__auto___27553 < len__19487__auto___27552)){
args27549.push((arguments[i__19488__auto___27553]));

var G__27554 = (i__19488__auto___27553 + (1));
i__19488__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var G__27551 = args27549.length;
switch (G__27551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27549.length)].join('')));

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
var args27556 = [];
var len__19487__auto___27609 = arguments.length;
var i__19488__auto___27610 = (0);
while(true){
if((i__19488__auto___27610 < len__19487__auto___27609)){
args27556.push((arguments[i__19488__auto___27610]));

var G__27611 = (i__19488__auto___27610 + (1));
i__19488__auto___27610 = G__27611;
continue;
} else {
}
break;
}

var G__27558 = args27556.length;
switch (G__27558) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27556.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26935__auto___27613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___27613,tc,fc){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___27613,tc,fc){
return (function (state_27584){
var state_val_27585 = (state_27584[(1)]);
if((state_val_27585 === (7))){
var inst_27580 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27586_27614 = state_27584__$1;
(statearr_27586_27614[(2)] = inst_27580);

(statearr_27586_27614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (1))){
var state_27584__$1 = state_27584;
var statearr_27587_27615 = state_27584__$1;
(statearr_27587_27615[(2)] = null);

(statearr_27587_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (4))){
var inst_27561 = (state_27584[(7)]);
var inst_27561__$1 = (state_27584[(2)]);
var inst_27562 = (inst_27561__$1 == null);
var state_27584__$1 = (function (){var statearr_27588 = state_27584;
(statearr_27588[(7)] = inst_27561__$1);

return statearr_27588;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27589_27616 = state_27584__$1;
(statearr_27589_27616[(1)] = (5));

} else {
var statearr_27590_27617 = state_27584__$1;
(statearr_27590_27617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (13))){
var state_27584__$1 = state_27584;
var statearr_27591_27618 = state_27584__$1;
(statearr_27591_27618[(2)] = null);

(statearr_27591_27618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (6))){
var inst_27561 = (state_27584[(7)]);
var inst_27567 = p.call(null,inst_27561);
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27567)){
var statearr_27592_27619 = state_27584__$1;
(statearr_27592_27619[(1)] = (9));

} else {
var statearr_27593_27620 = state_27584__$1;
(statearr_27593_27620[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (3))){
var inst_27582 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27584__$1,inst_27582);
} else {
if((state_val_27585 === (12))){
var state_27584__$1 = state_27584;
var statearr_27594_27621 = state_27584__$1;
(statearr_27594_27621[(2)] = null);

(statearr_27594_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (2))){
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27584__$1,(4),ch);
} else {
if((state_val_27585 === (11))){
var inst_27561 = (state_27584[(7)]);
var inst_27571 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27584__$1,(8),inst_27571,inst_27561);
} else {
if((state_val_27585 === (9))){
var state_27584__$1 = state_27584;
var statearr_27595_27622 = state_27584__$1;
(statearr_27595_27622[(2)] = tc);

(statearr_27595_27622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (5))){
var inst_27564 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27565 = cljs.core.async.close_BANG_.call(null,fc);
var state_27584__$1 = (function (){var statearr_27596 = state_27584;
(statearr_27596[(8)] = inst_27564);

return statearr_27596;
})();
var statearr_27597_27623 = state_27584__$1;
(statearr_27597_27623[(2)] = inst_27565);

(statearr_27597_27623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (14))){
var inst_27578 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27598_27624 = state_27584__$1;
(statearr_27598_27624[(2)] = inst_27578);

(statearr_27598_27624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (10))){
var state_27584__$1 = state_27584;
var statearr_27599_27625 = state_27584__$1;
(statearr_27599_27625[(2)] = fc);

(statearr_27599_27625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (8))){
var inst_27573 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27573)){
var statearr_27600_27626 = state_27584__$1;
(statearr_27600_27626[(1)] = (12));

} else {
var statearr_27601_27627 = state_27584__$1;
(statearr_27601_27627[(1)] = (13));

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
});})(c__26935__auto___27613,tc,fc))
;
return ((function (switch__26823__auto__,c__26935__auto___27613,tc,fc){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27605 = [null,null,null,null,null,null,null,null,null];
(statearr_27605[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27605[(1)] = (1));

return statearr_27605;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27584){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27606){if((e27606 instanceof Object)){
var ex__26827__auto__ = e27606;
var statearr_27607_27628 = state_27584;
(statearr_27607_27628[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27629 = state_27584;
state_27584 = G__27629;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___27613,tc,fc))
})();
var state__26937__auto__ = (function (){var statearr_27608 = f__26936__auto__.call(null);
(statearr_27608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___27613);

return statearr_27608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___27613,tc,fc))
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
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_27693){
var state_val_27694 = (state_27693[(1)]);
if((state_val_27694 === (7))){
var inst_27689 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
var statearr_27695_27716 = state_27693__$1;
(statearr_27695_27716[(2)] = inst_27689);

(statearr_27695_27716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (1))){
var inst_27673 = init;
var state_27693__$1 = (function (){var statearr_27696 = state_27693;
(statearr_27696[(7)] = inst_27673);

return statearr_27696;
})();
var statearr_27697_27717 = state_27693__$1;
(statearr_27697_27717[(2)] = null);

(statearr_27697_27717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (4))){
var inst_27676 = (state_27693[(8)]);
var inst_27676__$1 = (state_27693[(2)]);
var inst_27677 = (inst_27676__$1 == null);
var state_27693__$1 = (function (){var statearr_27698 = state_27693;
(statearr_27698[(8)] = inst_27676__$1);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27699_27718 = state_27693__$1;
(statearr_27699_27718[(1)] = (5));

} else {
var statearr_27700_27719 = state_27693__$1;
(statearr_27700_27719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (6))){
var inst_27673 = (state_27693[(7)]);
var inst_27676 = (state_27693[(8)]);
var inst_27680 = (state_27693[(9)]);
var inst_27680__$1 = f.call(null,inst_27673,inst_27676);
var inst_27681 = cljs.core.reduced_QMARK_.call(null,inst_27680__$1);
var state_27693__$1 = (function (){var statearr_27701 = state_27693;
(statearr_27701[(9)] = inst_27680__$1);

return statearr_27701;
})();
if(inst_27681){
var statearr_27702_27720 = state_27693__$1;
(statearr_27702_27720[(1)] = (8));

} else {
var statearr_27703_27721 = state_27693__$1;
(statearr_27703_27721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (3))){
var inst_27691 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27693__$1,inst_27691);
} else {
if((state_val_27694 === (2))){
var state_27693__$1 = state_27693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27693__$1,(4),ch);
} else {
if((state_val_27694 === (9))){
var inst_27680 = (state_27693[(9)]);
var inst_27673 = inst_27680;
var state_27693__$1 = (function (){var statearr_27704 = state_27693;
(statearr_27704[(7)] = inst_27673);

return statearr_27704;
})();
var statearr_27705_27722 = state_27693__$1;
(statearr_27705_27722[(2)] = null);

(statearr_27705_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (5))){
var inst_27673 = (state_27693[(7)]);
var state_27693__$1 = state_27693;
var statearr_27706_27723 = state_27693__$1;
(statearr_27706_27723[(2)] = inst_27673);

(statearr_27706_27723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (10))){
var inst_27687 = (state_27693[(2)]);
var state_27693__$1 = state_27693;
var statearr_27707_27724 = state_27693__$1;
(statearr_27707_27724[(2)] = inst_27687);

(statearr_27707_27724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27694 === (8))){
var inst_27680 = (state_27693[(9)]);
var inst_27683 = cljs.core.deref.call(null,inst_27680);
var state_27693__$1 = state_27693;
var statearr_27708_27725 = state_27693__$1;
(statearr_27708_27725[(2)] = inst_27683);

(statearr_27708_27725[(1)] = (10));


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
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26824__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26824__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27712[(0)] = cljs$core$async$reduce_$_state_machine__26824__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var cljs$core$async$reduce_$_state_machine__26824__auto____1 = (function (state_27693){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27713){if((e27713 instanceof Object)){
var ex__26827__auto__ = e27713;
var statearr_27714_27726 = state_27693;
(statearr_27714_27726[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27727 = state_27693;
state_27693 = G__27727;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26824__auto__ = function(state_27693){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26824__auto____1.call(this,state_27693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26824__auto____0;
cljs$core$async$reduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26824__auto____1;
return cljs$core$async$reduce_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_27715 = f__26936__auto__.call(null);
(statearr_27715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
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
var args27728 = [];
var len__19487__auto___27780 = arguments.length;
var i__19488__auto___27781 = (0);
while(true){
if((i__19488__auto___27781 < len__19487__auto___27780)){
args27728.push((arguments[i__19488__auto___27781]));

var G__27782 = (i__19488__auto___27781 + (1));
i__19488__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var G__27730 = args27728.length;
switch (G__27730) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27728.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (7))){
var inst_27737 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27757_27784 = state_27755__$1;
(statearr_27757_27784[(2)] = inst_27737);

(statearr_27757_27784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (1))){
var inst_27731 = cljs.core.seq.call(null,coll);
var inst_27732 = inst_27731;
var state_27755__$1 = (function (){var statearr_27758 = state_27755;
(statearr_27758[(7)] = inst_27732);

return statearr_27758;
})();
var statearr_27759_27785 = state_27755__$1;
(statearr_27759_27785[(2)] = null);

(statearr_27759_27785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (4))){
var inst_27732 = (state_27755[(7)]);
var inst_27735 = cljs.core.first.call(null,inst_27732);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,(7),ch,inst_27735);
} else {
if((state_val_27756 === (13))){
var inst_27749 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27760_27786 = state_27755__$1;
(statearr_27760_27786[(2)] = inst_27749);

(statearr_27760_27786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (6))){
var inst_27740 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27740)){
var statearr_27761_27787 = state_27755__$1;
(statearr_27761_27787[(1)] = (8));

} else {
var statearr_27762_27788 = state_27755__$1;
(statearr_27762_27788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (3))){
var inst_27753 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
if((state_val_27756 === (12))){
var state_27755__$1 = state_27755;
var statearr_27763_27789 = state_27755__$1;
(statearr_27763_27789[(2)] = null);

(statearr_27763_27789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (2))){
var inst_27732 = (state_27755[(7)]);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27732)){
var statearr_27764_27790 = state_27755__$1;
(statearr_27764_27790[(1)] = (4));

} else {
var statearr_27765_27791 = state_27755__$1;
(statearr_27765_27791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (11))){
var inst_27746 = cljs.core.async.close_BANG_.call(null,ch);
var state_27755__$1 = state_27755;
var statearr_27766_27792 = state_27755__$1;
(statearr_27766_27792[(2)] = inst_27746);

(statearr_27766_27792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (9))){
var state_27755__$1 = state_27755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27767_27793 = state_27755__$1;
(statearr_27767_27793[(1)] = (11));

} else {
var statearr_27768_27794 = state_27755__$1;
(statearr_27768_27794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (5))){
var inst_27732 = (state_27755[(7)]);
var state_27755__$1 = state_27755;
var statearr_27769_27795 = state_27755__$1;
(statearr_27769_27795[(2)] = inst_27732);

(statearr_27769_27795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (10))){
var inst_27751 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27770_27796 = state_27755__$1;
(statearr_27770_27796[(2)] = inst_27751);

(statearr_27770_27796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (8))){
var inst_27732 = (state_27755[(7)]);
var inst_27742 = cljs.core.next.call(null,inst_27732);
var inst_27732__$1 = inst_27742;
var state_27755__$1 = (function (){var statearr_27771 = state_27755;
(statearr_27771[(7)] = inst_27732__$1);

return statearr_27771;
})();
var statearr_27772_27797 = state_27755__$1;
(statearr_27772_27797[(2)] = null);

(statearr_27772_27797[(1)] = (2));


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
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27776 = [null,null,null,null,null,null,null,null];
(statearr_27776[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27776[(1)] = (1));

return statearr_27776;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27755){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27777){if((e27777 instanceof Object)){
var ex__26827__auto__ = e27777;
var statearr_27778_27798 = state_27755;
(statearr_27778_27798[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27799 = state_27755;
state_27755 = G__27799;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_27779 = f__26936__auto__.call(null);
(statearr_27779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_27779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28021 = (function (mult,ch,cs,meta28022){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28022 = meta28022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28023,meta28022__$1){
var self__ = this;
var _28023__$1 = this;
return (new cljs.core.async.t_cljs$core$async28021(self__.mult,self__.ch,self__.cs,meta28022__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28023){
var self__ = this;
var _28023__$1 = this;
return self__.meta28022;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28022","meta28022",1277356855,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28021";

cljs.core.async.t_cljs$core$async28021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28021");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28021(mult__$1,ch__$1,cs__$1,meta28022){
return (new cljs.core.async.t_cljs$core$async28021(mult__$1,ch__$1,cs__$1,meta28022));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28021(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26935__auto___28242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___28242,cs,m,dchan,dctr,done){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___28242,cs,m,dchan,dctr,done){
return (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (7))){
var inst_28150 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28156_28243 = state_28154__$1;
(statearr_28156_28243[(2)] = inst_28150);

(statearr_28156_28243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (20))){
var inst_28055 = (state_28154[(7)]);
var inst_28065 = cljs.core.first.call(null,inst_28055);
var inst_28066 = cljs.core.nth.call(null,inst_28065,(0),null);
var inst_28067 = cljs.core.nth.call(null,inst_28065,(1),null);
var state_28154__$1 = (function (){var statearr_28157 = state_28154;
(statearr_28157[(8)] = inst_28066);

return statearr_28157;
})();
if(cljs.core.truth_(inst_28067)){
var statearr_28158_28244 = state_28154__$1;
(statearr_28158_28244[(1)] = (22));

} else {
var statearr_28159_28245 = state_28154__$1;
(statearr_28159_28245[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (27))){
var inst_28102 = (state_28154[(9)]);
var inst_28097 = (state_28154[(10)]);
var inst_28026 = (state_28154[(11)]);
var inst_28095 = (state_28154[(12)]);
var inst_28102__$1 = cljs.core._nth.call(null,inst_28095,inst_28097);
var inst_28103 = cljs.core.async.put_BANG_.call(null,inst_28102__$1,inst_28026,done);
var state_28154__$1 = (function (){var statearr_28160 = state_28154;
(statearr_28160[(9)] = inst_28102__$1);

return statearr_28160;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28161_28246 = state_28154__$1;
(statearr_28161_28246[(1)] = (30));

} else {
var statearr_28162_28247 = state_28154__$1;
(statearr_28162_28247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (1))){
var state_28154__$1 = state_28154;
var statearr_28163_28248 = state_28154__$1;
(statearr_28163_28248[(2)] = null);

(statearr_28163_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (24))){
var inst_28055 = (state_28154[(7)]);
var inst_28072 = (state_28154[(2)]);
var inst_28073 = cljs.core.next.call(null,inst_28055);
var inst_28035 = inst_28073;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28154__$1 = (function (){var statearr_28164 = state_28154;
(statearr_28164[(13)] = inst_28038);

(statearr_28164[(14)] = inst_28037);

(statearr_28164[(15)] = inst_28036);

(statearr_28164[(16)] = inst_28035);

(statearr_28164[(17)] = inst_28072);

return statearr_28164;
})();
var statearr_28165_28249 = state_28154__$1;
(statearr_28165_28249[(2)] = null);

(statearr_28165_28249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (39))){
var state_28154__$1 = state_28154;
var statearr_28169_28250 = state_28154__$1;
(statearr_28169_28250[(2)] = null);

(statearr_28169_28250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (4))){
var inst_28026 = (state_28154[(11)]);
var inst_28026__$1 = (state_28154[(2)]);
var inst_28027 = (inst_28026__$1 == null);
var state_28154__$1 = (function (){var statearr_28170 = state_28154;
(statearr_28170[(11)] = inst_28026__$1);

return statearr_28170;
})();
if(cljs.core.truth_(inst_28027)){
var statearr_28171_28251 = state_28154__$1;
(statearr_28171_28251[(1)] = (5));

} else {
var statearr_28172_28252 = state_28154__$1;
(statearr_28172_28252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (15))){
var inst_28038 = (state_28154[(13)]);
var inst_28037 = (state_28154[(14)]);
var inst_28036 = (state_28154[(15)]);
var inst_28035 = (state_28154[(16)]);
var inst_28051 = (state_28154[(2)]);
var inst_28052 = (inst_28038 + (1));
var tmp28166 = inst_28037;
var tmp28167 = inst_28036;
var tmp28168 = inst_28035;
var inst_28035__$1 = tmp28168;
var inst_28036__$1 = tmp28167;
var inst_28037__$1 = tmp28166;
var inst_28038__$1 = inst_28052;
var state_28154__$1 = (function (){var statearr_28173 = state_28154;
(statearr_28173[(13)] = inst_28038__$1);

(statearr_28173[(14)] = inst_28037__$1);

(statearr_28173[(15)] = inst_28036__$1);

(statearr_28173[(16)] = inst_28035__$1);

(statearr_28173[(18)] = inst_28051);

return statearr_28173;
})();
var statearr_28174_28253 = state_28154__$1;
(statearr_28174_28253[(2)] = null);

(statearr_28174_28253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (21))){
var inst_28076 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28178_28254 = state_28154__$1;
(statearr_28178_28254[(2)] = inst_28076);

(statearr_28178_28254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (31))){
var inst_28102 = (state_28154[(9)]);
var inst_28106 = done.call(null,null);
var inst_28107 = cljs.core.async.untap_STAR_.call(null,m,inst_28102);
var state_28154__$1 = (function (){var statearr_28179 = state_28154;
(statearr_28179[(19)] = inst_28106);

return statearr_28179;
})();
var statearr_28180_28255 = state_28154__$1;
(statearr_28180_28255[(2)] = inst_28107);

(statearr_28180_28255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (32))){
var inst_28097 = (state_28154[(10)]);
var inst_28094 = (state_28154[(20)]);
var inst_28095 = (state_28154[(12)]);
var inst_28096 = (state_28154[(21)]);
var inst_28109 = (state_28154[(2)]);
var inst_28110 = (inst_28097 + (1));
var tmp28175 = inst_28094;
var tmp28176 = inst_28095;
var tmp28177 = inst_28096;
var inst_28094__$1 = tmp28175;
var inst_28095__$1 = tmp28176;
var inst_28096__$1 = tmp28177;
var inst_28097__$1 = inst_28110;
var state_28154__$1 = (function (){var statearr_28181 = state_28154;
(statearr_28181[(10)] = inst_28097__$1);

(statearr_28181[(20)] = inst_28094__$1);

(statearr_28181[(12)] = inst_28095__$1);

(statearr_28181[(22)] = inst_28109);

(statearr_28181[(21)] = inst_28096__$1);

return statearr_28181;
})();
var statearr_28182_28256 = state_28154__$1;
(statearr_28182_28256[(2)] = null);

(statearr_28182_28256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (40))){
var inst_28122 = (state_28154[(23)]);
var inst_28126 = done.call(null,null);
var inst_28127 = cljs.core.async.untap_STAR_.call(null,m,inst_28122);
var state_28154__$1 = (function (){var statearr_28183 = state_28154;
(statearr_28183[(24)] = inst_28126);

return statearr_28183;
})();
var statearr_28184_28257 = state_28154__$1;
(statearr_28184_28257[(2)] = inst_28127);

(statearr_28184_28257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (33))){
var inst_28113 = (state_28154[(25)]);
var inst_28115 = cljs.core.chunked_seq_QMARK_.call(null,inst_28113);
var state_28154__$1 = state_28154;
if(inst_28115){
var statearr_28185_28258 = state_28154__$1;
(statearr_28185_28258[(1)] = (36));

} else {
var statearr_28186_28259 = state_28154__$1;
(statearr_28186_28259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (13))){
var inst_28045 = (state_28154[(26)]);
var inst_28048 = cljs.core.async.close_BANG_.call(null,inst_28045);
var state_28154__$1 = state_28154;
var statearr_28187_28260 = state_28154__$1;
(statearr_28187_28260[(2)] = inst_28048);

(statearr_28187_28260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (22))){
var inst_28066 = (state_28154[(8)]);
var inst_28069 = cljs.core.async.close_BANG_.call(null,inst_28066);
var state_28154__$1 = state_28154;
var statearr_28188_28261 = state_28154__$1;
(statearr_28188_28261[(2)] = inst_28069);

(statearr_28188_28261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (36))){
var inst_28113 = (state_28154[(25)]);
var inst_28117 = cljs.core.chunk_first.call(null,inst_28113);
var inst_28118 = cljs.core.chunk_rest.call(null,inst_28113);
var inst_28119 = cljs.core.count.call(null,inst_28117);
var inst_28094 = inst_28118;
var inst_28095 = inst_28117;
var inst_28096 = inst_28119;
var inst_28097 = (0);
var state_28154__$1 = (function (){var statearr_28189 = state_28154;
(statearr_28189[(10)] = inst_28097);

(statearr_28189[(20)] = inst_28094);

(statearr_28189[(12)] = inst_28095);

(statearr_28189[(21)] = inst_28096);

return statearr_28189;
})();
var statearr_28190_28262 = state_28154__$1;
(statearr_28190_28262[(2)] = null);

(statearr_28190_28262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (41))){
var inst_28113 = (state_28154[(25)]);
var inst_28129 = (state_28154[(2)]);
var inst_28130 = cljs.core.next.call(null,inst_28113);
var inst_28094 = inst_28130;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28154__$1 = (function (){var statearr_28191 = state_28154;
(statearr_28191[(10)] = inst_28097);

(statearr_28191[(27)] = inst_28129);

(statearr_28191[(20)] = inst_28094);

(statearr_28191[(12)] = inst_28095);

(statearr_28191[(21)] = inst_28096);

return statearr_28191;
})();
var statearr_28192_28263 = state_28154__$1;
(statearr_28192_28263[(2)] = null);

(statearr_28192_28263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (43))){
var state_28154__$1 = state_28154;
var statearr_28193_28264 = state_28154__$1;
(statearr_28193_28264[(2)] = null);

(statearr_28193_28264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (29))){
var inst_28138 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28194_28265 = state_28154__$1;
(statearr_28194_28265[(2)] = inst_28138);

(statearr_28194_28265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (44))){
var inst_28147 = (state_28154[(2)]);
var state_28154__$1 = (function (){var statearr_28195 = state_28154;
(statearr_28195[(28)] = inst_28147);

return statearr_28195;
})();
var statearr_28196_28266 = state_28154__$1;
(statearr_28196_28266[(2)] = null);

(statearr_28196_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (6))){
var inst_28086 = (state_28154[(29)]);
var inst_28085 = cljs.core.deref.call(null,cs);
var inst_28086__$1 = cljs.core.keys.call(null,inst_28085);
var inst_28087 = cljs.core.count.call(null,inst_28086__$1);
var inst_28088 = cljs.core.reset_BANG_.call(null,dctr,inst_28087);
var inst_28093 = cljs.core.seq.call(null,inst_28086__$1);
var inst_28094 = inst_28093;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28154__$1 = (function (){var statearr_28197 = state_28154;
(statearr_28197[(30)] = inst_28088);

(statearr_28197[(10)] = inst_28097);

(statearr_28197[(29)] = inst_28086__$1);

(statearr_28197[(20)] = inst_28094);

(statearr_28197[(12)] = inst_28095);

(statearr_28197[(21)] = inst_28096);

return statearr_28197;
})();
var statearr_28198_28267 = state_28154__$1;
(statearr_28198_28267[(2)] = null);

(statearr_28198_28267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (28))){
var inst_28113 = (state_28154[(25)]);
var inst_28094 = (state_28154[(20)]);
var inst_28113__$1 = cljs.core.seq.call(null,inst_28094);
var state_28154__$1 = (function (){var statearr_28199 = state_28154;
(statearr_28199[(25)] = inst_28113__$1);

return statearr_28199;
})();
if(inst_28113__$1){
var statearr_28200_28268 = state_28154__$1;
(statearr_28200_28268[(1)] = (33));

} else {
var statearr_28201_28269 = state_28154__$1;
(statearr_28201_28269[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (25))){
var inst_28097 = (state_28154[(10)]);
var inst_28096 = (state_28154[(21)]);
var inst_28099 = (inst_28097 < inst_28096);
var inst_28100 = inst_28099;
var state_28154__$1 = state_28154;
if(cljs.core.truth_(inst_28100)){
var statearr_28202_28270 = state_28154__$1;
(statearr_28202_28270[(1)] = (27));

} else {
var statearr_28203_28271 = state_28154__$1;
(statearr_28203_28271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (34))){
var state_28154__$1 = state_28154;
var statearr_28204_28272 = state_28154__$1;
(statearr_28204_28272[(2)] = null);

(statearr_28204_28272[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (17))){
var state_28154__$1 = state_28154;
var statearr_28205_28273 = state_28154__$1;
(statearr_28205_28273[(2)] = null);

(statearr_28205_28273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (3))){
var inst_28152 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
if((state_val_28155 === (12))){
var inst_28081 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28206_28274 = state_28154__$1;
(statearr_28206_28274[(2)] = inst_28081);

(statearr_28206_28274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (2))){
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(4),ch);
} else {
if((state_val_28155 === (23))){
var state_28154__$1 = state_28154;
var statearr_28207_28275 = state_28154__$1;
(statearr_28207_28275[(2)] = null);

(statearr_28207_28275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (35))){
var inst_28136 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28208_28276 = state_28154__$1;
(statearr_28208_28276[(2)] = inst_28136);

(statearr_28208_28276[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (19))){
var inst_28055 = (state_28154[(7)]);
var inst_28059 = cljs.core.chunk_first.call(null,inst_28055);
var inst_28060 = cljs.core.chunk_rest.call(null,inst_28055);
var inst_28061 = cljs.core.count.call(null,inst_28059);
var inst_28035 = inst_28060;
var inst_28036 = inst_28059;
var inst_28037 = inst_28061;
var inst_28038 = (0);
var state_28154__$1 = (function (){var statearr_28209 = state_28154;
(statearr_28209[(13)] = inst_28038);

(statearr_28209[(14)] = inst_28037);

(statearr_28209[(15)] = inst_28036);

(statearr_28209[(16)] = inst_28035);

return statearr_28209;
})();
var statearr_28210_28277 = state_28154__$1;
(statearr_28210_28277[(2)] = null);

(statearr_28210_28277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (11))){
var inst_28035 = (state_28154[(16)]);
var inst_28055 = (state_28154[(7)]);
var inst_28055__$1 = cljs.core.seq.call(null,inst_28035);
var state_28154__$1 = (function (){var statearr_28211 = state_28154;
(statearr_28211[(7)] = inst_28055__$1);

return statearr_28211;
})();
if(inst_28055__$1){
var statearr_28212_28278 = state_28154__$1;
(statearr_28212_28278[(1)] = (16));

} else {
var statearr_28213_28279 = state_28154__$1;
(statearr_28213_28279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (9))){
var inst_28083 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28214_28280 = state_28154__$1;
(statearr_28214_28280[(2)] = inst_28083);

(statearr_28214_28280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (5))){
var inst_28033 = cljs.core.deref.call(null,cs);
var inst_28034 = cljs.core.seq.call(null,inst_28033);
var inst_28035 = inst_28034;
var inst_28036 = null;
var inst_28037 = (0);
var inst_28038 = (0);
var state_28154__$1 = (function (){var statearr_28215 = state_28154;
(statearr_28215[(13)] = inst_28038);

(statearr_28215[(14)] = inst_28037);

(statearr_28215[(15)] = inst_28036);

(statearr_28215[(16)] = inst_28035);

return statearr_28215;
})();
var statearr_28216_28281 = state_28154__$1;
(statearr_28216_28281[(2)] = null);

(statearr_28216_28281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (14))){
var state_28154__$1 = state_28154;
var statearr_28217_28282 = state_28154__$1;
(statearr_28217_28282[(2)] = null);

(statearr_28217_28282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (45))){
var inst_28144 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28218_28283 = state_28154__$1;
(statearr_28218_28283[(2)] = inst_28144);

(statearr_28218_28283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (26))){
var inst_28086 = (state_28154[(29)]);
var inst_28140 = (state_28154[(2)]);
var inst_28141 = cljs.core.seq.call(null,inst_28086);
var state_28154__$1 = (function (){var statearr_28219 = state_28154;
(statearr_28219[(31)] = inst_28140);

return statearr_28219;
})();
if(inst_28141){
var statearr_28220_28284 = state_28154__$1;
(statearr_28220_28284[(1)] = (42));

} else {
var statearr_28221_28285 = state_28154__$1;
(statearr_28221_28285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (16))){
var inst_28055 = (state_28154[(7)]);
var inst_28057 = cljs.core.chunked_seq_QMARK_.call(null,inst_28055);
var state_28154__$1 = state_28154;
if(inst_28057){
var statearr_28222_28286 = state_28154__$1;
(statearr_28222_28286[(1)] = (19));

} else {
var statearr_28223_28287 = state_28154__$1;
(statearr_28223_28287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (38))){
var inst_28133 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28224_28288 = state_28154__$1;
(statearr_28224_28288[(2)] = inst_28133);

(statearr_28224_28288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (30))){
var state_28154__$1 = state_28154;
var statearr_28225_28289 = state_28154__$1;
(statearr_28225_28289[(2)] = null);

(statearr_28225_28289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (10))){
var inst_28038 = (state_28154[(13)]);
var inst_28036 = (state_28154[(15)]);
var inst_28044 = cljs.core._nth.call(null,inst_28036,inst_28038);
var inst_28045 = cljs.core.nth.call(null,inst_28044,(0),null);
var inst_28046 = cljs.core.nth.call(null,inst_28044,(1),null);
var state_28154__$1 = (function (){var statearr_28226 = state_28154;
(statearr_28226[(26)] = inst_28045);

return statearr_28226;
})();
if(cljs.core.truth_(inst_28046)){
var statearr_28227_28290 = state_28154__$1;
(statearr_28227_28290[(1)] = (13));

} else {
var statearr_28228_28291 = state_28154__$1;
(statearr_28228_28291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (18))){
var inst_28079 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28229_28292 = state_28154__$1;
(statearr_28229_28292[(2)] = inst_28079);

(statearr_28229_28292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (42))){
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(45),dchan);
} else {
if((state_val_28155 === (37))){
var inst_28113 = (state_28154[(25)]);
var inst_28026 = (state_28154[(11)]);
var inst_28122 = (state_28154[(23)]);
var inst_28122__$1 = cljs.core.first.call(null,inst_28113);
var inst_28123 = cljs.core.async.put_BANG_.call(null,inst_28122__$1,inst_28026,done);
var state_28154__$1 = (function (){var statearr_28230 = state_28154;
(statearr_28230[(23)] = inst_28122__$1);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28123)){
var statearr_28231_28293 = state_28154__$1;
(statearr_28231_28293[(1)] = (39));

} else {
var statearr_28232_28294 = state_28154__$1;
(statearr_28232_28294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (8))){
var inst_28038 = (state_28154[(13)]);
var inst_28037 = (state_28154[(14)]);
var inst_28040 = (inst_28038 < inst_28037);
var inst_28041 = inst_28040;
var state_28154__$1 = state_28154;
if(cljs.core.truth_(inst_28041)){
var statearr_28233_28295 = state_28154__$1;
(statearr_28233_28295[(1)] = (10));

} else {
var statearr_28234_28296 = state_28154__$1;
(statearr_28234_28296[(1)] = (11));

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
});})(c__26935__auto___28242,cs,m,dchan,dctr,done))
;
return ((function (switch__26823__auto__,c__26935__auto___28242,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26824__auto__ = null;
var cljs$core$async$mult_$_state_machine__26824__auto____0 = (function (){
var statearr_28238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28238[(0)] = cljs$core$async$mult_$_state_machine__26824__auto__);

(statearr_28238[(1)] = (1));

return statearr_28238;
});
var cljs$core$async$mult_$_state_machine__26824__auto____1 = (function (state_28154){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object)){
var ex__26827__auto__ = e28239;
var statearr_28240_28297 = state_28154;
(statearr_28240_28297[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28298 = state_28154;
state_28154 = G__28298;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26824__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26824__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26824__auto____0;
cljs$core$async$mult_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26824__auto____1;
return cljs$core$async$mult_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___28242,cs,m,dchan,dctr,done))
})();
var state__26937__auto__ = (function (){var statearr_28241 = f__26936__auto__.call(null);
(statearr_28241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___28242);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___28242,cs,m,dchan,dctr,done))
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
var args28299 = [];
var len__19487__auto___28302 = arguments.length;
var i__19488__auto___28303 = (0);
while(true){
if((i__19488__auto___28303 < len__19487__auto___28302)){
args28299.push((arguments[i__19488__auto___28303]));

var G__28304 = (i__19488__auto___28303 + (1));
i__19488__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var G__28301 = args28299.length;
switch (G__28301) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28299.length)].join('')));

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
var len__19487__auto___28316 = arguments.length;
var i__19488__auto___28317 = (0);
while(true){
if((i__19488__auto___28317 < len__19487__auto___28316)){
args__19494__auto__.push((arguments[i__19488__auto___28317]));

var G__28318 = (i__19488__auto___28317 + (1));
i__19488__auto___28317 = G__28318;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28310){
var map__28311 = p__28310;
var map__28311__$1 = ((((!((map__28311 == null)))?((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var opts = map__28311__$1;
var statearr_28313_28319 = state;
(statearr_28313_28319[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28311,map__28311__$1,opts){
return (function (val){
var statearr_28314_28320 = state;
(statearr_28314_28320[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28311,map__28311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28315_28321 = state;
(statearr_28315_28321[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28306){
var G__28307 = cljs.core.first.call(null,seq28306);
var seq28306__$1 = cljs.core.next.call(null,seq28306);
var G__28308 = cljs.core.first.call(null,seq28306__$1);
var seq28306__$2 = cljs.core.next.call(null,seq28306__$1);
var G__28309 = cljs.core.first.call(null,seq28306__$2);
var seq28306__$3 = cljs.core.next.call(null,seq28306__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28307,G__28308,G__28309,seq28306__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28485 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28486){
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
this.meta28486 = meta28486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28487,meta28486__$1){
var self__ = this;
var _28487__$1 = this;
return (new cljs.core.async.t_cljs$core$async28485(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28486__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28487){
var self__ = this;
var _28487__$1 = this;
return self__.meta28486;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28485.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28486","meta28486",-913051404,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28485";

cljs.core.async.t_cljs$core$async28485.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28485");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28485 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28486){
return (new cljs.core.async.t_cljs$core$async28485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28486));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28485(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26935__auto___28648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28585){
var state_val_28586 = (state_28585[(1)]);
if((state_val_28586 === (7))){
var inst_28503 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
var statearr_28587_28649 = state_28585__$1;
(statearr_28587_28649[(2)] = inst_28503);

(statearr_28587_28649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (20))){
var inst_28515 = (state_28585[(7)]);
var state_28585__$1 = state_28585;
var statearr_28588_28650 = state_28585__$1;
(statearr_28588_28650[(2)] = inst_28515);

(statearr_28588_28650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (27))){
var state_28585__$1 = state_28585;
var statearr_28589_28651 = state_28585__$1;
(statearr_28589_28651[(2)] = null);

(statearr_28589_28651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (1))){
var inst_28491 = (state_28585[(8)]);
var inst_28491__$1 = calc_state.call(null);
var inst_28493 = (inst_28491__$1 == null);
var inst_28494 = cljs.core.not.call(null,inst_28493);
var state_28585__$1 = (function (){var statearr_28590 = state_28585;
(statearr_28590[(8)] = inst_28491__$1);

return statearr_28590;
})();
if(inst_28494){
var statearr_28591_28652 = state_28585__$1;
(statearr_28591_28652[(1)] = (2));

} else {
var statearr_28592_28653 = state_28585__$1;
(statearr_28592_28653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (24))){
var inst_28538 = (state_28585[(9)]);
var inst_28545 = (state_28585[(10)]);
var inst_28559 = (state_28585[(11)]);
var inst_28559__$1 = inst_28538.call(null,inst_28545);
var state_28585__$1 = (function (){var statearr_28593 = state_28585;
(statearr_28593[(11)] = inst_28559__$1);

return statearr_28593;
})();
if(cljs.core.truth_(inst_28559__$1)){
var statearr_28594_28654 = state_28585__$1;
(statearr_28594_28654[(1)] = (29));

} else {
var statearr_28595_28655 = state_28585__$1;
(statearr_28595_28655[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (4))){
var inst_28506 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28506)){
var statearr_28596_28656 = state_28585__$1;
(statearr_28596_28656[(1)] = (8));

} else {
var statearr_28597_28657 = state_28585__$1;
(statearr_28597_28657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (15))){
var inst_28532 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28532)){
var statearr_28598_28658 = state_28585__$1;
(statearr_28598_28658[(1)] = (19));

} else {
var statearr_28599_28659 = state_28585__$1;
(statearr_28599_28659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (21))){
var inst_28537 = (state_28585[(12)]);
var inst_28537__$1 = (state_28585[(2)]);
var inst_28538 = cljs.core.get.call(null,inst_28537__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28539 = cljs.core.get.call(null,inst_28537__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28540 = cljs.core.get.call(null,inst_28537__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28585__$1 = (function (){var statearr_28600 = state_28585;
(statearr_28600[(9)] = inst_28538);

(statearr_28600[(13)] = inst_28539);

(statearr_28600[(12)] = inst_28537__$1);

return statearr_28600;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28585__$1,(22),inst_28540);
} else {
if((state_val_28586 === (31))){
var inst_28567 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28567)){
var statearr_28601_28660 = state_28585__$1;
(statearr_28601_28660[(1)] = (32));

} else {
var statearr_28602_28661 = state_28585__$1;
(statearr_28602_28661[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (32))){
var inst_28544 = (state_28585[(14)]);
var state_28585__$1 = state_28585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28585__$1,(35),out,inst_28544);
} else {
if((state_val_28586 === (33))){
var inst_28537 = (state_28585[(12)]);
var inst_28515 = inst_28537;
var state_28585__$1 = (function (){var statearr_28603 = state_28585;
(statearr_28603[(7)] = inst_28515);

return statearr_28603;
})();
var statearr_28604_28662 = state_28585__$1;
(statearr_28604_28662[(2)] = null);

(statearr_28604_28662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (13))){
var inst_28515 = (state_28585[(7)]);
var inst_28522 = inst_28515.cljs$lang$protocol_mask$partition0$;
var inst_28523 = (inst_28522 & (64));
var inst_28524 = inst_28515.cljs$core$ISeq$;
var inst_28525 = (inst_28523) || (inst_28524);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28525)){
var statearr_28605_28663 = state_28585__$1;
(statearr_28605_28663[(1)] = (16));

} else {
var statearr_28606_28664 = state_28585__$1;
(statearr_28606_28664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (22))){
var inst_28544 = (state_28585[(14)]);
var inst_28545 = (state_28585[(10)]);
var inst_28543 = (state_28585[(2)]);
var inst_28544__$1 = cljs.core.nth.call(null,inst_28543,(0),null);
var inst_28545__$1 = cljs.core.nth.call(null,inst_28543,(1),null);
var inst_28546 = (inst_28544__$1 == null);
var inst_28547 = cljs.core._EQ_.call(null,inst_28545__$1,change);
var inst_28548 = (inst_28546) || (inst_28547);
var state_28585__$1 = (function (){var statearr_28607 = state_28585;
(statearr_28607[(14)] = inst_28544__$1);

(statearr_28607[(10)] = inst_28545__$1);

return statearr_28607;
})();
if(cljs.core.truth_(inst_28548)){
var statearr_28608_28665 = state_28585__$1;
(statearr_28608_28665[(1)] = (23));

} else {
var statearr_28609_28666 = state_28585__$1;
(statearr_28609_28666[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (36))){
var inst_28537 = (state_28585[(12)]);
var inst_28515 = inst_28537;
var state_28585__$1 = (function (){var statearr_28610 = state_28585;
(statearr_28610[(7)] = inst_28515);

return statearr_28610;
})();
var statearr_28611_28667 = state_28585__$1;
(statearr_28611_28667[(2)] = null);

(statearr_28611_28667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (29))){
var inst_28559 = (state_28585[(11)]);
var state_28585__$1 = state_28585;
var statearr_28612_28668 = state_28585__$1;
(statearr_28612_28668[(2)] = inst_28559);

(statearr_28612_28668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (6))){
var state_28585__$1 = state_28585;
var statearr_28613_28669 = state_28585__$1;
(statearr_28613_28669[(2)] = false);

(statearr_28613_28669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (28))){
var inst_28555 = (state_28585[(2)]);
var inst_28556 = calc_state.call(null);
var inst_28515 = inst_28556;
var state_28585__$1 = (function (){var statearr_28614 = state_28585;
(statearr_28614[(15)] = inst_28555);

(statearr_28614[(7)] = inst_28515);

return statearr_28614;
})();
var statearr_28615_28670 = state_28585__$1;
(statearr_28615_28670[(2)] = null);

(statearr_28615_28670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (25))){
var inst_28581 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
var statearr_28616_28671 = state_28585__$1;
(statearr_28616_28671[(2)] = inst_28581);

(statearr_28616_28671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (34))){
var inst_28579 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
var statearr_28617_28672 = state_28585__$1;
(statearr_28617_28672[(2)] = inst_28579);

(statearr_28617_28672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (17))){
var state_28585__$1 = state_28585;
var statearr_28618_28673 = state_28585__$1;
(statearr_28618_28673[(2)] = false);

(statearr_28618_28673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (3))){
var state_28585__$1 = state_28585;
var statearr_28619_28674 = state_28585__$1;
(statearr_28619_28674[(2)] = false);

(statearr_28619_28674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (12))){
var inst_28583 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28585__$1,inst_28583);
} else {
if((state_val_28586 === (2))){
var inst_28491 = (state_28585[(8)]);
var inst_28496 = inst_28491.cljs$lang$protocol_mask$partition0$;
var inst_28497 = (inst_28496 & (64));
var inst_28498 = inst_28491.cljs$core$ISeq$;
var inst_28499 = (inst_28497) || (inst_28498);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28499)){
var statearr_28620_28675 = state_28585__$1;
(statearr_28620_28675[(1)] = (5));

} else {
var statearr_28621_28676 = state_28585__$1;
(statearr_28621_28676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (23))){
var inst_28544 = (state_28585[(14)]);
var inst_28550 = (inst_28544 == null);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28550)){
var statearr_28622_28677 = state_28585__$1;
(statearr_28622_28677[(1)] = (26));

} else {
var statearr_28623_28678 = state_28585__$1;
(statearr_28623_28678[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (35))){
var inst_28570 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
if(cljs.core.truth_(inst_28570)){
var statearr_28624_28679 = state_28585__$1;
(statearr_28624_28679[(1)] = (36));

} else {
var statearr_28625_28680 = state_28585__$1;
(statearr_28625_28680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (19))){
var inst_28515 = (state_28585[(7)]);
var inst_28534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28515);
var state_28585__$1 = state_28585;
var statearr_28626_28681 = state_28585__$1;
(statearr_28626_28681[(2)] = inst_28534);

(statearr_28626_28681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (11))){
var inst_28515 = (state_28585[(7)]);
var inst_28519 = (inst_28515 == null);
var inst_28520 = cljs.core.not.call(null,inst_28519);
var state_28585__$1 = state_28585;
if(inst_28520){
var statearr_28627_28682 = state_28585__$1;
(statearr_28627_28682[(1)] = (13));

} else {
var statearr_28628_28683 = state_28585__$1;
(statearr_28628_28683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (9))){
var inst_28491 = (state_28585[(8)]);
var state_28585__$1 = state_28585;
var statearr_28629_28684 = state_28585__$1;
(statearr_28629_28684[(2)] = inst_28491);

(statearr_28629_28684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (5))){
var state_28585__$1 = state_28585;
var statearr_28630_28685 = state_28585__$1;
(statearr_28630_28685[(2)] = true);

(statearr_28630_28685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (14))){
var state_28585__$1 = state_28585;
var statearr_28631_28686 = state_28585__$1;
(statearr_28631_28686[(2)] = false);

(statearr_28631_28686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (26))){
var inst_28545 = (state_28585[(10)]);
var inst_28552 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28545);
var state_28585__$1 = state_28585;
var statearr_28632_28687 = state_28585__$1;
(statearr_28632_28687[(2)] = inst_28552);

(statearr_28632_28687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (16))){
var state_28585__$1 = state_28585;
var statearr_28633_28688 = state_28585__$1;
(statearr_28633_28688[(2)] = true);

(statearr_28633_28688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (38))){
var inst_28575 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
var statearr_28634_28689 = state_28585__$1;
(statearr_28634_28689[(2)] = inst_28575);

(statearr_28634_28689[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (30))){
var inst_28538 = (state_28585[(9)]);
var inst_28545 = (state_28585[(10)]);
var inst_28539 = (state_28585[(13)]);
var inst_28562 = cljs.core.empty_QMARK_.call(null,inst_28538);
var inst_28563 = inst_28539.call(null,inst_28545);
var inst_28564 = cljs.core.not.call(null,inst_28563);
var inst_28565 = (inst_28562) && (inst_28564);
var state_28585__$1 = state_28585;
var statearr_28635_28690 = state_28585__$1;
(statearr_28635_28690[(2)] = inst_28565);

(statearr_28635_28690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (10))){
var inst_28491 = (state_28585[(8)]);
var inst_28511 = (state_28585[(2)]);
var inst_28512 = cljs.core.get.call(null,inst_28511,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28513 = cljs.core.get.call(null,inst_28511,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28514 = cljs.core.get.call(null,inst_28511,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28515 = inst_28491;
var state_28585__$1 = (function (){var statearr_28636 = state_28585;
(statearr_28636[(16)] = inst_28514);

(statearr_28636[(17)] = inst_28512);

(statearr_28636[(7)] = inst_28515);

(statearr_28636[(18)] = inst_28513);

return statearr_28636;
})();
var statearr_28637_28691 = state_28585__$1;
(statearr_28637_28691[(2)] = null);

(statearr_28637_28691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (18))){
var inst_28529 = (state_28585[(2)]);
var state_28585__$1 = state_28585;
var statearr_28638_28692 = state_28585__$1;
(statearr_28638_28692[(2)] = inst_28529);

(statearr_28638_28692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (37))){
var state_28585__$1 = state_28585;
var statearr_28639_28693 = state_28585__$1;
(statearr_28639_28693[(2)] = null);

(statearr_28639_28693[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28586 === (8))){
var inst_28491 = (state_28585[(8)]);
var inst_28508 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28491);
var state_28585__$1 = state_28585;
var statearr_28640_28694 = state_28585__$1;
(statearr_28640_28694[(2)] = inst_28508);

(statearr_28640_28694[(1)] = (10));


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
});})(c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26823__auto__,c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26824__auto__ = null;
var cljs$core$async$mix_$_state_machine__26824__auto____0 = (function (){
var statearr_28644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28644[(0)] = cljs$core$async$mix_$_state_machine__26824__auto__);

(statearr_28644[(1)] = (1));

return statearr_28644;
});
var cljs$core$async$mix_$_state_machine__26824__auto____1 = (function (state_28585){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_28585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28645){if((e28645 instanceof Object)){
var ex__26827__auto__ = e28645;
var statearr_28646_28695 = state_28585;
(statearr_28646_28695[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28696 = state_28585;
state_28585 = G__28696;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26824__auto__ = function(state_28585){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26824__auto____1.call(this,state_28585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26824__auto____0;
cljs$core$async$mix_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26824__auto____1;
return cljs$core$async$mix_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26937__auto__ = (function (){var statearr_28647 = f__26936__auto__.call(null);
(statearr_28647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___28648);

return statearr_28647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___28648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28697 = [];
var len__19487__auto___28700 = arguments.length;
var i__19488__auto___28701 = (0);
while(true){
if((i__19488__auto___28701 < len__19487__auto___28700)){
args28697.push((arguments[i__19488__auto___28701]));

var G__28702 = (i__19488__auto___28701 + (1));
i__19488__auto___28701 = G__28702;
continue;
} else {
}
break;
}

var G__28699 = args28697.length;
switch (G__28699) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28697.length)].join('')));

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
var args28705 = [];
var len__19487__auto___28830 = arguments.length;
var i__19488__auto___28831 = (0);
while(true){
if((i__19488__auto___28831 < len__19487__auto___28830)){
args28705.push((arguments[i__19488__auto___28831]));

var G__28832 = (i__19488__auto___28831 + (1));
i__19488__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var G__28707 = args28705.length;
switch (G__28707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28705.length)].join('')));

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
return (function (p1__28704_SHARP_){
if(cljs.core.truth_(p1__28704_SHARP_.call(null,topic))){
return p1__28704_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28704_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18418__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28709 = meta28709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28710,meta28709__$1){
var self__ = this;
var _28710__$1 = this;
return (new cljs.core.async.t_cljs$core$async28708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28709__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28710){
var self__ = this;
var _28710__$1 = this;
return self__.meta28709;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28709","meta28709",1746324354,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28708";

cljs.core.async.t_cljs$core$async28708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async28708");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28708 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28709){
return (new cljs.core.async.t_cljs$core$async28708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28709));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26935__auto___28834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___28834,mults,ensure_mult,p){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___28834,mults,ensure_mult,p){
return (function (state_28782){
var state_val_28783 = (state_28782[(1)]);
if((state_val_28783 === (7))){
var inst_28778 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28784_28835 = state_28782__$1;
(statearr_28784_28835[(2)] = inst_28778);

(statearr_28784_28835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (20))){
var state_28782__$1 = state_28782;
var statearr_28785_28836 = state_28782__$1;
(statearr_28785_28836[(2)] = null);

(statearr_28785_28836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (1))){
var state_28782__$1 = state_28782;
var statearr_28786_28837 = state_28782__$1;
(statearr_28786_28837[(2)] = null);

(statearr_28786_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (24))){
var inst_28761 = (state_28782[(7)]);
var inst_28770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28761);
var state_28782__$1 = state_28782;
var statearr_28787_28838 = state_28782__$1;
(statearr_28787_28838[(2)] = inst_28770);

(statearr_28787_28838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (4))){
var inst_28713 = (state_28782[(8)]);
var inst_28713__$1 = (state_28782[(2)]);
var inst_28714 = (inst_28713__$1 == null);
var state_28782__$1 = (function (){var statearr_28788 = state_28782;
(statearr_28788[(8)] = inst_28713__$1);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28714)){
var statearr_28789_28839 = state_28782__$1;
(statearr_28789_28839[(1)] = (5));

} else {
var statearr_28790_28840 = state_28782__$1;
(statearr_28790_28840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (15))){
var inst_28755 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28791_28841 = state_28782__$1;
(statearr_28791_28841[(2)] = inst_28755);

(statearr_28791_28841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (21))){
var inst_28775 = (state_28782[(2)]);
var state_28782__$1 = (function (){var statearr_28792 = state_28782;
(statearr_28792[(9)] = inst_28775);

return statearr_28792;
})();
var statearr_28793_28842 = state_28782__$1;
(statearr_28793_28842[(2)] = null);

(statearr_28793_28842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (13))){
var inst_28737 = (state_28782[(10)]);
var inst_28739 = cljs.core.chunked_seq_QMARK_.call(null,inst_28737);
var state_28782__$1 = state_28782;
if(inst_28739){
var statearr_28794_28843 = state_28782__$1;
(statearr_28794_28843[(1)] = (16));

} else {
var statearr_28795_28844 = state_28782__$1;
(statearr_28795_28844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (22))){
var inst_28767 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
if(cljs.core.truth_(inst_28767)){
var statearr_28796_28845 = state_28782__$1;
(statearr_28796_28845[(1)] = (23));

} else {
var statearr_28797_28846 = state_28782__$1;
(statearr_28797_28846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (6))){
var inst_28713 = (state_28782[(8)]);
var inst_28761 = (state_28782[(7)]);
var inst_28763 = (state_28782[(11)]);
var inst_28761__$1 = topic_fn.call(null,inst_28713);
var inst_28762 = cljs.core.deref.call(null,mults);
var inst_28763__$1 = cljs.core.get.call(null,inst_28762,inst_28761__$1);
var state_28782__$1 = (function (){var statearr_28798 = state_28782;
(statearr_28798[(7)] = inst_28761__$1);

(statearr_28798[(11)] = inst_28763__$1);

return statearr_28798;
})();
if(cljs.core.truth_(inst_28763__$1)){
var statearr_28799_28847 = state_28782__$1;
(statearr_28799_28847[(1)] = (19));

} else {
var statearr_28800_28848 = state_28782__$1;
(statearr_28800_28848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (25))){
var inst_28772 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28801_28849 = state_28782__$1;
(statearr_28801_28849[(2)] = inst_28772);

(statearr_28801_28849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (17))){
var inst_28737 = (state_28782[(10)]);
var inst_28746 = cljs.core.first.call(null,inst_28737);
var inst_28747 = cljs.core.async.muxch_STAR_.call(null,inst_28746);
var inst_28748 = cljs.core.async.close_BANG_.call(null,inst_28747);
var inst_28749 = cljs.core.next.call(null,inst_28737);
var inst_28723 = inst_28749;
var inst_28724 = null;
var inst_28725 = (0);
var inst_28726 = (0);
var state_28782__$1 = (function (){var statearr_28802 = state_28782;
(statearr_28802[(12)] = inst_28723);

(statearr_28802[(13)] = inst_28725);

(statearr_28802[(14)] = inst_28724);

(statearr_28802[(15)] = inst_28748);

(statearr_28802[(16)] = inst_28726);

return statearr_28802;
})();
var statearr_28803_28850 = state_28782__$1;
(statearr_28803_28850[(2)] = null);

(statearr_28803_28850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (3))){
var inst_28780 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28782__$1,inst_28780);
} else {
if((state_val_28783 === (12))){
var inst_28757 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28804_28851 = state_28782__$1;
(statearr_28804_28851[(2)] = inst_28757);

(statearr_28804_28851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (2))){
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28782__$1,(4),ch);
} else {
if((state_val_28783 === (23))){
var state_28782__$1 = state_28782;
var statearr_28805_28852 = state_28782__$1;
(statearr_28805_28852[(2)] = null);

(statearr_28805_28852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (19))){
var inst_28713 = (state_28782[(8)]);
var inst_28763 = (state_28782[(11)]);
var inst_28765 = cljs.core.async.muxch_STAR_.call(null,inst_28763);
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28782__$1,(22),inst_28765,inst_28713);
} else {
if((state_val_28783 === (11))){
var inst_28723 = (state_28782[(12)]);
var inst_28737 = (state_28782[(10)]);
var inst_28737__$1 = cljs.core.seq.call(null,inst_28723);
var state_28782__$1 = (function (){var statearr_28806 = state_28782;
(statearr_28806[(10)] = inst_28737__$1);

return statearr_28806;
})();
if(inst_28737__$1){
var statearr_28807_28853 = state_28782__$1;
(statearr_28807_28853[(1)] = (13));

} else {
var statearr_28808_28854 = state_28782__$1;
(statearr_28808_28854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (9))){
var inst_28759 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28809_28855 = state_28782__$1;
(statearr_28809_28855[(2)] = inst_28759);

(statearr_28809_28855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (5))){
var inst_28720 = cljs.core.deref.call(null,mults);
var inst_28721 = cljs.core.vals.call(null,inst_28720);
var inst_28722 = cljs.core.seq.call(null,inst_28721);
var inst_28723 = inst_28722;
var inst_28724 = null;
var inst_28725 = (0);
var inst_28726 = (0);
var state_28782__$1 = (function (){var statearr_28810 = state_28782;
(statearr_28810[(12)] = inst_28723);

(statearr_28810[(13)] = inst_28725);

(statearr_28810[(14)] = inst_28724);

(statearr_28810[(16)] = inst_28726);

return statearr_28810;
})();
var statearr_28811_28856 = state_28782__$1;
(statearr_28811_28856[(2)] = null);

(statearr_28811_28856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (14))){
var state_28782__$1 = state_28782;
var statearr_28815_28857 = state_28782__$1;
(statearr_28815_28857[(2)] = null);

(statearr_28815_28857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (16))){
var inst_28737 = (state_28782[(10)]);
var inst_28741 = cljs.core.chunk_first.call(null,inst_28737);
var inst_28742 = cljs.core.chunk_rest.call(null,inst_28737);
var inst_28743 = cljs.core.count.call(null,inst_28741);
var inst_28723 = inst_28742;
var inst_28724 = inst_28741;
var inst_28725 = inst_28743;
var inst_28726 = (0);
var state_28782__$1 = (function (){var statearr_28816 = state_28782;
(statearr_28816[(12)] = inst_28723);

(statearr_28816[(13)] = inst_28725);

(statearr_28816[(14)] = inst_28724);

(statearr_28816[(16)] = inst_28726);

return statearr_28816;
})();
var statearr_28817_28858 = state_28782__$1;
(statearr_28817_28858[(2)] = null);

(statearr_28817_28858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (10))){
var inst_28723 = (state_28782[(12)]);
var inst_28725 = (state_28782[(13)]);
var inst_28724 = (state_28782[(14)]);
var inst_28726 = (state_28782[(16)]);
var inst_28731 = cljs.core._nth.call(null,inst_28724,inst_28726);
var inst_28732 = cljs.core.async.muxch_STAR_.call(null,inst_28731);
var inst_28733 = cljs.core.async.close_BANG_.call(null,inst_28732);
var inst_28734 = (inst_28726 + (1));
var tmp28812 = inst_28723;
var tmp28813 = inst_28725;
var tmp28814 = inst_28724;
var inst_28723__$1 = tmp28812;
var inst_28724__$1 = tmp28814;
var inst_28725__$1 = tmp28813;
var inst_28726__$1 = inst_28734;
var state_28782__$1 = (function (){var statearr_28818 = state_28782;
(statearr_28818[(12)] = inst_28723__$1);

(statearr_28818[(13)] = inst_28725__$1);

(statearr_28818[(14)] = inst_28724__$1);

(statearr_28818[(17)] = inst_28733);

(statearr_28818[(16)] = inst_28726__$1);

return statearr_28818;
})();
var statearr_28819_28859 = state_28782__$1;
(statearr_28819_28859[(2)] = null);

(statearr_28819_28859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (18))){
var inst_28752 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28820_28860 = state_28782__$1;
(statearr_28820_28860[(2)] = inst_28752);

(statearr_28820_28860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (8))){
var inst_28725 = (state_28782[(13)]);
var inst_28726 = (state_28782[(16)]);
var inst_28728 = (inst_28726 < inst_28725);
var inst_28729 = inst_28728;
var state_28782__$1 = state_28782;
if(cljs.core.truth_(inst_28729)){
var statearr_28821_28861 = state_28782__$1;
(statearr_28821_28861[(1)] = (10));

} else {
var statearr_28822_28862 = state_28782__$1;
(statearr_28822_28862[(1)] = (11));

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
});})(c__26935__auto___28834,mults,ensure_mult,p))
;
return ((function (switch__26823__auto__,c__26935__auto___28834,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28826[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28826[(1)] = (1));

return statearr_28826;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28782){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_28782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28827){if((e28827 instanceof Object)){
var ex__26827__auto__ = e28827;
var statearr_28828_28863 = state_28782;
(statearr_28828_28863[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28864 = state_28782;
state_28782 = G__28864;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___28834,mults,ensure_mult,p))
})();
var state__26937__auto__ = (function (){var statearr_28829 = f__26936__auto__.call(null);
(statearr_28829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___28834);

return statearr_28829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___28834,mults,ensure_mult,p))
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
var args28865 = [];
var len__19487__auto___28868 = arguments.length;
var i__19488__auto___28869 = (0);
while(true){
if((i__19488__auto___28869 < len__19487__auto___28868)){
args28865.push((arguments[i__19488__auto___28869]));

var G__28870 = (i__19488__auto___28869 + (1));
i__19488__auto___28869 = G__28870;
continue;
} else {
}
break;
}

var G__28867 = args28865.length;
switch (G__28867) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28865.length)].join('')));

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
var args28872 = [];
var len__19487__auto___28875 = arguments.length;
var i__19488__auto___28876 = (0);
while(true){
if((i__19488__auto___28876 < len__19487__auto___28875)){
args28872.push((arguments[i__19488__auto___28876]));

var G__28877 = (i__19488__auto___28876 + (1));
i__19488__auto___28876 = G__28877;
continue;
} else {
}
break;
}

var G__28874 = args28872.length;
switch (G__28874) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28872.length)].join('')));

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
var args28879 = [];
var len__19487__auto___28950 = arguments.length;
var i__19488__auto___28951 = (0);
while(true){
if((i__19488__auto___28951 < len__19487__auto___28950)){
args28879.push((arguments[i__19488__auto___28951]));

var G__28952 = (i__19488__auto___28951 + (1));
i__19488__auto___28951 = G__28952;
continue;
} else {
}
break;
}

var G__28881 = args28879.length;
switch (G__28881) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28879.length)].join('')));

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
var c__26935__auto___28954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28920){
var state_val_28921 = (state_28920[(1)]);
if((state_val_28921 === (7))){
var state_28920__$1 = state_28920;
var statearr_28922_28955 = state_28920__$1;
(statearr_28922_28955[(2)] = null);

(statearr_28922_28955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (1))){
var state_28920__$1 = state_28920;
var statearr_28923_28956 = state_28920__$1;
(statearr_28923_28956[(2)] = null);

(statearr_28923_28956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (4))){
var inst_28884 = (state_28920[(7)]);
var inst_28886 = (inst_28884 < cnt);
var state_28920__$1 = state_28920;
if(cljs.core.truth_(inst_28886)){
var statearr_28924_28957 = state_28920__$1;
(statearr_28924_28957[(1)] = (6));

} else {
var statearr_28925_28958 = state_28920__$1;
(statearr_28925_28958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (15))){
var inst_28916 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
var statearr_28926_28959 = state_28920__$1;
(statearr_28926_28959[(2)] = inst_28916);

(statearr_28926_28959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (13))){
var inst_28909 = cljs.core.async.close_BANG_.call(null,out);
var state_28920__$1 = state_28920;
var statearr_28927_28960 = state_28920__$1;
(statearr_28927_28960[(2)] = inst_28909);

(statearr_28927_28960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (6))){
var state_28920__$1 = state_28920;
var statearr_28928_28961 = state_28920__$1;
(statearr_28928_28961[(2)] = null);

(statearr_28928_28961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (3))){
var inst_28918 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28920__$1,inst_28918);
} else {
if((state_val_28921 === (12))){
var inst_28906 = (state_28920[(8)]);
var inst_28906__$1 = (state_28920[(2)]);
var inst_28907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28906__$1);
var state_28920__$1 = (function (){var statearr_28929 = state_28920;
(statearr_28929[(8)] = inst_28906__$1);

return statearr_28929;
})();
if(cljs.core.truth_(inst_28907)){
var statearr_28930_28962 = state_28920__$1;
(statearr_28930_28962[(1)] = (13));

} else {
var statearr_28931_28963 = state_28920__$1;
(statearr_28931_28963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (2))){
var inst_28883 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28884 = (0);
var state_28920__$1 = (function (){var statearr_28932 = state_28920;
(statearr_28932[(9)] = inst_28883);

(statearr_28932[(7)] = inst_28884);

return statearr_28932;
})();
var statearr_28933_28964 = state_28920__$1;
(statearr_28933_28964[(2)] = null);

(statearr_28933_28964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (11))){
var inst_28884 = (state_28920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28920,(10),Object,null,(9));
var inst_28893 = chs__$1.call(null,inst_28884);
var inst_28894 = done.call(null,inst_28884);
var inst_28895 = cljs.core.async.take_BANG_.call(null,inst_28893,inst_28894);
var state_28920__$1 = state_28920;
var statearr_28934_28965 = state_28920__$1;
(statearr_28934_28965[(2)] = inst_28895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (9))){
var inst_28884 = (state_28920[(7)]);
var inst_28897 = (state_28920[(2)]);
var inst_28898 = (inst_28884 + (1));
var inst_28884__$1 = inst_28898;
var state_28920__$1 = (function (){var statearr_28935 = state_28920;
(statearr_28935[(10)] = inst_28897);

(statearr_28935[(7)] = inst_28884__$1);

return statearr_28935;
})();
var statearr_28936_28966 = state_28920__$1;
(statearr_28936_28966[(2)] = null);

(statearr_28936_28966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (5))){
var inst_28904 = (state_28920[(2)]);
var state_28920__$1 = (function (){var statearr_28937 = state_28920;
(statearr_28937[(11)] = inst_28904);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28920__$1,(12),dchan);
} else {
if((state_val_28921 === (14))){
var inst_28906 = (state_28920[(8)]);
var inst_28911 = cljs.core.apply.call(null,f,inst_28906);
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28920__$1,(16),out,inst_28911);
} else {
if((state_val_28921 === (16))){
var inst_28913 = (state_28920[(2)]);
var state_28920__$1 = (function (){var statearr_28938 = state_28920;
(statearr_28938[(12)] = inst_28913);

return statearr_28938;
})();
var statearr_28939_28967 = state_28920__$1;
(statearr_28939_28967[(2)] = null);

(statearr_28939_28967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (10))){
var inst_28888 = (state_28920[(2)]);
var inst_28889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28920__$1 = (function (){var statearr_28940 = state_28920;
(statearr_28940[(13)] = inst_28888);

return statearr_28940;
})();
var statearr_28941_28968 = state_28920__$1;
(statearr_28941_28968[(2)] = inst_28889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (8))){
var inst_28902 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
var statearr_28942_28969 = state_28920__$1;
(statearr_28942_28969[(2)] = inst_28902);

(statearr_28942_28969[(1)] = (5));


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
});})(c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26823__auto__,c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28946[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28946[(1)] = (1));

return statearr_28946;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28920){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_28920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28947){if((e28947 instanceof Object)){
var ex__26827__auto__ = e28947;
var statearr_28948_28970 = state_28920;
(statearr_28948_28970[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28971 = state_28920;
state_28920 = G__28971;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26937__auto__ = (function (){var statearr_28949 = f__26936__auto__.call(null);
(statearr_28949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___28954);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___28954,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28973 = [];
var len__19487__auto___29029 = arguments.length;
var i__19488__auto___29030 = (0);
while(true){
if((i__19488__auto___29030 < len__19487__auto___29029)){
args28973.push((arguments[i__19488__auto___29030]));

var G__29031 = (i__19488__auto___29030 + (1));
i__19488__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var G__28975 = args28973.length;
switch (G__28975) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28973.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29033,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29033,out){
return (function (state_29005){
var state_val_29006 = (state_29005[(1)]);
if((state_val_29006 === (7))){
var inst_28984 = (state_29005[(7)]);
var inst_28985 = (state_29005[(8)]);
var inst_28984__$1 = (state_29005[(2)]);
var inst_28985__$1 = cljs.core.nth.call(null,inst_28984__$1,(0),null);
var inst_28986 = cljs.core.nth.call(null,inst_28984__$1,(1),null);
var inst_28987 = (inst_28985__$1 == null);
var state_29005__$1 = (function (){var statearr_29007 = state_29005;
(statearr_29007[(9)] = inst_28986);

(statearr_29007[(7)] = inst_28984__$1);

(statearr_29007[(8)] = inst_28985__$1);

return statearr_29007;
})();
if(cljs.core.truth_(inst_28987)){
var statearr_29008_29034 = state_29005__$1;
(statearr_29008_29034[(1)] = (8));

} else {
var statearr_29009_29035 = state_29005__$1;
(statearr_29009_29035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (1))){
var inst_28976 = cljs.core.vec.call(null,chs);
var inst_28977 = inst_28976;
var state_29005__$1 = (function (){var statearr_29010 = state_29005;
(statearr_29010[(10)] = inst_28977);

return statearr_29010;
})();
var statearr_29011_29036 = state_29005__$1;
(statearr_29011_29036[(2)] = null);

(statearr_29011_29036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (4))){
var inst_28977 = (state_29005[(10)]);
var state_29005__$1 = state_29005;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29005__$1,(7),inst_28977);
} else {
if((state_val_29006 === (6))){
var inst_29001 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29012_29037 = state_29005__$1;
(statearr_29012_29037[(2)] = inst_29001);

(statearr_29012_29037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (3))){
var inst_29003 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29005__$1,inst_29003);
} else {
if((state_val_29006 === (2))){
var inst_28977 = (state_29005[(10)]);
var inst_28979 = cljs.core.count.call(null,inst_28977);
var inst_28980 = (inst_28979 > (0));
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28980)){
var statearr_29014_29038 = state_29005__$1;
(statearr_29014_29038[(1)] = (4));

} else {
var statearr_29015_29039 = state_29005__$1;
(statearr_29015_29039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (11))){
var inst_28977 = (state_29005[(10)]);
var inst_28994 = (state_29005[(2)]);
var tmp29013 = inst_28977;
var inst_28977__$1 = tmp29013;
var state_29005__$1 = (function (){var statearr_29016 = state_29005;
(statearr_29016[(10)] = inst_28977__$1);

(statearr_29016[(11)] = inst_28994);

return statearr_29016;
})();
var statearr_29017_29040 = state_29005__$1;
(statearr_29017_29040[(2)] = null);

(statearr_29017_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (9))){
var inst_28985 = (state_29005[(8)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29005__$1,(11),out,inst_28985);
} else {
if((state_val_29006 === (5))){
var inst_28999 = cljs.core.async.close_BANG_.call(null,out);
var state_29005__$1 = state_29005;
var statearr_29018_29041 = state_29005__$1;
(statearr_29018_29041[(2)] = inst_28999);

(statearr_29018_29041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (10))){
var inst_28997 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29019_29042 = state_29005__$1;
(statearr_29019_29042[(2)] = inst_28997);

(statearr_29019_29042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (8))){
var inst_28977 = (state_29005[(10)]);
var inst_28986 = (state_29005[(9)]);
var inst_28984 = (state_29005[(7)]);
var inst_28985 = (state_29005[(8)]);
var inst_28989 = (function (){var cs = inst_28977;
var vec__28982 = inst_28984;
var v = inst_28985;
var c = inst_28986;
return ((function (cs,vec__28982,v,c,inst_28977,inst_28986,inst_28984,inst_28985,state_val_29006,c__26935__auto___29033,out){
return (function (p1__28972_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28972_SHARP_);
});
;})(cs,vec__28982,v,c,inst_28977,inst_28986,inst_28984,inst_28985,state_val_29006,c__26935__auto___29033,out))
})();
var inst_28990 = cljs.core.filterv.call(null,inst_28989,inst_28977);
var inst_28977__$1 = inst_28990;
var state_29005__$1 = (function (){var statearr_29020 = state_29005;
(statearr_29020[(10)] = inst_28977__$1);

return statearr_29020;
})();
var statearr_29021_29043 = state_29005__$1;
(statearr_29021_29043[(2)] = null);

(statearr_29021_29043[(1)] = (2));


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
});})(c__26935__auto___29033,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29033,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29005){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__26827__auto__ = e29026;
var statearr_29027_29044 = state_29005;
(statearr_29027_29044[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29045 = state_29005;
state_29005 = G__29045;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29033,out))
})();
var state__26937__auto__ = (function (){var statearr_29028 = f__26936__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29033);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29033,out))
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
var args29046 = [];
var len__19487__auto___29095 = arguments.length;
var i__19488__auto___29096 = (0);
while(true){
if((i__19488__auto___29096 < len__19487__auto___29095)){
args29046.push((arguments[i__19488__auto___29096]));

var G__29097 = (i__19488__auto___29096 + (1));
i__19488__auto___29096 = G__29097;
continue;
} else {
}
break;
}

var G__29048 = args29046.length;
switch (G__29048) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29046.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29099,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29099,out){
return (function (state_29072){
var state_val_29073 = (state_29072[(1)]);
if((state_val_29073 === (7))){
var inst_29054 = (state_29072[(7)]);
var inst_29054__$1 = (state_29072[(2)]);
var inst_29055 = (inst_29054__$1 == null);
var inst_29056 = cljs.core.not.call(null,inst_29055);
var state_29072__$1 = (function (){var statearr_29074 = state_29072;
(statearr_29074[(7)] = inst_29054__$1);

return statearr_29074;
})();
if(inst_29056){
var statearr_29075_29100 = state_29072__$1;
(statearr_29075_29100[(1)] = (8));

} else {
var statearr_29076_29101 = state_29072__$1;
(statearr_29076_29101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (1))){
var inst_29049 = (0);
var state_29072__$1 = (function (){var statearr_29077 = state_29072;
(statearr_29077[(8)] = inst_29049);

return statearr_29077;
})();
var statearr_29078_29102 = state_29072__$1;
(statearr_29078_29102[(2)] = null);

(statearr_29078_29102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (4))){
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29072__$1,(7),ch);
} else {
if((state_val_29073 === (6))){
var inst_29067 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29079_29103 = state_29072__$1;
(statearr_29079_29103[(2)] = inst_29067);

(statearr_29079_29103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (3))){
var inst_29069 = (state_29072[(2)]);
var inst_29070 = cljs.core.async.close_BANG_.call(null,out);
var state_29072__$1 = (function (){var statearr_29080 = state_29072;
(statearr_29080[(9)] = inst_29069);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29072__$1,inst_29070);
} else {
if((state_val_29073 === (2))){
var inst_29049 = (state_29072[(8)]);
var inst_29051 = (inst_29049 < n);
var state_29072__$1 = state_29072;
if(cljs.core.truth_(inst_29051)){
var statearr_29081_29104 = state_29072__$1;
(statearr_29081_29104[(1)] = (4));

} else {
var statearr_29082_29105 = state_29072__$1;
(statearr_29082_29105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (11))){
var inst_29049 = (state_29072[(8)]);
var inst_29059 = (state_29072[(2)]);
var inst_29060 = (inst_29049 + (1));
var inst_29049__$1 = inst_29060;
var state_29072__$1 = (function (){var statearr_29083 = state_29072;
(statearr_29083[(8)] = inst_29049__$1);

(statearr_29083[(10)] = inst_29059);

return statearr_29083;
})();
var statearr_29084_29106 = state_29072__$1;
(statearr_29084_29106[(2)] = null);

(statearr_29084_29106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (9))){
var state_29072__$1 = state_29072;
var statearr_29085_29107 = state_29072__$1;
(statearr_29085_29107[(2)] = null);

(statearr_29085_29107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (5))){
var state_29072__$1 = state_29072;
var statearr_29086_29108 = state_29072__$1;
(statearr_29086_29108[(2)] = null);

(statearr_29086_29108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (10))){
var inst_29064 = (state_29072[(2)]);
var state_29072__$1 = state_29072;
var statearr_29087_29109 = state_29072__$1;
(statearr_29087_29109[(2)] = inst_29064);

(statearr_29087_29109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29073 === (8))){
var inst_29054 = (state_29072[(7)]);
var state_29072__$1 = state_29072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29072__$1,(11),out,inst_29054);
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
});})(c__26935__auto___29099,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29099,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29091[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29091[(1)] = (1));

return statearr_29091;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29072){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29092){if((e29092 instanceof Object)){
var ex__26827__auto__ = e29092;
var statearr_29093_29110 = state_29072;
(statearr_29093_29110[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29072;
state_29072 = G__29111;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29099,out))
})();
var state__26937__auto__ = (function (){var statearr_29094 = f__26936__auto__.call(null);
(statearr_29094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29099);

return statearr_29094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29099,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29119 = (function (map_LT_,f,ch,meta29120){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29120 = meta29120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29121,meta29120__$1){
var self__ = this;
var _29121__$1 = this;
return (new cljs.core.async.t_cljs$core$async29119(self__.map_LT_,self__.f,self__.ch,meta29120__$1));
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29121){
var self__ = this;
var _29121__$1 = this;
return self__.meta29120;
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29122 = (function (map_LT_,f,ch,meta29120,_,fn1,meta29123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29120 = meta29120;
this._ = _;
this.fn1 = fn1;
this.meta29123 = meta29123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29124,meta29123__$1){
var self__ = this;
var _29124__$1 = this;
return (new cljs.core.async.t_cljs$core$async29122(self__.map_LT_,self__.f,self__.ch,self__.meta29120,self__._,self__.fn1,meta29123__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29124){
var self__ = this;
var _29124__$1 = this;
return self__.meta29123;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29112_SHARP_){
return f1.call(null,(((p1__29112_SHARP_ == null))?null:self__.f.call(null,p1__29112_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29120","meta29120",2073436530,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29119","cljs.core.async/t_cljs$core$async29119",1527426249,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29123","meta29123",601616204,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29122";

cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29122");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29122 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29122(map_LT___$1,f__$1,ch__$1,meta29120__$1,___$2,fn1__$1,meta29123){
return (new cljs.core.async.t_cljs$core$async29122(map_LT___$1,f__$1,ch__$1,meta29120__$1,___$2,fn1__$1,meta29123));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29122(self__.map_LT_,self__.f,self__.ch,self__.meta29120,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29120","meta29120",2073436530,null)], null);
});

cljs.core.async.t_cljs$core$async29119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29119";

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29119");
});

cljs.core.async.__GT_t_cljs$core$async29119 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29119(map_LT___$1,f__$1,ch__$1,meta29120){
return (new cljs.core.async.t_cljs$core$async29119(map_LT___$1,f__$1,ch__$1,meta29120));
});

}

return (new cljs.core.async.t_cljs$core$async29119(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29128 = (function (map_GT_,f,ch,meta29129){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29129 = meta29129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29130,meta29129__$1){
var self__ = this;
var _29130__$1 = this;
return (new cljs.core.async.t_cljs$core$async29128(self__.map_GT_,self__.f,self__.ch,meta29129__$1));
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29130){
var self__ = this;
var _29130__$1 = this;
return self__.meta29129;
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29129","meta29129",1908437554,null)], null);
});

cljs.core.async.t_cljs$core$async29128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29128";

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29128");
});

cljs.core.async.__GT_t_cljs$core$async29128 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29128(map_GT___$1,f__$1,ch__$1,meta29129){
return (new cljs.core.async.t_cljs$core$async29128(map_GT___$1,f__$1,ch__$1,meta29129));
});

}

return (new cljs.core.async.t_cljs$core$async29128(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29134 = (function (filter_GT_,p,ch,meta29135){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29135 = meta29135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29136,meta29135__$1){
var self__ = this;
var _29136__$1 = this;
return (new cljs.core.async.t_cljs$core$async29134(self__.filter_GT_,self__.p,self__.ch,meta29135__$1));
});

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29136){
var self__ = this;
var _29136__$1 = this;
return self__.meta29135;
});

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29135","meta29135",1810734727,null)], null);
});

cljs.core.async.t_cljs$core$async29134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29134";

cljs.core.async.t_cljs$core$async29134.cljs$lang$ctorPrWriter = (function (this__19024__auto__,writer__19025__auto__,opt__19026__auto__){
return cljs.core._write.call(null,writer__19025__auto__,"cljs.core.async/t_cljs$core$async29134");
});

cljs.core.async.__GT_t_cljs$core$async29134 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29134(filter_GT___$1,p__$1,ch__$1,meta29135){
return (new cljs.core.async.t_cljs$core$async29134(filter_GT___$1,p__$1,ch__$1,meta29135));
});

}

return (new cljs.core.async.t_cljs$core$async29134(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29137 = [];
var len__19487__auto___29181 = arguments.length;
var i__19488__auto___29182 = (0);
while(true){
if((i__19488__auto___29182 < len__19487__auto___29181)){
args29137.push((arguments[i__19488__auto___29182]));

var G__29183 = (i__19488__auto___29182 + (1));
i__19488__auto___29182 = G__29183;
continue;
} else {
}
break;
}

var G__29139 = args29137.length;
switch (G__29139) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29137.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29185,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29185,out){
return (function (state_29160){
var state_val_29161 = (state_29160[(1)]);
if((state_val_29161 === (7))){
var inst_29156 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29162_29186 = state_29160__$1;
(statearr_29162_29186[(2)] = inst_29156);

(statearr_29162_29186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (1))){
var state_29160__$1 = state_29160;
var statearr_29163_29187 = state_29160__$1;
(statearr_29163_29187[(2)] = null);

(statearr_29163_29187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (4))){
var inst_29142 = (state_29160[(7)]);
var inst_29142__$1 = (state_29160[(2)]);
var inst_29143 = (inst_29142__$1 == null);
var state_29160__$1 = (function (){var statearr_29164 = state_29160;
(statearr_29164[(7)] = inst_29142__$1);

return statearr_29164;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29165_29188 = state_29160__$1;
(statearr_29165_29188[(1)] = (5));

} else {
var statearr_29166_29189 = state_29160__$1;
(statearr_29166_29189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (6))){
var inst_29142 = (state_29160[(7)]);
var inst_29147 = p.call(null,inst_29142);
var state_29160__$1 = state_29160;
if(cljs.core.truth_(inst_29147)){
var statearr_29167_29190 = state_29160__$1;
(statearr_29167_29190[(1)] = (8));

} else {
var statearr_29168_29191 = state_29160__$1;
(statearr_29168_29191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (3))){
var inst_29158 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29160__$1,inst_29158);
} else {
if((state_val_29161 === (2))){
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29160__$1,(4),ch);
} else {
if((state_val_29161 === (11))){
var inst_29150 = (state_29160[(2)]);
var state_29160__$1 = state_29160;
var statearr_29169_29192 = state_29160__$1;
(statearr_29169_29192[(2)] = inst_29150);

(statearr_29169_29192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (9))){
var state_29160__$1 = state_29160;
var statearr_29170_29193 = state_29160__$1;
(statearr_29170_29193[(2)] = null);

(statearr_29170_29193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (5))){
var inst_29145 = cljs.core.async.close_BANG_.call(null,out);
var state_29160__$1 = state_29160;
var statearr_29171_29194 = state_29160__$1;
(statearr_29171_29194[(2)] = inst_29145);

(statearr_29171_29194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (10))){
var inst_29153 = (state_29160[(2)]);
var state_29160__$1 = (function (){var statearr_29172 = state_29160;
(statearr_29172[(8)] = inst_29153);

return statearr_29172;
})();
var statearr_29173_29195 = state_29160__$1;
(statearr_29173_29195[(2)] = null);

(statearr_29173_29195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29161 === (8))){
var inst_29142 = (state_29160[(7)]);
var state_29160__$1 = state_29160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29160__$1,(11),out,inst_29142);
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
});})(c__26935__auto___29185,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29185,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29177 = [null,null,null,null,null,null,null,null,null];
(statearr_29177[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29177[(1)] = (1));

return statearr_29177;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29160){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29178){if((e29178 instanceof Object)){
var ex__26827__auto__ = e29178;
var statearr_29179_29196 = state_29160;
(statearr_29179_29196[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29197 = state_29160;
state_29160 = G__29197;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29185,out))
})();
var state__26937__auto__ = (function (){var statearr_29180 = f__26936__auto__.call(null);
(statearr_29180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29185);

return statearr_29180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29185,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29198 = [];
var len__19487__auto___29201 = arguments.length;
var i__19488__auto___29202 = (0);
while(true){
if((i__19488__auto___29202 < len__19487__auto___29201)){
args29198.push((arguments[i__19488__auto___29202]));

var G__29203 = (i__19488__auto___29202 + (1));
i__19488__auto___29202 = G__29203;
continue;
} else {
}
break;
}

var G__29200 = args29198.length;
switch (G__29200) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29198.length)].join('')));

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
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_29370){
var state_val_29371 = (state_29370[(1)]);
if((state_val_29371 === (7))){
var inst_29366 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29372_29413 = state_29370__$1;
(statearr_29372_29413[(2)] = inst_29366);

(statearr_29372_29413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (20))){
var inst_29336 = (state_29370[(7)]);
var inst_29347 = (state_29370[(2)]);
var inst_29348 = cljs.core.next.call(null,inst_29336);
var inst_29322 = inst_29348;
var inst_29323 = null;
var inst_29324 = (0);
var inst_29325 = (0);
var state_29370__$1 = (function (){var statearr_29373 = state_29370;
(statearr_29373[(8)] = inst_29325);

(statearr_29373[(9)] = inst_29324);

(statearr_29373[(10)] = inst_29323);

(statearr_29373[(11)] = inst_29347);

(statearr_29373[(12)] = inst_29322);

return statearr_29373;
})();
var statearr_29374_29414 = state_29370__$1;
(statearr_29374_29414[(2)] = null);

(statearr_29374_29414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (1))){
var state_29370__$1 = state_29370;
var statearr_29375_29415 = state_29370__$1;
(statearr_29375_29415[(2)] = null);

(statearr_29375_29415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (4))){
var inst_29311 = (state_29370[(13)]);
var inst_29311__$1 = (state_29370[(2)]);
var inst_29312 = (inst_29311__$1 == null);
var state_29370__$1 = (function (){var statearr_29376 = state_29370;
(statearr_29376[(13)] = inst_29311__$1);

return statearr_29376;
})();
if(cljs.core.truth_(inst_29312)){
var statearr_29377_29416 = state_29370__$1;
(statearr_29377_29416[(1)] = (5));

} else {
var statearr_29378_29417 = state_29370__$1;
(statearr_29378_29417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (15))){
var state_29370__$1 = state_29370;
var statearr_29382_29418 = state_29370__$1;
(statearr_29382_29418[(2)] = null);

(statearr_29382_29418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (21))){
var state_29370__$1 = state_29370;
var statearr_29383_29419 = state_29370__$1;
(statearr_29383_29419[(2)] = null);

(statearr_29383_29419[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (13))){
var inst_29325 = (state_29370[(8)]);
var inst_29324 = (state_29370[(9)]);
var inst_29323 = (state_29370[(10)]);
var inst_29322 = (state_29370[(12)]);
var inst_29332 = (state_29370[(2)]);
var inst_29333 = (inst_29325 + (1));
var tmp29379 = inst_29324;
var tmp29380 = inst_29323;
var tmp29381 = inst_29322;
var inst_29322__$1 = tmp29381;
var inst_29323__$1 = tmp29380;
var inst_29324__$1 = tmp29379;
var inst_29325__$1 = inst_29333;
var state_29370__$1 = (function (){var statearr_29384 = state_29370;
(statearr_29384[(14)] = inst_29332);

(statearr_29384[(8)] = inst_29325__$1);

(statearr_29384[(9)] = inst_29324__$1);

(statearr_29384[(10)] = inst_29323__$1);

(statearr_29384[(12)] = inst_29322__$1);

return statearr_29384;
})();
var statearr_29385_29420 = state_29370__$1;
(statearr_29385_29420[(2)] = null);

(statearr_29385_29420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (22))){
var state_29370__$1 = state_29370;
var statearr_29386_29421 = state_29370__$1;
(statearr_29386_29421[(2)] = null);

(statearr_29386_29421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (6))){
var inst_29311 = (state_29370[(13)]);
var inst_29320 = f.call(null,inst_29311);
var inst_29321 = cljs.core.seq.call(null,inst_29320);
var inst_29322 = inst_29321;
var inst_29323 = null;
var inst_29324 = (0);
var inst_29325 = (0);
var state_29370__$1 = (function (){var statearr_29387 = state_29370;
(statearr_29387[(8)] = inst_29325);

(statearr_29387[(9)] = inst_29324);

(statearr_29387[(10)] = inst_29323);

(statearr_29387[(12)] = inst_29322);

return statearr_29387;
})();
var statearr_29388_29422 = state_29370__$1;
(statearr_29388_29422[(2)] = null);

(statearr_29388_29422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (17))){
var inst_29336 = (state_29370[(7)]);
var inst_29340 = cljs.core.chunk_first.call(null,inst_29336);
var inst_29341 = cljs.core.chunk_rest.call(null,inst_29336);
var inst_29342 = cljs.core.count.call(null,inst_29340);
var inst_29322 = inst_29341;
var inst_29323 = inst_29340;
var inst_29324 = inst_29342;
var inst_29325 = (0);
var state_29370__$1 = (function (){var statearr_29389 = state_29370;
(statearr_29389[(8)] = inst_29325);

(statearr_29389[(9)] = inst_29324);

(statearr_29389[(10)] = inst_29323);

(statearr_29389[(12)] = inst_29322);

return statearr_29389;
})();
var statearr_29390_29423 = state_29370__$1;
(statearr_29390_29423[(2)] = null);

(statearr_29390_29423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (3))){
var inst_29368 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29370__$1,inst_29368);
} else {
if((state_val_29371 === (12))){
var inst_29356 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29391_29424 = state_29370__$1;
(statearr_29391_29424[(2)] = inst_29356);

(statearr_29391_29424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (2))){
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29370__$1,(4),in$);
} else {
if((state_val_29371 === (23))){
var inst_29364 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29392_29425 = state_29370__$1;
(statearr_29392_29425[(2)] = inst_29364);

(statearr_29392_29425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (19))){
var inst_29351 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29393_29426 = state_29370__$1;
(statearr_29393_29426[(2)] = inst_29351);

(statearr_29393_29426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (11))){
var inst_29336 = (state_29370[(7)]);
var inst_29322 = (state_29370[(12)]);
var inst_29336__$1 = cljs.core.seq.call(null,inst_29322);
var state_29370__$1 = (function (){var statearr_29394 = state_29370;
(statearr_29394[(7)] = inst_29336__$1);

return statearr_29394;
})();
if(inst_29336__$1){
var statearr_29395_29427 = state_29370__$1;
(statearr_29395_29427[(1)] = (14));

} else {
var statearr_29396_29428 = state_29370__$1;
(statearr_29396_29428[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (9))){
var inst_29358 = (state_29370[(2)]);
var inst_29359 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29370__$1 = (function (){var statearr_29397 = state_29370;
(statearr_29397[(15)] = inst_29358);

return statearr_29397;
})();
if(cljs.core.truth_(inst_29359)){
var statearr_29398_29429 = state_29370__$1;
(statearr_29398_29429[(1)] = (21));

} else {
var statearr_29399_29430 = state_29370__$1;
(statearr_29399_29430[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (5))){
var inst_29314 = cljs.core.async.close_BANG_.call(null,out);
var state_29370__$1 = state_29370;
var statearr_29400_29431 = state_29370__$1;
(statearr_29400_29431[(2)] = inst_29314);

(statearr_29400_29431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (14))){
var inst_29336 = (state_29370[(7)]);
var inst_29338 = cljs.core.chunked_seq_QMARK_.call(null,inst_29336);
var state_29370__$1 = state_29370;
if(inst_29338){
var statearr_29401_29432 = state_29370__$1;
(statearr_29401_29432[(1)] = (17));

} else {
var statearr_29402_29433 = state_29370__$1;
(statearr_29402_29433[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (16))){
var inst_29354 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29403_29434 = state_29370__$1;
(statearr_29403_29434[(2)] = inst_29354);

(statearr_29403_29434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (10))){
var inst_29325 = (state_29370[(8)]);
var inst_29323 = (state_29370[(10)]);
var inst_29330 = cljs.core._nth.call(null,inst_29323,inst_29325);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29370__$1,(13),out,inst_29330);
} else {
if((state_val_29371 === (18))){
var inst_29336 = (state_29370[(7)]);
var inst_29345 = cljs.core.first.call(null,inst_29336);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29370__$1,(20),out,inst_29345);
} else {
if((state_val_29371 === (8))){
var inst_29325 = (state_29370[(8)]);
var inst_29324 = (state_29370[(9)]);
var inst_29327 = (inst_29325 < inst_29324);
var inst_29328 = inst_29327;
var state_29370__$1 = state_29370;
if(cljs.core.truth_(inst_29328)){
var statearr_29404_29435 = state_29370__$1;
(statearr_29404_29435[(1)] = (10));

} else {
var statearr_29405_29436 = state_29370__$1;
(statearr_29405_29436[(1)] = (11));

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
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_29409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__);

(statearr_29409[(1)] = (1));

return statearr_29409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1 = (function (state_29370){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29410){if((e29410 instanceof Object)){
var ex__26827__auto__ = e29410;
var statearr_29411_29437 = state_29370;
(statearr_29411_29437[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29438 = state_29370;
state_29370 = G__29438;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__ = function(state_29370){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1.call(this,state_29370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_29412 = f__26936__auto__.call(null);
(statearr_29412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_29412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29439 = [];
var len__19487__auto___29442 = arguments.length;
var i__19488__auto___29443 = (0);
while(true){
if((i__19488__auto___29443 < len__19487__auto___29442)){
args29439.push((arguments[i__19488__auto___29443]));

var G__29444 = (i__19488__auto___29443 + (1));
i__19488__auto___29443 = G__29444;
continue;
} else {
}
break;
}

var G__29441 = args29439.length;
switch (G__29441) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29439.length)].join('')));

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
var args29446 = [];
var len__19487__auto___29449 = arguments.length;
var i__19488__auto___29450 = (0);
while(true){
if((i__19488__auto___29450 < len__19487__auto___29449)){
args29446.push((arguments[i__19488__auto___29450]));

var G__29451 = (i__19488__auto___29450 + (1));
i__19488__auto___29450 = G__29451;
continue;
} else {
}
break;
}

var G__29448 = args29446.length;
switch (G__29448) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29446.length)].join('')));

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
var args29453 = [];
var len__19487__auto___29504 = arguments.length;
var i__19488__auto___29505 = (0);
while(true){
if((i__19488__auto___29505 < len__19487__auto___29504)){
args29453.push((arguments[i__19488__auto___29505]));

var G__29506 = (i__19488__auto___29505 + (1));
i__19488__auto___29505 = G__29506;
continue;
} else {
}
break;
}

var G__29455 = args29453.length;
switch (G__29455) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29453.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29508,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29508,out){
return (function (state_29479){
var state_val_29480 = (state_29479[(1)]);
if((state_val_29480 === (7))){
var inst_29474 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29481_29509 = state_29479__$1;
(statearr_29481_29509[(2)] = inst_29474);

(statearr_29481_29509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (1))){
var inst_29456 = null;
var state_29479__$1 = (function (){var statearr_29482 = state_29479;
(statearr_29482[(7)] = inst_29456);

return statearr_29482;
})();
var statearr_29483_29510 = state_29479__$1;
(statearr_29483_29510[(2)] = null);

(statearr_29483_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (4))){
var inst_29459 = (state_29479[(8)]);
var inst_29459__$1 = (state_29479[(2)]);
var inst_29460 = (inst_29459__$1 == null);
var inst_29461 = cljs.core.not.call(null,inst_29460);
var state_29479__$1 = (function (){var statearr_29484 = state_29479;
(statearr_29484[(8)] = inst_29459__$1);

return statearr_29484;
})();
if(inst_29461){
var statearr_29485_29511 = state_29479__$1;
(statearr_29485_29511[(1)] = (5));

} else {
var statearr_29486_29512 = state_29479__$1;
(statearr_29486_29512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (6))){
var state_29479__$1 = state_29479;
var statearr_29487_29513 = state_29479__$1;
(statearr_29487_29513[(2)] = null);

(statearr_29487_29513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (3))){
var inst_29476 = (state_29479[(2)]);
var inst_29477 = cljs.core.async.close_BANG_.call(null,out);
var state_29479__$1 = (function (){var statearr_29488 = state_29479;
(statearr_29488[(9)] = inst_29476);

return statearr_29488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29479__$1,inst_29477);
} else {
if((state_val_29480 === (2))){
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29479__$1,(4),ch);
} else {
if((state_val_29480 === (11))){
var inst_29459 = (state_29479[(8)]);
var inst_29468 = (state_29479[(2)]);
var inst_29456 = inst_29459;
var state_29479__$1 = (function (){var statearr_29489 = state_29479;
(statearr_29489[(10)] = inst_29468);

(statearr_29489[(7)] = inst_29456);

return statearr_29489;
})();
var statearr_29490_29514 = state_29479__$1;
(statearr_29490_29514[(2)] = null);

(statearr_29490_29514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (9))){
var inst_29459 = (state_29479[(8)]);
var state_29479__$1 = state_29479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29479__$1,(11),out,inst_29459);
} else {
if((state_val_29480 === (5))){
var inst_29459 = (state_29479[(8)]);
var inst_29456 = (state_29479[(7)]);
var inst_29463 = cljs.core._EQ_.call(null,inst_29459,inst_29456);
var state_29479__$1 = state_29479;
if(inst_29463){
var statearr_29492_29515 = state_29479__$1;
(statearr_29492_29515[(1)] = (8));

} else {
var statearr_29493_29516 = state_29479__$1;
(statearr_29493_29516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (10))){
var inst_29471 = (state_29479[(2)]);
var state_29479__$1 = state_29479;
var statearr_29494_29517 = state_29479__$1;
(statearr_29494_29517[(2)] = inst_29471);

(statearr_29494_29517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29480 === (8))){
var inst_29456 = (state_29479[(7)]);
var tmp29491 = inst_29456;
var inst_29456__$1 = tmp29491;
var state_29479__$1 = (function (){var statearr_29495 = state_29479;
(statearr_29495[(7)] = inst_29456__$1);

return statearr_29495;
})();
var statearr_29496_29518 = state_29479__$1;
(statearr_29496_29518[(2)] = null);

(statearr_29496_29518[(1)] = (2));


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
});})(c__26935__auto___29508,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29508,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29479){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29501){if((e29501 instanceof Object)){
var ex__26827__auto__ = e29501;
var statearr_29502_29519 = state_29479;
(statearr_29502_29519[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29520 = state_29479;
state_29479 = G__29520;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29508,out))
})();
var state__26937__auto__ = (function (){var statearr_29503 = f__26936__auto__.call(null);
(statearr_29503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29508);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29508,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29521 = [];
var len__19487__auto___29591 = arguments.length;
var i__19488__auto___29592 = (0);
while(true){
if((i__19488__auto___29592 < len__19487__auto___29591)){
args29521.push((arguments[i__19488__auto___29592]));

var G__29593 = (i__19488__auto___29592 + (1));
i__19488__auto___29592 = G__29593;
continue;
} else {
}
break;
}

var G__29523 = args29521.length;
switch (G__29523) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29521.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29595,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29595,out){
return (function (state_29561){
var state_val_29562 = (state_29561[(1)]);
if((state_val_29562 === (7))){
var inst_29557 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29563_29596 = state_29561__$1;
(statearr_29563_29596[(2)] = inst_29557);

(statearr_29563_29596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (1))){
var inst_29524 = (new Array(n));
var inst_29525 = inst_29524;
var inst_29526 = (0);
var state_29561__$1 = (function (){var statearr_29564 = state_29561;
(statearr_29564[(7)] = inst_29525);

(statearr_29564[(8)] = inst_29526);

return statearr_29564;
})();
var statearr_29565_29597 = state_29561__$1;
(statearr_29565_29597[(2)] = null);

(statearr_29565_29597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (4))){
var inst_29529 = (state_29561[(9)]);
var inst_29529__$1 = (state_29561[(2)]);
var inst_29530 = (inst_29529__$1 == null);
var inst_29531 = cljs.core.not.call(null,inst_29530);
var state_29561__$1 = (function (){var statearr_29566 = state_29561;
(statearr_29566[(9)] = inst_29529__$1);

return statearr_29566;
})();
if(inst_29531){
var statearr_29567_29598 = state_29561__$1;
(statearr_29567_29598[(1)] = (5));

} else {
var statearr_29568_29599 = state_29561__$1;
(statearr_29568_29599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (15))){
var inst_29551 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29569_29600 = state_29561__$1;
(statearr_29569_29600[(2)] = inst_29551);

(statearr_29569_29600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (13))){
var state_29561__$1 = state_29561;
var statearr_29570_29601 = state_29561__$1;
(statearr_29570_29601[(2)] = null);

(statearr_29570_29601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (6))){
var inst_29526 = (state_29561[(8)]);
var inst_29547 = (inst_29526 > (0));
var state_29561__$1 = state_29561;
if(cljs.core.truth_(inst_29547)){
var statearr_29571_29602 = state_29561__$1;
(statearr_29571_29602[(1)] = (12));

} else {
var statearr_29572_29603 = state_29561__$1;
(statearr_29572_29603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (3))){
var inst_29559 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29561__$1,inst_29559);
} else {
if((state_val_29562 === (12))){
var inst_29525 = (state_29561[(7)]);
var inst_29549 = cljs.core.vec.call(null,inst_29525);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(15),out,inst_29549);
} else {
if((state_val_29562 === (2))){
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29561__$1,(4),ch);
} else {
if((state_val_29562 === (11))){
var inst_29541 = (state_29561[(2)]);
var inst_29542 = (new Array(n));
var inst_29525 = inst_29542;
var inst_29526 = (0);
var state_29561__$1 = (function (){var statearr_29573 = state_29561;
(statearr_29573[(7)] = inst_29525);

(statearr_29573[(8)] = inst_29526);

(statearr_29573[(10)] = inst_29541);

return statearr_29573;
})();
var statearr_29574_29604 = state_29561__$1;
(statearr_29574_29604[(2)] = null);

(statearr_29574_29604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (9))){
var inst_29525 = (state_29561[(7)]);
var inst_29539 = cljs.core.vec.call(null,inst_29525);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(11),out,inst_29539);
} else {
if((state_val_29562 === (5))){
var inst_29529 = (state_29561[(9)]);
var inst_29525 = (state_29561[(7)]);
var inst_29526 = (state_29561[(8)]);
var inst_29534 = (state_29561[(11)]);
var inst_29533 = (inst_29525[inst_29526] = inst_29529);
var inst_29534__$1 = (inst_29526 + (1));
var inst_29535 = (inst_29534__$1 < n);
var state_29561__$1 = (function (){var statearr_29575 = state_29561;
(statearr_29575[(12)] = inst_29533);

(statearr_29575[(11)] = inst_29534__$1);

return statearr_29575;
})();
if(cljs.core.truth_(inst_29535)){
var statearr_29576_29605 = state_29561__$1;
(statearr_29576_29605[(1)] = (8));

} else {
var statearr_29577_29606 = state_29561__$1;
(statearr_29577_29606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (14))){
var inst_29554 = (state_29561[(2)]);
var inst_29555 = cljs.core.async.close_BANG_.call(null,out);
var state_29561__$1 = (function (){var statearr_29579 = state_29561;
(statearr_29579[(13)] = inst_29554);

return statearr_29579;
})();
var statearr_29580_29607 = state_29561__$1;
(statearr_29580_29607[(2)] = inst_29555);

(statearr_29580_29607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (10))){
var inst_29545 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29581_29608 = state_29561__$1;
(statearr_29581_29608[(2)] = inst_29545);

(statearr_29581_29608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (8))){
var inst_29525 = (state_29561[(7)]);
var inst_29534 = (state_29561[(11)]);
var tmp29578 = inst_29525;
var inst_29525__$1 = tmp29578;
var inst_29526 = inst_29534;
var state_29561__$1 = (function (){var statearr_29582 = state_29561;
(statearr_29582[(7)] = inst_29525__$1);

(statearr_29582[(8)] = inst_29526);

return statearr_29582;
})();
var statearr_29583_29609 = state_29561__$1;
(statearr_29583_29609[(2)] = null);

(statearr_29583_29609[(1)] = (2));


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
});})(c__26935__auto___29595,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29595,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29587[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29587[(1)] = (1));

return statearr_29587;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29561){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29588){if((e29588 instanceof Object)){
var ex__26827__auto__ = e29588;
var statearr_29589_29610 = state_29561;
(statearr_29589_29610[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29611 = state_29561;
state_29561 = G__29611;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29595,out))
})();
var state__26937__auto__ = (function (){var statearr_29590 = f__26936__auto__.call(null);
(statearr_29590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29595);

return statearr_29590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29595,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29612 = [];
var len__19487__auto___29686 = arguments.length;
var i__19488__auto___29687 = (0);
while(true){
if((i__19488__auto___29687 < len__19487__auto___29686)){
args29612.push((arguments[i__19488__auto___29687]));

var G__29688 = (i__19488__auto___29687 + (1));
i__19488__auto___29687 = G__29688;
continue;
} else {
}
break;
}

var G__29614 = args29612.length;
switch (G__29614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29612.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26935__auto___29690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___29690,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___29690,out){
return (function (state_29656){
var state_val_29657 = (state_29656[(1)]);
if((state_val_29657 === (7))){
var inst_29652 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29658_29691 = state_29656__$1;
(statearr_29658_29691[(2)] = inst_29652);

(statearr_29658_29691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (1))){
var inst_29615 = [];
var inst_29616 = inst_29615;
var inst_29617 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29656__$1 = (function (){var statearr_29659 = state_29656;
(statearr_29659[(7)] = inst_29617);

(statearr_29659[(8)] = inst_29616);

return statearr_29659;
})();
var statearr_29660_29692 = state_29656__$1;
(statearr_29660_29692[(2)] = null);

(statearr_29660_29692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (4))){
var inst_29620 = (state_29656[(9)]);
var inst_29620__$1 = (state_29656[(2)]);
var inst_29621 = (inst_29620__$1 == null);
var inst_29622 = cljs.core.not.call(null,inst_29621);
var state_29656__$1 = (function (){var statearr_29661 = state_29656;
(statearr_29661[(9)] = inst_29620__$1);

return statearr_29661;
})();
if(inst_29622){
var statearr_29662_29693 = state_29656__$1;
(statearr_29662_29693[(1)] = (5));

} else {
var statearr_29663_29694 = state_29656__$1;
(statearr_29663_29694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (15))){
var inst_29646 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29664_29695 = state_29656__$1;
(statearr_29664_29695[(2)] = inst_29646);

(statearr_29664_29695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (13))){
var state_29656__$1 = state_29656;
var statearr_29665_29696 = state_29656__$1;
(statearr_29665_29696[(2)] = null);

(statearr_29665_29696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (6))){
var inst_29616 = (state_29656[(8)]);
var inst_29641 = inst_29616.length;
var inst_29642 = (inst_29641 > (0));
var state_29656__$1 = state_29656;
if(cljs.core.truth_(inst_29642)){
var statearr_29666_29697 = state_29656__$1;
(statearr_29666_29697[(1)] = (12));

} else {
var statearr_29667_29698 = state_29656__$1;
(statearr_29667_29698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (3))){
var inst_29654 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29656__$1,inst_29654);
} else {
if((state_val_29657 === (12))){
var inst_29616 = (state_29656[(8)]);
var inst_29644 = cljs.core.vec.call(null,inst_29616);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29656__$1,(15),out,inst_29644);
} else {
if((state_val_29657 === (2))){
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29656__$1,(4),ch);
} else {
if((state_val_29657 === (11))){
var inst_29624 = (state_29656[(10)]);
var inst_29620 = (state_29656[(9)]);
var inst_29634 = (state_29656[(2)]);
var inst_29635 = [];
var inst_29636 = inst_29635.push(inst_29620);
var inst_29616 = inst_29635;
var inst_29617 = inst_29624;
var state_29656__$1 = (function (){var statearr_29668 = state_29656;
(statearr_29668[(7)] = inst_29617);

(statearr_29668[(11)] = inst_29636);

(statearr_29668[(8)] = inst_29616);

(statearr_29668[(12)] = inst_29634);

return statearr_29668;
})();
var statearr_29669_29699 = state_29656__$1;
(statearr_29669_29699[(2)] = null);

(statearr_29669_29699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (9))){
var inst_29616 = (state_29656[(8)]);
var inst_29632 = cljs.core.vec.call(null,inst_29616);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29656__$1,(11),out,inst_29632);
} else {
if((state_val_29657 === (5))){
var inst_29617 = (state_29656[(7)]);
var inst_29624 = (state_29656[(10)]);
var inst_29620 = (state_29656[(9)]);
var inst_29624__$1 = f.call(null,inst_29620);
var inst_29625 = cljs.core._EQ_.call(null,inst_29624__$1,inst_29617);
var inst_29626 = cljs.core.keyword_identical_QMARK_.call(null,inst_29617,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29627 = (inst_29625) || (inst_29626);
var state_29656__$1 = (function (){var statearr_29670 = state_29656;
(statearr_29670[(10)] = inst_29624__$1);

return statearr_29670;
})();
if(cljs.core.truth_(inst_29627)){
var statearr_29671_29700 = state_29656__$1;
(statearr_29671_29700[(1)] = (8));

} else {
var statearr_29672_29701 = state_29656__$1;
(statearr_29672_29701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (14))){
var inst_29649 = (state_29656[(2)]);
var inst_29650 = cljs.core.async.close_BANG_.call(null,out);
var state_29656__$1 = (function (){var statearr_29674 = state_29656;
(statearr_29674[(13)] = inst_29649);

return statearr_29674;
})();
var statearr_29675_29702 = state_29656__$1;
(statearr_29675_29702[(2)] = inst_29650);

(statearr_29675_29702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (10))){
var inst_29639 = (state_29656[(2)]);
var state_29656__$1 = state_29656;
var statearr_29676_29703 = state_29656__$1;
(statearr_29676_29703[(2)] = inst_29639);

(statearr_29676_29703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29657 === (8))){
var inst_29624 = (state_29656[(10)]);
var inst_29616 = (state_29656[(8)]);
var inst_29620 = (state_29656[(9)]);
var inst_29629 = inst_29616.push(inst_29620);
var tmp29673 = inst_29616;
var inst_29616__$1 = tmp29673;
var inst_29617 = inst_29624;
var state_29656__$1 = (function (){var statearr_29677 = state_29656;
(statearr_29677[(7)] = inst_29617);

(statearr_29677[(14)] = inst_29629);

(statearr_29677[(8)] = inst_29616__$1);

return statearr_29677;
})();
var statearr_29678_29704 = state_29656__$1;
(statearr_29678_29704[(2)] = null);

(statearr_29678_29704[(1)] = (2));


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
});})(c__26935__auto___29690,out))
;
return ((function (switch__26823__auto__,c__26935__auto___29690,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29682[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29682[(1)] = (1));

return statearr_29682;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29656){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29683){if((e29683 instanceof Object)){
var ex__26827__auto__ = e29683;
var statearr_29684_29705 = state_29656;
(statearr_29684_29705[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29706 = state_29656;
state_29656 = G__29706;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___29690,out))
})();
var state__26937__auto__ = (function (){var statearr_29685 = f__26936__auto__.call(null);
(statearr_29685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___29690);

return statearr_29685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___29690,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map