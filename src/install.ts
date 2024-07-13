import { App as Application, Plugin } from 'vue';
import VueIdentifyNetwork from './components/VueIdentifyNetwork.vue';
import { setVueInstance } from './utils/config';

let installed = false;

const install: Exclude<Plugin['install'], undefined> = (app: Application) => {
  if (!installed) {
    setVueInstance(app);
    app.component('VueIdentifyNetwork', VueIdentifyNetwork);
    installed = true;
  }
};

export default install;
