import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useAppTheme} from '../hooks';
import {Icon, IconName} from './icon';

export type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

export type ButtonConfig = {
  variant?: ButtonVariant;
  title?: string;
  loading?: boolean;
  icon?: IconName;
  onPress?: () => void;
};

type RNTouchableOpacityProps = Omit<TouchableOpacityProps, 'children'>;

export type ButtonProps = RNTouchableOpacityProps & ViewStyle & ButtonConfig;

/**
 * `Button` is a customizable button component that supports different variants, icons, and loading states.
 *
 * ## Usage
 * ```tsx
 * <Button title="Click me" onPress={() => console.log('Pressed')} />
 *
 * <Button variant="destructive" title="Delete" onPress={() => console.log('Deleted')} />
 *
 * <Button loading title="Loading..." />
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  title = '',
  loading = false,
  style,
  icon,
  ...props
}) => {
  const {theme} = useAppTheme();
  const {styles: buttonStyles} = useStyles(buttonStylesheet);
  const {styles: textStyles} = useStyles(textStylesheet);

  const colorMap: Record<ButtonVariant, string> = {
    default: theme.colors.primaryForeground,
    destructive: theme.colors.destructiveForeground,
    outline: theme.colors.primary,
    secondary: theme.colors.secondaryForeground,
    ghost: theme.colors.primary,
    link: theme.colors.foreground,
  };

  return (
    <TouchableOpacity
      style={[buttonStyles.base, buttonStyles[variant], style, {...props}]}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator size={24} color={colorMap[variant]} />
      ) : (
        <>
          {icon && <Icon name={icon} size={24} color={colorMap[variant]} />}
          {title && (
            <Text style={[textStyles.base, textStyles[variant]]}>{title}</Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const buttonStylesheet = createStyleSheet(theme => ({
  base: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacings.md,
    borderRadius: theme.radius.md,
    gap: theme.spacings.md,
  },
  default: {
    backgroundColor: theme.colors.primary,
  },
  destructive: {
    backgroundColor: theme.colors.destructive,
  },
  outline: {
    borderWidth: 1,
    borderColor: theme.colors.input,
    backgroundColor: theme.colors.background,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    padding: 0,
    backgroundColor: 'transparent',
  },
}));

const textStylesheet = createStyleSheet(theme => ({
  base: {
    fontSize: 16,
    fontWeight: 'medium',
  },
  default: {
    color: theme.colors.primaryForeground,
  },
  destructive: {
    color: theme.colors.destructiveForeground,
  },
  outline: {
    color: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.secondaryForeground,
  },
  ghost: {
    color: theme.colors.primary,
  },
  link: {
    color: theme.colors.foreground,
    textDecorationLine: 'underline',
  },
}));
