const fetch = require('node-fetch');

const wordsController = {};

wordsController.findDefinition = (req, res, next) => {
	const word = 'dog';

	fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
			'x-rapidapi-key': '5281bc05f8msha5ed8591347a3b7p1fbdbfjsnebd5159a0363',
		},
		Accept: 'application/json',
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));

	// return next();
};

wordsController.findDefinition();

export default wordsController;
