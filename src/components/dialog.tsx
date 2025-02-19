import React from 'react';
import {ModalProps, Modal as RNModal} from 'react-native';
import {Box} from './box';
import {useAppTheme} from '../hooks';
import {Card} from './card';
import {Typography} from './typography';
import {Button, ButtonVariant} from './button';

export type DialogAction = {
  variant?: ButtonVariant;
  title?: string;
  onPress?: () => void;
};

export type DialogProps = ModalProps & {
  title: string;
  message?: string;
  actions: DialogAction[];
};

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
        <Card padding={theme.spacings.md} alignSelf="stretch">
          <Box gap={16}>
            <Typography variant="dialogTitle">{title}</Typography>
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
