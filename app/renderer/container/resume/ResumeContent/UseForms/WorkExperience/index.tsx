import React from 'react'
import '../styles/index.less'
import './index.less'
import MyPop from '@src/common/components/MyPop';

interface props {
    onClose: () => void;
    }
export default function WorkExperience({onClose}:props){
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
        <div></div>
    </MyPop>
    )
}