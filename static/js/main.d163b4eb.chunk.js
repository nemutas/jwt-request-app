(this.webpackJsonpjwt_todo_app=this.webpackJsonpjwt_todo_app||[]).push([[0],{242:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);a(242);var n,r,c,i,s,o,l,d,u,p=a(0),j=a.n(p),b=a(12),h=a.n(b),g=a(15),O=a(233),f=a(41),m=a(395),v=a(288),x=a(20),w=a(35),k=a(21),N=a(287),y=a(275),C=a(394),S=a(396),T=a(7),W=a(11),I=a.n(W),_=a(27),P=a(19),E=a(8),H=a(40),A=a(271),D=a(276),L=a(277),B=a(290),F=a(279),J=a(64),U=a.n(J),V="https://asia-northeast1-nemutas-express-jwt.cloudfunctions.net/api/v1/todo",q=function(e){return{headers:{Authorization:"Bearer ".concat(e)}}},G=function(e){var t=500,a="Internal Server Error";return e.response&&e.response.data&&(t=e.response.status,a=e.response.data.error),{status:t,message:a,isSuccess:!1}},z=function(){var e=Object(P.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(V,q(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",{data:n,log:{status:a.status,message:"success get request",isSuccess:!0}});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{data:[],log:G(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(P.a)(I.a.mark((function e(t,a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post(V,a,q(t));case 3:return n=e.sent,e.abrupt("return",{log:{status:n.status,message:n.data.message,isSuccess:!0}});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{log:G(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(P.a)(I.a.mark((function e(t,a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.delete(V+"/".concat(a),q(t));case 3:return n=e.sent,e.abrupt("return",{log:{status:n.status,message:n.data.message,isSuccess:!0}});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{log:G(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(P.a)(I.a.mark((function e(t,a,n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.put(V+"/".concat(a),n,q(t));case 3:return r=e.sent,e.abrupt("return",{log:{status:r.status,message:r.data.message,isSuccess:!0}});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{log:G(e.t0)});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),$=Object(g.b)({key:"state/todos",default:[]}),K=Object(g.b)({key:"state/logs",default:[]}),Q=Object(g.b)({key:"state/jwt",default:""}),Y=Object(g.b)({key:"state/selectedTodo",default:{id:"",title:"",description:"",completed:!1,created_at:"",updated_at:""}}),Z=a(4),ee=function(){var e=te(),t=Object(g.f)($),a=Object(g.f)(K),n=Object(g.c)(Q),r=Object(E.a)(n,2),c=r[0],i=r[1],s=Object(g.c)(Y),o=Object(E.a)(s,2),l=o[0],d=o[1],u=Object(g.e)(Y),j=Object(p.useState)({title:"",description:"",completed:!1}),b=Object(E.a)(j,2),h=b[0],O=b[1],f=function(){var e=Object(P.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(c);case 2:n=e.sent,t(n.data),a((function(e){return[n.log].concat(Object(_.a)(e))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(c,h);case 2:if(t=e.sent,a((function(e){return[t.log].concat(Object(_.a)(e))})),!t.log.isSuccess){e.next=8;break}return O({title:"",description:"",completed:!1}),e.next=8,f();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(P.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:l.title,description:l.description,completed:l.completed},e.next=3,X(c,l.id,t);case 3:if(n=e.sent,a((function(e){return[n.log].concat(Object(_.a)(e))})),!n.log.isSuccess){e.next=9;break}return u(),e.next=9,f();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Z.jsx)("div",{className:ae,children:Object(Z.jsxs)("div",{className:ne,children:[Object(Z.jsxs)("div",{children:[Object(Z.jsx)(H.a,{className:e.header,variant:"h5",children:"Specify JWT"}),Object(Z.jsx)(A.a,{className:e.jwt,id:"jwt",label:"JWT",multiline:!0,fullWidth:!0,value:c,onChange:function(e){i(e.target.value)}})]}),Object(Z.jsx)(y.a,{className:e.divider}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(H.a,{className:e.header,variant:"h5",children:"Get Todos"}),Object(Z.jsx)(D.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,onClick:f,children:"GET"})]}),Object(Z.jsx)(y.a,{className:e.divider}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{className:re,children:[Object(Z.jsx)(H.a,{className:e.header,variant:"h5",children:"Post Todo"}),Object(Z.jsx)("span",{}),Object(Z.jsx)(L.a,{control:Object(Z.jsx)(B.a,{color:"primary",name:"complited",checked:h.completed,onChange:function(e){return O((function(t){return Object(T.a)(Object(T.a)({},t),{},{completed:e.target.checked})}))}}),label:"Complited"})]}),Object(Z.jsx)(A.a,{className:e.title,id:"title_post",label:"Title",fullWidth:!0,value:h.title,onChange:function(e){O((function(t){return Object(T.a)(Object(T.a)({},t),{},{title:e.target.value})}))}}),Object(Z.jsx)(A.a,{className:e.desc,id:"desc_post",label:"Description",multiline:!0,fullWidth:!0,value:h.description,onChange:function(e){O((function(t){return Object(T.a)(Object(T.a)({},t),{},{description:e.target.value})}))}}),Object(Z.jsx)(D.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,disabled:!h.title,onClick:m,children:"POST"})]}),Object(Z.jsx)(y.a,{className:e.divider}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("div",{className:re,children:[Object(Z.jsx)(H.a,{className:e.header,variant:"h5",children:"Put Todo"}),Object(Z.jsx)(A.a,{id:"id",fullWidth:!0,disabled:!0,value:l.id,InputProps:{startAdornment:Object(Z.jsx)(F.a,{position:"start",children:"ID"})}}),Object(Z.jsx)(L.a,{control:Object(Z.jsx)(B.a,{color:"primary",name:"complited",checked:l.completed,onChange:function(e){d((function(t){return Object(T.a)(Object(T.a)({},t),{},{completed:e.target.checked})}))}}),label:"Complited"})]}),Object(Z.jsx)(A.a,{className:e.title,id:"title_put",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){d((function(t){return Object(T.a)(Object(T.a)({},t),{},{title:e.target.value})}))}}),Object(Z.jsx)(A.a,{className:e.desc,id:"desc_put",label:"Description",multiline:!0,fullWidth:!0,value:l.description,onChange:function(e){d((function(t){return Object(T.a)(Object(T.a)({},t),{},{description:e.target.value})}))}}),Object(Z.jsx)(D.a,{className:e.button,variant:"contained",color:"primary",fullWidth:!0,disabled:!l.title||!l.id,onClick:v,children:"PUT"})]})]})})},te=Object(C.a)((function(e){return Object(S.a)({header:{color:e.palette.primary.main},jwt:{marginTop:e.spacing(2)},title:{marginTop:e.spacing(2)},desc:{marginTop:e.spacing(2)},id:{marginTop:e.spacing(2)},button:{marginTop:e.spacing(2)},divider:{margin:e.spacing(3,0,2),backgroundColor:e.palette.secondary.dark}})})),ae=Object(k.a)(n||(n=Object(x.a)(["\n\twidth: 100%;\n\theight: calc(100vh - 50px);\n\toverflow: auto;\n\tpadding-right: 5px;\n"]))),ne=Object(k.a)(r||(r=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: auto auto auto auto 1fr auto 1fr;\n"]))),re=Object(k.a)(c||(c=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgrid-gap: 20px;\n\talign-items: center;\n\tjustify-content: center;\n"]))),ce=a(291),ie=a(280),se=a(281),oe=a(49),le=a(52),de=function(){var e=ue(),t=Object(g.d)(K),a=Object(p.useCallback)((function(t){return t?Object(Z.jsx)(ce.a,{"aria-label":"recipe",className:e.avatarSuccess,children:"!"}):Object(Z.jsx)(ce.a,{"aria-label":"recipe",className:e.avatarError,children:"X"})}),[e.avatarError,e.avatarSuccess]);return Object(Z.jsx)("div",{className:je,children:Object(Z.jsx)("div",{className:pe,children:t.map((function(t,n){return Object(Z.jsx)(ie.a,{className:e.cardContainer,children:Object(Z.jsx)(se.a,{className:e.cardHeader,avatar:a(t.isSuccess),title:t.message,subheader:t.status})},n)}))})})},ue=Object(C.a)((function(e){return Object(S.a)({cardContainer:{width:"100%",padding:e.spacing(1)},cardHeader:{padding:0},avatarError:{width:e.spacing(4),height:e.spacing(4),backgroundColor:oe.a[500]},avatarSuccess:{width:e.spacing(4),height:e.spacing(4),backgroundColor:le.a[600]}})})),pe=Object(k.a)(i||(i=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-gap: 10px;\n"]))),je=Object(k.a)(s||(s=Object(x.a)(["\n\twidth: 100%;\n\theight: 250px;\n\toverflow: auto;\n\tpadding-right: 5px;\n"]))),be=a(278),he=a(286),ge=a(232),Oe=a.n(ge),fe=function(){var e=me(),t=Object(g.c)($),a=Object(E.a)(t,2),n=a[0],r=a[1],c=Object(g.f)(K),i=Object(g.d)(Q),s=Object(g.f)(Y),o=function(){var e=Object(P.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(i,t);case 2:if(a=e.sent,c((function(e){return[a.log].concat(Object(_.a)(e))})),!a.log.isSuccess){e.next=10;break}return e.next=7,z(i);case 7:n=e.sent,r(n.data),c((function(e){return[n.log].concat(Object(_.a)(e))}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(p.useCallback)((function(t,a){var n=t.slice(0,1),r=a?e.avatarComplete:e.avatarIncomplete;return Object(Z.jsx)(ce.a,{"aria-label":"recipe",className:r,children:n})}),[e.avatarComplete,e.avatarIncomplete]);return Object(Z.jsx)("div",{className:xe,children:Object(Z.jsx)("div",{className:ve,children:n.map((function(t){return Object(Z.jsxs)(ie.a,{className:e.cardContainer,children:[Object(Z.jsx)(se.a,{avatar:Object(Z.jsx)(be.a,{onClick:function(e){!function(e){s(e)}(t)},children:l(t.title,t.completed)}),action:Object(Z.jsx)(be.a,{"aria-label":"delete",onClick:function(e){o(t.id)},children:Object(Z.jsx)(Oe.a,{})}),title:t.title,subheader:new Date(t.updated_at).toLocaleString()}),Object(Z.jsx)(he.a,{className:e.cardcontent,children:Object(Z.jsx)(H.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description})})]},t.id)}))})})},me=Object(C.a)((function(e){return Object(S.a)({cardContainer:{width:"340px",margin:"0 auto"},avatarComplete:{backgroundColor:e.palette.primary.main},avatarIncomplete:{backgroundColor:e.palette.grey[600]},cardcontent:{paddingTop:0}})})),ve=Object(k.a)(o||(o=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n\tgrid-gap: 10px;\n\twidth: 100%;\n"]))),xe=Object(k.a)(l||(l=Object(x.a)(["\n\twidth: 100%;\n\theight: calc(100vh - 350px);\n\toverflow: auto;\n\tpadding-right: 5px;\n"]))),we=function(){var e=ke();return Object(Z.jsxs)(N.a,{container:!0,className:e.gridContainer,component:"main",children:[Object(Z.jsx)(N.a,{item:!0,className:e.gridItem,xs:12,sm:5,children:Object(Z.jsx)(ee,{})}),Object(Z.jsx)("div",{className:e.dividerVContainer,children:Object(Z.jsx)(y.a,{className:e.dividerV,orientation:"vertical"})}),Object(Z.jsx)("div",{className:e.dividerHContainer,children:Object(Z.jsx)(y.a,{className:e.dividerH})}),Object(Z.jsx)(N.a,{item:!0,className:e.gridItem,xs:12,sm:7,children:Object(Z.jsxs)("div",{className:ye,children:[Object(Z.jsx)("div",{className:Ne,children:Object(Z.jsx)(fe,{})}),Object(Z.jsx)(y.a,{className:e.dividerH}),Object(Z.jsx)(de,{})]})})]})},ke=Object(C.a)((function(e){return Object(S.a)({gridContainer:{width:"100%",height:"100vh"},gridItem:{padding:e.spacing(3),width:"100%"},dividerVContainer:Object(w.a)({padding:e.spacing(2,0)},e.breakpoints.down("sm"),{display:"none"}),dividerHContainer:Object(w.a)({width:"100%",margin:"-1px 0",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{display:"none"}),dividerV:{margin:"0 -1px",backgroundColor:e.palette.primary.dark},dividerH:{margin:"-1px 0",padding:e.spacing(0,2),backgroundColor:e.palette.primary.dark}})})),Ne=Object(k.a)(d||(d=Object(x.a)(["\n\twidth: 100%;\n"]))),ye=Object(k.a)(u||(u=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: 1fr auto auto;\n\tgrid-gap: 20px;\n"]))),Ce=function(){var e=Object(O.a)({palette:{primary:{main:f.a.orange[800]},type:"dark"}});return Object(Z.jsxs)(m.a,{theme:e,children:[Object(Z.jsx)(v.a,{}),Object(Z.jsx)(we,{})]})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,397)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}h.a.render(Object(Z.jsx)(j.a.StrictMode,{children:Object(Z.jsx)(g.a,{children:Object(Z.jsx)(Ce,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jwt-request-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jwt-request-app","/service-worker.js");Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):We(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):We(t,e)}))}}(),Se()}},[[289,1,2]]]);
//# sourceMappingURL=main.d163b4eb.chunk.js.map