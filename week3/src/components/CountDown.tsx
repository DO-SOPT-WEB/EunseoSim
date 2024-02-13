import { useCallback, useEffect } from 'react';

import styled from 'styled-components';
interface CountDownType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountDown = ({ count, setCount }: CountDownType) => {
  const decrementCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  useEffect(() => {
    const timeoutId = setTimeout(decrementCount, 1000);

    return () => clearTimeout(timeoutId);
  }, [count, decrementCount]);

  return <CountDownWrapper>{count}</CountDownWrapper>;
};

export default CountDown;

const CountDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50rem;
  height: 40rem;

  ${({ theme }) => theme.fonts.Title1}

  animation: pulse 0.5s infinite ease-in-out alternate;

  @keyframes pulse {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1.2);
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
