import React from 'react'
import './index.less'
import { useHistory } from 'react-router';
import {ROUTER_KEY, ROUTER_ENTRY} from '@common/contants/router'
import { shell } from 'electron'
import {isHttpOrHttpsUrl} from '@common/utils/router'
//
import fileAction from '@common/utils/file'
import { getAppPath } from '@common/utils/appPath'


export default function Root(){

    // getAppPath().then((rootPath:string) => {
    //     console.log(rootPath)
    //     fileAction
    //     .read(`${rootPath}app/renderer/container/resume/index.tsx`,'utf8')
    //     .then((data)=>{console.log(data)})
    // })

    const history = useHistory()
    const onRouterToLink = (router:TSRouter.Item):void=>{
        if(isHttpOrHttpsUrl(router.url)){
            shell.openExternal(router.url)
        } else {
            history.push(router.url)
        }
    }
    return (
        <div styleName='root'>
            <div styleName='action'>
                {
                    ROUTER_ENTRY.map((router:TSRouter.Item,index)=>{
                        return (<div key={index} styleName='item' onClick={()=>onRouterToLink(router)}> {router.text} </div>)
                    })
                }
            </div>
        </div>
    )
}