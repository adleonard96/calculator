
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
                setExpression('0');
                break;
            case 'CE':
                console.log("unimplemented");
                break;
            case '←':
                currentExpression = currentExpression.slice(0, currentExpression.length - 1)
                if (currentExpression.length < 1){
                    currentExpression = '0';
                }
                setExpression(currentExpression);
                
                break;
            case '=':
                setExpression(evaluate());
                break;
            default:
                setExpression(currentExpression + value);
                break;
        }
    }
    return(
        <button style={{width: '25%', paddingLeft: 3, paddingRight: 3, height: '25px', borderRadius: "10px"}} onClick={(e)=> updateExpression(props.value, props.setExpression, props.currentExpression)}>{props.value}</button>
    )

    
}

function evaluate(){
    console.log('cats')
}

export default CalcButton