
// Task
// You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

// Empty positions are marked ..
// Walls are marked W.
// Start and exit positions are empty in all test cases.


function pathFinder(maze){
    let rows = maze.split("\n").map(x => x.replace(/\ /g, "")).map(x=>x.split(''));
    let end = rows.length - 1;
    function moveTo(x, y) {
      if (x < 0 || y < 0 || x > end || y > end || rows[y][x] !== '.') {
        return false;
      }
      console.log('rows', rows[y][x])
      if (x === end && y === end) {
        return true;
      }

      rows[y][x] = `x`; //mark the place we've been to// slichno kako so Set() da stavime visited
      
      
      return moveTo(x - 1, y) //left
        || moveTo(x + 1, y) //right
        || moveTo(x, y - 1) //up
        || moveTo(x, y + 1); //down
    }
    
    return moveTo(0, 0);
  }



console.log(pathFinder(
    `.W.
    .W.
    ...`))