import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type TypographyVariants = 'title' | 'body' | 'label' | 'dialogTitle';

export type TypographyProps = TextProps &
  TextStyle & {
    variant?: TypographyVariants;
  };

/**
 * `Typography` is a customizable text component that supports different typography variants (e.g., title, body, label).
 *
 * ## Usage
 * This component allows you to display text with different styles, such as titles, body text, or labels, by choosing the appropriate variant. The text styling is based on the app’s theme.
 *
 * ### Examples
 *
 * ```tsx
 * <Typography variant="title">This is a title</Typography>
 * <Typography variant="body">This is body text</Typography>
 * <Typography variant="label">This is a label</Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  style,
  ...props
}) => {
  const {styles} = useStyles(stylesheet);

  return <Text style={[styles[variant], {...props}, style]} {...props} />;
};

const stylesheet = createStyleSheet(theme => ({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  body: {
    fontSize: 16,
    color: theme.colors.mutedForeground,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  dialogTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
}));
