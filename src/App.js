import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetch(process.env.REACT_APP_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
    return () => (effectRan.current = true);
  });

  return (
    <>
      <h1>TEST</h1>
    </>
  );
}

export default App;
