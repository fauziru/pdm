webpackJsonp([1],{"+7Ol":function(t,a){},"7Cjr":function(t,a){},CgL8:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("MU8w");var s=e("7+uW"),n=e("Dd8w"),r=e.n(n),i={props:{customClass:String}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-full max-w-screen-lg mx-auto px-2",class:this.customClass},[this._t("default")],2)},staticRenderFns:[]},l=e("VU/8")(i,o,!1,null,null,null).exports,c={props:{customClass:String,height:String,width:String,bg:String}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"shadow-lg border-gray-200 px-5 py-3",class:this.customClass+" "+(this.width||"w-full")+" "+(this.height||"h-auto")+" "+(this.bg||"bg-Cultured-900")},[this._t("default")],2)},staticRenderFns:[]},d=e("VU/8")(c,u,!1,null,null,null).exports,h={props:{customClass:String,height:String,width:String}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader ease-linear",class:this.customClass+" "+(this.height||"h-12")+" "+(this.width||"w-12")})},staticRenderFns:[]};var p=e("VU/8")(h,m,!1,function(t){e("T8/q")},"data-v-719f7eba",null).exports,v=e("NYxO"),f={components:{Wrapper:l,card:d,loading:p},name:"Navbar",data:function(){return{sepStat:0}},computed:r()({},Object(v.c)("ip",["city","date","day","hour","minute"])),mounted:function(){setInterval(this.getNow,1e3),setInterval(this.tes,1e3)},methods:r()({},Object(v.b)("ip",["getNow"]),Object(v.b)("jadwalsholat",["getDataJadwalsholat"]),{tes:function(){this.sepStat=!this.sepStat}})},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("Wrapper",{attrs:{customClass:"-mt-10"}},[e("card",{attrs:{customClass:"rounded-xl"}},[t.date?t._e():e("div",{staticClass:"flex justify-center"},[e("loading")],1),t._v(" "),t.date?e("div",{staticClass:"grid grid-rows-2 grid-flow-col"},[e("div",{staticClass:"row-span-1"},[e("i",{staticClass:"fas fa-map-marker-alt fa-2x text-SpringGreen-900 mr-1 align-middle"}),t._v(" "),e("span",{staticClass:"text-3xl font-semibold text-OuterSpace-900 align-middle"},[t._v(t._s(t.city))])]),t._v(" "),e("div",{staticClass:"row-span-1"},[e("span",{staticClass:"text-lg text-OuterSpace-900 align-middle"},[t._v(t._s(t.day+", "+t.date))])]),t._v(" "),e("div",{staticClass:"text-6xl text-RaisinBlack-900 align-middle justify-self-end row-span-2"},[t._v("\n          "+t._s(t.hour)),e("span",{class:t.sepStat?"text-SpringGreen-900":"text-Cultured-900"},[t._v(":")]),t._v(t._s(t.minute)+"\n        ")])]):t._e()])],1)],1)},staticRenderFns:[]},_={components:{Wrapper:l},name:"Content"},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"content"}},[a("Wrapper",[this._t("default")],2)],1)},staticRenderFns:[]};var x={components:{Wrapper:l,card:d},data:function(){return{data:console.log("@/assets/images/wave.svg"),year:(new Date).getFullYear()}},name:"Footer"},C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"footer"}},[a("div",{staticClass:"bg-wave-sm md:bg-wave h-64"}),this._v(" "),a("Wrapper",{attrs:{customClass:"z-50"}},[a("div",{staticClass:"rounded-t-lg -mt-32 bg-gradient-to-br from-OuterSpace-900 via-OuterSpace-900 to-RaisinBlack-900 shadow-lg py-3 px-5 cheight"},[a("p",{staticClass:"text-Cultured-900"},[this._v("© "+this._s(this.year)+". Padjadjaran Master Developer")])])])],1)},staticRenderFns:[]};var w={components:{Navbar:e("VU/8")(f,g,!1,null,null,null).exports,Content:e("VU/8")(_,b,!1,function(t){e("aORl")},null,null).exports,Footer:e("VU/8")(x,C,!1,function(t){e("CgL8")},"data-v-24a6df23",null).exports},name:"App",beforeCreate:function(){console.log("app before create")},created:function(){var t=this;console.log("app created"),this.getIP().then(function(a){200===a&&t.getDataJadwalsholat().then(function(a){200===a&&t.setDataSholatHari()}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})},methods:r()({},Object(v.b)("ip",["getIP"]),Object(v.b)("jadwalsholat",["getDataJadwalsholat","setDataSholatHari"]))},S={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("Content",[a("router-view")],1),this._v(" "),a("Footer")],1)},staticRenderFns:[]};var j=e("VU/8")(w,S,!1,function(t){e("+7Ol")},null,null).exports,k=e("/ocq"),y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[this._t("default")],2)},staticRenderFns:[]},M=e("VU/8")({props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},y,!1,null,null,null).exports,D={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"bg-Cultured-900 pt-2 shadow-md rounded-t-xl px-5"},[e("div",{staticClass:"-mb-px flex"},t._l(t.tabs,function(a){return e("a",{key:a.name,staticClass:"no-underline border-transparent uppercase tracking-wide font-bold text-xs py-3 px-2 rounded-t-md",class:a.isActive?"border-t-2 border-l-2 border-r-2 border-solid border-gray-200 shadow-inner":"",attrs:{href:a.href},on:{click:function(e){return t.selectTab(a)}}},[t._v("\n        "+t._s(a.name)+"\n      ")])}),0)]),t._v(" "),e("div",{staticClass:"tabs-details"},[t._t("default")],2)])},staticRenderFns:[]},F=e("VU/8")({data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t){this.tabs.forEach(function(a){a.isActive=a.href===t.href})}}},D,!1,null,null,null).exports,R={components:{card:d,loading:p},mounted:function(){setInterval(this.sholatTerdekat,1e3)},updated:function(){console.log("update")},computed:r()({},Object(v.c)("jadwalsholat",["jadwalSholatHari","jadwalSholatBesok","pesanError","pesanSholat","keySholat","jamSholat","sisaJam","sisaMenit","dateGregorian","dateHijria","Isha","Fajr","Dhuhr","Asr","Maghrib"])),methods:r()({},Object(v.b)("jadwalsholat",["tes","sholatTerdekat"]))},H={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.jamSholat?t._e():e("div",{staticClass:"flex justify-center"},[e("loading")],1),t._v(" "),t.pesanError?e("div",[e("span",[t._v("Terjadi Kesalahan, silahkan muat ulang halaman ini")])]):t._e(),t._v(" "),t.jamSholat?e("div",{staticClass:"flex"},[e("span",[t._v("Tanggal gregorian: "),e("span",{staticClass:"text-SpringGreen-1300 font-bold"},[t._v(t._s(t.dateGregorian))])]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("Tanggal hijriah: "),e("span",{staticClass:"text-SpringGreen-1300 font-bold"},[t._v(t._s(t.dateHijria))])])]):t._e(),t._v(" "),t.jamSholat?e("div",[e("card",{attrs:{customClass:"rounded-xl mx-auto mt-3 border-gray-100 border-t-2 border-solid",width:"md:w-3/5",bg:"bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900"}},[e("div",{staticClass:"grid justify-center"},[e("div",{staticClass:"text-center"},[e("i",{staticClass:"far fa-clock fa-4x text-SpringGreen-700 mr-1",class:t.sisaJam||t.sisaMenit?"animate-pulse":"animate-bounce"}),t._v(" "),e("span",{staticClass:"text-6xl text-RaisinBlack-900 align-top"},[t._v(t._s(t.jamSholat))])]),t._v(" "),e("span",{staticClass:"text-xl text-OuterSpace-900"},[t._v(t._s(""+(t.sisaJam||t.sisaMenit?t.pesanSholat:"Sudah memasuki waktu sholat "))),e("span",{staticClass:"text-SpringGreen-1300 font-bold"},[t._v(t._s(t.keySholat))]),t._v(t._s(t.sisaJam||t.sisaMenit?" dalam ":" sekarang")),e("span",{staticClass:"text-SpringGreen-1300 font-bold"},[t._v(t._s((t.sisaJam||"")+" "+(t.sisaJam?" jam":"")+" ")+t._s((t.sisaMenit||"")+" "+(t.sisaMenit?" menit":"")+" "))])])])])],1):t._e(),t._v(" "),t.jamSholat?e("table",{staticClass:"w-full mt-5 border-gray-200 border-solid border-t-2"},[t._m(0),t._v(" "),e("tr",[e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(t.Fajr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(t.Dhuhr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(t.Asr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(t.Maghrib))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(t.Isha))])])]):t._e()])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{staticClass:"pt-3"},[t._v("Subuh")]),t._v(" "),e("th",{staticClass:"pt-3"},[t._v("Zuhur")]),t._v(" "),e("th",{staticClass:"pt-3"},[t._v("Asar")]),t._v(" "),e("th",{staticClass:"pt-3"},[t._v("Magrib")]),t._v(" "),e("th",{staticClass:"pt-3"},[t._v("Isya")])])}]},B=e("VU/8")(R,H,!1,null,null,null).exports,O={computed:r()({},Object(v.c)("jadwalsholat",["jadwalSholatBulan"]),Object(v.c)("ip",["date"]))},I={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("table",{staticClass:"w-full"},[t._m(0),t._v(" "),t._l(t.jadwalSholatBulan,function(a,s){return e("tr",{key:s,staticClass:"hover:bg-SpringGreen-500 h-10 border-gray-200 border-solid border-t-2",class:a.date.gregorian==t.date?"bg-SpringGreen-700":""},[e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.date.gregorian))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.times.Fajr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.times.Dhuhr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.times.Asr))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.times.Maghrib))]),t._v(" "),e("td",{staticClass:"text-center text-RaisinBlack-900"},[t._v(t._s(a.times.Isha))])])})],2)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("Tanggal")]),t._v(" "),e("th",[t._v("Subuh")]),t._v(" "),e("th",[t._v("Zuhur")]),t._v(" "),e("th",[t._v("Asar")]),t._v(" "),e("th",[t._v("Magrib")]),t._v(" "),e("th",[t._v("Isya")])])}]},A=e("VU/8")(O,I,!1,null,null,null).exports,E={components:{card:d,tab:M,tabs:F,loading:p},name:"CariHadits",data:function(){return{items:[{id:1,name:"Hari ini",component:B},{id:2,name:"Bulan Ini",component:A}]}},computed:r()({},Object(v.c)("jadwalsholat",["jadwalSholatHari"]),Object(v.c)("ip",["date"]))},G={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pt-3",attrs:{id:"jadwalsholat"}},[this.date?this._e():a("div",{staticClass:"flex justify-center"},[a("loading")],1),this._v(" "),this.date?a("tabs",this._l(this.items,function(t,e){return a("tab",{key:t.id,attrs:{name:t.name,selected:0==e}},[a("card",{attrs:{customClass:"rounded-b-xl mt-0.5"}},[a("keep-alive",[a(t.component,{key:t.id,tag:"component"})],1)],1)],1)}),1):this._e()],1)},staticRenderFns:[]},J=e("VU/8")(E,G,!1,null,null,null).exports,V={props:{color:String,width:String,height:String},data:function(){return{scheme:this.pickColor(this.color)}},methods:{pickColor:function(t){switch(t){case"primary":t="bg-gradient-to-br from-OuterSpace-900 via-OuterSpace-900 to-RaisinBlack-900 text-white hover:text-OuterSpace-900 hover:bg-gradient-to-br hover:from-SpringGreen-900 hover:via-SpringGreen-900 hover:to-SpringGreen-1100 focus:bg-SpringGreen-1100";break;case"secondary":t="border-t-2 border-solid border-gray-200 bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900 text-RaisinBlack-900 hover:text-white hover:bg-gradient-to-br hover:from-OuterSpace-900 hover:via-OuterSpace-900 hover:to-RaisinBlack-900 focus:bg-SpringGreen-1100"}return t}}},$={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("button",{staticClass:"rounded-full shadow-md font-normal",class:t.scheme+" "+(t.width||"w-full")+" "+(t.height||"h-10"),on:{click:function(a){return t.$emit("click")}}},[t._t("default")],2)},staticRenderFns:[]},T=e("VU/8")(V,$,!1,null,null,null).exports,U={components:{Wrapper:l,card:d,loading:p,mybutton:T},name:"CariHadits",data:function(){return{searchKey:""}},computed:r()({},Object(v.c)("hadits",["hadits"])),methods:r()({},Object(v.b)("hadits",["cariHadits"]))},z={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-3",attrs:{id:"carihadist"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],attrs:{type:"text"},domProps:{value:t.searchKey},on:{input:function(a){a.target.composing||(t.searchKey=a.target.value)}}}),t._v(" "),e("mybutton",{staticClass:"mt-3",attrs:{color:"secondary"},on:{click:function(a){return t.cariHadits(t.searchKey)}}},[t._v("Cari "),e("i",{staticClass:"fas fa-search ml-1 align-middle"})])],1)},staticRenderFns:[]},P=e("VU/8")(U,z,!1,null,null,null).exports,N={components:{card:d,mybutton:T},data:function(){return{counter:0,dzikirVal:0,dzikirStr:"",dzikirArr:["سبحان الله","الحمد لله","لا إله إلا الله","الله أكبر","لا حول ولا قوة إلا بالله العلي العظيم"]}},name:"Dzikir",methods:{hitung:function(){this.counter++},change:function(){console.log(this.dzikirVal),this.counter=0}}},W={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pt-3",attrs:{id:"dzikir"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dzikirVal,expression:"dzikirVal"}],staticClass:"block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-SpringGreen-700 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",on:{input:function(a){return t.change()},change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.dzikirVal=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0"}},[t._v("Subhaanallaah")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("Alhamdulillaah")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Laa ilaaha illallaah")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Allaahu akbar")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("La haula wa laa quwwata illaa billaah")])]),t._v(" "),e("card",{attrs:{customClass:"rounded-xl mx-auto mt-3",width:"md:w-3/5",bg:"bg-gradient-to-tl from-Cultured-1000 via-Cultured-900 to-Cultured-900"}},[e("div",{staticClass:"grid justify-center"},[e("i",{staticClass:"fas fa-stopwatch fa-2x text-SpringGreen-900 mr-1 align-middle text-center"}),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-6xl text-RaisinBlack-900 align-middle"},[t._v(t._s(t.counter))]),t._v(" "),e("span",{staticClass:"text-3xl text-SpringGreen-900 align-bottom animate-pulse"},[t._v("x")])]),t._v(" "),e("span",{staticClass:"text-4xl text-OuterSpace-900 self-center",staticStyle:{direction:"rtl"}},[t._v(t._s(t.dzikirArr[t.dzikirVal]))])])]),t._v(" "),e("div",{staticClass:"md:w-3/5 mx-auto mt-3"},[e("mybutton",{attrs:{color:"primary"},on:{click:function(a){return t.hitung()}}},[t._v("Hitung")])],1)],1)},staticRenderFns:[]},K=e("VU/8")(N,W,!1,null,null,null).exports,L={components:{tab:M,tabs:F,loader:p,card:d},name:"Home",data:function(){return{items:[{id:1,name:"Jadwal Sholat",component:J},{id:2,name:"Penghitung Dzikir",component:K},{id:3,name:"Cari Hadits",component:P}]}}},q={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-5",attrs:{id:"home"}},[e("tabs",t._l(t.items,function(a,s){return e("tab",{key:a.id,attrs:{name:a.name,selected:0==s}},[e("card",{attrs:{customClass:"rounded-b-xl mt-0.5"}},[e("span",{staticClass:"text-2xl"},[t._v(t._s(a.name))]),t._v(" "),e("keep-alive",[e(a.component,{key:a.id,tag:"component"})],1)],1)],1)}),1)],1)},staticRenderFns:[]},Y=e("VU/8")(L,q,!1,null,null,null).exports;s.a.use(k.a);var Z=new k.a({base:"/pdm/",mode:"history",routes:[{path:"/",name:"Home",component:Y}]}),Q=e("//Fk"),X=e.n(Q),tt=e("mtWM"),at=e.n(tt),et=e("DWlv"),st=e.n(et);s.a.use(st.a,at.a);var nt=function(t){return t<10?"0"+t:t},rt={namespaced:!0,state:function(){return{ip:"",city:"",date:"",day:"",hour:"",minute:""}},actions:{getIP:function(t){var a=t.commit;return new X.a(function(t,e){at.a.get("https://ipapi.co/json/").then(function(e){a("setIP",e.data.ip),a("setCity",e.data.city),t(e.status)}).catch(function(t){e(t),a("setCity","Maaf jaringan anda terputus")})})},getNow:function(t){var a=t.commit,e=new Date;a("setDate",e.getFullYear()+"-"+nt(e.getMonth()+1)+"-"+nt(e.getDate())),a("setDay",["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"][e.getDay()]),a("setHour",nt(e.getHours())),a("setMinute",nt(e.getMinutes()))}},mutations:{setIP:function(t,a){t.ip=a},setCity:function(t,a){t.city=a},setDate:function(t,a){t.date=a},setDay:function(t,a){t.day=a},setHour:function(t,a){t.hour=a},setMinute:function(t,a){t.minute=a}}};s.a.use(st.a,at.a);var it={namespaced:!0,state:function(){return{hadits:[]}},actions:{cariHadits:function(t,a){var e=t.commit;at.a.get("http://api.carihadis.com/?q=niat").then(function(t){e("setHadits",t)})}},mutations:{setHadits:function(t,a){t.hadits=a}}},ot=e("fZjL"),lt=e.n(ot);s.a.use(st.a,at.a);var ct=function(t){return t<10?"0"+t:t},ut={namespaced:!0,state:function(){return{jadwalSholatHari:[],jadwalSholatBulan:[],jadwalSholatBesok:[],jadwalTerdekat:"",pesanError:"",pesanSholat:"",keySholat:"",jamSholat:"",sisaJam:"",sisaMenit:"",dateGregorian:"",dateHijria:"",Isha:"",Fajr:"",Dhuhr:"",Asr:"",Maghrib:""}},actions:{getDataJadwalsholat:function(t,a){var e=t.commit,s=t.rootState;return new X.a(function(t,n){at.a.get("https://api.pray.zone/v2/times/this_month.json?city="+(a||s.ip.city)).then(function(a){var s,n,r;e("setJadwalBulan",a.data.results.datetime),e("setJadwalHari",(s=a.data.results.datetime,n=new Date,r=n.getFullYear()+"-"+ct(n.getMonth()+1)+"-"+ct(n.getDate()),s.filter(function(t){return t.date.gregorian===r}))),e("setJadwalBesok",function(t){var a=new Date,e=a.getFullYear()+"-"+ct(a.getMonth()+1)+"-"+ct(31===a.getDate()?"01":a.getDate()+1);return t.filter(function(t){return t.date.gregorian===e})}(a.data.results.datetime)),t(200)}).catch(function(t){n(t),e("setPesanerror",t)})})},setDataSholatHari:function(t){var a=t.commit,e=t.rootState.jadwalsholat.jadwalSholatHari[0];a("setDateGregorian",e.date.gregorian),a("setDateHijria",e.date.hijri),a("setIsha",e.times.Isha),a("setFajr",e.times.Fajr),a("setDhuhr",e.times.Dhuhr),a("setAsr",e.times.Asr),a("setMaghrib",e.times.Maghrib)},modMssg:function(t,a){var e=t.commit;switch(a){case"Sunset":case"Sunrise":case"Imsak":case"Midnight":e("setPesanSholat","Waktu ");break;default:e("setPesanSholat","Waktu sholat terdekat ")}},sholatTerdekat:function(t){var a=t.commit,e=t.rootState,s=t.dispatch,n=e.jadwalsholat.jadwalSholatHari[0].times,r=(new Date).toLocaleTimeString("en-GB",{hour:"numeric",minute:"numeric"}),i=lt()(n).sort(function(t,a){return parseFloat(n[t])-parseFloat(n[a])}).filter(function(t){return n[t]>=r});0===i.length&&(n=e.jadwalsholat.jadwalSholatBesok[0].times,i=lt()(n).sort(function(t,a){return parseFloat(n[t])-parseFloat(n[a])}).filter(function(t){return n[t]>="00:00"})),s("modMssg",i[0]),a("setKey",function(t){switch(t){case"Sunset":return"Matahari Terbenam";case"Sunrise":return"Matahari Terbit";case"Imsak":return"Imsak";case"Midnight":return"Tangah Malam";case"Asr":return"Asar";case"Dhuhr":return"Zuhur";case"Fajr":return"Subuh";case"Isha":return"Isya";case"Maghrib":return"Magrib";default:return"Error"}}(i[0])),a("setJamsholat",n[i[0]]);var o=n[i[0]].split(":"),l=r.split(":"),c=60*parseInt(o[0])+parseInt(o[1])-(60*parseInt(l[0])+parseInt(l[1])),u=Math.floor(c/60)+(c<0?24:0),d=c-60*(u-(c<0?24:0));a("setSisajam",u),a("setSisamenit",d)},tes:function(t){var a=t.rootState;console.log("hari ini",a.jadwalsholat.jadwalSholatHari)}},getters:{},mutations:{setJadwalHari:function(t,a){t.jadwalSholatHari=a},setJadwalBulan:function(t,a){t.jadwalSholatBulan=a},setJadwalTerdekat:function(t,a){t.jadwalTerdekat=a},setJadwalBesok:function(t,a){t.jadwalSholatBesok=a},setPesanerror:function(t,a){t.pesanError=a},setPesanSholat:function(t,a){t.pesanSholat=a},setKey:function(t,a){t.keySholat=a},setJamsholat:function(t,a){t.jamSholat=a},setSisajam:function(t,a){t.sisaJam=a},setSisamenit:function(t,a){t.sisaMenit=a},setDateGregorian:function(t,a){t.dateGregorian=a},setDateHijria:function(t,a){t.dateHijria=a},setIsha:function(t,a){t.Isha=a},setFajr:function(t,a){t.Fajr=a},setDhuhr:function(t,a){t.Dhuhr=a},setAsr:function(t,a){t.Asr=a},setMaghrib:function(t,a){t.Maghrib=a}}};s.a.use(v.a);var dt=new v.a.Store({modules:{ip:rt,hadits:it,jadwalsholat:ut}});e("7Cjr");s.a.config.productionTip=!1,new s.a({router:Z,store:dt,components:{App:j},template:"<App/>"}).$mount("#app")},"T8/q":function(t,a){},aORl:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.dd8c82b3c2559fbd5970.js.map