(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),h=c(11),m=c(4),o=(c(28),c(0)),d=function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=c===t.team1?t.team2:t.team1,n="/team/"+a,s=c===t.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsxs)("h1",{children:[" ",Object(o.jsx)(m.b,{to:n,children:a})]}),Object(o.jsx)("h2",{className:"match-date",children:t.date}),Object(o.jsxs)("h3",{className:"match-venue",children:["at ",t.venue]}),Object(o.jsxs)("h3",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]}),Object(o.jsxs)("div",{className:"additional-detail",children:[Object(o.jsx)("h3",{children:"First Innings"}),Object(o.jsx)("p",{children:t.team1}),Object(o.jsx)("h3",{children:"Second Innings"}),Object(o.jsx)("p",{children:t.team2}),Object(o.jsx)("h3",{children:"Man of the match"}),Object(o.jsx)("p",{children:t.playerOfMatch}),Object(o.jsx)("h3",{children:"Umpires"}),Object(o.jsxs)("p",{children:[t.umpire1,", ",t.umpire2]})]})]})},u=(c(35),function(e){var t=e.match,c=e.teamName,a=c===t.team1?t.team2:t.team1,n="/team/"+a,s=c===t.matchWinner;return Object(o.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(o.jsx)("span",{className:"vs",children:"vs"}),Object(o.jsxs)("h1",{children:[" ",Object(o.jsx)(m.b,{to:n,children:a})]}),Object(o.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}),b=c(2),O=c(20),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c.teamName?Object(o.jsxs)("div",{className:"TeamPage",children:[Object(o.jsx)("div",{className:"team-name-section",children:Object(o.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(o.jsxs)("div",{className:"win-loss-section",children:[Object(o.jsx)("h2",{children:"Wins /Losses"}),Object(o.jsx)(O.PieChart,{data:[{title:"Wins",value:c.totalWins,color:" #4da375"},{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"}]})]}),Object(o.jsxs)("div",{className:"match-detail-section",children:[Object(o.jsx)("h2",{children:"Latest Matches"}),Object(o.jsx)(d,{match:c.matches[0],teamName:c.teamName})]}),c.matches.slice(1).map((function(e){return Object(o.jsx)(u,{match:e,teamName:c.teamName},e.id)})),Object(o.jsx)("div",{className:"more-link",children:Object(o.jsx)(m.b,{to:"/team/".concat(s,"/matches?year=").concat("2020"),children:"More >"})})]}):Object(o.jsx)("h1",{children:"Team Not Found"})}),f=(c(37),c(38),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(o.jsx)("div",{className:"YearSelector",children:Object(o.jsx)("ol",{children:c.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(m.b,{to:"/team/".concat(t,"/matches?year=").concat(e),children:e})},e)}))})})}),p=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=new URLSearchParams(window.location.search).get("year"),r=Object(b.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(r,"/matches?year=").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,s]),Object(o.jsxs)("div",{className:"MatchPage",children:[Object(o.jsxs)("div",{className:"year-selector",children:[Object(o.jsx)("h3",{children:"Select Year"}),Object(o.jsx)(f,{teamName:r})]}),Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsx)(d,{match:e,teamName:r},e.id)}))})]})},v=(c(39),c(40),function(e){var t=e.teamName;return Object(o.jsx)("div",{className:"TeamTile",children:Object(o.jsx)(m.b,{to:"/team/".concat(t),children:Object(o.jsx)("h1",{children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{className:"HomePage",children:[Object(o.jsx)("div",{className:"header-section",children:Object(o.jsx)("h1",{className:"app-name",children:"IPL DASHBOARD"})}),Object(o.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(o.jsx)(v,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m.a,{children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/team/:teamName/matches",children:Object(o.jsx)(p,{})}),Object(o.jsx)(b.a,{path:"/team/:teamName",children:Object(o.jsx)(x,{})}),Object(o.jsx)(b.a,{path:"/",children:Object(o.jsx)(N,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.b6531923.chunk.js.map