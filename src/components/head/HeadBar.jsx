import StackMenu from '../icons/StackMenu';
import RightNav from './RightNav';

const HeadBar = () => {
  return (
    <div className='w-full flex justify-between px-8 py-4 mb-2 items-center border-b border-wordle-lightgrey'>
      <StackMenu />
      <div className='logo text-2xl w-1/3 text-center'>Wordle</div>
      <RightNav />
    </div>
  );
};

export default HeadBar;
