//// Importacion de Conecion Database 
const { getconection } = require("../Database/connection");
/* Importacion de los querys o Procedimiento */
const sql = require("mssql");
const querys = require("../Database/querys");
const { usp_consultaAesWeb } = require("../Database/procedimientos");

const consultaPorQuery = async () => {
  const pool = await getconection();
  const request = await pool.request().query(querys.tb_actividad_AES);
  return request.recordsets;
};

const consultasDePrecedimientos = async function (num_query, LC) {
  try {
    const pool = await getconection();
    const request = await pool.request()
      .input('num_query', sql.Int, num_query)
      .input('LOC', sql.VarChar, LC)
      .input('cod_tipo_aes', sql.Int, 1)
      .execute(usp_consultaAesWeb)
    return request.recordsets;
  } catch (error) {
    console.log("Error Controller",error);
  }
}

module.exports = {
  consultaPorQuery,
  consultasDePrecedimientos,
};