// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31101 = cljs.core._EQ_;
var expr__31102 = (function (){var or__18418__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31105){if((e31105 instanceof Error)){
var e = e31105;
return false;
} else {
throw e31105;

}
}})();
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31101.call(null,"true",expr__31102))){
return true;
} else {
if(cljs.core.truth_(pred__31101.call(null,"false",expr__31102))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31102)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31107){if((e31107 instanceof Error)){
var e = e31107;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31107;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19494__auto__ = [];
var len__19487__auto___31109 = arguments.length;
var i__19488__auto___31110 = (0);
while(true){
if((i__19488__auto___31110 < len__19487__auto___31109)){
args__19494__auto__.push((arguments[i__19488__auto___31110]));

var G__31111 = (i__19488__auto___31110 + (1));
i__19488__auto___31110 = G__31111;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31108){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31108));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31112){
var map__31115 = p__31112;
var map__31115__$1 = ((((!((map__31115 == null)))?((((map__31115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31115):map__31115);
var message = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31115__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18418__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18406__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18406__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18406__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22859__auto___31277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___31277,ch){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___31277,ch){
return (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (7))){
var inst_31242 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31248_31278 = state_31246__$1;
(statearr_31248_31278[(2)] = inst_31242);

(statearr_31248_31278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (1))){
var state_31246__$1 = state_31246;
var statearr_31249_31279 = state_31246__$1;
(statearr_31249_31279[(2)] = null);

(statearr_31249_31279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (4))){
var inst_31199 = (state_31246[(7)]);
var inst_31199__$1 = (state_31246[(2)]);
var state_31246__$1 = (function (){var statearr_31250 = state_31246;
(statearr_31250[(7)] = inst_31199__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31199__$1)){
var statearr_31251_31280 = state_31246__$1;
(statearr_31251_31280[(1)] = (5));

} else {
var statearr_31252_31281 = state_31246__$1;
(statearr_31252_31281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (15))){
var inst_31206 = (state_31246[(8)]);
var inst_31221 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31206);
var inst_31222 = cljs.core.first.call(null,inst_31221);
var inst_31223 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31222);
var inst_31224 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31223)].join('');
var inst_31225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31224);
var state_31246__$1 = state_31246;
var statearr_31253_31282 = state_31246__$1;
(statearr_31253_31282[(2)] = inst_31225);

(statearr_31253_31282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (13))){
var inst_31230 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31254_31283 = state_31246__$1;
(statearr_31254_31283[(2)] = inst_31230);

(statearr_31254_31283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (6))){
var state_31246__$1 = state_31246;
var statearr_31255_31284 = state_31246__$1;
(statearr_31255_31284[(2)] = null);

(statearr_31255_31284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (17))){
var inst_31228 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31256_31285 = state_31246__$1;
(statearr_31256_31285[(2)] = inst_31228);

(statearr_31256_31285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (3))){
var inst_31244 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31246__$1,inst_31244);
} else {
if((state_val_31247 === (12))){
var inst_31205 = (state_31246[(9)]);
var inst_31219 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31205,opts);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31219)){
var statearr_31257_31286 = state_31246__$1;
(statearr_31257_31286[(1)] = (15));

} else {
var statearr_31258_31287 = state_31246__$1;
(statearr_31258_31287[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (2))){
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31246__$1,(4),ch);
} else {
if((state_val_31247 === (11))){
var inst_31206 = (state_31246[(8)]);
var inst_31211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31212 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31206);
var inst_31213 = cljs.core.async.timeout.call(null,(1000));
var inst_31214 = [inst_31212,inst_31213];
var inst_31215 = (new cljs.core.PersistentVector(null,2,(5),inst_31211,inst_31214,null));
var state_31246__$1 = state_31246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31246__$1,(14),inst_31215);
} else {
if((state_val_31247 === (9))){
var inst_31206 = (state_31246[(8)]);
var inst_31232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31233 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31206);
var inst_31234 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31233);
var inst_31235 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31234)].join('');
var inst_31236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31235);
var state_31246__$1 = (function (){var statearr_31259 = state_31246;
(statearr_31259[(10)] = inst_31232);

return statearr_31259;
})();
var statearr_31260_31288 = state_31246__$1;
(statearr_31260_31288[(2)] = inst_31236);

