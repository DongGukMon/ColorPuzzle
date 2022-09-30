import {atom} from 'recoil';
import {shuffle} from '../utils/shuffle';

export const isStartedState = atom({
  key: `isStartedState:${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const puzzleSetState = atom({
  key: `puzzleSetState:${Math.random()}`,
  default: shuffle(),
});
