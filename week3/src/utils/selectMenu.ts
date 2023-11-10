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

export const convertStringToName: { [key: string]: string } = {
  KRX: '비빔밥',
  KRO: '국밥',
  KNX: '비빔냉면',
  KNO: '칼국수',
  KMX: '삼겹살',
  KMO: '꽃게탕',
  JRX: '텐동',
  JRO: '명란오차즈케',
  JNX: '마제소바',
  JNO: '라멘',
  JMX: '돈카츠',
  JMO: '모츠나베',
  CRX: '새우볶음밥',
  CRO: '해물누룽지탕',
  CNX: '짜장면',
  CNO: '짬뽕',
  CMX: '깐풍기',
  CMO: '마라탕',
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
      finalString += ['K', 'J', 'C'][Math.floor(Math.random() * 3)];
      finalString += ['R', 'N', 'M'][Math.floor(Math.random() * 3)];
      finalString += ['O', 'X'][Math.floor(Math.random() * 2)];
      return finalString;
    default:
      return finalString;
  }
};
