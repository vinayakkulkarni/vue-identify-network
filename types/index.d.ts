import type {
  AllowedComponentProps,
  ComponentCustomProps,
  DefineComponent,
  VNodeProps,
} from '@vue/runtime-dom';

export type NetworkType = null | 'Unknown' | '2g' | '3g' | '4g' | 'wifi';

export type Evented = {
  currentTarget: {
    effectiveType: NetworkType;
    downlink: number;
  };
};

export type VueIdentifyNetworkProps = {
  unknownClass?: string;
  slowClass?: string;
  fastClass?: string;
} & AllowedComponentProps &
  ComponentCustomProps &
  VNodeProps;

declare global {
  interface Navigator {
    connection: {
      onchange: null | Function;
      addEventListener(type: 'change', listener: (e: Evented) => void): void;
      removeEventListener(type: 'change', listener: (e: Evented) => void): void;
      effectiveType: NetworkType;
      rtt: number;
      downlink: number;
      saveData: boolean;
    };
  }
}

export const VueIdentifyNetwork: DefineComponent<VueIdentifyNetworkProps>;
