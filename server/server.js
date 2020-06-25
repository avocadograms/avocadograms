const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
//const cors = require('cors');

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('socket is connected!');
	console.log('socket.id is: ', socket.id);
});

const router = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(cors());

app.use(express.static(path.resolve(__dirname, '/client/assets')));

// app.all('/', (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
// });

app.use('/', router);

app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
	const defaultError = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { error: `An error occurred, ${err}` },
	};
	const errorObj = { ...defaultError, err };
	res.status(errorObj.status).send(errorObj);
});
