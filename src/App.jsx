import { useState } from 'react'
import './App.css'

function App() {
    const numbersButtons = [0,1,2,3,4,5,6,7,8,9];
    const operatorsButtons = ['+','-','*','/','='];

    return (
        <>
            <div>
                {numbersButtons.map(number=>{
                    return <button key={number}>{number}</button>
                })}
                {operatorsButtons.map(operator=>{
                    return <button key={operator}>{operator}</button>
                })}
            </div>
        </>
    )
}

export default App
