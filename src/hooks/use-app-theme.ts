import {useStyles} from 'react-native-unistyles';

/**
 * `useAppTheme` is a custom hook that provides access to the current app theme, allowing components to adapt to the app’s styling preferences.
 *
 * ## Usage
 * This hook can be used to retrieve the app's current theme, which can then be applied to various components for consistent styling.
 *
 * ### Example
 *
 * ```tsx
 * const { theme } = useAppTheme();
 *
 * return (
 *   <View style={{ backgroundColor: theme.colors.background }}>
 *     <Text style={{ color: theme.colors.foreground }}>Hello, World!</Text>
 *   </View>
 * );
 * ```
 */
export function useAppTheme() {
  return {theme: useStyles().theme};
}
