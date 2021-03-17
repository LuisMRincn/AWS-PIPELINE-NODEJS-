const mysql = require('mysql');
const { promisify } = require("util");
const db = mysql.createConnection({

    host: 'bt8tqrruri4csafr0erl-mysql.services.clever-cloud.com',
    user: 'upgrnmzd3nq4ov4l',
    port: 3306,
    password: 'ZAiLYjS0P4ljkFhhSrjY',
    database: 'bt8tqrruri4csafr0erl'

})

const pool = mysql.createPool(db);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error / "DATABASE CONNECTION WAS CLOSED";
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error / "DATABASE HAS TOO MANY CONNECTIONS";
    }
    if (err.code === "ECONNREFUSED") {
      console.error / "DATABASE CONNECTION WAS REFUSED";
    }
  }

  if (connection) connection.release();
  console.log("Base de datos conectada");
});

pool.query = promisify(pool.query);
module.exports = db;