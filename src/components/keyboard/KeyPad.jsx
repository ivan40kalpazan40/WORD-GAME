import Backspace from './Pads/Backspace';
import BottomLine from './Pads/BottomLine';
import Enter from './Pads/Enter';
import MidLine from './Pads/MidLine';
import TopLine from './Pads/TopLine';

const KeyPad = ({ pad }) => {
  return (
    <div className='flex flex-col mt-20 items-center gap-2'>
      <TopLine />
      <MidLine />
      <div className='flex'>
        <Enter />
        <BottomLine />
        <Backspace />
      </div>
    </div>
  );
};

export default KeyPad;
