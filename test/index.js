/* globals describe, it */

var rhymes = require('../dist').rhymes;
var assert = require('chai').assert;

describe('rhyming.ly', function() {
  it('should have a rhymes function ', function() {
    assert.isFunction(rhymes);
  });
});

var english;

describe('rhymes()', function() {
  english = rhymes('english');

  it('should return matches for "english"', function() {
    assert.isObject(english);
    assert.property(english, 'rhymes');
    assert.property(english, 'alliterations');
    assert.isArray(english.rhymes);
    assert.isArray(english.alliterations);
    assert.isNotEmpty(english.rhymes);
    assert.isNotEmpty(english.alliterations);
  });

  describe('each alliteration match', function() {
    it('should have a `word` property', function() {
      assert.property(english.alliterations[0], 'word');
      assert.isString(english.alliterations[0].word);
    });
    it('should have a `score` property', function() {
      assert.property(english.alliterations[0], 'score');
      assert.isNumber(english.alliterations[0].score);
    });
  });

  describe('each rhyme match', function() {
    it('should have a `word` property', function() {
      assert.property(english.rhymes[0], 'word');
      assert.isString(english.rhymes[0].word);
    });
    it('should have a `score` property', function() {
      assert.property(english.rhymes[0], 'score');
      assert.isNumber(english.rhymes[0].score);
    });
  });
});

describe('rhymes', function() {
  var empty = rhymes('');

  it('should return empty result for "" input', function() {
    assert.isObject(empty);
    assert.property(empty, 'rhymes');
    assert.property(empty, 'alliterations');
    assert.isArray(empty.rhymes);
    assert.isArray(empty.alliterations);
    assert.isEmpty(empty.rhymes);
    assert.isEmpty(empty.alliterations);
  });

  empty = rhymes();
  it('should return empty result for no input', function() {
    assert.isObject(empty);
    assert.property(empty, 'rhymes');
    assert.property(empty, 'alliterations');
    assert.isArray(empty.rhymes);
    assert.isArray(empty.alliterations);
    assert.isEmpty(empty.rhymes);
    assert.isEmpty(empty.alliterations);
  });

  var sdfokusdls = rhymes('sdfokusdls');
  it('should return empty result if input word is not in corpus', function() {
    assert.isObject(sdfokusdls);
    assert.property(sdfokusdls, 'rhymes');
    assert.property(sdfokusdls, 'alliterations');
    assert.isArray(sdfokusdls.rhymes);
    assert.isArray(sdfokusdls.alliterations);
    assert.isEmpty(sdfokusdls.rhymes);
    assert.isEmpty(sdfokusdls.alliterations);
  });

  it('finds matches regardless of input case', function() {
    assert.deepEqual(rhymes('ENGLISH'), english);
  });
});
