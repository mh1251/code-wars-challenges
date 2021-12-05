function RomanNumeralsHelper() {
    this.values =
        [[1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']]

}

RomanNumeralsHelper.prototype.fromRoman = function(rom) {
    let matches = rom.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/gi);
    let sum = 0;
    let values = this.values;
    matches.forEach(x => {
        sum += values.filter(y => y[1] == x)[0][0] //dvete [0][0] posho filter vrakja array vo array primer[[100, C]];
        console.log('sum',  sum)
    })
    return sum;
}

RomanNumeralsHelper.prototype.toRoman = function (value) {
    let result = '';
    let romans = this.values;
    for (let i = 0; i < romans.length; i++) {
        if (value >= romans[i][0]) {
            let times = Math.floor(value / romans[i][0])
            value = value - (times * romans[i][0])
            result += romans[i][1].repeat(times)
        }
    }
    return result
}


let RomanNumerals = new RomanNumeralsHelper();

console.log(RomanNumerals.fromRoman('CCXXV'))
