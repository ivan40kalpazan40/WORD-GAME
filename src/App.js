import { useEffect, useState, useRef } from 'react';
import { randomIndex as index, unifyString } from './utils/helpers';
import Grid from './components/Grid';
import './App.css';

function App() {
  const effectRan = useRef(false);
  const [word, setWord] = useState('');
  const [guessWord, setGuessWord] = useState('');
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    function keyPressHandler(event) {
      console.log(`EVENT::: `, event.keyCode);

      // keyCode is 8 when Backspace is pressed
      if (event.keyCode === 8) {
        setGuessWord((guess) => {
          const sliced = guess.slice(0, -1);
          return sliced;
        });
      }

      // keyCodes between 65 and 90
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(
          `Letter ${event.key} with keycode ${event.keyCode} is valid pick. Guess length = ${guessWord.length}`
        );
        if (guessWord.length < 5) {
          setGuessWord((guess) => guess.concat(event.key));
        }
      } else {
        console.log(`This is invalid key.`);
      }
    }
    document.addEventListener('keydown', keyPressHandler);
    return () => document.removeEventListener('keydown', keyPressHandler);
  }, [guessWord]);

  useEffect(() => {
    if (effectRan.current === false) {
      fetch(process.env.REACT_APP_URL)
        .then((response) => response.json())
        .then((data) => {
          const idx = index(data.length);
          setWordList((list) =>
            data.map((dataItem) => unifyString(dataItem.word, 'store'))
          );
          const pickedWord = unifyString(data[idx].word, 'store');
          setWord(pickedWord);
        });
    }
    return () => (effectRan.current = true);
  }, []);

  return (
    <div className='flex flex-col items-center content-center'>
      <h1 className='bg-slate-400 px-12 py-3 mt-10 text-rose-800 text-xl font-bold'>
        {unifyString(word, 'display')}
      </h1>
      <h2 className='bg-slate-400 px-12 py-3 mt-10 text-rose-800 text-xl font-bold'>
        |&gt;: {unifyString(guessWord, 'display')}
      </h2>

      <Grid word={word} />
    </div>
  );
}

export default App;
