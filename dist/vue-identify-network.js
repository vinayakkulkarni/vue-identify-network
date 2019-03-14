(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueIdentifyNetwork = factory());
}(this, (function () { 'use strict';

  var script = {
    name: 'VueIdentifyNetwork',
    props: {
      unknownClass: {
        type: String,
        required: false
      },
      slowClass: {
        type: String,
        required: false
      },
      fastClass: {
        type: String,
        required: false
      }
    },
    data: function data() {
      return {
        type: null,
        vendor: typeof window === 'undefined' ? 'Unknown' : navigator.vendor
      };
    },
    mounted: function mounted() {
      this.vendor.includes('Google') && this.type !== 'Unknown' ? this.type = navigator.connection.effectiveType : this.type = 'Unknown';
      this.$emit('network-type', this.type);
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    }

    var options = typeof script === 'function' ? script.options : script;

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true;

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    }

    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      hook = function hook(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        }

        if (style) {
          style.call(this, createInjectorSSR(context));
        }

        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };

      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var __vue_script__ = script;

  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm.type === "Unknown" ? _c("div", { class: _vm.unknownClass }, [_vm._t("unknown")], 2) : _vm._e(), _vm._v(" "), _vm.type === "2g" && _vm.type !== "Unknown" ? _c("div", { class: _vm.slowClass }, [_vm._t("slow")], 2) : _vm._e(), _vm._v(" "), _vm.type !== "2g" && _vm.type !== "Unknown" ? _c("div", { class: _vm.fastClass }, [_vm._t("fast")], 2) : _vm._e()]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_inject_styles__ = undefined;

  var __vue_scope_id__ = undefined;

  var __vue_module_identifier__ = undefined;

  var __vue_is_functional_template__ = false;


  var VueIdentifyNetwork = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  return VueIdentifyNetwork;

})));
