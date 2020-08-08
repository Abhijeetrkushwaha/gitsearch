const initState = {
    name: null
}


const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'ADD_NAME') {
        return {
            ...state,
            name: action.name
        }
    }
    return state;
}

export default rootReducer