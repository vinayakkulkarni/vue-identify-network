<template>
  <div>
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
    window.addEventListener('load', function() {
      this.identifyConnection();
    });
  },
  methods: {
    identifyConnection() {
      this.type = navigator.connection.effectiveType || 'Unknown';
      this.$emit('changed', this.type);
    },
  },
  render() {
    return this.type;
  },
};
</script>
