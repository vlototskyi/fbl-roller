(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/crossed-swords-white.a499c868.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/crossed-swords-black.e29251ae.svg"},,function(e,t,a){e.exports=a.p+"static/media/swords-yellow.255d915a.svg"},function(e,t,a){e.exports=a.p+"static/media/2-swords-yellow.4eac100b.svg"},function(e,t,a){e.exports=a.p+"static/media/2-swords-black.2246e727.svg"},function(e,t,a){e.exports=a.p+"static/media/3-swords-black.24069707.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/2-swords-white.2b7d84b8.svg"},function(e,t,a){e.exports=a.p+"static/media/3-swords-yellow.00e6e707.svg"},function(e,t,a){e.exports=a.p+"static/media/4-swords-black.966abce9.svg"},function(e,t,a){e.exports=a.p+"static/media/dread-skull-white.841885b2.svg"},function(e,t,a){e.exports=a.p+"static/media/dread-skull-black.cc4a1d36.svg"},function(e,t,a){e.exports=a(43)},,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),i=(a(36),a(4)),s=a(5),c=a(7),u=a(6),p=a(8),d=(a(38),a(19)),h=a.n(d),m=a(3),g=a.n(m),f=a(1),b=a.n(f),v=(a(41),a(2)),y=a(20),C=a.n(y),k=a(12),E=a.n(k),w=a(13),x=a.n(w),O=a(21),j=a.n(O),N=a(10),S=a.n(N),D=a(14),I=a.n(D),A=a(15),P=a.n(A),R=a(22),U=a.n(R),B=a(23),T=a.n(B),W=a(24);var z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},L={width:"50px",height:"50px",margin:"3px",borderRadius:"5px",position:"relative",display:"inline-block"},F={base:{background:"beige",foreground:"black",special:{1:a.n(W).a,6:S.a}},skill:{background:"maroon",foreground:"white",special:{6:g.a}},gear:{background:"black",foreground:"white",special:{1:T.a,6:g.a}},mighty:{background:"green",foreground:"white",special:{6:g.a,7:g.a,8:C.a}},epic:{background:"blue",foreground:"yellow",special:{6:E.a,7:E.a,8:x.a,9:x.a,10:j.a}},legendary:{background:"orange",foreground:"black",special:{6:S.a,7:S.a,8:I.a,9:I.a,10:P.a,11:P.a,12:U.a}}},_=function(e,t){var a=parseInt(t,10);return F[e].special.hasOwnProperty(a)?r.a.createElement("img",{height:"40",width:"40","border-radius":"5px",src:F[e].special[a],style:z,alt:F[e].special[a]}):a},G=function(e){return r.a.createElement("div",{style:Object(v.a)({},L,{background:F[e.type].background,fontFamily:"'Arial Black', Arial-BoldMT, Gadget, 'sans-serif'",fontSize:"xx-large"})},r.a.createElement("div",{style:Object(v.a)({},z,{color:F[e.type].foreground})},_(e.type,e.value)))},J=a(9);var M=Object(v.a)({},{webkitTouchCallout:"none",webkitUserSelect:"none",khtmlUserSelect:"none",mozUserSelect:"none",msUserSelect:"none",userSelect:"none"},{width:"50px",height:"50px",margin:"3px",borderRadius:"5px",position:"relative",display:"inline-block",fontFamily:"'Arial Black', Arial-BoldMT, roboto, 'sans-serif'",fontSize:"3rem"}),Q=function(e){return r.a.createElement("div",{className:"increment-button",onClick:e.onClick,style:Object(v.a)({},M,{background:F[e.type].background})},r.a.createElement("div",{style:{transform:"translate(-50%, -50%)",position:"absolute",left:"50%",color:F[e.type].foreground,top:"-"===e.label?"40%":"50%"}},e.label))},$=Object(v.a)({},{webkitTouchCallout:"none",webkitUserSelect:"none",khtmlUserSelect:"none",mozUserSelect:"none",msUserSelect:"none",userSelect:"none"},{fontSize:"xx-large",verticalAlign:"top"}),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.props.onChange(a.props.name,e.target.value)},a.handleIncrement=function(e){a.props.value<8&&a.props.onChange(a.props.name,parseInt(a.props.value,10)+1)},a.handleDecrement=function(e){a.props.value>0&&a.props.onChange(a.props.name,parseInt(a.props.value,10)-1)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("span",{className:"die-type",style:{}},this.props.name),r.a.createElement(Q,{label:"-",type:this.props.name,onClick:this.handleDecrement}),r.a.createElement("span",{style:$},this.props.value),r.a.createElement(Q,{label:"+",type:this.props.name,onClick:this.handleIncrement}),r.a.createElement("input",{style:{margin:"5px 0px"},placeholder:this.props.name,id:this.props.name,type:"range",min:"0",max:"8",value:this.props.value,onChange:this.handleChange})))}}]),t}(n.Component),H={marginLeft:"2px",marginRight:"2px",display:"inline",height:"44px"},K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={baseCount:a.props.baseCount||0,skillCount:a.props.skillCount||0,gearCount:a.props.gearCount||0,mightyCount:a.props.mightyCount||0,epicCount:a.props.epicCount||0,legendaryCount:a.props.legendaryCount||0},a.handleCountChange=function(e,t){a.setState(Object(J.a)({},e+"Count",parseInt(t,10)))},a.handleRoll=function(e){a.props.handleRoll(a.state)},a.handlePush=function(e){a.props.handlePush()},a.handlePride=function(e){a.props.handlePride()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"rollEnabled",value:function(){return 0===this.state.baseCount&&0===this.state.skillCount&&0===this.state.gearCount&&0===this.state.mightyCount&&0===this.state.epicCount&&0===this.state.legendaryCount?"disabled":""}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement(q,{name:"base",value:this.state.baseCount,onChange:this.handleCountChange}),r.a.createElement(q,{name:"skill",value:this.state.skillCount,onChange:this.handleCountChange}),r.a.createElement(q,{name:"gear",value:this.state.gearCount,onChange:this.handleCountChange}),r.a.createElement(q,{name:"mighty",value:this.state.mightyCount,onChange:this.handleCountChange}),r.a.createElement(q,{name:"epic",value:this.state.epicCount,onChange:this.handleCountChange}),r.a.createElement(q,{name:"legendary",value:this.state.legendaryCount,onChange:this.handleCountChange}),r.a.createElement("span",null,r.a.createElement("div",{style:H,className:"waves-effect waves-light btn "+this.rollEnabled(),onClick:this.handleRoll},"roll"),r.a.createElement("div",{style:H,className:"waves-effect waves-light btn "+this.props.pushDisabled,onClick:this.handlePush},"push"),r.a.createElement("div",{style:Object(v.a)({},H,{display:"none"}),className:"waves-effect waves-light btn "+this.props.prideDisabled,onClick:this.handlePride},"pride")))}}]),t}(n.Component);var V=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.dice.filter(function(e){return"base"===e.props.type})),r.a.createElement("div",null,e.dice.filter(function(e){return"skill"===e.props.type})),r.a.createElement("div",null,e.dice.filter(function(e){return"gear"===e.props.type})),r.a.createElement("div",null,e.dice.filter(function(e){return"mighty"===e.props.type})),r.a.createElement("div",null,e.dice.filter(function(e){return"epic"===e.props.type})),r.a.createElement("div",null,e.dice.filter(function(e){return"legendary"===e.props.type})))};h.a.AutoInit();var X=b.a.engines.mt19937().autoSeed(),Y={d6:b.a.integer(1,6),d8:b.a.integer(1,8),d10:b.a.integer(1,10),d12:b.a.integer(1,12),base:b.a.integer(1,6),skill:b.a.integer(1,6),gear:b.a.integer(1,6),mighty:b.a.integer(1,8),epic:b.a.integer(1,10),legendary:b.a.integer(1,12)};function Z(e){return Y[e](X)}function ee(e,t,a,n,o,l){for(var i=[],s=0,c=0;c<e;c++)i.push(r.a.createElement(G,{value:Z("base"),type:"base",key:s})),s++;for(var u=0;u<t;u++)i.push(r.a.createElement(G,{value:Z("skill"),type:"skill",key:s})),s++;for(var p=0;p<a;p++)i.push(r.a.createElement(G,{value:Z("gear"),type:"gear",key:s})),s++;for(var d=0;d<n;d++)i.push(r.a.createElement(G,{value:Z("mighty"),type:"mighty",key:s})),s++;for(var h=0;h<o;h++)i.push(r.a.createElement(G,{value:Z("epic"),type:"epic",key:s})),s++;for(var m=0;m<l;m++)i.push(r.a.createElement(G,{value:Z("legendary"),type:"legendary",key:s})),s++;return i}var te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={baseCount:0,skillCount:0,gearCount:0,mightyCount:0,epicCount:0,legendaryCount:0,dice:ee(0,0,0),pushDisabled:"disabled",rollDisabled:"disabled",prideDisabled:"disabled"},a.handleRoll=function(e){var t=e.baseCount,n=e.skillCount,r=e.gearCount,o=e.mightyCount,l=e.epicCount,i=e.legendaryCount;t=parseInt(t,10),n=parseInt(n,10),r=parseInt(r,10),o=parseInt(o,10),l=parseInt(l,10),i=parseInt(i,10),a.setState({baseCount:t,skillCount:n,gearCount:r,mightyCount:o,epicCount:l,legendaryCount:i,dice:ee(t,n,r,o,l,i),pushDisabled:"",prideDisabled:""})},a.handlePush=function(e){var t=[],n=!0,o=!1,l=void 0;try{for(var i,s=a.state.dice[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value;c.props.value>=6||1===c.props.value&&-1!==["base","gear"].indexOf(c.props.type)?t.push(c):t.push(r.a.createElement(G,{value:Z(c.props.type),type:c.props.type,key:c.key}))}}catch(u){o=!0,l=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw l}}a.setState({dice:t,pushDisabled:"",prideDisabled:""})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo hide-on-small-only",alt:"logo",style:{marginBottom:"5px"}}),r.a.createElement("h1",{className:"App-title"},"Welcome to FBL Roller")),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4"},r.a.createElement(K,{baseCount:this.state.baseCount,skillCount:this.state.skillCount,gearCount:this.state.gearCount,mightyCount:this.state.mightyCount,epicCount:this.state.epicCount,legendaryCount:this.state.legendaryCount,handleRoll:this.handleRoll,handlePush:this.handlePush,handlePride:this.handlePride,pushDisabled:this.state.pushDisabled,rollDisabled:this.state.rollDisabled,prideDisabled:this.state.prideDisabled})),r.a.createElement("div",{className:"col s8"},r.a.createElement(V,{dice:this.state.dice}))))),r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"col s4"},"A dice roller for:"," ",r.a.createElement("a",{href:"http://frialigan.se/en/games/forbidden-lands/",rel:"noopener noreferrer",target:"_blank"},"Forbidden Lands")),r.a.createElement("div",{className:"col s4"},"Icons from:"," ",r.a.createElement("a",{href:"http://game-icons.net",rel:"noopener noreferrer",target:"_blank"},"game-icons.net")),r.a.createElement("div",{className:"col s4"},"Contribute on:"," ",r.a.createElement("a",{href:"https://github.com/vlototskyi/fbl-roller",rel:"noopener noreferrer",target:"_blank"},"Github")))))))}}]),t}(n.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(te,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/fbl-roller",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/fbl-roller","/service-worker.js");ae?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ne(e)})}}()}],[[25,2,1]]]);
//# sourceMappingURL=main.5c181bf9.chunk.js.map