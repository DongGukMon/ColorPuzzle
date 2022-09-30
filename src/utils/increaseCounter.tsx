export const increaseCounter = (number: number, puzzleLength: number) => {
  if (number === puzzleLength - 1) {
    return 0;
  } else {
    return number + 1;
  }
};
