import styled, { css } from 'styled-components';

interface StepBtnProps {
  children: React.ReactNode;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function StepBtn({ children, type, onClick }: StepBtnProps) {
  return (
    <StepBtnWrapper $type={type} onClick={onClick}>
      {children}
    </StepBtnWrapper>
  );
}

export default StepBtn;

const StepBtnDefaultStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 23rem;
  height: 7rem;

  ${({ theme }) => theme.fonts.Body1}

  cursor: pointer;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    border: 0.5rem solid ${({ theme }) => theme.colors.black};
  }
`;

const StepBtnStateStyle = {
  disabled: css`
    ${StepBtnDefaultStyle};
    background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.grayDark};
    border: none;

    pointer-events: none;
  `,
};

const StepBtnWrapper = styled.button<{ $type?: string }>`
  ${({ $type }) => {
    switch ($type) {
      case 'disabled':
        return StepBtnStateStyle.disabled;
      default:
        return StepBtnDefaultStyle;
    }
  }}
`;
