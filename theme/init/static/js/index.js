!function(u){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],c=0,i=[];c<r.length;c++)n=r[c],s[n]&&i.push(s[n][0]),s[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(u[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(f.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},s={0:0},f=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=u,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;f.push([88,1]),l()}({88:function(e,t,n){"use strict";n.r(t);var r=n(30),o=n.n(r),a=n(83),c=n.n(a),i=n(39),u=n.n(i),l=n(59),s=n.n(l),f=n(29),p=n.n(f),y=n(1),m=n.n(y),v=n(6),b=n.n(v);n(93);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=p.a.Header,j=p.a.Content,w=p.a.Footer,k=document.getElementById("PageApp"),P=s.a.Step,_=[{title:"Storage type",content:"Second-content"},{title:"Super admin",content:"First-content"},{title:"Server config",content:"Fourth-content"},{title:"Start all server",content:"Last-content"}],x=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,E(n).call(this,e))).state={current:0},t}var t,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,m.a.Component),t=n,(r=[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e})}},{key:"render",value:function(){var e=this,t=this.state.current;return m.a.createElement("div",{className:"page-app-container"},m.a.createElement(s.a,{current:t},_.map(function(e){return m.a.createElement(P,{key:e.title,title:e.title})})),m.a.createElement("div",{className:"app-steps-content"},_[t].content),m.a.createElement("div",{className:"app-steps-action"},t<_.length-1&&m.a.createElement(u.a,{type:"primary",onClick:function(){return e.next()}},"Next"),t===_.length-1&&m.a.createElement(u.a,{type:"primary",onClick:function(){return c.a.success("Processing complete!")}},"Done"),0<t&&m.a.createElement(u.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Previous")))}}])&&h(t.prototype,r),o&&h(t,o),n}();b.a.render(m.a.createElement(p.a,{className:"layout"},m.a.createElement(O,null,m.a.createElement("div",{className:"logo"}),m.a.createElement(o.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},m.a.createElement(o.a.Item,{key:"1"},"nav 1"),m.a.createElement(o.a.Item,{key:"2"},"nav 2"),m.a.createElement(o.a.Item,{key:"3"},"nav 3"))),m.a.createElement(j,{style:{padding:"0 50px"}},m.a.createElement(x,null)),m.a.createElement(w,{style:{textAlign:"center"}},"toojs ©2018 Created by chenshenhai")),k)},93:function(e,t,n){}});