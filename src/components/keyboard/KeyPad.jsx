import Backspace from './Pads/Backspace';
import BottomLine from './Pads/BottomLine';
import Enter from './Pads/Enter';
import MidLine from './Pads/MidLine';
import TopLine from './Pads/TopLine';

const KeyPad = ({ pad }) => {
  return (
    <div>
      <TopLine />
      <MidLine />
      <div>
        <Enter />
        <BottomLine />
        <Backspace />
      </div>
    </div>
  );
};

export default KeyPad;
