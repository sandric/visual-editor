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
var pred__31096 = cljs.core._EQ_;
var expr__31097 = (function (){var or__18418__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31100){if((e31100 instanceof Error)){
var e = e31100;
return false;
} else {
throw e31100;

}
}})();
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31096.call(null,"true",expr__31097))){
return true;
} else {
if(cljs.core.truth_(pred__31096.call(null,"false",expr__31097))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31097)].join('')));
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
}catch (e31102){if((e31102 instanceof Error)){
var e = e31102;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31102;

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
var len__19487__auto___31104 = arguments.length;
var i__19488__auto___31105 = (0);
while(true){
if((i__19488__auto___31105 < len__19487__auto___31104)){
args__19494__auto__.push((arguments[i__19488__auto___31105]));

var G__31106 = (i__19488__auto___31105 + (1));
i__19488__auto___31105 = G__31106;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31103){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31103));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31107){
var map__31110 = p__31107;
var map__31110__$1 = ((((!((map__31110 == null)))?((((map__31110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31110):map__31110);
var message = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26935__auto___31272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___31272,ch){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___31272,ch){
return (function (state_31241){
var state_val_31242 = (state_31241[(1)]);
if((state_val_31242 === (7))){
var inst_31237 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31243_31273 = state_31241__$1;
(statearr_31243_31273[(2)] = inst_31237);

(statearr_31243_31273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (1))){
var state_31241__$1 = state_31241;
var statearr_31244_31274 = state_31241__$1;
(statearr_31244_31274[(2)] = null);

(statearr_31244_31274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (4))){
var inst_31194 = (state_31241[(7)]);
var inst_31194__$1 = (state_31241[(2)]);
var state_31241__$1 = (function (){var statearr_31245 = state_31241;
(statearr_31245[(7)] = inst_31194__$1);

return statearr_31245;
})();
if(cljs.core.truth_(inst_31194__$1)){
var statearr_31246_31275 = state_31241__$1;
(statearr_31246_31275[(1)] = (5));

} else {
var statearr_31247_31276 = state_31241__$1;
(statearr_31247_31276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (15))){
var inst_31201 = (state_31241[(8)]);
var inst_31216 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31201);
var inst_31217 = cljs.core.first.call(null,inst_31216);
var inst_31218 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31217);
var inst_31219 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31218)].join('');
var inst_31220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31219);
var state_31241__$1 = state_31241;
var statearr_31248_31277 = state_31241__$1;
(statearr_31248_31277[(2)] = inst_31220);

(statearr_31248_31277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (13))){
var inst_31225 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31249_31278 = state_31241__$1;
(statearr_31249_31278[(2)] = inst_31225);

(statearr_31249_31278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (6))){
var state_31241__$1 = state_31241;
var statearr_31250_31279 = state_31241__$1;
(statearr_31250_31279[(2)] = null);

(statearr_31250_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (17))){
var inst_31223 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31251_31280 = state_31241__$1;
(statearr_31251_31280[(2)] = inst_31223);

(statearr_31251_31280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (3))){
var inst_31239 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31241__$1,inst_31239);
} else {
if((state_val_31242 === (12))){
var inst_31200 = (state_31241[(9)]);
var inst_31214 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31200,opts);
var state_31241__$1 = state_31241;
if(cljs.core.truth_(inst_31214)){
var statearr_31252_31281 = state_31241__$1;
(statearr_31252_31281[(1)] = (15));

} else {
var statearr_31253_31282 = state_31241__$1;
(statearr_31253_31282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (2))){
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31241__$1,(4),ch);
} else {
if((state_val_31242 === (11))){
var inst_31201 = (state_31241[(8)]);
var inst_31206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31207 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31201);
var inst_31208 = cljs.core.async.timeout.call(null,(1000));
var inst_31209 = [inst_31207,inst_31208];
var inst_31210 = (new cljs.core.PersistentVector(null,2,(5),inst_31206,inst_31209,null));
var state_31241__$1 = state_31241;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31241__$1,(14),inst_31210);
} else {
if((state_val_31242 === (9))){
var inst_31201 = (state_31241[(8)]);
var inst_31227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31228 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31201);
var inst_31229 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31228);
var inst_31230 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31229)].join('');
var inst_31231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31230);
var state_31241__$1 = (function (){var statearr_31254 = state_31241;
(statearr_31254[(10)] = inst_31227);

return statearr_31254;
})();
var statearr_31255_31283 = state_31241__$1;
(statearr_31255_31283[(2)] = inst_31231);

