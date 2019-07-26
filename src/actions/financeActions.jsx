import axios from 'axios';

export const getFinances = () => async dispatch => {
    const res = await axios.get('http://localhost:3001/finance/');
    console.log(res);
    dispatch({
        type: "GET_FINANCES",
        payload: res.data
    })
}