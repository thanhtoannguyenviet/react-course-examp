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
class CompC extends React.Component{
    constructor() {
        super();
        this.state = {
            myValue:10
        }
    }
    changeState(inc){
        this.setState({
            myValue: inc
        })
    }
    render() {
        const { myValue } = this.state;

        return (
            <>
                <h1>Hello CompC</h1>
                Current Value: <h1>{ myValue }</h1>
                <button onClick={() => this.changeState(myValue+1)}>+</button>
                <button onClick={() => this.changeState(myValue-1)}>-</button>
            </>
        )
    }
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
