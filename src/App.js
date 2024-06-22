import React from "react"
import './App.css';

export default function App() {
    const [count, setCount] = React.useState(0)
  
    function add() {
        setCount(prevCount => prevCount + 1)
    }

    
    const subtract = () => {
     // Add validation to prevent negative numbers
        if (count > 0) {
          setCount(count - 1);
        }
      };
     
    function reset() {
      setCount(0)
  }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
            <button className="counter--reset"  onClick={reset} >reset</button>      </div>
    )
}
