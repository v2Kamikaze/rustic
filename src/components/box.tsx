import React from 'react';
import {
  Pressable,
  PressableProps,
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

export type PressableBoxProps = ViewProps & ViewStyle & PressableProps;

export const PressableBox: React.FC<PressableBoxProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <Pressable style={[props, style]} {...props}>
      {children}
    </Pressable>
  );
};
