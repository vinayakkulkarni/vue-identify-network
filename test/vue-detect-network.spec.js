const Vue = require('vue');
const VueIdentifyNetwork = require('vue-identify-network');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

describe('VueIdentifyNetwork', function() {
  // var originalTimeout;

  // beforeEach(function() {
  //   originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  // });

  // afterEach(function() {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  // });

  // it('emits correct event', function(done) {
  //   const vm = getComponent(VueIdentifyNetwork);

  //   vm.$on('network-type', function(status) {
  //     expect(status).toContain('g');
  //     done();
  //   });
  // });

  it('has correct DOM structure', function() {
    const vm = getComponent(VueIdentifyNetwork);

    expect(vm.$el.nodeName).toBe('DIV');
  });
});
