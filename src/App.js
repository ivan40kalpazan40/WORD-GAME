import { useEffect, useState, useRef } from 'react';
import { randomIndex as index } from './utils/helpers';
import Grid from './components/Grid';
import './App.css';

function App() {
  const effectRan = useRef(false);
  const [word, setWord] = useState('');

  useEffect(() => {
    if (effectRan.current === false) {
      fetch(process.env.REACT_APP_URL)
        .then((response) => response.json())
        .then((data) => {
          const idx = index(data.length);
          const pickedWord = data[idx].word;
          setWord(pickedWord);
        });
    }
    return () => (effectRan.current = true);
  }, []);

  return (
    <div className='flex flex-col items-center content-center'>
      <h1 className='bg-slate-400 px-12 py-3 mt-10 text-rose-800 text-xl font-bold'>{word}</h1>

      <Grid word={word} />
    </div>
  );
}

export default App;
