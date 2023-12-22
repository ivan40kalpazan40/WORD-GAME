import HelpIcon from '../icons/HelpIcon';
import LeaderBoard from '../icons/LeaderBoard';
import Settings from '../icons/Settings';
import IconsNav from './IconsNav';
import Subscribe from './Subscribe';

const RightNav = () => {
  return (
    <div className='flex justify-between w-1/3 items-center'>
      <IconsNav />
      <Subscribe />
    </div>
  );
};

export default RightNav;
