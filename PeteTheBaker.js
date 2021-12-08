/*/Write a function cakes(), which takes the recipe (object) 
and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). */


function cakes(recipe, available) {
    var numCakes = [];
    
    for(let key in recipe){
        if(available.hasOwnProperty(key)){
          numCakes.push(Math.floor(available[key] / recipe[key]));
        }else{
          return 0;
        }
    }

    
    return Math.min.apply(null, numCakes); 
    
  }


  let recipe = {flour: 300, sugar: 150, milk: 100}
  let available = {sugar: 500, flour: 2000, milk: 2000};

  /*/za primerov vo numCakes arrayot ima [6, 3, 20] i go zema najmaliot broj 
  (zashto ne bi imalo poveke od toj ingredient za da mozhat da se napravat poveke torti)*/

  console.log(cakes(recipe, available))