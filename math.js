'use strict'

const { pipe } = require('ramda')

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

// const operate = (x, y) => {
// 	const product = multiply(x, y)
// 	const incremented = addOne(product)
// 	const squared = square(incremented)

// 	return squared
// }

const operate = pipe(multiply, addOne, square)

console.log('operate 3 and 4', operate(3,4))