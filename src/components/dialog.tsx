import React from 'react';
import {ModalProps, Modal as RNModal} from 'react-native';
import {Box} from './box';
import {useAppTheme} from '../hooks';
import {Card} from './card';
import {Typography} from './typography';
import {Button, ButtonConfig} from './button';

export type DialogProps = ModalProps & {
  title: string;
  message?: string;
  actions: [ButtonConfig] | [ButtonConfig, ButtonConfig];
};

/**
 * `Dialog` is a modal component that displays a title, a message, and one or two action buttons.
 * It is useful for confirmations, alerts, or user interactions requiring immediate attention.
 *
 * ## Usage
 * ```tsx
 * <Dialog
 *   title="Título do dialog"
 *   message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae suscipit ipsum dolorem perspiciatis veniam dicta, facilis quod sequi quisquam delectus nisi dolores officiis sint harum, dolor, cum nam iste iusto."
 *   visible={openDialog}
 *   actions={[
 *     {
 *       title: 'Confirmar',
 *       variant: 'default',
 *       onPress: () => setOpenDialog(false),
 *       icon: MailCheck,
 *     },
 *     {
 *       title: 'Cancelar',
 *       variant: 'destructive',
 *       onPress: () => setOpenDialog(false),
 *       icon: Ban,
 *     },
 *   ]}
 * />
 * ```
 */
export const Dialog: React.FC<DialogProps> = ({
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
