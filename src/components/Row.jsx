import { unifyString } from '../utils/helpers';
const Row = ({ line }) => {
  const row = [];
  for (let i = 0; i < 5; i++) {
    let char = line[i];
    row.push(
      <div
        className='flex border border-zinc-400 h-16 w-16 text-zinc-600 text-3xl items-center justify-center'
        key={i}
      >
        {char ? unifyString(char, 'display') : char}
      </div>
    );
  }
  return <div className='flex w-full gap-1'>{row}</div>;
};

export default Row;
