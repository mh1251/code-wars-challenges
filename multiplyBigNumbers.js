function multiply(a, b) {
    let result = [];
    for (var i = a.length - 1; i >= 0; i--) {
      for (let j = b.length - 1; j >= 0; j--) {
        let mul = a[i] * b[j] + (result[i + j + 1] || 0);
        result[i + j + 1] = mul % 10;
        result[i + j] = Math.floor(mul / 10) + (result[i + j] || 0);
      }
    }
    return result.join("").replace(/^0/, "")||"0"; 
}

  console.log(multiply('1', '4455'))


