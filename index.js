const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
//const cors = require('cors');

const authentication = require('./routes/authentication')(router);
const User = require('./models/user');
//const routes = require('./routes/userListRoutes')



mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (error) => {
	if(error){
		console.log('Could NOT connect to database: ', error);
	} else {
		console.log('Connected to database: ' + config.db);
	}
});
//app.use(cors({ origin: 'http://localhost:4545/home' }));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application json
app.use(bodyParser.json());


//connect to our vue project
//app.use(express.static(__dirname + '/client/dist/'));
////authentication
app.use('/authentication', authentication);
//
//app.get('*', (req, res) => {
//	//res.send('<h1>hello world</h1>');
//	//connect to our vue project
//	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
//});

//authentication(app);
//routes(app);

app.listen(8080, () => {
	console.log('listening on port 8080');
});