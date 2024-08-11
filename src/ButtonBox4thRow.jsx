import CalcButton from "./CalcButton"

const ButtonBox4thRow = (props) => {
    return(
        <>
            <CalcButton value={'4'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'5'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'6'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'−'} setExpression={props.update} currentExpression={props.currentExpression}/>
        </>
    )
}

export default ButtonBox4thRow