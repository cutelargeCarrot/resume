import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './modules/globalStore'
import resumeReducer from './modules/resumeStore'
const store = configureStore({
    reducer:{
        global:globalReducer,
        resume:resumeReducer,
    }
})

export default store