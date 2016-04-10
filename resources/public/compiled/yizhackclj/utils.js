// Compiled by ClojureScript 1.8.40 {}
goog.provide('yizhackclj.utils');
goog.require('cljs.core');
yizhackclj.utils.parse_layer = (function yizhackclj$utils$parse_layer(value){
if(cljs.core.truth_(value.startsWith("LN_"))){
return parseInt(cljs.core.subs.call(null,value,(3)));
} else {
return (0);
}
});
yizhackclj.utils.to_json = (function yizhackclj$utils$to_json(keyboard){
return JSON.stringify(cljs.core.clj__GT_js.call(null,keyboard),null,(2));
});
yizhackclj.utils.parse_json = (function yizhackclj$utils$parse_json(json){
return cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

//# sourceMappingURL=utils.js.map