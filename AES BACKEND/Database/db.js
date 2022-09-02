
/* configuriones de base de datos */

const config = require("../config");
const configDB = {
  user: config.DB_USER,
  password: config.DB_PASSWD,
  server: config.DB_SERVER,
  database: config.DB_NAME,
  requestTimeout: 300000,
  options: {
    instancename: "SQLEXPRESS",
    trustServerCertificate: true,
    encrypt: false,
  },
  pool: {
    max: 2000,
    min: 0,
    idleTimeoutMillis: 130000
  }
};

module.exports = configDB;

