import {theme} from './constants';
export const darkTheme: {[k: string]: string} = {
  name: theme.dark,
  targetColor: 'PUPPLE',

  first: '#292929',
  second: '#DF802F',
  third: '#EE7A76',
  fourth: '#018786',
  fifth: '#3700B3',

  text: 'white',
  main: 'black',

  modalMain: '#018786',
  btnReverse: 'black',
};

export const lightTheme: {[k: string]: string} = {
  name: theme.light,
  targetColor: 'SKY BLUE',

  first: '#AAAAAA',
  second: '#F2C643',
  third: '#EE7A76',
  fourth: '#B8D75B',
  fifth: '#81C6EE',

  text: 'rgba(0,0,0,0.8)',
  main: 'white',

  modalMain: '#81C6EE',
  btnReverse: 'white',
};
