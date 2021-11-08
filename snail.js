// Given an n x n array, return the array elements arranged from outermost elements to the middle element, 
//traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]


let snail = function(array) {
    let snailArray = []
    while(array.length>0){
      snailArray.push(...array.shift())
      for (let i = 0; i < array.length; i++){
        snailArray.push(array[i].pop())
      }
    
      snailArray.push(...(array.pop() || []).reverse())
      for (let i = array.length -1; i >= 0; i--){
        snailArray.push(array[i].shift())
      }
    }
    return snailArray
  }

  