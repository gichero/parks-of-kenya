const INITIAL_STATE = {
    allParks: [],
    userInfo: null
};

export default function reducer (state = INITIAL_STATE, action){
    if(action.type === 'parksAndReserves'){
        return Object.assign({}, state, {
            parksAndReserves: action.payload
        });
    }else if(action.type === 'about'){
        return Object.assign({}, state, {
            about: action.payload
        });
    }else if(action.type === 'contact'){
        return Object.assign({}, state, {
            contact: action.payload
        });
    }

}
