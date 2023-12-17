const BottomLine = () => {
  const line = 'zxcvbnm'.split('');
  return (
    <div className='flex gap-1 mx-1'>
      {line.map((char) => (
        <div className='bg-slate-200 p-3 w-10 flex justify-center'>{char}</div>
      ))}
    </div>
  );
};

export default BottomLine;
