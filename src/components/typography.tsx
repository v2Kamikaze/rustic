import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type TypographyVariants = 'title' | 'body' | 'label';

export type TypographyProps = TextProps &
  TextStyle & {
    variant?: TypographyVariants;
  };

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
}));
