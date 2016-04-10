// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30792_30806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30793_30807 = null;
var count__30794_30808 = (0);
var i__30795_30809 = (0);
while(true){
if((i__30795_30809 < count__30794_30808)){
var f_30810 = cljs.core._nth.call(null,chunk__30793_30807,i__30795_30809);
cljs.core.println.call(null,"  ",f_30810);

var G__30811 = seq__30792_30806;
var G__30812 = chunk__30793_30807;
var G__30813 = count__30794_30808;
var G__30814 = (i__30795_30809 + (1));
seq__30792_30806 = G__30811;
chunk__30793_30807 = G__30812;
count__30794_30808 = G__30813;
i__30795_30809 = G__30814;
continue;
} else {
var temp__4657__auto___30815 = cljs.core.seq.call(null,seq__30792_30806);
if(temp__4657__auto___30815){
var seq__30792_30816__$1 = temp__4657__auto___30815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30792_30816__$1)){
var c__19229__auto___30817 = cljs.core.chunk_first.call(null,seq__30792_30816__$1);
var G__30818 = cljs.core.chunk_rest.call(null,seq__30792_30816__$1);
var G__30819 = c__19229__auto___30817;
var G__30820 = cljs.core.count.call(null,c__19229__auto___30817);
var G__30821 = (0);
seq__30792_30806 = G__30818;
chunk__30793_30807 = G__30819;
count__30794_30808 = G__30820;
i__30795_30809 = G__30821;
continue;
} else {
var f_30822 = cljs.core.first.call(null,seq__30792_30816__$1);
cljs.core.println.call(null,"  ",f_30822);

var G__30823 = cljs.core.next.call(null,seq__30792_30816__$1);
var G__30824 = null;
var G__30825 = (0);
var G__30826 = (0);
seq__30792_30806 = G__30823;
chunk__30793_30807 = G__30824;
count__30794_30808 = G__30825;
i__30795_30809 = G__30826;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30827 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18418__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30827);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30827)))?cljs.core.second.call(null,arglists_30827):arglists_30827));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30797 = null;
var count__30798 = (0);
var i__30799 = (0);
while(true){
if((i__30799 < count__30798)){
var vec__30800 = cljs.core._nth.call(null,chunk__30797,i__30799);
var name = cljs.core.nth.call(null,vec__30800,(0),null);
var map__30801 = cljs.core.nth.call(null,vec__30800,(1),null);
var map__30801__$1 = ((((!((map__30801 == null)))?((((map__30801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30801):map__30801);
var doc = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30828 = seq__30796;
var G__30829 = chunk__30797;
var G__30830 = count__30798;
var G__30831 = (i__30799 + (1));
seq__30796 = G__30828;
chunk__30797 = G__30829;
count__30798 = G__30830;
i__30799 = G__30831;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30796);
if(temp__4657__auto__){
var seq__30796__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30796__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__30796__$1);
var G__30832 = cljs.core.chunk_rest.call(null,seq__30796__$1);
var G__30833 = c__19229__auto__;
var G__30834 = cljs.core.count.call(null,c__19229__auto__);
var G__30835 = (0);
seq__30796 = G__30832;
chunk__30797 = G__30833;
count__30798 = G__30834;
i__30799 = G__30835;
continue;
} else {
var vec__30803 = cljs.core.first.call(null,seq__30796__$1);
var name = cljs.core.nth.call(null,vec__30803,(0),null);
var map__30804 = cljs.core.nth.call(null,vec__30803,(1),null);
var map__30804__$1 = ((((!((map__30804 == null)))?((((map__30804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);
var doc = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30836 = cljs.core.next.call(null,seq__30796__$1);
var G__30837 = null;
var G__30838 = (0);
var G__30839 = (0);
seq__30796 = G__30836;
chunk__30797 = G__30837;
count__30798 = G__30838;
i__30799 = G__30839;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map