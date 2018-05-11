'use strict';
const User = require('../models/user');

module.exports = function (app) {
    var userList =require('../controllers/userListController');


    app.route('/register')
        .get(userList.list_all_users)          .post(userList.create_a_user);


    app.route('user/:userId')
        .get(userList.read_a_user);

};