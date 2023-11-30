declare namespace TSResume {
    //基本信息
    export interface Base {
        // 头像
        avatar?:string
        // 姓名
        username:string
        // 地区
        area?:string
        // 学校
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
        // 籍贯
        hometown?:string
        // 政治面貌
        political?:string
    }

    // 联系方式
    export interface Contact {
        //
        phone?:string
        //
        email?:string
        //
        github?:string
        //
        juejin?:string
    }

    // 求职信息
    export interface Work {
        // 意愿岗位
        job?:string
        // 意愿城市
        city?:string
        cityList?:string[]
    }

    // 经验
    interface Experience {
        // 开始时间
   
        beginTime?: number | string | undefined;
        // 结束时间
        endTime?: number | string | undefined;
        // 额外补充内容
        supplement?: string;
        // 最后修改时间
        date?: number;
      }
    // 在校经验
    export interface SchoolExperince extends Experience {
        // 部门
        department?:string
        // 职位
        post?:string
        // 主要工作
        content?:string
        parseContent?:string[]
    }

    // 工作经验
    export interface WorkExperience extends Experience {
         // 部门
         department?:string
         // 职位
         post?:string
         // 主要工作
         content?:string
         parseContent?:string[]
    }

      // 项目经验
      export interface ProjectExperience extends Experience {
        // 项目名
        projectName?:string
        // 职位
        post?:string
        // 主要工作
        content?:string
        parseContent?:string[]
   }

   // 简历信息
   export interface IntactResume {
    base:Base
    skill:string
    skillList:string[]
    hobby:string
    // 个人评价
    evaluation:string
    evaluationList:string[]
    // 荣誉证书
    certificate:string
    certificateList:string[]
    contact:Contact
    work:Work
    workExperience?:WorkExperience[]
    schoolExperience?:SchoolExperince[]
    projectExperience?:ProjectExperience[]
   }

   export interface templateItem {
    // 唯一标识
    id:string
    // 模板名
    name:string
    // 模板封面
    cover:string
   }

   // 简历工具条模块
   export interface SliderItem {
    // 唯一标识
    key:string
    // 模板名
    name:string
    // 描述
    summary:string
    // 是否必须
    require?:boolean
   }
}