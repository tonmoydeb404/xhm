import {ColorValue} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Ion from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';

const iconsLib = {
  MaterialCommunity,
  Material,
  Ion,
  FontAwesome,
};

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export type IconType = keyof typeof iconsLib;

export const iconSizes: Record<IconSize, number> = {
  sm: 13,
  md: 18,
  lg: 23,
  xl: 27,
};

export type IconProps = {
  name: string;
  size?: IconSize | number;
  color?: number | ColorValue;
  type: IconType;
};

export const Icon = ({size = 'lg', type, ...rest}: IconProps) => {
  const IconType = iconsLib[type];
  return (
    <IconType
      size={typeof size === 'string' ? iconSizes[size] : size}
      {...rest}
    />
  );
};

export const MIcon = ({...props}: Omit<IconProps, 'type'>) => {
  return <Icon type="Material" {...props} />;
};

export const MCIcon = ({...props}: Omit<IconProps, 'type'>) => {
  return <Icon type="MaterialCommunity" {...props} />;
};

export const IIcon = ({...props}: Omit<IconProps, 'type'>) => {
  return <Icon type="Ion" {...props} />;
};

export type DeviceIconType = 'FAN' | 'LIGHT' | 'AC' | 'TV' | 'SOUND_SYSTEM';
const deviceIcons: Record<DeviceIconType, {type: IconType; name: string}> = {
  AC: {type: 'MaterialCommunity', name: 'air-conditioner'},
  FAN: {type: 'MaterialCommunity', name: 'fan'},
  LIGHT: {type: 'Ion', name: 'bulb-outline'},
  SOUND_SYSTEM: {type: 'MaterialCommunity', name: 'speaker'},
  TV: {type: 'Material', name: 'tv'},
};

type DeviceIconProps = {type: DeviceIconType} & Omit<
  IconProps,
  'name' | 'type'
>;
export const DeviceIcon = ({type, ...rest}: DeviceIconProps) => {
  const i = deviceIcons[type];

  return <Icon type={i.type} name={i.name} {...rest} />;
};
