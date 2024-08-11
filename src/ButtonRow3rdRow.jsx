import CalcButton from "./CalcButton"

const ButtonBox3rdRow = (props) => {
    return(
        <>
            <CalcButton value={'7'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'8'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'9'} setExpression={props.update} currentExpression={props.currentExpression}/>
            <CalcButton value={'⨯'} setExpression={props.update} currentExpression={props.currentExpression} />
        </>
    )
}

export default ButtonBox3rdRow