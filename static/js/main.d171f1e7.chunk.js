(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),r=n.n(l);n(9);var s={question:"styles-module_question__21zXn",button__color:"styles-module_button__color__2EjRN",button:"styles-module_button__2hTXI"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_question__21zXn {\n  margin: 0 auto;\n  position: relative;\n}\n.styles-module_question__21zXn label {\n  font-size: 2.5em;\n  transition: all 200ms linear;\n}\n.styles-module_question__21zXn input + label,\n.styles-module_question__21zXn select + label {\n  top: 10px;\n  left: 0;\n  position: absolute;\n}\n.styles-module_question__21zXn input,\n.styles-module_question__21zXn select {\n  width: 100%;\n  background: none;\n  font-size: 2em;\n  padding: 0.5em 0;\n  border: none;\n  border-bottom: 5px solid #dd4d3a;\n  color: #f5a623;\n  outline: none;\n}\n.styles-module_question__21zXn input::placeholder,\n.styles-module_question__21zXn select::placeholder {\n  color: #dd4d3a;\n  opacity: 0;\n  transition-delay: 200ms;\n  transition: all 200ms linear;\n}\n.styles-module_question__21zXn input:focus + label,\n.styles-module_question__21zXn select:focus + label,\n.styles-module_question__21zXn input:valid + label,\n.styles-module_question__21zXn select:valid + label {\n  top: -15px;\n  font-size: 1.25em;\n}\n.styles-module_question__21zXn input:focus::placeholder,\n.styles-module_question__21zXn select:focus::placeholder {\n  opacity: 0.7;\n}\n.styles-module_question__21zXn select {\n  margin: 0.75em 0;\n}\n.styles-module_button__color__2EjRN {\n  width: 2em;\n  height: 2em;\n}\n\n.styles-module_button__2hTXI {\n  border-radius: 0.4em;\n  background-color: #800;\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.5em;\n  padding: 0.5em 0.8em;\n  transition: all 200ms ease-in;\n  margin: 0 0.2em;\n  display: inline-block;\n}\n");var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,a=!1,l=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(u){a=!0,l=u}finally{try{!o&&s.return&&s.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){var t=e.questions,n=Object(o.useState)(0),l=i(n,2),r=l[0],c=l[1],m=Object(o.useState)(""),d=i(m,2),p=d[0],f=d[1],y=Object(o.useState)({}),_=i(y,2),h=_[0],b=_[1],g=function(e){v(e)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";q(e),E(),x()},q=function(){var e,n,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",l=t[r].name;b(u({},h,(o=a||p,(n=l)in(e={})?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e)))},E=function(){for(var e in t[r].answers)if(p===e)return c(t[r].answers[e].goTo);return c(t[r].answers.default.goTo)},x=function(){f("")};return a.a.createElement("form",{className:s.question,onSubmit:function(e){e&&e.preventDefault(),v()}},("text"===t[r].type||"url"===t[r].type)&&a.a.createElement("div",null,a.a.createElement("input",{id:"question",type:t[r].type,placeholder:"(Es. "+t[r].suggestion+")",value:p,onChange:function(e){f(e.target.value)},autoFocus:!0,required:!0}),a.a.createElement("label",{htmlFor:"question"},t[r].text)),"select"===t[r].type&&a.a.createElement("div",null,a.a.createElement("select",{id:"question",onChange:function(e){v(e.target.value)},autoFocus:!0,required:!0},a.a.createElement("option",{value:""}),t[r].options.map(function(e){return a.a.createElement("option",null,e)})),a.a.createElement("label",{htmlFor:"question"},t[r].text)),"options"===t[r].type&&a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"question"},t[r].text),a.a.createElement("div",{id:"questions",className:s.mt2},t[r].options.map(function(e){return a.a.createElement("a",{href:"#",onClick:function(){return g(e)},className:s.button},e)}))),"color"===t[r].type&&a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"question"},t[r].text),a.a.createElement("div",{id:"questions",className:s.mt2},t[r].options.map(function(e){return a.a.createElement("a",{href:"#",style:{backgroundColor:e},onClick:function(){return g(e)},className:s.button+" "+s.button__color})}))),"images"===t[r].type&&a.a.createElement("p",null,"Images are not supported so far!"))},m=function(){return a.a.createElement("div",{style:{margin:"0 auto",maxWidth:"800px",width:"100%",marginTop:"200px"}},a.a.createElement(c,{questions:[{name:"name",text:"Who are you?",suggestion:"I am your worst nightmare",type:"text",answers:{default:{goTo:1}}},{name:"character",text:"What's your favorite character?",type:"select",options:["Mickey Mouse","Donald Duck","Bugs Bunny","Duffy Duck"],answers:{"Mickey Mouse":{goTo:3},default:{goTo:2}}},{name:"experience",text:"How many years of experience do you have?",type:"options",options:["1","< 5","< 10","> 10"],answers:{default:{goTo:3}}},{name:"color",text:"What is your favorite color?",type:"color",options:["red","#f90","black","#800"],answers:{default:{goTo:4}}},{name:"facebook",text:"Please, write your facebook page url",suggestion:"https://facebook.com/example",type:"url",answers:{default:{goTo:5}}},{name:"photos",text:"We are almost there... Please, update your photos",type:"images",answers:{default:{goTo:6}}}]}))};r.a.render(a.a.createElement(m,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.d171f1e7.chunk.js.map