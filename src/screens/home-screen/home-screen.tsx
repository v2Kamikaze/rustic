import React from 'react';
import {Box, ScreenContainer, TextField, Typography} from '../../components';
import {SectionList} from 'react-native';
import {mockWorkoutPlan, Weekday} from '../../models';
import {ExerciseSectionHeader} from './components/exercise-section-header';
import {ExerciseRow} from './components/exercise-row';

export const HomeScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const sections = React.useMemo(
    () =>
      Object.keys(mockWorkoutPlan.week).map(day => ({
        day: day,
        data: mockWorkoutPlan.week[day as Weekday],
      })),
    [],
  );

  return (
    <ScreenContainer paddingHorizontal={0}>
      <Box gap={16} padding={16} marginBottom={16}>
        <Typography variant="title">Home</Typography>
        <TextField
          icon="Search"
          placeholder="Buscar exercício..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </Box>

      <SectionList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({section: {day}}) => (
          <ExerciseSectionHeader day={day} />
        )}
        renderItem={({item: exercise}) => <ExerciseRow exercise={exercise} />}
      />
    </ScreenContainer>
  );
};
