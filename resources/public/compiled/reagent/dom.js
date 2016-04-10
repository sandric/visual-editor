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
var _STAR_always_update_STAR_20074 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_20074){
return (function (){
var _STAR_always_update_STAR_20075 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20075;
}});})(_STAR_always_update_STAR_20074))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20074;
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
var args20076 = [];
var len__19487__auto___20079 = arguments.length;
var i__19488__auto___20080 = (0);
while(true){
if((i__19488__auto___20080 < len__19487__auto___20079)){
args20076.push((arguments[i__19488__auto___20080]));

var G__20081 = (i__19488__auto___20080 + (1));
i__19488__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__20078 = args20076.length;
switch (G__20078) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20076.length)].join('')));

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
var seq__20087_20091 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20088_20092 = null;
var count__20089_20093 = (0);
var i__20090_20094 = (0);
while(true){
if((i__20090_20094 < count__20089_20093)){
var v_20095 = cljs.core._nth.call(null,chunk__20088_20092,i__20090_20094);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20095);

var G__20096 = seq__20087_20091;
var G__20097 = chunk__20088_20092;
var G__20098 = count__20089_20093;
var G__20099 = (i__20090_20094 + (1));
seq__20087_20091 = G__20096;
chunk__20088_20092 = G__20097;
count__20089_20093 = G__20098;
i__20090_20094 = G__20099;
continue;
} else {
var temp__4657__auto___20100 = cljs.core.seq.call(null,seq__20087_20091);
if(temp__4657__auto___20100){
var seq__20087_20101__$1 = temp__4657__auto___20100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20087_20101__$1)){
var c__19229__auto___20102 = cljs.core.chunk_first.call(null,seq__20087_20101__$1);
var G__20103 = cljs.core.chunk_rest.call(null,seq__20087_20101__$1);
var G__20104 = c__19229__auto___20102;
var G__20105 = cljs.core.count.call(null,c__19229__auto___20102);
var G__20106 = (0);
seq__20087_20091 = G__20103;
chunk__20088_20092 = G__20104;
count__20089_20093 = G__20105;
i__20090_20094 = G__20106;
continue;
} else {
var v_20107 = cljs.core.first.call(null,seq__20087_20101__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20107);

var G__20108 = cljs.core.next.call(null,seq__20087_20101__$1);
var G__20109 = null;
var G__20110 = (0);
var G__20111 = (0);
seq__20087_20091 = G__20108;
chunk__20088_20092 = G__20109;
count__20089_20093 = G__20110;
i__20090_20094 = G__20111;
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