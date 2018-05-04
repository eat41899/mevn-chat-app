const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');



mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (error) => {
	if(error){
		console.log('Could NOT connect to database: ', error);
	} else {
		console.log('Connected to database: ' + config.db);
	}
});
//connect to our vue project
app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
	//res.send('<h1>hello world</h1>');
	//connect to our vue project
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
	console.log('listening on port 8080');
});