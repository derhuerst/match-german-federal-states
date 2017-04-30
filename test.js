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

test('English matching', (t) => {
	t.plan(6)

	t.equal(match('Brandenburg'), 'BB') // upper case
	t.equal(match('rhineland palatinate'), 'RP') // spaces vs. dashes
	t.equal(match('baden-weurttemberg'), 'BW') // typo

	t.equal(match('Brandenburg', 'en'), 'BB') // upper case
	t.equal(match('rhineland palatinate', 'en'), 'RP') // spaces vs. dashes
	t.equal(match('baden-weurttemberg', 'en'), 'BW') // typo
})

test('German matching', (t) => {
	t.plan(4)

	t.equal(match('Brandenburg', 'de'), 'BB') // upper case
	t.equal(match('mecklenburg vorpommern', 'de'), 'MV') // spaces vs. dashes
	t.equal(match('neidersachsen', 'de'), 'NI') // typo
	t.equal(match('thüringen', 'de'), 'TH') // umlauts
})
