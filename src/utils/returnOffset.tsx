export const returnOffset = (
  pattern: 'A' | 'B' | 'C' | string,
  type: 'prev' | 'current' | 'next',
  width: number,
) => {
  const index = pattern === 'A' ? 0 : pattern === 'B' ? 1 : 2;

  if (type === 'current') {
    const offset = width * 0.85 * index;
    return {x: offset, y: 0};
  } else if (type === 'prev') {
    if (index === 0) {
      return {x: 0, y: 0};
    } else {
      const offset = width * 0.85 * (index - 1);
      return {x: offset, y: 0};
    }
  } else if (type === 'next') {
    if (index === 2) {
      return {x: width * 0.85 * index, y: 0};
    } else {
      const offset = width * 0.85 * (index + 1);
      return {x: offset, y: 0};
    }
  } else {
    return {x: 0, y: 0};
  }
};
