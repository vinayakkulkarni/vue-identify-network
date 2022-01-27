import type { App as Application } from 'vue-demi';
import { install, isVue2, isVue3, Vue2 } from 'vue-demi';
import VueIdentifyNetwork from './components/VueIdentifyNetwork.vue';

let installed = false;
let plugin = null;

if (isVue2) {
  plugin = (app: typeof Vue2) => {
    if (installed) return;
    install(app);
    app.component('VueIdentifyNetwork', VueIdentifyNetwork);
    installed = true;
  };
}

if (isVue3) {
  plugin = (app: Application) => {
    if (installed) return;
    app.component('VueIdentifyNetwork', VueIdentifyNetwork);
    installed = true;
  };
}

export default plugin;
