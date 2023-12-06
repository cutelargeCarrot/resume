import React from 'react'
import './index.less'
import Avatar from './components/Avatar'
import BaseInfo from './components/BaseInfo'

export default function templateOne(){
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
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />} */}
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />} */}
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />} */}
            </div>
          </div>
          {/* 内容 */}
          <div styleName="center">
            {/* {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />} */}
            <div styleName="listData">
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />} */}
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />} */}
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />} */}
              {/* {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />} */}
            </div>
          </div>
        </div>
      </div>
    )
}