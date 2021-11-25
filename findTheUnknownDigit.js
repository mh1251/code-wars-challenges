
function solveExpression(exp) {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    digits = digits.filter(x => exp.split('').every(y => x != y));
    let correctDigit = 0;


    for (let i = 0; i < digits.length; i++) {
        let resultArr = exp.replace(/\?/g, digits[i])
            .replace('+-', '-')
            .replace('--', '+')
            .split('=');
        let expression = resultArr[0];
        let unparsedResult = resultArr[1];
        let expectedResult = parseInt(unparsedResult);
        let derivedResult = 0;


        if (expression.includes('-0') && expression.charAt(expression.length - 1) != "0" && expression.charAt(expression.length - 2) != '-'
            || expression.includes('+0') && expression.charAt(expression.length - 1) != "0" && expression.charAt(expression.length - 2) != '+'
            || expression.includes('*0') && expression.charAt(expression.length - 1) != "0" && expression.charAt(expression.length - 2) != '*') {
            i++
        }

        if (expression.includes('+')) {
            derivedResult = expression.split('+').reduce((a, b) => parseInt(a) + parseInt(b));
        }

        if (expression.includes('-') && !expression.includes('*-')) {
            let minusCount = expression.split('').filter(x => x == '-').length
            if (minusCount > 1 && expression[0] == '-') {
                let indexOfSecondMinus = expression.indexOf("-", parseInt(2));
                derivedResult = parseInt(expression.substring(0, indexOfSecondMinus)) - parseInt(expression.substring(indexOfSecondMinus, expression.length));
            } else if (expression[0] != '-') {
                derivedResult = expression.split('-').reduce((a, b) => parseInt(a) - parseInt(b));
            }
        }

        if (expression.includes('*')) {
            derivedResult = expression.split('*').reduce((a, b) => parseInt(a) * parseInt(b));
        }

        // Check for invalid leading zero in result
        if (derivedResult == 0 &&
            unparsedResult.length > 1 &&
            unparsedResult.split('').every(x => x == '0')) {
            continue;
        }

        if (derivedResult !== expectedResult) {
            continue;
        } else {
            correctDigit = digits[i]
        }

        return parseInt(correctDigit);
    }
    return -1
}



console.log(solveExpression(''))