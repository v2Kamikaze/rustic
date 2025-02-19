import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * `useAppSafeArea` is a custom hook that provides the safe area insets for the top and bottom of the screen, ensuring a minimum value of 24 for both.
 *
 * ## Usage
 * This hook can be used to adjust the layout of components by retrieving the top and bottom safe area insets, with a fallback of 24 pixels to prevent the content from being too close to the screen edges.
 *
 * ### Example
 *
 * ```tsx
 * const { top, bottom } = useAppSafeArea();
 *
 * return (
 *   <View style={{ paddingTop: top, paddingBottom: bottom }}>
 *     <Text>Content</Text>
 *   </View>
 * );
 * ```
 */
export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();

  return {
    top: Math.max(top, 24),
    bottom: Math.max(bottom, 24),
  };
}
