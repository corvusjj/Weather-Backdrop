(()=>{"use strict";const e=["London","Buenos Aires","Tokyo","Manila"];let t;async function n(a){if(function(e){return!(0!==e.length&&!/^ +$/.test(e)||(Me("Please input a city / location."),0))}(a))return;_.style.display="none",J.style.display="block",I.textContent=G.value,Q.classList.add("inactive"),X.textContent="";const r=`http://api.weatherapi.com/v1/current.json?key=e3b1dd72d6964d4187050305230608&q=${a}&aqi=no`;await async function(e){try{const n=await fetch(e,{mode:"cors"});if(!n.ok)throw n;const a=await n.json();t=a}catch(e){const t=await e.json();throw console.log(t),t.error.message}}(r).then((()=>{var a;(function(){const a=t.location.name;if(e.includes(a)){const t=e.indexOf(a);e.splice(t,1)}else e.pop();var r;e.unshift(a),r=e,$.innerHTML="",r.forEach((e=>{const t=document.createElement("li");t.textContent=e,$.appendChild(t),t.addEventListener("click",(()=>{Q.classList.contains("inactive")||n(e)}))}))})(),a=t,({current:ke,location:Se}=a),Te(),xe(),se.setAttribute("src",ke.condition.icon),function(){const[e,t]=Se.localtime.split(" "),n=new Date(e),a=A(n,"EEEE"),r=A(n,"dd MMM")+" '"+A(n,"yy");ue.textContent=t+" - ",ce.textContent=a+",",de.textContent=r}(),le.textContent=ke.condition.text,he.textContent=ke.condition.text,me.textContent=ke.cloud+"%",ge.textContent=ke.humidity+"%",fe.textContent=ke.wind_kph+"km/h",ye.textContent=Se.country,pe.textContent=Se.region,ve.textContent=Se.lat,be.textContent=Se.lon,console.log(a),G.value="",async function(){!function(){const e=ke.condition.code.toString(),t=B.find((t=>t.code.includes(e)));1===ke.is_day?(ae.src=t.day.src,ae.alt=t.day.alt,Pe("day",t)):(ae.src=t.night.src,ae.alt=t.night.alt,Pe("night",t))}()}()})).catch(Me).finally((()=>{_.style.display="block",J.style.display="none",Q.classList.remove("inactive")}))}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e){r(1,arguments);var t=o(e),n=t.getUTCDay(),a=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function u(e){r(1,arguments);var t=o(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=s(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var c=s(u);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}var c={};function d(){return c}function l(e,t){var n,a,s,u,c,l,h,m;r(1,arguments);var g=d(),f=i(null!==(n=null!==(a=null!==(s=null!==(u=null==t?void 0:t.weekStartsOn)&&void 0!==u?u:null==t||null===(c=t.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:g.weekStartsOn)&&void 0!==a?a:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=o(e),y=w.getUTCDay(),p=(y<f?7:0)+y-f;return w.setUTCDate(w.getUTCDate()-p),w.setUTCHours(0,0,0,0),w}function h(e,t){var n,a,s,u,c,h,m,g;r(1,arguments);var f=o(e),w=f.getUTCFullYear(),y=d(),p=i(null!==(n=null!==(a=null!==(s=null!==(u=null==t?void 0:t.firstWeekContainsDate)&&void 0!==u?u:null==t||null===(c=t.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:y.firstWeekContainsDate)&&void 0!==a?a:null===(m=y.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(w+1,0,p),v.setUTCHours(0,0,0,0);var b=l(v,t),k=new Date(0);k.setUTCFullYear(w,0,p),k.setUTCHours(0,0,0,0);var S=l(k,t);return f.getTime()>=b.getTime()?w+1:f.getTime()>=S.getTime()?w:w-1}function m(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var g={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return m("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):m(n+1,2)},d:function(e,t){return m(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return m(e.getUTCHours()%12||12,t.length)},H:function(e,t){return m(e.getUTCHours(),t.length)},m:function(e,t){return m(e.getUTCMinutes(),t.length)},s:function(e,t){return m(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return m(Math.floor(a*Math.pow(10,n-3)),t.length)}};const f=g;var w={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return f.y(e,t)},Y:function(e,t,n,a){var r=h(e,a),o=r>0?r:1-r;return"YY"===t?m(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):m(o,t.length)},R:function(e,t){return m(u(e),t.length)},u:function(e,t){return m(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return f.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var s=function(e,t){r(1,arguments);var n=o(e),a=l(n,t).getTime()-function(e,t){var n,a,o,s,u,c,m,g;r(1,arguments);var f=d(),w=i(null!==(n=null!==(a=null!==(o=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:f.firstWeekContainsDate)&&void 0!==a?a:null===(m=f.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==n?n:1),y=h(e,t),p=new Date(0);return p.setUTCFullYear(y,0,w),p.setUTCHours(0,0,0,0),l(p,t)}(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(s,{unit:"week"}):m(s,t.length)},I:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=s(t).getTime()-function(e){r(1,arguments);var t=u(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),s(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):m(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):f.d(e,t)},D:function(e,t,n){var a=function(e){r(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=n-t.getTime();return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return m(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return m(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return m(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return f.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):f.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):m(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):m(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):f.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):f.s(e,t)},S:function(e,t){return f.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return p(r);case"XXXX":case"XX":return v(r);default:return v(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return p(r);case"xxxx":case"xx":return v(r);default:return v(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+y(r,":");default:return"GMT"+v(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+y(r,":");default:return"GMT"+v(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return m(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return m((a._originalDate||e).getTime(),t.length)}};function y(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+m(o,2)}function p(e,t){return e%60==0?(e>0?"-":"+")+m(Math.abs(e)/60,2):v(e,t)}function v(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+m(Math.floor(r/60),2)+n+m(r%60,2)}const b=w;var k=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},S=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},C={p:S,P:function(e,t){var n,a=e.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return k(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",k(r,t)).replace("{{time}}",S(o,t))}};const T=C;var x=["D","DD"],M=["YY","YYYY"];function P(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var D={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function q(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var U,W={date:q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},E={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,s=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[s]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function L(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,s=o[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(u);return i=e.valueCallback?e.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(s.length)}}}const N={code:"en-US",formatDistance:function(e,t,n){var a,r=D[e];return a="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:W,formatRelative:function(e,t,n,a){return E[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(U={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(U.matchPattern);if(!n)return null;var a=n[0],r=e.match(U.parsePattern);if(!r)return null;var o=U.valueCallback?U.valueCallback(r[0]):r[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(a.length)}}),era:L({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:L({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:L({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:L({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var j=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Y=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,O=/^'([^]*?)'?$/,H=/''/g,z=/[a-zA-Z]/;function A(e,t,n){var s,u,c,l,h,m,g,f,w,y,p,v,k,S,C,D,q,U;r(2,arguments);var W=String(t),E=d(),F=null!==(s=null!==(u=null==n?void 0:n.locale)&&void 0!==u?u:E.locale)&&void 0!==s?s:N,L=i(null!==(c=null!==(l=null!==(h=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(g=n.locale)||void 0===g||null===(f=g.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==h?h:E.firstWeekContainsDate)&&void 0!==l?l:null===(w=E.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==c?c:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var A=i(null!==(p=null!==(v=null!==(k=null!==(S=null==n?void 0:n.weekStartsOn)&&void 0!==S?S:null==n||null===(C=n.locale)||void 0===C||null===(D=C.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==k?k:E.weekStartsOn)&&void 0!==v?v:null===(q=E.locale)||void 0===q||null===(U=q.options)||void 0===U?void 0:U.weekStartsOn)&&void 0!==p?p:0);if(!(A>=0&&A<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!F.localize)throw new RangeError("locale must contain localize property");if(!F.formatLong)throw new RangeError("locale must contain formatLong property");var B=o(e);if(!function(e){if(r(1,arguments),!function(e){return r(1,arguments),e instanceof Date||"object"===a(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=o(e);return!isNaN(Number(t))}(B))throw new RangeError("Invalid time value");var R=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(B),G=function(e,t){return r(2,arguments),function(e,t){r(2,arguments);var n=o(e).getTime(),a=i(t);return new Date(n+a)}(e,-i(t))}(B,R),Q={firstWeekContainsDate:L,weekStartsOn:A,locale:F,_originalDate:B};return W.match(Y).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,T[t])(e,F.formatLong):e})).join("").match(j).map((function(a){if("''"===a)return"'";var r,o,i=a[0];if("'"===i)return(o=(r=a).match(O))?o[1].replace(H,"'"):r;var s,u=b[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(s=a,-1===M.indexOf(s))||P(a,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==x.indexOf(e)}(a)||P(a,t,String(e)),u(G,a,F.localize,Q);if(i.match(z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return a})).join("")}const B=[{code:["1000"],day:{src:"/../dist/images/sunny.jpg",alt:"Free Blue, Yellow, and Green Hot Air Balloon Stock Photo",ref:["Dianne","https://www.pexels.com/photo/blue-yellow-and-green-hot-air-balloon-233146/"],theme:"#7fa7d4"},night:{src:"/../dist/images/clear.jpg",alt:"Free Starry Night Stock Photo",ref:["Tsvetoslav Hristov","https://www.pexels.com/photo/starry-night-2500220/"],theme:"#8a9b8a"}},{code:["1003"],day:{src:"/../dist/images/partly-cloudy.jpg",alt:"Free Man Paragliding Over The Sea Stock Photo",ref:["Gilberto Olimpio","https://www.pexels.com/photo/man-paragliding-over-the-sea-5036747/"],theme:"#c4c2c9"},night:{src:"/../dist/images/N-cloudy.jpg",alt:"Free Moonlight on a Dark Sky Stock Photo",ref:["Roberto Nickson","https://www.pexels.com/photo/moonlight-on-a-dark-sky-2885320/"],theme:"#298bc0"}},{code:["1006"],day:{src:"/../dist/images/cloudy.jpg",alt:"Free stock photo of atmosphere, clouds, cloudscape",ref:["NastyaSensei","https://www.pexels.com/photo/sea-sky-sunset-clouds-1069480/"],theme:"#cab3c0"},night:{src:"/../dist/images/N-cloudy.jpg",alt:"Free Moonlight on a Dark Sky Stock Photo",ref:["Roberto Nickson","https://www.pexels.com/photo/moonlight-on-a-dark-sky-2885320/"],theme:"#298bc0"}},{code:["1009"],day:{src:"/../dist/images/overcast.jpg",alt:"Free Brown Grass Field Under White Sky Stock Photo",ref:["Marina Leonova","https://www.pexels.com/photo/brown-grass-field-under-white-sky-8624442/"],theme:"#cca594"},night:{src:"/../dist/images/N-overcast.jpg",alt:"Free Ship at Night Stock Photo",ref:["Plato Terentev","https://www.pexels.com/photo/ship-at-night-6339764/"],theme:"#c0baba"}},{code:["1030","1135","1147"],day:{src:"/../dist/images/fog.jpg",alt:"Free Cars riding along asphalt road towards tunnel on gloomy weather Stock Photo",ref:["Helena Lopes","https://www.pexels.com/photo/cars-riding-along-asphalt-road-towards-tunnel-on-gloomy-weather-4409445/"],theme:"#91b3ab"},night:{src:"/../dist/images/N-fog.jpg",alt:"Free Man Walking on a Foggy Street at Night",ref:["Nazila Azimzada","https://www.pexels.com/photo/silhouette-of-a-man-walking-on-a-foggy-street-at-night-15897185/"],theme:"#9f9caa"}},{code:["1063","1180","1150"],day:{src:"/../dist/images/patchy-rain.jpg",alt:"Free stock photo of fields, flare, sky, rain",ref:["Christian Salwa","https://www.pexels.com/photo/fields-flare-sky-spring-1064472/"],theme:"#bb8fbb"},night:{src:"/../dist/images/N-patchy-rain.jpg",alt:"Free Incandescent Led Bulb Stock Photo",ref:["David McEachan","https://www.pexels.com/photo/incandescent-led-bulb-68084/"],theme:"#cecec5"}},{code:["1183","1153","1240"],day:{src:"/../dist/images/light-rain.jpg",alt:"Free Raindrops Running Down the Window Stock Photo",ref:["DaryaGrey_Owl","https://www.pexels.com/photo/raindrops-running-down-the-window-16295359/"],theme:"#81a1ad"},night:{src:"/../dist/images/light-rain.jpg",alt:"Free Raindrops Running Down the Window Stock Photo",ref:["DaryaGrey_Owl","https://www.pexels.com/photo/raindrops-running-down-the-window-16295359/"],theme:"#81a1ad"}},{code:["1069","1204","1207","1237","1249","1252","1264","1261"],day:{src:"/../dist/images/sleet.jpg",alt:"Free Close-up of Frozen Water Stock Photo",ref:["Pixabay","https://www.pexels.com/photo/close-up-of-frozen-water-314958/"],theme:"#BFE5F7"},night:{src:"/../dist/images/moderate-snow.jpg",alt:"Free Close-up Photography of Snowflake Stock Photo",ref:["Egor Kamelev","https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/"],theme:"#afd2e4"}},{code:["1087","1273","1276","1279","1282"],day:{src:"/../dist/images/thunder.jpg",alt:"Free Lightning Strikes Stock Photo",ref:["Frank Cone","https://www.pexels.com/photo/lightning-strikes-2258536/"],theme:"#b3b6d3"},night:{src:"/../dist/images/N-thunder.jpg",alt:"Free Lightning Strike on the Sky Stock Photo",ref:["Сергей Леденёв","https://www.pexels.com/photo/lightning-strike-on-the-sky-8956453/"],theme:"#fcded0"}},{code:["1114","1117","1219","1222","1225"],day:{src:"/../dist/images/heavy-snow.jpg",alt:"Free Aged Building Facade With Snow on Roof Stock Photo",ref:["Maria Orlova","https://www.pexels.com/photo/aged-building-facade-with-snow-on-roof-4969981/"],theme:"#D1DBDD"},night:{src:"/../dist/images/N-heavy-snow.jpg",alt:"Free Exterior of small wooden cottage with snow on roof and burning electric lights in window during snowfall at cold winter night Stock Photo",ref:["Maria Orlova","https://www.pexels.com/photo/snowy-wooden-house-during-snowfall-at-night-4969846/"],theme:"#c9ad9a"}},{code:["1168","1171","1201","1072","1198"],day:{src:"/../dist/images/freezing-rain.jpg",alt:"Free Close-up Photography of Ice Crystals on Edges of Corrugated Sheets Stock Photo",ref:["Skitterphoto","https://www.pexels.com/photo/close-up-photography-of-ice-crystals-on-edges-of-corrugated-sheets-730910/"],theme:"#bcc5db"},night:{src:"/../dist/images/N-freezing-rain.jpg",alt:"Free Photo of Windshield During Rainy Weather Stock Photo",ref:["Lukas Rychvalsky","https://www.pexels.com/photo/photo-of-windshield-during-rainy-weather-1600909/"],theme:"#4fb1c5"}},{code:["1186","1192","1243","1246"],day:{src:"/../dist/images/heavy-rain.jpg",alt:"Free Raining Through Window of Car Focusing Side Mirror Stock Photo",ref:["Sinitta Leunen","https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/"],theme:"#acc0c2"},night:{src:"/../dist/images/heavy-rain.jpg",alt:"Free Raining Through Window of Car Focusing Side Mirror Stock Photo",ref:["Sinitta Leunen","https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/"],theme:"#acc0c2"}},{code:["1066","1210","1213","1216","1255","1252","1258"],day:{src:"/../dist/images/moderate-snow.jpg",alt:"Free Close-up Photography of SnowFlake Stock Photo",ref:["Egor Kamalev","https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/"],theme:"#afd2e4"},night:{src:"/../dist/images/N-light-snow.jpg",alt:"Free Photo of Trees And Snow Covered Ground During Night Time Stock Photo",ref:["Martin Mariani","https://www.pexels.com/photo/photo-of-trees-and-snow-covered-ground-during-night-time-3801463/"],theme:"#c5aab7"}}],R=document.querySelector(".weather-sidebar"),G=document.querySelector("#input-city"),Q=document.querySelector("#search"),X=document.querySelector("#error-message"),_=document.querySelector(".data-container"),J=document.querySelector(".loading-container"),I=document.querySelector("#pending-city"),$=document.querySelector("#search-history > ul"),K=$.querySelectorAll("li"),V=document.querySelector("#menu"),Z=document.querySelector(".menu-modal"),ee=document.querySelector("#toggle-temp-btn"),te=document.querySelector("#toggle-bg-btn"),ne=document.querySelectorAll(".toggle-btn"),ae=document.querySelector(".background > img"),re=document.querySelector(".data-main"),oe=re.querySelector("#temperature"),ie=re.querySelector("#city"),se=re.querySelector("#weather-icon"),ue=re.querySelector("#time"),ce=re.querySelector("#day"),de=re.querySelector("#date"),le=re.querySelector("#condition"),he=document.querySelector("#data-condition"),me=document.querySelector("#cloud-percentage"),ge=document.querySelector("#humidity-percentage"),fe=document.querySelector("#wind-speed"),we=document.querySelector("#feels-like"),ye=document.querySelector("#country"),pe=document.querySelector("#region"),ve=document.querySelector("#lat"),be=document.querySelector("#lon");let ke,Se,Ce="celsius";function Te(){"celsius"===Ce?(oe.textContent=ke.temp_c+"°",we.textContent=ke.feelslike_c+"°"):(oe.textContent=ke.temp_f+"°",we.textContent=ke.feelslike_f+"°")}function xe(){ie.textContent=Se.name}function Me(e){X.textContent=e}function Pe(e,t){"day"===e?(Q.style.background=t.day.theme,ne.forEach((e=>e.style.background=`linear-gradient(#00000077, #00000021 3%, ${t.day.theme} 12%)`))):"night"===e?(Q.style.background=t.night.theme,ne.forEach((e=>e.style.background=`linear-gradient(#00000077, #00000021 3%, ${t.night.theme} 12%)`))):(Q.style.background=t.theme,ne.forEach((e=>e.style.background=`linear-gradient(#00000077, #00000021 3%, ${t.theme} 12%)`)))}let De="weather";Q.addEventListener("click",(()=>{Q.classList.contains("inactive")||n(G.value)})),G.addEventListener("keydown",(e=>{if("Enter"===e.key){if(Q.classList.contains("inactive"))return;n(G.value)}})),K.forEach((e=>{e.addEventListener("click",(()=>{Q.classList.contains("inactive")||(G.value=e.textContent,n(e.textContent))}))})),V.addEventListener("click",(function(){R.classList.add("weather-sidebar-hide"),V.classList.add("menu-hide"),re.classList.add("data-main-slide"),Z.classList.add("menu-modal-show")})),Z.addEventListener("click",(e=>{e.target===Z&&(R.classList.remove("weather-sidebar-hide"),V.classList.remove("menu-hide"),re.classList.remove("data-main-slide"),Z.classList.remove("menu-modal-show"))})),ee.addEventListener("click",(()=>{Q.classList.contains("inactive")||("c"===ee.dataset.activeTemp?(Ce="fahrenheit",ee.dataset.activeTemp="f"):(Ce="celsius",ee.dataset.activeTemp="c"),Te())})),te.addEventListener("click",(()=>{Q.classList.contains("inactive")||("weather"===De?(te.dataset.activeBg="animals",De="animals"):(te.dataset.activeBg="weather",De="weather"))}))})();