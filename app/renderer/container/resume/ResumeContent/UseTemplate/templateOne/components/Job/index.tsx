
import React from 'react';
import './index.less';
import '../index.less'
import { useSelector } from 'react-redux';
import { ResumeStore } from '@src/store/modules/resumeStore';

function Job() {
    const { resume:{resume_form:{workPrefer}} } = useSelector<any>(state => state.resume) as ResumeStore

  const cityList = (workPrefer && workPrefer?.cityList) || [];
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {workPrefer?.job && <li>职位：{workPrefer?.job}</li>}
        {!!workPrefer?.cityList?.length && (
          <li>
            城市：
            {cityList?.map((city: string, index: number) => {
              return (
                <span key={index}>
                  {city}
                  {cityList.length - 1 !== index && <span styleName="line">|</span>}
                </span>
              );
            })}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Job;