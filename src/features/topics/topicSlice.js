import { createSlice } from '@reduxjs/toolkit';


export const topicSlice = createSlice({
    name:'topic',
    initialState: {
        
            topics: {
                
            }
       

    },
    reducers:{

        addTopic(state,action){
            

            //add to the topics object in state
            state.topics = {
                ...state.topics,

                [action.payload.id]: action.payload};
            



            //make the quizIds array
            const id = action.payload.id;
            state.topics[id] ={
                ...state.topics[id],
                quizIds:[]
            }



        },

        addQuizId(state,action){
            //payload format {quizId: '123', topicId: '456'}
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);

        }




    }

})




export const topicSelector = (state) => state.topics.topics;
//export the actions with topicSlice.actions
export const { addTopic, addQuizId } = topicSlice.actions;

export default topicSlice.reducer;
