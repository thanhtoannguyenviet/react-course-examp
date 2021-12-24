import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
/*  Increment state */
function CompA(){
    const [value,setValue] = useState(10)
    const changeValue = (inc) => {
        setValue(value+inc)
    }
    return (
        <div className="App">
            Current Value: <h1>{value}</h1>
            <button onClick={()=>changeValue(1)}>+</button>

            <button onClick={()=>changeValue(-1)}>-</button>
            <CompA/>
            <CompC/>
        </div>
    );
}

class CompC extends React.Component{
    render() {
        return (
            <>
                <h1>CompC</h1>
                <p>Hello Comp C</p>
            </>
        )
    }
}
/*  Change state */
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
        Current Value: <h1>{value}</h1>
        <button onClick={incrementValue}>+</button>

        <button onClick={decrementValue}>-</button>
        <CompA/>
        <CompC/>
    </div>
  );
}

export default App;
