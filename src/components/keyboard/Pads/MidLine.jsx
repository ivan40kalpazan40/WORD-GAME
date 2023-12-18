import { unifyString } from '../../../utils/helpers';
const MidLine = () => {
  const line = 'asdfghjkl'.split('');
  return (
    <div className='flex gap-1'>
      {line.map((char, i) => (
        <div
          key={i}
          id={`btn-${char}`}
          className='bg-wordle-lightgrey p-3 w-10 flex justify-center font-medium cursor-pointer btn'
        >
          {unifyString(char, 'display')}
        </div>
      ))}
    </div>
  );
};

export default MidLine;
