import CalcButton from "./CalcButton"

const ButtonBoxTopRow = (props) => {
    return(
        <>
            <CalcButton value={'%'}  setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'CE'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'C'}  setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={"←"}  setExpression={props.update} currentExpression={props.currentExpression}/>
        </>
    )
}

export default ButtonBoxTopRow