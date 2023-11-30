import { createSlice } from '@reduxjs/toolkit'

export interface TemplateStore {
    resumeToolKeys:[]
}
const templateStore = createSlice({
    name:'template',
    initialState:{
        resumeToolKeys : []
    },
    reducers:{
        changeResumeToolKeys(state,action){
            state.resumeToolKeys = action.payload
        }
    }
})

const { changeResumeToolKeys } = templateStore.actions
export { changeResumeToolKeys }
const templateReducer = templateStore.reducer
export default templateReducer