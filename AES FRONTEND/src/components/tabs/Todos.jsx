import React, { useEffect, useState, useContext, Suspense } from "react";
import { SocketContext } from "../../socket_context/socket";
import Tables from "../common/Table";
import { columns } from "../ConstantesGlobales";
import { getTodos } from "../../services/aes/aesServices";
import Loader from "../common/Loader";

function Todos() {
  const socket = useContext(SocketContext);
  const [sockets, setsockets] = useState([])

  const getPeticion = async (datos) => {
    try {
      const { data } = await getTodos(datos);
      //console.log(data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  useEffect(() => {
    getPeticion({
      "data": true
    })
    socket.on("emitDB1", (data) => {
      setsockets(data)
    })

    
  }, [])
  console.log(sockets)
  /*const [pruebita, setpruebita] = useState([])
  
  const getCodigos = async (ID) => {
    try {
      const data4 = await getData4(ID);
      console.log("data", data4?.data[0]?.map(x => x?.aa_reply));
      setpruebita(data4)
      return data4;
    } catch (error) {
      console.log(error);
    }
  };

  
  function prueba(row) {
    getCodigos({ "data": row.LC })
  }
*/

  const data = sockets.sort((a, b) => new Date(b.DATE_SENT) - new Date(a.DATE_SENT))
  if (!data.length > 0) {
    return <Loader />
  }
  return (
    <div>
      <Tables rows={data} columns={columns} onchildClick={(row) => prueba(row)} />
    </div>
  )
}
export default Todos;
