import { ResumeStore } from '@src/store/modules/resumeStore';
import React from 'react'
import { useSelector } from 'react-redux';
import '../index.less'

export default function BaseInfo() {
  const { resume:{resume_form},resume:{resume_form:{personal}} } = useSelector<any>(state => state.resume) as ResumeStore

    return (
      <div styleName="container">
        <p styleName="title">基本信息 Basic</p>
        <ul styleName="content">
          {personal?.school && <li>院校：{personal?.school}</li>}
          {personal?.major && <li>专业：{personal?.major}</li>}
          {personal?.degree && <li>学历：{personal?.degree}</li>}
          {personal?.onSchoolTime && personal?.onSchoolTime?.beginTime && personal?.onSchoolTime?.endTime && (
            <li>
              学年：{personal?.onSchoolTime?.beginTime} - {personal?.onSchoolTime?.endTime}
            </li>
          )}
          {personal?.hometown && <li>籍贯：{personal?.hometown}</li>}
        </ul>
      </div>
    );
  }