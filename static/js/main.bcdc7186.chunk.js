(this["webpackJsonpminimal-twitch-chat"]=this["webpackJsonpminimal-twitch-chat"]||[]).push([[0],{102:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),c=a(39),i=a.n(c),o=(a(81),a(29)),u=(a.p,a(12)),l=a(42),m=a(36),d=a(14),b=a(10),j=Object(b.a)("chat/channel"),p=Object(b.a)("chat/joined"),f=Object(b.a)("chat/message"),h=Object(b.a)("chat/message-deleted"),g=Object(b.a)("chat/ban"),x=Object(b.a)("chat/timeout"),O=Object(b.a)("chat/delete-message"),v={chatMessage:f,selectChannel:j,channelJoined:p,banUser:g,timeoutUser:x,deleteMessage:O,chatMessageDeleted:h};!function(e){e[e.chat=0]="chat",e[e.action=1]="action",e[e.cheer=2]="cheer",e[e.sub=3]="sub",e[e.resub=4]="resub",e[e.subgift=5]="subgift",e[e.submysterygift=6]="submysterygift",e[e.anonsubgift=7]="anonsubgift",e[e.primepaidupgrade=8]="primepaidupgrade",e[e.host=9]="host",e[e.raid=10]="raid"}(n||(n={}));var y=Object(b.b)({messages:[],userMessageCount:{}},(function(e){e.addCase(j,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{messages:[]})})).addCase(p,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{channelName:t.payload,messages:[{type:n.action,timestamp:new Date,message:"",userstate:{"display-name":"verbunden mit ".concat(t.payload," ")}}].concat(Object(m.a)(e.messages))})})).addCase(f,(function(e,t){var a=t.payload.userstate["display-name"]||"anonymous";if(t.payload.userstate["reply-parent-msg-id"]){var n=!1;e.messages=e.messages.map((function(e){return e.id===t.payload.userstate["reply-parent-msg-id"]&&(e.subMessages=[].concat(Object(m.a)(e.subMessages||[]),[t.payload]),n=!0),e})),n||(e.messages=[t.payload].concat(Object(m.a)(e.messages.slice(0,300))))}else e.messages=[t.payload].concat(Object(m.a)(e.messages.slice(0,300)));e.userMessageCount=Object(d.a)(Object(d.a)({},e.userMessageCount),{},Object(l.a)({},a,(e.userMessageCount[a]||0)+1))})).addCase(h,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.messageId?Object(d.a)(Object(d.a)({},e),{},{deleted:!0}):e}))})}))})),w=a(16),k=function(e){return e.chat},C={getMessages:Object(w.a)(k,(function(e){return e.messages})),getMessageCount:function(e){return Object(w.a)(k,(function(t){return t.userMessageCount[e||"anonymous"]||1}))},getChannelName:Object(w.a)(k,(function(e){return e.channelName}))},N=y,I=(a.p,a(50)),T=a.n(I);var _=function(e){var t=function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);return t}(e);return T.a.hsl(t%360,.7,.7).hex()},M=(a.p,a(71)),D=a.n(M),E=a(21),S=a(2),A=function(e){var t=e.timestamp,a=e.usercolor,s=e.username,r=e.message,c=e.messageClassName,i=e.messageColor,o=e.className,l=e.userClassName,m=e.userstate,d=e.subMessages,b=e.type,j=Object(u.e)(C.getMessageCount(s));return Object(S.jsxs)("div",{className:"m-2",children:[Object(S.jsxs)("div",{className:Object(E.a)("chat-message shadow-md flex p-2 rounded-md space-x-2 text-2xl",o),children:[Object(S.jsx)("div",{className:"flex-shrink-0 leading-9 text-sm w-14 text-gray-600",children:D()(t).format("HH:mm:ss")}),Object(S.jsxs)("div",{style:{minWidth:"1.2rem"},className:"flex-shrink-0 space-x-1 text-sm h-9 flex items-center content-center text-gray-900",children:[b===n.chat&&1===j&&Object(S.jsx)("div",{className:"text-gray-900 text-sm inline-block bg-pink-600 flex items-center justify-center rounded-full w-5 text-center h-5",children:"#1"}),m&&m["custom-reward-id"]&&Object(S.jsx)("div",{className:"text-gray-900 text-sm inline-block bg-indigo-900 flex items-center justify-center rounded-full w-5 text-center h-5",children:"R"})]}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{style:{color:a},className:Object(E.a)(l),children:[s," "]}),Object(S.jsx)("span",{style:{color:i},className:Object(E.a)("flex-1",c||"dark:text-gray-300"),children:r})]})]}),d&&d.map((function(e){return Object(S.jsx)("div",{className:"ml-4 -mr-2 ",children:Object(S.jsx)(W,{message:e})})}))]})},z=a(35),R=function(e){e.map((function(e){if("string"===typeof e)e.match(/([a-zA-Z]*)(\d+)/);return e}));return e},L=function(e,t){if(!t)return[e];var a=[],n=[];Object.entries(t||[]).forEach((function(t){var a=Object(z.a)(t,2),s=a[0],r=a[1];Object.values(r).forEach((function(t,a){var r=t.split("-"),c=Object(z.a)(r,2),i=c[0],o=c[1];n.push({start:parseInt(i),stringToReplace:e.substring(parseInt(i),parseInt(o)+1),replacement:Object(S.jsx)("img",{style:{display:"inline",width:"1.1em"},src:"https://static-cdn.jtvnw.net/emoticons/v2/".concat(s,"/default/dark/2.0")},"emote-".concat(s,"-").concat(a))})}))}));var s=e;return n.sort((function(e,t){return e.start-t.start})).forEach((function(e){var t=e.stringToReplace,n=e.replacement;if(s){var r=s.split(t);a.push(r[0]),a.push(n),s=s.replace(r[0],"").replace(t,"")}})),a.push(s),a},B=function(e){return e.map((function(e){if("string"===typeof e){var t=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;return e.split(" ").map((function(e){return t.test(e)?Object(S.jsxs)("a",{className:"text-pink-300",target:"_blank",href:e,children:[e," "]},e):e+" "}))}return e}))},W=function(e){var t,a=e.message,n=_(a.userstate["display-name"]||String(Math.random()));return Object(S.jsx)(A,{timestamp:a.timestamp,type:a.type,className:"bg-gray-900",userstate:a.userstate,username:a.userstate["display-name"],usercolor:a.userstate.color?(t=a.userstate.color,T()(t).get("lab.l")<30?n:a.userstate.color):n,message:B(L(a.message,a.userstate.emotes)),subMessages:a.subMessages,messageClassName:Object(E.a)([a.deleted&&"text-gray-600","action"===a.userstate["message-type"]&&"italic"])})},U=(a.p,function(e){var t=e.message;return Object(S.jsx)(A,{timestamp:t.timestamp,type:t.type,className:"bg-blue-800 bg-opacity-70",usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:"".concat(t.userstate["display-name"]," hat ").concat(t.userstate.bits," Bits gecheered"),message:R(L(t.message,t.userstate.emotes))})}),F=(a.p,function(e){var t=e.message;return Object(S.jsx)(A,{timestamp:t.timestamp,className:"bg-yellow-700",type:t.type,userClassName:"dark:text-gray-900",username:t.userstate["display-name"],messageClassName:"dark:text-gray-900",message:L(t.message,t.userstate.emotes)})}),H=(a.p,function(e){var t=e.message;return Object(S.jsx)(A,{timestamp:t.timestamp,className:"bg-purple-900 bg-opacity-70",usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:"".concat(t.userstate["display-name"]," hat ein Abo (").concat(t.userstate["msg-param-sub-plan"],") im ").concat(t.userstate["msg-param-cumulative-months"],". Monat abgeschlossen: "),message:L(t.message,t.userstate.emotes)})}),J=(a.p,function(e){var t=e.message;return Object(S.jsx)(A,{timestamp:t.timestamp,className:"bg-purple-800 bg-opacity-70",type:t.type,usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:t.userstate["display-name"],message:L(t.message,t.userstate.emotes)})}),Z=a(45),G=a(44),P=a.n(G),K=function(e){Object(o.a)(e);var t=Object(u.d)(),a=Object(u.e)(C.getMessages),r=Object(Z.f)(),c=P.a.parse(r.search);return Object(s.useEffect)((function(){c.channel&&t(v.selectChannel(c.channel))}),[c.channel]),Object(S.jsx)("div",{className:"chat bg-gray ",children:a.filter((function(e){if(!e.message||0===e.message.length)return!0;var t=e.message.length,a=e.message.split(" ").length,s=e.message.match(/([a-zA-Z]+\W*\d+)/g),r=a/t;if(e.type!==n.chat)return!0;if(1===e.message.length)return!1;if(e.message.startsWith("!bandit"))return!1;if(e.message.startsWith("!marble"))return!1;if(e.message.startsWith("!song"))return!1;if(e.message.indexOf("https://www.thingiverse.com")>-1);else{if("projektionbot"===e.userstate.username)return!1;if("streamelements"===e.userstate.username)return!1;if("sascha_lbot"===e.userstate.username)return!1;if(e.message.match(/~\d+/))return!1;if((s||[]).length>10&&r>.1)return!1}return!0})).map((function(e,t){switch(e.type){case n.cheer:return Object(S.jsx)(U,{message:e},e.userstate.id);case n.raid:return Object(S.jsx)(F,{message:e},e.userstate.id);case n.sub:return Object(S.jsx)(H,{message:e},e.userstate.id);case n.subgift:return Object(S.jsx)(J,{message:e},e.userstate.id)}return Object(S.jsx)("div",{className:"w-full flex flex-1",children:Object(S.jsx)("div",{className:"flex-1 -my-1",children:Object(S.jsx)(W,{message:e})})},e.userstate.id)}))})},q=a(11),Y=a(47),Q=(a(99),a(6)),V=a.n(Q),X=a(53),$=a(4),ee=a(72),te=a.n(ee),ae=Object(b.a)("login/token"),ne=Object(b.a)("login/logout"),se={processToken:ae,logout:ne},re={},ce=Object(b.b)(re,(function(e){e.addCase(se.processToken,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{token:t.payload})})).addCase(se.logout,(function(e,t){return re}))})),ie=function(e){return e.auth},oe=Object(w.a)(ie,(function(e){return e.token})),ue={isLoggedIn:Object(w.a)(ie,(function(e){return!!e.token})),getToken:oe},le=ce,me=Object(b.a)("twitch/userinfo"),de=Object(b.a)("twitch/streaminfo"),be=Object(b.a)("twitch/followedStreams"),je=Object(b.a)("twitch/followedStreams"),pe={userInfoReceived:me,streamInfoReceived:de,getFollowedStreams:be,followedStreamsReceived:je},fe={user:void 0},he=Object(b.b)(fe,(function(e){e.addCase(me,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{user:t.payload})})).addCase(de,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{streamInfo:t.payload})})).addCase(ne,(function(e,t){return fe}))})),ge=function(e){return e.twitch},xe=Object(w.a)(ge,(function(e){return e.user})),Oe={getUser:xe,getUserId:Object(w.a)(xe,(function(e){return null===e||void 0===e?void 0:e.id})),getStreamInfo:Object(w.a)(ge,(function(e){return e.streamInfo}))},ve=he,ye=a(73);a.n(ye).a.config();var we={TWITCH_CLIENT_ID:"1lk526oh4rsbzwcqowmcuc4m9agza3",DEBUG:!1},ke=V.a.mark(_e),Ce=V.a.mark(Ee),Ne=V.a.mark(Se),Ie=V.a.mark(Ae),Te=V.a.mark(ze);function _e(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object($.a)(Me,e);case 3:t=n.sent;case 4:return n.next=8,Object($.i)(t);case 8:return a=n.sent,n.next=11,Object($.e)(a);case 11:n.next=4;break;case 13:case"end":return n.stop()}}),ke)}function Me(e){return Object(Y.b)((function(t){return e.on("connected",function(){var e=Object(X.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("chat",(function(e,a,s,r){t(f({id:a.id,type:n.chat,timestamp:new Date,message:s,userstate:a}))})),e.on("cheer",(function(e,a,s){t(f({id:a.id,type:n.cheer,timestamp:new Date,message:s,userstate:a}))})),e.on("subscription",(function(e,a,s,r,c){t(f({id:c.id,type:n.sub,timestamp:new Date,message:r,userstate:c}))})),e.on("resub",(function(e,a,s,r,c,i){t(f({id:c.id,type:n.sub,timestamp:new Date,message:r,userstate:c}))})),e.on("submysterygift",(function(e,a,s,r,c){t(f({id:c.id,type:n.subgift,timestamp:new Date,message:"hat ".concat(s," Subs verschenkt!"),userstate:c}))})),e.on("subgift",(function(e,a,s,r,c,i){t(f({id:i.id,type:n.subgift,timestamp:new Date,message:"hat ein Abo an ".concat(r," verschenkt!"),userstate:i}))})),e.on("messagedeleted",(function(e,a,n,s){t(h({channel:e,username:a,deletedMessage:n,messageId:s["target-msg-id"]}))})),e.on("action",(function(e,a,s,r){t(f({id:a.id,type:n.action,userstate:a,message:s,timestamp:new Date}))})),e.on("raided",(function(e,a,s){t(f({type:n.raid,message:"raidet mit ".concat(s," Personen!"),userstate:{"display-name":a},timestamp:new Date}))})),setTimeout((function(){}),1e3),Object(X.a)(V.a.mark((function t(){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e.disconnect();case 3:case"end":return t.stop()}}),t)})))}))}var De=void 0;function Ee(e,t,a){var n;return V.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(De){s.next=12;break}return De=te.a.client({options:{debug:we.DEBUG,messagesLogLevel:we.DEBUG?"info":"error",clientId:we.TWITCH_CLIENT_ID},connection:{secure:!0,reconnect:!0},identity:{username:t,password:a&&"oauth:".concat(a)},channels:[e]}),s.next=4,De.connect();case 4:return s.next=6,Object($.e)(v.channelJoined(e));case 6:return s.next=8,Object($.d)(_e,De);case 8:return s.next=10,Object($.c)(1e3);case 10:s.next=33;break;case 12:return s.next=14,Object($.g)(C.getChannelName);case 14:return n=s.sent,s.prev=15,s.next=18,De.part(n);case 18:s.next=22;break;case 20:s.prev=20,s.t0=s.catch(15);case 22:return s.prev=22,s.next=25,De.join(e);case 25:return s.next=27,Object($.e)(v.channelJoined(e));case 27:return s.next=29,Object($.d)(_e,De);case 29:s.next=33;break;case 31:s.prev=31,s.t1=s.catch(22);case 33:return s.abrupt("return",(function(){}));case 34:case"end":return s.stop()}}),Ce,null,[[15,20],[22,31]])}function Se(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload.msgId,n.next=3,Object($.g)(C.getChannelName);case 3:if(a=n.sent,!De){n.next=13;break}return n.prev=5,n.next=8,De.deletemessage(a,t);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(5);case 13:case"end":return n.stop()}}),Ne,null,[[5,10]])}function Ae(e){var t,a,n,s,r;return V.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.duration,n=t.reason,s=t.username,c.next=3,Object($.g)(C.getChannelName);case 3:if(r=c.sent,!De){c.next=13;break}return c.prev=5,c.next=8,De.timeout(r,s,a,n);case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(5);case 13:case"end":return c.stop()}}),Ie,null,[[5,10]])}function ze(){var e,t,a,n,s,r,c,i,o,u;return V.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Object($.j)(v.deleteMessage.type,Se);case 2:return l.next=4,Object($.j)(v.timeoutUser.type,Ae);case 4:e=void 0,t=void 0,a=void 0,n=void 0;case 8:return l.next=11,Object($.f)({selectChannel:Object($.i)(v.selectChannel.type),userInfoReceived:Object($.i)(pe.userInfoReceived.type),tokenReceived:Object($.i)(se.processToken.type),rehydrated:Object($.i)("persist/REHYDRATE")});case 11:if(s=l.sent,r=s.selectChannel,c=s.userInfoReceived,i=s.tokenReceived,!s.rehydrated){l.next=21;break}return l.next=19,Object($.g)(C.getChannelName);case 19:(o=l.sent)&&(e=o);case 21:if(i?t=i.payload:r?e=r.payload:c&&(a=c.payload),!n){l.next=26;break}return l.next=26,Object($.b)(n);case 26:if(!e){l.next=30;break}return l.next=29,Object($.d)(Ee,e,null===(u=a)||void 0===u?void 0:u.login,t);case 29:n=l.sent;case 30:l.next=8;break;case 32:case"end":return l.stop()}}),Te)}var Re=a(28),Le=a.n(Re),Be=V.a.mark(Ue),We=V.a.mark(Fe);function Ue(e){var t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=4,Le.a.get("https://id.twitch.tv/oauth2/userinfo",{headers:{Authorization:"Bearer ".concat(t)}});case 4:a=n.sent,a.data;case 7:case"end":return n.stop()}}),Be)}function Fe(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object($.j)(se.processToken.type,Ue);case 3:case"end":return e.stop()}}),We)}var He=V.a.mark(Ke),Je=V.a.mark(qe),Ze=V.a.mark(Ye),Ge=V.a.mark(Qe),Pe=V.a.mark(Ve);function Ke(){var e,t,a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.g)(ue.getToken);case 2:return e=n.sent,n.next=5,Le.a.get("https://api.twitch.tv/helix/users",{headers:{Authorization:"Bearer ".concat(e),"Client-Id":we.TWITCH_CLIENT_ID}});case 5:return t=n.sent,a=t.data,n.next=9,Object($.e)(pe.userInfoReceived(a.data[0]));case 9:case"end":return n.stop()}}),He)}function qe(e){var t,a,n;return V.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object($.g)(ue.getToken);case 2:return t=s.sent,s.next=5,Le.a.get("https://api.twitch.tv/helix/users",{headers:{Authorization:"Bearer ".concat(t),"Client-Id":we.TWITCH_CLIENT_ID},params:{login:e}});case 5:if(a=s.sent,!(n=a.data).data[0]){s.next=10;break}return s.abrupt("return",n.data[0].id);case 10:throw new Error("channel not found");case 11:case"end":return s.stop()}}),Je)}function Ye(){var e,t,a,n,s;return V.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object($.g)(ue.isLoggedIn);case 2:if(!r.sent){r.next=26;break}return r.next=6,Object($.g)(C.getChannelName);case 6:if(!(e=r.sent)){r.next=26;break}return r.next=10,qe(e);case 10:return t=r.sent,r.next=13,Object($.g)(ue.getToken);case 13:a=r.sent;case 14:return r.next=17,Le.a.get("https://api.twitch.tv/helix/streams",{headers:{Authorization:"Bearer ".concat(a),"Client-Id":we.TWITCH_CLIENT_ID},params:{user_id:t}});case 17:return n=r.sent,s=n.data,r.next=22,Object($.e)(de(s.data[0]));case 22:return r.next=24,Object($.c)(3e4);case 24:r.next=14;break;case 26:case"end":return r.stop()}}),Ze)}function Qe(){var e,t,a,n;return V.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object($.g)(Oe.getUserId);case 2:return e=s.sent,s.next=5,Object($.g)(ue.getToken);case 5:return t=s.sent,s.next=8,Le.a.get("https://api.twitch.tv/helix/streams/followed",{params:{user_id:e},headers:{Authorization:"Bearer ".concat(t),"Client-Id":we.TWITCH_CLIENT_ID}});case 8:return a=s.sent,n=a.data,s.next=12,Object($.e)(je(n.data));case 12:case"end":return s.stop()}}),Ge)}function Ve(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object($.j)(se.processToken.type,Ke);case 3:return e.next=5,Object($.j)([se.processToken.type,v.channelJoined.type],Ye);case 5:return e.next=7,Object($.j)(pe.getFollowedStreams.type,Qe);case 7:case"end":return e.stop()}}),Pe)}var Xe=V.a.mark($e);function $e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object($.h)(ze);case 3:return e.next=5,Object($.h)(Fe);case 5:return e.next=7,Object($.h)(Ve);case 7:case"end":return e.stop()}}),Xe)}var et,tt=a(54),at=a(74),nt=a.n(at),st=a(25),rt=a(70),ct=a(27),it=function(e){return Object(q.b)({chat:N,auth:le,router:Object(ct.b)(e),twitch:ve})},ot={key:"minimal-twitch-chat",storage:nt.a,blacklist:["auth","twitch"]},ut=Object(st.a)({basename:"/minimal-twitch-chat-react/"}),lt=Object(Y.a)(),mt=it(ut),dt=Object(tt.a)(ot,mt);et=Object(q.d)(dt,Object(q.a)(lt,Object(rt.a)(ut))),lt.run($e);var bt=Object(tt.b)(et),jt=et,pt=a(15),ft=function(){var e=Object(Z.f)(),t=P.a.parse(e.hash),a=Object(u.d)();return a(se.processToken(t.access_token||t.id_token)),a(Object(pt.d)("/")),null},ht=function(e){var t=e.children;Object(u.d)(),Object(Z.e)();return Object(S.jsxs)(Z.c,{children:[Object(S.jsx)(Z.a,{path:"/login/callback",children:Object(S.jsx)(ft,{})}),t]})},gt=(a.p,a.p,a.p,function(e){var t=e.user;return Object(S.jsx)("div",{className:"user-info flex items-center space-x-2",children:Object(S.jsx)("img",{className:"h-7 rounded-full",src:t.profile_image_url})})}),xt=(a.p,a(135)),Ot=a(136),vt=function(e){var t=e.buttonComponent,a=e.items,n=e.origin,r=void 0===n?"origin-bottom-right":n,c=e.className;return Object(S.jsx)("div",{className:Object(E.a)("drop-down-menu z-50",c),children:Object(S.jsxs)(xt.a,{as:"div",className:"relative z-50",children:[Object(S.jsx)("div",{children:Object(S.jsxs)(xt.a.Button,{className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(S.jsx)("span",{className:"sr-only",children:"Open user menu"}),t]})}),Object(S.jsx)(Ot.a,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(S.jsx)(xt.a.Items,{className:Object(E.a)(r,"origin-top-left"===r&&"right-0","absolute mt-2 w-48 z-50 rounded-md shadow-lg py-1 cursor-pointer\t bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),children:a.filter((function(e){return e})).map((function(e){return e})).map((function(e,t){return Object(S.jsx)(xt.a.Item,{children:function(t){var a=t.active;return Object(S.jsx)("a",{onClick:function(t){t.preventDefault(),e.onClick()},className:Object(E.a)(a?"bg-gray-100":"","cursor-pointer block px-4 py-2 text-sm text-gray-700"),children:e.title})}},"menu-item=".concat(t))}))})})]})})},yt=a(31),wt=(a.p,function(e){var t=e.currentChannel,a=e.onSubmit,n=e.className,r=Object(s.useState)(""),c=Object(z.a)(r,2),i=c[0],o=c[1];return Object(S.jsxs)("div",{className:Object(E.a)("chat-input items-center flex space-x-1",n),children:[Object(S.jsx)("input",{className:"bg-white text-black border-0 rounded-full h-7 px-4",value:i,placeholder:t,onKeyDown:function(e){"Enter"===e.key&&a&&a(i)},onChange:function(e){o(e.target.value)}}),0===i.length||i===t?Object(S.jsx)(yt.b,{className:"w-8 "}):Object(S.jsx)(yt.a,{onClick:function(){a&&i&&i.length>0&&a(i)},className:"w-8 cursor-pointer"})]})}),kt=function(e){Object(o.a)(e);var t=Object(u.e)(ue.isLoggedIn),a=Object(u.e)(Oe.getUser),n=Object(u.e)(Oe.getStreamInfo),s=Object(u.e)(C.getChannelName),r=Object(u.d)();return Object(S.jsxs)("menu",{className:"text-white bg-indigo-900 flex flex-row h-12 space-x-2 items-center p-2 fixed w-full top-0",children:[Object(S.jsx)(vt,{origin:"origin-top-right",buttonComponent:Object(S.jsx)(yt.d,{className:"bg-gray-800 hover:bg-indigo-500 transition rounded-full p-1 w-8"}),items:[{title:"Chat",onClick:function(){r(Object(pt.d)("/"))}},t&&{title:"Kan\xe4le",onClick:function(){r(Object(pt.d)("/channels"))}}].filter((function(e){return e}))}),Object(S.jsx)(wt,{onSubmit:function(e){r(v.selectChannel(e))},currentChannel:s}),Object(S.jsx)("div",{className:"flex flex-1 flex-shrink flex flex-row truncate",children:n&&Object(S.jsxs)("div",{className:"stream-info flex flex-1 items-center flex-shrink space-x-4 truncate",children:[Object(S.jsxs)("div",{className:"bg-purple-500 text-sm rounded-full items-center justify-center flex-shrink-0 flex p-1 px-2",children:[n.viewer_count,Object(S.jsx)("span",{className:"hidden lg:block",children:"\xa0Zuschauer"})]}),Object(S.jsx)("div",{className:"flex-shrink truncate",children:n.title})]})}),Object(S.jsxs)("div",{className:"flex-shrink-0  flex self-align-end",children:[a&&Object(S.jsx)(vt,{origin:"origin-top-left",items:[{title:"Einstellungen",onClick:function(){r(Object(pt.d)("/settings"))}},{title:"Abmelden",onClick:function(){r(se.logout())}}],buttonComponent:Object(S.jsx)(gt,{user:a})}),!t&&Object(S.jsx)("div",{className:"text-white",children:Object(S.jsxs)("a",{className:"flex items-center",href:"https://id.twitch.tv/oauth2/authorize?client_id=".concat(we.TWITCH_CLIENT_ID,"&redirect_uri=").concat(window.location.origin,"/minimal-twitch-chat-react/login/callback&force_verify=false&response_type=token&scope=").concat(encodeURIComponent("chat:edit chat:read channel:moderate"),"&claims=sub,exp"),children:[Object(S.jsx)(yt.c,{className:"w-8 mr-2 cursor-pointer"})," Anmelden"]})})]})]})},Ct=function(e){var t=e.children;return Object(S.jsxs)("div",{className:"base-screen",children:[Object(S.jsx)(kt,{}),Object(S.jsx)("div",{className:"content pt-12",children:t})]})},Nt=(a.p,function(e){Object(o.a)(e);var t=Object(u.d)();return Object(s.useEffect)((function(){t(pe.getFollowedStreams())}),[]),Object(S.jsx)("div",{className:"channel-list"})}),It=a(76);var Tt=function(){return Object(S.jsx)("div",{className:"App dark:bg-black",children:Object(S.jsx)(u.a,{store:jt,children:Object(S.jsx)(It.a,{loading:null,persistor:bt,children:Object(S.jsx)(ct.a,{history:ut,children:Object(S.jsx)(ht,{children:Object(S.jsx)(Z.c,{children:Object(S.jsx)(Z.a,{children:Object(S.jsx)(Ct,{children:Object(S.jsxs)(Z.c,{children:[Object(S.jsx)(Z.a,{path:"/channels",children:Object(S.jsx)(Nt,{})}),Object(S.jsx)(Z.a,{children:Object(S.jsx)(K,{})})]})})})})})})})})})},_t=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Tt,{})}),document.getElementById("root")),_t()},61:function(e,t){},81:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.bcdc7186.chunk.js.map