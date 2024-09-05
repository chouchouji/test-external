import { u as useRouter } from './index-BIhoHI66.js'
import { s as stdin_default } from './ButtonSfc-CC9mCO7r.js'
const TestComponent = /* @__PURE__ */ Vue.defineComponent({
  name: 'TestComponent',
  setup() {
    console.warn('You must install vue jsx plugin')
    return () =>
      Vue.createVNode('div', null, [
        Vue.createVNode('h1', null, [Vue.createTextVNode('Hello, Vue with JSX!')]),
        Vue.createVNode('p', null, [
          Vue.createTextVNode('This is a simple component using JSX in Vue.js')
        ])
      ])
  }
})
const TestComponent$1 = TestComponent
const _hoisted_1 = /* @__PURE__ */ Vue.createElementVNode('h1', null, 'about', -1)
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: 'about',
  setup(__props) {
    const router = useRouter()
    function navigateToHomePage() {
      router.push({
        path: '/'
      })
    }
    Vue.onMounted(() => {})
    return (_ctx, _cache) => {
      return (
        Vue.openBlock(),
        Vue.createElementBlock(
          Vue.Fragment,
          null,
          [
            _hoisted_1,
            Vue.createVNode(
              Vue.unref(stdin_default),
              {
                type: 'primary',
                style: { width: '150px' },
                onClick: navigateToHomePage
              },
              {
                default: Vue.withCtx(() => [Vue.createTextVNode('go to home page')]),
                _: 1
              }
            ),
            Vue.createVNode(Vue.unref(TestComponent$1))
          ],
          64
        )
      )
    }
  }
})
export { _sfc_main as default }
