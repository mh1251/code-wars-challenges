/*/A format for expressing an ordered list of integers is to use a comma separated list of either
individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
Example:
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 returns "-6,-3-1,3-5,7-11,14,15,17-20"/*/


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

