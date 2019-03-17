import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  plugins: [commonjs(), vue(), babel(), uglify()],
  output: {
    format: 'umd',
    name: 'VueIdentifyNetwork',
    file: 'dist/vue-identify-network.min.js',
  },
};
