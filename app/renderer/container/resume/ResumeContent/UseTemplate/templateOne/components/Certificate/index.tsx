import React from 'react';
import { useSelector } from 'react-redux';
import '../index.less';
import { ResumeStore } from '@src/store/modules/resumeStore';

function Certificate() {
    const { resume:{resume_form:{certificate}} } = useSelector<any>(state => state.resume) as ResumeStore

//   const certificate: string = useSelector((state: any) => state.resumeModel.certificate);
//   const certificateList: string[] = useSelector((state: any) => state.resumeModel.certificateList);
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        {certificate &&
          certificate.length > 0 &&
          certificate?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;