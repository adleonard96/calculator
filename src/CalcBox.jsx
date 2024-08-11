import CalcButton from "./CalcButton"
import TotalBar from "./TotalBar"
import ButtonBoxTopRow from "./ButtonBoxTopRow"
import ButtonBox2ndRow from "./ButtonBox2ndRow"
import ButtonBox3rdRow from "./ButtonRow3rdRow"
import ButtonBox4thRow from "./ButtonBox4thRow"
import ButtonBox5thRow from "./ButtonBox5thRow"
import ButtonBox6thRow from "./ButtonBox6thRow"
import { useState } from "react";

const CalcBox = () => {
    const [expression, setExpression ] = useState(`0`);
    return (
        <div style={{ width: '25%', backgroundColor: "black", margin: 3, padding: 5, borderRadius: '10px' }}>

            <div style={{margin: 0, padding: 1}}>
                <TotalBar expression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBoxTopRow update={setExpression} currentExpression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBox2ndRow update={setExpression} currentExpression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBox3rdRow update={setExpression} currentExpression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBox4thRow update={setExpression} currentExpression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBox5thRow update={setExpression} currentExpression={expression}/>
            </div>
            <div style={{margin: 0, padding: 1}}>
                <ButtonBox6thRow update={setExpression} currentExpression={expression}/>
            </div>
        </div>
    )
}

export default CalcBox;