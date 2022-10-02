import React, {useEffect} from 'react';
import {View, AppState, Appearance} from 'react-native';
import Home from './Home';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {isStartedState, themeState, usernameState} from '../atom/shared';
import GameContainer from './GameContainer';
import {darkTheme, lightTheme} from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppRoot = ({theme}: {theme: {[k: string]: string}}) => {
  const isStarted = useRecoilValue(isStartedState);

  const setTheme = useSetRecoilState(themeState);
  const updateTheme = () => {
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;
    setTheme(theme);
  };
  const setUsername = useSetRecoilState(usernameState);

  const checkUsername = async () => {
    try {
      const username = await AsyncStorage.getItem('username');
      if (username !== null) {
        setUsername(username);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const stateSubscription = AppState.addEventListener(
      'change',
      () => AppState.currentState === 'active' && updateTheme(),
    );

    checkUsername();

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
