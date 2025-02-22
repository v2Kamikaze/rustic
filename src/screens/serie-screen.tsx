import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Card,
  ScreenContainer,
  TextField,
  Typography,
} from '../components';
import {Dumbbell, Repeat, Scale} from 'lucide-react-native';
import {SeriesFormData, seriesSchema} from '../schemas';

const daysOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const day = daysOfWeek[new Date().getDay()];

export const SerieScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SeriesFormData>({
    resolver: zodResolver(seriesSchema),
    defaultValues: {
      exerciseName: '',
      repetitions: '',
      weight: '',
    },
  });

  const onSubmit = (data: SeriesFormData) => {
    console.log('Série cadastrada:', data);
  };

  return (
    <ScreenContainer>
      <Typography variant="title" marginBottom={32}>
        Cadastrar série
      </Typography>

      <Card gap={24}>
        <Typography variant="subtitle">{day}</Typography>

        <Box gap={8}>
          <Typography variant="label">Nome do exercício</Typography>
          <Controller
            name="exerciseName"
            control={control}
            render={({field}) => (
              <TextField
                icon={Dumbbell}
                placeholder="Ex: Supino reto"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.exerciseName && (
            <Typography variant="error">
              * {errors.exerciseName.message}
            </Typography>
          )}
        </Box>

        <Box gap={8}>
          <Typography variant="label">Repetições</Typography>
          <Controller
            name="repetitions"
            control={control}
            render={({field}) => (
              <TextField
                icon={Repeat}
                placeholder="Ex: 12"
                keyboardType="numeric"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.repetitions && (
            <Typography variant="error">
              * {errors.repetitions.message}
            </Typography>
          )}
        </Box>

        <Box gap={8}>
          <Typography variant="label">Carga (kg)</Typography>
          <Controller
            name="weight"
            control={control}
            render={({field}) => (
              <TextField
                icon={Scale}
                placeholder="Ex: 40"
                keyboardType="numeric"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          {errors.weight && (
            <Typography variant="error">* {errors.weight.message} </Typography>
          )}
        </Box>

        <Button title="Adicionar Série" onPress={handleSubmit(onSubmit)} />
      </Card>
    </ScreenContainer>
  );
};
