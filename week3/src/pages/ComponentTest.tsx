import SelectBtn from '../components/common/SelectBtn';
import StepBtn from '../components/common/StepBtn';

const ComponentTest = () => {
  return (
    <div>
      <SelectBtn>selectBtn default</SelectBtn>
      <SelectBtn type={'selected'}>selectBtn selected</SelectBtn>
      <StepBtn>stepBtn default</StepBtn>
      <StepBtn type={'disabled'}>stepBtn disabled</StepBtn>
    </div>
  );
};

export default ComponentTest;
