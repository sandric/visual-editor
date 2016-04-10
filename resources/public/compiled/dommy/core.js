// Compiled by ClojureScript 1.8.40 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__18418__auto__ = elem.textContent;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args25069 = [];
var len__19487__auto___25072 = arguments.length;
var i__19488__auto___25073 = (0);
while(true){
if((i__19488__auto___25073 < len__19487__auto___25072)){
args25069.push((arguments[i__19488__auto___25073]));

var G__25074 = (i__19488__auto___25073 + (1));
i__19488__auto___25073 = G__25074;
continue;
} else {
}
break;
}

var G__25071 = args25069.length;
switch (G__25071) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25069.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args25076 = [];
var len__19487__auto___25079 = arguments.length;
var i__19488__auto___25080 = (0);
while(true){
if((i__19488__auto___25080 < len__19487__auto___25079)){
args25076.push((arguments[i__19488__auto___25080]));

var G__25081 = (i__19488__auto___25080 + (1));
i__19488__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var G__25078 = args25076.length;
switch (G__25078) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25076.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args25084 = [];
var len__19487__auto___25087 = arguments.length;
var i__19488__auto___25088 = (0);
while(true){
if((i__19488__auto___25088 < len__19487__auto___25087)){
args25084.push((arguments[i__19488__auto___25088]));

var G__25089 = (i__19488__auto___25088 + (1));
i__19488__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var G__25086 = args25084.length;
switch (G__25086) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25084.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__25083_SHARP_){
return !((p1__25083_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25099 = arguments.length;
var i__19488__auto___25100 = (0);
while(true){
if((i__19488__auto___25100 < len__19487__auto___25099)){
args__19494__auto__.push((arguments[i__19488__auto___25100]));

var G__25101 = (i__19488__auto___25100 + (1));
i__19488__auto___25100 = G__25101;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__25093_25102 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__25094_25103 = null;
var count__25095_25104 = (0);
var i__25096_25105 = (0);
while(true){
if((i__25096_25105 < count__25095_25104)){
var vec__25097_25106 = cljs.core._nth.call(null,chunk__25094_25103,i__25096_25105);
var k_25107 = cljs.core.nth.call(null,vec__25097_25106,(0),null);
var v_25108 = cljs.core.nth.call(null,vec__25097_25106,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25107),v_25108);

var G__25109 = seq__25093_25102;
var G__25110 = chunk__25094_25103;
var G__25111 = count__25095_25104;
var G__25112 = (i__25096_25105 + (1));
seq__25093_25102 = G__25109;
chunk__25094_25103 = G__25110;
count__25095_25104 = G__25111;
i__25096_25105 = G__25112;
continue;
} else {
var temp__4657__auto___25113 = cljs.core.seq.call(null,seq__25093_25102);
if(temp__4657__auto___25113){
var seq__25093_25114__$1 = temp__4657__auto___25113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25093_25114__$1)){
var c__19229__auto___25115 = cljs.core.chunk_first.call(null,seq__25093_25114__$1);
var G__25116 = cljs.core.chunk_rest.call(null,seq__25093_25114__$1);
var G__25117 = c__19229__auto___25115;
var G__25118 = cljs.core.count.call(null,c__19229__auto___25115);
var G__25119 = (0);
seq__25093_25102 = G__25116;
chunk__25094_25103 = G__25117;
count__25095_25104 = G__25118;
i__25096_25105 = G__25119;
continue;
} else {
var vec__25098_25120 = cljs.core.first.call(null,seq__25093_25114__$1);
var k_25121 = cljs.core.nth.call(null,vec__25098_25120,(0),null);
var v_25122 = cljs.core.nth.call(null,vec__25098_25120,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_25121),v_25122);

var G__25123 = cljs.core.next.call(null,seq__25093_25114__$1);
var G__25124 = null;
var G__25125 = (0);
var G__25126 = (0);
seq__25093_25102 = G__25123;
chunk__25094_25103 = G__25124;
count__25095_25104 = G__25125;
i__25096_25105 = G__25126;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq25091){
var G__25092 = cljs.core.first.call(null,seq25091);
var seq25091__$1 = cljs.core.next.call(null,seq25091);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25092,seq25091__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25133 = arguments.length;
var i__19488__auto___25134 = (0);
while(true){
if((i__19488__auto___25134 < len__19487__auto___25133)){
args__19494__auto__.push((arguments[i__19488__auto___25134]));

var G__25135 = (i__19488__auto___25134 + (1));
i__19488__auto___25134 = G__25135;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__25129_25136 = cljs.core.seq.call(null,keywords);
var chunk__25130_25137 = null;
var count__25131_25138 = (0);
var i__25132_25139 = (0);
while(true){
if((i__25132_25139 < count__25131_25138)){
var kw_25140 = cljs.core._nth.call(null,chunk__25130_25137,i__25132_25139);
style.removeProperty(dommy.utils.as_str.call(null,kw_25140));

var G__25141 = seq__25129_25136;
var G__25142 = chunk__25130_25137;
var G__25143 = count__25131_25138;
var G__25144 = (i__25132_25139 + (1));
seq__25129_25136 = G__25141;
chunk__25130_25137 = G__25142;
count__25131_25138 = G__25143;
i__25132_25139 = G__25144;
continue;
} else {
var temp__4657__auto___25145 = cljs.core.seq.call(null,seq__25129_25136);
if(temp__4657__auto___25145){
var seq__25129_25146__$1 = temp__4657__auto___25145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25129_25146__$1)){
var c__19229__auto___25147 = cljs.core.chunk_first.call(null,seq__25129_25146__$1);
var G__25148 = cljs.core.chunk_rest.call(null,seq__25129_25146__$1);
var G__25149 = c__19229__auto___25147;
var G__25150 = cljs.core.count.call(null,c__19229__auto___25147);
var G__25151 = (0);
seq__25129_25136 = G__25148;
chunk__25130_25137 = G__25149;
count__25131_25138 = G__25150;
i__25132_25139 = G__25151;
continue;
} else {
var kw_25152 = cljs.core.first.call(null,seq__25129_25146__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_25152));

var G__25153 = cljs.core.next.call(null,seq__25129_25146__$1);
var G__25154 = null;
var G__25155 = (0);
var G__25156 = (0);
seq__25129_25136 = G__25153;
chunk__25130_25137 = G__25154;
count__25131_25138 = G__25155;
i__25132_25139 = G__25156;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq25127){
var G__25128 = cljs.core.first.call(null,seq25127);
var seq25127__$1 = cljs.core.next.call(null,seq25127);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25128,seq25127__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25165 = arguments.length;
var i__19488__auto___25166 = (0);
while(true){
if((i__19488__auto___25166 < len__19487__auto___25165)){
args__19494__auto__.push((arguments[i__19488__auto___25166]));

var G__25167 = (i__19488__auto___25166 + (1));
i__19488__auto___25166 = G__25167;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__25159_25168 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__25160_25169 = null;
var count__25161_25170 = (0);
var i__25162_25171 = (0);
while(true){
if((i__25162_25171 < count__25161_25170)){
var vec__25163_25172 = cljs.core._nth.call(null,chunk__25160_25169,i__25162_25171);
var k_25173 = cljs.core.nth.call(null,vec__25163_25172,(0),null);
var v_25174 = cljs.core.nth.call(null,vec__25163_25172,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_25173,[cljs.core.str(v_25174),cljs.core.str("px")].join(''));

var G__25175 = seq__25159_25168;
var G__25176 = chunk__25160_25169;
var G__25177 = count__25161_25170;
var G__25178 = (i__25162_25171 + (1));
seq__25159_25168 = G__25175;
chunk__25160_25169 = G__25176;
count__25161_25170 = G__25177;
i__25162_25171 = G__25178;
continue;
} else {
var temp__4657__auto___25179 = cljs.core.seq.call(null,seq__25159_25168);
if(temp__4657__auto___25179){
var seq__25159_25180__$1 = temp__4657__auto___25179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25159_25180__$1)){
var c__19229__auto___25181 = cljs.core.chunk_first.call(null,seq__25159_25180__$1);
var G__25182 = cljs.core.chunk_rest.call(null,seq__25159_25180__$1);
var G__25183 = c__19229__auto___25181;
var G__25184 = cljs.core.count.call(null,c__19229__auto___25181);
var G__25185 = (0);
seq__25159_25168 = G__25182;
chunk__25160_25169 = G__25183;
count__25161_25170 = G__25184;
i__25162_25171 = G__25185;
continue;
} else {
var vec__25164_25186 = cljs.core.first.call(null,seq__25159_25180__$1);
var k_25187 = cljs.core.nth.call(null,vec__25164_25186,(0),null);
var v_25188 = cljs.core.nth.call(null,vec__25164_25186,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_25187,[cljs.core.str(v_25188),cljs.core.str("px")].join(''));

var G__25189 = cljs.core.next.call(null,seq__25159_25180__$1);
var G__25190 = null;
var G__25191 = (0);
var G__25192 = (0);
seq__25159_25168 = G__25189;
chunk__25160_25169 = G__25190;
count__25161_25170 = G__25191;
i__25162_25171 = G__25192;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq25157){
var G__25158 = cljs.core.first.call(null,seq25157);
var seq25157__$1 = cljs.core.next.call(null,seq25157);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25158,seq25157__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args25193 = [];
var len__19487__auto___25208 = arguments.length;
var i__19488__auto___25209 = (0);
while(true){
if((i__19488__auto___25209 < len__19487__auto___25208)){
args25193.push((arguments[i__19488__auto___25209]));

var G__25210 = (i__19488__auto___25209 + (1));
i__19488__auto___25209 = G__25210;
continue;
} else {
}
break;
}

var G__25199 = args25193.length;
switch (G__25199) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25193.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19506__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__25200 = elem;
(G__25200[k__$1] = v);

return G__25200;
} else {
var G__25201 = elem;
G__25201.setAttribute(k__$1,v);

return G__25201;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__25202_25212 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__25203_25213 = null;
var count__25204_25214 = (0);
var i__25205_25215 = (0);
while(true){
if((i__25205_25215 < count__25204_25214)){
var vec__25206_25216 = cljs.core._nth.call(null,chunk__25203_25213,i__25205_25215);
var k_25217__$1 = cljs.core.nth.call(null,vec__25206_25216,(0),null);
var v_25218__$1 = cljs.core.nth.call(null,vec__25206_25216,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_25217__$1,v_25218__$1);

var G__25219 = seq__25202_25212;
var G__25220 = chunk__25203_25213;
var G__25221 = count__25204_25214;
var G__25222 = (i__25205_25215 + (1));
seq__25202_25212 = G__25219;
chunk__25203_25213 = G__25220;
count__25204_25214 = G__25221;
i__25205_25215 = G__25222;
continue;
} else {
var temp__4657__auto___25223 = cljs.core.seq.call(null,seq__25202_25212);
if(temp__4657__auto___25223){
var seq__25202_25224__$1 = temp__4657__auto___25223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25202_25224__$1)){
var c__19229__auto___25225 = cljs.core.chunk_first.call(null,seq__25202_25224__$1);
var G__25226 = cljs.core.chunk_rest.call(null,seq__25202_25224__$1);
var G__25227 = c__19229__auto___25225;
var G__25228 = cljs.core.count.call(null,c__19229__auto___25225);
var G__25229 = (0);
seq__25202_25212 = G__25226;
chunk__25203_25213 = G__25227;
count__25204_25214 = G__25228;
i__25205_25215 = G__25229;
continue;
} else {
var vec__25207_25230 = cljs.core.first.call(null,seq__25202_25224__$1);
var k_25231__$1 = cljs.core.nth.call(null,vec__25207_25230,(0),null);
var v_25232__$1 = cljs.core.nth.call(null,vec__25207_25230,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_25231__$1,v_25232__$1);

var G__25233 = cljs.core.next.call(null,seq__25202_25224__$1);
var G__25234 = null;
var G__25235 = (0);
var G__25236 = (0);
seq__25202_25212 = G__25233;
chunk__25203_25213 = G__25234;
count__25204_25214 = G__25235;
i__25205_25215 = G__25236;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq25194){
var G__25195 = cljs.core.first.call(null,seq25194);
var seq25194__$1 = cljs.core.next.call(null,seq25194);
var G__25196 = cljs.core.first.call(null,seq25194__$1);
var seq25194__$2 = cljs.core.next.call(null,seq25194__$1);
var G__25197 = cljs.core.first.call(null,seq25194__$2);
var seq25194__$3 = cljs.core.next.call(null,seq25194__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25195,G__25196,G__25197,seq25194__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args25237 = [];
var len__19487__auto___25247 = arguments.length;
var i__19488__auto___25248 = (0);
while(true){
if((i__19488__auto___25248 < len__19487__auto___25247)){
args25237.push((arguments[i__19488__auto___25248]));

var G__25249 = (i__19488__auto___25248 + (1));
i__19488__auto___25248 = G__25249;
continue;
} else {
}
break;
}

var G__25242 = args25237.length;
switch (G__25242) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25237.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_25251__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_25251__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_25251__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__25243_25252 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__25244_25253 = null;
var count__25245_25254 = (0);
var i__25246_25255 = (0);
while(true){
if((i__25246_25255 < count__25245_25254)){
var k_25256__$1 = cljs.core._nth.call(null,chunk__25244_25253,i__25246_25255);
dommy.core.remove_attr_BANG_.call(null,elem,k_25256__$1);

var G__25257 = seq__25243_25252;
var G__25258 = chunk__25244_25253;
var G__25259 = count__25245_25254;
var G__25260 = (i__25246_25255 + (1));
seq__25243_25252 = G__25257;
chunk__25244_25253 = G__25258;
count__25245_25254 = G__25259;
i__25246_25255 = G__25260;
continue;
} else {
var temp__4657__auto___25261 = cljs.core.seq.call(null,seq__25243_25252);
if(temp__4657__auto___25261){
var seq__25243_25262__$1 = temp__4657__auto___25261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25243_25262__$1)){
var c__19229__auto___25263 = cljs.core.chunk_first.call(null,seq__25243_25262__$1);
var G__25264 = cljs.core.chunk_rest.call(null,seq__25243_25262__$1);
var G__25265 = c__19229__auto___25263;
var G__25266 = cljs.core.count.call(null,c__19229__auto___25263);
var G__25267 = (0);
seq__25243_25252 = G__25264;
chunk__25244_25253 = G__25265;
count__25245_25254 = G__25266;
i__25246_25255 = G__25267;
continue;
} else {
var k_25268__$1 = cljs.core.first.call(null,seq__25243_25262__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_25268__$1);

var G__25269 = cljs.core.next.call(null,seq__25243_25262__$1);
var G__25270 = null;
var G__25271 = (0);
var G__25272 = (0);
seq__25243_25252 = G__25269;
chunk__25244_25253 = G__25270;
count__25245_25254 = G__25271;
i__25246_25255 = G__25272;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq25238){
var G__25239 = cljs.core.first.call(null,seq25238);
var seq25238__$1 = cljs.core.next.call(null,seq25238);
var G__25240 = cljs.core.first.call(null,seq25238__$1);
var seq25238__$2 = cljs.core.next.call(null,seq25238__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25239,G__25240,seq25238__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args25273 = [];
var len__19487__auto___25276 = arguments.length;
var i__19488__auto___25277 = (0);
while(true){
if((i__19488__auto___25277 < len__19487__auto___25276)){
args25273.push((arguments[i__19488__auto___25277]));

var G__25278 = (i__19488__auto___25277 + (1));
i__19488__auto___25277 = G__25278;
continue;
} else {
}
break;
}

var G__25275 = args25273.length;
switch (G__25275) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25273.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args25280 = [];
var len__19487__auto___25298 = arguments.length;
var i__19488__auto___25299 = (0);
while(true){
if((i__19488__auto___25299 < len__19487__auto___25298)){
args25280.push((arguments[i__19488__auto___25299]));

var G__25300 = (i__19488__auto___25299 + (1));
i__19488__auto___25299 = G__25300;
continue;
} else {
}
break;
}

var G__25285 = args25280.length;
switch (G__25285) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25280.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___25302 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25302)){
var class_list_25303 = temp__4655__auto___25302;
var seq__25286_25304 = cljs.core.seq.call(null,classes__$1);
var chunk__25287_25305 = null;
var count__25288_25306 = (0);
var i__25289_25307 = (0);
while(true){
if((i__25289_25307 < count__25288_25306)){
var c_25308 = cljs.core._nth.call(null,chunk__25287_25305,i__25289_25307);
class_list_25303.add(c_25308);

var G__25309 = seq__25286_25304;
var G__25310 = chunk__25287_25305;
var G__25311 = count__25288_25306;
var G__25312 = (i__25289_25307 + (1));
seq__25286_25304 = G__25309;
chunk__25287_25305 = G__25310;
count__25288_25306 = G__25311;
i__25289_25307 = G__25312;
continue;
} else {
var temp__4657__auto___25313 = cljs.core.seq.call(null,seq__25286_25304);
if(temp__4657__auto___25313){
var seq__25286_25314__$1 = temp__4657__auto___25313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25286_25314__$1)){
var c__19229__auto___25315 = cljs.core.chunk_first.call(null,seq__25286_25314__$1);
var G__25316 = cljs.core.chunk_rest.call(null,seq__25286_25314__$1);
var G__25317 = c__19229__auto___25315;
var G__25318 = cljs.core.count.call(null,c__19229__auto___25315);
var G__25319 = (0);
seq__25286_25304 = G__25316;
chunk__25287_25305 = G__25317;
count__25288_25306 = G__25318;
i__25289_25307 = G__25319;
continue;
} else {
var c_25320 = cljs.core.first.call(null,seq__25286_25314__$1);
class_list_25303.add(c_25320);

var G__25321 = cljs.core.next.call(null,seq__25286_25314__$1);
var G__25322 = null;
var G__25323 = (0);
var G__25324 = (0);
seq__25286_25304 = G__25321;
chunk__25287_25305 = G__25322;
count__25288_25306 = G__25323;
i__25289_25307 = G__25324;
continue;
}
} else {
}
}
break;
}
} else {
var seq__25290_25325 = cljs.core.seq.call(null,classes__$1);
var chunk__25291_25326 = null;
var count__25292_25327 = (0);
var i__25293_25328 = (0);
while(true){
if((i__25293_25328 < count__25292_25327)){
var c_25329 = cljs.core._nth.call(null,chunk__25291_25326,i__25293_25328);
var class_name_25330 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25330,c_25329))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25330 === ""))?c_25329:[cljs.core.str(class_name_25330),cljs.core.str(" "),cljs.core.str(c_25329)].join('')));
}

var G__25331 = seq__25290_25325;
var G__25332 = chunk__25291_25326;
var G__25333 = count__25292_25327;
var G__25334 = (i__25293_25328 + (1));
seq__25290_25325 = G__25331;
chunk__25291_25326 = G__25332;
count__25292_25327 = G__25333;
i__25293_25328 = G__25334;
continue;
} else {
var temp__4657__auto___25335 = cljs.core.seq.call(null,seq__25290_25325);
if(temp__4657__auto___25335){
var seq__25290_25336__$1 = temp__4657__auto___25335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25290_25336__$1)){
var c__19229__auto___25337 = cljs.core.chunk_first.call(null,seq__25290_25336__$1);
var G__25338 = cljs.core.chunk_rest.call(null,seq__25290_25336__$1);
var G__25339 = c__19229__auto___25337;
var G__25340 = cljs.core.count.call(null,c__19229__auto___25337);
var G__25341 = (0);
seq__25290_25325 = G__25338;
chunk__25291_25326 = G__25339;
count__25292_25327 = G__25340;
i__25293_25328 = G__25341;
continue;
} else {
var c_25342 = cljs.core.first.call(null,seq__25290_25336__$1);
var class_name_25343 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_25343,c_25342))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_25343 === ""))?c_25342:[cljs.core.str(class_name_25343),cljs.core.str(" "),cljs.core.str(c_25342)].join('')));
}

var G__25344 = cljs.core.next.call(null,seq__25290_25336__$1);
var G__25345 = null;
var G__25346 = (0);
var G__25347 = (0);
seq__25290_25325 = G__25344;
chunk__25291_25326 = G__25345;
count__25292_25327 = G__25346;
i__25293_25328 = G__25347;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__25294_25348 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__25295_25349 = null;
var count__25296_25350 = (0);
var i__25297_25351 = (0);
while(true){
if((i__25297_25351 < count__25296_25350)){
var c_25352 = cljs.core._nth.call(null,chunk__25295_25349,i__25297_25351);
dommy.core.add_class_BANG_.call(null,elem,c_25352);

var G__25353 = seq__25294_25348;
var G__25354 = chunk__25295_25349;
var G__25355 = count__25296_25350;
var G__25356 = (i__25297_25351 + (1));
seq__25294_25348 = G__25353;
chunk__25295_25349 = G__25354;
count__25296_25350 = G__25355;
i__25297_25351 = G__25356;
continue;
} else {
var temp__4657__auto___25357 = cljs.core.seq.call(null,seq__25294_25348);
if(temp__4657__auto___25357){
var seq__25294_25358__$1 = temp__4657__auto___25357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25294_25358__$1)){
var c__19229__auto___25359 = cljs.core.chunk_first.call(null,seq__25294_25358__$1);
var G__25360 = cljs.core.chunk_rest.call(null,seq__25294_25358__$1);
var G__25361 = c__19229__auto___25359;
var G__25362 = cljs.core.count.call(null,c__19229__auto___25359);
var G__25363 = (0);
seq__25294_25348 = G__25360;
chunk__25295_25349 = G__25361;
count__25296_25350 = G__25362;
i__25297_25351 = G__25363;
continue;
} else {
var c_25364 = cljs.core.first.call(null,seq__25294_25358__$1);
dommy.core.add_class_BANG_.call(null,elem,c_25364);

var G__25365 = cljs.core.next.call(null,seq__25294_25358__$1);
var G__25366 = null;
var G__25367 = (0);
var G__25368 = (0);
seq__25294_25348 = G__25365;
chunk__25295_25349 = G__25366;
count__25296_25350 = G__25367;
i__25297_25351 = G__25368;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq25281){
var G__25282 = cljs.core.first.call(null,seq25281);
var seq25281__$1 = cljs.core.next.call(null,seq25281);
var G__25283 = cljs.core.first.call(null,seq25281__$1);
var seq25281__$2 = cljs.core.next.call(null,seq25281__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25282,G__25283,seq25281__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args25369 = [];
var len__19487__auto___25379 = arguments.length;
var i__19488__auto___25380 = (0);
while(true){
if((i__19488__auto___25380 < len__19487__auto___25379)){
args25369.push((arguments[i__19488__auto___25380]));

var G__25381 = (i__19488__auto___25380 + (1));
i__19488__auto___25380 = G__25381;
continue;
} else {
}
break;
}

var G__25374 = args25369.length;
switch (G__25374) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25369.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25383 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25383)){
var class_list_25384 = temp__4655__auto___25383;
class_list_25384.remove(c__$1);
} else {
var class_name_25385 = dommy.core.class$.call(null,elem);
var new_class_name_25386 = dommy.utils.remove_class_str.call(null,class_name_25385,c__$1);
if((class_name_25385 === new_class_name_25386)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_25386);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__25375 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__25376 = null;
var count__25377 = (0);
var i__25378 = (0);
while(true){
if((i__25378 < count__25377)){
var c = cljs.core._nth.call(null,chunk__25376,i__25378);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25387 = seq__25375;
var G__25388 = chunk__25376;
var G__25389 = count__25377;
var G__25390 = (i__25378 + (1));
seq__25375 = G__25387;
chunk__25376 = G__25388;
count__25377 = G__25389;
i__25378 = G__25390;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25375);
if(temp__4657__auto__){
var seq__25375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25375__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__25375__$1);
var G__25391 = cljs.core.chunk_rest.call(null,seq__25375__$1);
var G__25392 = c__19229__auto__;
var G__25393 = cljs.core.count.call(null,c__19229__auto__);
var G__25394 = (0);
seq__25375 = G__25391;
chunk__25376 = G__25392;
count__25377 = G__25393;
i__25378 = G__25394;
continue;
} else {
var c = cljs.core.first.call(null,seq__25375__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__25395 = cljs.core.next.call(null,seq__25375__$1);
var G__25396 = null;
var G__25397 = (0);
var G__25398 = (0);
seq__25375 = G__25395;
chunk__25376 = G__25396;
count__25377 = G__25397;
i__25378 = G__25398;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq25370){
var G__25371 = cljs.core.first.call(null,seq25370);
var seq25370__$1 = cljs.core.next.call(null,seq25370);
var G__25372 = cljs.core.first.call(null,seq25370__$1);
var seq25370__$2 = cljs.core.next.call(null,seq25370__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25371,G__25372,seq25370__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args25399 = [];
var len__19487__auto___25402 = arguments.length;
var i__19488__auto___25403 = (0);
while(true){
if((i__19488__auto___25403 < len__19487__auto___25402)){
args25399.push((arguments[i__19488__auto___25403]));

var G__25404 = (i__19488__auto___25403 + (1));
i__19488__auto___25403 = G__25404;
continue;
} else {
}
break;
}

var G__25401 = args25399.length;
switch (G__25401) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25399.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___25406 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___25406)){
var class_list_25407 = temp__4655__auto___25406;
class_list_25407.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args25408 = [];
var len__19487__auto___25411 = arguments.length;
var i__19488__auto___25412 = (0);
while(true){
if((i__19488__auto___25412 < len__19487__auto___25411)){
args25408.push((arguments[i__19488__auto___25412]));

var G__25413 = (i__19488__auto___25412 + (1));
i__19488__auto___25412 = G__25413;
continue;
} else {
}
break;
}

var G__25410 = args25408.length;
switch (G__25410) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25408.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args25415 = [];
var len__19487__auto___25418 = arguments.length;
var i__19488__auto___25419 = (0);
while(true){
if((i__19488__auto___25419 < len__19487__auto___25418)){
args25415.push((arguments[i__19488__auto___25419]));

var G__25420 = (i__19488__auto___25419 + (1));
i__19488__auto___25419 = G__25420;
continue;
} else {
}
break;
}

var G__25417 = args25415.length;
switch (G__25417) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25415.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args25422 = [];
var len__19487__auto___25433 = arguments.length;
var i__19488__auto___25434 = (0);
while(true){
if((i__19488__auto___25434 < len__19487__auto___25433)){
args25422.push((arguments[i__19488__auto___25434]));

var G__25435 = (i__19488__auto___25434 + (1));
i__19488__auto___25434 = G__25435;
continue;
} else {
}
break;
}

var G__25427 = args25422.length;
switch (G__25427) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25422.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25428 = parent;
G__25428.appendChild(child);

return G__25428;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25429_25437 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25430_25438 = null;
var count__25431_25439 = (0);
var i__25432_25440 = (0);
while(true){
if((i__25432_25440 < count__25431_25439)){
var c_25441 = cljs.core._nth.call(null,chunk__25430_25438,i__25432_25440);
dommy.core.append_BANG_.call(null,parent,c_25441);

var G__25442 = seq__25429_25437;
var G__25443 = chunk__25430_25438;
var G__25444 = count__25431_25439;
var G__25445 = (i__25432_25440 + (1));
seq__25429_25437 = G__25442;
chunk__25430_25438 = G__25443;
count__25431_25439 = G__25444;
i__25432_25440 = G__25445;
continue;
} else {
var temp__4657__auto___25446 = cljs.core.seq.call(null,seq__25429_25437);
if(temp__4657__auto___25446){
var seq__25429_25447__$1 = temp__4657__auto___25446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25429_25447__$1)){
var c__19229__auto___25448 = cljs.core.chunk_first.call(null,seq__25429_25447__$1);
var G__25449 = cljs.core.chunk_rest.call(null,seq__25429_25447__$1);
var G__25450 = c__19229__auto___25448;
var G__25451 = cljs.core.count.call(null,c__19229__auto___25448);
var G__25452 = (0);
seq__25429_25437 = G__25449;
chunk__25430_25438 = G__25450;
count__25431_25439 = G__25451;
i__25432_25440 = G__25452;
continue;
} else {
var c_25453 = cljs.core.first.call(null,seq__25429_25447__$1);
dommy.core.append_BANG_.call(null,parent,c_25453);

var G__25454 = cljs.core.next.call(null,seq__25429_25447__$1);
var G__25455 = null;
var G__25456 = (0);
var G__25457 = (0);
seq__25429_25437 = G__25454;
chunk__25430_25438 = G__25455;
count__25431_25439 = G__25456;
i__25432_25440 = G__25457;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq25423){
var G__25424 = cljs.core.first.call(null,seq25423);
var seq25423__$1 = cljs.core.next.call(null,seq25423);
var G__25425 = cljs.core.first.call(null,seq25423__$1);
var seq25423__$2 = cljs.core.next.call(null,seq25423__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25424,G__25425,seq25423__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args25458 = [];
var len__19487__auto___25469 = arguments.length;
var i__19488__auto___25470 = (0);
while(true){
if((i__19488__auto___25470 < len__19487__auto___25469)){
args25458.push((arguments[i__19488__auto___25470]));

var G__25471 = (i__19488__auto___25470 + (1));
i__19488__auto___25470 = G__25471;
continue;
} else {
}
break;
}

var G__25463 = args25458.length;
switch (G__25463) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args25458.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__25464 = parent;
G__25464.insertBefore(child,parent.firstChild);

return G__25464;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__25465_25473 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__25466_25474 = null;
var count__25467_25475 = (0);
var i__25468_25476 = (0);
while(true){
if((i__25468_25476 < count__25467_25475)){
var c_25477 = cljs.core._nth.call(null,chunk__25466_25474,i__25468_25476);
dommy.core.prepend_BANG_.call(null,parent,c_25477);

var G__25478 = seq__25465_25473;
var G__25479 = chunk__25466_25474;
var G__25480 = count__25467_25475;
var G__25481 = (i__25468_25476 + (1));
seq__25465_25473 = G__25478;
chunk__25466_25474 = G__25479;
count__25467_25475 = G__25480;
i__25468_25476 = G__25481;
continue;
} else {
var temp__4657__auto___25482 = cljs.core.seq.call(null,seq__25465_25473);
if(temp__4657__auto___25482){
var seq__25465_25483__$1 = temp__4657__auto___25482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25465_25483__$1)){
var c__19229__auto___25484 = cljs.core.chunk_first.call(null,seq__25465_25483__$1);
var G__25485 = cljs.core.chunk_rest.call(null,seq__25465_25483__$1);
var G__25486 = c__19229__auto___25484;
var G__25487 = cljs.core.count.call(null,c__19229__auto___25484);
var G__25488 = (0);
seq__25465_25473 = G__25485;
chunk__25466_25474 = G__25486;
count__25467_25475 = G__25487;
i__25468_25476 = G__25488;
continue;
} else {
var c_25489 = cljs.core.first.call(null,seq__25465_25483__$1);
dommy.core.prepend_BANG_.call(null,parent,c_25489);

var G__25490 = cljs.core.next.call(null,seq__25465_25483__$1);
var G__25491 = null;
var G__25492 = (0);
var G__25493 = (0);
seq__25465_25473 = G__25490;
chunk__25466_25474 = G__25491;
count__25467_25475 = G__25492;
i__25468_25476 = G__25493;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq25459){
var G__25460 = cljs.core.first.call(null,seq25459);
var seq25459__$1 = cljs.core.next.call(null,seq25459);
var G__25461 = cljs.core.first.call(null,seq25459__$1);
var seq25459__$2 = cljs.core.next.call(null,seq25459__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25460,G__25461,seq25459__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___25494 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___25494)){
var next_25495 = temp__4655__auto___25494;
dommy.core.insert_before_BANG_.call(null,elem,next_25495);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args25496 = [];
var len__19487__auto___25500 = arguments.length;
var i__19488__auto___25501 = (0);
while(true){
if((i__19488__auto___25501 < len__19487__auto___25500)){
args25496.push((arguments[i__19488__auto___25501]));

var G__25502 = (i__19488__auto___25501 + (1));
i__19488__auto___25501 = G__25502;
continue;
} else {
}
break;
}

var G__25498 = args25496.length;
switch (G__25498) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25496.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__25499 = p;
G__25499.removeChild(elem);

return G__25499;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25504){
var vec__25505 = p__25504;
var special_mouse_event = cljs.core.nth.call(null,vec__25505,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__25505,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__25505,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__25505,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__18418__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__18406__auto__ = related_target;
if(cljs.core.truth_(and__18406__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__18406__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__25505,special_mouse_event,real_mouse_event))
});})(vec__25505,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__18406__auto__ = selected_target;
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__18406__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__18418__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25509 = arguments.length;
var i__19488__auto___25510 = (0);
while(true){
if((i__19488__auto___25510 < len__19487__auto___25509)){
args__19494__auto__.push((arguments[i__19488__auto___25510]));

var G__25511 = (i__19488__auto___25510 + (1));
i__19488__auto___25510 = G__25511;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq25506){
var G__25507 = cljs.core.first.call(null,seq25506);
var seq25506__$1 = cljs.core.next.call(null,seq25506);
var G__25508 = cljs.core.first.call(null,seq25506__$1);
var seq25506__$2 = cljs.core.next.call(null,seq25506__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25507,G__25508,seq25506__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25537 = arguments.length;
var i__19488__auto___25538 = (0);
while(true){
if((i__19488__auto___25538 < len__19487__auto___25537)){
args__19494__auto__.push((arguments[i__19488__auto___25538]));

var G__25539 = (i__19488__auto___25538 + (1));
i__19488__auto___25538 = G__25539;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25514_25540 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25541 = cljs.core.nth.call(null,vec__25514_25540,(0),null);
var selector_25542 = cljs.core.nth.call(null,vec__25514_25540,(1),null);
var seq__25515_25543 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25522_25544 = null;
var count__25523_25545 = (0);
var i__25524_25546 = (0);
while(true){
if((i__25524_25546 < count__25523_25545)){
var vec__25531_25547 = cljs.core._nth.call(null,chunk__25522_25544,i__25524_25546);
var orig_type_25548 = cljs.core.nth.call(null,vec__25531_25547,(0),null);
var f_25549 = cljs.core.nth.call(null,vec__25531_25547,(1),null);
var seq__25525_25550 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25548,cljs.core.PersistentArrayMap.fromArray([orig_type_25548,cljs.core.identity], true, false)));
var chunk__25527_25551 = null;
var count__25528_25552 = (0);
var i__25529_25553 = (0);
while(true){
if((i__25529_25553 < count__25528_25552)){
var vec__25532_25554 = cljs.core._nth.call(null,chunk__25527_25551,i__25529_25553);
var actual_type_25555 = cljs.core.nth.call(null,vec__25532_25554,(0),null);
var factory_25556 = cljs.core.nth.call(null,vec__25532_25554,(1),null);
var canonical_f_25557 = (cljs.core.truth_(selector_25542)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25541,selector_25542):cljs.core.identity).call(null,factory_25556.call(null,f_25549));
dommy.core.update_event_listeners_BANG_.call(null,elem_25541,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25542,actual_type_25555,f_25549], null),canonical_f_25557);

if(cljs.core.truth_(elem_25541.addEventListener)){
elem_25541.addEventListener(cljs.core.name.call(null,actual_type_25555),canonical_f_25557);
} else {
elem_25541.attachEvent(cljs.core.name.call(null,actual_type_25555),canonical_f_25557);
}

var G__25558 = seq__25525_25550;
var G__25559 = chunk__25527_25551;
var G__25560 = count__25528_25552;
var G__25561 = (i__25529_25553 + (1));
seq__25525_25550 = G__25558;
chunk__25527_25551 = G__25559;
count__25528_25552 = G__25560;
i__25529_25553 = G__25561;
continue;
} else {
var temp__4657__auto___25562 = cljs.core.seq.call(null,seq__25525_25550);
if(temp__4657__auto___25562){
var seq__25525_25563__$1 = temp__4657__auto___25562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25525_25563__$1)){
var c__19229__auto___25564 = cljs.core.chunk_first.call(null,seq__25525_25563__$1);
var G__25565 = cljs.core.chunk_rest.call(null,seq__25525_25563__$1);
var G__25566 = c__19229__auto___25564;
var G__25567 = cljs.core.count.call(null,c__19229__auto___25564);
var G__25568 = (0);
seq__25525_25550 = G__25565;
chunk__25527_25551 = G__25566;
count__25528_25552 = G__25567;
i__25529_25553 = G__25568;
continue;
} else {
var vec__25533_25569 = cljs.core.first.call(null,seq__25525_25563__$1);
var actual_type_25570 = cljs.core.nth.call(null,vec__25533_25569,(0),null);
var factory_25571 = cljs.core.nth.call(null,vec__25533_25569,(1),null);
var canonical_f_25572 = (cljs.core.truth_(selector_25542)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25541,selector_25542):cljs.core.identity).call(null,factory_25571.call(null,f_25549));
dommy.core.update_event_listeners_BANG_.call(null,elem_25541,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25542,actual_type_25570,f_25549], null),canonical_f_25572);

if(cljs.core.truth_(elem_25541.addEventListener)){
elem_25541.addEventListener(cljs.core.name.call(null,actual_type_25570),canonical_f_25572);
} else {
elem_25541.attachEvent(cljs.core.name.call(null,actual_type_25570),canonical_f_25572);
}

var G__25573 = cljs.core.next.call(null,seq__25525_25563__$1);
var G__25574 = null;
var G__25575 = (0);
var G__25576 = (0);
seq__25525_25550 = G__25573;
chunk__25527_25551 = G__25574;
count__25528_25552 = G__25575;
i__25529_25553 = G__25576;
continue;
}
} else {
}
}
break;
}

var G__25577 = seq__25515_25543;
var G__25578 = chunk__25522_25544;
var G__25579 = count__25523_25545;
var G__25580 = (i__25524_25546 + (1));
seq__25515_25543 = G__25577;
chunk__25522_25544 = G__25578;
count__25523_25545 = G__25579;
i__25524_25546 = G__25580;
continue;
} else {
var temp__4657__auto___25581 = cljs.core.seq.call(null,seq__25515_25543);
if(temp__4657__auto___25581){
var seq__25515_25582__$1 = temp__4657__auto___25581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25515_25582__$1)){
var c__19229__auto___25583 = cljs.core.chunk_first.call(null,seq__25515_25582__$1);
var G__25584 = cljs.core.chunk_rest.call(null,seq__25515_25582__$1);
var G__25585 = c__19229__auto___25583;
var G__25586 = cljs.core.count.call(null,c__19229__auto___25583);
var G__25587 = (0);
seq__25515_25543 = G__25584;
chunk__25522_25544 = G__25585;
count__25523_25545 = G__25586;
i__25524_25546 = G__25587;
continue;
} else {
var vec__25534_25588 = cljs.core.first.call(null,seq__25515_25582__$1);
var orig_type_25589 = cljs.core.nth.call(null,vec__25534_25588,(0),null);
var f_25590 = cljs.core.nth.call(null,vec__25534_25588,(1),null);
var seq__25516_25591 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25589,cljs.core.PersistentArrayMap.fromArray([orig_type_25589,cljs.core.identity], true, false)));
var chunk__25518_25592 = null;
var count__25519_25593 = (0);
var i__25520_25594 = (0);
while(true){
if((i__25520_25594 < count__25519_25593)){
var vec__25535_25595 = cljs.core._nth.call(null,chunk__25518_25592,i__25520_25594);
var actual_type_25596 = cljs.core.nth.call(null,vec__25535_25595,(0),null);
var factory_25597 = cljs.core.nth.call(null,vec__25535_25595,(1),null);
var canonical_f_25598 = (cljs.core.truth_(selector_25542)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25541,selector_25542):cljs.core.identity).call(null,factory_25597.call(null,f_25590));
dommy.core.update_event_listeners_BANG_.call(null,elem_25541,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25542,actual_type_25596,f_25590], null),canonical_f_25598);

if(cljs.core.truth_(elem_25541.addEventListener)){
elem_25541.addEventListener(cljs.core.name.call(null,actual_type_25596),canonical_f_25598);
} else {
elem_25541.attachEvent(cljs.core.name.call(null,actual_type_25596),canonical_f_25598);
}

var G__25599 = seq__25516_25591;
var G__25600 = chunk__25518_25592;
var G__25601 = count__25519_25593;
var G__25602 = (i__25520_25594 + (1));
seq__25516_25591 = G__25599;
chunk__25518_25592 = G__25600;
count__25519_25593 = G__25601;
i__25520_25594 = G__25602;
continue;
} else {
var temp__4657__auto___25603__$1 = cljs.core.seq.call(null,seq__25516_25591);
if(temp__4657__auto___25603__$1){
var seq__25516_25604__$1 = temp__4657__auto___25603__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25516_25604__$1)){
var c__19229__auto___25605 = cljs.core.chunk_first.call(null,seq__25516_25604__$1);
var G__25606 = cljs.core.chunk_rest.call(null,seq__25516_25604__$1);
var G__25607 = c__19229__auto___25605;
var G__25608 = cljs.core.count.call(null,c__19229__auto___25605);
var G__25609 = (0);
seq__25516_25591 = G__25606;
chunk__25518_25592 = G__25607;
count__25519_25593 = G__25608;
i__25520_25594 = G__25609;
continue;
} else {
var vec__25536_25610 = cljs.core.first.call(null,seq__25516_25604__$1);
var actual_type_25611 = cljs.core.nth.call(null,vec__25536_25610,(0),null);
var factory_25612 = cljs.core.nth.call(null,vec__25536_25610,(1),null);
var canonical_f_25613 = (cljs.core.truth_(selector_25542)?cljs.core.partial.call(null,dommy.core.live_listener,elem_25541,selector_25542):cljs.core.identity).call(null,factory_25612.call(null,f_25590));
dommy.core.update_event_listeners_BANG_.call(null,elem_25541,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25542,actual_type_25611,f_25590], null),canonical_f_25613);

if(cljs.core.truth_(elem_25541.addEventListener)){
elem_25541.addEventListener(cljs.core.name.call(null,actual_type_25611),canonical_f_25613);
} else {
elem_25541.attachEvent(cljs.core.name.call(null,actual_type_25611),canonical_f_25613);
}

var G__25614 = cljs.core.next.call(null,seq__25516_25604__$1);
var G__25615 = null;
var G__25616 = (0);
var G__25617 = (0);
seq__25516_25591 = G__25614;
chunk__25518_25592 = G__25615;
count__25519_25593 = G__25616;
i__25520_25594 = G__25617;
continue;
}
} else {
}
}
break;
}

var G__25618 = cljs.core.next.call(null,seq__25515_25582__$1);
var G__25619 = null;
var G__25620 = (0);
var G__25621 = (0);
seq__25515_25543 = G__25618;
chunk__25522_25544 = G__25619;
count__25523_25545 = G__25620;
i__25524_25546 = G__25621;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq25512){
var G__25513 = cljs.core.first.call(null,seq25512);
var seq25512__$1 = cljs.core.next.call(null,seq25512);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25513,seq25512__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25647 = arguments.length;
var i__19488__auto___25648 = (0);
while(true){
if((i__19488__auto___25648 < len__19487__auto___25647)){
args__19494__auto__.push((arguments[i__19488__auto___25648]));

var G__25649 = (i__19488__auto___25648 + (1));
i__19488__auto___25648 = G__25649;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25624_25650 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25651 = cljs.core.nth.call(null,vec__25624_25650,(0),null);
var selector_25652 = cljs.core.nth.call(null,vec__25624_25650,(1),null);
var seq__25625_25653 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25632_25654 = null;
var count__25633_25655 = (0);
var i__25634_25656 = (0);
while(true){
if((i__25634_25656 < count__25633_25655)){
var vec__25641_25657 = cljs.core._nth.call(null,chunk__25632_25654,i__25634_25656);
var orig_type_25658 = cljs.core.nth.call(null,vec__25641_25657,(0),null);
var f_25659 = cljs.core.nth.call(null,vec__25641_25657,(1),null);
var seq__25635_25660 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25658,cljs.core.PersistentArrayMap.fromArray([orig_type_25658,cljs.core.identity], true, false)));
var chunk__25637_25661 = null;
var count__25638_25662 = (0);
var i__25639_25663 = (0);
while(true){
if((i__25639_25663 < count__25638_25662)){
var vec__25642_25664 = cljs.core._nth.call(null,chunk__25637_25661,i__25639_25663);
var actual_type_25665 = cljs.core.nth.call(null,vec__25642_25664,(0),null);
var __25666 = cljs.core.nth.call(null,vec__25642_25664,(1),null);
var keys_25667 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25652,actual_type_25665,f_25659], null);
var canonical_f_25668 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25651),keys_25667);
dommy.core.update_event_listeners_BANG_.call(null,elem_25651,dommy.utils.dissoc_in,keys_25667);

if(cljs.core.truth_(elem_25651.removeEventListener)){
elem_25651.removeEventListener(cljs.core.name.call(null,actual_type_25665),canonical_f_25668);
} else {
elem_25651.detachEvent(cljs.core.name.call(null,actual_type_25665),canonical_f_25668);
}

var G__25669 = seq__25635_25660;
var G__25670 = chunk__25637_25661;
var G__25671 = count__25638_25662;
var G__25672 = (i__25639_25663 + (1));
seq__25635_25660 = G__25669;
chunk__25637_25661 = G__25670;
count__25638_25662 = G__25671;
i__25639_25663 = G__25672;
continue;
} else {
var temp__4657__auto___25673 = cljs.core.seq.call(null,seq__25635_25660);
if(temp__4657__auto___25673){
var seq__25635_25674__$1 = temp__4657__auto___25673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25635_25674__$1)){
var c__19229__auto___25675 = cljs.core.chunk_first.call(null,seq__25635_25674__$1);
var G__25676 = cljs.core.chunk_rest.call(null,seq__25635_25674__$1);
var G__25677 = c__19229__auto___25675;
var G__25678 = cljs.core.count.call(null,c__19229__auto___25675);
var G__25679 = (0);
seq__25635_25660 = G__25676;
chunk__25637_25661 = G__25677;
count__25638_25662 = G__25678;
i__25639_25663 = G__25679;
continue;
} else {
var vec__25643_25680 = cljs.core.first.call(null,seq__25635_25674__$1);
var actual_type_25681 = cljs.core.nth.call(null,vec__25643_25680,(0),null);
var __25682 = cljs.core.nth.call(null,vec__25643_25680,(1),null);
var keys_25683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25652,actual_type_25681,f_25659], null);
var canonical_f_25684 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25651),keys_25683);
dommy.core.update_event_listeners_BANG_.call(null,elem_25651,dommy.utils.dissoc_in,keys_25683);

