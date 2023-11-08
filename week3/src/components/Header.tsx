import styled from 'styled-components';
const Header = () => {
  return <HeaderWrapper>🍚믄서가 골라주는 점심 메뉴🍚</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title1}

  display:flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20rem;
`;
