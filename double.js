'use strict'

const { partial } = require('ramda')

const multiply = (a,b) => a * b
const double = partial(multiply, [2])

console.log('doubling 10: ', double(10))