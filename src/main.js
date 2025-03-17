// main.js - Electron Main Process
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

// Example of handling the 'get-security-status' request from renderer
ipcMain.handle('get-security-status', async () => {
    // Simulate fetching security status and threat count
    return { status: "Secure", threats: 0 };
});

// Function to create the main window
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Ensure `preload.js` properly bridges IPC
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Ensure IPC uses secure validation before sending data
ipcMain.handle('get-security-status', async () => {
    return { status: "Secure", threats: 0 }; // This should be validated if coming from an external source
});

// Start the app when ready
app.on('ready', createMainWindow);

// Handle macOS app behavior properly
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

// Close the app properly on non-macOS systems
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
