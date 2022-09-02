//// Querys que van a consultar a la base de datos mediante el Driver de conexion //////
module.exports = {
  tb_actividad_AES: "SELECT TOP (10) [aa_id],[aa_DTSent],[aa_Strength],[aa_reply],[aa_fecha],[aa_DTRecv],[aa_cantidad],[aa_loc],[aa_location],[aa_maquina],[aa_tipo_aes],[aa_estado],[aa_lat_long]FROM [db_aes].[dbo].[tb_actividad_AES ] ",
};
