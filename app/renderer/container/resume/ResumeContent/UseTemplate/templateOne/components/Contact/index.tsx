import React from 'react';
import '../index.less'
import { useSelector } from 'react-redux';
import { ResumeStore } from '@src/store/modules/resumeStore';

function Contact() {
    const { resume:{resume_form:{contact}} } = useSelector<any>(state => state.resume) as ResumeStore

  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
        {contact?.github && <li>github {contact?.github}</li>}
        {contact?.juejin && <li>掘金 {contact?.juejin}</li>}
      </ul>
    </div>
  );
}

export default Contact;