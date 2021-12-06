function isSquare(n) {
  let sqrt = parseInt(Math.sqrt(n));
  return sqrt * sqrt === n;
}

function sumOfSquares(n) {
  // If n is a perfect square, return 1.
  if (isSquare(n)) {
    return 1;
  }

  /* *Lagrange's four-square theorem states that any positive integer can be written as the sum of four or fewerperfect squares. 
   * Three squares are not sufficient for numbers of the form 4^k(8m + 7). If the remainder from number%8 is 7 then the number
   can be represented with 4 perfect squares*/

  while (n % 4 === 0) {
    n = n / 4;
  }

  if (n % 8 === 7) {
    return 4;
  }

  // Check whether 2 is the result.
  let sqrt = parseInt(Math.sqrt(n));
  for (let i = 1; i <= sqrt; i++) {
    if (isSquare(n - i * i)) {
      return 2;
    }
  }

  return 3;
}

  sumOfSquares(22)