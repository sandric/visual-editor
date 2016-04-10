// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18418__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18418__auto__){
return or__18418__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18418__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29768_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29768_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29773 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29774 = null;
var count__29775 = (0);
var i__29776 = (0);
while(true){
if((i__29776 < count__29775)){
var n = cljs.core._nth.call(null,chunk__29774,i__29776);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29777 = seq__29773;
var G__29778 = chunk__29774;
var G__29779 = count__29775;
var G__29780 = (i__29776 + (1));
seq__29773 = G__29777;
chunk__29774 = G__29778;
count__29775 = G__29779;
i__29776 = G__29780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29773);
if(temp__4657__auto__){
var seq__29773__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29773__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__29773__$1);
var G__29781 = cljs.core.chunk_rest.call(null,seq__29773__$1);
var G__29782 = c__19229__auto__;
var G__29783 = cljs.core.count.call(null,c__19229__auto__);
var G__29784 = (0);
seq__29773 = G__29781;
chunk__29774 = G__29782;
count__29775 = G__29783;
i__29776 = G__29784;
continue;
} else {
var n = cljs.core.first.call(null,seq__29773__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29785 = cljs.core.next.call(null,seq__29773__$1);
var G__29786 = null;
var G__29787 = (0);
var G__29788 = (0);
seq__29773 = G__29785;
chunk__29774 = G__29786;
count__29775 = G__29787;
i__29776 = G__29788;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29827_29834 = cljs.core.seq.call(null,deps);
var chunk__29828_29835 = null;
var count__29829_29836 = (0);
var i__29830_29837 = (0);
while(true){
if((i__29830_29837 < count__29829_29836)){
var dep_29838 = cljs.core._nth.call(null,chunk__29828_29835,i__29830_29837);
topo_sort_helper_STAR_.call(null,dep_29838,(depth + (1)),state);

var G__29839 = seq__29827_29834;
var G__29840 = chunk__29828_29835;
var G__29841 = count__29829_29836;
var G__29842 = (i__29830_29837 + (1));
seq__29827_29834 = G__29839;
chunk__29828_29835 = G__29840;
count__29829_29836 = G__29841;
i__29830_29837 = G__29842;
continue;
} else {
var temp__4657__auto___29843 = cljs.core.seq.call(null,seq__29827_29834);
if(temp__4657__auto___29843){
var seq__29827_29844__$1 = temp__4657__auto___29843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29827_29844__$1)){
var c__19229__auto___29845 = cljs.core.chunk_first.call(null,seq__29827_29844__$1);
var G__29846 = cljs.core.chunk_rest.call(null,seq__29827_29844__$1);
var G__29847 = c__19229__auto___29845;
var G__29848 = cljs.core.count.call(null,c__19229__auto___29845);
var G__29849 = (0);
seq__29827_29834 = G__29846;
chunk__29828_29835 = G__29847;
count__29829_29836 = G__29848;
i__29830_29837 = G__29849;
continue;
} else {
var dep_29850 = cljs.core.first.call(null,seq__29827_29844__$1);
topo_sort_helper_STAR_.call(null,dep_29850,(depth + (1)),state);

var G__29851 = cljs.core.next.call(null,seq__29827_29844__$1);
var G__29852 = null;
var G__29853 = (0);
var G__29854 = (0);
seq__29827_29834 = G__29851;
chunk__29828_29835 = G__29852;
count__29829_29836 = G__29853;
i__29830_29837 = G__29854;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29831){
var vec__29833 = p__29831;
var x = cljs.core.nth.call(null,vec__29833,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29833,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29833,x,xs,get_deps__$1){
return (function (p1__29789_SHARP_){
return clojure.set.difference.call(null,p1__29789_SHARP_,x);
});})(vec__29833,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29867 = cljs.core.seq.call(null,provides);
var chunk__29868 = null;
var count__29869 = (0);
var i__29870 = (0);
while(true){
if((i__29870 < count__29869)){
var prov = cljs.core._nth.call(null,chunk__29868,i__29870);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29871_29879 = cljs.core.seq.call(null,requires);
var chunk__29872_29880 = null;
var count__29873_29881 = (0);
var i__29874_29882 = (0);
while(true){
if((i__29874_29882 < count__29873_29881)){
var req_29883 = cljs.core._nth.call(null,chunk__29872_29880,i__29874_29882);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29883,prov);

var G__29884 = seq__29871_29879;
var G__29885 = chunk__29872_29880;
var G__29886 = count__29873_29881;
var G__29887 = (i__29874_29882 + (1));
seq__29871_29879 = G__29884;
chunk__29872_29880 = G__29885;
count__29873_29881 = G__29886;
i__29874_29882 = G__29887;
continue;
} else {
var temp__4657__auto___29888 = cljs.core.seq.call(null,seq__29871_29879);
if(temp__4657__auto___29888){
var seq__29871_29889__$1 = temp__4657__auto___29888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29871_29889__$1)){
var c__19229__auto___29890 = cljs.core.chunk_first.call(null,seq__29871_29889__$1);
var G__29891 = cljs.core.chunk_rest.call(null,seq__29871_29889__$1);
var G__29892 = c__19229__auto___29890;
var G__29893 = cljs.core.count.call(null,c__19229__auto___29890);
var G__29894 = (0);
seq__29871_29879 = G__29891;
chunk__29872_29880 = G__29892;
count__29873_29881 = G__29893;
i__29874_29882 = G__29894;
continue;
} else {
var req_29895 = cljs.core.first.call(null,seq__29871_29889__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29895,prov);

var G__29896 = cljs.core.next.call(null,seq__29871_29889__$1);
var G__29897 = null;
var G__29898 = (0);
var G__29899 = (0);
seq__29871_29879 = G__29896;
chunk__29872_29880 = G__29897;
count__29873_29881 = G__29898;
i__29874_29882 = G__29899;
continue;
}
} else {
}
}
break;
}

var G__29900 = seq__29867;
var G__29901 = chunk__29868;
var G__29902 = count__29869;
var G__29903 = (i__29870 + (1));
seq__29867 = G__29900;
chunk__29868 = G__29901;
count__29869 = G__29902;
i__29870 = G__29903;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29867);
if(temp__4657__auto__){
var seq__29867__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29867__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__29867__$1);
var G__29904 = cljs.core.chunk_rest.call(null,seq__29867__$1);
var G__29905 = c__19229__auto__;
var G__29906 = cljs.core.count.call(null,c__19229__auto__);
var G__29907 = (0);
seq__29867 = G__29904;
chunk__29868 = G__29905;
count__29869 = G__29906;
i__29870 = G__29907;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29867__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29875_29908 = cljs.core.seq.call(null,requires);
var chunk__29876_29909 = null;
var count__29877_29910 = (0);
var i__29878_29911 = (0);
while(true){
if((i__29878_29911 < count__29877_29910)){
var req_29912 = cljs.core._nth.call(null,chunk__29876_29909,i__29878_29911);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29912,prov);

var G__29913 = seq__29875_29908;
var G__29914 = chunk__29876_29909;
var G__29915 = count__29877_29910;
var G__29916 = (i__29878_29911 + (1));
seq__29875_29908 = G__29913;
chunk__29876_29909 = G__29914;
count__29877_29910 = G__29915;
i__29878_29911 = G__29916;
continue;
} else {
var temp__4657__auto___29917__$1 = cljs.core.seq.call(null,seq__29875_29908);
if(temp__4657__auto___29917__$1){
var seq__29875_29918__$1 = temp__4657__auto___29917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29875_29918__$1)){
var c__19229__auto___29919 = cljs.core.chunk_first.call(null,seq__29875_29918__$1);
var G__29920 = cljs.core.chunk_rest.call(null,seq__29875_29918__$1);
var G__29921 = c__19229__auto___29919;
var G__29922 = cljs.core.count.call(null,c__19229__auto___29919);
var G__29923 = (0);
seq__29875_29908 = G__29920;
chunk__29876_29909 = G__29921;
count__29877_29910 = G__29922;
i__29878_29911 = G__29923;
continue;
} else {
var req_29924 = cljs.core.first.call(null,seq__29875_29918__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29924,prov);

var G__29925 = cljs.core.next.call(null,seq__29875_29918__$1);
var G__29926 = null;
var G__29927 = (0);
var G__29928 = (0);
seq__29875_29908 = G__29925;
chunk__29876_29909 = G__29926;
count__29877_29910 = G__29927;
i__29878_29911 = G__29928;
continue;
}
} else {
}
}
break;
}

