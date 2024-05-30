import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state, action)=>{
            const existingBook=state.filter(items=>items.id===action.payload.id)
            if(existingBook.length===0){
                state.push(action.payload)
            }
            return state
     },
    removeFromCart:(state, action)=>{
        return state.filter(items=>items.id!==action.payload.id)
        } 
    }
})

export const {addToCart, removeFromCart}=cartSlice.actions
export default cartSlice.reducer