export type Weekday =
  | 'Domingo'
  | 'Segunda-feira'
  | 'Terça-feira'
  | 'Quarta-feira'
  | 'Quinta-feira'
  | 'Sexta-feira'
  | 'Sábado';

export type ExerciseSet = {
  repetitions: number;
  weight: number;
};

export type Exercise = {
  date: string;
  name: string;
  sets: ExerciseSet[];
};

export type WorkoutDay = Exercise[];

export type WorkoutPlan = {
  week: Record<Weekday, WorkoutDay>;
};

const getSequentialDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString().split('T')[0];
};

export const mockWorkoutPlan: WorkoutPlan = {
  week: {
    Domingo: [
      {
        name: 'Corrida',
        sets: [{repetitions: 1, weight: 0}],
        date: getSequentialDate(0),
      },
    ],
    'Segunda-feira': [
      {
        name: 'Supino reto',
        sets: [
          {repetitions: 12, weight: 50},
          {repetitions: 10, weight: 55},
          {repetitions: 8, weight: 60},
        ],
        date: getSequentialDate(1),
      },
      {
        name: 'Rosca direta',
        sets: [
          {repetitions: 12, weight: 15},
          {repetitions: 10, weight: 17},
          {repetitions: 8, weight: 20},
        ],
        date: getSequentialDate(1),
      },
    ],
    'Terça-feira': [
      {
        name: 'Agachamento',
        sets: [
          {repetitions: 12, weight: 60},
          {repetitions: 10, weight: 70},
          {repetitions: 8, weight: 80},
        ],
        date: getSequentialDate(2),
      },
      {
        name: 'Leg Press',
        sets: [
          {repetitions: 12, weight: 100},
          {repetitions: 10, weight: 120},
          {repetitions: 8, weight: 140},
        ],
        date: getSequentialDate(2),
      },
    ],
    'Quarta-feira': [
      {
        name: 'Desenvolvimento de ombro',
        sets: [
          {repetitions: 12, weight: 20},
          {repetitions: 10, weight: 25},
          {repetitions: 8, weight: 30},
        ],
        date: getSequentialDate(3),
      },
      {
        name: 'Elevação lateral',
        sets: [
          {repetitions: 12, weight: 10},
          {repetitions: 10, weight: 12},
          {repetitions: 8, weight: 15},
        ],
        date: getSequentialDate(3),
      },
    ],
    'Quinta-feira': [
      {
        name: 'Levantamento terra',
        sets: [
          {repetitions: 12, weight: 70},
          {repetitions: 10, weight: 80},
          {repetitions: 8, weight: 90},
        ],
        date: getSequentialDate(4),
      },
      {
        name: 'Remada curvada',
        sets: [
          {repetitions: 12, weight: 40},
          {repetitions: 10, weight: 45},
          {repetitions: 8, weight: 50},
        ],
        date: getSequentialDate(4),
      },
    ],
    'Sexta-feira': [
      {
        name: 'Cadeira extensora',
        sets: [
          {repetitions: 12, weight: 30},
          {repetitions: 10, weight: 35},
          {repetitions: 8, weight: 40},
        ],
        date: getSequentialDate(5),
      },
      {
        name: 'Flexora deitado',
        sets: [
          {repetitions: 12, weight: 25},
          {repetitions: 10, weight: 30},
          {repetitions: 8, weight: 35},
        ],
        date: getSequentialDate(5),
      },
    ],
    Sábado: [
      {
        name: 'Abdominal',
        sets: [
          {repetitions: 20, weight: 0},
          {repetitions: 20, weight: 0},
          {repetitions: 20, weight: 0},
        ],
        date: getSequentialDate(6),
      },
      {
        name: 'Prancha',
        sets: [{repetitions: 1, weight: 0}],
        date: getSequentialDate(6),
      },
    ],
  },
};
