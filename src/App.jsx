import { useState } from 'react';
import './App.css';

function App() {
  // 1. Initialize state with a default value of 0
  const [count, setCount] = useState(0);

  // 2. Define helper functions to change the state
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      {/* This style block is included here for simplicity so the code works 
        immediately. In a larger app, you would move this to App.css 
      */}
      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background-color: #242424;
          color: white;
        }
        .card {
          background-color: #3a3a3a;
          padding: 2rem 4rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        h1 { margin-top: 0; font-size: 1.5rem; color: #aaa; }
        .count-display {
          font-size: 6rem;
          font-weight: bold;
          margin: 1rem 0;
          font-variant-numeric: tabular-nums; /* Prevents jitter when numbers change */
        }
        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        button {
          padding: 0.8rem 1.6rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.1s, opacity 0.2s;
          font-weight: bold;
        }
        button:active { transform: scale(0.95); }
        button:hover { opacity: 0.9; }
        
        /* Button specific colors */
        .btn-inc { background-color: #646cff; color: white; }
        .btn-dec { background-color: #ff6b6b; color: white; }
        .btn-reset { background-color: #4a4a4a; color: #ccc; }
      `}</style>

      <div className="card">
        <h1>Counter App</h1>
        
        <div className="count-display">
          {count}
        </div>

        <div className="button-group">
          <button className="btn-dec" onClick={decrement}>
            - Minus
          </button>
          
          <button className="btn-reset" onClick={reset}>
            Reset
          </button>
          
          <button className="btn-inc" onClick={increment}>
            Plus +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;