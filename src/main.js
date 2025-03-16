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
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // this will close the application when the main window is closed
    mainWindow.on('closed', () =>{
        mainWindow = null;
    })

}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
