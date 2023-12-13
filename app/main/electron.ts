/**
 * @desc electron 主入口
 */
 import path from 'path';
 import { app, BrowserWindow, dialog, ipcMain } from 'electron';

 //  app 模块获取项目路径，通过 ipcMain 回复渲染进程
 const ROOT_PATH = path.join(app.getAppPath(),'../') 
 ipcMain.on('get-root-path',(event,arg)=>{
  event.reply('reply-root-path',ROOT_PATH)
 })

 // 保存路径
 ipcMain.on('open-save-resume-path',(event,arg)=>{
  dialog.showOpenDialog({ properties:['openDirectory'] })
  .then(result=>{
    event.reply('reply-save-resume-path',result.filePaths)
  })
  .catch(err=>{
    event.reply('reply-save-resume-path',err)
  })
 })

 function isDev() {
   // 配置中通过 webpack.DefinePlugin 定义的构建变量吗
   return process.env.NODE_ENV === 'development';
 }
 
 function createWindow() {
   // 创建浏览器窗口
   const mainWindow = new BrowserWindow({
     width: 1200,
     height: 800,
     webPreferences: {
       devTools: true,
       nodeIntegration: true,
     },
   });

   const settingWindow = new BrowserWindow({
    width: 720,
    height: 300,
    resizable:false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
 
   if (isDev()) {
     // 开发环境下，我们加载的是运行在 7001 端口的 React
     mainWindow.loadURL(`http://127.0.0.1:7001/index.html`);
     settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
   } else {
     mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
     settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);

   }
 }
 
 app.whenReady().then(() => {
   createWindow();
   app.on('activate', function () {
     if (BrowserWindow.getAllWindows().length === 0) createWindow();
   });
 });
 