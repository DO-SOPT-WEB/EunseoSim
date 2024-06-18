import StepBtn from './common/StepBtn';
import { inputState } from '../types/states';
import styled from 'styled-components';

interface HeaderProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setInput: React.Dispatch<React.SetStateAction<inputState>>;
  input: inputState;
}

const Header = ({ setStep, setInput, input }: HeaderProps) => {
  const handleStepBtn = () => {
    setStep(0);
    setInput({
      recommendType: undefined,
      country: undefined,
      ingredients: undefined,
      broth: undefined,
    });
  };

  return (
    <>
      <HeaderWrapper>🍚믄서가 골라주는 점심 메뉴🍚</HeaderWrapper>
      {input.recommendType && (
        <StepBtnWrapper>
          <StepBtn onClick={handleStepBtn}>처음으로</StepBtn>
        </StepBtnWrapper>
      )}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Title1}

  display:flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 20rem;

  position: absolute;
  top: -16rem;
  z-index: -1;
`;

const StepBtnWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: -11.5rem;
`;
