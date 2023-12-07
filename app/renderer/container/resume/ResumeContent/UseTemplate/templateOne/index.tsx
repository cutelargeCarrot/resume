import React from 'react'
import './index.less'
import Avatar from './components/Avatar'
import BaseInfo from './components/BaseInfo'
import { useSelector } from 'react-redux'
import { ResumeStore } from '@src/store/modules/resumeStore'
import { RESUME_TOOL_MAPS } from '@src/common/contants/resume'
import Contact from './components/Contact'
import Job from './components/Job'
import Certificate from './components/Certificate'
import Synopsis from './components/Synopsis'
import Skill from './components/Skill'
import Post from './components/Post'
import Project from './components/Project'
import Work from './components/Work'

export default function templateOne(){
  const { resume:{resume_form:{personal},resume_tool_keys} } = useSelector<any>(state => state.resume) as ResumeStore
    return (
        <div styleName="a4-box">
        <div styleName="flex container" id="visPdf">
          {/* 左侧 */}
          <div styleName="left">
            <div styleName="avatar">
              <Avatar />
            </div>
            <div styleName="fillColor" />
            <div styleName="baseData">
              <BaseInfo />
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.contact) && <Contact />}
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.workPrefer) && <Job />}
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.certificate) && <Certificate />}
            </div>
          </div>
          {/* 内容 */}
          <div styleName="center">
            {(resume_tool_keys.includes(RESUME_TOOL_MAPS.evaluation) || personal?.username) && <Synopsis />}
            <div styleName="listData">
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.skill) && <Skill />}
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.schoolExperience) && <Post />}
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.projectExperience) && <Project />}
              {resume_tool_keys.includes(RESUME_TOOL_MAPS.workExperience) && <Work />}
            </div>
          </div>
        </div>
      </div>
    )
}