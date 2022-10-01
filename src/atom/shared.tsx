import {atom} from 'recoil';
import {lightTheme} from '../theme';

import {shuffle} from '../utils/shuffle';

export const isStartedState = atom({
  key: `isStartedState:${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const puzzleSetState = atom({
  key: `puzzleSetState:${Math.random()}`,
  default: shuffle(),
});

export const themeState = atom({
  key: `themeState${Math.random()}`,
  default: lightTheme,
});

export const stopwatchPropsState = atom({
  key: `stopwatchPropsState${Math.random()}`,
  default: {start: true, stop: false, reset: false, record: '00:00:00:000'},
});

export const selectedPatternState = atom({
  key: `selectedPatternState${Math.random()}`,
  default: 'A',
});
