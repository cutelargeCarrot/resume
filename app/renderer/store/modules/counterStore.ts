import {createSlice} from '@reduxjs/toolkit'
const counterStore = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment(state){
            state.count++
        }
    }
})

const {increment} = counterStore.actions
const counterReducer = counterStore.reducer
export {increment}
export default counterReducer