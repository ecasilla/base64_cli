#!/usr/bin/env node
'use strict';
var meow = require('meow');
var base64Cli = require('./');
var chalk = require('chalk');

var options = {};
options.alias =  {
  input: 'I',
  output: 'O',
  html: 'H',
  css: 'C'
};
var cli = meow({
	help: [
		'Usage',
		'  $ base64-cli -I Input File or Directory -O Output File or Directory and either -H or -C',
		'',
		'Examples',
		'  $ base64-cli',
		'  -I ~/Documents/images/gifs -O ./assets/images/gifs',
		'',
    '  $ base64-cli',
    '  -I ~/Documents/images/gifs -O ./assets/images/gifs -H',
		'',
    '  $ base64-cli',
    '  -I ~/Documents/images/gifs -O ./assets/images/gifs -C',
    '',
		'Options',
		'  -I --input  Input Directory. Required: true',
    '  -O --output  Output Directory. Required: true',
    '  -H --html  Create image tags from the base64. Default: false',
    '  -C --css  Create css class from the base64. Default: false'
	]
},options);

if (!cli.flags.length) {
  console.log(cli.help);
  process.exit(0);
}

base64Cli(cli.flags);
