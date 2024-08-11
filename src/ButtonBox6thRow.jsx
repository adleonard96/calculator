import CalcButton from "./CalcButton"

const ButtonBox6thRow = (props) => {
    return(
        <>
            <CalcButton value={'+/-'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'0'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'.'} setExpression={props.update} currentExpression={props.currentExpression} />
            <CalcButton value={'='} setExpression={props.update} currentExpression={props.currentExpression} />
        </>
    )
}

export default ButtonBox6thRow