import {increaseCounter} from './increaseCounter';
import {numberToName} from './numberToName';

export const patternA = (
  puzzleSet: number[],
  prevIndex: number,
  pageIndex: number,
  nextIndex: number,
) => {
  const prevPage = numberToName(prevIndex);
  const page = numberToName(pageIndex);
  const nextPage = numberToName(nextIndex);

  const puzzleLength = puzzleSet.length;

  const prevPageValue = increaseCounter(puzzleSet[prevIndex], puzzleLength);
  const pageValue = increaseCounter(puzzleSet[pageIndex], puzzleLength);
  const nextValue = increaseCounter(puzzleSet[nextIndex], puzzleLength);

  const newValues = {
    [prevPage]: prevPageValue,
    [page]: pageValue,
    [nextPage]: nextValue,
  };
  return newValues;
};
