import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(5);

  function incrementCount() {
   setCount(prevCount => prevCount + 1) 
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div>
      <h1>React Hooks</h1>
      <button onClick={incrementCount}>Increment</button>
      <pre>
        <span>{count}</span>
      </pre>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
