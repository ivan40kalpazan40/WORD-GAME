import { useEffect, useState, useRef } from 'react';
import { randomIndex as index } from './utils/helpers';
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
    <>
      <h1>{word}</h1>
    </>
  );
}

export default App;
