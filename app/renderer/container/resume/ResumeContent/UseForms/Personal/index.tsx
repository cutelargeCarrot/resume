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

export default function Personal({ onClose }: props) {
    const { resume:{resume_form},resume:{resume_form:{personal}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()
    const changeInfo = (target: string, value: any) => {
        let personal = { ...resume_form.personal, [`${target}`]: value }
        dispatch(changeResumeForm({ ...resume_form, personal }))
    }
    return (
        <MyPop config={{ cancelBtn: { callback: onClose } }}>
            <div styleName='g-title'>个人信息</div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>姓名 :</div><MyInput onChange={(e) => { changeInfo('username', e.target?.value || '') }}
                value={personal?.username || ''}
                placeholder="请输入姓名"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>地区 :</div><MyInput onChange={(e) => { changeInfo('area', e.target?.value || '') }}
                value={personal?.area || ''}
                placeholder="请输入地区"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>籍贯 :</div><MyInput onChange={(e) => { changeInfo('hometown', e.target?.value || '') }}
                value={personal?.hometown || ''}
                placeholder="请输入籍贯"
                allowClear={true} />
            </div>
            <div styleName='g-form-item'><div styleName='g-item-title'><span styleName='require'>*</span>政治面貌 :</div><MyInput onChange={(e) => { changeInfo('political', e.target?.value || '') }}
                value={personal?.political || ''}
                placeholder="请输入政治面貌"
                allowClear={true} />
            </div>
        </MyPop>
    )
}