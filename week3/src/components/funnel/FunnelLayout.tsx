import { inputState, stepState } from '../../types/states';

import FunnelBody from './FunnelBody';
import FunnelTitle from './FunnelTitle';
import styled from 'styled-components';
import { useState } from 'react';

const FunnelLayout = () => {
  const [step, setStep] = useState<stepState>(0);
  const [input, setInput] = useState<inputState>({
    recommendType: undefined,
    country: undefined,
    ingredients: undefined,
    broth: undefined,
  });

  return (
    <>
      <FunnelLayoutWrapper>
        <FunnelTitle step={step} />
        <FunnelBody step={step} setStep={setStep} input={input} setInput={setInput} />
      </FunnelLayoutWrapper>
    </>
  );
};

export default FunnelLayout;

const FunnelLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5rem solid ${({ theme }) => theme.colors.black};
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;

  position: absolute;
  top: 15rem;
`;
