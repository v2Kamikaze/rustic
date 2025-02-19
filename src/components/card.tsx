import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export type CardProps = ViewProps & ViewStyle;

export const Card: React.FC<CardProps> = ({style, children, ...props}) => {
  const {styles} = useStyles(stylesheet);

  return <View style={[styles.card, props, style]}>{children}</View>;
};

const stylesheet = createStyleSheet(theme => ({
  card: {
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,

    shadowColor: theme.colors.border,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
}));
