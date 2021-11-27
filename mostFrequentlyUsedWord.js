function topThreeWords(text) {
    let words = text.toLowerCase().match(/([a-z'])+/g);
    let wordCount = new Map();
    let mostUsedWords = []

    if (words != null) {
        words.forEach(word => {
            if (wordCount.has(word)) {
                let count = wordCount.get(word);
                count++;
                wordCount.set(word, count)
            } else {
                wordCount.set(word, 1)
            }
        })
    } else {
        return [];
    }


    let sortedWordMap = new Map([...wordCount.entries()].sort((a, b) => b[1] - a[1]))
    let getWords = [...sortedWordMap.keys()];
    mostUsedWords = getWords.slice(0, 3)


    return mostUsedWords;
}


