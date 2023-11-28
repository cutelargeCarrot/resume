// 获取项目的绝对路径
import {ipcRenderer} from 'electron'

export function getAppPath(){
    return new Promise(
        (resolve:(value:string)=>void,reject:(value:Error)=>void) => {
            ipcRenderer.send('get-root-path','');
            ipcRenderer.on('reply-root-path',(event,arg:string)=>{
                arg ? resolve(arg) : reject(new Error('project path error'))
            })
        }
    )
}