(this["webpackJsonpgeo-jutsu"]=this["webpackJsonpgeo-jutsu"]||[]).push([[0],{10:function(e,t,n){e.exports={clicked:"button_clicked__R6E18",myButton:"button_myButton__2Rz3z",wiggle:"button_wiggle__3rqZd"}},14:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(7),l=n(5),u=n(2),s=n(3),d=n(4),b=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,[{key:"draw",value:function(e,t,n){if(0!==e.length)for(var a=0;a<e.length;a++){var r=e[a],o=new u.b(2,10),c=new u.g({color:n}),i=new u.f(o,c);i.position.setX(r.x),i.position.setY(r.y),t.add(i)}}}]),e}(),m=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,[{key:"draw",value:function(e,t){if(0===e.length)return[];for(var n=0;n<e.length;n++){var a=e[n],r=new u.e({color:255}),o=[];o.push(a.start.toVector2()),o.push(a.end.toVector2());var c=(new u.a).setFromPoints(o),i=new u.d(c,r);t.add(i)}}}]),e}(),v=function(){function e(){Object(s.a)(this,e),this.pointDrawer=new b,this.segmentDrawer=new m}return Object(d.a)(e,[{key:"draw",value:function(e,t,n,a,r){a&&(t=[].concat(Object(i.a)(t),[a])),r&&(n=[].concat(Object(i.a)(n),[r])),e.remove.apply(e,e.children),this.pointDrawer.draw(t,e,new u.c("green")),this.segmentDrawer.draw(n,e)}}]),e}(),f=function(){function e(t,n){Object(s.a)(this,e),this.x=void 0,this.y=void 0,this.id=void 0,this.x=t,this.y=n,this.id=e.IDs++}return Object(d.a)(e,[{key:"toVector2",value:function(){return new u.j(this.x,this.y)}}]),e}();f.IDs=0;var h=function(){function e(){Object(s.a)(this,e),this.canvas=void 0,this.canvas=document.getElementById("element that does not exist")}return Object(d.a)(e,[{key:"getPoint",value:function(e,t){var n=this.canvas.getBoundingClientRect(),a=this.canvas.width/n.width,r=this.canvas.height/n.height,o=new f((e-n.left)*a,(t-n.top)*r);return new f(o.x-this.canvas.width/2,this.canvas.height/2-o.y)}},{key:"onMouseDown",value:function(e,t){return 0!==t.button?[null,null,null]:"Point"===e?[this.getPoint(t.clientX,t.clientY),null,null]:[null,null,null]}},{key:"onMouseMove",value:function(e,t){return"Nothing"===e?[null,null,null]:"Point"===e?[this.getPoint(t.clientX,t.clientY),null,null]:[null,null,null]}}]),e}(),g={drawingMode:"Nothing",setCurrentDrawingMode:function(){}},w=r.a.createContext(g);var k=function(){var e=Object(a.useRef)(document.getElementById("element that does not exist")),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)([]),d=Object(l.a)(s,2),b=d[0],m=d[1],f=Object(a.useState)(new u.i),g=Object(l.a)(f,1)[0],k=Object(a.useMemo)((function(){return new v}),[]),j=Object(a.useMemo)((function(){return new h}),[]),C=r.a.useContext(w).drawingMode,E=Object(a.useState)(null),O=Object(l.a)(E,2),y=O[0],p=O[1],M=Object(a.useState)(null),N=Object(l.a)(M,2),x=N[0],D=N[1];return Object(a.useEffect)((function(){var t=new u.k({canvas:e.current});t.setClearColor(new u.c("white"));var n=new u.h(-e.current.width/2,e.current.width/2,e.current.height/2,e.current.height/-2,.01,2e3);n.position.z=50,j.canvas=e.current;!function e(){requestAnimationFrame(e),t.render(g,n)}()}),[]),Object(a.useEffect)((function(){k.draw(g,o,b,y,x)}),[o,b,y,x]),r.a.createElement("canvas",{onMouseDown:function(e){var t=j.onMouseDown(C,e);if(3!==t.length)throw Error("onMouseDown must return 3 items, [Point, Segment, Polygon]");var n=t[0],a=t[1];n&&c([].concat(Object(i.a)(o),[n])),a&&m([].concat(Object(i.a)(b),[a]))},onMouseMove:function(e){var t=j.onMouseMove(C,e);if(3!==t.length)throw Error("onMouseMove must return 3 items, [Point, Segment, Polygon]");var n=t[0],a=t[1];n&&p(n),a&&D(a)},onMouseLeave:function(){p(null),D(null)},ref:e,width:"500",height:"500",style:{border:"1px solid black"}})},j=n(6),C=n(1),E=n(10),O=n.n(E),y=n(13),p=n.n(y);var M=function(e){var t,n={backgroundColor:e.originalColor},a=p()((t={},Object(C.a)(t,O.a.myButton,!0),Object(C.a)(t,O.a.clicked,e.isClicked),t));return e.isClicked&&(n.backgroundColor=e.clickedColor),r.a.createElement("button",{style:n,onClick:function(){e.isClicked||e.onClick(e.value)},className:a},e.value)},N=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){c(e.buttons)}),[e.buttons]);var i=Object(a.useCallback)((function(e){var t=o.find((function(t){return t.value===e}));if(!t)throw Error("value ".concat(e," must be found!"));if(t.isClicked)throw Error("this function should not be called if the button is already clicked!");var n=o.map((function(t){return t.value===e?Object(j.a)({},t,{isClicked:!0}):Object(j.a)({},t,{isClicked:!1})}));c(n)}),[o]);return r.a.createElement("div",null,o.map((function(e){var t=Object(j.a)({},e,{onClick:function(t){i(t),e.onClick(t)}});return r.a.createElement(M,Object.assign({key:t.value},t))})))};var x=function(e){var t=r.a.useContext(w),n=t.drawingMode,o=t.setCurrentDrawingMode,c=Object(a.useCallback)((function(e){o(e)}),[o]),i=e.buttons.map((function(e){return e.value===n?Object(j.a)({},e,{onClick:c,isClicked:!0}):Object(j.a)({},e,{onClick:c})}));return r.a.createElement("div",{className:"btn-group-vertical"},r.a.createElement(N,{buttons:i}),r.a.createElement("span",null,n))},D=(n(19),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"<<"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"<"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Start"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},">"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},">>")),r.a.createElement("br",null),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"75%"}})))}),P=function(e){var t=function(e){console.log("algorithm: ".concat(e))},n=e.names.map((function(e){return{value:e,clickedColor:"darkblue",originalColor:"lightblue",isClicked:!1,onClick:t}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Algorithms"),r.a.createElement(N,{buttons:n}))},S=[{isClicked:!1,value:"Nothing",originalColor:"lightgrey",clickedColor:"grey"},{isClicked:!1,value:"Point",originalColor:"#fe2636",clickedColor:"darkred"},{isClicked:!1,value:"Line",originalColor:"#f5dd33",clickedColor:"#f9a905"},{isClicked:!1,value:"Polygon",originalColor:"#90eb35",clickedColor:"green"}],_=["algo 1","algo 2"];var B=function(){var e=function(){var e=r.a.useState(g.drawingMode),t=Object(l.a)(e,2),n=t[0],a=t[1];return{drawingMode:n,setCurrentDrawingMode:r.a.useCallback((function(e){a(e)}),[])}}();return r.a.createElement(w.Provider,{value:e},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(P,{names:_})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(k,null),r.a.createElement(D,null)),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(x,{buttons:S})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cc45ea6a.chunk.js.map