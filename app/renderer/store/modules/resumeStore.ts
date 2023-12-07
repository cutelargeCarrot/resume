import {createSlice} from '@reduxjs/toolkit'

export interface ResumeStore{
  resume:{
    resume_id:string,// 简历 id
    resume_name:string,// 简历名称
    resume_template_modal:string, // 简历模板
    resume_tool_keys:string[],
    resume_form:{
        personal:TSResume.Base, // 个人信息
        contact: TSResume.Contact, // 联系方式
        education: {
            school?:string
            // 学年
            onSchoolTime?:{
                //
                beginTime:string|number|null
                //
                endTime:string|number|null
            }
            // 专业
            major?:string
            // 学位
            degree?:string
        }, // 教育信息
        workPrefer: TSResume.Work, // 工作期望
        schoolExperience: TSResume.SchoolExperience[] // 在校经历
        projectExperience: TSResume.ProjectExperience[] // 项目经验
        workExperience: TSResume.WorkExperience[] // 工作经历
        certificate: string[] // 获奖证书
        evaluation: string[] // 个人评价
        skill: string[] // 技能清单
        others: [] // 自定义
    }
  }
}

const resumeStore = createSlice({
    name:'resume',
    initialState:{
        resume:{
            resume_id:'',// 简历 id
            resume_name:'',// 简历名称
            resume_template_modal:'', // 简历模板
            resume_tool_keys:[],
            resume_form:{
                personal:{}, // 个人信息
                contact: {}, // 联系方式
                education: {}, // 教育信息
                workPrefer: {}, // 工作期望
                schoolExperience: [], // 在校经历
                projectExperience: [], // 项目经验
                workExperience: [], // 工作经历
                certificate: {}, // 获奖证书
                evaluation: {}, // 个人评价
                skill: {}, // 技能清单
                others: [], // 自定义
            }
        }
    },
    reducers:{
        changeResume(state,action){
                state.resume = action.payload
        },
        changeResumeName(state,action){
            state.resume.resume_name = action.payload
        },
        changeResumeToolKeys(state,action){
            state.resume.resume_tool_keys = action.payload
        },
        // 模板
        changeResumeTemplateModal(state,action){
            state.resume.resume_template_modal = action.payload
        },
        // 表单
        changeResumeForm(state,action){
            state.resume.resume_form = action.payload
        },
        changeResumeFormOthers(state,action){
            state.resume.resume_form.others = action.payload
        }
    }
})

const { changeResume, changeResumeName, changeResumeToolKeys, changeResumeTemplateModal, changeResumeForm, changeResumeFormOthers } = resumeStore.actions
export { changeResume, changeResumeName, changeResumeToolKeys, changeResumeTemplateModal, changeResumeForm, changeResumeFormOthers }
const globalReducer = resumeStore.reducer
export default globalReducer