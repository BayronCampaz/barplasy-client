import { GET_CENTERS, EDIT_CENTER} from '../../types';


export default (state, action) => {
    switch(action.type) {

        case GET_CENTERS:
            return {
                ...state,
                centers: action.payload
            }
        default:
            return state;
    }
}