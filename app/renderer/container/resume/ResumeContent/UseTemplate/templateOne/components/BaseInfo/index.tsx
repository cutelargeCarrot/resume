import { ResumeStore } from '@src/store/modules/resumeStore';
import React from 'react'
import { useSelector } from 'react-redux';
import '../index.less'
import { RESUME_TOOL_MAPS } from '@src/common/contants/resume';

export default function BaseInfo() {
  const { resume:{resume_form:{personal},resume_tool_keys} } = useSelector<any>(state => state.resume) as ResumeStore
  
    return (
      <div styleName="container">
        <p styleName="title">基本信息 Basic</p>
        <ul styleName="content">
          {personal?.area && <li>地区：{personal?.area}</li>}
          { resume_tool_keys.includes(RESUME_TOOL_MAPS.education) && personal?.school && <li>院校：{personal?.school}</li>}
          { resume_tool_keys.includes(RESUME_TOOL_MAPS.education) && personal?.major && <li>专业：{personal?.major}</li>}
          { resume_tool_keys.includes(RESUME_TOOL_MAPS.education) && personal?.degree && <li>学历：{personal?.degree}</li>}
          { resume_tool_keys.includes(RESUME_TOOL_MAPS.education) && personal?.onSchoolTime && personal?.onSchoolTime?.beginTime && personal?.onSchoolTime?.endTime && (
            <li>
              学年：{personal?.onSchoolTime?.beginTime} - {personal?.onSchoolTime?.endTime}
            </li>
          )}
          {personal?.hometown && <li>籍贯：{personal?.hometown}</li>}
          {personal?.political && <li>政治面貌：{personal?.political}</li>}
        </ul>
      </div>
    );
  }