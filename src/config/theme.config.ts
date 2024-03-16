import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

const brandColors = {
  primary: '#E64A19',
  secondary: '#009688',
  tertiary: '#FFC107',
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  background: '#F5F5F5',
  surface: '#FFFFFF',
};

// ----------------------------------------------------------------------
const lightColors = {
  primary: 'rgb(176, 46, 0)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(255, 219, 209)',
  onPrimaryContainer: 'rgb(59, 9, 0)',
  secondary: 'rgb(0, 106, 96)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(116, 248, 229)',
  onSecondaryContainer: 'rgb(0, 32, 28)',
  tertiary: 'rgb(120, 89, 0)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(255, 223, 158)',
  onTertiaryContainer: 'rgb(38, 26, 0)',
  error: 'rgb(187, 22, 20)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 213)',
  onErrorContainer: 'rgb(65, 0, 1)',
  background: 'rgb(255, 251, 255)',
  onBackground: 'rgb(32, 26, 24)',
  surface: 'rgb(255, 251, 255)',
  onSurface: 'rgb(32, 26, 24)',
  surfaceVariant: 'rgb(245, 222, 216)',
  onSurfaceVariant: 'rgb(83, 67, 63)',
  outline: 'rgb(133, 115, 110)',
  outlineVariant: 'rgb(216, 194, 188)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(54, 47, 45)',
  inverseOnSurface: 'rgb(251, 238, 235)',
  inversePrimary: 'rgb(255, 181, 160)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(251, 241, 242)',
    level2: 'rgb(249, 235, 235)',
    level3: 'rgb(246, 229, 227)',
    level4: 'rgb(246, 226, 224)',
    level5: 'rgb(244, 222, 219)',
  },
  surfaceDisabled: 'rgba(32, 26, 24, 0.12)',
  onSurfaceDisabled: 'rgba(32, 26, 24, 0.38)',
  backdrop: 'rgba(59, 45, 41, 0.4)',
  success: 'rgb(0, 110, 28)',
  onSuccess: 'rgb(255, 255, 255)',
  successContainer: 'rgb(148, 249, 144)',
  onSuccessContainer: 'rgb(0, 34, 4)',
  warning: 'rgb(120, 89, 0)',
  onWarning: 'rgb(255, 255, 255)',
  warningContainer: 'rgb(255, 223, 158)',
  onWarningContainer: 'rgb(38, 26, 0)',
};

const light = {
  ...MD3LightTheme,
  brand: brandColors,
  color: lightColors,
};

// ----------------------------------------------------------------------
const darkColors = {
  primary: 'rgb(255, 181, 160)',
  onPrimary: 'rgb(96, 21, 0)',
  primaryContainer: 'rgb(135, 33, 0)',
  onPrimaryContainer: 'rgb(255, 219, 209)',
  secondary: 'rgb(83, 219, 201)',
  onSecondary: 'rgb(0, 55, 49)',
  secondaryContainer: 'rgb(0, 80, 72)',
  onSecondaryContainer: 'rgb(116, 248, 229)',
  tertiary: 'rgb(250, 189, 0)',
  onTertiary: 'rgb(63, 46, 0)',
  tertiaryContainer: 'rgb(91, 67, 0)',
  onTertiaryContainer: 'rgb(255, 223, 158)',
  error: 'rgb(255, 180, 169)',
  onError: 'rgb(105, 0, 2)',
  errorContainer: 'rgb(147, 0, 5)',
  onErrorContainer: 'rgb(255, 218, 213)',
  background: 'rgb(32, 26, 24)',
  onBackground: 'rgb(237, 224, 221)',
  surface: 'rgb(32, 26, 24)',
  onSurface: 'rgb(237, 224, 221)',
  surfaceVariant: 'rgb(83, 67, 63)',
  onSurfaceVariant: 'rgb(216, 194, 188)',
  outline: 'rgb(160, 140, 135)',
  outlineVariant: 'rgb(83, 67, 63)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(237, 224, 221)',
  inverseOnSurface: 'rgb(54, 47, 45)',
  inversePrimary: 'rgb(176, 46, 0)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(43, 34, 31)',
    level2: 'rgb(50, 38, 35)',
    level3: 'rgb(57, 43, 39)',
    level4: 'rgb(59, 45, 40)',
    level5: 'rgb(63, 48, 43)',
  },
  surfaceDisabled: 'rgba(237, 224, 221, 0.12)',
  onSurfaceDisabled: 'rgba(237, 224, 221, 0.38)',
  backdrop: 'rgba(59, 45, 41, 0.4)',
  success: 'rgb(120, 220, 119)',
  onSuccess: 'rgb(0, 57, 10)',
  successContainer: 'rgb(0, 83, 19)',
  onSuccessContainer: 'rgb(148, 249, 144)',
  warning: 'rgb(250, 189, 0)',
  onWarning: 'rgb(63, 46, 0)',
  warningContainer: 'rgb(91, 67, 0)',
  onWarningContainer: 'rgb(255, 223, 158)',
};

const dark = {
  ...MD3DarkTheme,
  brand: brandColors,
  colors: darkColors,
};

const themeConfig = {
  light,
  dark,
};

export default themeConfig;

// GET THEME
export const getTheme = (mode: string) => {
  if (mode === 'dark') return themeConfig.dark;

  return themeConfig.light;
};
