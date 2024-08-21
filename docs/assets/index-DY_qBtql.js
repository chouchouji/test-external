import {
  defineComponent as v,
  openBlock as r,
  createElementBlock as a,
  createElementVNode as n,
  toDisplayString as f,
  renderSlot as u,
  Fragment as p,
  createVNode as c,
  withCtx as l,
  createTextVNode as d,
  ref as g,
  unref as M,
  createCommentVNode as w,
  pushScopeId as $,
  popScopeId as H,
  createApp as y
} from 'vue'
;(function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) m(t)
  new MutationObserver((t) => {
    for (const s of t)
      if (s.type === 'childList')
        for (const z of s.addedNodes) z.tagName === 'LINK' && z.rel === 'modulepreload' && m(z)
  }).observe(document, { childList: !0, subtree: !0 })
  function h(t) {
    const s = {}
    return (
      t.integrity && (s.integrity = t.integrity),
      t.referrerPolicy && (s.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    )
  }
  function m(t) {
    if (t.ep) return
    t.ep = !0
    const s = h(t)
    fetch(t.href, s)
  }
})()
const V =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",
  C = { class: 'greetings' },
  L = { class: 'green' },
  x = v({
    __name: 'HelloWorld',
    props: { msg: {} },
    setup(e) {
      return (o, h) => (r(), a('div', C, [n('h1', L, f(o.msg), 1)]))
    }
  }),
  i = (e, o) => {
    const h = e.__vccOpts || e
    for (const [m, t] of o) h[m] = t
    return h
  },
  A = i(x, [['__scopeId', 'data-v-15dd89f3']]),
  I = {},
  N = { class: 'item' },
  S = { class: 'details' }
function O(e, o) {
  return (
    r(),
    a('div', N, [
      n('i', null, [u(e.$slots, 'icon', {}, void 0, !0)]),
      n('div', S, [
        n('h3', null, [u(e.$slots, 'heading', {}, void 0, !0)]),
        u(e.$slots, 'default', {}, void 0, !0)
      ])
    ])
  )
}
const _ = i(I, [
    ['render', O],
    ['__scopeId', 'data-v-fd0742eb']
  ]),
  E = {},
  b = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '17', fill: 'currentColor' },
  B = n(
    'path',
    {
      d: 'M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z'
    },
    null,
    -1
  ),
  P = [B]
function T(e, o) {
  return r(), a('svg', b, P)
}
const W = i(E, [['render', T]]),
  D = {},
  F = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'aria-hidden': 'true',
    role: 'img',
    class: 'iconify iconify--mdi',
    width: '24',
    height: '24',
    preserveAspectRatio: 'xMidYMid meet',
    viewBox: '0 0 24 24'
  },
  Y = n(
    'path',
    {
      d: 'M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z',
      fill: 'currentColor'
    },
    null,
    -1
  ),
  k = [Y]
function q(e, o) {
  return r(), a('svg', F, k)
}
const K = i(D, [['render', q]]),
  R = {},
  j = { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '20', fill: 'currentColor' },
  G = n(
    'path',
    {
      d: 'M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z'
    },
    null,
    -1
  ),
  J = [G]
function Q(e, o) {
  return r(), a('svg', j, J)
}
const U = i(R, [['render', Q]]),
  X = {},
  Z = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' },
  e1 = n(
    'path',
    {
      d: 'M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z'
    },
    null,
    -1
  ),
  t1 = [e1]
function o1(e, o) {
  return r(), a('svg', Z, t1)
}
const n1 = i(X, [['render', o1]]),
  c1 = {},
  s1 = { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', fill: 'currentColor' },
  l1 = n(
    'path',
    {
      d: 'M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z'
    },
    null,
    -1
  ),
  r1 = [l1]
function a1(e, o) {
  return r(), a('svg', s1, r1)
}
const i1 = i(c1, [['render', a1]]),
  h1 = v({
    __name: 'TheWelcome',
    setup(e) {
      return (o, h) => (
        r(),
        a(
          p,
          null,
          [
            c(_, null, { icon: l(() => [c(W)]), heading: l(() => [d('Documentation')]), _: 1 }),
            c(_, null, { icon: l(() => [c(K)]), heading: l(() => [d('Tooling')]), _: 1 }),
            c(_, null, { icon: l(() => [c(U)]), heading: l(() => [d('Ecosystem')]), _: 1 }),
            c(_, null, { icon: l(() => [c(n1)]), heading: l(() => [d('Community')]), _: 1 }),
            c(_, null, { icon: l(() => [c(i1)]), heading: l(() => [d('Support Vue')]), _: 1 })
          ],
          64
        )
      )
    }
  })
var m1 = Array.isArray
function d1(e) {
  return m1(e) && e.length > 0
}
const _1 = (e) => ($('data-v-2fe05d28'), (e = e()), H(), e),
  z1 = { key: 0 },
  u1 = _1(() =>
    n('img', { alt: 'Vue logo', class: 'logo', src: V, width: '125', height: '125' }, null, -1)
  ),
  v1 = { class: 'wrapper' },
  p1 = v({
    __name: 'App',
    setup(e) {
      const o = g([1])
      return (h, m) => (
        r(),
        a(
          p,
          null,
          [
            M(d1)(o.value) ? (r(), a('h1', z1, ' hhhhh ')) : w('', !0),
            n('header', null, [u1, n('div', v1, [c(A, { msg: 'You did it!' })])]),
            n('main', null, [c(h1)])
          ],
          64
        )
      )
    }
  }),
  f1 = i(p1, [['__scopeId', 'data-v-2fe05d28']])
y(f1).mount('#app')
