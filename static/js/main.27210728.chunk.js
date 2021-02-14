(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),i=n(23),o=n.n(i),r=n(8),l=(n(111),n(62)),j=n(102),u=n(61),d=n(31),h=n(34),b=n(16),f=n(17);var O=function(e){var t=e.tags,n=(e.setFilteredItems,e.getNotes),i=e.pfad,o=Object(c.useState)(t),l=Object(r.a)(o,2),j=l[0],u=l[1],O=Object(c.useState)(!1),g=Object(r.a)(O,2),m=g[0],p=g[1],x=Object(c.useState)(""),v=Object(r.a)(x,2),y=v[0],S=v[1],C=Object(c.useState)(""),N=Object(r.a)(C,2),T=N[0],w=N[1],k=Object(c.useState)(""),F=Object(r.a)(k,2),I=F[0],E=F[1],J=function(){return p(!1)};return s.a.useEffect((function(){u(t)}),[t],[j]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{variant:"primary",onClick:function(){return p(!0)},children:"New Note"}),Object(a.jsxs)(f.a,{show:m,onHide:J,children:[Object(a.jsx)(f.a.Header,{children:Object(a.jsx)(d.a,{inline:!0,children:Object(a.jsx)(h.a,{type:"text",placeholder:"Note Title",className:"mr-sm-2",value:y,onChange:function(e){return S(e.target.value)}})})}),Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)(d.a,{children:Object(a.jsx)("textarea",{rows:10,cols:40,placeholder:"Note Text",className:"mr-sm-2",value:T,onChange:function(e){e.preventDefault(),w(e.target.value)}})}),Object(a.jsxs)("select",{onChange:function(e){return E(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select Tag"},""),j.map((function(e){return Object(a.jsxs)("option",{value:e.tagid,children:["#",e.tagname]},e.tagid)}))]})]}),Object(a.jsxs)(f.a.Footer,{children:[Object(a.jsx)(b.a,{variant:"secondary",onClick:J,children:"Close"}),Object(a.jsx)(b.a,{variant:"primary",onClick:function(e){S(y),w(T),E(I),fetch(i+":3001/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({noteName:y,noteText:T,tag:I})}).then((function(e){n(),p(!1)})).then(p(!1))},children:"Save Note"}),Object(a.jsx)(b.a,{variant:"primary",onClick:function(e){!function(e){fetch(i+":3001/addTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tag:e,noteName:y})}).then((function(e){n()}))}(I)},children:"Add another tag"})]})]})]})},g=function(e){var t=e.tags,n=e.getNotes,i=e.load,o=e.setLoad,g=e.items,m=e.setFilteredItems,p=e.hashtags,x=e.pfad,v=Object(c.useState)(""),y=Object(r.a)(v,2),S=y[0],C=y[1],N=Object(c.useState)(!1),T=Object(r.a)(N,2),w=T[0],k=T[1],F=Object(c.useState)(""),I=Object(r.a)(F,2),E=I[0],J=I[1],L=Object(c.useState)(t),P=Object(r.a)(L,2),B=P[0],z=P[1],H=Object(c.useState)(""),D=Object(r.a)(H,2),A=D[0],U=D[1],W=function(){return k(!1)};Object(c.useEffect)((function(){n()}),[]),s.a.useEffect((function(){z(t)}),[t],[B]),Object(c.useEffect)((function(){m(g.filter((function(e){return e.notetext.toLowerCase().includes(S.toLowerCase())||e.notename.toLowerCase().includes(S.toLowerCase())})))}),[S]),Object(c.useEffect)((function(){m(_(A))}),[A]);var _=function(e){return p.filter((function(t){return t.tagname.toLowerCase().includes(e.toLowerCase())}))},G=function(e){U(e.target.text.substring(1)),i||o(!0)};return Object(a.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(a.jsx)(l.a.Brand,{href:"#home",children:"Zettelkasten"}),Object(a.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(a.jsxs)(j.a,{className:"mr-auto",children:[Object(a.jsx)(O,{tags:t,setFilteredItems:m,getNotes:n,pfad:x}),Object(a.jsxs)(u.a,{title:"Tags",id:"basic-nav-dropdown",children:[B.map((function(e){return Object(a.jsxs)(u.a.Item,{value:e.tagid,onClick:G,children:["#",e.tagname]},e.tagid)})),Object(a.jsx)(u.a.Divider,{}),Object(a.jsx)(u.a.Item,{href:"#action/3.4",onClick:function(){return k(!0)},children:"New Tag"}),Object(a.jsxs)(f.a,{show:w,onHide:W,children:[Object(a.jsx)(f.a.Header,{children:Object(a.jsx)(d.a,{inline:!0,children:Object(a.jsx)(h.a,{type:"text",placeholder:"new Tag",value:E,onChange:function(e){return J(e.target.value)}})})}),Object(a.jsxs)(f.a.Footer,{children:[Object(a.jsx)(b.a,{variant:"secondary",onClick:W,children:"Close"}),Object(a.jsx)(b.a,{variant:"primary",onClick:function(){fetch(x+":3001/newTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({neuesTag:E})}).then((function(e){return e.text()})).then((function(e){fetch(x+":3001/tags").then((function(e){return e.json()})).then((function(e){z(e)}))}))},children:"Save new Tag"})]})]})]}),Object(a.jsx)(b.a,{onClick:function(){o(!i),console.log(i)},children:"Show all"})]}),Object(a.jsx)(d.a,{inline:!0,children:Object(a.jsx)(h.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){C(e.target.value),i||o(!0)},value:S})})]})]})},m=(n(116),n(28)),p=function(e){var t=e.hashtag,n=Object(c.useState)(""),s=Object(r.a)(n,2),i=(s[0],s[1]);return Object(a.jsx)("div",{className:"hashTag",children:Object(a.jsxs)("small",{onClick:function(){console.log(t.tagname),i(t.tagname)},children:["#",t.tagname]})})},x=n(60),v=n(76),y=n.n(v);var S=function(e){var t=e.tags,n=(e.setFilteredItems,e.getNotes),i=e.item,o=e.pfad,l=Object(c.useState)(t),j=Object(r.a)(l,2),u=j[0],h=j[1],O=Object(c.useState)(!1),g=Object(r.a)(O,2),m=g[0],p=g[1],v=Object(c.useState)(i.notename),S=Object(r.a)(v,2),C=S[0],N=S[1],T=Object(c.useState)(i.notetext),w=Object(r.a)(T,2),k=w[0],F=w[1],I=Object(c.useState)(""),E=Object(r.a)(I,2),J=E[0],L=E[1],P=Object(c.useState)(i.noteid),B=Object(r.a)(P,2),z=B[0],H=(B[1],Object(c.useState)()),D=Object(r.a)(H,2),A=D[0],U=D[1],W=Object(c.useState)(""),_=Object(r.a)(W,2),G=_[0],M=_[1],Y=function(){return p(!1)};s.a.useEffect((function(){h(t)}),[t],[u]);var Z=function(e){var t=e.target.files[0],n="";return t.size>3e4&&(n=t.type+"is too large, please pick a smaller file\n",x.a.error(n)),!0};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{size:"sm",variant:"primary",onClick:function(){return p(!0)},children:"Edit"}),Object(a.jsxs)(f.a,{show:m,onHide:Y,children:[Object(a.jsx)(f.a.Header,{children:Object(a.jsx)(d.a,{inline:!0,children:Object(a.jsx)("input",{type:"text",value:C,className:"mr-sm-2",onChange:function(e){return N(e.target.value)}})})}),Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)(d.a,{children:Object(a.jsx)("textarea",{rows:10,cols:35,className:"mr-sm-2",value:k,onChange:function(e){return F(e.target.value)}})}),Object(a.jsxs)("select",{onChange:function(e){return L(e.target.value)},children:[Object(a.jsx)("option",{value:"",children:"Select Tag"},""),u.map((function(e){return Object(a.jsxs)("option",{value:e.tagid,children:["#",e.tagname]},e.tagid)})),Object(a.jsx)("option",{value:"0",onClick:function(){var e=prompt("Enter new Tag:");fetch(o+":3001/newTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({neuesTag:e})}).then((function(e){return e.text()})).then((function(e){fetch(o+":3001/tags").then((function(e){return e.json()})).then((function(e){h(e)}))}))},children:"Create new tag"},"0")]}),Object(a.jsxs)("form",{method:"post",action:"#",id:"#",children:[Object(a.jsxs)("div",{className:"form-group files",children:[Object(a.jsx)("label",{children:"Upload Your File "}),Object(a.jsx)("input",{type:"file",name:"file",className:"form-control",onChange:function(e){var t=e.target.files[0];M(t.name),console.log(t),Z(e)&&U(t)}})]}),Object(a.jsx)("div",{className:"col-md-6 pull-right",children:Object(a.jsx)("button",{width:"100%",type:"button",className:"btn btn-info",onClick:function(){var e=new FormData;console.log(A),e.append("file",A),e.append("noteid",z),console.log(e),y.a.post(o+":3001/upload",e).then((function(e){x.a.success("upload success")})).then((function(e){fetch(o+":3001/uploads/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:G,noteid:z})})})).then((function(e){fetch(o+":3001/upload_ipfs/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:G,noteid:z})})})).catch((function(e){x.a.error("upload fail")}))},children:"Upload File"})})]})]}),Object(a.jsxs)(f.a.Footer,{children:[Object(a.jsx)(b.a,{variant:"secondary",onClick:Y,children:"Close"}),Object(a.jsx)(b.a,{variant:"primary",onClick:function(e){N(C),F(k),L(J),fetch(o+":3001/changeNote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({noteName:C,noteText:k,noteid:z})}).then((function(e){n()}))},children:"Save Changes"}),Object(a.jsx)(b.a,{variant:"primary",onClick:function(e){!function(e,t){fetch(o+":3001/addTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tag:e,noteid:t})}).then((function(e){n()}))}(J,z)},children:"Add another tag"})]})]})]})};var C=n(149),N=n(150),T=n(153),w=function(e){var t=e.item,n=e.hashtags,s=e.tags,i=e.getNotes,o=(e.setFilteredItems,e.filterByTagNote),l=e.pfad,j=Object(c.useState)(t.noteid),u=Object(r.a)(j,2),d=u[0],h=(u[1],Object(m.a)(n)),f=Object(c.useState)("https://oshiba2207-team-bucket.storage.fleek.co/"+t.ipfshash),O=Object(r.a)(f,2),g=O[0],x=(O[1],h.filter((function(e){return e.noteid===t.noteid}))),v=function(e){fetch(l+":3001/deleteNote/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({noteid:e})}).then((function(e){i()}))};return Object(a.jsx)(C.a,{w:"100%",alignItems:"flex-start",children:Object(a.jsxs)(N.a,{bg:"gray.100",p:4,rounded:"md",w:"100%",children:[Object(a.jsx)(T.a,{fontSize:"3xl",fontWeight:"extrabold",children:t.notename}),Object(a.jsx)(T.a,{children:t.notetext}),Object(a.jsx)("a",{href:g,target:"_blank",children:Object(a.jsx)("img",{src:g,loading:"lazy",alt:""})}),Object(a.jsx)(S,{tags:s,item:t,getNotes:i,pfad:l}),Object(a.jsx)(b.a,{size:"sm",style:{margin:10},variant:"danger",onClick:function(e){v(d)},value:t.noteid,children:"Del"}),x.map((function(e,t){return Object(a.jsx)(p,{hashtag:x[t],filterByTagNote:o},e.linkid)}))]})},t.noteid)},k=n(151),F=function(e){var t=e.items,n=e.hashtags,c=e.tags,s=e.getNotes,i=e.setFilteredItems,o=e.pfad,r=function(e){return n.filter((function(t){return t.tagname.toLowerCase().includes(e.toLowerCase())}))};return Object(a.jsx)(k.a,{maxW:"md",centerContent:!0,p:8,children:Object(a.jsx)(C.b,{spacing:8,w:"100%",children:t.map((function(e){return Object(a.jsx)(w,{item:e,hashtags:n,tags:c,pfad:o,filterByTagNote:r,setFilteredItems:i,getNotes:s},e.noteid)}))})})};var I=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),o=Object(r.a)(i,2),l=o[0],j=o[1],u=Object(c.useState)([]),d=Object(r.a)(u,2),h=d[0],b=(d[1],Object(c.useState)([])),f=Object(r.a)(b,2),O=f[0],m=f[1],p=Object(c.useState)([]),x=Object(r.a)(p,2),v=x[0],y=x[1],S="http://ec2-3-249-53-237.eu-west-1.compute.amazonaws.com/",C=Object(c.useState)(!1),N=Object(r.a)(C,2),T=N[0],w=N[1],k=function(){fetch(S+":3001").then((function(e){return e.json()})).then((function(e){y(e);var t=I(e,"noteid");m(t),s(t)}))},I=function(e,t){return e.map((function(e){return e[t]})).map((function(e,t,n){return n.indexOf(e)===t&&t})).filter((function(t){return e[t]})).map((function(t){return e[t]}))};return Object(c.useEffect)((function(){fetch(S+":3001/tags").then((function(e){return e.json()})).then((function(e){j(e)}))}),[h]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(g,{pfad:S,load:T,setLoad:w,tags:l,filteredItems:O,reloadItems:k,items:n,setFilteredItems:m,getNotes:k,hashtags:v}),Object(a.jsx)("div",{children:Object(a.jsx)(F,{pfad:S,className:"NoteGrid",getNotes:k,items:O,setFilteredItems:m,hashtags:v,tags:l})})]})},E=n(152);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.27210728.chunk.js.map