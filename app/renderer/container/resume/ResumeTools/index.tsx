import React, { useEffect, useState } from 'react'
import './index.less'
import RESUME_TOOLS_LIST from '@common/contants/resume';
import { onAddToolList, onDelToolList} from './utils'
import { ResumeStore, changeResumeToolKeys } from '@src/store/modules/resumeStore';
import { useSelector, useDispatch } from 'react-redux';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@src/common/messager';

export default function ResumeTools(){
    const dispatch = useDispatch()
    const {resume:{resume_tool_keys}}  = useSelector<any>(state => state.resume) as ResumeStore

    const [ addToolList, setAddToolList ] = useState<TSResume.SliderItem[]>([])
    const [ unAddToolList, setUnAddToolList ] = useState<TSResume.SliderItem[]>([])

    useEffect(()=>{
        if( RESUME_TOOLS_LIST.length > 0 ){
            let add:TSResume.SliderItem[] = []
            let unAdd:TSResume.SliderItem[] = []
            
            if(!!resume_tool_keys.length){
                RESUME_TOOLS_LIST.forEach(item => {
                    resume_tool_keys.includes(item.key)  ? add.push(item) : unAdd.push(item)
                });
            } else {
                RESUME_TOOLS_LIST.forEach(item => {
                    item.require ? add.push(item) : unAdd.push(item)
                });
            }
            if(!resume_tool_keys.length)dispatch(changeResumeToolKeys(add.map(item => item.key)))
            setAddToolList(add)
            setUnAddToolList(unAdd)
        } 
    },[])

    const onAddSliderAction = (Model:TSResume.SliderItem):void => {
        const newList = onAddToolList(addToolList,Model)
        dispatch(changeResumeToolKeys(newList.map((item:TSResume.SliderItem) => item.key)))
        setAddToolList(newList)
        setUnAddToolList(onDelToolList(unAddToolList,Model))
    }

    const onDelSliderAction = (Model:TSResume.SliderItem):void => {
        const newList = onDelToolList(addToolList,Model)
        dispatch(changeResumeToolKeys(newList.map((item:TSResume.SliderItem) => item.key)))
        setAddToolList(newList)
        setUnAddToolList(onAddToolList(unAddToolList,Model))
    }

    return(
        <div styleName='tools'>
            <div styleName='tools-title'>已添加模块</div>
            {
                addToolList.map((item)=>(
                 <React.Fragment key={item.key}>
                       <div styleName='toolitem' onClick={()=>{Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL,{form_name:item.key})}}>
                        <div styleName='title'>
                            {item.name}
                            {item.require && <span styleName='title-require'> 必须 </span>}
                            {!item.require && <span styleName='btn' onClick={(e:React.MouseEvent)=>{e.stopPropagation && e.stopPropagation();onDelSliderAction(item)}}>删除</span>}
                            </div>
                        <div styleName='summary'>{item.summary}</div>
                    </div>
                 </React.Fragment>
                ))
            }
            { !!unAddToolList.length && (
               <React.Fragment>
                 <div styleName='tools-title'>未添加模块</div>
                    {
                        unAddToolList.map((item)=>(
                            <React.Fragment key={item.key}>
                                <div styleName='toolitem' onClick={()=>onAddSliderAction(item) }>
                                    <div styleName='title'>{item.name}</div>
                                    <div styleName='summary'>{item.summary}</div>
                                </div>
                            </React.Fragment>
                        ))
                    }
               </React.Fragment>
                )
            }
        </div>
    )
}