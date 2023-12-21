import { unifyString } from '../../../utils/helpers';

const BottomLine = () => {
  const line = 'zxcvbnm'.split('');
  return (
    <div className='flex gap-1 mx-1'>
      {line.map((char, i) => (
        <div
          key={i}
          id={`btn-${char}`}
          className='rounded-md bg-wordle-lightgrey text-xl p-3 h-14 w-10 flex items-center justify-center font-medium cursor-pointer btn'
        >
          {unifyString(char, 'display')}
        </div>
      ))}
    </div>
  );
};

export default BottomLine;
