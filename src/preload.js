// preload.js - Secure Preload Script
const { contextBridge, ipcRenderer } = require('electron');

// Define allowed IPC channels for security
const validChannels = ['get-security-status', 'update-threats', 'network-traffic'];

contextBridge.exposeInMainWorld('electronAPI', {
    // Send data to the main process (only for allowed channels)
    send: (channel, data) => {
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    // Receive data from the main process and prevent memory leaks
    receive: (channel, func) => {
        if (validChannels.includes(channel)) {
            const subscription = (event, ...args) => func(...args);
            ipcRenderer.on(channel, subscription);
            // Return a function to remove the listener when no longer needed
            return () => ipcRenderer.removeListener(channel, subscription);
        }
    },
    // Get security status from the main process (example)
    getSecurityStatus: () => ipcRenderer.invoke('get-security-status')
});

