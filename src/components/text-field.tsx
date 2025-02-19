import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useAppTheme} from '../hooks';
import {LucideIcon} from 'lucide-react-native';

export type TextFieldProps = TextInputProps & {
  icon?: LucideIcon;
};

export const TextField: React.FC<TextFieldProps> = ({
  style,
  children,
  icon: Icon,
  ...props
}) => {
  const {theme} = useAppTheme();
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.normal}>
      {Icon && <Icon size={20} color={theme.colors.foreground} />}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.foreground}
        cursorColor={theme.colors.foreground}
        selectionColor={theme.colors.foreground}
        {...props}>
        {children}
      </TextInput>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  normal: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    gap: theme.spacings.md,
    borderRadius: theme.radius.md,
    padding: theme.spacings.md,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
  },
  input: {
    fontSize: 16,
    color: theme.colors.foreground,
    backgroundColor: theme.colors.background,
  },
}));
