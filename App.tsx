/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components/native';
import {darkTheme, lightTheme} from './src/theme';
import AppRoot from './src/screen/AppRoot';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <AppRoot />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