if(cljs.core.truth_(elem_25651.removeEventListener)){
elem_25651.removeEventListener(cljs.core.name.call(null,actual_type_25681),canonical_f_25684);
} else {
elem_25651.detachEvent(cljs.core.name.call(null,actual_type_25681),canonical_f_25684);
}

var G__25685 = cljs.core.next.call(null,seq__25635_25674__$1);
var G__25686 = null;
var G__25687 = (0);
var G__25688 = (0);
seq__25635_25660 = G__25685;
chunk__25637_25661 = G__25686;
count__25638_25662 = G__25687;
i__25639_25663 = G__25688;
continue;
}
} else {
}
}
break;
}

var G__25689 = seq__25625_25653;
var G__25690 = chunk__25632_25654;
var G__25691 = count__25633_25655;
var G__25692 = (i__25634_25656 + (1));
seq__25625_25653 = G__25689;
chunk__25632_25654 = G__25690;
count__25633_25655 = G__25691;
i__25634_25656 = G__25692;
continue;
} else {
var temp__4657__auto___25693 = cljs.core.seq.call(null,seq__25625_25653);
if(temp__4657__auto___25693){
var seq__25625_25694__$1 = temp__4657__auto___25693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25625_25694__$1)){
var c__19229__auto___25695 = cljs.core.chunk_first.call(null,seq__25625_25694__$1);
var G__25696 = cljs.core.chunk_rest.call(null,seq__25625_25694__$1);
var G__25697 = c__19229__auto___25695;
var G__25698 = cljs.core.count.call(null,c__19229__auto___25695);
var G__25699 = (0);
seq__25625_25653 = G__25696;
chunk__25632_25654 = G__25697;
count__25633_25655 = G__25698;
i__25634_25656 = G__25699;
continue;
} else {
var vec__25644_25700 = cljs.core.first.call(null,seq__25625_25694__$1);
var orig_type_25701 = cljs.core.nth.call(null,vec__25644_25700,(0),null);
var f_25702 = cljs.core.nth.call(null,vec__25644_25700,(1),null);
var seq__25626_25703 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_25701,cljs.core.PersistentArrayMap.fromArray([orig_type_25701,cljs.core.identity], true, false)));
var chunk__25628_25704 = null;
var count__25629_25705 = (0);
var i__25630_25706 = (0);
while(true){
if((i__25630_25706 < count__25629_25705)){
var vec__25645_25707 = cljs.core._nth.call(null,chunk__25628_25704,i__25630_25706);
var actual_type_25708 = cljs.core.nth.call(null,vec__25645_25707,(0),null);
var __25709 = cljs.core.nth.call(null,vec__25645_25707,(1),null);
var keys_25710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25652,actual_type_25708,f_25702], null);
var canonical_f_25711 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25651),keys_25710);
dommy.core.update_event_listeners_BANG_.call(null,elem_25651,dommy.utils.dissoc_in,keys_25710);

