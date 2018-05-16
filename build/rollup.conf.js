import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  plugins: [vue(), babel()],
  output: [
    {
      format: 'umd',
      name: 'VueIdentifyNetwork',
      file: 'dist/vue-identify-network.js',
    },
    {
      format: 'es',
      file: 'dist/vue-identify-network.esm.js',
    },
  ],
};
