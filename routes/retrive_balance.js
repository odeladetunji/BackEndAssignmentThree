// Retriving Balance!

const express = require('express');
const router = express.Router();
require('body-parser');
const mongo = require('mongodb');

router.get('/', function(req, res){
    let lastRecord = null;
    let balance = null;
    let mongooseUrl = 'mongodb://127.0.0.1:27017/wallet';
    mongo.connect(mongooseUrl, function(err, db){
        if(err) throw err;
        lastRecord = db.collection('wallet').find({title: 'wallet'}).sort({_id: 1}).limit(1);
        lastRecord.forEach(function(doc, err){
            if(err) throw err;
            console.log(doc);
            balance = doc.amount;
        });
        
        db.close();
    });
    
    res.send(balance);
});

module.exports = router;