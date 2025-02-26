import { join, resolve } from 'path';
import { BrowserWindow, app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';

const height = 380;
const width = 800;

function createWindow() {
  const window = new BrowserWindow({
    width,
    height,
    frame: false,
    show: true,
    resizable: false,
    alwaysOnTop: true,
    transparent: true,
    fullscreenable: true,
    icon: isDev ? resolve(__dirname, '../', 'resources', 'icon.ico') : resolve('../', '../', 'resources', 'icon.ico'),

    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });
  const port = 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../dist-vite/index.html');
  window.webContents.openDevTools();
  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }
  ipcMain.on('minimize', () => (window.isMinimized() ? window.restore() : window.minimize()));
  ipcMain.on('maximize', () => (window.isMaximized() ? window.restore() : window.maximize()));

  ipcMain.on('close', () => window.close());
}

app.whenReady().then(createWindow);
