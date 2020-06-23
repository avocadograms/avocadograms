const fetch = require('node-fetch');
const WORDAPIKEY = require('../../private/secrets');

const wordsController = {};

wordsController.findDefinition = (req, res, next) => {
	const word = 'dog';

	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
			'x-rapidapi-key': WORDAPIKEY,
		},
		Accept: 'application/json',
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));

	// return next();
};

wordsController.findDefinition();

module.exports = wordsController;
