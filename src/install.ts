import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import VueIdentifyNetwork from './VueIdentifyNetwork.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (installed) return;
    Vue.use(VueCompositionApi);
    Vue.component('VueIdentifyNetwork', VueIdentifyNetwork);
    installed = true;
  },
};

export default install;
