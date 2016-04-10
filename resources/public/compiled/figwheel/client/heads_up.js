// Compiled by ClojureScript 1.8.40 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19494__auto__ = [];
var len__19487__auto___30862 = arguments.length;
var i__19488__auto___30863 = (0);
while(true){
if((i__19488__auto___30863 < len__19487__auto___30862)){
args__19494__auto__.push((arguments[i__19488__auto___30863]));

var G__30864 = (i__19488__auto___30863 + (1));
i__19488__auto___30863 = G__30864;
continue;
} else {
}
break;
}

var argseq__19495__auto__ = ((((2) < args__19494__auto__.length))?(new cljs.core.IndexedSeq(args__19494__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19495__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30854_30865 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30855_30866 = null;
var count__30856_30867 = (0);
var i__30857_30868 = (0);
while(true){
if((i__30857_30868 < count__30856_30867)){
var k_30869 = cljs.core._nth.call(null,chunk__30855_30866,i__30857_30868);
e.setAttribute(cljs.core.name.call(null,k_30869),cljs.core.get.call(null,attrs,k_30869));

var G__30870 = seq__30854_30865;
var G__30871 = chunk__30855_30866;
var G__30872 = count__30856_30867;
var G__30873 = (i__30857_30868 + (1));
seq__30854_30865 = G__30870;
chunk__30855_30866 = G__30871;
count__30856_30867 = G__30872;
i__30857_30868 = G__30873;
continue;
} else {
var temp__4657__auto___30874 = cljs.core.seq.call(null,seq__30854_30865);
if(temp__4657__auto___30874){
var seq__30854_30875__$1 = temp__4657__auto___30874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30854_30875__$1)){
var c__19229__auto___30876 = cljs.core.chunk_first.call(null,seq__30854_30875__$1);
var G__30877 = cljs.core.chunk_rest.call(null,seq__30854_30875__$1);
var G__30878 = c__19229__auto___30876;
var G__30879 = cljs.core.count.call(null,c__19229__auto___30876);
var G__30880 = (0);
seq__30854_30865 = G__30877;
chunk__30855_30866 = G__30878;
count__30856_30867 = G__30879;
i__30857_30868 = G__30880;
continue;
} else {
var k_30881 = cljs.core.first.call(null,seq__30854_30875__$1);
e.setAttribute(cljs.core.name.call(null,k_30881),cljs.core.get.call(null,attrs,k_30881));

var G__30882 = cljs.core.next.call(null,seq__30854_30875__$1);
var G__30883 = null;
var G__30884 = (0);
var G__30885 = (0);
seq__30854_30865 = G__30882;
chunk__30855_30866 = G__30883;
count__30856_30867 = G__30884;
i__30857_30868 = G__30885;
continue;
}
} else {
}
}
break;
}

var seq__30858_30886 = cljs.core.seq.call(null,children);
var chunk__30859_30887 = null;
var count__30860_30888 = (0);
var i__30861_30889 = (0);
while(true){
if((i__30861_30889 < count__30860_30888)){
var ch_30890 = cljs.core._nth.call(null,chunk__30859_30887,i__30861_30889);
e.appendChild(ch_30890);

var G__30891 = seq__30858_30886;
var G__30892 = chunk__30859_30887;
var G__30893 = count__30860_30888;
var G__30894 = (i__30861_30889 + (1));
seq__30858_30886 = G__30891;
chunk__30859_30887 = G__30892;
count__30860_30888 = G__30893;
i__30861_30889 = G__30894;
continue;
} else {
var temp__4657__auto___30895 = cljs.core.seq.call(null,seq__30858_30886);
if(temp__4657__auto___30895){
var seq__30858_30896__$1 = temp__4657__auto___30895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30858_30896__$1)){
var c__19229__auto___30897 = cljs.core.chunk_first.call(null,seq__30858_30896__$1);
var G__30898 = cljs.core.chunk_rest.call(null,seq__30858_30896__$1);
var G__30899 = c__19229__auto___30897;
var G__30900 = cljs.core.count.call(null,c__19229__auto___30897);
var G__30901 = (0);
seq__30858_30886 = G__30898;
chunk__30859_30887 = G__30899;
count__30860_30888 = G__30900;
i__30861_30889 = G__30901;
continue;
} else {
var ch_30902 = cljs.core.first.call(null,seq__30858_30896__$1);
e.appendChild(ch_30902);

var G__30903 = cljs.core.next.call(null,seq__30858_30896__$1);
var G__30904 = null;
var G__30905 = (0);
var G__30906 = (0);
seq__30858_30886 = G__30903;
chunk__30859_30887 = G__30904;
count__30860_30888 = G__30905;
i__30861_30889 = G__30906;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30851){
var G__30852 = cljs.core.first.call(null,seq30851);
var seq30851__$1 = cljs.core.next.call(null,seq30851);
var G__30853 = cljs.core.first.call(null,seq30851__$1);
var seq30851__$2 = cljs.core.next.call(null,seq30851__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30852,G__30853,seq30851__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19345__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19346__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__,hierarchy__19346__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__,hierarchy__19346__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19346__auto__,method_table__19342__auto__,prefer_table__19343__auto__,method_cache__19344__auto__,cached_hierarchy__19345__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30907 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30907.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30907.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30907.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30907);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30908,st_map){
var map__30913 = p__30908;
var map__30913__$1 = ((((!((map__30913 == null)))?((((map__30913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30913):map__30913);
var container_el = cljs.core.get.call(null,map__30913__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30913,map__30913__$1,container_el){
return (function (p__30915){
var vec__30916 = p__30915;
var k = cljs.core.nth.call(null,vec__30916,(0),null);
var v = cljs.core.nth.call(null,vec__30916,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30913,map__30913__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30917,dom_str){
var map__30920 = p__30917;
var map__30920__$1 = ((((!((map__30920 == null)))?((((map__30920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30920):map__30920);
var c = map__30920__$1;
var content_area_el = cljs.core.get.call(null,map__30920__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30922){
var map__30925 = p__30922;
var map__30925__$1 = ((((!((map__30925 == null)))?((((map__30925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30925):map__30925);
var content_area_el = cljs.core.get.call(null,map__30925__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_30968){
var state_val_30969 = (state_30968[(1)]);
if((state_val_30969 === (1))){
var inst_30953 = (state_30968[(7)]);
var inst_30953__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30954 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30955 = ["10px","10px","100%","68px","1.0"];
var inst_30956 = cljs.core.PersistentHashMap.fromArrays(inst_30954,inst_30955);
var inst_30957 = cljs.core.merge.call(null,inst_30956,style);
var inst_30958 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30953__$1,inst_30957);
var inst_30959 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30953__$1,msg);
var inst_30960 = cljs.core.async.timeout.call(null,(300));
var state_30968__$1 = (function (){var statearr_30970 = state_30968;
(statearr_30970[(7)] = inst_30953__$1);

(statearr_30970[(8)] = inst_30958);

(statearr_30970[(9)] = inst_30959);

return statearr_30970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30968__$1,(2),inst_30960);
} else {
if((state_val_30969 === (2))){
var inst_30953 = (state_30968[(7)]);
var inst_30962 = (state_30968[(2)]);
var inst_30963 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30964 = ["auto"];
var inst_30965 = cljs.core.PersistentHashMap.fromArrays(inst_30963,inst_30964);
var inst_30966 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30953,inst_30965);
var state_30968__$1 = (function (){var statearr_30971 = state_30968;
(statearr_30971[(10)] = inst_30962);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30968__$1,inst_30966);
} else {
return null;
}
}
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____0 = (function (){
var statearr_30975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30975[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__);

(statearr_30975[(1)] = (1));

return statearr_30975;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____1 = (function (state_30968){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_30968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e30976){if((e30976 instanceof Object)){
var ex__26827__auto__ = e30976;
var statearr_30977_30979 = state_30968;
(statearr_30977_30979[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30980 = state_30968;
state_30968 = G__30980;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__ = function(state_30968){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____1.call(this,state_30968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_30978 = f__26936__auto__.call(null);
(statearr_30978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_30978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30982 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__30982,(0),null);
var ln = cljs.core.nth.call(null,vec__30982,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30985 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30985,(0),null);
var file_line = cljs.core.nth.call(null,vec__30985,(1),null);
var file_column = cljs.core.nth.call(null,vec__30985,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30985,file_name,file_line,file_column){
return (function (p1__30983_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30983_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30985,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18418__auto__ = file_line;
if(cljs.core.truth_(or__18418__auto__)){
return or__18418__auto__;
} else {
var and__18406__auto__ = cause;
if(cljs.core.truth_(and__18406__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18406__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30988 = figwheel.client.heads_up.ensure_container.call(null);
var map__30988__$1 = ((((!((map__30988 == null)))?((((map__30988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);
var content_area_el = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_31036){
var state_val_31037 = (state_31036[(1)]);
if((state_val_31037 === (1))){
var inst_31019 = (state_31036[(7)]);
var inst_31019__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31020 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31021 = ["0.0"];
var inst_31022 = cljs.core.PersistentHashMap.fromArrays(inst_31020,inst_31021);
var inst_31023 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31019__$1,inst_31022);
var inst_31024 = cljs.core.async.timeout.call(null,(300));
var state_31036__$1 = (function (){var statearr_31038 = state_31036;
(statearr_31038[(8)] = inst_31023);

(statearr_31038[(7)] = inst_31019__$1);

return statearr_31038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31036__$1,(2),inst_31024);
} else {
if((state_val_31037 === (2))){
var inst_31019 = (state_31036[(7)]);
var inst_31026 = (state_31036[(2)]);
var inst_31027 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31028 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31029 = cljs.core.PersistentHashMap.fromArrays(inst_31027,inst_31028);
var inst_31030 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31019,inst_31029);
var inst_31031 = cljs.core.async.timeout.call(null,(200));
var state_31036__$1 = (function (){var statearr_31039 = state_31036;
(statearr_31039[(9)] = inst_31030);

(statearr_31039[(10)] = inst_31026);

return statearr_31039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31036__$1,(3),inst_31031);
} else {
if((state_val_31037 === (3))){
var inst_31019 = (state_31036[(7)]);
var inst_31033 = (state_31036[(2)]);
var inst_31034 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31019,"");
var state_31036__$1 = (function (){var statearr_31040 = state_31036;
(statearr_31040[(11)] = inst_31033);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31036__$1,inst_31034);
} else {
return null;
}
}
}
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26824__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26824__auto____0 = (function (){
var statearr_31044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31044[(0)] = figwheel$client$heads_up$clear_$_state_machine__26824__auto__);

(statearr_31044[(1)] = (1));

return statearr_31044;
});
var figwheel$client$heads_up$clear_$_state_machine__26824__auto____1 = (function (state_31036){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31045){if((e31045 instanceof Object)){
var ex__26827__auto__ = e31045;
var statearr_31046_31048 = state_31036;
(statearr_31046_31048[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31049 = state_31036;
state_31036 = G__31049;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26824__auto__ = function(state_31036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26824__auto____1.call(this,state_31036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26824__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26824__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_31047 = f__26936__auto__.call(null);
(statearr_31047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_31047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26935__auto__){
return (function (){
var f__26936__auto__ = (function (){var switch__26823__auto__ = ((function (c__26935__auto__){
return (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (1))){
var inst_31071 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(2),inst_31071);
} else {
if((state_val_31082 === (2))){
var inst_31073 = (state_31081[(2)]);
var inst_31074 = cljs.core.async.timeout.call(null,(400));
var state_31081__$1 = (function (){var statearr_31083 = state_31081;
(statearr_31083[(7)] = inst_31073);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(3),inst_31074);
} else {
if((state_val_31082 === (3))){
var inst_31076 = (state_31081[(2)]);
var inst_31077 = figwheel.client.heads_up.clear.call(null);
var state_31081__$1 = (function (){var statearr_31084 = state_31081;
(statearr_31084[(8)] = inst_31076);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(4),inst_31077);
} else {
if((state_val_31082 === (4))){
var inst_31079 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31081__$1,inst_31079);
} else {
return null;
}
}
}
}
});})(c__26935__auto__))
;
return ((function (switch__26823__auto__,c__26935__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____0 = (function (){
var statearr_31088 = [null,null,null,null,null,null,null,null,null];
(statearr_31088[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__);

(statearr_31088[(1)] = (1));

return statearr_31088;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____1 = (function (state_31081){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__.call(null,state_31081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31089){if((e31089 instanceof Object)){
var ex__26827__auto__ = e31089;
var statearr_31090_31092 = state_31081;
(statearr_31090_31092[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31093 = state_31081;
state_31081 = G__31093;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__26935__auto__))
})();
var state__26937__auto__ = (function (){var statearr_31091 = f__26936__auto__.call(null);
(statearr_31091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26935__auto__);

return statearr_31091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26937__auto__);
});})(c__26935__auto__))
);

return c__26935__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map