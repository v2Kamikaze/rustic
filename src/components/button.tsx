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
import {LucideIcon} from 'lucide-react-native';

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
  icon?: LucideIcon;
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
  icon: Icon,
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
    link: theme.colors.primary,
  };

  return (
    <TouchableOpacity
      style={[buttonStyles.base, buttonStyles[variant], style, {...props}]}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator size={20} color={colorMap[variant]} />
      ) : (
        <>
          {Icon && <Icon size={20} color={colorMap[variant]} />}
          {title && <Text style={[textStyles[variant]]}>{title}</Text>}
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
  },
  default: {
    gap: theme.spacings.md,
    backgroundColor: theme.colors.primary,
  },
  destructive: {
    gap: theme.spacings.md,
    backgroundColor: theme.colors.destructive,
  },
  outline: {
    gap: theme.spacings.md,
    borderWidth: 1,
    borderColor: theme.colors.input,
    backgroundColor: theme.colors.background,
  },
  secondary: {
    gap: theme.spacings.md,
    backgroundColor: theme.colors.secondary,
  },
  ghost: {
    gap: theme.spacings.md,
    backgroundColor: 'transparent',
  },
  link: {
    padding: 0,
    gap: theme.spacings.md,
    backgroundColor: 'transparent',
  },
}));

const textStylesheet = createStyleSheet(theme => ({
  default: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.primaryForeground,
  },
  destructive: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.destructiveForeground,
  },
  outline: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.primary,
  },
  secondary: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.secondaryForeground,
  },
  ghost: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.primary,
  },
  link: {
    fontSize: 16,
    fontWeight: 'medium',
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
}));
