import { useState } from 'react'
import './App.css'

function App() {
    const numbersButtons = [0,1,2,3,4,5,6,7,8,9];
    const operatorsButtons = ['+','-','*','/','='];

    const [calculationView, setCalculationView] = useState(null);

    const buttonsClickHandler = (action) => {
        console.log(action);
        setCalculationView(action);
    }

    return (
        <>
            <div>{calculationView}</div>
            <div className="flex">
                <div className="grid gap-4 grid-cols-3">
                    {numbersButtons.map(number=>{
                        return <button onClick={()=>{buttonsClickHandler(number)}} className="p-5 border border-indigo-600" key={number}>{number}</button>
                    })}
                </div>
                <div className="grid gap-4 grid-cols-1">
                    {operatorsButtons.map(operator=>{
                        return <button onClick={()=>{buttonsClickHandler(operator)}} className="p-5 border border-indigo-600" key={operator}>{operator}</button>
                    })}
                </div>
            </div>
        </>
    )
}

export default App
