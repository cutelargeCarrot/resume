import React, { useState } from 'react'
import './index.less'
import '../styles/index.less'
import MyPop from '@src/common/components/MyPop';
import MyInput from '@src/common/components/MyInput';
import MyButton from '@src/common/components/MyButton';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import { useDispatch, useSelector } from 'react-redux';

interface props {
    onClose: () => void;
    }
    
export default function ProjectExperience({onClose}:props){
   
    const [id,setId] = useState(0)
    const [projectName,setProjectName] = useState('')
    const [post,setPost] = useState('')
    const [beginTime,setBeginTime] = useState<string | number>()
    const [endTime,setEndTime] = useState<string | number>()
    const [parseContent,setParseContent] = useState<string[]>([])

    const { resume:{resume_form},resume:{resume_form:{projectExperience}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()

    // changeForm
    const changeForm = (id:number)=>{
       if(id){
        projectExperience.forEach(element => {
           if( element.id == id){
            setId(id)
            setProjectName(element.projectName!)
            setPost(element.post!)
            setParseContent(element.parseContent!)
            setBeginTime(element.beginTime!)
            setEndTime(element.endTime!)
           }
        });
       } else {
        setId(0)
        setProjectName(' ')
        setPost(' ')
        setBeginTime(' ')
        setEndTime(' ')
        setParseContent([' '])
       }
    }
    // submitForm
    const submitForm = ()=>{
        if(!projectName  || projectName==' ')return
        let newForm = {
            id: id?id:Date.now(),
            projectName,
            post,
            parseContent,
            beginTime,
            endTime
        }
        let projectExperience
        if(!id)
            projectExperience = [...resume_form.projectExperience,newForm]
        else projectExperience = resume_form.projectExperience.reduce((pre:any,item:any)=>{
            return item.id == id ? [...pre,newForm] : [...pre,item]
        },[])
        console.log(projectExperience)
        dispatch(changeResumeForm({...resume_form,projectExperience}))
        setId(0)
        setProjectName(' ')
        setPost(' ')
        setBeginTime(' ')
        setEndTime(' ')
        setParseContent([' '])
    }
    const delForm = (id:number) => {
        let projectExperience = resume_form.projectExperience.reduce((pre:any,item:any)=>{
            return item.id == id ? [...pre] : [...pre,item]
        },[])
        dispatch(changeResumeForm({...resume_form,projectExperience}))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
        <div styleName='g-title'>项目经验</div>
        <div styleName='form'>
            {/* 左侧 */}
            <div styleName='left'>
                <div styleName='left-item' onClick={()=>changeForm(0)}>添加经历</div>
                { projectExperience && !!projectExperience.length && projectExperience.map(item=>(
                        <div key={item.id} styleName='left-item' onClick={()=>changeForm(item.id)}>{item.projectName} <span onClick={(e:React.MouseEvent)=>{e.stopPropagation && e.stopPropagation();delForm(item.id)}}>删除</span></div>
                ))}
            </div>
            {/* 右侧 */}
            <div styleName='right'>
                <div styleName='right-title'>{projectName || '新的经历'}</div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>项目名称 :</div>
                    <MyInput onChange={(e) => { setProjectName(e.target?.value.trim() || '') }}
                    value={projectName}
                    placeholder="请输入项目名称"
                    allowClear={true} />
                </div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>开始时间 :</div>
                    <MyInput onChange={(e) => { setBeginTime(e.target?.value.trim() || '') }}
                    value={beginTime}
                    placeholder="请输入开始时间"
                    allowClear={true} />
                </div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>结束时间 :</div>
                    <MyInput onChange={(e) => { setEndTime(e.target?.value.trim() || '') }}
                    value={endTime}
                    placeholder="请输入结束时间"
                    allowClear={true} />
                </div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>职位 :</div>
                    <MyInput onChange={(e) => { setPost(e.target?.value.trim() || '') }}
                    value={post}
                    placeholder="请输入职位"
                    allowClear={true} />
                </div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>主要工作 :</div>
                    <MyInput onChange={(e) => { setParseContent( e.target?.value?.trim().split('|')) }}
                    value={!!parseContent?.length && parseContent.join('|') || ''}
                    placeholder="请输入主要工作"
                    type='textarea'
                    allowClear={true} />
                </div>
                <MyButton styleName='right-button' disabled={!projectName || projectName==' '} onClick={()=>submitForm()}>提交</MyButton>
            </div>
        </div>
    </MyPop>
    )
}