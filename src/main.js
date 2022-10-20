// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
//Module to make comunication betwenn the main and renderer process
const {ipcMain} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  // mainWindow = new BrowserWindow({width: 800, height: 600, show: true})
  mainWindow = new BrowserWindow({width: 800,
    height: 600,
    show: false,
    backgroundColor: '#FFF'
  })
  secondWindow = new BrowserWindow({width: 400,
    height: 450,
    show: false,
    backgroundColor: '#FFF'
  })

  //load the html page
  mainWindow.loadFile('./src/index.html')
  secondWindow.loadFile('./src/input.html')

  //only show the windows when it is ready to show
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  secondWindow.on('ready-to-show', () => {
    secondWindow.show()
  })


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  // secondWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  secondWindow.on('closed', function () {
    mainWindow = null
    secondWindow = null
    app.quit()
  })
  mainWindow.on('closed', function() {
    mainWindow = null
    secondWindow = null
    app.quit()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipcMain.on('wordsync', (event, arg) => {
    // Return some data to the renderer process with the mainprocess-response ID
    mainWindow.webContents.send('word_bind', arg);
});
//receber o comando de correção
ipcMain.on('corrige', (event, arg) => {
    mainWindow.webContents.send('corrige', arg);
});
//resetar para entrar com uma nova palavra
ipcMain.on('reset', (event, arg) => {
    mainWindow.webContents.send('reset', arg);
});
