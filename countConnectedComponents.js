function countDistricts(city){
    var nbDistricts = 0;
    
    const visited = new Set();
    for (let node in city) {
      if (explore(city, node, visited) === true) {
        nbDistricts += 1;
      }
    }
    return nbDistricts;
  };
  
  
  const explore = (city, current, visited) => {
    if (visited.has(String(current))) return false;
        
    visited.add(String(current));
    
    for (let neighbor of city[current]) {
      explore(city, neighbor, visited);
    }
    
    return true;
  }
  
  
  let city = {
    'p0': ['p1', 'p2'],
    'p1': ['p0'],
    'p2': ['p0'],
    'p3': []
  }
     
   console.log(countDistricts(city))