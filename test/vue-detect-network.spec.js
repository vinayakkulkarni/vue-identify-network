const Vue = require('vue');
const VueIdentifyNetwork = require('vue-identify-network');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

var exampleData = {
  online: navigator.connection.effectiveType,
};

describe('VueIdentifyNetwork', function() {
  var originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('emits correct event', function(done) {
    const vm = getComponent(VueIdentifyNetwork, {
      data: exampleData,
    });

    vm.$on('identified-network', function(status) {
      expect(status).toContain('g');
      done();
    });
  });
});
