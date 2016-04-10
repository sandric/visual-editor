// Compiled by ClojureScript 1.8.40 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('posh.datom_match');
goog.require('posh.pull_pattern_gen');
goog.require('reagent.core');
goog.require('datascript.core');
goog.require('posh.q_pattern_gen');
posh.core.posh_conn = cljs.core.atom.call(null,datascript.core.create_conn.call(null));
posh.core.posh_conns = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
posh.core.posh_BANG_ = (function posh$core$posh_BANG_(conn){
cljs.core.swap_BANG_.call(null,posh.core.posh_conns,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([conn,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541),reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.atom.call(null,conn),new cljs.core.Keyword(null,"after-tx","after-tx",2050070599),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"before-tx","before-tx",1079605614),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null)], true, false));

return datascript.core.listen_BANG_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn))),new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
cljs.core.doall.call(null,(function (){var iter__19198__auto__ = (function posh$core$posh_BANG__$_iter__24768(s__24769){
return (new cljs.core.LazySeq(null,(function (){
var s__24769__$1 = s__24769;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24769__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var tx_datom = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19194__auto__ = ((function (s__24769__$1,tx_datom,xs__5205__auto__,temp__4657__auto__){
return (function posh$core$posh_BANG__$_iter__24768_$_iter__24770(s__24771){
return (new cljs.core.LazySeq(null,((function (s__24769__$1,tx_datom,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__24771__$1 = s__24771;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24771__$1);
if(temp__4657__auto____$1){
var s__24771__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24771__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__24771__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__24773 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__24772 = (0);
while(true){
if((i__24772 < size__19197__auto__)){
var after_tx = cljs.core._nth.call(null,c__19196__auto__,i__24772);
cljs.core.chunk_append.call(null,b__24773,posh.core.try_after_tx.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report),tx_datom,after_tx));

var G__24774 = (i__24772 + (1));
i__24772 = G__24774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24773),posh$core$posh_BANG__$_iter__24768_$_iter__24770.call(null,cljs.core.chunk_rest.call(null,s__24771__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24773),null);
}
} else {
var after_tx = cljs.core.first.call(null,s__24771__$2);
return cljs.core.cons.call(null,posh.core.try_after_tx.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report),tx_datom,after_tx),posh$core$posh_BANG__$_iter__24768_$_iter__24770.call(null,cljs.core.rest.call(null,s__24771__$2)));
}
} else {
return null;
}
break;
}
});})(s__24769__$1,tx_datom,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__24769__$1,tx_datom,xs__5205__auto__,temp__4657__auto__))
;
var fs__19195__auto__ = cljs.core.seq.call(null,iterys__19194__auto__.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"after-tx","after-tx",2050070599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))));
if(fs__19195__auto__){
return cljs.core.concat.call(null,fs__19195__auto__,posh$core$posh_BANG__$_iter__24768.call(null,cljs.core.rest.call(null,s__24769__$1)));
} else {
var G__24775 = cljs.core.rest.call(null,s__24769__$1);
s__24769__$1 = G__24775;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
})());

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)),tx_report);
}));
});
posh.core.transactions_buffer = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
posh.core.split_tx_map = (function posh$core$split_tx_map(tx_map){
if(cljs.core.map_QMARK_.call(null,tx_map)){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tx_map);
return cljs.core.map.call(null,((function (id){
return (function (p__24778){
var vec__24779 = p__24778;
var k = cljs.core.nth.call(null,vec__24779,(0),null);
var v = cljs.core.nth.call(null,vec__24779,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,k,v], null);
});})(id))
,cljs.core.dissoc.call(null,tx_map,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_map], null);
}
});
posh.core.clean_tx = (function posh$core$clean_tx(tx){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,posh.core.split_tx_map,tx));
});
posh.core.transact_BANG_ = (function posh$core$transact_BANG_(conn,tx){
cljs.core.swap_BANG_.call(null,posh.core.transactions_buffer,(function (p1__24780_SHARP_){
return cljs.core.update.call(null,p1__24780_SHARP_,conn,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.concat,posh.core.clean_tx.call(null,tx))));
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
posh.core.do_transaction_BANG_ = (function posh$core$do_transaction_BANG_(conn){
var tx = cljs.core.deref.call(null,posh.core.transactions_buffer).call(null,conn);
if(cljs.core.truth_(tx)){
var _ = posh.core.try_all_before_tx_BANG_.call(null,conn,tx);
var tx__$1 = cljs.core.deref.call(null,posh.core.transactions_buffer).call(null,conn);
cljs.core.swap_BANG_.call(null,posh.core.transactions_buffer,((function (_,tx__$1,tx){
return (function (p1__24781_SHARP_){
return cljs.core.dissoc.call(null,p1__24781_SHARP_,conn);
});})(_,tx__$1,tx))
);

return datascript.core.transact_BANG_.call(null,conn,tx__$1);
} else {
return null;
}
});
posh.core.update_transactions_BANG_ = (function posh$core$update_transactions_BANG_(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__24784){
var vec__24785 = p__24784;
var conn = cljs.core.nth.call(null,vec__24785,(0),null);
return posh.core.do_transaction_BANG_.call(null,conn);
}),cljs.core.deref.call(null,posh.core.transactions_buffer)));
});
posh.core.established_reactions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
posh.core.db_tx = (function posh$core$db_tx(conn,patterns){
var temp__4655__auto__ = cljs.core.deref.call(null,posh.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-tx","db-tx",1357898393),conn,patterns], null));
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
return r;
} else {
var new_reaction = (function (){var saved_db = cljs.core.atom.call(null,datascript.core.db.call(null,conn));
return reagent.ratom.make_reaction.call(null,((function (saved_db,temp__4655__auto__){
return (function (){
if(cljs.core.truth_(posh.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))),patterns,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn))))))){
return cljs.core.reset_BANG_.call(null,saved_db,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))));
} else {
return cljs.core.deref.call(null,saved_db);
}
});})(saved_db,temp__4655__auto__))
);
})();
cljs.core.swap_BANG_.call(null,posh.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-tx","db-tx",1357898393),conn,patterns], null),new_reaction], true, false));

return new_reaction;
}
});
posh.core.deep_find = (function posh$core$deep_find(f,x){
if(cljs.core.coll_QMARK_.call(null,x)){
if(cljs.core.empty_QMARK_.call(null,x)){
return false;
} else {
var or__18418__auto__ = posh$core$deep_find.call(null,f,cljs.core.first.call(null,x));
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return posh$core$deep_find.call(null,f,cljs.core.rest.call(null,x));
}
}
} else {
return f.call(null,x);
}
});
posh.core.deep_map = (function posh$core$deep_map(f,x){
if(cljs.core.map_QMARK_.call(null,x)){
var r = cljs.core.map.call(null,cljs.core.partial.call(null,posh$core$deep_map,f),x);
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,r),cljs.core.map.call(null,cljs.core.second,r));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,posh$core$deep_map,f),x));
} else {
return f.call(null,x);

}
}
});
posh.core.build_pull = (function posh$core$build_pull(db,pull_syntax,entity,vars){
return datascript.core.pull.call(null,db,((cljs.core.empty_QMARK_.call(null,vars))?pull_syntax:posh.core.deep_map.call(null,(function (p1__24786_SHARP_){
var or__18418__auto__ = vars.call(null,p1__24786_SHARP_);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return p1__24786_SHARP_;
}
}),pull_syntax)),(function (){var or__18418__auto__ = vars.call(null,entity);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return entity;
}
})());
});
posh.core.pull_tx = (function posh$core$pull_tx(conn,patterns,pull_pattern,entity_id){
var temp__4655__auto__ = cljs.core.deref.call(null,posh.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-tx","pull-tx",1879853490),conn,patterns,pull_pattern,entity_id], null));
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
return r;
} else {
var patterns__$1 = (function (){var or__18418__auto__ = patterns;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return posh.pull_pattern_gen.pull_pattern_gen.call(null,pull_pattern,entity_id);
}
})();
var new_reaction = (function (){var saved_pull = cljs.core.atom.call(null,((cljs.core.not.call(null,(function (){var or__18418__auto__ = posh.datom_match.query_symbol_QMARK_.call(null,entity_id);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return posh.core.deep_find.call(null,posh.datom_match.query_symbol_QMARK_,pull_pattern);
}
})()))?datascript.core.pull.call(null,datascript.core.db.call(null,conn),pull_pattern,entity_id):null));
return reagent.ratom.make_reaction.call(null,((function (saved_pull,patterns__$1,temp__4655__auto__){
return (function (){
var temp__4655__auto____$1 = posh.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))),patterns__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))));
if(cljs.core.truth_(temp__4655__auto____$1)){
var vars = temp__4655__auto____$1;
var new_pull = posh.core.build_pull.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))),pull_pattern,entity_id,vars);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,saved_pull),new_pull)){
return cljs.core.reset_BANG_.call(null,saved_pull,new_pull);
} else {
return cljs.core.deref.call(null,saved_pull);
}
} else {
return cljs.core.deref.call(null,saved_pull);
}
});})(saved_pull,patterns__$1,temp__4655__auto__))
);
})();
cljs.core.swap_BANG_.call(null,posh.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-tx","pull-tx",1879853490),conn,patterns__$1,pull_pattern,entity_id], null),new_reaction], true, false));

return new_reaction;
}
});
posh.core.pull = (function posh$core$pull(conn,pull_pattern,entity_id){
return posh.core.pull_tx.call(null,conn,posh.pull_pattern_gen.pull_pattern_gen.call(null,pull_pattern,entity_id),pull_pattern,entity_id);
});
posh.core.build_query = (function posh$core$build_query(db,q,args){
return cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,q),cljs.core.cons.call(null,db,(function (){var or__18418__auto__ = args;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
posh.core.q_tx = (function posh$core$q_tx(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24792 = arguments.length;
var i__19488__auto___24793 = (0);
while(true){
if((i__19488__auto___24793 < len__19487__auto___24792)){
args__19494__auto__.push((arguments[i__19488__auto___24793]));

var G__24794 = (i__19488__auto___24793 + (1));
i__19488__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((3) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((3)),(0),null)):null);
return posh.core.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19495__auto__);
});

posh.core.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (conn,patterns,query,args){
var temp__4655__auto__ = cljs.core.deref.call(null,posh.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q-tx","q-tx",1250959568),conn,patterns,query,args], null));
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
return r;
} else {
var patterns__$1 = (function (){var or__18418__auto__ = patterns;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return posh.q_pattern_gen.q_pattern_gen.call(null,query,args);
}
})();
var new_reaction = (function (){var saved_q = cljs.core.atom.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,posh.datom_match.query_symbol_QMARK_,args)))?posh.core.build_query.call(null,datascript.core.db.call(null,conn),query,args):cljs.core.PersistentHashSet.EMPTY));
return reagent.ratom.make_reaction.call(null,((function (saved_q,patterns__$1,temp__4655__auto__){
return (function (){
var temp__4655__auto____$1 = posh.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))),patterns__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))));
if(cljs.core.truth_(temp__4655__auto____$1)){
var vars = temp__4655__auto____$1;
var new_q = posh.core.build_query.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))),query,cljs.core.map.call(null,((function (vars,temp__4655__auto____$1,saved_q,patterns__$1,temp__4655__auto__){
return (function (p1__24787_SHARP_){
var or__18418__auto__ = vars.call(null,p1__24787_SHARP_);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return p1__24787_SHARP_;
}
});})(vars,temp__4655__auto____$1,saved_q,patterns__$1,temp__4655__auto__))
,args));
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,saved_q),new_q)){
return cljs.core.reset_BANG_.call(null,saved_q,new_q);
} else {
return cljs.core.deref.call(null,saved_q);
}
} else {
return cljs.core.deref.call(null,saved_q);
}
});})(saved_q,patterns__$1,temp__4655__auto__))
);
})();
cljs.core.swap_BANG_.call(null,posh.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q-tx","q-tx",1250959568),conn,patterns__$1,query,args], null),new_reaction], true, false));

return new_reaction;
}
});

