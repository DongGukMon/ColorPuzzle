/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from './src/theme';
import AppRoot from './src/screen/AppRoot';
import SplashScreen from 'react-native-splash-screen';
import CodePush from 'react-native-code-push';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <AppRoot theme={theme} />
      </RecoilRoot>
    </ThemeProvider>
  );
};

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  // updateDialog: {
  //   title: '...',
  //   optionalUpdateMessage: '...',
  //   optionalInstallButtonLabel: '업데이트',
  //   optionalIgnoreButtonLabel: '아니요',
  // },
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default CodePush(codePushOptions)(App);
