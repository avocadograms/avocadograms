const fetch = require('node-fetch');
const WORDAPIKEY = require('../../private/secrets');

const wordsController = {};

wordsController.findDefinition = (req, res, next) => {
	const { word } = req.body;

	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
			'x-rapidapi-key': WORDAPIKEY,
			accept: 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => {
			res.locals.definition = data;
			return next();
		})
		.catch((err) => {
			return next({
				log: 'Error occurred in wordsController.findDefinition',
				message: { error: `The following error occurred: ${err}` },
			});
		});
};

module.exports = wordsController;
