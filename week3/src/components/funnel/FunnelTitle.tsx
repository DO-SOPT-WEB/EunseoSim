import styled from 'styled-components';

interface FunnelTitleProps {
  step: number;
}

const FunnelTitle = ({ step }: FunnelTitleProps) => {
  return (
    <FunnelTitleWrapper>
      {step === 0
        ? '어떻게 추천해줄까?'
        : step === 1
        ? '먼저 나라 별로 골라볼까?'
        : step === 2
        ? '재료는 어떤게 좋아?'
        : step === 3
        ? '국물 있는거, 없는거?'
        : '넌 오늘 이걸 먹어라'}
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
