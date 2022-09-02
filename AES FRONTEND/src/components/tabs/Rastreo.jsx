import React, { useContext, useState, useEffect, Suspense } from "react";
import Tables from "../common/Table";
import { SocketContext } from '../../socket_context/socket';
import { columns } from "../ConstantesGlobales";
import { getRastreo } from "../../services/aes/aesServices";
import { useLocation } from 'react-router-dom';
import Loader from "../common/Loader";

function Rastreo() {
  const location = useLocation();
  const socket = useContext(SocketContext);
  const [sockets, setsocket] = useState([])

  const getPeticion = async (datos) => {
    try {
      const { data } = await getRastreo(datos);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  useEffect(() => {
    setInterval(() => {
      getPeticion({
        "data": true
      })
    }, 4000);

    socket.on("emitDB2", (data) => {
      setsocket(data)
    })
  }, [])
  console.log(sockets)

  const ordenarPorFecha = sockets.sort((a, b) => new Date(b.DATE_SENT) - new Date(a.DATE_SENT))
 /* 
 if (!ordenarPorFecha.length >= 0) {
    return <span>Aun no existen registros ...</span> 
  }*/
  return (
    <>
      <Tables rows={ordenarPorFecha} columns={columns} />
    </>
  );
}

export default Rastreo;
