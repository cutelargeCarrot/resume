import React from 'react'
import './index.less'
import MyButton from '../MyButton'

interface props {
    children:React.ReactNode
    config:{
        cancelBtn:{
            callback?: () => void;
        }
    }
}

export default function MyPop({children,config}:props){
    const { cancelBtn } = config;
    return (
        <div styleName='MyPop'>
            <div styleName='center'>
                <div styleName='form'>
                {children}
                </div>
                <div styleName='control'>
                <MyButton onClick={()=> cancelBtn?.callback && cancelBtn.callback()}>完成</MyButton>
                </div>
            </div>
        </div>
    )
}