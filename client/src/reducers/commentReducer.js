import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING} from '../actions/types';

const initialState = {   
        comments: [],
        loading: false  
}

/*the flow is:
*  click delete button ->
*    ShoppingList.js(component) recieves the acction ->
*       Call the method in same class -> 
*           method call comment acction deleteComment  ->
*               this call the commentReducer.js
*/
export default function(state = initialState, action){
    switch(action.type){
        case GET_COMMENTS:        
            return{                
                ...state,
                comments:action.payload,
                loading: false
            }
        case DELETE_COMMENT:
            return{
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            }
        case ADD_COMMENT:
            return{
                ...state,
                comments:[action.payload, ...state.comments]
            }
        case COMMENTS_LOADING:
            return{
                ...state,
                loading: true
            }
            default:
            return state;
    }
}