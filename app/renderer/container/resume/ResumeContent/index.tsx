import React, { useEffect } from 'react'
import './index.less'
import { useSelector } from 'react-redux'
import { TemplateStore } from '@src/store/modules/templateStore'

export default function ResumeContent(){
    const template = useSelector<any>(state=>state.template) as TemplateStore
    return(
        <div styleName='content'>
            {template.resumeToolKeys}
        </div>
    )
}