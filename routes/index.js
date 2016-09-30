var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Lab4 Index',
        message: 'This is the Lab4 homepage'
    });
});

/* GET Ross page. */
router.get('/Ross', function (req, res, next) {
    res.render('ross', {
        title: 'Ross Keddy',
        message: 'My name is Ross Keddy, Currently a student at Georgian College in their Computer Programmer Analyst program, I am an Enthusiastic Programmer, a Structured Designer, and a professional stuff breaker.'
    });
});

/* GET Jen page. */
router.get('/jen', function (req, res, next) {
    res.render('jen', {
        title: 'Jeniffer Keddy',
        message: 'Single mother of two crazy kids.'
    });
});

/* GET Nick page. */
router.get('/nick', function (req, res, next) {
    res.render('nick', {
        title: 'Nicholas Keddy',
        message: 'An intellectually stimulating human being that always wears his MENSA badge.'
    });
});

module.exports = router;