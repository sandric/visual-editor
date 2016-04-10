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
var args26052 = [];
var len__19487__auto___26055 = arguments.length;
var i__19488__auto___26056 = (0);
while(true){
if((i__19488__auto___26056 < len__19487__auto___26055)){
args26052.push((arguments[i__19488__auto___26056]));

var G__26057 = (i__19488__auto___26056 + (1));
i__19488__auto___26056 = G__26057;
continue;
} else {
}
break;
}

var G__26054 = args26052.length;
switch (G__26054) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26052.length)].join('')));

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
var args26059 = [];
var len__19487__auto___26062 = arguments.length;
var i__19488__auto___26063 = (0);
while(true){
if((i__19488__auto___26063 < len__19487__auto___26062)){
args26059.push((arguments[i__19488__auto___26063]));

var G__26064 = (i__19488__auto___26063 + (1));
i__19488__auto___26063 = G__26064;
continue;
} else {
}
break;
}

var G__26061 = args26059.length;
switch (G__26061) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26059.length)].join('')));

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
var args26067 = [];
var len__19487__auto___26070 = arguments.length;
var i__19488__auto___26071 = (0);
while(true){
if((i__19488__auto___26071 < len__19487__auto___26070)){
args26067.push((arguments[i__19488__auto___26071]));

var G__26072 = (i__19488__auto___26071 + (1));
i__19488__auto___26071 = G__26072;
continue;
} else {
}
break;
}

