import React, { useContext, useEffect, useState } from 'react'
import Tables from '../common/Table'
import { SocketContext } from '../../socket_context/socket';
import { columns2 } from '../ConstantesGlobales';
import { getReportes, getAesById } from '../../services/aes/aesServices';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Loader from "../common/Loader";

function Reportes() {
  const socket = useContext(SocketContext);
  const [sockets, setSocket] = useState([])
  const [codigos, setCodigos] = useState([])

  const getPeticion = async (data) => {
    try {
      await getReportes(data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const getCodigosByAes = async (id) => {
    try {
      const data = await getAesById(id);
      setCodigos(data.data[0])
      console.log(data.data[0]);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeticion({ "data": true })
    socket.on("emitDB3", (data) => { setSocket(data) })
  }, [])

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (!sockets.length > 0) {
    return <Loader />
  }

  return (
    <>
      <Tables handleClickOpen={handleClickOpen} rows={sockets} columns={columns2} onchildClick={(row) => getCodigosByAes({ "data": row.LC })} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Codigos De Respuesta por AES."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List sx={{ pt: 0 }}>
              {codigos.map((email, index) => (
                <ListItem key={index}>
                  <ListItemText primary={email.aa_reply} />
                </ListItem>
              ))}
            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Reportes;
