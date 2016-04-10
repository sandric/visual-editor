// Compiled by ClojureScript 1.8.40 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__18418__auto__ = (function (){var and__18406__auto__ = typeof ReactDOM !== 'undefined';
if(and__18406__auto__){
return ReactDOM;
} else {
return and__18406__auto__;
}
})();
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
var and__18406__auto__ = typeof require !== 'undefined';
if(and__18406__auto__){
return require("react-dom");
} else {
return and__18406__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_23342 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23342){
return (function (){
var _STAR_always_update_STAR_23343 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23343;
}});})(_STAR_always_update_STAR_23342))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23342;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args23344 = [];
var len__19487__auto___23347 = arguments.length;
var i__19488__auto___23348 = (0);
while(true){
if((i__19488__auto___23348 < len__19487__auto___23347)){
args23344.push((arguments[i__19488__auto___23348]));

var G__23349 = (i__19488__auto___23348 + (1));
i__19488__auto___23348 = G__23349;
continue;
} else {
}
break;
}

var G__23346 = args23344.length;
switch (G__23346) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23344.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__23355_23359 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__23356_23360 = null;
var count__23357_23361 = (0);
var i__23358_23362 = (0);
while(true){
if((i__23358_23362 < count__23357_23361)){
var v_23363 = cljs.core._nth.call(null,chunk__23356_23360,i__23358_23362);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23363);

var G__23364 = seq__23355_23359;
var G__23365 = chunk__23356_23360;
var G__23366 = count__23357_23361;
var G__23367 = (i__23358_23362 + (1));
seq__23355_23359 = G__23364;
chunk__23356_23360 = G__23365;
count__23357_23361 = G__23366;
i__23358_23362 = G__23367;
continue;
} else {
var temp__4657__auto___23368 = cljs.core.seq.call(null,seq__23355_23359);
if(temp__4657__auto___23368){
var seq__23355_23369__$1 = temp__4657__auto___23368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23355_23369__$1)){
var c__19229__auto___23370 = cljs.core.chunk_first.call(null,seq__23355_23369__$1);
var G__23371 = cljs.core.chunk_rest.call(null,seq__23355_23369__$1);
var G__23372 = c__19229__auto___23370;
var G__23373 = cljs.core.count.call(null,c__19229__auto___23370);
var G__23374 = (0);
seq__23355_23359 = G__23371;
chunk__23356_23360 = G__23372;
count__23357_23361 = G__23373;
i__23358_23362 = G__23374;
continue;
} else {
var v_23375 = cljs.core.first.call(null,seq__23355_23369__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23375);

var G__23376 = cljs.core.next.call(null,seq__23355_23369__$1);
var G__23377 = null;
var G__23378 = (0);
var G__23379 = (0);
seq__23355_23359 = G__23376;
chunk__23356_23360 = G__23377;
count__23357_23361 = G__23378;
i__23358_23362 = G__23379;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map