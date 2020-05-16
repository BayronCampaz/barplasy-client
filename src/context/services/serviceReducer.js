import {GET_SERVICES,
    GET_SERVICE, 
    ADD_SERVICE, 
    UPDATE_SERVICE, 
    DELETE_SERVICE,
    ACTUAL_SERVICE,} from '../../types';

    export default (state, action) => {
        switch(action.type) {
            case GET_SERVICES:
                return {
                    ...state,
                    servicesCenter: action.payload
                }
            case GET_SERVICE:
                return {
                    ...state,
                    //errortarea: true
                }
            case ADD_SERVICE:
                return {
                    ...state,
                    servicesCenter: [action.payload, ...state.servicesCenter],
                    errorServices: false
                }
            case ACTUAL_SERVICE:
                return {
                    ...state,
                    selectedService: action.payload,
                    }                
            case DELETE_SERVICE:
                return {
                    ...state,
                    servicesCenter: state.servicesCenter.filter(service => service._id !== action.payload )
                }
            case UPDATE_SERVICE:
                console.log("----------------------------------------")
                console.log(action.payload)
                return {
                    ...state,
                    servicesCenter: state.servicesCenter.map(service => service._id === action.payload._id ? action.payload : service )
                }
            default:
                return state;
        }
    }

