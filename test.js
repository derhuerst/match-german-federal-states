'use strict'

const test = require('tape')
const normalize = require('normalize-for-search')

const states = require('./states.json')
const match = require('.')

test('states.json has normalized keys', (t) => {
	for (let state in states) {
		t.equal(state, normalize(state))
	}
	t.end()
})

// todo
