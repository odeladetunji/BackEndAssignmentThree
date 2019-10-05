// Third Service (Api);
const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const path = require('path');app.use('*', cors());
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// requiring routes!
const add_money = require('./routes/add_money');
const remove_money = require('./routes/remove_money');

//express settings
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
//app.options(cors());
app.set('view engine', 'ejs');

//routes  // routes
app.use('/add_money', add_money);
app.use('/remove_money', remove_money);

server.listen(8011, function(){
    console.log("Second Api is now Running");
});

module.export = app;

