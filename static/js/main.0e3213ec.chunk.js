(this["webpackJsonpreact-alert-async-example"]=this["webpackJsonpreact-alert-async-example"]||[]).push([[0],{284:function(e,t,n){e.exports=n.p+"static/media/icon.b03f83cd.png"},285:function(e,t,n){"use strict";n.r(t);n(44);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),o=n(36),i=n(37),s=n(42),u=n(41),m=n(1),p=n.n(m),d=n(4),h=n(2),f={alertProvider:"_alert__alertProvider__2JDDD",alert:"_alert__alert__xDKrr","alert-inner":"_alert__alert-inner__3DSUu",animationIn:"_alert__animationIn__ER1aa",baseAnimation:"_alert__baseAnimation__1RF2u",animationOut:"_alert__animationOut__1L1pl",baseAnimationOut:"_alert__baseAnimationOut__6gnCy",animationHold:"_alert__animationHold__3JSRo",buttons:"_alert__buttons__1pedB",ok:"_alert__ok__1iZji",cancel:"_alert__cancel__tMObY",prompt:"_alert__prompt__3W6tz",input:"_alert__input__2myky"};var b=n(19),E=b.render,y=b.unmountComponentAtNode,v=function(e){var t=Object(a.useState)(f.animationIn),n=Object(h.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(h.a)(o,2),s=i[0],u=i[1],m=Object(a.useCallback)((function(){var t=document.getElementById(f.alertProvider);c(f.animationOut),setTimeout((function(){y(t)}),(e.duration||500)-50)}),[]),p=Object(a.useCallback)((function(t){return console.log(s),e.prompt?u((function(n){return t?e.onClick(n):e.onClick(t),n})):e.onClick(t),m()}),[s]),d=function(t){"Escape"===t.key&&p(!e.confirm&&!e.prompt),"Enter"===t.key&&p(!0)};return r.a.useEffect((function(){return window.addEventListener("keyup",d),setTimeout((function(){return c(f.animationHold)}),e.duration||500),function(){window.removeEventListener("keyup",d)}}),[]),r.a.createElement("div",{className:[f.alert,"alert"].join(" ")},r.a.createElement("div",{style:{animationDuration:"".concat((e.duration||500)/1e3,"s")},className:[f["alert-inner"],"alert-inner",l].join(" ")},"function"===typeof e.text?r.a.createElement(e.text,null):r.a.createElement(r.a.Fragment,null,e.title?r.a.createElement("h4",{className:"alert-title"},e.title):r.a.createElement("h4",{className:"alert-title"},r.a.createElement(r.a.Fragment,null,e.prompt&&"Please fill in the input",e.confirm&&"Please confirm",!e.prompt&&!e.confirm&&"Alert")),r.a.createElement("p",{className:"alert-text"},e.text),e.prompt&&r.a.createElement("div",{className:f.prompt},r.a.createElement("input",{value:s,name:"prompt",onChange:function(e){return u(e.target.value)},className:[f.input,"alert-input"].join(" "),type:"text"}))),r.a.createElement("div",{className:[f.buttons,"alert-buttons"].join(" ")},r.a.createElement("button",{className:[f.ok,"alert-buttons_ok"].join(" "),onClick:function(){return p(!0)}},"OK"),(e.confirm||e.prompt)&&r.a.createElement("button",{className:[f.cancel,"alert-buttons_cancel"].join(" "),onClick:function(){return p(!1)}},"Cancel"))))};function w(e,t){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(f.alertProvider),e.abrupt("return",new Promise((function(e,l){E(r.a.createElement(v,Object.assign({onClick:function(t){return t?e(t):l(t)},text:t,prompt:!1},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(f.alertProvider),e.abrupt("return",new Promise((function(e,l){E(r.a.createElement(v,Object.assign({onClick:function(t){return t?e(t):l(t)},text:t,confirm:!0},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(d.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(f.alertProvider),e.abrupt("return",new Promise((function(e,l){E(r.a.createElement(v,Object.assign({onClick:function(t){return t?e(t):l()},text:t,prompt:!0},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){return r.a.createElement("div",{id:f.alertProvider,className:"Alert-provider"})},C=(n(50),n(289)),N=n(288);function S(){var e=Object(a.useState)("Nothing's been alerted"),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(h.a)(c,2),i=o[0],s=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Alerts"),r.a.createElement("p",null,"Alerts are simple, you have to click yes on them"),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("Idk write something meaningful here",{duration:500});case 3:e.sent,l("Yay, so you read all that"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Oh, we're sorry about that :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Make an alert"),r.a.createElement("button",{onClick:function(){return s((function(e){return!e}))}},i?"Hide":"Show"," Code")),i&&r.a.createElement(C.a,{showLineNumbers:!0,style:N.a,language:"javascript"},"async () => {\n    try {\n      const x = await alert('Something')\n      \n      setState('Yay, so you read all that')\n    } catch (e) {\n      // won't actually get here\n    }\n    // now that was simple?\n  }"))}function A(){var e=Object(a.useState)("Nothing's been alerted"),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),m=Object(h.a)(c,2),f=m[0],b=m[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Functional/Class Alerts"),r.a.createElement("p",null,"If you pass in a react function or a class instead of text, the whole body of the component including the title will get replaced by the function/class. This allows you to write better alerts/confirms/prompts while getting all the benefits that React offer you. You can do this with the other alerts, not just the alert()."),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"I'm the title?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, id sunt nulla nam praesentium necessitatibus voluptate consequatur, nesciunt ut cupiditate distinctio natus dolorem debitis adipisci non deleniti dolores rem vitae."))}),{duration:500});case 3:e.sent,l("Yay, so you read all that"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Oh, we're sorry about that :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Make a Funcitonal Alert"),r.a.createElement("button",{onClick:Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"I'm the title?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, id sunt nulla nam praesentium necessitatibus voluptate consequatur, nesciunt ut cupiditate distinctio natus dolorem debitis adipisci non deleniti dolores rem vitae."))}}]),n}(r.a.Component),{duration:500});case 3:e.sent,l("Yay, so you read all that"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Oh, we're sorry about that :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Make a Class Alert"),r.a.createElement("button",{onClick:function(){return b((function(e){return!e}))}},f?"Hide":"Show"," Code")),f&&r.a.createElement(C.a,{showLineNumbers:!0,style:N.a,language:"javascript"},"<button\n  onClick={async () => {\n    try {\n      const x = await alert(\n        () => (\n          <div>\n            <h1>I'm the title?</h1>\n            <p>\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n              Esse, id sunt nulla nam praesentium necessitatibus\n              voluptate consequatur, nesciunt ut cupiditate distinctio\n              natus dolorem debitis adipisci non deleniti dolores rem\n              vitae.\n            </p>\n          </div>\n        ),\n        {\n          duration: 500\n        }\n      )\n\n      setState('Yay, so you read all that')\n    } catch (e) {\n      setState(\"Oh, we're sorry about that :(\")\n    }\n  }}\n>\n  Make a Funcitonal Alert\n</button>\n<button\n  onClick={async () => {\n    try {\n      const x = await alert(\n        class extends React.Component {\n          render() {\n            return (\n              <div>\n                <h1>I'm the title?</h1>\n                <p>\n                  Lorem ipsum dolor sit amet consectetur, adipisicing\n                  elit. Esse, id sunt nulla nam praesentium\n                  necessitatibus voluptate consequatur, nesciunt ut\n                  cupiditate distinctio natus dolorem debitis adipisci\n                  non deleniti dolores rem vitae.\n                </p>\n              </div>\n            )\n          }\n        },\n        {\n          duration: 500\n        }\n      )\n\n      setState('Yay, so you read all that')\n    } catch (e) {\n      setState(\"Oh, we're sorry about that :(\")\n    }\n  }}\n>\n  Make a Class Alert\n</button>"))}function I(){var e=Object(a.useState)("Nothing's been prompted"),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(h.a)(c,2),i=o[0],s=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Prompts"),r.a.createElement("p",null,"Prompts are like confirms, but you get what the user typed in the box. Or the user can deny them."),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("What's your name?");case 3:t=e.sent,l("Your name is: "+t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Oh dang, we didnt get your name :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Make a prompt"),r.a.createElement("button",{onClick:function(){return s((function(e){return!e}))}},i?"Hide":"Show"," Code")),i&&r.a.createElement(C.a,{showLineNumbers:!0,style:N.a,language:"javascript"},"async () => {\n    try {\n      const x = await prompt(\"What's your name?\")\n      setState('Your name is: ' + x)\n    } catch (e) {\n      setState('Oh dang, we didnt get your name :(')\n    }\n  }"))}function P(){var e=Object(a.useState)("Nothing's been confirmed, nor denied"),t=Object(h.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(h.a)(c,2),i=o[0],s=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Confirms"),r.a.createElement("p",null,"Confirms are pretty self explanatory. You can confirm or deny them."),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("Read some of the things we've written");case 3:l("Yay, so you read all that"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l("Oh, we're sorry about that :(");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))},"Make a confirm"),r.a.createElement("button",{onClick:function(){return s((function(e){return!e}))}},i?"Hide":"Show"," Code")),i&&r.a.createElement(C.a,{showLineNumbers:!0,style:N.a,language:"javascript"},"async () => {\n    try {\n      await confirm(\"Read some of the things we've written\")\n      setState('Yay, so you read all that')\n    } catch (e) {\n      setState(\"Oh, we're sorry about that :(\")\n    }\n  }"))}function Y(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"first"},r.a.createElement("p",null,"Developed and Maintained by Alek Angelov")),r.a.createElement("ul",{className:"second"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://npmjs.com/package/react-alert-async"},"NPM")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/alekangelov/react-alert-async/"},"GITHUB")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://alekangelov.com"},"WEBSITE"))))}function L(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Styling"),r.a.createElement("p",null,"It's pretty easy to style the components, they follow simple naming structures and it's encouraged to write your own styles."),r.a.createElement(C.a,{language:"css",style:N.a},".alert {\n  /* this is the background of the alert */\n  &-inner {\n    /* body wrapper of the alert */\n  }\n  &-title {\n    /* title of the alert */\n  }\n  &-text {\n    /* text describer of the alert */\n  }\n  &-input {\n    /* the prompt input field */\n  }\n  &-buttons {\n    /* button wrapper of the alert */\n    &_ok {\n      /* ok button of the alert */\n    }\n    &_cancel {\n      /* cancel button of the alert */\n    }\n  }\n}"))}function M(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Installation and Usage"),r.a.createElement("p",null,"Honestly, it's as simple as one two three."),r.a.createElement(C.a,{language:"bash",style:N.a},"yarn add react-alert-async"),r.a.createElement("p",null,"And then in your little index file you just add the Provider"),r.a.createElement(C.a,{language:"javascript",style:N.a},"import AlertProvider, {alert, confirm, prompt} from 'react-alert-async';\nimport 'react-alert-async/dist/index.css'\n\nfunction App() {\n  return (\n    <>\n      <AlertProvider />\n      <button onClick={()=>alert(\"Yay, it's an alert\", {duration: 2000, title: \"Custom Title\"})} />\n    </>\n  )\n}"))}var H=function(){var e=Object(a.useState)("Nothing's been prompted"),t=Object(h.a)(e,2);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,r.a.createElement("span",{role:"icon"},r.a.createElement("img",{src:n(284)}))," ","React Alert Async"),r.a.createElement("h2",null,"A simple way of managing your alerts, prompts and confirms without defaulting to the browsers ugly implementations"),r.a.createElement("div",{className:"sections"},r.a.createElement(M,null),r.a.createElement(S,null),r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement(I,null),r.a.createElement(L,null)),r.a.createElement(Y,null)))};c.a.render(r.a.createElement(H,null),document.getElementById("root"))},43:function(e,t,n){e.exports=n(285)},44:function(e,t,n){},50:function(e,t,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.0e3213ec.chunk.js.map