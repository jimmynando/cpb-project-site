const initialState = {
    finances: [],
    finance: {},
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "finances:GET_FINANCES":
            return {
                ...state,
                finances: action.payload
            }
        case "finances:ADD_FINANCE":
            return {
                ...state,
                finances: action.payload
            }
        case "finances:DELETE_FINANCE":
            return {
                ...state,
                finances: state.finances.filter(f => f._id !== action.payload)
            }
        case "finances:GET_FINANCE":
            return {
                ...state,
                finances: action.payload
            }
        default:
            return state;
    }
}

export default contactReducer;
