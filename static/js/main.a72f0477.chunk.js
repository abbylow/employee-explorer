(this["webpackJsonpemployee-explorer"]=this["webpackJsonpemployee-explorer"]||[]).push([[0],{4949:function(e,a,t){e.exports=t(4982)},4954:function(e,a,t){},4955:function(e,a,t){},4956:function(e,a,t){},4960:function(e,a,t){},4962:function(e,a,t){},4982:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),o=t.n(c),i=(t(4954),t(26)),s=t(16),l=(t(4955),t(53)),u=(t(4956),t(4997)),m=t(4999),p=t(4998),v=t(25);function d(e){var a=e.history,t=Object(n.useState)(""),c=Object(l.a)(t,2),o=c[0],i=c[1];function s(){a.push("/overview/".concat(o))}return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"title"},r.a.createElement(u.a,{variant:"h2",align:"center"},"Employee Explorer")),r.a.createElement("div",{className:"search-area"},r.a.createElement("div",{className:"search-bar"},r.a.createElement(m.a,{placeholder:"Enter employee name ",disableUnderline:!0,value:o,onChange:function(e){i(e.target.value)},onKeyDown:function(e){13===e.keyCode&&s()},className:"search-input",fullWidth:!0}),r.a.createElement(p.a,{onClick:s},r.a.createElement(v.b,{className:"search-icon"})))))}t(4960);var h=t(18),f=t.n(h),E=t(47),b=t(23),y=t(48),w=t(21),N=t(49),g=t(50),O=t(54),j=(t(4962),t(51));function k(e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(f.a.mark((function e(a){var t,n,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},r=[],(n=[]).push(a),r.push(a);case 5:if(!(n.length>0)){e.next=14;break}return c=n.pop(),e.next=9,S(c);case 9:t[c]=e.sent,(o=t[c].directSubordinates).length>0&&o.filter((function(e){return-1===r.indexOf(e)})).forEach((function(e){r.push(e),n.push(e)})),e.next=5;break;case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("http://api.additivasia.io/api/v1/assignment/employees/".concat(a));case 2:return t=e.sent,e.abrupt("return",{name:a,position:t.data[0],directSubordinates:t.data[1]?t.data[1]["direct-subordinates"]:[]});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={self:{},subordinates:{}},t.loadEmployee=Object(b.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.props.name);case 2:a=e.sent,n=Object(E.a)({},a[t.props.name]),delete a[t.props.name],t.setState({self:n,subordinates:a});case 6:case"end":return e.stop()}}),e)}))),t}return Object(O.a)(a,e),Object(w.a)(a,[{key:"componentDidMount",value:function(){this.loadEmployee()}},{key:"render",value:function(){var e=this.props.name,a=this.state,t=a.self,n=a.subordinates;return r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"self-position"},r.a.createElement(u.a,{variant:"h5"},e),r.a.createElement(u.a,{variant:"subtitle1"},t.position?t.position:"No position in this company")),r.a.createElement("div",{className:"subtitle"},r.a.createElement(u.a,{variant:"h6"},Object.values(n).length>0?"Subordinates of employee ".concat(e,": "):"No subordinate")),Object.values(n).map((function(e){return r.a.createElement("div",{className:"sub-name",key:e.name},r.a.createElement(u.a,{variant:"h6"},e.name),r.a.createElement(u.a,{variant:"overline"},e.position))})))}}]),a}(n.Component);var B=function(){var e=Object(s.f)().slug;return r.a.createElement("div",{className:"overview"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement(i.b,{to:"/"},r.a.createElement(v.a,{fontSize:"large"}))),r.a.createElement("div",{className:"overview-title"},r.a.createElement(u.a,{variant:"h2"},"Employee Overview ")),r.a.createElement("div",{className:"overview-body"},r.a.createElement(W,{name:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:d}),r.a.createElement(s.a,{path:"/overview/:slug"},r.a.createElement(B,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4949,1,2]]]);
//# sourceMappingURL=main.a72f0477.chunk.js.map