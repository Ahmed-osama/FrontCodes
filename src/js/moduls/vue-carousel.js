/*!
 * vue-carousel v0.6.5
 * (c) 2017 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueCarousel = t() : e.VueCarousel = t()
}(this, function() {
    return function(e) {
        function t(a) {
            if (n[a]) return n[a].exports;
            var i = n[a] = {
                exports: {},
                id: a,
                loaded: !1
            };
            return e[a].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Slide = t.Carousel = void 0;
        var i = n(1),
            r = a(i),
            o = n(21),
            s = a(o),
            u = function(e) {
                e.component("carousel", r.default), e.component("slide", s.default)
            };
        t.default = {
            install: u
        }, t.Carousel = r.default, t.Slide = s.default
    }, function(e, t, n) {
        function a(e) {
            n(2)
        }
        var i = n(7)(n(8), n(26), a, null, null);
        e.exports = i.exports
    }, function(e, t, n) {
        var a = n(3);
        "string" == typeof a && (a = [
            [e.id, a, ""]
        ]), a.locals && (e.exports = a.locals);
        n(5)("70056466", a, !0)
    }, function(e, t, n) {
        t = e.exports = n(4)(), t.push([e.id, ".VueCarousel{position:relative}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:flex;flex-direction:row;backface-visibility:hidden}", ""])
    }, function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var a = {}, i = 0; i < this.length; i++) {
                    var r = this[i][0];
                    "number" == typeof r && (a[r] = !0)
                }
                for (i = 0; i < t.length; i++) {
                    var o = t[i];
                    "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                }
            }, e
        }
    }, function(e, t, n) {
        function a(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    a = d[n.id];
                if (a) {
                    a.refs++;
                    for (var i = 0; i < a.parts.length; i++) a.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) a.parts.push(r(n.parts[i]));
                    a.parts.length > n.parts.length && (a.parts.length = n.parts.length)
                } else {
                    for (var o = [], i = 0; i < n.parts.length; i++) o.push(r(n.parts[i]));
                    d[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }

        function i() {
            var e = document.createElement("style");
            return e.type = "text/css", c.appendChild(e), e
        }

        function r(e) {
            var t, n, a = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (a) {
                if (h) return v;
                a.parentNode.removeChild(a)
            }
            if (g) {
                var r = p++;
                a = f || (f = i()), t = o.bind(null, a, r, !1), n = o.bind(null, a, r, !0)
            } else a = i(), t = s.bind(null, a), n = function() {
                a.parentNode.removeChild(a)
            };
            return t(e),
                function(a) {
                    if (a) {
                        if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap) return;
                        t(e = a)
                    } else n()
                }
        }

        function o(e, t, n, a) {
            var i = n ? "" : a.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, i);
            else {
                var r = document.createTextNode(i),
                    o = e.childNodes;
                o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
            }
        }

        function s(e, t) {
            var n = t.css,
                a = t.media,
                i = t.sourceMap;
            if (a && e.setAttribute("media", a), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var u = "undefined" != typeof document,
            l = n(6),
            d = {},
            c = u && (document.head || document.getElementsByTagName("head")[0]),
            f = null,
            p = 0,
            h = !1,
            v = function() {},
            g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function(e, t, n) {
            h = n;
            var i = l(e, t);
            return a(i),
                function(t) {
                    for (var n = [], r = 0; r < i.length; r++) {
                        var o = i[r],
                            s = d[o.id];
                        s.refs--, n.push(s)
                    }
                    t ? (i = l(e, t), a(i)) : i = [];
                    for (var r = 0; r < n.length; r++) {
                        var s = n[r];
                        if (0 === s.refs) {
                            for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                            delete d[s.id]
                        }
                    }
                }
        };
        var m = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }, function(e, t) {
        e.exports = function(e, t) {
            for (var n = [], a = {}, i = 0; i < t.length; i++) {
                var r = t[i],
                    o = r[0],
                    s = r[1],
                    u = r[2],
                    l = r[3],
                    d = {
                        id: e + ":" + i,
                        css: s,
                        media: u,
                        sourceMap: l
                    };
                a[o] ? a[o].parts.push(d) : n.push(a[o] = {
                    id: o,
                    parts: [d]
                })
            }
            return n
        }
    }, function(e, t) {
        e.exports = function(e, t, n, a, i) {
            var r, o = e = e || {},
                s = typeof e.default;
            "object" !== s && "function" !== s || (r = e, o = e.default);
            var u = "function" == typeof o ? o.options : o;
            t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns), a && (u._scopeId = a);
            var l;
            if (i ? (l = function(e) {
                    e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
                }, u._ssrRegister = l) : n && (l = n), l) {
                var d = u.functional,
                    c = d ? u.render : u.beforeCreate;
                d ? u.render = function(e, t) {
                    return l.call(t), c(e, t)
                } : u.beforeCreate = c ? [].concat(c, l) : [l]
            }
            return {
                esModule: r,
                exports: o,
                options: u
            }
        }
    }, function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(9),
            r = a(i),
            o = n(10),
            s = a(o),
            u = n(11),
            l = a(u),
            d = n(16),
            c = a(d),
            f = n(21),
            p = a(f);
        t.default = {
            name: "carousel",
            beforeUpdate: function() {
                this.computeCarouselWidth()
            },
            components: {
                Navigation: l.default,
                Pagination: c.default,
                Slide: p.default
            },
            data: function() {
                return {
                    browserWidth: null,
                    carouselWidth: null,
                    currentPage: 0,
                    dragOffset: 0,
                    dragStartX: 0,
                    mousedown: !1,
                    slideCount: 0
                }
            },
            mixins: [r.default],
            props: {
                easing: {
                    type: String,
                    default: "ease"
                },
                minSwipeDistance: {
                    type: Number,
                    default: 8
                },
                navigationClickTargetSize: {
                    type: Number,
                    default: 8
                },
                navigationEnabled: {
                    type: Boolean,
                    default: !1
                },
                navigationNextLabel: {
                    type: String,
                    default: "▶"
                },
                navigationPrevLabel: {
                    type: String,
                    default: "◀"
                },
                paginationActiveColor: {
                    type: String,
                    default: "#000000"
                },
                paginationColor: {
                    type: String,
                    default: "#efefef"
                },
                paginationEnabled: {
                    type: Boolean,
                    default: !0
                },
                paginationPadding: {
                    type: Number,
                    default: 10
                },
                paginationSize: {
                    type: Number,
                    default: 10
                },
                perPage: {
                    type: Number,
                    default: 2
                },
                perPageCustom: {
                    type: Array
                },
                scrollPerPage: {
                    type: Boolean,
                    default: !1
                },
                speed: {
                    type: Number,
                    default: 500
                },
                loop: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                breakpointSlidesPerPage: function() {
                    if (!this.perPageCustom) return this.perPage;
                    var e = this.perPageCustom,
                        t = this.browserWidth,
                        n = e.sort(function(e, t) {
                            return e[0] > t[0] ? -1 : 1
                        }),
                        a = n.filter(function(e) {
                            return t >= e[0]
                        }),
                        i = a[0] && a[0][1];
                    return i || this.perPage
                },
                canAdvanceForward: function() {
                    return this.loop || this.currentPage < this.pageCount - 1
                },
                canAdvanceBackward: function() {
                    return this.loop || this.currentPage > 0
                },
                currentPerPage: function() {
                    return !this.perPageCustom || this.$isServer ? this.perPage : this.breakpointSlidesPerPage
                },
                currentOffset: function() {
                    var e = this.currentPage,
                        t = this.slideWidth,
                        n = this.dragOffset,
                        a = this.scrollPerPage ? e * t * this.currentPerPage : e * t;
                    return (a + n) * -1
                },
                isHidden: function() {
                    return this.carouselWidth <= 0
                },
                pageCount: function() {
                    var e = this.slideCount,
                        t = this.currentPerPage;
                    if (this.scrollPerPage) {
                        var n = Math.ceil(e / t);
                        return n < 1 ? 1 : n
                    }
                    return e - (this.currentPerPage - 1)
                },
                slideWidth: function() {
                    var e = this.carouselWidth,
                        t = this.currentPerPage;
                    return e / t
                },
                transitionStyle: function() {
                    return this.speed / 1e3 + "s " + this.easing + " transform"
                }
            },
            methods: {
                getNextPage: function() {
                    return this.currentPage < this.pageCount - 1 ? this.currentPage + 1 : this.loop ? 0 : this.currentPage
                },
                getPreviousPage: function() {
                    return this.currentPage > 0 ? this.currentPage - 1 : this.loop ? this.pageCount - 1 : this.currentPage
                },
                advancePage: function(e) {
                    e && "backward" === e && this.canAdvanceBackward ? this.goToPage(this.getPreviousPage()) : (!e || e && "backward" !== e) && this.canAdvanceForward && this.goToPage(this.getNextPage())
                },
                attachMutationObserver: function() {
                    var e = this,
                        t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    if (t) {
                        var n = {
                            attributes: !0,
                            data: !0
                        };
                        this.mutationObserver = new t(function() {
                            e.$nextTick(function() {
                                e.computeCarouselWidth()
                            })
                        }), this.$parent.$el && this.mutationObserver.observe(this.$parent.$el, n)
                    }
                },
                detachMutationObserver: function() {
                    this.mutationObserver && this.mutationObserver.disconnect()
                },
                getBrowserWidth: function() {
                    return this.browserWidth = window.innerWidth, this.browserWidth
                },
                getCarouselWidth: function() {
                    return this.carouselWidth = this.$el && this.$el.clientWidth || 0, this.carouselWidth
                },
                getSlideCount: function() {
                    this.slideCount = this.$slots && this.$slots.default && this.$slots.default.filter(function(e) {
                        return e.tag && e.tag.indexOf("slide") > -1
                    }).length || 0
                },
                goToPage: function(e) {
                    e >= 0 && e <= this.pageCount && (this.currentPage = e, this.$emit("pageChange", this.currentPage))
                },
                handleMousedown: function(e) {
                    e.touches || e.preventDefault(), this.mousedown = !0, this.dragStartX = "ontouchstart" in window ? e.touches[0].clientX : e.clientX
                },
                handleMouseup: function() {
                    this.mousedown = !1, this.dragOffset = 0
                },
                handleMousemove: function(e) {
                    if (this.mousedown) {
                        var t = "ontouchstart" in window ? e.touches[0].clientX : e.clientX,
                            n = this.dragStartX - t;
                        this.dragOffset = n, this.dragOffset > this.minSwipeDistance ? (this.handleMouseup(), this.advancePage()) : this.dragOffset < -this.minSwipeDistance && (this.handleMouseup(), this.advancePage("backward"))
                    }
                },
                computeCarouselWidth: function() {
                    this.getSlideCount(), this.getBrowserWidth(), this.getCarouselWidth(), this.setCurrentPageInBounds()
                },
                setCurrentPageInBounds: function() {
                    if (!this.canAdvanceForward) {
                        var e = this.pageCount - 1;
                        this.currentPage = e >= 0 ? e : 0
                    }
                }
            },
            mounted: function() {
                this.$isServer || (window.addEventListener("resize", (0, s.default)(this.computeCarouselWidth, 16)), "ontouchstart" in window ? (this.$el.addEventListener("touchstart", this.handleMousedown), this.$el.addEventListener("touchend", this.handleMouseup), this.$el.addEventListener("touchmove", this.handleMousemove)) : (this.$el.addEventListener("mousedown", this.handleMousedown), this.$el.addEventListener("mouseup", this.handleMouseup), this.$el.addEventListener("mousemove", this.handleMousemove))), this.attachMutationObserver(), this.computeCarouselWidth()
            },
            destroyed: function() {
                this.$isServer || (this.detachMutationObserver(), window.removeEventListener("resize", this.getBrowserWidth), "ontouchstart" in window ? this.$el.removeEventListener("touchmove", this.handleMousemove) : this.$el.removeEventListener("mousemove", this.handleMousemove))
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            props: {
                autoplay: {
                    type: Boolean,
                    default: !1
                },
                autoplayTimeout: {
                    type: Number,
                    default: 2e3
                },
                autoplayHoverPause: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    autoplayInterval: null
                }
            },
            destroyed: function() {
                this.$isServer || (this.$el.removeEventListener("mouseenter", this.pauseAutoplay), this.$el.removeEventListener("mouseleave", this.startAutoplay))
            },
            methods: {
                pauseAutoplay: function() {
                    this.autoplayInterval && (this.autoplayInterval = clearInterval(this.autoplayInterval))
                },
                startAutoplay: function() {
                    this.autoplay && (this.autoplayInterval = setInterval(this.advancePage, this.autoplayTimeout))
                }
            },
            mounted: function() {
                !this.$isServer && this.autoplayHoverPause && (this.$el.addEventListener("mouseenter", this.pauseAutoplay), this.$el.addEventListener("mouseleave", this.startAutoplay)), this.startAutoplay()
            }
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
            var a = void 0;
            return function() {
                var i = void 0,
                    r = function() {
                        a = null, n || e.apply(i)
                    },
                    o = n && !a;
                clearTimeout(a), a = setTimeout(r, t), o && e.apply(i)
            }
        };
        t.default = n
    }, function(e, t, n) {
        function a(e) {
            n(12)
        }
        var i = n(7)(n(14), n(15), a, "data-v-7fed18e9", null);
        e.exports = i.exports
    }, function(e, t, n) {
        var a = n(13);
        "string" == typeof a && (a = [
            [e.id, a, ""]
        ]), a.locals && (e.exports = a.locals);
        n(5)("58a44a73", a, !0)
    }, function(e, t, n) {
        t = e.exports = n(4)(), t.push([e.id, ".VueCarousel-navigation-button[data-v-7fed18e9]{position:absolute;top:50%;box-sizing:border-box;color:#000;text-decoration:none}.VueCarousel-navigation-next[data-v-7fed18e9]{right:0;transform:translateY(-50%) translateX("+(document.querySelector('html').getAttribute('dir') === "rtl" ? -1 * 100 : 100)+"%)}.VueCarousel-navigation-prev[data-v-7fed18e9]{left:0;transform:translateY(-50%) translateX("+(document.querySelector('html').getAttribute('dir') === "rtl" ? -1 * -100 : -100)+"%)}.VueCarousel-navigation--disabled[data-v-7fed18e9]{opacity:.5;cursor:default}", ""])
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            name: "navigation",
            data: function() {
                return {
                    parentContainer: this.$parent
                }
            },
            props: {
                clickTargetSize: {
                    type: Number,
                    default: 8
                },
                nextLabel: {
                    type: String,
                    default: "▶"
                },
                prevLabel: {
                    type: String,
                    default: "◀"
                }
            },
            computed: {
                canAdvanceForward: function() {
                    return this.parentContainer.canAdvanceForward || !1
                },
                canAdvanceBackward: function() {
                    return this.parentContainer.canAdvanceBackward || !1
                }
            },
            methods: {
                triggerPageAdvance: function(e) {
                    e ? this.$parent.advancePage(e) : this.$parent.advancePage()
                }
            }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "VueCarousel-navigation"
                }, [n("a", {
                    staticClass: "VueCarousel-navigation-button VueCarousel-navigation-prev",
                    class: {
                        "VueCarousel-navigation--disabled": !e.canAdvanceBackward
                    },
                    style: "padding: " + e.clickTargetSize + "px; margin-right: -" + e.clickTargetSize + "px;",
                    attrs: {
                        href: "#"
                    },
                    domProps: {
                        innerHTML: e._s(e.prevLabel)
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.triggerPageAdvance("backward")
                        }
                    }
                }), e._v(" "), n("a", {
                    staticClass: "VueCarousel-navigation-button VueCarousel-navigation-next",
                    class: {
                        "VueCarousel-navigation--disabled": !e.canAdvanceForward
                    },
                    style: "padding: " + e.clickTargetSize + "px; margin-left: -" + e.clickTargetSize + "px;",
                    attrs: {
                        href: "#"
                    },
                    domProps: {
                        innerHTML: e._s(e.nextLabel)
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault(), e.triggerPageAdvance()
                        }
                    }
                })])
            },
            staticRenderFns: []
        }
    }, function(e, t, n) {
        function a(e) {
            n(17)
        }
        var i = n(7)(n(19), n(20), a, "data-v-7e42136f", null);
        e.exports = i.exports
    }, function(e, t, n) {
        var a = n(18);
        "string" == typeof a && (a = [
            [e.id, a, ""]
        ]), a.locals && (e.exports = a.locals);
        n(5)("cc30be7c", a, !0)
    }, function(e, t, n) {
        t = e.exports = n(4)(), t.push([e.id, ".VueCarousel-pagination[data-v-7e42136f]{width:100%;float:left;text-align:center}.VueCarousel-dot-container[data-v-7e42136f]{display:inline-block;margin:0 auto}.VueCarousel-dot[data-v-7e42136f]{float:left;cursor:pointer}.VueCarousel-dot-inner[data-v-7e42136f]{border-radius:100%}", ""])
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            name: "pagination",
            data: function() {
                return {
                    parentContainer: this.$parent
                }
            }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.parentContainer.pageCount > 1,
                        expression: "parentContainer.pageCount > 1"
                    }],
                    staticClass: "VueCarousel-pagination"
                }, [n("div", {
                    staticClass: "VueCarousel-dot-container"
                }, e._l(e.parentContainer.pageCount, function(t, a) {
                    return n("div", {
                        staticClass: "VueCarousel-dot",
                        class: {
                            "VueCarousel-dot--active": a === e.parentContainer.currentPage
                        },
                        style: "\n        margin-top: " + 2 * e.parentContainer.paginationPadding + "px;\n        padding: " + e.parentContainer.paginationPadding + "px;\n      ",
                        on: {
                            click: function(t) {
                                e.parentContainer.goToPage(a)
                            }
                        }
                    }, [n("div", {
                        staticClass: "VueCarousel-dot-inner",
                        style: "\n          width: " + e.parentContainer.paginationSize + "px;\n          height: " + e.parentContainer.paginationSize + "px;\n          background: " + (a === e.parentContainer.currentPage ? e.parentContainer.paginationActiveColor : e.parentContainer.paginationColor) + ";\n        "
                    })])
                }))])
            },
            staticRenderFns: []
        }
    }, function(e, t, n) {
        function a(e) {
            n(22)
        }
        var i = n(7)(n(24), n(25), a, null, null);
        e.exports = i.exports
    }, function(e, t, n) {
        var a = n(23);
        "string" == typeof a && (a = [
            [e.id, a, ""]
        ]), a.locals && (e.exports = a.locals);
        n(5)("647f10ac", a, !0)
    }, function(e, t, n) {
        t = e.exports = n(4)(), t.push([e.id, ".VueCarousel-slide{flex-basis:inherit;flex-grow:0;flex-shrink:0;user-select:none}", ""])
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            name: "slide",
            data: function() {
                return {
                    width: null
                }
            }
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "VueCarousel-slide"
                }, [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    }, function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "VueCarousel"
                }, [n("div", {
                    staticClass: "VueCarousel-wrapper"
                }, [n("div", {
                    staticClass: "VueCarousel-inner",
                    style: "\n        transform: translateX(" + (document.querySelector('html').getAttribute('dir') === "rtl" ? -1 * e.currentOffset : e.currentOffset) + "px);\n        transition: " + e.transitionStyle + ";\n        flex-basis: " + e.slideWidth + "px;\n        visibility: " + (e.slideWidth ? "visible" : "hidden") + "\n      "
                }, [e._t("default")], 2)]), e._v(" "), e.paginationEnabled && e.pageCount > 0 ? n("pagination") : e._e(), e._v(" "), e.navigationEnabled ? n("navigation", {
                    attrs: {
                        clickTargetSize: e.navigationClickTargetSize,
                        nextLabel: e.navigationNextLabel,
                        prevLabel: e.navigationPrevLabel
                    }
                }) : e._e()], 1)
            },
            staticRenderFns: []
        }
    }])
});