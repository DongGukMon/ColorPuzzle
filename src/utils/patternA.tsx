import {increaseCounter} from './increaseCounter';
import {numberToName} from './numberToName';

interface puzzleSetType {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export const patternA = (puzzleSet: puzzleSetType, index: number) => {
  const puzzleValues = Object.values(puzzleSet);
  const puzzleLength = puzzleValues.length;
  const prevIndex = index === 0 ? puzzleLength - 1 : index - 1;
  const nextIndex = index === puzzleLength - 1 ? 0 : index + 1;

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
