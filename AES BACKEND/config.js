/// variavles de entorno //
require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 8080,
  DB_USER: process.env.DB_USER || "reporteria",
  DB_PASSWD: process.env.DB_PASSWD || "jw3870rz30",
  DB_NAME: process.env.DB_NAME || "db_aes",
  DB_port: process.env.DB_PORT || 1433,
  DB_SERVER: process.env.DB_SERVER || "192.168.1.122"
  //"192.168.0.128"
};