const ROUTER = {
    root:'/',
    resume:'/resume',
}
export default ROUTER

export const ROUTER_KEY = {
    root:'root',
    resume:'resume'
}

export const ROUTER_ENTRY:TSRouter.Item[] = [
    {
        url:'http://www.bilibili.com',
        key:'intro',
        text:'介绍'
    },{
        url:ROUTER.resume,
        key:ROUTER_KEY.resume,
        text:'简历'
    }
    
]