import{j as n}from"./jsx-runtime.0EP1h5Gz.js";import{r as x}from"./index.Cpyt_ag4.js";import{R as N}from"./index.CbGOjkxB.js";/* empty css                         */var f=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof global<"u"&&global||{},c={searchParams:"URLSearchParams"in f,iterable:"Symbol"in f&&"iterator"in Symbol,blob:"FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in f,arrayBuffer:"ArrayBuffer"in f};function I(e){return e&&DataView.prototype.isPrototypeOf(e)}if(c.arrayBuffer)var q=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],H=ArrayBuffer.isView||function(e){return e&&q.indexOf(Object.prototype.toString.call(e))>-1};function w(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function _(e){return typeof e!="string"&&(e=String(e)),e}function B(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return c.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){if(t.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}u.prototype.append=function(e,t){e=w(e),t=_(t);var r=this.map[e];this.map[e]=r?r+", "+t:t};u.prototype.delete=function(e){delete this.map[w(e)]};u.prototype.get=function(e){return e=w(e),this.has(e)?this.map[e]:null};u.prototype.has=function(e){return this.map.hasOwnProperty(w(e))};u.prototype.set=function(e,t){this.map[w(e)]=_(t)};u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)};u.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),B(e)};u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),B(e)};u.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),B(e)};c.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);function j(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}}function k(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function L(e){var t=new FileReader,r=k(t);return t.readAsArrayBuffer(e),r}function z(e){var t=new FileReader,r=k(t),s=/charset=([A-Za-z0-9_-]+)/.exec(e.type),a=s?s[1]:"utf-8";return t.readAsText(e,a),r}function M(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}function O(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function S(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:c.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:c.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c.arrayBuffer&&c.blob&&I(e)?(this._bodyArrayBuffer=O(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||H(e))?this._bodyArrayBuffer=O(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=j(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(L);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return z(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(M(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(J)}),this.json=function(){return this.text().then(JSON.parse)},this}var V=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function G(e){var t=e.toUpperCase();return V.indexOf(t)>-1?t:e}function g(e,t){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new u(t.headers)),this.method=G(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in f){var o=new AbortController;return o.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+new Date().getTime());else{var a=/\?/;this.url+=(a.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})};function J(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var s=r.split("="),a=s.shift().replace(/\+/g," "),o=s.join("=").replace(/\+/g," ");t.append(decodeURIComponent(a),decodeURIComponent(o))}}),t}function X(e){var t=new u,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(s){return s.indexOf(`
`)===0?s.substr(1,s.length):s}).forEach(function(s){var a=s.split(":"),o=a.shift().trim();if(o){var p=a.join(":").trim();try{t.append(o,p)}catch(b){console.warn("Response "+b.message)}}}),t}S.call(g.prototype);function h(e,t){if(!(this instanceof h))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}S.call(h.prototype);h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})};h.error=function(){var e=new h(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var Z=[301,302,303,307,308];h.redirect=function(e,t){if(Z.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})};var v=f.DOMException;try{new v}catch{v=function(t,r){this.message=t,this.name=r;var s=Error(t);this.stack=s.stack},v.prototype=Object.create(Error.prototype),v.prototype.constructor=v}function R(e,t){return new Promise(function(r,s){var a=new g(e,t);if(a.signal&&a.signal.aborted)return s(new v("Aborted","AbortError"));var o=new XMLHttpRequest;function p(){o.abort()}o.onload=function(){var i={statusText:o.statusText,headers:X(o.getAllResponseHeaders()||"")};a.url.indexOf("file://")===0&&(o.status<200||o.status>599)?i.status=200:i.status=o.status,i.url="responseURL"in o?o.responseURL:i.headers.get("X-Request-URL");var l="response"in o?o.response:o.responseText;setTimeout(function(){r(new h(l,i))},0)},o.onerror=function(){setTimeout(function(){s(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){s(new TypeError("Network request timed out"))},0)},o.onabort=function(){setTimeout(function(){s(new v("Aborted","AbortError"))},0)};function b(i){try{return i===""&&f.location.href?f.location.href:i}catch{return i}}if(o.open(a.method,b(a.url),!0),a.credentials==="include"?o.withCredentials=!0:a.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(c.blob?o.responseType="blob":c.arrayBuffer&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof u||f.Headers&&t.headers instanceof f.Headers)){var m=[];Object.getOwnPropertyNames(t.headers).forEach(function(i){m.push(w(i)),o.setRequestHeader(i,_(t.headers[i]))}),a.headers.forEach(function(i,l){m.indexOf(l)===-1&&o.setRequestHeader(l,i)})}else a.headers.forEach(function(i,l){o.setRequestHeader(l,i)});a.signal&&(a.signal.addEventListener("abort",p),o.onreadystatechange=function(){o.readyState===4&&a.signal.removeEventListener("abort",p)}),o.send(typeof a._bodyInit>"u"?null:a._bodyInit)})}R.polyfill=!0;f.fetch||(f.fetch=R,f.Headers=u,f.Request=g,f.Response=h);var $="https://submit-form.com",K=function(t){var r=x.useState(!1),s=r[0],a=r[1],o=function(b){return new Promise(function(m,i){var l=$+"/"+t.formId,T="POST",A={Accept:"application/json","Content-Type":"application/json"},E=JSON.stringify(b);a(!0),fetch(l,{method:T,headers:A,body:E}).then(function(y){return y.json()}).then(function(y){m(y)}).catch(function(y){i(y)}).finally(function(){a(!1)})})};return[o,s]};function P(e){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"relative my-6",children:[n.jsx("input",{id:"id-b02",type:e.type,name:"id-b02",placeholder:"your name",value:e.value,className:"peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",onChange:e.onChange,required:!0}),n.jsx("label",{htmlFor:"id-b02",className:"absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent",children:e.text})]})})}function Q(e){return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"relative",children:[n.jsx("textarea",{value:e.value,onChange:e.onChange,id:"id-b02",required:!0,name:"id-b02",rows:3,placeholder:"sas",className:"peer relative w-full border-b border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"}),n.jsx("label",{htmlFor:"id-b02",className:"absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent",children:"Poruka"})]})})}function W(e){return n.jsx(n.Fragment,{children:n.jsxs("label",{className:"text-sm",children:[n.jsx("input",{type:"checkbox",id:"privacyCheckbox",name:"privacyCheckbox",required:!0,checked:e.checked,onChange:e.onChange})," ","Suglasni ste da se vaši podaci obrađuju u skladu sa našom"," ",n.jsx("a",{href:"/privacy",className:"text-blue-700",children:"Politikom privatnosti"})]})})}const Y=e=>{const{isOpen:t}=e;return t?N.createPortal(n.jsx("div",{className:"modal-overlay",onClick:e.function,children:n.jsxs("div",{className:"modal-content",children:[n.jsx("button",{className:"modal-close",onClick:e.function,children:"×"}),"Zaprimili smo Vašu poruku, javljamo se ubrzo!"]})}),document.body):null},ee="Khr6vmn2q",ne=()=>{const[e,t]=K({formId:ee}),[r,s]=x.useState("John Doe"),[a,o]=x.useState("example@gmail.com"),[p,b]=x.useState("Zanimaju me topperi."),[m,i]=x.useState(!1),l=new FormData;l.append("name",r),l.append("email",a),l.append("message",p),l.append("agreed",m.toString());const[T,A]=x.useState(!1),[E,y]=x.useState(!1),F=()=>y(!1),C=["name","email","message","agreed"].every(d=>l.has(d)),D=async d=>{d.preventDefault(),A(!0);try{C?(await e({name:l.get("name"),email:l.get("email"),message:l.get("message"),agreed:l.get("agreed")}),s(""),o(""),b(""),i(!1)):console.log("Form reference is not available.")}catch(U){console.error("Error sending email:",U)}finally{A(!1),y(!0)}};return n.jsxs(n.Fragment,{children:[n.jsxs("form",{onSubmit:D,className:"max-w-md mt-8 bg-white p-8 rounded-md shadow-md md:mr-10",children:[n.jsx(P,{type:"text",text:"Ime",value:r,onChange:d=>s(d.target.value)}),n.jsx(P,{type:"email",text:"Vaš email",value:a,onChange:d=>o(d.target.value)}),n.jsx(Q,{value:p,onChange:d=>b(d.target.value)}),n.jsx(W,{checked:m,onChange:d=>i(d.target.checked)}),n.jsx("button",{disabled:t,type:"submit",className:"mt-8 w-full bg-roza3 text-white p-2 rounded-md hover:scale-105",children:T?"...Šaljem":"Pošalji"})]}),n.jsx(Y,{isOpen:E,function:F})]})};export{ne as default};