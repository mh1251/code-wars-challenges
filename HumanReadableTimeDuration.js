// // Your task in order to complete this Kata is to write a function which formats a duration, 
// //given as a number of seconds, in a human-friendly way.

// // The function must accept a non-negative integer. If it is zero, it just returns "now". 
// //Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// // It is much easier to understand with an example:

// // formatDuration(62)    // returns "1 minute and 2 seconds"
// // formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// // For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// // Note that spaces are important.

// // Detailed rules
// // The resulting expression is made of components like 4 seconds, 1 year, etc. In general, 
// a positive integer and one of the valid units of time, separated by a space.
//  The unit of time is used in plural if the integer is greater than 1.

// // The components are separated by a comma and a space (", "). Except the last component, which is separated by 
// " and ", just like it would be written in English.

// // A more significant units of time will occur before than a least significant one. 
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// // Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// // A component will not appear at all if its value happens to be zero. 
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// // A unit of time must be used "as much as possible". 
// It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, 
// the duration specified by of a component must not be greater than any valid more significant unit of time.





function formatDuration(seconds){
  
    let secondsInYear = 31536000;
    let secondsInDay = 86400;
    let secondsInHour = 3600;
    let secondsInMinute = 60;
    
    let calculatedYears =  Math.floor(seconds/secondsInYear)
    let calculatedDays = Math.floor((seconds/secondsInDay)%365)
    let calculatedHours = Math.floor((seconds/secondsInHour)%24);
    let calculatedMinutes = Math.floor((seconds/secondsInMinute)%60);
    let calculatedSeconds = Math.floor((seconds%3600)%60)
    let timeDuration = [];
    
    if(seconds===0){
      return 'now'
    }
    
    //helper function
    function addLetterS(time) {
      if(time>1){
        return 's'
      }else{
        return '';
      }
    }
    
    let printedYear = () => {
      if(calculatedYears>0){
        return calculatedYears + ' year' + addLetterS(calculatedYears)
      }else{
        return '';
      }
    }
    
    let printedDay = () => {
      if(calculatedDays>0){
        return calculatedDays + ' day' + addLetterS(calculatedDays)
      }else{
        return '';
      }
    }
    
    let printedHour = () => {
      if(calculatedHours>0){
        return calculatedHours + ' hour' + addLetterS(calculatedHours)
      }else{
        return '';
      }
    }
  
    let printedMinute = () => {
      if(calculatedMinutes>0){
        return calculatedMinutes + ' minute' + addLetterS(calculatedMinutes)
      }else{
        return '';
      }
    }
    
    let printedSecond = () => {
      if(calculatedSeconds>0){
        return calculatedSeconds + ' second' + addLetterS(calculatedSeconds)
      }else{
        return '';
      }
    }
  
    timeDuration.push(printedYear(),printedDay(), printedHour(),printedMinute(),printedSecond());
    timeDuration = timeDuration.filter(e =>  e);
  
    if(timeDuration.length>1){
        let lastTimeDuration = timeDuration.pop()
        timeDuration=timeDuration.join(', ') + ' and ' + lastTimeDuration;
      }
    
    return timeDuration.toString()
  }
  
  console.log(formatDuration(7260))