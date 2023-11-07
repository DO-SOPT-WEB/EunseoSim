import styled from 'styled-components';

interface HeaderProps {
  step: number;
}

const Header = ({ step }: HeaderProps) => {
  return (
    <HeaderWrapper>
      {step === 0
        ? '원하는 추천 방식을 골라줘!'
        : step === 1
        ? '오늘은 어떤 종류가 먹고싶어?'
        : step === 2
        ? '그럼 이 중에는 뭐가 끌려?'
        : step === 3
        ? '마지막으로 골라줘!'
        : '오늘의 추천음식은 바로!!'}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Head1}
`;
