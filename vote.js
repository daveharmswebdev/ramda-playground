'use strict'

const { both, either } = require('ramda')

const OUR_COUNTRY = 'USA'
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)

const person = {
	birthCountry: 'Thailand',
	naturalizationDate: '11/19/15',
	age: 21
}

console.log('This person can vote:', isEligibleToVote(person))