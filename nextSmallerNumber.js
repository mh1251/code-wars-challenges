function nextSmaller(n) {
    n = n.toString().split('');
    console.log(n)
    let unchangableArr = [...n]
    let finalNumber = ''
    let finalNumberLength;
    for (let i = n.length - 1; i > 0; i--) {

        if (n[i] < n[i - 1]) {
            let currentNumber = n[i - 1];
            console.log('CURRENT', currentNumber)
            let currentIndex = i - 1;
            console.log('CURRENT INDEX', currentIndex)
            let splicedArray = n.splice(0, currentIndex + 1);
            console.log('NEW ARRAY', splicedArray)
            n.slice(currentIndex + 1, n.length)

            n.sort(function (a, b) { return a < b ? 1 : -1 })
            console.log('OLD ARR', n)
            n = splicedArray.concat(n)
            console.log('final array', n)

            for (let j = currentIndex + 1; j < n.length; j++) {
                console.log('current', currentIndex)
                if (n[j] < n[currentIndex]) {
                    let swappable = n[j];
                    n[j] = n[currentIndex]
                    n[currentIndex] = swappable;
                    finalNumber = n.join('')
                    finalNumberLength = parseInt(finalNumber).toString().split('').length
                    break;
                }
            }
            if (parseInt(finalNumber) < parseInt(unchangableArr.join(''))
                && finalNumberLength === unchangableArr.join('').length) {
                return parseInt(finalNumber)
            }
        }
    }
    return -1
}


console.log(nextSmaller(1027))