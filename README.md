# vue-identify-network ⚡️

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/vue-identify-network/ci?logo=github-actions)](https://github.com/vinayakkulkarni/vue-identify-network/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/vue-identify-network/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/vue-identify-network/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/vue-identify-network?sort=semver&logo=github)](https://github.com/vinayakkulkarni/vue-identify-network/releases)
[![npm](https://img.shields.io/npm/v/vue-identify-network?logo=npm)](https://www.npmjs.com/package/vue-identify-network)
[![npm](https://img.shields.io/npm/dm/vue-identify-network?logo=npm)](http://npm-stat.com/charts.html?package=vue-identify-network)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/vue-identify-network/latest)](https://bundlephobia.com/package/vue-identify-network@latest)
[![npm type definitions](https://img.shields.io/npm/types/vue-identify-network)](https://github.com/vinayakkulkarni/vue-identify-network/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/18331/branches/446995/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=18331&bid=446995)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/vue-identify-network)](https://snyk.io/test/github/vinayakkulkarni/vue-identify-network)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/vinayakkulkarni/vue-identify-network?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/vue-identify-network/alerts/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/vinayakkulkarni/vue-identify-network?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/vue-identify-network/context:javascript)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/vue-identify-network)](https://github.com/vinayakkulkarni/vue-identify-network/graphs/contributors)

[![built using janak](https://img.shields.io/badge/built%20using-janak-brightgreen)](https://github.com/vinayakkulkarni/janak)
[![eslint](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/prettier?logo=prettier)](https://prettier.io/)
[![rollup](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/rollup?logo=rollup.js)](https://rollupjs.org/guide/en/)
[![vue](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/vue?logo=vue.js)](https://vuejs.org/)
[![typescript](https://img.shields.io/npm/dependency-version/vue-identify-network/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

## Features

* Identify the Internet Speed ⚡️ your users have.
* Built from scratch usign Vue 2 & Composition API with TypeScript
* For Vue 2.x version – `npm i vue-identify-network@2`
* For Vue 3.x version – `npm i vue-identify-network@3`


## Table of Contents

- [vue-identify-network ⚡️](#vue-identify-network-️)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Requirements](#requirements)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
  - [Usage](#usage)
    - [Globally](#globally)
      - [As a component](#as-a-component)
      - [As a plugin](#as-a-plugin)
    - [Locally](#locally)
      - [Example](#example)
  - [API](#api)
    - [Slots](#slots)
    - [Props](#props)
    - [Events](#events)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Author](#author)

## Demo

[![Edit vue-identify-network-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/friendly-swartz-7rpqv?fontsize=14&hidenavigation=1&theme=dark)

## Requirements

* [vue](https://vuejs.org/) `^2.x`
* [@vue/composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html) `^1.x`

### Installation

```sh
npm install --save vue-identify-network
npm install --save-dev @vue/composition-api
```

CDN: [UNPKG](https://unpkg.com/vue-identify-network/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-identify-network/dist/) (available as `window.VueIdentifyNetwork`)

### Build Setup

``` bash
# install dependencies
$ npm ci

# package the library
$ npm run build
```


## Usage

### Globally

#### As a component
```javascript
Vue.component('VueIdentifyNetwork', require('vue-identify-network'));
```

#### As a plugin

```javascript
import Vue from 'vue';
import VueIdentifyNetwork from 'vue-identify-network';

Vue.use(VueIdentifyNetwork);
```

### Locally

```javascript
import { VueIdentifyNetwork } from 'vue-identify-network';
```

#### Example
<details>
<summary>Locally imported as a component</summary>
<br />

```html
<vue-identify-network
  @network-type="handleNetworkIdentified"
  @network-speed="handleNetworkSpeed"
>
  <template #unknown>
    REEE! Unable to identify your network type.
  </template>
  <template #slow>
    <img src="cat.gif" alt="you got slow internet" />
  </template>
  <template #fast>
    <video width="400" controls>
      <source src="mov_bbb.mp4" type="video/mp4" />
      <source src="mov_bbb.ogg" type="video/ogg" />
      Your browser does not support HTML5 video.
    </video>
  </template>
</vue-identify-network>
```

```typescript
import { VueIdentifyNetwork } from 'vue-identify-network';

Vue.component('example-component', {
  components: {
    VueIdentifyNetwork
  },
  setup() {
    function handleNetworkIdentified(type: string) {
      console.log('connection type: ', type);
    }
    function handleNetworkSpeed(speed: number) {
      console.log('downlink: ', speed);
    }
  }
});
```
</details>


## API

### Slots
| Name            | Description                                                 |
| --------------  | -----------------------------------------------------------       |
| `unknown`       | Named slot for when the type of connection is unidentifyable       |
| `slow`          | Named slot for when `navigator.connection.effectiveType === '2g'`  |
| `fast`          | Named slot for when `navigator.connection.effectiveType !== '2g'`  |
### Props

| Name            | Type   | Required? | Default              | Description                                                 |
| --------------  | ------ | --------- | ---------            | ----------------------------------------------------------- |
| `unknown-class`  | String  | No        | null                   | Styling the `div` which you want to give if network type is undetected.  |
| `slow-class` | String | No        | null                   | Styling the `div` which you want to give if network type is slow. |
| `fast-class`      | String | No        | null   | Styling the `div` which you want to give if network type is fast.    |

### Events

| Name                  | Returns | Description            |
| ---                   | ---     | ---                    |
| `@network-type` | String  | Emits a string value  |
| `@network-speed` | String  | Emits a number value  |

## Built with

- [TypeScript](https://www.typescriptlang.org/).
- [Vue 2](https://v3.vuejs.org)

## Contributing 

1. Fork it ( [https://github.com/vinayakkulkarni/vue-identify-network/fork](https://github.com/vinayakkulkarni/vue-identify-network/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/vue-identify-network/compare)

_Note_: 
1. Please contribute using [Github Flow](https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_


## Author

**vue-identify-network** &copy; [Vinayak](https://vinayakkulkarni.dev), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/vue-identify-network/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
