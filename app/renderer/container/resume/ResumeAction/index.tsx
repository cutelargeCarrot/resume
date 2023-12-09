import React from 'react'
import './index.less'
import { useHistory } from 'react-router-dom';
import ROUTER from '@common/contants/router';
import MyButton from '@src/common/components/MyButton';
import { toPrintPdf } from '@src/common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import { ResumeStore } from '@src/store/modules/resumeStore';

export default function ResumeAction(){
  const { resume:{resume_form:{personal,workPrefer}} } = useSelector<any>(state => state.resume) as ResumeStore

    const history = useHistory();
    const onBack = ()=> history.push(ROUTER.root)
    const onTools = ()=>{}
    const onExport = ()=>{
        let name = ''
        if(personal.username && personal.school && workPrefer.job)name = `${personal?.username }-${personal.school}-${workPrefer.job}`
        else name = `${personal?.username}-${Date.now()}`
        toPrintPdf(name)
    }

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