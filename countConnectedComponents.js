/*You are managing an amazing city and indeed its a maze. This city has the particularity to be divided into districts which are unreachable from the other districts.
More precisely, a district consists of one or more places connected with roads.
If there is two places p1 and p2 and there is a path (not necessarily direct) between p1 and p2 then p1 and p2 are in the same district.

As a manager, your objective is to count the number of district.

To perform this task you have for each place in the city the list of the other places that are directly reachable through a street. For example if you are given the city

var city = { 
  'p0': ['p1', 'p2'],
  'p1': ['p0'],
  'p2': ['p0'],
  'p3': []
}*/


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
