(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6lBr":function(e,t,n){},"7jLT":function(e,t,n){"use strict";var r=n("dI71"),o=n("dwco"),a=n.n(o),i=n("q1tI"),l=n.n(i),c=function(e){return e.children},s=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){a.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=this.props.onClick,n=void 0===t?function(){}:t,r=0,o=!0,a=this.props,i=a.type,l=a.element,c=a.offset,s=a.timeout;if(i&&l)switch(i){case"class":o=!!(r=document.getElementsByClassName(l)[0]);break;case"id":o=!!(r=document.getElementById(l))}o?this.scrollTo(r,c,s):console.log("Element not found: "+l),n(e)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var r=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:r+t,left:0,behavior:"smooth"})}),n):window.scroll({top:r+t,left:0,behavior:"smooth"})},n.render=function(){return l.a.createElement(c,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component);t.a=s},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return a.createElement(r,this.props)},o}(o.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(p,"canUseDOM",c),p}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var s=a[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(o=n?n.call(r,u,f,s):void 0)||void 0===o&&u!==f)return!1}return!0}},Rnav:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("7jLT"),i=n("Wbzz");n("nWR2");t.a=function(e){var t=e.logoOnly,n=void 0!==t&&t,l=Object(r.useState)(!1),c=l[0],s=l[1],u=Object(r.useState)(""),f=u[0],p=u[1];Object(r.useEffect)((function(){var e=function(){window.pageYOffset>300||n?"navbar-shrink"!==f&&p("navbar-shrink"):"navbar-shrink"===f&&p("")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[f]);var T=function(e){s(e)};return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+f,id:"mainNav"},o.a.createElement("div",{className:"container"},o.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"Oscar Throedsson"),!n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(e){return T(!c)},className:"navbar-toggler navbar-toggler-right "+(c?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":c,"aria-label":"Toggle navigation"},o.a.createElement("i",{className:"fas fa-bars"})),o.a.createElement("div",{className:"collapse navbar-collapse "+(c?"show":""),id:"navbarResponsive"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(a.a,{onClick:function(e){return T(!c)},type:"id",element:"vision"},o.a.createElement("a",{className:"nav-link",href:"/#vision"},"Vision"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(a.a,{onClick:function(e){return T(!c)},type:"id",element:"om"},o.a.createElement("a",{className:"nav-link",href:"/#om"},"Om mig"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(a.a,{onClick:function(e){return T(!c)},type:"id",element:"tjanster"},o.a.createElement("a",{className:"nav-link",href:"/#tjanster"},"Tjänster"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(a.a,{onClick:function(e){return T(!c)},type:"id",element:"anmalan"},o.a.createElement("a",{className:"nav-link",href:"/#anmalan"},"Anmälan"))))))))}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),s=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,h,v=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),A=(E=v,h=m=function(e){function t(){return T(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=l,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(E,o)},o(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(a.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},Zttt:function(e,t,n){"use strict";var r,o=n("dI71"),a=n("q1tI"),i=n.n(a),l=n("9ONQ"),c=l.default,s=a.createContext(new c),u=s.Provider,f=(s.Consumer,s),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),T=function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new l.default,n}return p(t,e),t.prototype.render=function(){return a.createElement(u,{value:this.cookies},this.props.children)},t}(a.Component),d=n("TJpk"),E=n.n(d),m=n("Wbzz");var h=function(){var e=function(e){var t=Object(a.useContext)(f);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),r=Object(a.useState)(n),o=r[0],i=r[1],l=Object(a.useRef)(o);return Object(a.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,o=e;r<o.length;r++){var a=o[r];if(t[a]!==n[a])return!0}return!1})(e||null,n,l.current)&&i(n),l.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[o,Object(a.useMemo)((function(){return t.set.bind(t)}),[t]),Object(a.useMemo)((function(){return t.remove.bind(t)}),[t])]}(["acceptCookie"]),t=e[0],n=e[1],r=(e[2],Object(a.useState)(void 0!==t.acceptCookie)),o=r[0],l=r[1];return o?null:i.a.createElement("div",{className:"fixed-bottom cookie-banner d-flex align-items-center justify-content-between flex-column flex-md-row"},i.a.createElement("span",null,i.a.createElement("p",null,"Vi använder cookies, tyvärr är dessa inte ätbara 🍪"),i.a.createElement("p",null,"Genom att använda denna sida eller stänga detta meddelande accepterar du vår"," ",i.a.createElement(m.Link,{to:"/cookies",title:"Cookie Policy"},"cookiepolicy"),".")),i.a.createElement("button",{className:"btn btn-primary float-right mt-2",onClick:function(){n("acceptCookie",!0,{expires:new Date((new Date).setFullYear((new Date).getFullYear()+1))}),l(!0)}},"Ok"))},v=(n("6lBr"),function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(m.StaticQuery,{query:"3649515864",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Med glimten i ögat och ett driv för resultat så ser jag till att din träning går framåt men också är rolig på samma gång. Med över 10 000 timmar på golvet med kunder så har jag fått chansen att utveckla träning och kostupplägg för att det ska passa kundens behov och förutsättningar. Tillsammans hittar vi vägen för att du ska lyckas."},{name:"keywords",content:"Personlig träning, Personlig tränare, Personlig Tränare lund, onlinecoach, PT online, träningsprogram, kostprogram, kostupplägg, viktnedgång, Uteträning, uteträning lund, företagshälsa, friskvård"}]},i.a.createElement("html",{lang:"sv"})),i.a.createElement(T,null,i.a.createElement("div",{className:"page-top"},e),i.a.createElement(h,null)))}})},t}(a.Component));t.a=v},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),f=r(n);if(u&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,T=n instanceof Date;if(p!=T)return!1;if(p&&T)return t.getTime()==n.getTime();var d=t instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==n.toString();var m=o(t);if((c=m.length)!==o(n).length)return!1;for(l=c;0!=l--;)if(!a.call(n,m[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=m[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},dwco:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||l,scrollIntoView:r.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=p(this),r=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+a.left-r.left,n.scrollTop+a.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=s(e,"Y")&&u(e,"Y"),n=s(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function T(t){var n,r,o,i,l=(a()-t.startTime)/468;i=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*i)),r=t.startX+(t.x-t.startX)*n,o=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(T.bind(e,t))}function d(n,r,i){var c,s,u,f,p=a();n===t.body?(c=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(c=n,s=n.scrollLeft,u=n.scrollTop,f=l),T({scrollable:c,method:f,startTime:p,startX:s,startY:u,x:r,y:i})}}}}()},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},nWR2:function(e,t,n){e.exports=n.p+"static/logo-533756f9444cf02da592e4ed25a56cd6.png"},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),i=c(n("YVoz")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var s=a[c],u=(0,i.default)({},o[s],r[s]);o[s]=u}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),v=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||v:e.cancelAnimationFrame||v,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,o),O(p,T);var d={baseTag:P(l.TAG_NAMES.BASE,n),linkTags:P(l.TAG_NAMES.LINK,a),metaTags:P(l.TAG_NAMES.META,i),noscriptTags:P(l.TAG_NAMES.NOSCRIPT,c),scriptTags:P(l.TAG_NAMES.SCRIPT,u),styleTags:P(l.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,E,m)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var f=a.indexOf(s);-1!==f&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},P=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,o=w(n,r),[a.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=C(n),a=_(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+u(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=A((function(){g(e,(function(){S=null}))})):(g(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:M(l.TAG_NAMES.BASE,t,r),bodyAttributes:M(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(l.ATTRIBUTE_NAMES.HTML,o,r),link:M(l.TAG_NAMES.LINK,a,r),meta:M(l.TAG_NAMES.META,i,r),noscript:M(l.TAG_NAMES.NOSCRIPT,c,r),script:M(l.TAG_NAMES.SCRIPT,s,r),style:M(l.TAG_NAMES.STYLE,u,r),title:M(l.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:d([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=b0425e74e7b47044190480196fcbffef0837995f-52c32de67586ce187cf1.js.map