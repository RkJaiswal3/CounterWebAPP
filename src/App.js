import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
import React, { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  const [hoveredBtn, setHoveredBtn] = useState(null)
  const buttonStyle = (color) => ({
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: color,
    cursor: 'pointer',
    transform: hoveredBtn === color ? 'scale(1.05)' : 'scale(1)',
    transition: 'all 0.2s ease-in-out',
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter is {count} </h1>
        <button onMouseEnter={() => setHoveredBtn('blue')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={buttonStyle('blue')} onClick={() => dispatch(increment())}  >Increment</button>
        <button onMouseEnter={() => setHoveredBtn('blue')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={buttonStyle('blue')} onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div >
  );
}

export default App;
