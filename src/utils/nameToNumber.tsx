import {count} from '../constants'
const {first,second,third,fourth,fifth} = count
export const nameToNumber = (name: string) => {
    switch (name) {
      case first:
        return 0;
      case second:
        return 1;
      case third:
        return 2;
      case fourth:
        return 3;
      case fifth:
        return 4;
      default:
        return 4;
    }
  };
  