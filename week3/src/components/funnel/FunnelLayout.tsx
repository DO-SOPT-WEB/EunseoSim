import FunnelBody from './FunnelBody';
import FunnelTitle from './FunnelTitle';
import { recommendTypeState } from '../../types/states';
import { stepState } from '../../types/states';
import styled from 'styled-components';
import { useState } from 'react';

const FunnelLayout = () => {
  const [step, setStep] = useState<stepState>(0);
  const [recommendType, setRecommendType] = useState<recommendTypeState>(undefined);

  return (
    <>
      <FunnelLayoutWrapper>
        <FunnelTitle step={step} />
        <FunnelBody step={step} recommendType={recommendType} setRecommendType={setRecommendType}></FunnelBody>
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
