(this["webpackJsonpminimal-twitch-chat"]=this["webpackJsonpminimal-twitch-chat"]||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(38),c=n.n(r),i=(n(79),n(29)),o=(n.p,n(11)),u=n(41),l=n(47),d=n(14),m=n(10),b=Object(m.a)("chat/channel"),j=Object(m.a)("chat/joined"),g=Object(m.a)("chat/message"),f=Object(m.a)("chat/message-deleted"),p=Object(m.a)("chat/ban"),h=Object(m.a)("chat/timeout"),x=Object(m.a)("chat/delete-message"),O={chatMessage:g,selectChannel:b,channelJoined:j,banUser:p,timeoutUser:h,deleteMessage:x,chatMessageDeleted:f},v=Object(m.b)({messages:[],userMessageCount:{}},(function(e){e.addCase(j,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{channelName:t.payload,messages:[]})})).addCase(g,(function(e,t){console.log("Chat message Case!");var n=t.payload.userstate["display-name"]||"anonymous";if(t.payload.userstate["reply-parent-msg-id"]){var a=!1;e.messages=e.messages.map((function(e){return e.id===t.payload.userstate["reply-parent-msg-id"]&&(e.subMessages=[].concat(Object(l.a)(e.subMessages||[]),[t.payload]),a=!0),e})),a||(e.messages=[t.payload].concat(Object(l.a)(e.messages.slice(0,300))))}else e.messages=[t.payload].concat(Object(l.a)(e.messages.slice(0,300)));e.userMessageCount=Object(d.a)(Object(d.a)({},e.userMessageCount),{},Object(u.a)({},n,(e.userMessageCount[n]||0)+1))})).addCase(f,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{messages:e.messages.map((function(e){return e.id===t.payload.messageId?Object(d.a)(Object(d.a)({},e),{},{deleted:!0}):e}))})}))})),y=n(16),w=function(e){return e.chat},k={getMessages:Object(y.a)(w,(function(e){return e.messages})),getMessageCount:function(e){return Object(y.a)(w,(function(t){return t.userMessageCount[e||"anonymous"]||1}))},getChannelName:Object(y.a)(w,(function(e){return e.channelName}))},C=v,N=(n.p,n(50)),I=n.n(N);var T,_=function(e){var t=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t}(e);return I.a.hsl(t%360,.7,.7).hex()},M=(n.p,n(70)),S=n.n(M),D=n(21);!function(e){e[e.chat=0]="chat",e[e.action=1]="action",e[e.cheer=2]="cheer",e[e.sub=3]="sub",e[e.resub=4]="resub",e[e.subgift=5]="subgift",e[e.submysterygift=6]="submysterygift",e[e.anonsubgift=7]="anonsubgift",e[e.primepaidupgrade=8]="primepaidupgrade",e[e.host=9]="host",e[e.raid=10]="raid"}(T||(T={}));var z=n(2),A=function(e){var t=e.timestamp,n=e.usercolor,a=e.username,s=e.message,r=e.messageClassName,c=e.messageColor,i=e.className,u=e.userClassName,l=e.userstate,d=e.subMessages,m=e.type,b=Object(o.e)(k.getMessageCount(a));return Object(z.jsxs)("div",{className:"m-2",children:[Object(z.jsxs)("div",{className:Object(D.a)("chat-message shadow-md flex p-2 rounded-md space-x-2 text-2xl",i),children:[Object(z.jsx)("div",{className:"flex-shrink-0 leading-9 text-sm w-14 text-gray-600",children:S()(t).format("HH:mm:ss")}),Object(z.jsxs)("div",{style:{minWidth:"1.2rem"},className:"flex-shrink-0 space-x-1 text-sm h-9 flex items-center content-center text-gray-900",children:[m===T.chat&&1===b&&Object(z.jsx)("div",{className:"text-gray-900 text-sm inline-block bg-pink-600 flex items-center justify-center rounded-full w-5 text-center h-5",children:"#1"}),l&&l["custom-reward-id"]&&Object(z.jsx)("div",{className:"text-gray-900 text-sm inline-block bg-indigo-900 flex items-center justify-center rounded-full w-5 text-center h-5",children:"R"})]}),Object(z.jsxs)("div",{children:[Object(z.jsxs)("span",{style:{color:n},className:Object(D.a)(u),children:[a," "]}),Object(z.jsx)("span",{style:{color:c},className:Object(D.a)("flex-1",r||"dark:text-gray-300"),children:s})]})]}),d&&d.map((function(e){return Object(z.jsx)("div",{className:"ml-4 -mr-2 ",children:Object(z.jsx)(F,{message:e})})}))]})},E=n(35),R=function(e){e.map((function(e){if("string"===typeof e)e.match(/([a-zA-Z]*)(\d+)/);return e}));return e},L=function(e,t){if(!t)return[e];var n=[],a=[];Object.entries(t||[]).forEach((function(t){var n=Object(E.a)(t,2),s=n[0],r=n[1];Object.values(r).forEach((function(t,n){var r=t.split("-"),c=Object(E.a)(r,2),i=c[0],o=c[1];a.push({start:parseInt(i),stringToReplace:e.substring(parseInt(i),parseInt(o)+1),replacement:Object(z.jsx)("img",{style:{display:"inline",width:"1.1em"},src:"https://static-cdn.jtvnw.net/emoticons/v2/".concat(s,"/default/dark/2.0")},"emote-".concat(s,"-").concat(n))})}))}));var s=e;return a.sort((function(e,t){return e.start-t.start})).forEach((function(e){var t=e.stringToReplace,a=e.replacement;if(s){var r=s.split(t);n.push(r[0]),n.push(a),s=s.replace(r[0],"").replace(t,"")}})),n.push(s),n},W=function(e){return e.map((function(e){if("string"===typeof e){var t=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;return e.split(" ").map((function(e){return t.test(e)?Object(z.jsxs)("a",{className:"text-pink-300",target:"_blank",href:e,children:[e," "]},e):e+" "}))}return e}))},F=function(e){var t,n=e.message,a=_(n.userstate["display-name"]||String(Math.random()));return Object(z.jsx)(A,{timestamp:n.timestamp,type:n.type,className:"bg-gray-900",userstate:n.userstate,username:n.userstate["display-name"],usercolor:n.userstate.color?(t=n.userstate.color,I()(t).get("lab.l")<30?a:n.userstate.color):a,message:W(L(n.message,n.userstate.emotes)),subMessages:n.subMessages,messageClassName:Object(D.a)([n.deleted&&"text-gray-600","action"===n.userstate["message-type"]&&"italic"])})},U=(n.p,function(e){var t=e.message;return Object(z.jsx)(A,{timestamp:t.timestamp,type:t.type,className:"bg-blue-800 bg-opacity-70",usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:"".concat(t.userstate["display-name"]," hat ").concat(t.userstate.bits," Bits gecheered"),message:R(L(t.message,t.userstate.emotes))})}),B=(n.p,function(e){var t=e.message;return Object(z.jsx)(A,{timestamp:t.timestamp,className:"bg-yellow-700",type:t.type,userClassName:"dark:text-gray-900",username:t.userstate["display-name"],messageClassName:"dark:text-gray-900",message:L(t.message,t.userstate.emotes)})}),H=(n.p,function(e){var t=e.message;return Object(z.jsx)(A,{timestamp:t.timestamp,className:"bg-purple-900 bg-opacity-70",usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:"".concat(t.userstate["display-name"]," hat ein Abo (").concat(t.userstate["msg-param-sub-plan"],") im ").concat(t.userstate["msg-param-cumulative-months"],". Monat abgeschlossen: "),message:L(t.message,t.userstate.emotes)})}),J=(n.p,function(e){var t=e.message;return Object(z.jsx)(A,{timestamp:t.timestamp,className:"bg-purple-800 bg-opacity-70",type:t.type,usercolor:t.userstate.color||_(t.userstate["display-name"]||String(Math.random())),username:t.userstate["display-name"],message:L(t.message,t.userstate.emotes)})}),Z=n(44),P=n(43),K=n.n(P),q=function(e){Object(i.a)(e);var t=Object(o.d)(),n=Object(o.e)(k.getMessages),s=Object(Z.f)(),r=K.a.parse(s.search);return console.log("loc",r),Object(a.useEffect)((function(){r.channel&&t(O.selectChannel(r.channel))}),[r.channel]),Object(z.jsx)("div",{className:"chat bg-gray ",children:n.filter((function(e){if(!e.message||0===e.message.length)return!0;var t=e.message.length,n=e.message.split(" ").length,a=e.message.match(/([a-zA-Z]+\W*\d+)/g),s=n/t;if(e.type!==T.chat)return!0;if(1===e.message.length)return!1;if(e.message.startsWith("!bandit"))return!1;if(e.message.startsWith("!marble"))return!1;if(e.message.startsWith("!song"))return!1;if(e.message.indexOf("https://www.thingiverse.com")>-1);else{if("projektionbot"===e.userstate.username)return!1;if("streamelements"===e.userstate.username)return!1;if("sascha_lbot"===e.userstate.username)return!1;if(e.message.match(/~\d+/))return!1;if((a||[]).length>10&&s>.1)return!1}return!0})).map((function(e,t){switch(e.type){case T.cheer:return Object(z.jsx)(U,{message:e},e.userstate.id);case T.raid:return Object(z.jsx)(B,{message:e},e.userstate.id);case T.sub:return Object(z.jsx)(H,{message:e},e.userstate.id);case T.subgift:return Object(z.jsx)(J,{message:e},e.userstate.id)}return Object(z.jsx)("div",{className:"w-full flex flex-1",children:Object(z.jsx)("div",{className:"flex-1 -my-1",children:Object(z.jsx)(F,{message:e},e.userstate.id)})})}))})},G=n(13),Q=n(46),V=n(71),X=n.n(V),Y=n(6),$=n.n(Y),ee=n(53),te=n(4),ne=n(72),ae=n.n(ne),se=Object(m.a)("login/token"),re=Object(m.a)("login/logout"),ce={processToken:se,logout:re},ie={},oe=Object(m.b)(ie,(function(e){e.addCase(ce.processToken,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{token:t.payload})})).addCase(ce.logout,(function(e,t){return ie}))})),ue=function(e){return e.auth},le=Object(y.a)(ue,(function(e){return e.token})),de={isLoggedIn:Object(y.a)(ue,(function(e){return!!e.token})),getToken:le},me=oe,be=Object(m.a)("twitch/userinfo"),je=Object(m.a)("twitch/streaminfo"),ge=Object(m.a)("twitch/followedStreams"),fe=Object(m.a)("twitch/followedStreams"),pe={userInfoReceived:be,streamInfoReceived:je,getFollowedStreams:ge,followedStreamsReceived:fe},he={user:void 0},xe=Object(m.b)(he,(function(e){e.addCase(be,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{user:t.payload})})).addCase(je,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{streamInfo:t.payload})})).addCase(re,(function(e,t){return he}))})),Oe=function(e){return e.twitch},ve=Object(y.a)(Oe,(function(e){return e.user})),ye={getUser:ve,getUserId:Object(y.a)(ve,(function(e){return null===e||void 0===e?void 0:e.id})),getStreamInfo:Object(y.a)(Oe,(function(e){return e.streamInfo}))},we=xe,ke=n(73);n.n(ke).a.config();var Ce={TWITCH_CLIENT_ID:"1lk526oh4rsbzwcqowmcuc4m9agza3"},Ne=$.a.mark(Se),Ie=$.a.mark(Ae),Te=$.a.mark(Ee),_e=$.a.mark(Re),Me=$.a.mark(Le);function Se(e){var t,n;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("INIT!"),a.next=3,Object(te.a)(De,e);case 3:t=a.sent;case 4:return console.log("waiting for race..."),a.next=8,Object(te.i)(t);case 8:return n=a.sent,a.next=11,Object(te.e)(n);case 11:a.next=4;break;case 13:case"end":return a.stop()}}),Ne)}function De(e){return Object(Q.b)((function(t){return e.on("connected",function(){var e=Object(ee.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Connected!");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("chat",(function(e,n,a,s){t(g({id:n.id,type:T.chat,timestamp:new Date,message:a,userstate:n}))})),e.on("cheer",(function(e,n,a){t(g({id:n.id,type:T.cheer,timestamp:new Date,message:a,userstate:n}))})),e.on("subscription",(function(e,n,a,s,r){t(g({id:r.id,type:T.sub,timestamp:new Date,message:s,userstate:r}))})),e.on("resub",(function(e,n,a,s,r,c){t(g({id:r.id,type:T.sub,timestamp:new Date,message:s,userstate:r}))})),e.on("submysterygift",(function(e,n,a,s,r){t(g({id:r.id,type:T.subgift,timestamp:new Date,message:"hat ".concat(a," Subs verschenkt!"),userstate:r}))})),e.on("subgift",(function(e,n,a,s,r,c){t(g({id:c.id,type:T.subgift,timestamp:new Date,message:"hat ein Abo an ".concat(s," verschenkt!"),userstate:c}))})),e.on("messagedeleted",(function(e,n,a,s){t(f({channel:e,username:n,deletedMessage:a,messageId:s["target-msg-id"]}))})),e.on("action",(function(e,n,a,s){console.log("msg",e,n,a,s),t(g({id:n.id,type:T.action,userstate:n,message:a,timestamp:new Date}))})),e.on("raided",(function(e,n,a){t(g({type:T.raid,message:"raidet mit ".concat(a," Personen!"),userstate:{"display-name":n},timestamp:new Date}))})),setTimeout((function(){}),1e3),Object(ee.a)($.a.mark((function t(){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Client unsubscribe"),t.next=3,e.disconnect();case 3:case"end":return t.stop()}}),t)})))}))}var ze=void 0;function Ae(e,t,n){var a;return $.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log("Create Client...",e,t,n),ze){s.next=13;break}return ze=ae.a.client({options:{debug:!0,messagesLogLevel:"info",clientId:Ce.TWITCH_CLIENT_ID},connection:{secure:!0,reconnect:!0},identity:{username:t,password:n&&"oauth:".concat(n)},channels:[e]}),s.next=5,ze.connect();case 5:return s.next=7,Object(te.e)(O.channelJoined(e));case 7:return s.next=9,Object(te.d)(Se,ze);case 9:return s.next=11,Object(te.c)(1e3);case 11:s.next=34;break;case 13:return s.next=15,Object(te.g)(k.getChannelName);case 15:return a=s.sent,s.prev=16,s.next=19,ze.part(a);case 19:s.next=23;break;case 21:s.prev=21,s.t0=s.catch(16);case 23:return s.prev=23,s.next=26,ze.join(e);case 26:return s.next=28,Object(te.e)(O.channelJoined(e));case 28:return s.next=30,Object(te.d)(Se,ze);case 30:s.next=34;break;case 32:s.prev=32,s.t1=s.catch(23);case 34:return s.abrupt("return",(function(){console.log("Create Client - Canceled")}));case 35:case"end":return s.stop()}}),Ie,null,[[16,21],[23,32]])}function Ee(e){var t,n;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.msgId,a.next=3,Object(te.g)(k.getChannelName);case 3:if(n=a.sent,!ze){a.next=13;break}return a.prev=5,a.next=8,ze.deletemessage(n,t);case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(5),console.log(a.t0);case 13:case"end":return a.stop()}}),Te,null,[[5,10]])}function Re(e){var t,n,a,s,r;return $.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.duration,a=t.reason,s=t.username,c.next=3,Object(te.g)(k.getChannelName);case 3:if(r=c.sent,!ze){c.next=13;break}return c.prev=5,c.next=8,ze.timeout(r,s,n,a);case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(5),console.log(c.t0);case 13:case"end":return c.stop()}}),_e,null,[[5,10]])}function Le(){var e,t,n,a,s,r,c,i,o;return $.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("init chat!"),u.next=3,Object(te.j)(O.deleteMessage.type,Ee);case 3:return u.next=5,Object(te.j)(O.timeoutUser.type,Re);case 5:e=void 0,t=void 0,n=void 0,a=void 0;case 9:return u.next=12,Object(te.f)({selectChannel:Object(te.i)(O.selectChannel.type),userInfoReceived:Object(te.i)(pe.userInfoReceived.type),tokenReceived:Object(te.i)(ce.processToken.type)});case 12:if(s=u.sent,r=s.selectChannel,c=s.userInfoReceived,(i=s.tokenReceived)?t=i.payload:r?e=r.payload:c&&(n=c.payload),console.log("Race Completed"),!a){u.next=21;break}return u.next=21,Object(te.b)(a);case 21:if(!e){u.next=25;break}return u.next=24,Object(te.d)(Ae,e,null===(o=n)||void 0===o?void 0:o.login,t);case 24:a=u.sent;case 25:u.next=9;break;case 27:case"end":return u.stop()}}),Me)}var We=n(28),Fe=n.n(We),Ue=$.a.mark(He),Be=$.a.mark(Je);function He(e){var t,n,a;return $.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,console.log("Saga -> ",t),s.next=4,Fe.a.get("https://id.twitch.tv/oauth2/userinfo",{headers:{Authorization:"Bearer ".concat(t)}});case 4:n=s.sent,a=n.data,console.log("Userinfo",a);case 7:case"end":return s.stop()}}),Ue)}function Je(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("INIT auth"),e.next=3,Object(te.j)(ce.processToken.type,He);case 3:case"end":return e.stop()}}),Be)}var Ze=$.a.mark(Qe),Pe=$.a.mark(Ve),Ke=$.a.mark(Xe),qe=$.a.mark(Ye),Ge=$.a.mark($e);function Qe(){var e,t,n;return $.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(te.g)(de.getToken);case 2:return e=a.sent,a.next=5,Fe.a.get("https://api.twitch.tv/helix/users",{headers:{Authorization:"Bearer ".concat(e),"Client-Id":Ce.TWITCH_CLIENT_ID}});case 5:return t=a.sent,n=t.data,a.next=9,Object(te.e)(pe.userInfoReceived(n.data[0]));case 9:case"end":return a.stop()}}),Ze)}function Ve(e){var t,n,a;return $.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(te.g)(de.getToken);case 2:return t=s.sent,s.next=5,Fe.a.get("https://api.twitch.tv/helix/users",{headers:{Authorization:"Bearer ".concat(t),"Client-Id":Ce.TWITCH_CLIENT_ID},params:{login:e}});case 5:if(n=s.sent,a=n.data,console.log("GetUser",a),!a.data[0]){s.next=10;break}return s.abrupt("return",a.data[0].id);case 10:throw new Error("channel not found");case 11:case"end":return s.stop()}}),Pe)}function Xe(){var e,t,n,a,s;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(te.g)(de.isLoggedIn);case 2:if(!r.sent){r.next=25;break}return r.next=6,Object(te.g)(k.getChannelName);case 6:return e=r.sent,r.next=9,Ve(e);case 9:return t=r.sent,r.next=12,Object(te.g)(de.getToken);case 12:n=r.sent;case 13:return r.next=16,Fe.a.get("https://api.twitch.tv/helix/streams",{headers:{Authorization:"Bearer ".concat(n),"Client-Id":Ce.TWITCH_CLIENT_ID},params:{user_id:t}});case 16:return a=r.sent,s=a.data,console.log("streamInfo",s),r.next=21,Object(te.e)(je(s.data[0]));case 21:return r.next=23,Object(te.c)(3e4);case 23:r.next=13;break;case 25:case"end":return r.stop()}}),Ke)}function Ye(){var e,t,n,a;return $.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(te.g)(ye.getUserId);case 2:return e=s.sent,s.next=5,Object(te.g)(de.getToken);case 5:return t=s.sent,s.next=8,Fe.a.get("https://api.twitch.tv/helix/streams/followed",{params:{user_id:e},headers:{Authorization:"Bearer ".concat(t),"Client-Id":Ce.TWITCH_CLIENT_ID}});case 8:return n=s.sent,a=n.data,s.next=12,Object(te.e)(fe(a.data));case 12:case"end":return s.stop()}}),qe)}function $e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Twitch Saga Ready"),e.next=3,Object(te.j)(ce.processToken.type,Qe);case 3:return e.next=5,Object(te.j)(O.channelJoined.type,Xe);case 5:return e.next=7,Object(te.j)(pe.getFollowedStreams.type,Ye);case 7:case"end":return e.stop()}}),Ge)}var et=$.a.mark(tt);function tt(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Saga Init done"),e.next=3,Object(te.h)(Le);case 3:return e.next=5,Object(te.h)(Je);case 5:return e.next=7,Object(te.h)($e);case 7:case"end":return e.stop()}}),et)}var nt=n(25),at=n(69),st=n(27),rt=function(e){return Object(G.b)({chat:C,auth:me,router:Object(st.b)(e),twitch:we})},ct=Object(nt.a)(),it=Object(Q.a)(),ot=rt(ct),ut=Object(G.d)(ot,Object(G.a)(it,Object(at.a)(ct),X.a));it.run(tt);var lt=ut,dt=n(15),mt=function(){var e=Object(Z.f)();console.log("loc",e.hash);var t=K.a.parse(e.hash);console.log("SearchParams",t);var n=Object(o.d)();return n(ce.processToken(t.access_token||t.id_token)),n(Object(dt.d)("/")),null},bt=function(e){var t=e.children;Object(o.d)(),Object(Z.e)();return Object(z.jsxs)(Z.c,{children:[Object(z.jsx)(Z.a,{path:"/login/callback",children:Object(z.jsx)(mt,{})}),t]})},jt=(n.p,n.p,n.p,function(e){var t=e.user;return Object(z.jsx)("div",{className:"user-info flex items-center space-x-2",children:Object(z.jsx)("img",{className:"h-7 rounded-full",src:t.profile_image_url})})}),gt=(n.p,n(130)),ft=n(131),pt=function(e){var t=e.buttonComponent,n=e.items,s=e.origin,r=void 0===s?"origin-bottom-right":s,c=e.className;return Object(z.jsx)("div",{className:Object(D.a)("drop-down-menu z-50",c),children:Object(z.jsxs)(gt.a,{as:"div",className:"relative z-50",children:[Object(z.jsx)("div",{children:Object(z.jsxs)(gt.a.Button,{className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[Object(z.jsx)("span",{className:"sr-only",children:"Open user menu"}),t]})}),Object(z.jsx)(ft.a,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(z.jsx)(gt.a.Items,{className:Object(D.a)(r,"origin-top-left"===r&&"right-0","absolute mt-2 w-48 z-50 rounded-md shadow-lg py-1 cursor-pointer\t bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),children:n.filter((function(e){return e})).map((function(e){return e})).map((function(e,t){return Object(z.jsx)(gt.a.Item,{children:function(t){var n=t.active;return Object(z.jsx)("a",{onClick:function(t){t.preventDefault(),e.onClick()},className:Object(D.a)(n?"bg-gray-100":"","cursor-pointer block px-4 py-2 text-sm text-gray-700"),children:e.title})}},"menu-item=".concat(t))}))})})]})})},ht=n(34),xt=(n.p,function(e){var t=e.currentChannel,n=e.onSubmit,s=e.className,r=Object(a.useState)(""),c=Object(E.a)(r,2),i=c[0],o=c[1];return Object(z.jsxs)("div",{className:Object(D.a)("chat-input items-center flex space-x-1",s),children:[Object(z.jsx)("input",{className:"bg-white text-black border-0 rounded-full h-7 px-4",value:i,placeholder:t,onKeyDown:function(e){"Enter"===e.key&&n&&n(i)},onChange:function(e){o(e.target.value)}}),0===i.length||i===t?Object(z.jsx)(ht.b,{className:"w-8 "}):Object(z.jsx)(ht.a,{onClick:function(){n&&i&&i.length>0&&n(i)},className:"w-8 cursor-pointer"})]})}),Ot=function(e){Object(i.a)(e);var t=Object(o.e)(de.isLoggedIn),n=Object(o.e)(ye.getUser),a=Object(o.e)(ye.getStreamInfo),s=Object(o.e)(k.getChannelName),r=Object(o.d)();return Object(z.jsxs)("menu",{className:"text-white bg-indigo-900 flex flex-row h-12 space-x-2 items-center p-2 fixed w-full top-0",children:[Object(z.jsx)(pt,{origin:"origin-top-right",buttonComponent:Object(z.jsx)(ht.c,{className:"bg-gray-800 hover:bg-indigo-500 transition rounded-full p-1 w-8"}),items:[{title:"Chat",onClick:function(){r(Object(dt.d)("/"))}},t&&{title:"Kan\xe4le",onClick:function(){r(Object(dt.d)("/channels"))}}].filter((function(e){return e}))}),!t&&Object(z.jsx)("div",{className:"text-white",children:Object(z.jsx)("a",{href:"https://id.twitch.tv/oauth2/authorize?client_id=".concat(Ce.TWITCH_CLIENT_ID,"&redirect_uri=").concat(window.location.origin,"/login/callback&force_verify=false&response_type=token&scope=").concat(encodeURIComponent("chat:edit chat:read channel:moderate"),"&claims=sub,exp"),children:"Anmelden"})}),Object(z.jsx)(xt,{onSubmit:function(e){r(O.selectChannel(e))},currentChannel:s}),Object(z.jsx)("div",{className:"flex flex-1 flex-shrink flex flex-row truncate",children:a&&Object(z.jsxs)("div",{className:"stream-info flex flex-1 items-center flex-shrink space-x-4 truncate",children:[Object(z.jsxs)("div",{className:"bg-purple-500 text-sm rounded-full items-center justify-center flex-shrink-0 flex p-1 px-2",children:[a.viewer_count,Object(z.jsx)("span",{className:"hidden lg:block",children:"\xa0Zuschauer"})]}),Object(z.jsx)("div",{className:"flex-shrink truncate",children:a.title})]})}),Object(z.jsx)("div",{className:"flex-shrink-0  flex self-align-end",children:n&&Object(z.jsx)(pt,{origin:"origin-top-left",items:[{title:"Einstellungen",onClick:function(){r(Object(dt.d)("/settings"))}},{title:"Abmelden",onClick:function(){r(ce.logout())}}],buttonComponent:Object(z.jsx)(jt,{user:n})})})]})},vt=function(e){var t=e.children;return Object(z.jsxs)("div",{className:"base-screen",children:[Object(z.jsx)(Ot,{}),Object(z.jsx)("div",{className:"content pt-12",children:t})]})},yt=(n.p,function(e){Object(i.a)(e);var t=Object(o.d)();return Object(a.useEffect)((function(){t(pe.getFollowedStreams())}),[]),Object(z.jsx)("div",{className:"channel-list"})});var wt=function(){return Object(z.jsx)("div",{className:"App dark:bg-black",children:Object(z.jsx)(o.a,{store:lt,children:Object(z.jsx)(st.a,{history:ct,children:Object(z.jsx)(bt,{children:Object(z.jsx)(Z.c,{children:Object(z.jsx)(Z.a,{children:Object(z.jsx)(vt,{children:Object(z.jsxs)(Z.c,{children:[Object(z.jsx)(Z.a,{path:"/channels",children:Object(z.jsx)(yt,{})}),Object(z.jsx)(Z.a,{children:Object(z.jsx)(q,{})})]})})})})})})})})},kt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(wt,{})}),document.getElementById("root")),kt()},60:function(e,t){},79:function(e,t,n){},99:function(e,t){}},[[128,1,2]]]);
//# sourceMappingURL=main.275cf035.chunk.js.map