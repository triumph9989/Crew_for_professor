const Crew_1 = require('../models/crewModel1');
const Crew_2 = require('../models/crewModel2');
const Crew_3 = require('../models/crewModel3');
const Crew_4 = require('../models/crewModel4');
const team = require('../models/homeModel');

// CREATE
exports.createCrew1 = async (req, res) => {
    console.log('createCrew1', req.body);
    try {
        await Crew_1.create(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.createCrew2 = async (req, res) => {
    console.log('createCrew2', req.body);
    try {
        await Crew_2.create(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.createCrew3 = async (req, res) => {
    console.log('createCrew3', req.body);
    try {
        await Crew_3.create(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.createCrew4 = async (req, res) => {
    console.log('createCrew4', req.body);
    try {
        await Crew_4.create(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

//READ
exports.getShopOverview = async (req, res) => {
    let data = {};
    try {
        await Crew_1.fetchHomepage().then(([rows]) => {
            data.crew_1 = rows;
        });
        // res.json(data);
        res.render('The_crew', {
            title: 'Test',
            data: data.crew_1,
        });
    } catch (err) {
        console.log(err);
    }
};

// exports.getHomepage = async (req, res) => {
//     let data = {};
//     try {
//         res.render('The_crew', { title: 'Homepage' });
//     } catch (err) {
//         console.log(err);
//     }
// };

exports.getHomepage = async (req, res) => {
    let data = {};
    try {
        await team.fetchHomepage().then(([rows]) => {
            data.team = rows;
            // res.json(data);
            res.render('The_crew', {
                title: 'homepage',
                data: data.team
            });
        });
    }
    catch (err) {
        console.log(err);
    }
};

exports.getCrewByTeam = async (req, res) => {
    let data = {};
    data.tid = 0;
    console.log('req.params.team', req.params.team);
    try {


        if (req.params.team === 'A') {
            data.tid = 0;
            await Crew_1.fetchCrewByTeam(data.tid).then(([rows]) => {
                data.team1 = rows;
                // res.json(data);
                res.render('Team_page', {
                    title: req.params.team,
                    data: data.team1,
                });
            });
        }   //change
        else if (req.params.team === 'B') {
            data.tid = 1;
            await Crew_2.fetchCrewByTeam(data.tid).then(([rows]) => {
                data.team2 = rows;
                // res.json(data);
                res.render('Team_page', {
                    title: req.params.team,
                    data: data.team2,
                });
            });
        }   //change
        else if (req.params.team === 'C') {
            data.tid = 2;
            await Crew_3.fetchCrewByTeam(data.tid).then(([rows]) => {
                data.team3 = rows;
                // res.json(data);
                res.render('Team_page', {
                    title: req.params.team,
                    data: data.team3,
                });
            });
        }
        else if (req.params.team === 'D') {
            data.tid = 3;
            await Crew_4.fetchCrewByTeam(data.tid).then(([rows]) => {
                data.team4 = rows;
                // res.json(data);
                res.render('Team_page', {
                    title: req.params.team,
                    data: data.team4,
                });
            });
        }

    } catch (err) {
        console.log(err);
    }
};

//UPDATE
exports.updateCrew1 = async (req, res) => {
    console.log('updateCrew1', req.body);
    try {
        await Crew_1.updateById(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCrew2 = async (req, res) => {
    console.log('updateCrew2', req.body);
    try {
        await Crew_2.updateById(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCrew3 = async (req, res) => {
    console.log('updateCrew3', req.body);
    try {
        await Crew_3.updateById(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};
exports.updateCrew4 = async (req, res) => {
    console.log('updateCrew4', req.body);
    try {
        await Crew_4.updateById(req, res).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

//DELETE
//--------------Crew1------------------------
exports.delete1Crew1 = async (req, res) => {
    console.log('delete1Crew1', req.query.id);
    try {
        await Crew_1.deleteById(req.query.id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.delete2Crew1 = async (req, res) => {
    console.log('delete2Crew1', req.params.a_id);
    try {
        await Crew_1.deleteById(req.params.a_id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};
//--------------Crew2------------------------
exports.delete1Crew2 = async (req, res) => {
    console.log('delete1Crew2', req.query.id);
    try {
        await Crew_2.deleteById(req.query.id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.delete2Crew2 = async (req, res) => {
    console.log('delete2Crew2', req.params.b_id);
    try {
        await Crew_2.deleteById(req.params.b_id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};
//--------------Crew3------------------------
exports.delete1Crew3 = async (req, res) => {
    console.log('delete1Crew3', req.query.id);
    try {
        await Crew_3.deleteById(req.query.id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.delete2Crew3 = async (req, res) => {
    console.log('delete2Crew3', req.params.c_id);
    try {
        await Crew_3.deleteById(req.params.c_id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};
//--------------Crew4------------------------
exports.delete1Crew4 = async (req, res) => {
    console.log('delete1Crew4', req.query.id);
    try {
        await Crew_4.deleteById(req.query.id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};

exports.delete2Crew4 = async (req, res) => {
    console.log('delete2Crew4', req.params.d_id);
    try {
        await Crew_4.deleteById(req.params.d_id).then(([rows]) => {
            res.redirect('/crew');
        });
        // res.json(req.body);
    } catch (err) {
        console.log(err);
    }
};






