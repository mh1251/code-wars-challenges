let Magic = function() {
    let value = 0;
  
    let operators = {
      'plus': (a, b) => a + b,
      'minus': (a, b) => a - b,
      'times': (a, b) => a * b,
      'dividedBy': (a, b) => a / b
    };
  
    let numbers = [
      'zero', 'one', 'two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine', 'ten'
    ];
  

    numbers.forEach((num, index) => {
      Object.defineProperty(this, num, {
        get: () => {
          value = index;
          return Number(index);
        }
      });
    });
     
    Object.keys(operators).forEach((operator) => {
      var operatorFunction = operators[operator];
      var operatorObject = {};
  
      numbers.forEach((num, index) => {
        Object.defineProperty(operatorObject, num, {
          get: () => value = operatorFunction(value, index)
        });
      });
  
      Number.prototype[operator] = operatorObject;
    });
  
   
  }
  
  let FluentCalculator = new Magic();

  console.log(FluentCalculator.two.plus.two)