var G__29929 = cljs.core.next.call(null,seq__29867__$1);
var G__29930 = null;
var G__29931 = (0);
var G__29932 = (0);
seq__29867 = G__29929;
chunk__29868 = G__29930;
count__29869 = G__29931;
i__29870 = G__29932;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29937_29941 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29938_29942 = null;
var count__29939_29943 = (0);
var i__29940_29944 = (0);
while(true){
if((i__29940_29944 < count__29939_29943)){
var ns_29945 = cljs.core._nth.call(null,chunk__29938_29942,i__29940_29944);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29945);

var G__29946 = seq__29937_29941;
var G__29947 = chunk__29938_29942;
var G__29948 = count__29939_29943;
var G__29949 = (i__29940_29944 + (1));
seq__29937_29941 = G__29946;
chunk__29938_29942 = G__29947;
count__29939_29943 = G__29948;
i__29940_29944 = G__29949;
continue;
} else {
var temp__4657__auto___29950 = cljs.core.seq.call(null,seq__29937_29941);
if(temp__4657__auto___29950){
var seq__29937_29951__$1 = temp__4657__auto___29950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29937_29951__$1)){
var c__19229__auto___29952 = cljs.core.chunk_first.call(null,seq__29937_29951__$1);
var G__29953 = cljs.core.chunk_rest.call(null,seq__29937_29951__$1);
var G__29954 = c__19229__auto___29952;
var G__29955 = cljs.core.count.call(null,c__19229__auto___29952);
var G__29956 = (0);
seq__29937_29941 = G__29953;
chunk__29938_29942 = G__29954;
count__29939_29943 = G__29955;
i__29940_29944 = G__29956;
continue;
} else {
var ns_29957 = cljs.core.first.call(null,seq__29937_29951__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29957);

var G__29958 = cljs.core.next.call(null,seq__29937_29951__$1);
var G__29959 = null;
var G__29960 = (0);
var G__29961 = (0);
seq__29937_29941 = G__29958;
chunk__29938_29942 = G__29959;
count__29939_29943 = G__29960;
i__29940_29944 = G__29961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18418__auto__ = goog.require__;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29962__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29963__i = 0, G__29963__a = new Array(arguments.length -  0);
while (G__29963__i < G__29963__a.length) {G__29963__a[G__29963__i] = arguments[G__29963__i + 0]; ++G__29963__i;}
  args = new cljs.core.IndexedSeq(G__29963__a,0);
} 
return G__29962__delegate.call(this,args);};
G__29962.cljs$lang$maxFixedArity = 0;
G__29962.cljs$lang$applyTo = (function (arglist__29964){
var args = cljs.core.seq(arglist__29964);
return G__29962__delegate(args);
});
G__29962.cljs$core$IFn$_invoke$arity$variadic = G__29962__delegate;
return G__29962;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29966 = cljs.core._EQ_;
var expr__29967 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29966.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29967))){
var path_parts = ((function (pred__29966,expr__29967){
return (function (p1__29965_SHARP_){
return clojure.string.split.call(null,p1__29965_SHARP_,/[\/\\]/);
});})(pred__29966,expr__29967))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29966,expr__29967){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29969){if((e29969 instanceof Error)){
var e = e29969;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29969;

}
}})());
});
;})(path_parts,sep,root,pred__29966,expr__29967))
} else {
if(cljs.core.truth_(pred__29966.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29967))){
return ((function (pred__29966,expr__29967){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29966,expr__29967){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29966,expr__29967))
);

return deferred.addErrback(((function (deferred,pred__29966,expr__29967){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29966,expr__29967))
);
});
;})(pred__29966,expr__29967))
} else {
return ((function (pred__29966,expr__29967){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29966,expr__29967))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29970,callback){
var map__29973 = p__29970;
var map__29973__$1 = ((((!((map__29973 == null)))?((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var file_msg = map__29973__$1;
var request_url = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29973,map__29973__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29973,map__29973__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_29997){
var state_val_29998 = (state_29997[(1)]);
if((state_val_29998 === (7))){
var inst_29993 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
var statearr_29999_30019 = state_29997__$1;
(statearr_29999_30019[(2)] = inst_29993);

(statearr_29999_30019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (1))){
var state_29997__$1 = state_29997;
var statearr_30000_30020 = state_29997__$1;
(statearr_30000_30020[(2)] = null);

(statearr_30000_30020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (4))){
var inst_29977 = (state_29997[(7)]);
var inst_29977__$1 = (state_29997[(2)]);
var state_29997__$1 = (function (){var statearr_30001 = state_29997;
(statearr_30001[(7)] = inst_29977__$1);

return statearr_30001;
})();
if(cljs.core.truth_(inst_29977__$1)){
var statearr_30002_30021 = state_29997__$1;
(statearr_30002_30021[(1)] = (5));

} else {
var statearr_30003_30022 = state_29997__$1;
(statearr_30003_30022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (6))){
var state_29997__$1 = state_29997;
var statearr_30004_30023 = state_29997__$1;
(statearr_30004_30023[(2)] = null);

(statearr_30004_30023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (3))){
var inst_29995 = (state_29997[(2)]);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29997__$1,inst_29995);
} else {
if((state_val_29998 === (2))){
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29997__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29998 === (11))){
var inst_29989 = (state_29997[(2)]);
var state_29997__$1 = (function (){var statearr_30005 = state_29997;
(statearr_30005[(8)] = inst_29989);

return statearr_30005;
})();
var statearr_30006_30024 = state_29997__$1;
(statearr_30006_30024[(2)] = null);

(statearr_30006_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (9))){
var inst_29981 = (state_29997[(9)]);
var inst_29983 = (state_29997[(10)]);
var inst_29985 = inst_29983.call(null,inst_29981);
var state_29997__$1 = state_29997;
var statearr_30007_30025 = state_29997__$1;
(statearr_30007_30025[(2)] = inst_29985);

(statearr_30007_30025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (5))){
var inst_29977 = (state_29997[(7)]);
var inst_29979 = figwheel.client.file_reloading.blocking_load.call(null,inst_29977);
var state_29997__$1 = state_29997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29997__$1,(8),inst_29979);
} else {
if((state_val_29998 === (10))){
var inst_29981 = (state_29997[(9)]);
var inst_29987 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29981);
var state_29997__$1 = state_29997;
var statearr_30008_30026 = state_29997__$1;
(statearr_30008_30026[(2)] = inst_29987);

(statearr_30008_30026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29998 === (8))){
var inst_29977 = (state_29997[(7)]);
var inst_29983 = (state_29997[(10)]);
var inst_29981 = (state_29997[(2)]);
var inst_29982 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29983__$1 = cljs.core.get.call(null,inst_29982,inst_29977);
var state_29997__$1 = (function (){var statearr_30009 = state_29997;
(statearr_30009[(9)] = inst_29981);

(statearr_30009[(10)] = inst_29983__$1);

return statearr_30009;
})();
if(cljs.core.truth_(inst_29983__$1)){
var statearr_30010_30027 = state_29997__$1;
(statearr_30010_30027[(1)] = (9));

} else {
var statearr_30011_30028 = state_29997__$1;
(statearr_30011_30028[(1)] = (10));

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
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26824__auto__ = null;
var figwheel$client$file_reloading$state_machine__26824__auto____0 = (function (){
var statearr_30015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30015[(0)] = figwheel$client$file_reloading$state_machine__26824__auto__);

(statearr_30015[(1)] = (1));

return statearr_30015;
});
var figwheel$client$file_reloading$state_machine__26824__auto____1 = (function (state_29997){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_29997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e30016){if((e30016 instanceof Object)){
var ex__26827__auto__ = e30016;
var statearr_30017_30029 = state_29997;
(statearr_30017_30029[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30030 = state_29997;
state_29997 = G__30030;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26824__auto__ = function(state_29997){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26824__auto____1.call(this,state_29997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26824__auto____0;
figwheel$client$file_reloading$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26824__auto____1;
return figwheel$client$file_reloading$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_30018 = f__26936__auto__.call(null);
(statearr_30018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_30018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30031,callback){
var map__30034 = p__30031;
var map__30034__$1 = ((((!((map__30034 == null)))?((((map__30034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var file_msg = map__30034__$1;
var namespace = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30034,map__30034__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30034,map__30034__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30036){
var map__30039 = p__30036;
var map__30039__$1 = ((((!((map__30039 == null)))?((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var file_msg = map__30039__$1;
var namespace = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18406__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18406__auto__){
var or__18418__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
var or__18418__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18418__auto____$1)){
return or__18418__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18406__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30041,callback){
var map__30044 = p__30041;
var map__30044__$1 = ((((!((map__30044 == null)))?((((map__30044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);
var file_msg = map__30044__$1;
var request_url = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26935__auto___30132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___30132,out){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___30132,out){
return (function (state_30114){
var state_val_30115 = (state_30114[(1)]);
if((state_val_30115 === (1))){
var inst_30092 = cljs.core.nth.call(null,files,(0),null);
var inst_30093 = cljs.core.nthnext.call(null,files,(1));
var inst_30094 = files;
var state_30114__$1 = (function (){var statearr_30116 = state_30114;
(statearr_30116[(7)] = inst_30093);

(statearr_30116[(8)] = inst_30092);

(statearr_30116[(9)] = inst_30094);

return statearr_30116;
})();
var statearr_30117_30133 = state_30114__$1;
(statearr_30117_30133[(2)] = null);

(statearr_30117_30133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (2))){
var inst_30097 = (state_30114[(10)]);
var inst_30094 = (state_30114[(9)]);
var inst_30097__$1 = cljs.core.nth.call(null,inst_30094,(0),null);
var inst_30098 = cljs.core.nthnext.call(null,inst_30094,(1));
var inst_30099 = (inst_30097__$1 == null);
var inst_30100 = cljs.core.not.call(null,inst_30099);
var state_30114__$1 = (function (){var statearr_30118 = state_30114;
(statearr_30118[(10)] = inst_30097__$1);

(statearr_30118[(11)] = inst_30098);

return statearr_30118;
})();
if(inst_30100){
var statearr_30119_30134 = state_30114__$1;
(statearr_30119_30134[(1)] = (4));

} else {
var statearr_30120_30135 = state_30114__$1;
(statearr_30120_30135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (3))){
var inst_30112 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30114__$1,inst_30112);
} else {
if((state_val_30115 === (4))){
var inst_30097 = (state_30114[(10)]);
var inst_30102 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30097);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30114__$1,(7),inst_30102);
} else {
if((state_val_30115 === (5))){
var inst_30108 = cljs.core.async.close_BANG_.call(null,out);
var state_30114__$1 = state_30114;
var statearr_30121_30136 = state_30114__$1;
(statearr_30121_30136[(2)] = inst_30108);

(statearr_30121_30136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (6))){
var inst_30110 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30122_30137 = state_30114__$1;
(statearr_30122_30137[(2)] = inst_30110);

(statearr_30122_30137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (7))){
var inst_30098 = (state_30114[(11)]);
var inst_30104 = (state_30114[(2)]);
var inst_30105 = cljs.core.async.put_BANG_.call(null,out,inst_30104);
var inst_30094 = inst_30098;
var state_30114__$1 = (function (){var statearr_30123 = state_30114;
(statearr_30123[(12)] = inst_30105);

(statearr_30123[(9)] = inst_30094);

return statearr_30123;
})();
var statearr_30124_30138 = state_30114__$1;
(statearr_30124_30138[(2)] = null);

(statearr_30124_30138[(1)] = (2));


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
});})(c__26935__auto___30132,out))
;
return ((function (switch__26823__auto__,c__26935__auto___30132,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____1 = (function (state_30114){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_30114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__26827__auto__ = e30129;
var statearr_30130_30139 = state_30114;
(statearr_30130_30139[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30140 = state_30114;
state_30114 = G__30140;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___30132,out))
})();
var state__26937__auto__ = (function (){var statearr_30131 = f__26936__auto__.call(null);
(statearr_30131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___30132);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___30132,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30141,opts){
var map__30145 = p__30141;
var map__30145__$1 = ((((!((map__30145 == null)))?((((map__30145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30145):map__30145);
var eval_body__$1 = cljs.core.get.call(null,map__30145__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18406__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18406__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18406__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30147){var e = e30147;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30148_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30153){
var vec__30154 = p__30153;
var k = cljs.core.nth.call(null,vec__30154,(0),null);
var v = cljs.core.nth.call(null,vec__30154,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30155){
var vec__30156 = p__30155;
var k = cljs.core.nth.call(null,vec__30156,(0),null);
var v = cljs.core.nth.call(null,vec__30156,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30160,p__30161){
var map__30408 = p__30160;
var map__30408__$1 = ((((!((map__30408 == null)))?((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);
var opts = map__30408__$1;
var before_jsload = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30409 = p__30161;
var map__30409__$1 = ((((!((map__30409 == null)))?((((map__30409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409):map__30409);
var msg = map__30409__$1;
var files = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30562){
var state_val_30563 = (state_30562[(1)]);
if((state_val_30563 === (7))){
var inst_30423 = (state_30562[(7)]);
var inst_30426 = (state_30562[(8)]);
var inst_30424 = (state_30562[(9)]);
var inst_30425 = (state_30562[(10)]);
var inst_30431 = cljs.core._nth.call(null,inst_30424,inst_30426);
var inst_30432 = figwheel.client.file_reloading.eval_body.call(null,inst_30431,opts);
var inst_30433 = (inst_30426 + (1));
var tmp30564 = inst_30423;
var tmp30565 = inst_30424;
var tmp30566 = inst_30425;
var inst_30423__$1 = tmp30564;
var inst_30424__$1 = tmp30565;
var inst_30425__$1 = tmp30566;
var inst_30426__$1 = inst_30433;
var state_30562__$1 = (function (){var statearr_30567 = state_30562;
(statearr_30567[(7)] = inst_30423__$1);

(statearr_30567[(8)] = inst_30426__$1);

(statearr_30567[(9)] = inst_30424__$1);

(statearr_30567[(11)] = inst_30432);

(statearr_30567[(10)] = inst_30425__$1);

return statearr_30567;
})();
var statearr_30568_30654 = state_30562__$1;
(statearr_30568_30654[(2)] = null);

(statearr_30568_30654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (20))){
var inst_30466 = (state_30562[(12)]);
var inst_30474 = figwheel.client.file_reloading.sort_files.call(null,inst_30466);
var state_30562__$1 = state_30562;
var statearr_30569_30655 = state_30562__$1;
(statearr_30569_30655[(2)] = inst_30474);

(statearr_30569_30655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (27))){
var state_30562__$1 = state_30562;
var statearr_30570_30656 = state_30562__$1;
(statearr_30570_30656[(2)] = null);

(statearr_30570_30656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (1))){
var inst_30415 = (state_30562[(13)]);
var inst_30412 = before_jsload.call(null,files);
var inst_30413 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30414 = (function (){return ((function (inst_30415,inst_30412,inst_30413,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30157_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30157_SHARP_);
});
;})(inst_30415,inst_30412,inst_30413,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30415__$1 = cljs.core.filter.call(null,inst_30414,files);
var inst_30416 = cljs.core.not_empty.call(null,inst_30415__$1);
var state_30562__$1 = (function (){var statearr_30571 = state_30562;
(statearr_30571[(14)] = inst_30413);

(statearr_30571[(13)] = inst_30415__$1);

(statearr_30571[(15)] = inst_30412);

return statearr_30571;
})();
if(cljs.core.truth_(inst_30416)){
var statearr_30572_30657 = state_30562__$1;
(statearr_30572_30657[(1)] = (2));

} else {
var statearr_30573_30658 = state_30562__$1;
(statearr_30573_30658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (24))){
var state_30562__$1 = state_30562;
var statearr_30574_30659 = state_30562__$1;
(statearr_30574_30659[(2)] = null);

(statearr_30574_30659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (39))){
var inst_30516 = (state_30562[(16)]);
var state_30562__$1 = state_30562;
var statearr_30575_30660 = state_30562__$1;
(statearr_30575_30660[(2)] = inst_30516);

(statearr_30575_30660[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (46))){
var inst_30557 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30576_30661 = state_30562__$1;
(statearr_30576_30661[(2)] = inst_30557);

(statearr_30576_30661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (4))){
var inst_30460 = (state_30562[(2)]);
var inst_30461 = cljs.core.List.EMPTY;
var inst_30462 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30461);
var inst_30463 = (function (){return ((function (inst_30460,inst_30461,inst_30462,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30158_SHARP_){
var and__18406__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30158_SHARP_);
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30158_SHARP_));
} else {
return and__18406__auto__;
}
});
;})(inst_30460,inst_30461,inst_30462,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30464 = cljs.core.filter.call(null,inst_30463,files);
var inst_30465 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30466 = cljs.core.concat.call(null,inst_30464,inst_30465);
var state_30562__$1 = (function (){var statearr_30577 = state_30562;
(statearr_30577[(17)] = inst_30460);

(statearr_30577[(18)] = inst_30462);

(statearr_30577[(12)] = inst_30466);

return statearr_30577;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30578_30662 = state_30562__$1;
(statearr_30578_30662[(1)] = (16));

} else {
var statearr_30579_30663 = state_30562__$1;
(statearr_30579_30663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (15))){
var inst_30450 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30580_30664 = state_30562__$1;
(statearr_30580_30664[(2)] = inst_30450);

(statearr_30580_30664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (21))){
var inst_30476 = (state_30562[(19)]);
var inst_30476__$1 = (state_30562[(2)]);
var inst_30477 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30476__$1);
var state_30562__$1 = (function (){var statearr_30581 = state_30562;
(statearr_30581[(19)] = inst_30476__$1);

return statearr_30581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(22),inst_30477);
} else {
if((state_val_30563 === (31))){
var inst_30560 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else {
if((state_val_30563 === (32))){
var inst_30516 = (state_30562[(16)]);
var inst_30521 = inst_30516.cljs$lang$protocol_mask$partition0$;
var inst_30522 = (inst_30521 & (64));
var inst_30523 = inst_30516.cljs$core$ISeq$;
var inst_30524 = (inst_30522) || (inst_30523);
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30524)){
var statearr_30582_30665 = state_30562__$1;
(statearr_30582_30665[(1)] = (35));

} else {
var statearr_30583_30666 = state_30562__$1;
(statearr_30583_30666[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (40))){
var inst_30537 = (state_30562[(20)]);
var inst_30536 = (state_30562[(2)]);
var inst_30537__$1 = cljs.core.get.call(null,inst_30536,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30538 = cljs.core.get.call(null,inst_30536,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30539 = cljs.core.not_empty.call(null,inst_30537__$1);
var state_30562__$1 = (function (){var statearr_30584 = state_30562;
(statearr_30584[(20)] = inst_30537__$1);

(statearr_30584[(21)] = inst_30538);

return statearr_30584;
})();
if(cljs.core.truth_(inst_30539)){
var statearr_30585_30667 = state_30562__$1;
(statearr_30585_30667[(1)] = (41));

} else {
var statearr_30586_30668 = state_30562__$1;
(statearr_30586_30668[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (33))){
var state_30562__$1 = state_30562;
var statearr_30587_30669 = state_30562__$1;
(statearr_30587_30669[(2)] = false);

(statearr_30587_30669[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (13))){
var inst_30436 = (state_30562[(22)]);
var inst_30440 = cljs.core.chunk_first.call(null,inst_30436);
var inst_30441 = cljs.core.chunk_rest.call(null,inst_30436);
var inst_30442 = cljs.core.count.call(null,inst_30440);
var inst_30423 = inst_30441;
var inst_30424 = inst_30440;
var inst_30425 = inst_30442;
var inst_30426 = (0);
var state_30562__$1 = (function (){var statearr_30588 = state_30562;
(statearr_30588[(7)] = inst_30423);

(statearr_30588[(8)] = inst_30426);

(statearr_30588[(9)] = inst_30424);

(statearr_30588[(10)] = inst_30425);

return statearr_30588;
})();
var statearr_30589_30670 = state_30562__$1;
(statearr_30589_30670[(2)] = null);

(statearr_30589_30670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (22))){
var inst_30479 = (state_30562[(23)]);
var inst_30480 = (state_30562[(24)]);
var inst_30476 = (state_30562[(19)]);
var inst_30484 = (state_30562[(25)]);
var inst_30479__$1 = (state_30562[(2)]);
var inst_30480__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30479__$1);
var inst_30481 = (function (){var all_files = inst_30476;
var res_SINGLEQUOTE_ = inst_30479__$1;
var res = inst_30480__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30479,inst_30480,inst_30476,inst_30484,inst_30479__$1,inst_30480__$1,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30159_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30159_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30479,inst_30480,inst_30476,inst_30484,inst_30479__$1,inst_30480__$1,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30482 = cljs.core.filter.call(null,inst_30481,inst_30479__$1);
var inst_30483 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30484__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30483);
var inst_30485 = cljs.core.not_empty.call(null,inst_30484__$1);
var state_30562__$1 = (function (){var statearr_30590 = state_30562;
(statearr_30590[(23)] = inst_30479__$1);

(statearr_30590[(24)] = inst_30480__$1);

(statearr_30590[(25)] = inst_30484__$1);

(statearr_30590[(26)] = inst_30482);

return statearr_30590;
})();
if(cljs.core.truth_(inst_30485)){
var statearr_30591_30671 = state_30562__$1;
(statearr_30591_30671[(1)] = (23));

} else {
var statearr_30592_30672 = state_30562__$1;
(statearr_30592_30672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (36))){
var state_30562__$1 = state_30562;
var statearr_30593_30673 = state_30562__$1;
(statearr_30593_30673[(2)] = false);

(statearr_30593_30673[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (41))){
var inst_30537 = (state_30562[(20)]);
var inst_30541 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30542 = cljs.core.map.call(null,inst_30541,inst_30537);
var inst_30543 = cljs.core.pr_str.call(null,inst_30542);
var inst_30544 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30543)].join('');
var inst_30545 = figwheel.client.utils.log.call(null,inst_30544);
var state_30562__$1 = state_30562;
var statearr_30594_30674 = state_30562__$1;
(statearr_30594_30674[(2)] = inst_30545);

(statearr_30594_30674[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (43))){
var inst_30538 = (state_30562[(21)]);
var inst_30548 = (state_30562[(2)]);
var inst_30549 = cljs.core.not_empty.call(null,inst_30538);
var state_30562__$1 = (function (){var statearr_30595 = state_30562;
(statearr_30595[(27)] = inst_30548);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30549)){
var statearr_30596_30675 = state_30562__$1;
(statearr_30596_30675[(1)] = (44));

} else {
var statearr_30597_30676 = state_30562__$1;
(statearr_30597_30676[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (29))){
var inst_30479 = (state_30562[(23)]);
var inst_30480 = (state_30562[(24)]);
var inst_30476 = (state_30562[(19)]);
var inst_30516 = (state_30562[(16)]);
var inst_30484 = (state_30562[(25)]);
var inst_30482 = (state_30562[(26)]);
var inst_30512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30515 = (function (){var all_files = inst_30476;
var res_SINGLEQUOTE_ = inst_30479;
var res = inst_30480;
var files_not_loaded = inst_30482;
var dependencies_that_loaded = inst_30484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30516,inst_30484,inst_30482,inst_30512,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30514){
var map__30598 = p__30514;
var map__30598__$1 = ((((!((map__30598 == null)))?((((map__30598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30598):map__30598);
var namespace = cljs.core.get.call(null,map__30598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30516,inst_30484,inst_30482,inst_30512,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30516__$1 = cljs.core.group_by.call(null,inst_30515,inst_30482);
var inst_30518 = (inst_30516__$1 == null);
var inst_30519 = cljs.core.not.call(null,inst_30518);
var state_30562__$1 = (function (){var statearr_30600 = state_30562;
(statearr_30600[(28)] = inst_30512);

(statearr_30600[(16)] = inst_30516__$1);

return statearr_30600;
})();
if(inst_30519){
var statearr_30601_30677 = state_30562__$1;
(statearr_30601_30677[(1)] = (32));

} else {
var statearr_30602_30678 = state_30562__$1;
(statearr_30602_30678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (44))){
var inst_30538 = (state_30562[(21)]);
var inst_30551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30538);
var inst_30552 = cljs.core.pr_str.call(null,inst_30551);
var inst_30553 = [cljs.core.str("not required: "),cljs.core.str(inst_30552)].join('');
var inst_30554 = figwheel.client.utils.log.call(null,inst_30553);
var state_30562__$1 = state_30562;
var statearr_30603_30679 = state_30562__$1;
(statearr_30603_30679[(2)] = inst_30554);

(statearr_30603_30679[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (6))){
var inst_30457 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30604_30680 = state_30562__$1;
(statearr_30604_30680[(2)] = inst_30457);

(statearr_30604_30680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (28))){
var inst_30482 = (state_30562[(26)]);
var inst_30509 = (state_30562[(2)]);
var inst_30510 = cljs.core.not_empty.call(null,inst_30482);
var state_30562__$1 = (function (){var statearr_30605 = state_30562;
(statearr_30605[(29)] = inst_30509);

return statearr_30605;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30606_30681 = state_30562__$1;
(statearr_30606_30681[(1)] = (29));

} else {
var statearr_30607_30682 = state_30562__$1;
(statearr_30607_30682[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (25))){
var inst_30480 = (state_30562[(24)]);
var inst_30496 = (state_30562[(2)]);
var inst_30497 = cljs.core.not_empty.call(null,inst_30480);
var state_30562__$1 = (function (){var statearr_30608 = state_30562;
(statearr_30608[(30)] = inst_30496);

return statearr_30608;
})();
if(cljs.core.truth_(inst_30497)){
var statearr_30609_30683 = state_30562__$1;
(statearr_30609_30683[(1)] = (26));

} else {
var statearr_30610_30684 = state_30562__$1;
(statearr_30610_30684[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (34))){
var inst_30531 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30531)){
var statearr_30611_30685 = state_30562__$1;
(statearr_30611_30685[(1)] = (38));

} else {
var statearr_30612_30686 = state_30562__$1;
(statearr_30612_30686[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (17))){
var state_30562__$1 = state_30562;
var statearr_30613_30687 = state_30562__$1;
(statearr_30613_30687[(2)] = recompile_dependents);

(statearr_30613_30687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (3))){
var state_30562__$1 = state_30562;
var statearr_30614_30688 = state_30562__$1;
(statearr_30614_30688[(2)] = null);

(statearr_30614_30688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (12))){
var inst_30453 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30615_30689 = state_30562__$1;
(statearr_30615_30689[(2)] = inst_30453);

(statearr_30615_30689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (2))){
var inst_30415 = (state_30562[(13)]);
var inst_30422 = cljs.core.seq.call(null,inst_30415);
var inst_30423 = inst_30422;
var inst_30424 = null;
var inst_30425 = (0);
var inst_30426 = (0);
var state_30562__$1 = (function (){var statearr_30616 = state_30562;
(statearr_30616[(7)] = inst_30423);

(statearr_30616[(8)] = inst_30426);

(statearr_30616[(9)] = inst_30424);

(statearr_30616[(10)] = inst_30425);

return statearr_30616;
})();
var statearr_30617_30690 = state_30562__$1;
(statearr_30617_30690[(2)] = null);

(statearr_30617_30690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (23))){
var inst_30479 = (state_30562[(23)]);
var inst_30480 = (state_30562[(24)]);
var inst_30476 = (state_30562[(19)]);
var inst_30484 = (state_30562[(25)]);
var inst_30482 = (state_30562[(26)]);
var inst_30487 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30489 = (function (){var all_files = inst_30476;
var res_SINGLEQUOTE_ = inst_30479;
var res = inst_30480;
var files_not_loaded = inst_30482;
var dependencies_that_loaded = inst_30484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30487,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30488){
var map__30618 = p__30488;
var map__30618__$1 = ((((!((map__30618 == null)))?((((map__30618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30618):map__30618);
var request_url = cljs.core.get.call(null,map__30618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30487,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30490 = cljs.core.reverse.call(null,inst_30484);
var inst_30491 = cljs.core.map.call(null,inst_30489,inst_30490);
var inst_30492 = cljs.core.pr_str.call(null,inst_30491);
var inst_30493 = figwheel.client.utils.log.call(null,inst_30492);
var state_30562__$1 = (function (){var statearr_30620 = state_30562;
(statearr_30620[(31)] = inst_30487);

return statearr_30620;
})();
var statearr_30621_30691 = state_30562__$1;
(statearr_30621_30691[(2)] = inst_30493);

(statearr_30621_30691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (35))){
var state_30562__$1 = state_30562;
var statearr_30622_30692 = state_30562__$1;
(statearr_30622_30692[(2)] = true);

(statearr_30622_30692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (19))){
var inst_30466 = (state_30562[(12)]);
var inst_30472 = figwheel.client.file_reloading.expand_files.call(null,inst_30466);
var state_30562__$1 = state_30562;
var statearr_30623_30693 = state_30562__$1;
(statearr_30623_30693[(2)] = inst_30472);

(statearr_30623_30693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (11))){
var state_30562__$1 = state_30562;
var statearr_30624_30694 = state_30562__$1;
(statearr_30624_30694[(2)] = null);

(statearr_30624_30694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (9))){
var inst_30455 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30625_30695 = state_30562__$1;
(statearr_30625_30695[(2)] = inst_30455);

(statearr_30625_30695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (5))){
var inst_30426 = (state_30562[(8)]);
var inst_30425 = (state_30562[(10)]);
var inst_30428 = (inst_30426 < inst_30425);
var inst_30429 = inst_30428;
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30429)){
var statearr_30626_30696 = state_30562__$1;
(statearr_30626_30696[(1)] = (7));

} else {
var statearr_30627_30697 = state_30562__$1;
(statearr_30627_30697[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (14))){
var inst_30436 = (state_30562[(22)]);
var inst_30445 = cljs.core.first.call(null,inst_30436);
var inst_30446 = figwheel.client.file_reloading.eval_body.call(null,inst_30445,opts);
var inst_30447 = cljs.core.next.call(null,inst_30436);
var inst_30423 = inst_30447;
var inst_30424 = null;
var inst_30425 = (0);
var inst_30426 = (0);
var state_30562__$1 = (function (){var statearr_30628 = state_30562;
(statearr_30628[(7)] = inst_30423);

(statearr_30628[(8)] = inst_30426);

(statearr_30628[(9)] = inst_30424);

(statearr_30628[(32)] = inst_30446);

(statearr_30628[(10)] = inst_30425);

return statearr_30628;
})();
var statearr_30629_30698 = state_30562__$1;
(statearr_30629_30698[(2)] = null);

(statearr_30629_30698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (45))){
var state_30562__$1 = state_30562;
var statearr_30630_30699 = state_30562__$1;
(statearr_30630_30699[(2)] = null);

(statearr_30630_30699[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (26))){
var inst_30479 = (state_30562[(23)]);
var inst_30480 = (state_30562[(24)]);
var inst_30476 = (state_30562[(19)]);
var inst_30484 = (state_30562[(25)]);
var inst_30482 = (state_30562[(26)]);
var inst_30499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30501 = (function (){var all_files = inst_30476;
var res_SINGLEQUOTE_ = inst_30479;
var res = inst_30480;
var files_not_loaded = inst_30482;
var dependencies_that_loaded = inst_30484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30499,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30500){
var map__30631 = p__30500;
var map__30631__$1 = ((((!((map__30631 == null)))?((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var namespace = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30499,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30502 = cljs.core.map.call(null,inst_30501,inst_30480);
var inst_30503 = cljs.core.pr_str.call(null,inst_30502);
var inst_30504 = figwheel.client.utils.log.call(null,inst_30503);
var inst_30505 = (function (){var all_files = inst_30476;
var res_SINGLEQUOTE_ = inst_30479;
var res = inst_30480;
var files_not_loaded = inst_30482;
var dependencies_that_loaded = inst_30484;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30499,inst_30501,inst_30502,inst_30503,inst_30504,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30479,inst_30480,inst_30476,inst_30484,inst_30482,inst_30499,inst_30501,inst_30502,inst_30503,inst_30504,state_val_30563,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30506 = setTimeout(inst_30505,(10));
var state_30562__$1 = (function (){var statearr_30633 = state_30562;
(statearr_30633[(33)] = inst_30499);

(statearr_30633[(34)] = inst_30504);

return statearr_30633;
})();
var statearr_30634_30700 = state_30562__$1;
(statearr_30634_30700[(2)] = inst_30506);

(statearr_30634_30700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (16))){
var state_30562__$1 = state_30562;
var statearr_30635_30701 = state_30562__$1;
(statearr_30635_30701[(2)] = reload_dependents);

(statearr_30635_30701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (38))){
var inst_30516 = (state_30562[(16)]);
var inst_30533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30516);
var state_30562__$1 = state_30562;
var statearr_30636_30702 = state_30562__$1;
(statearr_30636_30702[(2)] = inst_30533);

(statearr_30636_30702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (30))){
var state_30562__$1 = state_30562;
var statearr_30637_30703 = state_30562__$1;
(statearr_30637_30703[(2)] = null);

(statearr_30637_30703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (10))){
var inst_30436 = (state_30562[(22)]);
var inst_30438 = cljs.core.chunked_seq_QMARK_.call(null,inst_30436);
var state_30562__$1 = state_30562;
if(inst_30438){
var statearr_30638_30704 = state_30562__$1;
(statearr_30638_30704[(1)] = (13));

} else {
var statearr_30639_30705 = state_30562__$1;
(statearr_30639_30705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (18))){
var inst_30470 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30470)){
var statearr_30640_30706 = state_30562__$1;
(statearr_30640_30706[(1)] = (19));

} else {
var statearr_30641_30707 = state_30562__$1;
(statearr_30641_30707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (42))){
var state_30562__$1 = state_30562;
var statearr_30642_30708 = state_30562__$1;
(statearr_30642_30708[(2)] = null);

(statearr_30642_30708[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (37))){
var inst_30528 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30643_30709 = state_30562__$1;
(statearr_30643_30709[(2)] = inst_30528);

(statearr_30643_30709[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (8))){
var inst_30423 = (state_30562[(7)]);
var inst_30436 = (state_30562[(22)]);
var inst_30436__$1 = cljs.core.seq.call(null,inst_30423);
var state_30562__$1 = (function (){var statearr_30644 = state_30562;
(statearr_30644[(22)] = inst_30436__$1);

return statearr_30644;
})();
if(inst_30436__$1){
var statearr_30645_30710 = state_30562__$1;
(statearr_30645_30710[(1)] = (10));

} else {
var statearr_30646_30711 = state_30562__$1;
(statearr_30646_30711[(1)] = (11));

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
}
});})(c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26823__auto__,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____0 = (function (){
var statearr_30650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30650[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__);

(statearr_30650[(1)] = (1));

return statearr_30650;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____1 = (function (state_30562){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_30562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e30651){if((e30651 instanceof Object)){
var ex__26827__auto__ = e30651;
var statearr_30652_30712 = state_30562;
(statearr_30652_30712[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30713 = state_30562;
state_30562 = G__30713;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26937__auto__ = (function (){var statearr_30653 = f__26936__auto__.call(null);
(statearr_30653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_30653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__,map__30408,map__30408__$1,opts,before_jsload,on_jsload,reload_dependents,map__30409,map__30409__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26935__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30716,link){
var map__30719 = p__30716;
var map__30719__$1 = ((((!((map__30719 == null)))?((((map__30719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30719):map__30719);
var file = cljs.core.get.call(null,map__30719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30719,map__30719__$1,file){
return (function (p1__30714_SHARP_,p2__30715_SHARP_){
if(cljs.core._EQ_.call(null,p1__30714_SHARP_,p2__30715_SHARP_)){
return p1__30714_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30719,map__30719__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30725){
var map__30726 = p__30725;
var map__30726__$1 = ((((!((map__30726 == null)))?((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var match_length = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30721_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30721_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30728 = [];
var len__19487__auto___30731 = arguments.length;
var i__19488__auto___30732 = (0);
while(true){
if((i__19488__auto___30732 < len__19487__auto___30731)){
args30728.push((arguments[i__19488__auto___30732]));

var G__30733 = (i__19488__auto___30732 + (1));
i__19488__auto___30732 = G__30733;
continue;
} else {
}
break;
}

var G__30730 = args30728.length;
switch (G__30730) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30728.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30735_SHARP_,p2__30736_SHARP_){
return cljs.core.assoc.call(null,p1__30735_SHARP_,cljs.core.get.call(null,p2__30736_SHARP_,key),p2__30736_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30737){
var map__30740 = p__30737;
var map__30740__$1 = ((((!((map__30740 == null)))?((((map__30740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30740):map__30740);
var f_data = map__30740__$1;
var file = cljs.core.get.call(null,map__30740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30742,files_msg){
var map__30749 = p__30742;
var map__30749__$1 = ((((!((map__30749 == null)))?((((map__30749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30749):map__30749);
var opts = map__30749__$1;
var on_cssload = cljs.core.get.call(null,map__30749__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30751_30755 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30752_30756 = null;
var count__30753_30757 = (0);
var i__30754_30758 = (0);
while(true){
if((i__30754_30758 < count__30753_30757)){
var f_30759 = cljs.core._nth.call(null,chunk__30752_30756,i__30754_30758);
figwheel.client.file_reloading.reload_css_file.call(null,f_30759);

var G__30760 = seq__30751_30755;
var G__30761 = chunk__30752_30756;
var G__30762 = count__30753_30757;
var G__30763 = (i__30754_30758 + (1));
seq__30751_30755 = G__30760;
chunk__30752_30756 = G__30761;
count__30753_30757 = G__30762;
i__30754_30758 = G__30763;
continue;
} else {
var temp__4657__auto___30764 = cljs.core.seq.call(null,seq__30751_30755);
if(temp__4657__auto___30764){
var seq__30751_30765__$1 = temp__4657__auto___30764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30751_30765__$1)){
var c__19229__auto___30766 = cljs.core.chunk_first.call(null,seq__30751_30765__$1);
var G__30767 = cljs.core.chunk_rest.call(null,seq__30751_30765__$1);
var G__30768 = c__19229__auto___30766;
var G__30769 = cljs.core.count.call(null,c__19229__auto___30766);
var G__30770 = (0);
seq__30751_30755 = G__30767;
chunk__30752_30756 = G__30768;
count__30753_30757 = G__30769;
i__30754_30758 = G__30770;
continue;
} else {
var f_30771 = cljs.core.first.call(null,seq__30751_30765__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30771);

var G__30772 = cljs.core.next.call(null,seq__30751_30765__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__30751_30755 = G__30772;
chunk__30752_30756 = G__30773;
count__30753_30757 = G__30774;
i__30754_30758 = G__30775;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30749,map__30749__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30749,map__30749__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map