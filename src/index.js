<<<<<<< HEAD
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Disable context isolation
    }
  });

  // Load the index.html file
  win.loadFile(path.join(__dirname, 'views/index.html'));
}

// Ensure that the app object is defined before using it
if (app) {
  // Wait for the app to be ready before creating the window
  app.on('ready', createWindow);

  // Quit the app when all windows are closed (except on macOS)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
=======
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Disable context isolation
    }
  });

  // Load the index.html file
  win.loadFile(path.join(__dirname, 'views/index.html'));
}

// Ensure that the app object is defined before using it
if (app) {
  // Wait for the app to be ready before creating the window
  app.on('ready', createWindow);

  // Quit the app when all windows are closed (except on macOS)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
>>>>>>> 09a89df851a0aa9aaea4ac96a8a97e744e91a87e
