import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type BoxProps = ViewProps & ViewStyle;

/**
 * `Box` is a flexible container component that extends the native `View` in React Native.
 * It supports all `ViewProps` and additional `ViewStyle` properties for easy styling.
 *
 * ## Usage
 * ```tsx
 * <Box flex={1} alignItems="center" justifyContent="center" backgroundColor="lightgray">
 *   <Text>Hello, World!</Text>
 * </Box>
 * ```
 */
export const Box: React.FC<BoxProps> = ({style, children, ...props}) => {
  return <View style={[props, style]}>{children}</View>;
};

export type TouchableBoxProps = ViewProps & ViewStyle & TouchableOpacityProps;

export const TouchableBox: React.FC<TouchableBoxProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={[props, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};
