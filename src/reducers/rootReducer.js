const initState = {
    profileData: null,
    repoData: null
}


const rootReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'ADD_PROFILE') {
        return {
            ...state,
            profileData: action.profile
        }
    } else if (action.type === 'ADD_REPO') {
        return {
            ...state,
            repoData: action.repo
        }
    } 
    return state;
}

export default rootReducer