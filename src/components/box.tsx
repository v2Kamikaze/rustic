import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

type BoxProps = ViewProps & ViewStyle;

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
