<template>
  <div>
    <div :class="unknownClass" v-if="type === 'Unknown'">
      <slot name="unknown"></slot>
    </div>
    <div :class="slowClass" v-if="type === '2g'">
      <slot name="slow"></slot>
    </div>
    <div :class="fastClass" v-if="type !== '2g'">
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
    type:
      typeof window === 'undefined'
        ? 'Unknown'
        : navigator.connection.effectiveType,
  }),
  mounted() {
    this.type = navigator.connection.effectiveType || 'Unknown';
    this.$emit('network-type', this.type);
  },
};
</script>
