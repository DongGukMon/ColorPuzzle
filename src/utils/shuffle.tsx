import {numberToName} from './numberToName';
import {isAllSame} from './isAllSame';

const getRandomNumber = () => {
  return Array.from({length: 5}).map(() => {
    return Math.floor(Math.random() * 5);
  });
};

export const shuffle = () => {
  const deck = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };
  let gameSet = getRandomNumber();
  while (isAllSame(gameSet)) {
    gameSet = getRandomNumber();
  }

  gameSet.map((item: number, index: number) => {
    const pageName = numberToName(index);

    deck[pageName as keyof typeof deck] = item;
  });

  return deck;
};
