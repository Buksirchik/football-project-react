(this["webpackJsonpfootball-project-react"]=this["webpackJsonpfootball-project-react"]||[]).push([[0],{48:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a={};c.r(a),c.d(a,"getTournaments",(function(){return _})),c.d(a,"getTournamentStandings",(function(){return v})),c.d(a,"getTeam",(function(){return N}));var n=c(0),s=c(1),l=c.n(s),i=c(17),r=c.n(i),o=(c(48),c(2)),j=c(5),d=c(4),b=function(e){return e.profile.listFavoriteTeams},m=function(e){return e.profile.listFavoritePlayers},u=function(e){return e.tournament.listTournaments},O=function(e){return e.tournament.tournamentInfo},h=function(e){return e.tournament.teamInfo},f=function(e){return e.app.theme},x=c(36),p=c.n(x).a.create({baseURL:"https://api.football-data.org/v2/",headers:{"X-Auth-Token":"0de2b419cd614b6da622b89303e0c8ad"}}),_=function(){try{return p.get("/competitions?plan=TIER_ONE")}catch(e){console.log(e.message)}},v=function(e){try{return p.get("/competitions/".concat(e,"/standings?standingType=TOTAL"))}catch(t){console.log(t.message)}},N=function(e){try{return p.get("teams/".concat(e,"/"))}catch(t){console.log(t.message)}},g="SET_TOURNAMENTS_LIST",y="SET_TOURNAMENT_INFO",T="SET_TEAM_INFO",w="ADD_FAVORITE_TEAM",F="DELETE_FAVORITE_TEAM",E="ADD_FAVORITE_PLAYER",k="DELETE_FAVORITE_PLAYER",A="TOGGLE_THEME",I=function(e){return{type:g,payload:e}},S=function(e){return{type:y,payload:e}},C=function(e){return{type:T,payload:e}},L=function(e){return{type:k,payload:e}},D=function(e){return{type:F,payload:e}},P=(c(70),c.p+"static/media/flag.f704db98.gif"),R=function(e){var t=e.players,c=Object(d.b)();return Object(n.jsx)("ul",{className:"favorite-players",children:t.map((function(e){var t=e.clubIcon,a=e.name,s=e.clubName,l=e.position,i=e.id;return Object(n.jsxs)("li",{className:"favorite-player",children:[Object(n.jsx)("div",{className:"player__club-wrap",children:Object(n.jsx)("img",{className:"player__club",src:t||P,alt:a})}),Object(n.jsxs)("div",{className:"player-info",children:[Object(n.jsx)("p",{className:"player-info__text",children:a}),Object(n.jsxs)("p",{className:"player-info__text",children:["Club: ",s]}),Object(n.jsxs)("p",{className:"player-info__text",children:["Position: ",l]})]}),Object(n.jsx)("button",{className:"unfollow-player",onClick:function(){return c(L(i))},children:"\u2718"})]},i)}))})},M=(c(71),c.p+"static/media/flag.f704db98.gif"),G=function(e){var t=e.teams,c=Object(d.b)();return Object(n.jsx)("ul",{className:"favorite-teams",children:t.map((function(e){var t=e.crestUrl,a=e.name,s=e.id;return Object(n.jsxs)("li",{className:"favorite-team",children:[Object(n.jsx)("div",{className:"favorite-team__img-wrap",children:Object(n.jsx)("img",{className:"favorite-team__img",src:t||M,alt:a})}),Object(n.jsx)("p",{className:"favorite-team__name",children:a}),Object(n.jsx)("button",{className:"unfollow-team",onClick:function(){return c(D(s))},children:"\u2718"})]},s)}))})},U=c.p+"static/media/avatar.c3f9f338.jpg",W=(c(72),function(){var e=Object(d.c)(m),t=Object(d.c)(b),c=!!Object.values(e).length,a=!!Object.values(t).length;return Object(n.jsxs)("div",{className:"profile",children:[Object(n.jsx)("div",{className:"profile-header",children:Object(n.jsx)("div",{className:"profile-avatar",children:Object(n.jsx)("img",{className:"profile-avatar__img",src:U,alt:"John Snow"})})}),Object(n.jsx)("p",{className:"profile__name",children:"John Snow"}),a?Object(n.jsxs)("div",{className:"following-teams",children:[Object(n.jsx)("h3",{className:"following__title",children:"Following teams"}),Object(n.jsx)(G,{teams:Object.values(t)})]}):null,c?Object(n.jsxs)("div",{className:"following-players",children:[Object(n.jsx)("h3",{className:"following__title",children:"Following players"}),Object(n.jsx)(R,{players:Object.values(e)})]}):null,!0===(c||a)?null:Object(n.jsx)("p",{className:"profile__text",children:"There aren't favorite players and teams"})]})}),J=(c(73),function(){var e=Object(j.f)().id,t=2e3!==+e&&2018!==+e;return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"standings__head",children:[Object(n.jsx)("th",{className:"standings__head-cell",children:"Position"}),Object(n.jsx)("th",{className:"standings__head-cell",children:"Club"}),Object(n.jsx)("th",{className:"standings__head-cell",children:"Games"}),Object(n.jsxs)("th",{className:"standings__head-cell",children:[Object(n.jsx)("span",{className:"desctop-cell",children:"Points"}),Object(n.jsx)("span",{className:"mobile-cell",children:"Pts"})]}),Object(n.jsxs)("th",{className:"standings__head-cell",children:[Object(n.jsx)("span",{className:"desctop-cell",children:"Won"}),Object(n.jsx)("span",{className:"mobile-cell",children:"W"})]}),Object(n.jsxs)("th",{className:"standings__head-cell",children:[Object(n.jsx)("span",{className:"desctop-cell",children:"Drawn"}),Object(n.jsx)("span",{className:"mobile-cell",children:"D"})]}),Object(n.jsxs)("th",{className:"standings__head-cell",children:[Object(n.jsx)("span",{className:"desctop-cell",children:"Lost"}),Object(n.jsx)("span",{className:"mobile-cell",children:"L"})]}),Object(n.jsx)("th",{className:"standings__head-cell",children:Object(n.jsx)("abbr",{title:"Golas For",children:"GF"})}),Object(n.jsx)("th",{className:"standings__head-cell",children:Object(n.jsx)("abbr",{title:"Goals Against",children:"GA"})}),Object(n.jsx)("th",{className:"standings__head-cell",children:Object(n.jsx)("abbr",{title:"Goal Difference",children:"GD"})}),t?Object(n.jsx)("th",{className:"standings__head-cell",children:"Form"}):null]})})}),B=c(10),V=(c(75),function(e){var t=e.form.split(",");return Object(n.jsx)("ul",{className:"team-form-list",children:t.map((function(e,t){return Object(n.jsx)("li",{className:"team-form-list__item ".concat(e),children:e},t)}))})}),Y=c.p+"static/media/flag.f704db98.gif",H=(c(76),function(e){var t=e.table.map((function(e){var t=e.position,c=e.form,a=e.draw,s=e.lost,l=e.playedGames,i=e.points,r=e.goalDifference,o=e.goalsAgainst,j=e.goalsFor,d=e.team,b=e.won;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"standings__cell",children:t}),Object(n.jsx)("td",{className:"standings__cell",children:Object(n.jsxs)(B.b,{className:"football-team",to:"/team/".concat(d.id),children:[Object(n.jsx)("img",{src:d.crestUrl||Y,alt:d.name,className:"football-team__logo"}),Object(n.jsx)("p",{className:"football-team__name",children:d.name})]})}),Object(n.jsx)("td",{className:"standings__cell",children:l}),Object(n.jsx)("td",{className:"standings__cell",children:i}),Object(n.jsx)("td",{className:"standings__cell",children:b}),Object(n.jsx)("td",{className:"standings__cell",children:a}),Object(n.jsx)("td",{className:"standings__cell",children:s}),Object(n.jsx)("td",{className:"standings__cell",children:j}),Object(n.jsx)("td",{className:"standings__cell",children:o}),Object(n.jsx)("td",{className:"standings__cell",children:r}),c?Object(n.jsx)("td",{className:"standings__cell",children:Object(n.jsx)(V,{form:c})}):null]},d.id)}));return Object(n.jsx)(n.Fragment,{children:t})}),q=(c(77),c(78),function(){return Object(n.jsx)("div",{className:"preloader"})}),X=function(){var e=Object(d.b)(),t=Object(j.f)().id,c=Object(d.c)(O);if(Object(s.useEffect)((function(){var c;e((c=+t,function(e){var t;console.log(typeof c),null===(t=a.getTournamentStandings(c))||void 0===t||t.then((function(t){var c=t.data;e(S(c))}))})),window.scrollTo(0,0)}),[t,e]),null===c)return Object(n.jsx)(q,{});var l=c.competition,i=c.standings;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{className:"tournament__title",children:l.name}),Z(i)]})};function Z(e){return e.map((function(e,t){var c=e.table,a=e.group,s=null===a||void 0===a?void 0:a.replace("_"," ");return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"tournament__title",children:s||"Standings"}),Object(n.jsxs)("table",{className:"standings",children:[Object(n.jsx)(J,{}),Object(n.jsx)("tbody",{children:Object(n.jsx)(H,{table:c})})]})]},t)}))}c(79);var z=function(){var e=Object(d.b)(),t=Object(d.c)(u);return Object(s.useEffect)((function(){e((function(e){var t;null===(t=a.getTournaments())||void 0===t||t.then((function(t){var c=t.data.competitions;e(I(c))}))})),window.scrollTo(0,0)}),[e]),t.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"tournament__title",children:"Select a tournament"}),Object(n.jsx)("ul",{className:"tournament-list",children:t.map((function(e){return Object(n.jsxs)(B.b,{to:"/tournaments/".concat(e.id),className:"tournament",children:[Object(n.jsx)("div",{className:"tournament-img__wrap",children:Object(n.jsx)("img",{src:"./images/".concat(e.code,".png"),alt:e.name,className:"tournament__img"})}),Object(n.jsx)("p",{className:"tournament__name",children:e.name})]},e.id)}))})]}):Object(n.jsx)(q,{})},K=(c(80),function(e){var t=e.onClick;return Object(n.jsx)("button",{className:"follow",onClick:t,children:"FOLLOW"})}),Q=(c(81),function(e){var t=e.onClick;return Object(n.jsx)("button",{className:"unfollow",onClick:t,children:"UNFOLLOW"})}),$=(c(82),function(e){var t=Object(d.b)(),c=Object(d.c)(m),a=e.name,s=e.dateOfBirth,l=e.position,i=e.nationality,r=e.role,o=e.id,j=e.clubName,b=e.clubIcon,u=!!c[o];return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card__front",children:Object(n.jsx)("p",{className:"card__text",children:a||"John"})}),Object(n.jsxs)("div",{className:"card__back",children:[Object(n.jsxs)("p",{className:"card__text",children:["Nationality: ",i||"Westeros"]}),Object(n.jsxs)("p",{className:"card__text",children:["Date of Birth:"," "+new Date(s).toLocaleDateString()||!1]}),Object(n.jsxs)("p",{className:"card__text",children:["Position: ",l||"Team Member"]}),Object(n.jsxs)("p",{className:"card__text",children:["Role: ",r||"Team Member"]}),u?Object(n.jsx)(Q,{onClick:function(){t(L(o))}}):Object(n.jsx)(K,{onClick:function(){t({type:E,payload:{id:o,name:a,position:l,clubName:j,clubIcon:b}})}})]})]})}),ee=c.p+"static/media/flag.f704db98.gif",te=(c(83),{dateOfBirth:"1985-02-05T00:00:00Z",name:"John Snow",nationality:"Westeros",position:"Attacker",role:"PLAYER"}),ce=function(){var e=Object(d.b)(),t=Object(d.c)(b),c=Object(d.c)(h),l=Object(j.f)().id,i=!!t[l];if(Object(s.useEffect)((function(){e(function(e){return function(t){var c;null===(c=a.getTeam(e))||void 0===c||c.then((function(e){var c=e.data;t(C(c))}))}}(+l)),window.scrollTo(0,0)}),[e,l]),null===c)return Object(n.jsx)(q,{});var r=c.id,m=c.name,u=c.crestUrl,O=c.founded,f=void 0===O?"1960":O,x=c.venue,p=void 0===x?"National stadium":x,_=c.squad;_.length||(_=Array(10).fill(te));return Object(n.jsxs)("section",{className:"club",children:[Object(n.jsxs)("div",{className:"club-info",children:[Object(n.jsx)("div",{className:"club-info__img-wrap",children:Object(n.jsx)("img",{className:"club-info__img",src:u||ee,alt:m})}),Object(n.jsxs)("div",{className:"club-info__col",children:[Object(n.jsx)("h2",{className:"club-info__title",children:m}),Object(n.jsxs)("p",{className:"club-info__text",children:["Founded: ",f]}),Object(n.jsxs)("p",{className:"club-info__text",children:["Stadium: ",p]}),i?Object(n.jsx)(Q,{onClick:function(){e(D(r))}}):Object(n.jsx)(K,{onClick:function(){e({type:w,payload:{id:r,name:m,crestUrl:u}})}})]})]}),Object(n.jsxs)("div",{className:"team",children:[Object(n.jsx)("h3",{className:"team__title",children:"Team:"}),Object(n.jsx)("div",{className:"team-block",children:_.map((function(e){return Object(s.createElement)($,Object(o.a)(Object(o.a)({},e),{},{key:e.id,clubName:m,clubIcon:u}))}))})]})]})},ae=[{path:"/profile",render:function(){return Object(n.jsx)(W,{})}},{path:"/tournaments",render:function(){return Object(n.jsx)(z,{})},exact:!0},{path:"/tournaments/:id",render:function(){return Object(n.jsx)(X,{})},exact:!0},{path:"/team/:id",render:function(){return Object(n.jsx)(ce,{})}},{path:"/",render:function(){return Object(n.jsx)("h1",{children:"Football app"})},exact:!0}],ne=function(){return Object(n.jsx)(j.c,{children:ae.map((function(e,t){return Object(n.jsx)(j.a,Object(o.a)({},e),t)}))})},se=c(41),le=(c(84),[{path:"/",name:"Home"},{path:"/profile",name:"Profile"},{path:"/tournaments",name:"Tournaments"}]),ie=function(e){var t=e.toggleMenu;return Object(n.jsx)("ul",{className:"nav-links",children:le.map((function(e,c){return Object(n.jsx)("li",{className:"nav-links__row",children:Object(n.jsx)(B.c,{className:"nav-links__item",to:e.path,onClick:t,exact:!0,children:Object(n.jsx)("p",{className:"nav-links__name",children:e.name})})},c)}))})},re=c.p+"static/media/moon.81f27c66.svg",oe=c.p+"static/media/sun.cbe1118c.svg",je=(c(85),function(){var e=Object(d.b)(),t="light"===Object(d.c)(f)?"dark":"light";return Object(n.jsxs)("div",{className:"theme-swithcer theme-swithcer__outer",onClick:function(){return e({type:A,payload:t})},children:[Object(n.jsx)("div",{className:"theme-swithcer__ball"}),Object(n.jsx)("object",{className:"theme-swithcer__sun",type:"image/svg+xml",data:oe,"aria-label":"sun-icon"}),Object(n.jsx)("object",{className:"theme-swithcer__moon",type:"image/svg+xml",data:re,"aria-label":"sun-moon"})]})}),de=(c(86),function(){var e=Object(s.useState)(!1),t=Object(se.a)(e,2),c=t[0],a=t[1],l=c?"open":"",i=function(){return a(!c)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("nav",{className:"navigation",children:[Object(n.jsx)("div",{className:"menu-icon ".concat(l),onClick:i}),Object(n.jsx)("div",{className:"menu-wrap ".concat(l),children:Object(n.jsx)(ie,{toggleMenu:i})}),Object(n.jsx)("div",{className:"overlay ".concat(l),onClick:i}),Object(n.jsx)(je,{})]})})}),be=(c(87),function(e){var t=e.children;return Object(n.jsx)("div",{className:"main-content",children:t})});c(88);var me=function(){var e=Object(d.c)(f);return Object(n.jsxs)("main",{className:"main-container ".concat(e),children:[Object(n.jsx)(de,{}),Object(n.jsx)(be,{children:Object(n.jsx)(ne,{})})]})},ue=c(11),Oe=c(37),he=c(25),fe=c(38),xe=c.n(fe),pe=c(39),_e=c(14),ve={listFavoriteTeams:{},listFavoritePlayers:{}},Ne=c(42),ge={listTournaments:[],tournamentInfo:null,teamInfo:null},ye={theme:"light"},Te=Object(ue.combineReducers)({tournament:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(o.a)(Object(o.a)({},e),{},{listTournaments:Object(Ne.a)(t.payload)});case y:return Object(o.a)(Object(o.a)({},e),{},{tournamentInfo:t.payload});case T:return Object(o.a)(Object(o.a)({},e),{},{teamInfo:t.payload});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var c=t.payload.id,a=Object(o.a)(Object(o.a)({},e.listFavoritePlayers),{},Object(_e.a)({},c,t.payload));return Object(o.a)(Object(o.a)({},e),{},{listFavoritePlayers:a});case w:var n=t.payload.id,s=Object(o.a)(Object(o.a)({},e.listFavoriteTeams),{},Object(_e.a)({},n,t.payload));return Object(o.a)(Object(o.a)({},e),{},{listFavoriteTeams:s});case k:var l=Object(o.a)({},e.listFavoritePlayers);return delete l[t.payload],Object(o.a)(Object(o.a)({},e),{},{listFavoritePlayers:l});case F:var i=Object(o.a)({},e.listFavoriteTeams);return delete i[t.payload],Object(o.a)(Object(o.a)({},e),{},{listFavoriteTeams:i});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{theme:t.payload});default:return e}}}),we={key:"root",whitelist:["profile","app"],storage:xe.a},Fe=Object(he.a)(we,Te),Ee=Object(ue.createStore)(Fe,Object(Oe.composeWithDevTools)(Object(ue.applyMiddleware)(pe.a))),ke=Object(he.b)(Ee),Ae=c(40),Ie=Object(n.jsx)(d.a,{store:Ee,children:Object(n.jsx)(Ae.a,{persistor:ke,children:Object(n.jsx)(B.a,{children:Object(n.jsx)(me,{})})})});r.a.render(Object(n.jsx)(l.a.StrictMode,{children:Ie}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.0bffd6cb.chunk.js.map