import { GET_FINANCES, ADD_FINANCE, DELETE_FINANCE, GET_FINANCE } from './types';
import axios from 'axios';


export const getFinances = () => async dispatch => {
    const res = await axios.get('http://localhost:3002/finance/');
    
    dispatch({
        type: GET_FINANCES,
        payload: res.data
    });
}

export const addFinance = (finance) => async dispatch => {
    const res = await axios.post('http://localhost:3002/finance/', finance);

    dispatch({
        type: ADD_FINANCE,
        payload: res.data
    });
}

export const editFinance = (finance) => async dispatch => {
    const res = await axios.put('http://localhost:3002/finance/', finance);

    dispatch({
        type: ADD_FINANCE,
        payload: res.data
    });
}

export const deleteFinance = (id) => async dispatch => {
    await axios.delete(`http://localhost:3002/finance/${id}`);

    dispatch({
        type: DELETE_FINANCE,
        payload: id
    });
}

export const getFinance = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3002/finance/${id}`);
    
    dispatch({
        type: GET_FINANCE,
        payload: res.data[0]
    });
}