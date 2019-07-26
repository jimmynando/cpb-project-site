const initialState = {
    finances: [],
    finance: {},
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_FINANCES":
            return {
                ...state,
                finances: action.payload
            }
        default:
            return state;
    }
}

export default contactReducer;