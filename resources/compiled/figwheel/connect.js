// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('yizhackclj.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31994__delegate = function (x){
if(cljs.core.truth_(yizhackclj.core.on_js_reload)){
return cljs.core.apply.call(null,yizhackclj.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'yizhackclj.core/on-js-reload' is missing");
}
};
var G__31994 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31995__i = 0, G__31995__a = new Array(arguments.length -  0);
while (G__31995__i < G__31995__a.length) {G__31995__a[G__31995__i] = arguments[G__31995__i + 0]; ++G__31995__i;}
  x = new cljs.core.IndexedSeq(G__31995__a,0);
} 
return G__31994__delegate.call(this,x);};
G__31994.cljs$lang$maxFixedArity = 0;
G__31994.cljs$lang$applyTo = (function (arglist__31996){
var x = cljs.core.seq(arglist__31996);
return G__31994__delegate(x);
});
G__31994.cljs$core$IFn$_invoke$arity$variadic = G__31994__delegate;
return G__31994;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map