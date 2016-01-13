#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var json = require('./index');
console.log(JSON.stringify(json, null, 2));
fs.writeFileSync(path.resolve(__dirname, '../data/sites.json'), JSON.stringify(json, null, 2));
