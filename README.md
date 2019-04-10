# rhyming.ly
[![NPM version][badge-npm]][badge-link-npm]
[![Build Status][badge-build]][badge-link-build]
[![dependencies Status][badge-dep]][badge-link-dep]
[![devDependencies Status][badge-dev-dep]][badge-link-dev-dep]
[![codecov][badge-codecov]][badge-link-codecov]
[![Code Style: Google][badge-gts]][badge-link-gts]

Give me an English word and I&#39;ll give you a list of
**alliterations** and **rhymes**

_This is a TypeScript rewrite of the original
[rhymes](https://github.com/words/rhymes) library, with some
improvements_

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save rhyming.ly
```

## Usage

```JavaScript
var rhymes = require('rhyming.ly').rhymes;
rhymes('english');
```

Output
```JSON
{
   "rhymes":[
      {
         "word":"italish",
         "score":3
      },
      {
         "word":"ticklish",
         "score":3
      },
      {
         "word":"candlish",
         "score":3
      },
      {
         "word":"churlish",
         "score":3
      },
      {
         "word":"dalgleish",
         "score":3
      },
      {
         "word":"demolish",
         "score":3
      },
      {
         "word":"devilish",
         "score":3
      },
      {
         "word":"elish",
         "score":3
      },
      {
         "word":"embellish",
         "score":3
      },
      {
         "word":"establish",
         "score":3
      },
      {
         "word":"fallish",
         "score":3
      },
      {
         "word":"foolish",
         "score":3
      },
      {
         "word":"ghoulish",
         "score":3
      },
      {
         "word":"girlish",
         "score":3
      },
      {
         "word":"hamlisch",
         "score":3
      },
      {
         "word":"hellish",
         "score":3
      },
      {
         "word":"inglish",
         "score":3
      },
      {
         "word":"bullish",
         "score":3
      },
      {
         "word":"accomplish",
         "score":3
      },
      {
         "word":"kalish",
         "score":3
      }
   ],
   "alliterations":[
      {
         "word":"englishman",
         "score":6
      },
      {
         "word":"englishwoman",
         "score":6
      },
      {
         "word":"inglis",
         "score":5
      },
      {
         "word":"england\'s",
         "score":4
      },
      {
         "word":"englander",
         "score":4
      },
      {
         "word":"englanders",
         "score":4
      },
      {
         "word":"englands",
         "score":4
      },
      {
         "word":"inglese",
         "score":4
      },
      {
         "word":"england",
         "score":4
      },
      {
         "word":"ingels",
         "score":3
      },
      {
         "word":"englert",
         "score":3
      },
      {
         "word":"englerth",
         "score":3
      },
      {
         "word":"ingraham",
         "score":3
      },
      {
         "word":"ingrum",
         "score":3
      },
      {
         "word":"ingwersen",
         "score":3
      },
      {
         "word":"englund",
         "score":3
      },
      {
         "word":"ingots",
         "score":3
      },
      {
         "word":"ingot",
         "score":3
      },
      {
         "word":"ingold",
         "score":3
      },
      {
         "word":"ingo",
         "score":3
      }
   ]
}
```

  [badge-link-codecov]: https://codecov.io/gh/dan1wang/rhyming.ly
  [badge-link-dep]: https://david-dm.org/dan1wang/rhyming.ly
  [badge-link-dev-dep]: https://david-dm.org/dan1wang/rhyming.ly?type=dev
  [badge-link-build]: https://travis-ci.org/dan1wang/rhyming.ly
  [badge-link-gts]: https://github.com/google/gts  
  [badge-link-npm]: https://www.npmjs.com/package/rhyming.ly
  
  [badge-codecov]: https://codecov.io/gh/dan1wang/rhyming.ly/branch/ts-master/graph/badge.svg
  [badge-dep]: https://david-dm.org/dan1wang/rhyming.ly/status.svg
  [badge-dev-dep]: https://david-dm.org/dan1wang/rhyming.ly/dev-status.svg
  [badge-build]: https://travis-ci.org/dan1wang/rhyming.ly.svg?branch=ts-master
  [badge-gts]: https://img.shields.io/badge/code%20style-google-blueviolet.svg
  [badge-npm]: https://img.shields.io/npm/v/rhyming.ly.svg
