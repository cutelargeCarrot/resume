import React from 'react'
import '../styles/index.less'
import './index.less'
import MyPop from '@src/common/components/MyPop';
import { useDispatch, useSelector } from 'react-redux';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import MyInput from '@src/common/components/MyInput';

interface props {
onClose: () => void;
}

export default function Skill({onClose}:props){
    const { resume:{resume_form},resume:{resume_form:{skill}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = ( value: any) => {
        let _value = value.split('|');
        dispatch(changeResumeForm({ ...resume_form, skill:_value }))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
            <div styleName='g-title'>技能清单</div>
             <MyInput
              type="textarea"
              onChange={(e) => {
                changeInfo( e.target.value);
              }}
              rows={5}
              value={ (skill && !!skill.length && skill?.join('|') )|| ''}
              placeholder="例如 Vue、React"
            />
              <div styleName="g-tips"> * 多个技能以 | 分割</div>
        </MyPop>
    )
}