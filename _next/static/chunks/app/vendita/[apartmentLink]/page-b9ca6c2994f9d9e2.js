(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135,649],{3921:function(e,t,l){Promise.resolve().then(l.bind(l,8457)),Promise.resolve().then(l.bind(l,1602)),Promise.resolve().then(l.t.bind(l,413,23)),Promise.resolve().then(l.t.bind(l,8326,23))},8457:function(e,t,l){"use strict";l.r(t);var n=l(7437),s=l(6691),r=l.n(s),a=l(2265);t.default=e=>{let t=e.nSlides;if(0==t)return;let l=[];for(let n=0;n<t;n++)l.push("/images/".concat(e.link,"/slider").concat(n,".webp"));let[s,o]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{let e=(s+1)%l.length;o(e)},7e3);return()=>clearInterval(e)},[s,l.length]),(0,n.jsxs)("div",{className:"relative w-full overflow-hidden",children:[(0,n.jsx)("div",{className:"flex items-center",style:{width:"".concat(100*t,"%"),transform:"translateX(-".concat(s*(100/t),"%)"),transition:"transform 0.5s ease-in-out"},children:l.map((e,l)=>(0,n.jsx)("div",{className:"relative h-[28rem] w-full justify-center flex items-center bg-white rounded-xl shadow-xl m-8",children:(0,n.jsx)(r(),{src:e,alt:"Slide ".concat(l+1),className:"object-cover p-2 sm:p-6",style:{flex:"0 0 ".concat(100/t,"%")},fill:!0})},l))}),(0,n.jsxs)("div",{className:"absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full",children:[(0,n.jsx)("button",{onClick:()=>{let e=(s-1+l.length)%l.length;o(e)},className:"text-aqua-blue font-extralight text-6xl focus:outline-none",children:"‹"}),(0,n.jsx)("button",{onClick:()=>{let e=(s+1)%l.length;o(e)},className:"text-aqua-blue font-extralight text-6xl focus:outline-none",children:"›"})]})]})}},1602:function(e,t,l){"use strict";l.r(t);var n=l(7437),s=l(6691),r=l.n(s),a=l(2265);t.default=e=>{if(0==e.nSlides)return(0,n.jsx)("div",{className:"flex justify-center w-full h-[35em]",children:(0,n.jsx)(r(),{className:"object-cover relative bg-white rounded-xl p-4 shadow-xl",width:867,height:667,src:"/images/"+e.link+".webp"})});let[t,l]=(0,a.useState)("hidden"),openModal=()=>{l("")},closeModal=()=>{l("hidden")},s=e.nSlides,[o,i]=(0,a.useState)(0),c=[];for(let t=0;t<s;t++)c.push("/images/".concat(e.link,"/slider").concat(t,".webp"));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed top-0 z-30 bg-[#808080] transition-all text-white/80 md:text-6xl text-4xl flex justify-evenly items-center w-full h-screen "+t,children:(0,n.jsxs)("div",{className:"relative overflow-hidden",children:[(0,n.jsx)("div",{className:"flex items-center",style:{width:"".concat(100*s,"%"),transform:"translateX(-".concat(o*(100/s),"%)"),transition:"transform 0.5s ease-in-out"},children:c.map((e,t)=>(0,n.jsx)("div",{className:"w-full h-screen justify-center flex items-center",children:(0,n.jsx)("img",{src:e,alt:"Slide ".concat(t+1),className:"w-full h-auto shadow-2xl rounded",style:{flex:"0 0 ".concat(100/s,"%")}})},t))}),(0,n.jsx)("div",{className:"font-light absolute top-2 left-4 text-2xl",children:"".concat(o+1,"/").concat(s)}),(0,n.jsx)("div",{className:"absolute top-2 right-4 text-4xl",children:(0,n.jsx)("button",{onClick:()=>closeModal(),children:"✕"})}),(0,n.jsxs)("div",{className:"font-extralight absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full",children:[(0,n.jsx)("button",{onClick:()=>{let e=(o-1+c.length)%c.length;i(e)},className:"text-white text-6xl px-4 py-2 rounded-r focus:outline-none",children:"‹"}),(0,n.jsx)("button",{onClick:()=>{let e=(o+1)%c.length;i(e)},className:"text-white text-6xl px-4 py-2 rounded-l focus:outline-none",children:"›"})]})]})}),(0,n.jsx)("div",{className:"m-auto mt-6 p-4 w-fit shadow-xl rounded-lg",children:(0,n.jsxs)("div",{className:"flex gap-4 m-auto flex-col md:flex-row max-w-screen-lg mx-auto",children:[(0,n.jsx)("button",{onClick:()=>openModal(),className:"md:max-w-2/3 w-full hover:bg-neutral-400 hover:opacity-50 relative hover:text-base-300 cursor-pointer transition-all rounded-md overflow-hidden",children:(0,n.jsx)(r(),{alt:"residence",width:"1000",height:"664",className:"transition-all",src:"/images/"+e.link+"/slider0.webp"})}),(0,n.jsxs)("div",{className:"flex md:flex-col flex-row  relative gap-4 md:w-1/3",children:[(0,n.jsx)("button",{onClick:()=>openModal(),className:"transition-all relative h-40 hover:bg-neutral-400 hover:opacity-50 w-1/2 md:h-1/2 md:w-full cursor-pointer rounded-md overflow-hidden",children:(0,n.jsx)(r(),{alt:"residence",fill:!0,className:"-z-10 object-cover",src:"/images/"+e.link+"/slider1.webp"})}),(0,n.jsxs)("button",{onClick:()=>openModal(),className:"h-40 w-1/2 md:h-1/2 relative md:w-full bg-gray-700 rounded-md overflow-hidden",children:[(0,n.jsx)(r(),{alt:"residence",className:"w-full object-cover h-full bg-base-300 opacity-40 ",fill:!0,src:"/images/"+e.link+"/slider2.webp"}),(0,n.jsx)("div",{className:"text-center text-white font-light text-8xl absolute link top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:"+"+(s-2).toString()})]})]})]})})]})}},679:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return i}});let n=l(1024),s=l(7929),r=l(2637),a=l(413),o=n._(l(9950)),unstable_getImgProps=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},i=a.Image},622:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=l(2265),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,l){var n,r={},c=null,d=null;for(n in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=q,t.jsxs=q},7437:function(e,t,l){"use strict";e.exports=l(622)},6691:function(e,t,l){e.exports=l(679)}},function(e){e.O(0,[375,971,472,744],function(){return e(e.s=3921)}),_N_E=e.O()}]);