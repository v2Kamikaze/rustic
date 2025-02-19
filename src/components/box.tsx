import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

type BoxProps = ViewProps & ViewStyle;

export const Box: React.FC<BoxProps> = ({style, children, ...props}) => {
  return <View style={[props, style]}>{children}</View>;
};
