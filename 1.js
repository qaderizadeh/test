(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2650],
  {
    66499: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return registerBackgroundTabDetection;
        },
      });
      var r = n(85814),
        i = n(72010),
        a = n(70716),
        s = n(35622),
        o = n(41314);
      function registerBackgroundTabDetection() {
        o.WINDOW && o.WINDOW.document
          ? o.WINDOW.document.addEventListener("visibilitychange", () => {
              let t = (0, r.x1)();
              if (o.WINDOW.document.hidden && t) {
                let e = "cancelled",
                  { op: n, status: r } = (0, i.XU)(t);
                s.X &&
                  a.kg.log(
                    `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`
                  ),
                  r || t.setStatus(e),
                  t.setTag("visibilitychange", "document.hidden"),
                  t.end();
              }
            })
          : s.X &&
            a.kg.warn(
              "[Tracing] Could not set up background tab detection due to lack of global document"
            );
      }
    },
    73048: function (t, e, n) {
      "use strict";
      n.d(e, {
        gE: function () {
          return BrowserTracing;
        },
      });
      var r = n(81844),
        i = n(17793),
        a = n(85814),
        s = n(70210),
        o = n(70716),
        c = n(6509),
        u = n(89284),
        l = n(35622),
        d = n(66499),
        p = n(80723),
        g = n(1729),
        h = n(82300),
        f = n(14785),
        m = n(41314);
      let _ = {
        ...r.AT,
        markBackgroundTransactions: !0,
        routingInstrumentation: function (t, e = !0, n = !0) {
          let r;
          if (!m.WINDOW || !m.WINDOW.location) {
            l.X &&
              o.kg.warn(
                "Could not initialize routing instrumentation due to invalid location"
              );
            return;
          }
          let i = m.WINDOW.location.href;
          e &&
            (r = t({
              name: m.WINDOW.location.pathname,
              startTimestamp: h.Z1 ? h.Z1 / 1e3 : void 0,
              op: "pageload",
              origin: "auto.pageload.browser",
              metadata: { source: "url" },
            })),
            n &&
              (0, f.a)(({ to: e, from: n }) => {
                if (void 0 === n && i && -1 !== i.indexOf(e)) {
                  i = void 0;
                  return;
                }
                n !== e &&
                  ((i = void 0),
                  r &&
                    (l.X &&
                      o.kg.log(
                        `[Tracing] Finishing current transaction with op: ${r.op}`
                      ),
                    r.end()),
                  (r = t({
                    name: m.WINDOW.location.pathname,
                    op: "navigation",
                    origin: "auto.navigation.browser",
                    metadata: { source: "url" },
                  })));
              });
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        _experiments: {},
        ...g.k3,
      };
      let BrowserTracing = class BrowserTracing {
        constructor(t) {
          (this.name = "BrowserTracing"),
            (this._hasSetTracePropagationTargets = !1),
            (0, i.T)(),
            l.X &&
              (this._hasSetTracePropagationTargets = !!(
                t &&
                (t.tracePropagationTargets || t.tracingOrigins)
              )),
            (this.options = { ..._, ...t }),
            void 0 !== this.options._experiments.enableLongTask &&
              (this.options.enableLongTask =
                this.options._experiments.enableLongTask),
            t &&
              !t.tracePropagationTargets &&
              t.tracingOrigins &&
              (this.options.tracePropagationTargets = t.tracingOrigins),
            (this._collectWebVitals = (0, p.PR)()),
            this.options.enableLongTask && (0, p.Fv)(),
            this.options._experiments.enableInteractions && (0, p.sn)();
        }
        setupOnce(t, e) {
          this._getCurrentHub = e;
          let n = e(),
            r = n.getClient(),
            i = r && r.getOptions(),
            {
              routingInstrumentation: a,
              startTransactionOnLocationChange: s,
              startTransactionOnPageLoad: c,
              markBackgroundTransactions: u,
              traceFetch: p,
              traceXHR: h,
              shouldCreateSpanForRequest: f,
              enableHTTPTimings: m,
              _experiments: _,
            } = this.options,
            v = i && i.tracePropagationTargets,
            y = v || this.options.tracePropagationTargets;
          l.X &&
            this._hasSetTracePropagationTargets &&
            v &&
            o.kg.warn(
              "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
            ),
            a(
              (t) => {
                let n = this._createRouteTransaction(t);
                return (
                  this.options._experiments.onStartRouteTransaction &&
                    this.options._experiments.onStartRouteTransaction(n, t, e),
                  n
                );
              },
              c,
              s
            ),
            u && (0, d.j)(),
            _.enableInteractions && this._registerInteractionListener(),
            (0, g.L7)({
              traceFetch: p,
              traceXHR: h,
              tracePropagationTargets: y,
              shouldCreateSpanForRequest: f,
              enableHTTPTimings: m,
            });
        }
        _createRouteTransaction(t) {
          let e;
          if (!this._getCurrentHub) {
            l.X &&
              o.kg.warn(
                `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`
              );
            return;
          }
          let n = this._getCurrentHub(),
            {
              beforeNavigate: r,
              idleTimeout: a,
              finalTimeout: u,
              heartbeatInterval: d,
            } = this.options,
            g = "pageload" === t.op;
          if (g) {
            let n = g ? getMetaContent("sentry-trace") : "",
              r = g ? getMetaContent("baggage") : void 0,
              {
                traceId: i,
                dsc: a,
                parentSpanId: s,
                sampled: o,
              } = (0, c.pT)(n, r);
            e = {
              traceId: i,
              parentSpanId: s,
              parentSampled: o,
              ...t,
              metadata: { ...t.metadata, dynamicSamplingContext: a },
              trimEnd: !0,
            };
          } else e = { trimEnd: !0, ...t };
          let h = "function" == typeof r ? r(e) : e,
            f = void 0 === h ? { ...e, sampled: !1 } : h;
          (f.metadata =
            f.name !== e.name
              ? { ...f.metadata, source: "custom" }
              : f.metadata),
            (this._latestRouteName = f.name),
            (this._latestRouteSource = (function (t) {
              let e = t.attributes && t.attributes[s.Zj],
                n = t.data && t.data[s.Zj],
                r = t.metadata && t.metadata.source;
              return e || n || r;
            })(f)),
            !1 === f.sampled &&
              l.X &&
              o.kg.log(
                `[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`
              ),
            l.X && o.kg.log(`[Tracing] Starting ${f.op} transaction on scope`);
          let { location: _ } = m.WINDOW,
            v = (0, i.l)(n, f, a, u, !0, { location: _ }, d, g);
          return (
            g &&
              (m.WINDOW.document.addEventListener("readystatechange", () => {
                ["interactive", "complete"].includes(
                  m.WINDOW.document.readyState
                ) && v.sendAutoFinishSignal();
              }),
              ["interactive", "complete"].includes(
                m.WINDOW.document.readyState
              ) && v.sendAutoFinishSignal()),
            v.registerBeforeFinishCallback((t) => {
              this._collectWebVitals(), (0, p.f7)(t);
            }),
            v
          );
        }
        _registerInteractionListener() {
          let t;
          let registerInteractionTransaction = () => {
            let {
                idleTimeout: e,
                finalTimeout: n,
                heartbeatInterval: r,
              } = this.options,
              c = "ui.action.click",
              u = (0, a.x1)();
            if (u && u.op && ["navigation", "pageload"].includes(u.op)) {
              l.X &&
                o.kg.warn(
                  `[Tracing] Did not create ${c} transaction because a pageload or navigation transaction is in progress.`
                );
              return;
            }
            if (
              (t &&
                (t.setFinishReason("interactionInterrupted"),
                t.end(),
                (t = void 0)),
              !this._getCurrentHub)
            ) {
              l.X &&
                o.kg.warn(
                  `[Tracing] Did not create ${c} transaction because _getCurrentHub is invalid.`
                );
              return;
            }
            if (!this._latestRouteName) {
              l.X &&
                o.kg.warn(
                  `[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`
                );
              return;
            }
            let d = this._getCurrentHub(),
              { location: p } = m.WINDOW,
              g = {
                name: this._latestRouteName,
                op: c,
                trimEnd: !0,
                data: { [s.Zj]: this._latestRouteSource || "url" },
              };
            t = (0, i.l)(d, g, e, n, !0, { location: p }, r);
          };
          ["click"].forEach((t) => {
            addEventListener(t, registerInteractionTransaction, {
              once: !1,
              capture: !0,
            });
          });
        }
      };
      function getMetaContent(t) {
        let e = (0, u.qT)(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0;
      }
    },
    17803: function (t, e, n) {
      "use strict";
      let r, i, a;
      n.d(e, {
        PR: function () {
          return addClsInstrumentationHandler;
        },
        to: function () {
          return addFidInstrumentationHandler;
        },
        $A: function () {
          return addLcpInstrumentationHandler;
        },
        _j: function () {
          return addPerformanceInstrumentationHandler;
        },
      });
      var s = n(70716),
        o = n(81393),
        c = n(35622);
      let bindReporter = (t, e, n) => {
        let r, i;
        return (a) => {
          e.value >= 0 &&
            (a || n) &&
            ((i = e.value - (r || 0)) || void 0 === r) &&
            ((r = e.value), (e.delta = i), t(e));
        };
      };
      var u = n(41314);
      let generateUniqueID = () =>
          `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
        getNavigationEntryFromPerformanceTiming = () => {
          let t = u.WINDOW.performance.timing,
            e = u.WINDOW.performance.navigation.type,
            n = {
              entryType: "navigation",
              startTime: 0,
              type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate",
            };
          for (let e in t)
            "navigationStart" !== e &&
              "toJSON" !== e &&
              (n[e] = Math.max(t[e] - t.navigationStart, 0));
          return n;
        },
        getNavigationEntry = () =>
          u.WINDOW.__WEB_VITALS_POLYFILL__
            ? u.WINDOW.performance &&
              ((performance.getEntriesByType &&
                performance.getEntriesByType("navigation")[0]) ||
                getNavigationEntryFromPerformanceTiming())
            : u.WINDOW.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0],
        getActivationStart = () => {
          let t = getNavigationEntry();
          return (t && t.activationStart) || 0;
        },
        initMetric = (t, e) => {
          let n = getNavigationEntry(),
            r = "navigate";
          return (
            n &&
              (r =
                u.WINDOW.document.prerendering || getActivationStart() > 0
                  ? "prerender"
                  : n.type.replace(/_/g, "-")),
            {
              name: t,
              value: void 0 === e ? -1 : e,
              rating: "good",
              delta: 0,
              entries: [],
              id: generateUniqueID(),
              navigationType: r,
            }
          );
        },
        observe = (t, e, n) => {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              let r = new PerformanceObserver((t) => {
                e(t.getEntries());
              });
              return (
                r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r
              );
            }
          } catch (t) {}
        };
      var l = n(81341);
      let onCLS = (t) => {
        let e;
        let n = initMetric("CLS", 0),
          r = 0,
          i = [],
          handleEntries = (t) => {
            t.forEach((t) => {
              if (!t.hadRecentInput) {
                let a = i[0],
                  s = i[i.length - 1];
                r &&
                0 !== i.length &&
                t.startTime - s.startTime < 1e3 &&
                t.startTime - a.startTime < 5e3
                  ? ((r += t.value), i.push(t))
                  : ((r = t.value), (i = [t])),
                  r > n.value && ((n.value = r), (n.entries = i), e && e());
              }
            });
          },
          a = observe("layout-shift", handleEntries);
        if (a) {
          e = bindReporter(t, n);
          let stopListening = () => {
            handleEntries(a.takeRecords()), e(!0);
          };
          return (0, l.u)(stopListening), stopListening;
        }
      };
      var d = n(37538);
      let onFID = (t) => {
          let e;
          let n = (0, d.Y)(),
            r = initMetric("FID"),
            handleEntry = (t) => {
              t.startTime < n.firstHiddenTime &&
                ((r.value = t.processingStart - t.startTime),
                r.entries.push(t),
                e(!0));
            },
            handleEntries = (t) => {
              t.forEach(handleEntry);
            },
            i = observe("first-input", handleEntries);
          (e = bindReporter(t, r)),
            i &&
              (0, l.u)(() => {
                handleEntries(i.takeRecords()), i.disconnect();
              }, !0);
        },
        p = {},
        onLCP = (t) => {
          let e;
          let n = (0, d.Y)(),
            r = initMetric("LCP"),
            handleEntries = (t) => {
              let i = t[t.length - 1];
              if (i) {
                let t = Math.max(i.startTime - getActivationStart(), 0);
                t < n.firstHiddenTime &&
                  ((r.value = t), (r.entries = [i]), e());
              }
            },
            i = observe("largest-contentful-paint", handleEntries);
          if (i) {
            e = bindReporter(t, r);
            let stopListening = () => {
              p[r.id] ||
                (handleEntries(i.takeRecords()),
                i.disconnect(),
                (p[r.id] = !0),
                e(!0));
            };
            return (
              ["keydown", "click"].forEach((t) => {
                addEventListener(t, stopListening, { once: !0, capture: !0 });
              }),
              (0, l.u)(stopListening, !0),
              stopListening
            );
          }
        },
        g = {},
        h = {};
      function addClsInstrumentationHandler(t, e = !1) {
        return addMetricObserver("cls", t, instrumentCls, r, e);
      }
      function addLcpInstrumentationHandler(t, e = !1) {
        return addMetricObserver("lcp", t, instrumentLcp, a, e);
      }
      function addFidInstrumentationHandler(t) {
        return addMetricObserver("fid", t, instrumentFid, i);
      }
      function addPerformanceInstrumentationHandler(t, e) {
        return (
          addHandler(t, e),
          h[t] ||
            ((function (t) {
              let e = {};
              "event" === t && (e.durationThreshold = 0),
                observe(
                  t,
                  (e) => {
                    triggerHandlers(t, { entries: e });
                  },
                  e
                );
            })(t),
            (h[t] = !0)),
          getCleanupCallback(t, e)
        );
      }
      function triggerHandlers(t, e) {
        let n = g[t];
        if (n && n.length)
          for (let r of n)
            try {
              r(e);
            } catch (e) {
              c.X &&
                s.kg.error(
                  `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, o.$P)(r)}
Error:`,
                  e
                );
            }
      }
      function instrumentCls() {
        return onCLS((t) => {
          triggerHandlers("cls", { metric: t }), (r = t);
        });
      }
      function instrumentFid() {
        return onFID((t) => {
          triggerHandlers("fid", { metric: t }), (i = t);
        });
      }
      function instrumentLcp() {
        return onLCP((t) => {
          triggerHandlers("lcp", { metric: t }), (a = t);
        });
      }
      function addMetricObserver(t, e, n, r, i = !1) {
        let a;
        return (
          addHandler(t, e),
          h[t] || ((a = n()), (h[t] = !0)),
          r && e({ metric: r }),
          getCleanupCallback(t, e, i ? a : void 0)
        );
      }
      function addHandler(t, e) {
        (g[t] = g[t] || []), g[t].push(e);
      }
      function getCleanupCallback(t, e, n) {
        return () => {
          n && n();
          let r = g[t];
          if (!r) return;
          let i = r.indexOf(e);
          -1 !== i && r.splice(i, 1);
        };
      }
    },
    80723: function (t, e, n) {
      "use strict";
      let r, i;
      n.d(e, {
        f7: function () {
          return addPerformanceEntries;
        },
        sn: function () {
          return startTrackingInteractions;
        },
        Fv: function () {
          return startTrackingLongTasks;
        },
        PR: function () {
          return startTrackingWebVitals;
        },
      });
      var a = n(85814),
        s = n(72010),
        o = n(82300),
        c = n(89284),
        u = n(70716),
        l = n(92123),
        d = n(35622),
        p = n(17803),
        g = n(41314),
        h = n(37538);
      function isMeasurementValue(t) {
        return "number" == typeof t && isFinite(t);
      }
      function _startChild(t, { startTimestamp: e, ...n }) {
        return (
          e && t.startTimestamp > e && (t.startTimestamp = e),
          t.startChild({ startTimestamp: e, ...n })
        );
      }
      function msToSec(t) {
        return t / 1e3;
      }
      function getBrowserPerformanceAPI() {
        return g.WINDOW && g.WINDOW.addEventListener && g.WINDOW.performance;
      }
      let f = 0,
        m = {};
      function startTrackingWebVitals() {
        let t = getBrowserPerformanceAPI();
        if (t && o.Z1) {
          t.mark && g.WINDOW.performance.mark("sentry-tracing-init");
          let e = (0, p.to)(({ metric: t }) => {
              let e = t.entries[t.entries.length - 1];
              if (!e) return;
              let n = msToSec(o.Z1),
                r = msToSec(e.startTime);
              d.X && u.kg.log("[Measurements] Adding FID"),
                (m.fid = { value: t.value, unit: "millisecond" }),
                (m["mark.fid"] = { value: n + r, unit: "second" });
            }),
            n = (0, p.PR)(({ metric: t }) => {
              let e = t.entries[t.entries.length - 1];
              e &&
                (d.X && u.kg.log("[Measurements] Adding CLS"),
                (m.cls = { value: t.value, unit: "" }),
                (i = e));
            }, !0),
            a = (0, p.$A)(({ metric: t }) => {
              let e = t.entries[t.entries.length - 1];
              e &&
                (d.X && u.kg.log("[Measurements] Adding LCP"),
                (m.lcp = { value: t.value, unit: "millisecond" }),
                (r = e));
            }, !0);
          return () => {
            e(), n(), a();
          };
        }
        return () => void 0;
      }
      function startTrackingLongTasks() {
        (0, p._j)("longtask", ({ entries: t }) => {
          for (let e of t) {
            let t = (0, a.x1)();
            if (!t) return;
            let n = msToSec(o.Z1 + e.startTime),
              r = msToSec(e.duration);
            t.startChild({
              description: "Main UI thread blocked",
              op: "ui.long-task",
              origin: "auto.ui.browser.metrics",
              startTimestamp: n,
              endTimestamp: n + r,
            });
          }
        });
      }
      function startTrackingInteractions() {
        (0, p._j)("event", ({ entries: t }) => {
          for (let e of t) {
            let t = (0, a.x1)();
            if (!t) return;
            if ("click" === e.name) {
              let n = msToSec(o.Z1 + e.startTime),
                r = msToSec(e.duration),
                i = {
                  description: (0, c.Rt)(e.target),
                  op: `ui.interaction.${e.name}`,
                  origin: "auto.ui.browser.metrics",
                  startTimestamp: n,
                  endTimestamp: n + r,
                },
                a = (0, c.iY)(e.target);
              a && (i.attributes = { "ui.component_name": a }), t.startChild(i);
            }
          }
        });
      }
      function addPerformanceEntries(t) {
        let e, n;
        let p = getBrowserPerformanceAPI();
        if (!p || !g.WINDOW.performance.getEntries || !o.Z1) return;
        d.X &&
          u.kg.log("[Tracing] Adding & adjusting spans using Performance API");
        let _ = msToSec(o.Z1),
          v = p.getEntries(),
          { op: y, start_timestamp: S } = (0, s.XU)(t);
        if (
          (v.slice(f).forEach((r) => {
            let i = msToSec(r.startTime),
              a = msToSec(r.duration);
            if ("navigation" !== t.op || !S || !(_ + i < S))
              switch (r.entryType) {
                case "navigation":
                  [
                    "unloadEvent",
                    "redirect",
                    "domContentLoadedEvent",
                    "loadEvent",
                    "connect",
                  ].forEach((e) => {
                    _addPerformanceNavigationTiming(t, r, e, _);
                  }),
                    _addPerformanceNavigationTiming(
                      t,
                      r,
                      "secureConnection",
                      _,
                      "TLS/SSL",
                      "connectEnd"
                    ),
                    _addPerformanceNavigationTiming(
                      t,
                      r,
                      "fetch",
                      _,
                      "cache",
                      "domainLookupStart"
                    ),
                    _addPerformanceNavigationTiming(
                      t,
                      r,
                      "domainLookup",
                      _,
                      "DNS"
                    ),
                    r.responseEnd &&
                      (_startChild(t, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "request",
                        startTimestamp: _ + msToSec(r.requestStart),
                        endTimestamp: _ + msToSec(r.responseEnd),
                      }),
                      _startChild(t, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "response",
                        startTimestamp: _ + msToSec(r.responseStart),
                        endTimestamp: _ + msToSec(r.responseEnd),
                      })),
                    (e = _ + msToSec(r.responseStart)),
                    (n = _ + msToSec(r.requestStart));
                  break;
                case "mark":
                case "paint":
                case "measure": {
                  (function (t, e, n, r, i) {
                    let a = i + n;
                    _startChild(t, {
                      description: e.name,
                      endTimestamp: a + r,
                      op: e.entryType,
                      origin: "auto.resource.browser.metrics",
                      startTimestamp: a,
                    });
                  })(t, r, i, a, _);
                  let e = (0, h.Y)(),
                    n = r.startTime < e.firstHiddenTime;
                  "first-paint" === r.name &&
                    n &&
                    (d.X && u.kg.log("[Measurements] Adding FP"),
                    (m.fp = { value: r.startTime, unit: "millisecond" })),
                    "first-contentful-paint" === r.name &&
                      n &&
                      (d.X && u.kg.log("[Measurements] Adding FCP"),
                      (m.fcp = { value: r.startTime, unit: "millisecond" }));
                  break;
                }
                case "resource":
                  (function (t, e, n, r, i, a) {
                    if (
                      "xmlhttprequest" === e.initiatorType ||
                      "fetch" === e.initiatorType
                    )
                      return;
                    let s = (0, l.en)(n),
                      o = {};
                    setResourceEntrySizeData(
                      o,
                      e,
                      "transferSize",
                      "http.response_transfer_size"
                    ),
                      setResourceEntrySizeData(
                        o,
                        e,
                        "encodedBodySize",
                        "http.response_content_length"
                      ),
                      setResourceEntrySizeData(
                        o,
                        e,
                        "decodedBodySize",
                        "http.decoded_response_content_length"
                      ),
                      "renderBlockingStatus" in e &&
                        (o["resource.render_blocking_status"] =
                          e.renderBlockingStatus),
                      s.protocol &&
                        (o["url.scheme"] = s.protocol.split(":").pop()),
                      s.host && (o["server.address"] = s.host),
                      (o["url.same_origin"] = n.includes(
                        g.WINDOW.location.origin
                      ));
                    let c = a + r,
                      u = c + i;
                    _startChild(t, {
                      description: n.replace(g.WINDOW.location.origin, ""),
                      endTimestamp: u,
                      op: e.initiatorType
                        ? `resource.${e.initiatorType}`
                        : "resource.other",
                      origin: "auto.resource.browser.metrics",
                      startTimestamp: c,
                      data: o,
                    });
                  })(t, r, r.name, i, a, _);
              }
          }),
          (f = Math.max(v.length - 1, 0)),
          (function (t) {
            let e = g.WINDOW.navigator;
            if (!e) return;
            let n = e.connection;
            n &&
              (n.effectiveType &&
                t.setTag("effectiveConnectionType", n.effectiveType),
              n.type && t.setTag("connectionType", n.type),
              isMeasurementValue(n.rtt) &&
                (m["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
              isMeasurementValue(e.deviceMemory) &&
                t.setTag("deviceMemory", `${e.deviceMemory} GB`),
              isMeasurementValue(e.hardwareConcurrency) &&
                t.setTag("hardwareConcurrency", String(e.hardwareConcurrency));
          })(t),
          "pageload" === y)
        ) {
          var b, T, E;
          (b = m),
            (T = e),
            (E = n),
            "number" == typeof T &&
              S &&
              (d.X && u.kg.log("[Measurements] Adding TTFB"),
              (b.ttfb = {
                value: 1e3 * Math.max(T - S, 0),
                unit: "millisecond",
              }),
              "number" == typeof E &&
                E <= T &&
                (b["ttfb.requestTime"] = {
                  value: (T - E) * 1e3,
                  unit: "millisecond",
                })),
            ["fcp", "fp", "lcp"].forEach((t) => {
              if (!m[t] || !S || _ >= S) return;
              let e = m[t].value,
                n = _ + msToSec(e),
                r = Math.abs((n - S) * 1e3),
                i = r - e;
              d.X &&
                u.kg.log(
                  `[Measurements] Normalized ${t} from ${e} to ${r} (${i})`
                ),
                (m[t].value = r);
            });
          let s = m["mark.fid"];
          s &&
            m.fid &&
            (_startChild(t, {
              description: "first input delay",
              endTimestamp: s.value + msToSec(m.fid.value),
              op: "ui.action",
              origin: "auto.ui.browser.metrics",
              startTimestamp: s.value,
            }),
            delete m["mark.fid"]),
            "fcp" in m || delete m.cls,
            Object.keys(m).forEach((t) => {
              !(function (t, e, n) {
                let r = (0, a.x1)();
                r && r.setMeasurement(t, e, n);
              })(t, m[t].value, m[t].unit);
            }),
            r &&
              (d.X && u.kg.log("[Measurements] Adding LCP Data"),
              r.element && t.setTag("lcp.element", (0, c.Rt)(r.element)),
              r.id && t.setTag("lcp.id", r.id),
              r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)),
              t.setTag("lcp.size", r.size)),
            i &&
              i.sources &&
              (d.X && u.kg.log("[Measurements] Adding CLS Data"),
              i.sources.forEach((e, n) =>
                t.setTag(`cls.source.${n + 1}`, (0, c.Rt)(e.node))
              ));
        }
        (r = void 0), (i = void 0), (m = {});
      }
      function _addPerformanceNavigationTiming(t, e, n, r, i, a) {
        let s = a ? e[a] : e[`${n}End`],
          o = e[`${n}Start`];
        o &&
          s &&
          _startChild(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: i || n,
            startTimestamp: r + msToSec(o),
            endTimestamp: r + msToSec(s),
          });
      }
      function setResourceEntrySizeData(t, e, n, r) {
        let i = e[n];
        null != i && i < 2147483647 && (t[r] = i);
      }
    },
    1729: function (t, e, n) {
      "use strict";
      n.d(e, {
        k3: function () {
          return S;
        },
        L7: function () {
          return instrumentOutgoingRequests;
        },
      });
      var r = n(72010),
        i = n(49142),
        a = n(73206),
        s = n(21),
        o = n(27553),
        c = n(11008),
        u = n(70210),
        l = n(88101),
        d = n(95458),
        p = n(28643),
        g = n(82300),
        h = n(92674),
        f = n(6509),
        m = n(19850),
        _ = n(82361),
        v = n(17803);
      let y = ["localhost", /^\/(?!\/)/],
        S = {
          traceFetch: !0,
          traceXHR: !0,
          enableHTTPTimings: !0,
          tracingOrigins: y,
          tracePropagationTargets: y,
        };
      function instrumentOutgoingRequests(t) {
        let {
            traceFetch: e,
            traceXHR: n,
            tracePropagationTargets: g,
            tracingOrigins: v,
            shouldCreateSpanForRequest: b,
            enableHTTPTimings: T,
          } = { traceFetch: S.traceFetch, traceXHR: S.traceXHR, ...t },
          E = "function" == typeof b ? b : (t) => !0,
          shouldAttachHeadersWithTargets = (t) => {
            var e;
            return (e = g || v), (0, h.U0)(t, e || y);
          },
          k = {};
        e &&
          (0, d.U)((t) => {
            let e = (function (t, e, n, d, p = "auto.http.browser") {
              if (!(0, i.z)() || !t.fetchData) return;
              let g = e(t.fetchData.url);
              if (t.endTimestamp && g) {
                let e = t.fetchData.__span;
                if (!e) return;
                let n = d[e];
                if (n) {
                  if (t.response) {
                    (0, a.Q0)(n, t.response.status);
                    let e =
                      t.response &&
                      t.response.headers &&
                      t.response.headers.get("content-length");
                    if (e) {
                      let t = parseInt(e);
                      t > 0 &&
                        n.setAttribute("http.response_content_length", t);
                    }
                  } else t.error && n.setStatus("internal_error");
                  n.end(), delete d[e];
                }
                return;
              }
              let h = (0, s.nZ)(),
                v = (0, s.s3)(),
                { method: y, url: S } = t.fetchData,
                b = g
                  ? (0, c.qp)({
                      name: `${y} ${S}`,
                      onlyIfParent: !0,
                      attributes: {
                        url: S,
                        type: "fetch",
                        "http.method": y,
                        [u.S3]: p,
                      },
                      op: "http.client",
                    })
                  : void 0;
              if (
                (b &&
                  ((t.fetchData.__span = b.spanContext().spanId),
                  (d[b.spanContext().spanId] = b)),
                n(t.fetchData.url) && v)
              ) {
                let e = t.args[0];
                t.args[1] = t.args[1] || {};
                let n = t.args[1];
                n.headers = (function (t, e, n, i, a) {
                  let s = a || n.getSpan(),
                    c = (0, o.aF)(),
                    {
                      traceId: u,
                      spanId: d,
                      sampled: p,
                      dsc: g,
                    } = {
                      ...c.getPropagationContext(),
                      ...n.getPropagationContext(),
                    },
                    h = s ? (0, r.Hb)(s) : (0, f.$p)(u, d, p),
                    v = (0, m.IQ)(g || (s ? (0, l.j)(s) : (0, l._)(u, e, n))),
                    y =
                      i.headers ||
                      ("undefined" != typeof Request && (0, _.V9)(t, Request)
                        ? t.headers
                        : void 0);
                  if (!y) return { "sentry-trace": h, baggage: v };
                  if ("undefined" != typeof Headers && (0, _.V9)(y, Headers)) {
                    let t = new Headers(y);
                    return (
                      t.append("sentry-trace", h), v && t.append(m.bU, v), t
                    );
                  }
                  if (Array.isArray(y)) {
                    let t = [...y, ["sentry-trace", h]];
                    return v && t.push([m.bU, v]), t;
                  }
                  {
                    let t = "baggage" in y ? y.baggage : void 0,
                      e = [];
                    return (
                      Array.isArray(t) ? e.push(...t) : t && e.push(t),
                      v && e.push(v),
                      {
                        ...y,
                        "sentry-trace": h,
                        baggage: e.length > 0 ? e.join(",") : void 0,
                      }
                    );
                  }
                })(e, v, h, n, b);
              }
              return b;
            })(t, E, shouldAttachHeadersWithTargets, k);
            T && e && addHTTPTimings(e);
          }),
          n &&
            (0, p.UK)((t) => {
              let e = (function (t, e, n, d) {
                let g = t.xhr,
                  h = g && g[p.xU];
                if (!(0, i.z)() || !g || g.__sentry_own_request__ || !h) return;
                let _ = e(h.url);
                if (t.endTimestamp && _) {
                  let t = g.__sentry_xhr_span_id__;
                  if (!t) return;
                  let e = d[t];
                  e &&
                    void 0 !== h.status_code &&
                    ((0, a.Q0)(e, h.status_code), e.end(), delete d[t]);
                  return;
                }
                let v = (0, s.nZ)(),
                  y = (0, o.aF)(),
                  S = _
                    ? (0, c.qp)({
                        name: `${h.method} ${h.url}`,
                        onlyIfParent: !0,
                        attributes: {
                          type: "xhr",
                          "http.method": h.method,
                          url: h.url,
                          [u.S3]: "auto.http.browser",
                        },
                        op: "http.client",
                      })
                    : void 0;
                S &&
                  ((g.__sentry_xhr_span_id__ = S.spanContext().spanId),
                  (d[g.__sentry_xhr_span_id__] = S));
                let b = (0, s.s3)();
                if (g.setRequestHeader && n(h.url) && b) {
                  let {
                      traceId: t,
                      spanId: e,
                      sampled: n,
                      dsc: i,
                    } = {
                      ...y.getPropagationContext(),
                      ...v.getPropagationContext(),
                    },
                    a = S ? (0, r.Hb)(S) : (0, f.$p)(t, e, n),
                    s = (0, m.IQ)(i || (S ? (0, l.j)(S) : (0, l._)(t, b, v)));
                  (function (t, e, n) {
                    try {
                      t.setRequestHeader("sentry-trace", e),
                        n && t.setRequestHeader(m.bU, n);
                    } catch (t) {}
                  })(g, a, s);
                }
                return S;
              })(t, E, shouldAttachHeadersWithTargets, k);
              T && e && addHTTPTimings(e);
            });
      }
      function addHTTPTimings(t) {
        let { url: e } = (0, r.XU)(t).data || {};
        if (!e || "string" != typeof e) return;
        let n = (0, v._j)("resource", ({ entries: r }) => {
          r.forEach((r) => {
            if (
              "resource" === r.entryType &&
              "initiatorType" in r &&
              "string" == typeof r.nextHopProtocol &&
              ("fetch" === r.initiatorType ||
                "xmlhttprequest" === r.initiatorType) &&
              r.name.endsWith(e)
            ) {
              let e = (function (t) {
                let { name: e, version: n } = (function (t) {
                    let e = "unknown",
                      n = "unknown",
                      r = "";
                    for (let i of t) {
                      if ("/" === i) {
                        [e, n] = t.split("/");
                        break;
                      }
                      if (!isNaN(Number(i))) {
                        (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
                        break;
                      }
                      r += i;
                    }
                    return r === t && (e = r), { name: e, version: n };
                  })(t.nextHopProtocol),
                  r = [];
                return (r.push(
                  ["network.protocol.version", n],
                  ["network.protocol.name", e]
                ),
                g.Z1)
                  ? [
                      ...r,
                      [
                        "http.request.redirect_start",
                        getAbsoluteTime(t.redirectStart),
                      ],
                      [
                        "http.request.fetch_start",
                        getAbsoluteTime(t.fetchStart),
                      ],
                      [
                        "http.request.domain_lookup_start",
                        getAbsoluteTime(t.domainLookupStart),
                      ],
                      [
                        "http.request.domain_lookup_end",
                        getAbsoluteTime(t.domainLookupEnd),
                      ],
                      [
                        "http.request.connect_start",
                        getAbsoluteTime(t.connectStart),
                      ],
                      [
                        "http.request.secure_connection_start",
                        getAbsoluteTime(t.secureConnectionStart),
                      ],
                      [
                        "http.request.connection_end",
                        getAbsoluteTime(t.connectEnd),
                      ],
                      [
                        "http.request.request_start",
                        getAbsoluteTime(t.requestStart),
                      ],
                      [
                        "http.request.response_start",
                        getAbsoluteTime(t.responseStart),
                      ],
                      [
                        "http.request.response_end",
                        getAbsoluteTime(t.responseEnd),
                      ],
                    ]
                  : r;
              })(r);
              e.forEach((e) => t.setAttribute(...e)), setTimeout(n);
            }
          });
        });
      }
      function getAbsoluteTime(t = 0) {
        return ((g.Z1 || performance.timeOrigin) + t) / 1e3;
      }
    },
    41314: function (t, e, n) {
      "use strict";
      n.d(e, {
        WINDOW: function () {
          return i;
        },
      });
      var r = n(40932);
      let i = r.GLOBAL_OBJ;
    },
    37538: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return getVisibilityWatcher;
        },
      });
      var r = n(41314),
        i = n(81341);
      let a = -1,
        initHiddenTime = () =>
          "hidden" !== r.WINDOW.document.visibilityState ||
          r.WINDOW.document.prerendering
            ? 1 / 0
            : 0,
        trackChanges = () => {
          (0, i.u)(({ timeStamp: t }) => {
            a = t;
          }, !0);
        },
        getVisibilityWatcher = () => (
          a < 0 && ((a = initHiddenTime()), trackChanges()),
          {
            get firstHiddenTime() {
              return a;
            },
          }
        );
    },
    81341: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return onHidden;
        },
      });
      var r = n(41314);
      let onHidden = (t, e) => {
        let onHiddenOrPageHide = (n) => {
          ("pagehide" === n.type ||
            "hidden" === r.WINDOW.document.visibilityState) &&
            (t(n),
            e &&
              (removeEventListener("visibilitychange", onHiddenOrPageHide, !0),
              removeEventListener("pagehide", onHiddenOrPageHide, !0)));
        };
        addEventListener("visibilitychange", onHiddenOrPageHide, !0),
          addEventListener("pagehide", onHiddenOrPageHide, !0);
      };
    },
    35622: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    2720: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    22151: function (t, e, n) {
      "use strict";
      n.d(e, {
        GJ: function () {
          return exceptionFromError;
        },
        ME: function () {
          return eventFromUnknownInput;
        },
        aB: function () {
          return eventFromMessage;
        },
        dr: function () {
          return eventFromException;
        },
      });
      var r = n(21),
        i = n(82361),
        a = n(82327),
        s = n(85229),
        o = n(40885),
        c = n(89669);
      function exceptionFromError(t, e) {
        let n = parseStackFrames(t, e),
          r = {
            type: e && e.name,
            value: (function (t) {
              let e = t && t.message;
              return e
                ? e.error && "string" == typeof e.error.message
                  ? e.error.message
                  : e
                : "No error message";
            })(e),
          };
        return (
          n.length && (r.stacktrace = { frames: n }),
          void 0 === r.type &&
            "" === r.value &&
            (r.value = "Unrecoverable error caught"),
          r
        );
      }
      function eventFromError(t, e) {
        return { exception: { values: [exceptionFromError(t, e)] } };
      }
      function parseStackFrames(t, e) {
        let n = e.stacktrace || e.stack || "",
          r = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (u.test(t.message)) return 1;
            }
            return 0;
          })(e);
        try {
          return t(n, r);
        } catch (t) {}
        return [];
      }
      let u = /Minified React error #\d+;/i;
      function eventFromException(t, e, n, r) {
        let i = (n && n.syntheticException) || void 0,
          a = eventFromUnknownInput(t, e, i, r);
        return (
          (0, s.EG)(a),
          (a.level = "error"),
          n && n.event_id && (a.event_id = n.event_id),
          (0, o.WD)(a)
        );
      }
      function eventFromMessage(t, e, n = "info", r, i) {
        let a = (r && r.syntheticException) || void 0,
          s = eventFromString(t, e, a, i);
        return (
          (s.level = n),
          r && r.event_id && (s.event_id = r.event_id),
          (0, o.WD)(s)
        );
      }
      function eventFromUnknownInput(t, e, n, o, u) {
        let l;
        if ((0, i.VW)(e) && e.error) return eventFromError(t, e.error);
        if ((0, i.TX)(e) || (0, i.fm)(e)) {
          if ("stack" in e) l = eventFromError(t, e);
          else {
            let r = e.name || ((0, i.TX)(e) ? "DOMError" : "DOMException"),
              a = e.message ? `${r}: ${e.message}` : r;
            (l = eventFromString(t, a, n, o)), (0, s.Db)(l, a);
          }
          return (
            "code" in e &&
              (l.tags = { ...l.tags, "DOMException.code": `${e.code}` }),
            l
          );
        }
        return (0, i.VZ)(e)
          ? eventFromError(t, e)
          : ((0, i.PO)(e) || (0, i.cO)(e)
              ? (l = (function (t, e, n, s) {
                  let o = (0, r.s3)(),
                    u = o && o.getOptions().normalizeDepth,
                    l = {
                      exception: {
                        values: [
                          {
                            type: (0, i.cO)(e)
                              ? e.constructor.name
                              : s
                              ? "UnhandledRejection"
                              : "Error",
                            value: (function (t, { isUnhandledRejection: e }) {
                              let n = (0, c.zf)(t),
                                r = e ? "promise rejection" : "exception";
                              if ((0, i.VW)(t))
                                return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                              if ((0, i.cO)(t)) {
                                let e = (function (t) {
                                  try {
                                    let e = Object.getPrototypeOf(t);
                                    return e ? e.constructor.name : void 0;
                                  } catch (t) {}
                                })(t);
                                return `Event \`${e}\` (type=${t.type}) captured as ${r}`;
                              }
                              return `Object captured as ${r} with keys: ${n}`;
                            })(e, { isUnhandledRejection: s }),
                          },
                        ],
                      },
                      extra: { __serialized__: (0, a.Qy)(e, u) },
                    };
                  if (n) {
                    let e = parseStackFrames(t, n);
                    e.length &&
                      (l.exception.values[0].stacktrace = { frames: e });
                  }
                  return l;
                })(t, e, n, u))
              : ((l = eventFromString(t, e, n, o)),
                (0, s.Db)(l, `${e}`, void 0)),
            (0, s.EG)(l, { synthetic: !0 }),
            l);
      }
      function eventFromString(t, e, n, r) {
        let a = {};
        if (r && n) {
          let r = parseStackFrames(t, n);
          r.length &&
            (a.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        if ((0, i.Le)(e)) {
          let { __sentry_template_string__: t, __sentry_template_values__: n } =
            e;
          return (a.logentry = { message: t, params: n }), a;
        }
        return (a.message = e), a;
      }
    },
    10536: function (t, e, n) {
      "use strict";
      n.d(e, {
        Wz: function () {
          return shouldIgnoreOnError;
        },
        m9: function () {
          return o;
        },
        re: function () {
          return function wrap(t, e = {}, n) {
            if ("function" != typeof t) return t;
            try {
              let e = t.__sentry_wrapped__;
              if (e) return e;
              if ((0, a.HK)(t)) return t;
            } catch (e) {
              return t;
            }
            let sentryWrapped = function () {
              let i = Array.prototype.slice.call(arguments);
              try {
                n && "function" == typeof n && n.apply(this, arguments);
                let r = i.map((t) => wrap(t, e));
                return t.apply(this, r);
              } catch (t) {
                throw (
                  (c++,
                  setTimeout(() => {
                    c--;
                  }),
                  (0, r.$e)((n) => {
                    n.addEventProcessor(
                      (t) => (
                        e.mechanism &&
                          ((0, s.Db)(t, void 0, void 0),
                          (0, s.EG)(t, e.mechanism)),
                        (t.extra = { ...t.extra, arguments: i }),
                        t
                      )
                    ),
                      (0, r.Tb)(t);
                  }),
                  t)
                );
              }
            };
            try {
              for (let e in t)
                Object.prototype.hasOwnProperty.call(t, e) &&
                  (sentryWrapped[e] = t[e]);
            } catch (t) {}
            (0, a.$Q)(sentryWrapped, t),
              (0, a.xp)(t, "__sentry_wrapped__", sentryWrapped);
            try {
              let e = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
              e.configurable &&
                Object.defineProperty(sentryWrapped, "name", {
                  get: () => t.name,
                });
            } catch (t) {}
            return sentryWrapped;
          };
        },
      });
      var r = n(21),
        i = n(40932),
        a = n(89669),
        s = n(85229);
      let o = i.GLOBAL_OBJ,
        c = 0;
      function shouldIgnoreOnError() {
        return c > 0;
      }
    },
    44343: function (t, e, n) {
      "use strict";
      let r, i, a;
      n.d(e, {
        O: function () {
          return x;
        },
        f: function () {
          return k;
        },
      });
      var s = n(28280),
        o = n(21),
        c = n(70716),
        u = n(89669),
        l = n(40932),
        d = n(61281);
      function instrumentConsole() {
        "console" in l.GLOBAL_OBJ &&
          c.RU.forEach(function (t) {
            t in l.GLOBAL_OBJ.console &&
              (0, u.hl)(l.GLOBAL_OBJ.console, t, function (e) {
                return (
                  (c.LD[t] = e),
                  function (...e) {
                    (0, d.rK)("console", { args: e, level: t });
                    let n = c.LD[t];
                    n && n.apply(l.GLOBAL_OBJ.console, e);
                  }
                );
              });
          });
      }
      var p = n(85229);
      let g = l.GLOBAL_OBJ;
      function instrumentDOM() {
        if (!g.document) return;
        let t = d.rK.bind(null, "dom"),
          e = makeDOMEventHandler(t, !0);
        g.document.addEventListener("click", e, !1),
          g.document.addEventListener("keypress", e, !1),
          ["EventTarget", "Node"].forEach((e) => {
            let n = g[e] && g[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              ((0, u.hl)(n, "addEventListener", function (e) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n)
                    try {
                      let r = (this.__sentry_instrumentation_handlers__ =
                          this.__sentry_instrumentation_handlers__ || {}),
                        a = (r[n] = r[n] || { refCount: 0 });
                      if (!a.handler) {
                        let r = makeDOMEventHandler(t);
                        (a.handler = r), e.call(this, n, r, i);
                      }
                      a.refCount++;
                    } catch (t) {}
                  return e.call(this, n, r, i);
                };
              }),
              (0, u.hl)(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  if ("click" === e || "keypress" == e)
                    try {
                      let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[e];
                      i &&
                        (i.refCount--,
                        i.refCount <= 0 &&
                          (t.call(this, e, i.handler, r),
                          (i.handler = void 0),
                          delete n[e]),
                        0 === Object.keys(n).length &&
                          delete this.__sentry_instrumentation_handlers__);
                    } catch (t) {}
                  return t.call(this, e, n, r);
                };
              }));
          });
      }
      function makeDOMEventHandler(t, e = !1) {
        return (n) => {
          if (!n || n._sentryCaptured) return;
          let s = (function (t) {
            try {
              return t.target;
            } catch (t) {
              return null;
            }
          })(n);
          if (
            "keypress" === n.type &&
            (!s ||
              !s.tagName ||
              ("INPUT" !== s.tagName &&
                "TEXTAREA" !== s.tagName &&
                !s.isContentEditable))
          )
            return;
          (0, u.xp)(n, "_sentryCaptured", !0),
            s && !s._sentryId && (0, u.xp)(s, "_sentryId", (0, p.DM)());
          let o = "keypress" === n.type ? "input" : n.type;
          !(function (t) {
            if (t.type !== i) return !1;
            try {
              if (!t.target || t.target._sentryId !== a) return !1;
            } catch (t) {}
            return !0;
          })(n) &&
            (t({ event: n, name: o, global: e }),
            (i = n.type),
            (a = s ? s._sentryId : void 0)),
            clearTimeout(r),
            (r = g.setTimeout(() => {
              (a = void 0), (i = void 0);
            }, 1e3));
        };
      }
      var h = n(28643),
        f = n(95458),
        m = n(14785),
        _ = n(89284);
      let v = ["fatal", "error", "warning", "log", "info", "debug"];
      var y = n(92674),
        S = n(92123),
        b = n(2720),
        T = n(10536);
      let E = "Breadcrumbs",
        k = (0, s._I)((t = {}) => {
          let e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t,
          };
          return {
            name: E,
            setupOnce() {},
            setup(t) {
              var n;
              e.console &&
                (function (t) {
                  let e = "console";
                  (0, d.Hj)(e, t), (0, d.D2)(e, instrumentConsole);
                })(function (e) {
                  var n;
                  if ((0, o.s3)() !== t) return;
                  let r = {
                    category: "console",
                    data: { arguments: e.args, logger: "console" },
                    level:
                      "warn" === (n = e.level)
                        ? "warning"
                        : v.includes(n)
                        ? n
                        : "log",
                    message: (0, y.nK)(e.args, " "),
                  };
                  if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    (r.message = `Assertion failed: ${
                      (0, y.nK)(e.args.slice(1), " ") || "console.assert"
                    }`),
                      (r.data.arguments = e.args.slice(1));
                  }
                  (0, o.n_)(r, { input: e.args, level: e.level });
                }),
                e.dom &&
                  ((n = e.dom),
                  (0, d.Hj)("dom", function (e) {
                    let r, i;
                    if ((0, o.s3)() !== t) return;
                    let a =
                        "object" == typeof n ? n.serializeAttribute : void 0,
                      s =
                        "object" == typeof n &&
                        "number" == typeof n.maxStringLength
                          ? n.maxStringLength
                          : void 0;
                    s &&
                      s > 1024 &&
                      (b.X &&
                        c.kg.warn(
                          `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`
                        ),
                      (s = 1024)),
                      "string" == typeof a && (a = [a]);
                    try {
                      let t = e.event,
                        n = t && t.target ? t.target : t;
                      (r = (0, _.Rt)(n, { keyAttrs: a, maxStringLength: s })),
                        (i = (0, _.iY)(n));
                    } catch (t) {
                      r = "<unknown>";
                    }
                    if (0 === r.length) return;
                    let u = { category: `ui.${e.name}`, message: r };
                    i && (u.data = { "ui.component_name": i }),
                      (0, o.n_)(u, {
                        event: e.event,
                        name: e.name,
                        global: e.global,
                      });
                  }),
                  (0, d.D2)("dom", instrumentDOM)),
                e.xhr &&
                  (0, h.UK)(function (e) {
                    if ((0, o.s3)() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e,
                      i = e.xhr[h.xU];
                    if (!n || !r || !i) return;
                    let { method: a, url: s, status_code: c, body: u } = i,
                      l = {
                        xhr: e.xhr,
                        input: u,
                        startTimestamp: n,
                        endTimestamp: r,
                      };
                    (0,
                    o.n_)({ category: "xhr", data: { method: a, url: s, status_code: c }, type: "http" }, l);
                  }),
                e.fetch &&
                  (0, f.U)(function (e) {
                    if ((0, o.s3)() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e;
                    if (
                      !(
                        !r ||
                        (e.fetchData.url.match(/sentry_key/) &&
                          "POST" === e.fetchData.method)
                      )
                    ) {
                      if (e.error) {
                        let t = e.fetchData,
                          i = {
                            data: e.error,
                            input: e.args,
                            startTimestamp: n,
                            endTimestamp: r,
                          };
                        (0, o.n_)(
                          {
                            category: "fetch",
                            data: t,
                            level: "error",
                            type: "http",
                          },
                          i
                        );
                      } else {
                        let t = e.response,
                          i = { ...e.fetchData, status_code: t && t.status },
                          a = {
                            input: e.args,
                            response: t,
                            startTimestamp: n,
                            endTimestamp: r,
                          };
                        (0, o.n_)(
                          { category: "fetch", data: i, type: "http" },
                          a
                        );
                      }
                    }
                  }),
                e.history &&
                  (0, m.a)(function (e) {
                    if ((0, o.s3)() !== t) return;
                    let n = e.from,
                      r = e.to,
                      i = (0, S.en)(T.m9.location.href),
                      a = n ? (0, S.en)(n) : void 0,
                      s = (0, S.en)(r);
                    (a && a.path) || (a = i),
                      i.protocol === s.protocol &&
                        i.host === s.host &&
                        (r = s.relative),
                      i.protocol === a.protocol &&
                        i.host === a.host &&
                        (n = a.relative),
                      (0, o.n_)({
                        category: "navigation",
                        data: { from: n, to: r },
                      });
                  }),
                e.sentry &&
                  t.on &&
                  t.on("beforeSendEvent", function (e) {
                    (0, o.s3)() === t &&
                      (0, o.n_)(
                        {
                          category: `sentry.${
                            "transaction" === e.type ? "transaction" : "event"
                          }`,
                          event_id: e.event_id,
                          level: e.level,
                          message: (0, p.jH)(e),
                        },
                        { event: e }
                      );
                  });
            },
          };
        }),
        x = (0, s.RN)(E, k);
    },
    83982: function (t, e, n) {
      "use strict";
      n.d(e, {
        I: function () {
          return c;
        },
        R: function () {
          return o;
        },
      });
      var r = n(28280),
        i = n(70716),
        a = n(2720);
      let s = "Dedupe",
        o = (0, r._I)(() => {
          let t;
          return {
            name: s,
            setupOnce() {},
            processEvent(e) {
              if (e.type) return e;
              try {
                var n;
                if (
                  (n = t) &&
                  ((function (t, e) {
                    let n = t.message,
                      r = e.message;
                    return !!(
                      (n || r) &&
                      (!n || r) &&
                      (n || !r) &&
                      n === r &&
                      _isSameFingerprint(t, e) &&
                      _isSameStacktrace(t, e)
                    );
                  })(e, n) ||
                    (function (t, e) {
                      let n = _getExceptionFromEvent(e),
                        r = _getExceptionFromEvent(t);
                      return !!(
                        n &&
                        r &&
                        n.type === r.type &&
                        n.value === r.value &&
                        _isSameFingerprint(t, e) &&
                        _isSameStacktrace(t, e)
                      );
                    })(e, n))
                )
                  return (
                    a.X &&
                      i.kg.warn(
                        "Event dropped due to being a duplicate of previously captured event."
                      ),
                    null
                  );
              } catch (t) {}
              return (t = e);
            },
          };
        }),
        c = (0, r.RN)(s, o);
      function _isSameStacktrace(t, e) {
        let n = _getFramesFromEvent(t),
          r = _getFramesFromEvent(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t],
            i = n[t];
          if (
            e.filename !== i.filename ||
            e.lineno !== i.lineno ||
            e.colno !== i.colno ||
            e.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function _isSameFingerprint(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function _getExceptionFromEvent(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function _getFramesFromEvent(t) {
        let e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {}
      }
    },
    35191: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return f;
        },
        k: function () {
          return h;
        },
      });
      var r = n(28280),
        i = n(21),
        a = n(26942),
        s = n(82361),
        o = n(92136),
        c = n(89284),
        u = n(70716),
        l = n(2720),
        d = n(22151),
        p = n(10536);
      let g = "GlobalHandlers",
        h = (0, r._I)((t = {}) => {
          let e = { onerror: !0, onunhandledrejection: !0, ...t };
          return {
            name: g,
            setupOnce() {
              Error.stackTraceLimit = 50;
            },
            setup(t) {
              e.onerror &&
                ((0, a.V)((e) => {
                  let { stackParser: n, attachStacktrace: r } = getOptions();
                  if ((0, i.s3)() !== t || (0, p.Wz)()) return;
                  let { msg: a, url: o, line: c, column: u, error: l } = e,
                    g =
                      void 0 === l && (0, s.HD)(a)
                        ? (function (t, e, n, r) {
                            let i = (0, s.VW)(t) ? t.message : t,
                              a = "Error",
                              o = i.match(
                                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                              );
                            o && ((a = o[1]), (i = o[2]));
                            let c = {
                              exception: { values: [{ type: a, value: i }] },
                            };
                            return _enhanceEventWithInitialFrame(c, e, n, r);
                          })(a, o, c, u)
                        : _enhanceEventWithInitialFrame(
                            (0, d.ME)(n, l || a, void 0, r, !1),
                            o,
                            c,
                            u
                          );
                  (g.level = "error"),
                    (0, i.eN)(g, {
                      originalException: l,
                      mechanism: { handled: !1, type: "onerror" },
                    });
                }),
                globalHandlerLog("onerror")),
                e.onunhandledrejection &&
                  ((0, o.h)((e) => {
                    let { stackParser: n, attachStacktrace: r } = getOptions();
                    if ((0, i.s3)() !== t || (0, p.Wz)()) return;
                    let a = (function (t) {
                        if ((0, s.pt)(t)) return t;
                        try {
                          if ("reason" in t) return t.reason;
                          if ("detail" in t && "reason" in t.detail)
                            return t.detail.reason;
                        } catch (t) {}
                        return t;
                      })(e),
                      o = (0, s.pt)(a)
                        ? {
                            exception: {
                              values: [
                                {
                                  type: "UnhandledRejection",
                                  value: `Non-Error promise rejection captured with value: ${String(
                                    a
                                  )}`,
                                },
                              ],
                            },
                          }
                        : (0, d.ME)(n, a, void 0, r, !0);
                    (o.level = "error"),
                      (0, i.eN)(o, {
                        originalException: a,
                        mechanism: {
                          handled: !1,
                          type: "onunhandledrejection",
                        },
                      });
                  }),
                  globalHandlerLog("onunhandledrejection"));
            },
          };
        }),
        f = (0, r.RN)(g, h);
      function _enhanceEventWithInitialFrame(t, e, n, r) {
        let i = (t.exception = t.exception || {}),
          a = (i.values = i.values || []),
          o = (a[0] = a[0] || {}),
          u = (o.stacktrace = o.stacktrace || {}),
          l = (u.frames = u.frames || []),
          d = isNaN(parseInt(r, 10)) ? void 0 : r,
          p = isNaN(parseInt(n, 10)) ? void 0 : n,
          g = (0, s.HD)(e) && e.length > 0 ? e : (0, c.l4)();
        return (
          0 === l.length &&
            l.push({
              colno: d,
              filename: g,
              function: "?",
              in_app: !0,
              lineno: p,
            }),
          t
        );
      }
      function globalHandlerLog(t) {
        l.X && u.kg.log(`Global Handler attached: ${t}`);
      }
      function getOptions() {
        let t = (0, i.s3)(),
          e = (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          };
        return e;
      }
    },
    93048: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return o;
        },
        s: function () {
          return s;
        },
      });
      var r = n(28280),
        i = n(10536);
      let a = "HttpContext",
        s = (0, r._I)(() => ({
          name: a,
          setupOnce() {},
          preprocessEvent(t) {
            if (!i.m9.navigator && !i.m9.location && !i.m9.document) return;
            let e =
                (t.request && t.request.url) ||
                (i.m9.location && i.m9.location.href),
              { referrer: n } = i.m9.document || {},
              { userAgent: r } = i.m9.navigator || {},
              a = {
                ...(t.request && t.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
              s = { ...t.request, ...(e && { url: e }), headers: a };
            t.request = s;
          },
        })),
        o = (0, r.RN)(a, s);
    },
    90668: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
        i: function () {
          return c;
        },
      });
      var r = n(28280),
        i = n(54464),
        a = n(22151);
      let s = "LinkedErrors",
        o = (0, r._I)((t = {}) => {
          let e = t.limit || 5,
            n = t.key || "cause";
          return {
            name: s,
            setupOnce() {},
            preprocessEvent(t, r, s) {
              let o = s.getOptions();
              (0, i.Z)(a.GJ, o.stackParser, o.maxValueLength, n, e, t, r);
            },
          };
        }),
        c = (0, r.RN)(s, o);
    },
    80696: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return l;
        },
        t: function () {
          return u;
        },
      });
      var r = n(28280),
        i = n(89669),
        a = n(81393),
        s = n(10536);
      let o = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "BroadcastChannel",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "SharedWorker",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        c = "TryCatch",
        u = (0, r._I)((t = {}) => {
          let e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t,
          };
          return {
            name: c,
            setupOnce() {
              e.setTimeout && (0, i.hl)(s.m9, "setTimeout", _wrapTimeFunction),
                e.setInterval &&
                  (0, i.hl)(s.m9, "setInterval", _wrapTimeFunction),
                e.requestAnimationFrame &&
                  (0, i.hl)(s.m9, "requestAnimationFrame", _wrapRAF),
                e.XMLHttpRequest &&
                  "XMLHttpRequest" in s.m9 &&
                  (0, i.hl)(XMLHttpRequest.prototype, "send", _wrapXHR);
              let t = e.eventTarget;
              if (t) {
                let e = Array.isArray(t) ? t : o;
                e.forEach(_wrapEventTarget);
              }
            },
          };
        }),
        l = (0, r.RN)(c, u);
      function _wrapTimeFunction(t) {
        return function (...e) {
          let n = e[0];
          return (
            (e[0] = (0, s.re)(n, {
              mechanism: {
                data: { function: (0, a.$P)(t) },
                handled: !1,
                type: "instrument",
              },
            })),
            t.apply(this, e)
          );
        };
      }
      function _wrapRAF(t) {
        return function (e) {
          return t.apply(this, [
            (0, s.re)(e, {
              mechanism: {
                data: {
                  function: "requestAnimationFrame",
                  handler: (0, a.$P)(t),
                },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function _wrapXHR(t) {
        return function (...e) {
          let n = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (t) => {
                t in n &&
                  "function" == typeof n[t] &&
                  (0, i.hl)(n, t, function (e) {
                    let n = {
                        mechanism: {
                          data: { function: t, handler: (0, a.$P)(e) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = (0, i.HK)(e);
                    return (
                      r && (n.mechanism.data.handler = (0, a.$P)(r)),
                      (0, s.re)(e, n)
                    );
                  });
              }
            ),
            t.apply(this, e)
          );
        };
      }
      function _wrapEventTarget(t) {
        let e = s.m9,
          n = e[t] && e[t].prototype;
        n &&
          n.hasOwnProperty &&
          n.hasOwnProperty("addEventListener") &&
          ((0, i.hl)(n, "addEventListener", function (e) {
            return function (n, r, i) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = (0, s.re)(r.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: (0, a.$P)(r),
                        target: t,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                (0, s.re)(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: (0, a.$P)(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }),
                i,
              ]);
            };
          }),
          (0, i.hl)(n, "removeEventListener", function (t) {
            return function (e, n, r) {
              try {
                let i = n && n.__sentry_wrapped__;
                i && t.call(this, e, i, r);
              } catch (t) {}
              return t.call(this, e, n, r);
            };
          }));
      }
    },
    38934: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        nV: function () {
          return getDefaultIntegrations;
        },
        S1: function () {
          return init;
        },
        jp: function () {
          return showReportDialog;
        },
      });
      var i = n(85989),
        a = n(88656),
        s = n(28280),
        o = n(70716),
        c = n(82959),
        u = n(21),
        l = n(27553),
        d = n(89669),
        p = n(76217);
      function getBaseApiEndpoint(t) {
        let e = t.protocol ? `${t.protocol}:` : "",
          n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
      }
      var g = n(81393),
        h = n(61496),
        f = n(14785),
        m = n(85229),
        _ = n(82361),
        v = n(40885),
        y = n(82327);
      function createEnvelope(t, e = []) {
        return [t, e];
      }
      function forEachEnvelopeItem(t, e) {
        let n = t[1];
        for (let t of n) {
          let n = t[0].type,
            r = e(t, n);
          if (r) return !0;
        }
        return !1;
      }
      function encodeUTF8(t, e) {
        let n = e || new TextEncoder();
        return n.encode(t);
      }
      let S = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        statsd: "unknown",
      };
      function getSdkMetadataForEnvelopeHeader(t) {
        if (!t || !t.sdk) return;
        let { name: e, version: n } = t.sdk;
        return { name: e, version: n };
      }
      let SentryError = class SentryError extends Error {
        constructor(t, e = "warn") {
          super(t),
            (this.message = t),
            (this.name = new.target.prototype.constructor.name),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.logLevel = e);
        }
      };
      var b = n(43791),
        T = n(88101),
        E = n(65785);
      let k = "Not capturing exception because it's already been captured.";
      let BaseClient = class BaseClient {
        constructor(t) {
          if (
            ((this._options = t),
            (this._integrations = {}),
            (this._integrationsInitialized = !1),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            t.dsn
              ? (this._dsn = (0, p.vK)(t.dsn))
              : c.X &&
                o.kg.warn("No DSN provided, client will not send events."),
            this._dsn)
          ) {
            let e = (function (t, e = {}) {
              let n = "string" == typeof e ? e : e.tunnel,
                r =
                  "string" != typeof e && e._metadata
                    ? e._metadata.sdk
                    : void 0;
              return (
                n ||
                `${getBaseApiEndpoint(t)}${t.projectId}/envelope/?${(0, d._j)({
                  sentry_key: t.publicKey,
                  sentry_version: "7",
                  ...(r && { sentry_client: `${r.name}/${r.version}` }),
                })}`
              );
            })(this._dsn, t);
            this._transport = t.transport({
              recordDroppedEvent: this.recordDroppedEvent.bind(this),
              ...t.transportOptions,
              url: e,
            });
          }
        }
        captureException(t, e, n) {
          if ((0, m.YO)(t)) {
            c.X && o.kg.log(k);
            return;
          }
          let r = e && e.event_id;
          return (
            this._process(
              this.eventFromException(t, e)
                .then((t) => this._captureEvent(t, e, n))
                .then((t) => {
                  r = t;
                })
            ),
            r
          );
        }
        captureMessage(t, e, n, r) {
          let i = n && n.event_id,
            a = (0, _.Le)(t) ? t : String(t),
            s = (0, _.pt)(t)
              ? this.eventFromMessage(a, e, n)
              : this.eventFromException(t, n);
          return (
            this._process(
              s
                .then((t) => this._captureEvent(t, n, r))
                .then((t) => {
                  i = t;
                })
            ),
            i
          );
        }
        captureEvent(t, e, n) {
          if (e && e.originalException && (0, m.YO)(e.originalException)) {
            c.X && o.kg.log(k);
            return;
          }
          let r = e && e.event_id,
            i = t.sdkProcessingMetadata || {},
            a = i.capturedSpanScope;
          return (
            this._process(
              this._captureEvent(t, e, a || n).then((t) => {
                r = t;
              })
            ),
            r
          );
        }
        captureSession(t) {
          "string" != typeof t.release
            ? c.X &&
              o.kg.warn(
                "Discarded session because of missing or non-string release"
              )
            : (this.sendSession(t), (0, b.CT)(t, { init: !1 }));
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        flush(t) {
          let e = this._transport;
          return e
            ? (this.metricsAggregator && this.metricsAggregator.flush(),
              this._isClientDoneProcessing(t).then((n) =>
                e.flush(t).then((t) => n && t)
              ))
            : (0, v.WD)(!0);
        }
        close(t) {
          return this.flush(t).then(
            (t) => (
              (this.getOptions().enabled = !1),
              this.metricsAggregator && this.metricsAggregator.close(),
              t
            )
          );
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(t) {
          this._eventProcessors.push(t);
        }
        setupIntegrations(t) {
          ((t && !this._integrationsInitialized) ||
            (this._isEnabled() && !this._integrationsInitialized)) &&
            this._setupIntegrations();
        }
        init() {
          this._isEnabled() && this._setupIntegrations();
        }
        getIntegrationById(t) {
          return this.getIntegrationByName(t);
        }
        getIntegrationByName(t) {
          return this._integrations[t];
        }
        getIntegration(t) {
          try {
            return this._integrations[t.id] || null;
          } catch (e) {
            return (
              c.X &&
                o.kg.warn(
                  `Cannot retrieve integration ${t.id} from the current Client`
                ),
              null
            );
          }
        }
        addIntegration(t) {
          let e = this._integrations[t.name];
          (0, s.m7)(this, t, this._integrations), e || (0, s.uf)(this, [t]);
        }
        sendEvent(t, e = {}) {
          this.emit("beforeSendEvent", t, e);
          let n = (function (t, e, n, r) {
            var i;
            let a = getSdkMetadataForEnvelopeHeader(n),
              s = t.type && "replay_event" !== t.type ? t.type : "event";
            (i = n && n.sdk) &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.name = t.sdk.name || i.name),
              (t.sdk.version = t.sdk.version || i.version),
              (t.sdk.integrations = [
                ...(t.sdk.integrations || []),
                ...(i.integrations || []),
              ]),
              (t.sdk.packages = [
                ...(t.sdk.packages || []),
                ...(i.packages || []),
              ]));
            let o = (function (t, e, n, r) {
              let i =
                t.sdkProcessingMetadata &&
                t.sdkProcessingMetadata.dynamicSamplingContext;
              return {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...(e && { sdk: e }),
                ...(!!n && r && { dsn: (0, p.RA)(r) }),
                ...(i && { trace: (0, d.Jr)({ ...i }) }),
              };
            })(t, a, r, e);
            delete t.sdkProcessingMetadata;
            let c = [{ type: s }, t];
            return createEnvelope(o, [c]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          for (let t of e.attachments || [])
            n = (function (t, e) {
              let [n, r] = t;
              return [n, [...r, e]];
            })(
              n,
              (function (t, e) {
                let n =
                  "string" == typeof t.data ? encodeUTF8(t.data, e) : t.data;
                return [
                  (0, d.Jr)({
                    type: "attachment",
                    length: n.length,
                    filename: t.filename,
                    content_type: t.contentType,
                    attachment_type: t.attachmentType,
                  }),
                  n,
                ];
              })(
                t,
                this._options.transportOptions &&
                  this._options.transportOptions.textEncoder
              )
            );
          let r = this._sendEnvelope(n);
          r && r.then((e) => this.emit("afterSendEvent", t, e), null);
        }
        sendSession(t) {
          let e = (function (t, e, n, r) {
            let i = getSdkMetadataForEnvelopeHeader(n),
              a = {
                sent_at: new Date().toISOString(),
                ...(i && { sdk: i }),
                ...(!!r && e && { dsn: (0, p.RA)(e) }),
              },
              s =
                "aggregates" in t
                  ? [{ type: "sessions" }, t]
                  : [{ type: "session" }, t.toJSON()];
            return createEnvelope(a, [s]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e);
        }
        recordDroppedEvent(t, e, n) {
          if (this._options.sendClientReports) {
            let n = `${t}:${e}`;
            c.X && o.kg.log(`Adding outcome: "${n}"`),
              (this._outcomes[n] = this._outcomes[n] + 1 || 1);
          }
        }
        captureAggregateMetrics(t) {
          c.X &&
            o.kg.log(
              `Flushing aggregated metrics, number of metrics: ${t.length}`
            );
          let e = (function (t, e, n, r) {
            let i = { sent_at: new Date().toISOString() };
            n &&
              n.sdk &&
              (i.sdk = { name: n.sdk.name, version: n.sdk.version }),
              r && e && (i.dsn = (0, p.RA)(e));
            let a = (function (t) {
              let e = (function (t) {
                  let e = "";
                  for (let n of t) {
                    let t = Object.entries(n.tags),
                      r =
                        t.length > 0
                          ? `|#${t.map(([t, e]) => `${t}:${e}`).join(",")}`
                          : "";
                    e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`;
                  }
                  return e;
                })(t),
                n = { type: "statsd", length: e.length };
              return [n, e];
            })(t);
            return createEnvelope(i, [a]);
          })(t, this._dsn, this._options._metadata, this._options.tunnel);
          this._sendEnvelope(e);
        }
        on(t, e) {
          this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e);
        }
        emit(t, ...e) {
          this._hooks[t] && this._hooks[t].forEach((t) => t(...e));
        }
        _setupIntegrations() {
          let { integrations: t } = this._options;
          (this._integrations = (0, s.q4)(this, t)),
            (0, s.uf)(this, t),
            (this._integrationsInitialized = !0);
        }
        _updateSessionFromEvent(t, e) {
          let n = !1,
            r = !1,
            i = e.exception && e.exception.values;
          if (i)
            for (let t of ((r = !0), i)) {
              let e = t.mechanism;
              if (e && !1 === e.handled) {
                n = !0;
                break;
              }
            }
          let a = "ok" === t.status,
            s = (a && 0 === t.errors) || (a && n);
          s &&
            ((0, b.CT)(t, {
              ...(n && { status: "crashed" }),
              errors: t.errors || Number(r || n),
            }),
            this.captureSession(t));
        }
        _isClientDoneProcessing(t) {
          return new v.cW((e) => {
            let n = 0,
              r = setInterval(() => {
                0 == this._numProcessing
                  ? (clearInterval(r), e(!0))
                  : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
              }, 1);
          });
        }
        _isEnabled() {
          return !1 !== this.getOptions().enabled && void 0 !== this._transport;
        }
        _prepareEvent(t, e, n, r = (0, l.aF)()) {
          let i = this.getOptions(),
            a = Object.keys(this._integrations);
          return (
            !e.integrations && a.length > 0 && (e.integrations = a),
            this.emit("preprocessEvent", t, e),
            (0, E.R)(i, t, e, n, this, r).then((t) => {
              if (null === t) return t;
              let e = {
                  ...r.getPropagationContext(),
                  ...(n ? n.getPropagationContext() : void 0),
                },
                i = t.contexts && t.contexts.trace;
              if (!i && e) {
                let { traceId: r, spanId: i, parentSpanId: a, dsc: s } = e;
                t.contexts = {
                  trace: { trace_id: r, span_id: i, parent_span_id: a },
                  ...t.contexts,
                };
                let o = s || (0, T._)(r, this, n);
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: o,
                  ...t.sdkProcessingMetadata,
                };
              }
              return t;
            })
          );
        }
        _captureEvent(t, e = {}, n) {
          return this._processEvent(t, e, n).then(
            (t) => t.event_id,
            (t) => {
              c.X &&
                ("log" === t.logLevel ? o.kg.log(t.message) : o.kg.warn(t));
            }
          );
        }
        _processEvent(t, e, n) {
          let r = this.getOptions(),
            { sampleRate: i } = r,
            a = isTransactionEvent(t),
            s = isErrorEvent(t),
            o = t.type || "error",
            c = `before send for type \`${o}\``;
          if (s && "number" == typeof i && Math.random() > i)
            return (
              this.recordDroppedEvent("sample_rate", "error", t),
              (0, v.$2)(
                new SentryError(
                  `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                  "log"
                )
              )
            );
          let u = "replay_event" === o ? "replay" : o,
            l = t.sdkProcessingMetadata || {},
            d = l.capturedSpanIsolationScope;
          return this._prepareEvent(t, e, n, d)
            .then((n) => {
              if (null === n)
                throw (
                  (this.recordDroppedEvent("event_processor", u, t),
                  new SentryError(
                    "An event processor returned `null`, will not send event.",
                    "log"
                  ))
                );
              let i = e.data && !0 === e.data.__sentry__;
              if (i) return n;
              let a = (function (t, e, n) {
                let { beforeSend: r, beforeSendTransaction: i } = t;
                return isErrorEvent(e) && r
                  ? r(e, n)
                  : isTransactionEvent(e) && i
                  ? i(e, n)
                  : e;
              })(r, n, e);
              return (function (t, e) {
                let n = `${e} must return \`null\` or a valid event.`;
                if ((0, _.J8)(t))
                  return t.then(
                    (t) => {
                      if (!(0, _.PO)(t) && null !== t) throw new SentryError(n);
                      return t;
                    },
                    (t) => {
                      throw new SentryError(`${e} rejected with ${t}`);
                    }
                  );
                if (!(0, _.PO)(t) && null !== t) throw new SentryError(n);
                return t;
              })(a, c);
            })
            .then((r) => {
              if (null === r)
                throw (
                  (this.recordDroppedEvent("before_send", u, t),
                  new SentryError(
                    `${c} returned \`null\`, will not send event.`,
                    "log"
                  ))
                );
              let i = n && n.getSession();
              !a && i && this._updateSessionFromEvent(i, r);
              let s = r.transaction_info;
              return (
                a &&
                  s &&
                  r.transaction !== t.transaction &&
                  (r.transaction_info = { ...s, source: "custom" }),
                this.sendEvent(r, e),
                r
              );
            })
            .then(null, (t) => {
              if (t instanceof SentryError) throw t;
              throw (
                (this.captureException(t, {
                  data: { __sentry__: !0 },
                  originalException: t,
                }),
                new SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`))
              );
            });
        }
        _process(t) {
          this._numProcessing++,
            t.then(
              (t) => (this._numProcessing--, t),
              (t) => (this._numProcessing--, t)
            );
        }
        _sendEnvelope(t) {
          if (
            (this.emit("beforeEnvelope", t),
            this._isEnabled() && this._transport)
          )
            return this._transport.send(t).then(null, (t) => {
              c.X && o.kg.error("Error while sending event:", t);
            });
          c.X && o.kg.error("Transport disabled");
        }
        _clearOutcomes() {
          let t = this._outcomes;
          return (
            (this._outcomes = {}),
            Object.keys(t).map((e) => {
              let [n, r] = e.split(":");
              return { reason: n, category: r, quantity: t[e] };
            })
          );
        }
      };
      function isErrorEvent(t) {
        return void 0 === t.type;
      }
      function isTransactionEvent(t) {
        return "transaction" === t.type;
      }
      var x = n(9983),
        I = n(82300),
        O = n(2720),
        w = n(22151),
        C = n(10536);
      let BrowserClient = class BrowserClient extends BaseClient {
        constructor(t) {
          let e = C.m9.SENTRY_SDK_SOURCE || "npm";
          (0, x.V)(t, "browser", ["browser"], e),
            super(t),
            t.sendClientReports &&
              C.m9.document &&
              C.m9.document.addEventListener("visibilitychange", () => {
                "hidden" === C.m9.document.visibilityState &&
                  this._flushOutcomes();
              });
        }
        eventFromException(t, e) {
          return (0, w.dr)(
            this._options.stackParser,
            t,
            e,
            this._options.attachStacktrace
          );
        }
        eventFromMessage(t, e = "info", n) {
          return (0, w.aB)(
            this._options.stackParser,
            t,
            e,
            n,
            this._options.attachStacktrace
          );
        }
        captureUserFeedback(t) {
          if (!this._isEnabled()) {
            O.X &&
              o.kg.warn("SDK not enabled, will not capture user feedback.");
            return;
          }
          let e = (function (t, { metadata: e, tunnel: n, dsn: r }) {
            let i = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...(e &&
                  e.sdk && {
                    sdk: { name: e.sdk.name, version: e.sdk.version },
                  }),
                ...(!!n && !!r && { dsn: (0, p.RA)(r) }),
              },
              a = [{ type: "user_report" }, t];
            return createEnvelope(i, [a]);
          })(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
          });
          this._sendEnvelope(e);
        }
        _prepareEvent(t, e, n) {
          return (
            (t.platform = t.platform || "javascript"),
            super._prepareEvent(t, e, n)
          );
        }
        _flushOutcomes() {
          let t = this._clearOutcomes();
          if (0 === t.length) {
            O.X && o.kg.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            O.X && o.kg.log("No dsn provided, will not send outcomes");
            return;
          }
          O.X && o.kg.log("Sending outcomes:", t);
          let e = (function (t, e, n) {
            let r = [
              { type: "client_report" },
              { timestamp: (0, I.yW)(), discarded_events: t },
            ];
            return createEnvelope(e ? { dsn: e } : {}, [r]);
          })(t, this._options.tunnel && (0, p.RA)(this._dsn));
          this._sendEnvelope(e);
        }
      };
      var D = n(44343),
        R = n(83982),
        P = n(35191),
        $ = n(93048),
        N = n(90668),
        A = n(80696);
      function createFrame(t, e, n, r) {
        let i = { filename: t, function: e, in_app: !0 };
        return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
      }
      let L =
          /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        F = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        H = [
          30,
          (t) => {
            let e = L.exec(t);
            if (e) {
              let t = e[2] && 0 === e[2].indexOf("eval");
              if (t) {
                let t = F.exec(e[2]);
                t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
              }
              let [n, r] = extractSafariExtensionDetails(e[1] || "?", e[2]);
              return createFrame(
                r,
                n,
                e[3] ? +e[3] : void 0,
                e[4] ? +e[4] : void 0
              );
            }
          },
        ],
        j =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        M = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        X = [
          50,
          (t) => {
            let e = j.exec(t);
            if (e) {
              let t = e[3] && e[3].indexOf(" > eval") > -1;
              if (t) {
                let t = M.exec(e[3]);
                t &&
                  ((e[1] = e[1] || "eval"),
                  (e[3] = t[1]),
                  (e[4] = t[2]),
                  (e[5] = ""));
              }
              let n = e[3],
                r = e[1] || "?";
              return (
                ([r, n] = extractSafariExtensionDetails(r, n)),
                createFrame(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
              );
            }
          },
        ],
        W =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        U = [
          40,
          (t) => {
            let e = W.exec(t);
            return e
              ? createFrame(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0)
              : void 0;
          },
        ],
        B = (0, g.pE)(...[H, X, U]),
        extractSafariExtensionDetails = (t, e) => {
          let n = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
          return n || r
            ? [
                -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
                n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
              ]
            : [t, e];
        };
      function createTransport(
        t,
        e,
        n = (function (t) {
          let e = [];
          function remove(t) {
            return e.splice(e.indexOf(t), 1)[0];
          }
          return {
            $: e,
            add: function (n) {
              if (!(void 0 === t || e.length < t))
                return (0, v.$2)(
                  new SentryError(
                    "Not adding Promise because buffer limit was reached."
                  )
                );
              let r = n();
              return (
                -1 === e.indexOf(r) && e.push(r),
                r
                  .then(() => remove(r))
                  .then(null, () => remove(r).then(null, () => {})),
                r
              );
            },
            drain: function (t) {
              return new v.cW((n, r) => {
                let i = e.length;
                if (!i) return n(!0);
                let a = setTimeout(() => {
                  t && t > 0 && n(!1);
                }, t);
                e.forEach((t) => {
                  (0, v.WD)(t).then(() => {
                    --i || (clearTimeout(a), n(!0));
                  }, r);
                });
              });
            },
          };
        })(t.bufferSize || 30)
      ) {
        let r = {};
        function send(i) {
          let a = [];
          if (
            (forEachEnvelopeItem(i, (e, n) => {
              let i = S[n];
              if (
                (function (t, e, n = Date.now()) {
                  return (t[e] || t.all || 0) > n;
                })(r, i)
              ) {
                let r = getEventForEnvelopeItem(e, n);
                t.recordDroppedEvent("ratelimit_backoff", i, r);
              } else a.push(e);
            }),
            0 === a.length)
          )
            return (0, v.WD)();
          let s = createEnvelope(i[0], a),
            recordEnvelopeLoss = (e) => {
              forEachEnvelopeItem(s, (n, r) => {
                let i = getEventForEnvelopeItem(n, r);
                t.recordDroppedEvent(e, S[r], i);
              });
            };
          return n
            .add(() =>
              e({
                body: (function (t, e) {
                  let [n, r] = t,
                    i = JSON.stringify(n);
                  function append(t) {
                    "string" == typeof i
                      ? (i =
                          "string" == typeof t ? i + t : [encodeUTF8(i, e), t])
                      : i.push("string" == typeof t ? encodeUTF8(t, e) : t);
                  }
                  for (let t of r) {
                    let [e, n] = t;
                    if (
                      (append(`
${JSON.stringify(e)}
`),
                      "string" == typeof n || n instanceof Uint8Array)
                    )
                      append(n);
                    else {
                      let t;
                      try {
                        t = JSON.stringify(n);
                      } catch (e) {
                        t = JSON.stringify((0, y.Fv)(n));
                      }
                      append(t);
                    }
                  }
                  return "string" == typeof i
                    ? i
                    : (function (t) {
                        let e = t.reduce((t, e) => t + e.length, 0),
                          n = new Uint8Array(e),
                          r = 0;
                        for (let e of t) n.set(e, r), (r += e.length);
                        return n;
                      })(i);
                })(s, t.textEncoder),
              }).then(
                (t) => (
                  void 0 !== t.statusCode &&
                    (t.statusCode < 200 || t.statusCode >= 300) &&
                    c.X &&
                    o.kg.warn(
                      `Sentry responded with status code ${t.statusCode} to sent event.`
                    ),
                  (r = (function (
                    t,
                    { statusCode: e, headers: n },
                    r = Date.now()
                  ) {
                    let i = { ...t },
                      a = n && n["x-sentry-rate-limits"],
                      s = n && n["retry-after"];
                    if (a)
                      for (let t of a.trim().split(",")) {
                        let [e, n] = t.split(":", 2),
                          a = parseInt(e, 10),
                          s = (isNaN(a) ? 60 : a) * 1e3;
                        if (n) for (let t of n.split(";")) i[t] = r + s;
                        else i.all = r + s;
                      }
                    else
                      s
                        ? (i.all =
                            r +
                            (function (t, e = Date.now()) {
                              let n = parseInt(`${t}`, 10);
                              if (!isNaN(n)) return 1e3 * n;
                              let r = Date.parse(`${t}`);
                              return isNaN(r) ? 6e4 : r - e;
                            })(s, r))
                        : 429 === e && (i.all = r + 6e4);
                    return i;
                  })(r, t)),
                  t
                ),
                (t) => {
                  throw (recordEnvelopeLoss("network_error"), t);
                }
              )
            )
            .then(
              (t) => t,
              (t) => {
                if (t instanceof SentryError)
                  return (
                    c.X &&
                      o.kg.error(
                        "Skipped sending event because buffer is full."
                      ),
                    recordEnvelopeLoss("queue_overflow"),
                    (0, v.WD)()
                  );
                throw t;
              }
            );
        }
        return (
          (send.__sentry__baseTransport__ = !0),
          { send, flush: (t) => n.drain(t) }
        );
      }
      function getEventForEnvelopeItem(t, e) {
        if ("event" === e || "transaction" === e)
          return Array.isArray(t) ? t[1] : void 0;
      }
      function makeFetchTransport(
        t,
        e = (function () {
          if (r) return r;
          if ((0, h.Du)(C.m9.fetch)) return (r = C.m9.fetch.bind(C.m9));
          let t = C.m9.document,
            e = C.m9.fetch;
          if (t && "function" == typeof t.createElement)
            try {
              let n = t.createElement("iframe");
              (n.hidden = !0), t.head.appendChild(n);
              let r = n.contentWindow;
              r && r.fetch && (e = r.fetch), t.head.removeChild(n);
            } catch (t) {
              O.X &&
                o.kg.warn(
                  "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                  t
                );
            }
          return (r = e.bind(C.m9));
        })()
      ) {
        let n = 0,
          i = 0;
        return createTransport(t, function (a) {
          let s = a.body.length;
          (n += s), i++;
          let o = {
            body: a.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && i < 15,
            ...t.fetchOptions,
          };
          try {
            return e(t.url, o).then(
              (t) => (
                (n -= s),
                i--,
                {
                  statusCode: t.status,
                  headers: {
                    "x-sentry-rate-limits": t.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": t.headers.get("Retry-After"),
                  },
                }
              )
            );
          } catch (t) {
            return (r = void 0), (n -= s), i--, (0, v.$2)(t);
          }
        });
      }
      function makeXHRTransport(t) {
        return createTransport(t, function (e) {
          return new v.cW((n, r) => {
            let i = new XMLHttpRequest();
            for (let e in ((i.onerror = r),
            (i.onreadystatechange = () => {
              4 === i.readyState &&
                n({
                  statusCode: i.status,
                  headers: {
                    "x-sentry-rate-limits": i.getResponseHeader(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": i.getResponseHeader("Retry-After"),
                  },
                });
            }),
            i.open("POST", t.url),
            t.headers))
              Object.prototype.hasOwnProperty.call(t.headers, e) &&
                i.setRequestHeader(e, t.headers[e]);
            i.send(e.body);
          });
        });
      }
      let G = [
        (0, i.S)(),
        (0, a.C)(),
        (0, A.t)(),
        (0, D.f)(),
        (0, P.k)(),
        (0, N.O)(),
        (0, R.R)(),
        (0, $.s)(),
      ];
      function getDefaultIntegrations(t) {
        return [...G];
      }
      function init(t = {}) {
        void 0 === t.defaultIntegrations &&
          (t.defaultIntegrations = getDefaultIntegrations()),
          void 0 === t.release &&
            ("string" == typeof __SENTRY_RELEASE__ &&
              (t.release = __SENTRY_RELEASE__),
            C.m9.SENTRY_RELEASE &&
              C.m9.SENTRY_RELEASE.id &&
              (t.release = C.m9.SENTRY_RELEASE.id)),
          void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
          void 0 === t.sendClientReports && (t.sendClientReports = !0);
        let e = {
          ...t,
          stackParser: (0, g.Sq)(t.stackParser || B),
          integrations: (0, s.m8)(t),
          transport:
            t.transport ||
            ((0, h.Ak)() ? makeFetchTransport : makeXHRTransport),
        };
        !(function (t, e) {
          !0 === e.debug &&
            (c.X
              ? o.kg.enable()
              : (0, o.Cf)(() => {
                  console.warn(
                    "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                  );
                }));
          let n = (0, u.nZ)();
          n.update(e.initialScope);
          let r = new t(e);
          (function (t) {
            let e = (0, l.Gd)(),
              n = e.getStackTop();
            (n.client = t), n.scope.setClient(t);
          })(r),
            r.init ? r.init() : r.setupIntegrations && r.setupIntegrations();
        })(BrowserClient, e),
          t.autoSessionTracking &&
            (function () {
              if (void 0 === C.m9.document) {
                O.X &&
                  o.kg.warn(
                    "Session tracking in non-browser environment with @sentry/browser is not supported."
                  );
                return;
              }
              (0, u.yj)({ ignoreDuration: !0 }),
                (0, u.cg)(),
                (0, f.a)(({ from: t, to: e }) => {
                  void 0 !== t &&
                    t !== e &&
                    ((0, u.yj)({ ignoreDuration: !0 }), (0, u.cg)());
                });
            })();
      }
      let showReportDialog = (t = {}, e = (0, l.Gd)()) => {
        if (!C.m9.document) {
          O.X &&
            o.kg.error("Global document not defined in showReportDialog call");
          return;
        }
        let { client: n, scope: r } = e.getStackTop(),
          i = t.dsn || (n && n.getDsn());
        if (!i) {
          O.X && o.kg.error("DSN not configured for showReportDialog call");
          return;
        }
        r && (t.user = { ...r.getUser(), ...t.user }),
          t.eventId || (t.eventId = e.lastEventId());
        let a = C.m9.document.createElement("script");
        (a.async = !0),
          (a.crossOrigin = "anonymous"),
          (a.src = (function (t, e) {
            let n = (0, p.vK)(t);
            if (!n) return "";
            let r = `${getBaseApiEndpoint(n)}embed/error-page/`,
              i = `dsn=${(0, p.RA)(n)}`;
            for (let t in e)
              if ("dsn" !== t && "onClose" !== t) {
                if ("user" === t) {
                  let t = e.user;
                  if (!t) continue;
                  t.name && (i += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (i += `&email=${encodeURIComponent(t.email)}`);
                } else
                  i += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
              }
            return `${r}?${i}`;
          })(i, t)),
          t.onLoad && (a.onload = t.onLoad);
        let { onClose: s } = t;
        if (s) {
          let reportDialogClosedMessageHandler = (t) => {
            if ("__sentry_reportdialog_closed__" === t.data)
              try {
                s();
              } finally {
                C.m9.removeEventListener(
                  "message",
                  reportDialogClosedMessageHandler
                );
              }
          };
          C.m9.addEventListener("message", reportDialogClosedMessageHandler);
        }
        let c = C.m9.document.head || C.m9.document.body;
        c
          ? c.appendChild(a)
          : O.X &&
            o.kg.error(
              "Not injecting report dialog. No injection point found in HTML"
            );
      };
    },
    40093: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return r;
        },
      });
      let r = "production";
    },
    82959: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    43073: function (t, e, n) {
      "use strict";
      n.d(e, {
        RP: function () {
          return function notifyEventProcessors(t, e, n, r = 0) {
            return new i.cW((i, c) => {
              let u = t[r];
              if (null === e || "function" != typeof u) i(e);
              else {
                let l = u({ ...e }, n);
                o.X &&
                  u.id &&
                  null === l &&
                  a.kg.log(`Event processor "${u.id}" dropped event`),
                  (0, s.J8)(l)
                    ? l
                        .then((e) =>
                          notifyEventProcessors(t, e, n, r + 1).then(i)
                        )
                        .then(null, c)
                    : notifyEventProcessors(t, l, n, r + 1)
                        .then(i)
                        .then(null, c);
              }
            });
          };
        },
        cc: function () {
          return addGlobalEventProcessor;
        },
        fH: function () {
          return getGlobalEventProcessors;
        },
      });
      var r = n(40932),
        i = n(40885),
        a = n(70716),
        s = n(82361),
        o = n(82959);
      function getGlobalEventProcessors() {
        return (0, r.Y)("globalEventProcessors", () => []);
      }
      function addGlobalEventProcessor(t) {
        getGlobalEventProcessors().push(t);
      }
    },
    21: function (t, e, n) {
      "use strict";
      n.d(e, {
        $e: function () {
          return withScope;
        },
        Tb: function () {
          return captureException;
        },
        cg: function () {
          return captureSession;
        },
        eN: function () {
          return captureEvent;
        },
        nZ: function () {
          return getCurrentScope;
        },
        n_: function () {
          return addBreadcrumb;
        },
        s3: function () {
          return getClient;
        },
        yj: function () {
          return startSession;
        },
      });
      var r = n(40932),
        i = n(40093),
        a = n(27553),
        s = n(43791),
        o = n(65785);
      function captureException(t, e) {
        return (0, a.Gd)().captureException(t, (0, o.U0)(e));
      }
      function captureEvent(t, e) {
        return (0, a.Gd)().captureEvent(t, e);
      }
      function addBreadcrumb(t, e) {
        (0, a.Gd)().addBreadcrumb(t, e);
      }
      function withScope(...t) {
        let e = (0, a.Gd)();
        if (2 === t.length) {
          let [n, r] = t;
          return n
            ? e.withScope(() => ((e.getStackTop().scope = n), r(n)))
            : e.withScope(r);
        }
        return e.withScope(t[0]);
      }
      function getClient() {
        return (0, a.Gd)().getClient();
      }
      function getCurrentScope() {
        return (0, a.Gd)().getScope();
      }
      function startSession(t) {
        let e = getClient(),
          n = (0, a.aF)(),
          o = getCurrentScope(),
          { release: c, environment: u = i.J } = (e && e.getOptions()) || {},
          { userAgent: l } = r.GLOBAL_OBJ.navigator || {},
          d = (0, s.Hv)({
            release: c,
            environment: u,
            user: o.getUser() || n.getUser(),
            ...(l && { userAgent: l }),
            ...t,
          }),
          p = n.getSession();
        return (
          p && "ok" === p.status && (0, s.CT)(p, { status: "exited" }),
          endSession(),
          n.setSession(d),
          o.setSession(d),
          d
        );
      }
      function endSession() {
        let t = (0, a.aF)(),
          e = getCurrentScope(),
          n = e.getSession() || t.getSession();
        n && (0, s.RJ)(n), _sendSessionUpdate(), t.setSession(), e.setSession();
      }
      function _sendSessionUpdate() {
        let t = (0, a.aF)(),
          e = getCurrentScope(),
          n = getClient(),
          r = e.getSession() || t.getSession();
        r && n && n.captureSession && n.captureSession(r);
      }
      function captureSession(t = !1) {
        if (t) {
          endSession();
          return;
        }
        _sendSessionUpdate();
      }
    },
    27553: function (t, e, n) {
      "use strict";
      n.d(e, {
        Gd: function () {
          return getCurrentHub;
        },
        aF: function () {
          return getIsolationScope;
        },
        cu: function () {
          return getMainCarrier;
        },
      });
      var r = n(82361),
        i = n(85229),
        a = n(82300),
        s = n(70716),
        o = n(40932),
        c = n(40093),
        u = n(82959),
        l = n(53818),
        d = n(43791),
        p = n(57004);
      let g = parseFloat(p.J);
      let Hub = class Hub {
        constructor(t, e, n, r = g) {
          let i, a;
          (this._version = r),
            e ? (i = e) : (i = new l.sX()).setClient(t),
            n ? (a = n) : (a = new l.sX()).setClient(t),
            (this._stack = [{ scope: i }]),
            t && this.bindClient(t),
            (this._isolationScope = a);
        }
        isOlderThan(t) {
          return this._version < t;
        }
        bindClient(t) {
          let e = this.getStackTop();
          (e.client = t),
            e.scope.setClient(t),
            t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
          let t = this.getScope().clone();
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }
        popScope() {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }
        withScope(t) {
          let e;
          let n = this.pushScope();
          try {
            e = t(n);
          } catch (t) {
            throw (this.popScope(), t);
          }
          return (0, r.J8)(e)
            ? e.then(
                (t) => (this.popScope(), t),
                (t) => {
                  throw (this.popScope(), t);
                }
              )
            : (this.popScope(), e);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(t, e) {
          let n = (this._lastEventId =
              e && e.event_id ? e.event_id : (0, i.DM)()),
            r = Error("Sentry syntheticException");
          return (
            this.getScope().captureException(t, {
              originalException: t,
              syntheticException: r,
              ...e,
              event_id: n,
            }),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = (this._lastEventId =
              n && n.event_id ? n.event_id : (0, i.DM)()),
            a = Error(t);
          return (
            this.getScope().captureMessage(t, e, {
              originalException: t,
              syntheticException: a,
              ...n,
              event_id: r,
            }),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, i.DM)();
          return (
            t.type || (this._lastEventId = n),
            this.getScope().captureEvent(t, { ...e, event_id: n }),
            n
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(t, e) {
          let { scope: n, client: r } = this.getStackTop();
          if (!r) return;
          let { beforeBreadcrumb: i = null, maxBreadcrumbs: o = 100 } =
            (r.getOptions && r.getOptions()) || {};
          if (o <= 0) return;
          let c = (0, a.yW)(),
            u = { timestamp: c, ...t },
            l = i ? (0, s.Cf)(() => i(u, e)) : u;
          null !== l &&
            (r.emit && r.emit("beforeAddBreadcrumb", l, e),
            n.addBreadcrumb(l, o));
        }
        setUser(t) {
          this.getScope().setUser(t), this.getIsolationScope().setUser(t);
        }
        setTags(t) {
          this.getScope().setTags(t), this.getIsolationScope().setTags(t);
        }
        setExtras(t) {
          this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
        }
        setTag(t, e) {
          this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e);
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e),
            this.getIsolationScope().setExtra(t, e);
        }
        setContext(t, e) {
          this.getScope().setContext(t, e),
            this.getIsolationScope().setContext(t, e);
        }
        configureScope(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(e);
        }
        run(t) {
          let e = makeMain(this);
          try {
            t(this);
          } finally {
            makeMain(e);
          }
        }
        getIntegration(t) {
          let e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (e) {
            return (
              u.X &&
                s.kg.warn(
                  `Cannot retrieve integration ${t.id} from the current Hub`
                ),
              null
            );
          }
        }
        startTransaction(t, e) {
          let n = this._callExtensionMethod("startTransaction", t, e);
          if (u.X && !n) {
            let t = this.getClient();
            t
              ? s.kg
                  .warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
              : s.kg.warn(
                  "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
                );
          }
          return n;
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession(t = !1) {
          if (t) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          let t = this.getStackTop(),
            e = t.scope,
            n = e.getSession();
          n && (0, d.RJ)(n), this._sendSessionUpdate(), e.setSession();
        }
        startSession(t) {
          let { scope: e, client: n } = this.getStackTop(),
            { release: r, environment: i = c.J } = (n && n.getOptions()) || {},
            { userAgent: a } = o.GLOBAL_OBJ.navigator || {},
            s = (0, d.Hv)({
              release: r,
              environment: i,
              user: e.getUser(),
              ...(a && { userAgent: a }),
              ...t,
            }),
            u = e.getSession && e.getSession();
          return (
            u && "ok" === u.status && (0, d.CT)(u, { status: "exited" }),
            this.endSession(),
            e.setSession(s),
            s
          );
        }
        shouldSendDefaultPii() {
          let t = this.getClient(),
            e = t && t.getOptions();
          return !!(e && e.sendDefaultPii);
        }
        _sendSessionUpdate() {
          let { scope: t, client: e } = this.getStackTop(),
            n = t.getSession();
          n && e && e.captureSession && e.captureSession(n);
        }
        _callExtensionMethod(t, ...e) {
          let n = getMainCarrier(),
            r = n.__SENTRY__;
          if (r && r.extensions && "function" == typeof r.extensions[t])
            return r.extensions[t].apply(this, e);
          u.X &&
            s.kg.warn(
              `Extension method ${t} couldn't be found, doing nothing.`
            );
        }
      };
      function getMainCarrier() {
        return (
          (o.GLOBAL_OBJ.__SENTRY__ = o.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          o.GLOBAL_OBJ
        );
      }
      function makeMain(t) {
        let e = getMainCarrier(),
          n = getHubFromCarrier(e);
        return setHubOnCarrier(e, t), n;
      }
      function getCurrentHub() {
        let t = getMainCarrier();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          let e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e;
        }
        return (function (t = getMainCarrier()) {
          return (
            (!(t && t.__SENTRY__ && t.__SENTRY__.hub) ||
              getHubFromCarrier(t).isOlderThan(g)) &&
              setHubOnCarrier(t, new Hub()),
            getHubFromCarrier(t)
          );
        })(t);
      }
      function getIsolationScope() {
        return getCurrentHub().getIsolationScope();
      }
      function getHubFromCarrier(t) {
        return (0, o.Y)("hub", () => new Hub(), t);
      }
      function setHubOnCarrier(t, e) {
        if (!t) return !1;
        let n = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (n.hub = e), !0;
      }
    },
    28280: function (t, e, n) {
      "use strict";
      n.d(e, {
        RN: function () {
          return convertIntegrationFnToClass;
        },
        _I: function () {
          return defineIntegration;
        },
        m7: function () {
          return setupIntegration;
        },
        m8: function () {
          return getIntegrationsToSetup;
        },
        q4: function () {
          return setupIntegrations;
        },
        uf: function () {
          return afterSetupIntegrations;
        },
      });
      var r = n(85229),
        i = n(70716),
        a = n(82959),
        s = n(43073),
        o = n(27553);
      let c = [];
      function getIntegrationsToSetup(t) {
        let e;
        let n = t.defaultIntegrations || [],
          i = t.integrations;
        n.forEach((t) => {
          t.isDefaultInstance = !0;
        }),
          (e = Array.isArray(i)
            ? [...n, ...i]
            : "function" == typeof i
            ? (0, r.lE)(i(n))
            : n);
        let a = (function (t) {
            let e = {};
            return (
              t.forEach((t) => {
                let { name: n } = t,
                  r = e[n];
                (r && !r.isDefaultInstance && t.isDefaultInstance) ||
                  (e[n] = t);
              }),
              Object.keys(e).map((t) => e[t])
            );
          })(e),
          s = (function (t, e) {
            for (let n = 0; n < t.length; n++) if (!0 === e(t[n])) return n;
            return -1;
          })(a, (t) => "Debug" === t.name);
        if (-1 !== s) {
          let [t] = a.splice(s, 1);
          a.push(t);
        }
        return a;
      }
      function setupIntegrations(t, e) {
        let n = {};
        return (
          e.forEach((e) => {
            e && setupIntegration(t, e, n);
          }),
          n
        );
      }
      function afterSetupIntegrations(t, e) {
        for (let n of e) n && n.afterAllSetup && n.afterAllSetup(t);
      }
      function setupIntegration(t, e, n) {
        if (n[e.name]) {
          a.X &&
            i.kg.log(
              `Integration skipped because it was already installed: ${e.name}`
            );
          return;
        }
        if (
          ((n[e.name] = e),
          -1 === c.indexOf(e.name) && (e.setupOnce(s.cc, o.Gd), c.push(e.name)),
          e.setup && "function" == typeof e.setup && e.setup(t),
          t.on && "function" == typeof e.preprocessEvent)
        ) {
          let n = e.preprocessEvent.bind(e);
          t.on("preprocessEvent", (e, r) => n(e, r, t));
        }
        if (t.addEventProcessor && "function" == typeof e.processEvent) {
          let n = e.processEvent.bind(e),
            r = Object.assign((e, r) => n(e, r, t), { id: e.name });
          t.addEventProcessor(r);
        }
        a.X && i.kg.log(`Integration installed: ${e.name}`);
      }
      function convertIntegrationFnToClass(t, e) {
        return Object.assign(
          function (...t) {
            return e(...t);
          },
          { id: t }
        );
      }
      function defineIntegration(t) {
        return t;
      }
    },
    88656: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        C: function () {
          return u;
        },
        c: function () {
          return l;
        },
      });
      var i = n(89669),
        a = n(21),
        s = n(28280);
      let o = "FunctionToString",
        c = new WeakMap(),
        u = (0, s._I)(() => ({
          name: o,
          setupOnce() {
            r = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...t) {
                let e = (0, i.HK)(this),
                  n = c.has((0, a.s3)()) && void 0 !== e ? e : this;
                return r.apply(n, t);
              };
            } catch (t) {}
          },
          setup(t) {
            c.set(t, !0);
          },
        })),
        l = (0, s.RN)(o, u);
    },
    85989: function (t, e, n) {
      "use strict";
      n.d(e, {
        Q: function () {
          return p;
        },
        S: function () {
          return d;
        },
      });
      var r = n(70716),
        i = n(85229),
        a = n(92674),
        s = n(82959),
        o = n(28280);
      let c = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        u = [
          /^.*\/healthcheck$/,
          /^.*\/healthy$/,
          /^.*\/live$/,
          /^.*\/ready$/,
          /^.*\/heartbeat$/,
          /^.*\/health$/,
          /^.*\/healthz$/,
        ],
        l = "InboundFilters",
        d = (0, o._I)((t = {}) => ({
          name: l,
          setupOnce() {},
          processEvent(e, n, o) {
            var l;
            let d = o.getOptions(),
              p = (function (t = {}, e = {}) {
                return {
                  allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                  denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                  ignoreErrors: [
                    ...(t.ignoreErrors || []),
                    ...(e.ignoreErrors || []),
                    ...(t.disableErrorDefaults ? [] : c),
                  ],
                  ignoreTransactions: [
                    ...(t.ignoreTransactions || []),
                    ...(e.ignoreTransactions || []),
                    ...(t.disableTransactionDefaults ? [] : u),
                  ],
                  ignoreInternal:
                    void 0 === t.ignoreInternal || t.ignoreInternal,
                };
              })(t, d);
            return (
              p.ignoreInternal &&
              (function (t) {
                try {
                  return "SentryError" === t.exception.values[0].type;
                } catch (t) {}
                return !1;
              })(e)
                ? (s.X &&
                    r.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, i.jH)(e)}`),
                  0)
                : ((l = p.ignoreErrors),
                  !e.type &&
                    l &&
                    l.length &&
                    (function (t) {
                      let e;
                      let n = [];
                      t.message && n.push(t.message);
                      try {
                        e = t.exception.values[t.exception.values.length - 1];
                      } catch (t) {}
                      return (
                        e &&
                          e.value &&
                          (n.push(e.value),
                          e.type && n.push(`${e.type}: ${e.value}`)),
                        s.X &&
                          0 === n.length &&
                          r.kg.error(
                            `Could not extract message for event ${(0, i.jH)(
                              t
                            )}`
                          ),
                        n
                      );
                    })(e).some((t) => (0, a.U0)(t, l)))
                ? (s.X &&
                    r.kg
                      .warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, i.jH)(e)}`),
                  0)
                : !(function (t, e) {
                    if ("transaction" !== t.type || !e || !e.length) return !1;
                    let n = t.transaction;
                    return !!n && (0, a.U0)(n, e);
                  })(e, p.ignoreTransactions)
                ? !(function (t, e) {
                    if (!e || !e.length) return !1;
                    let n = _getEventFilterUrl(t);
                    return !!n && (0, a.U0)(n, e);
                  })(e, p.denyUrls)
                  ? (function (t, e) {
                      if (!e || !e.length) return !0;
                      let n = _getEventFilterUrl(t);
                      return !n || (0, a.U0)(n, e);
                    })(e, p.allowUrls) ||
                    (s.X &&
                      r.kg
                        .warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, i.jH)(e)}.
Url: ${_getEventFilterUrl(e)}`),
                    0)
                  : (s.X &&
                      r.kg
                        .warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, i.jH)(e)}.
Url: ${_getEventFilterUrl(e)}`),
                    0)
                : (s.X &&
                    r.kg
                      .warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, i.jH)(e)}`),
                  0)
            )
              ? e
              : null;
          },
        })),
        p = (0, o.RN)(l, d);
      function _getEventFilterUrl(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function (t = []) {
                for (let e = t.length - 1; e >= 0; e--) {
                  let n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (e) {
          return (
            s.X && r.kg.error(`Cannot extract url for event ${(0, i.jH)(t)}`),
            null
          );
        }
      }
    },
    48638: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        y: function () {
          return getMetricSummaryJsonForSpan;
        },
      });
      var i = n(89669);
      function getMetricSummaryJsonForSpan(t) {
        let e = r ? r.get(t) : void 0;
        if (!e) return;
        let n = {};
        for (let [, [t, r]] of e) n[t] || (n[t] = []), n[t].push((0, i.Jr)(r));
        return n;
      }
    },
    53818: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        lW: function () {
          return getGlobalScope;
        },
        sX: function () {
          return Scope;
        },
      });
      var i = n(82361),
        a = n(82300),
        s = n(85229),
        o = n(70716),
        c = n(43073),
        u = n(43791),
        l = n(59389);
      let Scope = class Scope {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = generatePropagationContext());
        }
        static clone(t) {
          return t ? t.clone() : new Scope();
        }
        clone() {
          let t = new Scope();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._span = this._span),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        getClient() {
          return this._client;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              segment: void 0,
              username: void 0,
            }),
            this._session && (0, u.CT)(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(t) {
          return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          let t = this._span;
          return t && t.transaction;
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          if ("function" == typeof t) {
            let e = t(this);
            return e instanceof Scope ? e : this;
          }
          return (
            t instanceof Scope
              ? ((this._tags = { ...this._tags, ...t._tags }),
                (this._extra = { ...this._extra, ...t._extra }),
                (this._contexts = { ...this._contexts, ...t._contexts }),
                t._user &&
                  Object.keys(t._user).length &&
                  (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession),
                t._propagationContext &&
                  (this._propagationContext = t._propagationContext))
              : (0, i.PO)(t) &&
                ((this._tags = { ...this._tags, ...t.tags }),
                (this._extra = { ...this._extra, ...t.extra }),
                (this._contexts = { ...this._contexts, ...t.contexts }),
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession),
                t.propagationContext &&
                  (this._propagationContext = t.propagationContext)),
            this
          );
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            (this._propagationContext = generatePropagationContext()),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let r = { timestamp: (0, a.yW)(), ...t },
            i = this._breadcrumbs;
          return (
            i.push(r),
            (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        getAttachments() {
          let t = this.getScopeData();
          return t.attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          let {
            _breadcrumbs: t,
            _attachments: e,
            _contexts: n,
            _tags: r,
            _extra: i,
            _user: a,
            _level: s,
            _fingerprint: o,
            _eventProcessors: c,
            _propagationContext: u,
            _sdkProcessingMetadata: l,
            _transactionName: d,
            _span: p,
          } = this;
          return {
            breadcrumbs: t,
            attachments: e,
            contexts: n,
            tags: r,
            extra: i,
            user: a,
            level: s,
            fingerprint: o || [],
            eventProcessors: c,
            propagationContext: u,
            sdkProcessingMetadata: l,
            transactionName: d,
            span: p,
          };
        }
        applyToEvent(t, e = {}, n = []) {
          (0, l.gi)(t, this.getScopeData());
          let r = [...n, ...(0, c.fH)(), ...this._eventProcessors];
          return (0, c.RP)(r, t, e);
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          let n = e && e.event_id ? e.event_id : (0, s.DM)();
          if (!this._client)
            return (
              o.kg.warn(
                "No client configured on scope - will not capture exception!"
              ),
              n
            );
          let r = Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n,
              },
              this
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = n && n.event_id ? n.event_id : (0, s.DM)();
          if (!this._client)
            return (
              o.kg.warn(
                "No client configured on scope - will not capture message!"
              ),
              r
            );
          let i = Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r,
              },
              this
            ),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : (0, s.DM)();
          return (
            this._client
              ? this._client.captureEvent(t, { ...e, event_id: n }, this)
              : o.kg.warn(
                  "No client configured on scope - will not capture event!"
                ),
            n
          );
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      };
      function getGlobalScope() {
        return r || (r = new Scope()), r;
      }
      function generatePropagationContext() {
        return { traceId: (0, s.DM)(), spanId: (0, s.DM)().substring(16) };
      }
    },
    70210: function (t, e, n) {
      "use strict";
      n.d(e, {
        $J: function () {
          return a;
        },
        S3: function () {
          return s;
        },
        TE: function () {
          return i;
        },
        Zj: function () {
          return r;
        },
      });
      let r = "sentry.source",
        i = "sentry.sample_rate",
        a = "sentry.op",
        s = "sentry.origin";
    },
    43791: function (t, e, n) {
      "use strict";
      n.d(e, {
        CT: function () {
          return updateSession;
        },
        Hv: function () {
          return makeSession;
        },
        RJ: function () {
          return closeSession;
        },
      });
      var r = n(82300),
        i = n(85229),
        a = n(89669);
      function makeSession(t) {
        let e = (0, r.ph)(),
          n = {
            sid: (0, i.DM)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () =>
              (0, a.Jr)({
                sid: `${n.sid}`,
                init: n.init,
                started: new Date(1e3 * n.started).toISOString(),
                timestamp: new Date(1e3 * n.timestamp).toISOString(),
                status: n.status,
                errors: n.errors,
                did:
                  "number" == typeof n.did || "string" == typeof n.did
                    ? `${n.did}`
                    : void 0,
                duration: n.duration,
                abnormal_mechanism: n.abnormal_mechanism,
                attrs: {
                  release: n.release,
                  environment: n.environment,
                  ip_address: n.ipAddress,
                  user_agent: n.userAgent,
                },
              }),
          };
        return t && updateSession(n, t), n;
      }
      function updateSession(t, e = {}) {
        if (
          (!e.user ||
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || (0, r.ph)()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function closeSession(t, e) {
        let n = {};
        e
          ? (n = { status: e })
          : "ok" === t.status && (n = { status: "exited" }),
          updateSession(t, n);
      }
    },
    88101: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return getDynamicSamplingContextFromClient;
        },
        j: function () {
          return getDynamicSamplingContextFromSpan;
        },
      });
      var r = n(89669),
        i = n(40093),
        a = n(21),
        s = n(15116),
        o = n(72010);
      function getDynamicSamplingContextFromClient(t, e, n) {
        let a = e.getOptions(),
          { publicKey: s } = e.getDsn() || {},
          { segment: o } = (n && n.getUser()) || {},
          c = (0, r.Jr)({
            environment: a.environment || i.J,
            release: a.release,
            user_segment: o,
            public_key: s,
            trace_id: t,
          });
        return e.emit && e.emit("createDsc", c), c;
      }
      function getDynamicSamplingContextFromSpan(t) {
        let e = (0, a.s3)();
        if (!e) return {};
        let n = getDynamicSamplingContextFromClient(
            (0, o.XU)(t).trace_id || "",
            e,
            (0, a.nZ)()
          ),
          r = (0, s.G)(t);
        if (!r) return n;
        let i = r && r._frozenDynamicSamplingContext;
        if (i) return i;
        let { sampleRate: c, source: u } = r.metadata;
        null != c && (n.sample_rate = `${c}`);
        let l = (0, o.XU)(r);
        return (
          u && "url" !== u && (n.transaction = l.description),
          (n.sampled = String((0, o.Tt)(r))),
          e.emit && e.emit("createDsc", n),
          n
        );
      }
    },
    17793: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return addTracingExtensions;
        },
        l: function () {
          return startIdleTransaction;
        },
      });
      var r = n(70716),
        i = n(82959),
        a = n(27553),
        s = n(72010),
        o = n(26942),
        c = n(92136),
        u = n(85814);
      let l = !1;
      function errorCallback() {
        let t = (0, u.x1)();
        if (t) {
          let e = "internal_error";
          i.X &&
            r.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),
            t.setStatus(e);
        }
      }
      errorCallback.tag = "sentry_tracingErrorCallback";
      var d = n(81844),
        p = n(82361),
        g = n(70210),
        h = n(49142);
      function sampleTransaction(t, e, n) {
        var a;
        let o;
        return (
          (0, h.z)(e)
            ? void 0 !== t.sampled
              ? t.setAttribute(g.TE, Number(t.sampled))
              : ("function" == typeof e.tracesSampler
                  ? ((o = e.tracesSampler(n)), t.setAttribute(g.TE, Number(o)))
                  : void 0 !== n.parentSampled
                  ? (o = n.parentSampled)
                  : void 0 !== e.tracesSampleRate
                  ? ((o = e.tracesSampleRate), t.setAttribute(g.TE, Number(o)))
                  : ((o = 1), t.setAttribute(g.TE, o)),
                (a = o),
                (0, p.i2)(a) || !("number" == typeof a || "boolean" == typeof a)
                  ? (i.X &&
                      r.kg.warn(
                        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
                          a
                        )} of type ${JSON.stringify(typeof a)}.`
                      ),
                    1)
                  : (a < 0 || a > 1) &&
                    (i.X &&
                      r.kg.warn(
                        `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${a}.`
                      ),
                    1))
              ? (i.X &&
                  r.kg.warn(
                    "[Tracing] Discarding transaction because of invalid sample rate."
                  ),
                (t.sampled = !1))
              : o
              ? ((t.sampled = Math.random() < o), t.sampled)
                ? i.X &&
                  r.kg.log(
                    `[Tracing] starting ${t.op} transaction - ${
                      (0, s.XU)(t).description
                    }`
                  )
                : i.X &&
                  r.kg.log(
                    `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                      o
                    )})`
                  )
              : (i.X &&
                  r.kg.log(
                    `[Tracing] Discarding transaction because ${
                      "function" == typeof e.tracesSampler
                        ? "tracesSampler returned 0 or false"
                        : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
                    }`
                  ),
                (t.sampled = !1))
            : (t.sampled = !1),
          t
        );
      }
      var f = n(22990);
      function traceHeaders() {
        let t = this.getScope(),
          e = t.getSpan();
        return e ? { "sentry-trace": (0, s.Hb)(e) } : {};
      }
      function _startTransaction(t, e) {
        let n = this.getClient(),
          a = (n && n.getOptions()) || {},
          s = a.instrumenter || "sentry",
          o = t.instrumenter || "sentry";
        s !== o &&
          (i.X &&
            r.kg
              .error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),
          (t.sampled = !1));
        let c = new f.Y(t, this);
        return (
          (c = sampleTransaction(c, a, {
            name: t.name,
            parentSampled: t.parentSampled,
            transactionContext: t,
            attributes: { ...t.data, ...t.attributes },
            ...e,
          })).isRecording() &&
            c.initSpanRecorder(a._experiments && a._experiments.maxSpans),
          n && n.emit && n.emit("startTransaction", c),
          c
        );
      }
      function startIdleTransaction(t, e, n, r, i, a, s, o = !1) {
        let c = t.getClient(),
          u = (c && c.getOptions()) || {},
          l = new d.io(e, t, n, r, s, i, o);
        return (
          (l = sampleTransaction(l, u, {
            name: e.name,
            parentSampled: e.parentSampled,
            transactionContext: e,
            attributes: { ...e.data, ...e.attributes },
            ...a,
          })).isRecording() &&
            l.initSpanRecorder(u._experiments && u._experiments.maxSpans),
          c && c.emit && c.emit("startTransaction", l),
          l
        );
      }
      function addTracingExtensions() {
        let t = (0, a.cu)();
        t.__SENTRY__ &&
          ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
          t.__SENTRY__.extensions.startTransaction ||
            (t.__SENTRY__.extensions.startTransaction = _startTransaction),
          t.__SENTRY__.extensions.traceHeaders ||
            (t.__SENTRY__.extensions.traceHeaders = traceHeaders),
          l || ((l = !0), (0, o.V)(errorCallback), (0, c.h)(errorCallback)));
      }
    },
    81844: function (t, e, n) {
      "use strict";
      n.d(e, {
        AT: function () {
          return u;
        },
        io: function () {
          return IdleTransaction;
        },
      });
      var r = n(70716),
        i = n(82300),
        a = n(82959),
        s = n(72010),
        o = n(90710),
        c = n(22990);
      let u = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 };
      let IdleTransactionSpanRecorder = class IdleTransactionSpanRecorder extends o.g {
        constructor(t, e, n, r) {
          super(r),
            (this._pushActivity = t),
            (this._popActivity = e),
            (this.transactionSpanId = n);
        }
        add(t) {
          if (t.spanContext().spanId !== this.transactionSpanId) {
            let e = t.end;
            (t.end = (...n) => (
              this._popActivity(t.spanContext().spanId), e.apply(t, n)
            )),
              void 0 === (0, s.XU)(t).timestamp &&
                this._pushActivity(t.spanContext().spanId);
          }
          super.add(t);
        }
      };
      let IdleTransaction = class IdleTransaction extends c.Y {
        constructor(
          t,
          e,
          n = u.idleTimeout,
          i = u.finalTimeout,
          s = u.heartbeatInterval,
          o = !1,
          c = !1
        ) {
          super(t, e),
            (this._idleHub = e),
            (this._idleTimeout = n),
            (this._finalTimeout = i),
            (this._heartbeatInterval = s),
            (this._onScope = o),
            (this.activities = {}),
            (this._heartbeatCounter = 0),
            (this._finished = !1),
            (this._idleTimeoutCanceledPermanently = !1),
            (this._beforeFinishCallbacks = []),
            (this._finishReason = "externalFinish"),
            (this._autoFinishAllowed = !c),
            o &&
              (a.X &&
                r.kg.log(
                  `Setting idle transaction on scope. Span ID: ${
                    this.spanContext().spanId
                  }`
                ),
              e.getScope().setSpan(this)),
            c || this._restartIdleTimeout(),
            setTimeout(() => {
              this._finished ||
                (this.setStatus("deadline_exceeded"),
                (this._finishReason = "finalTimeout"),
                this.end());
            }, this._finalTimeout);
        }
        end(t) {
          let e = (0, s.$k)(t);
          if (
            ((this._finished = !0),
            (this.activities = {}),
            "ui.action.click" === this.op &&
              this.setAttribute("finishReason", this._finishReason),
            this.spanRecorder)
          ) {
            for (let t of (a.X &&
              r.kg.log(
                "[Tracing] finishing IdleTransaction",
                new Date(1e3 * e).toISOString(),
                this.op
              ),
            this._beforeFinishCallbacks))
              t(this, e);
            (this.spanRecorder.spans = this.spanRecorder.spans.filter((t) => {
              if (t.spanContext().spanId === this.spanContext().spanId)
                return !0;
              !(0, s.XU)(t).timestamp &&
                (t.setStatus("cancelled"),
                t.end(e),
                a.X &&
                  r.kg.log(
                    "[Tracing] cancelling span since transaction ended early",
                    JSON.stringify(t, void 0, 2)
                  ));
              let { start_timestamp: n, timestamp: i } = (0, s.XU)(t),
                o = n && n < e,
                c = (this._finalTimeout + this._idleTimeout) / 1e3,
                u = i && n && i - n < c;
              if (a.X) {
                let e = JSON.stringify(t, void 0, 2);
                o
                  ? u ||
                    r.kg.log(
                      "[Tracing] discarding Span since it finished after Transaction final timeout",
                      e
                    )
                  : r.kg.log(
                      "[Tracing] discarding Span since it happened after Transaction was finished",
                      e
                    );
              }
              return o && u;
            })),
              a.X && r.kg.log("[Tracing] flushing IdleTransaction");
          } else a.X && r.kg.log("[Tracing] No active IdleTransaction");
          if (this._onScope) {
            let t = this._idleHub.getScope();
            t.getTransaction() === this && t.setSpan(void 0);
          }
          return super.end(t);
        }
        registerBeforeFinishCallback(t) {
          this._beforeFinishCallbacks.push(t);
        }
        initSpanRecorder(t) {
          this.spanRecorder ||
            ((this.spanRecorder = new IdleTransactionSpanRecorder(
              (t) => {
                this._finished || this._pushActivity(t);
              },
              (t) => {
                this._finished || this._popActivity(t);
              },
              this.spanContext().spanId,
              t
            )),
            a.X && r.kg.log("Starting heartbeat"),
            this._pingHeartbeat()),
            this.spanRecorder.add(this);
        }
        cancelIdleTimeout(
          t,
          { restartOnChildSpanChange: e } = { restartOnChildSpanChange: !0 }
        ) {
          (this._idleTimeoutCanceledPermanently = !1 === e),
            this._idleTimeoutID &&
              (clearTimeout(this._idleTimeoutID),
              (this._idleTimeoutID = void 0),
              0 === Object.keys(this.activities).length &&
                this._idleTimeoutCanceledPermanently &&
                ((this._finishReason = "cancelled"), this.end(t)));
        }
        setFinishReason(t) {
          this._finishReason = t;
        }
        sendAutoFinishSignal() {
          this._autoFinishAllowed ||
            (a.X &&
              r.kg.log(
                "[Tracing] Received finish signal for idle transaction."
              ),
            this._restartIdleTimeout(),
            (this._autoFinishAllowed = !0));
        }
        _restartIdleTimeout(t) {
          this.cancelIdleTimeout(),
            (this._idleTimeoutID = setTimeout(() => {
              this._finished ||
                0 !== Object.keys(this.activities).length ||
                ((this._finishReason = "idleTimeout"), this.end(t));
            }, this._idleTimeout));
        }
        _pushActivity(t) {
          this.cancelIdleTimeout(void 0, {
            restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
          }),
            a.X && r.kg.log(`[Tracing] pushActivity: ${t}`),
            (this.activities[t] = !0),
            a.X &&
              r.kg.log(
                "[Tracing] new activities count",
                Object.keys(this.activities).length
              );
        }
        _popActivity(t) {
          if (
            (this.activities[t] &&
              (a.X && r.kg.log(`[Tracing] popActivity ${t}`),
              delete this.activities[t],
              a.X &&
                r.kg.log(
                  "[Tracing] new activities count",
                  Object.keys(this.activities).length
                )),
            0 === Object.keys(this.activities).length)
          ) {
            let t = (0, i.ph)();
            this._idleTimeoutCanceledPermanently
              ? this._autoFinishAllowed &&
                ((this._finishReason = "cancelled"), this.end(t))
              : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
          }
        }
        _beat() {
          if (this._finished) return;
          let t = Object.keys(this.activities).join("");
          t === this._prevHeartbeatString
            ? this._heartbeatCounter++
            : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = t),
            this._heartbeatCounter >= 3
              ? this._autoFinishAllowed &&
                (a.X &&
                  r.kg.log(
                    "[Tracing] Transaction finished because of no change for 3 heart beats"
                  ),
                this.setStatus("deadline_exceeded"),
                (this._finishReason = "heartbeatFailed"),
                this.end())
              : this._pingHeartbeat();
        }
        _pingHeartbeat() {
          a.X &&
            r.kg.log(
              `pinging Heartbeat -> current counter: ${this._heartbeatCounter}`
            ),
            setTimeout(() => {
              this._beat();
            }, this._heartbeatInterval);
        }
      };
    },
    90710: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return Span;
        },
        g: function () {
          return SpanRecorder;
        },
      });
      var r = n(85229),
        i = n(82300),
        a = n(70716),
        s = n(89669),
        o = n(82959),
        c = n(48638),
        u = n(70210),
        l = n(15116),
        d = n(72010),
        p = n(73206);
      let SpanRecorder = class SpanRecorder {
        constructor(t = 1e3) {
          (this._maxlen = t), (this.spans = []);
        }
        add(t) {
          this.spans.length > this._maxlen
            ? (t.spanRecorder = void 0)
            : this.spans.push(t);
        }
      };
      let Span = class Span {
        constructor(t = {}) {
          (this._traceId = t.traceId || (0, r.DM)()),
            (this._spanId = t.spanId || (0, r.DM)().substring(16)),
            (this._startTime = t.startTimestamp || (0, i.ph)()),
            (this.tags = t.tags ? { ...t.tags } : {}),
            (this.data = t.data ? { ...t.data } : {}),
            (this.instrumenter = t.instrumenter || "sentry"),
            (this._attributes = {}),
            this.setAttributes({
              [u.S3]: t.origin || "manual",
              [u.$J]: t.op,
              ...t.attributes,
            }),
            (this._name = t.name || t.description),
            t.parentSpanId && (this._parentSpanId = t.parentSpanId),
            "sampled" in t && (this._sampled = t.sampled),
            t.status && (this._status = t.status),
            t.endTimestamp && (this._endTime = t.endTimestamp);
        }
        get name() {
          return this._name || "";
        }
        set name(t) {
          this.updateName(t);
        }
        get description() {
          return this._name;
        }
        set description(t) {
          this._name = t;
        }
        get traceId() {
          return this._traceId;
        }
        set traceId(t) {
          this._traceId = t;
        }
        get spanId() {
          return this._spanId;
        }
        set spanId(t) {
          this._spanId = t;
        }
        set parentSpanId(t) {
          this._parentSpanId = t;
        }
        get parentSpanId() {
          return this._parentSpanId;
        }
        get sampled() {
          return this._sampled;
        }
        set sampled(t) {
          this._sampled = t;
        }
        get attributes() {
          return this._attributes;
        }
        set attributes(t) {
          this._attributes = t;
        }
        get startTimestamp() {
          return this._startTime;
        }
        set startTimestamp(t) {
          this._startTime = t;
        }
        get endTimestamp() {
          return this._endTime;
        }
        set endTimestamp(t) {
          this._endTime = t;
        }
        get status() {
          return this._status;
        }
        set status(t) {
          this._status = t;
        }
        get op() {
          return this._attributes[u.$J];
        }
        set op(t) {
          this.setAttribute(u.$J, t);
        }
        get origin() {
          return this._attributes[u.S3];
        }
        set origin(t) {
          this.setAttribute(u.S3, t);
        }
        spanContext() {
          let { _spanId: t, _traceId: e, _sampled: n } = this;
          return { spanId: t, traceId: e, traceFlags: n ? d.i0 : d.ve };
        }
        startChild(t) {
          let e = new Span({
            ...t,
            parentSpanId: this._spanId,
            sampled: this._sampled,
            traceId: this._traceId,
          });
          (e.spanRecorder = this.spanRecorder),
            e.spanRecorder && e.spanRecorder.add(e);
          let n = (0, l.G)(this);
          if (((e.transaction = n), o.X && n)) {
            let r = (t && t.op) || "< unknown op >",
              i = (0, d.XU)(e).description || "< unknown name >",
              s = n.spanContext().spanId,
              o = `[Tracing] Starting '${r}' span on transaction '${i}' (${s}).`;
            a.kg.log(o), (this._logMessage = o);
          }
          return e;
        }
        setTag(t, e) {
          return (this.tags = { ...this.tags, [t]: e }), this;
        }
        setData(t, e) {
          return (this.data = { ...this.data, [t]: e }), this;
        }
        setAttribute(t, e) {
          void 0 === e ? delete this._attributes[t] : (this._attributes[t] = e);
        }
        setAttributes(t) {
          Object.keys(t).forEach((e) => this.setAttribute(e, t[e]));
        }
        setStatus(t) {
          return (this._status = t), this;
        }
        setHttpStatus(t) {
          return (0, p.Q0)(this, t), this;
        }
        setName(t) {
          this.updateName(t);
        }
        updateName(t) {
          return (this._name = t), this;
        }
        isSuccess() {
          return "ok" === this._status;
        }
        finish(t) {
          return this.end(t);
        }
        end(t) {
          if (this._endTime) return;
          let e = (0, l.G)(this);
          if (o.X && e && e.spanContext().spanId !== this._spanId) {
            let t = this._logMessage;
            t && a.kg.log(t.replace("Starting", "Finishing"));
          }
          this._endTime = (0, d.$k)(t);
        }
        toTraceparent() {
          return (0, d.Hb)(this);
        }
        toContext() {
          return (0, s.Jr)({
            data: this._getData(),
            description: this._name,
            endTimestamp: this._endTime,
            op: this.op,
            parentSpanId: this._parentSpanId,
            sampled: this._sampled,
            spanId: this._spanId,
            startTimestamp: this._startTime,
            status: this._status,
            tags: this.tags,
            traceId: this._traceId,
          });
        }
        updateWithContext(t) {
          return (
            (this.data = t.data || {}),
            (this._name = t.name || t.description),
            (this._endTime = t.endTimestamp),
            (this.op = t.op),
            (this._parentSpanId = t.parentSpanId),
            (this._sampled = t.sampled),
            (this._spanId = t.spanId || this._spanId),
            (this._startTime = t.startTimestamp || this._startTime),
            (this._status = t.status),
            (this.tags = t.tags || {}),
            (this._traceId = t.traceId || this._traceId),
            this
          );
        }
        getTraceContext() {
          return (0, d.wy)(this);
        }
        getSpanJSON() {
          return (0, s.Jr)({
            data: this._getData(),
            description: this._name,
            op: this._attributes[u.$J],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: this._status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[u.S3],
            _metrics_summary: (0, c.y)(this),
          });
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        toJSON() {
          return this.getSpanJSON();
        }
        _getData() {
          let { data: t, _attributes: e } = this,
            n = Object.keys(t).length > 0,
            r = Object.keys(e).length > 0;
          return n || r ? (n && r ? { ...t, ...e } : n ? t : e) : void 0;
        }
      };
    },
    73206: function (t, e, n) {
      "use strict";
      var r, i;
      function setHttpStatus(t, e) {
        t.setTag("http.status_code", String(e)),
          t.setData("http.response.status_code", e);
        let n = (function (t) {
          if (t < 400 && t >= 100) return "ok";
          if (t >= 400 && t < 500)
            switch (t) {
              case 401:
                return "unauthenticated";
              case 403:
                return "permission_denied";
              case 404:
                return "not_found";
              case 409:
                return "already_exists";
              case 413:
                return "failed_precondition";
              case 429:
                return "resource_exhausted";
              default:
                return "invalid_argument";
            }
          if (t >= 500 && t < 600)
            switch (t) {
              case 501:
                return "unimplemented";
              case 503:
                return "unavailable";
              case 504:
                return "deadline_exceeded";
              default:
                return "internal_error";
            }
          return "unknown_error";
        })(e);
        "unknown_error" !== n && t.setStatus(n);
      }
      n.d(e, {
        Q0: function () {
          return setHttpStatus;
        },
      }),
        ((i = r || (r = {})).Ok = "ok"),
        (i.DeadlineExceeded = "deadline_exceeded"),
        (i.Unauthenticated = "unauthenticated"),
        (i.PermissionDenied = "permission_denied"),
        (i.NotFound = "not_found"),
        (i.ResourceExhausted = "resource_exhausted"),
        (i.InvalidArgument = "invalid_argument"),
        (i.Unimplemented = "unimplemented"),
        (i.Unavailable = "unavailable"),
        (i.InternalError = "internal_error"),
        (i.UnknownError = "unknown_error"),
        (i.Cancelled = "cancelled"),
        (i.AlreadyExists = "already_exists"),
        (i.FailedPrecondition = "failed_precondition"),
        (i.Aborted = "aborted"),
        (i.OutOfRange = "out_of_range"),
        (i.DataLoss = "data_loss");
    },
    11008: function (t, e, n) {
      "use strict";
      n.d(e, {
        HN: function () {
          return getActiveSpan;
        },
        I1: function () {
          return getCapturedScopesOnSpan;
        },
        qp: function () {
          return startInactiveSpan;
        },
      });
      var r = n(89669),
        i = n(21),
        a = n(27553),
        s = n(49142),
        o = n(72010);
      function startInactiveSpan(t) {
        var e;
        let n;
        if (!(0, s.z)()) return;
        let l = (function (t) {
            if (t.startTime) {
              let e = { ...t };
              return (
                (e.startTimestamp = (0, o.$k)(t.startTime)),
                delete e.startTime,
                e
              );
            }
            return t;
          })(t),
          d = (0, a.Gd)(),
          p = t.scope ? t.scope.getSpan() : getActiveSpan(),
          g = t.onlyIfParent && !p;
        if (g) return;
        let h = (0, a.aF)(),
          f = (0, i.nZ)();
        if (p) n = p.startChild(l);
        else {
          let {
            traceId: t,
            dsc: e,
            parentSpanId: r,
            sampled: i,
          } = { ...h.getPropagationContext(), ...f.getPropagationContext() };
          n = d.startTransaction({
            traceId: t,
            parentSpanId: r,
            parentSampled: i,
            ...l,
            metadata: { dynamicSamplingContext: e, ...l.metadata },
          });
        }
        return (e = n) && ((0, r.xp)(e, u, h), (0, r.xp)(e, c, f)), n;
      }
      function getActiveSpan() {
        return (0, i.nZ)().getSpan();
      }
      let c = "_sentryScope",
        u = "_sentryIsolationScope";
      function getCapturedScopesOnSpan(t) {
        return { scope: t[c], isolationScope: t[u] };
      }
    },
    22990: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return Transaction;
        },
      });
      var r = n(89669),
        i = n(70716),
        a = n(82959),
        s = n(27553),
        o = n(48638),
        c = n(70210),
        u = n(72010),
        l = n(88101),
        d = n(90710),
        p = n(11008);
      let Transaction = class Transaction extends d.D {
        constructor(t, e) {
          super(t),
            (this._measurements = {}),
            (this._contexts = {}),
            (this._hub = e || (0, s.Gd)()),
            (this._name = t.name || ""),
            (this._metadata = { ...t.metadata }),
            (this._trimEnd = t.trimEnd),
            (this.transaction = this);
          let n = this._metadata.dynamicSamplingContext;
          n && (this._frozenDynamicSamplingContext = { ...n });
        }
        get name() {
          return this._name;
        }
        set name(t) {
          this.setName(t);
        }
        get metadata() {
          return {
            source: "custom",
            spanMetadata: {},
            ...this._metadata,
            ...(this._attributes[c.Zj] && { source: this._attributes[c.Zj] }),
            ...(this._attributes[c.TE] && {
              sampleRate: this._attributes[c.TE],
            }),
          };
        }
        set metadata(t) {
          this._metadata = t;
        }
        setName(t, e = "custom") {
          (this._name = t), this.setAttribute(c.Zj, e);
        }
        updateName(t) {
          return (this._name = t), this;
        }
        initSpanRecorder(t = 1e3) {
          this.spanRecorder || (this.spanRecorder = new d.g(t)),
            this.spanRecorder.add(this);
        }
        setContext(t, e) {
          null === e ? delete this._contexts[t] : (this._contexts[t] = e);
        }
        setMeasurement(t, e, n = "") {
          this._measurements[t] = { value: e, unit: n };
        }
        setMetadata(t) {
          this._metadata = { ...this._metadata, ...t };
        }
        end(t) {
          let e = (0, u.$k)(t),
            n = this._finishTransaction(e);
          if (n) return this._hub.captureEvent(n);
        }
        toContext() {
          let t = super.toContext();
          return (0, r.Jr)({ ...t, name: this._name, trimEnd: this._trimEnd });
        }
        updateWithContext(t) {
          return (
            super.updateWithContext(t),
            (this._name = t.name || ""),
            (this._trimEnd = t.trimEnd),
            this
          );
        }
        getDynamicSamplingContext() {
          return (0, l.j)(this);
        }
        setHub(t) {
          this._hub = t;
        }
        _finishTransaction(t) {
          if (void 0 !== this._endTime) return;
          this._name ||
            (a.X &&
              i.kg.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`."
              ),
            (this._name = "<unlabeled transaction>")),
            super.end(t);
          let e = this._hub.getClient();
          if (
            (e && e.emit && e.emit("finishTransaction", this),
            !0 !== this._sampled)
          ) {
            a.X &&
              i.kg.log(
                "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
              ),
              e && e.recordDroppedEvent("sample_rate", "transaction");
            return;
          }
          let n = this.spanRecorder
            ? this.spanRecorder.spans.filter(
                (t) => t !== this && (0, u.XU)(t).timestamp
              )
            : [];
          if (this._trimEnd && n.length > 0) {
            let t = n.map((t) => (0, u.XU)(t).timestamp).filter(Boolean);
            this._endTime = t.reduce((t, e) => (t > e ? t : e));
          }
          let { scope: r, isolationScope: s } = (0, p.I1)(this),
            { metadata: c } = this,
            { source: d } = c,
            g = {
              contexts: { ...this._contexts, trace: (0, u.wy)(this) },
              spans: n,
              start_timestamp: this._startTime,
              tags: this.tags,
              timestamp: this._endTime,
              transaction: this._name,
              type: "transaction",
              sdkProcessingMetadata: {
                ...c,
                capturedSpanScope: r,
                capturedSpanIsolationScope: s,
                dynamicSamplingContext: (0, l.j)(this),
              },
              _metrics_summary: (0, o.y)(this),
              ...(d && { transaction_info: { source: d } }),
            },
            h = Object.keys(this._measurements).length > 0;
          return (
            h &&
              (a.X &&
                i.kg.log(
                  "[Measurements] Adding measurements to transaction",
                  JSON.stringify(this._measurements, void 0, 2)
                ),
              (g.measurements = this._measurements)),
            a.X &&
              i.kg.log(
                `[Tracing] Finishing ${this.op} transaction: ${this._name}.`
              ),
            g
          );
        }
      };
    },
    85814: function (t, e, n) {
      "use strict";
      n.d(e, {
        x1: function () {
          return getActiveTransaction;
        },
      });
      var r = n(27553);
      function getActiveTransaction(t) {
        let e = t || (0, r.Gd)(),
          n = e.getScope();
        return n.getTransaction();
      }
    },
    59389: function (t, e, n) {
      "use strict";
      n.d(e, {
        gi: function () {
          return applyScopeDataToEvent;
        },
        yo: function () {
          return mergeScopeData;
        },
      });
      var r = n(89669),
        i = n(85229),
        a = n(88101),
        s = n(15116),
        o = n(72010);
      function applyScopeDataToEvent(t, e) {
        let {
          fingerprint: n,
          span: c,
          breadcrumbs: u,
          sdkProcessingMetadata: l,
        } = e;
        (function (t, e) {
          let {
              extra: n,
              tags: i,
              user: a,
              contexts: s,
              level: o,
              transactionName: c,
            } = e,
            u = (0, r.Jr)(n);
          u && Object.keys(u).length && (t.extra = { ...u, ...t.extra });
          let l = (0, r.Jr)(i);
          l && Object.keys(l).length && (t.tags = { ...l, ...t.tags });
          let d = (0, r.Jr)(a);
          d && Object.keys(d).length && (t.user = { ...d, ...t.user });
          let p = (0, r.Jr)(s);
          p && Object.keys(p).length && (t.contexts = { ...p, ...t.contexts }),
            o && (t.level = o),
            c && (t.transaction = c);
        })(t, e),
          c &&
            (function (t, e) {
              t.contexts = { trace: (0, o.wy)(e), ...t.contexts };
              let n = (0, s.G)(e);
              if (n) {
                t.sdkProcessingMetadata = {
                  dynamicSamplingContext: (0, a.j)(e),
                  ...t.sdkProcessingMetadata,
                };
                let r = (0, o.XU)(n).description;
                r && (t.tags = { transaction: r, ...t.tags });
              }
            })(t, c),
          (t.fingerprint = t.fingerprint ? (0, i.lE)(t.fingerprint) : []),
          n && (t.fingerprint = t.fingerprint.concat(n)),
          t.fingerprint && !t.fingerprint.length && delete t.fingerprint,
          (function (t, e) {
            let n = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = n.length ? n : void 0;
          })(t, u),
          (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...l });
      }
      function mergeScopeData(t, e) {
        let {
          extra: n,
          tags: r,
          user: i,
          contexts: a,
          level: s,
          sdkProcessingMetadata: o,
          breadcrumbs: c,
          fingerprint: u,
          eventProcessors: l,
          attachments: d,
          propagationContext: p,
          transactionName: g,
          span: h,
        } = e;
        mergeAndOverwriteScopeData(t, "extra", n),
          mergeAndOverwriteScopeData(t, "tags", r),
          mergeAndOverwriteScopeData(t, "user", i),
          mergeAndOverwriteScopeData(t, "contexts", a),
          mergeAndOverwriteScopeData(t, "sdkProcessingMetadata", o),
          s && (t.level = s),
          g && (t.transactionName = g),
          h && (t.span = h),
          c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
          u.length && (t.fingerprint = [...t.fingerprint, ...u]),
          l.length && (t.eventProcessors = [...t.eventProcessors, ...l]),
          d.length && (t.attachments = [...t.attachments, ...d]),
          (t.propagationContext = { ...t.propagationContext, ...p });
      }
      function mergeAndOverwriteScopeData(t, e, n) {
        if (n && Object.keys(n).length)
          for (let r in ((t[e] = { ...t[e] }), n))
            Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r]);
      }
    },
    15116: function (t, e, n) {
      "use strict";
      function getRootSpan(t) {
        return t.transaction;
      }
      n.d(e, {
        G: function () {
          return getRootSpan;
        },
      });
    },
    49142: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return hasTracingEnabled;
        },
      });
      var r = n(21);
      function hasTracingEnabled(t) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
          return !1;
        let e = (0, r.s3)(),
          n = t || (e && e.getOptions());
        return (
          !!n &&
          (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        );
      }
    },
    65785: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return prepareEvent;
        },
        U0: function () {
          return parseEventHintOrCaptureContext;
        },
      });
      var r = n(85229),
        i = n(82300),
        a = n(92674),
        s = n(40932),
        o = n(82327),
        c = n(40093),
        u = n(43073),
        l = n(53818),
        d = n(59389),
        p = n(72010);
      function prepareEvent(t, e, n, h, f, m) {
        let { normalizeDepth: _ = 3, normalizeMaxBreadth: v = 1e3 } = t,
          y = {
            ...e,
            event_id: e.event_id || n.event_id || (0, r.DM)(),
            timestamp: e.timestamp || (0, i.yW)(),
          },
          S = n.integrations || t.integrations.map((t) => t.name);
        (function (t, e) {
          let {
            environment: n,
            release: r,
            dist: i,
            maxValueLength: s = 250,
          } = e;
          "environment" in t || (t.environment = "environment" in e ? n : c.J),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== i && (t.dist = i),
            t.message && (t.message = (0, a.$G)(t.message, s));
          let o = t.exception && t.exception.values && t.exception.values[0];
          o && o.value && (o.value = (0, a.$G)(o.value, s));
          let u = t.request;
          u && u.url && (u.url = (0, a.$G)(u.url, s));
        })(y, t),
          S.length > 0 &&
            ((y.sdk = y.sdk || {}),
            (y.sdk.integrations = [...(y.sdk.integrations || []), ...S])),
          void 0 === e.type &&
            (function (t, e) {
              let n;
              let r = s.GLOBAL_OBJ._sentryDebugIds;
              if (!r) return;
              let i = g.get(e);
              i ? (n = i) : ((n = new Map()), g.set(e, n));
              let a = Object.keys(r).reduce((t, i) => {
                let a;
                let s = n.get(i);
                s ? (a = s) : ((a = e(i)), n.set(i, a));
                for (let e = a.length - 1; e >= 0; e--) {
                  let n = a[e];
                  if (n.filename) {
                    t[n.filename] = r[i];
                    break;
                  }
                }
                return t;
              }, {});
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    t.filename && (t.debug_id = a[t.filename]);
                  });
                });
              } catch (t) {}
            })(y, t.stackParser);
        let b = (function (t, e) {
          if (!e) return t;
          let n = t ? t.clone() : new l.sX();
          return n.update(e), n;
        })(h, n.captureContext);
        n.mechanism && (0, r.EG)(y, n.mechanism);
        let T = f && f.getEventProcessors ? f.getEventProcessors() : [],
          E = (0, l.lW)().getScopeData();
        if (m) {
          let t = m.getScopeData();
          (0, d.yo)(E, t);
        }
        if (b) {
          let t = b.getScopeData();
          (0, d.yo)(E, t);
        }
        let k = [...(n.attachments || []), ...E.attachments];
        k.length && (n.attachments = k), (0, d.gi)(y, E);
        let x = [...T, ...(0, u.fH)(), ...E.eventProcessors],
          I = (0, u.RP)(x, y, n);
        return I.then((t) =>
          (t &&
            (function (t) {
              let e = {};
              try {
                t.exception.values.forEach((t) => {
                  t.stacktrace.frames.forEach((t) => {
                    t.debug_id &&
                      (t.abs_path
                        ? (e[t.abs_path] = t.debug_id)
                        : t.filename && (e[t.filename] = t.debug_id),
                      delete t.debug_id);
                  });
                });
              } catch (t) {}
              if (0 === Object.keys(e).length) return;
              (t.debug_meta = t.debug_meta || {}),
                (t.debug_meta.images = t.debug_meta.images || []);
              let n = t.debug_meta.images;
              Object.keys(e).forEach((t) => {
                n.push({ type: "sourcemap", code_file: t, debug_id: e[t] });
              });
            })(t),
          "number" == typeof _ && _ > 0)
            ? (function (t, e, n) {
                if (!t) return null;
                let r = {
                  ...t,
                  ...(t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map((t) => ({
                      ...t,
                      ...(t.data && { data: (0, o.Fv)(t.data, e, n) }),
                    })),
                  }),
                  ...(t.user && { user: (0, o.Fv)(t.user, e, n) }),
                  ...(t.contexts && { contexts: (0, o.Fv)(t.contexts, e, n) }),
                  ...(t.extra && { extra: (0, o.Fv)(t.extra, e, n) }),
                };
                return (
                  t.contexts &&
                    t.contexts.trace &&
                    r.contexts &&
                    ((r.contexts.trace = t.contexts.trace),
                    t.contexts.trace.data &&
                      (r.contexts.trace.data = (0, o.Fv)(
                        t.contexts.trace.data,
                        e,
                        n
                      ))),
                  t.spans &&
                    (r.spans = t.spans.map((t) => {
                      let r = (0, p.XU)(t).data;
                      return r && (t.data = (0, o.Fv)(r, e, n)), t;
                    })),
                  r
                );
              })(t, _, v)
            : t
        );
      }
      let g = new WeakMap();
      function parseEventHintOrCaptureContext(t) {
        return t
          ? t instanceof l.sX ||
            "function" == typeof t ||
            Object.keys(t).some((t) => h.includes(t))
            ? { captureContext: t }
            : t
          : void 0;
      }
      let h = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
    },
    9983: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return applySdkMetadata;
        },
      });
      var r = n(57004);
      function applySdkMetadata(t, e, n = [e], i = "npm") {
        let a = t._metadata || {};
        a.sdk ||
          (a.sdk = {
            name: `sentry.javascript.${e}`,
            packages: n.map((t) => ({
              name: `${i}:@sentry/${t}`,
              version: r.J,
            })),
            version: r.J,
          }),
          (t._metadata = a);
      }
    },
    72010: function (t, e, n) {
      "use strict";
      n.d(e, {
        $k: function () {
          return spanTimeInputToSeconds;
        },
        Hb: function () {
          return spanToTraceHeader;
        },
        Tt: function () {
          return spanIsSampled;
        },
        XU: function () {
          return spanToJSON;
        },
        i0: function () {
          return o;
        },
        ve: function () {
          return s;
        },
        wy: function () {
          return spanToTraceContext;
        },
      });
      var r = n(89669),
        i = n(6509),
        a = n(82300);
      let s = 0,
        o = 1;
      function spanToTraceContext(t) {
        let { spanId: e, traceId: n } = t.spanContext(),
          {
            data: i,
            op: a,
            parent_span_id: s,
            status: o,
            tags: c,
            origin: u,
          } = spanToJSON(t);
        return (0, r.Jr)({
          data: i,
          op: a,
          parent_span_id: s,
          span_id: e,
          status: o,
          tags: c,
          trace_id: n,
          origin: u,
        });
      }
      function spanToTraceHeader(t) {
        let { traceId: e, spanId: n } = t.spanContext(),
          r = spanIsSampled(t);
        return (0, i.$p)(e, n, r);
      }
      function spanTimeInputToSeconds(t) {
        return "number" == typeof t
          ? ensureTimestampInSeconds(t)
          : Array.isArray(t)
          ? t[0] + t[1] / 1e9
          : t instanceof Date
          ? ensureTimestampInSeconds(t.getTime())
          : (0, a.ph)();
      }
      function ensureTimestampInSeconds(t) {
        return t > 9999999999 ? t / 1e3 : t;
      }
      function spanToJSON(t) {
        return "function" == typeof t.getSpanJSON
          ? t.getSpanJSON()
          : "function" == typeof t.toJSON
          ? t.toJSON()
          : {};
      }
      function spanIsSampled(t) {
        let { traceFlags: e } = t.spanContext();
        return !!(e & o);
      }
    },
    57004: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return r;
        },
      });
      let r = "7.101.1";
    },
    37763: function (t, e, n) {
      "use strict";
      let r, i;
      n.d(e, {
        S1: function () {
          return client_init;
        },
      });
      var a = {};
      n.r(a),
        n.d(a, {
          FunctionToString: function () {
            return u.c;
          },
          InboundFilters: function () {
            return l.Q;
          },
          LinkedErrors: function () {
            return f;
          },
        });
      var s = {};
      n.r(s),
        n.d(s, {
          Breadcrumbs: function () {
            return y.O;
          },
          Dedupe: function () {
            return T.I;
          },
          GlobalHandlers: function () {
            return _.d;
          },
          HttpContext: function () {
            return b.q;
          },
          LinkedErrors: function () {
            return S.i;
          },
          TryCatch: function () {
            return v.p;
          },
        });
      var o = n(9983),
        c = n(49142),
        u = n(88656),
        l = n(85989),
        d = n(54464);
      function exceptionFromError(t, e) {
        let n = { type: e.name || e.constructor.name, value: e.message },
          r = t(e.stack || "", 1);
        return r.length && (n.stacktrace = { frames: r }), n;
      }
      var p = n(28280);
      let g = "LinkedErrors",
        h = (0, p._I)((t = {}) => {
          let e = t.limit || 5,
            n = t.key || "cause";
          return {
            name: g,
            setupOnce() {},
            preprocessEvent(t, r, i) {
              let a = i.getOptions();
              (0, d.Z)(
                exceptionFromError,
                a.stackParser,
                a.maxValueLength,
                n,
                e,
                t,
                r
              );
            },
          };
        }),
        f = (0, p.RN)(g, h);
      var m = n(10536),
        _ = n(35191),
        v = n(80696),
        y = n(44343),
        S = n(90668),
        b = n(93048),
        T = n(83982);
      let E = {};
      m.m9.Sentry && m.m9.Sentry.Integrations && (E = m.m9.Sentry.Integrations);
      let k = { ...E, ...a, ...s };
      var x = n(38934),
        I = n(21),
        O = n(25566);
      function _optionalChain(t) {
        let e;
        let n = t[0],
          r = 1;
        for (; r < t.length; ) {
          let i = t[r],
            a = t[r + 1];
          if (
            ((r += 2),
            ("optionalAccess" === i || "optionalCall" === i) && null == n)
          )
            return;
          "access" === i || "optionalAccess" === i
            ? ((e = n), (n = a(n)))
            : ("call" === i || "optionalCall" === i) &&
              ((n = a((...t) => n.call(e, ...t))), (e = void 0));
        }
        return n;
      }
      var w = n(73048),
        C = n(1729),
        D = n(81844),
        R = n(17793),
        P = n(27553),
        $ = n(72010),
        N = n(70210),
        A = n(11008),
        L = n(85814),
        F = n(6509),
        H = n(70716),
        j = n(82300),
        M = n(14785),
        X = n(89284),
        W = n(35622),
        U = n(66499),
        B = n(80723),
        G = n(41314);
      let J = {
          ...D.AT,
          instrumentNavigation: !0,
          instrumentPageLoad: !0,
          markBackgroundSpan: !0,
          enableLongTask: !0,
          _experiments: {},
          ...C.k3,
        },
        browserTracingIntegration = (t = {}) => {
          let e, n;
          let r = !!W.X && !!(t.tracePropagationTargets || t.tracingOrigins);
          (0, R.T)(),
            !t.tracePropagationTargets &&
              t.tracingOrigins &&
              (t.tracePropagationTargets = t.tracingOrigins);
          let i = { ...J, ...t },
            a = (0, B.PR)();
          function _createRouteTransaction(t) {
            let r;
            let s = (0, P.Gd)(),
              {
                beforeStartSpan: o,
                idleTimeout: c,
                finalTimeout: u,
                heartbeatInterval: l,
              } = i,
              d = "pageload" === t.op;
            if (d) {
              let e = d ? getMetaContent("sentry-trace") : "",
                n = d ? getMetaContent("baggage") : void 0,
                {
                  traceId: i,
                  dsc: a,
                  parentSpanId: s,
                  sampled: o,
                } = (0, F.pT)(e, n);
              r = {
                traceId: i,
                parentSpanId: s,
                parentSampled: o,
                ...t,
                metadata: { ...t.metadata, dynamicSamplingContext: a },
                trimEnd: !0,
              };
            } else r = { trimEnd: !0, ...t };
            let p = o ? o(r) : r;
            (p.metadata =
              p.name !== r.name
                ? { ...p.metadata, source: "custom" }
                : p.metadata),
              (e = p.name),
              (n = (function (t) {
                let e = t.attributes && t.attributes[N.Zj],
                  n = t.data && t.data[N.Zj],
                  r = t.metadata && t.metadata.source;
                return e || n || r;
              })(p)),
              !1 === p.sampled &&
                W.X &&
                H.kg.log(
                  `[Tracing] Will not send ${p.op} transaction because of beforeNavigate.`
                ),
              W.X &&
                H.kg.log(`[Tracing] Starting ${p.op} transaction on scope`);
            let { location: g } = G.WINDOW,
              h = (0, R.l)(s, p, c, u, !0, { location: g }, l, d);
            return (
              d &&
                (G.WINDOW.document.addEventListener("readystatechange", () => {
                  ["interactive", "complete"].includes(
                    G.WINDOW.document.readyState
                  ) && h.sendAutoFinishSignal();
                }),
                ["interactive", "complete"].includes(
                  G.WINDOW.document.readyState
                ) && h.sendAutoFinishSignal()),
              h.registerBeforeFinishCallback((t) => {
                a(), (0, B.f7)(t);
              }),
              h
            );
          }
          return (
            i.enableLongTask && (0, B.Fv)(),
            i._experiments.enableInteractions && (0, B.sn)(),
            {
              name: "BrowserTracing",
              setupOnce: () => {},
              afterAllSetup(t) {
                let a;
                let s = t.getOptions(),
                  {
                    markBackgroundSpan: o,
                    traceFetch: c,
                    traceXHR: u,
                    shouldCreateSpanForRequest: l,
                    enableHTTPTimings: d,
                    _experiments: p,
                  } = i,
                  g = s && s.tracePropagationTargets,
                  h = g || i.tracePropagationTargets;
                W.X &&
                  r &&
                  g &&
                  H.kg.warn(
                    "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
                  );
                let f = G.WINDOW.location.href;
                if (
                  (t.on &&
                    (t.on("startNavigationSpan", (t) => {
                      a &&
                        (W.X &&
                          H.kg.log(
                            `[Tracing] Finishing current transaction with op: ${
                              (0, $.XU)(a).op
                            }`
                          ),
                        a.end()),
                        (a = _createRouteTransaction({
                          op: "navigation",
                          ...t,
                        }));
                    }),
                    t.on("startPageLoadSpan", (t) => {
                      a &&
                        (W.X &&
                          H.kg.log(
                            `[Tracing] Finishing current transaction with op: ${
                              (0, $.XU)(a).op
                            }`
                          ),
                        a.end()),
                        (a = _createRouteTransaction({ op: "pageload", ...t }));
                    })),
                  i.instrumentPageLoad && t.emit)
                ) {
                  let e = {
                    name: G.WINDOW.location.pathname,
                    startTimestamp: j.Z1 ? j.Z1 / 1e3 : void 0,
                    origin: "auto.pageload.browser",
                    attributes: { [N.Zj]: "url" },
                  };
                  startBrowserTracingPageLoadSpan(t, e);
                }
                i.instrumentNavigation &&
                  t.emit &&
                  (0, M.a)(({ to: e, from: n }) => {
                    if (void 0 === n && f && -1 !== f.indexOf(e)) {
                      f = void 0;
                      return;
                    }
                    if (n !== e) {
                      f = void 0;
                      let e = {
                        name: G.WINDOW.location.pathname,
                        origin: "auto.navigation.browser",
                        attributes: { [N.Zj]: "url" },
                      };
                      startBrowserTracingNavigationSpan(t, e);
                    }
                  }),
                  o && (0, U.j)(),
                  p.enableInteractions &&
                    (function (t, e, n) {
                      let r;
                      let registerInteractionTransaction = () => {
                        let {
                            idleTimeout: i,
                            finalTimeout: a,
                            heartbeatInterval: s,
                          } = t,
                          o = "ui.action.click",
                          c = (0, L.x1)();
                        if (
                          c &&
                          c.op &&
                          ["navigation", "pageload"].includes(c.op)
                        ) {
                          W.X &&
                            H.kg.warn(
                              `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
                            );
                          return;
                        }
                        if (
                          (r &&
                            (r.setFinishReason("interactionInterrupted"),
                            r.end(),
                            (r = void 0)),
                          !e)
                        ) {
                          W.X &&
                            H.kg.warn(
                              `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`
                            );
                          return;
                        }
                        let { location: u } = G.WINDOW,
                          l = {
                            name: e,
                            op: o,
                            trimEnd: !0,
                            data: { [N.Zj]: n || "url" },
                          };
                        r = (0, R.l)(
                          (0, P.Gd)(),
                          l,
                          i,
                          a,
                          !0,
                          { location: u },
                          s
                        );
                      };
                      ["click"].forEach((t) => {
                        addEventListener(t, registerInteractionTransaction, {
                          once: !1,
                          capture: !0,
                        });
                      });
                    })(i, e, n),
                  (0, C.L7)({
                    traceFetch: c,
                    traceXHR: u,
                    tracePropagationTargets: h,
                    shouldCreateSpanForRequest: l,
                    enableHTTPTimings: d,
                  });
              },
              options: i,
            }
          );
        };
      function startBrowserTracingPageLoadSpan(t, e) {
        if (!t.emit) return;
        t.emit("startPageLoadSpan", e);
        let n = (0, A.HN)(),
          r = n && (0, $.XU)(n).op;
        return "pageload" === r ? n : void 0;
      }
      function startBrowserTracingNavigationSpan(t, e) {
        if (!t.emit) return;
        t.emit("startNavigationSpan", e);
        let n = (0, A.HN)(),
          r = n && (0, $.XU)(n).op;
        return "navigation" === r ? n : void 0;
      }
      function getMetaContent(t) {
        let e = (0, X.qT)(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0;
      }
      var q = n(95458);
      let z = { "routing.instrumentation": "next-app-router" };
      var V = n(92123),
        Y = n(6543),
        K = n.n(Y);
      let Z = m.m9,
        Q = { "routing.instrumentation": "next-pages-router" },
        tt = (0, I.s3)();
      function nextRouterInstrumentation(t, e = !0, n = !0, a, s) {
        let o = !m.m9.document.getElementById("__NEXT_DATA__");
        o
          ? (function (t, e = !0, n = !0, r, i) {
              let a;
              let s = m.m9.location.pathname;
              if (e) {
                let e = {
                  name: s,
                  op: "pageload",
                  origin: "auto.pageload.nextjs.app_router_instrumentation",
                  tags: z,
                  startTimestamp: j.Z1 ? j.Z1 / 1e3 : void 0,
                  metadata: { source: "url" },
                };
                (a = t(e)), r(e);
              }
              n &&
                (0, q.U)((e) => {
                  if (void 0 !== e.endTimestamp || "GET" !== e.fetchData.method)
                    return;
                  let n = (function (t) {
                    if (
                      !t[0] ||
                      "object" != typeof t[0] ||
                      void 0 === t[0].searchParams ||
                      !t[1] ||
                      "object" != typeof t[1] ||
                      !("headers" in t[1])
                    )
                      return null;
                    try {
                      let e = t[0],
                        n = t[1].headers;
                      if ("1" !== n.RSC || "1" === n["Next-Router-Prefetch"])
                        return null;
                      return { targetPathname: e.pathname };
                    } catch (t) {
                      return null;
                    }
                  })(e.args);
                  if (null === n) return;
                  let r = n.targetPathname,
                    o = { ...z, from: s };
                  (s = r), a && a.end();
                  let c = {
                    name: r,
                    op: "navigation",
                    origin: "auto.navigation.nextjs.app_router_instrumentation",
                    tags: o,
                    metadata: { source: "url" },
                  };
                  t(c), i(c);
                });
            })(t, e, n, a || (() => void 0), s || (() => void 0))
          : (function (t, e = !0, n = !0, a, s) {
              let {
                  route: o,
                  params: c,
                  sentryTrace: u,
                  baggage: l,
                } = (function () {
                  let t;
                  let e = Z.document.getElementById("__NEXT_DATA__");
                  if (e && e.innerHTML)
                    try {
                      t = JSON.parse(e.innerHTML);
                    } catch (t) {}
                  if (!t) return {};
                  let n = {},
                    { page: r, query: i, props: a } = t;
                  return (
                    (n.route = r),
                    (n.params = i),
                    a &&
                      a.pageProps &&
                      ((n.sentryTrace = a.pageProps._sentryTraceData),
                      (n.baggage = a.pageProps._sentryBaggage)),
                    n
                  );
                })(),
                {
                  traceparentData: d,
                  dynamicSamplingContext: p,
                  propagationContext: g,
                } = (0, F.KA)(u, l);
              if (
                ((0, I.nZ)().setPropagationContext(g),
                (i = o || Z.location.pathname),
                e)
              ) {
                let e = {
                  name: i,
                  op: "pageload",
                  origin: "auto.pageload.nextjs.pages_router_instrumentation",
                  tags: Q,
                  startTimestamp: j.Z1 ? j.Z1 / 1e3 : void 0,
                  ...(c && tt && tt.getOptions().sendDefaultPii && { data: c }),
                  ...d,
                  metadata: {
                    source: o ? "route" : "url",
                    dynamicSamplingContext: d && !p ? {} : p,
                  },
                };
                (r = t(e)), a(e);
              }
              n &&
                K().events.on("routeChangeStart", (e) => {
                  let n, a;
                  let o = (0, V.rt)(e),
                    c = (function (t) {
                      let e = (Z.__BUILD_MANIFEST || {}).sortedPages;
                      if (e)
                        return e.find((e) => {
                          let n = (function (t) {
                            let e = t.split("/"),
                              n = "";
                            e[e.length - 1].match(/^\[\[\.\.\..+\]\]$/) &&
                              (e.pop(), (n = "(?:/(.+?))?"));
                            let r = e
                              .map((t) =>
                                t
                                  .replace(/^\[\.\.\..+\]$/, "(.+?)")
                                  .replace(/^\[.*\]$/, "([^/]+?)")
                              )
                              .join("/");
                            return RegExp(`^${r}${n}(?:/)?$`);
                          })(e);
                          return t.match(n);
                        });
                    })(o);
                  c ? ((n = c), (a = "route")) : ((n = o), (a = "url"));
                  let u = { ...Q, from: i };
                  (i = n), r && r.end();
                  let l = {
                      name: n,
                      op: "navigation",
                      origin:
                        "auto.navigation.nextjs.pages_router_instrumentation",
                      tags: u,
                      metadata: { source: a },
                    },
                    d = t(l);
                  if ((s(l), d)) {
                    let t = d.startChild({
                        op: "ui.nextjs.route-change",
                        origin: "auto.ui.nextjs.pages_router_instrumentation",
                        description: "Next.js Route Change",
                      }),
                      finishRouteChangeSpan = () => {
                        t.end(),
                          K().events.off(
                            "routeChangeComplete",
                            finishRouteChangeSpan
                          );
                      };
                    K().events.on("routeChangeComplete", finishRouteChangeSpan);
                  }
                });
            })(t, e, n, a || (() => void 0), s || (() => void 0));
      }
      let BrowserTracing = class BrowserTracing extends w.gE {
        constructor(t) {
          super({
            tracingOrigins: [...C.k3.tracingOrigins, /^(api\/)/],
            routingInstrumentation: nextRouterInstrumentation,
            ...t,
          });
        }
      };
      let te =
        /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
      function resolve(...t) {
        let e = "",
          n = !1;
        for (let r = t.length - 1; r >= -1 && !n; r--) {
          let i = r >= 0 ? t[r] : "/";
          i && ((e = `${i}/${e}`), (n = "/" === i.charAt(0)));
        }
        return (
          (e = (function (t, e) {
            let n = 0;
            for (let e = t.length - 1; e >= 0; e--) {
              let r = t[e];
              "." === r
                ? t.splice(e, 1)
                : ".." === r
                ? (t.splice(e, 1), n++)
                : n && (t.splice(e, 1), n--);
            }
            if (e) for (; n--; n) t.unshift("..");
            return t;
          })(
            e.split("/").filter((t) => !!t),
            !n
          ).join("/")),
          (n ? "/" : "") + e || "."
        );
      }
      function trim(t) {
        let e = 0;
        for (; e < t.length && "" === t[e]; e++);
        let n = t.length - 1;
        for (; n >= 0 && "" === t[n]; n--);
        return e > n ? [] : t.slice(e, n - e + 1);
      }
      let tn = "RewriteFrames",
        tr = (0, p._I)((t = {}) => {
          let e = t.root,
            n = t.prefix || "app:///",
            r =
              t.iteratee ||
              ((t) => {
                if (!t.filename) return t;
                let r =
                    /^[a-zA-Z]:\\/.test(t.filename) ||
                    (t.filename.includes("\\") && !t.filename.includes("/")),
                  i = /^\//.test(t.filename);
                if (r || i) {
                  var a;
                  let i;
                  let s = r
                      ? t.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/")
                      : t.filename,
                    o = e
                      ? (function (t, e) {
                          (t = resolve(t).slice(1)), (e = resolve(e).slice(1));
                          let n = trim(t.split("/")),
                            r = trim(e.split("/")),
                            i = Math.min(n.length, r.length),
                            a = i;
                          for (let t = 0; t < i; t++)
                            if (n[t] !== r[t]) {
                              a = t;
                              break;
                            }
                          let s = [];
                          for (let t = a; t < n.length; t++) s.push("..");
                          return (s = s.concat(r.slice(a))).join("/");
                        })(e, s)
                      : ((i = (function (t) {
                          let e =
                              t.length > 1024
                                ? `<truncated>${t.slice(-1024)}`
                                : t,
                            n = te.exec(e);
                          return n ? n.slice(1) : [];
                        })(s)[2]),
                        a &&
                          i.slice(-1 * a.length) === a &&
                          (i = i.slice(0, i.length - a.length)),
                        i);
                  t.filename = `${n}${o}`;
                }
                return t;
              });
          return {
            name: tn,
            setupOnce() {},
            processEvent(t) {
              let e = t;
              return (
                t.exception &&
                  Array.isArray(t.exception.values) &&
                  (e = (function (t) {
                    try {
                      return {
                        ...t,
                        exception: {
                          ...t.exception,
                          values: t.exception.values.map((t) => {
                            var e;
                            return {
                              ...t,
                              ...(t.stacktrace && {
                                stacktrace: {
                                  ...(e = t.stacktrace),
                                  frames:
                                    e && e.frames && e.frames.map((t) => r(t)),
                                },
                              }),
                            };
                          }),
                        },
                      };
                    } catch (e) {
                      return t;
                    }
                  })(e)),
                e
              );
            },
          };
        });
      (0, p.RN)(tn, tr);
      let ti = n.g,
        ta = (0, p._I)((t) => {
          let e = ti.__rewriteFramesAssetPrefixPath__ || "";
          return tr({
            iteratee: (t) => {
              try {
                let { origin: n } = new URL(t.filename);
                t.filename = _optionalChain([
                  t,
                  "access",
                  (t) => t.filename,
                  "optionalAccess",
                  (t) => t.replace,
                  "call",
                  (t) => t(n, "app://"),
                  "access",
                  (t) => t.replace,
                  "call",
                  (t) => t(e, ""),
                ]);
              } catch (t) {}
              return (
                t.filename &&
                  t.filename.startsWith("app:///_next") &&
                  (t.filename = decodeURI(t.filename)),
                t.filename &&
                  t.filename.match(
                    /^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/
                  ) &&
                  (t.in_app = !1),
                t
              );
            },
            ...t,
          });
        });
      var ts = n(76217);
      let to = n.g;
      function client_init(t) {
        let e = {
          environment:
            (function (t) {
              let e = t ? O.env.NEXT_PUBLIC_VERCEL_ENV : O.env.VERCEL_ENV;
              return e ? `vercel-${e}` : void 0;
            })(!0) || "production",
          defaultIntegrations: (function (t) {
            let e = [...(0, x.nV)(t), ta()];
            return (
              ("undefined" == typeof __SENTRY_TRACING__ ||
                __SENTRY_TRACING__) &&
                (0, c.z)(t) &&
                e.push(
                  (function (t) {
                    let e = browserTracingIntegration({
                      tracingOrigins: [...C.k3.tracingOrigins, /^(api\/)/],
                      ...t,
                      instrumentNavigation: !1,
                      instrumentPageLoad: !1,
                    });
                    return {
                      ...e,
                      afterAllSetup(n) {
                        let startPageloadCallback = (t) => {
                            startBrowserTracingPageLoadSpan(n, t);
                          },
                          startNavigationCallback = (t) => {
                            startBrowserTracingNavigationSpan(n, t);
                          };
                        nextRouterInstrumentation(
                          () => void 0,
                          !1,
                          _optionalChain([
                            t,
                            "optionalAccess",
                            (t) => t.instrumentNavigation,
                          ]),
                          startPageloadCallback,
                          startNavigationCallback
                        ),
                          e.afterAllSetup(n),
                          nextRouterInstrumentation(
                            () => void 0,
                            _optionalChain([
                              t,
                              "optionalAccess",
                              (t) => t.instrumentPageLoad,
                            ]),
                            !1,
                            startPageloadCallback,
                            startNavigationCallback
                          );
                      },
                    };
                  })()
                ),
              e
            );
          })(t),
          ...t,
        };
        (function (t) {
          let { integrations: e } = t;
          e &&
            (Array.isArray(e)
              ? (t.integrations = maybeUpdateBrowserTracingIntegration(e))
              : (t.integrations = (t) => {
                  let n = e(t);
                  return maybeUpdateBrowserTracingIntegration(n);
                }));
        })(e),
          (function (t) {
            let e = to.__sentryRewritesTunnelPath__;
            if (e && t.dsn) {
              let n = (0, ts.U4)(t.dsn);
              if (!n) return;
              let r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
              if (r) {
                let i = r[1],
                  a = `${e}?o=${i}&p=${n.projectId}`;
                t.tunnel = a;
              }
            }
          })(e),
          (0, o.V)(e, "nextjs", ["nextjs", "react"]),
          (function (t) {
            let e = { ...t };
            (0, o.V)(e, "react"), (0, x.S1)(e);
          })(e);
        let n = (0, I.nZ)();
        n.setTag("runtime", "browser");
        let filterTransactions = (t) =>
          "transaction" === t.type && "/404" === t.transaction ? null : t;
        (filterTransactions.id = "NextClient404Filter"),
          n.addEventProcessor(filterTransactions);
      }
      function maybeUpdateBrowserTracingIntegration(t) {
        let e = t.find((t) => "BrowserTracing" === t.name);
        if (!e) return t;
        if (e.afterAllSetup && e.options) {
          let { options: n } = e;
          t[t.indexOf(e)] = new BrowserTracing(n);
        }
        if (!(e instanceof BrowserTracing)) {
          let n = e.options;
          delete n.routingInstrumentation,
            delete n.tracingOrigins,
            (t[t.indexOf(e)] = new BrowserTracing(n));
        }
        return t;
      }
      ({ ...k });
    },
    54464: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return applyAggregateErrorsToEvent;
        },
      });
      var r = n(82361),
        i = n(92674);
      function applyAggregateErrorsToEvent(t, e, n = 250, a, s, o, c) {
        if (
          !o.exception ||
          !o.exception.values ||
          !c ||
          !(0, r.V9)(c.originalException, Error)
        )
          return;
        let u =
          o.exception.values.length > 0
            ? o.exception.values[o.exception.values.length - 1]
            : void 0;
        u &&
          (o.exception.values = (function aggregateExceptionsFromError(
            t,
            e,
            n,
            i,
            a,
            s,
            o,
            c
          ) {
            if (s.length >= n + 1) return s;
            let u = [...s];
            if ((0, r.V9)(i[a], Error)) {
              applyExceptionGroupFieldsForParentException(o, c);
              let r = t(e, i[a]),
                s = u.length;
              applyExceptionGroupFieldsForChildException(r, a, s, c),
                (u = aggregateExceptionsFromError(
                  t,
                  e,
                  n,
                  i[a],
                  a,
                  [r, ...u],
                  r,
                  s
                ));
            }
            return (
              Array.isArray(i.errors) &&
                i.errors.forEach((i, s) => {
                  if ((0, r.V9)(i, Error)) {
                    applyExceptionGroupFieldsForParentException(o, c);
                    let r = t(e, i),
                      l = u.length;
                    applyExceptionGroupFieldsForChildException(
                      r,
                      `errors[${s}]`,
                      l,
                      c
                    ),
                      (u = aggregateExceptionsFromError(
                        t,
                        e,
                        n,
                        i,
                        a,
                        [r, ...u],
                        r,
                        l
                      ));
                  }
                }),
              u
            );
          })(t, e, s, c.originalException, a, o.exception.values, u, 0).map(
            (t) => (t.value && (t.value = (0, i.$G)(t.value, n)), t)
          ));
      }
      function applyExceptionGroupFieldsForParentException(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e,
          });
      }
      function applyExceptionGroupFieldsForChildException(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          });
      }
    },
    19850: function (t, e, n) {
      "use strict";
      n.d(e, {
        EN: function () {
          return baggageHeaderToDynamicSamplingContext;
        },
        IQ: function () {
          return dynamicSamplingContextToSentryBaggageHeader;
        },
        bU: function () {
          return s;
        },
      });
      var r = n(45509),
        i = n(82361),
        a = n(70716);
      let s = "baggage",
        o = "sentry-",
        c = /^sentry-/;
      function baggageHeaderToDynamicSamplingContext(t) {
        if (!(0, i.HD)(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t))
          e = t.reduce((t, e) => {
            let n = baggageHeaderToObject(e);
            for (let e of Object.keys(n)) t[e] = n[e];
            return t;
          }, {});
        else {
          if (!t) return;
          e = baggageHeaderToObject(t);
        }
        let n = Object.entries(e).reduce((t, [e, n]) => {
          if (e.match(c)) {
            let r = e.slice(o.length);
            t[r] = n;
          }
          return t;
        }, {});
        return Object.keys(n).length > 0 ? n : void 0;
      }
      function dynamicSamplingContextToSentryBaggageHeader(t) {
        if (!t) return;
        let e = Object.entries(t).reduce(
          (t, [e, n]) => (n && (t[`${o}${e}`] = n), t),
          {}
        );
        return (function (t) {
          if (0 !== Object.keys(t).length)
            return Object.entries(t).reduce((t, [e, n], i) => {
              let s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                o = 0 === i ? s : `${t},${s}`;
              return o.length > 8192
                ? (r.X &&
                    a.kg.warn(
                      `Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`
                    ),
                  t)
                : o;
            }, "");
        })(e);
      }
      function baggageHeaderToObject(t) {
        return t
          .split(",")
          .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
          .reduce((t, [e, n]) => ((t[e] = n), t), {});
      }
    },
    89284: function (t, e, n) {
      "use strict";
      n.d(e, {
        Rt: function () {
          return htmlTreeAsString;
        },
        iY: function () {
          return getComponentName;
        },
        l4: function () {
          return getLocationHref;
        },
        qT: function () {
          return getDomElement;
        },
      });
      var r = n(82361),
        i = n(40932);
      let a = (0, i.R)();
      function htmlTreeAsString(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n,
            i = t,
            s = [],
            o = 0,
            c = 0,
            u = Array.isArray(e) ? e : e.keyAttrs,
            l = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            i &&
            o++ < 5 &&
            ((n = (function (t, e) {
              let n, i, s, o, c;
              let u = [];
              if (!t || !t.tagName) return "";
              if (
                a.HTMLElement &&
                t instanceof HTMLElement &&
                t.dataset &&
                t.dataset.sentryComponent
              )
                return t.dataset.sentryComponent;
              u.push(t.tagName.toLowerCase());
              let l =
                e && e.length
                  ? e
                      .filter((e) => t.getAttribute(e))
                      .map((e) => [e, t.getAttribute(e)])
                  : null;
              if (l && l.length)
                l.forEach((t) => {
                  u.push(`[${t[0]}="${t[1]}"]`);
                });
              else if (
                (t.id && u.push(`#${t.id}`), (n = t.className) && (0, r.HD)(n))
              )
                for (c = 0, i = n.split(/\s+/); c < i.length; c++)
                  u.push(`.${i[c]}`);
              let d = ["aria-label", "type", "name", "title", "alt"];
              for (c = 0; c < d.length; c++)
                (s = d[c]), (o = t.getAttribute(s)) && u.push(`[${s}="${o}"]`);
              return u.join("");
            })(i, u)),
            "html" !== n && (!(o > 1) || !(c + 3 * s.length + n.length >= l)));

          )
            s.push(n), (c += n.length), (i = i.parentNode);
          return s.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function getLocationHref() {
        try {
          return a.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function getDomElement(t) {
        return a.document && a.document.querySelector
          ? a.document.querySelector(t)
          : null;
      }
      function getComponentName(t) {
        if (!a.HTMLElement) return null;
        let e = t;
        for (let t = 0; t < 5 && e; t++) {
          if (e instanceof HTMLElement && e.dataset.sentryComponent)
            return e.dataset.sentryComponent;
          e = e.parentNode;
        }
        return null;
      }
    },
    45509: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
      });
      let r = !1;
    },
    76217: function (t, e, n) {
      "use strict";
      n.d(e, {
        RA: function () {
          return dsnToString;
        },
        U4: function () {
          return dsnFromString;
        },
        vK: function () {
          return makeDsn;
        },
      });
      var r = n(45509),
        i = n(70716);
      let a = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function dsnToString(t, e = !1) {
        let {
          host: n,
          path: r,
          pass: i,
          port: a,
          projectId: s,
          protocol: o,
          publicKey: c,
        } = t;
        return `${o}://${c}${e && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${
          r ? `${r}/` : r
        }${s}`;
      }
      function dsnFromString(t) {
        let e = a.exec(t);
        if (!e) {
          (0, i.Cf)(() => {
            console.error(`Invalid Sentry Dsn: ${t}`);
          });
          return;
        }
        let [n, r, s = "", o, c = "", u] = e.slice(1),
          l = "",
          d = u,
          p = d.split("/");
        if (
          (p.length > 1 && ((l = p.slice(0, -1).join("/")), (d = p.pop())), d)
        ) {
          let t = d.match(/^\d+/);
          t && (d = t[0]);
        }
        return dsnFromComponents({
          host: o,
          pass: s,
          path: l,
          projectId: d,
          port: c,
          protocol: n,
          publicKey: r,
        });
      }
      function dsnFromComponents(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      function makeDsn(t) {
        let e = "string" == typeof t ? dsnFromString(t) : dsnFromComponents(t);
        if (
          e &&
          (function (t) {
            if (!r.X) return !0;
            let { port: e, projectId: n, protocol: a } = t,
              s = ["protocol", "publicKey", "host", "projectId"].find(
                (e) =>
                  !t[e] && (i.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0)
              );
            return (
              !s &&
              (n.match(/^\d+$/)
                ? "http" === a || "https" === a
                  ? !(e && isNaN(parseInt(e, 10))) ||
                    (i.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
                  : (i.kg.error(`Invalid Sentry Dsn: Invalid protocol ${a}`),
                    !1)
                : (i.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                  !1))
            );
          })(e)
        )
          return e;
      }
    },
    61281: function (t, e, n) {
      "use strict";
      n.d(e, {
        D2: function () {
          return maybeInstrument;
        },
        Hj: function () {
          return addHandler;
        },
        rK: function () {
          return triggerHandlers;
        },
      });
      var r = n(45509),
        i = n(70716),
        a = n(81393);
      let s = {},
        o = {};
      function addHandler(t, e) {
        (s[t] = s[t] || []), s[t].push(e);
      }
      function maybeInstrument(t, e) {
        o[t] || (e(), (o[t] = !0));
      }
      function triggerHandlers(t, e) {
        let n = t && s[t];
        if (n)
          for (let s of n)
            try {
              s(e);
            } catch (e) {
              r.X &&
                i.kg.error(
                  `Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0, a.$P)(s)}
Error:`,
                  e
                );
            }
      }
    },
    95458: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return addFetchInstrumentationHandler;
        },
      });
      var r = n(89669),
        i = n(61496),
        a = n(40932),
        s = n(61281);
      function addFetchInstrumentationHandler(t) {
        let e = "fetch";
        (0, s.Hj)(e, t), (0, s.D2)(e, instrumentFetch);
      }
      function instrumentFetch() {
        (0, i.t$)() &&
          (0, r.hl)(a.GLOBAL_OBJ, "fetch", function (t) {
            return function (...e) {
              let { method: n, url: r } = (function (t) {
                  if (0 === t.length) return { method: "GET", url: "" };
                  if (2 === t.length) {
                    let [e, n] = t;
                    return {
                      url: getUrlFromResource(e),
                      method: hasProp(n, "method")
                        ? String(n.method).toUpperCase()
                        : "GET",
                    };
                  }
                  let e = t[0];
                  return {
                    url: getUrlFromResource(e),
                    method: hasProp(e, "method")
                      ? String(e.method).toUpperCase()
                      : "GET",
                  };
                })(e),
                i = {
                  args: e,
                  fetchData: { method: n, url: r },
                  startTimestamp: Date.now(),
                };
              return (
                (0, s.rK)("fetch", { ...i }),
                t.apply(a.GLOBAL_OBJ, e).then(
                  (t) => {
                    let e = { ...i, endTimestamp: Date.now(), response: t };
                    return (0, s.rK)("fetch", e), t;
                  },
                  (t) => {
                    let e = { ...i, endTimestamp: Date.now(), error: t };
                    throw ((0, s.rK)("fetch", e), t);
                  }
                )
              );
            };
          });
      }
      function hasProp(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function getUrlFromResource(t) {
        return "string" == typeof t
          ? t
          : t
          ? hasProp(t, "url")
            ? t.url
            : t.toString
            ? t.toString()
            : ""
          : "";
      }
    },
    26942: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return addGlobalErrorInstrumentationHandler;
        },
      });
      var r = n(40932),
        i = n(61281);
      let a = null;
      function addGlobalErrorInstrumentationHandler(t) {
        let e = "error";
        (0, i.Hj)(e, t), (0, i.D2)(e, instrumentError);
      }
      function instrumentError() {
        (a = r.GLOBAL_OBJ.onerror),
          (r.GLOBAL_OBJ.onerror = function (t, e, n, r, s) {
            return (
              (0, i.rK)("error", {
                column: r,
                error: s,
                line: n,
                msg: t,
                url: e,
              }),
              !!a && !a.__SENTRY_LOADER__ && a.apply(this, arguments)
            );
          }),
          (r.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0);
      }
    },
    92136: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return addGlobalUnhandledRejectionInstrumentationHandler;
        },
      });
      var r = n(40932),
        i = n(61281);
      let a = null;
      function addGlobalUnhandledRejectionInstrumentationHandler(t) {
        let e = "unhandledrejection";
        (0, i.Hj)(e, t), (0, i.D2)(e, instrumentUnhandledRejection);
      }
      function instrumentUnhandledRejection() {
        (a = r.GLOBAL_OBJ.onunhandledrejection),
          (r.GLOBAL_OBJ.onunhandledrejection = function (t) {
            return (
              (0, i.rK)("unhandledrejection", t),
              !a || !!a.__SENTRY_LOADER__ || a.apply(this, arguments)
            );
          }),
          (r.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
      }
    },
    14785: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        a: function () {
          return addHistoryInstrumentationHandler;
        },
      });
      var i = n(89669),
        a = n(40932);
      let s = (0, a.R)();
      var o = n(61281);
      let c = a.GLOBAL_OBJ;
      function addHistoryInstrumentationHandler(t) {
        let e = "history";
        (0, o.Hj)(e, t), (0, o.D2)(e, instrumentHistory);
      }
      function instrumentHistory() {
        if (
          !(function () {
            let t = s.chrome,
              e = t && t.app && t.app.runtime,
              n =
                "history" in s &&
                !!s.history.pushState &&
                !!s.history.replaceState;
            return !e && n;
          })()
        )
          return;
        let t = c.onpopstate;
        function historyReplacementFunction(t) {
          return function (...e) {
            let n = e.length > 2 ? e[2] : void 0;
            if (n) {
              let t = r,
                e = String(n);
              (r = e), (0, o.rK)("history", { from: t, to: e });
            }
            return t.apply(this, e);
          };
        }
        (c.onpopstate = function (...e) {
          let n = c.location.href,
            i = r;
          if (((r = n), (0, o.rK)("history", { from: i, to: n }), t))
            try {
              return t.apply(this, e);
            } catch (t) {}
        }),
          (0, i.hl)(c.history, "pushState", historyReplacementFunction),
          (0, i.hl)(c.history, "replaceState", historyReplacementFunction);
      }
    },
    28643: function (t, e, n) {
      "use strict";
      n.d(e, {
        UK: function () {
          return addXhrInstrumentationHandler;
        },
        xU: function () {
          return c;
        },
      });
      var r = n(82361),
        i = n(89669),
        a = n(40932),
        s = n(61281);
      let o = a.GLOBAL_OBJ,
        c = "__sentry_xhr_v3__";
      function addXhrInstrumentationHandler(t) {
        (0, s.Hj)("xhr", t), (0, s.D2)("xhr", instrumentXHR);
      }
      function instrumentXHR() {
        if (!o.XMLHttpRequest) return;
        let t = XMLHttpRequest.prototype;
        (0, i.hl)(t, "open", function (t) {
          return function (...e) {
            let n = Date.now(),
              a = (0, r.HD)(e[0]) ? e[0].toUpperCase() : void 0,
              o = (function (t) {
                if ((0, r.HD)(t)) return t;
                try {
                  return t.toString();
                } catch (t) {}
              })(e[1]);
            if (!a || !o) return t.apply(this, e);
            (this[c] = { method: a, url: o, request_headers: {} }),
              "POST" === a &&
                o.match(/sentry_key/) &&
                (this.__sentry_own_request__ = !0);
            let onreadystatechangeHandler = () => {
              let t = this[c];
              if (t && 4 === this.readyState) {
                try {
                  t.status_code = this.status;
                } catch (t) {}
                let e = {
                  args: [a, o],
                  endTimestamp: Date.now(),
                  startTimestamp: n,
                  xhr: this,
                };
                (0, s.rK)("xhr", e);
              }
            };
            return (
              "onreadystatechange" in this &&
              "function" == typeof this.onreadystatechange
                ? (0, i.hl)(this, "onreadystatechange", function (t) {
                    return function (...e) {
                      return onreadystatechangeHandler(), t.apply(this, e);
                    };
                  })
                : this.addEventListener(
                    "readystatechange",
                    onreadystatechangeHandler
                  ),
              (0, i.hl)(this, "setRequestHeader", function (t) {
                return function (...e) {
                  let [n, i] = e,
                    a = this[c];
                  return (
                    a &&
                      (0, r.HD)(n) &&
                      (0, r.HD)(i) &&
                      (a.request_headers[n.toLowerCase()] = i),
                    t.apply(this, e)
                  );
                };
              }),
              t.apply(this, e)
            );
          };
        }),
          (0, i.hl)(t, "send", function (t) {
            return function (...e) {
              let n = this[c];
              if (!n) return t.apply(this, e);
              void 0 !== e[0] && (n.body = e[0]);
              let r = {
                args: [n.method, n.url],
                startTimestamp: Date.now(),
                xhr: this,
              };
              return (0, s.rK)("xhr", r), t.apply(this, e);
            };
          });
      }
    },
    82361: function (t, e, n) {
      "use strict";
      n.d(e, {
        Cy: function () {
          return isSyntheticEvent;
        },
        HD: function () {
          return isString;
        },
        J8: function () {
          return isThenable;
        },
        Kj: function () {
          return isRegExp;
        },
        Le: function () {
          return isParameterizedString;
        },
        PO: function () {
          return isPlainObject;
        },
        TX: function () {
          return isDOMError;
        },
        V9: function () {
          return isInstanceOf;
        },
        VW: function () {
          return isErrorEvent;
        },
        VZ: function () {
          return isError;
        },
        cO: function () {
          return isEvent;
        },
        fm: function () {
          return isDOMException;
        },
        i2: function () {
          return isNaN;
        },
        kK: function () {
          return isElement;
        },
        pt: function () {
          return isPrimitive;
        },
        y1: function () {
          return isVueViewModel;
        },
      });
      let r = Object.prototype.toString;
      function isError(t) {
        switch (r.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return isInstanceOf(t, Error);
        }
      }
      function isBuiltin(t, e) {
        return r.call(t) === `[object ${e}]`;
      }
      function isErrorEvent(t) {
        return isBuiltin(t, "ErrorEvent");
      }
      function isDOMError(t) {
        return isBuiltin(t, "DOMError");
      }
      function isDOMException(t) {
        return isBuiltin(t, "DOMException");
      }
      function isString(t) {
        return isBuiltin(t, "String");
      }
      function isParameterizedString(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function isPrimitive(t) {
        return (
          null === t ||
          isParameterizedString(t) ||
          ("object" != typeof t && "function" != typeof t)
        );
      }
      function isPlainObject(t) {
        return isBuiltin(t, "Object");
      }
      function isEvent(t) {
        return "undefined" != typeof Event && isInstanceOf(t, Event);
      }
      function isElement(t) {
        return "undefined" != typeof Element && isInstanceOf(t, Element);
      }
      function isRegExp(t) {
        return isBuiltin(t, "RegExp");
      }
      function isThenable(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function isSyntheticEvent(t) {
        return (
          isPlainObject(t) &&
          "nativeEvent" in t &&
          "preventDefault" in t &&
          "stopPropagation" in t
        );
      }
      function isNaN(t) {
        return "number" == typeof t && t != t;
      }
      function isInstanceOf(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function isVueViewModel(t) {
        return !!(
          "object" == typeof t &&
          null !== t &&
          (t.__isVue || t._isVue)
        );
      }
    },
    70716: function (t, e, n) {
      "use strict";
      n.d(e, {
        Cf: function () {
          return consoleSandbox;
        },
        LD: function () {
          return s;
        },
        RU: function () {
          return a;
        },
        kg: function () {
          return o;
        },
      });
      var r = n(45509),
        i = n(40932);
      let a = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        s = {};
      function consoleSandbox(t) {
        if (!("console" in i.GLOBAL_OBJ)) return t();
        let e = i.GLOBAL_OBJ.console,
          n = {},
          r = Object.keys(s);
        r.forEach((t) => {
          let r = s[t];
          (n[t] = e[t]), (e[t] = r);
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      let o = (function () {
        let t = !1,
          e = {
            enable: () => {
              t = !0;
            },
            disable: () => {
              t = !1;
            },
            isEnabled: () => t,
          };
        return (
          r.X
            ? a.forEach((n) => {
                e[n] = (...e) => {
                  t &&
                    consoleSandbox(() => {
                      i.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...e);
                    });
                };
              })
            : a.forEach((t) => {
                e[t] = () => void 0;
              }),
          e
        );
      })();
    },
    85229: function (t, e, n) {
      "use strict";
      n.d(e, {
        DM: function () {
          return uuid4;
        },
        Db: function () {
          return addExceptionTypeValue;
        },
        EG: function () {
          return addExceptionMechanism;
        },
        YO: function () {
          return checkOrSetAlreadyCaught;
        },
        jH: function () {
          return getEventDescription;
        },
        lE: function () {
          return arrayify;
        },
      });
      var r = n(89669),
        i = n(40932);
      function uuid4() {
        let t = i.GLOBAL_OBJ,
          e = t.crypto || t.msCrypto,
          getRandomByte = () => 16 * Math.random();
        try {
          if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
          e &&
            e.getRandomValues &&
            (getRandomByte = () => {
              let t = new Uint8Array(1);
              return e.getRandomValues(t), t[0];
            });
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & getRandomByte()) >> (t / 4))).toString(16)
        );
      }
      function getFirstException(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function getEventDescription(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = getFirstException(t);
        return r
          ? r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>"
          : n || "<unknown>";
      }
      function addExceptionTypeValue(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          a = (i[0] = i[0] || {});
        a.value || (a.value = e || ""), a.type || (a.type = n || "Error");
      }
      function addExceptionMechanism(t, e) {
        let n = getFirstException(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          let t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function checkOrSetAlreadyCaught(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
          (0, r.xp)(t, "__sentry_captured__", !0);
        } catch (t) {}
        return !1;
      }
      function arrayify(t) {
        return Array.isArray(t) ? t : [t];
      }
    },
    82327: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fv: function () {
          return normalize;
        },
        Qy: function () {
          return function normalizeToSize(t, e = 3, n = 102400) {
            let r = normalize(t, e);
            return ~-encodeURI(JSON.stringify(r)).split(/%..|./).length > n
              ? normalizeToSize(t, e - 1, n)
              : r;
          };
        },
      });
      var r = n(82361),
        i = n(89669),
        a = n(81393);
      function normalize(t, e = 100, s = Infinity) {
        try {
          return (function visit(
            t,
            e,
            s = Infinity,
            o = Infinity,
            c = (function () {
              let t = "function" == typeof WeakSet,
                e = t ? new WeakSet() : [];
              return [
                function (n) {
                  if (t) return !!e.has(n) || (e.add(n), !1);
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t];
                    if (r === n) return !0;
                  }
                  return e.push(n), !1;
                },
                function (n) {
                  if (t) e.delete(n);
                  else
                    for (let t = 0; t < e.length; t++)
                      if (e[t] === n) {
                        e.splice(t, 1);
                        break;
                      }
                },
              ];
            })()
          ) {
            let [u, l] = c;
            if (
              null == e ||
              (["number", "boolean", "string"].includes(typeof e) &&
                !(0, r.i2)(e))
            )
              return e;
            let d = (function (t, e) {
              try {
                if ("domain" === t && e && "object" == typeof e && e._events)
                  return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if (void 0 !== n.g && e === n.g) return "[Global]";
                if ("undefined" != typeof window && e === window)
                  return "[Window]";
                if ("undefined" != typeof document && e === document)
                  return "[Document]";
                if ((0, r.y1)(e)) return "[VueViewModel]";
                if ((0, r.Cy)(e)) return "[SyntheticEvent]";
                if ("number" == typeof e && e != e) return "[NaN]";
                if ("function" == typeof e)
                  return `[Function: ${(0, a.$P)(e)}]`;
                if ("symbol" == typeof e) return `[${String(e)}]`;
                if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                let i = (function (t) {
                  let e = Object.getPrototypeOf(t);
                  return e ? e.constructor.name : "null prototype";
                })(e);
                if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                return `[object ${i}]`;
              } catch (t) {
                return `**non-serializable** (${t})`;
              }
            })(t, e);
            if (!d.startsWith("[object ")) return d;
            if (e.__sentry_skip_normalization__) return e;
            let p =
              "number" == typeof e.__sentry_override_normalization_depth__
                ? e.__sentry_override_normalization_depth__
                : s;
            if (0 === p) return d.replace("object ", "");
            if (u(e)) return "[Circular ~]";
            if (e && "function" == typeof e.toJSON)
              try {
                let t = e.toJSON();
                return visit("", t, p - 1, o, c);
              } catch (t) {}
            let g = Array.isArray(e) ? [] : {},
              h = 0,
              f = (0, i.Sh)(e);
            for (let t in f) {
              if (!Object.prototype.hasOwnProperty.call(f, t)) continue;
              if (h >= o) {
                g[t] = "[MaxProperties ~]";
                break;
              }
              let e = f[t];
              (g[t] = visit(t, e, p - 1, o, c)), h++;
            }
            return l(e), g;
          })("", t, e, s);
        } catch (t) {
          return { ERROR: `**non-serializable** (${t})` };
        }
      }
    },
    89669: function (t, e, n) {
      "use strict";
      n.d(e, {
        $Q: function () {
          return markFunctionWrapped;
        },
        HK: function () {
          return getOriginalFunction;
        },
        Jr: function () {
          return dropUndefinedKeys;
        },
        Sh: function () {
          return convertToPlainObject;
        },
        _j: function () {
          return urlEncode;
        },
        hl: function () {
          return fill;
        },
        xp: function () {
          return addNonEnumerableProperty;
        },
        zf: function () {
          return extractExceptionKeysForMessage;
        },
      });
      var r = n(89284),
        i = n(45509),
        a = n(82361),
        s = n(70716),
        o = n(92674);
      function fill(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        "function" == typeof i && markFunctionWrapped(i, r), (t[e] = i);
      }
      function addNonEnumerableProperty(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          i.X &&
            s.kg.log(
              `Failed to add non-enumerable property "${e}" to object`,
              t
            );
        }
      }
      function markFunctionWrapped(t, e) {
        try {
          let n = e.prototype || {};
          (t.prototype = e.prototype = n),
            addNonEnumerableProperty(t, "__sentry_original__", e);
        } catch (t) {}
      }
      function getOriginalFunction(t) {
        return t.__sentry_original__;
      }
      function urlEncode(t) {
        return Object.keys(t)
          .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
          .join("&");
      }
      function convertToPlainObject(t) {
        if ((0, a.VZ)(t))
          return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...getOwnProperties(t),
          };
        if (!(0, a.cO)(t)) return t;
        {
          let e = {
            type: t.type,
            target: serializeEventTarget(t.target),
            currentTarget: serializeEventTarget(t.currentTarget),
            ...getOwnProperties(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              (0, a.V9)(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function serializeEventTarget(t) {
        try {
          return (0, a.kK)(t)
            ? (0, r.Rt)(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function getOwnProperties(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function extractExceptionKeysForMessage(t, e = 40) {
        let n = Object.keys(convertToPlainObject(t));
        if ((n.sort(), !n.length)) return "[object has no keys]";
        if (n[0].length >= e) return (0, o.$G)(n[0], e);
        for (let t = n.length; t > 0; t--) {
          let r = n.slice(0, t).join(", ");
          if (!(r.length > e)) {
            if (t === n.length) return r;
            return (0, o.$G)(r, e);
          }
        }
        return "";
      }
      function dropUndefinedKeys(t) {
        let e = new Map();
        return (function _dropUndefinedKeys(t, e) {
          if (
            (function (t) {
              if (!(0, a.PO)(t)) return !1;
              try {
                let e = Object.getPrototypeOf(t).constructor.name;
                return !e || "Object" === e;
              } catch (t) {
                return !0;
              }
            })(t)
          ) {
            let n = e.get(t);
            if (void 0 !== n) return n;
            let r = {};
            for (let n of (e.set(t, r), Object.keys(t)))
              void 0 !== t[n] && (r[n] = _dropUndefinedKeys(t[n], e));
            return r;
          }
          if (Array.isArray(t)) {
            let n = e.get(t);
            if (void 0 !== n) return n;
            let r = [];
            return (
              e.set(t, r),
              t.forEach((t) => {
                r.push(_dropUndefinedKeys(t, e));
              }),
              r
            );
          }
          return t;
        })(t, e);
      }
    },
    81393: function (t, e, n) {
      "use strict";
      n.d(e, {
        $P: function () {
          return getFunctionName;
        },
        Sq: function () {
          return stackParserFromStackParserOptions;
        },
        pE: function () {
          return createStackParser;
        },
      });
      let r = /\(error: (.*)\)/,
        i = /captureMessage|captureException/;
      function createStackParser(...t) {
        let e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
        return (t, n = 0) => {
          let a = [],
            s = t.split("\n");
          for (let t = n; t < s.length; t++) {
            let n = s[t];
            if (n.length > 1024) continue;
            let i = r.test(n) ? n.replace(r, "$1") : n;
            if (!i.match(/\S*Error: /)) {
              for (let t of e) {
                let e = t(i);
                if (e) {
                  a.push(e);
                  break;
                }
              }
              if (a.length >= 50) break;
            }
          }
          return (function (t) {
            if (!t.length) return [];
            let e = Array.from(t);
            return (
              /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(),
              e.reverse(),
              i.test(e[e.length - 1].function || "") &&
                (e.pop(), i.test(e[e.length - 1].function || "") && e.pop()),
              e
                .slice(0, 50)
                .map((t) => ({
                  ...t,
                  filename: t.filename || e[e.length - 1].filename,
                  function: t.function || "?",
                }))
            );
          })(a);
        };
      }
      function stackParserFromStackParserOptions(t) {
        return Array.isArray(t) ? createStackParser(...t) : t;
      }
      let a = "<anonymous>";
      function getFunctionName(t) {
        try {
          if (!t || "function" != typeof t) return a;
          return t.name || a;
        } catch (t) {
          return a;
        }
      }
    },
    92674: function (t, e, n) {
      "use strict";
      n.d(e, {
        $G: function () {
          return truncate;
        },
        U0: function () {
          return stringMatchesSomePattern;
        },
        nK: function () {
          return safeJoin;
        },
      });
      var r = n(82361);
      function truncate(t, e = 0) {
        return "string" != typeof t || 0 === e
          ? t
          : t.length <= e
          ? t
          : `${t.slice(0, e)}...`;
      }
      function safeJoin(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          try {
            (0, r.y1)(i) ? n.push("[VueViewModel]") : n.push(String(i));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function stringMatchesSomePattern(t, e = [], n = !1) {
        return e.some((e) =>
          (function (t, e, n = !1) {
            return (
              !!(0, r.HD)(t) &&
              ((0, r.Kj)(e)
                ? e.test(t)
                : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n)
        );
      }
    },
    61496: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ak: function () {
          return supportsFetch;
        },
        Du: function () {
          return isNativeFetch;
        },
        t$: function () {
          return supportsNativeFetch;
        },
      });
      var r = n(45509),
        i = n(70716),
        a = n(40932);
      let s = (0, a.R)();
      function supportsFetch() {
        if (!("fetch" in s)) return !1;
        try {
          return (
            new Headers(),
            new Request("http://www.example.com"),
            new Response(),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function isNativeFetch(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function supportsNativeFetch() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (!supportsFetch()) return !1;
        if (isNativeFetch(s.fetch)) return !0;
        let t = !1,
          e = s.document;
        if (e && "function" == typeof e.createElement)
          try {
            let n = e.createElement("iframe");
            (n.hidden = !0),
              e.head.appendChild(n),
              n.contentWindow &&
                n.contentWindow.fetch &&
                (t = isNativeFetch(n.contentWindow.fetch)),
              e.head.removeChild(n);
          } catch (t) {
            r.X &&
              i.kg.warn(
                "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                t
              );
          }
        return t;
      }
    },
    40885: function (t, e, n) {
      "use strict";
      n.d(e, {
        $2: function () {
          return rejectedSyncPromise;
        },
        WD: function () {
          return resolvedSyncPromise;
        },
        cW: function () {
          return SyncPromise;
        },
      });
      var r,
        i,
        a = n(82361);
      function resolvedSyncPromise(t) {
        return new SyncPromise((e) => {
          e(t);
        });
      }
      function rejectedSyncPromise(t) {
        return new SyncPromise((e, n) => {
          n(t);
        });
      }
      ((r = i || (i = {}))[(r.PENDING = 0)] = "PENDING"),
        (r[(r.RESOLVED = 1)] = "RESOLVED"),
        (r[(r.REJECTED = 2)] = "REJECTED");
      let SyncPromise = class SyncPromise {
        constructor(t) {
          SyncPromise.prototype.__init.call(this),
            SyncPromise.prototype.__init2.call(this),
            SyncPromise.prototype.__init3.call(this),
            SyncPromise.prototype.__init4.call(this),
            (this._state = i.PENDING),
            (this._handlers = []);
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new SyncPromise((n, r) => {
            this._handlers.push([
              !1,
              (e) => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              (t) => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new SyncPromise((e, n) => {
            let r, i;
            return this.then(
              (e) => {
                (i = !1), (r = e), t && t();
              },
              (e) => {
                (i = !0), (r = e), t && t();
              }
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(i.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(i.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            if (this._state === i.PENDING) {
              if ((0, a.J8)(e)) {
                e.then(this._resolve, this._reject);
                return;
              }
              (this._state = t), (this._value = e), this._executeHandlers();
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === i.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
              t.forEach((t) => {
                t[0] ||
                  (this._state === i.RESOLVED && t[1](this._value),
                  this._state === i.REJECTED && t[2](this._value),
                  (t[0] = !0));
              });
          };
        }
      };
    },
    82300: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z1: function () {
          return a;
        },
        ph: function () {
          return i;
        },
        yW: function () {
          return dateTimestampInSeconds;
        },
      });
      var r = n(40932);
      function dateTimestampInSeconds() {
        return Date.now() / 1e3;
      }
      let i = (function () {
          let { performance: t } = r.GLOBAL_OBJ;
          if (!t || !t.now) return dateTimestampInSeconds;
          let e = Date.now() - t.now(),
            n = void 0 == t.timeOrigin ? e : t.timeOrigin;
          return () => (n + t.now()) / 1e3;
        })(),
        a = (() => {
          let { performance: t } = r.GLOBAL_OBJ;
          if (!t || !t.now) return;
          let e = t.now(),
            n = Date.now(),
            i = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
            a = t.timing && t.timing.navigationStart,
            s = "number" == typeof a ? Math.abs(a + e - n) : 36e5;
          return i < 36e5 || s < 36e5 ? (i <= s ? t.timeOrigin : a) : n;
        })();
    },
    6509: function (t, e, n) {
      "use strict";
      n.d(e, {
        $p: function () {
          return generateSentryTraceHeader;
        },
        KA: function () {
          return tracingContextFromHeaders;
        },
        pT: function () {
          return propagationContextFromHeaders;
        },
      });
      var r = n(19850),
        i = n(85229);
      let a = RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
      function extractTraceparentData(t) {
        let e;
        if (!t) return;
        let n = t.match(a);
        if (n)
          return (
            "1" === n[3] ? (e = !0) : "0" === n[3] && (e = !1),
            { traceId: n[1], parentSampled: e, parentSpanId: n[2] }
          );
      }
      function tracingContextFromHeaders(t, e) {
        let n = extractTraceparentData(t),
          a = (0, r.EN)(e),
          { traceId: s, parentSpanId: o, parentSampled: c } = n || {};
        return n
          ? {
              traceparentData: n,
              dynamicSamplingContext: a || {},
              propagationContext: {
                traceId: s || (0, i.DM)(),
                parentSpanId: o || (0, i.DM)().substring(16),
                spanId: (0, i.DM)().substring(16),
                sampled: c,
                dsc: a || {},
              },
            }
          : {
              traceparentData: n,
              dynamicSamplingContext: void 0,
              propagationContext: {
                traceId: s || (0, i.DM)(),
                spanId: (0, i.DM)().substring(16),
              },
            };
      }
      function propagationContextFromHeaders(t, e) {
        let n = extractTraceparentData(t),
          a = (0, r.EN)(e),
          { traceId: s, parentSpanId: o, parentSampled: c } = n || {};
        return n
          ? {
              traceId: s || (0, i.DM)(),
              parentSpanId: o || (0, i.DM)().substring(16),
              spanId: (0, i.DM)().substring(16),
              sampled: c,
              dsc: a || {},
            }
          : { traceId: s || (0, i.DM)(), spanId: (0, i.DM)().substring(16) };
      }
      function generateSentryTraceHeader(
        t = (0, i.DM)(),
        e = (0, i.DM)().substring(16),
        n
      ) {
        let r = "";
        return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
      }
    },
    92123: function (t, e, n) {
      "use strict";
      function parseUrl(t) {
        if (!t) return {};
        let e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        let n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      function stripUrlQueryAndFragment(t) {
        return t.split(/[\?#]/, 1)[0];
      }
      n.d(e, {
        en: function () {
          return parseUrl;
        },
        rt: function () {
          return stripUrlQueryAndFragment;
        },
      });
    },
    40932: function (t, e, n) {
      "use strict";
      function isGlobalObj(t) {
        return t && t.Math == Math ? t : void 0;
      }
      n.d(e, {
        GLOBAL_OBJ: function () {
          return r;
        },
        R: function () {
          return getGlobalObject;
        },
        Y: function () {
          return getGlobalSingleton;
        },
      });
      let r =
        ("object" == typeof globalThis && isGlobalObj(globalThis)) ||
        ("object" == typeof window && isGlobalObj(window)) ||
        ("object" == typeof self && isGlobalObj(self)) ||
        ("object" == typeof n.g && isGlobalObj(n.g)) ||
        (function () {
          return this;
        })() ||
        {};
      function getGlobalObject() {
        return r;
      }
      function getGlobalSingleton(t, e, n) {
        let i = n || r,
          a = (i.__SENTRY__ = i.__SENTRY__ || {}),
          s = a[t] || (a[t] = e());
        return s;
      }
    },
    25566: function (t) {
      var e,
        n,
        r,
        i = (t.exports = {});
      function defaultSetTimout() {
        throw Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw Error("clearTimeout has not been defined");
      }
      function runTimeout(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === defaultSetTimout || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (t) {
          e = defaultSetTimout;
        }
        try {
          n =
            "function" == typeof clearTimeout
              ? clearTimeout
              : defaultClearTimeout;
        } catch (t) {
          n = defaultClearTimeout;
        }
      })();
      var a = [],
        s = !1,
        o = -1;
      function cleanUpNextTick() {
        s &&
          r &&
          ((s = !1),
          r.length ? (a = r.concat(a)) : (o = -1),
          a.length && drainQueue());
      }
      function drainQueue() {
        if (!s) {
          var t = runTimeout(cleanUpNextTick);
          s = !0;
          for (var e = a.length; e; ) {
            for (r = a, a = []; ++o < e; ) r && r[o].run();
            (o = -1), (e = a.length);
          }
          (r = null),
            (s = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === defaultClearTimeout || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function Item(t, e) {
        (this.fun = t), (this.array = e);
      }
      function noop() {}
      (i.nextTick = function (t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new Item(t, e)), 1 !== a.length || s || runTimeout(drainQueue);
      }),
        (Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = noop),
        (i.addListener = noop),
        (i.once = noop),
        (i.off = noop),
        (i.removeListener = noop),
        (i.removeAllListeners = noop),
        (i.emit = noop),
        (i.prependListener = noop),
        (i.prependOnceListener = noop),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    24677: function (t, e, n) {
      "use strict";
      function _class_private_field_loose_base(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
          throw TypeError("attempted to use private field on non-instance");
        return t;
      }
      n.r(e),
        n.d(e, {
          _: function () {
            return _class_private_field_loose_base;
          },
          _class_private_field_loose_base: function () {
            return _class_private_field_loose_base;
          },
        });
    },
    6249: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          _: function () {
            return _class_private_field_loose_key;
          },
          _class_private_field_loose_key: function () {
            return _class_private_field_loose_key;
          },
        });
      var r = 0;
      function _class_private_field_loose_key(t) {
        return "__private_" + r++ + "_" + t;
      }
    },
    21024: function (t, e, n) {
      "use strict";
      function _interop_require_default(t) {
        return t && t.__esModule ? t : { default: t };
      }
      n.r(e),
        n.d(e, {
          _: function () {
            return _interop_require_default;
          },
          _interop_require_default: function () {
            return _interop_require_default;
          },
        });
    },
    68533: function (t, e, n) {
      "use strict";
      function _getRequireWildcardCache(t) {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (_getRequireWildcardCache = function (t) {
          return t ? n : e;
        })(t);
      }
      function _interop_require_wildcard(t, e) {
        if (!e && t && t.__esModule) return t;
        if (null === t || ("object" != typeof t && "function" != typeof t))
          return { default: t };
        var n = _getRequireWildcardCache(e);
        if (n && n.has(t)) return n.get(t);
        var r = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in t)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
            var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(r, a, s)
              : (r[a] = t[a]);
          }
        return (r.default = t), n && n.set(t, r), r;
      }
      n.r(e),
        n.d(e, {
          _: function () {
            return _interop_require_wildcard;
          },
          _interop_require_wildcard: function () {
            return _interop_require_wildcard;
          },
        });
    },
  },
]);
