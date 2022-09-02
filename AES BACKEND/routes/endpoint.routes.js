const { consultaPorQuery, consultasDePrecedimientos } = require("../controllers/aes.controllers");
const log = console.log.bind(console);
module.exports = (io, app) => {
    io.on("connection", function (socket) {
        log("Nuevo cliente conectado");

        /* Ejecuncion inicializa Sockets */
        /* 
               const emitDB1 = async (num_query) => {
                   let response = await consultasDePrecedimientos(num_query)
                   socket.emit("emitDB1", response[0])
               }
               emitDB1(1)
             */
        /*
           const emitDB2 = async (num_query) => {
               let response = await consultasDePrecedimientos(num_query)
               socket.emit("emitDB2", response[0])
           }
           emitDB2(2)
           
           const emitDB3 = async (num_query) => {
               let response = await consultasDePrecedimientos(num_query)
               socket.emit("emitDB3", response[0])
           }
           emitDB3(3)
          */
        app.post("/codigosbyid", async (req, res) => {
            const datos = req.body.data
            const response4 = await consultasDePrecedimientos(4, datos)
            //console.log(response4)
            res.json(response4);
        })
        
        socket.on("disconnect", (reason) => {
            console.log("Desconnected : ", reason);
            //socket.disconnect();
            console.log(
                "Connected :",
                io.sockets.server.httpServer._connections
            );
        });
    });

}