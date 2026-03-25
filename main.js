const urlParams = new URLSearchParams(window.location.search);
const s3 = urlParams.get('s3') || '';
const p1 = urlParams.get('p1') || '';
const fbclid = urlParams.get('fbclid') || '';

function getBinomClickId() {
    if (
        typeof window.tokens === 'object' &&
        typeof window.tokens?.bcid === 'string'
    ) {
        return window.tokens.bcid;
    }

    const cookieMatch = document.cookie.match(/(?:^|[ ;])bcid=(.+?)(;|$)/);
    if (cookieMatch?.[1]) {
        return cookieMatch[1];
    }

    const searchMatch = window.location.search.match(
        /(?:^|[&?])bcid=(.*?)(&|$)/,
    );
    if (searchMatch?.[1]) {
        return searchMatch[1];
    }

    return null;
}

function wrapUrlWithClickId(url) {
    const clickId = getBinomClickId();
    if (!clickId) return url;

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}bcid=${encodeURIComponent(clickId)}`;
}

(function () {
    if (!s3) return;

    !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js',
    );

    fbq('init', s3);
    fbq('track', 'PageView');
})();

var BPixelJS;
!(function () {
    'use strict';
    var n = {
            d: function (e, o) {
                for (var t in o)
                    n.o(o, t) &&
                        !n.o(e, t) &&
                        Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: o[t],
                        });
            },
            o: function (n, e) {
                return Object.prototype.hasOwnProperty.call(n, e);
            },
        },
        e = {};
    function o(n) {
        !window.isPixelLoaded && window.isPixelLoading
            ? (window.pixelLoadedHandlers || (window.pixelLoadedHandlers = []),
              window.pixelLoadedHandlers.push(n))
            : n();
    }
    function t(n) {
        var e, o;
        return null !==
            (e =
                null === (o = window.BPIXEL_JS_CONFIG) || void 0 === o
                    ? void 0
                    : o[n]) && void 0 !== e
            ? e
            : void 0;
    }
    function i() {
        var n;
        return (n = console).error.apply(n, arguments);
    }
    function r(n) {
        return (
            (r =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (n) {
                          return typeof n;
                      }
                    : function (n) {
                          return n &&
                              'function' == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? 'symbol'
                              : typeof n;
                      }),
            r(n)
        );
    }
    function a() {
        var n, e, o, t;
        return null !==
            (n =
                null !==
                    (e = (function () {
                        if ('object' !== r(window.tokens) || !window.tokens)
                            return null;
                        var n = window.tokens.bcid;
                        return 'string' != typeof n ? null : n;
                    })()) && void 0 !== e
                    ? e
                    : null !==
                            (o =
                                null ==
                                (t = document.cookie.match(
                                    new RegExp(
                                        '(^|[ ;])'.concat(
                                            'bcid',
                                            '=(.+?)(;|$)',
                                        ),
                                    ),
                                ))
                                    ? void 0
                                    : t[2]) && void 0 !== o
                      ? o
                      : null) && void 0 !== n
            ? n
            : (function () {
                  var n,
                      e,
                      o =
                          null !==
                              (n =
                                  null ==
                                  (e = window.location.search.match(
                                      new RegExp(
                                          '(^|[&?])'.concat(
                                              'bcid',
                                              '=(.*?)(&|$)',
                                          ),
                                      ),
                                  ))
                                      ? void 0
                                      : e[2]) && void 0 !== n
                              ? n
                              : null;
                  return 'string' != typeof o ? null : o;
              })();
    }
    function l(n, e) {
        return ''.concat(n).concat(e);
    }
    function d(n) {
        var e = n.base,
            o = n.params,
            t = e || '?';
        return (
            Object.entries(o).forEach(function (n) {
                var e = n[0],
                    o = n[1];
                ('?' !== t[t.length - 1] && (t += '&'),
                    (t += ''.concat(e, '=').concat(o)));
            }),
            t
        );
    }
    function u(n) {
        var e = new Image();
        ((e.src = n), (e.referrerPolicy = 'no-referrer-when-downgrade'));
    }
    n.d(e, {
        default: function () {
            return c;
        },
    });
    var c = {
        config: function (n) {
            !(function (n) {
                window.BPIXEL_JS_CONFIG = Object.assign(
                    {},
                    window.BPIXEL_JS_CONFIG,
                    n,
                );
            })(n);
        },
        run: function () {
            var n,
                e,
                o,
                r =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
            window.isPixelLoading = !0;
            var u,
                c,
                s,
                f = null !== (n = r.url) && void 0 !== n ? n : t('url'),
                v =
                    null !== (e = r.campaignKey) && void 0 !== e
                        ? e
                        : t('campaignKey'),
                p = null !== (o = r.tokens) && void 0 !== o ? o : {};
            void 0 !== f
                ? void 0 !== v
                    ? ((u = l(
                          f,
                          d({
                              base: window.location.search,
                              params: Object.assign({}, p, {
                                  key: v,
                                  lp_type: 'pixel',
                              }),
                          }),
                      )),
                      (c = function () {
                          var n, e;
                          ((window.isPixelLoading = !1),
                              (window.isPixelLoaded = !0),
                              null === (n = window.pixelLoadedHandlers) ||
                                  void 0 === n ||
                                  n.forEach(function (n) {
                                      n();
                                  }),
                              (e = a())
                                  ? [
                                        {
                                            elements:
                                                document.querySelectorAll('a'),
                                            getHref: function (n) {
                                                return n.getAttribute('href');
                                            },
                                            setHref: function (n, e) {
                                                n.setAttribute('href', e);
                                            },
                                        },
                                        {
                                            elements:
                                                document.querySelectorAll(
                                                    '[data-href]',
                                                ),
                                            getHref: function (n) {
                                                return n.dataset.href || null;
                                            },
                                            setHref: function (n, e) {
                                                n.dataset.href = e;
                                            },
                                        },
                                    ].forEach(function (n) {
                                        var o = n.elements,
                                            t = n.setHref,
                                            i = n.getHref;
                                        o.forEach(function (n) {
                                            var o,
                                                r = i(n);
                                            r &&
                                                (/[?&]event[_\d]+=/.test(
                                                    (o = r),
                                                ) ||
                                                    /[?&]cnv_id=OPTIONAL(&|$)/.test(
                                                        o,
                                                    ) ||
                                                    /[?&]lp=(1|data_upd)(&|$)/.test(
                                                        o,
                                                    )) &&
                                                t(
                                                    n,
                                                    ''
                                                        .concat(r, '&bcid=')
                                                        .concat(e),
                                                );
                                        });
                                    })
                                  : i("Can't find click id"));
                      }),
                      ((s = document.createElement('script')).src = u),
                      (s.async = !1),
                      c && (s.onload = c),
                      document.head.appendChild(s))
                    : i('"campaignKey" param must be passed')
                : i('"url" param must be passed');
        },
        update: function () {
            var n,
                e,
                r,
                c =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                s = null !== (n = c.url) && void 0 !== n ? n : t('url'),
                f =
                    null !== (e = c.updateKey) && void 0 !== e
                        ? e
                        : t('updateKey'),
                v = null !== (r = c.tokens) && void 0 !== r ? r : {};
            o(function () {
                if (void 0 !== s)
                    if (void 0 !== f) {
                        var n = a();
                        n
                            ? u(
                                  l(
                                      s,
                                      d({
                                          base: '?',
                                          params: Object.assign({}, v, {
                                              upd_clickid: n,
                                              upd_key: f,
                                          }),
                                      }),
                                  ),
                              )
                            : i("Can't find click id");
                    } else i('"updateKey" param must be passed');
                else i('"url" param must be passed');
            });
        },
        conversion: function () {
            var n,
                e,
                r =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                c = null !== (n = r.url) && void 0 !== n ? n : t('url'),
                s = null !== (e = r.tokens) && void 0 !== e ? e : {};
            o(function () {
                if (void 0 !== c) {
                    var n = a();
                    (n ||
                        (function () {
                            var n;
                            (n = console).warn.apply(n, arguments);
                        })("Can't find click id"),
                        u(
                            l(
                                c,
                                d({
                                    base: '?',
                                    params: Object.assign({}, s, {
                                        cnv_id:
                                            null != n ? n : 'conversion_pixel',
                                    }),
                                }),
                            ),
                        ));
                } else i('"url" param must be passed');
            });
        },
        onPixelLoaded: o,
        useTokens: function (n) {
            o(function () {
                !(function (n) {
                    'loading' !== document.readyState
                        ? n()
                        : document.addEventListener('DOMContentLoaded', n);
                })(function () {
                    var e;
                    n(null !== (e = window.tokens) && void 0 !== e ? e : {});
                });
            });
        },
    };
    BPixelJS = e.default;
})();

BPixelJS.config({
    url: 'https://clixtream.com/click?lp=1',
    campaignKey: 'ceb926b325a74ec9a98dc30278394d61',
});
BPixelJS.run();

BPixelJS.onPixelLoaded(function () {
    const clickId = getBinomClickId();
    const tokenRow = document.querySelector('.token-row');
    if (tokenRow) {
        tokenRow.textContent =
            'session // ' + (clickId || 'no_click_id');
    }
});

let clientIP = '';
fetch('https://api.ipify.org?format=json')
    .then((r) => r.json())
    .then((d) => {
        clientIP = d.ip || '';
    })
    .catch(() => {});

const REQUIRED_SECS = 30;
let watchedSeconds = 0;
let formShown = false;
let prevTime = null;

const video = document.getElementById('main-video');
const countdownNum = document.getElementById('countdown-number');
const countdownArea = document.getElementById('countdown-area');
const formArea = document.getElementById('form-area');

countdownNum.textContent = REQUIRED_SECS;

video.addEventListener('timeupdate', () => {
    if (formShown) return;

    const currentTime = video.currentTime;

    if (prevTime !== null) {
        const delta = currentTime - prevTime;

        if (delta > 0 && delta <= 1.5) {
            watchedSeconds += delta;
            const remaining = Math.max(0, REQUIRED_SECS - watchedSeconds);
            countdownNum.textContent = Math.ceil(remaining);

            if (watchedSeconds >= REQUIRED_SECS) {
                revealForm();
            }
        }
    }

    prevTime = currentTime;
});

video.addEventListener('pause', () => {
    prevTime = null;
});

video.addEventListener('seeked', () => {
    prevTime = null;
});

video.addEventListener('ended', () => {
    prevTime = null;
});

function revealForm() {
    if (formShown) return;

    formShown = true;
    countdownArea.style.display = 'none';
    formArea.classList.add('visible');

    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent');
    }

    // Binom Event 1 — fires when form becomes visible after 30s watch time
    BPixelJS.onPixelLoaded(function () {
        const clickId = getBinomClickId();
        if (clickId) {
            const img = new Image();
            img.src =
                'https://clixtream.com/click?lp=1&event1=1&bcid=' +
                encodeURIComponent(clickId);
            img.referrerPolicy = 'no-referrer-when-downgrade';
        }
    });
}

function isValidPhone(value) {
    const trimmed = value.trim();
    const digits = trimmed.replace(/\D/g, '');

    if (!/^\+?[0-9()\-\s]+$/.test(trimmed)) return false;

    return digits.length >= 10 && digits.length <= 15;
}

function validateForm() {
    let valid = true;

    const fields = [
        {
            id: 'f-firstname',
            err: 'e-firstname',
            check: (v) => v.trim().length > 0,
        },
        {
            id: 'f-lastname',
            err: 'e-lastname',
            check: (v) => v.trim().length > 0,
        },
        {
            id: 'f-email',
            err: 'e-email',
            check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        },
        { id: 'f-phone', err: 'e-phone', check: isValidPhone },
    ];

    fields.forEach((field) => {
        const input = document.getElementById(field.id);
        const errEl = document.getElementById(field.err);

        if (!field.check(input.value)) {
            input.classList.add('error');
            errEl.classList.add('show');
            valid = false;
        } else {
            input.classList.remove('error');
            errEl.classList.remove('show');
        }
    });

    return valid;
}

function setFieldError(inputId, errorId, hasError) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    input.classList.toggle('error', hasError);
    error.classList.toggle('show', hasError);
}

function applyServerValidationErrors(errors) {
    const fieldMap = {
        firstname: ['f-firstname', 'e-firstname'],
        lastname: ['f-lastname', 'e-lastname'],
        email: ['f-email', 'e-email'],
        phone: ['f-phone', 'e-phone'],
    };

    Object.entries(fieldMap).forEach(([key, [inputId, errorId]]) => {
        setFieldError(inputId, errorId, Boolean(errors[key]?.length));
    });
}

document.getElementById('submit-btn').addEventListener('click', async () => {
    if (!validateForm()) return;

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.textContent = '// ОТПРАВКА...';
    document.getElementById('error-msg').classList.remove('show');

    const payload = {
        firstname: document.getElementById('f-firstname').value.trim(),
        lastname: document.getElementById('f-lastname').value.trim(),
        email: document.getElementById('f-email').value.trim(),
        phone: document.getElementById('f-phone').value.trim(),
        p1,
        fbclid,
        pixel_id: s3,
        bcid: getBinomClickId() || '',
        ip: clientIP,
        user_agent: navigator.userAgent,
    };

    try {
        const res = await fetch('http://127.0.0.1:8000/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.status === 422) {
            const errorData = await res.json();
            applyServerValidationErrors(errorData.errors || {});
            throw new Error('Validation error');
        }

        if (!res.ok) throw new Error('Server error');

        const data = await res.json();
        if (!data.success) throw new Error('API error');

        formArea.style.display = 'none';
        document.getElementById('success-msg').classList.add('show');

        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }

        BPixelJS.onPixelLoaded(function () {
            const clickId = getBinomClickId();
            const img = new Image();
            img.src =
                'https://clixtream.com/click?lp=1&cnv_id=' +
                encodeURIComponent(clickId || 'conversion_pixel');
            img.referrerPolicy = 'no-referrer-when-downgrade';
        });
    } catch (err) {
        if (err.message !== 'Validation error') {
            document.getElementById('error-msg').classList.add('show');
        }

        btn.disabled = false;
        btn.textContent = '// ПОЛУЧИТЬ ДОСТУП //';
    }
});
