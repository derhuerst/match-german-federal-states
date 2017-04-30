'use strict'

const normalize = require('normalize-for-search')
const levenshtein = require('leven')

const data = {
	en: require('./english-states.json'),
	de: require('./german-states.json')
}

const match = (name, lang = 'en') => {
	if (!lang in data) throw new Error('invalid language')
	const states = data[lang]

	if (states[name]) return states[name]

	const normalized = normalize(name)
	if (states[normalized]) return states[normalized]

	let matches = 0
	let match = null
	for (let state in states){
		if (levenshtein(state, normalized) <= 2) {
			if (matches > 0) return null
			matches++
			match = states[state]
		}
	}

	return match
}

module.exports = match
