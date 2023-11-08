import { broth, country, ingredients, inputState, recommendType } from '../../types/states';

import CountDown from '../CountDown';
import SelectBtn from '../common/SelectBtn';
import StepBtn from '../common/StepBtn';
import { convertStringToName } from '../../utils/selectMenu';
import { selectMenu } from '../../utils/selectMenu';
import styled from 'styled-components';
import { useState } from 'react';

interface FunnelBodyProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  input: inputState;
  setInput: React.Dispatch<React.SetStateAction<inputState>>;
}

const FunnelBody = ({ step, setStep, input, setInput }: FunnelBodyProps) => {
  const [selectedMenu, setSelectedMenu] = useState<undefined | string>(undefined);
  const [count, setCount] = useState(3);

  const handleRecommendType = (recommendType?: recommendType) => {
    setInput((prev: inputState) => {
      return { ...prev, recommendType: recommendType };
    });
  };

  const handleCountry = (country?: country) => {
    setInput((prev: inputState) => {
      return { ...prev, country: country };
    });
  };

  const handleIngredients = (ingredients?: ingredients) => {
    setInput((prev: inputState) => {
      return { ...prev, ingredients: ingredients };
    });
  };

  const handleBroth = (broth?: broth) => {
    setInput((prev: inputState) => {
      return { ...prev, broth: broth };
    });
  };

  const handleStepBtn = (type: '시작하기' | '이전으로' | '다음으로' | '결과보기' | '다시하기') => {
    switch (type) {
      case '시작하기':
        setCount(3);
        input.recommendType === '취향' ? setStep(1) : (setSelectedMenu(selectMenu(input)), setStep(4));
        break;
      case '이전으로':
        setStep(step - 1);
        break;
      case '다음으로':
        setStep(step + 1);
        break;
      case '결과보기':
        setStep(4);
        setSelectedMenu(selectMenu(input));
        break;
      case '다시하기':
        setStep(0);
        setCount(3);
        setInput({
          recommendType: input.recommendType,
          country: undefined,
          ingredients: undefined,
          broth: undefined,
        });
        break;
    }
  };

  return (
    <>
      {
        {
          0: (
            <>
              <SelectBtnsWrapper>
                {input.recommendType === '취향' ? (
                  <SelectBtn type="selected" onClick={() => handleRecommendType('취향')}>
                    취향대로 추천
                  </SelectBtn>
                ) : input.recommendType === '랜덤' ? (
                  <SelectBtn type="selected" onClick={() => handleRecommendType('랜덤')}>
                    랜덤 추천
                  </SelectBtn>
                ) : (
                  <>
                    <SelectBtn onClick={() => handleRecommendType('취향')}>취향대로 추천</SelectBtn>
                    <SelectBtn onClick={() => handleRecommendType('랜덤')}>랜덤 추천</SelectBtn>
                  </>
                )}
              </SelectBtnsWrapper>
              {input.recommendType && (
                <StepBtnsWrapper>
                  <StepBtn onClick={() => handleStepBtn('시작하기')}>
                    {input.recommendType === '취향' ? '네 취향을 알려줘' : '돌려돌려 메뉴판'}
                  </StepBtn>
                </StepBtnsWrapper>
              )}
            </>
          ),
          1: (
            <>
              <SelectBtnsWrapper>
                <SelectBtn
                  onClick={() => handleCountry('한식')}
                  type={input.country === '한식' ? 'selected' : undefined}>
                  한식
                </SelectBtn>
                <SelectBtn
                  onClick={() => handleCountry('일식')}
                  type={input.country === '일식' ? 'selected' : undefined}>
                  일식
                </SelectBtn>
                <SelectBtn
                  onClick={() => handleCountry('중식')}
                  type={input.country === '중식' ? 'selected' : undefined}>
                  중식
                </SelectBtn>
              </SelectBtnsWrapper>
              <StepBtnsWrapper>
                <StepBtn onClick={() => handleStepBtn('이전으로')}>이전으로</StepBtn>
                <StepBtn onClick={() => handleStepBtn('다음으로')} type={input.country || 'disabled'}>
                  다음으로
                </StepBtn>
              </StepBtnsWrapper>
            </>
          ),
          2: (
            <>
              <SelectBtnsWrapper>
                <SelectBtn
                  onClick={() => handleIngredients('밥')}
                  type={input.ingredients === '밥' ? 'selected' : undefined}>
                  밥
                </SelectBtn>
                <SelectBtn
                  onClick={() => handleIngredients('면')}
                  type={input.ingredients === '면' ? 'selected' : undefined}>
                  면
                </SelectBtn>
                <SelectBtn
                  onClick={() => handleIngredients('고기/해물')}
                  type={input.ingredients === '고기/해물' ? 'selected' : undefined}>
                  고기/해물
                </SelectBtn>
              </SelectBtnsWrapper>
              <StepBtnsWrapper>
                <StepBtn onClick={() => handleStepBtn('이전으로')}>이전으로</StepBtn>
                <StepBtn onClick={() => handleStepBtn('다음으로')} type={input.ingredients || 'disabled'}>
                  다음으로
                </StepBtn>
              </StepBtnsWrapper>
            </>
          ),
          3: (
            <>
              <SelectBtnsWrapper>
                <SelectBtn
                  onClick={() => handleBroth('국물시러')}
                  type={input.broth === '국물시러' ? 'selected' : undefined}>
                  국물 시러
                </SelectBtn>
                <SelectBtn
                  onClick={() => handleBroth('국물조아')}
                  type={input.broth === '국물조아' ? 'selected' : undefined}>
                  국물 조아
                </SelectBtn>
              </SelectBtnsWrapper>
              <StepBtnsWrapper>
                <StepBtn onClick={() => handleStepBtn('이전으로')}>이전으로</StepBtn>
                <StepBtn
                  onClick={() => handleStepBtn('결과보기')}
                  type={input.broth === undefined ? 'disabled' : undefined}>
                  결과보기
                </StepBtn>
              </StepBtnsWrapper>
            </>
          ),
          4: (
            <>
              {count > 0 && input.recommendType === '랜덤' ? (
                <CountDown count={count} setCount={setCount} />
              ) : (
                selectedMenu && (
                  <ResultWrapper>
                    <ImgWrapper src={`src/assets/image/${selectedMenu}.jpeg`} alt={convertStringToName[selectedMenu]} />
                    <SelectedMenuWrapper>✱{convertStringToName[selectedMenu]}✱</SelectedMenuWrapper>
                    <StepBtn onClick={() => handleStepBtn('다시하기')}>다시하기</StepBtn>
                  </ResultWrapper>
                )
              )}
            </>
          ),
        }[step]
      }
    </>
  );
};

export default FunnelBody;

const SelectBtnsWrapper = styled.div`
  width: 100rem;

  display: flex;
  gap: 4rem;

  margin-top: 5rem;
`;

const StepBtnsWrapper = styled.div`
  width: 100rem;

  display: flex;
  justify-content: center;
  gap: 4rem;

  margin-top: 7rem;
`;

const ImgWrapper = styled.img`
  width: 30rem;
  height: 20rem;

  border-radius: 5rem;

  object-fit: cover;

  margin-top: 3rem;
`;

const SelectedMenuWrapper = styled.span`
  ${({ theme }) => theme.fonts.Head1}
  text-align:center;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
