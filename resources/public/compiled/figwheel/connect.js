// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('visual_editor.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__23352__delegate = function (x){
if(cljs.core.truth_(visual_editor.core.on_js_reload)){
return cljs.core.apply.call(null,visual_editor.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'visual-editor.core/on-js-reload' is missing");
}
};
var G__23352 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23353__i = 0, G__23353__a = new Array(arguments.length -  0);
while (G__23353__i < G__23353__a.length) {G__23353__a[G__23353__i] = arguments[G__23353__i + 0]; ++G__23353__i;}
  x = new cljs.core.IndexedSeq(G__23353__a,0);
} 
return G__23352__delegate.call(this,x);};
G__23352.cljs$lang$maxFixedArity = 0;
G__23352.cljs$lang$applyTo = (function (arglist__23354){
var x = cljs.core.seq(arglist__23354);
return G__23352__delegate(x);
});
G__23352.cljs$core$IFn$_invoke$arity$variadic = G__23352__delegate;
return G__23352;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map