import React, { useState } from 'react';
import './App.css';

// Here I created the Arrays for the given colors.
// Not proud of this way doing it. BUT your explanation
// of the steps in the variables helped me a lot
// to understand all the concatenations better - thank you Karl!!!

const numbersRed = [
  '#ff0000',
  '#ff1919',
  '#ff3232',
  '#ff4c4c',
  '#ff6666',
  '#ff7f7f',
  '#ff9999',
  '#ffb2b2',
  '#ffcccc',
  '#ffe5e5',
  '#e50000',
  '#cc0000',
  '#b20000',
  '#990000',
  '#7f0000',
  '#660000',
  '#4c0000',
  '#330000',
];

const numbersGreen = [
  '#008000',
  '#007300',
  '#006600',
  '#005900',
  '#004c00',
  '#004000',
  '#003300',
  '#002600',
  '#198c19',
  '#329932',
  '#4ca64c',
  '#66b266',
  '#7fbf7f',
  '#99cc99',
  '#b2d8b2',
  '#cce5cc',
  '#e5f2e5',
];

const numbersBlue = [
  '#0000ff',
  '#0000e5',
  '#0000cc',
  '#0000b2',
  '#000099',
  '#00007f',
  '#000066',
  '#00004c',
  '#000033',
  '#0000e5',
  '#0000cc',
  '#0000b2',
  '#000099',
  '#00007f',
  '#000066',
  '#00004c',
  '#000033',
];

// Here I created the random color without any specifications.
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const RandomBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setBackgroundColor(randomColor);
  };

  //Here I tried to randomize the given colors.
  const randomRed = Math.floor(Math.random() * numbersRed.length);
  const randomGreen = Math.floor(Math.random() * numbersGreen.length);
  const randomBlue = Math.floor(Math.random() * numbersBlue.length);

  const setRandomRedBackgroundColor = () => {
    const selectedRed = numbersRed[randomRed];
    setBackgroundColor(selectedRed);
  };

  const setRandomGreenBackgroundColor = () => {
    const selectedGreen = numbersGreen[randomGreen];
    setBackgroundColor(selectedGreen);
  };

  const setRandomBlueBackgroundColor = () => {
    const selectedBlue = numbersBlue[randomBlue];
    setBackgroundColor(selectedBlue);
  };

  //Here is the output for the background of all "random-colors".
  return (
    <div
      className="App"
      style={{
        backgroundColor: `${backgroundColor}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 1.5,
      }}

      // Here I created the buttons.
    >
      <h1>{backgroundColor}</h1>
      <button onClick={RandomBackgroundColor}>Randomize</button>
      <button onClick={() => navigator.clipboard.writeText(backgroundColor)}>
        Copy Color
      </button>
      <br></br>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={setRandomRedBackgroundColor}
      >
        RandomRed
      </button>

      <button
        style={{ backgroundColor: 'green' }}
        onClick={setRandomGreenBackgroundColor}
      >
        RandomGreen
      </button>

      <button
        style={{ backgroundColor: 'blue' }}
        onClick={setRandomBlueBackgroundColor}
      >
        RandomBlue
      </button>
    </div>
  );
};

export default App;
