import { c as clamp, a as camelize$1, i as isNotEmptyArray } from "./utils-Cly6bs-2.js";
import "./lodash-RJPfgWqI.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e";
const context = {
  locks: {},
  zIndex: 2e3,
  enableRipple: true
};
Vue.reactive(context);
var stdin_default$8 = Vue.reactive(context);
var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var isString = (val) => typeof val === "string";
var isNumber = (val) => typeof val === "number";
var isNumeric = (val) => isNumber(val) || isString(val) && /^[-+]?\d+$/.test(val);
var isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isFunction = (val) => typeof val === "function";
var isArray = (val) => Array.isArray(val);
var isWindow = (val) => val === window;
var supportTouch$1 = () => inBrowser$1() && "ontouchstart" in window;
var inBrowser$1 = () => typeof window !== "undefined";
var inMobile = () => inBrowser$1() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var normalizeToArray = (value) => isArray(value) ? value : [value];
var classes$3 = (...classes2) => classes2.map((className) => {
  if (isArray(className)) {
    const [condition, truthy, falsy = null] = className;
    return condition ? truthy : falsy;
  }
  return className;
});
var getStyle$1 = (element) => window.getComputedStyle(element);
var getRect = (element) => {
  if (isWindow(element)) {
    const width = element.innerWidth;
    const height = element.innerHeight;
    const rect = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    };
    return __spreadProps$3(__spreadValues$3({}, rect), {
      toJSON: () => rect
    });
  }
  return element.getBoundingClientRect();
};
function call(fn, ...args) {
  if (isArray(fn)) {
    return fn.map((f) => f(...args));
  }
  if (fn) {
    return fn(...args);
  }
}
var bigCamelize = (s) => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase());
var camelize = (s) => s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
function createNamespaceFn(namespace) {
  return (name2) => {
    const componentName = `${namespace}-${name2}`;
    const createBEM = (suffix) => {
      if (!suffix) {
        return componentName;
      }
      if (suffix[0] === "$") {
        return suffix.replace("$", namespace);
      }
      return suffix.startsWith("--") ? `${componentName}${suffix}` : `${componentName}__${suffix}`;
    };
    return {
      name: bigCamelize(componentName),
      n: createBEM,
      classes: classes$3
    };
  };
}
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function keyInProvides(key) {
  const instance = Vue.getCurrentInstance();
  return key in instance.provides;
}
function useParent(key) {
  if (!keyInProvides(key)) {
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  }
  const provider = Vue.inject(key);
  const _a = provider, { childInstances, collect, clear } = _a, parentProvider = __objRest(_a, ["childInstances", "collect", "clear"]);
  const childInstance = Vue.getCurrentInstance();
  const index = Vue.computed(() => childInstances.indexOf(childInstance));
  const bindParent = (childProvider) => {
    Vue.onMounted(() => {
      Vue.nextTick().then(() => {
        collect(childInstance, childProvider);
      });
    });
    Vue.onBeforeUnmount(() => {
      Vue.nextTick().then(() => {
        clear(childInstance, childProvider);
      });
    });
  };
  return {
    index,
    parentProvider,
    bindParent
  };
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function pickProps(props2, propsKey) {
  return isArray(propsKey) ? propsKey.reduce((pickedProps, key) => {
    pickedProps[key] = props2[key];
    return pickedProps;
  }, {}) : props2[propsKey];
}
function withInstall(component, target) {
  const componentWithInstall = component;
  componentWithInstall.install = function(app) {
    const { name: name2 } = component;
    if (name2) {
      app.component(name2, component);
    }
  };
  return componentWithInstall;
}
function withPropsDefaultsSetter(target, props2) {
  target.setPropsDefaults = function(defaults) {
    Object.entries(defaults).forEach(([key, value]) => {
      const prop = props2[key];
      if (prop == null) {
        return;
      }
      if (isPlainObject(prop)) {
        props2[key] = __spreadProps$2(__spreadValues$2({}, prop), {
          default: value
        });
        return;
      }
      props2[key] = {
        type: prop,
        default: value
      };
    });
  };
}
const createNamespace = createNamespaceFn("var");
function defineListenerProp(fallback) {
  return {
    type: [Function, Array],
    default: fallback
  };
}
function formatElevation(elevation, defaultLevel) {
  if (elevation === false) {
    return null;
  }
  if (elevation === true && defaultLevel) {
    elevation = defaultLevel;
  }
  return `var-elevation--${elevation}`;
}
Vue.defineComponent({
  props: {
    is: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props2) {
    return () => isString(props2.is) ? Vue.h(props2.tag, props2.is) : props2.is;
  }
});
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const { n: n$3 } = createNamespace("ripple");
const ANIMATION_DURATION = 250;
function setStyles(element) {
  const { zIndex, position } = getStyle$1(element);
  element.style.overflow = "hidden";
  element.style.overflowX = "hidden";
  element.style.overflowY = "hidden";
  position === "static" && (element.style.position = "relative");
  zIndex === "auto" && (element.style.zIndex = "1");
}
function isTouchEvent(event) {
  return "touches" in event;
}
function computeRippleStyles(element, event) {
  const { top, left } = getRect(element);
  const { clientWidth, clientHeight } = element;
  const radius = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2;
  const size = radius * 2;
  const localX = isTouchEvent(event) ? event.touches[0].clientX - left : clientWidth / 2;
  const localY = isTouchEvent(event) ? event.touches[0].clientY - top : clientHeight / 2;
  const centerX = (clientWidth - radius * 2) / 2;
  const centerY = (clientHeight - radius * 2) / 2;
  const x = localX - radius;
  const y = localY - radius;
  return { x, y, centerX, centerY, size };
}
function createRipple(event) {
  const _ripple = this._ripple;
  _ripple.removeRipple();
  if (_ripple.disabled || _ripple.tasker || !stdin_default$8.enableRipple) {
    return;
  }
  const task = () => {
    _ripple.tasker = null;
    const { x, y, centerX, centerY, size } = computeRippleStyles(this, event);
    const ripple = document.createElement("div");
    ripple.classList.add(n$3());
    ripple.style.opacity = `0`;
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    _ripple.color && (ripple.style.backgroundColor = _ripple.color);
    ripple.dataset.createdAt = String(performance.now());
    setStyles(this);
    this.appendChild(ripple);
    window.setTimeout(() => {
      ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`;
      ripple.style.opacity = `.25`;
    }, 20);
  };
  _ripple.tasker = window.setTimeout(task, 30);
}
function removeRipple() {
  const _ripple = this._ripple;
  const task = () => {
    const ripples = this.querySelectorAll(`.${n$3()}`);
    if (!ripples.length) {
      return;
    }
    const lastRipple = ripples[ripples.length - 1];
    const delay = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt);
    window.setTimeout(() => {
      lastRipple.style.opacity = `0`;
      window.setTimeout(() => {
        var _a;
        return (_a = lastRipple.parentNode) == null ? void 0 : _a.removeChild(lastRipple);
      }, ANIMATION_DURATION);
    }, delay);
  };
  _ripple.tasker ? window.setTimeout(task, 30) : task();
}
function forbidRippleTask() {
  if (!supportTouch$1() || !stdin_default$8.enableRipple) {
    return;
  }
  const _ripple = this._ripple;
  _ripple.tasker && window.clearTimeout(_ripple.tasker);
  _ripple.tasker = null;
}
let hasKeyboardRipple = false;
function createKeyboardRipple(event) {
  if (hasKeyboardRipple || !(event.key === " " || event.key === "Enter")) {
    return;
  }
  createRipple.call(this, event);
  hasKeyboardRipple = true;
}
function removeKeyboardRipple() {
  if (!hasKeyboardRipple) {
    return;
  }
  removeRipple.call(this);
  hasKeyboardRipple = false;
}
function mounted$1(el, binding) {
  var _a;
  el._ripple = __spreadProps$1(__spreadValues$1({
    tasker: null
  }, (_a = binding.value) != null ? _a : {}), {
    removeRipple: removeRipple.bind(el)
  });
  el.addEventListener("touchstart", createRipple, { passive: true });
  el.addEventListener("touchmove", forbidRippleTask, { passive: true });
  el.addEventListener("dragstart", removeRipple, { passive: true });
  el.addEventListener("keydown", createKeyboardRipple);
  el.addEventListener("keyup", removeKeyboardRipple);
  el.addEventListener("blur", removeKeyboardRipple);
  document.addEventListener("touchend", el._ripple.removeRipple, { passive: true });
  document.addEventListener("touchcancel", el._ripple.removeRipple, { passive: true });
  document.addEventListener("dragend", el._ripple.removeRipple, { passive: true });
}
function unmounted$1(el) {
  el.removeEventListener("touchstart", createRipple);
  el.removeEventListener("touchmove", forbidRippleTask);
  el.removeEventListener("dragstart", removeRipple);
  if (!el._ripple || !el._ripple.removeRipple) {
    return;
  }
  document.removeEventListener("touchend", el._ripple.removeRipple);
  document.removeEventListener("touchcancel", el._ripple.removeRipple);
  document.removeEventListener("dragend", el._ripple.removeRipple);
}
function updated$1(el, binding) {
  var _a, _b, _c, _d, _e, _f;
  const newBinding = {
    color: (_a = binding.value) == null ? void 0 : _a.color,
    disabled: (_b = binding.value) == null ? void 0 : _b.disabled
  };
  const diff = newBinding.color !== ((_c = el._ripple) == null ? void 0 : _c.color) || newBinding.disabled !== ((_d = el._ripple) == null ? void 0 : _d.disabled);
  if (diff) {
    el._ripple = __spreadValues$1({
      tasker: newBinding.disabled ? null : (_e = el._ripple) == null ? void 0 : _e.tasker,
      removeRipple: (_f = el._ripple) == null ? void 0 : _f.removeRipple
    }, newBinding);
  }
}
const Ripple = {
  mounted: mounted$1,
  unmounted: unmounted$1,
  updated: updated$1,
  install(app) {
    app.directive("ripple", this);
  }
};
var stdin_default$7 = Ripple;
const toSizeUnit = (value) => {
  if (value == null) {
    return void 0;
  }
  if (isNumeric(value)) {
    return `${value}px`;
  }
  return String(value);
};
const multiplySizeUnit = (value, quantity = 1) => {
  if (value == null) {
    return void 0;
  }
  const legalSize = toSizeUnit(value);
  const unit = legalSize.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(legalSize) * quantity}${unit}`;
};
const props$2 = {
  hovering: Boolean,
  focusing: Boolean
};
const { name: name$2, n: n$2, classes: classes$2 } = createNamespace("hover-overlay");
function __render__$2(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock(
    "div",
    {
      class: Vue.normalizeClass(_ctx.classes(_ctx.n(), [_ctx.hovering, _ctx.n("--hovering")], [_ctx.focusing && !_ctx.inMobile(), _ctx.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const __sfc__$2 = Vue.defineComponent({
  name: name$2,
  props: props$2,
  setup: () => ({
    n: n$2,
    classes: classes$2,
    inMobile
  })
});
__sfc__$2.render = __render__$2;
var stdin_default$6 = __sfc__$2;
withInstall(stdin_default$6);
withPropsDefaultsSetter(stdin_default$6, props$2);
function useHoverOverlay() {
  const hovering = Vue.ref(false);
  const handleHovering = (value) => {
    hovering.value = value;
  };
  return {
    hovering,
    handleHovering
  };
}
var stdin_default$5 = stdin_default$6;
function shouldDisabled(arg) {
  if (!arg) {
    return false;
  }
  if (arg === "desktop" && inMobile()) {
    return true;
  }
  if (arg === "mobile" && !inMobile()) {
    return true;
  }
  return false;
}
function getStyle(element) {
  const style = element.getAttribute("style");
  if (!style)
    return {};
  return style.split(";").filter(Boolean).reduce((style2, item) => {
    const [key, value] = item.split(":").map((item2) => item2.trim());
    style2[camelize(key)] = value;
    return style2;
  }, {});
}
function updateRawStyle(element) {
  const { value } = element._hover;
  const style = getStyle(element);
  Object.keys(value).forEach((key) => {
    const camelizedKey = camelize(key);
    const styleValue = value[camelizedKey];
    if (styleValue != null && style[camelizedKey]) {
      element._hover.rawStyle[camelizedKey] = style[camelizedKey];
    }
  });
}
function updateStyle(element, styleValue) {
  Object.keys(styleValue).forEach((key) => {
    const value = styleValue[key];
    if (value != null) {
      element.style[key] = value;
    }
  });
}
function clearStyle(element) {
  Object.keys(element._hover.value).forEach((key) => {
    const value = element._hover.value[key];
    if (value != null) {
      element.style[key] = "";
    }
  });
}
function restoreStyle(element) {
  if ((element == null ? void 0 : element._hover) == null) {
    return;
  }
  clearStyle(element);
  updateStyle(element, element._hover.rawStyle);
}
function createHover() {
  const { value } = this._hover;
  this._hover.hovering = true;
  if (isFunction(value)) {
    value(this._hover.hovering);
    return;
  }
  updateStyle(this, value);
}
function removeHover() {
  this._hover.hovering = false;
  if (isFunction(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  restoreStyle(this);
}
function mounted(element, binding) {
  var _a, _b;
  const { arg, value } = binding;
  if (shouldDisabled(arg)) {
    return;
  }
  element._hover = {
    value,
    hovering: (_b = (_a = element._hover) == null ? void 0 : _a.hovering) != null ? _b : false,
    rawStyle: {}
  };
  updateRawStyle(element);
  element.addEventListener("mouseenter", createHover);
  element.addEventListener("mouseleave", removeHover);
}
function unmounted(element, binding) {
  if (shouldDisabled(binding.arg)) {
    return;
  }
  restoreStyle(element);
  element.removeEventListener("mouseenter", createHover);
  element.removeEventListener("mouseleave", removeHover);
}
function beforeUpdate(element, binding) {
  if (!element._hover) {
    return;
  }
  unmounted(element, binding);
}
function shouldUpdateStyle(element, binding) {
  return !isFunction(binding.value) && element._hover.hovering;
}
function updated(element, binding) {
  mounted(element, binding);
  if (shouldUpdateStyle(element, binding)) {
    updateStyle(element, binding.value);
  }
}
const Hover = {
  mounted,
  unmounted,
  beforeUpdate,
  updated,
  install(app) {
    app.directive("hover", this);
  }
};
var stdin_default$4 = Hover;
const props$1 = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
};
const { name: name$1, n: n$1, classes: classes$1 } = createNamespace("loading");
const _withScopeId$1 = (n2) => (Vue.pushScopeId(""), n2 = n2(), Vue.popScopeId(), n2);
const _hoisted_1$9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ Vue.createElementVNode(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ Vue.createElementVNode("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
));
const _hoisted_2$8 = [
  _hoisted_1$9
];
function __render__$1(_ctx, _cache) {
  return Vue.openBlock(), Vue.createElementBlock(
    "div",
    {
      class: Vue.normalizeClass(_ctx.n())
    },
    [
      _ctx.$slots.default ? (Vue.openBlock(), Vue.createElementBlock(
        "div",
        {
          key: 0,
          class: Vue.normalizeClass(_ctx.classes(_ctx.n("content"), [_ctx.loading, _ctx.n("content--active")]))
        },
        [
          Vue.renderSlot(_ctx.$slots, "default"),
          _ctx.loading ? (Vue.openBlock(), Vue.createElementBlock(
            "div",
            {
              key: 0,
              class: Vue.normalizeClass(_ctx.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : Vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )) : Vue.createCommentVNode("v-if", true),
      _ctx.isShow ? (Vue.openBlock(), Vue.createElementBlock(
        "div",
        {
          key: 1,
          class: Vue.normalizeClass(_ctx.classes(_ctx.n("$--box"), _ctx.n("body"), [_ctx.$slots.default, _ctx.n("inside")]))
        },
        [
          _ctx.type === "circle" ? (Vue.openBlock(), Vue.createElementBlock(
            "div",
            {
              key: 0,
              class: Vue.normalizeClass(_ctx.n("circle"))
            },
            [
              Vue.createElementVNode(
                "span",
                {
                  class: Vue.normalizeClass(_ctx.classes(_ctx.n("circle-block"), _ctx.n(`circle-block--${_ctx.size}`))),
                  style: Vue.normalizeStyle({
                    width: _ctx.multiplySizeUnit(_ctx.radius, 2),
                    height: _ctx.multiplySizeUnit(_ctx.radius, 2),
                    color: _ctx.color
                  })
                },
                [..._hoisted_2$8],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : Vue.createCommentVNode("v-if", true),
          (Vue.openBlock(true), Vue.createElementBlock(
            Vue.Fragment,
            null,
            Vue.renderList(_ctx.loadingTypeDict, (nums, key) => {
              return Vue.openBlock(), Vue.createElementBlock(
                Vue.Fragment,
                { key },
                [
                  _ctx.type === key ? (Vue.openBlock(), Vue.createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: Vue.normalizeClass(_ctx.classes(_ctx.n(key), _ctx.n(`${key}--${_ctx.size}`)))
                    },
                    [
                      (Vue.openBlock(true), Vue.createElementBlock(
                        Vue.Fragment,
                        null,
                        Vue.renderList(nums, (num) => {
                          return Vue.openBlock(), Vue.createElementBlock(
                            "div",
                            {
                              key: num + key,
                              style: Vue.normalizeStyle({ backgroundColor: _ctx.color }),
                              class: Vue.normalizeClass(_ctx.classes(_ctx.n(`${key}-item`), _ctx.n(`${key}-item--${_ctx.size}`)))
                            },
                            null,
                            6
                            /* CLASS, STYLE */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    2
                    /* CLASS */
                  )) : Vue.createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          _ctx.$slots.description || _ctx.description ? (Vue.openBlock(), Vue.createElementBlock(
            "div",
            {
              key: 1,
              class: Vue.normalizeClass(_ctx.classes(_ctx.n("description"), _ctx.n(`description--${_ctx.size}`))),
              style: Vue.normalizeStyle({ color: _ctx.color })
            },
            [
              Vue.renderSlot(_ctx.$slots, "description", {}, () => [
                Vue.createTextVNode(
                  Vue.toDisplayString(_ctx.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )) : Vue.createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
const __sfc__$1 = Vue.defineComponent({
  name: name$1,
  props: props$1,
  setup(props2, { slots }) {
    const isShow = Vue.computed(() => {
      if (!call(slots.default)) {
        return true;
      }
      return props2.loading;
    });
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    };
    return {
      loadingTypeDict,
      isShow,
      n: n$1,
      classes: classes$1,
      multiplySizeUnit
    };
  }
});
__sfc__$1.render = __render__$1;
var stdin_default$3 = __sfc__$1;
withInstall(stdin_default$3);
withPropsDefaultsSetter(stdin_default$3, props$1);
var stdin_default$2 = stdin_default$3;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const props = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  iconContainer: Boolean,
  ripple: {
    type: Boolean,
    default: true
  },
  focusable: {
    type: Boolean,
    default: true
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: true
  },
  loadingRadius: [Number, String],
  loadingType: pickProps(props$1, "type"),
  loadingSize: __spreadProps(__spreadValues({}, pickProps(props$1, "size")), {
    default: void 0
  }),
  loadingColor: __spreadProps(__spreadValues({}, pickProps(props$1, "color")), {
    default: "currentColor"
  }),
  onClick: defineListenerProp(),
  onTouchstart: defineListenerProp()
};
const BUTTON_GROUP_BIND_BUTTON_KEY = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function useButtonGroup() {
  const { bindParent, parentProvider, index } = useParent(BUTTON_GROUP_BIND_BUTTON_KEY);
  return {
    index,
    buttonGroup: parentProvider,
    bindButtonGroup: bindParent
  };
}
const { name, n, classes } = createNamespace("button");
const _hoisted_1$8 = ["tabindex", "type", "disabled"];
function __render__(_ctx, _cache) {
  const _component_var_loading = Vue.resolveComponent("var-loading");
  const _component_var_hover_overlay = Vue.resolveComponent("var-hover-overlay");
  const _directive_ripple = Vue.resolveDirective("ripple");
  const _directive_hover = Vue.resolveDirective("hover");
  return Vue.withDirectives((Vue.openBlock(), Vue.createElementBlock("button", {
    class: Vue.normalizeClass(
      _ctx.classes(
        _ctx.n(),
        _ctx.n("$--box"),
        _ctx.n(`--${_ctx.states.size}`),
        [_ctx.block, `${_ctx.n("$--flex")} ${_ctx.n("--block")}`, _ctx.n("$--inline-flex")],
        [!_ctx.states.text, _ctx.states.elevation],
        [!_ctx.states.iconContainer && !_ctx.states.text, _ctx.n(`--${_ctx.states.type}`)],
        [_ctx.states.text, `${_ctx.n("--text")} ${_ctx.n(`--text-${_ctx.states.type}`)}`],
        [_ctx.states.iconContainer, _ctx.n(`--icon-container-${_ctx.states.type}`)],
        [_ctx.round, _ctx.n("--round")],
        [_ctx.states.outline, _ctx.n("--outline")],
        [_ctx.loading || _ctx.pending, _ctx.n("--loading")],
        [_ctx.disabled, _ctx.n("--disabled")],
        [_ctx.states.text && _ctx.disabled, _ctx.n("--text-disabled")]
      )
    ),
    tabindex: _ctx.focusable ? void 0 : "-1",
    style: Vue.normalizeStyle({
      color: _ctx.states.textColor,
      background: _ctx.states.color
    }),
    type: _ctx.nativeType,
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.handleTouchstart && _ctx.handleTouchstart(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.isFocusing = false)
  }, [
    _ctx.loading || _ctx.pending ? (Vue.openBlock(), Vue.createBlock(_component_var_loading, {
      key: 0,
      class: Vue.normalizeClass(_ctx.n("loading")),
      "var-button-cover": "",
      color: _ctx.loadingColor,
      type: _ctx.loadingType,
      size: _ctx.loadingSize || _ctx.states.size,
      radius: _ctx.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : Vue.createCommentVNode("v-if", true),
    Vue.createElementVNode(
      "div",
      {
        class: Vue.normalizeClass(_ctx.classes(_ctx.n("content"), [_ctx.loading || _ctx.pending, _ctx.n("--hidden")]))
      },
      [
        Vue.renderSlot(_ctx.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    Vue.createVNode(_component_var_hover_overlay, {
      hovering: _ctx.disabled || _ctx.loading || _ctx.pending ? false : _ctx.hovering,
      focusing: _ctx.disabled || _ctx.loading || _ctx.pending ? false : _ctx.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, _hoisted_1$8)), [
    [_directive_ripple, { disabled: _ctx.disabled || !_ctx.ripple || _ctx.loading || _ctx.pending }],
    [_directive_hover, _ctx.handleHovering, "desktop"]
  ]);
}
const __sfc__ = Vue.defineComponent({
  name,
  components: {
    VarLoading: stdin_default$2,
    VarHoverOverlay: stdin_default$5
  },
  directives: { Ripple: stdin_default$7, Hover: stdin_default$4 },
  props,
  setup(props2) {
    const isFocusing = Vue.ref(false);
    const pending = Vue.ref(false);
    const { buttonGroup } = useButtonGroup();
    const { hovering, handleHovering } = useHoverOverlay();
    const states = Vue.computed(() => {
      var _a, _b, _c, _d, _e, _f;
      if (!buttonGroup) {
        return {
          elevation: formatElevation(props2.elevation, 2),
          type: (_a = props2.type) != null ? _a : "default",
          size: (_b = props2.size) != null ? _b : "normal",
          color: props2.color,
          text: props2.text,
          textColor: props2.textColor,
          outline: props2.outline,
          iconContainer: props2.iconContainer
        };
      }
      const { type, size, color, textColor, mode } = buttonGroup;
      return {
        elevation: "",
        type: (_c = props2.type) != null ? _c : type.value,
        size: (_d = props2.size) != null ? _d : size.value,
        color: (_e = props2.color) != null ? _e : color.value,
        textColor: (_f = props2.textColor) != null ? _f : textColor.value,
        text: mode.value === "text" || mode.value === "outline",
        outline: mode.value === "outline",
        iconContainer: mode.value === "icon-container"
      };
    });
    function attemptAutoLoading(result) {
      if (props2.autoLoading) {
        pending.value = true;
        Promise.all(normalizeToArray(result)).then(() => {
          pending.value = false;
        }).catch(() => {
          pending.value = false;
        });
      }
    }
    function handleClick(e) {
      const { loading, disabled, onClick } = props2;
      if (!onClick || loading || disabled || pending.value) {
        return;
      }
      attemptAutoLoading(call(onClick, e));
    }
    function handleTouchstart(e) {
      const { loading, disabled, onTouchstart } = props2;
      if (!onTouchstart || loading || disabled || pending.value) {
        return;
      }
      attemptAutoLoading(call(onTouchstart, e));
    }
    function handleFocus() {
      if (!props2.focusable) {
        return;
      }
      isFocusing.value = true;
    }
    return {
      pending,
      states,
      hovering,
      isFocusing,
      n,
      classes,
      handleHovering,
      handleClick,
      handleTouchstart,
      handleFocus
    };
  }
});
__sfc__.render = __render__;
var stdin_default$1 = __sfc__;
withInstall(stdin_default$1);
withPropsDefaultsSetter(stdin_default$1, props);
var stdin_default = stdin_default$1;
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
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-15dd89f3"]]);
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
const WelcomeItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5], ["__scopeId", "data-v-fd0742eb"]]);
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
const _withScopeId = (n2) => (Vue.pushScopeId("data-v-6b4eec63"), n2 = n2(), Vue.popScopeId(), n2);
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
  __name: "App",
  setup(__props) {
    const arr = Vue.ref([1]);
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
      console.log(camelize$1("chouchouji"));
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.unref(isNotEmptyArray)(arr.value) ? (Vue.openBlock(), Vue.createElementBlock("h1", _hoisted_1, "hhhhh")) : Vue.createCommentVNode("", true),
        Vue.createVNode(Vue.unref(stdin_default), {
          type: "primary",
          style: { "width": "100px" }
        }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("click me")
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
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b4eec63"]]);
const inBrowser = typeof window !== "undefined";
const supportTouch = inBrowser && "ontouchstart" in window;
let initiated = false;
let eventTarget;
const isMousedown = (eventType) => eventType === "mousedown";
const isMousemove = (eventType) => eventType === "mousemove";
const isMouseup = (eventType) => eventType === "mouseup";
const isUpdateTarget = (eventType) => isMousedown(eventType) || !eventTarget || eventTarget && !eventTarget.dispatchEvent;
function Touch(target, identifier, mouseEvent) {
  const { clientX, clientY, screenX, screenY, pageX, pageY } = mouseEvent;
  this.identifier = identifier;
  this.target = target;
  this.clientX = clientX;
  this.clientY = clientY;
  this.screenX = screenX;
  this.screenY = screenY;
  this.pageX = pageX;
  this.pageY = pageY;
}
function createTouchList() {
  const touchList = [];
  touchList.item = function(index) {
    return this[index] || null;
  };
  touchList.identifiedTouch = function(id) {
    return this[id + 1] || null;
  };
  return touchList;
}
function createTouchListWithEvent(mouseEvent) {
  const touchList = createTouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEvent));
  return touchList;
}
function getActiveTouches(mouseEvent) {
  const { type } = mouseEvent;
  if (isMouseup(type)) {
    return createTouchList();
  }
  return createTouchListWithEvent(mouseEvent);
}
function triggerTouch(touchType, mouseEvent) {
  const { altKey, ctrlKey, metaKey, shiftKey } = mouseEvent;
  const touchEvent = new Event(touchType, { bubbles: true, cancelable: true });
  touchEvent.altKey = altKey;
  touchEvent.ctrlKey = ctrlKey;
  touchEvent.metaKey = metaKey;
  touchEvent.shiftKey = shiftKey;
  touchEvent.touches = getActiveTouches(mouseEvent);
  touchEvent.targetTouches = getActiveTouches(mouseEvent);
  touchEvent.changedTouches = createTouchListWithEvent(mouseEvent);
  eventTarget.dispatchEvent(touchEvent);
}
function onMouse(mouseEvent, touchType) {
  const { type, target } = mouseEvent;
  initiated = isMousedown(type) ? true : isMouseup(type) ? false : initiated;
  if (isMousemove(type) && !initiated) return;
  if (isUpdateTarget(type)) eventTarget = target;
  triggerTouch(touchType, mouseEvent);
  if (isMouseup(type)) eventTarget = null;
}
function createTouchEmulator() {
  window.addEventListener("mousedown", (event) => onMouse(event, "touchstart"), true);
  window.addEventListener("mousemove", (event) => onMouse(event, "touchmove"), true);
  window.addEventListener("mouseup", (event) => onMouse(event, "touchend"), true);
}
if (inBrowser && !supportTouch) {
  createTouchEmulator();
}
Vue.createApp(App).mount("#app");
