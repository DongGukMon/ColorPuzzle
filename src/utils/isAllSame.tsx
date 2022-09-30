export const isAllSame = (gameSet: number[]) => {
  const equals = gameSet.map((_: number, index: number) => {
    if (index === gameSet.length - 1) {
      return gameSet[0] === gameSet[index];
    } else {
      return gameSet[index] === gameSet[index + 1];
    }
  });
  return equals[0] && equals[1] && equals[2] && equals[3] && equals[4];
};
