const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'assessment-7fa286a-elderly-assessment-tool5542.b.aivencloud.com',
    user: 'avnadmin', 
    port: 13117,
    password: 'AVNS_x_6V60uwXfjoRYPYhOq',
    database: 'defaultdb'
});

module.exports = conn;
