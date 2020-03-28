import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";

function App() {
  return (
    <div className="App">
      <h1>If you see this, it works!</h1>
  <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <p>{upper('just the fourth <p>-tag')}</p>
    </div>
  );
}

export default App;
