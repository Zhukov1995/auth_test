const initialState = {
    auth: false,
    forget: false,
    user: {login: '+7 111 111 11 11', password: '123456'},
    forgetLogin: '',
    flagModal: false,
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {...state, auth: action.payload}
        case 'SET_FORGET':
            return {...state, forget: action.payload}
        case 'SET_FORGET_LOGIN':
            return {...state, forgetLogin: action.payload}
        case 'SET_FLAG_MODAL':
            return {...state, flagModal: action.payload}
        default: return state
    }
}

export default reducer;