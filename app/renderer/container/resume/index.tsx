import React from 'react'
import './index.less'
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeTools from './ResumeTools';


export default function Resume(){
    return(
        <div styleName='resume'>
            <div styleName='tools'>
            <ResumeTools/>
            </div>
            <div styleName='body'>
                <div styleName='action'>
                <ResumeAction/>
                </div>
                <div styleName='content'>
                <ResumeContent/>
                </div>
            </div>
           
        </div>
    )
}