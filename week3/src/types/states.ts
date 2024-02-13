export interface inputState {
  recommendType?: recommendType;
  country?: country;
  ingredients?: ingredients;
  broth?: broth;
}

export type recommendType = '취향' | '랜덤';
export type country = '한식' | '일식' | '중식';
export type ingredients = '밥' | '면' | '고기/해물';
export type broth = '국물조아' | '국물시러';
