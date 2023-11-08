import { inputState, stepState } from '../../types/states';

import SelectBtn from '../common/SelectBtn';
import styled from 'styled-components';

interface FunnelBodyProps {
  step: stepState;
  setStep: React.Dispatch<React.SetStateAction<stepState>>;
  input: inputState;
  setInput: React.Dispatch<React.SetStateAction<inputState>>;
}

const FunnelBody = ({ step, setStep, input, setInput }: FunnelBodyProps) => {
  const handleRecommendType = (recommendType?: '취향' | '랜덤') => {
    setInput((prev: inputState) => {
      return { ...prev, recommendType: recommendType };
    });
  };

  return (
    <>
      {
        {
          0: (
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
          ),
          1: <>1</>,
          2: <>2</>,
          3: <>3</>,
          4: <>4</>,
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

  margin-top: 10rem;
`;
