import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
/*  Change state */

function App() {
    const [value,setValue] = useState(10)

    const [otherValue,setOtherValue] = useState(30)
    //useEffect là một trigger khi khởi tạo hoặc khi state bên trong dept thay đổi sẻ kích hoạt scripts trong effect. Nếu deps rỗng thì sẻ trigger mọi state
    useEffect(()=>{
        console.log("useEffect's called!")
    },[value])
  return (
    <div className="App">
        Current Value: <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
        <button onClick={()=>setValue(value-1)}>-</button>
        <hr/>
        Current Other Value: <h1>{otherValue}</h1>
        <button onClick={()=>setOtherValue(otherValue+1)}>+</button>
        <button onClick={()=>setOtherValue(otherValue-1)}>-</button>
        <CompA myProp1={value}
               myProp2="My String Value"
               myProp3={true}
               myProp4={()=> <div> My New JSX</div>}
        />
    </div>
  );
}

function CompA(allProps){
    useEffect(()=>{
        console.log("CompA useEffect!")
    },[allProps.myProp1])
    //Phức tạp hơn: useEffect ở component con có thể kích hoạt cả props,state từ lớp cha
    //Luôn luôn nên để deps
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

export default App;
