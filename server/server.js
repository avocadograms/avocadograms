<<<<<<< HEAD
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./routes/routes");
=======
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

>>>>>>> c06453e37b2463bf650618ca841abec7eda9a8f0
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

<<<<<<< HEAD
app.use('/', router)

app.get("/", (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
=======
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
>>>>>>> c06453e37b2463bf650618ca841abec7eda9a8f0
});

// Global error handler
app.use((err, req, res, next) => {
<<<<<<< HEAD
	const defaultError = {
		log: "Express error handler caught unknown middleware error",
		status: 400,
		message: { error: "An error occurred" },
	};
	const errorObj = { ...defaultError, err };
	res.status(errorObj.status).send(errorObj);
=======
  const defaultError = {
    log: 'Express error handler caught unknown mmiddleware error',
    status: 400,
    message: { error: 'An error occurred' },
  };
  const errorObj = { ...defaultError, err };
  res.status(errorObj.status).send(errorObj);
>>>>>>> c06453e37b2463bf650618ca841abec7eda9a8f0
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
