import { GET_CENTERS, GET_CENTER} from '../../types';


export default (state, action) => {
    switch(action.type) {

        case GET_CENTERS:
            return {
                ...state,
                centers: action.payload
            }
        case GET_CENTER:
            return {
                ...state,
                center: action.payload
            }
        default:
            return state;
    }
}