import React from 'react';
import {Box, Button, Typography} from '../../../components';
import {useAppTheme} from '../../../hooks';

type ExerciseSectionHeaderProps = {
  day: string;
};

export const ExerciseSectionHeader: React.FC<ExerciseSectionHeaderProps> = ({
  day,
}) => {
  const {theme} = useAppTheme();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      padding={theme.spacings.lg}
      backgroundColor={theme.colors.secondary}>
      <Typography variant="subtitle">{day}</Typography>

      <Button icon="Plus" variant="ghost" />
    </Box>
  );
};
