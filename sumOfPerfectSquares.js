function sumOfSquares(n){
    if (Number.isInteger(Math.sqrt(n))) 
      return 1;
  
    for (let i = 1; i * i < n; i++) {
      if (Number.isInteger(Math.sqrt(n - i * i))) 
        return 2;
    }

    while(n%4===0){
        n/=4
    }

    return n % 8 === 7 ? 4 : 3;
  };


  sumOfSquares(22)