var G__26069 = args26067.length;
switch (G__26069) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26067.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__26066_SHARP_){
return !((p1__26066_SHARP_ === base));
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
var len__19487__auto___26082 = arguments.length;
var i__19488__auto___26083 = (0);
while(true){
if((i__19488__auto___26083 < len__19487__auto___26082)){
args__19494__auto__.push((arguments[i__19488__auto___26083]));

var G__26084 = (i__19488__auto___26083 + (1));
i__19488__auto___26083 = G__26084;
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
var seq__26076_26085 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__26077_26086 = null;
var count__26078_26087 = (0);
var i__26079_26088 = (0);
while(true){
if((i__26079_26088 < count__26078_26087)){
var vec__26080_26089 = cljs.core._nth.call(null,chunk__26077_26086,i__26079_26088);
var k_26090 = cljs.core.nth.call(null,vec__26080_26089,(0),null);
var v_26091 = cljs.core.nth.call(null,vec__26080_26089,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_26090),v_26091);

var G__26092 = seq__26076_26085;
var G__26093 = chunk__26077_26086;
var G__26094 = count__26078_26087;
var G__26095 = (i__26079_26088 + (1));
seq__26076_26085 = G__26092;
chunk__26077_26086 = G__26093;
count__26078_26087 = G__26094;
i__26079_26088 = G__26095;
continue;
} else {
var temp__4657__auto___26096 = cljs.core.seq.call(null,seq__26076_26085);
if(temp__4657__auto___26096){
var seq__26076_26097__$1 = temp__4657__auto___26096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26076_26097__$1)){
var c__19229__auto___26098 = cljs.core.chunk_first.call(null,seq__26076_26097__$1);
var G__26099 = cljs.core.chunk_rest.call(null,seq__26076_26097__$1);
var G__26100 = c__19229__auto___26098;
var G__26101 = cljs.core.count.call(null,c__19229__auto___26098);
var G__26102 = (0);
seq__26076_26085 = G__26099;
chunk__26077_26086 = G__26100;
count__26078_26087 = G__26101;
i__26079_26088 = G__26102;
continue;
} else {
var vec__26081_26103 = cljs.core.first.call(null,seq__26076_26097__$1);
var k_26104 = cljs.core.nth.call(null,vec__26081_26103,(0),null);
var v_26105 = cljs.core.nth.call(null,vec__26081_26103,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_26104),v_26105);

var G__26106 = cljs.core.next.call(null,seq__26076_26097__$1);
var G__26107 = null;
var G__26108 = (0);
var G__26109 = (0);
seq__26076_26085 = G__26106;
chunk__26077_26086 = G__26107;
count__26078_26087 = G__26108;
i__26079_26088 = G__26109;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq26074){
var G__26075 = cljs.core.first.call(null,seq26074);
var seq26074__$1 = cljs.core.next.call(null,seq26074);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26075,seq26074__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___26116 = arguments.length;
var i__19488__auto___26117 = (0);
while(true){
if((i__19488__auto___26117 < len__19487__auto___26116)){
args__19494__auto__.push((arguments[i__19488__auto___26117]));

var G__26118 = (i__19488__auto___26117 + (1));
i__19488__auto___26117 = G__26118;
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
var seq__26112_26119 = cljs.core.seq.call(null,keywords);
var chunk__26113_26120 = null;
var count__26114_26121 = (0);
var i__26115_26122 = (0);
while(true){
if((i__26115_26122 < count__26114_26121)){
var kw_26123 = cljs.core._nth.call(null,chunk__26113_26120,i__26115_26122);
style.removeProperty(dommy.utils.as_str.call(null,kw_26123));

var G__26124 = seq__26112_26119;
var G__26125 = chunk__26113_26120;
var G__26126 = count__26114_26121;
var G__26127 = (i__26115_26122 + (1));
seq__26112_26119 = G__26124;
chunk__26113_26120 = G__26125;
count__26114_26121 = G__26126;
i__26115_26122 = G__26127;
continue;
} else {
var temp__4657__auto___26128 = cljs.core.seq.call(null,seq__26112_26119);
if(temp__4657__auto___26128){
var seq__26112_26129__$1 = temp__4657__auto___26128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26112_26129__$1)){
var c__19229__auto___26130 = cljs.core.chunk_first.call(null,seq__26112_26129__$1);
var G__26131 = cljs.core.chunk_rest.call(null,seq__26112_26129__$1);
var G__26132 = c__19229__auto___26130;
var G__26133 = cljs.core.count.call(null,c__19229__auto___26130);
var G__26134 = (0);
seq__26112_26119 = G__26131;
chunk__26113_26120 = G__26132;
count__26114_26121 = G__26133;
i__26115_26122 = G__26134;
continue;
} else {
var kw_26135 = cljs.core.first.call(null,seq__26112_26129__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_26135));

var G__26136 = cljs.core.next.call(null,seq__26112_26129__$1);
var G__26137 = null;
var G__26138 = (0);
var G__26139 = (0);
seq__26112_26119 = G__26136;
chunk__26113_26120 = G__26137;
count__26114_26121 = G__26138;
i__26115_26122 = G__26139;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq26110){
var G__26111 = cljs.core.first.call(null,seq26110);
var seq26110__$1 = cljs.core.next.call(null,seq26110);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26111,seq26110__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___26148 = arguments.length;
var i__19488__auto___26149 = (0);
while(true){
if((i__19488__auto___26149 < len__19487__auto___26148)){
args__19494__auto__.push((arguments[i__19488__auto___26149]));

var G__26150 = (i__19488__auto___26149 + (1));
i__19488__auto___26149 = G__26150;
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

var seq__26142_26151 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__26143_26152 = null;
var count__26144_26153 = (0);
var i__26145_26154 = (0);
while(true){
if((i__26145_26154 < count__26144_26153)){
var vec__26146_26155 = cljs.core._nth.call(null,chunk__26143_26152,i__26145_26154);
var k_26156 = cljs.core.nth.call(null,vec__26146_26155,(0),null);
var v_26157 = cljs.core.nth.call(null,vec__26146_26155,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_26156,[cljs.core.str(v_26157),cljs.core.str("px")].join(''));

var G__26158 = seq__26142_26151;
var G__26159 = chunk__26143_26152;
var G__26160 = count__26144_26153;
var G__26161 = (i__26145_26154 + (1));
seq__26142_26151 = G__26158;
chunk__26143_26152 = G__26159;
count__26144_26153 = G__26160;
i__26145_26154 = G__26161;
continue;
} else {
var temp__4657__auto___26162 = cljs.core.seq.call(null,seq__26142_26151);
if(temp__4657__auto___26162){
var seq__26142_26163__$1 = temp__4657__auto___26162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26142_26163__$1)){
var c__19229__auto___26164 = cljs.core.chunk_first.call(null,seq__26142_26163__$1);
var G__26165 = cljs.core.chunk_rest.call(null,seq__26142_26163__$1);
var G__26166 = c__19229__auto___26164;
var G__26167 = cljs.core.count.call(null,c__19229__auto___26164);
var G__26168 = (0);
seq__26142_26151 = G__26165;
chunk__26143_26152 = G__26166;
count__26144_26153 = G__26167;
i__26145_26154 = G__26168;
continue;
} else {
var vec__26147_26169 = cljs.core.first.call(null,seq__26142_26163__$1);
var k_26170 = cljs.core.nth.call(null,vec__26147_26169,(0),null);
var v_26171 = cljs.core.nth.call(null,vec__26147_26169,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_26170,[cljs.core.str(v_26171),cljs.core.str("px")].join(''));

var G__26172 = cljs.core.next.call(null,seq__26142_26163__$1);
var G__26173 = null;
var G__26174 = (0);
var G__26175 = (0);
seq__26142_26151 = G__26172;
chunk__26143_26152 = G__26173;
count__26144_26153 = G__26174;
i__26145_26154 = G__26175;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq26140){
var G__26141 = cljs.core.first.call(null,seq26140);
var seq26140__$1 = cljs.core.next.call(null,seq26140);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26141,seq26140__$1);
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
var args26176 = [];
var len__19487__auto___26191 = arguments.length;
var i__19488__auto___26192 = (0);
while(true){
if((i__19488__auto___26192 < len__19487__auto___26191)){
args26176.push((arguments[i__19488__auto___26192]));

var G__26193 = (i__19488__auto___26192 + (1));
i__19488__auto___26192 = G__26193;
continue;
} else {
}
break;
}

var G__26182 = args26176.length;
switch (G__26182) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26176.slice((3)),(0),null));
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
var G__26183 = elem;
(G__26183[k__$1] = v);

return G__26183;
} else {
var G__26184 = elem;
G__26184.setAttribute(k__$1,v);

return G__26184;
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

var seq__26185_26195 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__26186_26196 = null;
var count__26187_26197 = (0);
var i__26188_26198 = (0);
while(true){
if((i__26188_26198 < count__26187_26197)){
var vec__26189_26199 = cljs.core._nth.call(null,chunk__26186_26196,i__26188_26198);
var k_26200__$1 = cljs.core.nth.call(null,vec__26189_26199,(0),null);
var v_26201__$1 = cljs.core.nth.call(null,vec__26189_26199,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_26200__$1,v_26201__$1);

var G__26202 = seq__26185_26195;
var G__26203 = chunk__26186_26196;
var G__26204 = count__26187_26197;
var G__26205 = (i__26188_26198 + (1));
seq__26185_26195 = G__26202;
chunk__26186_26196 = G__26203;
count__26187_26197 = G__26204;
i__26188_26198 = G__26205;
continue;
} else {
var temp__4657__auto___26206 = cljs.core.seq.call(null,seq__26185_26195);
if(temp__4657__auto___26206){
var seq__26185_26207__$1 = temp__4657__auto___26206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26185_26207__$1)){
var c__19229__auto___26208 = cljs.core.chunk_first.call(null,seq__26185_26207__$1);
var G__26209 = cljs.core.chunk_rest.call(null,seq__26185_26207__$1);
var G__26210 = c__19229__auto___26208;
var G__26211 = cljs.core.count.call(null,c__19229__auto___26208);
var G__26212 = (0);
seq__26185_26195 = G__26209;
chunk__26186_26196 = G__26210;
count__26187_26197 = G__26211;
i__26188_26198 = G__26212;
continue;
} else {
var vec__26190_26213 = cljs.core.first.call(null,seq__26185_26207__$1);
var k_26214__$1 = cljs.core.nth.call(null,vec__26190_26213,(0),null);
var v_26215__$1 = cljs.core.nth.call(null,vec__26190_26213,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_26214__$1,v_26215__$1);

var G__26216 = cljs.core.next.call(null,seq__26185_26207__$1);
var G__26217 = null;
var G__26218 = (0);
var G__26219 = (0);
seq__26185_26195 = G__26216;
chunk__26186_26196 = G__26217;
count__26187_26197 = G__26218;
i__26188_26198 = G__26219;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq26177){
var G__26178 = cljs.core.first.call(null,seq26177);
var seq26177__$1 = cljs.core.next.call(null,seq26177);
var G__26179 = cljs.core.first.call(null,seq26177__$1);
var seq26177__$2 = cljs.core.next.call(null,seq26177__$1);
var G__26180 = cljs.core.first.call(null,seq26177__$2);
var seq26177__$3 = cljs.core.next.call(null,seq26177__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26178,G__26179,G__26180,seq26177__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args26220 = [];
var len__19487__auto___26230 = arguments.length;
var i__19488__auto___26231 = (0);
while(true){
if((i__19488__auto___26231 < len__19487__auto___26230)){
args26220.push((arguments[i__19488__auto___26231]));

var G__26232 = (i__19488__auto___26231 + (1));
i__19488__auto___26231 = G__26232;
continue;
} else {
}
break;
}

var G__26225 = args26220.length;
switch (G__26225) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26220.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_26234__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_26234__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_26234__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__26226_26235 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__26227_26236 = null;
var count__26228_26237 = (0);
var i__26229_26238 = (0);
while(true){
if((i__26229_26238 < count__26228_26237)){
var k_26239__$1 = cljs.core._nth.call(null,chunk__26227_26236,i__26229_26238);
dommy.core.remove_attr_BANG_.call(null,elem,k_26239__$1);

var G__26240 = seq__26226_26235;
var G__26241 = chunk__26227_26236;
var G__26242 = count__26228_26237;
var G__26243 = (i__26229_26238 + (1));
seq__26226_26235 = G__26240;
chunk__26227_26236 = G__26241;
count__26228_26237 = G__26242;
i__26229_26238 = G__26243;
continue;
} else {
var temp__4657__auto___26244 = cljs.core.seq.call(null,seq__26226_26235);
if(temp__4657__auto___26244){
var seq__26226_26245__$1 = temp__4657__auto___26244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26226_26245__$1)){
var c__19229__auto___26246 = cljs.core.chunk_first.call(null,seq__26226_26245__$1);
var G__26247 = cljs.core.chunk_rest.call(null,seq__26226_26245__$1);
var G__26248 = c__19229__auto___26246;
var G__26249 = cljs.core.count.call(null,c__19229__auto___26246);
var G__26250 = (0);
seq__26226_26235 = G__26247;
chunk__26227_26236 = G__26248;
count__26228_26237 = G__26249;
i__26229_26238 = G__26250;
continue;
} else {
var k_26251__$1 = cljs.core.first.call(null,seq__26226_26245__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_26251__$1);

var G__26252 = cljs.core.next.call(null,seq__26226_26245__$1);
var G__26253 = null;
var G__26254 = (0);
var G__26255 = (0);
seq__26226_26235 = G__26252;
chunk__26227_26236 = G__26253;
count__26228_26237 = G__26254;
i__26229_26238 = G__26255;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq26221){
var G__26222 = cljs.core.first.call(null,seq26221);
var seq26221__$1 = cljs.core.next.call(null,seq26221);
var G__26223 = cljs.core.first.call(null,seq26221__$1);
var seq26221__$2 = cljs.core.next.call(null,seq26221__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26222,G__26223,seq26221__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args26256 = [];
var len__19487__auto___26259 = arguments.length;
var i__19488__auto___26260 = (0);
while(true){
if((i__19488__auto___26260 < len__19487__auto___26259)){
args26256.push((arguments[i__19488__auto___26260]));

var G__26261 = (i__19488__auto___26260 + (1));
i__19488__auto___26260 = G__26261;
continue;
} else {
}
break;
}

var G__26258 = args26256.length;
switch (G__26258) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26256.length)].join('')));

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
var args26263 = [];
var len__19487__auto___26281 = arguments.length;
var i__19488__auto___26282 = (0);
while(true){
if((i__19488__auto___26282 < len__19487__auto___26281)){
args26263.push((arguments[i__19488__auto___26282]));

var G__26283 = (i__19488__auto___26282 + (1));
i__19488__auto___26282 = G__26283;
continue;
} else {
}
break;
}

var G__26268 = args26263.length;
switch (G__26268) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26263.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___26285 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___26285)){
var class_list_26286 = temp__4655__auto___26285;
var seq__26269_26287 = cljs.core.seq.call(null,classes__$1);
var chunk__26270_26288 = null;
var count__26271_26289 = (0);
var i__26272_26290 = (0);
while(true){
if((i__26272_26290 < count__26271_26289)){
var c_26291 = cljs.core._nth.call(null,chunk__26270_26288,i__26272_26290);
class_list_26286.add(c_26291);

var G__26292 = seq__26269_26287;
var G__26293 = chunk__26270_26288;
var G__26294 = count__26271_26289;
var G__26295 = (i__26272_26290 + (1));
seq__26269_26287 = G__26292;
chunk__26270_26288 = G__26293;
count__26271_26289 = G__26294;
i__26272_26290 = G__26295;
continue;
} else {
var temp__4657__auto___26296 = cljs.core.seq.call(null,seq__26269_26287);
if(temp__4657__auto___26296){
var seq__26269_26297__$1 = temp__4657__auto___26296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26269_26297__$1)){
var c__19229__auto___26298 = cljs.core.chunk_first.call(null,seq__26269_26297__$1);
var G__26299 = cljs.core.chunk_rest.call(null,seq__26269_26297__$1);
var G__26300 = c__19229__auto___26298;
var G__26301 = cljs.core.count.call(null,c__19229__auto___26298);
var G__26302 = (0);
seq__26269_26287 = G__26299;
chunk__26270_26288 = G__26300;
count__26271_26289 = G__26301;
i__26272_26290 = G__26302;
continue;
} else {
var c_26303 = cljs.core.first.call(null,seq__26269_26297__$1);
class_list_26286.add(c_26303);

var G__26304 = cljs.core.next.call(null,seq__26269_26297__$1);
var G__26305 = null;
var G__26306 = (0);
var G__26307 = (0);
seq__26269_26287 = G__26304;
chunk__26270_26288 = G__26305;
count__26271_26289 = G__26306;
i__26272_26290 = G__26307;
continue;
}
} else {
}
}
break;
}
} else {
var seq__26273_26308 = cljs.core.seq.call(null,classes__$1);
var chunk__26274_26309 = null;
var count__26275_26310 = (0);
var i__26276_26311 = (0);
while(true){
if((i__26276_26311 < count__26275_26310)){
var c_26312 = cljs.core._nth.call(null,chunk__26274_26309,i__26276_26311);
var class_name_26313 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_26313,c_26312))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_26313 === ""))?c_26312:[cljs.core.str(class_name_26313),cljs.core.str(" "),cljs.core.str(c_26312)].join('')));
}

var G__26314 = seq__26273_26308;
var G__26315 = chunk__26274_26309;
var G__26316 = count__26275_26310;
var G__26317 = (i__26276_26311 + (1));
seq__26273_26308 = G__26314;
chunk__26274_26309 = G__26315;
count__26275_26310 = G__26316;
i__26276_26311 = G__26317;
continue;
} else {
var temp__4657__auto___26318 = cljs.core.seq.call(null,seq__26273_26308);
if(temp__4657__auto___26318){
var seq__26273_26319__$1 = temp__4657__auto___26318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26273_26319__$1)){
var c__19229__auto___26320 = cljs.core.chunk_first.call(null,seq__26273_26319__$1);
var G__26321 = cljs.core.chunk_rest.call(null,seq__26273_26319__$1);
var G__26322 = c__19229__auto___26320;
var G__26323 = cljs.core.count.call(null,c__19229__auto___26320);
var G__26324 = (0);
seq__26273_26308 = G__26321;
chunk__26274_26309 = G__26322;
count__26275_26310 = G__26323;
i__26276_26311 = G__26324;
continue;
} else {
var c_26325 = cljs.core.first.call(null,seq__26273_26319__$1);
var class_name_26326 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_26326,c_26325))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_26326 === ""))?c_26325:[cljs.core.str(class_name_26326),cljs.core.str(" "),cljs.core.str(c_26325)].join('')));
}

