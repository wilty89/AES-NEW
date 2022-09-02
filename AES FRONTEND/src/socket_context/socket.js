import React from 'react';
import io from "socket.io-client";
import { apiUrl } from '../services/config';

const ENDPOINT = apiUrl
export const socket = io(ENDPOINT, {
    //transports: ['websocket'],
    //reconnect: true,
    //forceNew: true,
    //reconnectionAttempts: 20,
    //reconnectionDelay: 5000
});
export const SocketContext = React.createContext();