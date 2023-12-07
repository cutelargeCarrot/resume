/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import { ResumeStore } from '@src/store/modules/resumeStore';
import './index.less';
import React from 'react';
import { useSelector } from 'react-redux';

function Post() {
 const { resume:{resume_form:{schoolExperience},resume_tool_keys} } = useSelector<any>(state => state.resume) as ResumeStore

  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        {!!schoolExperience?.length &&
          schoolExperience?.map((experience: TSResume.SchoolExperience, index: number) => {
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

export default Post;