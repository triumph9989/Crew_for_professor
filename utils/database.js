const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'crew_db'
});


// const pool = mysql.createPool({
//   host: 'crewmysql.mysql.database.azure.com',
//   user: 'triumph9989@crewmysql',
//   password: 'Jj25361002',
//   database: 'crew_db',
// });
// test
pool.query('select * from crew_db', (err, results) => {
  console.log(JSON.stringify(results));
  console.log('database connection successful');
});

module.exports = pool.promise();
