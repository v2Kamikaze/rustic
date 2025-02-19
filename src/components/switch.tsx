import React from 'react';
import {Switch as RNSwitch, SwitchProps} from 'react-native';
import {useAppTheme} from '../hooks';

/**
 * `Switch` is a customizable switch component that supports theming and customization of track and thumb colors.
 *
 * ## Usage
 * This component wraps the `Switch` from React Native and applies the theme colors for the track and thumb.
 *
 * ### Examples
 *
 * ```tsx
 * <Switch onValueChange={() => console.log('Toggled')} value={true} />
 * ```
 */
export const Switch: React.FC<SwitchProps> = ({...rest}) => {
  const {theme} = useAppTheme();

  return (
    <RNSwitch
      trackColor={{
        true: theme.colors.primary,
        false: theme.colors.secondary,
      }}
      thumbColor={theme.colors.primaryForeground}
      {...rest}
    />
  );
};
