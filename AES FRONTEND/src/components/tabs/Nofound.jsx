import React, { useEffect } from 'react'
import { green, red, orange, yellow } from '@mui/material/colors';

import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import SignalCellular2BarIcon from '@mui/icons-material/SignalCellular2Bar';
import SignalCellular3BarIcon from '@mui/icons-material/SignalCellular3Bar';
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';
import { DotLoader } from "react-spinners";
import Chip from '@mui/material/Chip'
function Nofound() {
    return (
        <>
            <div style={{ margin: '10px', fontSize: '50px', textAlign: 'center' }}>
                Pagina no encontrada
            </div>
        
            <p><a href='/'>volver al inicio</a></p>
            
        </>
    )
}
export default Nofound
