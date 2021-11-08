// Create a function that takes a positive integer and returns the next bigger number that can be formed 
//by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil




function nextBigger(n){
    // Transform number into array of digits 
    var numberArray = n.toString().split('').map(x => Number(x));
    
    // Check if next bigger rearangement is possible
    var invalidCnt = 0;
    for (var i=numberArray.length - 1; i > 0; i--) {
      if (numberArray[i - 1] >= numberArray[i]) {
        invalidCnt++;
      }
    }
  
    if (invalidCnt == numberArray.length - 1) {
      return -1; 
    }
    
    // Find smalles adjacent digit
    // 534976
    // 53^976
    var smallerAdjacentFromLeft;
    for (var i=numberArray.length - 1; i > 0; i--) {
      if (numberArray[i - 1] < numberArray[i]) {
        smallerAdjacentFromLeft = i - 1; 
        break;
      }
    }
    
    // Swap smallest adjacent with smallest digit in sub-array
    var min = 999999999;
    var smallestIndex = 0;
    for (var i=smallerAdjacentFromLeft; i < numberArray.length; i++) {
      if (numberArray[i] < min && 
          numberArray[i] != numberArray[smallerAdjacentFromLeft] &&
          numberArray[i] > numberArray[smallerAdjacentFromLeft]) {
        min = numberArray[i]; 
        smallestIndex = i;
      }
    }
    
    // Swap
    var swappable = numberArray[smallerAdjacentFromLeft];
    numberArray[smallerAdjacentFromLeft] = numberArray[smallestIndex];
    numberArray[smallestIndex] = swappable;
    
    // Rearange digits in descending order on right of smallest digit
    // 534976
    // 53
    return Number(numberArray.slice(0, smallerAdjacentFromLeft + 1)
    .concat(numberArray.slice(smallerAdjacentFromLeft + 1, numberArray.length).sort()).join(''));
    }