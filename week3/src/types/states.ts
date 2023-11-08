export type stepState = 0 | 1 | 2 | 3 | 4;
export interface inputState {
  recommendType?: '취향' | '랜덤';
  country?: '한식' | '일식' | '중식';
  ingredients?: '밥' | '면' | '고기/해물';
  broth?: boolean;
}
