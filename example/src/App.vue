<template>
  <v-github-icon
    url="https://github.com/vinayakkulkarni/vue-identify-network"
  />
  <v-identify-network>
    <template #unknown> REEE! Unable to identify your network type. </template>
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
  </v-identify-network>
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
  import { defineComponent, ref } from 'vue';
  import type { Ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { VueIdentifyNetwork } from 'vue-identify-network';

  export default defineComponent({
    components: {
      VIdentifyNetwork: VueIdentifyNetwork,
      VGithubIcon,
    },
    setup() {
      const online: Ref<boolean> = ref(false);
      const onConnectionChange = (isOnline: boolean) => {
        online.value = isOnline;
      };
      return {
        online,
        onConnectionChange,
      };
    },
  });
</script>
<style>
  @import url('v-github-icon/dist/v-github-icon.css');
</style>
