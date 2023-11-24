import Row from './Row';

const Grid = ({ word }) => {
  return (
    <div className='flex flex-col mt-6 gap-1'>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Grid;
