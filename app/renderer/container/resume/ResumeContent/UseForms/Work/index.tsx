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
export default function Work({onClose}:props){
    const { resume:{resume_form},resume:{resume_form:{workPrefer}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = (target: string, value: any) => {
        let workPrefer = ( target === 'cityList') ? 
            { ...resume_form.workPrefer, [`${target}`]: value.split('|') } :
            { ...resume_form.workPrefer, [`${target}`]: value }
        dispatch(changeResumeForm({ ...resume_form, workPrefer }))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
           <div styleName='g-title'>工作期望</div>
           <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>岗位 :</div><MyInput onChange={(e) => { changeInfo('job', e.target?.value || '') }}
                value={workPrefer?.job || ''}
                placeholder="请输入工作岗位"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>城市 :</div><MyInput onChange={(e) => { changeInfo('cityList', e.target?.value || '') }}
                value={(workPrefer?.cityList && !!workPrefer?.cityList.length && workPrefer?.cityList.join('|')) || ''}
                placeholder="请输入工作地点"
                allowClear={true} />
            </div>
            <div styleName="g-tips"> * 多个评价以 | 分割</div>
    </MyPop>
    )
}