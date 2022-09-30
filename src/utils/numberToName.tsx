import {count} from '../constants';
const {first, second, third, fourth, fifth} = count;
export const numberToName = (number: number) => {
  switch (number) {
    case 0:
      return first;
    case 1:
      return second;
    case 2:
      return third;
    case 3:
      return fourth;
    case 4:
      return fifth;
    default:
      return fifth;
  }
};
