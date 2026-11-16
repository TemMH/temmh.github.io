(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  8341,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      cancelIdleCallback: function () {
        return a;
      },
      requestIdleCallback: function () {
        return i;
      },
    };
    for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
    let i =
        ("undefined" != typeof self &&
          self.requestIdleCallback &&
          self.requestIdleCallback.bind(window)) ||
        function (e) {
          let t = Date.now();
          return self.setTimeout(function () {
            e({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - t));
              },
            });
          }, 1);
        },
      a =
        ("undefined" != typeof self &&
          self.cancelIdleCallback &&
          self.cancelIdleCallback.bind(window)) ||
        function (e) {
          return clearTimeout(e);
        };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  79520,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      handleClientScriptLoad: function () {
        return g;
      },
      initScriptLoader: function () {
        return _;
      },
    };
    for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
    let i = e.r(55682),
      a = e.r(90809),
      o = e.r(43476),
      s = i._(e.r(74080)),
      u = a._(e.r(71645)),
      d = e.r(42732),
      c = e.r(22737),
      f = e.r(8341),
      p = new Map(),
      y = new Set(),
      b = (e) => {
        let {
            src: t,
            id: r,
            onLoad: n = () => {},
            onReady: l = null,
            dangerouslySetInnerHTML: i,
            children: a = "",
            strategy: o = "afterInteractive",
            onError: u,
            stylesheets: d,
          } = e,
          f = r || t;
        if (f && y.has(f)) return;
        if (p.has(t)) {
          (y.add(f), p.get(t).then(n, u));
          return;
        }
        let b = () => {
            (l && l(), y.add(f));
          },
          g = document.createElement("script"),
          _ = new Promise((e, t) => {
            (g.addEventListener("load", function (t) {
              (e(), n && n.call(this, t), b());
            }),
              g.addEventListener("error", function (e) {
                t(e);
              }));
          }).catch(function (e) {
            u && u(e);
          });
        (i
          ? ((g.innerHTML = i.__html || ""), b())
          : a
            ? ((g.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              b())
            : t && ((g.src = t), p.set(t, _)),
          (0, c.setAttributesFromProps)(g, e),
          "worker" === o && g.setAttribute("type", "text/partytown"),
          g.setAttribute("data-nscript", o),
          d &&
            ((e) => {
              if (s.default.preinit)
                return e.forEach((e) => {
                  s.default.preinit(e, { as: "style" });
                });
              if ("undefined" != typeof window) {
                let t = document.head;
                e.forEach((e) => {
                  let r = document.createElement("link");
                  ((r.type = "text/css"),
                    (r.rel = "stylesheet"),
                    (r.href = e),
                    t.appendChild(r));
                });
              }
            })(d),
          document.body.appendChild(g));
      };
    function g(e) {
      let { strategy: t = "afterInteractive" } = e;
      "lazyOnload" === t
        ? window.addEventListener("load", () => {
            (0, f.requestIdleCallback)(() => b(e));
          })
        : b(e);
    }
    function _(e) {
      (e.forEach(g),
        [
          ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
          ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
        ].forEach((e) => {
          let t = e.id || e.getAttribute("src");
          y.add(t);
        }));
    }
    function h(e) {
      let {
          id: t,
          src: r = "",
          onLoad: n = () => {},
          onReady: l = null,
          strategy: i = "afterInteractive",
          onError: a,
          stylesheets: c,
          ...p
        } = e,
        {
          updateScripts: g,
          scripts: _,
          getIsSsr: h,
          appDir: m,
          nonce: v,
        } = (0, u.useContext)(d.HeadManagerContext);
      v = p.nonce || v;
      let O = (0, u.useRef)(!1);
      (0, u.useEffect)(() => {
        let e = t || r;
        O.current || (l && e && y.has(e) && l(), (O.current = !0));
      }, [l, t, r]);
      let w = (0, u.useRef)(!1);
      if (
        ((0, u.useEffect)(() => {
          if (!w.current) {
            if ("afterInteractive" === i) b(e);
            else
              "lazyOnload" === i &&
                ("complete" === document.readyState
                  ? (0, f.requestIdleCallback)(() => b(e))
                  : window.addEventListener("load", () => {
                      (0, f.requestIdleCallback)(() => b(e));
                    }));
            w.current = !0;
          }
        }, [e, i]),
        ("beforeInteractive" === i || "worker" === i) &&
          (g
            ? ((_[i] = (_[i] || []).concat([
                {
                  id: t,
                  src: r,
                  onLoad: n,
                  onReady: l,
                  onError: a,
                  ...p,
                  nonce: v,
                },
              ])),
              g(_))
            : h && h()
              ? y.add(t || r)
              : h && !h() && b({ ...e, nonce: v })),
        m)
      ) {
        if (
          (c &&
            c.forEach((e) => {
              s.default.preinit(e, { as: "style" });
            }),
          "beforeInteractive" === i)
        )
          if (!r)
            return (
              p.dangerouslySetInnerHTML &&
                ((p.children = p.dangerouslySetInnerHTML.__html),
                delete p.dangerouslySetInnerHTML),
              (0, o.jsx)("script", {
                nonce: v,
                dangerouslySetInnerHTML: {
                  __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0, { ...p, id: t }])})`,
                },
              })
            );
          else
            return (
              s.default.preload(
                r,
                p.integrity
                  ? {
                      as: "script",
                      integrity: p.integrity,
                      nonce: v,
                      crossOrigin: p.crossOrigin,
                    }
                  : { as: "script", nonce: v, crossOrigin: p.crossOrigin },
              ),
              (0, o.jsx)("script", {
                nonce: v,
                dangerouslySetInnerHTML: {
                  __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r, { ...p, id: t }])})`,
                },
              })
            );
        "afterInteractive" === i &&
          r &&
          s.default.preload(
            r,
            p.integrity
              ? {
                  as: "script",
                  integrity: p.integrity,
                  nonce: v,
                  crossOrigin: p.crossOrigin,
                }
              : { as: "script", nonce: v, crossOrigin: p.crossOrigin },
          );
      }
      return null;
    }
    Object.defineProperty(h, "__nextScript", { value: !0 });
    let m = h;
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  68246,
  (e) => {
    "use strict";
    var t = e.i(43476);
    function r() {
      return (0, t.jsx)("div", {
        className:
          "absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden",
        "aria-hidden": "true",
        children: (0, t.jsx)("div", {
          className:
            "absolute top-[-10%] left-[10%] w-[80%] h-[50vh] rounded-full bg-[var(--accent-red)] opacity-[0.06] blur-[120px] animate-organic-1 mix-blend-normal will-change-transform",
        }),
      });
    }
    e.s(["default", () => r]);
  },
]);
