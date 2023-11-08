import styled, { css } from 'styled-components';

interface SelectBtnProps {
  children: React.ReactNode;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SelectBtn({ children, type, onClick }: SelectBtnProps) {
  return (
    <SelectBtnWrapper $type={type} onClick={onClick}>
      {children}
    </SelectBtnWrapper>
  );
}

export default SelectBtn;

const SelectBtnDefaultStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20rem;

  ${({ theme }) => theme.fonts.Head1}

  cursor: pointer;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    border: 0.5rem solid ${({ theme }) => theme.colors.black};
  }
`;

const SelectBtnStateStyle = {
  selected: css`
    ${SelectBtnDefaultStyle};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0.5rem solid ${({ theme }) => theme.colors.black};
  `,
};

const SelectBtnWrapper = styled.button<{ $type?: string }>`
  ${({ $type }) => {
    switch ($type) {
      case 'selected':
        return SelectBtnStateStyle.selected;
      default:
        return SelectBtnDefaultStyle;
    }
  }}
`;
