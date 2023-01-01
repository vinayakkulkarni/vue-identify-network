<template>
  <div>
    <div v-if="type === 'Unknown'" :class="unknownClass">
      <slot name="unknown" />
    </div>
    <div v-if="type === '2g'" :class="slowClass">
      <slot name="slow" />
    </div>
    <div v-if="type !== '2g' && type !== 'Unknown'" :class="fastClass">
      <slot name="fast" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
  import type { Ref, SetupContext, PropType } from 'vue';
  export type NetworkType = null | 'Unknown' | '2g' | '3g' | '4g' | 'wifi';

  export type Evented = {
    currentTarget: {
      effectiveType: NetworkType;
      downlink: number;
    };
  };

  declare global {
    interface Navigator {
      connection: {
        onchange: null | Function;
        addEventListener(type: 'change', listener: (e: Evented) => void): void;
        removeEventListener(
          type: 'change',
          listener: (e: Evented) => void,
        ): void;
        effectiveType: NetworkType;
        rtt: number;
        downlink: number;
        saveData: boolean;
      };
    }
  }

  export default defineComponent({
    name: 'VueIdentifyNetwork',
    props: {
      unknownClass: {
        type: String as PropType<string | null>,
        required: false,
        default: null,
      },
      slowClass: {
        type: String as PropType<string | null>,
        required: false,
        default: null,
      },
      fastClass: {
        type: String as PropType<string | null>,
        required: false,
        default: null,
      },
    },
    emits: ['network-type', 'network-speed'],
    setup(_, { emit }: SetupContext) {
      const type: Ref<NetworkType> = ref(null);
      const downLink: Ref<'Unknown' | number> = ref('Unknown');
      const vendor: Ref<string> = ref(
        typeof window === 'undefined' ? 'Unknown' : navigator.vendor,
      );

      onMounted(() => {
        if (vendor.value.includes('Google') && type.value !== 'Unknown') {
          type.value = navigator.connection.effectiveType;
          downLink.value = navigator.connection.downlink;
        } else {
          type.value = 'Unknown';
          downLink.value = 'Unknown';
        }
        emit('network-type', type.value);
        emit('network-speed', downLink.value);
        navigator.connection.addEventListener('change', updateConnection);
      });

      onBeforeUnmount(() => {
        navigator.connection.removeEventListener('change', updateConnection);
      });

      /**
       * Updates the type & downLink info
       *
       * @param {Evented} e - The type & downlink info
       */
      function updateConnection(e: Evented): void {
        type.value = e.currentTarget && e.currentTarget.effectiveType;
        downLink.value = e.currentTarget && e.currentTarget.downlink;
        emit('network-type', type.value);
        emit('network-speed', downLink.value);
      }

      return {
        type,
      };
    },
  });
</script>
