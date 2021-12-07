function nextSmaller(n) {
    n = n.toString().split('');
    console.log(n)
    let unchangableArr = [...n]
    let finalNumber = ''
    let finalNumberLength;
    for (let i = n.length - 1; i > 0; i--) {
//find the first digit that has one smaller digit next to its right
        if (n[i] < n[i - 1]) {
            let currentNumber = n[i - 1];
            console.log('CURRENT', currentNumber)
            let currentIndex = i - 1;
            console.log('CURRENT INDEX', currentIndex)
//when we find the digit we slice the array in two part the first that has the swappable number and second which needs to be sorted
            let splicedArray = n.splice(0, currentIndex + 1);
            console.log('NEW ARRAY', splicedArray)
            n.slice(currentIndex + 1, n.length)
//go sortirame vtoriot del od arrayot za da najdeme najgolemiot digitnshto e pomal od digitot na currentIndex (toj shto treba da se swapne)
            n.sort(function (a, b) { return a < b ? 1 : -1 })
            console.log('OLD ARR', n)
            n = splicedArray.concat(n)
            console.log('final array', n)
//go barame brojot shto e pomal od currentIndex digit-ot
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
 // proveruvame dali e pomal vo sluchaj na nuli (primer za 1027 sleden broj mozhe da go dade deka e pomal 0721 shto ne e tochno
            if (parseInt(finalNumber) < parseInt(unchangableArr.join(''))
                && finalNumberLength === unchangableArr.join('').length) {
                return parseInt(finalNumber)
            }
        }
    }
    return -1
}


console.log(nextSmaller(1027))
