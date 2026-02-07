<script setup lang="ts">
  import { ref, computed, onBeforeUnmount, onMounted } from 'vue';

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
        onchange: null | ((e: Evented) => void);
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
  const unknownClass = defineModel<string | null>('unknownClass', {
    required: false,
    default: null,
  });
  const slowClass = defineModel<string | null>('slowClass', {
    required: false,
    default: null,
  });
  const fastClass = defineModel<string | null>('fastClass', {
    required: false,
    default: null,
  });

  const emits = defineEmits<{
    'network-type': [e: NetworkType];
    'network-speed': [e: number | 'Unknown'];
  }>();

  const type = ref<NetworkType | null>(null);
  const downLink = ref<'Unknown' | number>('Unknown');
  const vendor = computed(() =>
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
    emits('network-type', type.value);
    emits('network-speed', downLink.value);
    navigator.connection.addEventListener('change', updateConnection);
  });

  onBeforeUnmount(() => {
    navigator.connection.removeEventListener('change', updateConnection);
  });

  const updateConnection = (e: Evented): void => {
    type.value = e.currentTarget && e.currentTarget.effectiveType;
    downLink.value = e.currentTarget && e.currentTarget.downlink;
    emits('network-type', type.value);
    emits('network-speed', downLink.value);
  };
</script>

<template>
  <div v-if="type === 'Unknown'" :class="unknownClass">
    <slot name="unknown" />
  </div>
  <div v-if="type === '2g'" :class="slowClass">
    <slot name="slow" />
  </div>
  <div v-if="type !== '2g' && type !== 'Unknown'" :class="fastClass">
    <slot name="fast" />
  </div>
</template>
