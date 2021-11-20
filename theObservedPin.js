function getPINs(observed) {

	let neighbors = {
		0: ["0", "8"],
		1: ["1", "2", "4"],
		2: ["1", "2", "3", "5"],
		3: ["2", "3", "6"],
		4: ["1", "4", "5", "7"],
		5: ["2", "4", "5", "6", "8"],
		6: ["3", "5", "6", "9"],
		7: ["4", "7", "8"],
		8: ["5", "7", "8", "9", "0"],
		9: ["6", "8", "9"]
	}

	let observedPin = observed.toString().split('');
	let possibleDigits = [];
	let combos = []

	for (let i in observedPin) {
		possibleDigits.push(neighbors[observedPin[i]]);
	}

	combos = possibleDigits.reduce(function (a, b) {
		let result = [];
		for (let digit1 in a) {
			for (let digit2 in b) {
				result.push(a[digit1] + b[digit2])
			}
		}
		return result
	})
	return combos;
}


console.log(getPINs('13')) 

/*/output: [
	'12', '13', '16',
	'22', '23', '26',
	'42', '43', '46'
  ]
  
1: ["1", "2", "4"], 
3: ["2", "3", "6"]/*/





