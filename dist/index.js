"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(y,n){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/math-base-assert-is-infinite/dist');function o(i){return f(i)&&m(i)}n.exports=o
});var s=e(function(R,v){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/math-base-assert-is-infinite/dist');function j(i){return b(i)&&O(i.valueOf())}v.exports=j
});var a=e(function(g,c){
var p=t(),x=s();function P(i){return p(i)||x(i)}c.exports=P
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),I=t(),N=s();q(u,"isPrimitive",I);q(u,"isObject",N);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