(statearr_31255_31283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (5))){
var inst_31194 = (state_31241[(7)]);
var inst_31196 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31197 = (new cljs.core.PersistentArrayMap(null,2,inst_31196,null));
var inst_31198 = (new cljs.core.PersistentHashSet(null,inst_31197,null));
var inst_31199 = figwheel.client.focus_msgs.call(null,inst_31198,inst_31194);
var inst_31200 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31199);
var inst_31201 = cljs.core.first.call(null,inst_31199);
var inst_31202 = figwheel.client.autoload_QMARK_.call(null);
var state_31241__$1 = (function (){var statearr_31256 = state_31241;
(statearr_31256[(9)] = inst_31200);

(statearr_31256[(8)] = inst_31201);

return statearr_31256;
})();
if(cljs.core.truth_(inst_31202)){
var statearr_31257_31284 = state_31241__$1;
(statearr_31257_31284[(1)] = (8));

} else {
var statearr_31258_31285 = state_31241__$1;
(statearr_31258_31285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (14))){
var inst_31212 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31259_31286 = state_31241__$1;
(statearr_31259_31286[(2)] = inst_31212);

(statearr_31259_31286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (16))){
var state_31241__$1 = state_31241;
var statearr_31260_31287 = state_31241__$1;
(statearr_31260_31287[(2)] = null);

(statearr_31260_31287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (10))){
var inst_31233 = (state_31241[(2)]);
var state_31241__$1 = (function (){var statearr_31261 = state_31241;
(statearr_31261[(11)] = inst_31233);

return statearr_31261;
})();
var statearr_31262_31288 = state_31241__$1;
(statearr_31262_31288[(2)] = null);

(statearr_31262_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (8))){
var inst_31200 = (state_31241[(9)]);
var inst_31204 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31200,opts);
var state_31241__$1 = state_31241;
if(cljs.core.truth_(inst_31204)){
var statearr_31263_31289 = state_31241__$1;
(statearr_31263_31289[(1)] = (11));

} else {
var statearr_31264_31290 = state_31241__$1;
(statearr_31264_31290[(1)] = (12));

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
});})(c__26935__auto___31272,ch))
;
return ((function (switch__26823__auto__,c__26935__auto___31272,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____1 = (function (state_31241){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31269){if((e31269 instanceof Object)){
var ex__26827__auto__ = e31269;
var statearr_31270_31291 = state_31241;
(statearr_31270_31291[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31292 = state_31241;
state_31241 = G__31292;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__ = function(state_31241){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____1.call(this,state_31241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26824__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___31272,ch))
})();
var state__26937__auto__ = (function (){var statearr_31271 = f__26936__auto__.call(null);
(statearr_31271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___31272);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___31272,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31293_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31293_SHARP_));
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
var base_path_31300 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31300){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31299 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31299;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31298;
}}catch (e31297){if((e31297 instanceof Error)){
var e = e31297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31300], null));
} else {
var e = e31297;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31300))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31301){
var map__31308 = p__31301;
var map__31308__$1 = ((((!((map__31308 == null)))?((((map__31308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31308):map__31308);
var opts = map__31308__$1;
var build_id = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31308,map__31308__$1,opts,build_id){
return (function (p__31310){
var vec__31311 = p__31310;
var map__31312 = cljs.core.nth.call(null,vec__31311,(0),null);
var map__31312__$1 = ((((!((map__31312 == null)))?((((map__31312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31312):map__31312);
var msg = map__31312__$1;
var msg_name = cljs.core.get.call(null,map__31312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31311,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31311,map__31312,map__31312__$1,msg,msg_name,_,map__31308,map__31308__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31311,map__31312,map__31312__$1,msg,msg_name,_,map__31308,map__31308__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31308,map__31308__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31318){
var vec__31319 = p__31318;
var map__31320 = cljs.core.nth.call(null,vec__31319,(0),null);
var map__31320__$1 = ((((!((map__31320 == null)))?((((map__31320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31320):map__31320);
var msg = map__31320__$1;
var msg_name = cljs.core.get.call(null,map__31320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31319,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31322){
var map__31332 = p__31322;
var map__31332__$1 = ((((!((map__31332 == null)))?((((map__31332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31332):map__31332);
var on_compile_warning = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31332__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31332,map__31332__$1,on_compile_warning,on_compile_fail){
return (function (p__31334){
var vec__31335 = p__31334;
var map__31336 = cljs.core.nth.call(null,vec__31335,(0),null);
var map__31336__$1 = ((((!((map__31336 == null)))?((((map__31336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31336):map__31336);
var msg = map__31336__$1;
var msg_name = cljs.core.get.call(null,map__31336__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31335,(1));
var pred__31338 = cljs.core._EQ_;
var expr__31339 = msg_name;
if(cljs.core.truth_(pred__31338.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31339))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31338.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31339))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31332,map__31332__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__,msg_hist,msg_names,msg){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (7))){
var inst_31479 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31479)){
var statearr_31557_31603 = state_31555__$1;
(statearr_31557_31603[(1)] = (8));

} else {
var statearr_31558_31604 = state_31555__$1;
(statearr_31558_31604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (20))){
var inst_31549 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31559_31605 = state_31555__$1;
(statearr_31559_31605[(2)] = inst_31549);

(statearr_31559_31605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (27))){
var inst_31545 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31560_31606 = state_31555__$1;
(statearr_31560_31606[(2)] = inst_31545);

(statearr_31560_31606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (1))){
var inst_31472 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31472)){
var statearr_31561_31607 = state_31555__$1;
(statearr_31561_31607[(1)] = (2));

} else {
var statearr_31562_31608 = state_31555__$1;
(statearr_31562_31608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (24))){
var inst_31547 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31563_31609 = state_31555__$1;
(statearr_31563_31609[(2)] = inst_31547);

(statearr_31563_31609[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (4))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (15))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31564_31610 = state_31555__$1;
(statearr_31564_31610[(2)] = inst_31551);

(statearr_31564_31610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (21))){
var inst_31510 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31565_31611 = state_31555__$1;
(statearr_31565_31611[(2)] = inst_31510);

(statearr_31565_31611[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (31))){
var inst_31534 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31534)){
var statearr_31566_31612 = state_31555__$1;
(statearr_31566_31612[(1)] = (34));

} else {
var statearr_31567_31613 = state_31555__$1;
(statearr_31567_31613[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (32))){
var inst_31543 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31568_31614 = state_31555__$1;
(statearr_31568_31614[(2)] = inst_31543);

(statearr_31568_31614[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (33))){
var inst_31532 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31569_31615 = state_31555__$1;
(statearr_31569_31615[(2)] = inst_31532);

(statearr_31569_31615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (13))){
var inst_31493 = figwheel.client.heads_up.clear.call(null);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(16),inst_31493);
} else {
if((state_val_31556 === (22))){
var inst_31514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31515 = figwheel.client.heads_up.append_message.call(null,inst_31514);
var state_31555__$1 = state_31555;
var statearr_31570_31616 = state_31555__$1;
(statearr_31570_31616[(2)] = inst_31515);

(statearr_31570_31616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (36))){
var inst_31541 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31571_31617 = state_31555__$1;
(statearr_31571_31617[(2)] = inst_31541);

(statearr_31571_31617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (29))){
var inst_31525 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31572_31618 = state_31555__$1;
(statearr_31572_31618[(2)] = inst_31525);

(statearr_31572_31618[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (6))){
var inst_31474 = (state_31555[(7)]);
var state_31555__$1 = state_31555;
var statearr_31573_31619 = state_31555__$1;
(statearr_31573_31619[(2)] = inst_31474);

(statearr_31573_31619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (28))){
var inst_31521 = (state_31555[(2)]);
var inst_31522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31523 = figwheel.client.heads_up.display_warning.call(null,inst_31522);
var state_31555__$1 = (function (){var statearr_31574 = state_31555;
(statearr_31574[(8)] = inst_31521);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(29),inst_31523);
} else {
if((state_val_31556 === (25))){
var inst_31519 = figwheel.client.heads_up.clear.call(null);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(28),inst_31519);
} else {
if((state_val_31556 === (34))){
var inst_31536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(37),inst_31536);
} else {
if((state_val_31556 === (17))){
var inst_31501 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31575_31620 = state_31555__$1;
(statearr_31575_31620[(2)] = inst_31501);

(statearr_31575_31620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (3))){
var inst_31491 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31491)){
var statearr_31576_31621 = state_31555__$1;
(statearr_31576_31621[(1)] = (13));

} else {
var statearr_31577_31622 = state_31555__$1;
(statearr_31577_31622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (12))){
var inst_31487 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31578_31623 = state_31555__$1;
(statearr_31578_31623[(2)] = inst_31487);

(statearr_31578_31623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var inst_31474 = (state_31555[(7)]);
var inst_31474__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31555__$1 = (function (){var statearr_31579 = state_31555;
(statearr_31579[(7)] = inst_31474__$1);

return statearr_31579;
})();
if(cljs.core.truth_(inst_31474__$1)){
var statearr_31580_31624 = state_31555__$1;
(statearr_31580_31624[(1)] = (5));

} else {
var statearr_31581_31625 = state_31555__$1;
(statearr_31581_31625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (23))){
var inst_31517 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31517)){
var statearr_31582_31626 = state_31555__$1;
(statearr_31582_31626[(1)] = (25));

} else {
var statearr_31583_31627 = state_31555__$1;
(statearr_31583_31627[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (35))){
var state_31555__$1 = state_31555;
var statearr_31584_31628 = state_31555__$1;
(statearr_31584_31628[(2)] = null);

(statearr_31584_31628[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (19))){
var inst_31512 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31512)){
var statearr_31585_31629 = state_31555__$1;
(statearr_31585_31629[(1)] = (22));

} else {
var statearr_31586_31630 = state_31555__$1;
(statearr_31586_31630[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (11))){
var inst_31483 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31587_31631 = state_31555__$1;
(statearr_31587_31631[(2)] = inst_31483);

(statearr_31587_31631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (9))){
var inst_31485 = figwheel.client.heads_up.clear.call(null);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(12),inst_31485);
} else {
if((state_val_31556 === (5))){
var inst_31476 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31555__$1 = state_31555;
var statearr_31588_31632 = state_31555__$1;
(statearr_31588_31632[(2)] = inst_31476);

(statearr_31588_31632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (14))){
var inst_31503 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31503)){
var statearr_31589_31633 = state_31555__$1;
(statearr_31589_31633[(1)] = (18));

} else {
var statearr_31590_31634 = state_31555__$1;
(statearr_31590_31634[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (26))){
var inst_31527 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31527)){
var statearr_31591_31635 = state_31555__$1;
(statearr_31591_31635[(1)] = (30));

} else {
var statearr_31592_31636 = state_31555__$1;
(statearr_31592_31636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (16))){
var inst_31495 = (state_31555[(2)]);
var inst_31496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31497 = figwheel.client.format_messages.call(null,inst_31496);
var inst_31498 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31499 = figwheel.client.heads_up.display_error.call(null,inst_31497,inst_31498);
var state_31555__$1 = (function (){var statearr_31593 = state_31555;
(statearr_31593[(9)] = inst_31495);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(17),inst_31499);
} else {
if((state_val_31556 === (30))){
var inst_31529 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31530 = figwheel.client.heads_up.display_warning.call(null,inst_31529);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(33),inst_31530);
} else {
if((state_val_31556 === (10))){
var inst_31489 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31594_31637 = state_31555__$1;
(statearr_31594_31637[(2)] = inst_31489);

(statearr_31594_31637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (18))){
var inst_31505 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31506 = figwheel.client.format_messages.call(null,inst_31505);
var inst_31507 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31508 = figwheel.client.heads_up.display_error.call(null,inst_31506,inst_31507);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(21),inst_31508);
} else {
if((state_val_31556 === (37))){
var inst_31538 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31595_31638 = state_31555__$1;
(statearr_31595_31638[(2)] = inst_31538);

(statearr_31595_31638[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31481 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31555__$1,(11),inst_31481);
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
});})(c__26935__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26823__auto__,c__26935__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____0 = (function (){
var statearr_31599 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31599[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__);

(statearr_31599[(1)] = (1));

return statearr_31599;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____1 = (function (state_31555){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31600){if((e31600 instanceof Object)){
var ex__26827__auto__ = e31600;
var statearr_31601_31639 = state_31555;
(statearr_31601_31639[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31640 = state_31555;
state_31555 = G__31640;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__,msg_hist,msg_names,msg))
})();
var state__26937__auto__ = (function (){var statearr_31602 = f__26936__auto__.call(null);
(statearr_31602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__,msg_hist,msg_names,msg))
);

return c__26935__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26935__auto___31703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto___31703,ch){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto___31703,ch){
return (function (state_31686){
var state_val_31687 = (state_31686[(1)]);
if((state_val_31687 === (1))){
var state_31686__$1 = state_31686;
var statearr_31688_31704 = state_31686__$1;
(statearr_31688_31704[(2)] = null);

(statearr_31688_31704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (2))){
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(4),ch);
} else {
if((state_val_31687 === (3))){
var inst_31684 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31686__$1,inst_31684);
} else {
if((state_val_31687 === (4))){
var inst_31674 = (state_31686[(7)]);
var inst_31674__$1 = (state_31686[(2)]);
var state_31686__$1 = (function (){var statearr_31689 = state_31686;
(statearr_31689[(7)] = inst_31674__$1);

return statearr_31689;
})();
if(cljs.core.truth_(inst_31674__$1)){
var statearr_31690_31705 = state_31686__$1;
(statearr_31690_31705[(1)] = (5));

} else {
var statearr_31691_31706 = state_31686__$1;
(statearr_31691_31706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (5))){
var inst_31674 = (state_31686[(7)]);
var inst_31676 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31674);
var state_31686__$1 = state_31686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(8),inst_31676);
} else {
if((state_val_31687 === (6))){
var state_31686__$1 = state_31686;
var statearr_31692_31707 = state_31686__$1;
(statearr_31692_31707[(2)] = null);

(statearr_31692_31707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (7))){
var inst_31682 = (state_31686[(2)]);
var state_31686__$1 = state_31686;
var statearr_31693_31708 = state_31686__$1;
(statearr_31693_31708[(2)] = inst_31682);

(statearr_31693_31708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31687 === (8))){
var inst_31678 = (state_31686[(2)]);
var state_31686__$1 = (function (){var statearr_31694 = state_31686;
(statearr_31694[(8)] = inst_31678);

return statearr_31694;
})();
var statearr_31695_31709 = state_31686__$1;
(statearr_31695_31709[(2)] = null);

(statearr_31695_31709[(1)] = (2));


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
});})(c__26935__auto___31703,ch))
;
return ((function (switch__26823__auto__,c__26935__auto___31703,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26824__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26824__auto____0 = (function (){
var statearr_31699 = [null,null,null,null,null,null,null,null,null];
(statearr_31699[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26824__auto__);

(statearr_31699[(1)] = (1));

return statearr_31699;
});
var figwheel$client$heads_up_plugin_$_state_machine__26824__auto____1 = (function (state_31686){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31700){if((e31700 instanceof Object)){
var ex__26827__auto__ = e31700;
var statearr_31701_31710 = state_31686;
(statearr_31701_31710[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31686;
state_31686 = G__31711;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26824__auto__ = function(state_31686){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26824__auto____1.call(this,state_31686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26824__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26824__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto___31703,ch))
})();
var state__26937__auto__ = (function (){var statearr_31702 = f__26936__auto__.call(null);
(statearr_31702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto___31703);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto___31703,ch))
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
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_31732){
var state_val_31733 = (state_31732[(1)]);
if((state_val_31733 === (1))){
var inst_31727 = cljs.core.async.timeout.call(null,(3000));
var state_31732__$1 = state_31732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31732__$1,(2),inst_31727);
} else {
if((state_val_31733 === (2))){
var inst_31729 = (state_31732[(2)]);
var inst_31730 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31732__$1 = (function (){var statearr_31734 = state_31732;
(statearr_31734[(7)] = inst_31729);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31732__$1,inst_31730);
} else {
return null;
}
}
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____0 = (function (){
var statearr_31738 = [null,null,null,null,null,null,null,null];
(statearr_31738[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__);

(statearr_31738[(1)] = (1));

return statearr_31738;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____1 = (function (state_31732){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31739){if((e31739 instanceof Object)){
var ex__26827__auto__ = e31739;
var statearr_31740_31742 = state_31732;
(statearr_31740_31742[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31732;
state_31732 = G__31743;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__ = function(state_31732){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____1.call(this,state_31732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26824__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_31741 = f__26936__auto__.call(null);
(statearr_31741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_31741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31744){
var map__31751 = p__31744;
var map__31751__$1 = ((((!((map__31751 == null)))?((((map__31751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31751):map__31751);
var ed = map__31751__$1;
var formatted_exception = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31753_31757 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31754_31758 = null;
var count__31755_31759 = (0);
var i__31756_31760 = (0);
while(true){
if((i__31756_31760 < count__31755_31759)){
var msg_31761 = cljs.core._nth.call(null,chunk__31754_31758,i__31756_31760);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31761);

var G__31762 = seq__31753_31757;
var G__31763 = chunk__31754_31758;
var G__31764 = count__31755_31759;
var G__31765 = (i__31756_31760 + (1));
seq__31753_31757 = G__31762;
chunk__31754_31758 = G__31763;
count__31755_31759 = G__31764;
i__31756_31760 = G__31765;
continue;
} else {
var temp__4657__auto___31766 = cljs.core.seq.call(null,seq__31753_31757);
if(temp__4657__auto___31766){
var seq__31753_31767__$1 = temp__4657__auto___31766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31753_31767__$1)){
var c__19229__auto___31768 = cljs.core.chunk_first.call(null,seq__31753_31767__$1);
var G__31769 = cljs.core.chunk_rest.call(null,seq__31753_31767__$1);
var G__31770 = c__19229__auto___31768;
var G__31771 = cljs.core.count.call(null,c__19229__auto___31768);
var G__31772 = (0);
seq__31753_31757 = G__31769;
chunk__31754_31758 = G__31770;
count__31755_31759 = G__31771;
i__31756_31760 = G__31772;
continue;
} else {
var msg_31773 = cljs.core.first.call(null,seq__31753_31767__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31773);

var G__31774 = cljs.core.next.call(null,seq__31753_31767__$1);
var G__31775 = null;
var G__31776 = (0);
var G__31777 = (0);
seq__31753_31757 = G__31774;
chunk__31754_31758 = G__31775;
count__31755_31759 = G__31776;
i__31756_31760 = G__31777;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31778){
var map__31781 = p__31778;
var map__31781__$1 = ((((!((map__31781 == null)))?((((map__31781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31781):map__31781);
var w = map__31781__$1;
var message = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31789 = cljs.core.seq.call(null,plugins);
var chunk__31790 = null;
var count__31791 = (0);
var i__31792 = (0);
while(true){
if((i__31792 < count__31791)){
var vec__31793 = cljs.core._nth.call(null,chunk__31790,i__31792);
var k = cljs.core.nth.call(null,vec__31793,(0),null);
var plugin = cljs.core.nth.call(null,vec__31793,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31795 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31789,chunk__31790,count__31791,i__31792,pl_31795,vec__31793,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31795.call(null,msg_hist);
});})(seq__31789,chunk__31790,count__31791,i__31792,pl_31795,vec__31793,k,plugin))
);
} else {
}

var G__31796 = seq__31789;
var G__31797 = chunk__31790;
var G__31798 = count__31791;
var G__31799 = (i__31792 + (1));
seq__31789 = G__31796;
chunk__31790 = G__31797;
count__31791 = G__31798;
i__31792 = G__31799;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31789);
if(temp__4657__auto__){
var seq__31789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31789__$1)){
var c__19229__auto__ = cljs.core.chunk_first.call(null,seq__31789__$1);
var G__31800 = cljs.core.chunk_rest.call(null,seq__31789__$1);
var G__31801 = c__19229__auto__;
var G__31802 = cljs.core.count.call(null,c__19229__auto__);
var G__31803 = (0);
seq__31789 = G__31800;
chunk__31790 = G__31801;
count__31791 = G__31802;
i__31792 = G__31803;
continue;
} else {
var vec__31794 = cljs.core.first.call(null,seq__31789__$1);
var k = cljs.core.nth.call(null,vec__31794,(0),null);
var plugin = cljs.core.nth.call(null,vec__31794,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31804 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31789,chunk__31790,count__31791,i__31792,pl_31804,vec__31794,k,plugin,seq__31789__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31804.call(null,msg_hist);
});})(seq__31789,chunk__31790,count__31791,i__31792,pl_31804,vec__31794,k,plugin,seq__31789__$1,temp__4657__auto__))
);
} else {
}

var G__31805 = cljs.core.next.call(null,seq__31789__$1);
var G__31806 = null;
var G__31807 = (0);
var G__31808 = (0);
seq__31789 = G__31805;
chunk__31790 = G__31806;
count__31791 = G__31807;
i__31792 = G__31808;
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
var args31809 = [];
var len__19487__auto___31812 = arguments.length;
var i__19488__auto___31813 = (0);
while(true){
if((i__19488__auto___31813 < len__19487__auto___31812)){
args31809.push((arguments[i__19488__auto___31813]));

var G__31814 = (i__19488__auto___31813 + (1));
i__19488__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31811 = args31809.length;
switch (G__31811) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31809.length)].join('')));

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
var len__19487__auto___31820 = arguments.length;
var i__19488__auto___31821 = (0);
while(true){
if((i__19488__auto___31821 < len__19487__auto___31820)){
args__19494__auto__.push((arguments[i__19488__auto___31821]));

var G__31822 = (i__19488__auto___31821 + (1));
i__19488__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((0) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19495__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31817){
var map__31818 = p__31817;
var map__31818__$1 = ((((!((map__31818 == null)))?((((map__31818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31818):map__31818);
var opts = map__31818__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31816){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31816));
});

//# sourceMappingURL=client.js.map