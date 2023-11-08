import styled from 'styled-components';
import { useEffect } from 'react';
interface CountDownType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountDown = ({ count, setCount }: CountDownType) => {
  useEffect(() => {
    setTimeout(() => {
      count > 0 && setCount(count - 1);
    }, 1000);
  }, [count]);

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
