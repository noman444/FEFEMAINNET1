(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [18], {
        "06f1": function(t, e, a) {
            "use strict";
            a("1d32")
        },
        18: function(t, e) {},
        "1d32": function(t, e, a) {},
        2710: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-layout", { staticClass: "home-layout", attrs: { view: "lHh lpR lFf" } }, ["/" !== t.$route.path && "/promotions" !== t.$route.path ? a("q-header", { staticClass: "bg-transparent bg_header" }, [a("q-toolbar", [a("q-btn", { attrs: { icon: "menu", stretch: "", unelevated: "" }, on: { click: function(e) { t.showDrawer = !t.showDrawer } } }), a("q-toolbar-title", [t._v("\n          FEFE Financial Freedom\n        ")]), a("div", { staticClass: "row q-col-gutter-x-sm items-center" }, [a("div", { staticClass: "col-auto" }, [a("select-language")], 1), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://www.certik.com/", target: "_blank" } }, [a("q-img", { attrs: { width: "80px", src: "https://storage.googleapis.com/libero-cdn/public/icon/audited-by.webp" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("select-network")], 1), a("div", { staticClass: "col-auto" }, [a("button-wallet")], 1)])], 1)], 1) : t._e(), a("q-page-container", [a("transaction-channel"), a("router-view"), t.hasRef ? a("div", { staticClass: "text-center text-caption text-grey-6 q-py-sm" }, [t._v("Ref: " + t._s(t.referral))]) : t._e(), "/" !== t.$route.path && "/promotions" !== t.$route.path ? a("q-drawer", { attrs: { width: 250, "show-if-above": "", side: "left", "content-class": "main-menu" }, model: { value: t.showDrawer, callback: function(e) { t.showDrawer = e }, expression: "showDrawer" } }, [a("q-scroll-area", { staticClass: "fit", attrs: { "thumb-style": t.thumbStyle, "bar-style": t.barStyle } }, [a("div", { staticClass: "text-center" }, [a("q-img", { staticClass: "q-mb-sm", attrs: { src: "https://lh3.googleusercontent.com/vMiRPzUWYLct878zCXMt16Z9SFpwsn8cuSGVXVta0hatRrOinBZe5LvWufXzndfIQgrurQ=s85", width: "160px", contain: "" } })], 1), a("div", { staticClass: "text-center" }, ["" === t.tokenInfo.price ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : [a("span", { staticClass: "text-h5 text-green" }, [t._v("$" + t._s(t.tokenInfo.price.toFixed(6)))])]], 2), a("list-item", { staticClass: "q-mb-md", attrs: { items: t.menuItems, dense: "" } }), a("multichain-list"), a("div", { staticClass: "text-h6 text-grey-7 q-px-sm" }, [t._v(t._s(t.$t("External Links")))]), a("list-item", { attrs: { items: t.externalItems, dense: "" } })], 1)], 1) : t._e(), a("q-dialog", { attrs: { persistent: t.dialog.persistent, "transition-hide": "fade", "transition-show": "fade" }, model: { value: t.dialog.show, callback: function(e) { t.$set(t.dialog, "show", e) }, expression: "dialog.show" } }, [a(t.dialog.type, { tag: "component", attrs: { item: t.dialog.item }, on: { "update:item": function(e) { return t.$set(t.dialog, "item", e) }, apply: t.dialogApply, close: t.hideDialog } })], 1), a("q-page-sticky", { attrs: { position: "bottom-right", offset: [10, 10] } }, [a("a", { attrs: { href: "https://thoreum.capital?utm_source=libero&utm_medium=sticky-btn", target: "_blank" } }, [a("q-img", { staticClass: "q-mr-md", attrs: { src: "https://storage.googleapis.com/thoreum-cdn/public/coins/THOREUM.png", width: "40px" } })], 1)])], 1)], 1)
                },
                s = [],
                i = (a("e9c4"), a("2b0e")),
                n = a("5aac"),
                r = a.n(n),
                l = a("2eaf"),
                c = {
                    methods: {
                        async connectWallet() {
                            "undefined" === typeof window.web3Modal && (window.web3Modal = new r.a({ network: "binance", cacheProvider: !0, theme: { background: "rgb(39, 49, 56)", main: "rgb(199, 199, 199)", secondary: "rgb(136, 136, 136)", border: "rgba(195, 195, 195, 0.14)", hover: "rgb(16, 26, 32)" }, providerOptions: { injected: { display: { logo: "https://storage.googleapis.com/thor2-cdn/public/icons/metamask.webp", name: "Injected", description: "Connect with the provider in your Browser" }, package: null }, walletconnect: { package: l["a"], options: { rpc: i["a"].prototype.getRPCOptions() } } } }));
                            try {
                                let t = await window.web3Modal.connect();
                                await this.$store.dispatch("auth/connect", t)
                            } catch (t) { this.$root.$emit("showMessage", { type: "error", message: t }) }
                        },
                        async addTokenToMetamask(t) {
                            const e = window.ethereum;
                            if (e) try {
                                const a = await e.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: t.address, symbol: t.symbol, image: t.icon, decimals: t.decimals || t.decimal || 18 } } });
                                a && console.log("Token was added")
                            } catch (a) {}
                        }
                    },
                    mounted() {
                        let t = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
                        ['"injected"'].indexOf(t) >= 0 && this.connectWallet().catch(), this.$root.$on("connectWallet", this.connectWallet), this.$root.$on("addTokenToMetamask", this.addTokenToMetamask)
                    }
                },
                h = {
                    data() { return { dialog: { show: !1, type: "", item: null, persistent: !1, callback: void 0 } } },
                    methods: {
                        showMessage(t) {
                            try {
                                let e = t.status ? "success" : "failure";
                                t.message && 4001 === t.message.code && (t.message = "User denied transaction signature "), this.$q.notify({ icon: t.status ? "check_circle" : "warning_amber", color: t.status ? "indigo-9" : "blue-grey-9", message: t.transactionHash ? "Transaction " + e + ' <a href="' + this.getTxLink(t.transactionHash) + '" target="_blank" class="text-orange">View on BscScan</a>' : t.message, html: !0 })
                            } catch (e) { console.log("error", e) }
                        },
                        showDialog(t) { this.dialog = { show: !0, ...t } },
                        hideDialog() { this.dialog.show = !1 },
                        dialogApply(t) { this.dialog.callback && this.dialog.callback(t) }
                    },
                    mounted() { this.$root.$on("showDialog", this.showDialog), this.$root.$on("showMessage", this.showMessage) }
                },
                u = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-btn", t._b({ attrs: { icon: t.$q.screen.gt.xs ? "account_balance_wallet" : void 0, label: t.accountText, dense: "", "no-caps": "", "no-wrap": "", outline: "", "text-color": "white" }, on: { click: t.selectWallet } }, "q-btn", t.$attrs, !1))
                },
                m = [],
                g = a("2f62"),
                p = { computed: {...Object(g["b"])({ getAccountAddress: "auth/getAccount", isLogon: "auth/isLogon" }), accountText() { return this.isLogon ? this.shortAddress(this.getAccountAddress, 3) : this.$t("Connect") } }, methods: { selectWallet() { this.$root.$emit("connectWallet"), this.isLogon && this.$root.$emit("showDialog", { type: "card-user-wallet" }) } } },
                d = p,
                b = a("2877"),
                w = a("9c40"),
                f = a("eebe"),
                k = a.n(f),
                v = Object(b["a"])(d, u, m, !1, null, null, null),
                _ = v.exports;
            k()(v, "components", { QBtn: w["a"] });
            var q = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-list", t._b({}, "q-list", t.$attrs, !1), [t._l(t.items, (function(e, o) { return [e.route.indexOf("http") >= 0 ? [a("q-item", { key: o, class: e.itemClass, attrs: { href: e.route, tag: "a", target: "_blank" } }, [a("q-item-section", { attrs: { thumbnail: "" } }, [a("q-avatar", { staticClass: "q-ml-sm", attrs: { square: "" } }, [a("q-icon", { attrs: { name: e.icon, size: "24px" } })], 1)], 1), a("q-item-section", [a("q-item-label", { class: e.labelClass }, [t._v("\n            " + t._s(e.label) + "\n            "), e.badge ? a("q-badge", { attrs: { align: "top", color: e.badgeColor || "orange-8" } }, [t._v(t._s(e.badge))]) : t._e()], 1), e.desc ? a("q-item-label", { attrs: { lines: "2" } }, [t._v(t._s(e.desc))]) : t._e()], 1)], 1)] : [a("q-item", { key: o, class: e.itemClass, attrs: { to: e.route, exact: "" }, on: { click: function(a) { return t.onClicked(e) } } }, [a("q-item-section", { attrs: { thumbnail: "" } }, [a("q-avatar", { staticClass: "q-ml-sm", attrs: { square: "" } }, [a("q-icon", { attrs: { name: e.icon, size: "24px" } })], 1)], 1), a("q-item-section", [a("q-item-label", { class: e.labelClass }, [t._v("\n            " + t._s(e.label) + "\n            "), e.badge ? a("q-badge", { attrs: { align: "top", color: e.badgeColor || "orange-8" } }, [t._v(t._s(e.badge))]) : t._e()], 1), e.desc ? a("q-item-label", { attrs: { lines: "2" } }, [t._v(t._s(e.desc))]) : t._e()], 1)], 1)]] }))], 2)
                },
                $ = [],
                x = { props: { items: { type: Array, default: () => [] } }, methods: { onClicked(t) { this.$emit("clicked", t) } } },
                C = x,
                y = a("1c1c"),
                I = a("66e5"),
                Q = a("4074"),
                L = a("cb32"),
                D = a("0016"),
                S = a("0170"),
                O = a("58a81"),
                T = Object(b["a"])(C, q, $, !1, null, null, null),
                A = T.exports;
            k()(T, "components", { QList: y["a"], QItem: I["a"], QItemSection: Q["a"], QAvatar: L["a"], QIcon: D["a"], QItemLabel: S["a"], QBadge: O["a"] });
            var M = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", { staticClass: "q-mb-md" }, [a("div", { staticClass: "text-h6 text-grey-7 q-px-sm" }, [t._v(t._s(t.$t("Farming Wallets")))]), a("div", { staticClass: "q-pa-sm" }, [a("div", { staticClass: "column q-col-gutter-y-sm" }, [t._l(t.networkList, (function(e, o) { return [a("div", { staticClass: "col" }, [a("q-item", { key: o, staticClass: "rounded-borders", style: "background-color: " + e.config.bgColor, attrs: { dense: "", to: e.route, exact: "" } }, [a("q-item-section", [a("q-item-label", [a("span", { staticClass: "text-weight-bold" }, [t._v(t._s(e.label))]), e.badge ? a("q-badge", { attrs: { align: "top", color: e.badgeColor || "orange-8", floating: "" } }, [t._v(t._s(e.badge))]) : t._e(), e.balanceFiat ? a("div", [t._v("$" + t._s(e.balanceFiat.toLocaleString()))]) : t._e()], 1)], 1), a("q-item-section", { attrs: { thumbnail: "" } }, [a("q-avatar", { staticClass: "q-mr-sm", attrs: { round: "", color: "white" } }, [a("q-img", { attrs: { src: e.icon, contain: "", ratio: 1.3 } })], 1)], 1)], 1)], 1)] }))], 2)])])
                },
                F = [],
                E = { computed: {...Object(g["b"])({ getNetworks: "farm/getNetworks" }), networks() { return JSON.parse(JSON.stringify(this.getNetworks)) }, networkList() { return this.networks.filter((t => t.index > 0)).map((t => (t.route = "/wallets/" + t.name, t))) } } },
                B = E,
                N = a("068f"),
                j = Object(b["a"])(B, M, F, !1, null, null, null),
                R = j.exports;
            k()(j, "components", { QItem: I["a"], QItemSection: Q["a"], QItemLabel: S["a"], QBadge: O["a"], QAvatar: L["a"], QImg: N["a"] });
            var W = a("1924"),
                J = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("q-btn", { staticClass: "q-px-xs", attrs: { unelevated: "", outline: "", dense: "", "no-caps": "" } }, [a("q-icon", { attrs: { name: "img:" + t.currentNetwork.icon, size: "24px" } }), t.$q.screen.gt.xs ? a("span", { staticClass: "q-ml-sm" }, [t._v(t._s(t.currentNetwork.label))]) : t._e(), a("q-menu", { attrs: { "auto-close": "", fit: "", "max-width": "200px" } }, [a("q-list", { staticClass: "language-bar", attrs: { separator: "" } }, t._l(t.networkOptions, (function(e, o) { return a("q-item", { key: o, attrs: { clickable: "" }, on: { click: function(a) { return t.onClicked(e) } } }, [a("q-item-section", { attrs: { side: "" } }, [a("q-avatar", { attrs: { square: "", size: "24px" } }, [a("q-img", { attrs: { src: e.icon } })], 1)], 1), a("q-item-section", [a("q-item-label", [t._v(t._s(e.label))])], 1)], 1) })), 1)], 1)], 1)], 1)
                },
                H = [],
                U = { data() { return { current: parseInt(56) } }, computed: { refQuery() { let t = this.$q.cookies.get("referrer"); return t ? "?ref=" + this.$q.cookies.get("referrer") : "" }, networkOptions() { return this.$networkItems.map((t => ({ networkId: t.chainId, label: t.chainName, desc: t.mainSiteUrl, icon: t.iconUrls[0], route: t.mainSiteUrl + this.refQuery }))) }, currentNetwork() { return this.networkOptions.find((t => t.networkId === this.current)) } }, methods: { onClicked(t) { t.networkId !== this.current ? window.location.href = t.route : (this.$root.$emit("connectWallet"), "/app" !== this.$route.path && this.$router.push("/app")), this.$emit("close") } } },
                P = U,
                z = a("4e73"),
                V = Object(b["a"])(P, J, H, !1, null, null, null),
                Y = V.exports;
            k()(V, "components", { QBtn: w["a"], QIcon: D["a"], QMenu: z["a"], QList: y["a"], QItem: I["a"], QItemSection: Q["a"], QAvatar: L["a"], QImg: N["a"], QItemLabel: S["a"] });
            var G = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", t._b({}, "div", t.$attrs, !1), [a("div", { staticClass: "row items-center q-col-gutter-x-md q-mb-md q-px-md" }, [a("div", { staticClass: "col" }, [a("marquee-text", { staticClass: "rounded-borders-left", attrs: { duration: 200, paused: t.paused }, on: { mouseover: function(e) { t.paused = !0 }, mouseleave: function(e) { t.paused = !1 } } }, [t._l(t.getdata, (function(e, o) { return [a("q-btn", { key: o, staticClass: "boxshadownone", attrs: { "no-caps": "", target: "_blank", href: "https://bscscan.com/tx/" + e.transaction_hash, type: "a" } }, [a("span", [t._v("BUY "), a("span", { staticStyle: { color: "#28E0B2" } }, [t._v(t._s(e.amount) + " FEFE ")]), t._v(" with " + t._s(e.bnb_amount) + " BNB "), a("span", { staticStyle: { color: "#28E0B2" } }, [t._v("($" + t._s(e.bnb_value) + ")")]), t._v(" " + t._s(e.bullet))])])] }))], 2)], 1)])])
                },
                K = [],
                X = a("0150"),
                Z = a.n(X),
                tt = {
                    components: { MarqueeText: Z.a },
                    data() { return { paused: !1 } },
                    computed: {...Object(g["b"])({ getTransactionChannel: "farm/getTransactionChannel" }),
                        getdata() {
                            let t, e = [];
                            return JSON.parse(JSON.stringify(this.getTransactionChannel)).forEach((a => {
                                t = "";
                                for (let e = 1; e <= Math.round(a.bnb_amount); e++) t += "🟢";
                                e.push({ bnb_amount: parseFloat(parseFloat(a.bnb_amount).toFixed(2)).toLocaleString(), amount: parseFloat(parseFloat(a.amount).toFixed(2)).toLocaleString(), bnb_value: parseFloat(parseFloat(a.bnb_value).toFixed(2)).toLocaleString(), transaction_hash: a.transaction_hash, bullet: t })
                            })), e
                        }
                    },
                    methods: { fetchData() { this.$store.dispatch("farm/fetchTransactionChannel") } },
                    mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) },
                    beforeDestroy() { this.interval && clearInterval(this.interval) }
                },
                et = tt,
                at = Object(b["a"])(et, G, K, !1, null, null, null),
                ot = at.exports;
            k()(at, "components", { QBtn: w["a"] });
            var st = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", { staticClass: "q-mb-md" }, [a("div", { staticClass: "text-h6 text-grey-7 q-px-sm" }, [t._v(t._s(t.$t("Farming Wallets")))]), a("div", { staticClass: "q-pa-sm" }, [a("div", { staticClass: "column q-col-gutter-y-sm" }, [a("q-list", [t._l(t.getdata, (function(e, o) { return [e.id > 0 ? a("q-item", { key: o, staticClass: "rounded-borders q-mt-sm", style: "background-color: " + e.color, attrs: { dense: "", to: e.route, exact: "" } }, [a("q-item-section", [a("q-item-label", [a("span", { staticClass: "text-weight-bold" }, [t._v(t._s(e.name))]), e.value ? a("div", [t._v("$" + t._s(parseFloat(parseFloat(e.value).toFixed(2)).toLocaleString()))]) : t._e()])], 1), a("q-item-section", { attrs: { thumbnail: "" } }, [a("q-avatar", { staticClass: "q-mr-sm", attrs: { round: "", color: "white" } }, [a("q-img", { attrs: { src: e.logo, contain: "", ratio: 1.3 } })], 1)], 1)], 1) : t._e()] }))], 2)], 1)])])
                },
                it = [],
                nt = { computed: {...Object(g["b"])({ getMultichainList: "farm/getMultichainList" }), getdata() { return JSON.parse(JSON.stringify(this.getMultichainList)) } }, methods: { fetchData() { this.$store.dispatch("farm/fetchMultichainList") } }, mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                rt = nt,
                lt = Object(b["a"])(rt, st, it, !1, null, null, null),
                ct = lt.exports;
            k()(lt, "components", { QList: y["a"], QItem: I["a"], QItemSection: Q["a"], QItemLabel: S["a"], QAvatar: L["a"], QImg: N["a"] });
            var ht = { components: { NetworkList: R, ListItem: A, ButtonWallet: _, SelectLanguage: W["a"], SelectNetwork: Y, TransactionChannel: ot, MultichainList: ct }, mixins: [c, h], computed: {...Object(g["b"])({ isLogon: "auth/isLogon", getAccount: "auth/getAccount", getTokenInfo: "farm/getTokenInfo" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, hasRef() { return !!this.$q.cookies.get("referrer") }, referral() { return this.hasRef ? this.shortAddress(this.$q.cookies.get("referrer")) : "" }, menuItems() { return [{ label: this.$t("home"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/home.webp", route: "/?lang=" + this.$i18n.locale }, { label: this.$t("Swap Libero"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/swap.webp", route: "https://thoreum.capital/exchange/?outputCurrency=" + this.$contracts.mainToken.address }, { label: this.$t("Dashboard"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/dashboard.webp", route: "/app?lang=" + this.$i18n.locale }, { label: this.$t("Account"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/account.webp", route: "/account?lang=" + this.$i18n.locale }, { label: this.$t("FEFE Bank"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/bank.webp", route: "/FEFE-bank?lang=" + this.$i18n.locale, badge: "Hot", badgeColor: "red" }, { label: this.$t("Smart Bond"), icon: "img:/icons/diploma.webp", route: "/smart-bond?lang=" + this.$i18n.locale, badgeColor: "purple" }, { label: this.$t("FEFE DAO"), icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/vote.webp", route: "https://snapshot.org/#/liberofinancial.eth" }, { label: this.$t("Staking"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/staking.webp", route: "/staking?lang=" + this.$i18n.locale, badge: "New" }, { label: this.$t("Promotion"), icon: "img:/icons/promotion.png", route: "/promotions?lang=" + this.$i18n.locale }, { label: this.$t("Buybacks"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/buy-back.webp", route: "/buybacks?lang=" + this.$i18n.locale }, { label: this.$t("Referral"), icon: "img:/icons/referral.webp", route: "/referral?lang=" + this.$i18n.locale }, { label: this.$t("wFEFE"), icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/WLIBERO.webp", route: "/wFEFE?lang=" + this.$i18n.locale, badge: "Coming", badgeColor: "green" }, { label: this.$t("Multichain Farming"), icon: "img:/icons/multichain.svg", route: "/multichain-farming?lang=" + this.$i18n.locale }] }, externalItems() { return [{ icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/documents.webp", label: this.$t("Document"), route: this.$t("linkdocument") }, { icon: "img:https://storage.googleapis.com/thor2-cdn/public/coins/THOREUM.png", label: "Thoreum Exchange", route: "https://thoreum.capital/exchange/?outputCurrency=" + this.$contracts.mainToken.address }, { icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/pancake.webp", label: "PancakeSwap", route: "https://pancakeswap.finance/swap?outputCurrency=" + this.$contracts.mainToken.address }, { icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/coinmarketcap.webp", label: "CoinMarketCap", route: "https://coinmarketcap.com/" }, { icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/defillama-icon.svg", label: "Defi Llama", route: "https://defillama.com/" }, { icon: "img:https://storage.googleapis.com/libero-cdn/public/icon/dex-tool.png", label: "DexTool Chart", route: "https://www.dextools.io/" }, { icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/twitter.webp", label: "Twitter", route: "https://twitter.com/" }, { icon: "img:https://storage.googleapis.com/thor2-cdn/public/icons/telegram.webp", label: "Telegram", route: "https://t.me/" }, { icon: "img:/md2.png", label: "Medium", route: "https://medium.com/" }, { icon: "img:/yt.png", label: "Youtube", route: "https://www.youtube.com/" }, { icon: "img:/fb.png", label: "Facebook", route: "https://www.facebook.com/" }, { icon: "img:/discord.png", label: "Discord", route: this.$t("discordlink") }, { icon: "img:https://app.knightswap.financial/images/knight/k4.svg", label: "KnightSwap", route: "https://app.knightswap.financial/" }] } }, data() { return { showDrawer: this.$q.screen.gt.sm, thumbStyle: { right: "4px", borderRadius: "5px", backgroundColor: "rgba(13,15,40,0.73)", width: "5px", opacity: .75 }, barStyle: { right: "2px", borderRadius: "9px", backgroundColor: "#027be3", width: "9px", opacity: .2 } } }, watch: {}, methods: { fetchAllData() { this.$store.dispatch("farm/fetchAllData", this.getAccount) }, loadAllData() { this.fetchAllData(), this.interval = setInterval(this.fetchAllData, 3e4) } }, mounted() { this.loadAllData(), "airdrop" === this.$route.query.claim && this.$root.$emit("showDialog", { type: "card-air-drop", persistent: !0 }) }, beforeCreate() { this.$route.query.ref && this.$q.cookies.set("referrer", this.$route.query.ref.toString(), { expires: 30 }) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                ut = ht,
                mt = (a("06f1"), a("4d5a")),
                gt = a("e359"),
                pt = a("65c6"),
                dt = a("6ac5"),
                bt = a("09e3"),
                wt = a("9404"),
                ft = a("4983"),
                kt = a("293e"),
                vt = a("24e8"),
                _t = a("de5e"),
                qt = Object(b["a"])(ut, o, s, !1, null, "042f43d7", null);
            e["default"] = qt.exports;
            k()(qt, "components", { QLayout: mt["a"], QHeader: gt["a"], QToolbar: pt["a"], QBtn: w["a"], QToolbarTitle: dt["a"], QImg: N["a"], QPageContainer: bt["a"], QDrawer: wt["a"], QScrollArea: ft["a"], QSkeleton: kt["a"], QDialog: vt["a"], QPageSticky: _t["a"] })
        }
    }
]);