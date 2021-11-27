function add(a, b) {
    let result = "";
    let diff;
    if (a.length > b.length) {
        diff = a.length - b.length
        while (diff) {
            b = "0" + b;
            diff--
        }
    } else {
        diff = b.length - a.length
        while (diff) {
            a = "0" + a;
            diff--
        }
    }

    if (a.length === b.length) {
        let step = [];
        for (let i = a.length - 1; i >= 0; i--) {
            let stepAdd = 0;
            let numberA = parseInt(a[i]);
            let numberB = parseInt(b[i]);

            if (step[i + 1]) {
                stepAdd = step[i + 1] + numberA + numberB
            } else {
                stepAdd = numberA + numberB;
            }


            if (stepAdd >= 10 && i !== 0) {
                result += String(stepAdd - 10)
                step[i] = 1;
            } else {
                result += String(stepAdd)
            }
        }

    }
    return result
}

console.log(add('2223', '99'))