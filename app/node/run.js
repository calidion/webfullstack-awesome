#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var json = require('./index');
fs.writeFileSync(path.resolve(__dirname, '../data/sites.json'), JSON.stringify(json));
