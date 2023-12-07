import React from 'react'
import '../styles/index.less'
import './index.less'
import MyPop from '@src/common/components/MyPop'
import { useDispatch, useSelector } from 'react-redux';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import MyInput from '@src/common/components/MyInput';
interface props {
    onClose:() => void;
}
export default function Contact({onClose}:props){
    const { resume:{resume_form},resume:{resume_form:{contact}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = (target: string, value: any) => {
        let contact = { ...resume_form.contact, [`${target}`]: value }
        dispatch(changeResumeForm({ ...resume_form, contact }))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
            <div styleName='g-title'>联系方式</div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>电话 :</div><MyInput onChange={(e) => { changeInfo('phone', e.target?.value || '') }}
                value={contact?.phone || ''}
                placeholder="请输入电话"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>邮箱 :</div><MyInput onChange={(e) => { changeInfo('email', e.target?.value || '') }}
                value={contact?.email || ''}
                placeholder="请输入邮箱"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>GitHub地址 :</div><MyInput onChange={(e) => { changeInfo('github', e.target?.value || '') }}
                value={contact?.github || ''}
                placeholder="请输入GitHub"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>掘金地址 :</div><MyInput onChange={(e) => { changeInfo('juejin', e.target?.value || '') }}
                value={contact?.juejin || ''}
                placeholder="请输入掘金"
                allowClear={true} />
            </div>
        </MyPop>
)
    
}