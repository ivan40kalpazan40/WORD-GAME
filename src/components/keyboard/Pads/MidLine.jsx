import { unifyString } from '../../../utils/helpers';
const MidLine = () => {
  const line = 'asdfghjkl'.split('');
  return (
    <div className='flex gap-1'>
      {line.map((char, i) => (
        <div
          key={i}
          className='bg-slate-200 p-3 w-10 flex justify-center font-medium cursor-pointer'
        >
          {unifyString(char, 'display')}
        </div>
      ))}
    </div>
  );
};

export default MidLine;
