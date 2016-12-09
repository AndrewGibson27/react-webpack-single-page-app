/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-csscalc-flexbox-svg-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,l;for(var a in y)if(y.hasOwnProperty(a)){if(e=[],t=y[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?w[l[0]]=o:(!w[l[0]]||w[l[0]]instanceof Boolean||(w[l[0]]=new Boolean(w[l[0]])),w[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(e,t){return!!~(""+e).indexOf(t)}function l(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var i,a,f,u,d="modernizr",p=s("div"),c=l();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=o?o[r]:d+(r+1),p.appendChild(f);return i=s("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),a=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):p.parentNode.removeChild(p),!!a}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+f(t[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,l){function a(){p&&(delete P.style,delete P.modElem)}if(l=!r(l,"undefined")&&l,!r(o,"undefined")){var f=u(e,o);if(!r(f,"undefined"))return f}for(var p,c,m,h,v,y=["modernizr","tspan"];!P.style;)p=!0,P.modElem=s(y.shift()),P.style=P.modElem.style;for(m=e.length,c=0;c<m;c++)if(h=e[c],v=P.style[h],i(h,"-")&&(h=d(h)),P.style[h]!==n){if(l||r(o,"undefined"))return a(),"pfx"!=t||h;try{P.style[h]=o}catch(e){}if(P.style[h]!=v)return a(),"pfx"!=t||h}return a(),!1}function c(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?c(o,n||t):o);return!1}function h(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+b.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?p(l,t,o,s):(l=(e+" "+z.join(i+" ")+i).split(" "),m(l,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},w=function(){};w.prototype=g,w=new w;var C=[],x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),_=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];g._prefixes=_,/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
w.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+_.join(t+e),!!n.style.length}),/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T="Moz O ms Webkit",b=g._config.usePrefixes?T.split(" "):[];g._cssomPrefixes=b;var E={elem:s("modernizr")};w._q.push(function(){delete E.elem});var P={style:E.elem.style};w._q.unshift(function(){delete P.style});var z=g._config.usePrefixes?T.toLowerCase().split(" "):[];g._domPrefixes=z,g.testAllProps=h,g.testAllProps=v,/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
w.addTest("flexbox",v("flexBasis","1px",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var k=0;k<w._q.length;k++)w._q[k]();e.Modernizr=w}(window,document);