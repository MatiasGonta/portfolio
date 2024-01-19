import{r as p}from"./index.LFf77hJu.js";var a={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=p,v=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function y(s,l,i){var e,r={},u=null,t=null;i!==void 0&&(u=""+i),l.key!==void 0&&(u=""+l.key),l.ref!==void 0&&(t=l.ref);for(e in l)m.call(l,e)&&!b.hasOwnProperty(e)&&(r[e]=l[e]);if(s&&s.defaultProps)for(e in l=s.defaultProps,l)r[e]===void 0&&(r[e]=l[e]);return{$$typeof:v,type:s,key:u,ref:t,props:r,_owner:x.current}}o.Fragment=d;o.jsx=y;o.jsxs=y;a.exports=o;var E=a.exports;let n=[],h=(s,l)=>{let i=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},l:l||0,lc:0,listen(r,u){return e.lc=i.push(r,u||e.l)/2,()=>{let t=i.indexOf(r);~t&&(i.splice(t,2),--e.lc||e.off())}},notify(r){let u=!n.length;for(let t=0;t<i.length;t+=2)n.push(i[t],i[t+1],e.value,r);if(u){for(let t=0;t<n.length;t+=4){let f;for(let c=t+1;!f&&(c+=4)<n.length;)n[c]<n[t+1]&&(f=n.push(n[t],n[t+1],n[t+2],n[t+3]));f||n[t](n[t+2],n[t+3])}n.length=0}},off(){},set(r){e.value!==r&&(e.value=r,e.notify())},subscribe(r,u){let t=e.listen(r,u);return r(e.value),t},value:s};return e};function k(s,l,i){let e=new Set([...l,void 0]);return s.listen((r,u)=>{e.has(u)&&i(r,u)})}function O(s,l={}){let i=p.useCallback(r=>l.keys?k(s,l.keys,r):s.listen(r),[l.keys,s]),e=s.get.bind(s);return p.useSyncExternalStore(i,e,e)}const R=h(void 0);export{E as j,R as s,O as u};