var G__26327 = cljs.core.next.call(null,seq__26273_26319__$1);
var G__26328 = null;
var G__26329 = (0);
var G__26330 = (0);
seq__26273_26308 = G__26327;
chunk__26274_26309 = G__26328;
count__26275_26310 = G__26329;
i__26276_26311 = G__26330;
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
var seq__26277_26331 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__26278_26332 = null;
var count__26279_26333 = (0);
var i__26280_26334 = (0);
while(true){
if((i__26280_26334 < count__26279_26333)){
var c_26335 = cljs.core._nth.call(null,chunk__26278_26332,i__26280_26334);
dommy.core.add_class_BANG_.call(null,elem,c_26335);

var G__26336 = seq__26277_26331;
var G__26337 = chunk__26278_26332;
var G__26338 = count__26279_26333;
var G__26339 = (i__26280_26334 + (1));
seq__26277_26331 = G__26336;
chunk__26278_26332 = G__26337;
count__26279_26333 = G__26338;
i__26280_26334 = G__26339;
continue;
} else {
var temp__4657__auto___26340 = cljs.core.seq.call(null,seq__26277_26331);
if(temp__4657__auto___26340){
var seq__26277_26341__$1 = temp__4657__auto___26340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26277_26341__$1)){
var c__19229__auto___26342 = cljs.core.chunk_first.call(null,seq__26277_26341__$1);
var G__26343 = cljs.core.chunk_rest.call(null,seq__26277_26341__$1);
var G__26344 = c__19229__auto___26342;
var G__26345 = cljs.core.count.call(null,c__19229__auto___26342);
var G__26346 = (0);
seq__26277_26331 = G__26343;
chunk__26278_26332 = G__26344;
count__26279_26333 = G__26345;
i__26280_26334 = G__26346;
continue;
} else {
var c_26347 = cljs.core.first.call(null,seq__26277_26341__$1);
dommy.core.add_class_BANG_.call(null,elem,c_26347);

var G__26348 = cljs.core.next.call(null,seq__26277_26341__$1);
var G__26349 = null;
var G__26350 = (0);
var G__26351 = (0);
seq__26277_26331 = G__26348;
chunk__26278_26332 = G__26349;
count__26279_26333 = G__26350;
i__26280_26334 = G__26351;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq26264){
var G__26265 = cljs.core.first.call(null,seq26264);
var seq26264__$1 = cljs.core.next.call(null,seq26264);
var G__26266 = cljs.core.first.call(null,seq26264__$1);
var seq26264__$2 = cljs.core.next.call(null,seq26264__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26265,G__26266,seq26264__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args26352 = [];
var len__19487__auto___26362 = arguments.length;
var i__19488__auto___26363 = (0);
while(true){
if((i__19488__auto___26363 < len__19487__auto___26362)){
args26352.push((arguments[i__19488__auto___26363]));

var G__26364 = (i__19488__auto___26363 + (1));
i__19488__auto___26363 = G__26364;
continue;
} else {
}
break;
}

var G__26357 = args26352.length;
switch (G__26357) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26352.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___26366 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___26366)){
var class_list_26367 = temp__4655__auto___26366;
class_list_26367.remove(c__$1);
} else {
var class_name_26368 = dommy.core.class$.call(null,elem);
var new_class_name_26369 = dommy.utils.remove_class_str.call(null,class_name_26368,c__$1);
if((class_name_26368 === new_class_name_26369)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_26369);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__26358 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__26359 = null;
var count__26360 = (0);
var i__26361 = (0);
while(true){
if((i__26361 < count__26360)){
var c = cljs.core._nth.call(null,chunk__26359,i__26361);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__26370 = seq__26358;
var G__26371 = chunk__26359;
var G__26372 = count__26360;
var G__26373 = (i__26361 + (1));
seq__26358 = G__26370;
chunk__26359 = G__26371;
count__26360 = G__26372;
i__26361 = G__26373;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26358);
if(temp__4657__auto__){
var seq__26358__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26358__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__26358__$1);
var G__26374 = cljs.core.chunk_rest.call(null,seq__26358__$1);
var G__26375 = c__19229__auto__;
var G__26376 = cljs.core.count.call(null,c__19229__auto__);
var G__26377 = (0);
seq__26358 = G__26374;
chunk__26359 = G__26375;
count__26360 = G__26376;
i__26361 = G__26377;
continue;
} else {
var c = cljs.core.first.call(null,seq__26358__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__26378 = cljs.core.next.call(null,seq__26358__$1);
var G__26379 = null;
var G__26380 = (0);
var G__26381 = (0);
seq__26358 = G__26378;
chunk__26359 = G__26379;
count__26360 = G__26380;
i__26361 = G__26381;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq26353){
var G__26354 = cljs.core.first.call(null,seq26353);
var seq26353__$1 = cljs.core.next.call(null,seq26353);
var G__26355 = cljs.core.first.call(null,seq26353__$1);
var seq26353__$2 = cljs.core.next.call(null,seq26353__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26354,G__26355,seq26353__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args26382 = [];
var len__19487__auto___26385 = arguments.length;
var i__19488__auto___26386 = (0);
while(true){
if((i__19488__auto___26386 < len__19487__auto___26385)){
args26382.push((arguments[i__19488__auto___26386]));

var G__26387 = (i__19488__auto___26386 + (1));
i__19488__auto___26386 = G__26387;
continue;
} else {
}
break;
}

var G__26384 = args26382.length;
switch (G__26384) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26382.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___26389 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___26389)){
var class_list_26390 = temp__4655__auto___26389;
class_list_26390.toggle(c__$1);
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
var args26391 = [];
var len__19487__auto___26394 = arguments.length;
var i__19488__auto___26395 = (0);
while(true){
if((i__19488__auto___26395 < len__19487__auto___26394)){
args26391.push((arguments[i__19488__auto___26395]));

var G__26396 = (i__19488__auto___26395 + (1));
i__19488__auto___26395 = G__26396;
continue;
} else {
}
break;
}

var G__26393 = args26391.length;
switch (G__26393) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26391.length)].join('')));

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
var args26398 = [];
var len__19487__auto___26401 = arguments.length;
var i__19488__auto___26402 = (0);
while(true){
if((i__19488__auto___26402 < len__19487__auto___26401)){
args26398.push((arguments[i__19488__auto___26402]));

var G__26403 = (i__19488__auto___26402 + (1));
i__19488__auto___26402 = G__26403;
continue;
} else {
}
break;
}

