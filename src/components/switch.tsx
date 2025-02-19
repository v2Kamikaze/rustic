import React from 'react';
import {Switch as RNSwitch, SwitchProps} from 'react-native';
import {useAppTheme} from '../hooks';

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
