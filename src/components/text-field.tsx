import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useAppTheme} from '../hooks';

type TextFieldVariant = 'normal';

interface TextFieldProps extends TextInputProps {
  variant?: TextFieldVariant;
  errorMessage?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  variant = 'normal',
  style,
  children,
  ...props
}) => {
  const {theme} = useAppTheme();
  const {styles} = useStyles(stylesheet);

  return (
    <TextInput
      style={[styles.normal, styles[variant], style]}
      placeholderTextColor={theme.colors.foreground}
      cursorColor={theme.colors.foreground}
      {...props}>
      {children}
    </TextInput>
  );
};

const stylesheet = createStyleSheet(theme => ({
  normal: {
    flex: 1,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    padding: theme.spacings.md,
    fontSize: 16,
    height: 48,
    color: theme.colors.foreground,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
  },
}));
