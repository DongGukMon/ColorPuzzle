import React, {useEffect} from 'react';
import {View, AppState, Appearance} from 'react-native';
import Home from './Home';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {isStartedState, themeState} from '../atom/shared';
import GameContainer from './GameContainer';
import {darkTheme, lightTheme} from '../theme';

const AppRoot = ({theme}: {theme: {[k: string]: string}}) => {
  const isStarted = useRecoilValue(isStartedState);

  const setTheme = useSetRecoilState(themeState);
  const updateTheme = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;
    setTheme(theme);
  };

  useEffect(() => {
    const stateSubscription = AppState.addEventListener(
      'change',
      () => AppState.currentState === 'active' && updateTheme(),
    );
    return () => {
      stateSubscription.remove();
    };
  }, []);

  useEffect(() => {
    setTheme(theme);
  }, []);

  return (
    <View style={{flex: 1}}>{isStarted ? <GameContainer /> : <Home />}</View>
  );
};
export default AppRoot;
