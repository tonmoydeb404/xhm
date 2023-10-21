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
};

export type IconLibProps = IconProps & {type: IconType};

export const Icon = ({
  name,
  color = '#000',
  size = 'lg',
  type,
}: IconLibProps) => {
  const IconType = iconsLib[type];
  return (
    <IconType
      name={name}
      size={typeof size === 'string' ? iconSizes[size] : size}
      color={color}
    />
  );
};

export const MIcon = ({...props}: IconProps) => {
  return <Icon type="Material" {...props} />;
};

export const MCIcon = ({...props}: IconProps) => {
  return <Icon type="MaterialCommunity" {...props} />;
};

export const IIcon = ({...props}: IconProps) => {
  return <Icon type="Ion" {...props} />;
};
