import { unifyString } from '../utils/helpers';
const Row = ({ line, word, visited }) => {
  const row = [];
  for (let i = 0; i < 5; i++) {
    let className =
      'flex border border-zinc-400 h-16 w-16 text-zinc-600 text-3xl font-bold items-center justify-center';
    let char = line[i];
    if (visited) {
      className = className.replace('text-zinc-600', 'text-white');
      if (line[i] === word[i]) {
        className += ' bg-wordle-green';
      } else if (word.includes(line[i])) {
        className += ' bg-wordle-gold';
      } else {
        className += ' bg-wordle-grey';
      }
    }
    row.push(
      <div className={className} key={i}>
        {char ? unifyString(char, 'display') : char}
      </div>
    );
  }
  return <div className='flex w-full gap-1'>{row}</div>;
};

export default Row;
