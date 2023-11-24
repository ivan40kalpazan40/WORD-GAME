import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const effectRan = useRef(false);
  const [word, setWord] = useState('');

  useEffect(() => {
    if (effectRan.current === false) {
      fetch(process.env.REACT_APP_URL)
        .then((response) => response.json())
        .then((data) => {
          const pickedWord = data[646].word;
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
