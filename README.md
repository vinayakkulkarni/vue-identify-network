# Vue Identify Network ⚡️

[![CI](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/vue-identify-network/ci.yml?logo=github-actions&branch=main)](https://github.com/vinayakkulkarni/vue-identify-network/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/vue-identify-network/codeql.yml?logo=github-actions&branch=main)](https://github.com/vinayakkulkarni/vue-identify-network/actions/workflows/codeql.yml)
[![Ship.js Trigger](https://img.shields.io/github/actions/workflow/status/vinayakkulkarni/vue-identify-network/shipjs-trigger.yml?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/vue-identify-network/actions/workflows/shipjs-trigger.yml)
[![npm](https://img.shields.io/npm/dm/vue-identify-network?logo=npm)](http://npm-stat.com/charts.html?package=vue-identify-network)
[![npm](https://img.shields.io/npm/v/vue-identify-network/latest?logo=npm)](https://www.npmjs.com/package/vue-identify-network)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/vue-identify-network/latest?label=@latest%20size&logo=vue.js)](https://bundlephobia.com/package/vue-identify-network@latest)
[![npm type definitions](https://img.shields.io/npm/types/vue-identify-network)](https://github.com/vinayakkulkarni/vue-identify-network/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/18331/branches/446995/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=18331&bid=446995)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/vue-identify-network)](https://snyk.io/test/github/vinayakkulkarni/vue-identify-network)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/vue-identify-network?logo=github)](https://github.com/vinayakkulkarni/vue-identify-network/graphs/contributors)

[![eslint](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/prettier?logo=prettier)](https://prettier.io/)
[![vite](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/vite?logo=vite)](https://vitejs.dev/)
[![vue](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/vue?logo=vue.js)](https://vuejs.org/)
[![typescript](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

⚠️ Docs are for Vue 3, for Vue 2 docs, [click here](https://github.com/vinayakkulkarni/vue-identify-network/tree/v2.0.0#vue-identify-network-%EF%B8%8F)

## Features

- Detect offline & online events for your vue app.
- Built from scratch usign Vue 2 & Composition API with TypeScript
- For Vue >= 3.x – `npm i vue-identify-network@latest`
- For Vue 2 – `npm i vue-identify-network@2`

## Table of Contents

- [Vue Identify Network ⚡️](#vue-identify-network-️)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
    - [Usage](#usage)
    - [Example](#example)
  - [API](#api)
    - [Slots](#slots)
    - [Props](#props)
    - [Events](#events)
  - [Contributing](#contributing)
  - [Author](#author)

## Demo

[![Edit vue-identify-network demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vue-identify-network?file=src/App.vue)

## Requirements

- [vue](https://vuejs.org/) `^3.x`

### Installation

```sh
npm install --save vue-identify-network
```

CDN: [UNPKG](https://unpkg.com/vue-identify-network/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-identify-network/dist/) (available as `window.VueIdentifyNetwork`)

### Build Setup

```bash
# install dependencies
$ npm install

# package the library
$ npm run build
```

### Usage

Global component:

```js
// main.ts
import { VueIdentifyNetwork } from 'vue-identify-network';
import { createApp } from 'vue';

const app = createApp({});
app.component('VueIdentifyNetwork', VueIdentifyNetwork);
```

Or use locally

```js
// component.vue
<script lang="ts">
import { defineComponent } from 'vue';
import { VueIdentifyNetwork } from 'vue-identify-network';

export default defineComponent({
  components: {
    VueIdentifyNetwork,
  },
});
</script>
```

For Nuxt 3, create a file in `plugins/vue-identify-network.ts`

```js
import { VueIdentifyNetwork } from 'vue-identify-network';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueIdentifyNetwork', VueIdentifyNetwork);
});
```

then import the file in `nuxt.config.{j|t}s`:

```js
export default {
  // ...
  plugins: [
    // ...
    { src: '~/plugins/vue-identify-network', mode: 'client' },
    // ...
  ],
  // ...
};
```

### Example

```html
<template>
  <vue-identify-network>
    <span slot="unknown"> REEE! Unable to identify your network type. </span>
    <span slot="slow">
      <img src="cat.gif" alt="you got slow internet" />
    </span>
    <span slot="fast">
      <video width="400" controls>
        <source src="mov_bbb.mp4" type="video/mp4" />
        <source src="mov_bbb.ogg" type="video/ogg" />
        Your browser does not support HTML5 video.
      </video>
    </span>
  </vue-identify-network>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { Ref } from 'vue';
  import { VueIdentifyNetwork } from 'vue-identify-network';

  export default defineComponent({
    components: {
      VueIdentifyNetwork,
    },
    setup() {
      const online: Ref<boolean> = ref(false);
      const onNetworkChange = (status: boolean) => {
        online.value = status;
      };
      return { online, onNetworkChange };
    },
  });
</script>
```

## API

### Slots

| Name      | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `unknown` | Named slot for when the type of connection is unidentifyable      |
| `slow`    | Named slot for when `navigator.connection.effectiveType === '2g'` |
| `fast`    | Named slot for when `navigator.connection.effectiveType !== '2g'` |

### Props

| Name            | Type   | Required? | Default | Description                                                             |
| --------------- | ------ | --------- | ------- | ----------------------------------------------------------------------- |
| `unknown-class` | String | No        | null    | Styling the `div` which you want to give if network type is undetected. |
| `slow-class`    | String | No        | null    | Styling the `div` which you want to give if network type is slow.       |
| `fast-class`    | String | No        | null    | Styling the `div` which you want to give if network type is fast.       |

### Events

| Name             | Returns | Description          |
| ---------------- | ------- | -------------------- |
| `@network-type`  | String  | Emits a string value |
| `@network-speed` | String  | Emits a number value |

## Contributing

1. Fork it ( [https://github.com/vinayakkulkarni/vue-identify-network/fork](https://github.com/vinayakkulkarni/vue-identify-network/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/vue-identify-network/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**vue-identify-network** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/vue-identify-network/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
