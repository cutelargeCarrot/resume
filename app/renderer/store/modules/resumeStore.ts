import {createSlice} from '@reduxjs/toolkit'

const resumeStore = createSlice({
    name:'resume',
    initialState:{
        resume:{}
    },
    reducers:{
        setResume(state,action){
                state.resume = action.payload
        }
    }
})

const { setResume } = resumeStore.actions
export { setResume }
const globalReducer = resumeStore.reducer
export default globalReducer