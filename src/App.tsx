import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');

  // input要素のイベント
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }


  // any など型を付けないとエラーになる
  // 「TS7006: Parameter 'event' implicitly has an 'any' type.」
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  };

  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.target);
  };

  const handleBtnDivUnionClick = (
    // ユニオンじゃなくても 親要素の HTMLElement でもよい
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    console.log('union')
    console.log(event);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
      {/* event にカーソルを充てると 「(parameter) event: React.MouseEvent<HTMLButtonElement, MouseEvent>」と型の情報をしてくれる */}
      <button onClick={(event)=>{}}>Click</button>

      <div onClick={handleDivClick}>Click</div>
      <button onClick={handleClick}>
        <span>Click</span>
      </button>

      {/* ユニオン */}
      <button onClick={handleBtnDivUnionClick}>Union Click</button>
      <div onClick={handleBtnDivUnionClick}>Union Click</div>
      
      {/* input要素 */}
      <input value={name} onChange={handleChange} />
      <input value={name} onChange={(event) => {}} />
      <div>name: {name}</div>

      {/* インライン記述による型推論 */}
      <textarea value={name} onChange={(event) => setName(event.target.value)} />
      <div>name: {name}</div>
    </div>
  );
}

export default App;
