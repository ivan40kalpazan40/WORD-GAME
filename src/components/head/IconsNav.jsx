import HelpIcon from '../icons/HelpIcon';
import LeaderBoard from '../icons/LeaderBoard';
import Settings from '../icons/Settings';

const IconsNav = () => {
  return (
    <div className='flex gap-2 w-2/3 justify-end pr-4'>
      <HelpIcon />
      <LeaderBoard />
      <Settings />
    </div>
  );
};

export default IconsNav;
