import React from 'react'
import './App.css'
import Stars from './Stars'
function App() {
  const name = 'Andrii'
  let now = String(new Date())
  return (
    <div className="App">
      <p>Hello {name}</p>
      <p>The current time is {now}</p>
      <p>Two plus two {2+2}</p>
      <Stars />
    </div>
  );
}

export default App;
