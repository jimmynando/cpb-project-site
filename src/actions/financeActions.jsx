import { GET_FINANCES, ADD_FINANCE } from './types';
import axios from 'axios';


export const getFinances = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/finance/');
    dispatch({
        type: GET_FINANCES,
        payload: res.data
    })
}

export const addFinance = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/finance/');
    dispatch({
        type: ADD_FINANCE,
        payload: res.data
    })
}