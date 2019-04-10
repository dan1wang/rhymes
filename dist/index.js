'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const cmulib = require("cmu-pronouncing-dictionary");
const cmu = cmulib;
const dictionary = {};
Object.keys(cmu).forEach((key) => {
    const pron = cmu[key].replace(/[0-9]+$/g, ''); // Remove all stress
    const word = key.replace(/\(\d+\)$/, ''); // Merge alt. pronunciations
    if (dictionary.hasOwnProperty(word)) {
        dictionary[word].push(pron);
    }
    else {
        dictionary[word] = [pron];
    }
});
function rhymes(aWord) {
    const results = {
        rhymes: [],
        alliterations: [],
    };
    if (!aWord)
        return results;
    aWord = aWord.toLowerCase();
    if (!dictionary[aWord])
        return results;
    const aProns = dictionary[aWord];
    Object.keys(dictionary).forEach((bWord) => {
        if (aWord === bWord)
            return;
        const bProns = dictionary[bWord];
        let aScore = 0;
        let rScore = 0;
        aProns.forEach((aPron) => {
            bProns.forEach((bPron) => {
                const scores = countMatchingSyllables(aPron, bPron);
                if (scores.aScore > aScore)
                    aScore = scores.aScore;
                if (scores.rScore > rScore)
                    rScore = scores.rScore;
            });
        });
        if (aScore)
            results.alliterations.push({ word: bWord, score: aScore });
        if (rScore)
            results.rhymes.push({ word: bWord, score: rScore });
    });
    results.alliterations =
        results.alliterations.sort((a, b) => b.score - a.score).slice(0, 20);
    results.rhymes =
        results.rhymes.sort((a, b) => b.score - a.score).slice(0, 20);
    return results;
}
exports.rhymes = rhymes;
function countMatchingSyllables(aPron, bPron) {
    let aSyllables = aPron.split(' ');
    let bSyllables = bPron.split(' ');
    if (aSyllables.length < bSyllables.length) {
        /* switch a and b */
        const cSyllables = aSyllables;
        aSyllables = bSyllables;
        bSyllables = cSyllables;
    }
    function score() {
        let score = 0;
        for (const i in aSyllables) {
            if (aSyllables[i] === bSyllables[i]) {
                score++;
            }
            else {
                return score;
            }
        }
        return score;
    }
    const aScore = score();
    aSyllables = aSyllables.reverse();
    bSyllables = bSyllables.reverse();
    const rScore = score();
    return { aScore, rScore };
}
//# sourceMappingURL=index.js.map