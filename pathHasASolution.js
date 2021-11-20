var arcs = [
    { start: "a", end: "b" },
    { start: "b", end: "c" },
    { start: "c", end: "a" },
    { start: "c", end: "d" },
    { start: "e", end: "a" }
];

function solveGraph(start, end, arcs) {
    let queue = [start];
    let visited = new Set();
    while (queue.length > 0) {
        let current = queue.shift();

        if (current === end) {
            return true;
        }

        visited.add(current);

        for (let i = 0; i < arcs.length; i++)
            if (arcs[i].start == current && !(visited.has(arcs[i].end)))
                queue.push(arcs[i].end);
    }
    return false;
}



console.log(solveGraph('b', 'a', arcs))