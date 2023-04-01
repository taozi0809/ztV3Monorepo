import { defineComponent as s, computed as r, openBlock as a, createElementBlock as p, normalizeClass as u, unref as c, renderSlot as l } from "vue";
import "./index.vue2.js";
import d from "../../_virtual/_plugin-vue_export-helper.js";
const f = s({
  name: "SButton"
}), m = /* @__PURE__ */ Object.assign(f, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = r(() => `button-${e.type}`);
    return (n, _) => (a(), p("button", {
      class: u(["button", c(o)])
    }, [
      l(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), B = /* @__PURE__ */ d(m, [["__scopeId", "data-v-835aad38"]]);
export {
  B as default
};
