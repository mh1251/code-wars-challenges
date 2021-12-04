function doubles(maxk, maxn) {
    var sum = 0;
    for(var i = 1; i <= maxk; i++)
      for(var j = 1; j <= maxn; j++)
        sum += 1 / (i * Math.pow(j + 1, 2 * i));
    return sum;
  }

  doubles(1, 10);

// https://www.codewars.com/kata/56c04261c3fcf33f2d000534

