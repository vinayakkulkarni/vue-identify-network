<script lang="ts">
  import {
    defineComponent,
    h,
    onBeforeUnmount,
    onMounted,
    PropType,
    Ref,
    ref,
    SetupContext,
    VNode,
  } from 'vue-demi';
  import type { Evented, NetworkType } from '~/types';

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
    setup(props, { emit, slots }: SetupContext) {
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
      let renderedSlot: VNode | undefined = undefined;
      const unknown = h('div', { class: props.unknownClass }, [
        h('span', {}, [slots.unknown && slots.unknown()]),
      ]);
      const slow = h('div', { class: props.slowClass }, [
        h('span', {}, [slots.slow && slots.slow()]),
      ]);
      const fast = h('div', { class: props.fastClass }, [
        h('span', {}, [slots.fast && slots.fast()]),
      ]);
      if (type.value === 'Unknown') renderedSlot = unknown;
      if (type.value === '2g') renderedSlot = slow;
      if (type.value !== '2g' && type.value !== 'Unknown') renderedSlot = fast;
      return () => h('div', renderedSlot);
    },
  });
</script>
