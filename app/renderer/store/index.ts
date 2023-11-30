import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './modules/globalStore'
import templateReducer from './modules/templateStore'
const store = configureStore({
    reducer:{
        global:globalReducer,
        resume:globalReducer,
        template:templateReducer
    }
})

export default store