import { unifyString } from '../../../utils/helpers';
const MidLine = ({ pad }) => {
  const line = 'asdfghjkl'.split('');
  let className =
    'rounded-md bg-wordle-lightgrey text-xl p-3 h-14 w-10 flex items-center justify-center font-medium cursor-pointer btn';
  return (
    <div className='flex gap-1'>
      {line.map((char, i) => {
        const status = pad.get(char);
        switch(status){
          case 'free':
            break;
            case 'visited':
              className = className.replace(
                'bg-wordle-lightgrey',
                'bg-wordle-grey text-white'
              );
              break;
            case 'close-guess':
              className = className.replace(
                'bg-wordle-lightgrey',
                'bg-wordle-gold text-white'
              );
              break;
            case 'guessed':
              className = className.replace(
                /bg-wordle-lightgrey|bg-wordle-gold/,
                'bg-wordle-green text-white'
              );
              break;
        }
        return (
          <div key={i} id={`btn-${char}`} className={className}>
            {unifyString(char, 'display')}
          </div>
        );
      })}
    </div>
  );
};

export default MidLine;