if(cljs.core.truth_(elem_25651.removeEventListener)){
elem_25651.removeEventListener(cljs.core.name.call(null,actual_type_25708),canonical_f_25711);
} else {
elem_25651.detachEvent(cljs.core.name.call(null,actual_type_25708),canonical_f_25711);
}

var G__25712 = seq__25626_25703;
var G__25713 = chunk__25628_25704;
var G__25714 = count__25629_25705;
var G__25715 = (i__25630_25706 + (1));
seq__25626_25703 = G__25712;
chunk__25628_25704 = G__25713;
count__25629_25705 = G__25714;
i__25630_25706 = G__25715;
continue;
} else {
var temp__4657__auto___25716__$1 = cljs.core.seq.call(null,seq__25626_25703);
if(temp__4657__auto___25716__$1){
var seq__25626_25717__$1 = temp__4657__auto___25716__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25626_25717__$1)){
var c__19229__auto___25718 = cljs.core.chunk_first.call(null,seq__25626_25717__$1);
var G__25719 = cljs.core.chunk_rest.call(null,seq__25626_25717__$1);
var G__25720 = c__19229__auto___25718;
var G__25721 = cljs.core.count.call(null,c__19229__auto___25718);
var G__25722 = (0);
seq__25626_25703 = G__25719;
chunk__25628_25704 = G__25720;
count__25629_25705 = G__25721;
i__25630_25706 = G__25722;
continue;
} else {
var vec__25646_25723 = cljs.core.first.call(null,seq__25626_25717__$1);
var actual_type_25724 = cljs.core.nth.call(null,vec__25646_25723,(0),null);
var __25725 = cljs.core.nth.call(null,vec__25646_25723,(1),null);
var keys_25726 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_25652,actual_type_25724,f_25702], null);
var canonical_f_25727 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_25651),keys_25726);
dommy.core.update_event_listeners_BANG_.call(null,elem_25651,dommy.utils.dissoc_in,keys_25726);

