import { App as Application } from 'vue';
import VueIdentifyNetwork from './components/VueIdentifyNetwork.vue';

let installed = false;

const install = (app: Application) => {
  if (!installed) {
    app.component('VueIdentifyNetwork', VueIdentifyNetwork);
    installed = true;
  }
};

export default install;
