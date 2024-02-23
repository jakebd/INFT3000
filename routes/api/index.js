var express = require('express');
var router = express.Router();
//var demoMiddleware = require('../../middlesware/demoMiddleware');

var usersRouter = require('./users');
//var songsRouter = require('./songs');

//var stocksRouter = require('./stocks');

router.use('/users', usersRouter); // /api/users
//router.use('/songs', songsRouter); // /api/songs
//router.use('/stocks', stocksRouter); // /api/stocks

//router.use(demoMiddleware);

router.get('/', (req, res) => { //api
    // res.send('Welcome to the API');
    
})

module.exports = router;