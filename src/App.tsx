import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // any など型を付けないとエラーになる
  // 「TS7006: Parameter 'event' implicitly has an 'any' type.」
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  };

  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(event);
  };

  // event にカーソルを充てると 「(parameter) event: React.MouseEvent<HTMLButtonElement, MouseEvent>」と型の情報をしてくれる
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      <button onClick={(event)=>{}}>Click</button>
      <div onClick={handleDivClick}>Click</div>
      <button onClick={handleClick}>
        <span>Click</span>
      </button>
    </div>
  );
}

export default App;
