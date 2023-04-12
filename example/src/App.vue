<template>
  <v-github-icon
    url="https://github.com/vinayakkulkarni/vue-identify-network"
  />
  <v-identify-network
    @network-type="onNetworkType"
    @network-speed="onNetworkSpeed"
  >
    <template #unknown>
      <h4>{{ state.unknown }}</h4>
    </template>
    <template #slow>
      <div class="flex flex-col items-center justify-center w-full">
        <img src="/cat.gif" alt="you got slow internet" />
        <h4 class="py-12 w-full">{{ state.slow }}</h4>
      </div>
    </template>
    <template #fast>
      <div class="flex flex-col items-center justify-center w-full">
        <video width="400" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <h4 class="py-12 w-full">{{ state.fast }}</h4>
      </div>
    </template>
  </v-identify-network>
  <h6 class="pt-4">{{ state.speed }} Mbps</h6>
  <!-- Netlify Badge -->
  <div class="absolute bottom-4 right-4">
    <a
      href="https://app.netlify.com/sites/vue-identify-network/deploys"
      aria-label="View deploys on Netlify"
      target="_blank"
      rel="noopener noreferrer"
      class="gray-400"
    >
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { VueIdentifyNetwork } from 'vue-identify-network';

  export default defineComponent({
    components: {
      VIdentifyNetwork: VueIdentifyNetwork,
      VGithubIcon,
    },
    setup() {
      const state = reactive({
        unknown: 'Unable to detect your network type.',
        slow: "You've got quite 💩 internet",
        fast: 'You got ⚡️Internet',
        device: null,
        speed: null,
      });
      const onNetworkType = (type) => {
        state.device = type;
        console.log('type: ', type);
      };
      const onNetworkSpeed = (speed) => {
        state.speed = speed;
        console.log('speed: ', speed);
      };
      return {
        state,
        onNetworkType,
        onNetworkSpeed,
      };
    },
  });
</script>
<style>
  @import url('v-github-icon/dist/v-github-icon.css');
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');
  * {
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    text-align: center;
  }
  h4 {
    font-size: 6em;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
  h6 {
    font-size: 4em;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
</style>
