import FunnelBody from './FunnelBody';
import FunnelTitle from './FunnelTitle';
import Header from '../Header';
import { inputState } from '../../types/states';
import styled from 'styled-components';
import { useState } from 'react';

const FunnelLayout = () => {
  const [step, setStep] = useState<number>(0);
  const [input, setInput] = useState<inputState>({
    recommendType: undefined,
    country: undefined,
    ingredients: undefined,
    broth: undefined,
  });

  return (
    <>
      <FunnelLayoutWrapper>
        <Header setStep={setStep} setInput={setInput} input={input} />
        <FunnelTitle step={step} input={input} />
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
  height: calc(100vh - 15rem);

  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5rem solid ${({ theme }) => theme.colors.black};
  border-top-right-radius: 5rem;
  border-top-left-radius: 5rem;

  position: absolute;
  top: 15rem;
`;
