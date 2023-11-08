import { recommendTypeState, stepState } from '../../types/states';

interface FunnelBodyProps {
  step: stepState;
  recommendType: recommendTypeState;
  setRecommendType: React.Dispatch<React.SetStateAction<recommendTypeState>>;
}

const FunnelBody = ({ step, recommendType, setRecommendType }: FunnelBodyProps) => {
  return (
    <>
      {
        {
          0: <>0</>,
          1: <>1</>,
          2: <>2</>,
          3: <>3</>,
          4: <>4</>,
        }[step]
      }
    </>
  );
};

export default FunnelBody;
