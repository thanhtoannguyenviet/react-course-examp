import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
/*  Change state */
function CompA(allProps){

    return (
        <div className="App">
            <h1>Comp1</h1>
            List props:
            <p>My Props1 : {allProps.myProp1}</p>
            <p>My Props2 : {allProps.myProp2}</p>
            <p>My Props3 : {allProps.myProp3.toString()}</p>
            <p>My Props4 : {<allProps.myProp4/>}</p>
        </div>
    );
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
        <button onClick={setValue(value+1)}>+</button>
        <button onClick={value-1}>-</button>
        <CompA myProp1={value}
               myProp2="My String Value"
               myProp3={true}
               myProp4={()=> <div> My New JSX</div>}
        />
    </div>
  );
}

export default App;
