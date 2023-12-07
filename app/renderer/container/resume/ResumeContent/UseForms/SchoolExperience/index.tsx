import React, { useState } from 'react'
import '../styles/index.less'
import './index.less'
import MyPop from '@src/common/components/MyPop';
import { useDispatch, useSelector } from 'react-redux';
import { ResumeStore, changeResumeForm } from '@src/store/modules/resumeStore';
import MyInput from '@src/common/components/MyInput';
import MyButton from '@src/common/components/MyButton';

interface props {
    onClose: () => void;
    }
interface ExperienceItem {
    id?:number
    department?:string
    post?:string
    parseContent?:string[]
}

export default function SchoolExperience({onClose}:props){

    const [id,setId] = useState(0)
    const [department,setDepartment] = useState('')
    const [post,setPost] = useState('')
    const [parseContent,setParseContent] = useState<string[]>([])
    const [beginTime,setBeginTime] = useState<string | number>()
    const [endTime,setEndTime] = useState<string | number>()
    const { resume:{resume_form},resume:{resume_form:{schoolExperience}} } = useSelector<any>(state => state.resume) as ResumeStore
    const dispatch = useDispatch()

    // changeForm
    const changeForm = (id:number)=>{
       if(id){
        schoolExperience.forEach(element => {
           if( element.id == id){
            setDepartment(element.department!)
            setPost(element.post!)
            setParseContent(element.parseContent!)
            setBeginTime(element.beginTime!)
            setEndTime(element.endTime!)
           }
        });
       } else {
        setDepartment(' ')
        setPost(' ')
        setParseContent([' '])
        setBeginTime(' ')
        setEndTime(' ')
       }
    }
    // submitForm
    const submitForm = ()=>{
        if(!department  || department==' ')return
        let newForm = {
            id: id?id:Date.now(),
            department,
            post,
            parseContent,
            beginTime,
            endTime
            
        }
        let schoolExperience
        if(!id)schoolExperience = [...resume_form.schoolExperience,newForm]
        else schoolExperience = resume_form.schoolExperience.reduce((pre:any,item:any)=>{
            return item.id == id ? [...pre,newForm] : [...pre,item]
        },[])
        dispatch(changeResumeForm({...resume_form,schoolExperience}))
        setDepartment(' ')
        setPost(' ')
        setBeginTime(' ')
        setEndTime(' ')
        setParseContent([' '])
    }
    const delForm = (id:number) => {
        let schoolExperience = resume_form.schoolExperience.reduce((pre:any,item:any)=>{
            return item.id == id ? [...pre] : [...pre,item]
        },[])
        dispatch(changeResumeForm({...resume_form,schoolExperience}))
    }
    return (
        <MyPop config={{cancelBtn:{callback:onClose}}}>
        <div styleName='g-title'>在校经历</div>
        <div styleName='form'>
            <div styleName='left'>
                <div styleName='left-item' onClick={()=>changeForm(0)}>添加经历</div>
                { schoolExperience && !!schoolExperience.length && schoolExperience.map(item=>(
                        <div key={item.id} styleName='left-item' onClick={()=>changeForm(item.id)}>{item.department} <span onClick={(e:React.MouseEvent)=>{e.stopPropagation && e.stopPropagation();delForm(item.id)}}>删除</span></div>
                ))}
            </div>
            <div styleName='right'>
                <div styleName='right-title'>{department || '新的经历'}</div>
                <div styleName='g-form-item'>
                    <div styleName='g-item-title'><span styleName='require'>*</span>部门 :</div>
                    <MyInput onChange={(e) => { setDepartment(e.target?.value.trim() || '') }}
                    value={department}
                    placeholder="请输入部门"
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
                    <div styleName='g-item-title'><span styleName='require'>*</span>主要工作 :</div>
                    <MyInput onChange={(e) => { setParseContent( e.target?.value?.trim().split('|')) }}
                    value={!!parseContent?.length && parseContent.join('|') || ''}
                    placeholder="请输入主要工作"
                    type='textarea'
                    allowClear={true} />
                </div>
                <MyButton styleName='right-button' disabled={!department || department==' '} onClick={()=>submitForm()}>提交</MyButton>
            </div>
        </div>
    </MyPop>
    )
}