import React from 'react'
import '../styles/index.less'
import './index.less'
import MyPop from '@src/common/components/MyPop'
import { useDispatch, useSelector } from 'react-redux'
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore'
import MyInput from '@src/common/components/MyInput'
interface props {
    onClose:()=>void
}
export default function Certificate({onClose}:props){
    const { resume:{resume_form},resume:{resume_form:{certificate}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = ( value: any) => {
        let _value = value.split('|');
        dispatch(changeResumeForm({ ...resume_form, certificate:_value }))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
            <div styleName='g-title'>获奖证书</div>
             <MyInput
              type="textarea"
              onChange={(e) => {
                changeInfo( e.target.value);
              }}
              rows={5}
              value={ (certificate && !!certificate.length && certificate?.join('|') )|| ''}
              placeholder="写下获奖证书"
            />
              <div styleName="g-tips"> * 多个获奖证书以 | 分割</div>
        </MyPop>
    )
}