var G__26400 = args26398.length;
switch (G__26400) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26398.length)].join('')));

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
var args26405 = [];
var len__19487__auto___26416 = arguments.length;
var i__19488__auto___26417 = (0);
while(true){
if((i__19488__auto___26417 < len__19487__auto___26416)){
args26405.push((arguments[i__19488__auto___26417]));

var G__26418 = (i__19488__auto___26417 + (1));
i__19488__auto___26417 = G__26418;
continue;
} else {
}
break;
}

var G__26410 = args26405.length;
switch (G__26410) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26405.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__26411 = parent;
G__26411.appendChild(child);

return G__26411;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26412_26420 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__26413_26421 = null;
var count__26414_26422 = (0);
var i__26415_26423 = (0);
while(true){
if((i__26415_26423 < count__26414_26422)){
var c_26424 = cljs.core._nth.call(null,chunk__26413_26421,i__26415_26423);
dommy.core.append_BANG_.call(null,parent,c_26424);

var G__26425 = seq__26412_26420;
var G__26426 = chunk__26413_26421;
var G__26427 = count__26414_26422;
var G__26428 = (i__26415_26423 + (1));
seq__26412_26420 = G__26425;
chunk__26413_26421 = G__26426;
count__26414_26422 = G__26427;
i__26415_26423 = G__26428;
continue;
} else {
var temp__4657__auto___26429 = cljs.core.seq.call(null,seq__26412_26420);
if(temp__4657__auto___26429){
var seq__26412_26430__$1 = temp__4657__auto___26429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26412_26430__$1)){
var c__19229__auto___26431 = cljs.core.chunk_first.call(null,seq__26412_26430__$1);
var G__26432 = cljs.core.chunk_rest.call(null,seq__26412_26430__$1);
var G__26433 = c__19229__auto___26431;
var G__26434 = cljs.core.count.call(null,c__19229__auto___26431);
var G__26435 = (0);
seq__26412_26420 = G__26432;
chunk__26413_26421 = G__26433;
count__26414_26422 = G__26434;
i__26415_26423 = G__26435;
continue;
} else {
var c_26436 = cljs.core.first.call(null,seq__26412_26430__$1);
dommy.core.append_BANG_.call(null,parent,c_26436);

var G__26437 = cljs.core.next.call(null,seq__26412_26430__$1);
var G__26438 = null;
var G__26439 = (0);
var G__26440 = (0);
seq__26412_26420 = G__26437;
chunk__26413_26421 = G__26438;
count__26414_26422 = G__26439;
i__26415_26423 = G__26440;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq26406){
var G__26407 = cljs.core.first.call(null,seq26406);
var seq26406__$1 = cljs.core.next.call(null,seq26406);
var G__26408 = cljs.core.first.call(null,seq26406__$1);
var seq26406__$2 = cljs.core.next.call(null,seq26406__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26407,G__26408,seq26406__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args26441 = [];
var len__19487__auto___26452 = arguments.length;
var i__19488__auto___26453 = (0);
while(true){
if((i__19488__auto___26453 < len__19487__auto___26452)){
args26441.push((arguments[i__19488__auto___26453]));

var G__26454 = (i__19488__auto___26453 + (1));
i__19488__auto___26453 = G__26454;
continue;
} else {
}
break;
}

var G__26446 = args26441.length;
switch (G__26446) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19506__auto__ = (new cljs.core.IndexedSeq(args26441.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19506__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__26447 = parent;
G__26447.insertBefore(child,parent.firstChild);

return G__26447;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__26448_26456 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__26449_26457 = null;
var count__26450_26458 = (0);
var i__26451_26459 = (0);
while(true){
if((i__26451_26459 < count__26450_26458)){
var c_26460 = cljs.core._nth.call(null,chunk__26449_26457,i__26451_26459);
dommy.core.prepend_BANG_.call(null,parent,c_26460);

var G__26461 = seq__26448_26456;
var G__26462 = chunk__26449_26457;
var G__26463 = count__26450_26458;
var G__26464 = (i__26451_26459 + (1));
seq__26448_26456 = G__26461;
chunk__26449_26457 = G__26462;
count__26450_26458 = G__26463;
i__26451_26459 = G__26464;
continue;
} else {
var temp__4657__auto___26465 = cljs.core.seq.call(null,seq__26448_26456);
if(temp__4657__auto___26465){
var seq__26448_26466__$1 = temp__4657__auto___26465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26448_26466__$1)){
var c__19229__auto___26467 = cljs.core.chunk_first.call(null,seq__26448_26466__$1);
var G__26468 = cljs.core.chunk_rest.call(null,seq__26448_26466__$1);
var G__26469 = c__19229__auto___26467;
var G__26470 = cljs.core.count.call(null,c__19229__auto___26467);
var G__26471 = (0);
seq__26448_26456 = G__26468;
chunk__26449_26457 = G__26469;
count__26450_26458 = G__26470;
i__26451_26459 = G__26471;
continue;
} else {
var c_26472 = cljs.core.first.call(null,seq__26448_26466__$1);
dommy.core.prepend_BANG_.call(null,parent,c_26472);

var G__26473 = cljs.core.next.call(null,seq__26448_26466__$1);
var G__26474 = null;
var G__26475 = (0);
var G__26476 = (0);
seq__26448_26456 = G__26473;
chunk__26449_26457 = G__26474;
count__26450_26458 = G__26475;
i__26451_26459 = G__26476;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq26442){
var G__26443 = cljs.core.first.call(null,seq26442);
var seq26442__$1 = cljs.core.next.call(null,seq26442);
var G__26444 = cljs.core.first.call(null,seq26442__$1);
var seq26442__$2 = cljs.core.next.call(null,seq26442__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26443,G__26444,seq26442__$2);
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
var temp__4655__auto___26477 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___26477)){
var next_26478 = temp__4655__auto___26477;
dommy.core.insert_before_BANG_.call(null,elem,next_26478);
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
var args26479 = [];
var len__19487__auto___26483 = arguments.length;
var i__19488__auto___26484 = (0);
while(true){
if((i__19488__auto___26484 < len__19487__auto___26483)){
args26479.push((arguments[i__19488__auto___26484]));

var G__26485 = (i__19488__auto___26484 + (1));
i__19488__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var G__26481 = args26479.length;
switch (G__26481) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26479.length)].join('')));

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
var G__26482 = p;
G__26482.removeChild(elem);

return G__26482;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26487){
var vec__26488 = p__26487;
var special_mouse_event = cljs.core.nth.call(null,vec__26488,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__26488,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__26488,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__26488,special_mouse_event,real_mouse_event){
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
;})(vec__26488,special_mouse_event,real_mouse_event))
});})(vec__26488,special_mouse_event,real_mouse_event))
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
var len__19487__auto___26492 = arguments.length;
var i__19488__auto___26493 = (0);
while(true){
if((i__19488__auto___26493 < len__19487__auto___26492)){
args__19494__auto__.push((arguments[i__19488__auto___26493]));

var G__26494 = (i__19488__auto___26493 + (1));
i__19488__auto___26493 = G__26494;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq26489){
var G__26490 = cljs.core.first.call(null,seq26489);
var seq26489__$1 = cljs.core.next.call(null,seq26489);
var G__26491 = cljs.core.first.call(null,seq26489__$1);
var seq26489__$2 = cljs.core.next.call(null,seq26489__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26490,G__26491,seq26489__$2);
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
var len__19487__auto___26520 = arguments.length;
var i__19488__auto___26521 = (0);
while(true){
if((i__19488__auto___26521 < len__19487__auto___26520)){
args__19494__auto__.push((arguments[i__19488__auto___26521]));

var G__26522 = (i__19488__auto___26521 + (1));
i__19488__auto___26521 = G__26522;
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

var vec__26497_26523 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26524 = cljs.core.nth.call(null,vec__26497_26523,(0),null);
var selector_26525 = cljs.core.nth.call(null,vec__26497_26523,(1),null);
var seq__26498_26526 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26505_26527 = null;
var count__26506_26528 = (0);
var i__26507_26529 = (0);
while(true){
if((i__26507_26529 < count__26506_26528)){
var vec__26514_26530 = cljs.core._nth.call(null,chunk__26505_26527,i__26507_26529);
var orig_type_26531 = cljs.core.nth.call(null,vec__26514_26530,(0),null);
var f_26532 = cljs.core.nth.call(null,vec__26514_26530,(1),null);
var seq__26508_26533 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26531,cljs.core.PersistentArrayMap.fromArray([orig_type_26531,cljs.core.identity], true, false)));
var chunk__26510_26534 = null;
var count__26511_26535 = (0);
var i__26512_26536 = (0);
while(true){
if((i__26512_26536 < count__26511_26535)){
var vec__26515_26537 = cljs.core._nth.call(null,chunk__26510_26534,i__26512_26536);
var actual_type_26538 = cljs.core.nth.call(null,vec__26515_26537,(0),null);
var factory_26539 = cljs.core.nth.call(null,vec__26515_26537,(1),null);
var canonical_f_26540 = (cljs.core.truth_(selector_26525)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26524,selector_26525):cljs.core.identity).call(null,factory_26539.call(null,f_26532));
dommy.core.update_event_listeners_BANG_.call(null,elem_26524,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26525,actual_type_26538,f_26532], null),canonical_f_26540);

if(cljs.core.truth_(elem_26524.addEventListener)){
elem_26524.addEventListener(cljs.core.name.call(null,actual_type_26538),canonical_f_26540);
} else {
elem_26524.attachEvent(cljs.core.name.call(null,actual_type_26538),canonical_f_26540);
}

var G__26541 = seq__26508_26533;
var G__26542 = chunk__26510_26534;
var G__26543 = count__26511_26535;
var G__26544 = (i__26512_26536 + (1));
seq__26508_26533 = G__26541;
chunk__26510_26534 = G__26542;
count__26511_26535 = G__26543;
i__26512_26536 = G__26544;
continue;
} else {
var temp__4657__auto___26545 = cljs.core.seq.call(null,seq__26508_26533);
if(temp__4657__auto___26545){
var seq__26508_26546__$1 = temp__4657__auto___26545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26508_26546__$1)){
var c__19229__auto___26547 = cljs.core.chunk_first.call(null,seq__26508_26546__$1);
var G__26548 = cljs.core.chunk_rest.call(null,seq__26508_26546__$1);
var G__26549 = c__19229__auto___26547;
var G__26550 = cljs.core.count.call(null,c__19229__auto___26547);
var G__26551 = (0);
seq__26508_26533 = G__26548;
chunk__26510_26534 = G__26549;
count__26511_26535 = G__26550;
i__26512_26536 = G__26551;
continue;
} else {
var vec__26516_26552 = cljs.core.first.call(null,seq__26508_26546__$1);
var actual_type_26553 = cljs.core.nth.call(null,vec__26516_26552,(0),null);
var factory_26554 = cljs.core.nth.call(null,vec__26516_26552,(1),null);
var canonical_f_26555 = (cljs.core.truth_(selector_26525)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26524,selector_26525):cljs.core.identity).call(null,factory_26554.call(null,f_26532));
dommy.core.update_event_listeners_BANG_.call(null,elem_26524,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26525,actual_type_26553,f_26532], null),canonical_f_26555);

