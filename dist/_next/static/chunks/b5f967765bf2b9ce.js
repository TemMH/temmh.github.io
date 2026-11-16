(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  16015,
  (e, t, r) => {},
  98547,
  (e, t, r) => {
    var i = e.i(47167);
    e.r(16015);
    var s = e.r(71645),
      n = s && "object" == typeof s && "default" in s ? s : { default: s },
      a = void 0 !== i.default && i.default.env && !0,
      o = function (e) {
        return "[object String]" === Object.prototype.toString.call(e);
      },
      l = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.name,
            i = void 0 === r ? "stylesheet" : r,
            s = t.optimizeForSpeed,
            n = void 0 === s ? a : s;
          (c(o(i), "`name` must be a string"),
            (this._name = i),
            (this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}"),
            c("boolean" == typeof n, "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = n),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0));
          var l =
            "undefined" != typeof window &&
            document.querySelector('meta[property="csp-nonce"]');
          this._nonce = l ? l.getAttribute("content") : null;
        }
        var t,
          r = e.prototype;
        return (
          (r.setOptimizeForSpeed = function (e) {
            (c(
              "boolean" == typeof e,
              "`setOptimizeForSpeed` accepts a boolean",
            ),
              c(
                0 === this._rulesCount,
                "optimizeForSpeed cannot be when rules have already been inserted",
              ),
              this.flush(),
              (this._optimizeForSpeed = e),
              this.inject());
          }),
          (r.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (r.inject = function () {
            var e = this;
            if (
              (c(!this._injected, "sheet already injected"),
              (this._injected = !0),
              "undefined" != typeof window && this._optimizeForSpeed)
            ) {
              ((this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (a ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.",
                    ),
                  this.flush(),
                  (this._injected = !0)));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (t, r) {
                return (
                  "number" == typeof r
                    ? (e._serverSheet.cssRules[r] = { cssText: t })
                    : e._serverSheet.cssRules.push({ cssText: t }),
                  r
                );
              },
              deleteRule: function (t) {
                e._serverSheet.cssRules[t] = null;
              },
            };
          }),
          (r.getSheetForTag = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e)
                return document.styleSheets[t];
          }),
          (r.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (r.insertRule = function (e, t) {
            if (
              (c(o(e), "`insertRule` accepts only strings"),
              "undefined" == typeof window)
            )
              return (
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var r = this.getSheet();
              "number" != typeof t && (t = r.cssRules.length);
              try {
                r.insertRule(e, t);
              } catch (t) {
                return (
                  a ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                    ),
                  -1
                );
              }
            } else {
              var i = this._tags[t];
              this._tags.push(this.makeStyleTag(this._name, e, i));
            }
            return this._rulesCount++;
          }),
          (r.replaceRule = function (e, t) {
            if (this._optimizeForSpeed || "undefined" == typeof window) {
              var r =
                "undefined" != typeof window
                  ? this.getSheet()
                  : this._serverSheet;
              if (
                (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
              )
                return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (i) {
                (a ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e));
              }
            } else {
              var i = this._tags[e];
              (c(i, "old rule at index `" + e + "` not found"),
                (i.textContent = t));
            }
            return e;
          }),
          (r.deleteRule = function (e) {
            if ("undefined" == typeof window)
              return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed) this.replaceRule(e, "");
            else {
              var t = this._tags[e];
              (c(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                (this._tags[e] = null));
            }
          }),
          (r.flush = function () {
            ((this._injected = !1),
              (this._rulesCount = 0),
              "undefined" != typeof window
                ? (this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []));
          }),
          (r.cssRules = function () {
            var e = this;
            return "undefined" == typeof window
              ? this._serverSheet.cssRules
              : this._tags.reduce(function (t, r) {
                  return (
                    r
                      ? (t = t.concat(
                          Array.prototype.map.call(
                            e.getSheetForTag(r).cssRules,
                            function (t) {
                              return t.cssText === e._deletedRulePlaceholder
                                ? null
                                : t;
                            },
                          ),
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
          }),
          (r.makeStyleTag = function (e, t, r) {
            t &&
              c(o(t), "makeStyleTag accepts only strings as second parameter");
            var i = document.createElement("style");
            (this._nonce && i.setAttribute("nonce", this._nonce),
              (i.type = "text/css"),
              i.setAttribute("data-" + e, ""),
              t && i.appendChild(document.createTextNode(t)));
            var s = document.head || document.getElementsByTagName("head")[0];
            return (r ? s.insertBefore(i, r) : s.appendChild(i), i);
          }),
          (t = [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              ((i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i));
            }
          })(e.prototype, t),
          e
        );
      })();
    function c(e, t) {
      if (!e) throw Error("StyleSheet: " + t + ".");
    }
    var d = function (e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
        return t >>> 0;
      },
      u = {};
    function h(e, t) {
      if (!t) return "jsx-" + e;
      var r = String(t),
        i = e + r;
      return (u[i] || (u[i] = "jsx-" + d(e + "-" + r)), u[i]);
    }
    function p(e, t) {
      "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
      var r = e + t;
      return (
        u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
        u[r]
      );
    }
    var m = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.styleSheet,
            i = void 0 === r ? null : r,
            s = t.optimizeForSpeed,
            n = void 0 !== s && s;
          ((this._sheet =
            i || new l({ name: "styled-jsx", optimizeForSpeed: n })),
            this._sheet.inject(),
            i &&
              "boolean" == typeof n &&
              (this._sheet.setOptimizeForSpeed(n),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}));
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            (void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              "undefined" == typeof window ||
                this._fromServer ||
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return ((e[t] = 0), e);
                  },
                  {},
                ))));
            var r = this.getIdAndRules(e),
              i = r.styleId,
              s = r.rules;
            if (i in this._instancesCounts) {
              this._instancesCounts[i] += 1;
              return;
            }
            var n = s
              .map(function (e) {
                return t._sheet.insertRule(e);
              })
              .filter(function (e) {
                return -1 !== e;
              });
            ((this._indices[i] = n), (this._instancesCounts[i] = 1));
          }),
          (t.remove = function (e) {
            var t = this,
              r = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw Error("StyleSheetRegistry: " + t + ".");
              })(r in this._instancesCounts, "styleId: `" + r + "` not found"),
              (this._instancesCounts[r] -= 1),
              this._instancesCounts[r] < 1)
            ) {
              var i = this._fromServer && this._fromServer[r];
              (i
                ? (i.parentNode.removeChild(i), delete this._fromServer[r])
                : (this._indices[r].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[r]),
                delete this._instancesCounts[r]);
            }
          }),
          (t.update = function (e, t) {
            (this.add(t), this.remove(e));
          }),
          (t.flush = function () {
            (this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}));
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              r = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return r[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return !!e[1];
                }),
            );
          }),
          (t.styles = function (e) {
            var t, r;
            return (
              (t = this.cssRules()),
              void 0 === (r = e) && (r = {}),
              t.map(function (e) {
                var t = e[0],
                  i = e[1];
                return n.default.createElement("style", {
                  id: "__" + t,
                  key: "__" + t,
                  nonce: r.nonce ? r.nonce : void 0,
                  dangerouslySetInnerHTML: { __html: i },
                });
              })
            );
          }),
          (t.getIdAndRules = function (e) {
            var t = e.children,
              r = e.dynamic,
              i = e.id;
            if (r) {
              var s = h(i, r);
              return {
                styleId: s,
                rules: Array.isArray(t)
                  ? t.map(function (e) {
                      return p(s, e);
                    })
                  : [p(s, t)],
              };
            }
            return { styleId: h(i), rules: Array.isArray(t) ? t : [t] };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return ((e[t.id.slice(2)] = t), e);
              }, {});
          }),
          e
        );
      })(),
      f = s.createContext(null);
    function v() {
      return new m();
    }
    function g() {
      return s.useContext(f);
    }
    f.displayName = "StyleSheetContext";
    var x = n.default.useInsertionEffect || n.default.useLayoutEffect,
      y = "undefined" != typeof window ? v() : void 0;
    function b(e) {
      var t = y || g();
      return (
        t &&
          ("undefined" == typeof window
            ? t.add(e)
            : x(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
                [e.id, String(e.dynamic)],
              )),
        null
      );
    }
    ((b.dynamic = function (e) {
      return e
        .map(function (e) {
          return h(e[0], e[1]);
        })
        .join(" ");
    }),
      (r.StyleRegistry = function (e) {
        var t = e.registry,
          r = e.children,
          i = s.useContext(f),
          a = s.useState(function () {
            return i || t || v();
          })[0];
        return n.default.createElement(f.Provider, { value: a }, r);
      }),
      (r.createStyleRegistry = v),
      (r.style = b),
      (r.useStyleRegistry = g));
  },
  37902,
  (e, t, r) => {
    t.exports = e.r(98547).style;
  },
  2829,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      i = e.i(89970);
    let s = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
      n = (e) => e && !Array.isArray(e) && "object" == typeof e,
      a = [],
      o = {},
      l = i.default,
      c = (e, t = a) => {
        let i = o;
        (n(e)
          ? ((i = e),
            (e = null),
            (t = "dependencies" in i ? i.dependencies : a))
          : n(t) && (t = "dependencies" in (i = t) ? i.dependencies : a),
          e &&
            "function" != typeof e &&
            console.warn(
              "First parameter must be a function or config object",
            ));
        let { scope: c, revertOnUpdate: d } = i,
          u = (0, r.useRef)(!1),
          h = (0, r.useRef)(l.context(() => {}, c)),
          p = (0, r.useRef)((e) => h.current.add(null, e)),
          m = t && t.length && !d;
        return (
          m && s(() => ((u.current = !0), () => h.current.revert()), a),
          s(() => {
            if ((e && h.current.add(e, c), !m || !u.current))
              return () => h.current.revert();
          }, t),
          { context: h.current, contextSafe: p.current }
        );
      };
    ((c.register = (e) => {
      l = e;
    }),
      (c.headless = !0));
    var d,
      u,
      h,
      p,
      m,
      f,
      v,
      g,
      x,
      y,
      b,
      j,
      N,
      w = function () {
        return (
          d ||
          ("undefined" != typeof window &&
            (d = window.gsap) &&
            d.registerPlugin &&
            d)
        );
      },
      S = 1,
      E = [],
      A = [],
      C = [],
      T = Date.now,
      _ = function (e, t) {
        return t;
      },
      L = function () {
        var e = x.core,
          t = e.bridge || {},
          r = e._scrollers,
          i = e._proxies;
        (r.push.apply(r, A),
          i.push.apply(i, C),
          (A = r),
          (C = i),
          (_ = function (e, r) {
            return t[e](r);
          }));
      },
      k = function (e, t) {
        return ~C.indexOf(e) && C[C.indexOf(e) + 1][t];
      },
      R = function (e) {
        return !!~y.indexOf(e);
      },
      I = function (e, t, r, i, s) {
        return e.addEventListener(t, r, { passive: !1 !== i, capture: !!s });
      },
      M = function (e, t, r, i) {
        return e.removeEventListener(t, r, !!i);
      },
      O = "scrollLeft",
      D = "scrollTop",
      P = function () {
        return (b && b.isPressed) || A.cache++;
      },
      z = function (e, t) {
        var r = function r(i) {
          if (i || 0 === i) {
            S && (h.history.scrollRestoration = "manual");
            var s = b && b.isPressed;
            (e((i = r.v = Math.round(i) || (b && b.iOS ? 1 : 0))),
              (r.cacheID = A.cache),
              s && _("ss", i));
          } else
            (t || A.cache !== r.cacheID || _("ref")) &&
              ((r.cacheID = A.cache), (r.v = e()));
          return r.v + r.offset;
        };
        return ((r.offset = 0), e && r);
      },
      H = {
        s: O,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: z(function (e) {
          return arguments.length
            ? h.scrollTo(e, F.sc())
            : h.pageXOffset || p[O] || m[O] || f[O] || 0;
        }),
      },
      F = {
        s: D,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: H,
        sc: z(function (e) {
          return arguments.length
            ? h.scrollTo(H.sc(), e)
            : h.pageYOffset || p[D] || m[D] || f[D] || 0;
        }),
      },
      B = function (e, t) {
        return (
          ((t && t._ctx && t._ctx.selector) || d.utils.toArray)(e)[0] ||
          ("string" == typeof e && !1 !== d.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null)
        );
      },
      Y = function (e, t) {
        for (var r = t.length; r--; )
          if (t[r] === e || t[r].contains(e)) return !0;
        return !1;
      },
      q = function (e, t) {
        var r = t.s,
          i = t.sc;
        R(e) && (e = p.scrollingElement || m);
        var s = A.indexOf(e),
          n = i === F.sc ? 1 : 2;
        (~s || (s = A.push(e) - 1), A[s + n] || I(e, "scroll", P));
        var a = A[s + n],
          o =
            a ||
            (A[s + n] =
              z(k(e, r), !0) ||
              (R(e)
                ? i
                : z(function (t) {
                    return arguments.length ? (e[r] = t) : e[r];
                  })));
        return (
          (o.target = e),
          a || (o.smooth = "smooth" === d.getProperty(e, "scrollBehavior")),
          o
        );
      },
      W = function (e, t, r) {
        var i = e,
          s = e,
          n = T(),
          a = n,
          o = t || 50,
          l = Math.max(500, 3 * o),
          c = function (e, t) {
            var l = T();
            t || l - n > o
              ? ((s = i), (i = e), (a = n), (n = l))
              : r
                ? (i += e)
                : (i = s + ((e - s) / (l - a)) * (n - a));
          };
        return {
          update: c,
          reset: function () {
            ((s = i = r ? 0 : i), (a = n = 0));
          },
          getVelocity: function (e) {
            var t = a,
              o = s,
              d = T();
            return (
              (e || 0 === e) && e !== i && c(e),
              n === a || d - a > l
                ? 0
                : ((i + (r ? o : -o)) / ((r ? d : n) - t)) * 1e3
            );
          },
        };
      },
      V = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      $ = function (e) {
        var t = Math.max.apply(Math, e),
          r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r;
      },
      X = function () {
        (x = d.core.globals().ScrollTrigger) && x.core && L();
      },
      G = function (e) {
        return (
          (d = e || w()),
          !u &&
            d &&
            "undefined" != typeof document &&
            document.body &&
            ((h = window),
            (m = (p = document).documentElement),
            (f = p.body),
            (y = [h, p, m, f]),
            d.utils.clamp,
            (N = d.core.context || function () {}),
            (g = "onpointerenter" in f ? "pointer" : "mouse"),
            (v = U.isTouch =
              h.matchMedia &&
              h.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : 2 *
                  ("ontouchstart" in h ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0)),
            (j = U.eventTypes =
              (
                "ontouchstart" in m
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : !("onpointerdown" in m)
                    ? "mousedown,mousemove,mouseup,mouseup"
                    : "pointerdown,pointermove,pointercancel,pointerup"
              ).split(",")),
            setTimeout(function () {
              return (S = 0);
            }, 500),
            X(),
            (u = 1)),
          u
        );
      };
    ((H.op = F), (A.cache = 0));
    var U = (function () {
      var e;
      function t(e) {
        this.init(e);
      }
      return (
        (t.prototype.init = function (e) {
          (u || G(d) || console.warn("Please gsap.registerPlugin(Observer)"),
            x || X());
          var t = e.tolerance,
            r = e.dragMinimum,
            i = e.type,
            s = e.target,
            n = e.lineHeight,
            a = e.debounce,
            o = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            y = e.ignore,
            w = e.wheelSpeed,
            S = e.event,
            A = e.onDragStart,
            C = e.onDragEnd,
            _ = e.onDrag,
            L = e.onPress,
            k = e.onRelease,
            O = e.onRight,
            D = e.onLeft,
            z = e.onUp,
            U = e.onDown,
            K = e.onChangeX,
            Z = e.onChangeY,
            Q = e.onChange,
            J = e.onToggleX,
            ee = e.onToggleY,
            et = e.onHover,
            er = e.onHoverEnd,
            ei = e.onMove,
            es = e.ignoreCheck,
            en = e.isNormalizer,
            ea = e.onGestureStart,
            eo = e.onGestureEnd,
            el = e.onWheel,
            ec = e.onEnable,
            ed = e.onDisable,
            eu = e.onClick,
            eh = e.scrollSpeed,
            ep = e.capture,
            em = e.allowClicks,
            ef = e.lockAxis,
            ev = e.onLockAxis;
          ((this.target = s = B(s) || m),
            (this.vars = e),
            y && (y = d.utils.toArray(y)),
            (t = t || 1e-9),
            (r = r || 0),
            (w = w || 1),
            (eh = eh || 1),
            (i = i || "wheel,touch,pointer"),
            (a = !1 !== a),
            n || (n = parseFloat(h.getComputedStyle(f).lineHeight) || 22));
          var eg,
            ex,
            ey,
            eb,
            ej,
            eN,
            ew,
            eS = this,
            eE = 0,
            eA = 0,
            eC = e.passive || (!o && !1 !== e.passive),
            eT = q(s, H),
            e_ = q(s, F),
            eL = eT(),
            ek = e_(),
            eR =
              ~i.indexOf("touch") &&
              !~i.indexOf("pointer") &&
              "pointerdown" === j[0],
            eI = R(s),
            eM = s.ownerDocument || p,
            eO = [0, 0, 0],
            eD = [0, 0, 0],
            eP = 0,
            ez = function () {
              return (eP = T());
            },
            eH = function (e, t) {
              return (
                ((eS.event = e) && y && Y(e.target, y)) ||
                (t && eR && "touch" !== e.pointerType) ||
                (es && es(e, t))
              );
            },
            eF = function () {
              var e = (eS.deltaX = $(eO)),
                r = (eS.deltaY = $(eD)),
                i = Math.abs(e) >= t,
                s = Math.abs(r) >= t;
              (Q && (i || s) && Q(eS, e, r, eO, eD),
                i &&
                  (O && eS.deltaX > 0 && O(eS),
                  D && eS.deltaX < 0 && D(eS),
                  K && K(eS),
                  J && eS.deltaX < 0 != eE < 0 && J(eS),
                  (eE = eS.deltaX),
                  (eO[0] = eO[1] = eO[2] = 0)),
                s &&
                  (U && eS.deltaY > 0 && U(eS),
                  z && eS.deltaY < 0 && z(eS),
                  Z && Z(eS),
                  ee && eS.deltaY < 0 != eA < 0 && ee(eS),
                  (eA = eS.deltaY),
                  (eD[0] = eD[1] = eD[2] = 0)),
                (eb || ey) &&
                  (ei && ei(eS),
                  ey && (A && 1 === ey && A(eS), _ && _(eS), (ey = 0)),
                  (eb = !1)),
                eN && ((eN = !1), 1) && ev && ev(eS),
                ej && (el(eS), (ej = !1)),
                (eg = 0));
            },
            eB = function (e, t, r) {
              ((eO[r] += e),
                (eD[r] += t),
                eS._vx.update(e),
                eS._vy.update(t),
                a ? eg || (eg = requestAnimationFrame(eF)) : eF());
            },
            eY = function (e, t) {
              (ef &&
                !ew &&
                ((eS.axis = ew = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                (eN = !0)),
                "y" !== ew && ((eO[2] += e), eS._vx.update(e, !0)),
                "x" !== ew && ((eD[2] += t), eS._vy.update(t, !0)),
                a ? eg || (eg = requestAnimationFrame(eF)) : eF());
            },
            eq = function (e) {
              if (!eH(e, 1)) {
                var t = (e = V(e, o)).clientX,
                  i = e.clientY,
                  s = t - eS.x,
                  n = i - eS.y,
                  a = eS.isDragging;
                ((eS.x = t),
                  (eS.y = i),
                  (a ||
                    ((s || n) &&
                      (Math.abs(eS.startX - t) >= r ||
                        Math.abs(eS.startY - i) >= r))) &&
                    ((ey = a ? 2 : 1), a || (eS.isDragging = !0), eY(s, n)));
              }
            },
            eW = (eS.onPress = function (e) {
              eH(e, 1) ||
                (e && e.button) ||
                ((eS.axis = ew = null),
                ex.pause(),
                (eS.isPressed = !0),
                (e = V(e)),
                (eE = eA = 0),
                (eS.startX = eS.x = e.clientX),
                (eS.startY = eS.y = e.clientY),
                eS._vx.reset(),
                eS._vy.reset(),
                I(en ? s : eM, j[1], eq, eC, !0),
                (eS.deltaX = eS.deltaY = 0),
                L && L(eS));
            }),
            eV = (eS.onRelease = function (e) {
              if (!eH(e, 1)) {
                M(en ? s : eM, j[1], eq, !0);
                var t = !isNaN(eS.y - eS.startY),
                  r = eS.isDragging,
                  i =
                    r &&
                    (Math.abs(eS.x - eS.startX) > 3 ||
                      Math.abs(eS.y - eS.startY) > 3),
                  n = V(e);
                (!i &&
                  t &&
                  (eS._vx.reset(),
                  eS._vy.reset(),
                  o &&
                    em &&
                    d.delayedCall(0.08, function () {
                      if (T() - eP > 300 && !e.defaultPrevented) {
                        if (e.target.click) e.target.click();
                        else if (eM.createEvent) {
                          var t = eM.createEvent("MouseEvents");
                          (t.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            h,
                            1,
                            n.screenX,
                            n.screenY,
                            n.clientX,
                            n.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            e.target.dispatchEvent(t));
                        }
                      }
                    })),
                  (eS.isDragging = eS.isGesturing = eS.isPressed = !1),
                  l && r && !en && ex.restart(!0),
                  ey && eF(),
                  C && r && C(eS),
                  k && k(eS, i));
              }
            }),
            e$ = function (e) {
              return (
                e.touches &&
                e.touches.length > 1 &&
                (eS.isGesturing = !0) &&
                ea(e, eS.isDragging)
              );
            },
            eX = function () {
              return ((eS.isGesturing = !1), eo(eS));
            },
            eG = function (e) {
              if (!eH(e)) {
                var t = eT(),
                  r = e_();
                (eB((t - eL) * eh, (r - ek) * eh, 1),
                  (eL = t),
                  (ek = r),
                  l && ex.restart(!0));
              }
            },
            eU = function (e) {
              if (!eH(e)) {
                ((e = V(e, o)), el && (ej = !0));
                var t =
                  (1 === e.deltaMode
                    ? n
                    : 2 === e.deltaMode
                      ? h.innerHeight
                      : 1) * w;
                (eB(e.deltaX * t, e.deltaY * t, 0), l && !en && ex.restart(!0));
              }
            },
            eK = function (e) {
              if (!eH(e)) {
                var t = e.clientX,
                  r = e.clientY,
                  i = t - eS.x,
                  s = r - eS.y;
                ((eS.x = t),
                  (eS.y = r),
                  (eb = !0),
                  l && ex.restart(!0),
                  (i || s) && eY(i, s));
              }
            },
            eZ = function (e) {
              ((eS.event = e), et(eS));
            },
            eQ = function (e) {
              ((eS.event = e), er(eS));
            },
            eJ = function (e) {
              return eH(e) || (V(e, o) && eu(eS));
            };
          ((ex = eS._dc =
            d
              .delayedCall(c || 0.25, function () {
                (eS._vx.reset(), eS._vy.reset(), ex.pause(), l && l(eS));
              })
              .pause()),
            (eS.deltaX = eS.deltaY = 0),
            (eS._vx = W(0, 50, !0)),
            (eS._vy = W(0, 50, !0)),
            (eS.scrollX = eT),
            (eS.scrollY = e_),
            (eS.isDragging = eS.isGesturing = eS.isPressed = !1),
            N(this),
            (eS.enable = function (e) {
              return (
                !eS.isEnabled &&
                  (I(eI ? eM : s, "scroll", P),
                  i.indexOf("scroll") >= 0 &&
                    I(eI ? eM : s, "scroll", eG, eC, ep),
                  i.indexOf("wheel") >= 0 && I(s, "wheel", eU, eC, ep),
                  ((i.indexOf("touch") >= 0 && v) ||
                    i.indexOf("pointer") >= 0) &&
                    (I(s, j[0], eW, eC, ep),
                    I(eM, j[2], eV),
                    I(eM, j[3], eV),
                    em && I(s, "click", ez, !0, !0),
                    eu && I(s, "click", eJ),
                    ea && I(eM, "gesturestart", e$),
                    eo && I(eM, "gestureend", eX),
                    et && I(s, g + "enter", eZ),
                    er && I(s, g + "leave", eQ),
                    ei && I(s, g + "move", eK)),
                  (eS.isEnabled = !0),
                  (eS.isDragging =
                    eS.isGesturing =
                    eS.isPressed =
                    eb =
                    ey =
                      !1),
                  eS._vx.reset(),
                  eS._vy.reset(),
                  (eL = eT()),
                  (ek = e_()),
                  e && e.type && eW(e),
                  ec && ec(eS)),
                eS
              );
            }),
            (eS.disable = function () {
              eS.isEnabled &&
                (E.filter(function (e) {
                  return e !== eS && R(e.target);
                }).length || M(eI ? eM : s, "scroll", P),
                eS.isPressed &&
                  (eS._vx.reset(),
                  eS._vy.reset(),
                  M(en ? s : eM, j[1], eq, !0)),
                M(eI ? eM : s, "scroll", eG, ep),
                M(s, "wheel", eU, ep),
                M(s, j[0], eW, ep),
                M(eM, j[2], eV),
                M(eM, j[3], eV),
                M(s, "click", ez, !0),
                M(s, "click", eJ),
                M(eM, "gesturestart", e$),
                M(eM, "gestureend", eX),
                M(s, g + "enter", eZ),
                M(s, g + "leave", eQ),
                M(s, g + "move", eK),
                (eS.isEnabled = eS.isPressed = eS.isDragging = !1),
                ed && ed(eS));
            }),
            (eS.kill = eS.revert =
              function () {
                eS.disable();
                var e = E.indexOf(eS);
                (e >= 0 && E.splice(e, 1), b === eS && (b = 0));
              }),
            E.push(eS),
            en && R(s) && (b = eS),
            eS.enable(S));
        }),
        (e = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i));
          }
        })(t.prototype, e),
        t
      );
    })();
    ((U.version = "3.13.0"),
      (U.create = function (e) {
        return new U(e);
      }),
      (U.register = G),
      (U.getAll = function () {
        return E.slice();
      }),
      (U.getById = function (e) {
        return E.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      w() && d.registerPlugin(U));
    var K,
      Z,
      Q,
      J,
      ee,
      et,
      er,
      ei,
      es,
      en,
      ea,
      eo,
      el,
      ec,
      ed,
      eu,
      eh,
      ep,
      em,
      ef,
      ev,
      eg,
      ex,
      ey,
      eb,
      ej,
      eN,
      ew,
      eS,
      eE,
      eA,
      eC,
      eT,
      e_,
      eL,
      ek,
      eR,
      eI,
      eM = 1,
      eO = Date.now,
      eD = eO(),
      eP = 0,
      ez = 0,
      eH = function (e, t, r) {
        var i = eJ(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return ((r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e);
      },
      eF = function (e, t) {
        return t && (!eJ(e) || "clamp(" !== e.substr(0, 6))
          ? "clamp(" + e + ")"
          : e;
      },
      eB = function () {
        return (ec = 1);
      },
      eY = function () {
        return (ec = 0);
      },
      eq = function (e) {
        return e;
      },
      eW = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      eV = function () {
        return "undefined" != typeof window;
      },
      e$ = function () {
        return K || (eV() && (K = window.gsap) && K.registerPlugin && K);
      },
      eX = function (e) {
        return !!~er.indexOf(e);
      },
      eG = function (e) {
        return (
          ("Height" === e ? eA : Q["inner" + e]) ||
          ee["client" + e] ||
          et["client" + e]
        );
      },
      eU = function (e) {
        return (
          k(e, "getBoundingClientRect") ||
          (eX(e)
            ? function () {
                return ((t1.width = Q.innerWidth), (t1.height = eA), t1);
              }
            : function () {
                return tu(e);
              })
        );
      },
      eK = function (e, t, r) {
        var i = r.d,
          s = r.d2,
          n = r.a;
        return (n = k(e, "getBoundingClientRect"))
          ? function () {
              return n()[i];
            }
          : function () {
              return (t ? eG(s) : e["client" + s]) || 0;
            };
      },
      eZ = function (e, t) {
        var r = t.s,
          i = t.d2,
          s = t.d,
          n = t.a;
        return Math.max(
          0,
          (n = k(e, (r = "scroll" + i)))
            ? n() - eU(e)()[s]
            : eX(e)
              ? (ee[r] || et[r]) - eG(i)
              : e[r] - e["offset" + i],
        );
      },
      eQ = function (e, t) {
        for (var r = 0; r < em.length; r += 3)
          (!t || ~t.indexOf(em[r + 1])) && e(em[r], em[r + 1], em[r + 2]);
      },
      eJ = function (e) {
        return "string" == typeof e;
      },
      e0 = function (e) {
        return "function" == typeof e;
      },
      e1 = function (e) {
        return "number" == typeof e;
      },
      e2 = function (e) {
        return "object" == typeof e;
      },
      e5 = function (e, t, r) {
        return e && e.progress(+!t) && r && e.pause();
      },
      e3 = function (e, t) {
        if (e.enabled) {
          var r = e._ctx
            ? e._ctx.add(function () {
                return t(e);
              })
            : t(e);
          r && r.totalTime && (e.callbackAnimation = r);
        }
      },
      e6 = Math.abs,
      e4 = "left",
      e8 = "right",
      e9 = "bottom",
      e7 = "width",
      te = "height",
      tt = "Right",
      tr = "Left",
      ti = "Bottom",
      ts = "padding",
      tn = "margin",
      ta = "Width",
      to = "Height",
      tl = function (e) {
        return Q.getComputedStyle(e);
      },
      tc = function (e) {
        var t = tl(e).position;
        e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
      },
      td = function (e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e;
      },
      tu = function (e, t) {
        var r =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== tl(e)[ed] &&
            K.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          i = e.getBoundingClientRect();
        return (r && r.progress(0).kill(), i);
      },
      th = function (e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
      },
      tp = function (e) {
        var t,
          r = [],
          i = e.labels,
          s = e.duration();
        for (t in i) r.push(i[t] / s);
        return r;
      },
      tm = function (e) {
        var t = K.utils.snap(e),
          r =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return r
          ? function (e, i, s) {
              var n;
              if ((void 0 === s && (s = 0.001), !i)) return t(e);
              if (i > 0) {
                for (e -= s, n = 0; n < r.length; n++)
                  if (r[n] >= e) return r[n];
                return r[n - 1];
              }
              for (n = r.length, e += s; n--; ) if (r[n] <= e) return r[n];
              return r[0];
            }
          : function (r, i, s) {
              void 0 === s && (s = 0.001);
              var n = t(r);
              return !i || Math.abs(n - r) < s || n - r < 0 == i < 0
                ? n
                : t(i < 0 ? r - e : r + e);
            };
      },
      tf = function (e, t, r, i) {
        return r.split(",").forEach(function (r) {
          return e(t, r, i);
        });
      },
      tv = function (e, t, r, i, s) {
        return e.addEventListener(t, r, { passive: !i, capture: !!s });
      },
      tg = function (e, t, r, i) {
        return e.removeEventListener(t, r, !!i);
      },
      tx = function (e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
      },
      ty = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      tb = { toggleActions: "play", anticipatePin: 0 },
      tj = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      tN = function (e, t) {
        if (eJ(e)) {
          var r = e.indexOf("="),
            i = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
          (~r &&
            (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
            (e =
              i +
              (e in tj
                ? tj[e] * t
                : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0)));
        }
        return e;
      },
      tw = function (e, t, r, i, s, n, a, o) {
        var l = s.startColor,
          c = s.endColor,
          d = s.fontSize,
          u = s.indent,
          h = s.fontWeight,
          p = J.createElement("div"),
          m = eX(r) || "fixed" === k(r, "pinType"),
          f = -1 !== e.indexOf("scroller"),
          v = m ? et : r,
          g = -1 !== e.indexOf("start"),
          x = g ? l : c,
          y =
            "border-color:" +
            x +
            ";font-size:" +
            d +
            ";color:" +
            x +
            ";font-weight:" +
            h +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (y += "position:" + ((f || o) && m ? "fixed;" : "absolute;")),
          (f || o || !m) &&
            (y += (i === F ? e8 : e9) + ":" + (n + parseFloat(u)) + "px;"),
          a &&
            (y +=
              "box-sizing:border-box;text-align:left;width:" +
              a.offsetWidth +
              "px;"),
          (p._isStart = g),
          p.setAttribute(
            "class",
            "gsap-marker-" + e + (t ? " marker-" + t : ""),
          ),
          (p.style.cssText = y),
          (p.innerText = t || 0 === t ? e + "-" + t : e),
          v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
          (p._offset = p["offset" + i.op.d2]),
          tS(p, 0, i, g),
          p
        );
      },
      tS = function (e, t, r, i) {
        var s = { display: "block" },
          n = r[i ? "os2" : "p2"],
          a = r[i ? "p2" : "os2"];
        ((e._isFlipped = i),
          (s[r.a + "Percent"] = i ? -100 : 0),
          (s[r.a] = i ? "1px" : 0),
          (s["border" + n + ta] = 1),
          (s["border" + a + ta] = 0),
          (s[r.p] = t + "px"),
          K.set(e, s));
      },
      tE = [],
      tA = {},
      tC = function () {
        return eO() - eP > 34 && (eL || (eL = requestAnimationFrame(t$)));
      },
      tT = function () {
        (ex && ex.isPressed && !(ex.startX > et.clientWidth)) ||
          (A.cache++,
          ex ? eL || (eL = requestAnimationFrame(t$)) : t$(),
          eP || tM("scrollStart"),
          (eP = eO()));
      },
      t_ = function () {
        ((ej = Q.innerWidth), (eb = Q.innerHeight));
      },
      tL = function (e) {
        (A.cache++,
          (!0 === e ||
            (!el &&
              !eg &&
              !J.fullscreenElement &&
              !J.webkitFullscreenElement &&
              (!ey ||
                ej !== Q.innerWidth ||
                Math.abs(Q.innerHeight - eb) > 0.25 * Q.innerHeight))) &&
            ei.restart(!0));
      },
      tk = {},
      tR = [],
      tI = function e() {
        return tg(t9, "scrollEnd", e) || tq(!0);
      },
      tM = function (e) {
        return (
          (tk[e] &&
            tk[e].map(function (e) {
              return e();
            })) ||
          tR
        );
      },
      tO = [],
      tD = function (e) {
        for (var t = 0; t < tO.length; t += 5)
          (!e || (tO[t + 4] && tO[t + 4].query === e)) &&
            ((tO[t].style.cssText = tO[t + 1]),
            tO[t].getBBox && tO[t].setAttribute("transform", tO[t + 2] || ""),
            (tO[t + 3].uncache = 1));
      },
      tP = function (e, t) {
        var r;
        for (eu = 0; eu < tE.length; eu++)
          (r = tE[eu]) &&
            (!t || r._ctx === t) &&
            (e ? r.kill(1) : r.revert(!0, !0));
        ((eC = !0), t && tD(t), t || tM("revert"));
      },
      tz = function (e, t) {
        (A.cache++,
          (t || !ek) &&
            A.forEach(function (e) {
              return e0(e) && e.cacheID++ && (e.rec = 0);
            }),
          eJ(e) && (Q.history.scrollRestoration = eS = e));
      },
      tH = 0,
      tF = function () {
        if (eR !== tH) {
          var e = (eR = tH);
          requestAnimationFrame(function () {
            return e === tH && tq(!0);
          });
        }
      },
      tB = function () {
        (et.appendChild(eE),
          (eA = (!ex && eE.offsetHeight) || Q.innerHeight),
          et.removeChild(eE));
      },
      tY = function (e) {
        return es(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (t) {
          return (t.style.display = e ? "none" : "block");
        });
      },
      tq = function (e, t) {
        if (
          ((ee = J.documentElement),
          (et = J.body),
          (er = [Q, J, ee, et]),
          eP && !e && !eC)
        )
          return void tv(t9, "scrollEnd", tI);
        (tB(),
          (ek = t9.isRefreshing = !0),
          A.forEach(function (e) {
            return e0(e) && ++e.cacheID && (e.rec = e());
          }));
        var r = tM("refreshInit");
        (ef && t9.sort(),
          t || tP(),
          A.forEach(function (e) {
            e0(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          tE.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (eC = !1),
          tE.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh());
            }
          }),
          (eT = 1),
          tY(!0),
          tE.forEach(function (e) {
            var t = eZ(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              i = e._startClamp && e.start >= t;
            (r || i) &&
              e.setPositions(
                i ? t - 1 : e.start,
                r ? Math.max(i ? t : e.start + 1, t) : e.end,
                !0,
              );
          }),
          tY(!1),
          (eT = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          A.forEach(function (e) {
            e0(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          tz(eS, 1),
          ei.pause(),
          tH++,
          (ek = 2),
          t$(2),
          tE.forEach(function (e) {
            return e0(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (ek = t9.isRefreshing = !1),
          tM("refresh"));
      },
      tW = 0,
      tV = 1,
      t$ = function (e) {
        if (2 === e || (!ek && !eC)) {
          ((t9.isUpdating = !0), eI && eI.update(0));
          var t = tE.length,
            r = eO(),
            i = r - eD >= 50,
            s = t && tE[0].scroll();
          if (
            ((tV = tW > s ? -1 : 1),
            ek || (tW = s),
            i &&
              (eP && !ec && r - eP > 200 && ((eP = 0), tM("scrollEnd")),
              (ea = eD),
              (eD = r)),
            tV < 0)
          ) {
            for (eu = t; eu-- > 0; ) tE[eu] && tE[eu].update(0, i);
            tV = 1;
          } else for (eu = 0; eu < t; eu++) tE[eu] && tE[eu].update(0, i);
          t9.isUpdating = !1;
        }
        eL = 0;
      },
      tX = [
        e4,
        "top",
        e9,
        e8,
        tn + ti,
        tn + tt,
        tn + "Top",
        tn + tr,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      tG = tX.concat([
        e7,
        te,
        "boxSizing",
        "max" + ta,
        "max" + to,
        "position",
        tn,
        ts,
        ts + "Top",
        ts + tt,
        ts + ti,
        ts + tr,
      ]),
      tU = function (e, t, r) {
        tQ(r);
        var i = e._gsap;
        if (i.spacerIsNative) tQ(i.spacerState);
        else if (e._gsap.swappedIn) {
          var s = t.parentNode;
          s && (s.insertBefore(e, t), s.removeChild(t));
        }
        e._gsap.swappedIn = !1;
      },
      tK = function (e, t, r, i) {
        if (!e._gsap.swappedIn) {
          for (var s, n = tX.length, a = t.style, o = e.style; n--; )
            a[(s = tX[n])] = r[s];
          ((a.position = "absolute" === r.position ? "absolute" : "relative"),
            "inline" === r.display && (a.display = "inline-block"),
            (o[e9] = o[e8] = "auto"),
            (a.flexBasis = r.flexBasis || "auto"),
            (a.overflow = "visible"),
            (a.boxSizing = "border-box"),
            (a[e7] = th(e, H) + "px"),
            (a[te] = th(e, F) + "px"),
            (a[ts] = o[tn] = o.top = o[e4] = "0"),
            tQ(i),
            (o[e7] = o["max" + ta] = r[e7]),
            (o[te] = o["max" + to] = r[te]),
            (o[ts] = r[ts]),
            e.parentNode !== t &&
              (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0));
        }
      },
      tZ = /([A-Z])/g,
      tQ = function (e) {
        if (e) {
          var t,
            r,
            i = e.t.style,
            s = e.length,
            n = 0;
          for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; n < s; n += 2)
            ((r = e[n + 1]),
              (t = e[n]),
              r
                ? (i[t] = r)
                : i[t] && i.removeProperty(t.replace(tZ, "-$1").toLowerCase()));
        }
      },
      tJ = function (e) {
        for (var t = tG.length, r = e.style, i = [], s = 0; s < t; s++)
          i.push(tG[s], r[tG[s]]);
        return ((i.t = e), i);
      },
      t0 = function (e, t, r) {
        for (var i, s = [], n = e.length, a = 8 * !!r; a < n; a += 2)
          ((i = e[a]), s.push(i, i in t ? t[i] : e[a + 1]));
        return ((s.t = e.t), s);
      },
      t1 = { left: 0, top: 0 },
      t2 = function (e, t, r, i, s, n, a, o, l, c, d, u, h, p) {
        (e0(e) && (e = e(o)),
          eJ(e) &&
            "max" === e.substr(0, 3) &&
            (e = u + ("=" === e.charAt(4) ? tN("0" + e.substr(3), r) : 0)));
        var m,
          f,
          v,
          g = h ? h.time() : 0;
        if ((h && h.seek(0), isNaN(e) || (e *= 1), e1(e)))
          (h &&
            (e = K.utils.mapRange(
              h.scrollTrigger.start,
              h.scrollTrigger.end,
              0,
              u,
              e,
            )),
            a && tS(a, r, i, !0));
        else {
          e0(t) && (t = t(o));
          var x,
            y,
            b,
            j,
            N = (e || "0").split(" ");
          ((x = tu((v = B(t, o) || et)) || {}).left ||
            x.top ||
            "none" !== tl(v).display ||
            ((j = v.style.display),
            (v.style.display = "block"),
            (x = tu(v)),
            j ? (v.style.display = j) : v.style.removeProperty("display")),
            (y = tN(N[0], x[i.d])),
            (b = tN(N[1] || "0", r)),
            (e = x[i.p] - l[i.p] - c + y + s - b),
            a && tS(a, b, i, r - b < 20 || (a._isStart && b > 20)),
            (r -= r - b));
        }
        if ((p && ((o[p] = e || -0.001), e < 0 && (e = 0)), n)) {
          var w = e + r,
            S = n._isStart;
          ((m = "scroll" + i.d2),
            tS(
              n,
              w,
              i,
              (S && w > 20) ||
                (!S && (d ? Math.max(et[m], ee[m]) : n.parentNode[m]) <= w + 1),
            ),
            d &&
              ((l = tu(a)),
              d && (n.style[i.op.p] = l[i.op.p] - i.op.m - n._offset + "px")));
        }
        return (
          h &&
            v &&
            ((m = tu(v)),
            h.seek(u),
            (f = tu(v)),
            (h._caScrollDist = m[i.p] - f[i.p]),
            (e = (e / h._caScrollDist) * u)),
          h && h.seek(g),
          h ? e : Math.round(e)
        );
      },
      t5 = /(webkit|moz|length|cssText|inset)/i,
      t3 = function (e, t, r, i) {
        if (e.parentNode !== t) {
          var s,
            n,
            a = e.style;
          if (t === et) {
            for (s in ((e._stOrig = a.cssText), (n = tl(e))))
              +s ||
                t5.test(s) ||
                !n[s] ||
                "string" != typeof a[s] ||
                "0" === s ||
                (a[s] = n[s]);
            ((a.top = r), (a.left = i));
          } else a.cssText = e._stOrig;
          ((K.core.getCache(e).uncache = 1), t.appendChild(e));
        }
      },
      t6 = function (e, t, r) {
        var i = t,
          s = i;
        return function (t) {
          var n = Math.round(e());
          return (
            n !== i &&
              n !== s &&
              Math.abs(n - i) > 3 &&
              Math.abs(n - s) > 3 &&
              ((t = n), r && r()),
            (s = i),
            (i = Math.round(t))
          );
        };
      },
      t4 = function (e, t, r) {
        var i = {};
        ((i[t.p] = "+=" + r), K.set(e, i));
      },
      t8 = function (e, t) {
        var r = q(e, t),
          i = "_scroll" + t.p2,
          s = function t(s, n, a, o, l) {
            var c = t.tween,
              d = n.onComplete,
              u = {};
            a = a || r();
            var h = t6(r, a, function () {
              (c.kill(), (t.tween = 0));
            });
            return (
              (l = (o && l) || 0),
              (o = o || s - a),
              c && c.kill(),
              (n[i] = s),
              (n.inherit = !1),
              (n.modifiers = u),
              (u[i] = function () {
                return h(a + o * c.ratio + l * c.ratio * c.ratio);
              }),
              (n.onUpdate = function () {
                (A.cache++, t.tween && t$());
              }),
              (n.onComplete = function () {
                ((t.tween = 0), d && d.call(c));
              }),
              (c = t.tween = K.to(e, n))
            );
          };
        return (
          (e[i] = r),
          (r.wheelHandler = function () {
            return s.tween && s.tween.kill() && (s.tween = 0);
          }),
          tv(e, "wheel", r.wheelHandler),
          t9.isTouch && tv(e, "touchmove", r.wheelHandler),
          s
        );
      },
      t9 = (function () {
        function e(t, r) {
          (Z ||
            e.register(K) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            ew(this),
            this.init(t, r));
        }
        return (
          (e.prototype.init = function (t, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !ez)
            ) {
              this.update = this.refresh = this.kill = eq;
              return;
            }
            var i,
              s,
              n,
              a,
              o,
              l,
              c,
              d,
              u,
              h,
              p,
              m,
              f,
              v,
              g,
              x,
              y,
              b,
              j,
              N,
              w,
              S,
              E,
              T,
              _,
              L,
              R,
              I,
              M,
              O,
              D,
              P,
              z,
              Y,
              W,
              V,
              $,
              X,
              G,
              U,
              Z,
              er = (t = td(
                eJ(t) || e1(t) || t.nodeType ? { trigger: t } : t,
                tb,
              )),
              ei = er.onUpdate,
              eo = er.toggleClass,
              ed = er.id,
              eh = er.onToggle,
              ep = er.onRefresh,
              em = er.scrub,
              eg = er.trigger,
              ex = er.pin,
              ey = er.pinSpacing,
              eb = er.invalidateOnRefresh,
              ej = er.anticipatePin,
              eN = er.onScrubComplete,
              ew = er.onSnapComplete,
              eS = er.once,
              eE = er.snap,
              eA = er.pinReparent,
              eC = er.pinSpacer,
              eL = er.containerAnimation,
              eR = er.fastScrollEnd,
              eD = er.preventOverlaps,
              eB =
                t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                  ? H
                  : F,
              eY = !em && 0 !== em,
              eV = B(t.scroller || Q),
              e$ = K.core.getCache(eV),
              eG = eX(eV),
              eQ =
                ("pinType" in t
                  ? t.pinType
                  : k(eV, "pinType") || (eG && "fixed")) === "fixed",
              e4 = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              e8 = eY && t.toggleActions.split(" "),
              e9 = "markers" in t ? t.markers : tb.markers,
              tf = eG ? 0 : parseFloat(tl(eV)["border" + eB.p2 + ta]) || 0,
              tx = this,
              tj =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(tx);
                },
              tS = eK(eV, eG, eB),
              tC =
                !eG || ~C.indexOf(eV)
                  ? eU(eV)
                  : function () {
                      return t1;
                    },
              t_ = 0,
              tk = 0,
              tR = 0,
              tM = q(eV, eB);
            if (
              ((tx._startClamp = tx._endClamp = !1),
              (tx._dir = eB),
              (ej *= 45),
              (tx.scroller = eV),
              (tx.scroll = eL ? eL.time.bind(eL) : tM),
              (l = tM()),
              (tx.vars = t),
              (r = r || t.animation),
              "refreshPriority" in t &&
                ((ef = 1), -9999 === t.refreshPriority && (eI = tx)),
              (e$.tweenScroll = e$.tweenScroll || {
                top: t8(eV, F),
                left: t8(eV, H),
              }),
              (tx.tweenTo = n = e$.tweenScroll[eB.p]),
              (tx.scrubDuration = function (e) {
                (W = e1(e) && e)
                  ? Y
                    ? Y.duration(e)
                    : (Y = K.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: W,
                        paused: !0,
                        onComplete: function () {
                          return eN && eN(tx);
                        },
                      }))
                  : (Y && Y.progress(1).kill(), (Y = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !tx.isReverted) ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== t.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (tx.animation = r.pause()),
                (r.scrollTrigger = tx),
                tx.scrubDuration(em),
                (P = 0),
                ed || (ed = r.vars.id)),
              eE &&
                ((!e2(eE) || eE.push) && (eE = { snapTo: eE }),
                "scrollBehavior" in et.style &&
                  K.set(eG ? [et, ee] : eV, { scrollBehavior: "auto" }),
                A.forEach(function (e) {
                  return (
                    e0(e) &&
                    e.target === (eG ? J.scrollingElement || ee : eV) &&
                    (e.smooth = !1)
                  );
                }),
                (o = e0(eE.snapTo)
                  ? eE.snapTo
                  : "labels" === eE.snapTo
                    ? ((i = r),
                      function (e) {
                        return K.utils.snap(tp(i), e);
                      })
                    : "labelsDirectional" === eE.snapTo
                      ? ((s = r),
                        function (e, t) {
                          return tm(tp(s))(e, t.direction);
                        })
                      : !1 !== eE.directional
                        ? function (e, t) {
                            return tm(eE.snapTo)(
                              e,
                              eO() - tk < 500 ? 0 : t.direction,
                            );
                          }
                        : K.utils.snap(eE.snapTo)),
                (V = e2((V = eE.duration || { min: 0.1, max: 2 }))
                  ? en(V.min, V.max)
                  : en(V, V)),
                ($ = K.delayedCall(eE.delay || W / 2 || 0.1, function () {
                  var e = tM(),
                    t = eO() - tk < 500,
                    i = n.tween;
                  if (
                    (t || 10 > Math.abs(tx.getVelocity())) &&
                    !i &&
                    !ec &&
                    t_ !== e
                  ) {
                    var s,
                      a,
                      l = (e - d) / x,
                      c = r && !eY ? r.totalProgress() : l,
                      h = t ? 0 : ((c - z) / (eO() - ea)) * 1e3 || 0,
                      p = K.utils.clamp(-l, 1 - l, (e6(h / 2) * h) / 0.185),
                      m = l + (!1 === eE.inertia ? 0 : p),
                      f = eE,
                      v = f.onStart,
                      g = f.onInterrupt,
                      y = f.onComplete;
                    if (
                      (e1((s = o(m, tx))) || (s = m),
                      (a = Math.max(0, Math.round(d + s * x))),
                      e <= u && e >= d && a !== e)
                    ) {
                      if (i && !i._initted && i.data <= e6(a - e)) return;
                      (!1 === eE.inertia && (p = s - l),
                        n(
                          a,
                          {
                            duration: V(
                              e6(
                                (0.185 * Math.max(e6(m - c), e6(s - c))) /
                                  h /
                                  0.05 || 0,
                              ),
                            ),
                            ease: eE.ease || "power3",
                            data: e6(a - e),
                            onInterrupt: function () {
                              return $.restart(!0) && g && g(tx);
                            },
                            onComplete: function () {
                              (tx.update(),
                                (t_ = tM()),
                                r &&
                                  !eY &&
                                  (Y
                                    ? Y.resetTo(
                                        "totalProgress",
                                        s,
                                        r._tTime / r._tDur,
                                      )
                                    : r.progress(s)),
                                (P = z =
                                  r && !eY ? r.totalProgress() : tx.progress),
                                ew && ew(tx),
                                y && y(tx));
                            },
                          },
                          e,
                          p * x,
                          a - e - p * x,
                        ),
                        v && v(tx, n.tween));
                    }
                  } else tx.isActive && t_ !== e && $.restart(!0);
                }).pause())),
              ed && (tA[ed] = tx),
              (Z =
                (eg = tx.trigger = B(eg || (!0 !== ex && ex))) &&
                eg._gsap &&
                eg._gsap.stRevert) && (Z = Z(tx)),
              (ex = !0 === ex ? eg : B(ex)),
              eJ(eo) && (eo = { targets: eg, className: eo }),
              ex &&
                (!1 === ey ||
                  ey === tn ||
                  (ey =
                    (!!ey ||
                      !ex.parentNode ||
                      !ex.parentNode.style ||
                      "flex" !== tl(ex.parentNode).display) &&
                    ts),
                (tx.pin = ex),
                (a = K.core.getCache(ex)).spacer
                  ? (y = a.pinState)
                  : (eC &&
                      ((eC = B(eC)) &&
                        !eC.nodeType &&
                        (eC = eC.current || eC.nativeElement),
                      (a.spacerIsNative = !!eC),
                      eC && (a.spacerState = tJ(eC))),
                    (a.spacer = N = eC || J.createElement("div")),
                    N.classList.add("pin-spacer"),
                    ed && N.classList.add("pin-spacer-" + ed),
                    (a.pinState = y = tJ(ex))),
                !1 !== t.force3D && K.set(ex, { force3D: !0 }),
                (tx.spacer = N = a.spacer),
                (L = (D = tl(ex))[ey + eB.os2]),
                (S = K.getProperty(ex)),
                (E = K.quickSetter(ex, eB.a, "px")),
                tK(ex, N, D),
                (j = tJ(ex))),
              e9)
            ) {
              ((v = e2(e9) ? td(e9, ty) : ty),
                (m = tw("scroller-start", ed, eV, eB, v, 0)),
                (f = tw("scroller-end", ed, eV, eB, v, 0, m)),
                (w = m["offset" + eB.op.d2]));
              var tO = B(k(eV, "content") || eV);
              ((h = this.markerStart = tw("start", ed, tO, eB, v, w, 0, eL)),
                (p = this.markerEnd = tw("end", ed, tO, eB, v, w, 0, eL)),
                eL && (U = K.quickSetter([h, p], eB.a, "px")),
                eQ ||
                  (C.length && !0 === k(eV, "fixedMarkers")) ||
                  (tc(eG ? et : eV),
                  K.set([m, f], { force3D: !0 }),
                  (I = K.quickSetter(m, eB.a, "px")),
                  (O = K.quickSetter(f, eB.a, "px"))));
            }
            if (eL) {
              var tD = eL.vars.onUpdate,
                tP = eL.vars.onUpdateParams;
              eL.eventCallback("onUpdate", function () {
                (tx.update(0, 0, 1), tD && tD.apply(eL, tP || []));
              });
            }
            if (
              ((tx.previous = function () {
                return tE[tE.indexOf(tx) - 1];
              }),
              (tx.next = function () {
                return tE[tE.indexOf(tx) + 1];
              }),
              (tx.revert = function (e, t) {
                if (!t) return tx.kill(!0);
                var i = !1 !== e || !tx.enabled,
                  s = el;
                i !== tx.isReverted &&
                  (i &&
                    ((X = Math.max(tM(), tx.scroll.rec || 0)),
                    (tR = tx.progress),
                    (G = r && r.progress())),
                  h &&
                    [h, p, m, f].forEach(function (e) {
                      return (e.style.display = i ? "none" : "block");
                    }),
                  i && ((el = tx), tx.update(i)),
                  !ex ||
                    (eA && tx.isActive) ||
                    (i ? tU(ex, N, y) : tK(ex, N, tl(ex), R)),
                  i || tx.update(i),
                  (el = s),
                  (tx.isReverted = i));
              }),
              (tx.refresh = function (i, s, a, o) {
                if ((!el && tx.enabled) || s) {
                  if (ex && i && eP) return void tv(e, "scrollEnd", tI);
                  (!ek && tj && tj(tx),
                    (el = tx),
                    n.tween && !a && (n.tween.kill(), (n.tween = 0)),
                    Y && Y.pause(),
                    eb &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren &&
                        r.getChildren(!0, !0, !1).forEach(function (e) {
                          return e.vars.immediateRender && e.render(0, !0, !0);
                        })),
                    tx.isReverted || tx.revert(!0, !0),
                    (tx._subPinOffset = !1));
                  var v,
                    w,
                    E,
                    A,
                    C,
                    L,
                    k,
                    I,
                    O,
                    D,
                    P,
                    z,
                    W,
                    V = tS(),
                    U = tC(),
                    Z = eL ? eL.duration() : eZ(eV, eB),
                    Q = x <= 0.01 || !x,
                    er = 0,
                    ei = o || 0,
                    es = e2(a) ? a.end : t.end,
                    en = t.endTrigger || eg,
                    ea = e2(a)
                      ? a.start
                      : t.start ||
                        (0 !== t.start && eg ? (ex ? "0 0" : "0 100%") : 0),
                    eo = (tx.pinnedContainer =
                      t.pinnedContainer && B(t.pinnedContainer, tx)),
                    ec = (eg && Math.max(0, tE.indexOf(tx))) || 0,
                    ed = ec;
                  for (
                    e9 &&
                    e2(a) &&
                    ((z = K.getProperty(m, eB.p)),
                    (W = K.getProperty(f, eB.p)));
                    ed-- > 0;
                  )
                    ((L = tE[ed]).end || L.refresh(0, 1) || (el = tx),
                      (k = L.pin) &&
                        (k === eg || k === ex || k === eo) &&
                        !L.isReverted &&
                        (D || (D = []), D.unshift(L), L.revert(!0, !0)),
                      L !== tE[ed] && (ec--, ed--));
                  for (
                    e0(ea) && (ea = ea(tx)),
                      d =
                        t2(
                          (ea = eH(ea, "start", tx)),
                          eg,
                          V,
                          eB,
                          tM(),
                          h,
                          m,
                          tx,
                          U,
                          tf,
                          eQ,
                          Z,
                          eL,
                          tx._startClamp && "_startClamp",
                        ) || (ex ? -0.001 : 0),
                      e0(es) && (es = es(tx)),
                      eJ(es) &&
                        !es.indexOf("+=") &&
                        (~es.indexOf(" ")
                          ? (es = (eJ(ea) ? ea.split(" ")[0] : "") + es)
                          : ((er = tN(es.substr(2), V)),
                            (es = eJ(ea)
                              ? ea
                              : (eL
                                  ? K.utils.mapRange(
                                      0,
                                      eL.duration(),
                                      eL.scrollTrigger.start,
                                      eL.scrollTrigger.end,
                                      d,
                                    )
                                  : d) + er),
                            (en = eg))),
                      es = eH(es, "end", tx),
                      u =
                        Math.max(
                          d,
                          t2(
                            es || (en ? "100% 0" : Z),
                            en,
                            V,
                            eB,
                            tM() + er,
                            p,
                            f,
                            tx,
                            U,
                            tf,
                            eQ,
                            Z,
                            eL,
                            tx._endClamp && "_endClamp",
                          ),
                        ) || -0.001,
                      er = 0,
                      ed = ec;
                    ed--;
                  )
                    (k = (L = tE[ed]).pin) &&
                      L.start - L._pinPush <= d &&
                      !eL &&
                      L.end > 0 &&
                      ((v =
                        L.end -
                        (tx._startClamp ? Math.max(0, L.start) : L.start)),
                      ((k === eg && L.start - L._pinPush < d) || k === eo) &&
                        isNaN(ea) &&
                        (er += v * (1 - L.progress)),
                      k === ex && (ei += v));
                  if (
                    ((d += er),
                    (u += er),
                    tx._startClamp && (tx._startClamp += er),
                    tx._endClamp &&
                      !ek &&
                      ((tx._endClamp = u || -0.001),
                      (u = Math.min(u, eZ(eV, eB)))),
                    (x = u - d || ((d -= 0.01) && 0.001)),
                    Q && (tR = K.utils.clamp(0, 1, K.utils.normalize(d, u, X))),
                    (tx._pinPush = ei),
                    h &&
                      er &&
                      (((v = {})[eB.a] = "+=" + er),
                      eo && (v[eB.p] = "-=" + tM()),
                      K.set([h, p], v)),
                    ex && !(eT && tx.end >= eZ(eV, eB)))
                  )
                    ((v = tl(ex)),
                      (A = eB === F),
                      (E = tM()),
                      (T = parseFloat(S(eB.a)) + ei),
                      !Z &&
                        u > 1 &&
                        ((P = {
                          style: (P = (eG ? J.scrollingElement || ee : eV)
                            .style),
                          value: P["overflow" + eB.a.toUpperCase()],
                        }),
                        eG &&
                          "scroll" !==
                            tl(et)["overflow" + eB.a.toUpperCase()] &&
                          (P.style["overflow" + eB.a.toUpperCase()] =
                            "scroll")),
                      tK(ex, N, v),
                      (j = tJ(ex)),
                      (w = tu(ex, !0)),
                      (I = eQ && q(eV, A ? H : F)()),
                      ey
                        ? (((R = [ey + eB.os2, x + ei + "px"]).t = N),
                          (ed = ey === ts ? th(ex, eB) + x + ei : 0) &&
                            (R.push(eB.d, ed + "px"),
                            "auto" !== N.style.flexBasis &&
                              (N.style.flexBasis = ed + "px")),
                          tQ(R),
                          eo &&
                            tE.forEach(function (e) {
                              e.pin === eo &&
                                !1 !== e.vars.pinSpacing &&
                                (e._subPinOffset = !0);
                            }),
                          eQ && tM(X))
                        : (ed = th(ex, eB)) &&
                          "auto" !== N.style.flexBasis &&
                          (N.style.flexBasis = ed + "px"),
                      eQ &&
                        (((C = {
                          top: w.top + (A ? E - d : I) + "px",
                          left: w.left + (A ? I : E - d) + "px",
                          boxSizing: "border-box",
                          position: "fixed",
                        })[e7] = C["max" + ta] =
                          Math.ceil(w.width) + "px"),
                        (C[te] = C["max" + to] = Math.ceil(w.height) + "px"),
                        (C[tn] =
                          C[tn + "Top"] =
                          C[tn + tt] =
                          C[tn + ti] =
                          C[tn + tr] =
                            "0"),
                        (C[ts] = v[ts]),
                        (C[ts + "Top"] = v[ts + "Top"]),
                        (C[ts + tt] = v[ts + tt]),
                        (C[ts + ti] = v[ts + ti]),
                        (C[ts + tr] = v[ts + tr]),
                        (b = t0(y, C, eA)),
                        ek && tM(0)),
                      r
                        ? ((O = r._initted),
                          ev(1),
                          r.render(r.duration(), !0, !0),
                          (_ = S(eB.a) - T + x + ei),
                          (M = Math.abs(x - _) > 1),
                          eQ && M && b.splice(b.length - 2, 2),
                          r.render(0, !0, !0),
                          O || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          ev(0))
                        : (_ = x),
                      P &&
                        (P.value
                          ? (P.style["overflow" + eB.a.toUpperCase()] = P.value)
                          : P.style.removeProperty("overflow-" + eB.a)));
                  else if (eg && tM() && !eL)
                    for (w = eg.parentNode; w && w !== et; )
                      (w._pinOffset &&
                        ((d -= w._pinOffset), (u -= w._pinOffset)),
                        (w = w.parentNode));
                  (D &&
                    D.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (tx.start = d),
                    (tx.end = u),
                    (l = c = ek ? X : tM()),
                    eL || ek || (l < X && tM(X), (tx.scroll.rec = 0)),
                    tx.revert(!1, !0),
                    (tk = eO()),
                    $ && ((t_ = -1), $.restart(!0)),
                    (el = 0),
                    r &&
                      eY &&
                      (r._initted || G) &&
                      r.progress() !== G &&
                      r.progress(G || 0, !0).render(r.time(), !0, !0),
                    (Q ||
                      tR !== tx.progress ||
                      eL ||
                      eb ||
                      (r && !r._initted)) &&
                      (r &&
                        !eY &&
                        (r._initted || tR || !1 !== r.vars.immediateRender) &&
                        r.totalProgress(
                          eL && d < -0.001 && !tR
                            ? K.utils.normalize(d, u, 0)
                            : tR,
                          !0,
                        ),
                      (tx.progress = Q || (l - d) / x === tR ? 0 : tR)),
                    ex && ey && (N._pinOffset = Math.round(tx.progress * _)),
                    Y && Y.invalidate(),
                    isNaN(z) ||
                      ((z -= K.getProperty(m, eB.p)),
                      (W -= K.getProperty(f, eB.p)),
                      t4(m, eB, z),
                      t4(h, eB, z - (o || 0)),
                      t4(f, eB, W),
                      t4(p, eB, W - (o || 0))),
                    Q && !ek && tx.update(),
                    !ep || ek || g || ((g = !0), ep(tx), (g = !1)));
                }
              }),
              (tx.getVelocity = function () {
                return ((tM() - c) / (eO() - ea)) * 1e3 || 0;
              }),
              (tx.endAnimation = function () {
                (e5(tx.callbackAnimation),
                  r &&
                    (Y
                      ? Y.progress(1)
                      : r.paused()
                        ? eY || e5(r, tx.direction < 0, 1)
                        : e5(r, r.reversed())));
              }),
              (tx.labelToScroll = function (e) {
                return (
                  (r &&
                    r.labels &&
                    (d || tx.refresh() || d) +
                      (r.labels[e] / r.duration()) * x) ||
                  0
                );
              }),
              (tx.getTrailing = function (e) {
                var t = tE.indexOf(tx),
                  r =
                    tx.direction > 0
                      ? tE.slice(0, t).reverse()
                      : tE.slice(t + 1);
                return (
                  eJ(e)
                    ? r.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : r
                ).filter(function (e) {
                  return tx.direction > 0 ? e.end <= d : e.start >= u;
                });
              }),
              (tx.update = function (e, t, i) {
                if (!eL || i || e) {
                  var s,
                    a,
                    o,
                    h,
                    p,
                    f,
                    v,
                    g = !0 === ek ? X : tx.scroll(),
                    y = e ? 0 : (g - d) / x,
                    w = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                    S = tx.progress;
                  if (
                    (t &&
                      ((c = l),
                      (l = eL ? tM() : g),
                      eE && ((z = P), (P = r && !eY ? r.totalProgress() : w))),
                    ej &&
                      ex &&
                      !el &&
                      !eM &&
                      eP &&
                      (!w && d < g + ((g - c) / (eO() - ea)) * ej
                        ? (w = 1e-4)
                        : 1 === w &&
                          u > g + ((g - c) / (eO() - ea)) * ej &&
                          (w = 0.9999)),
                    w !== S && tx.enabled)
                  ) {
                    if (
                      ((h =
                        (p =
                          (s = tx.isActive = !!w && w < 1) != (!!S && S < 1)) ||
                        !!w != !!S),
                      (tx.direction = w > S ? 1 : -1),
                      (tx.progress = w),
                      h &&
                        !el &&
                        ((a = w && !S ? 0 : 1 === w ? 1 : 1 === S ? 2 : 3),
                        eY &&
                          ((o =
                            (!p && "none" !== e8[a + 1] && e8[a + 1]) || e8[a]),
                          (v =
                            r &&
                            ("complete" === o || "reset" === o || o in r)))),
                      eD &&
                        (p || v) &&
                        (v || em || !r) &&
                        (e0(eD)
                          ? eD(tx)
                          : tx.getTrailing(eD).forEach(function (e) {
                              return e.endAnimation();
                            })),
                      !eY &&
                        (!Y || el || eM
                          ? r && r.totalProgress(w, !!(el && (tk || e)))
                          : (Y._dp._time - Y._start !== Y._time &&
                              Y.render(Y._dp._time - Y._start),
                            Y.resetTo
                              ? Y.resetTo(
                                  "totalProgress",
                                  w,
                                  r._tTime / r._tDur,
                                )
                              : ((Y.vars.totalProgress = w),
                                Y.invalidate().restart()))),
                      ex)
                    )
                      if ((e && ey && (N.style[ey + eB.os2] = L), eQ)) {
                        if (h) {
                          if (
                            ((f =
                              !e && w > S && u + 1 > g && g + 1 >= eZ(eV, eB)),
                            eA)
                          )
                            if (!e && (s || f)) {
                              var A = tu(ex, !0),
                                C = g - d;
                              t3(
                                ex,
                                et,
                                A.top + (eB === F ? C : 0) + "px",
                                A.left + (eB === F ? 0 : C) + "px",
                              );
                            } else t3(ex, N);
                          (tQ(s || f ? b : j),
                            (M && w < 1 && s) || E(T + (1 !== w || f ? 0 : _)));
                        }
                      } else E(eW(T + _ * w));
                    (!eE || n.tween || el || eM || $.restart(!0),
                      eo &&
                        (p || (eS && w && (w < 1 || !e_))) &&
                        es(eo.targets).forEach(function (e) {
                          return e.classList[s || eS ? "add" : "remove"](
                            eo.className,
                          );
                        }),
                      !ei || eY || e || ei(tx),
                      h && !el
                        ? (eY &&
                            (v &&
                              ("complete" === o
                                ? r.pause().totalProgress(1)
                                : "reset" === o
                                  ? r.restart(!0).pause()
                                  : "restart" === o
                                    ? r.restart(!0)
                                    : r[o]()),
                            ei && ei(tx)),
                          (p || !e_) &&
                            (eh && p && e3(tx, eh),
                            e4[a] && e3(tx, e4[a]),
                            eS && (1 === w ? tx.kill(!1, 1) : (e4[a] = 0)),
                            !p && e4[(a = 1 === w ? 1 : 3)] && e3(tx, e4[a])),
                          eR &&
                            !s &&
                            Math.abs(tx.getVelocity()) > (e1(eR) ? eR : 2500) &&
                            (e5(tx.callbackAnimation),
                            Y
                              ? Y.progress(1)
                              : e5(r, "reverse" === o ? 1 : !w, 1)))
                        : eY && ei && !el && ei(tx));
                  }
                  if (O) {
                    var k = eL
                      ? (g / eL.duration()) * (eL._caScrollDist || 0)
                      : g;
                    (I(k + +!!m._isFlipped), O(k));
                  }
                  U && U((-g / eL.duration()) * (eL._caScrollDist || 0));
                }
              }),
              (tx.enable = function (t, r) {
                tx.enabled ||
                  ((tx.enabled = !0),
                  tv(eV, "resize", tL),
                  eG || tv(eV, "scroll", tT),
                  tj && tv(e, "refreshInit", tj),
                  !1 !== t && ((tx.progress = tR = 0), (l = c = t_ = tM())),
                  !1 !== r && tx.refresh());
              }),
              (tx.getTween = function (e) {
                return e && n ? n.tween : Y;
              }),
              (tx.setPositions = function (e, t, r, i) {
                if (eL) {
                  var s = eL.scrollTrigger,
                    n = eL.duration(),
                    a = s.end - s.start;
                  ((e = s.start + (a * e) / n), (t = s.start + (a * t) / n));
                }
                (tx.refresh(
                  !1,
                  !1,
                  {
                    start: eF(e, r && !!tx._startClamp),
                    end: eF(t, r && !!tx._endClamp),
                  },
                  i,
                ),
                  tx.update());
              }),
              (tx.adjustPinSpacing = function (e) {
                if (R && e) {
                  var t = R.indexOf(eB.d) + 1;
                  ((R[t] = parseFloat(R[t]) + e + "px"),
                    (R[1] = parseFloat(R[1]) + e + "px"),
                    tQ(R));
                }
              }),
              (tx.disable = function (t, r) {
                if (
                  tx.enabled &&
                  (!1 !== t && tx.revert(!0, !0),
                  (tx.enabled = tx.isActive = !1),
                  r || (Y && Y.pause()),
                  (X = 0),
                  a && (a.uncache = 1),
                  tj && tg(e, "refreshInit", tj),
                  $ && ($.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                  !eG)
                ) {
                  for (var i = tE.length; i--; )
                    if (tE[i].scroller === eV && tE[i] !== tx) return;
                  (tg(eV, "resize", tL), eG || tg(eV, "scroll", tT));
                }
              }),
              (tx.kill = function (e, i) {
                (tx.disable(e, i), Y && !i && Y.kill(), ed && delete tA[ed]);
                var s = tE.indexOf(tx);
                (s >= 0 && tE.splice(s, 1),
                  s === eu && tV > 0 && eu--,
                  (s = 0),
                  tE.forEach(function (e) {
                    return e.scroller === tx.scroller && (s = 1);
                  }),
                  s || ek || (tx.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    e && r.revert({ kill: !1 }),
                    i || r.kill()),
                  h &&
                    [h, p, m, f].forEach(function (e) {
                      return e.parentNode && e.parentNode.removeChild(e);
                    }),
                  eI === tx && (eI = 0),
                  ex &&
                    (a && (a.uncache = 1),
                    (s = 0),
                    tE.forEach(function (e) {
                      return e.pin === ex && s++;
                    }),
                    s || (a.spacer = 0)),
                  t.onKill && t.onKill(tx));
              }),
              tE.push(tx),
              tx.enable(!1, !1),
              Z && Z(tx),
              r && r.add && !x)
            ) {
              var tz = tx.update;
              ((tx.update = function () {
                ((tx.update = tz), A.cache++, d || u || tx.refresh());
              }),
                K.delayedCall(0.01, tx.update),
                (x = 0.01),
                (d = u = 0));
            } else tx.refresh();
            ex && tF();
          }),
          (e.register = function (t) {
            return (
              Z ||
                ((K = t || e$()),
                eV() && window.document && e.enable(),
                (Z = ez)),
              Z
            );
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) tb[t] = e[t];
            return tb;
          }),
          (e.disable = function (e, t) {
            ((ez = 0),
              tE.forEach(function (r) {
                return r[t ? "kill" : "disable"](e);
              }),
              tg(Q, "wheel", tT),
              tg(J, "scroll", tT),
              clearInterval(eo),
              tg(J, "touchcancel", eq),
              tg(et, "touchstart", eq),
              tf(tg, J, "pointerdown,touchstart,mousedown", eB),
              tf(tg, J, "pointerup,touchend,mouseup", eY),
              ei.kill(),
              eQ(tg));
            for (var r = 0; r < A.length; r += 3)
              (tx(tg, A[r], A[r + 1]), tx(tg, A[r], A[r + 2]));
          }),
          (e.enable = function () {
            if (
              ((Q = window),
              (ee = (J = document).documentElement),
              (et = J.body),
              K &&
                ((es = K.utils.toArray),
                (en = K.utils.clamp),
                (ew = K.core.context || eq),
                (ev = K.core.suppressOverwrites || eq),
                (eS = Q.history.scrollRestoration || "auto"),
                (tW = Q.pageYOffset || 0),
                K.core.globals("ScrollTrigger", e),
                et))
            ) {
              ((ez = 1),
                ((eE = document.createElement("div")).style.height = "100vh"),
                (eE.style.position = "absolute"),
                tB(),
                (function e() {
                  return ez && requestAnimationFrame(e);
                })(),
                U.register(K),
                (e.isTouch = U.isTouch),
                (eN =
                  U.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (ey = 1 === U.isTouch),
                tv(Q, "wheel", tT),
                (er = [Q, J, ee, et]),
                K.matchMedia
                  ? ((e.matchMedia = function (e) {
                      var t,
                        r = K.matchMedia();
                      for (t in e) r.add(t, e[t]);
                      return r;
                    }),
                    K.addEventListener("matchMediaInit", function () {
                      return tP();
                    }),
                    K.addEventListener("matchMediaRevert", function () {
                      return tD();
                    }),
                    K.addEventListener("matchMedia", function () {
                      (tq(0, 1), tM("matchMedia"));
                    }),
                    K.matchMedia().add("(orientation: portrait)", function () {
                      return (t_(), t_);
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                t_(),
                tv(J, "scroll", tT));
              var t,
                r,
                i = et.hasAttribute("style"),
                s = et.style,
                n = s.borderTopStyle,
                a = K.core.Animation.prototype;
              for (
                a.revert ||
                  Object.defineProperty(a, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  s.borderTopStyle = "solid",
                  F.m = Math.round((t = tu(et)).top + F.sc()) || 0,
                  H.m = Math.round(t.left + H.sc()) || 0,
                  n
                    ? (s.borderTopStyle = n)
                    : s.removeProperty("border-top-style"),
                  i ||
                    (et.setAttribute("style", ""), et.removeAttribute("style")),
                  eo = setInterval(tC, 250),
                  K.delayedCall(0.5, function () {
                    return (eM = 0);
                  }),
                  tv(J, "touchcancel", eq),
                  tv(et, "touchstart", eq),
                  tf(tv, J, "pointerdown,touchstart,mousedown", eB),
                  tf(tv, J, "pointerup,touchend,mouseup", eY),
                  ed = K.utils.checkPrefix("transform"),
                  tG.push(ed),
                  Z = eO(),
                  ei = K.delayedCall(0.2, tq).pause(),
                  em = [
                    J,
                    "visibilitychange",
                    function () {
                      var e = Q.innerWidth,
                        t = Q.innerHeight;
                      J.hidden
                        ? ((eh = e), (ep = t))
                        : (eh !== e || ep !== t) && tL();
                    },
                    J,
                    "DOMContentLoaded",
                    tq,
                    Q,
                    "load",
                    tq,
                    Q,
                    "resize",
                    tL,
                  ],
                  eQ(tv),
                  tE.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  r = 0;
                r < A.length;
                r += 3
              )
                (tx(tg, A[r], A[r + 1]), tx(tg, A[r], A[r + 2]));
            }
          }),
          (e.config = function (t) {
            "limitCallbacks" in t && (e_ = !!t.limitCallbacks);
            var r = t.syncInterval;
            ((r && clearInterval(eo)) || ((eo = r) && setInterval(tC, r)),
              "ignoreMobileResize" in t &&
                (ey = 1 === e.isTouch && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (eQ(tg) || eQ(tv, t.autoRefreshEvents || "none"),
                (eg = -1 === (t.autoRefreshEvents + "").indexOf("resize"))));
          }),
          (e.scrollerProxy = function (e, t) {
            var r = B(e),
              i = A.indexOf(r),
              s = eX(r);
            (~i && A.splice(i, s ? 6 : 2),
              t && (s ? C.unshift(Q, t, et, t, ee, t) : C.unshift(r, t)));
          }),
          (e.clearMatchMedia = function (e) {
            tE.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, r) {
            var i = (eJ(e) ? B(e) : e).getBoundingClientRect(),
              s = i[r ? e7 : te] * t || 0;
            return r
              ? i.right - s > 0 && i.left + s < Q.innerWidth
              : i.bottom - s > 0 && i.top + s < Q.innerHeight;
          }),
          (e.positionInViewport = function (e, t, r) {
            eJ(e) && (e = B(e));
            var i = e.getBoundingClientRect(),
              s = i[r ? e7 : te],
              n =
                null == t
                  ? s / 2
                  : t in tj
                    ? tj[t] * s
                    : ~t.indexOf("%")
                      ? (parseFloat(t) * s) / 100
                      : parseFloat(t) || 0;
            return r
              ? (i.left + n) / Q.innerWidth
              : (i.top + n) / Q.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (tE.slice(0).forEach(function (e) {
                return "ScrollSmoother" !== e.vars.id && e.kill();
              }),
              !0 !== e)
            ) {
              var t = tk.killAll || [];
              ((tk = {}),
                t.forEach(function (e) {
                  return e();
                }));
            }
          }),
          e
        );
      })();
    ((t9.version = "3.13.0"),
      (t9.saveStyles = function (e) {
        return e
          ? es(e).forEach(function (e) {
              if (e && e.style) {
                var t = tO.indexOf(e);
                (t >= 0 && tO.splice(t, 5),
                  tO.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    K.core.getCache(e),
                    ew(),
                  ));
              }
            })
          : tO;
      }),
      (t9.revert = function (e, t) {
        return tP(!e, t);
      }),
      (t9.create = function (e, t) {
        return new t9(e, t);
      }),
      (t9.refresh = function (e) {
        return e ? tL(!0) : (Z || t9.register()) && tq(!0);
      }),
      (t9.update = function (e) {
        return ++A.cache && t$(2 * (!0 === e));
      }),
      (t9.clearScrollMemory = tz),
      (t9.maxScroll = function (e, t) {
        return eZ(e, t ? H : F);
      }),
      (t9.getScrollFunc = function (e, t) {
        return q(B(e), t ? H : F);
      }),
      (t9.getById = function (e) {
        return tA[e];
      }),
      (t9.getAll = function () {
        return tE.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (t9.isScrolling = function () {
        return !!eP;
      }),
      (t9.snapDirectional = tm),
      (t9.addEventListener = function (e, t) {
        var r = tk[e] || (tk[e] = []);
        ~r.indexOf(t) || r.push(t);
      }),
      (t9.removeEventListener = function (e, t) {
        var r = tk[e],
          i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1);
      }),
      (t9.batch = function (e, t) {
        var r,
          i = [],
          s = {},
          n = t.interval || 0.016,
          a = t.batchMax || 1e9,
          o = function (e, t) {
            var r = [],
              i = [],
              s = K.delayedCall(n, function () {
                (t(r, i), (r = []), (i = []));
              }).pause();
            return function (e) {
              (r.length || s.restart(!0),
                r.push(e.trigger),
                i.push(e),
                a <= r.length && s.progress(1));
            };
          };
        for (r in t)
          s[r] =
            "on" === r.substr(0, 2) && e0(t[r]) && "onRefreshInit" !== r
              ? o(r, t[r])
              : t[r];
        return (
          e0(a) &&
            ((a = a()),
            tv(t9, "refresh", function () {
              return (a = t.batchMax());
            })),
          es(e).forEach(function (e) {
            var t = {};
            for (r in s) t[r] = s[r];
            ((t.trigger = e), i.push(t9.create(t)));
          }),
          i
        );
      }));
    var t7,
      re = function (e, t, r, i) {
        return (
          t > i ? e(i) : t < 0 && e(0),
          r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
        );
      },
      rt = function e(t, r) {
        (!0 === r
          ? t.style.removeProperty("touch-action")
          : (t.style.touchAction =
              !0 === r
                ? "auto"
                : r
                  ? "pan-" + r + (U.isTouch ? " pinch-zoom" : "")
                  : "none"),
          t === ee && e(et, r));
      },
      rr = { auto: 1, scroll: 1 },
      ri = function (e) {
        var t,
          r = e.event,
          i = e.target,
          s = e.axis,
          n = (r.changedTouches ? r.changedTouches[0] : r).target,
          a = n._gsap || K.core.getCache(n),
          o = eO();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
          for (
            ;
            n &&
            n !== et &&
            ((n.scrollHeight <= n.clientHeight &&
              n.scrollWidth <= n.clientWidth) ||
              !(rr[(t = tl(n)).overflowY] || rr[t.overflowX]));
          )
            n = n.parentNode;
          ((a._isScroll =
            n &&
            n !== i &&
            !eX(n) &&
            (rr[(t = tl(n)).overflowY] || rr[t.overflowX])),
            (a._isScrollT = o));
        }
        (a._isScroll || "x" === s) &&
          (r.stopPropagation(), (r._gsapAllow = !0));
      },
      rs = function (e, t, r, i) {
        return U.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (i = i && ri),
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function () {
            return r && tv(J, U.eventTypes[0], ra, !1, !0);
          },
          onDisable: function () {
            return tg(J, U.eventTypes[0], ra, !0);
          },
        });
      },
      rn = /(input|label|select|textarea)/i,
      ra = function (e) {
        var t = rn.test(e.target.tagName);
        (t || t7) && ((e._gsapAllow = !0), (t7 = t));
      },
      ro = function (e) {
        (e2(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer"));
        var t,
          r,
          i,
          s,
          n,
          a,
          o,
          l,
          c = e,
          d = c.normalizeScrollX,
          u = c.momentum,
          h = c.allowNestedScroll,
          p = c.onRelease,
          m = B(e.target) || ee,
          f = K.core.globals().ScrollSmoother,
          v = f && f.get(),
          g =
            eN &&
            ((e.content && B(e.content)) ||
              (v && !1 !== e.content && !v.smooth() && v.content())),
          x = q(m, F),
          y = q(m, H),
          b = 1,
          j =
            (U.isTouch && Q.visualViewport
              ? Q.visualViewport.scale * Q.visualViewport.width
              : Q.outerWidth) / Q.innerWidth,
          N = 0,
          w = e0(u)
            ? function () {
                return u(t);
              }
            : function () {
                return u || 2.8;
              },
          S = rs(m, e.type, !0, h),
          E = function () {
            return (s = !1);
          },
          C = eq,
          T = eq,
          _ = function () {
            ((r = eZ(m, F)),
              (T = en(+!!eN, r)),
              d && (C = en(0, eZ(m, H))),
              (i = tH));
          },
          L = function () {
            ((g._gsap.y = eW(parseFloat(g._gsap.y) + x.offset) + "px"),
              (g.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(g._gsap.y) +
                ", 0, 1)"),
              (x.offset = x.cacheID = 0));
          },
          k = function () {
            if (s) {
              requestAnimationFrame(E);
              var e = eW(t.deltaY / 2),
                r = T(x.v - e);
              if (g && r !== x.v + x.offset) {
                x.offset = r - x.v;
                var i = eW((parseFloat(g && g._gsap.y) || 0) - x.offset);
                ((g.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  i +
                  ", 0, 1)"),
                  (g._gsap.y = i + "px"),
                  (x.cacheID = A.cache),
                  t$());
              }
              return !0;
            }
            (x.offset && L(), (s = !0));
          },
          R = function () {
            (_(),
              n.isActive() &&
                n.vars.scrollY > r &&
                (x() > r ? n.progress(1) && x(r) : n.resetTo("scrollY", r)));
          };
        return (
          g && K.set(g, { y: "+=0" }),
          (e.ignoreCheck = function (e) {
            return (
              (eN && "touchmove" === e.type && k(e)) ||
              (b > 1.05 && "touchstart" !== e.type) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            s = !1;
            var e = b;
            ((b = eW(((Q.visualViewport && Q.visualViewport.scale) || 1) / j)),
              n.pause(),
              e !== b && rt(m, b > 1.01 || (!d && "x")),
              (a = y()),
              (o = x()),
              _(),
              (i = tH));
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if ((x.offset && L(), t)) {
                A.cache++;
                var i,
                  s,
                  a = w();
                (d &&
                  ((s = (i = y()) + -(0.05 * a * e.velocityX) / 0.227),
                  (a *= re(y, i, s, eZ(m, H))),
                  (n.vars.scrollX = C(s))),
                  (s = (i = x()) + -(0.05 * a * e.velocityY) / 0.227),
                  (a *= re(x, i, s, eZ(m, F))),
                  (n.vars.scrollY = T(s)),
                  n.invalidate().duration(a).play(0.01),
                  ((eN && n.vars.scrollY >= r) || i >= r - 1) &&
                    K.to({}, { onUpdate: R, duration: a }));
              } else l.restart(!0);
              p && p(e);
            }),
          (e.onWheel = function () {
            (n._ts && n.pause(), eO() - N > 1e3 && ((i = 0), (N = eO())));
          }),
          (e.onChange = function (e, t, r, s, n) {
            if (
              (tH !== i && _(),
              t &&
                d &&
                y(C(s[2] === t ? a + (e.startX - e.x) : y() + t - s[1])),
              r)
            ) {
              x.offset && L();
              var l = n[2] === r,
                c = l ? o + e.startY - e.y : x() + r - n[1],
                u = T(c);
              (l && c !== u && (o += u - c), x(u));
            }
            (r || t) && t$();
          }),
          (e.onEnable = function () {
            (rt(m, !d && "x"),
              t9.addEventListener("refresh", R),
              tv(Q, "resize", R),
              x.smooth &&
                ((x.target.style.scrollBehavior = "auto"),
                (x.smooth = y.smooth = !1)),
              S.enable());
          }),
          (e.onDisable = function () {
            (rt(m, !0),
              tg(Q, "resize", R),
              t9.removeEventListener("refresh", R),
              S.kill());
          }),
          (e.lockAxis = !1 !== e.lockAxis),
          ((t = new U(e)).iOS = eN),
          eN && !x() && x(1),
          eN && K.ticker.add(eq),
          (l = t._dc),
          (n = K.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: d ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: t6(x, x(), function () {
                return n.pause();
              }),
            },
            onUpdate: t$,
            onComplete: l.vars.onComplete,
          })),
          t
        );
      };
    function rl(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    ((t9.sort = function (e) {
      if (e0(e)) return tE.sort(e);
      var t = Q.pageYOffset || 0;
      return (
        t9.getAll().forEach(function (e) {
          return (e._sortY = e.trigger
            ? t + e.trigger.getBoundingClientRect().top
            : e.start + Q.innerHeight);
        }),
        tE.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                (e.vars.containerAnimation ? 1e6 : e._sortY) -
                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                  -1e6 * (t.vars.refreshPriority || 0))
              );
            },
        )
      );
    }),
      (t9.observe = function (e) {
        return new U(e);
      }),
      (t9.normalizeScroll = function (e) {
        if (void 0 === e) return ex;
        if (!0 === e && ex) return ex.enable();
        if (!1 === e) {
          (ex && ex.kill(), (ex = e));
          return;
        }
        var t = e instanceof U ? e : ro(e);
        return (
          ex && ex.target === t.target && ex.kill(),
          eX(t.target) && (ex = t),
          t
        );
      }),
      (t9.core = {
        _getVelocityProp: W,
        _inputObserver: rs,
        _scrollers: A,
        _proxies: C,
        bridge: {
          ss: function () {
            (eP || tM("scrollStart"), (eP = eO()));
          },
          ref: function () {
            return el;
          },
        },
      }),
      e$() && K.registerPlugin(t9));
    var rc = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let r = rl(0, this.currentTime / this.duration, 1),
              i = (t = r >= 1) ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * i;
          } else if (this.lerp) {
            var r, i, s, n;
            ((this.value =
              ((r = this.value),
              (i = this.to),
              (s = 60 * this.lerp),
              (1 - (n = 1 - Math.exp(-s * e))) * r + n * i)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)));
          } else ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: r, duration: i, easing: s, onStart: n, onUpdate: a },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = r),
            (this.duration = i),
            (this.easing = s),
            (this.currentTime = 0),
            (this.isRunning = !0),
            n?.(),
            (this.onUpdate = a));
        }
      },
      rd = class {
        constructor(e, t, { autoResize: r = !0, debounce: i = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            r &&
              ((this.debouncedResize = (function (e, t) {
                let r;
                return function (...i) {
                  let s = this;
                  (clearTimeout(r),
                    (r = setTimeout(() => {
                      ((r = void 0), e.apply(s, i));
                    }, t)));
                };
              })(this.resize, i)),
              this.wrapper instanceof Window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window &&
              this.debouncedResize &&
              window.removeEventListener("resize", this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      },
      ru = class {
        events = {};
        emit(e, ...t) {
          let r = this.events[e] || [];
          for (let e = 0, i = r.length; e < i; e++) r[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      },
      rh = 100 / 6,
      rp = { passive: !1 },
      rm = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, rp),
            this.element.addEventListener("touchstart", this.onTouchStart, rp),
            this.element.addEventListener("touchmove", this.onTouchMove, rp),
            this.element.addEventListener("touchend", this.onTouchEnd, rp));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new ru();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, rp),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              rp,
            ),
            this.element.removeEventListener("touchmove", this.onTouchMove, rp),
            this.element.removeEventListener("touchend", this.onTouchEnd, rp));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: r } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = r),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: r } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            i = -(t - this.touchStart.x) * this.options.touchMultiplier,
            s = -(r - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = r),
            (this.lastDelta = { x: i, y: s }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: s, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: r, deltaMode: i } = e,
            s = 1 === i ? rh : 2 === i ? this.window.width : 1,
            n = 1 === i ? rh : 2 === i ? this.window.height : 1;
          ((t *= s),
            (r *= n),
            (t *= this.options.wheelMultiplier),
            (r *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: r, event: e }));
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        };
      },
      rf = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
      rv = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new rc();
        emitter = new ru();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = window,
          content: t = document.documentElement,
          eventsTarget: r = e,
          smoothWheel: i = !0,
          syncTouch: s = !1,
          syncTouchLerp: n = 0.075,
          touchInertiaExponent: a = 1.7,
          duration: o,
          easing: l,
          lerp: c = 0.1,
          infinite: d = !1,
          orientation: u = "vertical",
          gestureOrientation: h = "horizontal" === u ? "both" : "vertical",
          touchMultiplier: p = 1,
          wheelMultiplier: m = 1,
          autoResize: f = !0,
          prevent: v,
          virtualScroll: g,
          overscroll: x = !0,
          autoRaf: y = !1,
          anchors: b = !1,
          autoToggle: j = !1,
          allowNestedScroll: N = !1,
          __experimental__naiveDimensions: w = !1,
        } = {}) {
          ((window.lenisVersion = "1.3.15"),
            (e && e !== document.documentElement) || (e = window),
            "number" == typeof o && "function" != typeof l
              ? (l = rf)
              : "function" == typeof l && "number" != typeof o && (o = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: s,
              syncTouchLerp: n,
              touchInertiaExponent: a,
              duration: o,
              easing: l,
              lerp: c,
              infinite: d,
              gestureOrientation: h,
              orientation: u,
              touchMultiplier: p,
              wheelMultiplier: m,
              autoResize: f,
              prevent: v,
              virtualScroll: g,
              overscroll: x,
              autoRaf: y,
              anchors: b,
              autoToggle: j,
              allowNestedScroll: N,
              __experimental__naiveDimensions: w,
            }),
            (this.dimensions = new rd(e, t, { autoResize: f })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.addEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.addEventListener("click", this.onClick, !1),
            this.options.wrapper.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            (this.virtualScroll = new rm(r, {
              touchMultiplier: p,
              wheelMultiplier: m,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll),
            this.options.autoToggle &&
              this.rootElement.addEventListener(
                "transitionend",
                this.onTransitionEnd,
                { passive: !0 },
              ),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.removeEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.removeEventListener(
                "click",
                this.onClick,
                !1,
              ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this.__rafID && cancelAnimationFrame(this.__rafID));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
            e.stopPropagation();
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        onTransitionEnd = (e) => {
          if (e.propertyName.includes("overflow")) {
            let e = this.isHorizontal ? "overflow-x" : "overflow-y";
            ["hidden", "clip"].includes(getComputedStyle(this.rootElement)[e])
              ? this.internalStop()
              : this.internalStart();
          }
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
            : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
        }
        onClick = (e) => {
          let t = e
            .composedPath()
            .find(
              (e) =>
                e instanceof HTMLAnchorElement &&
                e.getAttribute("href")?.includes("#"),
            );
          if (t) {
            let e = t.getAttribute("href");
            if (e) {
              let t =
                  "object" == typeof this.options.anchors &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0,
                r = `#${e.split("#")[1]}`;
              this.scrollTo(r, t);
            }
          }
        };
        onPointerDown = (e) => {
          1 === e.button && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            "function" == typeof this.options.virtualScroll &&
            !1 === this.options.virtualScroll(e)
          )
            return;
          let { deltaX: t, deltaY: r, event: i } = e;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: r,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          let s = i.type.includes("touch"),
            n = i.type.includes("wheel");
          this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
          let a = 0 === t && 0 === r;
          if (
            this.options.syncTouch &&
            s &&
            "touchstart" === i.type &&
            a &&
            !this.isStopped &&
            !this.isLocked
          )
            return void this.reset();
          let o =
            ("vertical" === this.options.gestureOrientation && 0 === r) ||
            ("horizontal" === this.options.gestureOrientation && 0 === t);
          if (a || o) return;
          let l = i.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          let c = this.options.prevent;
          if (
            l.find(
              (e) =>
                e instanceof HTMLElement &&
                (("function" == typeof c && c?.(e)) ||
                  e.hasAttribute?.("data-lenis-prevent") ||
                  (s && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (n && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(e, { deltaX: t, deltaY: r }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.cancelable && i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && s) || (this.options.smoothWheel && n))
          ) {
            ((this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0));
            return;
          }
          let d = r;
          ("both" === this.options.gestureOrientation
            ? (d = Math.abs(r) > Math.abs(t) ? r : t)
            : "horizontal" === this.options.gestureOrientation && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (0 === this.animatedScroll && r > 0) ||
                  (this.animatedScroll === this.limit && r < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.cancelable && i.preventDefault());
          let u = s && this.options.syncTouch,
            h = s && "touchend" === i.type;
          (h &&
            (d =
              Math.sign(this.velocity) *
              Math.pow(
                Math.abs(this.velocity),
                this.options.touchInertiaExponent,
              )),
            this.scrollTo(this.targetScroll + d, {
              programmatic: !1,
              ...(u
                ? { lerp: h ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (
            (null !== this._resetVelocityTimeout &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (!1 === this.isScrolling || "native" === this.isScrolling) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              0 !== this.velocity &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.removeProperty("overflow");
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.setProperty(
                "overflow",
                "clip",
              );
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(0.001 * t),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: r = !1,
            lock: i = !1,
            duration: s = this.options.duration,
            easing: n = this.options.easing,
            lerp: a = this.options.lerp,
            onStart: o,
            onComplete: l,
            force: c = !1,
            programmatic: d = !0,
            userData: u,
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || c) {
            if (
              "string" == typeof e &&
              ["top", "left", "start", "#"].includes(e)
            )
              e = 0;
            else if (
              "string" == typeof e &&
              ["bottom", "right", "end"].includes(e)
            )
              e = this.limit;
            else {
              let r;
              if (
                ("string" == typeof e
                  ? (r = document.querySelector(e)) ||
                    ("#top" === e
                      ? (e = 0)
                      : console.warn("Lenis: Target not found", e))
                  : e instanceof HTMLElement && e?.nodeType && (r = e),
                r)
              ) {
                if (this.options.wrapper !== window) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let i = r.getBoundingClientRect();
                e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof e) {
              if (((e += t), (e = Math.round(e)), this.options.infinite)) {
                if (d) {
                  this.targetScroll = this.animatedScroll = this.scroll;
                  let t = e - this.animatedScroll;
                  t > this.limit / 2
                    ? (e -= this.limit)
                    : t < -this.limit / 2 && (e += this.limit);
                }
              } else e = rl(0, e, this.limit);
              if (e === this.targetScroll) {
                (o?.(this), l?.(this));
                return;
              }
              if (((this.userData = u ?? {}), r)) {
                ((this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }));
                return;
              }
              (d || (this.targetScroll = e),
                "number" == typeof s && "function" != typeof n
                  ? (n = rf)
                  : "function" == typeof n && "number" != typeof s && (s = 1),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: s,
                  easing: n,
                  lerp: a,
                  onStart: () => {
                    (i && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      o?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        checkNestedScroll(e, { deltaX: t, deltaY: r }) {
          let i,
            s,
            n,
            a,
            o,
            l,
            c,
            d,
            u,
            h,
            p,
            m,
            f,
            v,
            g = Date.now(),
            x = (e._lenis ??= {}),
            y = this.options.gestureOrientation;
          if (g - (x.time ?? 0) > 2e3) {
            x.time = Date.now();
            let t = window.getComputedStyle(e);
            x.computedStyle = t;
            let r = t.overflowX,
              u = t.overflowY;
            if (
              ((i = ["auto", "overlay", "scroll"].includes(r)),
              (s = ["auto", "overlay", "scroll"].includes(u)),
              (x.hasOverflowX = i),
              (x.hasOverflowY = s),
              (!i && !s) ||
                ("vertical" === y && !s) ||
                ("horizontal" === y && !i))
            )
              return !1;
            ((o = e.scrollWidth),
              (l = e.scrollHeight),
              (c = e.clientWidth),
              (d = e.clientHeight),
              (n = o > c),
              (a = l > d),
              (x.isScrollableX = n),
              (x.isScrollableY = a),
              (x.scrollWidth = o),
              (x.scrollHeight = l),
              (x.clientWidth = c),
              (x.clientHeight = d));
          } else
            ((n = x.isScrollableX),
              (a = x.isScrollableY),
              (i = x.hasOverflowX),
              (s = x.hasOverflowY),
              (o = x.scrollWidth),
              (l = x.scrollHeight),
              (c = x.clientWidth),
              (d = x.clientHeight));
          if (
            (!i && !s) ||
            (!n && !a) ||
            ("vertical" === y && (!s || !a)) ||
            ("horizontal" === y && (!i || !n)) ||
            ("horizontal" === y
              ? (u = "x")
              : "vertical" === y
                ? (u = "y")
                : (0 !== t && i && n && (u = "x"),
                  0 !== r && s && a && (u = "y")),
            !u)
          )
            return !1;
          if ("x" === u)
            ((h = e.scrollLeft), (p = o - c), (m = t), (f = i), (v = n));
          else {
            if ("y" !== u) return !1;
            ((h = e.scrollTop), (p = l - d), (m = r), (f = s), (v = a));
          }
          return (m > 0 ? h < p : h > 0) && f && v;
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          var e;
          return this.options.infinite
            ? ((this.animatedScroll % (e = this.limit)) + e) % e
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let e = "lenis";
          return (
            this.options.autoToggle && (e += " lenis-autoToggle"),
            this.isStopped && (e += " lenis-stopped"),
            this.isLocked && (e += " lenis-locked"),
            this.isScrolling && (e += " lenis-scrolling"),
            "smooth" === this.isScrolling && (e += " lenis-smooth"),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      },
      rg = e.i(18724),
      rx = e.i(95701),
      ry = e.i(37902);
    function rb({ x: e, y: s, onClose: n, items: a }) {
      let o = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        o.current &&
          i.default.fromTo(
            o.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.15, ease: "power2.out" },
          );
        let e = (e) => {
            o.current && !o.current.contains(e.target) && n();
          },
          t = (e) => {
            "Escape" === e.key && n();
          };
        return (
          document.addEventListener("mousedown", e),
          document.addEventListener("keydown", t),
          () => {
            (document.removeEventListener("mousedown", e),
              document.removeEventListener("keydown", t));
          }
        );
      }, [n]);
      let l = (0, r.useCallback)(
        (e) => {
          (e(), n());
        },
        [n],
      );
      return (0, t.jsxs)("div", {
        ref: o,
        style: {
          position: "fixed",
          left: `${e}px`,
          top: `${s}px`,
          zIndex: 15e3,
        },
        className: "jsx-1f006165e58a65a3 context-menu",
        children: [
          (0, t.jsx)("div", { className: "jsx-1f006165e58a65a3 corner tl" }),
          (0, t.jsx)("div", { className: "jsx-1f006165e58a65a3 corner tr" }),
          (0, t.jsx)("div", { className: "jsx-1f006165e58a65a3 corner bl" }),
          (0, t.jsx)("div", { className: "jsx-1f006165e58a65a3 corner br" }),
          (0, t.jsx)("div", {
            className: "jsx-1f006165e58a65a3 context-menu-items",
            children: a.map((e, r) =>
              (0, t.jsxs)(
                "div",
                {
                  className: "jsx-1f006165e58a65a3",
                  children: [
                    (0, t.jsx)("button", {
                      onClick: () => l(e.action),
                      className: "jsx-1f006165e58a65a3 context-menu-item",
                      children: (0, t.jsx)("span", {
                        className:
                          "jsx-1f006165e58a65a3 context-menu-item-label",
                        children: e.label,
                      }),
                    }),
                    e.separator &&
                      (0, t.jsx)("div", {
                        className:
                          "jsx-1f006165e58a65a3 context-menu-separator",
                      }),
                  ],
                },
                r,
              ),
            ),
          }),
          (0, t.jsx)(ry.default, {
            id: "1f006165e58a65a3",
            children:
              ".context-menu.jsx-1f006165e58a65a3{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#050505fa;border:1px solid #333;min-width:200px;overflow:hidden}.context-menu.jsx-1f006165e58a65a3:before{content:\"\";pointer-events:none;background:linear-gradient(135deg,#ff2a2a08 0%,#0000 50%);position:absolute;inset:0}.corner.jsx-1f006165e58a65a3{pointer-events:none;border-color:#444;width:10px;height:10px;position:absolute}.tl.jsx-1f006165e58a65a3{border-width:1px 0 0 1px;top:-1px;left:-1px}.tr.jsx-1f006165e58a65a3{border-width:1px 1px 0 0;top:-1px;right:-1px}.bl.jsx-1f006165e58a65a3{border-width:0 0 1px 1px;bottom:-1px;left:-1px}.br.jsx-1f006165e58a65a3{border-width:0 1px 1px 0;bottom:-1px;right:-1px}.context-menu-items.jsx-1f006165e58a65a3{padding:4px 0}.context-menu-item.jsx-1f006165e58a65a3{color:#888;text-align:left;cursor:pointer;background:0 0;border:none;border-left:2px solid #0000;width:100%;padding:10px 20px;font-family:Rethink Sans,sans-serif;font-size:.75rem;transition:all .2s;display:block;position:relative}.context-menu-item.jsx-1f006165e58a65a3:hover{color:#fff;border-left-color:var(--accent-red,#ff2a2a);background:#ff2a2a1a}.context-menu-item.jsx-1f006165e58a65a3:hover:before{content:\"\";pointer-events:none;background:repeating-linear-gradient(0deg,#0000,#0000 1px,#ff2a2a08 2px);width:100%;animation:2s linear infinite scan;position:absolute;top:0;bottom:0;left:0}@keyframes scan{0%{transform:translateY(0)}to{transform:translateY(4px)}}.context-menu-item.jsx-1f006165e58a65a3:active{background:#ff2a2a33}.context-menu-item-label.jsx-1f006165e58a65a3{text-transform:uppercase;letter-spacing:.05em;display:block}.context-menu-separator.jsx-1f006165e58a65a3{background:linear-gradient(90deg,#0000,#222 20% 80%,#0000);height:1px;margin:4px 0}.context-menu.jsx-1f006165e58a65a3:after{content:\"\";pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\");position:absolute;inset:0}",
          }),
        ],
      });
    }
    function rj({ play: e, src: t, volume: s = 0.5, fadeDuration: n = 5 }) {
      let a = (0, r.useRef)(null),
        o = (0, r.useRef)(null),
        l = (0, r.useRef)(null),
        c = (0, r.useRef)(null),
        [d, u] = (0, r.useState)(!1);
      return (
        (0, r.useEffect)(
          () => (
            (async () => {
              try {
                let e = new (
                  window.AudioContext || window.webkitAudioContext
                )();
                a.current = e;
                let r = e.createGain();
                ((r.gain.value = 0), r.connect(e.destination), (o.current = r));
                let i = await fetch(t),
                  s = await i.arrayBuffer();
                ((c.current = await e.decodeAudioData(s)), u(!0));
              } catch (e) {
                console.error("Error initializing Web Audio API:", e);
              }
            })(),
            () => {
              a.current && a.current.close();
            }
          ),
          [t],
        ),
        (0, r.useEffect)(() => {
          if (!d || !a.current || !o.current || !c.current) return;
          let t = a.current,
            r = o.current;
          if (e) {
            if (("suspended" === t.state && t.resume(), l.current))
              try {
                l.current.stop();
              } catch (e) {}
            let e = t.createBufferSource();
            ((e.buffer = c.current),
              (e.loop = !0),
              e.connect(r),
              e.start(0),
              (l.current = e),
              i.default.to(r.gain, {
                value: s,
                duration: n,
                ease: "power1.inOut",
              }));
          } else
            l.current &&
              i.default.to(r.gain, {
                value: 0,
                duration: 1,
                onComplete: () => {
                  if (l.current)
                    try {
                      (l.current.stop(), (l.current = null));
                    } catch (e) {}
                },
              });
        }, [e, d, s, n]),
        null
      );
    }
    let rN = "portfolio-cursor-prefs",
      rw = { showRemoteCursors: !0 },
      rS = {
        hover: "/audio/sfx/hover.mp3",
        click: "/audio/sfx/click.mp3",
        open: "/audio/sfx/open.mp3",
        close: "/audio/sfx/close.mp3",
        glitch: "/audio/sfx/glitch.mp3",
      };
    // The archived SSR markup predates the personal resume. Mount the interactive
    // portfolio after hydration so the first server/client output stays identical.
    function rE(props) {
      let [mounted, setMounted] = (0, r.useState)(false);
      (0, r.useEffect)(() => { setMounted(true); }, []);
      return mounted ? (0, t.jsx)(rResume, props) : null;
    }
    function rResume({ initialProjects: e, initialContent: s }) {
      let n,
        a,
        o,
        [l, c] = (0, r.useState)(-1),
        [d, u] = (0, r.useState)(!1),
        [h, p] = (0, r.useState)(!1),
        [m, f] = (0, r.useState)([]),
        [v, g] = (0, r.useState)(0),
        [x, y] = (0, r.useState)(!1),
        [b, j] = (0, r.useState)(e || { projects: [] }),
        [N, w] = (0, r.useState)(s || null),
        [S, E] = (0, r.useState)(null),
        [A, C] = (0, r.useState)("ru"),
        [R, I] = (0, r.useState)(null),
        O = (0, r.useRef)(b);
      O.current = b;
      let [D, P] = (0, r.useState)(null),
        {
          remoteCursors: z,
          updateCursorPosition: H,
          isAdmin: F,
          myColor: B,
        } = ({ remoteCursors: [], updateCursorPosition: () => {}, isAdmin: false, myColor: "#c49a73" }),
        Y = (0, r.useRef)(z),
        q = (0, r.useRef)(B);
      (0, r.useEffect)(() => {
        ((Y.current = z), (q.current = B));
      }, [z, B]);
      let { preferences: W, toggleRemoteCursors: V } = (function () {
          let [e, t] = (0, r.useState)(rw),
            [i, s] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              try {
                let e = localStorage.getItem(rN);
                if (e) {
                  let r = JSON.parse(e);
                  t(r);
                }
              } catch (e) {
                console.error("Failed to load cursor preferences:", e);
              } finally {
                s(!0);
              }
            }, []),
            (0, r.useEffect)(() => {
              if (i)
                try {
                  localStorage.setItem(rN, JSON.stringify(e));
                } catch (e) {
                  console.error("Failed to save cursor preferences:", e);
                }
            }, [e, i]),
            {
              preferences: e,
              toggleRemoteCursors: () => {
                t((e) => ({ ...e, showRemoteCursors: !e.showRemoteCursors }));
              },
              isLoaded: i,
            }
          );
        })(),
        { play: $ } =
          ((n = (0, r.useRef)({})),
          (0, r.useEffect)(() => {
            Object.entries(rS).forEach(([e, t]) => {
              try {
                let r = new Audio(t);
                ((r.preload = "auto"), (n.current[e] = r));
              } catch (e) {
                console.warn(`Impossible de charger le son: ${t}`, e);
              }
            });
          }, []),
          (a = (0, r.useCallback)((e, t = 0.2) => {
            let r = n.current[e];
            r &&
              ((r.currentTime = 0), (r.volume = t), r.play().catch((e) => {}));
          }, [])),
          (o = (0, r.useCallback)(
            (e = 0.3) => {
              a("click", e);
            },
            [a],
          )),
          { play: a, playRandomClick: o });
      (0, r.useEffect)(() => {
        let e = (e) => {
            e.target.closest(
              "a, button, .project-strip, .nav-btn, .close-btn, .evidence-item, .expandable-img, .lightbox-close, .lightbox-nav-btn, .tech-chip",
            ) && $("click", 0.1);
          },
          t = null,
          r = (e) => {
            let r = e.target.closest(
              "a, button, .project-strip, .nav-btn, .close-btn, .evidence-item, .expandable-img, .evidence-highlight, .lightbox-close, .lightbox-nav-btn, .tech-chip",
            );
            r && r !== t ? ((t = r), $("hover", 0.15)) : r || (t = null);
          };
        return (
          window.addEventListener("click", e),
          window.addEventListener("mouseover", r),
          () => {
            (window.removeEventListener("click", e),
              window.removeEventListener("mouseover", r));
          }
        );
      }, [$]);
      let [X, G] = (0, r.useState)(!1),
        [U, K] = (0, r.useState)(0),
        [Z, Q] = (0, r.useState)("slider"),
        [J, ee] = (0, r.useState)(!1),
        et = (0, r.useRef)(null),
        er = (0, r.useRef)(null),
        ei = (0, r.useRef)(null),
        es = (0, r.useRef)(0),
        en = (0, r.useRef)(0),
        ea = (0, r.useRef)(0),
        eo = (0, r.useRef)(null),
        el = (0, r.useRef)(!1),
        ec = (0, r.useRef)(null),
        ed = (0, r.useRef)(null),
        eu = (0, r.useRef)(null),
        eh = (0, r.useRef)(null),
        ep = (0, r.useRef)(null),
        em = (0, r.useRef)(null),
        ef = (0, r.useRef)(null),
        ev = (0, r.useRef)(null),
        eg = (0, r.useRef)(null),
        ex = (0, r.useRef)(null),
        ey = (0, r.useRef)(!1),
        eb = (0, r.useRef)(null),
        ej = (0, r.useRef)(null),
        eN = (0, r.useRef)(null),
        ew = (0, r.useRef)(null),
        eS = (0, r.useRef)({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }),
        eE = (0, r.useRef)(0);
      (0, r.useEffect)(() => {
        try { C(localStorage.getItem("portfolio-lang") === "en" ? "en" : "ru"); }
        catch { C("ru"); }
      }, []);
      (0, r.useEffect)(() => {
        if (!N?.seo) return;
        document.documentElement.lang = A;
        document.title = N.seo.title;
        const summary = document.querySelector('main > section[style*="clip"]');
        if (summary) {
          const paragraphs = summary.querySelectorAll("p");
          summary.querySelector("h1").textContent = N.seo.title;
          if (paragraphs[0]) paragraphs[0].textContent = N.seo.description;
          if (paragraphs[1]) paragraphs[1].textContent = N.about.behavior.experience.items.slice(0, 2).map(item => `${item.label}: ${item.period}`).join(". ");
          if (paragraphs[2]) paragraphs[2].textContent = N.about.behavior.education.items.map(item => `${item.subtitle}, ${item.period}`).join(". ");
        }

        for (let name of ["description", "og:description", "twitter:description"]) {
          document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)?.setAttribute("content", N.seo.description);
        }
        for (let name of ["og:title", "twitter:title"]) {
          document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)?.setAttribute("content", N.seo.title);
        }
      }, [A, N]);
      let eA = (0, r.useRef)(!0);
      ((0, r.useEffect)(() => {
        let cancelled = false;
        eA.current = false;
        Promise.all([
          fetch(A === "en" ? "/data/en/initialProjects.json" : "/data/ru/initialProjects.json", { cache: "no-store" }).then(response => { if (!response.ok) throw new Error("Projects unavailable"); return response.json(); }),
          fetch(A === "en" ? "/data/en/initialContent.json" : "/data/ru/initialContent.json", { cache: "no-store" }).then(response => { if (!response.ok) throw new Error("Content unavailable"); return response.json(); }),
        ]).then(([projects, content]) => {
          if (!cancelled) { j(projects); w(content); }
        }).catch(error => console.error("Failed to load translation:", error));
        return () => { cancelled = true; };
      }, [A, e, s]),
        (0, r.useEffect)(() => {
          -1 !== l && b.projects[l] && !d && eH(b.projects[l]);
        }, [b, l, A, N, d]),
        (0, r.useEffect)(() => {}, []));
      let eC = (e) => {
          if (e === Z || J) return;
          ee(!0);
          let t = document.querySelector(".slider-container"),
            r = document.querySelector(".projects-list"),
            s = "slider" === Z ? t : r,
            n = "slider" === e ? t : r;
          if (!s || !n) {
            (ee(!1), Q(e));
            return;
          }
          let a = i.default.timeline({
            onComplete: () => {
              (ee(!1), t9.refresh());
            },
          });
          (a.to(s, {
            opacity: 0,
            scale: 0.95,
            duration: 0.35,
            ease: "power2.in",
          }),
            a.call(() => {
              (Q(e),
                (n.style.display = "flex"),
                i.default.set(n, { opacity: 0, scale: 0.95 }));
            }),
            a.to(
              n,
              { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
              "+=0.05",
            ));
        },
        eT = (e) => {
          if (e === A || d) return;
          ($("glitch"), u(!0), et.current && et.current.stop());
          let t = i.default.timeline({
            onComplete: () => {
              (u(!1),
                et.current &&
                  !document.body.classList.contains("project-open") &&
                  et.current.start());
            },
          });
          (t.to([eb.current, ej.current], {
            scaleY: 1,
            duration: 0.6,
            ease: "power4.inOut",
            stagger: 0.1,
          }),
            t.to(eN.current, {
              opacity: 1,
              duration: 0.1,
              onStart: () => {
                ew.current && (ew.current.innerText = "UPDATING_PROTOCOL...");
              },
            }),
            t.add(() => {
              (C(e), localStorage.setItem("portfolio-lang", e));
            }, "+=0.3"),
            t.to(
              {},
              {
                duration: 0.1,
                onComplete: () => {
                  (ew.current && (ew.current.innerText = "ACCESS_GRANTED"),
                    ew.current && (ew.current.style.color = "#ffffff"));
                },
              },
            ),
            t.to(eN.current, { opacity: 0, duration: 0.2, delay: 0.2 }),
            t.to([eb.current, ej.current], {
              scaleY: 0,
              duration: 0.8,
              ease: "power3.inOut",
              stagger: -0.05,
            }),
            t.add(() => {
              ew.current && (ew.current.style.color = "");
            }));
        };
      function e_() {
        (document
          .querySelectorAll(
            "a, button, .project-strip, .nav-btn, .close-btn, .evidence-item, .evidence-highlight, .lightbox-close, .lightbox-nav-btn, .hud-time-trigger",
          )
          .forEach((e) => {
            (e.addEventListener("mouseenter", () => {
              document.body.classList.add("is-hovering");
              let t = e.getAttribute("data-cursor-text");
              (t ||
                (t = e.classList.contains("project-strip")
                  ? N?.projects?.stripActions?.openFile || "OPEN FILE"
                  : e.classList.contains("nav-btn")
                    ? "NAVIGATE"
                    : e.classList.contains("evidence-highlight")
                      ? "ANALYZE"
                      : e.classList.contains("profiler-module")
                        ? "SCAN"
                        : e.classList.contains("tech-chip")
                          ? "INFO"
                          : e.classList.contains("lightbox-close")
                            ? "CLOSE"
                            : e.classList.contains("lightbox-nav-btn")
                              ? "NAV"
                              : "ACCESS"),
                ev.current && (ev.current.textContent = `>> ${t}`));
            }),
              e.addEventListener("mouseleave", () =>
                document.body.classList.remove("is-hovering"),
              ));
          }),
          document
            .querySelectorAll(".expandable-img, .evidence-item")
            .forEach((e) => {
              (e.addEventListener("mouseenter", () => {
                (document.body.classList.add("is-zooming"),
                  ev.current &&
                    (ev.current.textContent = `>> ${N?.projects?.viewer?.lightbox?.examineImg || "EXAMINE_IMG"}`));
              }),
                e.addEventListener("mouseleave", () => {
                  document.body.classList.remove("is-zooming");
                }),
                e.addEventListener("click", (t) => {
                  let r = "",
                    s = e.getAttribute("data-media-src");
                  (r =
                    s ||
                    ("IMG" === e.tagName
                      ? e.src
                      : e.querySelector("img")?.src || "")) &&
                    (function (e) {
                      if (($("open"), -1 === l)) return;
                      let t = b.projects[l];
                      if (!t) return;
                      let r = [];
                      (t.innerImg1 && r.push(t.innerImg1),
                        t.innerImg2 && r.push(t.innerImg2),
                        t.gallery && r.push(...t.gallery),
                        f(r));
                      let s = e;
                      try {
                        s = new URL(e).pathname;
                      } catch (e) {}
                      let n = r.findIndex((e) => {
                        let t = e;
                        try {
                          t = new URL(e, window.location.origin).pathname;
                        } catch (e) {}
                        return t === s;
                      });
                      (g(-1 === n ? 0 : n),
                        y(!0),
                        i.default.to(".lightbox-overlay", {
                          autoAlpha: 1,
                          pointerEvents: "auto",
                          duration: 0.3,
                        }),
                        document.body.classList.remove("is-zooming"));
                    })(r);
                }));
            }),
          document
            .querySelectorAll("p, h1, h2, h3, li, span.mono, .hero-subtitle")
            .forEach((e) => {
              e.closest("a") ||
                e.closest("button") ||
                e.closest(".project-strip") ||
                e.closest(".expandable-img") ||
                e.closest(".evidence-item") ||
                e.closest(".useful-links-list") ||
                (e.addEventListener("mouseenter", () => {
                  (document.body.classList.add("is-reading"),
                    ev.current && (ev.current.textContent = "TXT_SELECT"));
                }),
                e.addEventListener("mouseleave", () =>
                  document.body.classList.remove("is-reading"),
                ));
            }));
      }
      function eL(e) {
        return e.startsWith("ytb:")
          ? { isYouTube: !0, videoId: e.substring(4) }
          : { isYouTube: !1 };
      }
      function ek(e, t = !1) {
        let r = `https://img.youtube.com/vi/${e}/maxresdefault.jpg`,
          i = t ? "56px" : "96px",
          s = t ? "32px" : "50px";
        return `
      <div class="video-thumbnail-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: pointer; overflow: hidden; display: flex; align-items: center; justify-content: center;">
        <img src="${r}" alt="Video Content" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%) contrast(1.1);" />

        <div class="video-overlay" style="position: absolute; inset: 0; background: rgba(5, 5, 5, 0.2); display: flex; align-items: center; justify-content: center; transition: background 0.3s;">
           <!-- Custom Tech Play Button -->
           <div class="tech-play-btn" style="
              width: ${i}; height: ${i};
              border: 1px solid var(--accent-red);
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              background: rgba(5, 5, 5, 0.6);
              backdrop-filter: blur(4px);
              box-shadow: 0 0 20px rgba(196,154,115, 0.2);
              position: relative;
              transition: transform 0.3s ease;
           ">
              <!-- Decorators -->
              <div style="position: absolute; top: -4px; left: 50%; transform: translateX(-50%); width: 4px; height: 1px; background: var(--accent-red);"></div>
              <div style="position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); width: 4px; height: 1px; background: var(--accent-red);"></div>
              <div style="position: absolute; left: -4px; top: 50%; transform: translateY(-50%); width: 1px; height: 4px; background: var(--accent-red);"></div>
              <div style="position: absolute; right: -4px; top: 50%; transform: translateY(-50%); width: 1px; height: 4px; background: var(--accent-red);"></div>

              <svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="var(--accent-red)">
                 <path d="M8 5v14l11-7z" />
              </svg>
           </div>
        </div>

        <!-- Scanlines overlay -->
        <div style="position: absolute; inset: 0; background: repeating-linear-gradient(transparent 0, transparent 2px, rgba(0,0,0,0.1) 3px); pointer-events: none;"></div>

        <div class="video-label mono" style="
            position: absolute; bottom: 10px; right: 10px;
            font-size: 0.6rem; color: var(--accent-red);
            background: rgba(0,0,0,0.8); padding: 2px 6px;
            border: 1px solid #c49a73; letter-spacing: 1px;
        ">
            REC_PLAY
        </div>
      </div>
    `;
      }
      function eR(e, t, r = "Media") {
        let s = eL(t);
        if (s.isYouTube && s.videoId) {
          ((e.innerHTML = ek(s.videoId)),
            (e.style.position = "relative"),
            (e.style.paddingBottom = "56.25%"),
            (e.style.height = "0"),
            e.classList.remove("expandable-img"));
          let t = e.firstElementChild;
          t &&
            t.addEventListener("click", (t) => {
              (t.stopPropagation(),
                (e.innerHTML = `
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${s.videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          ></iframe>
        `));
            });
        } else {
          let s = e.querySelector("img");
          if (s) {
            let e =
                t.toLowerCase().endsWith(".gif") ||
                t.toLowerCase().endsWith(".webp"),
              n = eX.current.get(t);
            if (e || (n && n.complete))
              (i.default.killTweensOf(s),
                (s.src = t),
                (s.alt = r),
                i.default.set(s, { opacity: 1, filter: "none" }));
            else {
              (i.default.killTweensOf(s),
                (s.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                i.default.set(s, { opacity: 0, filter: "blur(10px)" }));
              let e = new Image();
              ((e.onload = () => {
                (eX.current.set(t, e),
                  (s.src = t),
                  (s.alt = r),
                  i.default.to(s, {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.5,
                    ease: "power2.out",
                  }));
              }),
                (e.onerror = () => {
                  ((s.src = t),
                    i.default.set(s, { opacity: 1, filter: "none" }));
                }),
                (e.src = t));
            }
            s.classList.add("expandable-img");
          }
          ((e.style.position = ""),
            (e.style.paddingBottom = ""),
            (e.style.height = ""));
        }
      }
      function eI() {
        ($("close"),
          i.default.to(".lightbox-overlay", {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: 0.3,
            onComplete: () => {
              (y(!1), f([]));
            },
          }));
      }
      function eM(e) {
        $("click", 0.1);
        let t = v + e;
        (t < 0 && (t = m.length - 1), t >= m.length && (t = 0), g(t));
      }
      function eO(e, t) {
        if (d) return;
        $("open");
        let r = t;
        if (
          (r ||
            (r = document.querySelectorAll(
              ".project-strip, .project-list-item",
            )[e]),
          !r || !ec.current || !ed.current || !eu.current)
        )
          return void console.error(
            "Cannot open project: missing required elements",
          );
        (u(!0),
          eF(!0),
          c(e),
          (ep.current = r),
          i.default.killTweensOf(".anim-item"),
          eu.current && (eu.current.scrollTop = 0),
          i.default.set(ed.current, {
            scale: 1,
            xPercent: 0,
            borderRadius: "0px",
          }),
          eH(b.projects[e]),
          requestAnimationFrame(() => {
            i.default.set(".anim-item", { autoAlpha: 0, y: 30 });
          }));
        let s = r.getBoundingClientRect();
        (i.default.set(ec.current, {
          display: "block",
          top: s.top,
          left: s.left,
          width: s.width,
          height: s.height,
        }),
          eh.current &&
            i.default.set(eh.current, {
              filter: "grayscale(100%)",
              opacity: 0.1,
            }),
          i.default.set(r, { autoAlpha: 0 }),
          document.body.classList.add("project-open"),
          et.current && et.current.stop());
        let n = i.default.timeline({
          onComplete: () => {
            (u(!1),
              eu.current && (eu.current.style.overflowY = "auto"),
              eF(!1),
              e_(),
              i.default.set(".data-sidebar", { clearProps: "transform" }));
          },
        });
        (ez(e, !0, n),
          n.to(
            ec.current,
            {
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              duration: 0.8,
              ease: "power4.inOut",
            },
            0,
          ),
          eh.current && n.to(eh.current, { opacity: 0.2, duration: 0.8 }, 0),
          n.to(
            ".anim-item",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.5,
          ),
          n.to(
            [".controls-header", ".prev-btn", ".next-btn"],
            { autoAlpha: 1, duration: 0.4 },
            0.6,
          ));
      }
      function eD() {
        if (d || -1 === l) return;
        ($("close"),
          u(!0),
          eF(!0),
          eu.current && (eu.current.style.overflowY = "hidden"));
        let e = ep.current;
        if (
          (e || (e = document.querySelectorAll(".project-strip")[l]),
          e || (e = document.querySelectorAll(".project-list-item")[l]),
          !e)
        ) {
          (ec.current && (ec.current.style.display = "none"),
            document.body.classList.remove("project-open"),
            u(!1),
            c(-1),
            et.current && et.current.start());
          return;
        }
        let t = e.getBoundingClientRect(),
          r = window.innerWidth <= 900,
          s = e.classList.contains("project-list-item"),
          n = eq(),
          a = i.default.timeline({
            onComplete: () => {
              (ec.current &&
                ((ec.current.style.display = "none"),
                i.default.set(ec.current, { opacity: 1, x: 0 })),
                document.body.classList.remove("project-open"),
                et.current && et.current.start(),
                u(!1),
                c(-1),
                eF(!1));
            },
          });
        (a.to([".controls-header", ".prev-btn", ".next-btn", ".anim-item"], {
          autoAlpha: 0,
          duration: 0.3,
        }),
          ez(l, !1, a),
          i.default.set(e, { autoAlpha: 1 }),
          a.to(
            ec.current,
            {
              top: t.top,
              left: t.left - (r || s ? 0 : n),
              width: t.width,
              height: t.height,
              duration: 0.8,
              ease: "power4.inOut",
            },
            0.1,
          ),
          a.to(e, { autoAlpha: 1, duration: 0.2 }, ">"),
          a.to(ec.current, { opacity: 0, duration: 0.4 }, "<"));
      }
      function eP(e) {
        if (d) return;
        ($("open"), u(!0), eF(!0));
        let t = l + e;
        (t < 0 && (t = b.projects.length - 1),
          t >= b.projects.length && (t = 0),
          ep.current && i.default.set(ep.current, { autoAlpha: 1 }));
        let r = document.querySelectorAll(".project-strip"),
          s = null,
          n = -1;
        if (
          (r.forEach((e) => {
            let r = e.closest(".slider-track");
            if (r) {
              if (Array.from(r.children).indexOf(e) % b.projects.length === t) {
                let t = e.getBoundingClientRect(),
                  r = window.innerWidth,
                  i = window.innerHeight;
                if (t.right > 0 && t.left < r && t.bottom > 0 && t.top < i) {
                  let a =
                    0.7 *
                      (((Math.min(t.right, r) - Math.max(t.left, 0)) *
                        (Math.min(t.bottom, i) - Math.max(t.top, 0))) /
                        (t.width * t.height)) +
                    0.3 * (1 - Math.abs(t.left + t.width / 2 - r / 2) / r);
                  a > n && ((n = a), (s = e));
                }
              }
            }
          }),
          !s)
        ) {
          let e = document.querySelectorAll(".project-list-item");
          e[t] && (s = e[t]);
        }
        (s && i.default.set(s, { autoAlpha: 0 }),
          ez(l, !1, i.default.timeline()),
          ez(t, !0, i.default.timeline()));
        let a = i.default.timeline({
          onComplete: () => {
            (c(t),
              (ep.current = s),
              u(!1),
              eu.current && (eu.current.style.overflowY = "auto"),
              eF(!1),
              e_(),
              i.default.set(".data-sidebar", { clearProps: "transform" }));
          },
        });
        eu.current && (eu.current.style.overflowY = "hidden");
        let o = 1 === e ? 100 : -100;
        (a.to(ed.current, {
          scale: 0.9,
          borderRadius: "10px",
          duration: 0.5,
          ease: "power3.inOut",
        }),
          a.to(
            ed.current,
            {
              xPercent: 1 === e ? -100 : 100,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            },
            "-=0.3",
          ),
          a.call(() => {
            (eu.current && (eu.current.scrollTop = 0),
              eH(b.projects[t]),
              requestAnimationFrame(() => {
                i.default.set(".anim-item", { autoAlpha: 0, y: 30 });
              }));
          }),
          a.set({}, {}, "+=0.1"),
          a.call(() => {
            i.default.set(ed.current, { xPercent: o });
          }),
          a.to(ed.current, {
            xPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }),
          a.to(
            ed.current,
            {
              scale: 1,
              borderRadius: "0px",
              duration: 0.5,
              ease: "power3.inOut",
            },
            "-=0.2",
          ),
          a.add(() => {
            i.default.to(".anim-item", {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            });
          }, "-=0.3"));
      }
      function ez(e, t, r) {
        document.querySelectorAll(".project-strip").forEach((s, n) => {
          if (n === e) return;
          let a = t ? (n < e ? -100 : 100) : 0,
            o = +!t;
          window.innerWidth <= 768 ||
            (r
              ? r.to(
                  s,
                  {
                    xPercent: a,
                    autoAlpha: o,
                    duration: 0.8,
                    ease: "power3.inOut",
                  },
                  0,
                )
              : i.default.to(s, {
                  xPercent: a,
                  autoAlpha: o,
                  duration: 0.8,
                  ease: "power3.inOut",
                }));
        });
      }
      function eH(e) {
        let t = document.querySelector(".overlay-id"),
          r = document.querySelector(".overlay-title"),
          s = document.querySelector(".overlay-type"),
          n = document.querySelector(".overlay-tags"),
          a = document.querySelector(".overlay-role"),
          o = document.querySelector(".overlay-date"),
          l = document.querySelector(".overlay-cadre"),
          c = document.querySelector(".overlay-duree"),
          d = document.querySelector(".overlay-stack"),
          u = document.querySelector(".overlay-desc"),
          h = document.querySelector(".overlay-context"),
          p = document.querySelector(".overlay-credits-list"),
          m = document.querySelectorAll(".overlay-link"),
          f = document.querySelector(".overlay-img-1"),
          v = document.querySelector(".overlay-img-2");
        (t && (t.innerHTML = `${N?.projects?.viewer?.evidencePrefix || "CASE #"}${e.id}`),
          r && (r.innerHTML = e.title),
          s && (s.innerHTML = e.type),
          o && (o.innerHTML = e.date),
          l && (l.innerHTML = e.cadre),
          c && (c.innerHTML = e.duree));
        let g = document.querySelector(".overlay-ecole-client"),
          x = document.querySelector(".label-ecole-client"),
          y = document.querySelector(".container-ecole-client");
        if (y) {
          let t = (e.cadre || "").toLowerCase(),
            r = t.includes("scolaire") || t.includes("school"),
            i = t.includes("professionnel") || t.includes("professional") || t.includes("профессиональный"),
            s =
              e.ecole_client &&
              "/" !== e.ecole_client &&
              "" !== e.ecole_client &&
              "[à compléter]" !== e.ecole_client;
          (r || i) && s
            ? ((y.style.display = "flex"),
              g && (g.innerHTML = e.ecole_client),
              x &&
                (x.textContent = r
                  ? N?.projects?.viewer?.metadata?.schoolLabel || "SCHOOL"
                  : N?.projects?.viewer?.metadata?.clientLabel || "CLIENT"))
            : (y.style.display = "none");
        }
        if (
          (n &&
            ((n.innerHTML = ""),
            Array.isArray(e.tags) &&
              e.tags.forEach((e) => {
                let t = document.createElement("div");
                ((t.className = "tech-chip"),
                  (t.textContent = e),
                  n.appendChild(t));
              })),
          d &&
            ((d.innerHTML = ""),
            Array.isArray(e.stack) &&
              e.stack.forEach((e) => {
                let t = document.createElement("div");
                ((t.className = "tech-chip"),
                  (t.textContent = e),
                  d.appendChild(t));
              })),
          u && (u.innerHTML = e.description),
          h && (h.innerHTML = e.contexte_conception),
          a && (a.innerHTML = e.mon_intervention),
          p)
        )
          if (((p.innerHTML = ""), e.credits && "[à compléter]" !== e.credits))
            e.credits.split(",").forEach((e) => {
              let t = document.createElement("li");
              ((t.textContent = e.trim()), p.appendChild(t));
            });
          else {
            let e = document.createElement("li");
            ((e.textContent = "Classified Information"), p.appendChild(e));
          }
        let b = document.querySelector(".overlay-useful-links"),
          j = b?.closest(".terminal-block");
        if (b) {
          b.innerHTML = "";
          let t = !1;
          (e.liens_utiles &&
            Array.isArray(e.liens_utiles) &&
            e.liens_utiles.length > 0 &&
            e.liens_utiles.forEach((e) => {
              if (e.label && e.url) {
                let r = document.createElement("li"),
                  i = document.createElement("a");
                ((i.href = e.url),
                  (i.target = "_blank"),
                  (i.rel = "noopener noreferrer"),
                  (i.className = "useful-link mono"),
                  (i.textContent = e.label),
                  i.setAttribute("data-cursor-text", "OPEN"),
                  r.appendChild(i),
                  b.appendChild(r),
                  (t = !0));
              }
            }),
            j && (j.style.display = t ? "block" : "none"));
        }
        if (
          (m.length > 0 &&
            m.forEach((t) => {
              e.lien_projet && "" !== e.lien_projet
                ? ((t.href = e.lien_projet),
                  (t.style.opacity = "1"),
                  (t.style.pointerEvents = "auto"),
                  (t.innerHTML =
                    N?.projects?.viewer?.sections?.accessSite || "ACCESS SITE"))
                : ((t.href = "#"),
                  (t.style.opacity = "0.5"),
                  (t.style.pointerEvents = "none"),
                  (t.style.display = "none"),
                  (t.innerHTML = ""));
            }),
          f)
        )
          if (e.innerImg1 && "[à compléter]" !== e.innerImg1) {
            let t = f.parentElement;
            (eR(t, e.innerImg1, "Evidence Main"), (t.style.display = "block"));
          } else f.parentElement.style.display = "none";
        if (v)
          if (e.innerImg2 && "[à compléter]" !== e.innerImg2) {
            let t = v.parentElement;
            (eR(t, e.innerImg2, "Evidence Secondary"),
              (t.style.display = "block"));
          } else v.parentElement.style.display = "none";
        if (eh.current) {
          let t = eh.current,
            r = e.img,
            s = eX.current.get(r);
          if (s && s.complete)
            ((t.src = r),
              i.default.set(t, { opacity: 0.2, filter: "grayscale(100%)" }));
          else {
            ((t.src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
              i.default.set(t, {
                opacity: 0,
                filter: "grayscale(100%) blur(10px)",
              }));
            let e = new Image();
            ((e.onload = () => {
              (eX.current.set(r, e),
                (t.src = r),
                i.default.to(t, {
                  opacity: 0.2,
                  filter: "grayscale(100%) blur(0px)",
                  duration: 0.8,
                  ease: "power2.out",
                }));
            }),
              (e.src = r));
          }
        }
        let w = document.querySelector(".evidence-grid"),
          S = document.querySelector(".container-additional-evidence");
        if (w) {
          w.innerHTML = "";
          let t = document.createElement("div");
          t.className = "ev-col";
          let r = document.createElement("div");
          r.className = "ev-col";
          let i = document.createElement("div");
          ((i.className = "ev-col"),
            w.appendChild(t),
            w.appendChild(r),
            w.appendChild(i));
          let s = (e.gallery || []).filter(
            (e) => e && "[à compléter]" !== e && "" !== e.trim(),
          );
          s.length > 0
            ? (S && (S.style.display = "block"),
              (w.style.display = "flex"),
              s.forEach((e, s) => {
                let n = document.createElement("div");
                n.className = "evidence-item";
                let a =
                    N?.projects?.viewer?.evidence?.evidenceLabel || "EVIDENCE_",
                  o =
                    N?.projects?.viewer?.evidence?.evidenceImgAlt || "Evidence",
                  l = eL(e);
                (l.isYouTube && l.videoId
                  ? (n.setAttribute("data-media-src", e),
                    (n.innerHTML = `
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                ${ek(l.videoId, !0)}
              </div>
              <div class="evidence-label">${a}${s + 3}</div>
            `))
                  : (n.innerHTML = `
              <img src="${e}" class="evidence-thumb" alt="${o} ${s}">
              <div class="evidence-label">${a}${s + 3}</div>
            `),
                  s % 3 == 0
                    ? t.appendChild(n)
                    : s % 3 == 1
                      ? r.appendChild(n)
                      : i.appendChild(n));
              }))
            : (S && (S.style.display = "none"), (w.style.display = "none"));
        }
        e_();
      }
      function eF(e) {
        document
          .querySelectorAll(".prev-btn, .next-btn, .close-btn")
          .forEach((t) => {
            e ? t.classList.add("is-locked") : t.classList.remove("is-locked");
          });
      }
      function eB(e) {
        if (!ei.current || 0 === b.projects.length) return;
        $("click", 0.1);
        let t = eq(),
          r = i.default.getProperty(ei.current, "x");
        (document.body.classList.add("is-slider-dragging"),
          i.default.to(ei.current, {
            x: "left" === e ? r + t : r - t,
            duration: 0.8,
            ease: "power2.out",
            force3D: !0,
            onUpdate: eW,
            onComplete: () => {
              (document.body.classList.remove("is-slider-dragging"), eY());
            },
          }));
      }
      function eY() {
        if (!ei.current || 0 === b.projects.length) return;
        let e = i.default.getProperty(ei.current, "x"),
          t = eq();
        K(
          Math.round(Math.abs(e + 2 * (t * b.projects.length)) / t) %
            b.projects.length,
        );
      }
      function eq() {
        return ei.current && ei.current.children[0]
          ? ei.current.children[0].offsetWidth
          : 0;
      }
      function eW() {
        if (!ei.current || 0 === b.projects.length) return;
        let e = i.default.getProperty(ei.current, "x"),
          t = eq() * b.projects.length;
        e < -(2.5 * t)
          ? i.default.set(ei.current, { x: e + t })
          : e > -(1.5 * t) && i.default.set(ei.current, { x: e - t });
      }
      function eV(e = !1) {
        let t = document.getElementById("redLine"),
          r = document.getElementById("startPin"),
          s = document.getElementById("endPin"),
          n = document.getElementById("heroPinAnchor");
        if (!t || !r || !s || !n) return;
        let a = window.innerWidth,
          o = document.body.scrollHeight,
          l = window.innerHeight,
          c = document.querySelector(".thread-container"),
          d = document.getElementById("threadSvg");
        (c && (c.style.height = o + "px"), d && (d.style.height = o + "px"));
        let u = n.getBoundingClientRect(),
          p = u.left + u.width / 2,
          m = u.top + window.scrollY + u.height / 2 - 50,
          f = o - 0.8 * l,
          v = 0.5 * a;
        (r.setAttribute("cx", String(p)),
          r.setAttribute("cy", String(m)),
          s.setAttribute("cx", String(v)),
          s.setAttribute("cy", String(f)));
        let g = `M ${p},${m} C ${p - 200},${m + 500} ${0.1 * a},${0.3 * o} ${0.5 * a},${0.5 * o} S ${0.9 * a},${0.75 * o} ${v},${f}`;
        t.setAttribute("d", g);
        let x = t.getTotalLength();
        ((t.style.strokeDasharray = x),
          (t.style.strokeDashoffset = x),
          e
            ? (i.default.set(r, { attr: { r: 0 }, opacity: 0 }),
              i.default.to(r, {
                attr: { r: 12 },
                opacity: 1,
                duration: 0.6,
                ease: "back.out(2)",
                delay: 0.5,
              }),
              i.default.to(t, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: "body",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              }))
            : h && i.default.set(r, { attr: { r: 12 }, opacity: 1 }),
          i.default.set(s, { opacity: 0, scale: 1 }),
          i.default.to(s, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: ".contact-section", start: "top 70%" },
          }));
      }
      function e$(e, t) {
        if (!e) return;
        let r = window.innerWidth,
          i = "M 0,50",
          s = (1 - t / 100) * 50;
        for (let e = 1; e <= 100; e++) {
          let t = (e / 100) * r,
            n = 50 + (Math.random() - 0.5) * s;
          i += ` L ${t},${n}`;
        }
        e.setAttribute("d", i);
      }
      ((0, r.useEffect)(() => {
        fetch("/data/configData.json")
          .then((e) => e.json())
          .then((e) => {
            E(e);
          })
          .catch((e) => console.error("Failed to load config:", e));
      }, []),
        (0, r.useEffect)(() => {
          b.projects.length > 0 &&
            ei.current &&
            setTimeout(() => {
              let e = -(eq() * b.projects.length * 2);
              (i.default.set(ei.current, { x: e }),
                K(0),
                i.default.fromTo(
                  ".slider-container",
                  { opacity: 0, y: 30 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: ".slider-container",
                      start: "top 80%",
                      toggleActions: "play none none none",
                    },
                  },
                ),
                t9.refresh());
            }, 100);
        }, [b]),
        (0, r.useEffect)(() => {
          let e = new rv({ lerp: 0.1 });
          return (
            (et.current = e),
            e.stop(),
            requestAnimationFrame(function t(r) {
              (e.raf(r),
                (function () {
                  if (!eg.current || !ex.current || ey.current) return;
                  let e = ex.current.getBoundingClientRect(),
                    t = eS.current.x - e.left,
                    r = eS.current.y - e.top;
                  (eg.current.style.setProperty("--x", t + "px"),
                    eg.current.style.setProperty("--y", r + "px"));
                })(),
                requestAnimationFrame(t));
            }),
            e.on("scroll", t9.update),
            () => {
              e.destroy();
            }
          );
        }, []),
        (0, r.useEffect)(() => {
          let e = (e) => {
            (e.preventDefault(), P({ x: e.clientX, y: e.clientY }));
          };
          return (
            window.addEventListener("contextmenu", e),
            () => {
              window.removeEventListener("contextmenu", e);
            }
          );
        }, []),
        (0, r.useEffect)(() => {
          let e = () => {
              ((ey.current = !0), document.body.classList.add("is-touch"));
            },
            t = (e) => {
              (0 !== e.movementX || 0 !== e.movementY) &&
                ((ey.current = !1), document.body.classList.remove("is-touch"));
            };
          return (
            window.addEventListener("touchstart", e, { passive: !0 }),
            window.addEventListener("mousemove", t, { passive: !0 }),
            () => {
              (window.removeEventListener("touchstart", e),
                window.removeEventListener("mousemove", t));
            }
          );
        }, []),
        (0, r.useEffect)(() => {
          let e = em.current,
            t = ef.current,
            r = ev.current;
          if (!e || !t || !r) return;
          (i.default.set(e, { xPercent: -50, yPercent: -50 }),
            i.default.set(t, { xPercent: 0, yPercent: 0 }));
          let s = i.default.quickTo(e, "x", { duration: 0.1, ease: "power3" }),
            n = i.default.quickTo(e, "y", { duration: 0.1, ease: "power3" }),
            a = i.default.quickTo(t, "x", { duration: 0.4, ease: "power3" }),
            o = i.default.quickTo(t, "y", { duration: 0.4, ease: "power3" }),
            l = (e) => {
              ((eS.current.x = e.clientX),
                (eS.current.y = e.clientY),
                s(e.clientX),
                n(e.clientY),
                a(e.clientX),
                o(e.clientY),
                H(e.clientX, e.clientY));
              let t = Date.now();
              if (
                (t - eE.current > 500 &&
                  Y.current.forEach((r) => {
                    let i = e.clientX - r.x,
                      s = e.clientY - r.y;
                    if (25 > Math.sqrt(i * i + s * s)) {
                      var n, a;
                      let i, s, o, l, c, d, u, h, p, m, f;
                      eE.current = t;
                      let v =
                        ((n = q.current),
                        (a = r.color),
                        (i = n.startsWith("#") ? n.slice(1) : n),
                        (s = a.startsWith("#") ? a.slice(1) : a),
                        (o = parseInt(i.substring(0, 2), 16)),
                        (l = parseInt(i.substring(2, 4), 16)),
                        (c = parseInt(i.substring(4, 6), 16)),
                        (d = parseInt(s.substring(0, 2), 16)),
                        (u = parseInt(s.substring(2, 4), 16)),
                        (h = parseInt(s.substring(4, 6), 16)),
                        (p = Math.round((o + d) / 2)
                          .toString(16)
                          .padStart(2, "0")),
                        (m = Math.round((l + u) / 2)
                          .toString(16)
                          .padStart(2, "0")),
                        (f = Math.round((c + h) / 2)
                          .toString(16)
                          .padStart(2, "0")),
                        `#${p}${m}${f}`);
                      ((e, t, r) => {
                        if ("undefined" == typeof document) return;
                        let i = document.createElement("div");
                        ((i.className = "collision-ripple"),
                          (i.style.left = `${e}px`),
                          (i.style.top = `${t}px`),
                          i.style.setProperty("--collision-color", r));
                        for (let e = 0; e < 8; e++) {
                          let t = document.createElement("div");
                          ((t.className = "collision-particle"),
                            t.style.setProperty("--angle", `${45 * e}deg`),
                            i.appendChild(t));
                        }
                        (document.body.appendChild(i),
                          setTimeout(() => {
                            document.body.contains(i) &&
                              document.body.removeChild(i);
                          }, 1e3));
                      })((e.clientX + r.x) / 2, (e.clientY + r.y) / 2, v);
                    }
                  }),
                document.body.classList.contains("is-hovering") ||
                  document.body.classList.contains("is-reading") ||
                  document.body.classList.contains("is-zooming") ||
                  (r.textContent = `X: ${e.clientX} Y: ${e.clientY}`),
                !ey.current)
              ) {
                let t = document.querySelectorAll(".float-item"),
                  r = (e.clientX / window.innerWidth - 0.5) * 2,
                  s = (e.clientY / window.innerHeight - 0.5) * 2;
                t.forEach((e, t) => {
                  let n = 20 + 15 * t;
                  i.default.to(e, {
                    x: r * n,
                    y: s * n,
                    rotateX: -(5 * s),
                    rotateY: 5 * r,
                    duration: 1,
                    ease: "power2.out",
                  });
                });
              }
            };
          return (
            window.addEventListener("mousemove", l),
            () => {
              window.removeEventListener("mousemove", l);
            }
          );
        }, []),
        (0, r.useEffect)(() => {
          e_();
        }, [l, S, N]),
        (0, r.useEffect)(() => {
          let e = (e) => {
            if (x) {
              ("Escape" === e.key && eI(),
                "ArrowLeft" === e.key && eM(-1),
                "ArrowRight" === e.key && eM(1));
              return;
            }
            if (-1 !== l && !d) {
              switch (e.key) {
                case "ArrowLeft":
                  eP(-1);
                  break;
                case "ArrowRight":
                  eP(1);
                  break;
                case "Escape":
                  eD();
              }
              return;
            }
            if (-1 === l && !d && b.projects.length > 0 && ei.current) {
              let t = eq(),
                r = i.default.getProperty(ei.current, "x");
              switch (e.key) {
                case "ArrowLeft":
                  (document.body.classList.add("is-slider-dragging"),
                    i.default.to(ei.current, {
                      x: r + t,
                      duration: 0.6,
                      ease: "power3.out",
                      onUpdate: eW,
                      onComplete: () => {
                        document.body.classList.remove("is-slider-dragging");
                      },
                    }));
                  break;
                case "ArrowRight":
                  (document.body.classList.add("is-slider-dragging"),
                    i.default.to(ei.current, {
                      x: r - t,
                      duration: 0.6,
                      ease: "power3.out",
                      onUpdate: eW,
                      onComplete: () => {
                        document.body.classList.remove("is-slider-dragging");
                      },
                    }));
              }
            }
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [l, d, x, v, m, b.projects.length]),
        (0, r.useEffect)(() => {
          if (!ei.current || 0 === b.projects.length) return;
          let e = !1,
            t = 0,
            r = 0,
            s = 0,
            n = 0,
            a = (a) => {
              ((e = !0),
                G(!0),
                document.body.classList.add("is-slider-dragging"),
                (t = a),
                (r = a),
                (s = Date.now()),
                (n = i.default.getProperty(ei.current, "x")),
                (ea.current = 0),
                (el.current = !1),
                eo.current &&
                  (cancelAnimationFrame(eo.current), (eo.current = null)),
                (es.current = a));
            },
            o = (a) => {
              if (!e) return;
              let o = a - t;
              Math.abs(o) > 5 && (el.current = !0);
              let l = n + o;
              i.default.set(ei.current, { x: l, force3D: !0 });
              let c = Date.now(),
                d = c - s;
              if (d > 0) {
                let e = ((a - r) / d) * 16;
                ea.current = 0.3 * ea.current + 0.7 * e;
              }
              ((r = a), (s = c), (en.current = a), eW());
            },
            l = () => {
              e &&
                ((e = !1),
                setTimeout(() => {
                  (G(!1),
                    setTimeout(() => {
                      el.current = !1;
                    }, 50));
                }, 50),
                (function e() {
                  if (!ei.current || 0.05 > Math.abs(ea.current)) {
                    ((ea.current = 0),
                      eo.current &&
                        (cancelAnimationFrame(eo.current), (eo.current = null)),
                      document.body.classList.remove("is-slider-dragging"));
                    return;
                  }
                  let t = i.default.getProperty(ei.current, "x") + ea.current;
                  (i.default.set(ei.current, { x: t, force3D: !0 }),
                    (ea.current *= 0.92),
                    eW(),
                    (eo.current = requestAnimationFrame(e)));
                })(),
                setTimeout(() => eY(), 100));
            },
            c = (e) => {
              (e.preventDefault(), a(e.clientX));
            },
            d = (e) => o(e.clientX),
            u = () => l(),
            h = (e) => {
              e.touches.length > 0 && a(e.touches[0].clientX);
            },
            p = (e) => {
              e.touches.length > 0 && o(e.touches[0].clientX);
            },
            m = () => l(),
            f = er.current;
          return (
            f &&
              (f.addEventListener("mousedown", c),
              f.addEventListener("touchstart", h, { passive: !0 }),
              window.addEventListener("mousemove", d),
              window.addEventListener("mouseup", u),
              window.addEventListener("touchmove", p, { passive: !0 }),
              window.addEventListener("touchend", m)),
            () => {
              (f &&
                (f.removeEventListener("mousedown", c),
                f.removeEventListener("touchstart", h)),
                window.removeEventListener("mousemove", d),
                window.removeEventListener("mouseup", u),
                window.removeEventListener("touchmove", p),
                window.removeEventListener("touchend", m),
                eo.current && cancelAnimationFrame(eo.current),
                document.body.classList.remove("is-slider-dragging"));
            }
          );
        }, [b.projects.length]),
        (0, r.useEffect)(() => {
          let e,
            t = () => {
              let r = document.querySelector(".hud-time-trigger");
              if (r) {
                let e = new Date(),
                  t = Math.floor(e.getMilliseconds() / 10)
                    .toString()
                    .padStart(2, "0");
                r.textContent =
                  e.toLocaleTimeString("en-US", { hour12: !1 }) + ":" + t;
              }
              e = requestAnimationFrame(t);
            };
          return (
            (e = requestAnimationFrame(t)),
            () => cancelAnimationFrame(e)
          );
        }, []));
      let eX = (0, r.useRef)(new Map());
      async function eG() {
        let e = document.querySelector(".polygraph-line"),
          t = document.querySelector(".loader-counter"),
          r = document.querySelector(".loader-status"),
          s = document.getElementById("loaderTerminal"),
          n = document.getElementById("loaderMatrix"),
          a = document.getElementById("loaderFreqNum"),
          o = document.getElementById("radarCoords"),
          l = document.getElementById("radarStatus");
        if (!e || !t || !r) return;
        if (n)
          for (let e = 0; e < 16; e++) {
            let e = document.createElement("div");
            ((e.className = "matrix-cell"),
              (e.textContent = String(Math.floor(99 * Math.random()))),
              n.appendChild(e));
          }
        [
          "INIT_SEQ_99",
          "BYPASSING_FIREWALL",
          "ANALYZING_BIOMETRICS",
          "DECRYPTING_DRIVE_C",
          "RESOLVING_HOST",
          "PACKET_LOSS_0%",
          "ESTABLISHING_SECURE_LINK",
          "HANDSHAKE_COMPLETE",
        ].forEach((e, t) => {
          setTimeout(() => {
            if (!s) return;
            let t = document.createElement("div");
            ((t.className = "log-line"), (t.textContent = e), s.prepend(t));
          }, 350 * t);
        });
        let c = { val: 0 },
          d = i.default.timeline(),
          u = window.innerWidth <= 768;
        (d.to(c, {
          val: 50,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            (t &&
              (t.textContent =
                Math.floor(c.val).toString().padStart(2, "0") + "%"),
              c.val < 100 && e$(e, c.val),
              Math.random() > 0.5 &&
                a &&
                (a.textContent = (50 * Math.random()).toFixed(1)),
              Math.random() > 0.5 &&
                o &&
                (o.textContent = `LAT: ${(90 * Math.random()).toFixed(4)} N`),
              Math.random() > 0.8 &&
                n &&
                n.children.length > 0 &&
                (n.children[Math.floor(16 * Math.random())].textContent =
                  String(Math.floor(99 * Math.random()))));
          },
        }),
          d.call(() => {
            (async () => {
              if (s) {
                let e = document.createElement("div");
                ((e.className = "log-line"),
                  (e.textContent = "AWAITING_DATABASE..."),
                  s.prepend(e));
              }
              let e = 0;
              for (; 0 === O.current.projects.length && e < 100; )
                (await new Promise((e) => setTimeout(e, 100)), e++);
              if (s) {
                let e = document.createElement("div");
                ((e.className = "log-line"),
                  (e.textContent = "DOWNLOADING_ASSETS..."),
                  s.prepend(e));
              }
              let t = [];
              O.current.projects.forEach((e) => {
                (e.img && t.push(e.img),
                  e.innerImg1 && t.push(e.innerImg1),
                  e.innerImg2 && t.push(e.innerImg2),
                  e.gallery &&
                    Array.isArray(e.gallery) &&
                    e.gallery.forEach((e) => {
                      e && "[à compléter]" !== e && t.push(e);
                    }));
              });
              let r = Array.from(new Set(t.filter(Boolean)));
              if (s) {
                let e = document.createElement("div");
                ((e.className = "log-line"),
                  (e.textContent = `PRELOADING_${r.length}_IMAGES...`),
                  s.prepend(e));
              }
              if (
                (await new Promise((e) => {
                  if (0 === r.length) return void e();
                  let t = 0,
                    i = r.length,
                    s = () => {
                      ++t === i && e();
                    };
                  r.forEach((e) => {
                    if (eX.current.has(e)) return void s();
                    let t = new Image();
                    ((t.onload = () => {
                      (eX.current.set(e, t), s());
                    }),
                      (t.onerror = s),
                      (t.src = e));
                  });
                }),
                s)
              ) {
                let e = document.createElement("div");
                ((e.className = "log-line"),
                  (e.textContent = "RESOURCES_LOADED"),
                  s.prepend(e));
              }
            })();
          }),
          d.to(c, {
            val: 100,
            duration: 0.8,
            ease: "power2.out",
            onUpdate: () => {
              (t &&
                (t.textContent =
                  Math.floor(c.val).toString().padStart(2, "0") + "%"),
                c.val < 100 && e$(e, c.val));
            },
          }),
          d.add(() => {
            (r &&
              ((r.textContent = "ACCESS GRANTED"),
              (r.style.background = "var(--accent-red)")),
              l &&
                ((l.textContent = "DECRYPTED"),
                (l.style.color = "#ffffff"),
                (l.style.background = "var(--accent-red)"),
                (l.style.borderColor = "var(--accent-red)")));
          }, "+=0.2"),
          d.to(
            e,
            {
              attr: { d: `M 0,50 L ${window.innerWidth},50` },
              duration: 0.2,
              ease: "power4.out",
            },
            "+=0.1",
          ),
          d.addLabel("split"),
          d.add(() => {
            (document.body.classList.add("is-loaded"),
              p(!0),
              et.current && et.current.start(),
              eV(!0),
              setTimeout(() => t9.refresh(), 500));
          }, "split"),
          d.to(
            ".loader-info, .loader-line-container, .loader-ui-layer",
            { opacity: 0, duration: 0.2 },
            "split",
          ),
          d.to(
            ".curtain-top",
            { yPercent: -100, duration: 1, ease: "power4.inOut" },
            "split+=0.1",
          ),
          d.to(
            ".curtain-bottom",
            { yPercent: 100, duration: 1, ease: "power4.inOut" },
            "split+=0.1",
          ),
          d.add(
            () => {
              let e = i.default.timeline();
              (e.to(".scanner-line", { opacity: 0.5, duration: 1 }),
                e.to(
                  ".float-item",
                  {
                    opacity: 1,
                    scale: 1,
                    duration: u ? 0.4 : 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                  },
                  u ? "-=0.9" : "-=0.5",
                ),
                e.to(
                  ".hero-label",
                  { opacity: 1, duration: 0.5 },
                  u ? "-=0.4" : "-=0.3",
                ),
                e.to(
                  ".hero-title span",
                  {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: u ? 0.8 : 1.5,
                    ease: "power4.out",
                    stagger: 0.2,
                  },
                  u ? "-=0.7" : "-=0.2",
                ),
                e.to(
                  ".hero-subtitle",
                  {
                    opacity: 1,
                    y: 0,
                    duration: u ? 0.6 : 1,
                    ease: "power3.out",
                  },
                  u ? "-=0.6" : "-=1",
                ));
            },
            u ? "split+=0.2" : "split+=0.4",
          ));
      }
      return (
        (0, r.useEffect)(() => {
          let e;
          (console.log(
            "%c ██╗  ██╗██╗██╗     ██╗     ██╗ █████╗ ███╗   ██╗\n ██║ ██╔╝██║██║     ██║     ██║██╔══██╗████╗  ██║\n █████╔╝ ██║██║     ██║     ██║███████║██╔██╗ ██║\n ██╔═██╗ ██║██║     ██║     ██║██╔══██║██║╚██╗██║\n ██║  ██╗██║███████╗███████╗██║██║  ██║██║ ╚████║\n ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝\n\n ██╗  ██╗███████╗██████╗ ███████╗███████╗██████╗ \n ██║  ██║██╔════╝██╔══██╗╚══███╔╝██╔════╝██╔══██╗\n ███████║█████╗  ██████╔╝  ███╔╝ █████╗  ██████╔╝\n ██╔══██║██╔══╝  ██╔══██╗ ███╔╝  ██╔══╝  ██╔══██╗\n ██║  ██║███████╗██║  ██║███████╗███████╗██║  ██║\n ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝\n\n 🕵️‍♂️ SYSTEM_ADVISORY: UNAUTHORIZED_CONSOLE_ACCESS_DETECTED\n 📂 SUBJECT: ARTEMIY LEVKEVICH\n 📂 CASE_FILE_2026\n 🔐 STATUS: ENCRYPTED // UNDER_SURVEILLANCE\n\n 'The truth is rarely pure and never simple.'",
            "color: #c49a73; font-weight: bold; font-family: monospace;",
          ),
            window.scrollTo(0, 0),
            i.default.set(".hero-title span", {
              opacity: 0,
              scale: 0.9,
              filter: "blur(20px)",
            }),
            eV(!1),
            i.default.to(".grid-bg", {
              yPercent: 30,
              ease: "none",
              scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
              },
            }),
            document.querySelectorAll(".reveal-text").forEach((e) => {
              i.default.to(e, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: e, start: "top 85%" },
              });
            }),
            document.querySelectorAll(".reveal-line").forEach((e) => {
              i.default.to(e, {
                scaleX: 1,
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: { trigger: e, start: "top 85%" },
              });
            }),
            i.default
              .timeline({
                scrollTrigger: {
                  trigger: ".profiler-container",
                  start: "top 75%",
                },
              })
              .fromTo(
                ".profiler-module",
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.2,
                  ease: "back.out(1.2)",
                },
              ),
            i.default.set(".col-capabilities-wrapper .tech-chip", {
              opacity: 0,
              y: 10,
            }),
            t9.create({
              trigger: ".col-capabilities-wrapper",
              start: "top 85%",
              onEnter: () => {
                i.default.fromTo(
                  ".col-capabilities-wrapper .tech-chip",
                  { y: 10, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                    overwrite: "auto",
                  },
                );
              },
            }),
            i.default.to(".contact-terminal", {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: ".contact-section", start: "top 60%" },
            }),
            i.default.to(".bg-marquee", {
              x: "-20%",
              scrollTrigger: {
                trigger: ".contact-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }),
            i.default.to(".float-item", {
              y: "random(-20, 20)",
              rotation: "random(-5, 5)",
              duration: "random(2, 4)",
              ease: "sine.inOut",
              yoyo: !0,
              repeat: -1,
              stagger: 0.5,
            }),
            eG(),
            e_(),
            setTimeout(() => {
              t9.refresh();
            }, 100));
          let t = () => {
            (clearTimeout(e), (e = setTimeout(() => eV(!0), 100)));
          };
          return (
            window.addEventListener("resize", t),
            () => {
              window.removeEventListener("resize", t);
            }
          );
        }, []),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(rj, {
              play: h,
              src: "/audio/theta.mp3",
              volume: 0.015,
              fadeDuration: 5,
            }),
            (0, t.jsxs)("div", {
              className: "lang-transition-container",
              children: [
                (0, t.jsx)("div", {
                  ref: eb,
                  className: "shutter shutter-top",
                }),
                (0, t.jsxs)("div", {
                  ref: eN,
                  className: "transition-ui",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "cyber-loader",
                      children: [
                        (0, t.jsx)("div", { className: "cyber-circle" }),
                        (0, t.jsx)("div", { className: "cyber-arc" }),
                        (0, t.jsx)("div", { className: "cyber-arc-inner" }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      ref: ew,
                      className: "cyber-text",
                      children: (N?.ui?.initializing || "INITIALIZING..."),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  ref: ej,
                  className: "shutter shutter-bottom",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "loader-wrap",
              children: [
                (0, t.jsx)("div", { className: "loader-curtain curtain-top" }),
                (0, t.jsx)("div", {
                  className: "loader-curtain curtain-bottom",
                }),
                (0, t.jsxs)("div", {
                  className: "loader-ui-layer",
                  children: [
                    (0, t.jsx)("div", {
                      className: "loader-terminal",
                      id: "loaderTerminal",
                    }),
                    (0, t.jsxs)("div", {
                      className: "loader-radar-box",
                      children: [
                        (0, t.jsx)("div", { className: "radar-circle" }),
                        (0, t.jsx)("div", {
                          className: "radar-coords",
                          id: "radarCoords",
                          children: "SAT_LINK: SEARCHING...",
                        }),
                        (0, t.jsx)("div", {
                          className: "radar-status",
                          id: "radarStatus",
                          children: "ENCRYPTED",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "loader-matrix",
                      id: "loaderMatrix",
                    }),
                    (0, t.jsx)("div", { className: "loader-scope" }),
                    (0, t.jsxs)("div", {
                      className: "loader-freq",
                      children: [
                        "FREQ: ",
                        (0, t.jsx)("span", {
                          id: "loaderFreqNum",
                          children: "12.4",
                        }),
                        " Hz",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "loader-line-container",
                  children: (0, t.jsx)("svg", {
                    className: "loader-svg",
                    preserveAspectRatio: "none",
                    children: (0, t.jsx)("path", {
                      className: "polygraph-line",
                      d: "M0,100",
                    }),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "loader-info mono",
                  children: [
                    (0, t.jsx)("div", {
                      className: "loader-status",
                      children: (N?.ui?.signalTracing || "SIGNAL TRACING..."),
                    }),
                    (0, t.jsx)("div", {
                      className: "loader-counter",
                      children: "00%",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "hud-corner hud-tl",
              children: [
                (0, t.jsx)("span", {
                  className: "hud-camera-label",
                  children: "CAM_01 [REC]",
                }),
                (0, t.jsx)("span", {
                  className: "text-accent",
                  style: { fontSize: "0.5rem" },
                  children: "SIGNAL_STRONG",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "lang-switcher-static",
              role: "group",
              "aria-label": "Язык / Language",
              children: [
                (0, t.jsx)("button", {
                  className: `lang-btn ${"ru" === A ? "active" : ""}`,
                  onClick: () => eT("ru"),
                  "aria-label": "Русский",
                  "aria-pressed": A === "ru",
                  disabled: d,
                  "data-cursor-text": "ru" === A ? "" : "SWITCH",
                  children: "RU",
                }),
                (0, t.jsx)("button", {
                  className: `lang-btn ${"en" === A ? "active" : ""}`,
                  onClick: () => eT("en"),
                  "aria-label": "English",
                  "aria-pressed": A === "en",
                  disabled: d,
                  "data-cursor-text": "en" === A ? "" : "SWITCH",
                  children: "EN",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "hud-corner hud-tr",
              children: [
                (0, t.jsx)("span", {
                  className: "hud-time-trigger",
                  children: "00:00:00:00",
                }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { children: "ISO 800" }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "hud-corner hud-bl",
              children: [
                (0, t.jsx)("span", { className: "live-dot" }),
                " ",
                (0, t.jsx)("span", { children: "LIVE FEED" }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "hud-corner hud-br",
              children: [
                (0, t.jsx)("span", {
                  style: { fontSize: "0.7rem", opacity: 0.6 },
                  children: R
                    ? (N?.ui?.localPreview || "ЛОКАЛЬНЫЙ ПРОСМОТР")
                    : "ANALYSER_ACTIVE...",
                }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", { children: "SYS. DIAGNOSTIC" }),
                (0, t.jsx)("br", {}),
                (0, t.jsx)("span", {
                  className: "text-accent",
                  children: "STABLE",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: `cursor-main ${F ? "admin-cursor" : ""}`,
              ref: em,
              children: [
                (0, t.jsx)("div", { className: "cursor-visual" }),
                F &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: "admin-cursor-particles",
                        children: [
                          (0, t.jsx)("div", {
                            className: "particle",
                            style: { "--i": 1 },
                          }),
                          (0, t.jsx)("div", {
                            className: "particle",
                            style: { "--i": 2 },
                          }),
                          (0, t.jsx)("div", {
                            className: "particle",
                            style: { "--i": 3 },
                          }),
                          (0, t.jsx)("div", {
                            className: "particle",
                            style: { "--i": 4 },
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "admin-label",
                        style: {
                          position: "absolute",
                          left: "20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "0.65rem",
                          fontFamily: "var(--font-mono)",
                          color: "#888888",
                          whiteSpace: "nowrap",
                          padding: "2px 6px",
                          background: "rgba(0, 0, 0, 0.8)",
                          borderRadius: "3px",
                          border: "1px solid rgba(196,154,115, 0.3)",
                          textTransform: "uppercase",
                          pointerEvents: "none",
                          zIndex: 100,
                        },
                        children: "ARTEMIY",
                      }),
                    ],
                  }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "cursor-data",
              ref: ef,
              children: (0, t.jsx)("span", {
                className: "cursor-text-val",
                ref: ev,
                children: "X: 0 Y: 0",
              }),
            }),
            (0, t.jsx)(rx.RemoteCursors, {
              cursors: z,
              showCursors: W.showRemoteCursors,
            }),
            D &&
              (0, t.jsx)(rb, {
                x: D.x,
                y: D.y,
                onClose: () => P(null),
                items: [
                  {
                    label: "copy_selection",
                    action: async () => {
                      try {
                        let e = window.getSelection();
                        e &&
                          e.toString() &&
                          (await navigator.clipboard.writeText(e.toString()));
                      } catch (e) {
                        console.error("Failed to copy:", e);
                      }
                    },
                  },
                  {
                    label: "paste_data",
                    action: async () => {
                      try {
                        await navigator.clipboard.readText();
                      } catch (e) {
                        console.error("Failed to paste:", e);
                      }
                    },
                  },
                  {
                    label: "download_cv",
                    action: () => {
                      let e = document.createElement("a");
                      ((e.href = S?.cv?.filePath || "/data/cvData.json"),
                        (e.download = S?.cv?.fileName || "CV.json"),
                        e.click());
                    },
                    separator: !0,
                  },
                  {
                    label: W.showRemoteCursors
                      ? "hide_multi_cursors"
                      : "show_multi_cursors",
                    action: () => {
                      V();
                    },
                  },
                ],
              }),
            (0, t.jsx)("div", { className: "noise-overlay" }),
            (0, t.jsx)("div", { className: "grid-bg" }),
            (0, t.jsx)("div", {
              className: "nav-btn prev-btn",
              onClick: () => eP(-1),
              children: (0, t.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                children: (0, t.jsx)("path", { d: "M15 18l-6-6 6-6" }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "nav-btn next-btn",
              onClick: () => eP(1),
              children: (0, t.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                children: (0, t.jsx)("path", { d: "M9 18l6-6-6-6" }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "thread-container",
              children: (0, t.jsxs)("svg", {
                id: "threadSvg",
                width: "100%",
                height: "100%",
                preserveAspectRatio: "none",
                children: [
                  (0, t.jsx)("path", {
                    id: "redLine",
                    className: "thread-line",
                    d: "",
                  }),
                  (0, t.jsx)("circle", {
                    id: "startPin",
                    className: "pin",
                    cx: "0",
                    cy: "0",
                    r: "0",
                  }),
                  (0, t.jsx)("circle", {
                    id: "endPin",
                    className: "pin",
                    cx: "0",
                    cy: "0",
                    r: "12",
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className: "lightbox-overlay",
              style: { opacity: +!!x, pointerEvents: x ? "auto" : "none" },
              children: [
                (0, t.jsx)("div", {
                  className: "lightbox-close",
                  onClick: eI,
                  children:
                    N?.projects?.viewer?.lightbox?.closeText ||
                    "CLOSE EVIDENCE [ESC]",
                }),
                (0, t.jsx)("div", {
                  className: "lightbox-nav-btn lb-prev",
                  onClick: () => eM(-1),
                  children: (0, t.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "square",
                    children: (0, t.jsx)("path", { d: "M15 18l-6-6 6-6" }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "lightbox-nav-btn lb-next",
                  onClick: () => eM(1),
                  children: (0, t.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "square",
                    children: (0, t.jsx)("path", { d: "M9 18l6-6-6-6" }),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "lightbox-content",
                  children:
                    m[v] &&
                    (eL(m[v]).isYouTube
                      ? (0, t.jsx)("div", {
                          style: {
                            position: "relative",
                            width: "80vw",
                            maxWidth: "1200px",
                            aspectRatio: "16/9",
                            boxShadow: "0 0 30px rgba(0,0,0,0.5)",
                            background: "#c49a73",
                          },
                          children: (0, t.jsx)("iframe", {
                            width: "100%",
                            height: "100%",
                            src: `https://www.youtube.com/embed/${eL(m[v]).videoId}?autoplay=1`,
                            frameBorder: "0",
                            allow:
                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            style: {
                              width: "100%",
                              height: "100%",
                              display: "block",
                            },
                          }),
                        })
                      : (0, t.jsx)("img", {
                          src: m[v],
                          className: "lightbox-img",
                          alt: "Evidence Full",
                        })),
                }),
              ],
            }),
            (0, t.jsxs)("main", {
              children: [
                (0, t.jsxs)("section", {
                  className: "hero",
                  ref: ex,
                  children: [
                    (0, t.jsx)("div", { className: "spotlight-mask", ref: eg }),
                    (0, t.jsx)("div", { className: "scanner-line" }),
                    (0, t.jsxs)("div", {
                      className: "floating-container",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "float-item f-loc mono",
                          children: [
                            "LAT: ",
                            N?.floatItems?.location?.lat || "48.8566 N",
                            (0, t.jsx)("br", {}),
                            "LON: ",
                            N?.floatItems?.location?.lon || "2.3522 E",
                            (0, t.jsx)("br", {}),
                            N?.floatItems?.location?.grid || "SECURE_GRID_99",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "float-item f-photo",
                          children: [
                            (0, t.jsx)("img", {
                              src:
                                N?.floatItems?.photo?.url ||
                                "/local-assets/code.jpg",
                              className: "f-img",
                              alt: "code",
                            }),
                            (0, t.jsx)("span", {
                              className: "mono",
                              children:
                                N?.floatItems?.photo?.caption ||
                                "EVIDENCE_A.jpg",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "float-item f-code mono",
                          children: [
                            N?.floatItems?.code?.line1 || ">> decrypting...",
                            (0, t.jsx)("br", {}),
                            N?.floatItems?.code?.line2 ||
                              ">> subject identified",
                            (0, t.jsx)("br", {}),
                            N?.floatItems?.code?.line3 || ">> access granted",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "hero-content",
                      children: [
                        (0, t.jsx)("div", { id: "heroPinAnchor" }),
                        (0, t.jsx)("div", {
                          className: "hero-label mono uppercase",
                          children:
                            N?.hero?.label || "Top Secret // Case #c49a7344",
                        }),
                        (0, t.jsxs)("h1", {
                          className: "hero-title serif",
                          children: [
                            (0, t.jsx)("span", {
                              className: "hero-layer-back",
                              children: N?.hero?.titleLine1 || "ARTEMIY",
                            }),
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              className: "hero-layer-front",
                              children: N?.hero?.titleLine2 || "LEVKEVICH",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "hero-subtitle",
                          dangerouslySetInnerHTML: {
                            __html:
                              N?.hero?.subtitle ||
                              "Développeur <span>Fullstack</span> & <span>Créatif</span>.<br />Spécialiste en investigation numérique & expériences WebGL.",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  className: "projects-section",
                  id: "projects",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "section-header above-thread",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "serif reveal-text",
                          style: { fontSize: "clamp(2rem, 4vw, 3rem)" },
                          children:
                            N?.projects?.sectionTitle || "EVIDENCE BOARD",
                        }),
                        (0, t.jsxs)("div", {
                          className: "mono text-dim reveal-text",
                          style: { textAlign: "right", fontSize: "0.8rem" },
                          children: [
                            N?.projects?.sectionSubtitle || "SECTOR: WEB",
                            (0, t.jsx)("br", {}),
                            N?.projects?.sectionStatus || "SCANNING: ACTIVE",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      style: {
                        width: "100%",
                        height: "1px",
                        background: "#c49a73",
                        marginBottom: 0,
                      },
                      className: "reveal-line",
                    }),
                    (0, t.jsxs)("div", {
                      className: "projects-controls-bar",
                      children: [
                        (0, t.jsx)("div", {
                          style: { width: "0", height: "45px" },
                        }),
                        (0, t.jsxs)("div", {
                          className: "view-mode-controls",
                          children: [
                            (0, t.jsxs)("button", {
                              className: `view-mode-btn ${"slider" === Z ? "active" : ""}`,
                              onClick: () => eC("slider"),
                              "aria-label": N?.ui?.sliderAria || "Slider view",
                              disabled: J,
                              children: [
                                (0, t.jsxs)("svg", {
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    (0, t.jsx)("rect", {
                                      x: "3",
                                      y: "5",
                                      width: "7",
                                      height: "14",
                                    }),
                                    (0, t.jsx)("rect", {
                                      x: "14",
                                      y: "5",
                                      width: "7",
                                      height: "14",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("span", { children: (N?.ui?.slider || "ЛЕНТА") }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "view-mode-separator",
                            }),
                            (0, t.jsxs)("button", {
                              className: `view-mode-btn ${"list" === Z ? "active" : ""}`,
                              onClick: () => eC("list"),
                              "aria-label": N?.ui?.listAria || "List view",
                              disabled: J,
                              children: [
                                (0, t.jsxs)("svg", {
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    (0, t.jsx)("line", {
                                      x1: "3",
                                      y1: "6",
                                      x2: "21",
                                      y2: "6",
                                    }),
                                    (0, t.jsx)("line", {
                                      x1: "3",
                                      y1: "12",
                                      x2: "21",
                                      y2: "12",
                                    }),
                                    (0, t.jsx)("line", {
                                      x1: "3",
                                      y1: "18",
                                      x2: "21",
                                      y2: "18",
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("span", { children: (N?.ui?.list || "СПИСОК") }),
                              ],
                            }),
                          ],
                        }),
                        "slider" === Z &&
                          (0, t.jsxs)("div", {
                            className: "slider-controls",
                            children: [
                              (0, t.jsx)("button", {
                                className: "slider-arrow",
                                onClick: () => eB("left"),
                                "aria-label": N?.ui?.previousAria || "Previous project",
                                children: (0, t.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: (0, t.jsx)("path", {
                                    d: "M15 18l-6-6 6-6",
                                  }),
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "controls-separator",
                              }),
                              (0, t.jsx)("button", {
                                className: "slider-arrow",
                                onClick: () => eB("right"),
                                "aria-label": N?.ui?.nextAria || "Next project",
                                children: (0, t.jsx)("svg", {
                                  width: "18",
                                  height: "18",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: (0, t.jsx)("path", {
                                    d: "M9 18l6-6-6-6",
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: `slider-container above-thread ${"slider" !== Z ? "view-hidden" : ""}`,
                      ref: er,
                      children: [
                        (0, t.jsxs)("div", {
                          className: "slider-track",
                          ref: ei,
                          children: [
                            b.projects.map((e, r) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "project-strip",
                                  onClick: (e) =>
                                    !el.current && eO(r, e.currentTarget),
                                  children: (0, t.jsxs)("div", {
                                    className: "project-strip-inner",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "corner tl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner tr",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner bl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner br",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-scan-line",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-visual",
                                        children: (0, t.jsx)("img", {
                                          src: e.img,
                                          className: "bg-img",
                                          alt: e.title,
                                          loading: "eager",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "strip-content",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "strip-tech-header",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "strip-barcode",
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "strip-status",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: "uppercase",
                                                    children:
                                                      e.type || "CLASSIFIED",
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "status-indicator",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "strip-details",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className: "strip-id",
                                                children: [
                                                  N?.projects?.viewer
                                                    ?.evidencePrefix ||
                                                    "EVIDENCE #",
                                                  e.id,
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-title-wrap",
                                                children: (0, t.jsx)("h3", {
                                                  className: "strip-title",
                                                  children: e.title,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-access",
                                                children:
                                                  N?.projects?.stripActions
                                                    ?.clickToDecrypt ||
                                                  "[ CLICK TO DECRYPT ]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                `clone-start-1-${e.id}`,
                              ),
                            ),
                            b.projects.map((e, r) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "project-strip",
                                  onClick: (e) =>
                                    !el.current && eO(r, e.currentTarget),
                                  children: (0, t.jsxs)("div", {
                                    className: "project-strip-inner",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "corner tl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner tr",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner bl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner br",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-scan-line",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-visual",
                                        children: (0, t.jsx)("img", {
                                          src: e.img,
                                          className: "bg-img",
                                          alt: e.title,
                                          loading: "eager",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "strip-content",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "strip-tech-header",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "strip-barcode",
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "strip-status",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: "uppercase",
                                                    children:
                                                      e.type || "CLASSIFIED",
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "status-indicator",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "strip-details",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className: "strip-id",
                                                children: [
                                                  N?.projects?.viewer
                                                    ?.evidencePrefix ||
                                                    "EVIDENCE #",
                                                  e.id,
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-title-wrap",
                                                children: (0, t.jsx)("h3", {
                                                  className: "strip-title",
                                                  children: e.title,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-access",
                                                children:
                                                  N?.projects?.stripActions
                                                    ?.clickToDecrypt ||
                                                  "[ CLICK TO DECRYPT ]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                `clone-start-${e.id}`,
                              ),
                            ),
                            b.projects.map((e, r) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "project-strip",
                                  onClick: (e) =>
                                    !el.current && eO(r, e.currentTarget),
                                  children: (0, t.jsxs)("div", {
                                    className: "project-strip-inner",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "corner tl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner tr",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner bl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner br",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-scan-line",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-visual",
                                        children: (0, t.jsx)("img", {
                                          src: e.img,
                                          className: "bg-img",
                                          alt: e.title,
                                          loading: "eager",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "strip-content",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "strip-tech-header",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "strip-barcode",
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "strip-status",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: "uppercase",
                                                    children:
                                                      e.type || "CLASSIFIED",
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "status-indicator",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "strip-details",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className: "strip-id",
                                                children: [
                                                  N?.projects?.viewer
                                                    ?.evidencePrefix ||
                                                    "EVIDENCE #",
                                                  e.id,
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-title-wrap",
                                                children: (0, t.jsx)("h3", {
                                                  className: "strip-title",
                                                  children: e.title,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-access",
                                                children:
                                                  N?.projects?.stripActions
                                                    ?.clickToDecrypt ||
                                                  "[ CLICK TO DECRYPT ]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                e.id,
                              ),
                            ),
                            b.projects.map((e, r) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "project-strip",
                                  onClick: (e) =>
                                    !el.current && eO(r, e.currentTarget),
                                  children: (0, t.jsxs)("div", {
                                    className: "project-strip-inner",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "corner tl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner tr",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner bl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner br",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-scan-line",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-visual",
                                        children: (0, t.jsx)("img", {
                                          src: e.img,
                                          className: "bg-img",
                                          alt: e.title,
                                          loading: "eager",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "strip-content",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "strip-tech-header",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "strip-barcode",
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "strip-status",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: "uppercase",
                                                    children:
                                                      e.type || "CLASSIFIED",
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "status-indicator",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "strip-details",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className: "strip-id",
                                                children: [
                                                  N?.projects?.viewer
                                                    ?.evidencePrefix ||
                                                    "EVIDENCE #",
                                                  e.id,
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-title-wrap",
                                                children: (0, t.jsx)("h3", {
                                                  className: "strip-title",
                                                  children: e.title,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-access",
                                                children:
                                                  N?.projects?.stripActions
                                                    ?.clickToDecrypt ||
                                                  "[ CLICK TO DECRYPT ]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                `clone-end-${e.id}`,
                              ),
                            ),
                            b.projects.map((e, r) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "project-strip",
                                  onClick: (e) =>
                                    !el.current && eO(r, e.currentTarget),
                                  children: (0, t.jsxs)("div", {
                                    className: "project-strip-inner",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "corner tl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner tr",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner bl",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "corner br",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-scan-line",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "strip-visual",
                                        children: (0, t.jsx)("img", {
                                          src: e.img,
                                          className: "bg-img",
                                          alt: e.title,
                                          loading: "eager",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "strip-content",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "strip-tech-header",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: "strip-barcode",
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "strip-status",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: "uppercase",
                                                    children:
                                                      e.type || "CLASSIFIED",
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "status-indicator",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: "strip-details",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className: "strip-id",
                                                children: [
                                                  N?.projects?.viewer
                                                    ?.evidencePrefix ||
                                                    "EVIDENCE #",
                                                  e.id,
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-title-wrap",
                                                children: (0, t.jsx)("h3", {
                                                  className: "strip-title",
                                                  children: e.title,
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: "strip-access",
                                                children:
                                                  N?.projects?.stripActions
                                                    ?.clickToDecrypt ||
                                                  "[ CLICK TO DECRYPT ]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                `clone-end-2-${e.id}`,
                              ),
                            ),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "slider-badge",
                          children: [
                            (0, t.jsx)("div", { className: "badge-barcode" }),
                            (0, t.jsxs)("div", {
                              className: "badge-content",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "badge-label",
                                  children: (N?.ui?.archive || "АРХИВ КЕЙСОВ"),
                                }),
                                (0, t.jsxs)("span", {
                                  className: "badge-count",
                                  children: [
                                    String(b.projects.length).padStart(2, "0"),
                                    (N?.ui?.files || " КЕЙСОВ"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: `projects-list above-thread ${"list" !== Z ? "view-hidden" : ""}`,
                      children: b.projects.map((e, r) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: "project-list-item",
                            onClick: (e) => eO(r, e.currentTarget),
                            children: [
                              (0, t.jsx)("div", {
                                className: "list-item-bg",
                                children: (0, t.jsx)("img", {
                                  src: e.img,
                                  className: "list-item-bg-img",
                                  alt: e.title,
                                  loading: "eager",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "list-item-overlay",
                              }),
                              (0, t.jsxs)("div", {
                                className: "list-item-content",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "list-item-left",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "list-item-barcode",
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "list-item-info",
                                        children: [
                                          (0, t.jsxs)("span", {
                                            className: "list-item-id mono",
                                            children: [
                                              N?.projects?.viewer
                                                ?.evidencePrefix ||
                                                "EVIDENCE #",
                                              e.id,
                                            ],
                                          }),
                                          (0, t.jsx)("h3", {
                                            className: "list-item-title serif",
                                            children: e.title,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "list-item-center",
                                    children: (0, t.jsx)("span", {
                                      className: "list-item-type mono",
                                      children: e.type || "CLASSIFIED",
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "list-item-right",
                                    children: (0, t.jsxs)("div", {
                                      className: "list-item-access mono",
                                      children: [
                                        (0, t.jsx)("span", {
                                          children:
                                            N?.projects?.stripActions
                                              ?.clickToDecrypt ||
                                            "[ CLICK TO DECRYPT ]",
                                        }),
                                        (0, t.jsx)("svg", {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          children: (0, t.jsx)("path", {
                                            d: "M5 12h14M12 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: "projects-badge",
                      children: [
                        (0, t.jsx)("div", { className: "badge-barcode" }),
                        (0, t.jsxs)("div", {
                          className: "badge-content",
                          children: [
                            (0, t.jsx)("span", {
                              className: "badge-label",
                              children: (N?.ui?.archive || "АРХИВ КЕЙСОВ"),
                            }),
                            (0, t.jsxs)("span", {
                              className: "badge-count",
                              children: [
                                String(b.projects.length).padStart(2, "0"),
                                (N?.ui?.files || " КЕЙСОВ"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  className: "about-section",
                  id: "about",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "section-header behind-thread",
                      style: {
                        padding: "0 0 2rem 0",
                        width: "100%",
                        border: "none",
                      },
                      children: [
                        (0, t.jsx)("h2", {
                          className: "serif",
                          style: { fontSize: "clamp(2rem, 3vw, 2.5rem)" },
                          children: N?.about?.sectionTitle || "SUBJECT PROFILE",
                        }),
                        (0, t.jsxs)("div", {
                          className: "mono text-dim",
                          style: { fontSize: "0.8rem" },
                          children: [
                            N?.about?.sectionSubtitle || "CASE FILE: KH-99",
                            (0, t.jsx)("br", {}),
                            N?.about?.sectionStatus || "STATUS: AT LARGE",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "profiler-container",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "profiler-module col-identity",
                          children: [
                            (0, t.jsx)("div", {
                              className: "identity-name mono",
                              children:
                                N?.about?.identity?.nameId || "K. LEVKEVICH",
                            }),
                            (0, t.jsx)("div", {
                              className: "profile-photo",
                              children: N?.about?.identity?.photo &&
                                (0, t.jsx)("img", {
                                  src: N.about.identity.photo,
                                  alt: N.about.identity.nameId || "Portrait",
                                  className: "profile-photo-image",
                                }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "id-data-grid",
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "mono",
                                      children: (N?.ui?.classLabel || "CLASS:"),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "id-val",
                                      children:
                                        N?.about?.identity?.class ||
                                        "DEV_FULLSTACK",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "mono",
                                      children: (N?.ui?.xpLabel || "XP_LEVEL:"),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "id-val",
                                      children:
                                        N?.about?.identity?.xpLevel ||
                                        "ADVANCED",
                                    }),
                                  ],
                                }),
                                (
                                  N?.about?.identity?.languages || [
                                    "FR (Natif)",
                                    "EN (Courant)",
                                  ]
                                ).map((e, r) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, t.jsxs)("span", {
                                          className: "mono",
                                          children: [N?.ui?.languagesLabel || "LANGUAGE", " ", r + 1, ":"],
                                        }),
                                        (0, t.jsx)("span", {
                                          className: "id-val",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    r,
                                  ),
                                ),
                                (0, t.jsxs)("div", {
                                  className: "status-wrapper cursor-pointer",
                                  "data-cursor-text": "CONTACT_ME",
                                  onClick: () => {
                                    et.current
                                      ? et.current.scrollTo("bottom", {
                                          duration: 2,
                                        })
                                      : window.scrollTo({
                                          top: document.body.scrollHeight,
                                          behavior: "smooth",
                                        });
                                  },
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "status-bg-scroll",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "status-header",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className: "status-dot",
                                        }),
                                        (N?.ui?.status || " СТАТУС"),
                                      ],
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "status-main",
                                      children:
                                        N?.about?.identity?.statusBadge ||
                                        "OPEN TO WORK",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "status-footer",
                                      children: [
                                        (0, t.jsx)("span", {
                                          children: (N?.ui?.contracts || "// ГОТОВ К СОТРУДНИЧЕСТВУ"),
                                        }),
                                        (0, t.jsx)("span", {
                                          children: (N?.ui?.remote || "[УДАЛЁННО / ГИБРИД / РАБОТА В ОФИСЕ]"),
                                        }),
                                        (0, t.jsx)("span", {
                                          className: "status-relocation",
                                          children: N?.ui?.relocation || "ГОТОВ К РЕЛОКАЦИИ",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "profiler-module col-behavior",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "analysis-header",
                              children: [
                                (0, t.jsx)("span", {
                                  children:
                                    N?.about?.behavior?.title ||
                                    "BEHAVIORAL_ANALYSIS_REPORT",
                                }),
                                (0, t.jsx)("span", {
                                  children:
                                    N?.about?.behavior?.subtitle ||
                                    "[READ_ONLY]",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "psych-report",
                              children: [
                                (0, t.jsx)("p", {
                                  style: {
                                    fontSize: "1.1rem",
                                    lineHeight: "1.6",
                                    marginBottom: "3rem",
                                  },
                                  children: (0, t.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                      __html:
                                        N?.about?.behavior?.mainText ||
                                        'Développeur hybride obsédé par la fusion entre <span class="evidence-highlight">rigueur technique</span> et <span class="evidence-highlight">impact visuel</span>. Je ne construis pas juste des sites, je conçois des systèmes immersifs qui marquent les esprits.',
                                    },
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "dossier-history",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "history-block",
                                      children: [
                                        (0, t.jsx)("h4", {
                                          className: "mono",
                                          children:
                                            N?.about?.behavior?.experience
                                              ?.title ||
                                            "// FIELD_OPERATIONS [EXPÉRIENCE]",
                                        }),
                                        N?.about?.behavior?.experience?.summary &&
                                          (0, t.jsx)("div", {
                                            className: "experience-summary",
                                            children: N.about.behavior.experience.summary,
                                          }),
                                        (
                                          N?.about?.behavior?.experience
                                            ?.items || [
                                            {
                                              label: "GENESII",
                                              title:
                                                "Fullstack Web & App Developer (Alternance)",
                                              subtitle: "3 YEARS ACTIVE DUTY",
                                              period: "2021-2024",
                                            },
                                            {
                                              label: "VARIOUS",
                                              title: "Multiple Deployments",
                                              subtitle:
                                                "INTERNSHIPS (3+ MONTHS)",
                                              period: "2019-2021",
                                            },
                                            {
                                              label: "TOTAL_RUNTIME",
                                              title:
                                                "Continuous Learning Protocol",
                                              subtitle: "8 YEARS PROGRAMMING",
                                              period: "2017-2025",
                                            },
                                          ]
                                        ).map((e, r) =>
                                          (0, t.jsxs)(
                                            "div",
                                            {
                                              className: "history-item",
                                              children: [
                                                (0, t.jsxs)("div", {
                                                  className: "history-header",
                                                  children: [
                                                    (0, t.jsxs)("span", {
                                                      className: "history-date",
                                                      children: [
                                                        "[",
                                                        e.subtitle,
                                                        "]",
                                                      ],
                                                    }),
                                                    e.period &&
                                                      (0, t.jsx)("span", {
                                                        className:
                                                          "history-period",
                                                        children: e.period,
                                                      }),
                                                  ],
                                                }),
                                                (0, t.jsx)("div", {
                                                  className: "experience-description",
                                                  children: e.title,
                                                }),
                                              ],
                                            },
                                            r,
                                          ),
                                        ),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "history-block",
                                      children: [
                                        (0, t.jsx)("h4", {
                                          className: "mono",
                                          children:
                                            N?.about?.behavior?.education
                                              ?.title ||
                                            "// ACADEMIC_LOG [DIPLÔMES]",
                                        }),
                                        (
                                          N?.about?.behavior?.education
                                            ?.items || [
                                            {
                                              label: "MASTER",
                                              title:
                                                "Expert Création Numérique & Interactive (Lead Tech)",
                                              subtitle: "GOBELINS PARIS",
                                              period: "2024-2025",
                                            },
                                            {
                                              label: "BACHELOR",
                                              title:
                                                "Concepteur Développeur d'Application",
                                              subtitle: "MY DIGITAL SCHOOL",
                                              period: "2021-2024",
                                            },
                                          ]
                                        ).map((e, r) =>
                                          (0, t.jsxs)(
                                            "div",
                                            {
                                              className: "history-item",
                                              children: [
                                                (0, t.jsxs)("div", {
                                                  className: "history-header",
                                                  children: [
                                                    (0, t.jsxs)("span", {
                                                      className: "history-date",
                                                      children: [
                                                        "[",
                                                        e.subtitle,
                                                        "]",
                                                      ],
                                                    }),
                                                    e.period &&
                                                      (0, t.jsx)("span", {
                                                        className:
                                                          "history-period",
                                                        children: e.period,
                                                      }),
                                                  ],
                                                }),
                                                (0, t.jsx)("div", {
                                                  className: "education-description",
                                                  children: e.title,
                                                }),
                                              ],
                                            },
                                            r,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "col-capabilities-wrapper",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "profiler-module cap-top",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "mono",
                                  style: {
                                    fontSize: "0.7rem",
                                    color: "#888888",
                                    marginBottom: "1rem",
                                    textAlign: "right",
                                  },
                                  children:
                                    N?.about?.capabilities?.inventoryLabel ||
                                    "EQUIPMENT_INVENTORY",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "tech-category",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "cat-title text-accent",
                                      children:
                                        N?.about?.capabilities?.hardSkills
                                          ?.title || "HARD SKILLS",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "chips-grid",
                                      children: (
                                        N?.about?.capabilities?.hardSkills
                                          ?.techs || [
                                          "React",
                                          "TypeScript",
                                          "Next.js",
                                          "Three.js / WebGL",
                                          "Symfony",
                                          "PHP",
                                          "WordPress",
                                          "SQL",
                                          "Node.js",
                                          "GSAP",
                                        ]
                                      ).map((e, r) =>
                                        (0, t.jsx)(
                                          "div",
                                          {
                                            className: `tech-chip ${e.includes("Three.js") ? "text-accent" : ""}`,
                                            children: e,
                                          },
                                          r,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "tech-category",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "cat-title",
                                      children:
                                        N?.about?.capabilities?.softSkills
                                          ?.title || "SOFT SKILLS",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: "chips-grid",
                                      children: (
                                        N?.about?.capabilities?.softSkills
                                          ?.techs || [
                                          "Problem Solving",
                                          "Créativité",
                                          "Autonomie",
                                          "Rigueur",
                                          "Collaboration",
                                        ]
                                      ).map((e, r) =>
                                        (0, t.jsx)(
                                          "div",
                                          {
                                            className: "tech-chip",
                                            children: e,
                                          },
                                          r,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("section", {
                  className: "contact-section",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[var(--accent-red)] opacity-[0.05] blur-[100px] animate-organic-2 mix-blend-normal will-change-transform z-0",
                    }),
                    (0, t.jsx)("div", {
                      className: "bg-marquee serif",
                      children:
                        N?.contact?.bgMarquee ||
                        "INITIATE PROTOCOL // START TRANSMISSION //",
                    }),
                    (0, t.jsxs)("div", {
                      className: "contact-terminal behind-thread",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "mono text-accent",
                          style: { fontSize: "0.9rem", marginBottom: "1rem" },
                          children: [
                            (0, t.jsx)("span", { className: "status-light" }),
                            " ",
                            N?.contact?.channelStatus || "CHANNEL OPEN",
                          ],
                        }),
                        (0, t.jsx)("h2", {
                          className: "contact-title serif",
                          dangerouslySetInnerHTML: {
                            __html:
                              N?.contact?.title ||
                              "Ready to solve<br />the case?",
                          },
                        }),
                        (0, t.jsx)("div", {
                          className: "mono text-accent",
                          style: {
                            fontSize: "1rem",
                            margin: "2rem 0",
                            letterSpacing: "1px",
                          },
                          children:
                            N?.contact?.email || "killianherzer@gmail.com",
                        }),
                        (0, t.jsx)("a", {
                          href: `mailto:${N?.contact?.email || "killianherzer@gmail.com"}`,
                          className: "contact-btn mono",
                          "data-cursor-text": "SEND_MAIL",
                          children:
                            N?.contact?.buttonText || "INITIATE CONTACT",
                        }),
                        S?.social &&
                          (0, t.jsxs)("div", {
                            className: "mono",
                            style: {
                              marginTop: "3rem",
                              display: "flex",
                              gap: "2rem",
                              justifyContent: "center",
                              alignItems: "center",
                            },
                            children: [
                              S.social.github &&
                                (0, t.jsxs)("a", {
                                  href: S.social.github,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "social-link",
                                  "data-cursor-text": "ACCESS",
                                  style: {
                                    fontSize: "0.9rem",
                                    letterSpacing: "1px",
                                    color: "var(--accent-red)",
                                    textDecoration: "none",
                                  },
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "bracket-left",
                                      children: "[ ",
                                    }),
                                    "GITHUB",
                                    (0, t.jsx)("span", {
                                      className: "bracket-right",
                                      children: " ]",
                                    }),
                                  ],
                                }),
                              S.social.telegram &&
                                (0, t.jsxs)("a", {
                                  href: S.social.telegram,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "social-link",
                                  "data-cursor-text": "ACCESS",
                                  style: {
                                    fontSize: "0.9rem",
                                    letterSpacing: "1px",
                                    color: "var(--accent-red)",
                                    textDecoration: "none",
                                  },
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "bracket-left",
                                      children: "[ ",
                                    }),
                                    "TELEGRAM",
                                    (0, t.jsx)("span", {
                                      className: "bracket-right",
                                      children: " ]",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        (0, t.jsxs)("div", {
                          className: "mono",
                          style: {
                            marginTop: "4rem",
                            color: "#888888",
                            fontSize: "0.8rem",
                          },
                          children: [
                            N?.contact?.secureLineText ||
                              "SECURE LINE ESTABLISHED",
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              dangerouslySetInnerHTML: {
                                __html:
                                  N?.contact?.copyright ||
                                  "&copy; 2025 ARTEMIY LEVKEVICH",
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "project-viewer",
              ref: ec,
              children: [
                (0, t.jsx)("div", {
                  className: "controls-header",
                  children: (0, t.jsx)("div", {
                    className: "close-btn mono",
                    "data-cursor-text": "CLOSE",
                    onClick: eD,
                    children:
                      N?.projects?.viewer?.closeButton ||
                      "CLOSE TERMINAL [ESC]",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "viewer-slide-wrapper",
                  ref: ed,
                  children: [
                    (0, t.jsx)("img", {
                      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                      className: "viewer-bg",
                      alt: "bg",
                      ref: eh,
                    }),
                    (0, t.jsx)("div", {
                      className: "grid-bg",
                      style: { opacity: 0.3, zIndex: 1 },
                    }),
                    (0, t.jsx)("div", {
                      className: "project-details-overlay",
                      ref: eu,
                      "data-lenis-prevent": !0,
                      children: (0, t.jsxs)("div", {
                        className: "scroll-content-inner",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "interface-header anim-item",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "mono",
                                    style: {
                                      color: "var(--accent-red)",
                                      marginBottom: "10px",
                                    },
                                    children:
                                      N?.projects?.viewer?.headerLabel ||
                                      "TOP SECRET // DECRYPTED",
                                  }),
                                  (0, t.jsx)("div", {
                                    style: {
                                      display: "flex",
                                      alignItems: "baseline",
                                      gap: "1rem",
                                      flexWrap: "wrap",
                                    },
                                    children: (0, t.jsxs)("div", {
                                      className: "mono text-accent overlay-id",
                                      style: { fontSize: "0.9rem" },
                                      children: [
                                        N?.projects?.viewer?.evidencePrefix ||
                                          "EVIDENCE #",
                                        "XX",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: "mono overlay-type uppercase",
                                children: "Type",
                              }),
                            ],
                          }),
                          (0, t.jsx)("h2", {
                            className: "resume-case-title",
                            children: b.projects[l]?.title || "",
                          }),
                          (0, t.jsxs)("div", {
                            className: "interface-grid",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "data-sidebar anim-item",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "mono",
                                    style: {
                                      color: "var(--accent-red)",
                                      borderBottom: "1px solid #c49a73",
                                      paddingBottom: "10px",
                                    },
                                    children:
                                      N?.projects?.viewer?.metadata?.title ||
                                      "METADATA",
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "data-point mono",
                                    children: [
                                      (0, t.jsx)("label", {
                                        children:
                                          N?.projects?.viewer?.metadata
                                            ?.yearLabel || "YEAR",
                                      }),
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: "overlay-date",
                                        children: "2024",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "data-point mono",
                                    children: [
                                      (0, t.jsx)("label", {
                                        children:
                                          N?.projects?.viewer?.metadata
                                            ?.ctxLabel || "CTX",
                                      }),
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: "overlay-cadre",
                                        children: "Pro",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "data-point mono container-ecole-client",
                                    children: [
                                      (0, t.jsx)("label", {
                                        className: "label-ecole-client",
                                        children: "CLIENT",
                                      }),
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: "overlay-ecole-client",
                                        children: "Values",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "data-point mono",
                                    children: [
                                      (0, t.jsx)("label", {
                                        children:
                                          N?.projects?.viewer?.metadata
                                            ?.timeLabel || "TIME",
                                      }),
                                      " ",
                                      (0, t.jsx)("span", {
                                        className: "overlay-duree",
                                        children: "1mo",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "mono",
                                    style: { marginTop: "1rem" },
                                    children: [
                                      (0, t.jsx)("label", {
                                        style: {
                                          color: "#888888",
                                          fontSize: "0.8rem",
                                        },
                                        children: (N?.ui?.tags || "TAGS:"),
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "overlay-tags chips-grid",
                                        style: { marginTop: "10px" },
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "mono",
                                    style: { marginTop: "1rem" },
                                    children: [
                                      (0, t.jsx)("label", {
                                        style: {
                                          color: "#888888",
                                          fontSize: "0.8rem",
                                        },
                                        children:
                                          N?.projects?.viewer?.metadata
                                            ?.stackLabel || "STACK_TRACE:",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "overlay-stack chips-grid",
                                        style: { marginTop: "10px" },
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    className:
                                      "project-link full-width overlay-link mono",
                                    "data-cursor-text": "VISIT",
                                    children:
                                      N?.projects?.viewer?.sections
                                        ?.accessSite || "ACCESS SITE",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "data-main anim-item",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "terminal-block",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "mono",
                                        children:
                                          N?.projects?.viewer?.sections
                                            ?.missionReport || "MISSION_REPORT",
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "overlay-desc",
                                        children: "Description",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "img-display",
                                    "data-img-type": "main",
                                    children: (0, t.jsx)("img", {
                                      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                      className: "overlay-img-1 expandable-img",
                                      alt: "Evidence Main",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "terminal-block",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "mono",
                                        children:
                                          N?.projects?.viewer?.sections
                                            ?.technicalAnalysis ||
                                          "TECHNICAL_ANALYSIS",
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "overlay-context",
                                        children: "Context",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "img-display",
                                    "data-img-type": "sec",
                                    children: (0, t.jsx)("img", {
                                      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                      className: "overlay-img-2 expandable-img",
                                      alt: "Evidence Secondary",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "terminal-block",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "mono",
                                        children: (N?.ui?.contribution || "МОЙ ВКЛАД И РЕЗУЛЬТАТ"),
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "overlay-role",
                                        children: "Intervention",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "terminal-block",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "mono",
                                        children:
                                          N?.projects?.viewer?.sections
                                            ?.agentsLabel || "AGENTS / CREDITS",
                                      }),
                                      (0, t.jsx)("ul", {
                                        className:
                                          "credits-list overlay-credits-list",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "terminal-block",
                                    children: [
                                      (0, t.jsx)("h3", {
                                        className: "mono",
                                        children: (N?.ui?.usefulLinks || "USEFUL_LINKS"),
                                      }),
                                      (0, t.jsx)("ul", {
                                        className:
                                          "useful-links-list overlay-useful-links",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "terminal-block container-additional-evidence",
                            style: { marginTop: "4rem" },
                            children: [
                              (0, t.jsx)("h3", {
                                className: "mono",
                                children:
                                  N?.projects?.viewer?.sections
                                    ?.additionalEvidence ||
                                  "ADDITIONAL_EVIDENCE_LOG",
                              }),
                              (0, t.jsx)("div", { className: "evidence-grid" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    (i.default.registerPlugin(t9, c), e.s(["default", () => rE], 2829));
  },
]);
