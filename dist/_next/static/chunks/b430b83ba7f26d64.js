(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  31894,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809)._(e.r(31894)),
      a = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        u = !1;
      ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l))));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
          : u || (u = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${o}${c}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return s(e);
    }
  },
  18581,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = i(e, n)), t && (o.current = i(t, n)));
        },
        [e, t],
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return w;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await m(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = "undefined" != typeof performance,
      y =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e],
        );
    class g extends Error {}
    class b extends Error {}
    class x extends Error {
      constructor(e) {
        (super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class v extends Error {
      constructor(e, t) {
        (super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class j extends Error {
      constructor() {
        (super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module"));
      }
    }
    function w(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(18967),
      o = e.r(52817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(90809),
      a = e.r(43476),
      s = i._(e.r(71645)),
      l = e.r(95057),
      u = e.r(8372),
      c = e.r(18581),
      f = e.r(18967),
      d = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      m = e.r(73668),
      h = e.r(9396);
    function y(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function g(t) {
      var r;
      let n,
        o,
        i,
        [l, g] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
        x = (0, s.useRef)(null),
        {
          href: v,
          as: j,
          children: w,
          prefetch: P = null,
          passHref: N,
          replace: E,
          shallow: S,
          scroll: O,
          onClick: _,
          onMouseEnter: T,
          onTouchStart: k,
          legacyBehavior: C = !1,
          onNavigate: L,
          ref: R,
          unstable_dynamicOnHover: M,
          ...I
        } = t;
      ((n = w),
        C &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n })));
      let $ = s.default.useContext(u.AppRouterContext),
        A = !1 !== P,
        U =
          !1 !== P
            ? null === (r = P) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: z, as: B } = s.default.useMemo(() => {
          let e = y(v);
          return { href: e, as: j ? y(j) : e };
        }, [v, j]);
      if (C) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 },
          );
        o = s.default.Children.only(n);
      }
      let F = C ? o && "object" == typeof o && o.ref : R,
        D = s.default.useCallback(
          (e) => (
            null !== $ &&
              (x.current = (0, p.mountLinkInstance)(e, z, $, U, A, g)),
            () => {
              (x.current &&
                ((0, p.unmountLinkForCurrentNavigation)(x.current),
                (x.current = null)),
                (0, p.unmountPrefetchableInstance)(e));
            }
          ),
          [A, z, $, U, g],
        ),
        W = {
          ref: (0, c.useMergedRef)(D, F),
          onClick(t) {
            (C || "function" != typeof _ || _(t),
              C &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, n, o, i, a, l) {
                  if ("undefined" != typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    s.default.startTransition(() => {
                      f(n || r, i ? "replace" : "push", a ?? !0, o.current);
                    });
                  }
                })(t, z, B, x, E, O, L));
          },
          onMouseEnter(e) {
            (C || "function" != typeof T || T(e),
              C &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              $ && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
          onTouchStart: function (e) {
            (C || "function" != typeof k || k(e),
              C &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              $ && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === M));
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (W.href = B)
          : (C && !N && ("a" !== o.type || "href" in o.props)) ||
            (W.href = (0, d.addBasePath)(B)),
        (i = C
          ? s.default.cloneElement(o, W)
          : (0, a.jsx)("a", { ...I, ...W, children: n })),
        (0, a.jsx)(b.Provider, { value: l, children: i })
      );
    }
    e.r(84508);
    let b = (0, s.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  36768,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22016),
      n = e.i(18724),
      o = e.i(95701),
      i = e.i(71645),
      a = e.i(89970);
    function s() {
      let {
          remoteCursors: e,
          updateCursorPosition: s,
          isAdmin: l,
        } = (0, n.useMultiCursor)(),
        [u, c] = (0, i.useState)(!1),
        f = (0, i.useRef)(null),
        d = (0, i.useRef)(null),
        p = (0, i.useRef)(null);
      return ((0, i.useEffect)(
        () => (
          c(!0),
          document.body.classList.add("is-loaded"),
          () => {
            document.body.classList.remove("is-loaded");
          }
        ),
        [],
      ),
      (0, i.useEffect)(() => {
        if (!u) return;
        let e = f.current,
          t = d.current,
          r = p.current;
        if (!e || !t || !r) return;
        (a.default.set(e, {
          xPercent: -50,
          yPercent: -50,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        }),
          a.default.set(t, {
            xPercent: 0,
            yPercent: 0,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
          }));
        let n = a.default.quickTo(e, "x", { duration: 0.1, ease: "power3" }),
          o = a.default.quickTo(e, "y", { duration: 0.1, ease: "power3" }),
          i = a.default.quickTo(t, "x", { duration: 0.4, ease: "power3" }),
          l = a.default.quickTo(t, "y", { duration: 0.4, ease: "power3" }),
          c = (e) => {
            ((r.innerText = `X: ${Math.round(e.clientX)} Y: ${Math.round(e.clientY)}`),
              n(e.clientX),
              o(e.clientY),
              i(e.clientX),
              l(e.clientY),
              s(e.clientX, e.clientY));
          };
        return (
          window.addEventListener("mousemove", c),
          () => {
            window.removeEventListener("mousemove", c);
          }
        );
      }, [u, s]),
      u)
        ? (0, t.jsxs)("div", {
            className:
              "relative min-h-screen flex flex-col items-center justify-center bg-void-black overflow-hidden selection:bg-accent-red selection:text-void-black",
            style: {
              backgroundColor: "#050505",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
            children: [
              (0, t.jsx)("div", {
                className:
                  "fixed inset-0 pointer-events-none opacity-[0.03] z-[100]",
                style: { backgroundImage: 'url("/images/noise.png")' },
              }),
              (0, t.jsxs)("div", {
                className: `cursor-main ${l ? "admin-cursor" : ""}`,
                ref: f,
                style: { position: "fixed", top: 0, left: 0 },
                children: [
                  (0, t.jsx)("div", { className: "cursor-visual" }),
                  l &&
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
                            color: "#ff2a2a",
                            whiteSpace: "nowrap",
                            padding: "2px 6px",
                            background: "rgba(0, 0, 0, 0.8)",
                            borderRadius: "3px",
                            border: "1px solid rgba(255, 42, 42, 0.3)",
                            textTransform: "uppercase",
                            pointerEvents: "none",
                            zIndex: 100,
                          },
                          children: "KILLIAN",
                        }),
                      ],
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "cursor-data",
                ref: d,
                style: { position: "fixed", top: 0, left: 0 },
                children: (0, t.jsx)("span", {
                  className: "cursor-text-val",
                  ref: p,
                  children: "X: 0 Y: 0",
                }),
              }),
              (0, t.jsx)(o.RemoteCursors, { cursors: e }),
              (0, t.jsxs)("div", {
                className:
                  "relative z-10 text-center px-6 flex flex-col items-center",
                style: { width: "100%", maxWidth: "800px", margin: "0 auto" },
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "leading-none font-black text-accent-red opacity-90 tracking-tighter",
                    style: {
                      fontSize: "clamp(6rem, 20vw, 12rem)",
                      marginBottom: "1.5rem",
                      fontWeight: 900,
                    },
                    children: "404",
                  }),
                  (0, t.jsxs)("div", {
                    style: {
                      width: "100%",
                      maxWidth: "600px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    },
                    children: [
                      (0, t.jsxs)("div", {
                        style: { marginBottom: "2.5rem", width: "100%" },
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "font-bold uppercase tracking-[0.3em] mono",
                            style: {
                              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                              marginBottom: "1rem",
                              color: "#fff",
                            },
                            children: "SESSION_LOST",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "h-[1px] w-full bg-grid-line relative overflow-hidden",
                            style: {
                              backgroundColor: "#1f1f1f",
                              height: "1px",
                            },
                            children: (0, t.jsx)("div", {
                              className:
                                "absolute inset-0 bg-accent-red/40 animate-scan-slow",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: "mono leading-relaxed",
                        style: {
                          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                          marginBottom: "3.5rem",
                          color: "#888",
                          maxWidth: "500px",
                        },
                        children:
                          "L'entité demandée est introuvable dans ce segment de la base de données. Il est possible que le lien soit rompu ou que l'accès ait été révoqué.",
                      }),
                      (0, t.jsxs)(r.default, {
                        href: "/",
                        className:
                          "group relative flex items-center justify-center transition-all duration-300",
                        style: {
                          gap: "1.5rem",
                          padding: "1.25rem 3rem",
                          border: "1px solid rgba(255, 42, 42, 0.3)",
                          backgroundColor: "rgba(255, 42, 42, 0.05)",
                          minWidth: "300px",
                          textDecoration: "none",
                          display: "flex",
                        },
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-red opacity-70 group-hover:opacity-100 transition-opacity",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-red opacity-70 group-hover:opacity-100 transition-opacity",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-red opacity-70 group-hover:opacity-100 transition-opacity",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-red opacity-70 group-hover:opacity-100 transition-opacity",
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "mono uppercase font-black transition-colors",
                            style: {
                              fontSize: "0.9rem",
                              letterSpacing: "0.2em",
                              color: "#fff",
                            },
                            children: "Reconnexion au Terminal",
                          }),
                          (0, t.jsx)("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            className:
                              "transform group-hover:translate-x-2 transition-transform duration-300",
                            style: { color: "#ff2a2a" },
                            children: (0, t.jsx)("path", {
                              d: "M5 12H19M19 12L12 5M19 12L12 19",
                              stroke: "currentColor",
                              strokeWidth: "2.5",
                              strokeLinecap: "square",
                              strokeLinejoin: "miter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "absolute inset-0 z-0 opacity-20",
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, #1f1f1f 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                  pointerEvents: "none",
                },
              }),
            ],
          })
        : null;
    }
    e.s(["default", () => s]);
  },
]);
