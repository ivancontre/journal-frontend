(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(33),o=a.n(c),i=a(8),u=a(21),l=a(22),s=a(11),m=a(28);a(175),a(77);m.a.initializeApp({apiKey:"AIzaSyCzjnba2hv43mXotp3eXRGZoG7vWReHNSw",authDomain:"react-app-cursos-a6594.firebaseapp.com",projectId:"react-app-cursos-a6594",storageBucket:"react-app-cursos-a6594.appspot.com",messagingSenderId:"453455526167",appId:"1:453455526167:web:f65b1705a185cb96a55f52"});var d=m.a.firestore(),p=new m.a.auth.GoogleAuthProvider,f=a(5),b=a(9),h=a.n(b),v=a(16),E=a(10),g=a.n(E),_=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dbsn0szhn/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dbsn0szhn/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="[Auth] Login",y="[Auth] Logout",N="[UI] Set Error",w="[UI] Remove Error",x="[UI] Start loading",k="[UI] Finish loading",C="[Notes] New note",I="[Notes] Set active note",S="[Notes] Load notes",A="[Notes] Update note",U="[Notes] Deleted note",P="[Notes] Logout cleaning",D=function(e,t){return{type:C,payload:Object(f.a)({id:e},t)}},L=function(e,t){return{type:I,payload:Object(f.a)({id:e},t)}},z=function(e){return{type:S,payload:e}},G=function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a,n){var r,c,o,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),c=r.auth,o=c.uid,e.imageUrl||delete e.imageUrl,delete(i=Object(f.a)({},e)).id,t.prev=5,t.next=8,d.doc("".concat(o,"/journal/notes/").concat(e.id)).update(i);case 8:a(R(e.id,e)),g.a.fire("Guardado",e.title,"success"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),g.a.fire("Error",t.t0.error.message,"error");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,a){return t.apply(this,arguments)}}()},R=function(e,t){return{type:A,payload:{id:e,note:Object(f.a)({id:e},t)}}},B=function(e){return{type:U,payload:e}},F=a(36),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(f.a)(Object(f.a)({},r),{},Object(F.a)({},t.name,t.value)))};return[r,i,o]},W=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{id:"inputFileId",type:"file",style:{display:"none"},onChange:function(t){var a=t.target.files;a&&e(function(e){return function(){var t=Object(v.a)(h.a.mark((function t(a,n){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g.a.fire({title:"Subiendo...",text:"Por favor espere",allowOutsideClick:!1,didOpen:function(){g.a.showLoading()}}),r=n().notes.active,t.prev=2,t.next=5,_(e);case 5:c=t.sent,r.imageUrl=c,g.a.close(),a(G(r)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),g.a.close(),g.a.fire("Error",t.t0.error.message,"error");case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(a[0]))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.getElementById("inputFileId").click()}},"Imagen"),r.a.createElement("button",{className:"btn",onClick:function(){e(G(t))}},"Guardar")))},X=function(){var e=Object(i.c)((function(e){return e.notes})).active,t=T(e),a=Object(u.a)(t,3),c=a[0],o=a[1],l=a[2],s=c.title,m=c.body,p=Object(n.useRef)(e.id),b=Object(i.b)();return Object(n.useEffect)((function(){e.id!==p.current&&(l(e),p.current=e.id)}),[e,l]),Object(n.useEffect)((function(){b(L(c.id,Object(f.a)({},c)))}),[c,b]),r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(W,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Alg\xfan t\xedtulo",className:"notes__title-input",autoComplete:"off",value:s,onChange:o}),r.a.createElement("textarea",{name:"body",placeholder:"\xbfQu\xe9 pas\xf3 hoy?",className:"notes__textarea",value:m,onChange:o}),e.imageUrl&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:e.imageUrl,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){var t;b((t=e.id,function(e,a){var n=a().auth.uid;g.a.fire({title:"\xbfSeguro que dese eliminar la nota?",showCancelButton:!0,confirmButtonText:"S\xed"}).then(function(){var a=Object(v.a)(h.a.mark((function a(r){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.isConfirmed){a.next=13;break}return g.a.fire({title:"Eliminado...",text:"Por favor espere",allowOutsideClick:!1,didOpen:function(){g.a.showLoading()}}),a.prev=2,a.next=5,d.doc("".concat(n,"/journal/notes/").concat(t)).delete();case 5:e(B(t)),g.a.close(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),g.a.fire("Error",a.t0.error.message,"error"),g.a.close();case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}())}))}},"Borrar"))},q=a(29),J=a(30),H=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Seleccione algo",r.a.createElement("br",null),"Cree una nueva entrada"),r.a.createElement(J.a,{icon:q.c,className:"mt-5",size:"4x"}))},K=a(67),M=a.n(K),Q=function(e){var t=e.id,a=e.title,n=e.body,c=e.date,o=e.imageUrl,u=M()(c),l=Object(i.b)();return r.a.createElement("div",{className:"journal__entry animate__animated animate__fadeIn animate__faster",onClick:function(){l(L(t,{title:a,body:n,date:c,imageUrl:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},a),r.a.createElement("p",{className:"journal__entry-content"},n)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},V=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries pointer"},e.map((function(e){return r.a.createElement(Q,Object.assign({key:e.id},e))})))},Y=function(e){return{type:N,payload:e}},Z=function(){return{type:w}},$=function(){return{type:k}},ee=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},te=function(e,t){return function(a){a({type:x}),m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(ee(t.uid,t.displayName)),a($())})).catch((function(e){g.a.fire("Error",e.message,"error"),a($())}))}},ae=function(){return{type:y}},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement(J.a,{icon:q.b}),r.a.createElement("span",null," ",t," ")),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(ae()),t({type:P});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Salir")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.auth,c=r.uid,o={title:"",body:"",date:(new Date).getTime(),imageUrl:""},g.a.fire({title:"Creando nueva nota...",text:"Por favor espere",allowOutsideClick:!1,didOpen:function(){g.a.showLoading()}}),e.prev=4,e.next=7,d.collection("".concat(c,"/journal/notes")).add(o);case 7:i=e.sent,t(L(i.id,o)),t(D(i.id,o)),g.a.close(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),g.a.close(),g.a.fire("Error",e.t0.error.message,"error");case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement(J.a,{icon:q.a,size:"5x"}),r.a.createElement("p",{className:"mt-5"}," Nueva entrada ")),r.a.createElement(V,null))},re=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal_main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(ne,null),r.a.createElement("main",null,e?r.a.createElement(X,null):r.a.createElement(H,null)))},ce=a(37),oe=a.n(ce),ie=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),a=t.msgError,n=t.loading,c=T({email:"ivanc.contre@gmail.com",password:"123456"}),o=Object(u.a)(c,2),s=o[0],d=s.email,f=s.password,b=o[1],h=function(){return oe.a.isEmail(d)?!f||f.lenght<5?(e(Y("Password should be at least 6 characteres and match each other")),!1):(e(Z()),!0):(e(Y("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Iniciar sesi\xf3n"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),h()&&e(te(d,f))},className:"animate__animated animate__fadeIn animate__faster"},a&&r.a.createElement("div",{className:"auth__alert-error"},a),r.a.createElement("input",{className:"auth__input",type:"text",placeholder:"Correo",name:"email",autoComplete:"off",value:d,onChange:b}),r.a.createElement("input",{className:"auth__input",type:"password",placeholder:"Contrase\xf1a",name:"password",value:f,onChange:b}),r.a.createElement("button",{disabled:n,className:"btn btn-primary btn-block",type:"submit"},"Ingresar"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Ingresar con google"),r.a.createElement("div",{onClick:function(){e((function(e){m.a.auth().signInWithPopup(p).then((function(t){var a=t.user;e(ee(a.uid,a.displayName))}))}))},className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(l.b,{to:"/auth/register",className:"link"},"Crea una nueva cuenta")))},ue=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,a=T({name:"Iv\xe1n",email:"ivanc.contre@gmail.com",password1:"123456",password2:"123456"}),n=Object(u.a)(a,2),c=n[0],o=c.name,s=c.email,d=c.password1,p=c.password2,f=n[1],b=function(){return 0===o.trim().length?(e(Y("Name is required")),!1):oe.a.isEmail(s)?d!==p||d.lenght<5?(e(Y("Password should be at least 6 characteres and match each other")),!1):(e(Z()),!0):(e(Y("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Registro"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),b()&&e(function(e,t,a){return function(n){m.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(v.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(ee(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){g.a.fire("Error",e.message,"error")}))}}(s,d,o))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{className:"auth__input",type:"text",placeholder:"Nombre",name:"name",autoComplete:"off",value:o,onChange:f}),r.a.createElement("input",{className:"auth__input",type:"text",placeholder:"Correo",name:"email",autoComplete:"off",value:s,onChange:f}),r.a.createElement("input",{className:"auth__input",type:"password",placeholder:"Contrase\xf1a",name:"password1",value:d,onChange:f}),r.a.createElement("input",{className:"auth__input",type:"password",placeholder:"Confirmar contrase\xf1a",name:"password2",value:p,onChange:f}),r.a.createElement("button",{className:"btn btn-primary btn-block mb-5",type:"submit"},"Registrar"),r.a.createElement(l.b,{to:"/auth/login",className:"link"},"\xbfYa registrado?")))},le=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/auth/login",component:ie}),r.a.createElement(s.b,{exact:!0,path:"/auth/register",component:ue}),r.a.createElement(s.a,{to:"/auth/login"}))))},se=a(38),me=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,me);return r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=["isAuthenticated","component"],fe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,pe);return localStorage.setItem("lastPath",n.location.pathname),r.a.createElement(s.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/auth/login"})}}))},be=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],o=a[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){m.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(ee(t.uid,t.displayName)),b(!0),e((a=t.uid,function(){var e=Object(v.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(a);case 2:n=e.sent,t(z(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):b(!1),o(!1)}))}),[e,o,b]),c?r.a.createElement("h1",null,"Waiting..."):r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(de,{isAuthenticated:f,component:le,path:"/auth"}),r.a.createElement(fe,{isAuthenticated:f,component:re,path:"/",exact:!0}),r.a.createElement(s.a,{to:"/auth/login"}))))},he=a(31),ve=a(68),Ee=a(47),ge={notes:[],active:null},_e={loading:!1,msgError:null},je="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,Oe=Object(he.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)(Object(f.a)({},e),{},{msgError:t.payload});case w:return Object(f.a)(Object(f.a)({},e),{},{msgError:null});case x:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case k:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payload)});case C:return console.log(t.payload),Object(f.a)(Object(f.a)({},e),{},{notes:[t.payload].concat(Object(Ee.a)(e.notes))});case S:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(Ee.a)(t.payload)});case A:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return t.payload.id===e.id?t.payload.note:e}))});case U:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.payload})),active:null});case P:return{notes:[],active:null};default:return e}}}),ye=Object(he.d)(Oe,je(Object(he.a)(ve.a))),Ne=(a(172),function(){return r.a.createElement(i.a,{store:ye},r.a.createElement(be,null))});a(173);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},69:function(e,t,a){e.exports=a(174)}},[[69,1,2]]]);
//# sourceMappingURL=main.d4aa506c.chunk.js.map