!function(e, t) {
    if ("function" == typeof define && define.amd)
        define("GLightbox", ["module"], t);
    else if ("undefined" != typeof exports)
        t(module);
    else {
        var i = {
            exports: {}
        };
        t(i),
        e.GLightbox = i.exports
    }
}(this, function(e) {
    "use strict";
    function t() {
        var e = {}
          , i = !1
          , n = 0
          , s = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (i = arguments[0],
        n++);
        for (var o = function(n) {
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (i && "[object Object]" === Object.prototype.toString.call(n[s]) ? e[s] = t(!0, e[s], n[s]) : e[s] = n[s])
        }; n < s; n++) {
            o(arguments[n])
        }
        return e
    }
    function i(e, t) {
        if ((I.isNode(e) || e === window || e === document) && (e = [e]),
        I.isArrayLike(e) || I.isObject(e) || (e = [e]),
        0 != I.size(e))
            if (I.isArrayLike(e) && !I.isObject(e))
                for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++)
                    ;
            else if (I.isObject(e))
                for (var s in e)
                    if (I.has(e, s) && !1 === t.call(e[s], e[s], s, e))
                        break
    }
    function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , s = e[N] = e[N] || []
          , o = {
            all: s,
            evt: null,
            found: null
        };
        return t && n && I.size(s) > 0 && i(s, function(e, i) {
            if (e.eventName == t && e.fn.toString() == n.toString())
                return o.found = !0,
                o.evt = i,
                !1
        }),
        o
    }
    function s(e) {
        function t(e) {
            I.isFunction(l) && l.call(v, e, this),
            d && t.destroy()
        }
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , o = s.onElement
          , l = s.withCallback
          , r = s.avoidDuplicate
          , a = void 0 === r || r
          , c = s.once
          , d = void 0 !== c && c
          , u = s.useCapture
          , h = void 0 !== u && u
          , v = arguments[2]
          , f = o || [];
        return I.isString(f) && (f = document.querySelectorAll(f)),
        t.destroy = function() {
            i(f, function(i) {
                var s = n(i, e, t);
                s.found && s.all.splice(s.evt, 1),
                i.removeEventListener && i.removeEventListener(e, t, h)
            })
        }
        ,
        i(f, function(i) {
            var s = n(i, e, t);
            (i.addEventListener && a && !s.found || !a) && (i.addEventListener(e, t, h),
            s.all.push({
                eventName: e,
                fn: t
            }))
        }),
        t
    }
    function o(e, t) {
        r(e, t) || (e.classList ? e.classList.add(t) : e.className += " " + t)
    }
    function l(e, t) {
        var n = t.split(" ");
        n.length > 1 ? i(n, function(t) {
            l(e, t)
        }) : e.classList ? e.classList.remove(t) : e.className = e.className.replace(t, "")
    }
    function r(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t)
            return !1;
        if ("none" == t)
            return I.isFunction(n) && n(),
            !1;
        var r = t.split(" ");
        i(r, function(t) {
            o(e, "g" + t)
        }),
        s(O, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                i(r, function(e) {
                    l(t, "g" + e)
                }),
                I.isFunction(n) && n()
            }
        })
    }
    function c(e) {
        var t = document.createDocumentFragment()
          , i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild; )
            t.appendChild(i.firstChild);
        return t
    }
    function d(e, t) {
        for (; e !== document.body; ) {
            if ("function" == typeof (e = e.parentElement).matches ? e.matches(t) : e.msMatchesSelector(t))
                return e
        }
    }
    function u(e) {
        e.style.display = "block"
    }
    function h(e) {
        e.style.display = "none"
    }
    function v(e, i, n) {
        var s = this
          , l = i.source
          , r = "gvideo" + i.index
          , a = e.querySelector(".gslide-media")
          , d = i.href
          , u = location.protocol.replace(":", "");
        if ("file" == u && (u = "http"),
        "vimeo" == l) {
            var h = /vimeo.*\/(\d+)/i.exec(d)
              , v = y(this.settings.vimeo.params)
              , p = u + "://player.vimeo.com/video/" + h[1] + "?" + v;
            g(this.settings.vimeo.api);
            var m = f(p, i.width, i.height, function() {
                !function(e, t, i, n) {
                    if (e())
                        t();
                    else {
                        i || (i = 100);
                        var s, o = setInterval(function() {
                            e() && (clearInterval(o),
                            s && clearTimeout(s),
                            t())
                        }, i);
                        n && (s = setTimeout(function() {
                            clearInterval(o)
                        }, n))
                    }
                }(function() {
                    return "undefined" != typeof Vimeo
                }, function() {
                    var e = new Vimeo.Player(m);
                    L[r] = e,
                    I.isFunction(n) && n()
                })
            }, a);
            m.id = r,
            m.className = "vimeo-video gvideo",
            this.settings.autoplayVideos && !k && (m.className += " wait-autoplay")
        }
        if ("youtube" == l) {
            var b = y(t(this.settings.youtube.params, {
                playerapiid: r
            }))
              , w = u + "://www.youtube.com/embed/" + function(e) {
                var t = "";
                t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
                return t
            }(d) + "?" + b;
            g(this.settings.youtube.api);
            var S = f(w, i.width, i.height, function() {
                if (!I.isNil(YT) && YT.loaded) {
                    var e = new YT.Player(S);
                    L[r] = e
                } else
                    q.push(S);
                I.isFunction(n) && n()
            }, a);
            S.id = r,
            S.className = "youtube-video gvideo",
            this.settings.autoplayVideos && !k && (S.className += " wait-autoplay")
        }
        if ("local" == l) {
            var x = '<video id="' + r + '" ';
            x += 'style="background:#000; width: ' + i.width + "px; height: " + i.height + 'px;" ',
            x += 'preload="metadata" ',
            x += 'x-webkit-airplay="allow" ',
            x += 'webkit-playsinline="" ',
            x += "controls ",
            x += 'class="gvideo">';
            var E = {
                mp4: "",
                ogg: "",
                webm: ""
            };
            E[d.toLowerCase().split(".").pop()] = d;
            for (var C in E)
                if (E.hasOwnProperty(C)) {
                    var A = E[C];
                    i.hasOwnProperty(C) && (A = i[C]),
                    "" !== A && (x += '<source src="' + A + '" type="video/' + C + '">')
                }
            var T = c(x += "</video>");
            a.appendChild(T);
            var O = document.getElementById(r);
            if (null !== this.settings.jwplayer && null !== this.settings.jwplayer.api) {
                this.settings.jwplayer;
                var N = this.settings.jwplayer.api;
                if (!N)
                    return console.warn("Missing jwplayer api file"),
                    I.isFunction(n) && n(),
                    !1;
                g(N, function() {
                    var e = t(s.settings.jwplayer.params, {
                        width: i.width + "px",
                        height: i.height + "px",
                        file: d
                    });
                    jwplayer.key = s.settings.jwplayer.licenseKey;
                    var l = jwplayer(r);
                    l.setup(e),
                    L[r] = l,
                    l.on("ready", function() {
                        o(O = a.querySelector(".jw-video"), "gvideo"),
                        O.id = r,
                        I.isFunction(n) && n()
                    })
                })
            } else
                o(O, "html5-video"),
                L[r] = O,
                I.isFunction(n) && n()
        }
    }
    function f(e, t, i, n, s) {
        var l = document.createElement("iframe")
          , r = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return l.className = "vimeo-video gvideo",
        l.src = e,
        l.style.height = k && r < 767 ? "" : i + "px",
        l.style.width = t + "px",
        l.setAttribute("allowFullScreen", ""),
        l.onload = function() {
            o(l, "iframe-ready"),
            I.isFunction(n) && n()
        }
        ,
        s && s.appendChild(l),
        l
    }
    function g(e, t) {
        if (I.isNil(e))
            console.error("Inject videos api error");
        else {
            var i = document.querySelectorAll('script[src="' + e + '"]');
            if (I.isNil(i) || 0 == i.length) {
                var n = document.createElement("script");
                return n.type = "text/javascript",
                n.src = e,
                n.onload = function() {
                    I.isFunction(t) && t()
                }
                ,
                document.body.appendChild(n),
                !1
            }
            I.isFunction(t) && t()
        }
    }
    function p() {
        for (var e = 0; e < q.length; e++) {
            var t = q[e]
              , i = new YT.Player(t);
            L[t.id] = i
        }
    }
    function y(e) {
        var t = ""
          , n = 0;
        return i(e, function(e, i) {
            n > 0 && (t += "&amp;"),
            t += i + "=" + e,
            n += 1
        }),
        t
    }
    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" == t)
            return e.style.webkitTransform = "",
            e.style.MozTransform = "",
            e.style.msTransform = "",
            e.style.OTransform = "",
            e.style.transform = "",
            !1;
        e.style.webkitTransform = t,
        e.style.MozTransform = t,
        e.style.msTransform = t,
        e.style.OTransform = t,
        e.style.transform = t
    }
    function b(e) {
        var t = e.querySelector(".gslide-media")
          , i = e.querySelector(".gslide-description");
        o(t, "greset"),
        m(t, "translate3d(0, 0, 0)");
        s(T, {
            onElement: t,
            once: !0,
            withCallback: function(e, i) {
                l(t, "greset")
            }
        });
        t.style.opacity = "",
        i && (i.style.opacity = "")
    }
    function w(e, t) {
        var i = e.querySelector(".desc-more");
        if (!i)
            return !1;
        s("click", {
            onElement: i,
            withCallback: function(e, i) {
                e.preventDefault();
                var n = d(i, ".gslide-desc");
                if (!n)
                    return !1;
                n.innerHTML = t.description,
                o(A, "gdesc-open");
                var r = s("click", {
                    onElement: [A, d(n, ".gslide-description")],
                    withCallback: function(e, i) {
                        "a" !== e.target.nodeName.toLowerCase() && (l(A, "gdesc-open"),
                        o(A, "gdesc-closed"),
                        n.innerHTML = t.smallDescription,
                        w(n, t),
                        setTimeout(function() {
                            l(A, "gdesc-closed")
                        }, 400),
                        r.destroy())
                    }
                })
            }
        })
    }
    var S = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , k = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
      , E = null !== k || void 0 !== document.createTouch || "ontouchstart"in window || "onmsgesturechange"in window || navigator.msMaxTouchPoints
      , C = document.getElementsByTagName("html")[0]
      , A = document.body
      , T = function() {
        var e = void 0
          , t = document.createElement("fakeelement")
          , i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (e in i)
            if (void 0 !== t.style[e])
                return i[e]
    }()
      , O = function() {
        var e = void 0
          , t = document.createElement("fakeelement")
          , i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (e in i)
            if (void 0 !== t.style[e])
                return i[e]
    }()
      , N = Date.now()
      , q = []
      , L = {}
      , j = {
        selector: "glightbox",
        skin: "clean",
        closeButton: !0,
        startAt: 0,
        autoplayVideos: !0,
        descPosition: "bottom",
        width: 900,
        height: 506,
        videosWidth: 960,
        videosHeight: 540,
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        onOpen: null,
        onClose: null,
        loopAtEnd: !1,
        touchNavigation: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        jwplayer: {
            api: null,
            licenseKey: null,
            params: {
                width: "100%",
                aspectratio: "16:9",
                stretching: "uniform"
            }
        },
        vimeo: {
            api: "https://player.vimeo.com/api/player.js",
            params: {
                api: 1,
                title: 0,
                byline: 0,
                portrait: 0
            }
        },
        youtube: {
            api: "https://www.youtube.com/iframe_api",
            params: {
                enablejsapi: 1,
                showinfo: 0
            }
        },
        openEffect: "zoomIn",
        closeEffect: "zoomOut",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        slideHtml: "",
        lightboxHtml: "",
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slide_back: {
                in: "slideInLeft",
                out: "slideOutRight"
            }
        }
    };
    j.slideHtml = '<div class="gslide">         <div class="gslide-inner-content">            <div class="ginner-container">               <div class="gslide-media">               </div>               <div class="gslide-description">                  <h4 class="gslide-title"></h4>                  <div class="gslide-desc"></div>               </div>            </div>         </div>       </div>';
    j.lightboxHtml = '<div id="glightbox-body" class="glightbox-container">            <div class="gloader visible"></div>            <div class="goverlay"></div>            <div class="gcontainer">               <div id="glightbox-slider" class="gslider"></div>               <a class="gnext"></a>               <a class="gprev"></a>               <a class="gclose"></a>            </div>   </div>';
    var I = {
        isFunction: function(e) {
            return "function" == typeof e
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNode: function(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType)
        },
        isArray: function(e) {
            return Array.isArray(e)
        },
        isArrayLike: function(e) {
            return e && e.length && isFinite(e.length)
        },
        isObject: function(e) {
            return "object" === (void 0 === e ? "undefined" : x(e)) && null != e && !I.isFunction(e) && !I.isArray(e)
        },
        isNil: function(e) {
            return null == e
        },
        has: function(e, t) {
            return null !== e && hasOwnProperty.call(e, t)
        },
        size: function(e) {
            if (I.isObject(e)) {
                if (e.keys)
                    return e.keys().length;
                var t = 0;
                for (var i in e)
                    I.has(e, i) && t++;
                return t
            }
            return e.length
        },
        isNumber: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
    }
      , F = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , n = arguments[1]
          , s = {
            href: "",
            title: "",
            description: "",
            descPosition: "bottom",
            effect: "",
            node: e
        };
        if (I.isObject(e) && !I.isNode(e))
            return t(s, e);
        var o = ""
          , l = e.getAttribute("data-glightbox")
          , r = e.nodeName.toLowerCase();
        "a" === r && (o = e.href),
        "img" === r && (o = e.src),
        s.href = o,
        i(s, function(t, i) {
            I.has(n, i) && (s[i] = n[i]);
            var o = e.dataset[i];
            I.isNil(o) || (s[i] = o)
        });
        var a = P(o);
        if (s = t(s, a),
        I.isNil(l)) {
            if ("a" == r) {
                var c = e.title;
                I.isNil(c) || "" === c || (s.title = c)
            }
            if ("img" == r) {
                var d = e.alt;
                I.isNil(d) || "" === d || (s.title = d)
            }
            var u = e.getAttribute("data-description");
            I.isNil(u) || "" === u || (s.description = u)
        } else {
            var h = [];
            i(s, function(e, t) {
                h.push(";\\s?" + t)
            }),
            h = h.join("\\s?:|"),
            "" !== l.trim() && i(s, function(e, t) {
                var i = l
                  , n = "s?" + t + "s?:s?(.*?)(" + h + "s?:|$)"
                  , o = new RegExp(n)
                  , r = i.match(o);
                if (r && r.length && r[1]) {
                    var a = r[1].trim().replace(/;\s*$/, "");
                    s[t] = a
                }
            })
        }
        var v = e.querySelector(".glightbox-desc");
        v && (s.description = v.innerHTML),
        s.sourcetype = s.hasOwnProperty("type") ? s.type : s.sourcetype,
        s.type = s.sourcetype;
        var f = "video" == s.sourcetype ? n.videosWidth : n.width
          , g = "video" == s.sourcetype ? n.videosHeight : n.height;
        return s.width = I.has(s, "width") ? s.width : f,
        s.height = I.has(s, "height") ? s.height : g,
        s
    }
      , B = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , t = this
          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (r(e, "loaded"))
            return !1;
        I.isFunction(this.settings.beforeSlideLoad) && this.settings.beforeSlideLoad(e, i);
        var s = i.type
          , l = i.descPosition
          , a = e.querySelector(".gslide-media")
          , c = e.querySelector(".gslide-title")
          , d = e.querySelector(".gslide-desc")
          , u = e.querySelector(".gslide-description")
          , h = n;
        if (I.isFunction(this.settings.afterSlideLoad) && (h = function() {
            I.isFunction(n) && n(),
            t.settings.afterSlideLoad(e, i)
        }
        ),
        "" == i.title && "" == i.description ? u && u.parentNode.removeChild(u) : (c && "" !== i.title ? c.innerHTML = i.title : c.parentNode.removeChild(c),
        d && "" !== i.description ? k && this.settings.moreLength > 0 ? (i.smallDescription = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50
              , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , n = i;
            if ((e = e.trim()).length <= t)
                return e;
            var s = e.substr(0, t - 1);
            return n ? s + '... <a href="#" class="desc-more">' + i + "</a>" : s
        }(i.description, this.settings.moreLength, this.settings.moreText),
        d.innerHTML = i.smallDescription,
        w.apply(this, [d, i])) : d.innerHTML = i.description : d.parentNode.removeChild(d),
        o(a.parentNode, "desc-" + l),
        o(u, "description-" + l)),
        o(a, "gslide-" + s),
        o(e, "loaded"),
        "video" !== s)
            if ("external" !== s)
                if ("inline" !== s) {
                    if ("image" === s) {
                        var g = new Image;
                        return g.addEventListener("load", function() {
                            I.isFunction(h) && h()
                        }, !1),
                        g.src = i.href,
                        void a.appendChild(g)
                    }
                    I.isFunction(h) && h()
                } else
                    (function(e, t, i) {
                        var n = e.querySelector(".gslide-media")
                          , s = document.getElementById(t.inlined.replace("#", ""));
                        if (s) {
                            var l = s.cloneNode(!0);
                            return l.style.height = t.height + "px",
                            l.style.maxWidth = t.width + "px",
                            o(l, "ginlined-content"),
                            n.appendChild(l),
                            void (I.isFunction(i) && i())
                        }
                    }
                    ).apply(this, [e, i, h]);
            else {
                var p = f(i.href, i.width, i.height, h);
                a.appendChild(p)
            }
        else
            v.apply(this, [e, i, h])
    };
    void 0 !== window.onYouTubeIframeAPIReady ? window.onYouTubeIframeAPIReady = function() {
        window.onYouTubeIframeAPIReady(),
        p()
    }
    : window.onYouTubeIframeAPIReady = p;
    var P = function(e) {
        var t = e
          , i = {};
        if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|gif|png)$/))
            return i.sourcetype = "image",
            i;
        if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))
            return i.sourcetype = "video",
            i.source = "youtube",
            i;
        if (e.match(/vimeo\.com\/([0-9]*)/))
            return i.sourcetype = "video",
            i.source = "vimeo",
            i;
        if (null !== e.match(/\.(mp4|ogg|webm)$/))
            return i.sourcetype = "video",
            i.source = "local",
            i;
        if (e.indexOf("#") > -1) {
            var n = t.split("#").pop();
            if ("" !== n.trim())
                return i.sourcetype = "inline",
                i.source = e,
                i.inlined = "#" + n,
                i
        }
        return e.includes("gajax=true") && (i.sourcetype = "ajax",
        i.source = e),
        i.sourcetype = "external",
        i.source = e,
        i
    }
      , M = function() {
        function e(i) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.settings = t(j, i || {}),
            this.effectsClasses = this.getAnimationClasses()
        }
        return S(e, [{
            key: "init",
            value: function() {
                var e = this;
                this.baseEvents = s("click", {
                    onElement: "." + this.settings.selector,
                    withCallback: function(t, i) {
                        t.preventDefault(),
                        e.open(i)
                    }
                })
            }
        }, {
            key: "open",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.elements = this.getElements(e),
                0 == this.elements.length)
                    return !1;
                this.activeSlide = null,
                this.prevActiveSlideIndex = null,
                this.prevActiveSlide = null;
                var t = this.settings.startAt;
                e && (t = this.elements.indexOf(e)) < 0 && (t = 0),
                this.build(),
                a(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                var i = A.offsetWidth;
                if (A.style.width = i + "px",
                o(A, "glightbox-open"),
                o(C, "glightbox-open"),
                k && (o(C, "glightbox-mobile"),
                this.settings.slideEffect = "slide"),
                this.showSlide(t, !0),
                1 == this.elements.length ? (h(this.prevButton),
                h(this.nextButton)) : (u(this.prevButton),
                u(this.nextButton)),
                this.lightboxOpen = !0,
                I.isFunction(this.settings.onOpen) && this.settings.onOpen(),
                k && E && this.settings.touchNavigation)
                    return function() {
                        var e = this;
                        if (this.events.hasOwnProperty("touchStart"))
                            return !1;
                        var t = void 0
                          , i = void 0
                          , n = void 0
                          , a = void 0
                          , c = void 0
                          , d = void 0
                          , u = !1
                          , h = !1
                          , v = !1
                          , f = !1
                          , g = {}
                          , p = {}
                          , y = (this.slidesContainer,
                        null)
                          , w = 0
                          , S = 0
                          , x = null
                          , k = null
                          , E = null
                          , C = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        this.events.doctouchmove = s("touchmove", {
                            onElement: document,
                            withCallback: function(e, t) {
                                if (r(A, "gdesc-open"))
                                    return e.preventDefault(),
                                    !1
                            }
                        }),
                        this.events.touchStart = s("touchstart", {
                            onElement: A,
                            withCallback: function(i, n) {
                                r(A, "gdesc-open") || (o(A, "touching"),
                                y = e.getActiveSlide(),
                                x = y.querySelector(".gslide-image"),
                                k = y.querySelector(".gslide-media"),
                                E = y.querySelector(".gslide-description"),
                                t = e.index,
                                p = i.targetTouches[0],
                                g.pageX = i.targetTouches[0].pageX,
                                g.pageY = i.targetTouches[0].pageY,
                                w = i.targetTouches[0].clientX,
                                S = i.targetTouches[0].clientY)
                            }
                        }),
                        this.events.gestureStart = s("gesturestart", {
                            onElement: A,
                            withCallback: function(e, t) {
                                x && (e.preventDefault(),
                                v = !0)
                            }
                        }),
                        this.events.gestureChange = s("gesturechange", {
                            onElement: A,
                            withCallback: function(e, t) {
                                e.preventDefault(),
                                m(x, "scale(" + e.scale + ")")
                            }
                        }),
                        this.events.gesturEend = s("gestureend", {
                            onElement: A,
                            withCallback: function(e, t) {
                                v = !1,
                                e.scale < 1 ? (f = !1,
                                m(x, "scale(1)")) : f = !0
                            }
                        }),
                        this.events.touchMove = s("touchmove", {
                            onElement: A,
                            withCallback: function(t, s) {
                                if (r(A, "touching") && !(r(A, "gdesc-open") || v || f)) {
                                    t.preventDefault(),
                                    p = t.targetTouches[0];
                                    var o = y.querySelector(".gslide-inner-content").offsetHeight
                                      , l = y.querySelector(".gslide-inner-content").offsetWidth
                                      , x = t.targetTouches[0].clientX
                                      , T = t.targetTouches[0].clientY
                                      , O = w - x
                                      , N = S - T;
                                    if (Math.abs(O) > Math.abs(N) ? (u = !1,
                                    h = !0) : (h = !1,
                                    u = !0),
                                    u) {
                                        if (c = n,
                                        n = p.pageY - g.pageY,
                                        Math.abs(n) >= 0 || u) {
                                            var q = .75 - Math.abs(n) / o;
                                            k.style.opacity = q,
                                            E && (E.style.opacity = q),
                                            m(k, "translate3d(0, " + n + "px, 0)")
                                        }
                                    } else if (a = i,
                                    i = p.pageX - g.pageX,
                                    d = 100 * i / C,
                                    h) {
                                        if (e.index + 1 == e.elements.length && i < -60)
                                            return b(y),
                                            !1;
                                        if (e.index - 1 < 0 && i > 60)
                                            return b(y),
                                            !1;
                                        var L = .75 - Math.abs(i) / l;
                                        k.style.opacity = L,
                                        E && (E.style.opacity = L),
                                        m(k, "translate3d(" + d + "%, 0, 0)")
                                    }
                                }
                            }
                        }),
                        this.events.touchEnd = s("touchend", {
                            onElement: A,
                            withCallback: function(t, s) {
                                n = p.pageY - g.pageY,
                                i = p.pageX - g.pageX,
                                d = 100 * i / C,
                                l(A, "touching");
                                var o = y.querySelector(".gslide-inner-content").offsetHeight
                                  , r = y.querySelector(".gslide-inner-content").offsetWidth;
                                if (u) {
                                    var a = o / 2;
                                    return u = !1,
                                    Math.abs(n) >= a ? void e.close() : void b(y)
                                }
                                if (h) {
                                    h = !1;
                                    var c = "prev"
                                      , v = !0;
                                    if (i < 0 && (c = "next",
                                    i = Math.abs(i)),
                                    "prev" == c && e.index - 1 < 0 && (v = !1),
                                    "next" == c && e.index + 1 >= e.elements.length && (v = !1),
                                    v && i >= r / 2 - 90)
                                        return void ("next" == c ? e.nextSlide() : e.prevSlide());
                                    b(y)
                                }
                            }
                        })
                    }
                    .apply(this),
                    !1;
                this.settings.keyboardNavigation && function() {
                    var e = this;
                    if (this.events.hasOwnProperty("keyboard"))
                        return !1;
                    this.events.keyboard = s("keydown", {
                        onElement: window,
                        withCallback: function(t, i) {
                            var n = (t = t || window.event).keyCode;
                            39 == n && e.nextSlide(),
                            37 == n && e.prevSlide(),
                            27 == n && e.close()
                        }
                    })
                }
                .apply(this)
            }
        }, {
            key: "showSlide",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u(this.loader),
                this.index = t;
                var n = this.slidesContainer.querySelector(".current");
                n && l(n, "current"),
                this.slideAnimateOut();
                var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                if (u(this.slidesContainer),
                r(s, "loaded"))
                    this.slideAnimateIn(s, i),
                    h(this.loader);
                else {
                    u(this.loader);
                    var a = F(this.elements[t], this.settings);
                    a.index = t,
                    B.apply(this, [s, a, function() {
                        h(e.loader),
                        e.slideAnimateIn(s, i)
                    }
                    ])
                }
                this.preloadSlide(t + 1),
                this.preloadSlide(t - 1),
                l(this.nextButton, "disabled"),
                l(this.prevButton, "disabled"),
                0 === t ? o(this.prevButton, "disabled") : t === this.elements.length - 1 && !0 !== this.settings.loopAtEnd && o(this.nextButton, "disabled"),
                this.activeSlide = s
            }
        }, {
            key: "preloadSlide",
            value: function(e) {
                var t = this;
                if (e < 0 || e > this.elements.length)
                    return !1;
                if (I.isNil(this.elements[e]))
                    return !1;
                var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                if (r(i, "loaded"))
                    return !1;
                var n = F(this.elements[e], this.settings);
                n.index = e;
                var s = n.sourcetype;
                "video" == s || "external" == s ? setTimeout(function() {
                    B.apply(t, [i, n])
                }, 200) : B.apply(this, [i, n])
            }
        }, {
            key: "prevSlide",
            value: function() {
                var e = this.index - 1;
                if (e < 0)
                    return !1;
                this.goToSlide(e)
            }
        }, {
            key: "nextSlide",
            value: function() {
                var e = this.index + 1;
                if (e > this.elements.length)
                    return !1;
                this.goToSlide(e)
            }
        }, {
            key: "goToSlide",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e > -1 && (this.prevActiveSlide = this.activeSlide,
                this.prevActiveSlideIndex = this.index,
                e < this.elements.length ? this.showSlide(e) : !0 === this.settings.loopAtEnd && (e = 0,
                this.showSlide(e)))
            }
        }, {
            key: "slideAnimateIn",
            value: function(e, t) {
                var i = this
                  , n = e.querySelector(".gslide-media")
                  , s = e.querySelector(".gslide-description")
                  , r = {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide
                }
                  , c = {
                    index: this.index,
                    slide: this.activeSlide
                };
                if (n.offsetWidth > 0 && s && (h(s),
                e.querySelector(".ginner-container").style.maxWidth = n.offsetWidth + "px",
                s.style.display = ""),
                l(e, this.effectsClasses),
                t)
                    a(e, this.settings.openEffect, function() {
                        !k && i.settings.autoplayVideos && i.playSlideVideo(e),
                        I.isFunction(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, c])
                    });
                else {
                    var d = this.settings.slideEffect
                      , u = "none" !== d ? this.settings.cssEfects[d].in : d;
                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (u = this.settings.cssEfects.slide_back.in),
                    a(e, u, function() {
                        !k && i.settings.autoplayVideos && i.playSlideVideo(e),
                        I.isFunction(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, c])
                    })
                }
                o(e, "current")
            }
        }, {
            key: "slideAnimateOut",
            value: function() {
                if (!this.prevActiveSlide)
                    return !1;
                var e = this.prevActiveSlide;
                l(e, this.effectsClasses),
                o(e, "prev");
                var t = this.settings.slideEffect
                  , i = "none" !== t ? this.settings.cssEfects[t].out : t;
                this.stopSlideVideo(e),
                I.isFunction(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide
                }, {
                    index: this.index,
                    slide: this.activeSlide
                }]),
                this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slide_back.out),
                a(e, i, function() {
                    var t = e.querySelector(".gslide-media")
                      , i = e.querySelector(".gslide-description");
                    t.style.transform = "",
                    l(t, "greset"),
                    t.style.opacity = "",
                    i && (i.style.opacity = ""),
                    l(e, "prev")
                })
            }
        }, {
            key: "stopSlideVideo",
            value: function(e) {
                I.isNumber(e) && (e = this.slidesContainer.querySelectorAll(".gslide")[e]);
                var t = e ? e.querySelector(".gvideo") : null;
                if (!t)
                    return !1;
                var i = t.id;
                if (L && L.hasOwnProperty(i)) {
                    var n = L[i];
                    r(t, "vimeo-video") && n.pause(),
                    r(t, "youtube-video") && n.pauseVideo(),
                    r(t, "jw-video") && n.pause(!0),
                    r(t, "html5-video") && n.pause()
                }
            }
        }, {
            key: "playSlideVideo",
            value: function(e) {
                I.isNumber(e) && (e = this.slidesContainer.querySelectorAll(".gslide")[e]);
                var t = e.querySelector(".gvideo");
                if (!t)
                    return !1;
                var i = t.id;
                if (L && L.hasOwnProperty(i)) {
                    var n = L[i];
                    return r(t, "vimeo-video") && n.play(),
                    r(t, "youtube-video") && n.playVideo(),
                    r(t, "jw-video") && n.play(),
                    r(t, "html5-video") && n.play(),
                    setTimeout(function() {
                        l(t, "wait-autoplay")
                    }, 300),
                    !1
                }
            }
        }, {
            key: "setElements",
            value: function(e) {
                this.settings.elements = e
            }
        }, {
            key: "getElements",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.elements = [],
                !I.isNil(this.settings.elements) && I.isArray(this.settings.elements))
                    return this.settings.elements;
                var t = !1;
                if (null !== e) {
                    var i = e.getAttribute("data-gallery");
                    i && "" !== i && (t = document.querySelectorAll('[data-gallery="' + i + '"]'))
                }
                return 0 == t && (t = document.querySelectorAll("." + this.settings.selector)),
                t = Array.prototype.slice.call(t)
            }
        }, {
            key: "getActiveSlide",
            value: function() {
                return this.slidesContainer.querySelectorAll(".gslide")[this.index]
            }
        }, {
            key: "getActiveSlideIndex",
            value: function() {
                return this.index
            }
        }, {
            key: "getAnimationClasses",
            value: function() {
                var e = [];
                for (var t in this.settings.cssEfects)
                    if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g" + i.in),
                        e.push("g" + i.out)
                    }
                return e.join(" ")
            }
        }, {
            key: "build",
            value: function() {
                var e = this;
                if (this.built)
                    return !1;
                var t = c(this.settings.lightboxHtml);
                document.body.appendChild(t);
                var n = document.getElementById("glightbox-body");
                this.modal = n;
                var l = n.querySelector(".gclose");
                this.prevButton = n.querySelector(".gprev"),
                this.nextButton = n.querySelector(".gnext"),
                this.overlay = n.querySelector(".goverlay"),
                this.loader = n.querySelector(".gloader"),
                this.slidesContainer = document.getElementById("glightbox-slider"),
                this.events = {},
                o(this.modal, "glightbox-" + this.settings.skin),
                this.settings.closeButton && l && (this.events.close = s("click", {
                    onElement: l,
                    withCallback: function(t, i) {
                        t.preventDefault(),
                        e.close()
                    }
                })),
                l && !this.settings.closeButton && l.parentNode.removeChild(l),
                this.nextButton && (this.events.next = s("click", {
                    onElement: this.nextButton,
                    withCallback: function(t, i) {
                        t.preventDefault(),
                        e.nextSlide()
                    }
                })),
                this.prevButton && (this.events.prev = s("click", {
                    onElement: this.prevButton,
                    withCallback: function(t, i) {
                        t.preventDefault(),
                        e.prevSlide()
                    }
                })),
                this.settings.closeOnOutsideClick && (this.events.outClose = s("click", {
                    onElement: n,
                    withCallback: function(t, i) {
                        d(t.target, ".ginner-container") || r(t.target, "gnext") || r(t.target, "gprev") || e.close()
                    }
                })),
                i(this.elements, function() {
                    var t = c(e.settings.slideHtml);
                    e.slidesContainer.appendChild(t)
                }),
                E && o(C, "glightbox-touch"),
                this.built = !0
            }
        }, {
            key: "reload",
            value: function() {
                this.init()
            }
        }, {
            key: "close",
            value: function() {
                var e = this;
                if (this.closing)
                    return !1;
                this.closing = !0,
                this.stopSlideVideo(this.activeSlide),
                o(this.modal, "glightbox-closing"),
                a(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out),
                a(this.activeSlide, this.settings.closeEffect, function() {
                    if (e.activeSlide = null,
                    e.prevActiveSlideIndex = null,
                    e.prevActiveSlide = null,
                    e.built = !1,
                    e.events)
                        for (var t in e.events)
                            e.events.hasOwnProperty(t) && e.events[t].destroy();
                    l(A, "glightbox-open"),
                    l(C, "glightbox-open"),
                    l(A, "touching"),
                    l(A, "gdesc-open"),
                    A.style.width = "",
                    e.modal.parentNode.removeChild(e.modal),
                    I.isFunction(e.settings.onClose) && e.settings.onClose(),
                    e.closing = null
                })
            }
        }, {
            key: "destroy",
            value: function() {
                this.close(),
                this.baseEvents.destroy()
            }
        }]),
        e
    }();
    e.exports = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = new M(e);
        return t.init(),
        t
    }
});
