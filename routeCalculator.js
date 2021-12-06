//doesnt work for big numbers
//calculate('5+5+5+5') => '20'

//calculate('1000$2.5$5+5-5+6$6') =>'81'

//calculate('10-9p')   =>  '400: Bad request'

function calculate(route) {
    let operations = ['$', '*', '+', '-'];
    let splitedRoute = []
    let number = '';
  
    if(route.length)
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
    splitedRoute.push(number)
  

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

        if (splitedRoute.indexOf('$','*')===-1) {
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
console.log(calculate(''))

