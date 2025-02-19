import {useStyles} from 'react-native-unistyles';

export function useAppTheme() {
  return {theme: useStyles().theme};
}
