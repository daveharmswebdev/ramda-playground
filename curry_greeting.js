'use strict'

const { curry } = require('ramda')

const greeting = (salutation, title, first_name, last_name) =>
	`${salutation}, ${title} ${first_name} ${last_name}`

const curried_greeting = curry(greeting)
const hello_mr = curried_greeting('Hello', 'Mr.')
const whatup = curried_greeting('Whatup', 'my')

module.exports = { hello_mr, whatup }