(statearr_31260_31288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (5))){
var inst_31199 = (state_31246[(7)]);
var inst_31201 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31202 = (new cljs.core.PersistentArrayMap(null,2,inst_31201,null));
var inst_31203 = (new cljs.core.PersistentHashSet(null,inst_31202,null));
var inst_31204 = figwheel.client.focus_msgs.call(null,inst_31203,inst_31199);
var inst_31205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31204);
var inst_31206 = cljs.core.first.call(null,inst_31204);
var inst_31207 = figwheel.client.autoload_QMARK_.call(null);
var state_31246__$1 = (function (){var statearr_31261 = state_31246;
(statearr_31261[(8)] = inst_31206);

(statearr_31261[(9)] = inst_31205);

return statearr_31261;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31262_31289 = state_31246__$1;
(statearr_31262_31289[(1)] = (8));

} else {
var statearr_31263_31290 = state_31246__$1;
(statearr_31263_31290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (14))){
var inst_31217 = (state_31246[(2)]);
var state_31246__$1 = state_31246;
var statearr_31264_31291 = state_31246__$1;
(statearr_31264_31291[(2)] = inst_31217);

(statearr_31264_31291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (16))){
var state_31246__$1 = state_31246;
var statearr_31265_31292 = state_31246__$1;
(statearr_31265_31292[(2)] = null);

(statearr_31265_31292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (10))){
var inst_31238 = (state_31246[(2)]);
var state_31246__$1 = (function (){var statearr_31266 = state_31246;
(statearr_31266[(11)] = inst_31238);

return statearr_31266;
})();
var statearr_31267_31293 = state_31246__$1;
(statearr_31267_31293[(2)] = null);

(statearr_31267_31293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31247 === (8))){
var inst_31205 = (state_31246[(9)]);
var inst_31209 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31205,opts);
var state_31246__$1 = state_31246;
if(cljs.core.truth_(inst_31209)){
var statearr_31268_31294 = state_31246__$1;
(statearr_31268_31294[(1)] = (11));

} else {
var statearr_31269_31295 = state_31246__$1;
(statearr_31269_31295[(1)] = (12));

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
});})(c__22859__auto___31277,ch))
;
return ((function (switch__22838__auto__,c__22859__auto___31277,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____0 = (function (){
var statearr_31273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31273[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__);

(statearr_31273[(1)] = (1));

return statearr_31273;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____1 = (function (state_31246){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_31246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e31274){if((e31274 instanceof Object)){
var ex__22842__auto__ = e31274;
var statearr_31275_31296 = state_31246;
(statearr_31275_31296[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31297 = state_31246;
state_31246 = G__31297;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22839__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___31277,ch))
})();
var state__22861__auto__ = (function (){var statearr_31276 = f__22860__auto__.call(null);
(statearr_31276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___31277);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___31277,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31298_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31298_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31305 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31305){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31303 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31304 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31304;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31303;
}}catch (e31302){if((e31302 instanceof Error)){
var e = e31302;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31305], null));
} else {
var e = e31302;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31305))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31306){
var map__31313 = p__31306;
var map__31313__$1 = ((((!((map__31313 == null)))?((((map__31313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31313):map__31313);
var opts = map__31313__$1;
var build_id = cljs.core.get.call(null,map__31313__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31313,map__31313__$1,opts,build_id){
return (function (p__31315){
var vec__31316 = p__31315;
var map__31317 = cljs.core.nth.call(null,vec__31316,(0),null);
var map__31317__$1 = ((((!((map__31317 == null)))?((((map__31317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);
var msg = map__31317__$1;
var msg_name = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31316,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31316,map__31317,map__31317__$1,msg,msg_name,_,map__31313,map__31313__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31316,map__31317,map__31317__$1,msg,msg_name,_,map__31313,map__31313__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31313,map__31313__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31323){
var vec__31324 = p__31323;
var map__31325 = cljs.core.nth.call(null,vec__31324,(0),null);
var map__31325__$1 = ((((!((map__31325 == null)))?((((map__31325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31325):map__31325);
var msg = map__31325__$1;
var msg_name = cljs.core.get.call(null,map__31325__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31324,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31327){
var map__31337 = p__31327;
var map__31337__$1 = ((((!((map__31337 == null)))?((((map__31337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31337):map__31337);
var on_compile_warning = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31337__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31337,map__31337__$1,on_compile_warning,on_compile_fail){
return (function (p__31339){
var vec__31340 = p__31339;
var map__31341 = cljs.core.nth.call(null,vec__31340,(0),null);
var map__31341__$1 = ((((!((map__31341 == null)))?((((map__31341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31341):map__31341);
var msg = map__31341__$1;
var msg_name = cljs.core.get.call(null,map__31341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31340,(1));
var pred__31343 = cljs.core._EQ_;
var expr__31344 = msg_name;
if(cljs.core.truth_(pred__31343.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31344))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31343.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31344))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31337,map__31337__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__,msg_hist,msg_names,msg){
return (function (state_31560){
var state_val_31561 = (state_31560[(1)]);
if((state_val_31561 === (7))){
var inst_31484 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31484)){
var statearr_31562_31608 = state_31560__$1;
(statearr_31562_31608[(1)] = (8));

} else {
var statearr_31563_31609 = state_31560__$1;
(statearr_31563_31609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (20))){
var inst_31554 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31564_31610 = state_31560__$1;
(statearr_31564_31610[(2)] = inst_31554);

(statearr_31564_31610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (27))){
var inst_31550 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31565_31611 = state_31560__$1;
(statearr_31565_31611[(2)] = inst_31550);

(statearr_31565_31611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (1))){
var inst_31477 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31477)){
var statearr_31566_31612 = state_31560__$1;
(statearr_31566_31612[(1)] = (2));

} else {
var statearr_31567_31613 = state_31560__$1;
(statearr_31567_31613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (24))){
var inst_31552 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31568_31614 = state_31560__$1;
(statearr_31568_31614[(2)] = inst_31552);

(statearr_31568_31614[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (4))){
var inst_31558 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31560__$1,inst_31558);
} else {
if((state_val_31561 === (15))){
var inst_31556 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31569_31615 = state_31560__$1;
(statearr_31569_31615[(2)] = inst_31556);

(statearr_31569_31615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (21))){
var inst_31515 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31570_31616 = state_31560__$1;
(statearr_31570_31616[(2)] = inst_31515);

(statearr_31570_31616[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (31))){
var inst_31539 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31539)){
var statearr_31571_31617 = state_31560__$1;
(statearr_31571_31617[(1)] = (34));

} else {
var statearr_31572_31618 = state_31560__$1;
(statearr_31572_31618[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (32))){
var inst_31548 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31573_31619 = state_31560__$1;
(statearr_31573_31619[(2)] = inst_31548);

(statearr_31573_31619[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (33))){
var inst_31537 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31574_31620 = state_31560__$1;
(statearr_31574_31620[(2)] = inst_31537);

(statearr_31574_31620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (13))){
var inst_31498 = figwheel.client.heads_up.clear.call(null);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(16),inst_31498);
} else {
if((state_val_31561 === (22))){
var inst_31519 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31520 = figwheel.client.heads_up.append_message.call(null,inst_31519);
var state_31560__$1 = state_31560;
var statearr_31575_31621 = state_31560__$1;
(statearr_31575_31621[(2)] = inst_31520);

(statearr_31575_31621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (36))){
var inst_31546 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31576_31622 = state_31560__$1;
(statearr_31576_31622[(2)] = inst_31546);

(statearr_31576_31622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (29))){
var inst_31530 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31577_31623 = state_31560__$1;
(statearr_31577_31623[(2)] = inst_31530);

(statearr_31577_31623[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (6))){
var inst_31479 = (state_31560[(7)]);
var state_31560__$1 = state_31560;
var statearr_31578_31624 = state_31560__$1;
(statearr_31578_31624[(2)] = inst_31479);

(statearr_31578_31624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (28))){
var inst_31526 = (state_31560[(2)]);
var inst_31527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31528 = figwheel.client.heads_up.display_warning.call(null,inst_31527);
var state_31560__$1 = (function (){var statearr_31579 = state_31560;
(statearr_31579[(8)] = inst_31526);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(29),inst_31528);
} else {
if((state_val_31561 === (25))){
var inst_31524 = figwheel.client.heads_up.clear.call(null);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(28),inst_31524);
} else {
if((state_val_31561 === (34))){
var inst_31541 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(37),inst_31541);
} else {
if((state_val_31561 === (17))){
var inst_31506 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31580_31625 = state_31560__$1;
(statearr_31580_31625[(2)] = inst_31506);

(statearr_31580_31625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (3))){
var inst_31496 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31496)){
var statearr_31581_31626 = state_31560__$1;
(statearr_31581_31626[(1)] = (13));

} else {
var statearr_31582_31627 = state_31560__$1;
(statearr_31582_31627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (12))){
var inst_31492 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31583_31628 = state_31560__$1;
(statearr_31583_31628[(2)] = inst_31492);

(statearr_31583_31628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (2))){
var inst_31479 = (state_31560[(7)]);
var inst_31479__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31560__$1 = (function (){var statearr_31584 = state_31560;
(statearr_31584[(7)] = inst_31479__$1);

return statearr_31584;
})();
if(cljs.core.truth_(inst_31479__$1)){
var statearr_31585_31629 = state_31560__$1;
(statearr_31585_31629[(1)] = (5));

} else {
var statearr_31586_31630 = state_31560__$1;
(statearr_31586_31630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (23))){
var inst_31522 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31522)){
var statearr_31587_31631 = state_31560__$1;
(statearr_31587_31631[(1)] = (25));

} else {
var statearr_31588_31632 = state_31560__$1;
(statearr_31588_31632[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (35))){
var state_31560__$1 = state_31560;
var statearr_31589_31633 = state_31560__$1;
(statearr_31589_31633[(2)] = null);

(statearr_31589_31633[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (19))){
var inst_31517 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31517)){
var statearr_31590_31634 = state_31560__$1;
(statearr_31590_31634[(1)] = (22));

} else {
var statearr_31591_31635 = state_31560__$1;
(statearr_31591_31635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (11))){
var inst_31488 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31592_31636 = state_31560__$1;
(statearr_31592_31636[(2)] = inst_31488);

(statearr_31592_31636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (9))){
var inst_31490 = figwheel.client.heads_up.clear.call(null);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(12),inst_31490);
} else {
if((state_val_31561 === (5))){
var inst_31481 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31560__$1 = state_31560;
var statearr_31593_31637 = state_31560__$1;
(statearr_31593_31637[(2)] = inst_31481);

(statearr_31593_31637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (14))){
var inst_31508 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31508)){
var statearr_31594_31638 = state_31560__$1;
(statearr_31594_31638[(1)] = (18));

} else {
var statearr_31595_31639 = state_31560__$1;
(statearr_31595_31639[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (26))){
var inst_31532 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31532)){
var statearr_31596_31640 = state_31560__$1;
(statearr_31596_31640[(1)] = (30));

} else {
var statearr_31597_31641 = state_31560__$1;
(statearr_31597_31641[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (16))){
var inst_31500 = (state_31560[(2)]);
var inst_31501 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31502 = figwheel.client.format_messages.call(null,inst_31501);
var inst_31503 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31504 = figwheel.client.heads_up.display_error.call(null,inst_31502,inst_31503);
var state_31560__$1 = (function (){var statearr_31598 = state_31560;
(statearr_31598[(9)] = inst_31500);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(17),inst_31504);
} else {
if((state_val_31561 === (30))){
var inst_31534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31535 = figwheel.client.heads_up.display_warning.call(null,inst_31534);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(33),inst_31535);
} else {
if((state_val_31561 === (10))){
var inst_31494 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31599_31642 = state_31560__$1;
(statearr_31599_31642[(2)] = inst_31494);

(statearr_31599_31642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (18))){
var inst_31510 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31511 = figwheel.client.format_messages.call(null,inst_31510);
var inst_31512 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31513 = figwheel.client.heads_up.display_error.call(null,inst_31511,inst_31512);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(21),inst_31513);
} else {
if((state_val_31561 === (37))){
var inst_31543 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31600_31643 = state_31560__$1;
(statearr_31600_31643[(2)] = inst_31543);

(statearr_31600_31643[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (8))){
var inst_31486 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31560__$1,(11),inst_31486);
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
});})(c__22859__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22838__auto__,c__22859__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____0 = (function (){
var statearr_31604 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31604[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__);

(statearr_31604[(1)] = (1));

return statearr_31604;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____1 = (function (state_31560){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_31560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e31605){if((e31605 instanceof Object)){
var ex__22842__auto__ = e31605;
var statearr_31606_31644 = state_31560;
(statearr_31606_31644[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31645 = state_31560;
state_31560 = G__31645;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__ = function(state_31560){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____1.call(this,state_31560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__,msg_hist,msg_names,msg))
})();
var state__22861__auto__ = (function (){var statearr_31607 = f__22860__auto__.call(null);
(statearr_31607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_31607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__,msg_hist,msg_names,msg))
);

return c__22859__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22859__auto___31708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto___31708,ch){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto___31708,ch){
return (function (state_31691){
var state_val_31692 = (state_31691[(1)]);
if((state_val_31692 === (1))){
var state_31691__$1 = state_31691;
var statearr_31693_31709 = state_31691__$1;
(statearr_31693_31709[(2)] = null);

(statearr_31693_31709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (2))){
var state_31691__$1 = state_31691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31691__$1,(4),ch);
} else {
if((state_val_31692 === (3))){
var inst_31689 = (state_31691[(2)]);
var state_31691__$1 = state_31691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31691__$1,inst_31689);
} else {
if((state_val_31692 === (4))){
var inst_31679 = (state_31691[(7)]);
var inst_31679__$1 = (state_31691[(2)]);
var state_31691__$1 = (function (){var statearr_31694 = state_31691;
(statearr_31694[(7)] = inst_31679__$1);

return statearr_31694;
})();
if(cljs.core.truth_(inst_31679__$1)){
var statearr_31695_31710 = state_31691__$1;
(statearr_31695_31710[(1)] = (5));

} else {
var statearr_31696_31711 = state_31691__$1;
(statearr_31696_31711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (5))){
var inst_31679 = (state_31691[(7)]);
var inst_31681 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31679);
var state_31691__$1 = state_31691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31691__$1,(8),inst_31681);
} else {
if((state_val_31692 === (6))){
var state_31691__$1 = state_31691;
var statearr_31697_31712 = state_31691__$1;
(statearr_31697_31712[(2)] = null);

(statearr_31697_31712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (7))){
var inst_31687 = (state_31691[(2)]);
var state_31691__$1 = state_31691;
var statearr_31698_31713 = state_31691__$1;
(statearr_31698_31713[(2)] = inst_31687);

(statearr_31698_31713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31692 === (8))){
var inst_31683 = (state_31691[(2)]);
var state_31691__$1 = (function (){var statearr_31699 = state_31691;
(statearr_31699[(8)] = inst_31683);

return statearr_31699;
})();
var statearr_31700_31714 = state_31691__$1;
(statearr_31700_31714[(2)] = null);

(statearr_31700_31714[(1)] = (2));


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
});})(c__22859__auto___31708,ch))
;
return ((function (switch__22838__auto__,c__22859__auto___31708,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22839__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22839__auto____0 = (function (){
var statearr_31704 = [null,null,null,null,null,null,null,null,null];
(statearr_31704[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22839__auto__);

(statearr_31704[(1)] = (1));

return statearr_31704;
});
var figwheel$client$heads_up_plugin_$_state_machine__22839__auto____1 = (function (state_31691){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_31691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e31705){if((e31705 instanceof Object)){
var ex__22842__auto__ = e31705;
var statearr_31706_31715 = state_31691;
(statearr_31706_31715[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31716 = state_31691;
state_31691 = G__31716;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22839__auto__ = function(state_31691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22839__auto____1.call(this,state_31691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22839__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22839__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto___31708,ch))
})();
var state__22861__auto__ = (function (){var statearr_31707 = f__22860__auto__.call(null);
(statearr_31707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto___31708);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto___31708,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22859__auto__){
return (function (){
var f__22860__auto__ = (function (){var switch__22838__auto__ = ((function (c__22859__auto__){
return (function (state_31737){
var state_val_31738 = (state_31737[(1)]);
if((state_val_31738 === (1))){
var inst_31732 = cljs.core.async.timeout.call(null,(3000));
var state_31737__$1 = state_31737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31737__$1,(2),inst_31732);
} else {
if((state_val_31738 === (2))){
var inst_31734 = (state_31737[(2)]);
var inst_31735 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31737__$1 = (function (){var statearr_31739 = state_31737;
(statearr_31739[(7)] = inst_31734);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31737__$1,inst_31735);
} else {
return null;
}
}
});})(c__22859__auto__))
;
return ((function (switch__22838__auto__,c__22859__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____0 = (function (){
var statearr_31743 = [null,null,null,null,null,null,null,null];
(statearr_31743[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__);

(statearr_31743[(1)] = (1));

return statearr_31743;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____1 = (function (state_31737){
while(true){
var ret_value__22840__auto__ = (function (){try{while(true){
var result__22841__auto__ = switch__22838__auto__.call(null,state_31737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22841__auto__;
}
break;
}
}catch (e31744){if((e31744 instanceof Object)){
var ex__22842__auto__ = e31744;
var statearr_31745_31747 = state_31737;
(statearr_31745_31747[(5)] = ex__22842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31748 = state_31737;
state_31737 = G__31748;
continue;
} else {
return ret_value__22840__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__ = function(state_31737){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____1.call(this,state_31737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22839__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22839__auto__;
})()
;})(switch__22838__auto__,c__22859__auto__))
})();
var state__22861__auto__ = (function (){var statearr_31746 = f__22860__auto__.call(null);
(statearr_31746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22859__auto__);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22861__auto__);
});})(c__22859__auto__))
);

return c__22859__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31749){
var map__31756 = p__31749;
var map__31756__$1 = ((((!((map__31756 == null)))?((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var ed = map__31756__$1;
var formatted_exception = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31758_31762 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31759_31763 = null;
var count__31760_31764 = (0);
var i__31761_31765 = (0);
while(true){
if((i__31761_31765 < count__31760_31764)){
var msg_31766 = cljs.core._nth.call(null,chunk__31759_31763,i__31761_31765);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31766);

var G__31767 = seq__31758_31762;
var G__31768 = chunk__31759_31763;
var G__31769 = count__31760_31764;
var G__31770 = (i__31761_31765 + (1));
seq__31758_31762 = G__31767;
chunk__31759_31763 = G__31768;
count__31760_31764 = G__31769;
i__31761_31765 = G__31770;
continue;
} else {
var temp__4657__auto___31771 = cljs.core.seq.call(null,seq__31758_31762);
if(temp__4657__auto___31771){
var seq__31758_31772__$1 = temp__4657__auto___31771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31758_31772__$1)){
var c__19229__auto___31773 = cljs.core.chunk_first.call(null,seq__31758_31772__$1);
var G__31774 = cljs.core.chunk_rest.call(null,seq__31758_31772__$1);
var G__31775 = c__19229__auto___31773;
var G__31776 = cljs.core.count.call(null,c__19229__auto___31773);
var G__31777 = (0);
seq__31758_31762 = G__31774;
chunk__31759_31763 = G__31775;
count__31760_31764 = G__31776;
i__31761_31765 = G__31777;
continue;
} else {
var msg_31778 = cljs.core.first.call(null,seq__31758_31772__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31778);

var G__31779 = cljs.core.next.call(null,seq__31758_31772__$1);
var G__31780 = null;
var G__31781 = (0);
var G__31782 = (0);
seq__31758_31762 = G__31779;
chunk__31759_31763 = G__31780;
count__31760_31764 = G__31781;
i__31761_31765 = G__31782;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31783){
var map__31786 = p__31783;
var map__31786__$1 = ((((!((map__31786 == null)))?((((map__31786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31786):map__31786);
var w = map__31786__$1;
var message = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18406__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18406__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18406__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31794 = cljs.core.seq.call(null,plugins);
var chunk__31795 = null;
var count__31796 = (0);
var i__31797 = (0);
while(true){
if((i__31797 < count__31796)){
var vec__31798 = cljs.core._nth.call(null,chunk__31795,i__31797);
var k = cljs.core.nth.call(null,vec__31798,(0),null);
var plugin = cljs.core.nth.call(null,vec__31798,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31800 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31794,chunk__31795,count__31796,i__31797,pl_31800,vec__31798,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31800.call(null,msg_hist);
});})(seq__31794,chunk__31795,count__31796,i__31797,pl_31800,vec__31798,k,plugin))
);
} else {
}

var G__31801 = seq__31794;
var G__31802 = chunk__31795;
var G__31803 = count__31796;
var G__31804 = (i__31797 + (1));
seq__31794 = G__31801;
chunk__31795 = G__31802;
count__31796 = G__31803;
i__31797 = G__31804;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31794);
if(temp__4657__auto__){
var seq__31794__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31794__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__31794__$1);
var G__31805 = cljs.core.chunk_rest.call(null,seq__31794__$1);
var G__31806 = c__19229__auto__;
var G__31807 = cljs.core.count.call(null,c__19229__auto__);
var G__31808 = (0);
seq__31794 = G__31805;
chunk__31795 = G__31806;
count__31796 = G__31807;
i__31797 = G__31808;
continue;
} else {
var vec__31799 = cljs.core.first.call(null,seq__31794__$1);
var k = cljs.core.nth.call(null,vec__31799,(0),null);
var plugin = cljs.core.nth.call(null,vec__31799,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31809 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31794,chunk__31795,count__31796,i__31797,pl_31809,vec__31799,k,plugin,seq__31794__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31809.call(null,msg_hist);
});})(seq__31794,chunk__31795,count__31796,i__31797,pl_31809,vec__31799,k,plugin,seq__31794__$1,temp__4657__auto__))
);
} else {
}

var G__31810 = cljs.core.next.call(null,seq__31794__$1);
var G__31811 = null;
var G__31812 = (0);
var G__31813 = (0);
seq__31794 = G__31810;
chunk__31795 = G__31811;
count__31796 = G__31812;
i__31797 = G__31813;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31814 = [];
var len__19487__auto___31817 = arguments.length;
var i__19488__auto___31818 = (0);
while(true){
if((i__19488__auto___31818 < len__19487__auto___31817)){
args31814.push((arguments[i__19488__auto___31818]));

var G__31819 = (i__19488__auto___31818 + (1));
i__19488__auto___31818 = G__31819;
continue;
} else {
}
break;
}

var G__31816 = args31814.length;
switch (G__31816) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31814.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19494__auto__ = [];
var len__19487__auto___31825 = arguments.length;
var i__19488__auto___31826 = (0);
while(true){
if((i__19488__auto___31826 < len__19487__auto___31825)){
args__19494__auto__.push((arguments[i__19488__auto___31826]));

var G__31827 = (i__19488__auto___31826 + (1));
i__19488__auto___31826 = G__31827;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31822){
var map__31823 = p__31822;
var map__31823__$1 = ((((!((map__31823 == null)))?((((map__31823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31823):map__31823);
var opts = map__31823__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31821){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31821));
});

//# sourceMappingURL=client.js.map