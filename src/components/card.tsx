import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export type CardProps = ViewProps &
  ViewStyle & {
    elevated?: boolean;
  };

/**
 * `Card` is a flexible container component with a styled border, background, and shadow effect.
 * It can be used to wrap other components, providing a visually distinct card-like appearance.
 *
 * ## Usage
 * ```tsx
 * <Card gap={16}>
 *   <Typography variant="title">Título do card</Typography>
 *
 *   <Typography variant="body">
 *     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores
 *     repellendus sequi, enim veniam quo, nisi ut quos quisquam sunt
 *     doloribus modi inventore quia. Rerum ipsa neque ex dolores eos.
 *   </Typography>
 *
 *   <Box flexDirection="row" width="100%" gap={8}>
 *     <TextField placeholder="Digite seu nome" />
 *     <Button title="Default" flex={1} />
 *   </Box>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({
  style,
  elevated,
  children,
  ...props
}) => {
  const {styles} = useStyles(stylesheet);

  return (
    <View style={[styles.card, elevated && styles.shadow, props, style]}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  card: {
    borderRadius: theme.radius.md,
    borderWidth: 1,
    padding: theme.spacings.md,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },

  shadow: {
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