if(cljs.core.truth_(elem_26524.addEventListener)){
elem_26524.addEventListener(cljs.core.name.call(null,actual_type_26553),canonical_f_26555);
} else {
elem_26524.attachEvent(cljs.core.name.call(null,actual_type_26553),canonical_f_26555);
}

var G__26556 = cljs.core.next.call(null,seq__26508_26546__$1);
var G__26557 = null;
var G__26558 = (0);
var G__26559 = (0);
seq__26508_26533 = G__26556;
chunk__26510_26534 = G__26557;
count__26511_26535 = G__26558;
i__26512_26536 = G__26559;
continue;
}
} else {
}
}
break;
}

var G__26560 = seq__26498_26526;
var G__26561 = chunk__26505_26527;
var G__26562 = count__26506_26528;
var G__26563 = (i__26507_26529 + (1));
seq__26498_26526 = G__26560;
chunk__26505_26527 = G__26561;
count__26506_26528 = G__26562;
i__26507_26529 = G__26563;
continue;
} else {
var temp__4657__auto___26564 = cljs.core.seq.call(null,seq__26498_26526);
if(temp__4657__auto___26564){
var seq__26498_26565__$1 = temp__4657__auto___26564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26498_26565__$1)){
var c__19229__auto___26566 = cljs.core.chunk_first.call(null,seq__26498_26565__$1);
var G__26567 = cljs.core.chunk_rest.call(null,seq__26498_26565__$1);
var G__26568 = c__19229__auto___26566;
var G__26569 = cljs.core.count.call(null,c__19229__auto___26566);
var G__26570 = (0);
seq__26498_26526 = G__26567;
chunk__26505_26527 = G__26568;
count__26506_26528 = G__26569;
i__26507_26529 = G__26570;
continue;
} else {
var vec__26517_26571 = cljs.core.first.call(null,seq__26498_26565__$1);
var orig_type_26572 = cljs.core.nth.call(null,vec__26517_26571,(0),null);
var f_26573 = cljs.core.nth.call(null,vec__26517_26571,(1),null);
var seq__26499_26574 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26572,cljs.core.PersistentArrayMap.fromArray([orig_type_26572,cljs.core.identity], true, false)));
var chunk__26501_26575 = null;
var count__26502_26576 = (0);
var i__26503_26577 = (0);
while(true){
if((i__26503_26577 < count__26502_26576)){
var vec__26518_26578 = cljs.core._nth.call(null,chunk__26501_26575,i__26503_26577);
var actual_type_26579 = cljs.core.nth.call(null,vec__26518_26578,(0),null);
var factory_26580 = cljs.core.nth.call(null,vec__26518_26578,(1),null);
var canonical_f_26581 = (cljs.core.truth_(selector_26525)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26524,selector_26525):cljs.core.identity).call(null,factory_26580.call(null,f_26573));
dommy.core.update_event_listeners_BANG_.call(null,elem_26524,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26525,actual_type_26579,f_26573], null),canonical_f_26581);

