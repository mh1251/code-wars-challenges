function bowlingScore(frames) {
    frames = frames.split(" ")

    let score = 0;
    let rolls = [];
    let strikes = [];
    let spares = [];

    for (let i = 0; i < frames.length; i++) {
        let frame = frames[i]

        for (let j = 0; j < frame.length; j++) {
            let element = frame[j]
            if (element === 'X') {
                rolls.push(10);
                if (i < 9) strikes.push(rolls.length - 1)
            } else if (element === '/') {
                rolls.push(10 - Number(frame[j - 1]))
                if (i < 9) spares.push(rolls.length - 1)
            } else {
                rolls.push(Number(element))
            }
        }
    }

    score = rolls.reduce((sum, x) => {
        return sum + x
    })

    spares.forEach(spare => score += rolls[spare + 1])
    strikes.forEach(strike => score += rolls[strike + 1] + rolls[strike + 2])

    return score
}


console.log(bowlingScore('16 9/ 44 X 16'))