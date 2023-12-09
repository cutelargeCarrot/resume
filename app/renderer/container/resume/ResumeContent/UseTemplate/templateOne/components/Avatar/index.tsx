import React, { useState } from 'react';
import './index.less';
import { useSelector } from 'react-redux';
// import uploadIcon from '@assets/icon/upload.png';
import { GoPersonAdd   } from "react-icons/go";
import MyButton from '@common/components/MyButton';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import { useDispatch } from 'react-redux';
// import ImageUpload from '@common/components/MyUpload/ImageUpload';
// import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

function Avatar() {

  const [show,setShow] = useState(false)
  const { resume:{resume_form},resume:{resume_form:{personal}} } = useSelector<any>(state => state.resume) as ResumeStore
  const dispatch = useDispatch()
  const upLoad = (e:any) => {
    // URL.createObjectURL(e.target.files[0])
    const reader = new window.FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        let personal = {...resume_form.personal,avatar:reader.result}
        dispatch(changeResumeForm({...resume_form,personal}))
    };
  }

  return (
    <div styleName="box" onClick={()=>setShow(true)}>
      { !personal?.avatar && < GoPersonAdd styleName='avatar-icon' /> }
      { personal?.avatar && (
        <div styleName="avatar">
          <img src={personal?.avatar} />
          <div styleName="mask">
            <MyButton size="small" className="btn-change">
              更换
            </MyButton>
          </div>
        </div>
      )}
      { show && (
        <div styleName='upLoadForm'>
          <div styleName='upLoadFormCenter'>
            <input styleName='file' type="file" accept="image/gif,image/jpeg,image/jpg,image/png" onChange={e=>upLoad(e)} />
            <div styleName='close' onClick={(e:React.MouseEvent)=>{e.stopPropagation && e.stopPropagation();setShow(false)}}>完成</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;