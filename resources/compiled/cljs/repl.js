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
var seq__30797_30811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30798_30812 = null;
var count__30799_30813 = (0);
var i__30800_30814 = (0);
while(true){
if((i__30800_30814 < count__30799_30813)){
var f_30815 = cljs.core._nth.call(null,chunk__30798_30812,i__30800_30814);
cljs.core.println.call(null,"  ",f_30815);

var G__30816 = seq__30797_30811;
var G__30817 = chunk__30798_30812;
var G__30818 = count__30799_30813;
var G__30819 = (i__30800_30814 + (1));
seq__30797_30811 = G__30816;
chunk__30798_30812 = G__30817;
count__30799_30813 = G__30818;
i__30800_30814 = G__30819;
continue;
} else {
var temp__4657__auto___30820 = cljs.core.seq.call(null,seq__30797_30811);
if(temp__4657__auto___30820){
var seq__30797_30821__$1 = temp__4657__auto___30820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30797_30821__$1)){
var c__19229__auto___30822 = cljs.core.chunk_first.call(null,seq__30797_30821__$1);
var G__30823 = cljs.core.chunk_rest.call(null,seq__30797_30821__$1);
var G__30824 = c__19229__auto___30822;
var G__30825 = cljs.core.count.call(null,c__19229__auto___30822);
var G__30826 = (0);
seq__30797_30811 = G__30823;
chunk__30798_30812 = G__30824;
count__30799_30813 = G__30825;
i__30800_30814 = G__30826;
continue;
} else {
var f_30827 = cljs.core.first.call(null,seq__30797_30821__$1);
cljs.core.println.call(null,"  ",f_30827);

var G__30828 = cljs.core.next.call(null,seq__30797_30821__$1);
var G__30829 = null;
var G__30830 = (0);
var G__30831 = (0);
seq__30797_30811 = G__30828;
chunk__30798_30812 = G__30829;
count__30799_30813 = G__30830;
i__30800_30814 = G__30831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18418__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30832)))?cljs.core.second.call(null,arglists_30832):arglists_30832));
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
var seq__30801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30802 = null;
var count__30803 = (0);
var i__30804 = (0);
while(true){
if((i__30804 < count__30803)){
var vec__30805 = cljs.core._nth.call(null,chunk__30802,i__30804);
var name = cljs.core.nth.call(null,vec__30805,(0),null);
var map__30806 = cljs.core.nth.call(null,vec__30805,(1),null);
var map__30806__$1 = ((((!((map__30806 == null)))?((((map__30806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var doc = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30833 = seq__30801;
var G__30834 = chunk__30802;
var G__30835 = count__30803;
var G__30836 = (i__30804 + (1));
seq__30801 = G__30833;
chunk__30802 = G__30834;
count__30803 = G__30835;
i__30804 = G__30836;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30801);
if(temp__4657__auto__){
var seq__30801__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30801__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__30801__$1);
var G__30837 = cljs.core.chunk_rest.call(null,seq__30801__$1);
var G__30838 = c__19229__auto__;
var G__30839 = cljs.core.count.call(null,c__19229__auto__);
var G__30840 = (0);
seq__30801 = G__30837;
chunk__30802 = G__30838;
count__30803 = G__30839;
i__30804 = G__30840;
continue;
} else {
var vec__30808 = cljs.core.first.call(null,seq__30801__$1);
var name = cljs.core.nth.call(null,vec__30808,(0),null);
var map__30809 = cljs.core.nth.call(null,vec__30808,(1),null);
var map__30809__$1 = ((((!((map__30809 == null)))?((((map__30809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var doc = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30841 = cljs.core.next.call(null,seq__30801__$1);
var G__30842 = null;
var G__30843 = (0);
var G__30844 = (0);
seq__30801 = G__30841;
chunk__30802 = G__30842;
count__30803 = G__30843;
i__30804 = G__30844;
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