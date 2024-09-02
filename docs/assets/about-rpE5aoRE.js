import { u as useRouter } from "./index-D7I8oply.js";
import { s as stdin_default } from "./ButtonSfc-CC9mCO7r.js";
import { n as normalizeToArray, b as bigCamelize } from "./utils-DJzies15.js";
import "./lodash-RJPfgWqI.js";
const _hoisted_1 = /* @__PURE__ */ Vue.createElementVNode("h1", null, "about", -1);
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "about",
  setup(__props) {
    const router = useRouter();
    function navigateToHomePage() {
      router.push({
        path: "/"
      });
    }
    Vue.onMounted(() => {
      console.log("about");
      console.log(normalizeToArray("123"));
      console.log(bigCamelize("chouchouji"));
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        _hoisted_1,
        Vue.createVNode(Vue.unref(stdin_default), {
          type: "primary",
          style: { "width": "150px" },
          onClick: navigateToHomePage
        }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("go to home page")
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
