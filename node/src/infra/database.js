const mysql = require('mysql');
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const createTable = () => {
  const connection = mysql.createConnection(config);
  connection.query('create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id))');
  connection.end;
}

const insertName = (name) => {
  const connection = mysql.createConnection(config);
  connection.query(`INSERT INTO people(name) values('${name}')`);
  connection.end;
}


exports.createTable = createTable;
exports.insertName = insertName;