const db = require('../utils/database');

const Crew_1 = class Crew_1 {
    constructor(a_id, tid, crew_name, car, crew_img, car_img, instruction, name) {
        this.a_id = a_id;
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
            'INSERT INTO a (a_id, tid, crew_name, car, crew_img, car_img, instruction, name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                req.body.a_id,
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
        const a_id = req.body.a_id;
        const tid = req.body.tid;
        const crew_name = req.body.crew_name;
        const car = req.body.car;
        const crew_img = req.body.crew_img;
        const car_img = req.body.car_img;
        const instruction = req.body.instruction;
        const name = req.body.name;
        return db.execute(
            'UPDATE a SET crew_name = ?, tid = ? , car = ? , crew_img = ? , car_img = ?, instruction = ? , name = ? WHERE a_id = ?',
            [crew_name, tid, car, crew_img, car_img,instruction,name, a_id]
        );
    }
    // DELETE
    static deleteById(a_id) {
        return db.execute('DELETE FROM a WHERE a_id = ?', [a_id]);
    }
    // READ1 have completed
    static fetchHomepage() {
        return db.execute('select * from a where tid = 0');
    }
    // READ2
    static fetchCrewByTeam(tid) {
        return db.execute('select * from a where tid = ?', [tid]);
    }
};

// test
const testFetchHomepage = async (req, res) => {
    try {
        await Crew_1.fetchHomepage().then(([rows]) => {
            console.log('testFetchAll', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

const testFetchProductsByCategory = async (req, res) => {
    try {
        await Crew_1.fetchProductsByCategory(0).then(([rows]) => {
            console.log('testFetchProductsByCategory', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

// testFetchHomepage();

//testFetchProductsByCategory();

module.exports = Crew_1;
