// Getting Transaction History Api
const express = require('express');
const router = express.Router();
require('body-parser');
const mongo = require('mongodb');

router.get('/', function(req, res){
    let lastRecord = null;
    let transactionHistory = [];
    let mongooseUrl = 'mongodb://127.0.0.1:27017/wallet';

    mongo.connect(mongooseUrl, function(err, db){
        if(err) throw err;
        lastRecord = db.collection('wallet').find({title: 'wallet'}).sort({_id: -1});
        lastRecord.forEach(function(doc, err){
            if(err) throw err;
            console.log(doc);
                transactionHistory.push(doc);
            db.close();
        });
    });
    
    // using this method since data is small
    setTimeout(() => {
        res.json({
            'Transaction History': transactionHistory
        });
    }, 20)
});

module.exports = router;