if(cljs.core.truth_(elem_25651.removeEventListener)){
elem_25651.removeEventListener(cljs.core.name.call(null,actual_type_25724),canonical_f_25727);
} else {
elem_25651.detachEvent(cljs.core.name.call(null,actual_type_25724),canonical_f_25727);
}

var G__25728 = cljs.core.next.call(null,seq__25626_25717__$1);
var G__25729 = null;
var G__25730 = (0);
var G__25731 = (0);
seq__25626_25703 = G__25728;
chunk__25628_25704 = G__25729;
count__25629_25705 = G__25730;
i__25630_25706 = G__25731;
continue;
}
} else {
}
}
break;
}

var G__25732 = cljs.core.next.call(null,seq__25625_25694__$1);
var G__25733 = null;
var G__25734 = (0);
var G__25735 = (0);
seq__25625_25653 = G__25732;
chunk__25632_25654 = G__25733;
count__25633_25655 = G__25734;
i__25634_25656 = G__25735;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq25622){
var G__25623 = cljs.core.first.call(null,seq25622);
var seq25622__$1 = cljs.core.next.call(null,seq25622);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25623,seq25622__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___25745 = arguments.length;
var i__19488__auto___25746 = (0);
while(true){
if((i__19488__auto___25746 < len__19487__auto___25745)){
args__19494__auto__.push((arguments[i__19488__auto___25746]));

var G__25747 = (i__19488__auto___25746 + (1));
i__19488__auto___25746 = G__25747;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((1) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19495__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__25738_25748 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_25749 = cljs.core.nth.call(null,vec__25738_25748,(0),null);
var selector_25750 = cljs.core.nth.call(null,vec__25738_25748,(1),null);
var seq__25739_25751 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__25740_25752 = null;
var count__25741_25753 = (0);
var i__25742_25754 = (0);
while(true){
if((i__25742_25754 < count__25741_25753)){
var vec__25743_25755 = cljs.core._nth.call(null,chunk__25740_25752,i__25742_25754);
var type_25756 = cljs.core.nth.call(null,vec__25743_25755,(0),null);
var f_25757 = cljs.core.nth.call(null,vec__25743_25755,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25756,((function (seq__25739_25751,chunk__25740_25752,count__25741_25753,i__25742_25754,vec__25743_25755,type_25756,f_25757,vec__25738_25748,elem_25749,selector_25750){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25756,dommy$core$this_fn);

return f_25757.call(null,e);
});})(seq__25739_25751,chunk__25740_25752,count__25741_25753,i__25742_25754,vec__25743_25755,type_25756,f_25757,vec__25738_25748,elem_25749,selector_25750))
);

var G__25758 = seq__25739_25751;
var G__25759 = chunk__25740_25752;
var G__25760 = count__25741_25753;
var G__25761 = (i__25742_25754 + (1));
seq__25739_25751 = G__25758;
chunk__25740_25752 = G__25759;
count__25741_25753 = G__25760;
i__25742_25754 = G__25761;
continue;
} else {
var temp__4657__auto___25762 = cljs.core.seq.call(null,seq__25739_25751);
if(temp__4657__auto___25762){
var seq__25739_25763__$1 = temp__4657__auto___25762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25739_25763__$1)){
var c__19229__auto___25764 = cljs.core.chunk_first.call(null,seq__25739_25763__$1);
var G__25765 = cljs.core.chunk_rest.call(null,seq__25739_25763__$1);
var G__25766 = c__19229__auto___25764;
var G__25767 = cljs.core.count.call(null,c__19229__auto___25764);
var G__25768 = (0);
seq__25739_25751 = G__25765;
chunk__25740_25752 = G__25766;
count__25741_25753 = G__25767;
i__25742_25754 = G__25768;
continue;
} else {
var vec__25744_25769 = cljs.core.first.call(null,seq__25739_25763__$1);
var type_25770 = cljs.core.nth.call(null,vec__25744_25769,(0),null);
var f_25771 = cljs.core.nth.call(null,vec__25744_25769,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_25770,((function (seq__25739_25751,chunk__25740_25752,count__25741_25753,i__25742_25754,vec__25744_25769,type_25770,f_25771,seq__25739_25763__$1,temp__4657__auto___25762,vec__25738_25748,elem_25749,selector_25750){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_25770,dommy$core$this_fn);

return f_25771.call(null,e);
});})(seq__25739_25751,chunk__25740_25752,count__25741_25753,i__25742_25754,vec__25744_25769,type_25770,f_25771,seq__25739_25763__$1,temp__4657__auto___25762,vec__25738_25748,elem_25749,selector_25750))
);

var G__25772 = cljs.core.next.call(null,seq__25739_25763__$1);
var G__25773 = null;
var G__25774 = (0);
var G__25775 = (0);
seq__25739_25751 = G__25772;
chunk__25740_25752 = G__25773;
count__25741_25753 = G__25774;
i__25742_25754 = G__25775;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq25736){
var G__25737 = cljs.core.first.call(null,seq25736);
var seq25736__$1 = cljs.core.next.call(null,seq25736);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25737,seq25736__$1);
});

//# sourceMappingURL=core.js.map