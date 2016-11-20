'use strict'

const { expect } = require('chai')
const { increment, addTen } = require('../math-2')

describe('test suite', () => {
	it('true should be true', () => {
		expect(true).to.equal(true)
	})
})

describe('math 2 suite', () => {
	it('increment should increment x by 1', () => {
		const value = 6
		expect(increment(value)).to.equal(7)
	})
	it('addTen should add 10 to passed in value', () => {
		expect(addTen(15)).to.equal(25)
	})
})