(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48504ca9","chunk-7780b585"],{"0e8f":function(t,e,s){"use strict";s("20f6");var i=s("e8f2");e["a"]=Object(i["a"])("flex")},"20f6":function(t,e,s){},"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("71d9"),r=s("80d2");const n=Object(r["i"])("v-toolbar__title"),a=Object(r["i"])("v-toolbar__items");i["a"]},"2fa4":function(t,e,s){"use strict";s("20f6");var i=s("80d2");e["a"]=Object(i["i"])("spacer","div","v-spacer")},"36a7":function(t,e,s){},5326:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-25"},[s("v-toolbar",{attrs:{dark:"",flat:"",color:"black",height:"50"}},[s("v-toolbar-title",[t._v("Login")])],1),s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){return t.error.clear(e.target.name)}}},[s("v-divider"),s("v-card-text",[s("v-layout",{staticClass:"mx-5",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"username",label:"Username or Email","prepend-icon":"mdi-account-card-details-outline","error-messages":t.error.get("username"),readonly:t.loading,autofocus:"",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",type:"password",label:"Password","error-messages":t.error.get("password"),"prepend-icon":"mdi-lock-open-outline",readonly:t.loading,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{"error-messages":t.error.get("company_id"),name:"company_id",label:"Select Company","prepend-icon":"mdi-home-city-outline",items:t.companies,"item-text":"name","item-value":"id",disabled:t.loading},model:{value:t.company_id,callback:function(e){t.company_id=e},expression:"company_id"}})],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:"",type:"submit",color:"primary",loading:t.loading}},[t._v("\n        Sign In\n      ")]),s("v-btn",{attrs:{text:"",color:"warning",disabled:t.loading,router:"",to:{name:"forgotPassword"}}},[t._v("\n        Reset Password\n      ")])],1)],1)],1)},r=[],n={computed:{company_id:{get:function(){return this.$store.getters["auth/company"]},set:function(t){this.$store.commit("auth/company",t)}},companies:function(){return this.$store.getters["tools/companies"]},loading:function(){return this.$store.getters["auth/loading"]},error:function(){return this.$store.getters.error}},data:function(){return{username:null,password:null}},methods:{login:function(){this.$store.dispatch("auth/login",{username:this.username,password:this.password,company_id:this.company_id})}}},a=n,o=s("2877"),c=s("6544"),l=s.n(c),d=s("8336"),h=s("b0af"),p=s("99d9"),u=s("ce7e"),m=s("0e8f"),g=s("a722"),v=s("b974"),f=s("2fa4"),b=s("8654"),y=s("71d9"),_=s("2a7f"),S=Object(o["a"])(a,i,r,!1,null,null,null);e["default"]=S.exports;l()(S,{VBtn:d["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["b"],VDivider:u["a"],VFlex:m["a"],VLayout:g["a"],VSelect:v["a"],VSpacer:f["a"],VTextField:b["a"],VToolbar:y["a"],VToolbarTitle:_["a"]})},"5e23":function(t,e,s){},6544:function(t,e){t.exports=function(t,e){var s="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(s.components=t.exports.options.components),s.components=s.components||{},e)s.components[i]=s.components[i]||e[i]}},"71d9":function(t,e,s){"use strict";s("5e23");var i=s("8dd9"),r=s("adda"),n=s("80d2"),a=s("d9bd");e["a"]=i["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(n["f"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(a["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(n["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(n["f"])(this.computedContentHeight)}},Object(n["r"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(n["f"])(this.extensionHeight)}},Object(n["r"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},"8efc":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return c}));var i=s("b0af"),r=s("80d2");const n=Object(r["i"])("v-card__actions"),a=Object(r["i"])("v-card__subtitle"),o=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");i["a"]},a722:function(t,e,s){"use strict";s("20f6");var i=s("e8f2");e["a"]=Object(i["a"])("layout")},adda:function(t,e,s){"use strict";s("8efc");function i(t,e){const s=e.modifiers||{},i=e.value,n="object"===typeof i,a=n?i.handler:i,o=new IntersectionObserver((e=[],i)=>{if(t._observe){if(a&&(!s.quiet||t._observe.init)){const t=Boolean(e.find(t=>t.isIntersecting));a(e,i,t)}t._observe.init&&s.once?r(t):t._observe.init=!0}},i.options||{});t._observe={init:!1,observer:o},o.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}const n={inserted:i,unbind:r};var a=n,o=(s("36a7"),s("24b2")),c=s("58df"),l=Object(c["a"])(o["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=l,h=s("d9bd");e["a"]=d.extend({name:"v-img",directives:{intersect:a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!this.hasIntersect||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError(){Object(h["b"])("Image load failed\n\n"+`src: ${this.normalisedSrc.src}`,this),this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+`src: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):null!=e&&setTimeout(s,e)};s()},genContent(){const t=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=d.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},e8f2:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("2b0e");function r(t){return i["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}}}]);
//# sourceMappingURL=chunk-48504ca9.148c50ae.js.map