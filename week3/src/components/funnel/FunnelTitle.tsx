import { stepState } from '../../types/states';
import styled from 'styled-components';

interface FunnelTitleProps {
  step: stepState;
}

const FunnelTitle = ({ step }: FunnelTitleProps) => {
  return (
    <FunnelTitleWrapper>
      {step === 0
        ? '원하는 추천 방식을 골라줘!'
        : step === 1
        ? '오늘은 어떤 종류가 먹고싶어?'
        : step === 2
        ? '그럼 이 중에는 뭐가 끌려?'
        : step === 3
        ? '마지막으로 골라줘!'
        : '오늘의 추천음식은 바로!!'}
    </FunnelTitleWrapper>
  );
};

export default FunnelTitle;

const FunnelTitleWrapper = styled.header`
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
