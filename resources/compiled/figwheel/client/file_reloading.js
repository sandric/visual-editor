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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29773_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29773_SHARP_));
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
var seq__29778 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29779 = null;
var count__29780 = (0);
var i__29781 = (0);
while(true){
if((i__29781 < count__29780)){
var n = cljs.core._nth.call(null,chunk__29779,i__29781);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29782 = seq__29778;
var G__29783 = chunk__29779;
var G__29784 = count__29780;
var G__29785 = (i__29781 + (1));
seq__29778 = G__29782;
chunk__29779 = G__29783;
count__29780 = G__29784;
i__29781 = G__29785;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29778);
if(temp__4657__auto__){
var seq__29778__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29778__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__29778__$1);
var G__29786 = cljs.core.chunk_rest.call(null,seq__29778__$1);
var G__29787 = c__19229__auto__;
var G__29788 = cljs.core.count.call(null,c__19229__auto__);
var G__29789 = (0);
seq__29778 = G__29786;
chunk__29779 = G__29787;
count__29780 = G__29788;
i__29781 = G__29789;
continue;
} else {
var n = cljs.core.first.call(null,seq__29778__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29790 = cljs.core.next.call(null,seq__29778__$1);
var G__29791 = null;
var G__29792 = (0);
var G__29793 = (0);
seq__29778 = G__29790;
chunk__29779 = G__29791;
count__29780 = G__29792;
i__29781 = G__29793;
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

var seq__29832_29839 = cljs.core.seq.call(null,deps);
var chunk__29833_29840 = null;
var count__29834_29841 = (0);
var i__29835_29842 = (0);
while(true){
if((i__29835_29842 < count__29834_29841)){
var dep_29843 = cljs.core._nth.call(null,chunk__29833_29840,i__29835_29842);
topo_sort_helper_STAR_.call(null,dep_29843,(depth + (1)),state);

var G__29844 = seq__29832_29839;
var G__29845 = chunk__29833_29840;
var G__29846 = count__29834_29841;
var G__29847 = (i__29835_29842 + (1));
seq__29832_29839 = G__29844;
chunk__29833_29840 = G__29845;
count__29834_29841 = G__29846;
i__29835_29842 = G__29847;
continue;
} else {
var temp__4657__auto___29848 = cljs.core.seq.call(null,seq__29832_29839);
if(temp__4657__auto___29848){
var seq__29832_29849__$1 = temp__4657__auto___29848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29832_29849__$1)){
var c__19229__auto___29850 = cljs.core.chunk_first.call(null,seq__29832_29849__$1);
var G__29851 = cljs.core.chunk_rest.call(null,seq__29832_29849__$1);
var G__29852 = c__19229__auto___29850;
var G__29853 = cljs.core.count.call(null,c__19229__auto___29850);
var G__29854 = (0);
seq__29832_29839 = G__29851;
chunk__29833_29840 = G__29852;
count__29834_29841 = G__29853;
i__29835_29842 = G__29854;
continue;
} else {
var dep_29855 = cljs.core.first.call(null,seq__29832_29849__$1);
topo_sort_helper_STAR_.call(null,dep_29855,(depth + (1)),state);

var G__29856 = cljs.core.next.call(null,seq__29832_29849__$1);
var G__29857 = null;
var G__29858 = (0);
var G__29859 = (0);
seq__29832_29839 = G__29856;
chunk__29833_29840 = G__29857;
count__29834_29841 = G__29858;
i__29835_29842 = G__29859;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29836){
var vec__29838 = p__29836;
var x = cljs.core.nth.call(null,vec__29838,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29838,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29838,x,xs,get_deps__$1){
return (function (p1__29794_SHARP_){
return clojure.set.difference.call(null,p1__29794_SHARP_,x);
});})(vec__29838,x,xs,get_deps__$1))
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
var seq__29872 = cljs.core.seq.call(null,provides);
var chunk__29873 = null;
var count__29874 = (0);
var i__29875 = (0);
while(true){
if((i__29875 < count__29874)){
var prov = cljs.core._nth.call(null,chunk__29873,i__29875);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29876_29884 = cljs.core.seq.call(null,requires);
var chunk__29877_29885 = null;
var count__29878_29886 = (0);
var i__29879_29887 = (0);
while(true){
if((i__29879_29887 < count__29878_29886)){
var req_29888 = cljs.core._nth.call(null,chunk__29877_29885,i__29879_29887);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29888,prov);

var G__29889 = seq__29876_29884;
var G__29890 = chunk__29877_29885;
var G__29891 = count__29878_29886;
var G__29892 = (i__29879_29887 + (1));
seq__29876_29884 = G__29889;
chunk__29877_29885 = G__29890;
count__29878_29886 = G__29891;
i__29879_29887 = G__29892;
continue;
} else {
var temp__4657__auto___29893 = cljs.core.seq.call(null,seq__29876_29884);
if(temp__4657__auto___29893){
var seq__29876_29894__$1 = temp__4657__auto___29893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29876_29894__$1)){
var c__19229__auto___29895 = cljs.core.chunk_first.call(null,seq__29876_29894__$1);
var G__29896 = cljs.core.chunk_rest.call(null,seq__29876_29894__$1);
var G__29897 = c__19229__auto___29895;
var G__29898 = cljs.core.count.call(null,c__19229__auto___29895);
var G__29899 = (0);
seq__29876_29884 = G__29896;
chunk__29877_29885 = G__29897;
count__29878_29886 = G__29898;
i__29879_29887 = G__29899;
continue;
} else {
var req_29900 = cljs.core.first.call(null,seq__29876_29894__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29900,prov);

var G__29901 = cljs.core.next.call(null,seq__29876_29894__$1);
var G__29902 = null;
var G__29903 = (0);
var G__29904 = (0);
seq__29876_29884 = G__29901;
chunk__29877_29885 = G__29902;
count__29878_29886 = G__29903;
i__29879_29887 = G__29904;
continue;
}
} else {
}
}
break;
}

var G__29905 = seq__29872;
var G__29906 = chunk__29873;
var G__29907 = count__29874;
var G__29908 = (i__29875 + (1));
seq__29872 = G__29905;
chunk__29873 = G__29906;
count__29874 = G__29907;
i__29875 = G__29908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29872);
if(temp__4657__auto__){
var seq__29872__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29872__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__29872__$1);
var G__29909 = cljs.core.chunk_rest.call(null,seq__29872__$1);
var G__29910 = c__19229__auto__;
var G__29911 = cljs.core.count.call(null,c__19229__auto__);
var G__29912 = (0);
seq__29872 = G__29909;
chunk__29873 = G__29910;
count__29874 = G__29911;
i__29875 = G__29912;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29872__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29880_29913 = cljs.core.seq.call(null,requires);
var chunk__29881_29914 = null;
var count__29882_29915 = (0);
var i__29883_29916 = (0);
while(true){
if((i__29883_29916 < count__29882_29915)){
var req_29917 = cljs.core._nth.call(null,chunk__29881_29914,i__29883_29916);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29917,prov);

var G__29918 = seq__29880_29913;
var G__29919 = chunk__29881_29914;
var G__29920 = count__29882_29915;
var G__29921 = (i__29883_29916 + (1));
seq__29880_29913 = G__29918;
chunk__29881_29914 = G__29919;
count__29882_29915 = G__29920;
i__29883_29916 = G__29921;
continue;
} else {
var temp__4657__auto___29922__$1 = cljs.core.seq.call(null,seq__29880_29913);
if(temp__4657__auto___29922__$1){
var seq__29880_29923__$1 = temp__4657__auto___29922__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29880_29923__$1)){
var c__19229__auto___29924 = cljs.core.chunk_first.call(null,seq__29880_29923__$1);
var G__29925 = cljs.core.chunk_rest.call(null,seq__29880_29923__$1);
var G__29926 = c__19229__auto___29924;
var G__29927 = cljs.core.count.call(null,c__19229__auto___29924);
var G__29928 = (0);
seq__29880_29913 = G__29925;
chunk__29881_29914 = G__29926;
count__29882_29915 = G__29927;
i__29883_29916 = G__29928;
continue;
} else {
var req_29929 = cljs.core.first.call(null,seq__29880_29923__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29929,prov);

var G__29930 = cljs.core.next.call(null,seq__29880_29923__$1);
var G__29931 = null;
var G__29932 = (0);
var G__29933 = (0);
seq__29880_29913 = G__29930;
chunk__29881_29914 = G__29931;
count__29882_29915 = G__29932;
i__29883_29916 = G__29933;
continue;
}
} else {
}
}
break;
}

