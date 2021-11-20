function sumIntervals(intervals){
    let uniqueIntervals = [];
    
      intervals.forEach(interval => {
        for (let i=interval[0]; i<interval[1]; i++){
            console.log('interval[0]:', interval[0])
            console.log('interval[1]:', interval[1])
          if(!uniqueIntervals.includes(i)){
          uniqueIntervals.push(i);
          console.log('Unique Intervals:', uniqueIntervals)
          }
        }
       
      })
      return uniqueIntervals.length
    }

    let intervals1 = [
        [1,5],
        [1,4],
        [8,10],
        [10,20]
    ]
      
    console.log(sumIntervals(intervals1))