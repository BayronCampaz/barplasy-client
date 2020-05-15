import {GET_SERVICES,
    GET_SERVICE, 
    ADD_SERVICE, 
    UPDATE_SERVICE, 
    DELETE_SERVICE} from '../../types';

    export default (state, action) => {
        switch(action.type) {
            case GET_SERVICES:
                return {
                    ...state,
                    //tareasproyecto: action.payload
                }
            case GET_SERVICE:
                return {
                    ...state,
                    //errortarea: true
                }
            case ADD_SERVICE:
                return {
                    ...state,
                   // tareasproyecto: [action.payload, ...state.tareasproyecto],
                   // errortarea: false
                }
            case DELETE_SERVICE:
                return {
                    ...state,
                    //tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload )
                }
            case UPDATE_SERVICE:
                return {
                    ...state,
                    //tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea )
                }
            default:
                return state;
        }
    }

