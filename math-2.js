'use strict'

const { curry } = require('ramda')

const add = (x,y) => x + y
const curriedAdd = curry(add)

const increment = curriedAdd(1)
const addTen = curriedAdd(10)

module.exports = {increment, addTen}
