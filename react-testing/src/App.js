import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
const [count,setCount]=React.useState(0);

  return (
    <div data-test="component-app">
        Counter is {count}
        <button data-test="increment-button" onClick={()=>setCount(count+1)}>Increment Counter</button>
      </div>
  );
}

export default App;
