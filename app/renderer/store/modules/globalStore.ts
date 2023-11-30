import { createSlice } from '@reduxjs/toolkit'

export interface GStore {
    // 项目路径
    rootPath:string
}

const GlobalStore = createSlice({
    name:'global',
    initialState:{
        rootPath:""
    },
    reducers:{
        setRootPath(state,action){
            state.rootPath = action.payload
        }
    }
})

const { setRootPath } = GlobalStore.actions
export {setRootPath}

const globalReducer = GlobalStore.reducer
export default globalReducer