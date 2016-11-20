'use strict'

const { curry } = require('ramda')

const greeting = (salutation, title, first_name, last_name) =>
	`${salutation}, ${title} ${first_name} ${last_name}`

const curried_greeting = curry(greeting)
const hello_mr = curried_greeting('Hello', 'Mr.')
const daveHarmsGreeting = hello_mr('Dave', 'Harms')
console.log('hello_mr with arguments', hello_mr('Ethan', 'Moore'))
console.log('daveHarmsGreeting', daveHarmsGreeting) 