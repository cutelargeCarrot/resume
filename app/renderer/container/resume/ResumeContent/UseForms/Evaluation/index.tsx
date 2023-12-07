import React from 'react'
import './index.less'
import '../styles/index.less'
import MyPop from '@src/common/components/MyPop';
import MyInput from '@src/common/components/MyInput';
import { useSelector } from 'react-redux';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import { useDispatch } from 'react-redux';

interface props {
    onClose: () => void;
}

export default function Evalucation({ onClose }: props) {
    const { resume:{resume_form},resume:{resume_form:{evaluation}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = (value: string) => {
        let _value = value.split('|');
        dispatch(changeResumeForm({ ...resume_form, evaluation:_value }))
    }
    return (
        <MyPop config={{ cancelBtn: { callback: onClose } }}>
              <div styleName='g-title'>个人评价</div>
             <MyInput
              type="textarea"
              onChange={(e) => {
                changeInfo( e.target.value);
              }}
              rows={5}
              value={ (evaluation && !!evaluation.length && evaluation?.join('|') )|| ''}
              placeholder="写下评价"
            />
              <div styleName="g-tips"> * 多个评价以 | 分割</div>
        </MyPop>
    )
}