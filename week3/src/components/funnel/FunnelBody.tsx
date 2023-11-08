import { recommendTypeState, stepState } from '../../types/states';

interface FunnelBodyProps {
  step: stepState;
  recommendType: recommendTypeState;
}

const FunnelBody = ({ step, recommendType }: FunnelBodyProps) => {
  return <div>FunnelBody</div>;
};

export default FunnelBody;
