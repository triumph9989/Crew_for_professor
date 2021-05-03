const db = require('../utils/database');

const team = class team {
    constructor(tid, name, country, badge, introduction) {
        this.tid = tid;
        this.name = name;
        this.country = country;
        this.badge = badge;
        this.introduction = introduction;
    }

    // CREATE have completed
    // static create(req, res) {
    //     console.log('create', req.body);
    //     return db.execute(
    //         'INSERT INTO b (b_id, tid, crew_name, car, crew_img, car_img) VALUES (?, ?, ?, ?, ?, ?)',
    //         [
    //             req.body.b_id,
    //             req.body.tid,
    //             req.body.crew_name,
    //             req.body.car,
    //             req.body.crew_img,
    //             req.body.car_img,
    //         ]
    //     );
    // }

    // Update have completed
    // static updateById(req, res) {
    //     const b_id = req.body.b_id;
    //     const tid = req.body.tid;
    //     const crew_name = req.body.crew_name;
    //     const car = req.body.car;
    //     const crew_img = req.body.crew_img;
    //     const car_img = req.body.car_img;
    //     return db.execute(
    //         'UPDATE b SET crew_name = ?, tid = ? , car = ? , crew_img = ? , car_img = ? WHERE b_id = ?',
    //         [crew_name, tid, car, crew_img, car_img, b_id]
    //     );
    // }
    // DELETE
    // static deleteById(b_id) {
    //     return db.execute('DELETE FROM b WHERE b_id = ?', [b_id]);
    // }
    // READ1 have completed
    static fetchHomepage() {
        return db.execute('select * from team ');
    }
    // READ2
    // static fetchCrewByTeam(tid) {
    //     return db.execute('select * from b where tid = ?', [tid]);
    // }
};

// test
const testFetchHomepage = async (req, res) => {
    try {
        await team.fetchHomepage().then(([rows]) => {
            console.log('testFetchAll', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

// const testFetchProductsByCategory = async (req, res) => {
//     try {
//         await Crew_2.fetchProductsByCategory(0).then(([rows]) => {
//             console.log('testFetchProductsByCategory', JSON.stringify(rows));
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

testFetchHomepage();

//testFetchProductsByCategory();

module.exports = team;
