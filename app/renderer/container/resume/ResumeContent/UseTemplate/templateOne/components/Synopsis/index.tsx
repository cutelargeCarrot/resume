import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';
import { ResumeStore } from '@src/store/modules/resumeStore';

function Synopsis() {
  const { resume:{resume_form:{personal,workPrefer,evaluation}} } = useSelector<any>(state => state.resume) as ResumeStore


  return (
    <div styleName="content">
      {personal?.username && <p styleName="name">{personal?.username}</p>}
      {workPrefer?.job && <p styleName="job">{workPrefer?.job}</p>}
      {evaluation && <p styleName="summary">{evaluation&& !!evaluation.length && evaluation?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;