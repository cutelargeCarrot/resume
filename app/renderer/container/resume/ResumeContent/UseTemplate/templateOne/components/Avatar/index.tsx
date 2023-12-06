import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';
// import uploadIcon from '@assets/icon/upload.png';
import { GoPersonAdd   } from "react-icons/go";
import MyButton from '@common/components/MyButton';
import { ResumeStore } from '@src/store/modules/resumeStore';
// import ImageUpload from '@common/components/MyUpload/ImageUpload';
// import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

function Avatar() {
  const { resume:{resume_form},resume:{resume_form:{personal}} } = useSelector<any>(state => state.resume) as ResumeStore

//   const updateResumeHook = useUpdateResumeHook();

  const onUpdateUserAvatar = (avatarUrl: string) => {
    // updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div styleName="box">
      {!personal?.avatar && < GoPersonAdd  styleName='avatar-icon' />
    //    && 
    //   (
        // <ImageUpload
        //   icon={uploadIcon}
        //   accept="image/*"
        //   multiple={false}
        //   onAfterChange={(files:any) => {
        //     onUpdateUserAvatar(files[0]?.base64URL);
        //   }}
        // />
    //   )
      }
      {personal?.avatar && (
        <div styleName="avatar">
          <img src={personal?.avatar} />
          <div styleName="mask">
            <MyButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </MyButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;