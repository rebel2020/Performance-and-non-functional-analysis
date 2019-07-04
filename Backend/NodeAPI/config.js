const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/ptdb';
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 100000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 100000 } },
  useNewUrlParser: true
};
mongoose.connect(url, options);

const db = mongoose.connection;

db.on('error', err => {
	console.error('Error while connecting to DB: ${err.message}');
});
db.once('open',() => {
	console.log(`Connected to mongo at ${url}`);
}); 




