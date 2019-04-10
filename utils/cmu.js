'use strict';

const fs = require('fs');
const http = require('https');

const dictURL = 'https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict';
const destFile = 'cmudict.dict'

// https://stackoverflow.com/questions/11944932/
const download = function(url, dest, callback) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(callback);
    });
  }).on('error', function(err) {
    fs.unlink(dest);
    if (callback) callback(err.message);
  });
};

download(dictURL, destFile);
