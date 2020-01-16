import axiosApi from "../../axiosApi";

export const FETCH_DISH_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_DISH_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_DISH_ERROR = 'FETCH_POST_ERROR';
export const ADD_CARD = 'ADD_CARD';
export const ADD_COUNTER = 'ADD_COUNTER';
export const fetchDishRequest = () => {
    return {type: FETCH_DISH_REQUEST}
};
export const fetchDishSuccess = (dishes) => {
    return {type: FETCH_DISH_SUCCESS, dishes}
};
export const fetchDishError = () => {
    return {type: FETCH_DISH_ERROR}
};
export const getCard =(arr)=>{
    return{type:ADD_CARD,arr}
};
export const counter = ()=>{
    return{type:ADD_COUNTER}
};
export const addCard = ( order)=>{
    return {type: ADD_CARD, order}
};
export const remove = (name)=>{
   return{
       type:'REMOVE',
       name
   }
};
export const getdish = () => {
    return dispatch => {
        dispatch(fetchDishRequest());
        axiosApi.get('/dish.json').then(response => {
            dispatch(fetchDishSuccess(response.data));
        }, error => {
            dispatch(fetchDishError(error));
        });
    }
};
