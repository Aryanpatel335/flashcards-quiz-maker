import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards:{

        }
    },
    reducers:{
        addCard(state,action){
            state.cards = {
                ...state.cards,
                [action.payload.id]: action.payload
            }

        }
    }



})


export const cardSelector = (state) => state.cards.cards

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
