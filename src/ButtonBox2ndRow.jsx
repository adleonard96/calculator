import CalcButton from "./CalcButton"

const ButtonBox2ndRow = (props) => {
    return(
        <>
            <CalcButton value={'1/X'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'x²'}  setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'√x'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'÷'} setExpression={props.update} currentExpression={props.currentExpression} />
        </>
    )
}

export default ButtonBox2ndRow