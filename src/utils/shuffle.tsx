import {numberToName} from './numberToName';

const getRandomNumber = () => {
  return Array.from({length: 5}).map(() => {
    return Math.floor(Math.random() * 5);
  });
};

const isAllSame = (gameSet: number[]) => {
  const equals = gameSet.map((_: number, index: number) => {
    if (index === gameSet.length - 1) {
      return gameSet[0] === gameSet[index];
    } else {
      return gameSet[index] === gameSet[index + 1];
    }
  });
  return equals[0] && equals[1] && equals[2] && equals[3] && equals[4];
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
