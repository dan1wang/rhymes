const dict = require('cmu-pronouncing-dictionary')
const merge = require('lodash').merge
const sortBy = require('lodash').sortBy

var dictionary = []
Object.keys(dict).forEach(function (word) {
  dictionary.push({
    word: word,
    pron: dict[word]
  })
})

module.exports = function rhymes (input) {
  if (!input) return [[],[]];

  input = input.toLowerCase();

  if (!dict[input]) return [[],[]];

  let inputPron = dict[input];
  let alliterations = [];
  let rhymes = [];

  dictionary.forEach(function (word) {
    var scores = countMatchingSyllables(inputPron, word.pron)
    if (scores[0] > 1) {
      alliterations.push(merge(word, { score: scores[0] }))
    }
    if (scores[1] > 1) {
      rhymes.push(merge(word, { score: scores[1] }))
    }
  })

  alliterations = sortBy(alliterations, 'score').reverse().slice(0, 20);
  rhymes = sortBy(rhymes, 'score').reverse().slice(0, 20);

  return [alliterations, rhymes]
}

module.exports.dictionary = dictionary

function countMatchingSyllables (aWord, bWord) {

  let aSyllables = aWord.split(' ');
  let bSyllables = bWord.split(' ');

  if (aSyllables.length < bSyllables.length) {
    /* switch a and b */
    const cSyllables = aSyllables;
    aSyllables = bSyllables;
    bSyllables = cSyllables;
  }

  function score() {
    let score = 0
    for (var i in aSyllables) {
      if (aSyllables[i] === bSyllables[i]) {
        score++
      } else {
        return score
      }
    }
    return score
  }

  const alliterationScore = score();

  aSyllables = aSyllables.reverse()
  bSyllables = bSyllables.reverse()

  const rhymeScore = score();

  return [alliterationScore, rhymeScore];

}
