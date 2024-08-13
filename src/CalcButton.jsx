let isDecimal = false;
let isEvalSymbolLast = false;

/**
 * 
 * @param {num} props 
 * @returns 
 */
const CalcButton = (props)=> {
    const updateExpression = (value, setExpression, currentExpression) => {
        if(currentExpression === '0'){
            console.log("cat")
            currentExpression = '';
        }
        switch(value){
            case 'C':
                isDecimal = false;
                setExpression('0');
                break;
            case 'CE':
                isDecimal = false;
                console.log("unimplemented");
                break;
            case '←':
                if(currentExpression[currentExpression.length - 1] === '.'){
                    isDecimal = false;
                }
                currentExpression = currentExpression.slice(0, currentExpression.length - 1)
                if (currentExpression.length < 1){
                    currentExpression = '0';
                }
                setExpression(currentExpression);
                break;
            case '=':
                isDecimal = false;
                setExpression(evaluate(currentExpression));
                break;
            case 'x²':
                isDecimal = false;
                setExpression(Math.pow(+evaluate(currentExpression), 2));
                break;
            case '1/X':
                isDecimal = false;
                currentExpression = +evaluate(currentExpression);
                if (currentExpression === 0){
                    setExpression(0)
                } else {
                    setExpression(1 / currentExpression)
                }
                break;
            default:
                if(isDecimal && value === '.'){
                    console.log(isDecimal)
                    break;
                }
                if(value === '.'){
                    isDecimal = true;
                }
                if(value === '+' || value === '÷' || value === '−' || value === '⨯'){
                    isEvalSymbolLast = true;
                    isDecimal = false;
                } else {
                    isEvalSymbolLast = false;
                }
                setExpression(currentExpression + value);
                break;
        }
    }
    return(
        <button style={{width: '25%', paddingLeft: 3, paddingRight: 3, height: '25px', borderRadius: "10px"}} onClick={(e)=> updateExpression(props.value, props.setExpression, props.currentExpression)}>{props.value}</button>
    )

    
}

/**
 * 
 * @param {string} expression 
 * @returns 
 */
function evaluate(expression){
    return eval(expression.replace('⨯', '*').replace('−', '-').replace('÷', '/'));
}

export default CalcButton