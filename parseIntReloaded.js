function parseIntt(string) {
    let digitNames = {
        zero: 0, ten: 10,
        one: 1, eleven: 11,
        two: 2, twelve: 12, twenty: 20,
        three: 3, thirteen: 13, thirty: 30,
        four: 4, fourteen: 14, forty: 40,
        five: 5, fifteen: 15, fifty: 50,
        six: 6, sixteen: 16, sixty: 60,
        seven: 7, seventeen: 17, seventy: 70,
        eight: 8, eighteen: 18, eighty: 80,
        nine: 9, nineteen: 19, ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000
    }

    let tens = {
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90
    }

    let hundreds = {
        hundered: 100,
        thousand: 1000,
        milion: 1000000
    }

    let number = [];
    let parts = string.split(/[- ]/).filter(function (word) {
        return word;
    })

    parts = parts.filter(item => item !== 'and')

    console.log(parts)

    for (let digit in parts) {
        let tmp = parts[digit]
        number.push(digitNames[tmp])
    }


    for (let i = 0; i < number.length; i++) {

        if (Object.values(hundreds).indexOf(number[i]) > -1) {
            number[i - 1] = number[i - 1] * number[i];
            number.splice(i, 1);
            console.log('number', number)
        }

        if (Object.values(tens).indexOf(number[i]) > -1
            && i != number.length - 1) {
            console.log('number2', number)
            number[i] += number[i + 1];
            number.splice(i + 1, 1)
        }

    }
    return number.reduce((sum, x) => sum += x)
}

