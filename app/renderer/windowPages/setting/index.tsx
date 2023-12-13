import React, { useEffect, useState } from 'react'
import './index.less'
import { ipcRenderer } from 'electron';
import { getAppPath } from '@src/common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
export default function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  // 👇 1. 引入 Hooks，进行读取文件内容和更新内容
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  // 👇 2. 在 didMount 周期时，读取配置文件内容
  useEffect(() => {
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      // 👇 2.1 如果存在默认路径，以此为主
      if (value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        // 👇 2.2 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          setResumeSavePath(`${appPath}resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
        });
      }
    });
  }, []);

  // 👇 3. 更改存储路径，发起 IPC 通信
  const onChangePath = () => {
    // 3.1 向主进程发送消息，因为 dialog 模块只能在主进程中调用
    ipcRenderer.send('open-save-resume-path', '');
    // 3.2 监听从主进程发送回来的消息
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if (arg) {
        // 3.3 设置最新存储路径，并更新文件内容
        if (arg.length > 0) {
          setResumeSavePath(arg[0]);
          updateGlobalConfigFile('resumeSavePath', arg[0]);
        }
      } else {
        console.log('自定义存储路径失败');
          }
        });
      };
    return (
        <div styleName="Setting">
            <p styleName="title">修改简历数据储存路径</p>
            <div styleName="form">
                <div styleName="form-input">{resumeSavePath || '当前存储路径为：'}</div>
                <div styleName="form-btn"onClick={()=>onChangePath()}>更改路径</div>
            </div>
        </div>
    )
}