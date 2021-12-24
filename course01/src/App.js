import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

class CompC extends React.Component{
    constructor() {
        super();
        this.state = {
            myValue:50
        }
    }
    changeState(inc){
        this.setState({
            myValue: inc
        })
    }
    render() {
        const { myValue } = this.state;
        const { myProp1 } = this.props;
        return (
            <>
                <h1>Hello CompC</h1>
                Current Value: <h1>{ myValue }</h1>
                <button onClick={() => this.changeState(myValue+1)}>+</button>
                <button onClick={() => this.changeState(myValue-1)}>-</button>
                <h2>{myProp1}</h2>
            </>
        )
    }
}
function App() {
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
            <CompC myProp1={value}/>
        </div>
    );
}

export default App;