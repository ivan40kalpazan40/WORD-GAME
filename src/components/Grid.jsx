import Row from './Row';

const Grid = ({ word, grid, guessWord, currentRow }) => {
  return (
    <div className='flex flex-col mt-6 gap-1'>
      {grid.map((line, i) => {
        return (
          <Row
            line={currentRow === i ? guessWord : line ?? ''}
            key={i}
            word={word}
            visited={i < currentRow}
          />
        );
      })}
    </div>
  );
};

export default Grid;
