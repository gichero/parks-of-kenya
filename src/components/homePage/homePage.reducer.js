const INITIAL_STATE = {
    userInfo: null
};

export default function reducer (state = INITIAL_STATE, action){
    if(action.type === 'fetchImage'){
        return Object.assign({}, state, {
            allImages: action.payload
        });
    }
}
