# base64-cli [![Build Status](https://travis-ci.org/ecasilla/base64-cli.svg?branch=master)](https://travis-ci.org/ecasilla/base64-cli)

> My astonishing module


## Install

```
$ npm install --save base64-cli
```


## Usage

```js
var base64Cli = require('base64-cli');

base64Cli('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global base64-cli
```
```
$ base64-cli --help

  Usage
    base64-cli [input]

  Example
    base64-cli
    unicorns & rainbows

    base64-cli ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### base64Cli(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Ernie Casilla](https://github.com/ecasilla/base64_cli)