posh.core.q_tx.cljs$lang$maxFixedArity = (3);

posh.core.q_tx.cljs$lang$applyTo = (function (seq24788){
var G__24789 = cljs.core.first.call(null,seq24788);
var seq24788__$1 = cljs.core.next.call(null,seq24788);
var G__24790 = cljs.core.first.call(null,seq24788__$1);
var seq24788__$2 = cljs.core.next.call(null,seq24788__$1);
var G__24791 = cljs.core.first.call(null,seq24788__$2);
var seq24788__$3 = cljs.core.next.call(null,seq24788__$2);
return posh.core.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__24789,G__24790,G__24791,seq24788__$3);
});
posh.core.q = (function posh$core$q(var_args){
var args__19494__auto__ = [];
var len__19487__auto___24798 = arguments.length;
var i__19488__auto___24799 = (0);
while(true){
if((i__19488__auto___24799 < len__19487__auto___24798)){
args__19494__auto__.push((arguments[i__19488__auto___24799]));

var G__24800 = (i__19488__auto___24799 + (1));
i__19488__auto___24799 = G__24800;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return posh.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

posh.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (conn,query,args){
return cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.q_tx,conn,null,query),args);
});

posh.core.q.cljs$lang$maxFixedArity = (2);

posh.core.q.cljs$lang$applyTo = (function (seq24795){
var G__24796 = cljs.core.first.call(null,seq24795);
var seq24795__$1 = cljs.core.next.call(null,seq24795);
var G__24797 = cljs.core.first.call(null,seq24795__$1);
var seq24795__$2 = cljs.core.next.call(null,seq24795__$1);
return posh.core.q.cljs$core$IFn$_invoke$arity$variadic(G__24796,G__24797,seq24795__$2);
});
posh.core.try_after_tx = (function posh$core$try_after_tx(db_before,db_after,tx_datom,p__24801){
var vec__24803 = p__24801;
var patterns = cljs.core.nth.call(null,vec__24803,(0),null);
var handler_fn = cljs.core.nth.call(null,vec__24803,(1),null);
if(cljs.core.truth_(posh.datom_match.datom_match_QMARK_.call(null,db_before,patterns,tx_datom))){
return handler_fn.call(null,tx_datom,db_after);
} else {
return null;
}
});
posh.core.try_before_tx = (function posh$core$try_before_tx(conn,tx_datom,p__24804){
var vec__24806 = p__24804;
var patterns = cljs.core.nth.call(null,vec__24806,(0),null);
var handler_fn = cljs.core.nth.call(null,vec__24806,(1),null);
if(cljs.core.truth_(posh.datom_match.datom_match_QMARK_.call(null,datascript.core.db.call(null,conn),patterns,tx_datom))){
return handler_fn.call(null,tx_datom,datascript.core.db.call(null,conn));
} else {
return null;
}
});
posh.core.try_all_before_tx_BANG_ = (function posh$core$try_all_before_tx_BANG_(conn,txs){
return cljs.core.concat.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.doall.call(null,(function (){var iter__19198__auto__ = (function posh$core$try_all_before_tx_BANG__$_iter__24813(s__24814){
return (new cljs.core.LazySeq(null,(function (){
var s__24814__$1 = s__24814;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24814__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var tx_datom = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19194__auto__ = ((function (s__24814__$1,tx_datom,xs__5205__auto__,temp__4657__auto__){
return (function posh$core$try_all_before_tx_BANG__$_iter__24813_$_iter__24815(s__24816){
return (new cljs.core.LazySeq(null,((function (s__24814__$1,tx_datom,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__24816__$1 = s__24816;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24816__$1);
if(temp__4657__auto____$1){
var s__24816__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24816__$2)){
var c__19196__auto__ = cljs.core.chunk_first.call(null,s__24816__$2);
var size__19197__auto__ = cljs.core.count.call(null,c__19196__auto__);
var b__24818 = cljs.core.chunk_buffer.call(null,size__19197__auto__);
if((function (){var i__24817 = (0);
while(true){
if((i__24817 < size__19197__auto__)){
var before_tx = cljs.core._nth.call(null,c__19196__auto__,i__24817);
cljs.core.chunk_append.call(null,b__24818,posh.core.try_before_tx.call(null,conn,tx_datom,before_tx));

var G__24819 = (i__24817 + (1));
i__24817 = G__24819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24818),posh$core$try_all_before_tx_BANG__$_iter__24813_$_iter__24815.call(null,cljs.core.chunk_rest.call(null,s__24816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24818),null);
}
} else {
var before_tx = cljs.core.first.call(null,s__24816__$2);
return cljs.core.cons.call(null,posh.core.try_before_tx.call(null,conn,tx_datom,before_tx),posh$core$try_all_before_tx_BANG__$_iter__24813_$_iter__24815.call(null,cljs.core.rest.call(null,s__24816__$2)));
}
} else {
return null;
}
break;
}
});})(s__24814__$1,tx_datom,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__24814__$1,tx_datom,xs__5205__auto__,temp__4657__auto__))
;
var fs__19195__auto__ = cljs.core.seq.call(null,iterys__19194__auto__.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"before-tx","before-tx",1079605614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)))));
if(fs__19195__auto__){
return cljs.core.concat.call(null,fs__19195__auto__,posh$core$try_all_before_tx_BANG__$_iter__24813.call(null,cljs.core.rest.call(null,s__24814__$1)));
} else {
var G__24820 = cljs.core.rest.call(null,s__24814__$1);
s__24814__$1 = G__24820;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19198__auto__.call(null,txs);
})())),txs);
});
posh.core.after_tx_BANG_ = (function posh$core$after_tx_BANG_(conn,patterns,handler_fn){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"after-tx","after-tx",2050070599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterns,handler_fn], null));
});
posh.core.before_tx_BANG_ = (function posh$core$before_tx_BANG_(conn,patterns,handler_fn){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"before-tx","before-tx",1079605614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,posh.core.posh_conns).call(null,conn)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterns,handler_fn], null));
});
setInterval(posh.core.update_transactions_BANG_,(17));

//# sourceMappingURL=core.js.map