(this["webpackJsonpemployee-explorer"]=this["webpackJsonpemployee-explorer"]||[]).push([[0],{4949:function(e,n,t){e.exports=t(4982)},4954:function(e,n,t){},4955:function(e,n,t){},4956:function(e,n,t){},4960:function(e,n,t){},4962:function(e,n,t){},4982:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),c=t.n(o),i=(t(4954),t(4955),t(53)),s=(t(4956),t(4997)),u=t(4999),l=t(4998),p=t(25);function h(e){var n=e.history,t=Object(a.useState)(""),o=Object(i.a)(t,2),c=o[0],h=o[1];function m(){n.push("/overview/".concat(c))}return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"title"},r.a.createElement(s.a,{variant:"h2",align:"center"},"Employee Explorer")),r.a.createElement("div",{className:"search-area"},r.a.createElement("div",{className:"search-bar"},r.a.createElement(u.a,{placeholder:"Enter employee name ",disableUnderline:!0,value:c,onChange:function(e){h(e.target.value)},onKeyDown:function(e){13===e.keyCode&&m()},className:"search-input",fullWidth:!0}),r.a.createElement(l.a,{onClick:m},r.a.createElement(p.b,{className:"search-icon"})))))}t(4960),t(16),t(27);var m=t(18),d=t.n(m),f=t(47),v=t(23),b=t(48),E=t(21),w=t(49),y=t(50),g=t(54),x=(t(4962),t(51));function k(e){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(d.a.mark((function e(n){var t,a,r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},r=[],(a=[]).push(n),r.push(n);case 5:if(!(a.length>0)){e.next=14;break}return o=a.pop(),e.next=9,O(o);case 9:t[o]=e.sent,(c=t[o].directSubordinates).length>0&&c.filter((function(e){return-1===r.indexOf(e)})).forEach((function(e){r.push(e),a.push(e)})),e.next=5;break;case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return(j=Object(v.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("http://api.additivasia.io/api/v1/assignment/employees/".concat(n));case 2:return t=e.sent,e.abrupt("return",{name:n,position:t.data[0],directSubordinates:t.data[1]?t.data[1]["direct-subordinates"]:[]});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.Component;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(h,null)}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4949,1,2]]]);
//# sourceMappingURL=main.e246d186.chunk.js.map