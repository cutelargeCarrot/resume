import React from 'react'
import './index.less'
import { useHistory } from 'react-router-dom';
import ROUTER from '@common/contants/router';
import MyButton from '@src/common/components/MyButton';

export default function ResumeAction(){
    const history = useHistory();
    const onBack = ()=> history.push(ROUTER.root)
    const onTools = ()=>{}
    const onExport = ()=>{}

    return(
        <div styleName='action'>
            <div styleName='action-middle'>
            <div styleName='action-btns'onClick={ onBack }>返回</div>
            <div styleName='action-btns'onClick={ onTools }>显示/隐藏工具条</div>
            </div>
            <MyButton styleName='export-btn' border onClick={ onExport }>导出PDF</MyButton>
        </div>
    )
}