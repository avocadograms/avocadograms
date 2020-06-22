const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Global error handler
app.use((err, req, res, next) => {
	const defaultError = {
		log: "Express error handler caught unknown mmiddleware error",
		status: 400,
		message: { error: "An error occurred" },
	};
	const errorObj = { ...defaultError, err };
	res.status(errorObj.status).send(errorObj);
});

app.listen(port, () => {
	console.log(`Listening on port ${PORT}...`);
});
