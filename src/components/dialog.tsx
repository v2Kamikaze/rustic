import React from 'react';
import {ModalProps, Modal as RNModal} from 'react-native';
import {Box} from './box';
import {useAppTheme} from '../hooks';
import {Card} from './card';
import {Typography} from './typography';
import {Button, ButtonConfig} from './button';

export type AlertProps = ModalProps & {
  title: string;
  message?: string;
  actions: [ButtonConfig] | [ButtonConfig, ButtonConfig];
};

/**
 * `Alert` is a modal component that displays a title, a message, and one or two action buttons.
 * It is useful for confirmations, alerts, or user interactions requiring immediate attention.
 *
 * ## Usage
 * ```tsx
 * <Alert
 *   title="Título do Alert"
 *   message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae suscipit ipsum dolorem perspiciatis veniam dicta, facilis quod sequi quisquam delectus nisi dolores officiis sint harum, dolor, cum nam iste iusto."
 *   visible={openAlert}
 *   actions={[
 *     {
 *       title: 'Confirmar',
 *       variant: 'default',
 *       onPress: () => setOpenAlert(false),
 *       icon: MailCheck,
 *     },
 *     {
 *       title: 'Cancelar',
 *       variant: 'destructive',
 *       onPress: () => setOpenAlert(false),
 *       icon: Ban,
 *     },
 *   ]}
 * />
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  actions,
  title,
  message,
  ...rest
}) => {
  const {theme} = useAppTheme();

  return (
    <RNModal transparent animationType="slide" {...rest}>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding={theme.spacings.lg}
        backgroundColor="#000000CC">
        <Card alignSelf="stretch">
          <Box gap={16}>
            <Typography variant="subtitle">{title}</Typography>
            {message && <Typography variant="body">{message}</Typography>}

            <Box flexDirection="row" gap={16}>
              {actions.map((action, idx) => (
                <Button key={idx} flex={1} {...action} />
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </RNModal>
  );
};
