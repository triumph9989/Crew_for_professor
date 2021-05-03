var express = require('express');
var router = express.Router();
const crewController = require('../controllers/crewController');

// router.get('/crew', function (req, res, next) {
//     res.render('crew', { title: 'Express' });
// });

//CREAT
router.post('/create1', crewController.createCrew1);
router.post('/create2', crewController.createCrew2);
router.post('/create3', crewController.createCrew3);
router.post('/create4', crewController.createCrew4);

//READ
router.get('/', crewController.getHomepage);
router.get('/:team', crewController.getCrewByTeam); //記得多一個"/crew"

//UPDATE
router.post('/update1', crewController.updateCrew1);
router.post('/update2', crewController.updateCrew2);
router.post('/update3', crewController.updateCrew3);
router.post('/update4', crewController.updateCrew4);

//DELETE
router.get('/delete1/:a_id', crewController.delete2Crew1);
// router.get('/delete1', crewController.delete1Crew1);

router.get('/delete2/:b_id', crewController.delete2Crew2);
// router.get('/delete2', crewController.delete1Crew2);

router.get('/delete3/:c_id', crewController.delete2Crew3);
// router.get('/delete3', crewController.delete1Crew3);

router.get('/delete4/:d_id', crewController.delete2Crew4);
// router.get('/delete3', crewController.delete1Crew3);

module.exports = router;