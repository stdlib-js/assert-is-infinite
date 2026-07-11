"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(f){throw (r=0, f)}};};var t=e(function(R,n){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,o=require('@stdlib/math-base-assert-is-infinite/dist');function b(i){return m(i)&&o(i)}n.exports=b
});var s=e(function(g,v){
var O=require('@stdlib/assert-is-number/dist').isObject,j=require('@stdlib/math-base-assert-is-infinite/dist');function p(i){return O(i)&&j(i.valueOf())}v.exports=p
});var a=e(function(h,c){
var x=t(),P=s();function I(i){return x(i)||P(i)}c.exports=I
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),N=t(),d=s();q(u,"isPrimitive",N);q(u,"isObject",d);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