if(cljs.core.truth_(elem_26524.addEventListener)){
elem_26524.addEventListener(cljs.core.name.call(null,actual_type_26579),canonical_f_26581);
} else {
elem_26524.attachEvent(cljs.core.name.call(null,actual_type_26579),canonical_f_26581);
}

var G__26582 = seq__26499_26574;
var G__26583 = chunk__26501_26575;
var G__26584 = count__26502_26576;
var G__26585 = (i__26503_26577 + (1));
seq__26499_26574 = G__26582;
chunk__26501_26575 = G__26583;
count__26502_26576 = G__26584;
i__26503_26577 = G__26585;
continue;
} else {
var temp__4657__auto___26586__$1 = cljs.core.seq.call(null,seq__26499_26574);
if(temp__4657__auto___26586__$1){
var seq__26499_26587__$1 = temp__4657__auto___26586__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26499_26587__$1)){
var c__19229__auto___26588 = cljs.core.chunk_first.call(null,seq__26499_26587__$1);
var G__26589 = cljs.core.chunk_rest.call(null,seq__26499_26587__$1);
var G__26590 = c__19229__auto___26588;
var G__26591 = cljs.core.count.call(null,c__19229__auto___26588);
var G__26592 = (0);
seq__26499_26574 = G__26589;
chunk__26501_26575 = G__26590;
count__26502_26576 = G__26591;
i__26503_26577 = G__26592;
continue;
} else {
var vec__26519_26593 = cljs.core.first.call(null,seq__26499_26587__$1);
var actual_type_26594 = cljs.core.nth.call(null,vec__26519_26593,(0),null);
var factory_26595 = cljs.core.nth.call(null,vec__26519_26593,(1),null);
var canonical_f_26596 = (cljs.core.truth_(selector_26525)?cljs.core.partial.call(null,dommy.core.live_listener,elem_26524,selector_26525):cljs.core.identity).call(null,factory_26595.call(null,f_26573));
dommy.core.update_event_listeners_BANG_.call(null,elem_26524,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26525,actual_type_26594,f_26573], null),canonical_f_26596);

if(cljs.core.truth_(elem_26524.addEventListener)){
elem_26524.addEventListener(cljs.core.name.call(null,actual_type_26594),canonical_f_26596);
} else {
elem_26524.attachEvent(cljs.core.name.call(null,actual_type_26594),canonical_f_26596);
}

