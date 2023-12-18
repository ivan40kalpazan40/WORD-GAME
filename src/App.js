import { useEffect, useState, useRef } from 'react';
import { randomIndex as index, unifyString } from './utils/helpers';
import { kbd } from './utils/keyPad';
import Grid from './components/Grid';
import './App.css';
import KeyPad from './components/keyboard/KeyPad';

function App() {
  const effectRan = useRef(false);
  const [word, setWord] = useState('');
  const [guessWord, setGuessWord] = useState('');
  const [wordList, setWordList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [grid, setGrid] = useState(Array(6).fill(null));
  const [currentRow, setCurrentRow] = useState(0);
  const [pad, setPad] = useState(kbd);

  useEffect(() => {
    function keyPressHandler(event) {
      if (isGameOver) return;

      // keyCode is 8 when Backspace is pressed
      if (event.keyCode === 8) {
        setGuessWord((guess) => {
          const sliced = guess.slice(0, -1);
          return sliced;
        });
      }

      // keyCode is 13 when Enter is pressed
      if (event.keyCode === 13) {
        //  if guessWord length is == 5
        if (guessWord.length !== 5) return;
        // HERE:
        // check if guessWord is a valid word (it is one of the words in wordList state)
        const idx = wordList.findIndex((word) => word === guessWord);
        if (idx === -1) {
          console.log(`Not A Valid Word`);
          //  TODO: Throw error & handle it properly
          return;
        }
        // check if guessWord is equal to word - YOU WIN!!!
        if (guessWord === word) {
          // setGuessWord('You Win');
          const newGrid = [...grid];
          newGrid[currentRow] = guessWord;
          setGrid(newGrid);
          setCurrentRow((row) => (row += 1));
          setGuessWord('');
          setIsGameOver(true);
          console.log(`You Win!!!`);
        } else {
          const newGrid = [...grid];
          newGrid[currentRow] = guessWord;
          setGrid(newGrid);
          setGuessWord('');
          setCurrentRow((row) => (row += 1));
          if (currentRow === 5) setIsGameOver(true);
        }
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
  }, [guessWord, isGameOver, grid, currentRow]);

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

  useEffect(() => {
    function handleMouseClick(event) {
      if (isGameOver) return;
      const btn = event.target.closest('.btn');
      const back = event.target.closest('.back');
      const enter = event.target.closest('.enter');
      if (btn) {
        if (guessWord.length < 5) {
          setGuessWord((guess) =>
            guess.concat(unifyString(btn.innerHTML, 'store'))
          );
        }
      } else if (back) {
        setGuessWord((guess) => {
          const sliced = guess.slice(0, -1);
          return sliced;
        });
      } else if (enter) {
        //  if guessWord length is == 5
        if (guessWord.length !== 5) return;
        // HERE:
        // check if guessWord is a valid word (it is one of the words in wordList state)
        const idx = wordList.findIndex((word) => word === guessWord);
        if (idx === -1) {
          console.log(`Not A Valid Word`);
          //  TODO: Throw error & handle it properly
          return;
        }
        // check if guessWord is equal to word - YOU WIN!!!
        if (guessWord === word) {
          // setGuessWord('You Win');
          const newGrid = [...grid];
          newGrid[currentRow] = guessWord;
          setGrid(newGrid);
          setCurrentRow((row) => (row += 1));
          setGuessWord('');
          setIsGameOver(true);
          console.log(`You Win!!!`);
        } else {
          const newGrid = [...grid];
          newGrid[currentRow] = guessWord;
          setGrid(newGrid);
          setGuessWord('');
          setCurrentRow((row) => (row += 1));
          if (currentRow === 5) setIsGameOver(true);
        }
      }
    }
    document.addEventListener('mousedown', handleMouseClick);
    return () => document.removeEventListener('mousedown', handleMouseClick);
  }, [guessWord, isGameOver, grid, currentRow]);

  return (
    <div className='flex flex-col items-center content-center'>
      <h1 className='bg-slate-400 px-12 py-3 mt-10 text-rose-800 text-xl font-bold'>
        {unifyString(word, 'display')}
      </h1>
      <h2 className='bg-slate-400 px-12 py-3 mt-10 text-rose-800 text-xl font-bold'>
        |&gt;: {unifyString(guessWord, 'display')}
      </h2>

      <Grid
        word={word}
        grid={grid}
        guessWord={guessWord}
        currentRow={currentRow}
      />
      <KeyPad pad={pad} />
    </div>
  );
}

export default App;
