# Vue Identify Network

[![NPM version](https://img.shields.io/npm/v/vue-identify-network.svg?style=flat)](https://npmjs.com/package/vue-identify-network) [![NPM downloads](https://img.shields.io/npm/dm/vue-identify-network.svg?style=flat)](https://npmjs.com/package/vue-identify-network) [![CircleCI](https://travis-ci.org/vinayakkulkarni/vue-identify-network.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/vue-identify-network)

* Identify the Internet Speed ⚡️ your users have.

* Demo Link -> [Click Here](https://goo.gl/WnVQHu)

* This is [on GitHub](https://github.com/vinayakkulkarni/vue-detect-network) so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

## Install

```bash
yarn add vue-identify-network
```

CDN: [UNPKG](https://unpkg.com/vue-identify-network/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-identify-network/dist/) (available as `window.VueIdentifyNetwork`)

## Usage

```vue
<template>
  <detected-speed>
    <span slot="unknown">
      REEE! Unable to identify your network type.
    </span>
    <span slot="slow">
      <img src="cat.gif" alt="you got slow internet">
    </span>
    <span slot="fast">
      <video width="400" controls>
        <source src="mov_bbb.mp4" type="video/mp4">
        <source src="mov_bbb.ogg" type="video/ogg">
        Your browser does not support HTML5 video.
      </video>
    </span>
  </detected-speed>
</template>

<script>
import DetectedSpeed from 'vue-identify-network';

export default {
  components: {
    DetectedSpeed,
  },
};
</script>
```

## API

### Slots

* `unknown`: The slot to show when we are unable to identify network type (`navigator.connection.effectiveType` === `"Unknown"`)
* `slow`: The slot to show when internet is slow (`navigator.connection.effectiveType` === `"2g"`)
* `fast`: The slot to show when internet is fast (`navigator.connection.effectiveType` !== `"2g"`)

### Props

* `unknownClass`: Add your own classes to the `div`
* `slowClass`: Add your own classes to the `div`
* `fastClass`: Add your own classes to the `div`

### Events

* `changed<type>`: Emitted after network speed is identified, eg:

```vue
<detected-speed @changed="handleNetworkIdentified"></detected-speed>
```

```js
function handleNetworkIdentified(type) {
  console.log(type);
}
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**vue-identify-network** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/vue-identify-network/contributors)).

> [vinayak.site](https://vinayak.site) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
