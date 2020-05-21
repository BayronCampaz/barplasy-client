import {
    GET_RESERVATIONS,
    ADD_RESERVATION,
    UPDATE_RESERVATION,
    ACTUAL_RESERVATION,
    DELETE_RESERVATION, 
    GET_RESERVATIONS_CENTER} from '../../types';

    export default (state, action) => {
        switch(action.type) {
            case GET_RESERVATIONS:
                console.log(action.payload)
                return {
                    ...state,
                    reservations: action.payload
                }
            case GET_RESERVATIONS_CENTER:
                return {
                    ...state,
                    reservations: action.payload
                }
            case ADD_RESERVATION:
                return {
                    ...state,
                    reservations: [...state.reservations, action.payload ]
                }
            case ACTUAL_RESERVATION:
                return {
                    ...state,
                    selectedReservation: action.payload,
                    }   
            case DELETE_RESERVATION:
                return {
                    ...state,
                    reservations: state.reservations.filter(reservation => reservation._id !== action.payload )
                    }
            case UPDATE_RESERVATION:
                return {
                    ...state,
                    reservations: state.reservations.map(reservation => reservation._id === action.payload._id ? action.payload : reservation )
                }
            default:
                return state;
        }
    }

