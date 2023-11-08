import { inputState } from '../types/states';

const convertInputType: { [key: string]: string } = {
  한식: 'K',
  일식: 'J',
  중식: 'C',
  밥: 'R',
  면: 'N',
  '고기/해물': 'M',
  국물시러: 'X',
  국물조아: 'O',
};

export const selectMenu = (input: inputState) => {
  let finalString = '';
  switch (input.recommendType) {
    case '취향':
      if (input.country && input.ingredients && input.broth) {
        finalString += convertInputType[input.country];
        finalString += convertInputType[input.ingredients];
        finalString += convertInputType[input.broth];
        return finalString;
      }
      break;
    case '랜덤':
      finalString += ['K', 'J', 'C'][Math.floor(Math.random()) * 3];
      finalString += ['R', 'N', 'M'][Math.floor(Math.random()) * 3];
      finalString += ['O', 'X'][Math.floor(Math.random()) * 3];
      return finalString;
    default:
      return finalString;
  }
};
