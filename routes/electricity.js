var express = require('express');
var router = express.Router();

// electricity router - shows the electricity form to customer
router.get('/electricity', function(req, res){
    res.render('electricity');
});

// bill router - generate and show the bill to the customer
router.get('/bill', function(req, res){
    var bill = {}
    bill.units = parseInt(req.query.currentReading) - parseInt(req.query.prevReading)
    if(req.query.category == 'BPL'){
        bill.rate = 0
    } else if(req.query.category == 'General'){
        bill.rate = 7
    } else{
        bill.rate = 10
    }
    bill.amount = bill.rate * bill.units
    bill.gst = bill.amount * 18 / 100
    bill.netAmount = bill.amount + bill.gst
    res.render('bill',{customer: req.query, bill:bill})
});

module.exports = router;