(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(454)}])},454:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return D}});var r=t(5666),a=t.n(r),o=t(5893),i=t(2212),c=t(7294),s=t(1217),u=function(n,e){return"".concat(void 0===e?"#":e).concat(n.toString(16).padStart(6,"0"))},d=function(n){var e="".concat(n.color.toString(16).padStart(6,"0")),t="".concat(n.ambient.toString(16).padStart(6,"0")),r=function(n,e,t){return n.substring(e,t).toUpperCase()};return{color:[r(e,0,2)+r(e,2,4),r(e,4,6)+"00"],ambient:[r(t,0,2)+r(t,2,4),r(t,4,6)+"00"]}},l=function(n){var e=new s.E;return new Promise((function(t,r){e.load(n,(function(n){t(n)}),void 0,(function(n){r(n)}))}))},p=function(n){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(n);var e=document.createElement("textarea");return e.value=n,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),new Promise((function(n,t){document.execCommand("copy")?n(void 0):t(),e.remove()}))},m=function(n){var e=n.toString(16);return 1==e.length?"0"+e:e},f=function(n,e,t){return parseInt("0x"+m(n)+m(e)+m(t),16)},h=t(9468),v=t.n(h),w=function(n){var e=d(n.Hat),t=d(n.Overall),r=d(n.Gloves),a=d(n.Shoes),o=d(n.Face),i=d(n.Hair);return"8107EC40 ".concat(e.color[0],"\n")+"8107EC42 ".concat(e.color[1],"\n")+"8107EC38 ".concat(e.ambient[0],"\n")+"8107EC3A ".concat(e.ambient[1],"\n")+"8107EC28 ".concat(t.color[0],"\n")+"8107EC2A ".concat(t.color[1],"\n")+"8107EC20 ".concat(t.ambient[0],"\n")+"8107EC22 ".concat(t.ambient[1],"\n")+"8107EC58 ".concat(r.color[0],"\n")+"8107EC5A ".concat(r.color[1],"\n")+"8107EC50 ".concat(r.ambient[0],"\n")+"8107EC52 ".concat(r.ambient[1],"\n")+"8107EC70 ".concat(a.color[0],"\n")+"8107EC72 ".concat(a.color[1],"\n")+"8107EC68 ".concat(a.ambient[0],"\n")+"8107EC6A ".concat(a.ambient[1],"\n")+"8107EC88 ".concat(o.color[0],"\n")+"8107EC8A ".concat(o.color[1],"\n")+"8107EC80 ".concat(o.ambient[0],"\n")+"8107EC82 ".concat(o.ambient[1],"\n")+"8107ECA0 ".concat(i.color[0],"\n")+"8107ECA2 ".concat(i.color[1],"\n")+"8107EC98 ".concat(i.ambient[0],"\n")+"8107EC9A ".concat(i.ambient[1],"\n")},x=t(9365);function b(n,e,t,r,a,o,i){try{var c=n[o](i),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function g(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){b(o,r,a,i,c,"next",n)}function c(n){b(o,r,a,i,c,"throw",n)}i(void 0)}))}}var C,E,_,j,k={Hat:{color:16711680,ambient:8323072},Hair:{color:7538176,ambient:3736320},Gloves:{color:16777215,ambient:8355711},Overall:{color:255,ambient:127},Shoes:{color:7478286,ambient:3739143},Face:{color:16695673,ambient:8347708}},y=!0,S=!0,M=function(){E.scene.traverse((function(n){if(n.isMesh){var e=n.material.name,t=k[e];void 0!=t&&(n.material=new i.YBo({color:t.ambient,emissive:t.color,emissiveIntensity:.3,side:i.ehD,name:e}))}})),C.add(E.scene)},N=g(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("models/mario.glb");case 2:E=n.sent,M();case 4:case"end":return n.stop()}}),n)}))),I=function(){(j=new i.CP7({antialias:!0})).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(j.domElement),_=new i.cPb(40,window.innerWidth/window.innerHeight,1,2e3);var n=new x.z(_,j.domElement);_.position.set(0,6,11),n.update(),n.autoRotate=y,n.autoRotateSpeed=5,(C=new i.xsS).background=new i.Ilk(14540253);var e=new i.VLJ(5,5);C.add(e),function(){var n=new i.Mig(16777215,.6);C.add(n);var e=new i.cek(16777215,.8);_.add(e),C.add(_)}(),N();var t=function(){requestAnimationFrame(t),n.update(),e.visible=S,j.render(C,_),n.autoRotate=y};t()},H=function(){Object.keys(k).map((function(n){if("Face"!=n){var e=k[n],t=Math.round(16777215*Math.random()),r=function(n){return{r:n>>16&255,g:n>>8&255,b:255&n}}(t),a=f(Math.round((r.r+1)/2),Math.round((r.g+1)/2),Math.round((r.b+1)/2));e.color=t,e.ambient=a,document.getElementById("".concat(n,"-color")).value=u(t),document.getElementById("".concat(n,"-ambient")).value=u(a)}}))},P=g(a().mark((function n(e,t){var r,o,i,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=0;r<e.length;r++)o=e[r].trim(),i=o.substring(2,8),c=f(parseInt(o.substring(9,11),16),parseInt(o.substring(11,13),16),parseInt(e[r+1].substring(9,11),16)),t.forEach((function(n){switch(n.addresses.indexOf(i)){case 0:n.material.color=c;break;case 1:n.material.ambient=c}})),r++;case 1:case"end":return n.stop()}}),n)}))),A=g(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=0;case 1:if(!(e<100*Math.random())){n.next=7;break}return n.next=4,new Promise((function(n){var e=setTimeout((function(){H(),M(),n(null),clearTimeout(e)}),50)}));case 4:e++,n.next=1;break;case 7:case"end":return n.stop()}}),n)}))),D=function(){var n=c.useRef(null);(0,c.useEffect)((function(){I(),window.addEventListener("resize",(function(){_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),j.setSize(window.innerWidth,window.innerHeight)}),!1),window.addEventListener("keypress",(function(n){"r"==n.key&&A()}))}),[]);var e=(0,c.useState)(!0),t=e[0],r=e[1],i=Object.keys(k).map((function(n,e){var t=k[n],r=u(t.color),a=u(t.ambient);return(0,o.jsxs)("div",{className:v().input,children:[(0,o.jsx)("div",{className:v().cp_wrapper,children:(0,o.jsx)("input",{type:"color",id:n+"-color",defaultValue:r,onChange:function(n){n.preventDefault(),t.color=parseInt(n.target.value.replace("#","0x"),16),M()}})}),(0,o.jsx)("div",{className:v().cp_wrapper,children:(0,o.jsx)("input",{type:"color",id:n+"-ambient",defaultValue:a,onChange:function(n){n.preventDefault(),t.ambient=parseInt(n.target.value.replace("#","0x"),16),M()}})}),(0,o.jsxs)("span",{children:["Hat"==n?"Hat / Body":n," Color"]})]},"CInput-"+n)}));return(0,o.jsxs)("div",{ref:n,className:v().container,style:{paddingBottom:t?"10px":"0"},children:[(0,o.jsxs)("div",{className:v().title,style:{borderBottomWidth:t?"2px":"0"},children:[(0,o.jsx)("img",{width:26,height:26,src:"saturn-logo.png"}),(0,o.jsx)("span",{children:"Saturn Color Editor"}),(0,o.jsx)("div",{className:v().toggle,onClick:function(n){r(!t)},children:(0,o.jsx)("img",{src:t?"minimize.png":"maximize.png"})})]}),(0,o.jsxs)("div",{style:{display:t?"block":"none",padding:"0",margin:"0"},children:[(0,o.jsxs)("div",{className:v().input,children:[(0,o.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(n){y=n.target.checked}}),(0,o.jsx)("span",{children:"Auto Rotate"})]}),(0,o.jsxs)("div",{className:v().input,children:[(0,o.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(n){S=n.target.checked}}),(0,o.jsx)("span",{children:"Show Grid"})]}),i,(0,o.jsxs)("div",{className:v().buttons,children:[(0,o.jsx)("button",{onClick:g(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,navigator.clipboard.readText();case 3:return n.next=5,n.sent.split("\n").filter((function(n){return n.length>1}));case 5:return t=n.sent,n.next=8,P(t,[{addresses:["07EC40","07EC38"],material:k.Hat},{addresses:["07EC28","07EC20"],material:k.Overall},{addresses:["07EC58","07EC50"],material:k.Gloves},{addresses:["07EC70","07EC68"],material:k.Shoes},{addresses:["07EC88","07EC80"],material:k.Face},{addresses:["07ECA0","07EC98"],material:k.Hair}]);case 8:M();case 9:case"end":return n.stop()}}),n)}))),children:"Import GS"}),(0,o.jsx)("button",{onClick:g(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),p(w(k)),alert("Copied to clipboard");case 3:case"end":return n.stop()}}),n)}))),children:"Export GS"})]}),(0,o.jsxs)("div",{className:v().buttons,children:[(0,o.jsx)("button",{onClick:function(n){n.preventDefault(),H(),M()},children:"Random"}),(0,o.jsx)("button",{onClick:g(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),A(),M();case 3:case"end":return n.stop()}}),n)}))),children:"I\u2019m Feeling Lucky"})]}),(0,o.jsxs)("span",{className:v().footer,children:["Saturn Links -",(0,o.jsx)("a",{href:"https://discord.gg/rGqREG2kYv",children:(0,o.jsx)("img",{src:"discord.png",width:16})}),(0,o.jsx)("a",{href:"https://github.com/Llennpie/SaturnColorEditor",children:(0,o.jsx)("img",{src:"github.png",width:16})}),(0,o.jsx)("a",{href:"https://ko-fi.com/sm64rise",children:(0,o.jsx)("img",{src:"kofi.png",width:20})})]}),(0,o.jsxs)("span",{className:v().footer,children:["Made with",(0,o.jsx)("img",{src:"heart.png",width:16,height:16}),"by ",(0,o.jsx)("a",{className:v().twitter,href:"https://twitter.com/KiritoDev",children:"@KiritoDev"})]})]})]})}},9468:function(n){n.exports={container:"Main_container__dC3f_",title:"Main_title__yRPCP",toggle:"Main_toggle__TpY_K",input:"Main_input__qJUZG",cp_wrapper:"Main_cp_wrapper__SngCd",footer:"Main_footer__wjm3M",twitter:"Main_twitter__qlnrv",buttons:"Main_buttons__d_jSW"}}},function(n){n.O(0,[737,330,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);