// Third Service (Api);
const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const path = require('path');app.use('*', cors());
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// requiring routes!
const retriveBalance = require('./routes/retrive_balance');
const transactionHistory = require('./routes/show_transaction_history');

const whitelist = ['http://localhost:8025', 'http://127.0.0.1:8025' ]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

//express settings
app.use(cors(corsOptions));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

//routes  // routes
app.use('/retriveBalance', retriveBalance);
app.use('/transactionHistory', transactionHistory);

server.listen(8011, function(){
    console.log("BetaService1 microservice is now running");
});

module.export = app;

