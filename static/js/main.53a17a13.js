(()=>{"use strict";var e={6456:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(9526),a=n(3535),o=n(3827),i=n(5861),l=n(885),u=n(8984),c=n(6075),s=n(8576),f=n(9233),d=n(4637),h=n(5519),p=n(2727),y=n(7557);function g(e){var t=e.navigation,n=(0,r.useState)([]),a=(0,l.default)(n,2),o=a[0],g=a[1],v=(0,h.useAsyncStorage)("glyph_notes").getItem,j=(0,p.useIsFocused)(),m=function(){var e=(0,i.default)((function*(){var e=yield v();e&&g(JSON.parse(e))}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){m()}),[]),(0,r.useEffect)((function(){m()}),[j]),(0,y.jsxs)(u.Layout,{children:[(0,y.jsx)(u.Header,{title:"Glyph",navigation:t,buttons:[{faIcon:c.faPlus,handleClick:function(){t.push("NoteEdit")}},{faIcon:c.faCircleQuestion,handleClick:function(){window.open("https://mujdecisy.github.io/app/glyph-encrypted-notes","blank")}}]}),(0,y.jsx)(s.default,{style:{minHeight:u.SizeScheme.get().screen.height.min-145},children:o.map((function(e){return(0,y.jsx)(d.default,{style:{paddingVertical:10,borderBottomWidth:1,borderBottomColor:u.ColorScheme.get().secondary},onPress:function(){t.navigate("NoteDetail",{createdAt:e.createdAt})},children:(0,y.jsx)(f.default,{style:{fontSize:u.SizeScheme.get().font.c},children:e.title})},e.createdAt)}))})]})}var v=n(1133);function j(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charCodeAt(r)+t.charCodeAt(r%t.length);n+=String.fromCharCode(a)}return n}function m(e,t){for(var n="",r=0;r<e.length;r++){var a=e.charCodeAt(r)-t.charCodeAt(r%t.length);n+=String.fromCharCode(a)}return n}function b(e){for(var t="",n=0;n<64;n++)t+=Math.floor(10*Math.random()).toString();var r=Math.floor(Math.random()*(64-e.length));return t=t.slice(0,r)+e+t.slice(r+e.length,64)}function S(e){var t=e.navigation,n=e.route,a=(0,h.useAsyncStorage)("glyph_notes"),o=a.getItem,c=a.setItem,s=(0,r.useState)(""),f=(0,l.default)(s,2),d=f[0],p=f[1],g=(0,r.useState)(""),S=(0,l.default)(g,2),x=S[0],O=S[1],C=(0,r.useState)(""),T=(0,l.default)(C,2),w=T[0],A=T[1],k=(0,r.useState)(!1),E=(0,l.default)(k,2),I=E[0],P=E[1],N=function(){var e=(0,i.default)((function*(){var e=yield o(),t=JSON.parse(e||"[]").filter((function(e){return e.createdAt===n.params.createdAt}))[0];p(t.title);var r=t.content;t.hasPass&&(r=m(t.content,n.params.pass)),O(r)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,i.default)((function*(){var e,r,a=yield o(),i=JSON.parse(a||"[]"),l=-1;i.forEach((function(e,t){var r;e.createdAt===(null==n||null==(r=n.params)?void 0:r.createdAt)&&(l=t)}));var u=(null==n||null==(e=n.params)?void 0:e.pass)||w,s=x;u.length>0&&(s=j(x,u));var f=(null==n||null==(r=n.params)?void 0:r.createdAt)||(new Date).getTime();i.push({title:d,content:s,createdAt:f,updatedAt:(new Date).getTime(),hasPass:u.length>0,passCheck:j(b(u),u)}),l>-1&&i.splice(l,1),yield c(JSON.stringify(i)),t.goBack()}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){var e;null!=n&&null!=(e=n.params)&&e.createdAt&&N()}),[]),(0,y.jsxs)(u.Layout,{children:[(0,y.jsx)(u.Header,{title:"Glyph",navigation:t}),(0,y.jsxs)(v.default,{style:{minHeight:u.SizeScheme.get().screen.height.min-145,justifyContent:"space-between"},children:[(0,y.jsxs)(v.default,{children:[(0,y.jsx)(u.Input,{label:"Title",type:u.InputTypes.TEXT,value:[d],handleChange:function(e){p(e[0])}}),(0,y.jsx)(u.Input,{label:"Note",type:u.InputTypes.TEXT,settings:[u.Settings.TEXT_MULTILINE_12],value:[x],handleChange:function(e){O(e[0])}})]}),(0,y.jsx)(u.ButtonText,{label:"Save",handleClick:function(){var e;null!=n&&null!=(e=n.params)&&e.pass?_():P(!0)},style:{marginBottom:20}})]}),(0,y.jsxs)(u.Modal,{visible:I,handleClose:function(){P(!1)},style:{height:210},children:[(0,y.jsx)(u.Input,{label:"",type:u.InputTypes.TEXT,value:[w],placeholder:"Cypher to encrypt, not required",handleChange:function(e){A(e[0])}}),(0,y.jsx)(u.Takoz,{}),(0,y.jsx)(v.default,{children:(0,y.jsx)(u.ButtonText,{label:"Save",handleClick:function(){_()}})})]})]})}var x=n(4942);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,x.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=e.navigation,n=e.route,a=(0,h.useAsyncStorage)("glyph_notes"),o=a.getItem,d=a.setItem,g=(0,p.useIsFocused)(),j=(0,r.useState)({title:"",content:"",createdAt:0,updatedAt:0}),b=(0,l.default)(j,2),S=b[0],x=b[1],O=(0,r.useState)(""),T=(0,l.default)(O,2),w=T[0],A=T[1],k=(0,r.useState)(!1),E=(0,l.default)(k,2),I=E[0],P=E[1],N=(0,r.useState)(!1),_=(0,l.default)(N,2),D=_[0],z=_[1],B=(0,r.useState)(!0),M=(0,l.default)(B,2),J=M[0],H=M[1],L=function(){var e=(0,i.default)((function*(){var e=yield o(),t=JSON.parse(e).filter((function(e){return e.createdAt===n.params.createdAt}))[0];t.hasPass||H(!1),w&&(t.content=m(t.content,w)),x(t)}));return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,i.default)((function*(){var e=yield o(),r=JSON.parse(e),a=-1;r.forEach((function(e,t){e.createdAt===n.params.createdAt&&(a=t)})),a>-1&&r.splice(a,1),d(JSON.stringify(r)),t.goBack()}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){L()}),[]),(0,r.useEffect)((function(){L()}),[g]),(0,y.jsxs)(u.Layout,{children:[(0,y.jsx)(u.Header,{title:"Glyph",navigation:t,buttons:J?[]:[{faIcon:c.faTrashAlt,handleClick:function(){z(!0)}},{faIcon:c.faEdit,handleClick:function(){t.navigate("NoteEdit",{createdAt:n.params.createdAt,pass:w})}}]}),(0,y.jsx)(s.default,{style:{minHeight:u.SizeScheme.get().screen.height.min-215},children:(0,y.jsxs)(v.default,{style:{justifyContent:"space-between"},children:[(0,y.jsx)(v.default,{style:{flexDirection:"row",justifyContent:"flex-end"},children:(0,y.jsx)(f.default,{children:new Date(S.createdAt).toDateString()})}),(0,y.jsx)(f.default,{style:{fontSize:u.SizeScheme.get().font.c,fontWeight:"bold",marginBottom:10},children:S.title}),(0,y.jsx)(f.default,{style:{fontSize:u.SizeScheme.get().font.e},children:S.content})]})}),(0,y.jsx)(v.default,{style:{height:70},children:J&&(0,y.jsx)(u.ButtonText,{label:"Decrypt",handleClick:function(){P(!0)},style:{marginBottom:10}})}),(0,y.jsxs)(u.Modal,{visible:I,handleClose:function(){P(!1)},style:{height:210},children:[(0,y.jsx)(u.Input,{label:"",type:u.InputTypes.TEXT,value:[w],placeholder:"Cypher to encrypt, not required",handleChange:function(e){A(e[0])}}),(0,y.jsx)(u.Takoz,{}),(0,y.jsx)(v.default,{children:(0,y.jsx)(u.ButtonText,{label:"Decrypt",handleClick:function(){if(m(S.passCheck,w).includes(w)){var e=m(S.content,w);x(C(C({},S),{},{content:e})),H(!1),P(!1)}else A(""),P(!1)}})})]}),(0,y.jsxs)(u.Modal,{visible:D,handleClose:function(){z(!1)},style:{height:210},children:[(0,y.jsx)(f.default,{style:{fontSize:u.SizeScheme.get().font.c,marginBottom:20},children:"You will permanantely delete this note. Are you sure?"}),(0,y.jsx)(u.ButtonText,{label:"Delete",handleClick:function(){X()}})]})]})}var w=(0,o.default)();function A(){return(0,y.jsx)(a.default,{children:(0,y.jsxs)(w.Navigator,{children:[(0,y.jsx)(w.Screen,{name:"NoteList",component:g,options:{headerShown:!1}}),(0,y.jsx)(w.Screen,{name:"NoteEdit",component:S,options:{headerShown:!1}}),(0,y.jsx)(w.Screen,{name:"NoteDetail",component:T,options:{headerShown:!1}})]})})}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,a,o]=e[s],l=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,l,u]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var s=u(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[421],(()=>n(9386)));r=n.O(r)})();
//# sourceMappingURL=main.53a17a13.js.map