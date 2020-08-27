var express = require('express');
var router = express.Router();

// electricity router - shows the electricity form to customer
router.get('/electricity', function(req, res){
    res.render('electricity');
})

module.exports = router;