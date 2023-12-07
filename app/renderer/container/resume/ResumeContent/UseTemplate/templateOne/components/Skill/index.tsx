import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';
import { ResumeStore } from '@src/store/modules/resumeStore';

function Skill() {
  const { resume:{resume_form:{skill},resume_tool_keys} } = useSelector<any>(state => state.resume) as ResumeStore


  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        {skill &&
          skill?.length > 0 &&
          skill?.map((skill: string, index: number) => {
            return (
              <li styleName="item" key={index}>
                {skill}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skill;