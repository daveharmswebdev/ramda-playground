'use strict'

const { partial } = require('ramda')

const greeting  = (greeting, person) => `${greeting} ${person}`

const hello = partial(greeting, ['Hello'])
const whatup = partial(greeting, ['Whatup'])

console.log('hello dave: ', hello('Dave'))
console.log('whatup dave', whatup('Dave'))