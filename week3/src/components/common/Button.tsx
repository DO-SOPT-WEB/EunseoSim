import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, type, onClick }: ButtonProps) {
  return (
    <ButtonWrapper $type={type} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;

const buttonDefaultStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30rem;

  font-family: 'DOSPilgiMedium';
  font-size: 4rem;

  cursor: pointer;

  border: 0.5rem solid ${({ theme }) => theme.colors.black};
  border-radius: 5rem;
`;

const buttonStateStyle = {
  primaryActive: css`
    ${buttonDefaultStyle};
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
  `,
  primaryDisabled: css`
    ${buttonDefaultStyle};
    background-color: ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.grayLight};
  `,
};

const ButtonWrapper = styled.button<{ $type: string }>`
  ${({ $type }) => {
    switch ($type) {
      case 'primaryActive':
        return buttonStateStyle.primaryActive;
      case 'primaryDisabled':
        return buttonStateStyle.primaryDisabled;
    }
  }}
`;
