(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,s){},131:function(e,t,s){},369:function(e,t,s){},370:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(182),i=s.n(a),r=(s(130),s(2)),l=(s(89),s(44)),o=s(35),j=Object(c.createContext)(null),d=o.a.connect(""),b=j,m=s(0),h=function(e){var t=Object(c.useState)(""),s=Object(r.a)(t,2),n=s[0],a=s[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),O=h[0],u=h[1],x=Object(c.useState)([]),g=Object(r.a)(x,2),p=(g[0],g[1],Object(c.useState)("")),v=Object(r.a)(p,2),f=v[0],y=v[1],N=Object(c.useContext)(b).socket,w=function(e){e.preventDefault();var t={email:o,password:O,username:n};N.emit("signUpSubmit",t)};return Object(c.useEffect)((function(){N.on("signupsubmit",(function(e){y(e)}))}),[N]),Object(m.jsxs)("div",{className:"signUp",children:[Object(m.jsx)("div",{className:"signupimg",children:Object(m.jsx)("h1",{children:"Sign-Up!"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"Signupdetails",children:"Please enter your following details to SignUp:"}),Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)("form",{action:"",onSubmit:w,children:[Object(m.jsxs)("div",{className:"username",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"text",name:"username",id:"username",placeholder:"Username",autoComplete:"name",value:n,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"email",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"email",name:"email",id:"email",placeholder:"Email",autoComplete:"email",value:o,onChange:function(e){return j(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"password",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"password",value:O,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(m.jsx)("button",{className:"Signupbutton",onClick:w,children:"Sign-Up!"}),Object(m.jsx)("div",{children:f})]})})]})},O=s(17),u=(s(131),s(67)),x=s.n(u),g=s(126),p=s(198);s(369);var v=function(e){var t=Object(c.useContext)(b);return t.messageList,t.setMessageList,"string"===typeof e.a.message?Object(m.jsx)("div",{style:{backgroundColor:"rgb(255, 208, 0)",color:"#212121",borderRadius:"10px",padding:"7px"},children:e.a.message}):".weather"===e.a.message[0]?Object(m.jsx)("div",{id:"bot",children:Object(m.jsxs)("div",{className:"weather",id:e.a.message[1]<20?"cold":"hot",children:[console.log(e.a.message),Object(m.jsxs)("h3",{children:["City:",e.a.message[4]]}),Object(m.jsxs)("h3",{children:["Temp:",e.a.message[1],"\xb0C"]}),Object(m.jsxs)("p",{children:["Country:",e.a.message[2]]}),Object(m.jsxs)("p",{children:["Max Temp:",e.a.message[5]]}),Object(m.jsxs)("p",{children:["Min Temp:",e.a.message[6]]}),Object(m.jsxs)("p",{children:["Humidity:",e.a.message[7]]}),Object(m.jsx)("p",{children:e.a.message[3]})]})}):".wikipedia"===e.a.message[0]?Object(m.jsx)("div",{className:"wiki",children:Object(m.jsxs)("div",{children:[console.log(e.a.message),Object(m.jsx)("h3",{children:e.a.message[2]}),Object(m.jsx)("p",{children:e.a.message[1]})]})}):".time"===e.a.message[0]?Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"timezone",children:Object(m.jsxs)("div",{children:[console.log(e.a.message),Object(m.jsxs)("h4",{className:"timezone0",children:["City:",e.a.message[6]]}),Object(m.jsxs)("h5",{className:"timezone1",children:["Date and Time:",e.a.message[1]]}),Object(m.jsxs)("p",{className:"timezone1",children:["Timezone Name:",e.a.message[2]]}),Object(m.jsxs)("p",{className:"timezone1",children:["Timezone:",e.a.message[3]]}),Object(m.jsxs)("p",{className:"timezone1",children:["Latitude:",e.a.message[4]]}),Object(m.jsxs)("p",{className:"timezone1",children:["Longitude:",e.a.message[5]]})]})})}):".currency"===e.a.message[0]?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"currency",children:[console.log(e.a.message),Object(m.jsxs)("p",{children:[e.a.message[1]," ",e.a.message[2]," ="," ",e.a.message[4]," ",e.a.message[3]]})]})}):".lyrics"===e.a.message[0]?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"lyrics",children:[console.log(e.a.message),Object(m.jsxs)("h3",{children:["Song : "," ",e.a.message[2]," "]}),Object(m.jsx)("p",{style:{whiteSpace:"pre-wrap"},children:e.a.message[1]})]})}):".stocks"===e.a.message[0]?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"stocks",children:[console.log(e.a.message),Object(m.jsxs)("p",{children:["Current price:",e.a.message[1]]}),Object(m.jsxs)("p",{children:["Day_high:",e.a.message[2]]}),Object(m.jsxs)("p",{children:["Day_Low:",e.a.message[3]]})]})}):".covid"===e.a.message[0]?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"covid",children:[Object(m.jsxs)("p",{children:["Total Cases:",e.a.message[1]]}),Object(m.jsxs)("p",{children:["Total Deaths:",e.a.message[2]]}),Object(m.jsxs)("p",{children:["Total Recovered:",e.a.message[3]]})]})}):".reminder"===e.a.message[0]?Object(m.jsx)("div",{className:"reminder",children:Object(m.jsxs)("div",{children:[console.log(e.a.message),Object(m.jsx)("p",{children:"Reminder at: "}),Object(m.jsx)("p",{children:e.a.message[2]+":"+e.a.message[1]}),Object(m.jsx)("p",{children:e.a.message[3]})]})}):Object(m.jsx)("div",{children:"Enter a valid command."})};var f=function(e){var t=e.socket,s=e.username,n=e.roomname,a=Object(c.useState)(""),i=Object(r.a)(a,2),o=i[0],j=i[1],d=Object(c.useContext)(b),h=d.messageList,O=d.setMessageList,u=function(){var e=Object(g.a)(x.a.mark((function e(){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.includes(".",0)){e.next=8;break}return c={roomname:n,username:"bot",message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=4,t.emit("botmessage",c);case 4:O((function(e){return[].concat(Object(l.a)(e),[c])})),j(""),e.next=14;break;case 8:if(""===o){e.next=14;break}return a={roomname:n,username:s,message:o,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},e.next=12,t.emit("send_message",a);case 12:O((function(e){return[].concat(Object(l.a)(e),[a])})),j("");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return t.on("receive_message",(function(e){console.log(e),O((function(t){return[].concat(Object(l.a)(t),[e])}))})),t.on("botreporting",(function(e){O((function(t){return[].concat(Object(l.a)(t),[e])})),console.log(e)})),function(){t.off()}}),[t]),File.prototype.convertToBase64=function(e){var t=new FileReader;t.onloadend=function(t){e(t.target.result,t.target.error)},t.readAsDataURL(this)},Object(m.jsxs)("div",{className:"chat-window",children:[Object(m.jsx)("div",{className:"chat-header",children:Object(m.jsx)("p",{children:n})}),Object(m.jsx)("div",{className:"chat-body",children:Object(m.jsx)(p.a,{className:"message-container",children:h.map((function(e){return Object(m.jsx)("div",{className:"message",id:s===e.username?"other":"bot"===e.username?"bot":"you",children:"bot"===e.username?Object(m.jsx)(v,{a:e}):Object(m.jsxs)("div",{children:[void 0===e.image?Object(m.jsx)("div",{className:"message-content",children:Object(m.jsx)("p",{children:e.message})}):Object(m.jsx)("div",{}),Object(m.jsxs)("div",{className:"message-meta",style:{display:"flex",flexDirection:"column"},children:[void 0!==e.image?Object(m.jsx)("div",{classNmae:"Image",children:Object(m.jsx)("img",{style:{maxWidth:"300px",maxHeight:"250px",borderRadius:"20px"},src:e.image})}):Object(m.jsx)("div",{}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(m.jsx)("p",{id:"time",children:e.time}),Object(m.jsx)("p",{id:"author",children:e.username})]})]})]})})}))})}),Object(m.jsx)("div",{className:"chat-footer",children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:"100%"},children:[Object(m.jsx)("input",{style:{width:"80%"},type:"text",value:o,placeholder:"Type Your Message...",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&u()}}),Object(m.jsx)("div",{class:"body",style:{width:"10%"},children:Object(m.jsxs)("div",{class:"my-element",children:[Object(m.jsx)("style",{children:' \n.my-element{\n        color:white;\n        height:100%;\n        border-radius:25px;\n        width:75px;\n        background-color: #f5af09;\n        // position:absolute;\n        margin:auto;\n        top:0;\n        bottom:0;\n        left:0;\n        right: 0;\n        font-size:20px;\n        display:flex;\n        justify-content: center;\n        align-items: center;\n        cursor:pointer;\n}\ninput[type="file"]\n{\n    display:none;\n}\n.body{\n    margin:0;\n}'}),Object(m.jsx)("input",{type:"file",id:"file",accept:"image/*",onChange:function(e){console.log("hi"),e.target.files[0].convertToBase64(function(){var e=Object(g.a)(x.a.mark((function e(c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={roomname:n,username:s,image:c,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()},console.log(c),e.next=4,t.emit("send_message",a);case 4:O((function(e){return[].concat(Object(l.a)(e),[a])})),j("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),Object(m.jsx)("label",{for:"file",style:{cursor:"pointer"},children:"\u2912"})]})}),Object(m.jsx)("button",{className:"sendButton",style:{width:"10%",height:"48px",backgroundColor:"#245f48",borderRadius:"50%"},children:Object(m.jsx)("button",{style:{paddingTop:"2px",paddingLeft:"7px"},onClick:u,children:"\u27a2"})})]})})]})};var y=function(e){var t=e.Rname,s=Object(c.useContext)(b),n=s.joinJoined,a=s.setJoinJoined,i=Object(c.useContext)(b),r=(i.remJoinChat,i.setRemJoinChat),l=Object(c.useContext)(b),o=(l.messageList,l.setMessageList),j=l.deluxe,d=l.socket;return Object(c.useEffect)((function(){console.log(n),console.log("Frontend of the JoinJoinedRooms"),d.on("gotJoinJoinedRooms",(function(e){a(e),r(!1)}))}),[d,n]),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:Object(m.jsx)("button",{onClick:function(){o([]),d.emit("JoinJoinedRooms",{Roomname:t,user:j.Username})},style:{backgroundColor:"rgba(0,0,0,0)",marginLeft:"0",border:"none",padding:"10px",color:"white"},children:t})})})};var N=function(e){var t=Object(c.useContext)(b);return t.deluxe,t.setDeluxe,Object(m.jsx)("div",{className:"child1",children:e.arr.map((function(t){return Object(m.jsx)("div",{className:"async1",children:Object(m.jsx)(y,{Rname:t,socket:e.soc})})}))})},w=function(){var e=Object(c.useContext)(b),t=e.socket,s=(e.user,e.setuser,e.deluxe),n=(e.setDeluxe,e.joinJoined,e.setJoinJoined,e.remJoinChat,e.setRemJoinChat,Object(c.useState)("")),a=Object(r.a)(n,2),i=a[0],l=a[1],o=Object(c.useState)(!1),j=Object(r.a)(o,2),d=(j[0],j[1],Object(c.useState)("")),h=Object(r.a)(d,2),u=h[0],x=h[1],g=Object(c.useState)(""),p=Object(r.a)(g,2),v=p[0],f=p[1],y=Object(c.useState)(""),N=Object(r.a)(y,2),w=(N[0],N[1],Object(c.useState)(!1)),C=Object(r.a)(w,2),S=C[0],k=C[1],J=Object(c.useState)(!1),R=Object(r.a)(J,2),D=R[0],T=R[1];return Object(c.useEffect)((function(){t.on("checkloginjoinroom",(function(e){return f(e),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{children:"Invalid roomname"===e||"Invalid Password."===e?console.log(e):k(!0)})})})),t.on("RoomAlreadyJoined",(function(e){T(!0)}))}),[t]),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"joinChatContainer",children:[Object(m.jsx)("h3",{children:"Join A Chat"}),Object(m.jsx)("input",{type:"text",placeholder:"Roomname",onChange:function(e){l(e.target.value)}}),Object(m.jsx)("input",{type:"text",placeholder:"Room Password",onChange:function(e){x(e.target.value)}}),!S&&Object(m.jsx)("button",{onClick:function(){""!==i&&""!==u&&t.emit("roomlogincheck",{deluxe:s,roomname:i,roomcode:u})},children:"Join A Room"}),S&&Object(m.jsx)("button",{children:Object(m.jsx)(O.b,{style:{color:"white"},className:"nav-link active","aria-current":"page",to:"/Main",children:"Go To Main"})}),Object(m.jsx)("p",{children:v}),D&&Object(m.jsx)("p",{style:{fontFamily:"Times New Roman"},children:"Room Already Joined"})]})})})},C=s.p+"static/media/warning.0fcf2670.png";var S=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useContext)(b),i=a.socket,l=a.user,o=(a.setuser,a.deluxe),j=(a.setDeluxe,a.joinJoined),d=(a.setJoinJoined,a.remJoinChat);return a.setRemJoinChat,Object(c.useEffect)((function(){console.log(o),null!==o&&(i.emit("getAlreadyJoinedRooms",o),i.on("takeAlreadyJoinedRooms",(function(e){n(e),console.log("Data fetched successfully.")})))}),[i,j]),l?Object(m.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},children:Object(m.jsxs)("div",{className:"grandfather",children:[Object(m.jsxs)("div",{className:"fathersync",children:[Object(m.jsx)("div",{className:"headers1",children:Object(m.jsxs)("div",{style:{color:"white",display:"flex",flexDirection:"row",justifyContent:"flex-start"},children:[Object(m.jsx)("b",{style:{marginTop:"15px"},children:o.Username}),Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsx)("button",{className:"dropbtn",style:{fontSize:"40px",paddingTop:"0px",marginRight:"30px"},children:"\u21b4"}),Object(m.jsxs)("div",{className:"dropdown-content",children:[Object(m.jsx)("button",{style:{width:"100%",margin:"0%"},children:Object(m.jsx)(O.b,{className:"nav-link active",style:{color:"black",fontWeight:"bold"},"aria-current":"page",to:"/JoinRoom",children:"Join Room"})}),Object(m.jsx)("button",{style:{width:"100%",margin:"0%"},children:Object(m.jsx)(O.b,{className:"nav-link active",style:{color:"black",fontWeight:"bold"},"aria-current":"page",to:"/CreateRoom",children:"Create Room"})})]})]})]})}),Object(m.jsx)(N,{arr:s,soc:i})]}),Object(m.jsx)("div",{className:"mothersync",children:Object(m.jsx)("div",{className:"headers3",children:!d&&Object(m.jsx)(f,{socket:i,roomname:j,username:o.Username})})})]})}):Object(m.jsxs)("div",{className:"SSSSSS",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)("img",{src:C,style:{width:"300px"}}),Object(m.jsx)("p",{className:"Spara",style:{width:"500px"},children:"Kindly login first"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"button",style:{width:"500px"},children:Object(m.jsx)(O.b,{className:"nav-link active","aria-current":"page",to:"/Login",style:{color:"black"},children:"Login"})})})]})},k=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(r.a)(a,2),o=i[0],j=i[1],d=Object(c.useState)(""),u=Object(r.a)(d,2),x=u[0],g=u[1],p=Object(c.useState)([]),v=Object(r.a)(p,2),f=v[0],y=v[1],N=Object(c.useState)(!1),w=Object(r.a)(N,2),C=w[0],S=w[1],k=Object(c.useState)(""),J=Object(r.a)(k,2),R=J[0],D=J[1],T=Object(c.useState)(!1),M=Object(r.a)(T,2),L=(M[0],M[1]),U=Object(c.useState)(!1),E=Object(r.a)(U,2),F=E[0],A=E[1],z=Object(c.useContext)(b),G=(z.user,z.setuser),H=Object(c.useContext)(b),P=(H.deluxe,H.setDeluxe),B=H.socket,I=function(e){e.preventDefault();var t={Email:x,Password:o,Username:s};y([].concat(Object(l.a)(f),[t])),B.emit("loginSubmit",t),B.on("loginStatus",(function(e){"Logged in successfully."===e?(L(!0),A(!0),D(e),P(t)):D(e)}))};return C?Object(m.jsx)("div",{children:Object(m.jsx)(h,{})}):Object(m.jsx)("div",{className:"MasterLogin",children:Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{className:"head",children:"LOGIN"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"logindetails",children:"Please enter your following details to login:"}),Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)("form",{action:"",onSubmit:I,children:[Object(m.jsxs)("div",{className:"username",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"text",name:"username",id:"username",placeholder:"Username",autoComplete:"name",value:s,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"email",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"email",name:"email",id:"email",placeholder:"Email",autoComplete:"email",value:x,onChange:function(e){return g(e.target.value)},required:!0})]}),Object(m.jsxs)("div",{className:"password",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"user",type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"password",value:o,onChange:function(e){return j(e.target.value)},required:!0})]}),!F&&Object(m.jsx)("button",{className:"button",onClick:I,children:"Log-in"}),F&&Object(m.jsx)("button",{style:{backgroundColor:"white",border:"none"},children:Object(m.jsx)(O.b,{className:"nav-link active","aria-current":"page",to:"/Main",style:{color:"black"},onClick:function(){G(!0)},children:"Go To Main"})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"newUser",onClick:function(){S(!0)},children:"New User? SignUp here!"})})]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:R})]})]})})};var J=function(){var e=Object(c.useContext)(b),t=e.socket,s=(e.user,e.setuser,e.deluxe),n=(e.setDeluxe,e.joinJoined,e.setJoinJoined,e.remJoinChat,e.setRemJoinChat,Object(c.useState)("")),a=Object(r.a)(n,2),i=a[0],l=a[1],o=Object(c.useState)(""),j=Object(r.a)(o,2),d=j[0],h=j[1],u=Object(c.useState)(!1),x=Object(r.a)(u,2),g=x[0],p=x[1],v=Object(c.useState)(""),f=Object(r.a)(v,2),y=(f[0],f[1],Object(c.useState)("")),N=Object(r.a)(y,2),w=N[0],C=N[1];return Object(c.useEffect)((function(){t.on("checksameroom",(function(e){return C(e),console.log(e),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{children:"Room already exists"===e?console.log(e):p(!0)})})}))}),[t]),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"joinChatContainers",children:[Object(m.jsx)("h3",{children:"Create Room"}),Object(m.jsx)("input",{type:"text",placeholder:"Roomname",onChange:function(e){l(e.target.value)}}),Object(m.jsx)("input",{type:"password",placeholder:"Room Password",onChange:function(e){h(e.target.value)}}),!g&&Object(m.jsx)("button",{className:"button",onClick:function(){""!==i&&""!==d&&t.emit("createroom",{roomname:i,roomcode:d,deluxe:s})},children:"Create Room"}),g&&Object(m.jsx)("button",{children:Object(m.jsx)(O.b,{style:{color:"white"},className:"nav-link active","aria-current":"page",to:"/Main",children:"Go To Main"})}),Object(m.jsx)("p",{children:w})]})})})};function R(e){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(O.b,{className:"navbar-brand",to:"/",children:"Sociablast"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(m.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(O.b,{className:"nav-link active","aria-current":"page",to:"/SignUp",children:"SignUp"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(O.b,{className:"nav-link",to:"/Login",children:"Login"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(O.b,{className:"nav-link",to:"/Help",children:"Help"})})]}),e.searchbar?Object(m.jsxs)("form",{className:"d-flex",children:[Object(m.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(m.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}var D=function(){return Object(m.jsx)("div",{class:"footer",children:Object(m.jsx)("p",{className:"text-center",children:"Copyright \xa9 Sociablast.com"})})};var T=function(){return Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",margin:"20px"},children:[Object(m.jsx)("h2",{style:{margin:"10px"},children:"Features of the TECHNOBOT!"}),Object(m.jsxs)("table",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"tableheading",children:"Sr No."}),Object(m.jsx)("th",{className:"tableheading",children:"COMMAND"}),Object(m.jsx)("th",{className:"tableheading",children:"SYNTAX"}),Object(m.jsx)("th",{className:"tableheading",children:"FUNCTION"})]}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"1)"}),Object(m.jsx)("td",{children:".weather"}),Object(m.jsx)("td",{children:".weather (City Name)"}),Object(m.jsx)("td",{children:"Gives the live weather of the city specified"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"2)"}),Object(m.jsx)("td",{children:".wikipedia"}),Object(m.jsx)("td",{children:".wikipedia (Object Name)"}),Object(m.jsx)("td",{children:"Gives the wikipedia info of the object specified"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"3)"}),Object(m.jsx)("td",{children:".time"}),Object(m.jsx)("td",{children:".time (City Name)"}),Object(m.jsx)("td",{children:"Gives the current time,timezone,latitude and longitude of the city specified"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"4)"}),Object(m.jsx)("td",{children:".currency"}),Object(m.jsx)("td",{children:".currency (country1) (country2) (amount) "}),Object(m.jsx)("td",{children:"Gives the currency conversion from country1 to country2 for the given amount"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"5)"}),Object(m.jsx)("td",{children:".lyrics"}),Object(m.jsx)("td",{children:".lyrics (song Name)"}),Object(m.jsx)("td",{children:"Gives the lyrics of the song specified(sorry only english song allowed, we are working on hindi songs)"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"6)"}),Object(m.jsx)("td",{children:".stocks"}),Object(m.jsx)("td",{children:".stocks (stock Name)"}),Object(m.jsx)("td",{children:"Gives the current market value  of the stock specified"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"7)"}),Object(m.jsx)("td",{children:".covid"}),Object(m.jsx)("td",{children:".covid"}),Object(m.jsx)("td",{children:"Gives the live covid updates"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"8)"}),Object(m.jsx)("td",{children:".reminder"}),Object(m.jsx)("td",{children:".reminder hh:mm message"}),Object(m.jsx)("td",{children:"Gives message as reminder at time hh:mm"})]})]})]})]})},M=s(5),L=function(){return Object(m.jsxs)("div",{className:"Home",children:[Object(m.jsx)("h2",{children:"TECHNOBOTS!"}),Object(m.jsxs)("p",{children:["Web application with chat + bot considering the following feactures COMMANDS:-",Object(m.jsx)("ol",{children:Object(m.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(m.jsx)("li",{children:".wiki object"}),Object(m.jsx)("li",{children:".weather place"}),Object(m.jsx)("li",{children:".lyrics"}),Object(m.jsx)("li",{children:".time"}),Object(m.jsx)("li",{children:".currency"}),Object(m.jsx)("li",{children:".covid"}),Object(m.jsx)("li",{children:".stocks"}),Object(m.jsx)("li",{children:".reminder"}),Object(m.jsx)("br",{})]})})]}),Object(m.jsxs)("p",{children:["TEAM MEMBERS:-",Object(m.jsx)("ol",{children:Object(m.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(m.jsx)("li",{children:"Neel Shah  "}),Object(m.jsx)("li",{children:"Harsh Nag"}),Object(m.jsx)("li",{children:"Smit Sekhadia "}),Object(m.jsx)("li",{children:"Dhruv Kunjadiya"})]})})]})]})};var U=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)({}),i=Object(r.a)(a,2),l=i[0],o=i[1],j=Object(c.useState)(null),u=Object(r.a)(j,2),x=u[0],g=u[1],p=Object(c.useState)(!0),v=Object(r.a)(p,2),f=v[0],y=v[1],N=Object(c.useState)([]),C=Object(r.a)(N,2),U=C[0],E=C[1],F=Object(c.useState)(0),A=Object(r.a)(F,2),z=A[0],G=A[1];return Object(m.jsxs)(O.a,{children:[Object(m.jsx)(R,{title:"Sociablast"}),void 0!==d?Object(m.jsx)(b.Provider,{value:{user:s,setuser:n,deluxe:l,setDeluxe:o,joinJoined:x,setJoinJoined:g,remJoinChat:f,socket:d,setRemJoinChat:y,messageList:U,setMessageList:E,color:z,setColor:G},children:Object(m.jsxs)(M.c,{children:[Object(m.jsx)(M.a,{exact:!0,path:"/",element:Object(m.jsx)(L,{})}),Object(m.jsx)(M.a,{path:"/SignUp",element:Object(m.jsx)(h,{})}),Object(m.jsx)(M.a,{path:"/Login",element:Object(m.jsx)(k,{})}),Object(m.jsx)(M.a,{path:"/Main",element:Object(m.jsx)(S,{})}),Object(m.jsx)(M.a,{path:"/CreateRoom",element:Object(m.jsx)(J,{})}),Object(m.jsx)(M.a,{path:"/JoinRoom",element:Object(m.jsx)(w,{})}),Object(m.jsx)(M.a,{path:"/Help",element:Object(m.jsx)(T,{})})]})}):Object(m.jsx)("div",{}),Object(m.jsx)(D,{})]})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))},89:function(e,t,s){}},[[370,1,2]]]);
//# sourceMappingURL=main.d3dca177.chunk.js.map