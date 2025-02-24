import React, {forwardRef} from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useAppTheme} from '../hooks';
import {Box} from './box';
import {IconName, Icon} from './icon';

export type TextFieldProps = TextInputProps &
  TextStyle & {
    icon?: IconName;
  };

/**
 * `TextField` is a customizable text input component that supports optional icons and theming.
 *
 * ## Usage
 * This component wraps the `TextInput` from React Native and applies the theme colors for the background, text, cursor, and placeholder. It also supports an optional icon to be displayed before the text input.
 *
 * ### Examples
 *
 * ```tsx
 * <TextField
 *   icon="SearchIcon"
 *   placeholder="Search..."
 *   onChangeText={text => console.log(text)}
 * />
 * ```
 */
export const TextField = forwardRef<TextInput, TextFieldProps>(
  ({icon, ...props}, ref) => {
    const {theme} = useAppTheme();
    const {styles} = useStyles(stylesheet);

    return (
      <Box
        flexDirection="row"
        borderWidth={1}
        gap={theme.spacings.md}
        borderRadius={theme.radius.md}
        padding={theme.spacings.md}
        backgroundColor={theme.colors.background}
        borderColor={theme.colors.border}>
        {icon && <Icon name={icon} size={20} color={theme.colors.foreground} />}
        <TextInput
          ref={ref}
          style={styles.input}
          placeholderTextColor={theme.colors.foreground}
          cursorColor={theme.colors.foreground}
          selectionColor={theme.colors.foreground}
          {...props}
        />
      </Box>
    );
  },
);

TextField.displayName = 'TextField';

const stylesheet = createStyleSheet(theme => ({
  input: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.foreground,
    backgroundColor: theme.colors.background,
  },
}));
