import { _ as _export_sfc, u as useRouter } from "./index-D7I8oply.js";
import { s as stdin_default } from "./ButtonSfc-CC9mCO7r.js";
import { c as clamp, a as camelize, i as isNotEmptyArray } from "./utils-DJzies15.js";
import "./lodash-RJPfgWqI.js";
const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
const _hoisted_1$7 = { class: "greetings" };
const _hoisted_2$7 = { class: "green" };
const _sfc_main$8 = /* @__PURE__ */ Vue.defineComponent({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$7, [
        Vue.createElementVNode("h1", _hoisted_2$7, Vue.toDisplayString(_ctx.msg), 1)
      ]);
    };
  }
});
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-74bf7c31"]]);
const _sfc_main$7 = {};
const _hoisted_1$6 = { class: "item" };
const _hoisted_2$6 = { class: "details" };
function _sfc_render$5(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1$6, [
    Vue.createElementVNode("i", null, [
      Vue.renderSlot(_ctx.$slots, "icon", {}, void 0, true)
    ]),
    Vue.createElementVNode("div", _hoisted_2$6, [
      Vue.createElementVNode("h3", null, [
        Vue.renderSlot(_ctx.$slots, "heading", {}, void 0, true)
      ]),
      Vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const WelcomeItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-65db9f60"]]);
const _sfc_main$6 = {};
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
};
const _hoisted_2$5 = /* @__PURE__ */ Vue.createElementVNode("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function _sfc_render$4(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const DocumentationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4]]);
const _sfc_main$5 = {};
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
const _hoisted_2$4 = /* @__PURE__ */ Vue.createElementVNode("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$3(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const ToolingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
const _sfc_main$4 = {};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
};
const _hoisted_2$3 = /* @__PURE__ */ Vue.createElementVNode("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$2(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const EcosystemIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
const _hoisted_2$2 = /* @__PURE__ */ Vue.createElementVNode("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$1(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const CommunityIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ Vue.createElementVNode("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const SupportIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "TheWelcome",
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(WelcomeItem, null, {
          icon: Vue.withCtx(() => [
            Vue.createVNode(DocumentationIcon)
          ]),
          heading: Vue.withCtx(() => [
            Vue.createTextVNode("Documentation")
          ]),
          _: 1
        }),
        Vue.createVNode(WelcomeItem, null, {
          icon: Vue.withCtx(() => [
            Vue.createVNode(ToolingIcon)
          ]),
          heading: Vue.withCtx(() => [
            Vue.createTextVNode("Tooling")
          ]),
          _: 1
        }),
        Vue.createVNode(WelcomeItem, null, {
          icon: Vue.withCtx(() => [
            Vue.createVNode(EcosystemIcon)
          ]),
          heading: Vue.withCtx(() => [
            Vue.createTextVNode("Ecosystem")
          ]),
          _: 1
        }),
        Vue.createVNode(WelcomeItem, null, {
          icon: Vue.withCtx(() => [
            Vue.createVNode(CommunityIcon)
          ]),
          heading: Vue.withCtx(() => [
            Vue.createTextVNode("Community")
          ]),
          _: 1
        }),
        Vue.createVNode(WelcomeItem, null, {
          icon: Vue.withCtx(() => [
            Vue.createVNode(SupportIcon)
          ]),
          heading: Vue.withCtx(() => [
            Vue.createTextVNode("Support Vue")
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const _withScopeId = (n) => (Vue.pushScopeId("data-v-7cafdffb"), n = n(), Vue.popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("div", {
  id: "main",
  style: { "width": "600px", "height": "400px" }
}, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ Vue.createElementVNode("img", {
  alt: "Vue logo",
  class: "logo",
  src: _imports_0,
  width: "125",
  height: "125"
}, null, -1));
const _hoisted_4 = { class: "wrapper" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "home",
  setup(__props) {
    const arr = Vue.ref([1]);
    const router = useRouter();
    function navigateToAboutPage() {
      router.push({
        path: "/about"
      });
    }
    Vue.onMounted(() => {
      const chartDom = document.getElementById("main");
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      };
      option && myChart.setOption(option);
      console.log(clamp(4, 3, 5));
      console.log(camelize("chouchouji"));
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.unref(isNotEmptyArray)(arr.value) ? (Vue.openBlock(), Vue.createElementBlock("h1", _hoisted_1, "hhhhh")) : Vue.createCommentVNode("", true),
        Vue.createVNode(Vue.unref(stdin_default), {
          type: "primary",
          style: { "width": "150px" },
          onClick: navigateToAboutPage
        }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("go to about page")
          ]),
          _: 1
        }),
        _hoisted_2,
        Vue.createElementVNode("header", null, [
          _hoisted_3,
          Vue.createElementVNode("div", _hoisted_4, [
            Vue.createVNode(HelloWorld, { msg: "You did it!" })
          ])
        ]),
        Vue.createElementVNode("main", null, [
          Vue.createVNode(_sfc_main$1)
        ])
      ], 64);
    };
  }
});
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cafdffb"]]);
export {
  home as default
};
