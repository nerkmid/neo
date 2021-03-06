// mirror of https://raw.githubusercontent.com/hectorvazc/jsfun/master/jsfun.min.js
function find_selector(e,t) {var n=void 0===t?document.querySelectorAll(e):t.querySelectorAll(e);return console.assert(n.length,["find_selector:",e,t,"is undefined"].join(" ")),0===n.length?void 0:1===n.length?n[0]:n}
function isNode(e){return e instanceof Node}
function isNodeList(e){return e instanceof NodeList}
function fn(e){void 0!==e&&function(){e()}(this)}
function foreach(e,t){return void 0!==e&&void $array(e).forEach(function(e,n,i){t(e,n,i)})}
function $array(e){if(void 0===e)return[];var t=[],n=/^\[object (string)\]$/gi.test({}.toString.call(e))||/^\[object (htmlselectelement)\]$/gi.test({}.toString.call(e));return void 0===e.length||n?t.push(e):t=Array.from(e),t}
function $detach(e){var t=e.parentNode;if(t)return t.removeChild(e),e}
function bind_event(e,t,n,i){var i=i||"events",o="",s=[],r=$data(e,i);if(void 0!==r&&(o=e.dataset[i]),empty(o))s=[];else var s=getJSON(o);s.length>0&&s.indexOf(t)!==-1||(s.push(t),e.dataset[i]=setJSON(s),e.addEventListener(t,n))}
function empty(e){return 0===e.length||!e.trim()}
function $data(e,t){return e.dataset[t]}
function newElement(e){return document.createElement(e)}
function key_code(e){return parseInt(e.keyCode||e.which)}
function setJSON(e){return JSON.stringify(e)}function getJSON(e){return JSON.parse(e)}
function parent(e,t){if(void 0===t)return e.parentNode;for(var n=0;n<Number(t);n++)e=e.parentNode;return e}
function ajax(e,t,n){return new Promise(function(i,o){var s;s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),s.open(e,t,!0),s.onload=i,s.onerror=o,void 0!==n?s.send(n):s.send()})}
function getObjectSession(e,t){var n=sessionStorage.getItem(e);return null===n?(void 0!==t&&(console.log("Saving default value"),setObjectSession(e,t)),t):getJSON(n)}
function removeObjectSession(e){void 0!==getObjectSession(e)&&(sessionStorage.removeItem(e),void 0===getObjectSession(e)&&console.log("object removed"))}
function setObjectSession(e,t){sessionStorage.setItem(e,setJSON(t))}
function getObject(e,t){var n=localStorage.getItem(e);return null===n?(void 0!==t&&(console.log("Saving default value"),setObject(e,t)),t):getJSON(n)}
function removeObject(e){void 0!==getObject(e)&&(localStorage.removeItem(e),void 0===getObject(e)&&console.log("object removed"))}
function setObject(e,t){localStorage.setItem(e,setJSON(t))}
var debFlag=!0,log=function(e,t){(void 0===t||t)&&debFlag&&console.log(e)},
    js=function e(t){return this instanceof e?(void 0!==t&&(isNode(t)||(t=find_selector(t))),this.element=t,this.context=void 0,this):new e(t)};
    js.prototype.get=function(){return this.context=void 0,this.element},
    js.prototype.getNode=function(e){var t=find_selector(e,this.context);return this.context=void 0,t},
    js.prototype.find=function(e){return this.element=find_selector(e,this.context),this.context=void 0,this},
    js.prototype.here=function(e){if(isNode(e))this.context=e;else{var t=find_selector(e);void 0===t?this.context=void 0:isNodeList(t)?this.context=t[0]:this.context=t}return this},
    js.prototype.html=function(e){return void 0===e?this.element.innerHTML:(this.element.innerHTML=e,this)},
    js.prototype.empty=function(){return this.element.innerHTML="",this},
    js.prototype.append=function(e){return this.element.innerHTML=[this.element.innerHTML,e].join(" "),this},
    js.prototype.exist=function(e){return void 0!==this.element},
    js.prototype.val=function(e){if(void 0!==this.element)return void 0===e?this.element.value:(this.element.value=e,this)},
    js.prototype.clean=function(){this.element=void 0,this.context=void 0},
    js.prototype.first=function(){return this.element=$array(this.element)[0],this},
    js.prototype.setAttribute=function(e){return"object"==typeof e&&(void 0!==this.element?foreach(this.element,function(t){for(var n in e)t.setAttribute(n,e[n])}):log("this.element is undefined. setAttribute call."),this)},
    js.prototype.removeAttribute=function(e){return void 0!==this.element?foreach(this.element,function(t){foreach(e,function(e){t.removeAttribute(e)})}):log("this.element is undefined. removeAttribute call."),this},
    js.prototype.addStyle=function(e){return"object"==typeof e&&(void 0!==this.element?foreach(this.element,function(t){for(var n in e)t.style.setProperty(n,e[n])}):log("this.element is undefined. addStyle call."),this)},
    js.prototype.removeStyle=function(e){return void 0!==this.element?foreach(this.element,function(t){foreach(e,function(e){t.style.removeProperty(e)})}):log("this.element is undefined. removeStyle call."),this},
    js.prototype.addClass=function(e){return void 0!==this.element?foreach(this.element,function(t){foreach(e,function(e){t.classList.add(e)})}):log("this.element is undefined. addClass call."),this},
    js.prototype.removeClass=function(e){return void 0!==this.element?foreach(this.element,function(t){foreach(e,function(e){t.classList.contains(e)&&t.classList.remove(e)})}):log("this.element is undefined. removeClass call."),this},
    js.prototype.hide=function(){return void 0!==this.element?foreach(this.element,function(e){e.style.setProperty("display","none")}):log("this.element is undefined. hide call."),this},
    js.prototype.show=function(){return void 0!==this.element?foreach(this.element,function(e){e.style.removeProperty("display")}):log("this.element is undefined. show call."),this},
    js.prototype.resize=function(){if(void 0!==this.element)return this.element.style.height="1px",this.element.style.height=this.element.scrollHeight+"px",this},
    js.prototype.text=function(){return void 0===this.element?"":this.element.innerText||this.element.textContent},
    js.prototype.insertFirst=function(e){if(void 0!==this.element)return this.element.insertAdjacentElement("afterbegin",e),this},
    js.prototype.insertLast=function(e){if(void 0!==this.element)return this.element.insertAdjacentElement("beforeend",e),this},
    js.prototype.insertBefore=function(e){if(void 0!==this.element)return this.element.insertAdjacentElement("beforebegin",e),this},
    js.prototype.insertAfter=function(e){if(void 0!==this.element)return this.element.insertAdjacentElement("afterend",e),this},
    js.prototype.detach=function(){if(void 0!==this.element){var e=[];return foreach(this.element,function(t){e.push($detach(t))}),e}},
    js.prototype.visible=function(){if(void 0!==this.element)return"none"!==this.element.style.display},
    js.prototype.hidden=function(){if(void 0!==this.element)return!this.visible()},
    js.prototype.each=function(e){void 0!==this.element?(foreach(this.element,e),this.clean()):log("this.element is undefined. show call.")},
    js.prototype.event=function(e,t,n){return void 0===this.element?(log("this.element is undefined. event call."),this):(foreach(this.element,function(i){foreach(e,function(e){bind_event(i,e,t,n)})}),void this.clean())};
