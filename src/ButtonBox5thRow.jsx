import CalcButton from "./CalcButton"

const ButtonBox5thRow = (props) => {
    return(
        <>
            <CalcButton value={'1'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'2'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'3'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'+'} setExpression={props.update} currentExpression={props.currentExpression} />
        </>
    )
}

export default ButtonBox5thRow