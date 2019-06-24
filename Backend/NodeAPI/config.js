const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/ptdb';
mongoose.connect(url, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', err => {
	console.error('Error while connecting to DB: ${err.message}');
});
db.once('open',() => {
	console.log(`Connected to mongo at ${url}`);
});
