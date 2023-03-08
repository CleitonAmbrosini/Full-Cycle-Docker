const mysql = require('mysql');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const getNames = (callback) => {
    const connection = mysql.createConnection(config)
    connection.query(`SELECT name FROM people`, function (err, result) {
        if (err) throw err;
        const listOfNames = result.map((entry) => `<li>${entry.name}</li>`).join('\n');
        return callback(`
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${listOfNames}
            </ul>
        `);
    });
    connection.end;
};

exports.getNames = getNames;