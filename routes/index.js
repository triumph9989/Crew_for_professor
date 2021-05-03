var express = require('express');
var router = express.Router();
const crewController = require('../controllers/crewController');
// router.get('/', function (req, res, next) {
//     res.send('yes haha!! you got me, mother fuck~');
// });

router.get('/', function (req, res, next) {
    res.render('The_crew', { title: 'Express' });
});

router.get('/testload', crewController.getShopOverview);

module.exports = router;