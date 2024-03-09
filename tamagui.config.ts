import {config} from '@tamagui/config';
import {color, radius, size, space, zIndex} from '@tamagui/themes';
import {createTamagui, createTokens} from 'tamagui';

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
});

const tamaguiConfig = createTamagui(config);

export type TamaguiConfig = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends TamaguiConfig {}
}

export default tamaguiConfig;
