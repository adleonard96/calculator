let isDecimal = false;
let isEvalSymbolLast = false;
let isNegative = false;
/**
 * 
 * @param {num} props 
 * @returns 
 */
const CalcButton = (props)=> {
    const updateExpression = (value, setExpression, currentExpression) => {
        if(currentExpression === '0' || currentExpression ==='ERR' || currentExpression === Infinity){
            currentExpression = '';
        }
        try {

            switch(value){
                case 'C':
                    resetNumberState();
                    setExpression('0');
                    break;
                case 'CE':
                    resetNumberState();
                    console.log("unimplemented");
                    break;
                case '←':
                    currentExpression = `${currentExpression}`;
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
                    resetNumberState();
                    setExpression(evaluate(currentExpression));
                    break;
                case 'x²':
                    resetNumberState();
                    setExpression(Math.pow(+evaluate(currentExpression), 2));
                    break;
                case '1/X':
                    resetNumberState();
                    currentExpression = +evaluate(currentExpression);
                    if (currentExpression === 0){
                        setExpression(0)
                    } else {
                        setExpression(1 / currentExpression)
                    }
                    break;
                case '√x':
                    resetNumberState();
                    setExpression(Math.sqrt(+evaluate(currentExpression)));
                    break;
                case '+/-':
                    setExpression(makeLastValueNegative(currentExpression));
                    break;
                default:
                    if(isEvalSymbolLast && (value === '+' || value === '÷' || value === '−' || value === '⨯')){
                        break;
                    }
                    if(isDecimal && value === '.'){
                        break;
                    }
                    if(value === '.'){
                        isDecimal = true;
                    }
                    if(value === '+' || value === '÷' || value === '−' || value === '⨯'){
                        isEvalSymbolLast = true;
                        isDecimal = false;
                        isNegative = false;
                    } else {
                        isEvalSymbolLast = false;
                    }
                    setExpression(currentExpression + value);
                    break;
            }
        } catch (e) {
            setExpression("ERR");
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
    expression = `${expression}`;
    if(isEvalSymbolLast){
        expression = expression.slice(0, expression.length - 1);
    }
    isEvalSymbolLast = false;
    return eval(expression.replace('⨯', '*').replace('−', '-').replace('÷', '/'));
}

/**
 * Updates the number state when needed.
 * @returns { void }
 */
function resetNumberState(){
    isDecimal = false;
    isNegative = false;
}

/**
 * 
 * @param {string} expression 
 */
function makeLastValueNegative(expression){
    expression = `${expression}`;
    let indexes = [];    
    let isNegativeInitial = isNegative;
    indexes.push(expression.lastIndexOf('+'));
    indexes.push(expression.lastIndexOf('⨯'));  // Bugged NaN if negative
    indexes.push(expression.lastIndexOf('−'));  // Bugged NaN if negative
    indexes.push(expression.lastIndexOf('÷'));  // Bugged NaN if negative
    indexes.push(expression.lastIndexOf("%"));  // Bugged NaN if negative
    indexes.sort((a, b) => b - a);
    // TODO: first 8+-95 is what it should look like, what is happening is 8+9-5
    if (isNegativeInitial){
        let negativeSignIndex = expression.lastIndexOf('-');
        try {
            let leftSide = expression.slice(0, negativeSignIndex);
            let rightSide = expression.slice(negativeSignIndex);
            rightSide = +rightSide * -1;
            isNegative = false;
            return(`${leftSide}${rightSide}`);
        } catch (e){ 
            console.log(e);
        }

    }
    
    if(indexes[0] === -1){
        return +expression * -1;
    }
    let newExpression = +expression.slice(indexes[0]) * -1;

    let firstHalf = expression.slice(0, indexes[0] + 1);
    isNegative = !isNegative;
    return `${firstHalf}${newExpression}`;
}

export default CalcButton;