import React, { useEffect, useState } from 'react'
import './index.less'
import { useSelector } from 'react-redux'
import Messager,{ MESSAGE_EVENT_NAME_MAPS } from '@src/common/messager'
import { ResumeStore } from '@src/store/modules/resumeStore'
import * as UseTemplateList from './UseTemplate';
import RESUME_TOOLS_LIST, { RESUME_TOOL_MAPS } from '@src/common/contants/resume'
import Skill from './UseForms/Skill'
import Contact from './UseForms/Contact'
import Certificate from './UseForms/Certificate'
import Education from './UseForms/Education'
import Evaluation from './UseForms/Evaluation'
import WorkExperience from './UseForms/WorkExperience'
import Work from './UseForms/Work'
import ProjectExperience from './UseForms/ProjectExperience'
import SchoolExperience from './UseForms/SchoolExperience'
import Personal from './UseForms/Personal'

export default function ResumeContent(){
    const {resume} = useSelector<any>(state=>state.resume) as ResumeStore
    
    const [formName, setFormName] = useState('');
    const [showFormModal, setShowFormModal] = useState(false);
    useEffect(()=>{
        document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,onReceive)
        return()=>document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,onReceive)
    },[]);

    // 订阅传参
    const onReceive = (e:any) => {
        Messager.receive(e,(data:any)=>{
            setShowFormModal(true)
            setFormName(data?.form_name)
        })
    }

    const onClose = ()=>{
        setShowFormModal(false)
        setFormName('')
    }
    return(
        <div styleName='content'>
             <UseTemplateList.TemplateOne />
            {showFormModal && <React.Fragment>
                {formName === RESUME_TOOL_MAPS.personal && <Personal onClose={onClose}></Personal>}
                {formName === RESUME_TOOL_MAPS.skill && <Skill onClose={onClose}></Skill>}
                {formName === RESUME_TOOL_MAPS.contact && <Contact onClose={onClose}></Contact>}
                {formName === RESUME_TOOL_MAPS.certificate && <Certificate onClose={onClose}></Certificate>}
                {formName === RESUME_TOOL_MAPS.education && <Education onClose={onClose}></Education>}
                {formName === RESUME_TOOL_MAPS.evaluation && <Evaluation onClose={onClose}></Evaluation>}
                {formName === RESUME_TOOL_MAPS.workPrefer && <Work onClose={onClose}></Work>}
                {formName === RESUME_TOOL_MAPS.projectExperience && <ProjectExperience onClose={onClose}></ProjectExperience>}
                {formName === RESUME_TOOL_MAPS.schoolExperience && <SchoolExperience onClose={onClose}></SchoolExperience>}
                {formName === RESUME_TOOL_MAPS.workExperience && <WorkExperience onClose={onClose}></WorkExperience>}

            </React.Fragment>}
        </div>
    )
}