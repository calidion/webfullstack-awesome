#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
function generate(fd) {
  console.log(fd);
  var json = require('require-reload')(require)('./data/index');
  console.log(json);
  fs.writeFileSync(fd, JSON.stringify(json, null, 2));
};

module.exports = generate;
generate(path.resolve(__dirname, '../data/sites.json'));
