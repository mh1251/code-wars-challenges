function solution(input, marker){
  let lines = input.split('\n');
  for(let i=0; i<lines.length; i++){
    for(let j=0; j<marker.length; j++){
      lines[i] = lines[i].split(marker[j])[0].trim() //go vrakja prviot element od splitnatiot array zatoa [0]
    }
  }
  return lines.join('\n')
}


console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))