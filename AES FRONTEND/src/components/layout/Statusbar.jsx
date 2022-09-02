import React, { useContext, useState, useEffect } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Offline, Online } from "react-detect-offline";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import PublicIcon from '@mui/icons-material/Public';
import DnsIcon from '@mui/icons-material/Dns';
import Tooltip from '@mui/material/Tooltip';
import { SocketContext } from "../../socket_context/socket";
export default function Statusbar() {
  const socket = useContext(SocketContext);
  const [isConnected, setIsConnected] = useState(socket.connected);
  console.log("data", socket);
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });
  }, []);
  return (
    <div style={{ marginBottom: '19px' }}>
      <Paper sx={{ height: 38, position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
        <BottomNavigation
          sx={{ bgcolor: "#263743", padding: '5px' }}
          showLabels
        >
          <Online><Tooltip title="Internet Online" placement="top"><BottomNavigationAction sx={{ display: 'inline', }} icon={<PublicIcon color="success" />} />
          </Tooltip></Online>
          <Offline><Tooltip title="Internet Offline" placement="top"><BottomNavigationAction sx={{ display: 'inline', }} icon={<PublicIcon color="error" />} />
          </Tooltip></Offline>
          {isConnected ?
            <><Tooltip title="Socket Online" placement="top"><BottomNavigationAction sx={{ display: 'inline', }} icon={<DnsIcon color="success" />} />
            </Tooltip></>
            : <><Tooltip title="Socket Offline" placement="top"><BottomNavigationAction sx={{ display: 'inline', }} icon={<DnsIcon color='error' sx={{}} />} /></Tooltip></>
          }



        </BottomNavigation>
      </Paper>

    </div>
  )
}

