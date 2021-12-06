/*This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

You will be passed a string of any length containing numbers and operators:

'+' = add
'-' = subtract
'*' = multiply
'$' = divide
Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'*/

function calculate(route) {
    let operations = ['$', '*', '+', '-'];
    let splitedRoute = []
    let number = '';
  
    if(route.length){
    for (let i = 0; i < route.length; i++) {
        let currentElement = route[i]
        if (operations.indexOf(currentElement) != -1) {
            splitedRoute.push(+number)
            splitedRoute.push(currentElement)
            number = ''
        } else {
            number += currentElement
        }
    }
    splitedRoute.push(+number)
}

    for (let i = 0; i < splitedRoute.length; i++) {
        let current = splitedRoute[i]
        let result;

        if (current === '$') {
            result = +splitedRoute[i - 1] / +splitedRoute[i + 1];
            splitedRoute.splice(i - 1, 3, result);
            i = 0
        }

        if (splitedRoute[i] === '*') {
            result = +splitedRoute[i - 1] * +splitedRoute[i + 1];
            splitedRoute.splice(i - 1, 3, result)
            i = 0
        }

        if (splitedRoute.indexOf('$')==-1 & splitedRoute.indexOf('*')==-1) {
            if (splitedRoute[i] === '+') {
                result = +splitedRoute[i - 1] + +splitedRoute[i + 1];
                splitedRoute.splice(i - 1, 3, result)
                i = 0
            }
            if (splitedRoute[i] === '-') {
                result = +splitedRoute[i - 1] - +splitedRoute[i + 1];
                splitedRoute.splice(i - 1, 3, result)
                i = 0
            }
        }
        else {
            continue
        }
    }


    if (isNaN(+splitedRoute)) {
        return '400: Bad request'
    } else {
        return +splitedRoute
    }

}
console.log(calculate('5+5$5+2*4'))

