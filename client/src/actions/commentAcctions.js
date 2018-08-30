import axios from 'axios';
import {GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, COMMENTS_LOADING} from './types';

export const getComments = () => dispatch => {
    dispatch(setCommentsLoading());
    axios  
        .get('/api/reviews')
        .then(res =>
            dispatch({
                type: GET_COMMENTS,
                payload: res.data
            })          
        )
};

export const addComment = (comment) => dispatch => {
    console.log(comment);
    axios  
    .post('api/reviews', comment)
    .then(res =>
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })          
    )
};

export const deleteComment = (id) => dispatch => {
    axios  
    .delete(`/api/reviews/${id}`)
    .then(res =>
        dispatch({
            type: DELETE_COMMENT,
            payload: id
        })          
    )
};

export const setCommentsLoading = () => {
    return{
       type: COMMENTS_LOADING
    }
}