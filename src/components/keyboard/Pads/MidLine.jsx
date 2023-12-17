import { unifyString } from '../../../utils/helpers';
const MidLine = () => {
  const line = 'asdfghjkl'.split('');
  return (
    <div className='flex gap-1'>
      {line.map((char) => (
        <div className='bg-slate-200 p-3 w-10 flex justify-center font-medium'>
          {unifyString(char, 'display')}
        </div>
      ))}
    </div>
  );
};

export default MidLine;
