import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Nofound from "../components/tabs/Nofound";
import Rastreo from "../components/tabs/Rastreo";
import Reportes from "../components/tabs/Reportes";
import Todos from "../components/tabs/Todos";
import Mapa from "../components/common/Mapa";
import { socket, SocketContext } from '../socket_context/socket'
function Rutas() {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Todos />} />
            <Route path="Rastreo" element={<Rastreo/>}/>
            <Route index path="Reportes" element={<Reportes />} />
            <Route path="Mapa" element={<Mapa />} />
            <Route path="*" element={<Nofound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default Rutas;
