import {atom} from 'recoil';
import {lightTheme} from '../theme';

import {shuffle} from '../utils/shuffle';

export const isStartedState = atom({
  key: `isStartedState`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const puzzleSetState = atom({
  key: `puzzleSetState`,
  default: shuffle(),
});

export const themeState = atom({
  key: `themeState`,
  default: lightTheme,
});

export const stopwatchPropsState = atom({
  key: `stopwatchPropsState`,
  default: {start: true, stop: false, reset: false, record: '00:00:00:000'},
});

export const selectedPatternState = atom({
  key: `selectedPatternState`,
  default: 'A',
});

export const enrollModalVisibleState = atom({
  key: `enrollModalVisibleState`,
  default: false,
});

export const usernameState = atom({
  key: `username`,
  default: '',
});