var G__29934 = cljs.core.next.call(null,seq__29872__$1);
var G__29935 = null;
var G__29936 = (0);
var G__29937 = (0);
seq__29872 = G__29934;
chunk__29873 = G__29935;
count__29874 = G__29936;
i__29875 = G__29937;
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
var seq__29942_29946 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29943_29947 = null;
var count__29944_29948 = (0);
var i__29945_29949 = (0);
while(true){
if((i__29945_29949 < count__29944_29948)){
var ns_29950 = cljs.core._nth.call(null,chunk__29943_29947,i__29945_29949);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29950);

var G__29951 = seq__29942_29946;
var G__29952 = chunk__29943_29947;
var G__29953 = count__29944_29948;
var G__29954 = (i__29945_29949 + (1));
seq__29942_29946 = G__29951;
chunk__29943_29947 = G__29952;
count__29944_29948 = G__29953;
i__29945_29949 = G__29954;
continue;
} else {
var temp__4657__auto___29955 = cljs.core.seq.call(null,seq__29942_29946);
if(temp__4657__auto___29955){
var seq__29942_29956__$1 = temp__4657__auto___29955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29942_29956__$1)){
var c__19229__auto___29957 = cljs.core.chunk_first.call(null,seq__29942_29956__$1);
var G__29958 = cljs.core.chunk_rest.call(null,seq__29942_29956__$1);
var G__29959 = c__19229__auto___29957;
var G__29960 = cljs.core.count.call(null,c__19229__auto___29957);
var G__29961 = (0);
seq__29942_29946 = G__29958;
chunk__29943_29947 = G__29959;
count__29944_29948 = G__29960;
i__29945_29949 = G__29961;
continue;
} else {
var ns_29962 = cljs.core.first.call(null,seq__29942_29956__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29962);

var G__29963 = cljs.core.next.call(null,seq__29942_29956__$1);
var G__29964 = null;
var G__29965 = (0);
var G__29966 = (0);
seq__29942_29946 = G__29963;
chunk__29943_29947 = G__29964;
count__29944_29948 = G__29965;
i__29945_29949 = G__29966;
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
var G__29967__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29968__i = 0, G__29968__a = new Array(arguments.length -  0);
while (G__29968__i < G__29968__a.length) {G__29968__a[G__29968__i] = arguments[G__29968__i + 0]; ++G__29968__i;}
  args = new cljs.core.IndexedSeq(G__29968__a,0);
} 
return G__29967__delegate.call(this,args);};
G__29967.cljs$lang$maxFixedArity = 0;
G__29967.cljs$lang$applyTo = (function (arglist__29969){
var args = cljs.core.seq(arglist__29969);
return G__29967__delegate(args);
});
G__29967.cljs$core$IFn$_invoke$arity$variadic = G__29967__delegate;
return G__29967;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29971 = cljs.core._EQ_;
var expr__29972 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29971.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29972))){
var path_parts = ((function (pred__29971,expr__29972){
return (function (p1__29970_SHARP_){
return clojure.string.split.call(null,p1__29970_SHARP_,/[\/\\]/);
});})(pred__29971,expr__29972))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29971,expr__29972){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29974){if((e29974 instanceof Error)){
var e = e29974;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29974;

}
}})());
});
;})(path_parts,sep,root,pred__29971,expr__29972))
} else {
if(cljs.core.truth_(pred__29971.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29972))){
return ((function (pred__29971,expr__29972){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29971,expr__29972){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29971,expr__29972))
);

return deferred.addErrback(((function (deferred,pred__29971,expr__29972){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29971,expr__29972))
);
});
;})(pred__29971,expr__29972))
} else {
return ((function (pred__29971,expr__29972){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29971,expr__29972))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29975,callback){
var map__29978 = p__29975;
var map__29978__$1 = ((((!((map__29978 == null)))?((((map__29978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29978):map__29978);
var file_msg = map__29978__$1;
var request_url = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29978,map__29978__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29978,map__29978__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__){
return (function (state_30002){
var state_val_30003 = (state_30002[(1)]);
if((state_val_30003 === (7))){
var inst_29998 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30004_30024 = state_30002__$1;
(statearr_30004_30024[(2)] = inst_29998);

(statearr_30004_30024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (1))){
var state_30002__$1 = state_30002;
var statearr_30005_30025 = state_30002__$1;
(statearr_30005_30025[(2)] = null);

(statearr_30005_30025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (4))){
var inst_29982 = (state_30002[(7)]);
var inst_29982__$1 = (state_30002[(2)]);
var state_30002__$1 = (function (){var statearr_30006 = state_30002;
(statearr_30006[(7)] = inst_29982__$1);

return statearr_30006;
})();
if(cljs.core.truth_(inst_29982__$1)){
var statearr_30007_30026 = state_30002__$1;
(statearr_30007_30026[(1)] = (5));

} else {
var statearr_30008_30027 = state_30002__$1;
(statearr_30008_30027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (6))){
var state_30002__$1 = state_30002;
var statearr_30009_30028 = state_30002__$1;
(statearr_30009_30028[(2)] = null);

(statearr_30009_30028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (3))){
var inst_30000 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30002__$1,inst_30000);
} else {
if((state_val_30003 === (2))){
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30002__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30003 === (11))){
var inst_29994 = (state_30002[(2)]);
var state_30002__$1 = (function (){var statearr_30010 = state_30002;
(statearr_30010[(8)] = inst_29994);

return statearr_30010;
})();
var statearr_30011_30029 = state_30002__$1;
(statearr_30011_30029[(2)] = null);

(statearr_30011_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (9))){
var inst_29986 = (state_30002[(9)]);
var inst_29988 = (state_30002[(10)]);
var inst_29990 = inst_29988.call(null,inst_29986);
var state_30002__$1 = state_30002;
var statearr_30012_30030 = state_30002__$1;
(statearr_30012_30030[(2)] = inst_29990);

(statearr_30012_30030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (5))){
var inst_29982 = (state_30002[(7)]);
var inst_29984 = figwheel.client.file_reloading.blocking_load.call(null,inst_29982);
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30002__$1,(8),inst_29984);
} else {
if((state_val_30003 === (10))){
var inst_29986 = (state_30002[(9)]);
var inst_29992 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29986);
var state_30002__$1 = state_30002;
var statearr_30013_30031 = state_30002__$1;
(statearr_30013_30031[(2)] = inst_29992);

(statearr_30013_30031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (8))){
var inst_29982 = (state_30002[(7)]);
var inst_29988 = (state_30002[(10)]);
var inst_29986 = (state_30002[(2)]);
var inst_29987 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29988__$1 = cljs.core.get.call(null,inst_29987,inst_29982);
var state_30002__$1 = (function (){var statearr_30014 = state_30002;
(statearr_30014[(9)] = inst_29986);

(statearr_30014[(10)] = inst_29988__$1);

return statearr_30014;
})();
if(cljs.core.truth_(inst_29988__$1)){
var statearr_30015_30032 = state_30002__$1;
(statearr_30015_30032[(1)] = (9));

} else {
var statearr_30016_30033 = state_30002__$1;
(statearr_30016_30033[(1)] = (10));

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
});})(c__22859__auto__))
;
return ((function (switch__22838__auto__,c__22859__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22839__auto__ = null;
var figwheel$client$file_reloading$state_machine__22839__auto____0 = (function (){
var statearr_30020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30020[(0)] = figwheel$client$file_reloading$state_machine__22839__auto__);

(statearr_30020[(1)] = (1));

return statearr_30020;
});
var figwheel$client$file_reloading$state_machine__22839__auto____1 = (function (state_30002){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_30002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e30021){if((e30021 instanceof Object)){
var ex__22842__auto__ = e30021;
var statearr_30022_30034 = state_30002;
(statearr_30022_30034[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30035 = state_30002;
state_30002 = G__30035;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22839__auto__ = function(state_30002){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22839__auto____1.call(this,state_30002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22839__auto____0;
figwheel$client$file_reloading$state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22839__auto____1;
return figwheel$client$file_reloading$state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__))
})();
var state__22861__auto__ = (function (){var statearr_30023 = f__22860__auto__.call(null);
(statearr_30023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_30023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__))
);

return c__22859__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30036,callback){
var map__30039 = p__30036;
var map__30039__$1 = ((((!((map__30039 == null)))?((((map__30039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30039):map__30039);
var file_msg = map__30039__$1;
var namespace = cljs.core.get.call(null,map__30039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30039,map__30039__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30039,map__30039__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30041){
var map__30044 = p__30041;
var map__30044__$1 = ((((!((map__30044 == null)))?((((map__30044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);
var file_msg = map__30044__$1;
var namespace = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30046,callback){
var map__30049 = p__30046;
var map__30049__$1 = ((((!((map__30049 == null)))?((((map__30049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30049):map__30049);
var file_msg = map__30049__$1;
var request_url = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22859__auto___30137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___30137,out){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___30137,out){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (1))){
var inst_30097 = cljs.core.nth.call(null,files,(0),null);
var inst_30098 = cljs.core.nthnext.call(null,files,(1));
var inst_30099 = files;
var state_30119__$1 = (function (){var statearr_30121 = state_30119;
(statearr_30121[(7)] = inst_30099);

(statearr_30121[(8)] = inst_30097);

(statearr_30121[(9)] = inst_30098);

return statearr_30121;
})();
var statearr_30122_30138 = state_30119__$1;
(statearr_30122_30138[(2)] = null);

(statearr_30122_30138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var inst_30102 = (state_30119[(10)]);
var inst_30099 = (state_30119[(7)]);
var inst_30102__$1 = cljs.core.nth.call(null,inst_30099,(0),null);
var inst_30103 = cljs.core.nthnext.call(null,inst_30099,(1));
var inst_30104 = (inst_30102__$1 == null);
var inst_30105 = cljs.core.not.call(null,inst_30104);
var state_30119__$1 = (function (){var statearr_30123 = state_30119;
(statearr_30123[(11)] = inst_30103);

(statearr_30123[(10)] = inst_30102__$1);

return statearr_30123;
})();
if(inst_30105){
var statearr_30124_30139 = state_30119__$1;
(statearr_30124_30139[(1)] = (4));

} else {
var statearr_30125_30140 = state_30119__$1;
(statearr_30125_30140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (4))){
var inst_30102 = (state_30119[(10)]);
var inst_30107 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30102);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(7),inst_30107);
} else {
if((state_val_30120 === (5))){
var inst_30113 = cljs.core.async.close_BANG_.call(null,out);
var state_30119__$1 = state_30119;
var statearr_30126_30141 = state_30119__$1;
(statearr_30126_30141[(2)] = inst_30113);

(statearr_30126_30141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30127_30142 = state_30119__$1;
(statearr_30127_30142[(2)] = inst_30115);

(statearr_30127_30142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (7))){
var inst_30103 = (state_30119[(11)]);
var inst_30109 = (state_30119[(2)]);
var inst_30110 = cljs.core.async.put_BANG_.call(null,out,inst_30109);
var inst_30099 = inst_30103;
var state_30119__$1 = (function (){var statearr_30128 = state_30119;
(statearr_30128[(12)] = inst_30110);

(statearr_30128[(7)] = inst_30099);

return statearr_30128;
})();
var statearr_30129_30143 = state_30119__$1;
(statearr_30129_30143[(2)] = null);

(statearr_30129_30143[(1)] = (2));


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
});})(c__22859__auto___30137,out))
;
return ((function (switch__22838__auto__,c__22859__auto___30137,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____0 = (function (){
var statearr_30133 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30133[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__);

(statearr_30133[(1)] = (1));

return statearr_30133;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____1 = (function (state_30119){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e30134){if((e30134 instanceof Object)){
var ex__22842__auto__ = e30134;
var statearr_30135_30144 = state_30119;
(statearr_30135_30144[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30145 = state_30119;
state_30119 = G__30145;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___30137,out))
})();
var state__22861__auto__ = (function (){var statearr_30136 = f__22860__auto__.call(null);
(statearr_30136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___30137);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___30137,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30146,opts){
var map__30150 = p__30146;
var map__30150__$1 = ((((!((map__30150 == null)))?((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150):map__30150);
var eval_body__$1 = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30152){var e = e30152;
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
return (function (p1__30153_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30153_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30158){
var vec__30159 = p__30158;
var k = cljs.core.nth.call(null,vec__30159,(0),null);
var v = cljs.core.nth.call(null,vec__30159,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30160){
var vec__30161 = p__30160;
var k = cljs.core.nth.call(null,vec__30161,(0),null);
var v = cljs.core.nth.call(null,vec__30161,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30165,p__30166){
var map__30413 = p__30165;
var map__30413__$1 = ((((!((map__30413 == null)))?((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);
var opts = map__30413__$1;
var before_jsload = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30414 = p__30166;
var map__30414__$1 = ((((!((map__30414 == null)))?((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var msg = map__30414__$1;
var files = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30567){
var state_val_30568 = (state_30567[(1)]);
if((state_val_30568 === (7))){
var inst_30428 = (state_30567[(7)]);
var inst_30430 = (state_30567[(8)]);
var inst_30429 = (state_30567[(9)]);
var inst_30431 = (state_30567[(10)]);
var inst_30436 = cljs.core._nth.call(null,inst_30429,inst_30431);
var inst_30437 = figwheel.client.file_reloading.eval_body.call(null,inst_30436,opts);
var inst_30438 = (inst_30431 + (1));
var tmp30569 = inst_30428;
var tmp30570 = inst_30430;
var tmp30571 = inst_30429;
var inst_30428__$1 = tmp30569;
var inst_30429__$1 = tmp30571;
var inst_30430__$1 = tmp30570;
var inst_30431__$1 = inst_30438;
var state_30567__$1 = (function (){var statearr_30572 = state_30567;
(statearr_30572[(7)] = inst_30428__$1);

(statearr_30572[(8)] = inst_30430__$1);

(statearr_30572[(9)] = inst_30429__$1);

(statearr_30572[(10)] = inst_30431__$1);

(statearr_30572[(11)] = inst_30437);

return statearr_30572;
})();
var statearr_30573_30659 = state_30567__$1;
(statearr_30573_30659[(2)] = null);

(statearr_30573_30659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (20))){
var inst_30471 = (state_30567[(12)]);
var inst_30479 = figwheel.client.file_reloading.sort_files.call(null,inst_30471);
var state_30567__$1 = state_30567;
var statearr_30574_30660 = state_30567__$1;
(statearr_30574_30660[(2)] = inst_30479);

(statearr_30574_30660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (27))){
var state_30567__$1 = state_30567;
var statearr_30575_30661 = state_30567__$1;
(statearr_30575_30661[(2)] = null);

(statearr_30575_30661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (1))){
var inst_30420 = (state_30567[(13)]);
var inst_30417 = before_jsload.call(null,files);
var inst_30418 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30419 = (function (){return ((function (inst_30420,inst_30417,inst_30418,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30162_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30162_SHARP_);
});
;})(inst_30420,inst_30417,inst_30418,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30420__$1 = cljs.core.filter.call(null,inst_30419,files);
var inst_30421 = cljs.core.not_empty.call(null,inst_30420__$1);
var state_30567__$1 = (function (){var statearr_30576 = state_30567;
(statearr_30576[(13)] = inst_30420__$1);

(statearr_30576[(14)] = inst_30418);

(statearr_30576[(15)] = inst_30417);

return statearr_30576;
})();
if(cljs.core.truth_(inst_30421)){
var statearr_30577_30662 = state_30567__$1;
(statearr_30577_30662[(1)] = (2));

} else {
var statearr_30578_30663 = state_30567__$1;
(statearr_30578_30663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (24))){
var state_30567__$1 = state_30567;
var statearr_30579_30664 = state_30567__$1;
(statearr_30579_30664[(2)] = null);

(statearr_30579_30664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (39))){
var inst_30521 = (state_30567[(16)]);
var state_30567__$1 = state_30567;
var statearr_30580_30665 = state_30567__$1;
(statearr_30580_30665[(2)] = inst_30521);

(statearr_30580_30665[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (46))){
var inst_30562 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30581_30666 = state_30567__$1;
(statearr_30581_30666[(2)] = inst_30562);

(statearr_30581_30666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (4))){
var inst_30465 = (state_30567[(2)]);
var inst_30466 = cljs.core.List.EMPTY;
var inst_30467 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30466);
var inst_30468 = (function (){return ((function (inst_30465,inst_30466,inst_30467,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30163_SHARP_){
var and__18406__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30163_SHARP_);
if(cljs.core.truth_(and__18406__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30163_SHARP_));
} else {
return and__18406__auto__;
}
});
;})(inst_30465,inst_30466,inst_30467,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30469 = cljs.core.filter.call(null,inst_30468,files);
var inst_30470 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30471 = cljs.core.concat.call(null,inst_30469,inst_30470);
var state_30567__$1 = (function (){var statearr_30582 = state_30567;
(statearr_30582[(17)] = inst_30467);

(statearr_30582[(12)] = inst_30471);

(statearr_30582[(18)] = inst_30465);

return statearr_30582;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30583_30667 = state_30567__$1;
(statearr_30583_30667[(1)] = (16));

} else {
var statearr_30584_30668 = state_30567__$1;
(statearr_30584_30668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (15))){
var inst_30455 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30585_30669 = state_30567__$1;
(statearr_30585_30669[(2)] = inst_30455);

(statearr_30585_30669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (21))){
var inst_30481 = (state_30567[(19)]);
var inst_30481__$1 = (state_30567[(2)]);
var inst_30482 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30481__$1);
var state_30567__$1 = (function (){var statearr_30586 = state_30567;
(statearr_30586[(19)] = inst_30481__$1);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30567__$1,(22),inst_30482);
} else {
if((state_val_30568 === (31))){
var inst_30565 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30567__$1,inst_30565);
} else {
if((state_val_30568 === (32))){
var inst_30521 = (state_30567[(16)]);
var inst_30526 = inst_30521.cljs$lang$protocol_mask$partition0$;
var inst_30527 = (inst_30526 & (64));
var inst_30528 = inst_30521.cljs$core$ISeq$;
var inst_30529 = (inst_30527) || (inst_30528);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30529)){
var statearr_30587_30670 = state_30567__$1;
(statearr_30587_30670[(1)] = (35));

} else {
var statearr_30588_30671 = state_30567__$1;
(statearr_30588_30671[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (40))){
var inst_30542 = (state_30567[(20)]);
var inst_30541 = (state_30567[(2)]);
var inst_30542__$1 = cljs.core.get.call(null,inst_30541,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30543 = cljs.core.get.call(null,inst_30541,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30544 = cljs.core.not_empty.call(null,inst_30542__$1);
var state_30567__$1 = (function (){var statearr_30589 = state_30567;
(statearr_30589[(20)] = inst_30542__$1);

(statearr_30589[(21)] = inst_30543);

return statearr_30589;
})();
if(cljs.core.truth_(inst_30544)){
var statearr_30590_30672 = state_30567__$1;
(statearr_30590_30672[(1)] = (41));

} else {
var statearr_30591_30673 = state_30567__$1;
(statearr_30591_30673[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (33))){
var state_30567__$1 = state_30567;
var statearr_30592_30674 = state_30567__$1;
(statearr_30592_30674[(2)] = false);

(statearr_30592_30674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (13))){
var inst_30441 = (state_30567[(22)]);
var inst_30445 = cljs.core.chunk_first.call(null,inst_30441);
var inst_30446 = cljs.core.chunk_rest.call(null,inst_30441);
var inst_30447 = cljs.core.count.call(null,inst_30445);
var inst_30428 = inst_30446;
var inst_30429 = inst_30445;
var inst_30430 = inst_30447;
var inst_30431 = (0);
var state_30567__$1 = (function (){var statearr_30593 = state_30567;
(statearr_30593[(7)] = inst_30428);

(statearr_30593[(8)] = inst_30430);

(statearr_30593[(9)] = inst_30429);

(statearr_30593[(10)] = inst_30431);

return statearr_30593;
})();
var statearr_30594_30675 = state_30567__$1;
(statearr_30594_30675[(2)] = null);

(statearr_30594_30675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (22))){
var inst_30489 = (state_30567[(23)]);
var inst_30485 = (state_30567[(24)]);
var inst_30481 = (state_30567[(19)]);
var inst_30484 = (state_30567[(25)]);
var inst_30484__$1 = (state_30567[(2)]);
var inst_30485__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30484__$1);
var inst_30486 = (function (){var all_files = inst_30481;
var res_SINGLEQUOTE_ = inst_30484__$1;
var res = inst_30485__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30489,inst_30485,inst_30481,inst_30484,inst_30484__$1,inst_30485__$1,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30164_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30164_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30489,inst_30485,inst_30481,inst_30484,inst_30484__$1,inst_30485__$1,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30487 = cljs.core.filter.call(null,inst_30486,inst_30484__$1);
var inst_30488 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30489__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30488);
var inst_30490 = cljs.core.not_empty.call(null,inst_30489__$1);
var state_30567__$1 = (function (){var statearr_30595 = state_30567;
(statearr_30595[(23)] = inst_30489__$1);

(statearr_30595[(24)] = inst_30485__$1);

(statearr_30595[(26)] = inst_30487);

(statearr_30595[(25)] = inst_30484__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30596_30676 = state_30567__$1;
(statearr_30596_30676[(1)] = (23));

} else {
var statearr_30597_30677 = state_30567__$1;
(statearr_30597_30677[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (36))){
var state_30567__$1 = state_30567;
var statearr_30598_30678 = state_30567__$1;
(statearr_30598_30678[(2)] = false);

(statearr_30598_30678[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (41))){
var inst_30542 = (state_30567[(20)]);
var inst_30546 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30547 = cljs.core.map.call(null,inst_30546,inst_30542);
var inst_30548 = cljs.core.pr_str.call(null,inst_30547);
var inst_30549 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30548)].join('');
var inst_30550 = figwheel.client.utils.log.call(null,inst_30549);
var state_30567__$1 = state_30567;
var statearr_30599_30679 = state_30567__$1;
(statearr_30599_30679[(2)] = inst_30550);

(statearr_30599_30679[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (43))){
var inst_30543 = (state_30567[(21)]);
var inst_30553 = (state_30567[(2)]);
var inst_30554 = cljs.core.not_empty.call(null,inst_30543);
var state_30567__$1 = (function (){var statearr_30600 = state_30567;
(statearr_30600[(27)] = inst_30553);

return statearr_30600;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30601_30680 = state_30567__$1;
(statearr_30601_30680[(1)] = (44));

} else {
var statearr_30602_30681 = state_30567__$1;
(statearr_30602_30681[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (29))){
var inst_30489 = (state_30567[(23)]);
var inst_30485 = (state_30567[(24)]);
var inst_30481 = (state_30567[(19)]);
var inst_30487 = (state_30567[(26)]);
var inst_30484 = (state_30567[(25)]);
var inst_30521 = (state_30567[(16)]);
var inst_30517 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30520 = (function (){var all_files = inst_30481;
var res_SINGLEQUOTE_ = inst_30484;
var res = inst_30485;
var files_not_loaded = inst_30487;
var dependencies_that_loaded = inst_30489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30521,inst_30517,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30519){
var map__30603 = p__30519;
var map__30603__$1 = ((((!((map__30603 == null)))?((((map__30603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);
var namespace = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30521,inst_30517,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30521__$1 = cljs.core.group_by.call(null,inst_30520,inst_30487);
var inst_30523 = (inst_30521__$1 == null);
var inst_30524 = cljs.core.not.call(null,inst_30523);
var state_30567__$1 = (function (){var statearr_30605 = state_30567;
(statearr_30605[(28)] = inst_30517);

(statearr_30605[(16)] = inst_30521__$1);

return statearr_30605;
})();
if(inst_30524){
var statearr_30606_30682 = state_30567__$1;
(statearr_30606_30682[(1)] = (32));

} else {
var statearr_30607_30683 = state_30567__$1;
(statearr_30607_30683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (44))){
var inst_30543 = (state_30567[(21)]);
var inst_30556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30543);
var inst_30557 = cljs.core.pr_str.call(null,inst_30556);
var inst_30558 = [cljs.core.str("not required: "),cljs.core.str(inst_30557)].join('');
var inst_30559 = figwheel.client.utils.log.call(null,inst_30558);
var state_30567__$1 = state_30567;
var statearr_30608_30684 = state_30567__$1;
(statearr_30608_30684[(2)] = inst_30559);

(statearr_30608_30684[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (6))){
var inst_30462 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30609_30685 = state_30567__$1;
(statearr_30609_30685[(2)] = inst_30462);

(statearr_30609_30685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (28))){
var inst_30487 = (state_30567[(26)]);
var inst_30514 = (state_30567[(2)]);
var inst_30515 = cljs.core.not_empty.call(null,inst_30487);
var state_30567__$1 = (function (){var statearr_30610 = state_30567;
(statearr_30610[(29)] = inst_30514);

return statearr_30610;
})();
if(cljs.core.truth_(inst_30515)){
var statearr_30611_30686 = state_30567__$1;
(statearr_30611_30686[(1)] = (29));

} else {
var statearr_30612_30687 = state_30567__$1;
(statearr_30612_30687[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (25))){
var inst_30485 = (state_30567[(24)]);
var inst_30501 = (state_30567[(2)]);
var inst_30502 = cljs.core.not_empty.call(null,inst_30485);
var state_30567__$1 = (function (){var statearr_30613 = state_30567;
(statearr_30613[(30)] = inst_30501);

return statearr_30613;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30614_30688 = state_30567__$1;
(statearr_30614_30688[(1)] = (26));

} else {
var statearr_30615_30689 = state_30567__$1;
(statearr_30615_30689[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (34))){
var inst_30536 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30536)){
var statearr_30616_30690 = state_30567__$1;
(statearr_30616_30690[(1)] = (38));

} else {
var statearr_30617_30691 = state_30567__$1;
(statearr_30617_30691[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (17))){
var state_30567__$1 = state_30567;
var statearr_30618_30692 = state_30567__$1;
(statearr_30618_30692[(2)] = recompile_dependents);

(statearr_30618_30692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (3))){
var state_30567__$1 = state_30567;
var statearr_30619_30693 = state_30567__$1;
(statearr_30619_30693[(2)] = null);

(statearr_30619_30693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (12))){
var inst_30458 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30620_30694 = state_30567__$1;
(statearr_30620_30694[(2)] = inst_30458);

(statearr_30620_30694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (2))){
var inst_30420 = (state_30567[(13)]);
var inst_30427 = cljs.core.seq.call(null,inst_30420);
var inst_30428 = inst_30427;
var inst_30429 = null;
var inst_30430 = (0);
var inst_30431 = (0);
var state_30567__$1 = (function (){var statearr_30621 = state_30567;
(statearr_30621[(7)] = inst_30428);

(statearr_30621[(8)] = inst_30430);

(statearr_30621[(9)] = inst_30429);

(statearr_30621[(10)] = inst_30431);

return statearr_30621;
})();
var statearr_30622_30695 = state_30567__$1;
(statearr_30622_30695[(2)] = null);

(statearr_30622_30695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (23))){
var inst_30489 = (state_30567[(23)]);
var inst_30485 = (state_30567[(24)]);
var inst_30481 = (state_30567[(19)]);
var inst_30487 = (state_30567[(26)]);
var inst_30484 = (state_30567[(25)]);
var inst_30492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30494 = (function (){var all_files = inst_30481;
var res_SINGLEQUOTE_ = inst_30484;
var res = inst_30485;
var files_not_loaded = inst_30487;
var dependencies_that_loaded = inst_30489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30492,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30493){
var map__30623 = p__30493;
var map__30623__$1 = ((((!((map__30623 == null)))?((((map__30623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30623):map__30623);
var request_url = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30492,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30495 = cljs.core.reverse.call(null,inst_30489);
var inst_30496 = cljs.core.map.call(null,inst_30494,inst_30495);
var inst_30497 = cljs.core.pr_str.call(null,inst_30496);
var inst_30498 = figwheel.client.utils.log.call(null,inst_30497);
var state_30567__$1 = (function (){var statearr_30625 = state_30567;
(statearr_30625[(31)] = inst_30492);

return statearr_30625;
})();
var statearr_30626_30696 = state_30567__$1;
(statearr_30626_30696[(2)] = inst_30498);

(statearr_30626_30696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (35))){
var state_30567__$1 = state_30567;
var statearr_30627_30697 = state_30567__$1;
(statearr_30627_30697[(2)] = true);

(statearr_30627_30697[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (19))){
var inst_30471 = (state_30567[(12)]);
var inst_30477 = figwheel.client.file_reloading.expand_files.call(null,inst_30471);
var state_30567__$1 = state_30567;
var statearr_30628_30698 = state_30567__$1;
(statearr_30628_30698[(2)] = inst_30477);

(statearr_30628_30698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (11))){
var state_30567__$1 = state_30567;
var statearr_30629_30699 = state_30567__$1;
(statearr_30629_30699[(2)] = null);

(statearr_30629_30699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (9))){
var inst_30460 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30630_30700 = state_30567__$1;
(statearr_30630_30700[(2)] = inst_30460);

(statearr_30630_30700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (5))){
var inst_30430 = (state_30567[(8)]);
var inst_30431 = (state_30567[(10)]);
var inst_30433 = (inst_30431 < inst_30430);
var inst_30434 = inst_30433;
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30434)){
var statearr_30631_30701 = state_30567__$1;
(statearr_30631_30701[(1)] = (7));

} else {
var statearr_30632_30702 = state_30567__$1;
(statearr_30632_30702[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (14))){
var inst_30441 = (state_30567[(22)]);
var inst_30450 = cljs.core.first.call(null,inst_30441);
var inst_30451 = figwheel.client.file_reloading.eval_body.call(null,inst_30450,opts);
var inst_30452 = cljs.core.next.call(null,inst_30441);
var inst_30428 = inst_30452;
var inst_30429 = null;
var inst_30430 = (0);
var inst_30431 = (0);
var state_30567__$1 = (function (){var statearr_30633 = state_30567;
(statearr_30633[(7)] = inst_30428);

(statearr_30633[(32)] = inst_30451);

(statearr_30633[(8)] = inst_30430);

(statearr_30633[(9)] = inst_30429);

(statearr_30633[(10)] = inst_30431);

return statearr_30633;
})();
var statearr_30634_30703 = state_30567__$1;
(statearr_30634_30703[(2)] = null);

(statearr_30634_30703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (45))){
var state_30567__$1 = state_30567;
var statearr_30635_30704 = state_30567__$1;
(statearr_30635_30704[(2)] = null);

(statearr_30635_30704[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (26))){
var inst_30489 = (state_30567[(23)]);
var inst_30485 = (state_30567[(24)]);
var inst_30481 = (state_30567[(19)]);
var inst_30487 = (state_30567[(26)]);
var inst_30484 = (state_30567[(25)]);
var inst_30504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30506 = (function (){var all_files = inst_30481;
var res_SINGLEQUOTE_ = inst_30484;
var res = inst_30485;
var files_not_loaded = inst_30487;
var dependencies_that_loaded = inst_30489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30504,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30505){
var map__30636 = p__30505;
var map__30636__$1 = ((((!((map__30636 == null)))?((((map__30636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30636):map__30636);
var namespace = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30504,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30507 = cljs.core.map.call(null,inst_30506,inst_30485);
var inst_30508 = cljs.core.pr_str.call(null,inst_30507);
var inst_30509 = figwheel.client.utils.log.call(null,inst_30508);
var inst_30510 = (function (){var all_files = inst_30481;
var res_SINGLEQUOTE_ = inst_30484;
var res = inst_30485;
var files_not_loaded = inst_30487;
var dependencies_that_loaded = inst_30489;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30504,inst_30506,inst_30507,inst_30508,inst_30509,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30489,inst_30485,inst_30481,inst_30487,inst_30484,inst_30504,inst_30506,inst_30507,inst_30508,inst_30509,state_val_30568,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30511 = setTimeout(inst_30510,(10));
var state_30567__$1 = (function (){var statearr_30638 = state_30567;
(statearr_30638[(33)] = inst_30504);

(statearr_30638[(34)] = inst_30509);

return statearr_30638;
})();
var statearr_30639_30705 = state_30567__$1;
(statearr_30639_30705[(2)] = inst_30511);

(statearr_30639_30705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (16))){
var state_30567__$1 = state_30567;
var statearr_30640_30706 = state_30567__$1;
(statearr_30640_30706[(2)] = reload_dependents);

(statearr_30640_30706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (38))){
var inst_30521 = (state_30567[(16)]);
var inst_30538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30521);
var state_30567__$1 = state_30567;
var statearr_30641_30707 = state_30567__$1;
(statearr_30641_30707[(2)] = inst_30538);

(statearr_30641_30707[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (30))){
var state_30567__$1 = state_30567;
var statearr_30642_30708 = state_30567__$1;
(statearr_30642_30708[(2)] = null);

(statearr_30642_30708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (10))){
var inst_30441 = (state_30567[(22)]);
var inst_30443 = cljs.core.chunked_seq_QMARK_.call(null,inst_30441);
var state_30567__$1 = state_30567;
if(inst_30443){
var statearr_30643_30709 = state_30567__$1;
(statearr_30643_30709[(1)] = (13));

} else {
var statearr_30644_30710 = state_30567__$1;
(statearr_30644_30710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (18))){
var inst_30475 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
if(cljs.core.truth_(inst_30475)){
var statearr_30645_30711 = state_30567__$1;
(statearr_30645_30711[(1)] = (19));

} else {
var statearr_30646_30712 = state_30567__$1;
(statearr_30646_30712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (42))){
var state_30567__$1 = state_30567;
var statearr_30647_30713 = state_30567__$1;
(statearr_30647_30713[(2)] = null);

(statearr_30647_30713[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (37))){
var inst_30533 = (state_30567[(2)]);
var state_30567__$1 = state_30567;
var statearr_30648_30714 = state_30567__$1;
(statearr_30648_30714[(2)] = inst_30533);

(statearr_30648_30714[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30568 === (8))){
var inst_30428 = (state_30567[(7)]);
var inst_30441 = (state_30567[(22)]);
var inst_30441__$1 = cljs.core.seq.call(null,inst_30428);
var state_30567__$1 = (function (){var statearr_30649 = state_30567;
(statearr_30649[(22)] = inst_30441__$1);

return statearr_30649;
})();
if(inst_30441__$1){
var statearr_30650_30715 = state_30567__$1;
(statearr_30650_30715[(1)] = (10));

} else {
var statearr_30651_30716 = state_30567__$1;
(statearr_30651_30716[(1)] = (11));

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
});})(c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22838__auto__,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____0 = (function (){
var statearr_30655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30655[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__);

(statearr_30655[(1)] = (1));

return statearr_30655;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____1 = (function (state_30567){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_30567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e30656){if((e30656 instanceof Object)){
var ex__22842__auto__ = e30656;
var statearr_30657_30717 = state_30567;
(statearr_30657_30717[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30718 = state_30567;
state_30567 = G__30718;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__ = function(state_30567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____1.call(this,state_30567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22861__auto__ = (function (){var statearr_30658 = f__22860__auto__.call(null);
(statearr_30658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_30658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__,map__30413,map__30413__$1,opts,before_jsload,on_jsload,reload_dependents,map__30414,map__30414__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22859__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30721,link){
var map__30724 = p__30721;
var map__30724__$1 = ((((!((map__30724 == null)))?((((map__30724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30724):map__30724);
var file = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30724,map__30724__$1,file){
return (function (p1__30719_SHARP_,p2__30720_SHARP_){
if(cljs.core._EQ_.call(null,p1__30719_SHARP_,p2__30720_SHARP_)){
return p1__30719_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30724,map__30724__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30730){
var map__30731 = p__30730;
var map__30731__$1 = ((((!((map__30731 == null)))?((((map__30731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30731):map__30731);
var match_length = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30726_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30726_SHARP_);
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
var args30733 = [];
var len__19487__auto___30736 = arguments.length;
var i__19488__auto___30737 = (0);
while(true){
if((i__19488__auto___30737 < len__19487__auto___30736)){
args30733.push((arguments[i__19488__auto___30737]));

var G__30738 = (i__19488__auto___30737 + (1));
i__19488__auto___30737 = G__30738;
continue;
} else {
}
break;
}

var G__30735 = args30733.length;
switch (G__30735) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30733.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30740_SHARP_,p2__30741_SHARP_){
return cljs.core.assoc.call(null,p1__30740_SHARP_,cljs.core.get.call(null,p2__30741_SHARP_,key),p2__30741_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30742){
var map__30745 = p__30742;
var map__30745__$1 = ((((!((map__30745 == null)))?((((map__30745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30745):map__30745);
var f_data = map__30745__$1;
var file = cljs.core.get.call(null,map__30745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30747,files_msg){
var map__30754 = p__30747;
var map__30754__$1 = ((((!((map__30754 == null)))?((((map__30754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30754):map__30754);
var opts = map__30754__$1;
var on_cssload = cljs.core.get.call(null,map__30754__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30756_30760 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30757_30761 = null;
var count__30758_30762 = (0);
var i__30759_30763 = (0);
while(true){
if((i__30759_30763 < count__30758_30762)){
var f_30764 = cljs.core._nth.call(null,chunk__30757_30761,i__30759_30763);
figwheel.client.file_reloading.reload_css_file.call(null,f_30764);

var G__30765 = seq__30756_30760;
var G__30766 = chunk__30757_30761;
var G__30767 = count__30758_30762;
var G__30768 = (i__30759_30763 + (1));
seq__30756_30760 = G__30765;
chunk__30757_30761 = G__30766;
count__30758_30762 = G__30767;
i__30759_30763 = G__30768;
continue;
} else {
var temp__4657__auto___30769 = cljs.core.seq.call(null,seq__30756_30760);
if(temp__4657__auto___30769){
var seq__30756_30770__$1 = temp__4657__auto___30769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30756_30770__$1)){
var c__19229__auto___30771 = cljs.core.chunk_first.call(null,seq__30756_30770__$1);
var G__30772 = cljs.core.chunk_rest.call(null,seq__30756_30770__$1);
var G__30773 = c__19229__auto___30771;
var G__30774 = cljs.core.count.call(null,c__19229__auto___30771);
var G__30775 = (0);
seq__30756_30760 = G__30772;
chunk__30757_30761 = G__30773;
count__30758_30762 = G__30774;
i__30759_30763 = G__30775;
continue;
} else {
var f_30776 = cljs.core.first.call(null,seq__30756_30770__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30776);

var G__30777 = cljs.core.next.call(null,seq__30756_30770__$1);
var G__30778 = null;
var G__30779 = (0);
var G__30780 = (0);
seq__30756_30760 = G__30777;
chunk__30757_30761 = G__30778;
count__30758_30762 = G__30779;
i__30759_30763 = G__30780;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30754,map__30754__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30754,map__30754__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map