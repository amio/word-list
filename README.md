# words-en

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/words-en.svg)](https://greenkeeper.io/)

> List of [English words](https://github.com/atebits/Words/blob/master/Words/en.txt)

Useful if you're creating a word game or just want some words to work with.

## Install

```
$ npm install --save words-en
```

## Usage

```js
const words = require('words-en').split('\n')
// => […, 'abmhos', 'abnegate', …]

const filePath = require('words-en/path')
// => <path-to-words.txt>

const readableStream = require('words-en/stream')
// => <readable-stream>
```

## License

MIT © [Sindre Sorhus](https://sindresorhus.com) and [Amio](https://amio.cn)
