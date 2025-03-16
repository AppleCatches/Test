// preload.js - Secure Preload Script
const { contextBridge, ipcRenderer } = require('electron');

// Expose safe API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    // Send data to the main process
    send: (channel, data) => ipcRenderer.send(channel, data),
    // Receive data from the main process
    receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
    // Get security status from the main process (example)
    getSecurityStatus: () => ipcRenderer.invoke('get-security-status')
    }
);
