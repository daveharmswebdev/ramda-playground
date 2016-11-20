'use strict'

const { expect } = require('chai')
const { hello_mr, whatup } = require('../curry_greeting')

describe('curry_greeting suite', () => {
	it('passing first and last name into the hello_mr will produce a greeint', () => {
		expect(hello_mr('Dave', 'Harms')).to.equal('Hello, Mr. Dave Harms')
	})
	it('should produce a proper whatup greeting', () => {
		expect(whatup('Dave', 'Harms')).to.equal('Whatup, my Dave Harms')
	})
})

