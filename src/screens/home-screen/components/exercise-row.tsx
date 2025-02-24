import React from 'react';
import {Box, Typography} from '../../../components';
import {useAppTheme} from '../../../hooks';
import {Exercise} from '../../../models';

type ExerciseRowProps = {
  exercise: Exercise;
};

export const ExerciseRow: React.FC<ExerciseRowProps> = ({exercise}) => {
  const {theme} = useAppTheme();

  return (
    <Box
      flexDirection="column"
      borderBottomWidth={1}
      borderBottomColor={theme.colors.border}
      paddingVertical={theme.spacings.md}
      paddingHorizontal={theme.spacings.lg}>
      <Box flexDirection="row" alignItems="center" gap={theme.spacings.xl}>
        <Typography variant="subtitle" fontSize={16}>
          {exercise.name}
        </Typography>
        <Typography variant="label">{exercise.date}</Typography>
      </Box>

      {exercise.sets.map((set, idx) => (
        <Box key={idx} paddingVertical={8} paddingLeft={32}>
          <Box flexDirection="row" alignItems="center" gap={theme.spacings.xl}>
            <Typography variant="label">
              Repeticoes: {set.repetitions}
            </Typography>
            <Typography variant="label" fontWeight="medium">
              Carga: {set.weight}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
