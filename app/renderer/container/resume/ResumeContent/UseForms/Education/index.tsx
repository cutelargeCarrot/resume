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
export default function Education({onClose}:props){
    const { resume:{resume_form},resume:{resume_form:{personal}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = (target: string, value: any) => {
        let personal = { ...resume_form.personal, [`${target}`]: value }
        dispatch(changeResumeForm({ ...resume_form, personal }))
    }
    
    const chagenTime = (target:string,value:any) => {
        let onSchoolTime = { ...resume_form.personal.onSchoolTime, [`${target}`]: value }
        let personal = { ...resume_form.personal, onSchoolTime }
        dispatch(changeResumeForm({ ...resume_form, personal }))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
           <div styleName='g-title'>教育信息</div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>学校 :</div><MyInput onChange={(e) => { changeInfo('school', e.target?.value || '') }}
                value={personal?.school || ''}
                placeholder="请输入学校"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>专业 :</div><MyInput onChange={(e) => { changeInfo('major', e.target?.value || '') }}
                value={personal?.major || ''}
                placeholder="请输入专业"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>学位 :</div><MyInput onChange={(e) => { changeInfo('degree', e.target?.value || '') }}
                value={personal?.degree || ''}
                placeholder="请输入学位"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>开始时间 :</div><MyInput onChange={(e) => { chagenTime('beginTime', e.target?.value || '') }}
                value={personal?.onSchoolTime?.beginTime || ''}
                placeholder="开始时间"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>结束时间 :</div><MyInput onChange={(e) => { chagenTime('endTime', e.target?.value || '') }}
                value={personal?.onSchoolTime?.endTime || ''}
                placeholder="结束时间"
                allowClear={true} />
            </div>
    </MyPop>
    )
}