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
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  //Here I tried to randomize the given colors.
  const randomRed = Math.floor(Math.random() * numbersRed.length);
  const randomGreen = Math.floor(Math.random() * numbersGreen.length);
  const randomBlue = Math.floor(Math.random() * numbersBlue.length);

  const shuffeledRed = () => {
    const selectedRed = numbersRed[randomRed];
    setHex(selectedRed);
  };

  const shuffeledGreen = () => {
    const selectedGreen = numbersGreen[randomGreen];
    setHex(selectedGreen);
  };

  const shuffeledBlue = () => {
    const selectedBlue = numbersBlue[randomBlue];
    setHex(selectedBlue);
  };

  //Here is the output for the background of all "random-colors".
  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 1.5,
      }}

      // Here I created the buttons.
    >
      <h1>{hex}</h1>
      <button onClick={randomizedHex}>Randomize</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Copy Color
      </button>
      <br></br>
      <button style={{ backgroundColor: 'red' }} onClick={shuffeledRed}>
        RandomRed
      </button>

      <button style={{ backgroundColor: 'green' }} onClick={shuffeledGreen}>
        RandomGreen
      </button>

      <button style={{ backgroundColor: 'blue' }} onClick={shuffeledBlue}>
        RandomBlue
      </button>
    </div>
  );
};

// This was a attempt to create a luminosity button:

//return lighter (+lum) or darker (-lum) color as a hex string
// pass original hex string and luminosity factor, e.g. -0.1 = 10% darker

// function colorLuminance(hex, lum) {
//   // validate hex string
//   hex = String(hex).replace(/[^0-9a-f]/gi, '');
//   if (hex.length < 6) {
//     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
//   }
//   lum = lum || 0;

//   // convert to decimal and change luminosity
// const rgb = '#',
//     d,
//     b;
//   for (b = 0; b < 3; b++) {
//     d = parseInt(hex.substr(b * 2, 2), 16);
//     d = Math.round(Math.min(Math.max(0, d + d * lum), 255)).toString(16);
//     rgb += ('00' + d).substr(d.length);
//   }

//   return rgb;
//}

// const colorLum = 'randomColor',
//   lum = 0.05,
//   out = document.getElementById('out');

// const b, d, nc;

// for (const b = 0; b < 100; b++) {
//   const d = out.appendChild(document.createElement('div'));
//   nc = colorLuminance(color, b * lum);
//   d.style.backgroundColor = nc;
//   d.title = nc;
// }
export default App;
