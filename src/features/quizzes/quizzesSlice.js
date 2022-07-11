import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicSlice";
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            
        }
    },
    reducers:{
        addQuiz(state,action){
            state.quizzes = {

                ...state.quizzes,
                [action.payload.id]: action.payload
            }
        

            
        }
        
    }


})

export const quizSelector = (state) => state.quizzes.quizzes;

//add the quiz and add to the quiz id list in topics
export const quizThunk = action =>{
    const {name,topicId,cardIds,id} =action;
    return (dispatch) =>{
        //to access the action within the slice file it is created in you need to use quizzesSlice.actions.addQuiz({})
        dispatch(quizzesSlice.actions.addQuiz({name,topicId,cardIds, id}));
        dispatch(addQuizId({topicId:topicId, quizId: id }))
        
    }


}



export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;