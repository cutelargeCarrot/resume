/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import { ResumeStore } from '@src/store/modules/resumeStore';
import './index.less';
import React from 'react';
import { useSelector } from 'react-redux';

function Work() {
  const { resume:{resume_form:{workExperience},resume_tool_keys} } = useSelector<any>(state => state.resume) as ResumeStore

  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        {!!workExperience?.length &&
          workExperience?.map((experience: TSResume.WorkExperience, index: number) => {
            return (
              <li styleName="flex" key={index}>
                <div styleName="left">
                  <p>
                    {experience?.beginTime}-{experience?.endTime}
                  </p>
                  <p>{experience?.post}</p>
                </div>
                <div styleName="right">
                  <p>{experience?.department}</p>
                  <p>{experience?.parseContent}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Work;