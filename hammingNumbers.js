/*A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051*/


//helper function that evaluates if a number is a hamming number (example 10/2 -> 5/5 -> 1 vrakja true)
function isHammingNumber(num) {
    while (num % 5 === 0) num /= 5;
    while (num % 3 === 0) num /= 3;
    while (num % 2 === 0) num /= 2;

    return num == 1;
}

function hamming(n) {
    let hammingNumbers = [1];
    let length = hammingNumbers.length;
    let hammingNum = 2;
    while (length < n) {
        if (isHammingNumber(hammingNum)) {
            hammingNumbers[length] = hammingNum;
            length++;
        }
        hammingNum++;
    }
    return hammingNumbers[length-1];
}



//second solution ranked as faster doesnt check numbers which arent hamming numbers //

function hamming (n) {
    var seq = [1];
    var i2 = 0, i3 = 0, i5 = 0;
    for (var i = 1; i < n; i++) {
      var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
      
      seq.push(x);
      if (2 * seq[i2] <= x) i2++;  //<= can be replaced by ==
      if (3 * seq[i3] <= x) i3++;
      if (5 * seq[i5] <= x) i5++;
    }
    return seq[n-1];
  }
  
