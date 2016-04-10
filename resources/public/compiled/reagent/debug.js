// Compiled by ClojureScript 1.8.40 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19644__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19645__i = 0, G__19645__a = new Array(arguments.length -  0);
while (G__19645__i < G__19645__a.length) {G__19645__a[G__19645__i] = arguments[G__19645__i + 0]; ++G__19645__i;}
  args = new cljs.core.IndexedSeq(G__19645__a,0);
} 
return G__19644__delegate.call(this,args);};
G__19644.cljs$lang$maxFixedArity = 0;
G__19644.cljs$lang$applyTo = (function (arglist__19646){
var args = cljs.core.seq(arglist__19646);
return G__19644__delegate(args);
});
G__19644.cljs$core$IFn$_invoke$arity$variadic = G__19644__delegate;
return G__19644;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19647__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19648__i = 0, G__19648__a = new Array(arguments.length -  0);
while (G__19648__i < G__19648__a.length) {G__19648__a[G__19648__i] = arguments[G__19648__i + 0]; ++G__19648__i;}
  args = new cljs.core.IndexedSeq(G__19648__a,0);
} 
return G__19647__delegate.call(this,args);};
G__19647.cljs$lang$maxFixedArity = 0;
G__19647.cljs$lang$applyTo = (function (arglist__19649){
var args = cljs.core.seq(arglist__19649);
return G__19647__delegate(args);
});
G__19647.cljs$core$IFn$_invoke$arity$variadic = G__19647__delegate;
return G__19647;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map