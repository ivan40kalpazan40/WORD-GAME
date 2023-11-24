import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <>
      <h1>TEST</h1>
    </>
  );
}

export default App;
