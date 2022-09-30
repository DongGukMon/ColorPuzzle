import React from 'react';
import {View} from 'react-native';
import Home from './Home';
import {useRecoilValue} from 'recoil';
import {isStartedState} from '../atom/shared';
import GameContainer from './GameContainer';

const AppRoot = () => {
  const isStarted = useRecoilValue(isStartedState);

  return (
    <View style={{flex: 1}}>{isStarted ? <GameContainer /> : <Home />}</View>
  );
};
export default AppRoot;
