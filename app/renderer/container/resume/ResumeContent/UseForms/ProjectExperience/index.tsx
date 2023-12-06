import React from 'react'
import './index.less'
import '../styles/index.less'
import MyPop from '@src/common/components/MyPop';

interface props {
    onClose: () => void;
    }
export default function ProjectExperience({onClose}:props){
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
        <div></div>
    </MyPop>
    )
}