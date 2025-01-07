(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    7476: function (e, t, n) {
      var o = {
        "./ar-AE.json": [72194, 2194],
        "./bg-BG.json": [57414, 7414],
        "./cs-CZ.json": [5152, 5152],
        "./da-DK.json": [64740, 4740],
        "./de-DE.json": [51243, 1243],
        "./el-GR.json": [60526, 526],
        "./en-US.json": [36268, 6268],
        "./es-ES.json": [84518, 4518],
        "./fa-IR.json": [10960, 960],
        "./fil-PH.json": [39744, 9744],
        "./fr-FR.json": [57587, 7587],
        "./id-ID.json": [65729, 5729],
        "./it-IT.json": [50929, 929],
        "./ja-JP.json": [50602, 602],
        "./ko-KR.json": [28074, 8074],
        "./nl-NL.json": [97466, 7466],
        "./pl-PL.json": [83846, 3846],
        "./pt-PT.json": [22324, 2324],
        "./ru-RU.json": [50456, 456],
        "./sl-SI.json": [39804, 9804],
        "./tr-TR.json": [16839, 6839],
        "./uk-UA.json": [95647, 5647],
        "./vi-VN.json": [84229, 4229],
        "./zh-TW.json": [78313, 8313],
        "./zh_CN.json": [1866, 1866],
      };
      function webpackAsyncContext(e) {
        if (!n.o(o, e))
          return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = o[e],
          i = t[0];
        return n.e(t[1]).then(function () {
          return n.t(i, 19);
        });
      }
      (webpackAsyncContext.keys = function () {
        return Object.keys(o);
      }),
        (webpackAsyncContext.id = 7476),
        (e.exports = webpackAsyncContext);
    },
    34744: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 19438));
    },
    19438: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Error;
          },
        });
      var o = n(57437),
        i = n(73892);
      function Error() {
        return (0, o.jsx)("html", {
          lang: "en-US",
          children: (0, o.jsx)("body", {
            children: (0, o.jsx)(i.Z, {
              type: "500",
              theme: "light",
              sorryText:
                "The page failed to load. Please try refreshing the page or try again later.",
            }),
          }),
        });
      }
    },
    73892: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Exception;
        },
      });
      var o = n(57437),
        i = n(61396),
        a = n.n(i),
        c = n(67623),
        l = n.n(c);
      n(90952);
      var u = n(5568);
      function Exception(e) {
        let {
            type: t = "500",
            theme: n = "light",
            backText: i,
            sorryText: c,
          } = e,
          s = {
            404: {
              img:
                "light" === n
                  ? "/fstatic/_next/static/assets/img/error-404.76eaa5c9.png"
                  : "/fstatic/_next/static/assets/img/error-404-dark.5e6c1a0b.png",
            },
            500: {
              img:
                "light" === n
                  ? "/fstatic/_next/static/assets/img/error-crash.703acaac.svg"
                  : "/fstatic/_next/static/assets/img/error-crash-dark.1f112146.svg",
            },
          };
        return (0, o.jsx)("div", {
          className: l().wrapper,
          children: (0, o.jsxs)("div", {
            className: l().errorContent,
            children: [
              (0, o.jsx)("img", {
                className: l().errorImg,
                src: s[t].img || s["500"].img,
                alt: "not-found",
              }),
              (0, o.jsx)("div", {
                className: l().errorText,
                children: (0, o.jsxs)("div", {
                  className: l().errorSorry,
                  children: [
                    (0, o.jsx)("span", { children: c }),
                    "404" === t &&
                      (0, o.jsx)(a(), {
                        className: l().backHomeBtn,
                        href: (0, u.R1)("/"),
                        children: i,
                      }),
                    "404" === t &&
                      (0, o.jsx)("div", {
                        className: l().errorUrl,
                        children: window.location.href,
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    80628: function (e, t, n) {
      "use strict";
      n.d(t, {
        al: function () {
          return a;
        },
        k1: function () {
          return i;
        },
      });
      var o = n(28635);
      let i = [
          "en-US",
          "ru-RU",
          "tr-TR",
          "vi-VN",
          "ja-JP",
          "ko-KR",
          "fa-IR",
          "pt-PT",
          "es-ES",
          "zh-TW",
          "de-DE",
          "uk-UA",
          "ar-AE",
          "fr-FR",
          "nl-NL",
          "it-IT",
          "fil-PH",
          "id-ID",
          "bg-BG",
          "cs-CZ",
          "da-DK",
          "el-GR",
          "pl-PL",
          "sl-SI",
        ],
        a = "en-US",
        getMessage = async (e) => {
          let { locale: t } = e;
          return { messages: (await n(7476)("./".concat(t, ".json"))).default };
        };
      (0, o.cF)(getMessage);
    },
    12486: function (e, t, n) {
      "use strict";
      n.d(t, {
        D$: function () {
          return numberToString;
        },
        FH: function () {
          return toFixed;
        },
        FT: function () {
          return cutFloatDecimal;
        },
        Hf: function () {
          return toNonExponential;
        },
        IH: function () {
          return add;
        },
        Jp: function () {
          return multiply;
        },
        Ng: function () {
          return toLocaleNum;
        },
        OM: function () {
          return getDecimalLen;
        },
        QK: function () {
          return convertUTCToUTC0Timestamp;
        },
        Qk: function () {
          return numberToMoneyFormat;
        },
        WZ: function () {
          return getValuation;
        },
        cs: function () {
          return divide;
        },
        he: function () {
          return toFormat;
        },
        lA: function () {
          return cutFloatDecimalUp;
        },
        lu: function () {
          return sub;
        },
        pj: function () {
          return o.Z;
        },
        q1: function () {
          return getInputValuation;
        },
        qu: function () {
          return compare;
        },
      });
      var o = n(43344),
        i = n(87860),
        a = n(44092),
        c = n(45883),
        l = n(3012);
      (o.Z.RM = o.Z.roundDown), o.Z.roundDown;
      let u = o.Z.roundUp;
      function toNonExponential(e) {
        try {
          return new o.Z(e).toFixed();
        } catch (e) {
          return "--";
        }
      }
      function add(e, t) {
        try {
          if (null === e) {
            if (null === t) return 0;
            if (void 0 === t) return NaN;
            return Number(t);
          }
          if (null === t) {
            if (null === e) return 0;
            if (void 0 === e) return NaN;
            return Number(e);
          }
          if (
            (Array.isArray(e) && (e = Number(e)),
            Array.isArray(t) && (t = Number(t)),
            !isFinite(e) || !isFinite(t))
          )
            return Number(e) + Number(t);
          return new o.Z(e).plus(t).toNumber();
        } catch (e) {
          return NaN;
        }
      }
      function sub(e, t) {
        try {
          if (null === e) {
            if (null === t) return "0";
            if (void 0 === t) return "NaN";
            return String(-1 * t);
          }
          if (null === t) {
            if (null === e) return "0";
            if (void 0 === e) return "NaN";
            return String(e);
          }
          if (
            (Array.isArray(e) && (e = Number(e)),
            Array.isArray(t) && (t = Number(t)),
            !isFinite(e) || !isFinite(t))
          )
            return String(1 * e - 1 * t);
          return new o.Z(e).minus(t).toFixed();
        } catch (e) {
          return "NaN";
        }
      }
      function multiply(e, t) {
        var n = String(e),
          i = String(t);
        try {
          if (
            "Infinity" === n ||
            "-Infinity" === n ||
            "Infinity" === i ||
            "-Infinity" === i
          )
            return Number(n) * Number(i);
          if (
            (Array.isArray(e) && 0 === e.length) ||
            (Array.isArray(t) && 0 === t.length)
          )
            return 0;
          return Number(new o.Z(n).times(i));
        } catch (e) {
          return NaN;
        }
      }
      function divide(e, t) {
        let n = String(e),
          i = String(t);
        try {
          if (
            (((Array.isArray(e) && 0 === e.length) || "" === n) && (n = 0),
            ((Array.isArray(t) && 0 === t.length) || "" === i) && (i = 0),
            !isFinite(e))
          )
            return Number(e) / Number(t);
          let a = new o.Z(n);
          if ("0" === i || 0 === i) {
            if ("0" === n || 0 === n) return NaN;
            {
              let e = -1 === compare(a, 0);
              return e ? -1 / 0 : 1 / 0;
            }
          }
          return Number(a.div(i));
        } catch (e) {
          return NaN;
        }
      }
      function compare(e, t) {
        try {
          return new o.Z(e).cmp(t);
        } catch (e) {
          return null;
        }
      }
      let cutFloatDecimal = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 4,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = Number(e);
          if (
            (Number.isNaN(i) && (e = 0),
            !Number.isFinite(i) && !Number.isNaN(i))
          )
            return String(i);
          let a = (t = Number(t)) >= 0 && t <= 100 ? t : 0;
          void 0 === t && (a = 0), null !== t || ((a = void 0), n || (a = 0));
          let c = "";
          try {
            (c = new o.Z(e).toFixed(a)), n && (c = new o.Z(c).toFixed());
          } catch (e) {
            if (n) return "0";
            c = (0).toFixed(a);
          }
          return c;
        },
        cutFloatDecimalUp = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = o.Z.RM;
          o.Z.RM = u;
          let a = cutFloatDecimal(e, t, n);
          return (o.Z.RM = i), a;
        },
        getDecimalLen = (e) => {
          try {
            if ("number" != typeof e && "string" != typeof e) return 0;
            {
              var t;
              let n = numberToString(e);
              if (n.indexOf("e") > -1) return 0;
              return (
                (null === (t = n.split(".")[1]) || void 0 === t
                  ? void 0
                  : t.length) || 0
              );
            }
          } catch (e) {
            return 0;
          }
        },
        numberToString = (e) => {
          let t = Number(e),
            n = String(e);
          if (1 > Math.abs(t)) {
            let e = parseInt(t.toString().split("e-")[1]);
            if (e) {
              let o = t < 0;
              o && (t *= -1);
              let i = Number((t *= Math.pow(10, e - 1)).toFixed(e));
              (n = "0." + Array(e).join("0") + i.toString().substring(2)),
                o && (n = "-" + n);
            }
          } else {
            let e = parseInt(t.toString().split("+")[1]);
            e > 20 &&
              ((e -= 20),
              (t /= Math.pow(10, e)),
              (n = t.toString() + Array(e + 1).join("0")));
          }
          return n;
        },
        toFixed = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n = Number(e),
            i = Number(t);
          return isNaN(n) ||
            isNaN(t) ||
            "number" != typeof n ||
            "number" != typeof t
            ? n
            : new o.Z(e).toFixed(i);
        },
        isValidNum = (e) =>
          "string" == typeof e && e
            ? e.includes(",")
              ? /^[+-]?\d{1,3}(,\d{3})*(\.\d*)?$/.test(e)
              : !Number.isNaN(Number(e))
            : "number" == typeof e,
        toLocaleNum = function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (!isValidNum(e)) return e;
          {
            let n = (0, c.ej)(l.GAF) || l._GE.standard,
              o = n === l._GE.indented;
            if (t && o)
              return (0, a.decimalIndentationDisplay)(e, !0, {
                minIndentLength: 4,
                minDecimalLength: 7,
              });
            {
              let {
                isDefaultRule: t,
                decimal: n,
                thousandths: o,
              } = (0, i.z1)();
              return t
                ? e
                : (e = String(
                    (e = String((e = String(e).replace(".", "|"))).replace(
                      RegExp(",", "g"),
                      o
                    ))
                  ).replace("|", n));
            }
          }
        };
      function toFormat(e, t) {
        let n,
          u,
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          d =
            !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
          g = (0, c.ej)(l.GAF) || l._GE.standard,
          f = g === l._GE.indented,
          b = Number(t);
        if (
          ((Number.isNaN(b) || null === t) && (b = void 0),
          Number.isNaN(Number(e)))
        )
          return "";
        try {
          if (!isFinite(Number(e))) return String(e);
          let t = new o.Z(e);
          (n = t.toFixed(b)),
            (u = -1 === compare(t, 0)),
            s && (n = new o.Z(n).toFixed());
        } catch (e) {
          n = "";
        }
        d &&
          f &&
          (n = (0, a.decimalIndentationDisplay)(n, !1, {
            minIndentLength: 4,
            minDecimalLength: 7,
          }));
        let { decimal: p, thousandths: m } = (0, i.z1)(),
          y = n.split("."),
          _ = y[0],
          v = y[1],
          h = u ? _.slice(1) : _,
          k = h.length;
        if (k > 0) {
          let e = k % 3 || 3;
          for (_ = h.substring(0, 0 + e); e < k; e += 3)
            _ += m + h.substring(e, e + 3);
          u && (_ = "-" + _);
        }
        return v ? _ + p + v : _;
      }
      function numberToMoneyFormat(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!e) return e;
        if (Number.isNaN(Number(e))) {
          if (Array.isArray(e)) {
            if (1 === e.length) return String(e);
            if (e.length > 1) return e.join(",");
          } else if ("function" == typeof e) return String(e);
          else if (e && "object" == typeof e) return String(e);
          else return String(e);
        }
        if (t) {
          var n, o;
          let t;
          t = toNonExponential(e);
          let i =
              null !==
                (o =
                  null === (n = "".concat(e)) || void 0 === n
                    ? void 0
                    : n.split(".")[1]) && void 0 !== o
                ? o
                : "",
            a = i.length;
          return toFormat(t, a);
        }
        return toFormat(String(e), void 0);
      }
      function getValuation(e, t, n, o, i, a) {
        let { returnAllData: c = !1 } =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
          l = "--",
          u = "--";
        if (!t || void 0 === e || !o[i])
          return c ? { text: l, valuation: 0, valuationFormat: u } : l;
        let { isReverse: s, settleCoin: d } = t,
          { indexPrice: g } = n[d + "_USDT"] || {};
        (s && "USDT" !== d) || (g = 1),
          g &&
            (u = numberToMoneyFormat((l = cutFloatDecimal(+o[i] * e * g, 2))));
        let f = "≈ ".concat(a, " ").concat(u),
          b = "≈ " + u + " ".concat(i),
          p = a ? f : b;
        return c ? { text: p, valuation: Number(l), valuationFormat: u } : p;
      }
      function getInputValuation(e, t, n, o, i) {
        let a = "--",
          { isReverse: c, quoteCoin: l } = t || {};
        return void 0 !== e && n[o] && (!c || n[l])
          ? (c && (e /= n[l]),
            (a = numberToMoneyFormat(cutFloatDecimal(+n[o] * e, 2))),
            i)
            ? "≈ ".concat(i, " ").concat(a)
            : "≈ " + a + " ".concat(o)
          : a;
      }
      let convertUTCToUTC0Timestamp = (e) => {
        let t = new Date(e),
          n = t.getTimezoneOffset();
        return e + 6e4 * n;
      };
    },
    3012: function (e, t, n) {
      "use strict";
      var o,
        i,
        a,
        c,
        l,
        u,
        s,
        d,
        g,
        f,
        b,
        p,
        m,
        y,
        _,
        v,
        h,
        k,
        w,
        A,
        S,
        E,
        T,
        N,
        x,
        O,
        L,
        R;
      n.d(t, {
        $9j: function () {
          return e5;
        },
        $H7: function () {
          return K;
        },
        $c1: function () {
          return td;
        },
        ACO: function () {
          return rK;
        },
        AM4: function () {
          return e3;
        },
        AiM: function () {
          return r4;
        },
        AlH: function () {
          return f;
        },
        ByU: function () {
          return l;
        },
        CFm: function () {
          return eo;
        },
        CRj: function () {
          return rr;
        },
        CX$: function () {
          return r9;
        },
        CdS: function () {
          return eR;
        },
        DUD: function () {
          return p;
        },
        DxS: function () {
          return e2;
        },
        Ea7: function () {
          return ec;
        },
        EzU: function () {
          return th;
        },
        F1k: function () {
          return eH;
        },
        Fcw: function () {
          return to;
        },
        Ffu: function () {
          return rN;
        },
        G6s: function () {
          return V;
        },
        GAF: function () {
          return tt;
        },
        GJf: function () {
          return eT;
        },
        GRo: function () {
          return tl;
        },
        Gie: function () {
          return eq;
        },
        GnV: function () {
          return j;
        },
        GoW: function () {
          return ry;
        },
        H7v: function () {
          return ri;
        },
        HIQ: function () {
          return rL;
        },
        Hdc: function () {
          return rO;
        },
        I8C: function () {
          return ro;
        },
        II5: function () {
          return e$;
        },
        IMG: function () {
          return eu;
        },
        IXf: function () {
          return D;
        },
        JIc: function () {
          return tv;
        },
        JmG: function () {
          return en;
        },
        KGj: function () {
          return rk;
        },
        Ke1: function () {
          return eF;
        },
        KsZ: function () {
          return rM;
        },
        KvC: function () {
          return s;
        },
        LEs: function () {
          return M;
        },
        LFU: function () {
          return c;
        },
        LN7: function () {
          return rE;
        },
        Lqi: function () {
          return tb;
        },
        MMR: function () {
          return eL;
        },
        Mu9: function () {
          return rw;
        },
        NIf: function () {
          return d;
        },
        Nad: function () {
          return eb;
        },
        Nej: function () {
          return te;
        },
        Nqt: function () {
          return eN;
        },
        Oc1: function () {
          return ez;
        },
        Oh4: function () {
          return et;
        },
        PHW: function () {
          return ev;
        },
        PW: function () {
          return J;
        },
        PfC: function () {
          return eV;
        },
        QKT: function () {
          return eh;
        },
        QOc: function () {
          return g;
        },
        Qm5: function () {
          return rC;
        },
        R0g: function () {
          return eX;
        },
        RNm: function () {
          return y;
        },
        RYC: function () {
          return e_;
        },
        Rew: function () {
          return X;
        },
        Rjo: function () {
          return rq;
        },
        RlC: function () {
          return ep;
        },
        RzN: function () {
          return er;
        },
        S2G: function () {
          return rX;
        },
        SDR: function () {
          return rT;
        },
        Sdl: function () {
          return ru;
        },
        SuT: function () {
          return rG;
        },
        T8l: function () {
          return rQ;
        },
        UVv: function () {
          return e9;
        },
        UWY: function () {
          return stopPropagation;
        },
        V$9: function () {
          return re;
        },
        VHK: function () {
          return rh;
        },
        VLc: function () {
          return rg;
        },
        VS6: function () {
          return m;
        },
        VUb: function () {
          return tg;
        },
        VY4: function () {
          return r$;
        },
        WdZ: function () {
          return tp;
        },
        Wzc: function () {
          return tm;
        },
        X2d: function () {
          return rf;
        },
        X6n: function () {
          return eB;
        },
        XDG: function () {
          return a;
        },
        XGY: function () {
          return el;
        },
        XIs: function () {
          return rm;
        },
        Xu2: function () {
          return eg;
        },
        XxR: function () {
          return rb;
        },
        Ydi: function () {
          return eS;
        },
        Yl1: function () {
          return rs;
        },
        Ymt: function () {
          return rR;
        },
        ZJH: function () {
          return rv;
        },
        ZON: function () {
          return B;
        },
        ZVt: function () {
          return F;
        },
        ZWU: function () {
          return ek;
        },
        ZWi: function () {
          return eW;
        },
        Zpc: function () {
          return H;
        },
        _A2: function () {
          return r3;
        },
        _GE: function () {
          return tn;
        },
        _wp: function () {
          return rI;
        },
        a1q: function () {
          return t_;
        },
        aXk: function () {
          return es;
        },
        b5g: function () {
          return i;
        },
        cYW: function () {
          return r0;
        },
        cYY: function () {
          return rj;
        },
        d3s: function () {
          return ra;
        },
        dRT: function () {
          return eU;
        },
        dc6: function () {
          return rt;
        },
        dhw: function () {
          return ta;
        },
        djG: function () {
          return rJ;
        },
        dxL: function () {
          return rd;
        },
        eRD: function () {
          return ed;
        },
        epN: function () {
          return eZ;
        },
        fEz: function () {
          return tk;
        },
        f_P: function () {
          return ea;
        },
        fnm: function () {
          return eP;
        },
        gFZ: function () {
          return ti;
        },
        gLD: function () {
          return rD;
        },
        gQJ: function () {
          return eK;
        },
        gk9: function () {
          return z;
        },
        hCb: function () {
          return eC;
        },
        hO1: function () {
          return e8;
        },
        hrs: function () {
          return ey;
        },
        hsI: function () {
          return o;
        },
        ic4: function () {
          return ts;
        },
        iqd: function () {
          return tu;
        },
        iui: function () {
          return tc;
        },
        j4M: function () {
          return P;
        },
        jAl: function () {
          return rH;
        },
        jAp: function () {
          return e1;
        },
        jNC: function () {
          return tr;
        },
        jhT: function () {
          return e0;
        },
        jr$: function () {
          return rV;
        },
        kTI: function () {
          return I;
        },
        ktV: function () {
          return r8;
        },
        lHt: function () {
          return rp;
        },
        lRl: function () {
          return rz;
        },
        lhD: function () {
          return ei;
        },
        lyQ: function () {
          return e7;
        },
        mKT: function () {
          return Y;
        },
        mjz: function () {
          return ew;
        },
        n6P: function () {
          return em;
        },
        nAF: function () {
          return Z;
        },
        nOj: function () {
          return eI;
        },
        nVD: function () {
          return eG;
        },
        oAU: function () {
          return r6;
        },
        oCU: function () {
          return ef;
        },
        onc: function () {
          return U;
        },
        pBE: function () {
          return rc;
        },
        pCE: function () {
          return rB;
        },
        pLy: function () {
          return rW;
        },
        qed: function () {
          return u;
        },
        qvC: function () {
          return rA;
        },
        qxt: function () {
          return rY;
        },
        r0H: function () {
          return r1;
        },
        r7R: function () {
          return G;
        },
        rLH: function () {
          return eJ;
        },
        ro9: function () {
          return e4;
        },
        s$x: function () {
          return ty;
        },
        sLL: function () {
          return eO;
        },
        sWJ: function () {
          return ej;
        },
        sXH: function () {
          return rl;
        },
        sd$: function () {
          return rx;
        },
        sfu: function () {
          return ee;
        },
        si4: function () {
          return W;
        },
        t04: function () {
          return rZ;
        },
        tFT: function () {
          return rU;
        },
        tSO: function () {
          return rF;
        },
        tZz: function () {
          return q;
        },
        u_q: function () {
          return Q;
        },
        uaS: function () {
          return eA;
        },
        vPb: function () {
          return rP;
        },
        vaN: function () {
          return eE;
        },
        w22: function () {
          return eD;
        },
        w3K: function () {
          return eQ;
        },
        wkX: function () {
          return r_;
        },
        wu2: function () {
          return eM;
        },
        wu_: function () {
          return r7;
        },
        xTo: function () {
          return rS;
        },
        xx5: function () {
          return rn;
        },
        y6w: function () {
          return tf;
        },
        yIs: function () {
          return C;
        },
        yZF: function () {
          return r2;
        },
        ydx: function () {
          return ex;
        },
        yiG: function () {
          return eY;
        },
        z$$: function () {
          return b;
        },
        zgB: function () {
          return r5;
        },
        zlM: function () {
          return e6;
        },
        zqh: function () {
          return $;
        },
      });
      let stopPropagation = (e) => e.stopPropagation(),
        I = Object.freeze({}),
        F = "--",
        C = "kcex_original_kline_show_drew_line",
        D = "kcex_original_kline_drew_line",
        P = "kcex_exchange_kline_price_setting",
        M = "FIRST_DEAL",
        U = "LAST_CLOSE",
        B = "kcex_common_timezone",
        Y = "24H",
        H = "UTC+0",
        j = "UTC+8",
        z = "order-move-confirm-modal-visible",
        G = "kcex_theme_upcolor",
        Z = "kcex_theme_main",
        V = "kcex.settings.trading",
        W = "kcex_contract_position_preference",
        J = { AUTO_ADD_IM: "1", REALIZED: "2", STOP_ORDER: "3" },
        K = [J.REALIZED, J.AUTO_ADD_IM, J.STOP_ORDER],
        q = "kcex_contract_position_view_mode";
      ((_ = o || (o = {})).LIST = "LIST"), (_.GRID = "GRID");
      let Q = "GRID",
        X = "reverse_error_type_max_vol",
        $ = "reverse_error_type_diff_margin_mode",
        ee = "reverse_error_type_server_error",
        er = { LONG: 1, SHORT: 2 },
        et = { ALL_CABIN: 2, PART_CABIN: 1 };
      ((v = i || (i = {}))[(v.HEDGE_MODE = 1)] = "HEDGE_MODE"),
        (v[(v.ONE_WAY_MODE = 2)] = "ONE_WAY_MODE"),
        ((h = a || (a = {}))[(h.OPEN_LONG = 1)] = "OPEN_LONG"),
        (h[(h.CLOSE_SHORT = 2)] = "CLOSE_SHORT"),
        (h[(h.OPEN_SHORT = 3)] = "OPEN_SHORT"),
        (h[(h.CLOSE_LONG = 4)] = "CLOSE_LONG");
      let en = { LIMIT: 1, ONLY_MAKER: 2, IOC: 3, FOK: 4, MARKET: 5 },
        eo = "kcex_contract_kline_tv_pre_chart",
        ei = "kcex_contract_kline_tv_chart_color",
        ea = "kcex_contract_kline_tv_chart_appearance_setting",
        ec = "tradingview.sessions",
        el = "tradingview.symbolWatermark",
        eu = "tradingview.NavigationButtons.visibility",
        es = "tradingview.PaneButtons.visibility",
        ed = "kcex_reset_tradingview_key",
        eg = { SHANG_HAI: "Asia/Shanghai" },
        ef = "kcex_tpsl_first_read",
        eb = "SAME",
        ep = "SEPARATE",
        em = "kcex_contract_auto_pop_share_poster_no_more_tip",
        ey = 864e5,
        e_ = 1,
        ev = {
          PLAN: 1,
          PLAN_CANCELED: 9,
          TPSL: 2,
          TPSL_CANCELED: 8,
          TRACK: 3,
          TRACK_CANCELED: 10,
          TRACK_FAILED: 11,
          TRACK_ACTIVATED: 12,
          ORDER_FILLED: 4,
          ORDER_CANCELED: 5,
          ORDER_INVALID: 13,
          LIQUIDATED: 6,
          LIQUIDATE_ALERT: 7,
        },
        eh = "uppink",
        ek = "upgreen",
        ew = "upred",
        eA = { 0: ek, 1: ew, 2: eh },
        eS = { SHEET: 0, COIN: 1, USDT: 2 },
        eE = { LIGHT: "light", DARK: "dark" },
        eT = { LINEAR_SWAP: "linear_swap", SWAP: "swap" };
      ((k = c || (c = {})).BY_VOLUME = "BY_VOLUME"), (k.BY_VALUE = "BY_VALUE");
      let eN = { PRICE: "price", RATE: "rate", WAVE: "wave", AMOUNT: "amount" },
        ex = 1e6,
        eO = {
          LIMIT: "1",
          MARKET: "5",
          PLAN: "-1",
          PLAN_MARKET: "-2",
          TRACK: "-3",
          POST_ONLY: "2",
        },
        eL = {
          1: eO.LIMIT,
          2: eO.MARKET,
          3: eO.PLAN,
          4: eO.TRACK,
          5: eO.POST_ONLY,
        },
        eR = "kcex_contract_v4_entrus_type_open_all",
        eI = "kcex_contract_v4_entrus_type_close_all",
        eF = { NORMAL: "normal", CROSS_SPECIAL: "cross_special" },
        eC = {
          NEW: "new",
          OPEN: "open",
          EDIT: "edit",
          LIMIT: "limit",
          PLAN: "plan",
        },
        eD = { PC: "pc", PAD: "pad", MOBILE: "mobile" },
        eP = 1440,
        eM = 768,
        eU = "1",
        eB = "2",
        eY = 1024,
        eH = 768,
        ej = 540,
        ez = 480,
        eG = {
          ORDER_LINE: "kcex_order_line",
          POSITION_LINE: "kcex_position_line",
          HISTORY_POINT: "kcex_history_point",
          STOP_LINE: "kcex_stop_line",
          PLAN_LINE: "kcex_plan_line",
          LIQUIDATE_POINT: "kcex_liquidate_point",
          LIQUIDATE_LINE: "kcex_liquidate_line",
        },
        eZ = "kcex_contract_risk_tip",
        eV = "kcex_contract_risk_limit_vol_exceed_max_history_v2",
        eW = "kcex_contract_risk_limit_exceed_max_vol_tip_dont_prompt_again",
        eJ = "kcex_contract_risk_tip_text_collapsed",
        eK = "kcex_contract_stop_simple_mode_profit_calc_type_key",
        eq = "kcex_contract_stop_simple_mode_loss_calc_type_key",
        eQ = { ORDER: "1", LIST: "2", SYMBOL_PAGE: "3", SYMBOL_INFO: "4" },
        eX = {
          Stable: Symbol("Stable"),
          Latency: Symbol("Latency"),
          UnStable: Symbol("UnStable"),
        },
        e$ = { Delay: 1e3, UnStable: 3e3 },
        e0 = { [eS.SHEET]: eS.COIN, [eS.USDT]: eS.COIN, [eS.COIN]: eS.USDT },
        e1 = { [eS.SHEET]: "USD", [eS.COIN]: eS.SHEET },
        e2 = { FAIR_PRICE: "0", LAST_PRICE: "1" };
      e2.FAIR_PRICE, e2.LAST_PRICE;
      let e5 = "kcex_market_step",
        e6 = "pairs_type_v2",
        e4 = [
          "candle_solid",
          "candle_stroke",
          "candle_up_stroke",
          "candle_down_stroke",
          "area",
        ],
        e3 = [
          ["candle_solid", "candle_up_stroke", "line", "candle_bar"],
          ["candle_base_line", "candle_heikin_ashi", "area", "candle_column"],
        ],
        e7 = {
          candle_solid: 1,
          candle_heikin_ashi: 8,
          candle_up_stroke: 9,
          line: 2,
          candle_bar: 0,
          candle_base_line: 10,
          area: 3,
          candle_column: 13,
        },
        e9 = ["MA", "EMA", "BOLL", "SAR"],
        e8 = {
          MA: { length: 10, defaultCheckedCount: 4 },
          EMA: { length: 10, defaultCheckedCount: 3 },
        },
        re = [
          "VOL",
          "MACD",
          "KDJ",
          "RSI",
          "StochRSI",
          "BIAS",
          "BRAR",
          "CCI",
          "DMI",
          "CR",
          "PSY",
          "DMA",
          "TRIX",
          "OBV",
          "VR",
          "WR",
          "MTM",
          "EMV",
        ],
        rr = 3,
        rt = "kcex_contract_origin_kline_indicators_v5",
        rn = "kcex_contract_origin_kline_indicator_options_v5",
        ro = "kcex_contract_kline_candle_type",
        ri = "kcex_contract_kline_candle_type_tradingview",
        ra = {
          main: [{ type: "MA", index: 0 }],
          subs: re.map((e) => ({ type: e, paneId: null, select: "VOL" === e })),
        },
        rc = 100,
        rl = "kcex_contract_share_poster_total_pnl",
        ru = "kcex_contract_horizontal_layout_v3",
        rs = "kcex_contract_vertical_layout_v3",
        rd = { BOTH: "both", LONG: "long", SHORT: "short", SINGLE: "single" },
        rg = "kcex_contract_novice_guidance_modal",
        rf = "kcex_contract_novice_guidance_navigation_active",
        rb = "kcex_contract_novice_guidance_navigation_is_expand",
        rp = "kcex_contract_novice_guidance_popover",
        rm = "kcex_contract_novice_guidance_finish",
        ry = "open_tab",
        r_ = "close_tab";
      ((w = l || (l = {})).PROFIT = "profit"), (w.LOSS = "loss");
      let rv = { LAST_PRICE: "1", FAIR_PRICE: "2", INDEX_PRICE: "3" },
        rh = "autoAddImConfirm",
        rk = "kcex_close_auto_add_im_confirm",
        rw = 1,
        rA = Object.freeze({ FINISHED: 3, CANCELLED: 4, INVALID: 5 });
      ((A = u || (u = {})).ALL = "ALL"),
        (A.MARKET = "5"),
        (A.LIMIT = "1,2,3,4,6");
      let rS = {
          ALL: "kcex_contract_common_all",
          5: "kcex_contract_exchange_curryMarket",
          "1,2,3,4,6": "kcex_contract_common_price_type_1",
        },
        rE = Object.freeze({
          [rA.FINISHED]:
            "kcex_contract_exchange_order_historic_limit_status_finished",
          [rA.CANCELLED]:
            "kcex_contract_exchange_order_historic_limit_status_cancelled",
          [rA.INVALID]:
            "kcex_contract_exchange_order_historic_limit_status_invalid",
        }),
        rT = Object.freeze({ EXECUTED: 3, FAILED: 5, CANCELED: 2, EXPIRE: 4 }),
        rN = Object.freeze({
          [rT.EXECUTED]: "kcex_contract_common_table_plan_state_map_3",
          [rT.FAILED]: "kcex_contract_common_table_plan_state_map_5",
          [rT.CANCELED]: "kcex_contract_common_table_plan_state_map_2",
          [rT.EXPIRE]: "kcex_contract_common_table_plan_state_map_4",
        }),
        rx = Object.freeze({ SUCCESS: 3, FAILED: 5, CANCELED: 2 }),
        rO = Object.freeze({
          [rx.SUCCESS]:
            "kcex_contract_exchange_order_historic_status_success_trigger",
          [rx.FAILED]:
            "kcex_contract_exchange_order_historic_status_fail_trigger",
          [rx.CANCELED]: "kcex_contract_exchange_order_historic_status_cancel",
        }),
        rL = Object.freeze({ EXECUTED: 2, FAILED: 3, CANCELED: 4 }),
        rR = Object.freeze({
          [rL.EXECUTED]: "kcex_contract_common_table_plan_state_map_3",
          [rL.FAILED]: "kcex_contract_common_table_plan_state_map_5",
          [rL.CANCELED]: "kcex_contract_common_table_plan_state_map_2",
        }),
        rI = 1e3;
      ((S = s || (s = {}))[(S.ADVANCED = 1)] = "ADVANCED"),
        (S[(S.SIMPLE = 2)] = "SIMPLE"),
        ((E = d || (d = {}))[(E.MARGIN = 1)] = "MARGIN"),
        (E[(E.SLIDER = 2)] = "SLIDER");
      let rF = { BATCH_VOL: 1, POSITION_VOL: 2 },
        rC = { CHECKED: 1, UNCHECKED: 2 },
        rD = { TP: 2, SL: 1 },
        rP = 0,
        rM = {
          POSITION: "1",
          CURRENT_ORDER: "4",
          HISTORY_POSITION: "3",
          HISTORY_ORDER: "6",
          CASH_FLOW: "7",
          ASSETS: "8",
          COPY_TRADE: "9",
        },
        rU = { LIMIT: "1", PLAN: "2", TRACKING: "3", STOP_ORDER: "4" },
        rB = "kcex_contract_info_symbol",
        rY = "light",
        rH = "dark",
        rj = "kcex.theme",
        rz = "kcex.upColor",
        rG = "kcex.contractUpColor",
        rZ = rY,
        rV = "kcex_contract_recommend_slider",
        rW = "kcex_contract_origin_kline_indicator_collapse",
        rJ = { DEFAULT: 0, OLD: 1, NEW: 2 },
        rK = { DEFAULT: 0, OLD: 1, NEW: 2 },
        rq = {
          PAST24H: "PAST24H",
          PAST1WEEKS: "PAST1WEEKS",
          PAST1MONTH: "PAST1MONTH",
          BIGDATA: "BIGDATA",
        },
        rQ = "profit",
        rX = "loss",
        r$ = "allCabin",
        r0 = "kcex_contract_tradingview_multiple_layout",
        r1 = "kcex_contract_tradingview_multiple_layout_interval",
        r2 = "kcex_contract_tradingview_multiple_layout_interval_extra",
        r5 = [
          "tv_chart_container",
          "tv_chart_container_2",
          "tv_chart_container_3",
          "tv_chart_container_4",
        ],
        r6 = {
          LAYOUT1A: "1A",
          LAYOUT2A: "2A",
          LAYOUT2B: "2B",
          LAYOUT3A: "3A",
          LAYOUT3B: "3B",
          LAYOUT3C: "3C",
          LAYOUT4A: "4A",
          LAYOUT4B: "4B",
          LAYOUT4C: "4C",
        },
        r4 = {
          [r6.LAYOUT1A]: {
            name: r6.LAYOUT1A,
            iconName: "icon-chart-layout-1A",
            className: "chartContainer_Layout1A",
            count: 1,
          },
          [r6.LAYOUT2A]: {
            name: r6.LAYOUT2A,
            iconName: "icon-chart-layout-2A",
            className: "chartContainer_Layout2A",
            count: 2,
          },
          [r6.LAYOUT2B]: {
            name: r6.LAYOUT2B,
            iconName: "icon-chart-layout-2B",
            className: "chartContainer_Layout2B",
            count: 2,
          },
          [r6.LAYOUT3A]: {
            name: r6.LAYOUT3A,
            iconName: "icon-chart-layout-3A",
            className: "chartContainer_Layout3A",
            count: 3,
          },
          [r6.LAYOUT3B]: {
            name: r6.LAYOUT3B,
            iconName: "icon-chart-layout-3B",
            className: "chartContainer_Layout3B",
            count: 3,
          },
          [r6.LAYOUT3C]: {
            name: r6.LAYOUT3C,
            iconName: "icon-chart-layout-3C",
            className: "chartContainer_Layout3C",
            count: 3,
          },
          [r6.LAYOUT4A]: {
            name: r6.LAYOUT4A,
            iconName: "icon-chart-layout-4A",
            className: "chartContainer_Layout4A",
            count: 4,
          },
          [r6.LAYOUT4B]: {
            name: r6.LAYOUT4B,
            iconName: "icon-chart-layout-4B",
            className: "chartContainer_Layout4B",
            count: 4,
          },
          [r6.LAYOUT4C]: {
            name: r6.LAYOUT4C,
            iconName: "icon-chart-layout-4C",
            className: "chartContainer_Layout4C",
            count: 4,
          },
        },
        r3 = [
          [r4[r6.LAYOUT1A]],
          [r4[r6.LAYOUT2A], r4[r6.LAYOUT2B]],
          [r4[r6.LAYOUT3A], r4[r6.LAYOUT3B], r4[r6.LAYOUT3C]],
          [r4[r6.LAYOUT4A], r4[r6.LAYOUT4B], r4[r6.LAYOUT4C]],
        ],
        r7 = { BASIC: "basic", TV: "tv", DEPTH: "depth" },
        r9 = { APPROVAL: 1, WAIT: 2, FINISHED: 3, CANCELLED: 4, INVALID: 5 },
        r8 = "kcex_contract_exchange_stop_modal_side_key",
        te = "kcex_contract_exchange_stop_modal_calc_type_profit_key",
        tr = "kcex_contract_exchange_stop_modal_calc_type_loss_key";
      ((T = g || (g = {})).ORDER_FORM = "ORDER_FORM"),
        (T.ORDER_TABLE = "ORDER_TABLE"),
        (T.STRATEGY_ORDER_TABLE = "STRATEGY_ORDER_TABLE"),
        (T.POSITION_TABLE = "POSITION_TABLE"),
        ((N = f || (f = {})).BOTH = "BOTH"),
        (N.LONG = "LONG"),
        (N.SHORT = "SHORT");
      let tt = "kcex_display_format",
        tn = { standard: "standard", indented: "indented" },
        to = {
          OPEN_POSITION: "1",
          HISTORY_POSITION: "2",
          ANALYSIS_SHARE: "3",
          LIMIT_CLOSE_ORDER_SHARE: "4",
          COPY_TRADE_TREADER: "COPY_TRADE_TREADER",
          COPY_TRADE_CURRENT_LEAD: "COPY_TRADE_CURRENT_LEAD",
          COPY_TRADE_HISTORY_LEAD: "COPY_TRADE_HISTORY_LEAD",
          TRADING_COMPETITION: "TRADING_COMPETITION",
        };
      ((x = b || (b = {})).LIQUIDATED = "LIQUIDATED"),
        (x.CLOSED = "CLOSED"),
        ((O = p || (p = {}))[(O.OPEN = 1)] = "OPEN"),
        (O[(O.CLOSE = 0)] = "CLOSE"),
        ((L = m || (m = {}))[(L.NORMAL = 1)] = "NORMAL"),
        (L[(L.LONG_ONLY = 2)] = "LONG_ONLY"),
        (L[(L.SHORT_ONLY = 3)] = "SHORT_ONLY"),
        (L[(L.LONG_AND_SHORT = 4)] = "LONG_AND_SHORT");
      let ti = "kcex_contract_depth_chart_range_v2",
        ta = "createTime",
        tc = "symbol",
        tl = "side",
        tu = "leverage",
        ts = "vol",
        td = "price",
        tg = "dealVol",
        tf = "dealAvgPrice",
        tb = "orderMargin",
        tp = "fee",
        tm = "backValue",
        ty = "triggerPrice",
        t_ = "activePrice",
        tv = "openAvgPrice",
        th = "liquidatePrice",
        tk = { ASK: "ask", BID: "bid" };
      ((R = y || (y = {})).add = "add"), (R.delete = "delete");
    },
    2011: function (e, t, n) {
      "use strict";
      n.d(t, {
        H1: function () {
          return getValueFromSearch;
        },
        Uh: function () {
          return getLocaleOutOfReact;
        },
        iI: function () {
          return getRealRenderLang;
        },
      });
      var o = n(80628),
        i = n(11490);
      function getValueFromSearch(e, t) {
        let n = t
            ? window.location.search ||
              window.sessionStorage.getItem("kcex_url_query") ||
              ""
            : window.location.search,
          o = new URLSearchParams(n);
        return o.get(e);
      }
      let getLocaleOutOfReact = () => {
          let e = document.documentElement.getAttribute("lang");
          return null != e ? e : o.al;
        },
        a = [/^(\/[a-z]{2}-[A-Z]{2})?\/tokens\//],
        getRealRenderLang = (e) => {
          if (!e) {
            var t;
            e =
              (null ===
                (t = location.pathname.match(/^\/([a-z]{2}-[A-Z]{2})\/?/)) ||
              void 0 === t
                ? void 0
                : t[1]) || o.al;
          }
          let n = location.pathname,
            c = getValueFromSearch("lang", !1),
            l = getValueFromSearch("ignoreLang", !1),
            u =
              (!l && c) ||
              i.Z.get("NEXT_LOCALE") ||
              window.navigator.language ||
              o.al,
            s = getValueFromSearch("handleDefaultLocale", !1);
          if (a.some((e) => e.test(n))) return e || o.al;
          if ((c && e !== c) || (e === o.al && u !== o.al && "keep" !== s)) {
            let e = o.k1.find((e) => e.includes(u));
            if (e) return e;
          }
          return e || o.al;
        };
    },
    45883: function (e, t, n) {
      "use strict";
      n.d(t, {
        he: function () {
          return M;
        },
        IH: function () {
          return l.IH;
        },
        pi: function () {
          return addPercentSymbol;
        },
        dn: function () {
          return addPositionInfoToStopOrder;
        },
        v9: function () {
          return authorizationRejectHandle;
        },
        Bl: function () {
          return browserPlatform;
        },
        Id: function () {
          return calcClosedLiquidatePrice;
        },
        UW: function () {
          return calcStudyPrecision;
        },
        WU: function () {
          return changeGlobalCssVars;
        },
        PI: function () {
          return checkCanAutoPopShare;
        },
        LL: function () {
          return checkEntrustTypeNeedSetLastPrice;
        },
        GV: function () {
          return checkHasStopLossCloseLiquidateTip;
        },
        wG: function () {
          return checkIsExchangePage;
        },
        qf: function () {
          return checkIsPositionTpSl;
        },
        y0: function () {
          return checkIsTouchDevice;
        },
        On: function () {
          return checkPositionPnlRate;
        },
        IA: function () {
          return checkRiskTipStatus;
        },
        gO: function () {
          return checkShouldCutUp;
        },
        _5: function () {
          return a._5;
        },
        ON: function () {
          return commonReducer;
        },
        qu: function () {
          return l.qu;
        },
        FT: function () {
          return l.FT;
        },
        NC: function () {
          return cutLiquidatePrice;
        },
        YH: function () {
          return P;
        },
        pz: function () {
          return depthPolymerization;
        },
        vO: function () {
          return l.cs;
        },
        lm: function () {
          return downloadBlob;
        },
        Ri: function () {
          return filterSupportUpColor;
        },
        yn: function () {
          return formatLiquidatePrice;
        },
        Su: function () {
          return u.Su;
        },
        _j: function () {
          return genKey;
        },
        vo: function () {
          return generateMarks;
        },
        cD: function () {
          return getAuthorization;
        },
        $z: function () {
          return getContractRiseFallRate;
        },
        ej: function () {
          return a.ej;
        },
        xQ: function () {
          return getCurrentPositionUnit;
        },
        Li: function () {
          return getFingerPrintData;
        },
        aP: function () {
          return getFullscreenElement;
        },
        Np: function () {
          return getKcexAppInfo;
        },
        P0: function () {
          return getLeverageText;
        },
        AN: function () {
          return getMainHost;
        },
        cx: function () {
          return getMainSiteUrl;
        },
        FU: function () {
          return getOrderSourceType;
        },
        IX: function () {
          return getOrderSourceTypeData;
        },
        OY: function () {
          return getPercent;
        },
        Wg: function () {
          return getQuoteCoinPrice;
        },
        LF: function () {
          return getScreenSizeAndType;
        },
        G7: function () {
          return getScreenSizeAndTypeSync;
        },
        Zx: function () {
          return getSubSite;
        },
        Jv: function () {
          return getTimeZoneString;
        },
        LP: function () {
          return getToken;
        },
        rS: function () {
          return getTrailFundNoteByLanguage;
        },
        H1: function () {
          return getValueFromSearch;
        },
        a7: function () {
          return hexToRgba;
        },
        gM: function () {
          return isCompatibleWorker;
        },
        xw: function () {
          return isContractTradePage;
        },
        So: function () {
          return isEmptyAndZeroVal;
        },
        B6: function () {
          return isEmptyVal;
        },
        _u: function () {
          return isKcexApp;
        },
        dZ: function () {
          return isRTL;
        },
        Dw: function () {
          return isReverse;
        },
        fJ: function () {
          return jumpToLoginPage;
        },
        Jp: function () {
          return l.Jp;
        },
        Qk: function () {
          return l.Qk;
        },
        rg: function () {
          return numberToShortFormat;
        },
        D$: function () {
          return l.D$;
        },
        pageSizeSetting: function () {
          return D;
        },
        Wr: function () {
          return R.Wr;
        },
        Gv: function () {
          return setBaseFiat;
        },
        f0: function () {
          return setContractUpcolor;
        },
        d8: function () {
          return a.d8;
        },
        m0: function () {
          return setLanguage;
        },
        rF: function () {
          return setThemeCookieAndStorage;
        },
        SG: function () {
          return setUpcolor;
        },
        rx: function () {
          return shadowCopyObjWithoutKeys;
        },
        lu: function () {
          return l.lu;
        },
        Fw: function () {
          return templateErrorMsg;
        },
        xM: function () {
          return O.xM;
        },
        to: function () {
          return timeToString;
        },
        TE: function () {
          return toLocaleNumAndAddPercentMark;
        },
        Hf: function () {
          return l.Hf;
        },
        J6: function () {
          return updateSymbolRiskInfoWhenChangeContract;
        },
        G$: function () {
          return urlToMainHost;
        },
      }),
        n(55194);
      var o = n(3012),
        i = n(44092),
        a = n(5568),
        c = n(2011),
        l = n(12486),
        u = n(16110),
        s = n(74229),
        d = n(30206);
      let shadowCopyObjWithoutKeys = (e, t) => {
        if (!(e && "object" == typeof e && Array.isArray(t)))
          return (
            console.warn("shadowCopyObjWithoutKeys 参数不合法 obj, keys", e, t),
            e
          );
        {
          let n = { ...e };
          return (
            t.forEach((e) => {
              Object.prototype.hasOwnProperty.call(n, e) && delete n[e];
            }),
            n
          );
        }
      };
      var g = n(87860),
        f = n(74548),
        b = n.n(f),
        p = n(38100),
        m = n.n(p),
        y = n(51068),
        _ = n.n(y),
        v = n(66823),
        h = n.n(v),
        k = n(45928),
        w = n.n(k),
        A = n(35140),
        S = n.n(A),
        E = n(94487),
        T = n.n(E),
        N = n(22566),
        x = n.n(N),
        O = n(22408),
        L = n(74397),
        R = n(74204);
      n(25566),
        b().extend(m()),
        b().extend(_()),
        b().extend(h()),
        b().extend(w()),
        b().extend(S()),
        b().extend(T()),
        b().extend(x()),
        b().tz.setDefault(o.Xu2.SHANG_HAI);
      let I = (0, c.iI)(),
        F = 0,
        genKey = () => ++F,
        getQuoteCoinPrice = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0;
          return e ? o * n : t;
        },
        getToken = () =>
          (0, a.ej)("Authorization") ||
          (0, a.ej)("uc_token") ||
          (0, a.ej)("u_id"),
        getAuthorization = () => (0, a.ej)("Authorization"),
        getFullscreenElement = () =>
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullScreenElement ||
          document.webkitFullscreenElement ||
          null;
      function getValueFromSearch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t
            ? window.location.search ||
              window.sessionStorage.getItem("mexc_url_query")
            : window.location.search,
          o = new URLSearchParams(n);
        return null == o ? void 0 : o.get(e);
      }
      let timeToString = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD HH:mm:ss";
        return b()(e).format(t);
      };
      function browserPlatform() {
        let e = window.navigator.userAgent.toLowerCase();
        return {
          isMobile: /(iPhone|iPad|iPod|iOS|Android)/i.test(e),
          isIOS: /(iPhone|iPad|iPod|iOS)/i.test(e),
          isAndriod: /(Android)/i.test(e),
          isWechat: /(micromessenger)/i.test(e),
          isSafari: /^((?!chrome|android).)*safari/i.test(e),
        };
      }
      function isCompatibleWorker() {
        return "undefined" != typeof Worker;
      }
      function getMainHost() {
        var e, t;
        let n = "mh_".concat(Math.random()),
          o = new RegExp("(^|;)\\s*".concat(n, "=12345")),
          i = new Date();
        i.setTime(i.getTime() - 1);
        let a =
            null === (t = globalThis) || void 0 === t
              ? void 0
              : null === (e = t.window) || void 0 === e
              ? void 0
              : e.document.domain,
          c = (null == a ? void 0 : a.split(".")) || [],
          l = [];
        for (l.unshift(null == c ? void 0 : c.pop()); c.length; ) {
          l.unshift(c.pop());
          let e = l.join("."),
            t = "".concat(n, "=", 12345, ";domain=.").concat(e);
          if (((document.cookie = t), o.test(document.cookie)))
            return (
              (document.cookie = ""
                .concat(t, ";expires=")
                .concat(i.toGMTString())),
              e
            );
        }
      }
      let C = getMainHost();
      function getSubSite(e) {
        var t, n;
        let { hostname: o, host: i } = window.location,
          a = "".concat(o.replace(".".concat(C), ""), ".");
        if ("www" === e) {
          let e =
            (null === (t = o.split(".")[0]) || void 0 === t
              ? void 0
              : t.split("-")[0]) || "";
          return window.location.origin.replace(
            a,
            o.startsWith("test") ? "".concat(e, "-www.") : "www."
          );
        }
        if ("static" === e) return "static.kcex.io";
        if ("chat" === e) return window.location.origin.replace(a, "chat.");
        if ("wbs" === e) return "wss://" + o.replace(a, "wbs.");
        if ("otc" === e) return window.location.origin.replace(a, "otc.");
        if ("affiliates" === e)
          return window.location.origin.replace(a, "affiliates.");
        if ("contract" === e)
          return window.location.origin.replace(a, "www.") + "/futures";
        if ("futures" === e) {
          let e =
            (null === (n = o.split(".")[0]) || void 0 === n
              ? void 0
              : n.split("-")[0]) || "";
          return (
            window.location.origin.replace(
              a,
              o.startsWith("test") ? "".concat(e, "-www.") : "www."
            ) + "/futures"
          );
        }
        return "futures.testnet" === e
          ? window.location.origin.replace(a, "futures.testnet.")
          : "";
      }
      function getMainSiteUrl() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = getSubSite("www"),
          n = "en-US" === I || "zh" === I ? "" : "/".concat(I);
        return ""
          .concat(t)
          .concat(n || "")
          .concat(e);
      }
      let urlToMainHost = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "kcex.com",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "{domain}";
          return e ? (null == e ? void 0 : e.replace(n, t)) : e;
        },
        D = {
          topMessageHeight: 40,
          headerHeight: 64,
          tradeproHeaderHeight: 64,
          netWorkStatusBarHeight: 32,
          footerHeight: 620,
        },
        getPercent = function (e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 2,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "%",
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            { percent: a } = (0, g.z1)(),
            c = "prefix" === a,
            u = c ? o : "",
            s = c ? "" : o,
            d = Number(e) || 0,
            f = 0 > Number(e),
            b = (0, l.Ng)((0, l.FT)((0, l.Jp)(Math.abs(d), 100), n, i), !1);
          return ""
            .concat(t && d > 0 ? "+" : "")
            .concat(f ? "-" : "")
            .concat(u)
            .concat(b)
            .concat(s);
        },
        addPercentSymbol = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "%",
            n =
              "string" == typeof e && e && "-" !== e && "--" !== e && "+" !== e,
            o = "number" == typeof e;
          if (!n && !o) return e;
          {
            let { percent: o } = (0, g.z1)();
            return "prefix" !== o
              ? "".concat(e).concat(t)
              : n
              ? 0 === e.indexOf("+") || 0 === e.indexOf("-")
                ? e[0] + t + e.substring(1)
                : t + e
              : e < 0
              ? "-".concat(t).concat(Math.abs(e))
              : "".concat(t).concat(e);
          }
        },
        toLocaleNumAndAddPercentMark = (e) =>
          addPercentSymbol((0, l.Ng)(e, !1)),
        setLanguage = (e) => {
          var t;
          (0, a.gK)("NEXT_LOCALE", e, 30), (0, a.d8)("NEXT_LOCALE", e, 30);
          let n =
              (null === (t = window) || void 0 === t
                ? void 0
                : t.store.getState()) || {},
            o = null == n ? void 0 : n.setting;
          o && changeGlobalCssVars(o.theme, o.upColor);
        },
        changeGlobalCssVars = (e, t) => {
          if (!e || !t) {
            console.error("theme, upColor are required");
            return;
          }
          let n = { ...O.xM[e], ...O.xM[t + e] };
          Object.entries(n).forEach((e) => {
            let [t, n] = e;
            return document.body.style.setProperty(t, n);
          });
        },
        setBaseFiat = (e) => {
          (0, a.gK)("kcex_base_fiat", e), (0, a.d8)("kcex_base_fiat", e);
        },
        setUpcolor = (e) => {
          (0, a.gK)(o.r7R, e), (0, a.d8)(o.r7R, e), (0, a.qQ)(o.lRl, e, !1);
        },
        P = o.ZWU,
        filterSupportUpColor = (e) =>
          e !== o.ZWU && e !== o.QKT && e !== o.mjz ? (setUpcolor(P), P) : e,
        setContractUpcolor = (e) => {
          (0, a.qQ)(o.SuT, e, !1);
        },
        setThemeCookieAndStorage = (e) => {
          (0, a.gK)(o.nAF, e, 999),
            (0, a.d8)(o.nAF, e, 999),
            (0, a.qQ)(o.cYY, e, !1);
        };
      function hexToRgba(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        e =
          e &&
          e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, o) {
            return t + t + n + n + o + o;
          });
        let n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        if (n) {
          let e = parseInt(n[1], 16),
            o = parseInt(n[2], 16),
            i = parseInt(n[3], 16);
          return "rgba("
            .concat(e, ",")
            .concat(o, ",")
            .concat(i, ",")
            .concat(t, ")");
        }
        return e;
      }
      let M = ["fa-IR", "ar-AE"];
      function isRTL(e) {
        let t = M.find((t) => t === e);
        return t;
      }
      let numberToShortFormat = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = Number(e) || 0;
        return o >= 1e3
          ? (0, i.numberToShortFormat)(e, t)
          : void 0 !== n
          ? (0, l.Ng)(o.toFixed(n), !1)
          : (0, l.Ng)(o.toFixed(t), !1);
      };
      function depthPolymerization(e) {
        let { originDepthArr: t, pushDepth: n, isBids: o } = e,
          i = [...t];
        return (
          n.forEach((e) => {
            let t = e[0],
              n = i.findIndex((e) => e[0] === t);
            n > -1 ? (i[n] = e) : i.push(e);
          }),
          i
            .filter((e) => 0 !== e[1])
            .sort((e, t) => (o ? t[0] - e[0] : e[0] - t[0]))
        );
      }
      let jumpToLoginPage = () => {
          window.location.href = "".concat(
            getMainSiteUrl(
              "/login?redirect=".concat(
                encodeURIComponent(window.location.href)
              )
            )
          );
        },
        calcStudyPrecision = (e) =>
          Math.min(15, (e = isNaN((e = Number(e))) ? 4 : e) > 4 ? e : 4),
        isContractTradePage = () => {
          var e, t, n, o;
          return (
            (null === (o = globalThis) || void 0 === o
              ? void 0
              : null === (n = o.window) || void 0 === n
              ? void 0
              : null === (t = n.location) || void 0 === t
              ? void 0
              : null === (e = t.pathname) || void 0 === e
              ? void 0
              : e.indexOf("/futures/exchange")) === 0
          );
        },
        checkCanAutoPopShare = () => {
          let e = window.localStorage.getItem(o.n6P);
          return !e || Date.now() - Number(e) >= o.hrs;
        },
        checkPositionPnlRate = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = n || o.RYC;
          if (e && "object" == typeof e) {
            if (!t) return (null == e ? void 0 : e.pnlRate) >= i;
            {
              let {
                holdAvgPrice: t,
                closeVol: n,
                positionType: o,
                symbol: a,
                leverage: c,
                realised: l,
              } = e;
              if (void 0 === a) return !1;
              let u = getProfitRateNum(t, n, o, a, c, l);
              if (null !== u) return u >= i;
            }
          }
          return !1;
        },
        getProfitRateNum = (e, t, n, o, i, a) => {
          var c, l, u;
          let d =
            null === (u = useSelector) || void 0 === u
              ? void 0
              : null === (l = u.getState()) || void 0 === l
              ? void 0
              : null === (c = l.market) || void 0 === c
              ? void 0
              : c.productMap;
          if (d) {
            if (!o || !d || !d[o]) return null;
            let c = (0, s.NV)(e, t, n, d[o], i);
            return a / c;
          }
          return null;
        },
        getContractRiseFallRate = function () {
          var e;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n =
              null !== (e = null == t ? void 0 : t.riseFallRate) && void 0 !== e
                ? e
                : 0;
          return n;
        },
        getOrderSourceType = (e) => {
          var t;
          if (!e) return console.error("data必填"), "";
          let n =
              null === (t = window) || void 0 === t ? void 0 : t._formatMessage,
            o = n({ id: "kcex_contract_exchange_market_plan_order" }),
            i = n({ id: "kcex_contract_exchange_order_plan_order" }),
            a = n({ id: "kcex_contract_exchange_track_order" }),
            c = n({ id: "kcex_contract_exchange_stop_profit_loss_full_stop" }),
            l = n({ id: "kcex_contract_market_order" }),
            u = n({ id: "kcex_contract_exchange_order_limit_order" }),
            s = null == e ? void 0 : e.externalOid,
            d = null == e ? void 0 : e.orderType;
          if (s) {
            if (0 === s.indexOf("planorder")) {
              if (5 === d) return o;
              if (1 === d) return i;
            } else if (0 === s.indexOf("trackorder")) return a;
            else if (0 === s.indexOf("stoporder")) return c;
          }
          return s && 0 !== s.indexOf("_m_") ? "" : 5 === d ? l : u;
        },
        getOrderSourceTypeData = (e) => {
          let t = {
            isTrack: !1,
            isPlan: !1,
            isStopOrder: !1,
            isLimit: !1,
            isMarket: !1,
          };
          if (!e) return console.error("data必填"), t;
          let n = null == e ? void 0 : e.externalOid,
            o = null == e ? void 0 : e.orderType;
          return (
            (t.isMarket = 5 === o),
            (t.isPlan = 0 === n.indexOf("planorder")),
            (t.isTrack = 0 === n.indexOf("trackorder")),
            (t.isStopOrder = 0 === n.indexOf("stoporder")),
            (t.isLimit = !n || 0 === n.indexOf("_m_")),
            t
          );
        },
        safelyParseJSON = function () {
          let e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "{}";
          try {
            e = JSON.parse(t || "{}");
          } catch (e) {
            console.error(e);
          }
          return e;
        },
        getTrailFundNoteByLanguage = (e, t, n, o) => {
          let i,
            a = "";
          if (e) {
            var c;
            let l = null !== (c = safelyParseJSON(e)) && void 0 !== c ? c : [];
            (i = l.find((e) => e.langCode === t)) ||
              (i = l.find((e) => "main" === e.languageType)),
              (a = (null == i ? void 0 : i.remark) || ""),
              (a = n && o ? a + "-".concat(b()(o).format("MMDD")) : a);
          }
          return a;
        },
        getLeverageText = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (
            (e || (e = (0, a.sk)() ? (e) => e : window._formatMessage),
            t && "object" == typeof t)
          ) {
            let { leverage: o, openType: i } = t;
            if (o)
              return (n ? 1 == i : 1 == i || 0 == i)
                ? ""
                    .concat(e({ id: "kcex_contract_exchange_partCabin" }))
                    .concat(t.leverage, "X")
                : ""
                    .concat(e({ id: "kcex_contract_exchange_allCabin" }))
                    .concat(t.leverage, "X");
          }
          return "--";
        },
        formatLiquidatePrice = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return 0 === e || "0" === e
            ? "0"
            : (0, l.Qk)((0, l.FT)(Math.min(e, o.ydx), t));
        },
        cutLiquidatePrice = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return 0 === e || "0" === e ? "0" : (0, l.FT)(Math.min(e, o.ydx), t);
        },
        generateMarks = function () {
          let {
              max: e,
              min: t,
              shouldShowName: n = !0,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = 2,
            i = e;
          [50, 40, 25, 20, 15, 10, 5, 2].some((t) => {
            let n = e / t;
            return n % 1 == 0 && n >= 4 && ((o = n), (i = t), !0);
          });
          let a = {};
          for (let e = 0; e <= o; e++) {
            let t = e * i || 1;
            a[t] = n ? "".concat(t, "x") : " ";
          }
          for (let o in ((a[t] = n ? "".concat(t, "x") : " "), a))
            o > e && delete a[o], o < t && delete a[o];
          return a;
        },
        checkEntrustTypeNeedSetLastPrice = (e) => {
          "number" != typeof e &&
            "string" != typeof e &&
            console.warn("entrustTypeId应该是字符串或者数字", e);
          let t = String(e);
          return t === o.sLL.LIMIT || t === o.sLL.POST_ONLY;
        },
        isEmptyVal = (e) => null == e || "" === e,
        isEmptyAndZeroVal = (e) =>
          null == e || "" === e || 0 === (0, l.qu)(e, 0),
        checkHasStopLossCloseLiquidateTip = (e) => {
          let t = o.Ke1.NORMAL;
          if (e) {
            let {
                openType: n,
                liquidatePrice: i,
                openAvgPrice: a,
                positionType: c,
              } = e,
              l = Number(n) === o.Oh4.ALL_CABIN,
              u = Number(c) === o.RzN.LONG;
            l && ((u && i > a) || (!u && i < a)) && (t = o.Ke1.CROSS_SPECIAL);
          }
          return t === o.Ke1.NORMAL;
        },
        calcClosedLiquidatePrice = (e, t) => {
          if (void 0 !== e && void 0 !== t) {
            let n = Number(t) === o.RzN.LONG;
            return n ? 1.005 * e : 0.995 * e;
          }
          return null;
        },
        addPositionInfoToStopOrder = (e, t) => (
          Array.isArray(t) &&
            Array.isArray(e) &&
            e.forEach((e) => {
              if (e.positionId) {
                let n = t.filter((t) => t.positionId == e.positionId)[0];
                n
                  ? ((e.liquidatePrice =
                      void 0 !== n.liquidatePrice ? n.liquidatePrice : "--"),
                    (e.openAvgPrice = n.openAvgPrice ? n.openAvgPrice : "--"),
                    (e.leverage = n.leverage ? n.leverage : "--"),
                    (e.openType = n.openType))
                  : ((e.liquidatePrice = "--"), (e.openAvgPrice = "--"));
              } else (e.liquidatePrice = "--"), (e.openAvgPrice = "--");
            }),
          e
        ),
        checkIsTouchDevice = () => {
          var e;
          return !!(
            "ontouchstart" in window ||
            (null === (e = navigator) || void 0 === e
              ? void 0
              : e.maxTouchPoints)
          );
        },
        getAppWidth = async () => (isKcexApp(), getAppWidthSync()),
        getKcexAppInfo = async () => {
          if (isKcexApp()) {
            let e = (await (0, d.BN)()) || null;
            return e;
          }
          return null;
        },
        getAppWidthSync = () => {
          var e, t;
          return null === (t = globalThis) || void 0 === t
            ? void 0
            : null === (e = t.window) || void 0 === e
            ? void 0
            : e.innerWidth;
        },
        checkScreenSizeType = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : getAppWidthSync();
          return e > o.fnm ? o.w22.PC : e < o.wu2 ? o.w22.MOBILE : o.w22.PAD;
        },
        getScreenSizeAndType = async () => {
          let e = await getAppWidth();
          return { screenSize: e, screenSizeType: checkScreenSizeType(e) };
        },
        getScreenSizeAndTypeSync = () => {
          let e = getAppWidthSync();
          return { screenSize: e, screenSizeType: checkScreenSizeType(e) };
        };
      function commonReducer(e, t) {
        return { ...e, ...t };
      }
      function updateSymbolRiskInfoWhenChangeContract(e) {
        let { dispatch: t, symbol: n, language: o, token: i } = e;
        (n = n || getPathSymbol()),
          t &&
            n &&
            o &&
            i &&
            (t({
              type: "contract/saveSymbolRiskInfo",
              payload: { symbol: n, pending: !0 },
            }),
            t({
              type: "contract/getSymbolRiskInfo",
              payload: { symbol: n, language: o },
            }));
      }
      let getPathSymbol = () => {
          let e = /(\/futures\/exchange\/)(.*)/gi.exec(
              window.location.pathname
            ),
            t = e && e[2];
          return t;
        },
        getCurrentPositionUnit = (e) => {
          let { formatMessage: t, unit: n, productInfo: i } = e;
          if (!t && !(0, a.sk)()) {
            var c;
            t =
              null === (c = window) || void 0 === c ? void 0 : c._formatMessage;
          }
          return Number(n) === o.Ydi.SHEET
            ? t({ id: "kcex_contract_common_pieces" })
            : Number(n) === o.Ydi.COIN
            ? null == i
              ? void 0
              : i.baseCoinName
            : Number(n) === o.Ydi.USDT
            ? "USDT"
            : void 0;
        },
        templateErrorMsg = (e) => {
          try {
            return e.replace(/(\{)([\s\S]+?)(\})/g, "");
          } catch (e) {
            return console.warn(e), "";
          }
        };
      function isKcexApp() {
        var e, t, n;
        return (
          void 0 !== window.kcexAppJsBridge ||
          void 0 !==
            (null === (n = window) || void 0 === n
              ? void 0
              : null === (t = n.webkit) || void 0 === t
              ? void 0
              : null === (e = t.messageHandlers) || void 0 === e
              ? void 0
              : e.kcexAppJsBridge)
        );
      }
      let checkShouldCutUp = (e) => {
          let { unit: t, coinUnit: n, reverseCoinUnit: i, productInfo: a } = e,
            c = null == a ? void 0 : a.isReverse;
          return (void 0 === t && (t = c ? i : n), c)
            ? Number(t) === o.Ydi.COIN
            : Number(t) === o.Ydi.USDT;
        },
        checkIsExchangePage = (e) => (
          (e = e || "") || (0, a.sk)() || (e = window.location.pathname),
          !!e.match(/^(\/[a-z]{2}(?:-[A-Z]{2})?)?\/futures\/exchange/)
        ),
        checkRiskTipStatus = function () {
          var e;
          let {
              allRiskTip: t,
              symbol: n,
              returnFullData: i = !1,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            c = "".concat(o.epN, "-").concat(n),
            l = t && t[n],
            u =
              null !== t &&
              n &&
              !(null == l ? void 0 : l.pending) &&
              !(null == l ? void 0 : l.hasShow) &&
              (!(null == l
                ? void 0
                : null === (e = l.location) || void 0 === e
                ? void 0
                : e.includes(o.w3K.SYMBOL_PAGE)) ||
                sessionStorage.getItem(c) ||
                (0, a.ej)(c));
          return i
            ? {
                riskTipStatus: !!u,
                isRiskTipShowAndClosed: !!(
                  (null !== t &&
                    n &&
                    !(null == l ? void 0 : l.pending) &&
                    (null == l ? void 0 : l.hasShow)) ||
                  sessionStorage.getItem(c) ||
                  (0, a.ej)(c)
                ),
              }
            : u;
        },
        checkIsPositionTpSl = (e) => Number(e) === o.tSO.POSITION_VOL,
        downloadBlob = (e) => {
          let { filename: t, Blob: n } = e;
          n &&
            n.then((e) => {
              let n = window.URL.createObjectURL(e),
                o = document.createElement("a");
              (o.style.display = "none"),
                (o.href = n),
                (o.download = t),
                document.body.appendChild(o),
                o.click(),
                o.remove(),
                window.URL.revokeObjectURL(n);
            });
        },
        getFingerPrintData = async () => {
          try {
            var e;
            let t =
              (null === (e = window) || void 0 === e
                ? void 0
                : e.store.getState()) || {};
            return t.auth, {};
          } catch (e) {
            return {};
          }
        },
        getTimeZoneString = () => {
          let e = new Date().getTimezoneOffset(),
            t = Math.abs(Math.floor(-(e / 60))),
            n = Math.abs(e % 60),
            o = "UTC"
              .concat(e > 0 ? "-" : "+")
              .concat(t > 9 ? t : "0" + t)
              .concat(n ? ":" + n : ":00");
          return o;
        },
        authorizationRejectHandle = (e, t) => {
          (0, a._5)("Authorization", L.Z.domain),
            e ? jumpToLoginPage() : t && window.location.reload();
        },
        isReverse = (e, t) => e === t;
    },
    16110: function (e, t, n) {
      "use strict";
      n.d(t, {
        Su: function () {
          return formatOrderTime;
        },
      });
      var o = n(62067),
        i = n.n(o),
        a = n(43344);
      n(44092), (a.Z.NE = -20);
      let timeToString = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "YYYY-MM-DD HH:mm:ss",
            n = isNaN(Number(e)) ? e : Number(e);
          return i()(n).format(t);
        },
        formatOrderTime = (e) =>
          timeToString(new Date(), "YYYY") === timeToString(e, "YYYY")
            ? timeToString(e, "MM-DD HH:mm:ss")
            : timeToString(e);
    },
    87860: function (e, t, n) {
      "use strict";
      n.d(t, {
        z1: function () {
          return getNumberRuleByLocale;
        },
      });
      var o = n(2011);
      let i = (0, o.iI)(),
        a = { "tr-TR": { decimal: ",", thousandths: ".", percent: "prefix" } },
        c = { decimal: ".", thousandths: ",", percent: "suffix" };
      function getNumberRuleByLocale() {
        let e = { ...c, ...a[i] },
          t = Object.keys(e).every((t) => e[t] === c[t]);
        return { ...e, isDefaultRule: t, defaultRule: { ...c } };
      }
    },
    64440: function (e, t, n) {
      "use strict";
      n.d(t, {
        $7: function () {
          return getRiskTable;
        },
        B: function () {
          return getCurrentMaxAmount;
        },
        bW: function () {
          return getCurrentLeverageRiskInfo;
        },
      });
      var o = n(75914),
        i = n(3012);
      let getRiskTable = (e, t) => {
          let {
              riskBaseVol: n,
              riskIncrVol: a,
              riskBaseVolLong: c,
              riskIncrVolLong: l,
              riskBaseVolShort: u,
              riskIncrVolShort: s,
              riskLongShortSwitch: d,
              riskLevelLimit: g,
              initialMarginRate: f,
              riskIncrImr: b,
              maintenanceMarginRate: p,
              riskIncrMmr: m,
            } = e || {},
            y = 0,
            _ = 0,
            v = 0,
            h = d === i.DUD.OPEN,
            k = [];
          for (let e = 1; e < g + 1; e++) {
            let i, d, w, A, S, E;
            if (
              ((i = o.Z.precision.plus(
                f,
                o.Z.precision.times(o.Z.precision.minus(e, 1), b)
              )),
              (d = Math.floor(o.Z.precision.divide(1, i))),
              (w = o.Z.precision.plus(
                p,
                o.Z.precision.times(o.Z.precision.minus(e, 1), m)
              )),
              (A = o.Z.precision.plus(
                Number(n),
                o.Z.precision.times(o.Z.precision.minus(e, 1), a)
              )),
              h
                ? ((S = o.Z.precision.plus(
                    Number(c),
                    o.Z.precision.times(o.Z.precision.minus(e, 1), l)
                  )),
                  (E = o.Z.precision.plus(
                    Number(u),
                    o.Z.precision.times(o.Z.precision.minus(e, 1), s)
                  )))
                : (S = E = A),
              t && (t <= A || e === g))
            ) {
              k.push({
                level: e,
                curMaxLeverage: d,
                curMaintenanceMarginRate: w,
                curPositionMin: y,
                curPositionMinLong: _,
                curPositionMinShort: v,
                curPositionMax: t,
                curPositionMaxLong: t,
                curPositionMaxShort: t,
              });
              break;
            }
            k.push({
              level: e,
              curMaxLeverage: d,
              curMaintenanceMarginRate: w,
              curPositionMin: y,
              curPositionMinLong: _,
              curPositionMinShort: v,
              curPositionMax: A,
              curPositionMaxLong: S,
              curPositionMaxShort: E,
            }),
              (y = A),
              h ? ((_ = S), (v = E)) : (_ = v = y);
          }
          return k;
        },
        getCurrentMaxAmount = (e, t, n) => {
          let o;
          let getCurPositionMax = (e) =>
            n ? e.curPositionMaxLong : e.curPositionMaxShort;
          for (let n = 0; n < e.length; n++) {
            if (e[n].curMaxLeverage === t) {
              o = getCurPositionMax(e[n]);
              break;
            }
            if (e[n].curMaxLeverage < t) {
              o = getCurPositionMax(0 === n ? e[n] : e[n - 1]);
              break;
            }
            n === e.length - 1 && (o = getCurPositionMax(e[n]));
          }
          return o;
        },
        getCurrentLeverageRiskInfo = (e, t) => {
          let n;
          for (let o = 0; o < e.length; o++) {
            if (e[o].curMaxLeverage === t) {
              n = e[o];
              break;
            }
            if (e[o].curMaxLeverage < t) {
              n = 0 === o ? e[o] : e[o - 1];
              break;
            }
            o === e.length - 1 && (n = e[o]);
          }
          return n;
        };
    },
    74204: function (e, t, n) {
      "use strict";
      n.d(t, {
        EY: function () {
          return sensorsAbtest;
        },
        Wr: function () {
          return sensorsEvent;
        },
      });
      let sensorsEvent = (e, t) => {
          "object" == typeof window.sensors &&
            "function" == typeof window.sensors.track &&
            window.sensors.track(e, t);
        },
        sensorsAbtest = async (e) => {
          var t, n;
          if (
            "function" ==
            typeof (null === (n = window) || void 0 === n
              ? void 0
              : null === (t = n.sensorsAbtest) || void 0 === t
              ? void 0
              : t.fastFetchABTest)
          )
            return new Promise((t) => {
              window.sensorsAbtest.fastFetchABTest({
                ...e,
                callback: (e) => {
                  t(e);
                },
              });
            });
        };
    },
    74229: function (e, t, n) {
      "use strict";
      n.d(t, {
        $u: function () {
          return baseToPieces;
        },
        A9: function () {
          return calcPNL;
        },
        M3: function () {
          return calculateAdvanceOpenCostNoFee;
        },
        NV: function () {
          return calculateAdvanceOpenCost;
        },
        OL: function () {
          return calcMinAmountByUnit;
        },
        Px: function () {
          return calculateVolumeByLeverage;
        },
        RE: function () {
          return calculateOrderLiquidatePrice;
        },
        YL: function () {
          return calculateQuotePrice;
        },
        YU: function () {
          return getTurnover;
        },
        b: function () {
          return calculateVolume;
        },
        ez: function () {
          return calcStopPriceAndNum;
        },
        q5: function () {
          return formatStopPrice;
        },
        r9: function () {
          return calcIm;
        },
        uk: function () {
          return calculateContractValue;
        },
        zS: function () {
          return baseToSheet;
        },
        zs: function () {
          return unitSwitch;
        },
      });
      var o = n(75914),
        i = n(3012),
        a = n(12486),
        c = n(64440);
      let calculateVolume = (e, t, n, o, i) => {
          let a = 0,
            c = (null == e ? void 0 : e.leverageRiskInfo)
              ? o
                ? null == e
                  ? void 0
                  : e.leverageRiskInfo.longRiskInfo.mmr
                : null == e
                ? void 0
                : e.leverageRiskInfo.shortRiskInfo.mmr
              : null == e
              ? void 0
              : e.maintenanceMarginRate;
          return (
            (isNaN(
              (a = o
                ? (null == e ? void 0 : e.isReverse)
                  ? (t * n) /
                    ((null == e ? void 0 : e.contractSize) *
                      ((1 / i + (null == e ? void 0 : e.takerFeeRate)) *
                        (1 + (null == e ? void 0 : e.takerFeeRate)) +
                        (null == e ? void 0 : e.takerFeeRate) * (1 - c)))
                  : t /
                    (n *
                      (null == e ? void 0 : e.contractSize) *
                      (1 / i + 2 * (null == e ? void 0 : e.takerFeeRate)))
                : (null == e ? void 0 : e.isReverse)
                ? (t * n) /
                  ((null == e ? void 0 : e.contractSize) *
                    (1 / i + 2 * (null == e ? void 0 : e.takerFeeRate)))
                : t /
                  (n *
                    (null == e ? void 0 : e.contractSize) *
                    ((1 / i + (null == e ? void 0 : e.takerFeeRate)) *
                      (1 + (null == e ? void 0 : e.takerFeeRate)) +
                      (null == e ? void 0 : e.takerFeeRate) * (1 - c))))
            ) ||
              a === 1 / 0 ||
              a === -1 / 0) &&
              (a = 0),
            a
          );
        },
        calculateVolumeByLeverage = (e, t, n, o, i, a) => {
          let l = { ...e },
            u = (0, c.bW)(a, i);
          return (
            u &&
              ((u.mmr = u.curMaintenanceMarginRate),
              (l.leverageRiskInfo = { longRiskInfo: u, shortRiskInfo: u })),
            calculateVolume(l, t, n, o, i)
          );
        },
        calcPNL = (e, t, n, o, i) => {
          if (!i) return 0;
          let c = 0;
          return (
            (isNaN(
              (c = (null == i ? void 0 : i.isReverse)
                ? (0, a.Jp)(
                    (0, a.Jp)(e, null == i ? void 0 : i.contractSize),
                    1 == t
                      ? (0, a.cs)(1, n) - (0, a.cs)(1, o)
                      : (0, a.cs)(1, o) - (0, a.cs)(1, n)
                  )
                : (0, a.Jp)(
                    (0, a.Jp)(e, null == i ? void 0 : i.contractSize),
                    1 == t ? (0, a.lu)(o, n) : (0, a.lu)(n, o)
                  ))
            ) ||
              c === 1 / 0 ||
              c === -1 / 0) &&
              (c = 0),
            c
          );
        },
        calculateAdvanceOpenCost = (e, t, n, o, i, a, c) => {
          let l,
            u = 0;
          if (
            ((l = (null == o ? void 0 : o.leverageRiskInfo)
              ? 1 === n
                ? null == o
                  ? void 0
                  : o.leverageRiskInfo.longRiskInfo.currentMmr
                : null == o
                ? void 0
                : o.leverageRiskInfo.shortRiskInfo.currentMmr
              : (null == o ? void 0 : o.riskInfo)
              ? 1 === n
                ? null == o
                  ? void 0
                  : o.riskInfo.longRiskInfo.mmr
                : null == o
                ? void 0
                : o.riskInfo.shortRiskInfo.mmr
              : null == o
              ? void 0
              : o.maintenanceMarginRate),
            null == o ? void 0 : o.isReverse)
          ) {
            if (1 === n) {
              let n = a ? Math.min(e, a[0]) : e;
              u =
                (t *
                  (null == o ? void 0 : o.contractSize) *
                  ((1 / i + (null == o ? void 0 : o.takerFeeRate)) *
                    (1 + (null == o ? void 0 : o.takerFeeRate)) +
                    (null == o ? void 0 : o.takerFeeRate) * (1 - l))) /
                n;
            } else
              u =
                (t *
                  (null == o ? void 0 : o.contractSize) *
                  (1 / i + 2 * (null == o ? void 0 : o.takerFeeRate))) /
                e;
          } else if (1 === n)
            u =
              e *
              t *
              (null == o ? void 0 : o.contractSize) *
              (1 / i + 2 * (null == o ? void 0 : o.takerFeeRate));
          else {
            let n = a ? (c ? a[0] : Math.max(e, a[0])) : e;
            u =
              n *
              t *
              (null == o ? void 0 : o.contractSize) *
              ((1 / i + (null == o ? void 0 : o.takerFeeRate)) *
                (1 + (null == o ? void 0 : o.takerFeeRate)) +
                (null == o ? void 0 : o.takerFeeRate) * (1 - l));
          }
          return u;
        },
        calculateAdvanceOpenCostNoFee = (e, t, n, o, i, a) => {
          let c = (null == o ? void 0 : o.riskInfo)
            ? 1 === n
              ? null == o
                ? void 0
                : o.riskInfo.longRiskInfo.mmr
              : null == o
              ? void 0
              : o.riskInfo.shortRiskInfo.mmr
            : null == o
            ? void 0
            : o.maintenanceMarginRate;
          return (null == o ? void 0 : o.isReverse)
            ? 1 === n
              ? ((t * (null == o ? void 0 : o.contractSize)) /
                  (a ? Math.min(e, a[0]) : e)) *
                ((1 / i) * 1 + 0 * (1 - 1 / i))
              : (t * (null == o ? void 0 : o.contractSize) * (1 / i + 0)) / e
            : 1 === n
            ? e * t * (null == o ? void 0 : o.contractSize) * (1 / i + 0)
            : (a ? Math.max(e, a[0]) : e) *
              t *
              (null == o ? void 0 : o.contractSize) *
              ((1 / i) * 1 + 0 * (1 - c));
        },
        calculateContractValue = (e, t, n, o) =>
          e <= 0 || 0 === t || n <= 0
            ? 0
            : o
            ? (0, a.cs)((0, a.Jp)(e, n), t)
            : (0, a.Jp)((0, a.Jp)(e, n), t),
        calcIm = (e) => {
          let {
            side: t,
            productInfo: n,
            openAvgPrice: o,
            vol: i,
            leverage: a,
            isReverse: c,
            mmr: l,
          } = e;
          l ||
            (l = (null == n ? void 0 : n.leverageRiskInfo)
              ? t
                ? null == n
                  ? void 0
                  : n.leverageRiskInfo.longRiskInfo.mmr
                : null == n
                ? void 0
                : n.leverageRiskInfo.shortRiskInfo.mmr
              : null == n
              ? void 0
              : n.maintenanceMarginRate);
          let u = 1 / a;
          return c
            ? t
              ? (i *
                  (null == n ? void 0 : n.contractSize) *
                  u *
                  (1 + (null == n ? void 0 : n.takerFeeRate))) /
                  o +
                (i *
                  (null == n ? void 0 : n.contractSize) *
                  (null == n ? void 0 : n.takerFeeRate) *
                  (1 - l)) /
                  o
              : ((i * (null == n ? void 0 : n.contractSize)) / o) *
                (u + (null == n ? void 0 : n.takerFeeRate))
            : t
            ? o *
              i *
              (null == n ? void 0 : n.contractSize) *
              (u + (null == n ? void 0 : n.takerFeeRate))
            : o *
                i *
                (null == n ? void 0 : n.contractSize) *
                u *
                (1 + (null == n ? void 0 : n.takerFeeRate)) +
              o *
                i *
                (null == n ? void 0 : n.contractSize) *
                (null == n ? void 0 : n.takerFeeRate) *
                (1 - l);
        },
        calculateOrderLiquidatePrice = (e) => {
          let t,
            {
              side: n,
              productInfo: o,
              openAvgPrice: i,
              vol: a,
              leverage: c,
              positionImValue: l,
              isReverse: u,
              openType: s,
              availableBalance: d,
              calcMmr: g,
              type: f = "position",
            } = e,
            b = l;
          (d = Number(d)), (a = Number(a)), (i = Number(i));
          let p =
            g ||
            ((null == o ? void 0 : o.riskInfo)
              ? n
                ? null == o
                  ? void 0
                  : o.riskInfo.longRiskInfo.mmr
                : null == o
                ? void 0
                : o.riskInfo.shortRiskInfo.mmr
              : null == o
              ? void 0
              : o.maintenanceMarginRate);
          return (
            l ||
              (b = calcIm({
                side: n,
                productInfo: o,
                openAvgPrice: i,
                vol: a,
                leverage: c,
                isReverse: u,
                mmr: p,
              })),
            "1" == s
              ? u
                ? n
                  ? (t =
                      (i *
                        a *
                        (null == o ? void 0 : o.contractSize) *
                        (1 + (null == o ? void 0 : o.takerFeeRate))) /
                      (a * (null == o ? void 0 : o.contractSize) * (1 - p) +
                        b * i)) < 0 && (t = 0)
                  : (t =
                      (i *
                        a *
                        (null == o ? void 0 : o.contractSize) *
                        (1 - (null == o ? void 0 : o.takerFeeRate))) /
                      (a * (null == o ? void 0 : o.contractSize) * (1 + p) -
                        b * i)) < 0 && (t = 1e5)
                : n
                ? (t =
                    (i * a * (null == o ? void 0 : o.contractSize) * p +
                      i * a * (null == o ? void 0 : o.contractSize) -
                      b) /
                    (a *
                      (null == o ? void 0 : o.contractSize) *
                      (1 - (null == o ? void 0 : o.takerFeeRate)))) < 0 &&
                  (t = 0)
                : (t =
                    (b -
                      i * (null == o ? void 0 : o.contractSize) * a * p +
                      i * a * (null == o ? void 0 : o.contractSize)) /
                    (a *
                      (null == o ? void 0 : o.contractSize) *
                      (1 + (null == o ? void 0 : o.takerFeeRate)))) < 0 &&
                  (t = 1e5)
              : "calc" === f &&
                (u
                  ? n
                    ? (t =
                        (a *
                          (null == o ? void 0 : o.contractSize) *
                          (1 + (null == o ? void 0 : o.takerFeeRate))) /
                        (d +
                          a *
                            (null == o ? void 0 : o.contractSize) *
                            (1 / i -
                              p / i -
                              (null == o ? void 0 : o.takerFeeRate) / i))) <
                        0 && (t = 0)
                    : (t =
                        (a *
                          (null == o ? void 0 : o.contractSize) *
                          ((null == o ? void 0 : o.takerFeeRate) - 1)) /
                        (d -
                          a *
                            (null == o ? void 0 : o.contractSize) *
                            (1 / i +
                              p / i +
                              (null == o ? void 0 : o.takerFeeRate) / i))) <
                        0 && (t = 1e5)
                  : n
                  ? (t =
                      (d -
                        i *
                          a *
                          (null == o ? void 0 : o.contractSize) *
                          (1 + p + (null == o ? void 0 : o.takerFeeRate))) /
                      (a *
                        (null == o ? void 0 : o.contractSize) *
                        ((null == o ? void 0 : o.takerFeeRate) - 1))) < 0 &&
                    (t = 0)
                  : (t =
                      (i *
                        a *
                        (null == o ? void 0 : o.contractSize) *
                        (1 - p - (null == o ? void 0 : o.takerFeeRate)) +
                        d) /
                      (a *
                        (null == o ? void 0 : o.contractSize) *
                        ((null == o ? void 0 : o.takerFeeRate) + 1))) < 0 &&
                    (t = 1e5)),
            t > 1e6 && (t = 1e6),
            t
          );
        },
        calculateQuotePrice = (e, t, n, o) =>
          n <= 0 ? 0 : o ? (e <= 0 ? 0 : (t * n) / e) : t <= 0 ? 0 : e / t / n,
        unitSwitch = (e) => {
          let {
            vol: t,
            productInfo: n,
            price: o,
            unit: c = 0,
            dec: l,
            isCutUp: u = !1,
          } = e;
          if (0 == c) return t;
          if (!n) return "0";
          let {
              contractSize: s,
              isReverse: d,
              baseUnitLen: g,
              amountScale: f,
            } = n,
            b = "";
          return (
            d
              ? c == i.Ydi.COIN
                ? (b = u
                    ? (0, a.lA)(
                        (0, a.cs)((0, a.Jp)(t, s), o),
                        null != l ? l : g
                      )
                    : (0, a.FT)(
                        (0, a.cs)((0, a.Jp)(t, s), o),
                        null != l ? l : g
                      ))
                : c == i.Ydi.USDT &&
                  (b = u
                    ? (0, a.lA)((0, a.Jp)(t, s), null != l ? l : f)
                    : (0, a.FT)((0, a.Jp)(t, s), null != l ? l : f))
              : c == i.Ydi.COIN
              ? (b = (0, a.FT)((0, a.Jp)(t, s), null != l ? l : g))
              : c == i.Ydi.USDT &&
                (b = u
                  ? (0, a.lA)((0, a.Jp)((0, a.Jp)(t, s), o), null != l ? l : f)
                  : (0, a.FT)(
                      (0, a.Jp)((0, a.Jp)(t, s), o),
                      null != l ? l : f
                    )),
            b
          );
        },
        baseToPieces = (e) => {
          let {
              vol: t,
              productInfo: n = {},
              price: o,
              unit: c,
              allOrder: l = !1,
            } = e,
            { contractSize: u, isReverse: s } = n || {},
            d = "";
          return (
            s
              ? (d = (0, a.cs)((0, a.Jp)(o, t), u))
              : c == i.Ydi.COIN
              ? (d = (0, a.cs)(t, u))
              : c == i.Ydi.USDT && (d = (0, a.cs)(t, (0, a.Jp)(o, u))),
            d || (d = 0),
            l ? Math.ceil(d) : Math.floor(d)
          );
        },
        baseToSheet = (e) => {
          let {
            vol: t,
            productInfo: n = {},
            price: o,
            unit: a,
            allOrder: c = !1,
          } = e;
          return a == i.Ydi.SHEET
            ? t
            : baseToPieces({
                vol: t,
                productInfo: n,
                price: o,
                unit: a,
                allOrder: c,
              });
        },
        calcStopPriceAndAmount = (e) => {
          let {
              productInfo: t,
              isLong: n,
              outputType: o,
              entrustPrice: i,
              price: c,
              amount: l,
              vol: u,
            } = e,
            { contractSize: s, isReverse: d, amountScale: g } = t,
            f = (() => {
              switch (o) {
                case "amount":
                  if (!c && 0 !== c) return "";
                  if (d) {
                    let e = n
                        ? (0, a.lu)(1 / i, 1 / c)
                        : (0, a.lu)(1 / c, 1 / i),
                      t = (0, a.Jp)(e, u);
                    return (0, a.Jp)(t, s);
                  }
                  {
                    let e = n ? (0, a.lu)(c, i) : (0, a.lu)(i, c),
                      t = (0, a.Jp)(e, u);
                    return (0, a.Jp)(t, s);
                  }
                case "price":
                  if (!l && 0 !== l) return "";
                  if (d) {
                    let e = (0, a.Jp)(u, s),
                      t = (0, a.Jp)(i, e),
                      o = (0, a.Jp)(i, l),
                      c = n ? (0, a.lu)(e, o) : (0, a.IH)(e, o);
                    return (0, a.cs)(t, c);
                  }
                  {
                    let e = (0, a.Jp)(u, s),
                      t = (0, a.cs)(l, e);
                    return n ? (0, a.IH)(i, t) : (0, a.lu)(i, t);
                  }
                default:
                  return "";
              }
            })();
          return "" === f
            ? f
            : (Math.abs(f) === 1 / 0 && (f = 0),
              String(
                "amount" === o ? (0, a.FT)(f, g) : formatStopPrice(f, t, 9)
              ));
        },
        calcStopPriceAndWave = (e) => {
          let {
              productInfo: t,
              isLong: n,
              outputType: i,
              entrustPrice: c,
              price: l,
              wave: u,
              leverage: s,
              rate: d,
            } = e,
            { isReverse: g } = t,
            f = (() => {
              switch (i) {
                case "wave":
                  if (l || 0 === l) {
                    if (g) {
                      let e = (0, a.cs)(c, l);
                      return (0, a.Jp)(
                        s,
                        n ? (0, a.lu)(1, e) : (0, a.lu)(e, 1)
                      );
                    }
                    {
                      let e = (0, a.cs)(l, c);
                      return (0, a.Jp)(
                        s,
                        n ? (0, a.lu)(e, 1) : (0, a.lu)(1, e)
                      );
                    }
                  }
                  return "";
                case "rate":
                  if (l || 0 === l) {
                    let e = (0, a.lu)(l, c);
                    return (0, a.cs)(e, c);
                  }
                  return "";
                case "price":
                  if (u || 0 === u) {
                    let e = o.Z.precision.divide(u, 100),
                      t = (0, a.cs)(e, s);
                    if (!g)
                      return (0, a.Jp)(
                        c,
                        n ? (0, a.IH)(1, t) : (0, a.lu)(1, t)
                      );
                    return (0, a.cs)(c, n ? (0, a.lu)(1, t) : (0, a.IH)(t, 1));
                  }
                  if (d || 0 === d) {
                    let e = o.Z.precision.divide(d, 100),
                      t = (0, a.Jp)(e, c);
                    return (0, a.IH)(t, c);
                  }
                  return "";
                default:
                  return "";
              }
            })();
          return "" === f
            ? f
            : (Math.abs(f) === 1 / 0 && (f = 0),
              String(
                "wave" === i || "rate" === i
                  ? (0, a.Jp)(o.Z.splitFormat(f, 4), 100)
                  : formatStopPrice(f, t, 9)
              ));
        },
        formatStopPrice = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 8,
            { priceScale: i, priceUnit: a } = t,
            c = o.Z.retainDecimals(e, { integer: n, decimal: i }) || "";
          return c > 0 && (c = o.Z.stepNum(c, a)), c;
        },
        calcStopPriceAndNum = (e) => {
          var t;
          let { inputType: n, inputValue: o, outputOrigin: i = !1, ...a } = e;
          n && void 0 !== o && (a[n] = o);
          let c = { price: void 0, wave: void 0, amount: void 0, rate: void 0 };
          if (
            ("price" === n
              ? ((c.rate = calcStopPriceAndWave({ ...a, outputType: "rate" })),
                (c.price = a.price),
                (c.wave = calcStopPriceAndWave({ ...a, outputType: "wave" })),
                (c.amount = calcStopPriceAndAmount({
                  ...a,
                  outputType: "amount",
                })))
              : "amount" === n
              ? ((c.rate = calcStopPriceAndWave({ ...a, outputType: "rate" })),
                (c.price = calcStopPriceAndAmount({
                  ...a,
                  outputType: "price",
                })),
                (c.wave = calcStopPriceAndWave({
                  ...a,
                  outputType: "wave",
                  price: c.price,
                })),
                (c.amount = a.amount))
              : "wave" === n
              ? ((c.rate = calcStopPriceAndWave({ ...a, outputType: "rate" })),
                (c.price = calcStopPriceAndWave({ ...a, outputType: "price" })),
                (c.wave = a.wave),
                (c.amount = calcStopPriceAndAmount({
                  ...a,
                  outputType: "amount",
                  price: c.price,
                })))
              : "rate" === n &&
                ((c.rate = a.rate),
                (c.price = calcStopPriceAndWave({ ...a, outputType: "price" })),
                (c.wave = calcStopPriceAndWave({
                  ...a,
                  outputType: "wave",
                  price: c.price,
                })),
                (c.amount = calcStopPriceAndAmount({
                  ...a,
                  outputType: "amount",
                  price: c.price,
                }))),
            !i &&
              "price" !== n &&
              (null === (t = c.price) || void 0 === t ? void 0 : t.length))
          ) {
            let e = Number(c.price);
            (e <= 0 || e.toFixed(0).length > 8) && (c.price = "--");
          }
          return (
            ((null == c ? void 0 : c.wave) === "NaN" ||
              isNaN(null == c ? void 0 : c.wave)) &&
              (c.wave = ""),
            ((null == c ? void 0 : c.rate) === "NaN" ||
              isNaN(null == c ? void 0 : c.rate)) &&
              (c.rate = ""),
            c
          );
        },
        calcUsdtMinVol = (e) => {
          let {
            price: t,
            productInfo: n,
            positionMode: o = i.b5g.HEDGE_MODE,
          } = e;
          if (!n || "object" != typeof n)
            return console.warn("calcUsdtMinVol productInfo 必传"), 0;
          {
            let { contractSize: e, minVol: c, amountScale: l } = n;
            if (Number(o) === i.b5g.HEDGE_MODE)
              return (0, a.lA)((0, a.Jp)((0, a.Jp)(c, e), t), l);
            {
              let i = calcSheetMinVol({
                  price: t,
                  productInfo: n,
                  positionMode: o,
                }),
                u = Math.max(i * t * e, c * t * e);
              return (0, a.lA)(u, l);
            }
          }
        },
        calcSheetMinVol = (e) => {
          let {
            price: t,
            productInfo: n,
            positionMode: o = i.b5g.HEDGE_MODE,
          } = e;
          if (!n || "object" != typeof n)
            return console.warn("calcSheetMinVol productInfo 必传", n), 0;
          {
            let { contractSize: e, minVol: a, isReverse: c } = n;
            return Number(o) === i.b5g.HEDGE_MODE
              ? a || 0
              : Math.max(c ? Math.ceil(5 / e) : Math.ceil(5 / (t * e)), a);
          }
        },
        calcCoinMinVol = (e) => {
          let {
            price: t,
            productInfo: n,
            positionMode: o = i.b5g.HEDGE_MODE,
          } = e;
          if (!n || "object" != typeof n)
            return console.warn("calcCoinMinVol productInfo 必传", n), 0;
          {
            let {
              minVol: e,
              baseUnitLen: c,
              isReverse: l,
              contractSize: u,
            } = n;
            if (Number(o) === i.b5g.HEDGE_MODE)
              return l
                ? (0, a.lA)((0, a.cs)((0, a.Jp)(e, u), t), c)
                : unitSwitch({
                    vol: e,
                    productInfo: n,
                    price: t,
                    unit: i.Ydi.COIN,
                    dec: c,
                  });
            {
              let s, d;
              let g = calcSheetMinVol({
                price: t,
                productInfo: n,
                positionMode: o,
              });
              return (
                l
                  ? ((s = (0, a.lA)((0, a.cs)((0, a.Jp)(g, u), t), c)),
                    (d = (0, a.lA)((0, a.cs)((0, a.Jp)(e, u), t), c)))
                  : ((s = unitSwitch({
                      vol: g,
                      productInfo: n,
                      price: t,
                      unit: i.Ydi.COIN,
                      dec: c,
                    })),
                    (d = unitSwitch({
                      vol: e,
                      productInfo: n,
                      price: t,
                      unit: i.Ydi.COIN,
                      dec: c,
                    }))),
                Number(s) < Number(d) ? d : s
              );
            }
          }
        },
        calcMinAmountByUnit = (e) => {
          let {
            price: t,
            productInfo: n,
            unit: o,
            positionMode: a = i.b5g.HEDGE_MODE,
          } = e;
          return n && null != o
            ? (o = Number(o)) === i.Ydi.USDT
              ? calcUsdtMinVol({ price: t, productInfo: n, positionMode: a })
              : o === i.Ydi.COIN
              ? calcCoinMinVol({ price: t, productInfo: n, positionMode: a })
              : o === i.Ydi.SHEET
              ? calcSheetMinVol({ price: t, productInfo: n, positionMode: a })
              : 0
            : (console.warn("calcMinAmountByUnit productInfo、unit 必传", n, o),
              "--");
        },
        getTurnover = (e) => {
          let { turnover: t, vol: n, productInfo: o } = e;
          return o
            ? (null == o ? void 0 : o.isReverse)
              ? (0, a.Jp)(n, null == o ? void 0 : o.contractSize)
              : t
            : 0;
        };
    },
    75914: function (e, t, n) {
      "use strict";
      var o = n(12486),
        i = n(45883);
      let a = {
        precision: new (class {
          times() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return 0 === t.length
              ? (console.error("至少2个参数"), 0)
              : 1 === t.length
              ? (console.error("至少2个参数"), Number(t[0]))
              : t.reduce(
                  (e, t) => (
                    (e = e || 0), (t = t || 0), Number((0, o.Jp)(e, t))
                  )
                );
          }
          plus() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return 0 === t.length
              ? (console.error("至少2个参数"), 0)
              : 1 === t.length
              ? (console.error("至少2个参数"), Number(t[0]))
              : t.reduce(
                  (e, t) => (
                    (e = "" === e || isNaN(e) ? 0 : e),
                    (t = "" === t || isNaN(t) ? 0 : t),
                    Number((0, o.IH)(e, t))
                  )
                );
          }
          minus() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return 0 === t.length
              ? (console.error("至少2个参数"), 0)
              : 1 === t.length
              ? (console.error("至少2个参数"), Number(t[0]))
              : t.reduce(
                  (e, t) => (
                    (e = "" === e || isNaN(e) ? 0 : e),
                    (t = "" === t || isNaN(t) ? 0 : t),
                    Number((0, o.lu)(e, t))
                  )
                );
          }
          divide() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return 0 === t.length
              ? (console.error("至少2个参数"), 0)
              : 1 === t.length
              ? (console.error("至少2个参数"), Number(t[0]))
              : t.reduce((e, t) =>
                  ((e = "" === e || isNaN(e) ? 0 : e),
                  (t = "" === t || isNaN(t) ? 0 : t),
                  0 === e && 0 === t)
                    ? 0
                    : Number((0, o.cs)(e, t))
                );
          }
          divide2(e, t) {
            let n = 0,
              o = 0;
            try {
              n = e.toString().split(".")[1].length;
            } catch (e) {}
            try {
              o = t.toString().split(".")[1].length;
            } catch (e) {}
            return (
              (Number(e.toString().replace(".", "")) /
                Number(t.toString().replace(".", ""))) *
              Math.pow(10, o - n)
            );
          }
          round(e, t) {
            let n = Math.pow(10, t);
            return this.divide(Math.round(this.times(e, n)), n);
          }
          float2Fixed(e) {
            if (!~e.toString().indexOf("e"))
              return Number(e.toString().replace(".", ""));
            let t = this.digitLength(e);
            return t > 0 ? e * Math.pow(10, t) : e;
          }
          digitLength(e) {
            let t = e.toString().split(/[eE]/),
              n = (t[0].split(".")[1] || "").length - (+t[1] || 0);
            return n > 0 ? n : 0;
          }
          checkBoundary(e) {
            (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER) &&
              console.log(
                "".concat(
                  e,
                  " is beyond boundary when transfer to integer, the results may not be accurate"
                )
              );
          }
        })(),
        retainDecimals(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            !e ||
            ("string" != typeof e && (e = this.numberToString(e)),
            ~e.indexOf("e"))
          )
            return 0;
          let n = "";
          if (e.indexOf(".") > 0 && 0 !== t.decimal) {
            let o = RegExp("[.]{1}[0-9]{0," + (t.decimal || 8) + "}").exec(e);
            o && (n = o[0]);
          }
          let o = 0;
          o = RegExp(
            "^-?[0-9]{1}[0-9]{0," + (Number(t.integer) - 1 || 18) + "}"
          ).exec(e);
          let i = "";
          return o && (i = o[0]), i + n;
        },
        stepNum(e, t) {
          if (
            (e = String(e).replace(/^\D*(\d*(?:\.\d{0,})?).*$/g, "$1")).indexOf(
              "."
            ) > 0
          ) {
            let n = e.split(".");
            if (1 === Number(t)) return n[0];
            if (n[1].length > 0) {
              let i = Math.floor((0, o.cs)(e, t)),
                a = (0, o.FH)((0, o.Jp)(i, t), n[1].length);
              return a;
            }
          }
          return e;
        },
        stepVol(e, t) {
          if (
            (e = String(e).replace(/^\D*(\d*(?:\.\d{0,})?).*$/g, "$1")).indexOf(
              "."
            ) > 0
          ) {
            let n = e.split(".");
            if (1 === Number(t)) return n[0];
            if (n[1].length > 0) {
              let i = Math.floor((0, o.cs)(e, t)),
                a = (0, o.FH)((0, o.Jp)(i, t), n[1].length);
              return a;
            }
          }
          return e;
        },
        splitFormat(e, t, n) {
          if (isNaN(e) || !e) return e;
          {
            if ("0" === e) return e;
            let o = e.toString().split(".");
            if (0 === t) return o[0];
            if (o.length > 1) {
              if (0 === t) return o[0];
              if (o[1].length < t) {
                let n = "";
                for (let e = 0; e < t - o[1].length; e++) n += "0";
                return e + n;
              }
              {
                let e = o[1].substring(0, n || t);
                return o[0] + "." + e;
              }
            }
            {
              let n = ".";
              for (let e = 0; e < t; e++) n += "0";
              return e + n;
            }
          }
        },
        addZero: (e, t) =>
          isNaN(e)
            ? 0
            : String(String(e)).replace(
                new RegExp("^(\\-?)(\\d+)(\\.\\d{1,".concat(t, "})?")),
                (e, n, o, i) => {
                  let a = n + o;
                  return (
                    t &&
                      (i
                        ? (a += i + repeat("0", t - i.length))
                        : (a += "." + repeat("0", t))),
                    a
                  );
                }
              ),
        addCommom(e, t) {
          if (isNaN(e) || !e) return String(e);
          if ((0 !== Number(e) && e % 1 == 0 && (t = void 0), void 0 === t)) {
            var n;
            let o = e;
            o = String(e);
            let i = null !== (n = o.split(".")[1]) && void 0 !== n ? n : "";
            t = i.length;
          }
          return (0, o.he)(e, t, !1, !1);
        },
        numberToString: (e) => (0, o.D$)(e),
        cutZero: (e) => (e = String(e)).replace(/(?:\.0*|(\.\d+?)0+)$/, "$1"),
        timeFormat(e, t) {
          let n, o, i, a;
          let c =
            ((o = (n = new Date(e)).getTimezoneOffset() + 480),
            n.setMinutes(n.getMinutes() + o),
            n);
          if (!t) return getYMD(c) + " " + getHMS(c);
          switch (t) {
            case "HMS":
              return getHMS(c);
            case "YMD":
              return getYMD(c);
            case "MD":
              return (
                (i = c.getMonth() + 1),
                (a = c.getDate()),
                singleFormat(i) + "-" + singleFormat(a)
              );
          }
        },
        stopOrderTimeFormat(e) {
          var t;
          return (
            e &&
              e > 0 &&
              (null === (t = String(e)) || void 0 === t ? void 0 : t.length) ===
                13 &&
              (e = 1e3 * Math.round(e / 1e3)),
            (0, i.to)(e)
          );
        },
        debounce(e, t, n) {
          let o, i, a, c, l;
          let later = function () {
            let u = new Date().getTime() - c;
            u < t && u >= 0
              ? (o = setTimeout(later, t - u))
              : ((o = null), n || ((l = e.apply(a, i)), o || (a = i = null)));
          };
          return function () {
            (a = this), (i = arguments), (c = new Date().getTime());
            let u = n && !o;
            return (
              o || (o = setTimeout(later, t)),
              u && ((l = e.apply(a, i)), (a = i = null)),
              l
            );
          };
        },
        parseQueries() {
          let e = decodeURIComponent(
              window.location.search.replace("?", "")
            ).split("&"),
            t = {};
          return (
            e.forEach((e) => {
              let n = e.split("=");
              t[n[0]] = n[1];
            }),
            t
          );
        },
      };
      function repeat(e, t) {
        let n = "";
        for (; t > 0 && (t % 2 == 1 && (n += e), 1 !== t); )
          (e += e), (t >>= 1);
        return n;
      }
      function singleFormat(e) {
        return 1 === e.toString().length ? "0" + e : e;
      }
      function getYMD(e) {
        let t = e.getFullYear(),
          n = e.getMonth() + 1,
          o = e.getDate();
        return t + "-" + singleFormat(n) + "-" + singleFormat(o);
      }
      function getHMS(e) {
        let t = e.getHours(),
          n = e.getMinutes(),
          o = e.getSeconds();
        return singleFormat(t) + ":" + singleFormat(n) + ":" + singleFormat(o);
      }
      t.Z = a;
    },
    22408: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return A;
        },
        xM: function () {
          return F;
        },
      });
      let o = {
          "--gray-1-white": "#ffffff",
          "--gray-1-white-rgb": "255,255,255",
          "--gray-2": "#f7f8fa",
          "--gray-2-rgb": "247,248,250",
          "--gray-3": "#f2f4f6",
          "--gray-3-rgb": "242,244,246",
          "--gray-4": "#ebedf1",
          "--gray-5": "#d7dadf",
          "--gray-6": "#bac0ca",
          "--gray-7": "#a2a9b6",
          "--gray-7-rgb": "162,169,182",
          "--gray-8": "#87909f",
          "--gray-9": "#6e7583",
          "--gray-9-rgb": "110,117,131",
          "--gray-10": "#535963",
          "--gray-11": "#3c4047",
          "--gray-12": "#33373d",
          "--gray-13": "#2b2e33",
          "--gray-14": "#222429",
          "--gray-15": "#18191c",
          "--gray-15-rgb": "24,25,28",
          "--gray-16": "#111214",
          "--gray-16-rgb": "17,18,20",
          "--gray-17": "#0d0e0f",
          "--gray-17-rgb": "13,14,15",
          "--gray-18-black": "#000000",
          "--mask": "#00000099",
          "--toast": "#000000cc",
        },
        i = {
          ...o,
          "--kcex-brand-base": "#AF8354",
          "--kcex-brand-base-rgb": "175, 131, 84",
          "--kcex-brand-yellow": "#f0b94c",
          "--blue-1": "#ebf2ff",
          "--blue-2": "#fafafa50",
          "--blue-3": "#aecaff",
          "--blue-4": "#86afff",
          "--blue-5": "",
          "--btn-primary-color": "#ffffff",
          "--blue-6-seed": "#0a0a0a",
          "--primary-color-hover": "#0a0a0a",
          "--blue-6-rgb": "53,122,255",
          "--blue-7": "#fafafa50",
          "--blue-8": "#204999",
          "--blue-9": "#153166",
          "--blue-10": "#0b1833",
          "--success-1": "#e7f6f0",
          "--success-2": "#ceeee1",
          "--success-3": "#9ddcc3",
          "--success-4": "#6ccba5",
          "--success-5": "#3bb987",
          "--success-6-seed": "#0aa869",
          "--success-6-seed-rgb": "10,168,105",
          "--success-7": "#088654",
          "--success-8": "#06653f",
          "--success-9": "#04432a",
          "--success-10": "#022215",
          "--error-1": "#ffecef",
          "--error-2": "#ffdade",
          "--error-3": "#ffb4be",
          "--error-4": "#ff8f9d",
          "--error-5": "#fe697d",
          "--error-6-seed": "#fe445c",
          "--error-6-seed-rgb": "254,68,92",
          "--error-7": "#cb364a",
          "--error-8": "#982937",
          "--error-9": "#661b25",
          "--error-10": "#330e12",
          "--warning-1": "#fcf1e8",
          "--warning-2": "#f9e3d1",
          "--warning-3": "#f3c7a3",
          "--warning-4": "#eeab75",
          "--warning-5": "#e88f47",
          "--warning-6-seed": "#e27319",
          "--warning-6-seed-rgb": "226,115,25",
          "--warning-7": "#b55c14",
          "--warning-8": "#88450f",
          "--warning-9": "#5a2e0a",
          "--warning-10": "#2d1705",
          "--korea-red-1": "#faeded",
          "--korea-red-2": "#f5dbda",
          "--korea-red-3": "#ebb6b5",
          "--korea-red-4": "#e29290",
          "--korea-red-5": "#d86d6b",
          "--korea-red-6-seed": "#ce4946",
          "--korea-red-6-seed-rgb": "206,73,70",
          "--korea-red-7": "#a53a38",
          "--korea-red-8": "#7c2c2a",
          "--korea-red-9": "#521d1c",
          "--korea-red-10": "#290f0e",
          "--korea-blue-1": "#ebf0fb",
          "--korea-blue-2": "#d6e1f7",
          "--korea-blue-3": "#adc3ee",
          "--korea-blue-4": "#84a6e6",
          "--korea-blue-5": "#5b88dd",
          "--korea-blue-6-seed": "#326ad5",
          "--korea-blue-6-seed-rgb": "50,106,213",
          "--korea-blue-7": "#2855aa",
          "--korea-blue-8": "#1e4080",
          "--korea-blue-9": "#142a55",
          "--korea-blue-10": "#0a152b",
          "--pink-1": "#ffeef9",
          "--pink-2": "#ffdef3",
          "--pink-3": "#ffbde8",
          "--pink-4": "#ff9bdc",
          "--pink-5": "#ff7ad1",
          "--pink-6": "#ff59c5",
          "--pink-7": "#cc479e",
          "--pink-8": "#993576",
          "--pink-9": "#66244f",
          "--pink-10": "#331227",
          "--yellow-1": "#fff7e8",
          "--yellow-2": "#feefd0",
          "--yellow-3": "#fddea1",
          "--yellow-4": "#fcce72",
          "--yellow-5": "#fbbd43",
          "--yellow-6": "#faad14",
          "--yellow-7": "#c88a10",
          "--yellow-8": "#96680c",
          "--yellow-9": "#644508",
          "--yellow-10": "#322304",
          "--cyan-1": "#e8f9fd",
          "--cyan-2": "#d1f4fb",
          "--cyan-3": "#a3e8f6",
          "--cyan-4": "#76ddf2",
          "--cyan-5": "#48d1ed",
          "--cyan-6": "#1ac6e9",
          "--cyan-7": "#159eba",
          "--cyan-8": "#10778c",
          "--cyan-9": "#0a4f5d",
          "--cyan-10": "#05282f",
          "--purple-1": "#f7f1fe",
          "--purple-2": "#eee2fd",
          "--purple-3": "#ddc5fb",
          "--purple-4": "#cda8f9",
          "--purple-5": "#bc8bf7",
          "--purple-6": "#ab6ef5",
          "--purple-7": "#8958c4",
          "--purple-8": "#674293",
          "--purple-9": "#442c62",
          "--purple-10": "#221631",
          "--kl-1": "#f4742c",
          "--kl-2": "#714dd9",
          "--kl-3": "#29d6e1",
          "--kl-4": "#de7fc3",
          "--kl-5": "#f0b94c",
          "--kl-6": "#a3c581",
          "--kl-7": "#d6a595",
          "--kl-8": "#969999",
          "--kl-9": "#9ddcae",
          "--kl-10": "#aeb6f8",
          "--opacity-1": "#1D2B420A",
          "--opacity-2": "#1D2B420F",
          "--opacity-3": "#1D2B4214",
          "--opacity-4": "#1D2B421E",
          "--opacity-5": "#1D2B4228",
          "--opacity-6": "#1D2B4242",
          "--opacity-7": "#1D2B4260",
          "--opacity-8": "#1D2B4284",
          "--opacity-9": "#1D2B42A3",
          "--opacity-10": "#1D2B42C1",
        },
        a = {
          ...o,
          "--kcex-brand-base": "#D3AF85",
          "--kcex-brand-base-rgb": "211, 175, 133",
          "--kcex-brand-yellow": "#ffdd00",
          "--blue-1": "#070d1a",
          "--blue-2": "#1a1b1c",
          "--blue-3": "#13274C",
          "--blue-4": "#284d99",
          "--blue-5": "#0a0a0a",
          "--btn-primary-color": "#0a0a0a",
          "--blue-6-seed": "#ffffff",
          "--primary-color-hover": "#ffffff",
          "--blue-6-rgb": "66,129,255",
          "--blue-7": "#fafafa",
          "--blue-8": "#8eb3ff",
          "--blue-9": "#b3cdff",
          "--blue-10": "#d9e6ff",
          "--success-1": "#01130c",
          "--success-2": "#022B1B",
          "--success-3": "#033D26",
          "--success-4": "#077046",
          "--success-5": "#09955d",
          "--success-6-seed": "#0bba74",
          "--success-6-seed-rgb": "11,186,116",
          "--success-7": "#3cc890",
          "--success-8": "#6dd6ac",
          "--success-9": "#9de3c7",
          "--success-10": "#cef1e3",
          "--error-1": "#1a070a",
          "--error-2": "#381015",
          "--error-3": "#4C151D",
          "--error-4": "#992b3a",
          "--error-5": "#cc394e",
          "--error-6-seed": "#ff4761",
          "--error-6-seed-rgb": "255,71,97",
          "--error-7": "#ff6c81",
          "--error-8": "#ff91a0",
          "--error-9": "#ffb5c0",
          "--error-10": "#ffdadf",
          "--warning-1": "#180c03",
          "--warning-2": "#361B06",
          "--warning-3": "#4C2708",
          "--warning-4": "#8d4710",
          "--warning-5": "#bc5f15",
          "--warning-6-seed": "#eb771a",
          "--warning-6-seed-rgb": "235,119,26",
          "--warning-7": "#ef9248",
          "--warning-8": "#f3ad76",
          "--warning-9": "#f7c9a3",
          "--warning-10": "#fbe4d1",
          "--korea-red-1": "#150707",
          "--korea-red-2": "#290F0E",
          "--korea-red-3": "#521d1c",
          "--korea-red-4": "#7c2c2a",
          "--korea-red-5": "#a53a38",
          "--korea-red-6-seed": "#ce4946",
          "--korea-red-6-seed-rgb": "206,73,70",
          "--korea-red-7": "#d86d6b",
          "--korea-red-8": "#e29290",
          "--korea-red-9": "#ebb6b5",
          "--korea-red-10": "#f5dbda",
          "--korea-blue-1": "#050b15",
          "--korea-blue-2": "#0A152B",
          "--korea-blue-3": "#142a55",
          "--korea-blue-4": "#1e4080",
          "--korea-blue-5": "#2855aa",
          "--korea-blue-6-seed": "#326ad5",
          "--korea-blue-6-seed-rgb": "50,106,213",
          "--korea-blue-7": "#5b88dd",
          "--korea-blue-8": "#84a6e6",
          "--korea-blue-9": "#adc3ee",
          "--korea-blue-10": "#d6e1f7",
          "--pink-1": "#190713",
          "--pink-2": "#310e25",
          "--pink-3": "#621c4a",
          "--pink-4": "#942b6f",
          "--pink-5": "#c53994",
          "--pink-6": "#f647b9",
          "--pink-7": "#f86cc7",
          "--pink-8": "#fa91d5",
          "--pink-9": "#fbb5e3",
          "--pink-10": "#fddaf1",
          "--yellow-1": "#160f02",
          "--yellow-2": "#2c1f04",
          "--yellow-3": "#583e09",
          "--yellow-4": "#845c0d",
          "--yellow-5": "#b07b12",
          "--yellow-6": "#dc9a16",
          "--yellow-7": "#e3ae45",
          "--yellow-8": "#eac273",
          "--yellow-9": "#f1d7a2",
          "--yellow-10": "#f8ebd0",
          "--cyan-1": "#021316",
          "--cyan-2": "#04252c",
          "--cyan-3": "#074b58",
          "--cyan-4": "#0b7084",
          "--cyan-5": "#0e96b0",
          "--cyan-6": "#12bbdc",
          "--cyan-7": "#41c9e3",
          "--cyan-8": "#71d6ea",
          "--cyan-9": "#a0e4f1",
          "--cyan-10": "#d0f1f8",
          "--purple-1": "#0f0917",
          "--purple-2": "#1f122e",
          "--purple-3": "#3d245c",
          "--purple-4": "#5c3789",
          "--purple-5": "#7a49b7",
          "--purple-6": "#995be5",
          "--purple-7": "#ad7cea",
          "--purple-8": "#c29def",
          "--purple-9": "#d6bdf5",
          "--purple-10": "#ebdefa",
          "--kl-1": "#f4742c",
          "--kl-2": "#714dd9",
          "--kl-3": "#29d6e1",
          "--kl-4": "#de7fc3",
          "--kl-5": "#f0b94c",
          "--kl-6": "#a3c581",
          "--kl-7": "#d6a595",
          "--kl-8": "#969999",
          "--kl-9": "#9ddcae",
          "--kl-10": "#aeb6f8",
          "--opacity-1": "#B4BFD60A",
          "--opacity-2": "#B4BFD60F",
          "--opacity-3": "#B4BFD614",
          "--opacity-4": "#B4BFD61E",
          "--opacity-5": "#B4BFD62D",
          "--opacity-6": "#B4BFD63D",
          "--opacity-7": "#B4BFD651",
          "--opacity-8": "#B4BFD66B",
          "--opacity-9": "#B4BFD693",
          "--opacity-10": "#B4BFD6B7",
        },
        c = {
          "--scrollbar-track-bg": "rgba(128, 128, 128, 0)",
          "--scrollbar-thumb-bg": "#BEC6CB",
          "--box-shadow-color": "rgba(0, 0, 0, 0.15)",
          "--main-color": "#333333",
          "--main-color-middle": "#666666",
          "--main-color-light": "#999999",
          "--pos-color-light": "#999999",
          "--main-bg": "#E5EBF5",
          "--box-bg": "#FAFDFE",
          "--box-head-bg": "#F8F9FC",
          "--box-hover-bg": "#F6FaFb",
          "--input-bg": "transparent",
          "--input-border-color": "#E5EBF5",
          "--input-placehold": "#75799E",
          "--input-bg-disabled": "#dfe5ea",
          "--button-border-color": "#68757f",
          "--button-border-color-disabled": "#b1b8c5",
          "--trade-color-light": "#989898",
          "--trade-color-main": "#666666",
          "--trade-search-bg": "#E5EBF5",
          "--trade-box-bg": "#FAFDFE",
          "--trade-box-head-bg": "#F2F6FA",
          "--trade-light-spliter": "#e8F0F4",
          "--trade-slide-track-bg": "#d5dBe5",
          "--balances-trans-circle-color": "#f2f6fa",
          "--ucenter-circle-bg": "#A5D1BC",
          "--rules-bg-color": "#CCCCCC",
          "--rules-bgtab-color": "#F2F6FA",
          "--rank-bg-color": "#F2F2F2",
          "--rank-bg-fontcolor": "#64686f",
          "--rank-border-color": "#e5e5e5",
          "--rank-number-color": "#FFFFFF",
          "--invite-assets-bg": "#F2F6FA",
          "--assets-kcex-token-bg": "#f2f6fa",
          "--assets-address-label-bg": "#e5e5e5",
          "--assets-recharge-risk-bg": "rgba(255, 255, 255, 0.97)",
          "--assets-box-bg": "#fff",
          "--assets-label-color": "#9A9EBA",
          "--assets-bar-bg": "#E8EBF6",
          "--assets-table-head-bg": "#E8EBF6",
          "--assets-main-border": "#E8EBF6",
          "--assets-transfer-bar-bg": "#E8EBF6",
          "--assets-border": "#E5EBF5",
          "--mday-table-bg": "#F5F7FA",
          "--mday-table-head-bg": "#E8EBF6",
          "--background-1": "#FFFFFF",
          "--background-1-rgb": "255, 255, 255",
          "--background-2": "#F4F5F6",
          "--background-3": "#EFF1F2",
          "--background-4": "#F5F5F5",
          "--background-5": "#F6F7F9",
          "--background-6": "#F5F5F5",
          "--background-7": "#EAEEF1",
          "--main-border-1": "#CDCECF",
          "--main-border-2": "#EAECEF",
          "--main-divide": "#E4E6E8",
          "--main-divide-2": "#E4E6E8",
          "--divide-secondary": "#EDF0F3",
          "--main-text-1": "#151617",
          "--main-text-2": "#575E64",
          "--main-text-3": "#97A1A9",
          "--main-text-4": "#151617",
          "--login-bg":
            "linear-gradient(180deg, rgba(255,255,255, 0.7) 0%, #FFFFFF 30%)",
          "--shadow-color-0": "rgba(111, 114, 175, 0.05)",
          "--shadow-color-1": "rgba(111, 114, 175, 0.1)",
          "--shadow-color-2": "rgba(111, 114, 175, 0.15)",
          "--shadow-color-3": "rgba(0, 0, 0, 0.08)",
          "--modal-border": "#FFFFFF",
          "--bg-card-disabled": "#F7F8FA",
          "--bg-primary-inverse-rgb": "17, 18, 20",
          "--bg-trade-primary": i["--gray-2"],
          "--bg-trade-primary-rgb": i["--gray-2-rgb"],
          "--bg-trade-secondary": i["--gray-1-white"],
          "--bg-top-banner": "#f8faff",
          "--bg-top-banner-rgb": "248, 250, 255",
          "--bg-module-banner": "#f8faff",
          "--bg-card-banner": "#f8faff",
          "--text-button-trade": i["--gray-1-white"],
          "--text-tooltip-primary": i["--gray-1-white"],
          "--text-tooltip-secondary": "#bec6cb",
          "--text-inverse": "#ffffff",
          "--border-card": i["--gray-4"],
          "--border-button": i["--gray-4"],
          "--border-input": i["--gray-4"],
          "--border-card-modal": i["--gray-4"],
          "--border-button-modal": i["--gray-4"],
          "--border-input-modal": i["--gray-4"],
          "--divider-modal-primary": i["--gray-4"],
          "--divider-modal-secondary": i["--gray-4"],
          "--divider-modal-tertiary": i["--gray-4"],
          "--divider-trade-primary": i["--gray-4"],
          "--border-inverse": "#555a5f",
          "--fill-button-disabled": "#e3e8ed",
          "--fill-input": "#eef1f4",
          "--fill-input-modal": "#eef1f4",
          "--fill-button-secondary": "#ebeef1",
          "--fill-switch-bg": "#e1e6eb",
          "--fill-tag": "#e8f8f2",
          "--info-base": "#328ee3",
          "--error-base": "#ee2c5a",
          "--error-shadow": "rgba(238, 44, 90, 0.2)",
          "--warning-base": "#faad14",
          "--warning-shadow": "rgba(250, 173, 20, 0.2)",
          "--tint-red-base": "#ee2c5a",
          "--tint-red-smooth": "#fff0f1",
          "--status-link-blue-hover": "#69c0ff",
          "--status-link-blue-active": "#096dd9",
          "--status-secondary-button-hover": "#f1f2f3",
          "--status-secondary-button-pressed": "#e8e9eb",
          "--card-pkg-bg": "#F5F5F7",
        },
        l = {
          "--scrollbar-track-bg": "rgba(128, 128, 128, 0)",
          "--scrollbar-thumb-bg": "#4B4E52",
          "--box-shadow-color": "rgba(0, 0, 0, 0.4)",
          "--main-color": "#FFFFFF",
          "--main-color-middle": "#bbbbbb",
          "--main-color-light": "#999999",
          "--pos-color-light": "#90A8BA",
          "--main-bg": "#21313D",
          "--box-bg": "#394B59",
          "--box-head-bg": "#2B2937 ",
          "--box-hover-bg": "#344551",
          "--input-bg": "transparent",
          "--input-border-color": "#41515D",
          "--input-placehold": "#7E829C",
          "--input-bg-disabled": "#2a353f",
          "--button-border-color": "#99a9a9",
          "--button-border-color-disabled": "#71818d",
          "--trade-color-light": "#7f868f",
          "--trade-color-main": "#e6ebef",
          "--trade-search-bg": "#222D36",
          "--trade-box-bg": "#293742",
          "--trade-box-head-bg": "#303F4D",
          "--trade-light-spliter": "#324048",
          "--trade-slide-track-bg": "#41515D",
          "--ucenter-circle-bg": "#476A6D",
          "--balances-trans-circle-color": "#303f4d",
          "--rules-bg-color": "#303F4D",
          "--rules-bgtab-color": "#303F4D",
          "--rank-bg-color": "#303F4D",
          "--rank-bg-fontcolor": "#64686f",
          "--rank-border-color": "#2b333b",
          "--rank-number-color": "#303f4d",
          "--invite-assets-bg": "#394B59",
          "--assets-kcex-token-bg": "#f2f6fa",
          "--assets-address-label-bg": "#090c12",
          "--assets-recharge-risk-bg": "rgba(41, 55, 66, 0.97)",
          "--assets-box-bg": "#293742",
          "--assets-label-color": "#9A9EBA",
          "--assets-bar-bg": "#394B59",
          "--assets-table-head-bg": "#222D36",
          "--assets-main-border": "#394B59",
          "--assets-transfer-bar-bg": "#293742",
          "--assets-border": "#2B3F4E",
          "--mday-table-bg": "#3e5262",
          "--mday-table-head-bg": "#303f4b",
          "--background-1": "#1A1B1C",
          "--background-1-rgb": "26, 27, 28",
          "--background-2": "#1E1F20",
          "--background-3": "#2C2D2E",
          "--background-4": "#393E41",
          "--background-5": "#151617",
          "--background-6": "#1E1F20",
          "--background-7": "#3F4244",
          "--main-border-1": "#484B4F",
          "--main-border-2": "#333435",
          "--main-divide": "#292B2E",
          "--main-divide-2": "#292B2E",
          "--divide-secondary": "#151617",
          "--main-text-1": "#FFFFFF",
          "--main-text-2": "#97A1A9",
          "--main-text-3": "#575E64",
          "--main-text-4": "#CACFD3",
          "--login-bg":
            "linear-gradient(180deg, rgba(26,27,28, 0.7) 0%, #1A1B1C 30%)",
          "--shadow-color-0": "rgba(0, 0, 0, 0.1)",
          "--shadow-color-1": "rgba(0, 0, 0, 0.2)",
          "--shadow-color-2": "rgba(0, 0, 0, 0.3)",
          "--shadow-color-3": "rgba(0, 0, 0, 0.32)",
          "--modal-border": "#575E64",
          "--bg-card-disabled": "#222429",
          "--bg-primary-inverse-rgb": "255, 255, 255",
          "--bg-trade-primary": a["--gray-17"],
          "--bg-trade-primary-rgb": a["--gray-17-rgb"],
          "--bg-trade-secondary": a["--gray-16"],
          "--bg-top-banner": "#000c1d",
          "--bg-top-banner-rgb": "0, 12, 29",
          "--bg-module-banner": "#0d0e0f",
          "--bg-card-banner": "#131518",
          "--text-button-trade": a["--gray-1-white"],
          "--text-tooltip-primary": a["--gray-1-white"],
          "--text-tooltip-secondary": "#505152",
          "--text-inverse": "#151617",
          "--border-card": a["--gray-14"],
          "--border-button": a["--gray-14"],
          "--border-input": a["--gray-14"],
          "--border-card-modal": a["--gray-13"],
          "--border-button-modal": a["--gray-13"],
          "--border-input-modal": a["--gray-13"],
          "--divider-modal-primary": a["--gray-13"],
          "--divider-modal-secondary": a["--gray-13"],
          "--divider-modal-tertiary": a["--gray-13"],
          "--divider-trade-primary": a["--gray-14"],
          "--border-inverse": "#dde0e2",
          "--fill-button-disabled": "#28292c",
          "--fill-input": "#1a1b1f",
          "--fill-input-modal": "#222429",
          "--fill-button-secondary": "#404347",
          "--fill-switch-bg": "#25282e",
          "--fill-tag": "#19302a",
          "--info-base": "#328ee3",
          "--error-base": "#e9485a",
          "--error-shadow": "rgba(233, 44, 90, 0.2)",
          "--warning-base": "#faad14",
          "--warning-shadow": "rgba(250, 173, 20, 0.2)",
          "--tint-red-base": "#e9485a",
          "--tint-red-smooth": "#311a1e",
          "--status-link-blue-hover": "#63b2f2",
          "--status-link-blue-active": "#124e96",
          "--status-secondary-button-hover": "#53565c",
          "--status-secondary-button-pressed": "#292b2e",
          "--card-pkg-bg": "#2c3036",
        },
        u = {
          "--down-label-bg": "rgba(255, 95, 115, .15)",
          "--down-3d-gradient":
            "linear-gradient(165.13deg, #ff8282 30.4%, #ff493a 75.53%)",
          "--kline-volume-down": "rgba(229, 76, 103, .4)",
          "--up-label-bg": "rgba(1, 170, 120, .15)",
          "--up-3d-gradient":
            "linear-gradient(336.81deg, #11a682 1.02%, #3acebc 98.25%)",
          "--kline-volume-up": "rgba(122, 185, 121, .4)",
        },
        s = {
          "--down-color": i["--error-6-seed"],
          "--down-color-rgb": i["--error-6-seed-rgb"],
          "--primary-down": "#ee2c5a",
          "--hover-down": i["--error-5"],
          "--up-color": i["--success-6-seed"],
          "--up-color-rgb": i["--success-6-seed-rgb"],
          "--primary-up": "#16B979",
          "--hover-up": i["--success-5"],
        },
        d = {
          "--down-color": a["--error-6-seed"],
          "--down-color-rgb": a["--error-6-seed-rgb"],
          "--primary-down": "#e9485a",
          "--hover-down": a["--error-7"],
          "--up-color": a["--success-6-seed"],
          "--up-color-rgb": a["--success-6-seed-rgb"],
          "--primary-up": "#31c48a",
          "--hover-up": a["--success-7"],
        },
        g = {
          "--down-label-bg": "rgba(1, 170, 120, .15)",
          "--down-3d-gradient":
            "linear-gradient(336.81deg, #11a682 1.02%, #3acebc 98.25%)",
          "--kline-volume-down": "rgba(122, 185, 121, .4)",
          "--up-label-bg": "rgba(255, 95, 115, .15)",
          "--up-3d-gradient":
            "linear-gradient(165.13deg, #ff8282 30.4%, #ff493a 75.53%)",
          "--kline-volume-up": "rgba(229, 76, 103, .4)",
        },
        f = {
          "--up-color": i["--error-6-seed"],
          "--up-color-rgb": i["--error-6-seed-rgb"],
          "--primary-up": "#ee2c5a",
          "--hover-up": i["--error-5"],
          "--down-color": i["--success-6-seed"],
          "--down-color-rgb": i["--success-6-seed-rgb"],
          "--primary-down": "#16B979",
          "--hover-down": i["--success-5"],
        },
        b = {
          "--up-color": a["--error-6-seed"],
          "--up-color-rgb": a["--error-6-seed-rgb"],
          "--primary-up": "#e9485a",
          "--hover-up": a["--error-7"],
          "--down-color": a["--success-6-seed"],
          "--down-color-rgb": a["--success-6-seed-rgb"],
          "--primary-down": "#31c48a",
          "--hover-down": a["--success-7"],
        },
        p = {
          "--down-label-bg": "rgba(19, 75, 184, .1)",
          "--down-3d-gradient":
            "linear-gradient(336.81deg, #11a682 1.02%, #3acebc 98.25%)",
          "--kline-volume-down": "rgba(19, 75, 184, .2)",
          "--up-label-bg": "rgba(198, 56, 52, .1)",
          "--up-3d-gradient":
            "linear-gradient(165.13deg, #ff8282 30.4%, #ff493a 75.53%)",
          "--kline-volume-up": "rgba(198, 56, 52, .2)",
        },
        m = {
          "--down-color": i["--korea-blue-6-seed"],
          "--down-color-rgb": i["--korea-blue-6-seed-rgb"],
          "--primary-down": "#2967bf",
          "--hover-down": i["--korea-blue-5"],
          "--up-color": i["--korea-red-6-seed"],
          "--up-color-rgb": i["--korea-red-6-seed-rgb"],
          "--primary-up": "#b54947",
          "--hover-up": i["--korea-red-5"],
        },
        y = {
          "--down-color": a["--korea-blue-6-seed"],
          "--down-color-rgb": a["--korea-blue-6-seed-rgb"],
          "--primary-down": "#2967bf",
          "--hover-down": a["--korea-blue-7"],
          "--up-color": a["--korea-red-6-seed"],
          "--up-color-rgb": a["--korea-red-6-seed-rgb"],
          "--primary-up": "#b54947",
          "--hover-up": a["--korea-red-7"],
        },
        _ = {
          "--text-color": i["--gray-17"],
          "--item-hover-bg": i["--gray-2"],
          ...c,
          "--bg-primary": i["--gray-1-white"],
          "--bg-primary-rgb": i["--gray-1-white-rgb"],
          "--bg-secondary": i["--gray-2"],
          "--bg-tertiary": i["--gray-3"],
          "--bg-modal": i["--gray-1-white"],
          "--bg-modal-rgb": i["--gray-1-white-rgb"],
          "--bg-card": i["--gray-1-white"],
          "--bg-tooltip": i["--gray-13"],
          "--bg-popconfim": i["--gray-13"],
          "--border-opacity": i["--opacity-5"],
          "--bg-level-primary": i["--gray-2"],
          "--bg-level-primary-rgb": i["--gray-2-rgb"],
          "--bg-level-secondary": i["--gray-1-white"],
          "--bg-level-secondary-rgb": i["--gray-1-white-rgb"],
          "--bg-mask": i["--mask"],
          "--icon-primary": i["--gray-17"],
          "--icon-secondary": i["--gray-8"],
          "--icon-tertiary": i["--gray-7"],
          "--icon-quarternary": i["--gray-6"],
          "--icon-mask": i["--gray-7"],
          "--text-primary": i["--gray-17"],
          "--text-primary-rgb": i["--gray-17-rgb"],
          "--text-secondary": i["--gray-8"],
          "--text-tertiary": i["--gray-7"],
          "--text-tertiary-rgb": i["--gray-7-rgb"],
          "--text-disabled": i["--gray-6"],
          "--text-mask": i["--gray-7"],
          "--text-white": i["--gray-1-white"],
          "--text-black": i["--gray-18-black"],
          "--border-primary": i["--gray-4"],
          "--border-secondary": i["--gray-5"],
          "--border-modal": i["--gray-4"],
          "--border-tag-blue": i["--blue-3"],
          "--border-tag-green": i["--success-3"],
          "--border-tag-red": i["--error-3"],
          "--border-tag-yellow": i["--yellow-3"],
          "--divider-primary": i["--gray-4"],
          "--divider-secondary": i["--gray-5"],
          "--divider-modal": i["--gray-4"],
          "--divider-opacity": i["--opacity-4"],
          "--fill-container": i["--gray-2"],
          "--fill-tab-secondary": "#deeeff",
          "--fill-tab-tertiary": i["--gray-3"],
          "--fill-menu-selected": i["--gray-2"],
          "--fill-sidebar-selected": i["--gray-3"],
          "--fill-switch-container": i["--gray-4"],
          "--fill-segment-container": i["--gray-4"],
          "--fill-segment-selected": i["--gray-1-white"],
          "--fill-page-button-default": i["--gray-4"],
          "--fill-page-button-hover": i["--gray-3"],
          "--fill-page-button-active": i["--gray-5"],
          "--fill-page-button-disable": i["--gray-3"],
          "--fill-modal-button-default": i["--gray-4"],
          "--fill-modal-button-hover": i["--gray-3"],
          "--fill-modal-button-selected": i["--gray-5"],
          "--fill-modal-button-disable": i["--gray-3"],
          "--fill-card-modal": i["--gray-3"],
          "--fill-page-input-container": i["--gray-3"],
          "--fill-modal-input-container": i["--gray-3"],
          "--fill-default-container": i["--blue-1"],
          "--fill-success-container": i["--success-1"],
          "--fill-error-container": i["--error-1"],
          "--fill-warning-container": i["--warning-1"],
          "--fill-korea-red-container": i["--korea-red-1"],
          "--fill-korea-blue-container": i["--korea-blue-1"],
          "--fill-korea-blue-banner": i["--gray-2"],
          "--fill-toast": i["--toast"],
          "--fill-white": i["--gray-1-white"],
          "--fill-black": i["--gray-18-black"],
          "--fill-opacity-container": i["--opacity-1"],
          "--fill-opacity-disable": i["--opacity-3"],
          "--primary-blue": i["--blue-6-seed"],
          "--primary-blue-rgb": i["--blue-6-rgb"],
          "--primary-blue-hover": i["--blue-5"],
          "--primary-blue-active": i["--blue-7"],
          "--primary-blue-disable": i["--blue-3"],
          "--up-green": i["--success-6-seed"],
          "--up-green-hover": i["--success-5"],
          "--up-green-active": i["--success-7"],
          "--up-green-disable": i["--success-3"],
          "--down-red": i["--error-6-seed"],
          "--down-red-hover": i["--error-5"],
          "--down-red-active": i["--error-7"],
          "--down-red-disable": i["--error-3"],
          "--korea-up-red": i["--korea-red-6-seed"],
          "--korea-up-red-hover": i["--korea-red-5"],
          "--korea-up-red-active": i["--korea-red-7"],
          "--korea-up-red-disable": i["--korea-red-3"],
          "--korea-down-blue": i["--korea-blue-6-seed"],
          "--korea-down-blue-hover": i["--korea-blue-5"],
          "--korea-down-blue-active": i["--korea-blue-7"],
          "--korea-down-blue-disable": i["--korea-blue-3"],
          "--info": i["--blue-6-seed"],
          "--info-hover": i["--blue-5"],
          "--info-active": i["--blue-7"],
          "--info-disable": i["--blue-3"],
          "--success": i["--success-6-seed"],
          "--success-hover": i["--success-5"],
          "--success-active": i["--success-7"],
          "--success-disable": i["--success-3"],
          "--error": i["--error-6-seed"],
          "--error-rgb": i["--error-6-seed-rgb"],
          "--error-hover": i["--error-5"],
          "--error-active": i["--error-7"],
          "--error-disable": i["--error-3"],
          "--warning": i["--warning-6-seed"],
          "--warning-hover": i["--warning-5"],
          "--warning-active": i["--warning-7"],
          "--warning-disable": i["--warning-3"],
          "--tint-pink-base": i["--pink-6"],
          "--tint-pink-smooth": i["--pink-1"],
          "--tint-orange-base": i["--warning-6-seed"],
          "--tint-orange-base-rgb": i["--warning-6-seed-rgb"],
          "--tint-orange-smooth": i["--warning-1"],
          "--tint-yellow-base": i["--yellow-6"],
          "--tint-yellow-smooth": i["--yellow-1"],
          "--tint-green-base": i["--success-6-seed"],
          "--tint-green-smooth": i["--success-1"],
          "--tint-blue-base": i["--blue-6-seed"],
          "--tint-blue-smooth": i["--blue-1"],
          "--tint-purple-base": i["--purple-6"],
          "--tint-purple-smooth": i["--purple-2"],
          "--tint-kl-orange": i["--kl-1"],
          "--tint-kl-purple": i["--kl-2"],
          "--tint-kl-cyan": i["--kl-3"],
          "--tint-kl-pink": i["--kl-4"],
          "--tint-kl-yellow": i["--kl-5"],
          "--tint-kl-green": i["--kl-6"],
          "--tint-kl-flesh": i["--kl-7"],
          "--tint-kl-gray": i["--kl-8"],
          "--tint-kl-light-green": i["--kl-9"],
          "--tint-kl-light-purple": i["--kl-10"],
          "--select-border-color": i["--gray-4"],
          "--text-secondary-color": i["--gray-8"],
        },
        v = {
          "--text-color": a["--gray-3"],
          "--item-hover-bg": a["--gray-15"],
          ...l,
          "--bg-primary": a["--gray-17"],
          "--bg-primary-rgb": a["--gray-17-rgb"],
          "--bg-secondary": a["--gray-16"],
          "--bg-tertiary": a["--gray-15"],
          "--bg-modal": a["--gray-15"],
          "--bg-modal-rgb": a["--gray-15-rgb"],
          "--bg-card": a["--gray-14"],
          "--bg-tooltip": a["--gray-13"],
          "--bg-popconfim": a["--gray-13"],
          "--border-opacity": a["--opacity-6"],
          "--bg-level-primary": a["--gray-17"],
          "--bg-level-primary-rgb": a["--gray-17-rgb"],
          "--bg-level-secondary": a["--gray-16"],
          "--bg-level-secondary-rgb": a["--gray-16-rgb"],
          "--bg-mask": a["--mask"],
          "--icon-primary": a["--gray-3"],
          "--icon-secondary": a["--gray-8"],
          "--icon-tertiary": a["--gray-9"],
          "--icon-quarternary": a["--gray-11"],
          "--icon-mask": a["--gray-7"],
          "--text-primary": a["--gray-3"],
          "--text-primary-rgb": a["--gray-3-rgb"],
          "--text-secondary": a["--gray-8"],
          "--text-tertiary": a["--gray-9"],
          "--text-tertiary-rgb": a["--gray-9-rgb"],
          "--text-disabled": a["--gray-10"],
          "--text-mask": a["--gray-7"],
          "--text-white": a["--gray-1-white"],
          "--text-black": a["--gray-18-black"],
          "--border-primary": a["--gray-14"],
          "--border-secondary": a["--gray-13"],
          "--border-modal": a["--gray-13"],
          "--border-tag-blue": a["--blue-3"],
          "--border-tag-green": a["--success-3"],
          "--border-tag-red": a["--error-3"],
          "--border-tag-yellow": a["--yellow-3"],
          "--divider-primary": a["--gray-14"],
          "--divider-secondary": a["--gray-13"],
          "--divider-modal": a["--gray-13"],
          "--divider-opacity": a["--opacity-5"],
          "--fill-container": a["--gray-15"],
          "--fill-tab-secondary": "#1d2d4d",
          "--fill-tab-tertiary": a["--gray-14"],
          "--fill-menu-selected": a["--gray-14"],
          "--fill-sidebar-selected": a["--gray-15"],
          "--fill-switch-container": a["--gray-14"],
          "--fill-segment-container": a["--gray-14"],
          "--fill-segment-selected": a["--gray-12"],
          "--fill-page-button-default": a["--gray-14"],
          "--fill-page-button-hover": a["--gray-13"],
          "--fill-page-button-active": a["--gray-15"],
          "--fill-page-button-disable": a["--gray-14"],
          "--fill-modal-button-default": a["--gray-13"],
          "--fill-modal-button-hover": a["--gray-12"],
          "--fill-modal-button-selected": a["--gray-14"],
          "--fill-modal-button-disable": a["--gray-13"],
          "--fill-card-modal": a["--gray-14"],
          "--fill-page-input-container": a["--gray-14"],
          "--fill-modal-input-container": a["--gray-13"],
          "--fill-default-container": a["--blue-2"],
          "--fill-success-container": a["--success-2"],
          "--fill-error-container": a["--error-2"],
          "--fill-warning-container": a["--warning-2"],
          "--fill-korea-red-container": a["--korea-red-2"],
          "--fill-korea-blue-container": a["--korea-blue-2"],
          "--fill-korea-blue-banner": a["--korea-blue-2"],
          "--fill-toast": a["--toast"],
          "--fill-white": a["--gray-1-white"],
          "--fill-black": a["--gray-18-black"],
          "--fill-opacity-container": a["--opacity-4"],
          "--fill-opacity-disable": a["--opacity-2"],
          "--primary-blue": a["--blue-6-seed"],
          "--primary-blue-rgb": a["--blue-6-rgb"],
          "--primary-blue-hover": a["--blue-7"],
          "--primary-blue-active": a["--blue-5"],
          "--primary-blue-disable": a["--blue-3"],
          "--up-green": a["--success-6-seed"],
          "--up-green-hover": a["--success-7"],
          "--up-green-active": a["--success-5"],
          "--up-green-disable": a["--success-3"],
          "--down-red": a["--error-6-seed"],
          "--down-red-hover": a["--error-7"],
          "--down-red-active": a["--error-5"],
          "--down-red-disable": a["--error-3"],
          "--korea-up-red": a["--korea-red-6-seed"],
          "--korea-up-red-hover": a["--korea-red-7"],
          "--korea-up-red-active": a["--korea-red-5"],
          "--korea-up-red-disable": a["--korea-red-3"],
          "--korea-down-blue": a["--korea-blue-6-seed"],
          "--korea-down-blue-hover": a["--korea-blue-7"],
          "--korea-down-blue-active": a["--korea-blue-5"],
          "--korea-down-blue-disable": a["--korea-blue-3"],
          "--info": a["--blue-6-seed"],
          "--info-hover": a["--blue-7"],
          "--info-active": a["--blue-5"],
          "--info-disable": a["--blue-3"],
          "--success": a["--success-6-seed"],
          "--success-hover": a["--success-7"],
          "--success-active": a["--success-5"],
          "--success-disable": a["--success-3"],
          "--error": a["--error-6-seed"],
          "--error-rgb": a["--error-6-seed-rgb"],
          "--error-hover": a["--error-7"],
          "--error-active": a["--error-5"],
          "--error-disable": a["--error-3"],
          "--warning": a["--warning-6-seed"],
          "--warning-hover": a["--warning-7"],
          "--warning-active": a["--warning-5"],
          "--warning-disable": a["--warning-3"],
          "--tint-pink-base": a["--pink-6"],
          "--tint-pink-smooth": a["--pink-2"],
          "--tint-orange-base": a["--warning-6-seed"],
          "--tint-orange-base-rgb": a["--warning-6-seed-rgb"],
          "--tint-orange-smooth": a["--warning-2"],
          "--tint-yellow-base": a["--yellow-6"],
          "--tint-yellow-smooth": a["--yellow-2"],
          "--tint-green-base": a["--success-6-seed"],
          "--tint-green-smooth": a["--success-2"],
          "--tint-blue-base": a["--blue-6-seed"],
          "--tint-blue-smooth": a["--blue-2"],
          "--tint-purple-base": a["--purple-6"],
          "--tint-purple-smooth": a["--purple-2"],
          "--tint-kl-orange": a["--kl-1"],
          "--tint-kl-purple": a["--kl-2"],
          "--tint-kl-cyan": a["--kl-3"],
          "--tint-kl-pink": a["--kl-4"],
          "--tint-kl-yellow": a["--kl-5"],
          "--tint-kl-green": a["--kl-6"],
          "--tint-kl-flesh": a["--kl-7"],
          "--tint-kl-gray": a["--kl-8"],
          "--tint-kl-light-green": a["--kl-9"],
          "--tint-kl-light-purple": a["--kl-10"],
          "--select-border-color": a["--gray-14"],
          "--text-secondary-color": a["--gray-4"],
        },
        h = {
          "--bg-modal-fixed-light": _["--bg-modal"],
          "--text-primary-fixed-light": _["--text-primary"],
        },
        k = { "--text-primary-fixed-dark": v["--text-primary"] },
        w = {
          "--primary-color": _["--primary-blue"],
          "--primary-color-rgb": i["--blue-6-rgb"],
          "--error-color": "#ce4946",
          "--error-color-rgb": "206, 73, 70",
          "--light-bg-base": "#e6f7ff",
          "--light-tab-bg-base": "#deeeff",
        },
        A = {
          "--primary-color": "#31c48a",
          "--primary-color-rgb": "49, 196, 138",
          "--error-color": "#e9485a",
          "--error-color-rgb": "233, 72, 90",
          "--light-bg-base": "#e6faef",
          "--light-tab-bg-base": "#e8f8f2",
        },
        S = {
          "--primary-color": v["--primary-blue"],
          "--primary-color-rgb": a["--blue-6-rgb"],
          "--error-color": "#ce4946",
          "--error-color-rgb": "206, 73, 70",
          "--light-bg-base": "#e6f7ff",
          "--light-tab-bg-base": "#deeeff",
        },
        E = {
          ...u,
          ...s,
          "--up": i["--success-6-seed"],
          "--up-hover": i["--success-5"],
          "--up-active": i["--success-7"],
          "--up-rgb": i["--success-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(i["--success-6-seed-rgb"], ", 0.2)"),
          "--down": i["--error-6-seed"],
          "--down-hover": i["--error-5"],
          "--down-active": i["--error-7"],
          "--down-rgb": i["--error-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(i["--error-6-seed-rgb"], ", 0.2)"),
        },
        T = {
          ...g,
          ...f,
          "--up": i["--error-6-seed"],
          "--up-hover": i["--error-5"],
          "--up-active": i["--error-7"],
          "--up-rgb": i["--error-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(i["--error-6-seed-rgb"], ", 0.2)"),
          "--down": i["--success-6-seed"],
          "--down-hover": i["--success-5"],
          "--down-active": i["--success-7"],
          "--down-rgb": i["--success-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(i["--success-6-seed-rgb"], ", 0.2)"),
        },
        N = {
          ...p,
          ...m,
          "--up": i["--korea-red-6-seed"],
          "--up-hover": i["--korea-red-5"],
          "--up-active": i["--korea-red-7"],
          "--up-rgb": i["--korea-red-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(i["--korea-red-6-seed-rgb"], ", 0.2)"),
          "--down": i["--korea-blue-6-seed"],
          "--down-hover": i["--korea-blue-5"],
          "--down-active": i["--korea-blue-7"],
          "--down-rgb": i["--korea-blue-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(
            i["--korea-blue-6-seed-rgb"],
            ", 0.2)"
          ),
        },
        x = {
          ...u,
          ...d,
          "--up": a["--success-6-seed"],
          "--up-hover": a["--success-7"],
          "--up-active": a["--success-5"],
          "--up-rgb": a["--success-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(a["--success-6-seed-rgb"], ", 0.2)"),
          "--down": a["--error-6-seed"],
          "--down-hover": a["--error-7"],
          "--down-active": a["--error-5"],
          "--down-rgb": a["--error-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(a["--error-6-seed-rgb"], ", 0.2)"),
        },
        O = {
          ...g,
          ...b,
          "--up": a["--error-6-seed"],
          "--up-hover": a["--error-7"],
          "--up-active": a["--error-5"],
          "--up-rgb": a["--error-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(a["--error-6-seed-rgb"], ", 0.2)"),
          "--down": a["--success-6-seed"],
          "--down-hover": a["--success-7"],
          "--down-active": a["--success-5"],
          "--down-rgb": a["--success-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(a["--success-6-seed-rgb"], ", 0.2)"),
        },
        L = {
          ...p,
          ...y,
          "--up": a["--korea-red-6-seed"],
          "--up-hover": a["--korea-red-7"],
          "--up-active": a["--korea-red-5"],
          "--up-rgb": a["--korea-red-6-seed-rgb"],
          "--up-shadow": "rgba(".concat(a["--korea-red-6-seed-rgb"], ", 0.2)"),
          "--down": a["--korea-blue-6-seed"],
          "--down-hover": a["--korea-blue-7"],
          "--down-active": a["--korea-blue-5"],
          "--down-rgb": a["--korea-blue-6-seed-rgb"],
          "--down-shadow": "rgba(".concat(
            a["--korea-blue-6-seed-rgb"],
            ", 0.2)"
          ),
        },
        R = {
          "--primary-blue": i["--blue-6-seed"],
          "--primary-blue-hover": i["--blue-5"],
          "--primary-blue-active": i["--blue-7"],
          "--primary-blue-disable": i["--blue-3"],
          "--primary-base": i["--blue-6-seed"],
          "--primary-hover": i["--blue-5"],
          "--primary-active": i["--blue-7"],
          "--primary-rgb": "53, 122, 255",
          "--primary-shadow": "rgba(53, 122, 255, 0.2)",
          "--primary-1": "#ebf0fb",
          "--primary-2": "#d6e1f7",
          "--primary-3": "#326ad5",
          "--primary-4": "#326ad5",
          "--primary-5": "#5b88dd",
          "--primary-6": "#326ad5",
          "--primary-7": "#3065ca",
          "--primary-8": "#326ad5",
          "--primary-9": "#326ad5",
          "--primary-10": "#326ad5",
        },
        I = {
          "--primary-blue": a["--blue-6-seed"],
          "--primary-blue-hover": a["--blue-7"],
          "--primary-blue-active": a["--blue-5"],
          "--primary-blue-disable": a["--blue-3"],
          "--primary-base": a["--blue-6-seed"],
          "--primary-hover": a["--blue-7"],
          "--primary-active": a["--blue-5"],
          "--primary-rgb": "53, 122, 255",
          "--primary-shadow": "rgba(53, 122, 255, 0.2)",
          "--primary-1": "#ebf0fb",
          "--primary-2": "#d6e1f7",
          "--primary-3": "#326ad5",
          "--primary-4": "#326ad5",
          "--primary-5": "#5b88dd",
          "--primary-6": "#326ad5",
          "--primary-7": "#3065ca",
          "--primary-8": "#326ad5",
          "--primary-9": "#326ad5",
          "--primary-10": "#326ad5",
        },
        F = {
          light: { ...i, ..._, ...w, ...R, ...h, ...k },
          dark: { ...a, ...v, ...S, ...I, ...h, ...k },
          upgreen: u,
          upred: g,
          uppink: p,
          upgreenlight: E,
          upredlight: T,
          uppinklight: N,
          upgreendark: x,
          upreddark: O,
          uppinkdark: L,
        };
    },
    76726: function (e, t, n) {
      "use strict";
      n.d(t, {
        _5: function () {
          return clearCookie;
        },
        d8: function () {
          return setCookie;
        },
        ej: function () {
          return getCookie;
        },
        gK: function () {
          return fixMockSetCookie;
        },
      }),
        n(44092);
      var o = n(66710);
      let getCookie = (e) => {
          if ((0, o.s)()) return "";
          let t = document.cookie;
          if (t.length > 0) {
            let n,
              o = t.indexOf(e + "=");
            if (-1 !== o)
              return (
                (o = o + e.length + 1),
                -1 === (n = t.indexOf(";", o)) && (n = t.length),
                t.substring(o, n)
              );
          }
          return "";
        },
        setCookie = function (e, t, n) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "/";
          if ((0, o.s)()) return;
          let a = "";
          if (n) {
            let e = new Date();
            e.setTime(e.getTime() + 864e5 * n),
              (a = ";expires=" + e.toUTCString());
          }
          let c = "." + window.location.hostname.split(".").slice(-2).join(".");
          window.document.cookie =
            e + "=" + t + a + ";path=" + i + ";domain=" + c;
        },
        clearCookie = (e, t) => {
          if ((0, o.s)()) return;
          let n = new Date();
          n.setTime(n.getTime() - 1e4);
          let i = getCookie(e),
            a = "";
          t && (a = ";domain=" + t),
            null !== i
              ? (document.cookie =
                  e + "= ;expires=" + n.toGMTString() + ";path=/" + a)
              : alert(e + "的值为空！");
        },
        fixMockSetCookie = function (e, t) {
          arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        };
    },
    5568: function (e, t, n) {
      "use strict";
      n.d(t, {
        _5: function () {
          return o._5;
        },
        gK: function () {
          return o.gK;
        },
        ej: function () {
          return o.ej;
        },
        $o: function () {
          return getLocalStorage;
        },
        R1: function () {
          return i.R1;
        },
        LP: function () {
          return getToken;
        },
        sk: function () {
          return a.s;
        },
        ew: function () {
          return modifyHtmlAttributes;
        },
        d8: function () {
          return o.d8;
        },
        qQ: function () {
          return setLocalStorage;
        },
      });
      var o = n(76726);
      function setLocalStorage(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
          let o = n ? JSON.stringify(t) : t;
          localStorage.setItem(e, o);
        } catch (e) {
          throw (
            (console.error("Error serializing value for local storage:", e),
            Error("Failed to set local storage value"))
          );
        }
      }
      function getLocalStorage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        {
          let n = localStorage.getItem(e);
          if (n)
            try {
              let e = t ? JSON.parse(n) : n;
              return (
                ("number" == typeof e || "boolean" == typeof e || null === e) &&
                  (e = String(e)),
                e
              );
            } catch (e) {
              return n;
            }
          return n || null;
        }
      }
      let getToken = () =>
          (0, o.ej)("Authorization") ||
          (0, o.ej)("uc_token") ||
          (0, o.ej)("u_id"),
        modifyHtmlAttributes = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = document.querySelector("html");
          for (let [o, i] of Object.entries(e))
            t
              ? null == n || n.removeAttribute(o)
              : null == n || n.setAttribute(o, i);
        };
      var i = n(20439),
        a = n(66710);
    },
    66710: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return isServer;
        },
      });
      let isServer = () => !1;
    },
    20439: function (e, t, n) {
      "use strict";
      n.d(t, {
        R1: function () {
          return getOriginalContractUrl;
        },
        o$: function () {
          return superJumpPage;
        },
      });
      var o = n(37220),
        i = n(45883);
      let getOriginalContractUrl = (e) => (
          e.indexOf("copyTrade"), "".concat((0, i.Zx)("futures")).concat(e)
        ),
        a = Object.freeze({
          LOGIN: {
            app: "kcexcappscheme://login?isCloseWeb=true",
            web: "/login",
          },
          ASSETS: {
            app: "kcexcappscheme://assetspage",
            web: "/assets/overview",
          },
          CONTRACT_EXCHANGE: {
            app: "kcexcappscheme://constract_authenticate",
            web: "/futures/exchange?type=linear_swap",
          },
        }),
        superJumpPage = (e, t, n) => {
          if (e) {
            if ((0, i._u)()) window.location.href = "".concat(a[e].app);
            else {
              var c, l, u, s;
              if (t || "LOGIN" === e) {
                let { pathname: t, search: i } = window.location;
                null === (l = window) ||
                  void 0 === l ||
                  null === (c = l._router) ||
                  void 0 === c ||
                  c.push(
                    o.Z.stringifyUrl(
                      {
                        url: a[e].web,
                        query: {
                          redirect: encodeURIComponent(t + (i || "")),
                          mode: "goBack",
                          ...n,
                        },
                      },
                      { skipEmptyString: !0 }
                    )
                  );
              } else
                null === (s = window) ||
                  void 0 === s ||
                  null === (u = s._router) ||
                  void 0 === u ||
                  u.push(a[e].web);
            }
          }
        };
    },
    74397: function (e, t, n) {
      "use strict";
      let o, i, a, c;
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var l = n(45883);
      try {
        (0, l.AN)();
      } catch (e) {}
      try {
        (o = (0, l.AN)()),
          (a = document.location.hostname),
          (i = "https://www.".concat(o)),
          (c = "https://www.".concat(o));
      } catch (e) {}
      let u = a,
        s = "wbs.".concat(o),
        d = {
          domain: o,
          mainDomain: i,
          proxyMainDomain: c,
          mainApi: "".concat(i, "/api"),
          swapUrl: "https://".concat(a),
          futuresSocketUrl: "wss://".concat(u, "/fapi/edge"),
          mainSocketUrl: "wss://".concat(s),
          checkInterval: 5e3,
          serverTimeout: 5e4,
          depthInterval: 100,
          dealInterval: 100,
        };
      var g = d;
    },
    67623: function (e) {
      e.exports = {
        adpatMoibleHover: "Exception_adpatMoibleHover__1bbUK",
        "ant-tabs-tab": "Exception_ant-tabs-tab__zFqrg",
        "ant-tabs-tab-btn": "Exception_ant-tabs-tab-btn__q5IOb",
        gradientButton: "Exception_gradientButton__SL74F",
        gradientText: "Exception_gradientText__FrIoY",
        gradientAnimationWrapper: "Exception_gradientAnimationWrapper__I_GQe",
        gradientAnimationText: "Exception_gradientAnimationText__lj7Ld",
        gradientAnimationTextOverlay:
          "Exception_gradientAnimationTextOverlay__sEhvU",
        shimmer: "Exception_shimmer__y5wlK",
        "competition-modal": "Exception_competition-modal__qKHjc",
        "ant-modal-content": "Exception_ant-modal-content__16oHh",
        "ant-modal-body": "Exception_ant-modal-body__3R45S",
        wrapper: "Exception_wrapper__TXG25",
        errorContent: "Exception_errorContent__mZM8x",
        errorImg: "Exception_errorImg__v6uqQ",
        errorUrl: "Exception_errorUrl__pwsHp",
        errorSorry: "Exception_errorSorry__G3UGg",
        backHomeBtn: "Exception_backHomeBtn__JEZPu",
        errorText: "Exception_errorText__ubeJe",
      };
    },
    50836: function (e, t, n) {
      "use strict";
      e.exports = n(61278);
    },
    3098: function (e, t, n) {
      "use strict";
      var o = n(2265).createContext(void 0);
      t.IntlContext = o;
    },
    11987: function (e, t, n) {
      "use strict";
      var o = n(2265),
        i = n(3098);
      function r() {
        let e = o.useContext(i.IntlContext);
        if (!e) throw Error(void 0);
        return e;
      }
      (t.useIntlContext = r),
        (t.useLocale = function () {
          return r().locale;
        });
    },
    61278: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(11987);
      n(2265), n(3098), (t.useLocale = o.useLocale);
    },
  },
  function (e) {
    e.O(0, [6348, 1216, 9365, 2650, 1744], function () {
      return e((e.s = 34744));
    }),
      (_N_E = e.O());
  },
]);
