import {increaseCounter} from './increaseCounter';
import {numberToName} from './numberToName';

interface puzzleSetType {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export const patternC = (puzzleSet: puzzleSetType, index: number) => {
  const puzzleValues = Object.values(puzzleSet);
  const puzzleLength = puzzleValues.length;
  const prevIndex = index <= 1 ? puzzleLength + index - 2 : index - 2;
  const nextIndex =
    index >= puzzleLength - 2 ? index - (puzzleLength - 2) : index + 2;

  const prevPage = numberToName(prevIndex);
  const page = numberToName(index);
  const nextPage = numberToName(nextIndex);

  const prevPageValue = increaseCounter(puzzleValues[prevIndex], puzzleLength);
  const pageValue = increaseCounter(puzzleValues[index], puzzleLength);
  const nextValue = increaseCounter(puzzleValues[nextIndex], puzzleLength);

  const newValues = {
    [prevPage]: prevPageValue,
    [page]: pageValue,
    [nextPage]: nextValue,
  };
  return newValues;
};
