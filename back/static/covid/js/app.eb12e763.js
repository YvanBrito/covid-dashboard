(function(t){function a(a){for(var n,o,s=a[0],l=a[1],d=a[2],h=0,u=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(a);while(u.length)u.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,s=1;s<e.length;s++){var l=e[s];0!==r[l]&&(n=!1)}n&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},i=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="static/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var c=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0ab0":function(t,a,e){"use strict";var n=e("7632"),r=e.n(n);r.a},"2fe3":function(t,a,e){"use strict";var n=e("a492"),r=e.n(n);r.a},"34ba":function(t,a,e){"use strict";var n=e("538f"),r=e.n(n);r.a},"3b51":function(t,a,e){},"538f":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("NavBar",{on:{areaSelected:t.changeArea}}),e("v-content",[e("Dashboard",{attrs:{area:t.area}})],1),e("v-footer",{attrs:{color:"indigo"}},[e("v-spacer"),e("span",{staticClass:"white--text"},[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",{attrs:{link:""},on:{click:function(a){return t.selectArea("global")}}},[e("v-list-item-action",[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Mundo")])],1)],1),e("v-list-item",{attrs:{link:""},on:{click:function(a){return t.selectArea("brasil")}}},[e("v-list-item-action",[e("v-icon",[t._v("mdi-home")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Brasil")])],1)],1),e("v-list-item",{attrs:{link:""},on:{click:function(a){return t.selectArea("para")}}},[e("v-list-item-action",[e("v-icon",[t._v("mdi-contact-mail")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Para")])],1)],1)],1)],1),e("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","hide-on-scroll":""}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.teste()}}},[t._v("Yvan Brito")])],1)],1)},s=[],l={name:"NavBar",data:function(){return{drawer:!1}},methods:{selectArea:function(t){this.$emit("areaSelected",t)},teste:function(){location.href="http://yvanbrito.com.br"}}},d=l,c=(e("34ba"),e("2877")),h=e("6544"),u=e.n(h),p=e("40dc"),f=e("5bc1"),v=e("132d"),m=e("8860"),g=e("da13"),b=e("1800"),y=e("5d23"),w=e("f774"),x=e("2a7f"),C=Object(c["a"])(d,o,s,!1,null,null,null),_=C.exports;u()(C,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VIcon:v["a"],VList:m["a"],VListItem:g["a"],VListItemAction:b["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:w["a"],VToolbarTitle:x["a"]});var L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("Panel",{attrs:{area:t.area}}),e("v-row",[e("v-col",{attrs:{lg:8,md:8,sm:12}},[e("Card",{attrs:{title:"Número de Casos"}},[e("LineChart",{attrs:{name:"mortespordia1",dataPath:t.area,heightInitial:300}})],1)],1),e("v-col",{attrs:{lg:4,md:4,sm:12}},[e("Card",{attrs:{title:"Nº de casos por continente"}},[e("HorizontalBarChart",{attrs:{name:"mortespordia3",dataPath:t.area,heightInitial:300}})],1)],1)],1),e("v-row",[e("v-col",{attrs:{lg:6,md:6,sm:12}},[e("Card",{attrs:{title:"Número de Casos"}},[e("BarChart",{attrs:{name:"mortespordia2",dataPath:t.area,heightInitial:300}})],1)],1),e("v-col",{attrs:{lg:6,md:6,sm:12}},[e("Card",{attrs:{title:"Nº de casos por região"}})],1)],1)],1)},V=[],S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",[e("Card",{attrs:{title:"Confirmados",enableToolbar:!1,isLoading:t.isLoading}},[t.isLoading?e("div",{staticClass:"text--primary"},[t._v(" Loading ")]):e("div",{staticClass:"d-flex justify-space-between"},[e("div",[e("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.confirmed)+" ")]),e("div",{staticClass:"text--primary"},[t._v(" Confirmados ")])])])])],1),e("v-col",[e("Card",{attrs:{title:"Óbitos",enableToolbar:!1,isLoading:t.isLoading}},[t.isLoading?e("div",{staticClass:"text--primary"},[t._v(" Loading ")]):e("div",{staticClass:"d-flex justify-space-between"},[e("div",[e("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.deaths)+" ")]),e("div",{staticClass:"text--primary"},[t._v(" Óbitos ")])])])])],1),e("v-col",[e("Card",{attrs:{title:"Recuperados",enableToolbar:!1,isLoading:t.isLoading}},[t.isLoading?e("div",{staticClass:"text--primary"},[t._v(" Loading ")]):e("div",{staticClass:"d-flex justify-space-between"},[e("div",[e("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.recovered)+" ")]),e("div",{staticClass:"text--primary"},[t._v(" Recuperados ")])])])])],1),e("v-col",[e("Card",{attrs:{title:"Letalidade",enableToolbar:!1,isLoading:t.isLoading}},[t.isLoading?e("div",{staticClass:"text--primary"},[t._v(" Loading ")]):e("div",{staticClass:"d-flex justify-space-between"},[e("div",[e("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.letality)+" ")]),e("div",{staticClass:"text--primary"},[t._v(" Taxa de Letalidade ")])])])])],1)],1)},j=[],k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{loading:t.isLoading,outlined:""}},[t.enableToolbar?e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v(t._s(t.title))]),e("v-spacer"),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:"",target:"_blank",disabled:""}},n),[e("v-icon",[t._v("mdi-cog-outline")])],1)]}}],null,!1,3809739733)},[e("span",[t._v("Source")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:"",large:"",target:"_blank"},on:{click:t.con}},n),[e("v-icon",[t._v("mdi-refresh")])],1)]}}],null,!1,1872231876)},[e("span",[t._v("Refresh")])])],1):t._e(),e("v-card-text",[t._t("default")],2)],1)},P=[],T={name:"Card",props:{title:{type:String,required:!0},enableToolbar:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1}},methods:{con:function(){console.log("estude")}}},D=T,O=(e("0ab0"),e("8336")),N=e("b0af"),B=e("99d9"),I=e("2fa4"),A=e("71d9"),$=e("3a2f"),E=Object(c["a"])(D,k,P,!1,null,null,null),R=E.exports;u()(E,{VBtn:O["a"],VCard:N["a"],VCardText:B["a"],VIcon:v["a"],VSpacer:I["a"],VToolbar:A["a"],VToolbarTitle:x["a"],VTooltip:$["a"]});var q=e("bc3a"),F=e.n(q),z="http://35.247.219.149/",M=F.a.create({baseURL:z,headers:{"Content-Type":"application/json"}}),K=M,H={name:"Panel",components:{Card:R},props:{area:{type:String,required:!0}},data:function(){return{confirmed:0,deaths:0,recovered:0,letality:0,isLoading:!0}},created:function(){this.getData()},watch:{area:function(){this.getData()}},methods:{getData:function(){var t=this;this.isLoading=!0,K.get("/".concat(this.area,"/")).then((function(a){t.isLoading=!1,t.confirmed=a.data[a.data.length-1].confirmed,t.deaths=a.data[a.data.length-1].deaths,t.recovered=a.data[a.data.length-1].recovered,t.letality=t.deaths/t.confirmed*100}))}}},J=H,Y=e("62ad"),U=e("0fd9"),G=Object(c["a"])(J,S,j,!1,null,null,null),Q=G.exports;u()(G,{VCol:Y["a"],VRow:U["a"]});var W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{height:t.height+"px"}},[t.loading?e("div",{staticClass:"lds-ripple"},[e("div"),e("div")]):t._e(),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:t.name}})])],1)},X=[],Z=(e("4160"),e("b0c0"),e("a9e3"),e("159b"),e("5698")),tt={name:"LineChart",props:{name:{type:String,required:!0},dataPath:{type:String,required:!0},heightInitial:{type:Number,default:200}},data:function(){return{loading:!0,width:0,height:0,data:{}}},watch:{dataPath:function(){var t=Z["i"]("#".concat(this.name)).append("svg-component").attr("width",0).attr("height",0);t.html(""),this.getData()}},created:function(){this.height=this.heightInitial},mounted:function(){var t=this;this.getData(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.width=100,t.setChart(),t.width=parseFloat(Z["i"]("#".concat(t.name)).style("width")),t.setChart()}))}))},updated:function(){this.width=parseFloat(Z["i"]("#".concat(this.name)).style("width")),this.setChart()},beforeDestroy:function(){this.data={}},methods:{getData:function(){var t=this;this.loading=!0,Z["i"]("#".concat(this.name)).html(""),K.get("/".concat(this.dataPath,"/")).then((function(a){t.loading=!1,t.data=a.data;var e=Z["j"]("%m/%d/%y");t.data.forEach((function(t){t.date=e(t.date),t.confirmed=+t.confirmed,t.deaths=+t.deaths,t.recovered=+t.recovered}))}))},setChart:function(){Z["i"]("#".concat(this.name)).html("");var t={top:20,right:20,bottom:50,left:70},a=this.width-t.left-t.right,e=this.height-t.top-t.bottom,n=Z["h"]().range([0,a]),r=Z["g"]().range([e,0]),i=Z["d"]().x((function(t){return n(t.date)})).y((function(t){return r(t.confirmed)})),o=Z["d"]().x((function(t){return n(t.date)})).y((function(t){return r(t.deaths)})),s=Z["d"]().x((function(t){return n(t.date)})).y((function(t){return r(t.recovered)})),l=Z["i"]("#".concat(this.name)).append("svg").attr("width",a+t.left+t.right).attr("height",e+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");n.domain(Z["c"](this.data,(function(t){return t.date}))),r.domain([0,Z["e"](this.data,(function(t){return t.confirmed}))]),l.append("path").data([this.data]).attr("class","confirmed").attr("d",i),l.append("path").data([this.data]).attr("class","deaths").attr("d",o),l.append("path").data([this.data]).attr("class","recovered").attr("d",s),l.append("g").attr("transform","translate(0,"+e+")").call(Z["a"](n)).selectAll("text").attr("transform","translate(-10,10)rotate(-45)").style("text-anchor","end"),l.append("text").attr("transform","translate("+a/2+" ,"+(e+t.top+30)+")").style("text-anchor","middle").text("Data"),l.append("g").call(Z["b"](r).tickFormat((function(t){return t/1e6>=1?t=t/1e6+"KK":t/1e3>=1&&(t=t/1e3+"K"),t}))),l.append("text").attr("transform","rotate(-90)").attr("y",10-t.left).attr("x",0-e/2).attr("dy","1em").style("text-anchor","middle").text("Casos");var d=l.append("g").attr("class","legend").attr("transform","translate(-170,-80)");d.append("circle").attr("cx",200).attr("cy",100).attr("r",6).style("fill","rgb(70, 130, 180)"),d.append("circle").attr("cx",200).attr("cy",130).attr("r",6).style("fill","rgb(182, 63, 63)"),d.append("circle").attr("cx",200).attr("cy",160).attr("r",6).style("fill","rgb(61, 235, 128)"),d.append("text").attr("x",220).attr("y",100).text("Confirmados").style("font-size","15px").attr("alignment-baseline","middle"),d.append("text").attr("x",220).attr("y",130).text("Mortos").style("font-size","15px").attr("alignment-baseline","middle"),d.append("text").attr("x",220).attr("y",160).text("Recuperados").style("font-size","15px").attr("alignment-baseline","middle")}}},at=tt,et=(e("9d7f"),Object(c["a"])(at,W,X,!1,null,null,null)),nt=et.exports,rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{height:t.height+"px"}},[t.loading?e("div",{staticClass:"lds-ripple"},[e("div"),e("div")]):t._e(),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:t.name}})])],1)},it=[],ot=(e("d81d"),{name:"BarChart",props:{name:{type:String,required:!0},dataPath:{type:String,required:!0},heightInitial:{type:Number,default:200}},data:function(){return{loading:!0,width:0,height:0,data:[]}},watch:{dataPath:function(){var t=Z["i"]("#".concat(this.name)).append("svg");t.html(""),this.getData()}},created:function(){this.height=this.heightInitial},mounted:function(){var t=this;this.getData(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.width=100,t.setChart(),t.width=parseFloat(Z["i"]("#".concat(t.name)).style("width")),t.setChart()}))}))},updated:function(){this.width=parseFloat(Z["i"]("#".concat(this.name)).style("width")),this.setChart()},beforeDestroy:function(){this.data=[]},methods:{getData:function(){var t=this;Z["i"]("#".concat(this.name)).html(""),K.get("/worldregions").then((function(a){t.loading=!1,t.data=a.data}))},setChart:function(){Z["i"]("#".concat(this.name)).html("");var t={top:20,right:30,bottom:40,left:90},a=this.width-t.left-t.right,e=this.height-t.top-t.bottom,n=Z["i"]("#".concat(this.name)).append("svg").attr("width",a+t.left+t.right).attr("height",e+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")"),r=Z["g"]().domain([0,2134e3]).range([0,a]);n.append("g").attr("transform","translate(0,"+e+")").call(Z["a"](r)).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end");var i=Z["f"]().range([0,e]).domain(this.data.map((function(t){return t.Region}))).padding(.1);n.append("g").call(Z["b"](i)),n.selectAll("myRect").data(this.data).enter().append("rect").attr("x",r(0)).attr("y",(function(t){return i(t.Region)})).attr("width",(function(t){return r(t.value)})).attr("height",i.bandwidth()).attr("fill","#69b3a2")}}}),st=ot,lt=Object(c["a"])(st,rt,it,!1,null,null,null),dt=lt.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{height:t.height+"px"}},[t.loading?e("div",{staticClass:"lds-ripple"},[e("div"),e("div")]):t._e(),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:t.name}})])],1)},ht=[],ut={name:"BarChart",props:{name:{type:String,required:!0},dataPath:{type:String,required:!0},heightInitial:{type:Number,default:200}},data:function(){return{loading:!0,width:0,height:0,data:[]}},watch:{dataPath:function(){var t=Z["i"]("#".concat(this.name)).append("svg");t.html(""),this.getData()}},created:function(){this.height=this.heightInitial},mounted:function(){var t=this;this.getData(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.width=100,t.setChart(),t.width=parseFloat(Z["i"]("#".concat(t.name)).style("width")),t.setChart()}))}))},updated:function(){this.width=parseFloat(Z["i"]("#".concat(this.name)).style("width")),this.setChart()},beforeDestroy:function(){this.data=[]},methods:{getData:function(){var t=this;Z["i"]("#".concat(this.name)).html(""),K.get("/toptenconfirmed").then((function(a){t.loading=!1,t.data=a.data}))},setChart:function(){Z["i"]("#".concat(this.name)).html("");var t=Z["i"]("#".concat(this.name)).append("svg"),a={top:20,right:20,bottom:30,left:50},e=this.width-a.left-a.right,n=this.height-a.top-a.bottom;t.attr("width",e+a.left+a.right).attr("height",n+a.top+a.bottom);var r=t.append("g").attr("transform","translate("+a.left+","+a.top+")"),i=Z["f"]().rangeRound([0,e]).padding(.1),o=Z["g"]().rangeRound([n,0]);i.domain(this.data.map((function(t){return t.Country}))),o.domain([0,Z["e"](this.data,(function(t){return Number(t.value)}))]),r.append("g").attr("transform","translate(0,"+n+")").call(Z["a"](i)),r.append("g").call(Z["b"](o)).append("text").attr("fill","#000").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("text-anchor","end").text("Speed"),r.selectAll(".bar").data(this.data).enter().append("rect").attr("class","bar").attr("x",(function(t){return i(t.Country)})).attr("y",(function(t){return o(Number(t.value))})).attr("width",i.bandwidth()).attr("height",(function(t){return n-o(Number(t.value))}))}}},pt=ut,ft=(e("b8c6"),Object(c["a"])(pt,ct,ht,!1,null,null,null)),vt=ft.exports,mt={components:{Panel:Q,Card:R,LineChart:nt,HorizontalBarChart:dt,BarChart:vt},props:{area:{type:String,required:!0}}},gt=mt,bt=(e("2fe3"),e("a523")),yt=Object(c["a"])(gt,L,V,!1,null,null,null),wt=yt.exports;u()(yt,{VCol:Y["a"],VContainer:bt["a"],VRow:U["a"]});var xt={name:"App",components:{NavBar:_,Dashboard:wt},props:{source:String},data:function(){return{area:"global"}},methods:{changeArea:function(t){this.area=t}}},Ct=xt,_t=e("7496"),Lt=e("a75b"),Vt=e("553a"),St=Object(c["a"])(Ct,r,i,!1,null,null,null),jt=St.exports;u()(St,{VApp:_t["a"],VContent:Lt["a"],VFooter:Vt["a"],VSpacer:I["a"]});var kt=e("f309");n["a"].use(kt["a"]);var Pt=new kt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Pt,render:function(t){return t(jt)}}).$mount("#app")},7632:function(t,a,e){},"84d6":function(t,a,e){},"9d7f":function(t,a,e){"use strict";var n=e("3b51"),r=e.n(n);r.a},a492:function(t,a,e){},b8c6:function(t,a,e){"use strict";var n=e("84d6"),r=e.n(n);r.a}});
//# sourceMappingURL=app.eb12e763.js.map