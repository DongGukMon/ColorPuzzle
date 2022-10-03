import {theme} from './constants';
export const darkTheme: {[k: string]: string} = {
  name: theme.dark,
  targetColor: 'PURPLE',

  first: '#292929',
  second: '#DF802F',
  third: '#D96662',
  fourth: '#018786',
  fifth: '#3700B3',

  'icon-first': '#3C3A37',
  'icon-second': '#D8731E',
  'icon-third': '#D85954',
  'icon-fourth': '#0F6F6E',
  'icon-fifth': '#5415E0',

  'iconname-first': 'american-football',
  'iconname-second': 'pricetag',
  'iconname-third': 'color-palette',
  'iconname-fourth': 'ice-cream',
  'iconname-fifth': 'rocket',

  text: 'white',
  main: '#1F2022',

  modalMain: '#018786',
  btnReverse: '#1F2022',

  placeholder: 'rgba(255, 255, 255, 0.7)',
};

export const lightTheme: {[k: string]: string} = {
  name: theme.light,
  targetColor: 'SKY BLUE',

  first: '#AAAAAA',
  second: '#F2C643',
  third: '#EE7A76',
  fourth: '#B8D75B',
  fifth: '#81C6EE',

  'icon-first': '#A09D94',
  'icon-second': '#F1BC1F',
  'icon-third': '#FF504A',
  'icon-fourth': '#BDED2E',
  'icon-fifth': '#45B8FB',

  'iconname-first': 'paw',
  'iconname-second': 'star',
  'iconname-third': 'bonfire',
  'iconname-fourth': 'leaf',
  'iconname-fifth': 'cloud',

  text: 'rgba(0,0,0,0.8)',
  main: 'white',

  modalMain: '#81C6EE',
  btnReverse: 'white',

  placeholder: 'rgba(0, 0, 0, 0.7)',
};
