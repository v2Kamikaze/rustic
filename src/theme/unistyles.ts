import {AppBreakpoints, appThemes, AppThemes, breakpoints} from './theme';
import {UnistylesRegistry} from 'react-native-unistyles';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addBreakpoints(breakpoints).addThemes(appThemes).addConfig({
  adaptiveThemes: true,
});
