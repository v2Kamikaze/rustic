import React from 'react';
import {ScreenContainer, Typography} from '../components';
import {FlatList} from 'react-native';

const daysOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const HomeScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <Typography variant="title">Home</Typography>

      <FlatList
        data={daysOfWeek}
        renderItem={({item}) => <Typography>{item}</Typography>}
      />
    </ScreenContainer>
  );
};
