(function(e){function t(t){for(var n,o,a=t[0],i=t[1],u=t[2],c=0,d=[];c<a.length;c++)o=a[c],s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=i;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{width:"5%",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)},l=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v("Upload to Cloudinary")]),r("h2",[e._v("Using Axios")]),r("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.upload(t)}}},[r("p",[r("label",{attrs:{for:"file-input"}},[r("input",{attrs:{id:"file-input",type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.handleFileChange(t)}}})])]),r("button",{attrs:{type:"submit",disabled:e.filesSelected<=0}},[e._v("Upload")])]),e.results&&e.results.secure_url&&"image"===e.assetType?r("p",[r("img",{attrs:{src:e.results.secure_url,alt:e.results.public_id}})]):e._e(),e.results&&e.results.secure_url&&"video"===e.assetType?r("video",{attrs:{width:"320",height:"240",controls:""}},[r("source",{attrs:{src:e.results.secure_url,type:"video/mp4"}}),e._v("Your browser does not support the video tag.\n  ")]):e._e(),e.results&&e.results.secure_url&&"raw"===e.assetType?r("textarea",{attrs:{rows:"4",cols:"50"}}):e._e(),e.errors.length>0?r("ul",e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0):e._e()])},a=[],i=r("bc3a"),u=r.n(i),p={name:"HelloWorld",data(){return{results:null,errors:[],file:null,filesSelected:0,cloudName:"picturecloud7",preset:"bp_test_1",tags:"browser-upload",assetType:null}},methods:{handleFileChange(e){console.log("handlefilechange",e.target.files),this.file=e.target.files[0],this.filesSelected=e.target.files.length},upload:function(e){console.log("upload",this.file.name);let t=new FileReader;t.addEventListener("load",function(){console.log("file reader listener");let e=new FormData;e.append("upload_preset",this.preset),e.append("tags",this.tags),e.append("resource_type","auto"),e.append("file",t.result),this.assetType=t.result.startsWith("data:image")?"image":t.result.startsWith("data:video")?"video":"raw";let r=`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,n={url:r,method:"POST",data:e};u()(n).then(e=>{this.results=e.data,console.log(this.results)}).catch(e=>{this.errors.push(e),console.log(this.error)})}.bind(this),!1),this.assetType=null,this.file&&this.file.name&&t.readAsDataURL(this.file)}}},c=p,d=(r("d035"),r("2877")),f=Object(d["a"])(c,o,a,!1,null,"9d045af6",null),h=f.exports,g={name:"App",components:{HelloWorld:h}},v=g,m=(r("034f"),Object(d["a"])(v,s,l,!1,null,null,null)),b=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(b)}).$mount("#app")},"64a9":function(e,t,r){},"8b19":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"assets/img/logo.c2a605fb.png"},d035:function(e,t,r){"use strict";var n=r("8b19"),s=r.n(n);s.a}});
//# sourceMappingURL=app.1a6177e0.js.map