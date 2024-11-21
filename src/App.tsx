import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // any など型を付けないとエラーになる
  // 「TS7006: Parameter 'event' implicitly has an 'any' type.」
  const handleClick = (event: any) => {
    console.log(event);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
