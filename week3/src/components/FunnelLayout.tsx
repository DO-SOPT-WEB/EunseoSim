import Header from './common/Header';
import styled from 'styled-components';
import { useState } from 'react';

const FunnelLayout = () => {
  const [step, setStep] = useState(0);
  const [recommendType, setRecommendType] = useState('');

  return (
    <>
      <FunnelLayoutWrapper>
        <Header step={step} />
      </FunnelLayoutWrapper>
    </>
  );
};

export default FunnelLayout;

const FunnelLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
