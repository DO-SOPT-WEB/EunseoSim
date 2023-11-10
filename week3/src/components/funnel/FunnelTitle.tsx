import { inputState } from '../../types/states';
import styled from 'styled-components';

interface FunnelTitleProps {
  step: number;
  input: inputState;
}

const FunnelTitle = ({ step, input }: FunnelTitleProps) => {
  return (
    <FunnelTitleWrapper>
      <TitleWrapper>
        {step === 0
          ? '어떻게 추천해줄까?'
          : step === 1
          ? '먼저 나라 별로 골라볼까?'
          : step === 2
          ? '재료는 어떤게 좋아?'
          : step === 3
          ? '국물 있는거, 없는거?'
          : '넌 오늘 이걸 먹어라'}
      </TitleWrapper>
      <StepWrapper>{input.recommendType === '취향' && step > 0 && step < 4 && step + ' / 3'}</StepWrapper>
    </FunnelTitleWrapper>
  );
};

export default FunnelTitle;

const FunnelTitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Head1}
  border-radius: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 6rem;
  margin-top: 4rem;
`;

const StepWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.Body1}

  margin-top:2rem;
`;