var G__26597 = cljs.core.next.call(null,seq__26499_26587__$1);
var G__26598 = null;
var G__26599 = (0);
var G__26600 = (0);
seq__26499_26574 = G__26597;
chunk__26501_26575 = G__26598;
count__26502_26576 = G__26599;
i__26503_26577 = G__26600;
continue;
}
} else {
}
}
break;
}

var G__26601 = cljs.core.next.call(null,seq__26498_26565__$1);
var G__26602 = null;
var G__26603 = (0);
var G__26604 = (0);
seq__26498_26526 = G__26601;
chunk__26505_26527 = G__26602;
count__26506_26528 = G__26603;
i__26507_26529 = G__26604;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq26495){
var G__26496 = cljs.core.first.call(null,seq26495);
var seq26495__$1 = cljs.core.next.call(null,seq26495);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26496,seq26495__$1);
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
var len__19487__auto___26630 = arguments.length;
var i__19488__auto___26631 = (0);
while(true){
if((i__19488__auto___26631 < len__19487__auto___26630)){
args__19494__auto__.push((arguments[i__19488__auto___26631]));

var G__26632 = (i__19488__auto___26631 + (1));
i__19488__auto___26631 = G__26632;
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

var vec__26607_26633 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26634 = cljs.core.nth.call(null,vec__26607_26633,(0),null);
var selector_26635 = cljs.core.nth.call(null,vec__26607_26633,(1),null);
var seq__26608_26636 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26615_26637 = null;
var count__26616_26638 = (0);
var i__26617_26639 = (0);
while(true){
if((i__26617_26639 < count__26616_26638)){
var vec__26624_26640 = cljs.core._nth.call(null,chunk__26615_26637,i__26617_26639);
var orig_type_26641 = cljs.core.nth.call(null,vec__26624_26640,(0),null);
var f_26642 = cljs.core.nth.call(null,vec__26624_26640,(1),null);
var seq__26618_26643 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26641,cljs.core.PersistentArrayMap.fromArray([orig_type_26641,cljs.core.identity], true, false)));
var chunk__26620_26644 = null;
var count__26621_26645 = (0);
var i__26622_26646 = (0);
while(true){
if((i__26622_26646 < count__26621_26645)){
var vec__26625_26647 = cljs.core._nth.call(null,chunk__26620_26644,i__26622_26646);
var actual_type_26648 = cljs.core.nth.call(null,vec__26625_26647,(0),null);
var __26649 = cljs.core.nth.call(null,vec__26625_26647,(1),null);
var keys_26650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26635,actual_type_26648,f_26642], null);
var canonical_f_26651 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26634),keys_26650);
dommy.core.update_event_listeners_BANG_.call(null,elem_26634,dommy.utils.dissoc_in,keys_26650);

if(cljs.core.truth_(elem_26634.removeEventListener)){
elem_26634.removeEventListener(cljs.core.name.call(null,actual_type_26648),canonical_f_26651);
} else {
elem_26634.detachEvent(cljs.core.name.call(null,actual_type_26648),canonical_f_26651);
}

var G__26652 = seq__26618_26643;
var G__26653 = chunk__26620_26644;
var G__26654 = count__26621_26645;
var G__26655 = (i__26622_26646 + (1));
seq__26618_26643 = G__26652;
chunk__26620_26644 = G__26653;
count__26621_26645 = G__26654;
i__26622_26646 = G__26655;
continue;
} else {
var temp__4657__auto___26656 = cljs.core.seq.call(null,seq__26618_26643);
if(temp__4657__auto___26656){
var seq__26618_26657__$1 = temp__4657__auto___26656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26618_26657__$1)){
var c__19229__auto___26658 = cljs.core.chunk_first.call(null,seq__26618_26657__$1);
var G__26659 = cljs.core.chunk_rest.call(null,seq__26618_26657__$1);
var G__26660 = c__19229__auto___26658;
var G__26661 = cljs.core.count.call(null,c__19229__auto___26658);
var G__26662 = (0);
seq__26618_26643 = G__26659;
chunk__26620_26644 = G__26660;
count__26621_26645 = G__26661;
i__26622_26646 = G__26662;
continue;
} else {
var vec__26626_26663 = cljs.core.first.call(null,seq__26618_26657__$1);
var actual_type_26664 = cljs.core.nth.call(null,vec__26626_26663,(0),null);
var __26665 = cljs.core.nth.call(null,vec__26626_26663,(1),null);
var keys_26666 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26635,actual_type_26664,f_26642], null);
var canonical_f_26667 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26634),keys_26666);
dommy.core.update_event_listeners_BANG_.call(null,elem_26634,dommy.utils.dissoc_in,keys_26666);

if(cljs.core.truth_(elem_26634.removeEventListener)){
elem_26634.removeEventListener(cljs.core.name.call(null,actual_type_26664),canonical_f_26667);
} else {
elem_26634.detachEvent(cljs.core.name.call(null,actual_type_26664),canonical_f_26667);
}

var G__26668 = cljs.core.next.call(null,seq__26618_26657__$1);
var G__26669 = null;
var G__26670 = (0);
var G__26671 = (0);
seq__26618_26643 = G__26668;
chunk__26620_26644 = G__26669;
count__26621_26645 = G__26670;
i__26622_26646 = G__26671;
continue;
}
} else {
}
}
break;
}

var G__26672 = seq__26608_26636;
var G__26673 = chunk__26615_26637;
var G__26674 = count__26616_26638;
var G__26675 = (i__26617_26639 + (1));
seq__26608_26636 = G__26672;
chunk__26615_26637 = G__26673;
count__26616_26638 = G__26674;
i__26617_26639 = G__26675;
continue;
} else {
var temp__4657__auto___26676 = cljs.core.seq.call(null,seq__26608_26636);
if(temp__4657__auto___26676){
var seq__26608_26677__$1 = temp__4657__auto___26676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26608_26677__$1)){
var c__19229__auto___26678 = cljs.core.chunk_first.call(null,seq__26608_26677__$1);
var G__26679 = cljs.core.chunk_rest.call(null,seq__26608_26677__$1);
var G__26680 = c__19229__auto___26678;
var G__26681 = cljs.core.count.call(null,c__19229__auto___26678);
var G__26682 = (0);
seq__26608_26636 = G__26679;
chunk__26615_26637 = G__26680;
count__26616_26638 = G__26681;
i__26617_26639 = G__26682;
continue;
} else {
var vec__26627_26683 = cljs.core.first.call(null,seq__26608_26677__$1);
var orig_type_26684 = cljs.core.nth.call(null,vec__26627_26683,(0),null);
var f_26685 = cljs.core.nth.call(null,vec__26627_26683,(1),null);
var seq__26609_26686 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_26684,cljs.core.PersistentArrayMap.fromArray([orig_type_26684,cljs.core.identity], true, false)));
var chunk__26611_26687 = null;
var count__26612_26688 = (0);
var i__26613_26689 = (0);
while(true){
if((i__26613_26689 < count__26612_26688)){
var vec__26628_26690 = cljs.core._nth.call(null,chunk__26611_26687,i__26613_26689);
var actual_type_26691 = cljs.core.nth.call(null,vec__26628_26690,(0),null);
var __26692 = cljs.core.nth.call(null,vec__26628_26690,(1),null);
var keys_26693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26635,actual_type_26691,f_26685], null);
var canonical_f_26694 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26634),keys_26693);
dommy.core.update_event_listeners_BANG_.call(null,elem_26634,dommy.utils.dissoc_in,keys_26693);

