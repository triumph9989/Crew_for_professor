const db = require('../utils/database');

const Crew_3 = class Crew_3 {
    constructor(c_id, tid, crew_name, car, crew_img, car_img, instruction, name) {
        this.c_id = c_id;
        this.tid = tid;
        this.crew_name = crew_name;
        this.car = car;
        this.crew_img = crew_img;
        this.car_img = car_img;
        this.instruction = instruction;
        this.name = name;
    }

    // CREATE have completed
    static create(req, res) {
        console.log('create', req.body);
        return db.execute(
            'INSERT INTO c (c_id, tid, crew_name, car, crew_img, car_img, instruction, name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                req.body.c_id,
                req.body.tid,
                req.body.crew_name,
                req.body.car,
                req.body.crew_img,
                req.body.car_img,
                req.body.instruction,
                req.body.name
            ]
        );
    }

    // Update have completed
    static updateById(req, res) {
        const c_id = req.body.c_id;
        const tid = req.body.tid;
        const crew_name = req.body.crew_name;
        const car = req.body.car;
        const crew_img = req.body.crew_img;
        const car_img = req.body.car_img;
        const instruction = req.body.instruction;
        const name = req.body.name;
        return db.execute(
            'UPDATE c SET crew_name = ?, tid = ? , car = ? , crew_img = ? , car_img = ?, instruction = ? , name = ? WHERE c_id = ?',
            [crew_name, tid, car, crew_img, car_img,instruction,name, c_id]
        );
    }
    // DELETE
    static deleteById(c_id) {
        return db.execute('DELETE FROM c WHERE c_id = ?', [c_id]);
    }
    // READ1 have completed
    static fetchHomepage() {
        return db.execute('select * from c where tid = 2');
    }
    // READ2
    static fetchCrewByTeam(tid) {
        return db.execute('select * from c where tid = ?', [tid]);
    }
};

// test
const testFetchHomepage = async (req, res) => {
    try {
        await Crew_3.fetchHomepage().then(([rows]) => {
            console.log('testFetchAll', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

const testFetchProductsByCategory = async (req, res) => {
    try {
        await Crew_3.fetchProductsByCategory(0).then(([rows]) => {
            console.log('testFetchProductsByCategory', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

// testFetchHomepage();

//testFetchProductsByCategory();

module.exports = Crew_3;
