<template>
  <div>
    <div :class="unknownClass" v-if="type === 'Unknown'">
      <slot name="unknown"></slot>
    </div>
    <div :class="slowClass" v-if="type === '2g' && type !== 'Unknown'">
      <slot name="slow"></slot>
    </div>
    <div :class="fastClass" v-if="type !== '2g' && type !== 'Unknown'">
      <slot name="fast"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueIdentifyNetwork',
  props: {
    unknownClass: {
      type: String,
      required: false,
    },
    slowClass: {
      type: String,
      required: false,
    },
    fastClass: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    type: null,
    downLink: null,
    vendor: typeof window === 'undefined' ? 'Unknown' : navigator.vendor,
  }),
  mounted() {
    const t = this;
    if (t.vendor.includes('Google') && t.type !== 'Unknown') {
      t.type = navigator.connection.effectiveType;
      t.downLink = navigator.connection.downlink;
    } else {
      t.type = 'Unknown';
      t.downLink = 'Unknown';
    }
    t.$emit('network-type', t.type);
    t.$emit('network-speed', t.downLink);
    navigator.connection.addEventListener('change', t.updateConnectionMeta);
  },
  beforeDestroy() {
    navigator.connection.removeEventListener('change', this.updateConnectionMeta);
  },
  methods: {
    updateConnectionMeta(e) {
      const t = this;
      t.type = e.currentTarget && e.currentTarget.effectiveType;
      t.downLink = e.currentTarget && e.currentTarget.downlink;
      t.$emit('network-type', t.type);
      t.$emit('network-speed', t.downLink);
    },
  },
};
</script>