if(cljs.core.truth_(elem_26634.removeEventListener)){
elem_26634.removeEventListener(cljs.core.name.call(null,actual_type_26691),canonical_f_26694);
} else {
elem_26634.detachEvent(cljs.core.name.call(null,actual_type_26691),canonical_f_26694);
}

var G__26695 = seq__26609_26686;
var G__26696 = chunk__26611_26687;
var G__26697 = count__26612_26688;
var G__26698 = (i__26613_26689 + (1));
seq__26609_26686 = G__26695;
chunk__26611_26687 = G__26696;
count__26612_26688 = G__26697;
i__26613_26689 = G__26698;
continue;
} else {
var temp__4657__auto___26699__$1 = cljs.core.seq.call(null,seq__26609_26686);
if(temp__4657__auto___26699__$1){
var seq__26609_26700__$1 = temp__4657__auto___26699__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26609_26700__$1)){
var c__19229__auto___26701 = cljs.core.chunk_first.call(null,seq__26609_26700__$1);
var G__26702 = cljs.core.chunk_rest.call(null,seq__26609_26700__$1);
var G__26703 = c__19229__auto___26701;
var G__26704 = cljs.core.count.call(null,c__19229__auto___26701);
var G__26705 = (0);
seq__26609_26686 = G__26702;
chunk__26611_26687 = G__26703;
count__26612_26688 = G__26704;
i__26613_26689 = G__26705;
continue;
} else {
var vec__26629_26706 = cljs.core.first.call(null,seq__26609_26700__$1);
var actual_type_26707 = cljs.core.nth.call(null,vec__26629_26706,(0),null);
var __26708 = cljs.core.nth.call(null,vec__26629_26706,(1),null);
var keys_26709 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26635,actual_type_26707,f_26685], null);
var canonical_f_26710 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_26634),keys_26709);
dommy.core.update_event_listeners_BANG_.call(null,elem_26634,dommy.utils.dissoc_in,keys_26709);

if(cljs.core.truth_(elem_26634.removeEventListener)){
elem_26634.removeEventListener(cljs.core.name.call(null,actual_type_26707),canonical_f_26710);
} else {
elem_26634.detachEvent(cljs.core.name.call(null,actual_type_26707),canonical_f_26710);
}

var G__26711 = cljs.core.next.call(null,seq__26609_26700__$1);
var G__26712 = null;
var G__26713 = (0);
var G__26714 = (0);
seq__26609_26686 = G__26711;
chunk__26611_26687 = G__26712;
count__26612_26688 = G__26713;
i__26613_26689 = G__26714;
continue;
}
} else {
}
}
break;
}

var G__26715 = cljs.core.next.call(null,seq__26608_26677__$1);
var G__26716 = null;
var G__26717 = (0);
var G__26718 = (0);
seq__26608_26636 = G__26715;
chunk__26615_26637 = G__26716;
count__26616_26638 = G__26717;
i__26617_26639 = G__26718;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq26605){
var G__26606 = cljs.core.first.call(null,seq26605);
var seq26605__$1 = cljs.core.next.call(null,seq26605);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26606,seq26605__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__19494__auto__ = [];
var len__19487__auto___26728 = arguments.length;
var i__19488__auto___26729 = (0);
while(true){
if((i__19488__auto___26729 < len__19487__auto___26728)){
args__19494__auto__.push((arguments[i__19488__auto___26729]));

var G__26730 = (i__19488__auto___26729 + (1));
i__19488__auto___26729 = G__26730;
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

var vec__26721_26731 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_26732 = cljs.core.nth.call(null,vec__26721_26731,(0),null);
var selector_26733 = cljs.core.nth.call(null,vec__26721_26731,(1),null);
var seq__26722_26734 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__26723_26735 = null;
var count__26724_26736 = (0);
var i__26725_26737 = (0);
while(true){
if((i__26725_26737 < count__26724_26736)){
var vec__26726_26738 = cljs.core._nth.call(null,chunk__26723_26735,i__26725_26737);
var type_26739 = cljs.core.nth.call(null,vec__26726_26738,(0),null);
var f_26740 = cljs.core.nth.call(null,vec__26726_26738,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_26739,((function (seq__26722_26734,chunk__26723_26735,count__26724_26736,i__26725_26737,vec__26726_26738,type_26739,f_26740,vec__26721_26731,elem_26732,selector_26733){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_26739,dommy$core$this_fn);

return f_26740.call(null,e);
});})(seq__26722_26734,chunk__26723_26735,count__26724_26736,i__26725_26737,vec__26726_26738,type_26739,f_26740,vec__26721_26731,elem_26732,selector_26733))
);

var G__26741 = seq__26722_26734;
var G__26742 = chunk__26723_26735;
var G__26743 = count__26724_26736;
var G__26744 = (i__26725_26737 + (1));
seq__26722_26734 = G__26741;
chunk__26723_26735 = G__26742;
count__26724_26736 = G__26743;
i__26725_26737 = G__26744;
continue;
} else {
var temp__4657__auto___26745 = cljs.core.seq.call(null,seq__26722_26734);
if(temp__4657__auto___26745){
var seq__26722_26746__$1 = temp__4657__auto___26745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26722_26746__$1)){
var c__19229__auto___26747 = cljs.core.chunk_first.call(null,seq__26722_26746__$1);
var G__26748 = cljs.core.chunk_rest.call(null,seq__26722_26746__$1);
var G__26749 = c__19229__auto___26747;
var G__26750 = cljs.core.count.call(null,c__19229__auto___26747);
var G__26751 = (0);
seq__26722_26734 = G__26748;
chunk__26723_26735 = G__26749;
count__26724_26736 = G__26750;
i__26725_26737 = G__26751;
continue;
} else {
var vec__26727_26752 = cljs.core.first.call(null,seq__26722_26746__$1);
var type_26753 = cljs.core.nth.call(null,vec__26727_26752,(0),null);
var f_26754 = cljs.core.nth.call(null,vec__26727_26752,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_26753,((function (seq__26722_26734,chunk__26723_26735,count__26724_26736,i__26725_26737,vec__26727_26752,type_26753,f_26754,seq__26722_26746__$1,temp__4657__auto___26745,vec__26721_26731,elem_26732,selector_26733){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_26753,dommy$core$this_fn);

return f_26754.call(null,e);
});})(seq__26722_26734,chunk__26723_26735,count__26724_26736,i__26725_26737,vec__26727_26752,type_26753,f_26754,seq__26722_26746__$1,temp__4657__auto___26745,vec__26721_26731,elem_26732,selector_26733))
);

var G__26755 = cljs.core.next.call(null,seq__26722_26746__$1);
var G__26756 = null;
var G__26757 = (0);
var G__26758 = (0);
seq__26722_26734 = G__26755;
chunk__26723_26735 = G__26756;
count__26724_26736 = G__26757;
i__26725_26737 = G__26758;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq26719){
var G__26720 = cljs.core.first.call(null,seq26719);
var seq26719__$1 = cljs.core.next.call(null,seq26719);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26720,seq26719__$1);
});

//# sourceMappingURL=core.js.map