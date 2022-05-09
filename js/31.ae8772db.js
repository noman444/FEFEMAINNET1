(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{de04:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"row justify-center items-stretch"},[s("div",{staticClass:"container-box text-center q-mb-lg"},[s("div",{staticClass:"text-h4"},[t._v(t._s(t.$t("Smart Bond 1")))]),s("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.$t("Smart Bond 2")))]),s("div",[t._v(t._s(t.$t("Smart Bond 3")))])]),t.bondList.length>0?s("div",{staticClass:"container-box"},[s("div",{staticClass:"row justify-center q-col-gutter-md"},[t._l(t.bondList,(function(n,e){return[s("div",{key:e,class:t.bondList.length>1?"col-xs-12 col-md-4":"col-xs-12 col-md-6"},[s("bonding-card",{attrs:{slug:n.slug}})],1)]}))],2)]):t._e(),s("div",{staticClass:"row justify-center q-mt-xl"},[s("div",{staticClass:"col-xs-12 col-md-8"},[s("q-card",{staticClass:"grow-box"},[s("q-card-section",[s("div",[s("p",{staticClass:"text-h4"},[t._v(t._s(t.$t("Smart Bond 4")))]),s("p",{staticClass:"text-h6"},[t._v(t._s(t.$t("Smart Bond 5")))]),s("ul",[s("li",[t._v(t._s(t.$t("Smart Bond 6")))]),s("li",[t._v(t._s(t.$t("Smart Bond 7")))]),s("li",[t._v(t._s(t.$t("Smart Bond 8")))]),s("li",[t._v(t._s(t.$t("Smart Bond 9")))]),s("li",[t._v(t._s(t.$t("Smart Bond 10")))]),s("li",[t._v(t._s(t.$t("Smart Bond 11")))]),s("li",[t._v(t._s(t.$t("Smart Bond 12")))])]),s("p",{staticClass:"text-h6"},[t._v(t._s(t.$t("Smart Bond 13")))]),s("ul",[s("li",[t._v(t._s(t.$t("Smart Bond 14")))]),s("li",[t._v(t._s(t.$t("Smart Bond 15")))]),s("li",[t._v(t._s(t.$t("Smart Bond 16")))]),s("li",[t._v(t._s(t.$t("Smart Bond 17")))]),s("li",[t._v(t._s(t.$t("Smart Bond 18")))]),s("li",[t._v(t._s(t.$t("Smart Bond 19")))]),s("li",[t._v(t._s(t.$t("Smart Bond 20")))]),s("li",[t._v(t._s(t.$t("Smart Bond 21")))]),s("li",[t._v(t._s(t.$t("Smart Bond 22")))]),s("li",[t._v(t._s(t.$t("Smart Bond 23")))]),s("li",[t._v(t._s(t.$t("Smart Bond 24")))])])]),s("div",{staticClass:"q-mt-md"},[s("a",{staticClass:"text-orange",attrs:{href:"https://docs.libero.financial/libero-smart-bond",target:"_blank"}},[t._v(t._s(t.$t("Smart Bond 25")))])])])],1)],1)])])])},a=[],o=(s("e9c4"),s("2f62")),i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("q-card",{staticClass:"grow-box fit",attrs:{flat:""}},[s("q-toolbar",[s("q-img",{attrs:{src:t.stakingToken.icon,width:"38px"}}),s("q-toolbar-title",{staticClass:"text-weight-bold"},[t._v(t._s(t.bondInfo.name))])],1),s("q-list",[s("q-item",[s("q-item-section",[s("q-item-label",{staticClass:"text-h6"},[t._v("Discount")]),s("q-item-label",{staticClass:"text-green text-h4"},[t._v(t._s(t.discountRate)+"%")])],1)],1),s("q-item",[s("q-item-section",[s("q-item-label",[t._v("Available FEFE")])],1),s("q-item-section",{staticClass:"text-right"},[t.isBondActive?s("q-item-label",[t._v(t._s(parseFloat(parseFloat(t.bondInfo.maxRewardToBuy).toFixed(2)).toLocaleString()))]):s("q-item-label",{staticClass:"text-red"},[t._v("SOLD OUT")])],1)],1),s("q-item",[s("q-item-section",[s("q-item-label",[t._v("Vesting period")])],1),s("q-item-section",{staticClass:"text-right"},[s("q-item-label",[t._v(t._s(t.timeText))])],1)],1)],1),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"fit q-px-md",attrs:{unelevated:"",color:"orange","no-caps":"",to:"/smart-bond/"+t.bondInfo.slug}},[t._v("Bond")])],1),s("q-card-actions",{staticClass:"grow-box"},[t._v("\n    My bonds: "+t._s(t.bondInfo.bondCount)+"\n  ")])],1)},r=[],d={props:{slug:{type:String,required:!0}},data(){return{payload:{amount:""},currentTab:"pending"}},computed:{...Object(o["b"])({isLogon:"auth/isLogon",getAccount:"auth/getAccount",getTokenInfo:"farm/getTokenInfo",getToken:"farm/getToken",getBondInfo:"bond/getBondInfo"}),tokenInfo(){return JSON.parse(JSON.stringify(this.getTokenInfo))},bondInfo(){return JSON.parse(JSON.stringify(this.getBondInfo(this.slug)))},bondPriceFiat(){return this.tokenInfo.price*this.bondInfo.discountRateNumerator/1e4},validMin(){return Math.max(1e-6,this.bondInfo.minWbnb)},validMax(){return Math.min(this.bondInfo.maxWbnb,this.bondInfo.maxWbnbToBuy)},isBondActive(){return!this.bondInfo.isPaused&&this.validMin<=this.validMax},stakingToken(){return this.getToken(this.bondInfo.stakingToken)},discountRate(){return(1e4-this.bondInfo.discountRateNumerator)/100},timeText(){return this.shortInterval(this.bondInfo.vestingPeriod)}},methods:{doSetMax(){}}},l=d,c=s("2877"),m=s("f09f"),_=s("65c6"),b=s("068f"),u=s("6ac5"),v=s("1c1c"),g=s("66e5"),f=s("4074"),h=s("0170"),B=s("4b7e"),x=s("9c40"),S=s("eebe"),p=s.n(S),q=Object(c["a"])(l,i,r,!1,null,null,null),C=q.exports;p()(q,"components",{QCard:m["a"],QToolbar:_["a"],QImg:b["a"],QToolbarTitle:u["a"],QList:v["a"],QItem:g["a"],QItemSection:f["a"],QItemLabel:h["a"],QCardActions:B["a"],QBtn:x["a"]});var I={components:{BondingCard:C},computed:{...Object(o["b"])({isLogon:"auth/isLogon",getAccount:"auth/getAccount",getBondList:"bond/getBondList"}),bondList(){return JSON.parse(JSON.stringify(this.getBondList))}}},$=I,k=s("9989"),T=s("a370"),w=Object(c["a"])($,e,a,!1,null,null,null);n["default"]=w.exports;p()(w,"components",{QPage:k["a"],QCard:m["a"],QCardSection:T["a"]})}}]);