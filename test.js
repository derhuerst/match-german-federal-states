'use strict'

const test = require('tape')
const normalize = require('normalize-for-search')

const englishStates = require('./english-states.json')
const germanStates = require('./german-states.json')
const match = require('.')

test('english-states.json has normalized keys', (t) => {
	for (let state in englishStates) {
		t.equal(state, normalize(state))
	}
	t.end()
})

test('german-states.json has normalized keys', (t) => {
	for (let state in germanStates) {
		t.equal(state, normalize(state))
	}
	t.end()
})

// todo
