const { consultaPorQuery, consultasDePrecedimientos } = require("../controllers/aes.controllers");
const log = console.log.bind(console);
module.exports = (io,app) => {
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
           /* Unirse al socket  */
        socket.join("websocket");
        /* Peticiones para abrir sockets */

        app.post("/todos", async (req, res) => {
            let response1 = await consultasDePrecedimientos(1);
            console.log("req", req.body);
            if (req.body.data)
                io.to("websocket").emit("emitDB1", response1[0])
                //console.log("funciona",response1)
            res.send();
        });
        app.post("/rastreo", async (req, res) => {
            let response2 = await consultasDePrecedimientos(2);
            if (req.body.data)
                io.to("websocket").emit("emitDB2", response2[0])
            res.send();
        });
        app.post("/reportes", async (req, res) => {
            let response3 = await consultasDePrecedimientos(3);
            if (req.body.data)
                io.to("websocket").emit("emitDB3", response3[0])
            res.send();
        });

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
