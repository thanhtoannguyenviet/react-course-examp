import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
/*  Change state */
function CompA(){
    const [value,setValue] = useState(10)
    const changeValue = (inc) => {
        setValue(value+inc)
    }
    return (
        <div className="App">
            <h1>/*  Change state */</h1>
            Current Value: <h1>{value}</h1>
            <button onClick={()=>changeValue(1)}>+</button>
            <button onClick={()=>changeValue(-1)}>-</button>
        </div>
    );
}
/* Static State */
function CompC (){
       const [value,setValue] = useState(10)
        return (
            <>
                <h1>/* Static State */</h1>
                Current Value: <h1>{value}</h1>
                <button onClick={()=>setValue(value+1)}>+</button>
                <button onClick={()=>setValue(value-1)}>-</button>
            </>
        )
}
/*  Increment state */
function App() {
    // const valueState = useState(10)
    // const value = valueState[0];
    // const setValue = valueState[1]
    const [value,setValue] = useState(10)
    const incrementValue = () => {
        setValue(value+1)
    }
    const decrementValue = () => {
        setValue(value-1)
    }
  return (
    <div className="App">
        <h1>/*  Increment state */</h1>
        Current Value: <h1>{value}</h1>
        <button onClick={incrementValue}>+</button>
        <button onClick={decrementValue}>-</button>
        <CompA/>
        <CompC/>
    </div>
  );
}

export default App;
