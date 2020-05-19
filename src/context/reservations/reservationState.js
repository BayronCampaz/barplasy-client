import React, { useReducer } from 'react';
import ReservationContext from './reservationContext';
import ReservationReducer from './reservationReducer';
import {
    GET_RESERVATIONS, 
    ADD_RESERVATION,
    UPDATE_RESERVATION,
    ACTUAL_RESERVATION,
    DELETE_RESERVATION} from '../../types';
import clientAxios from '../../config/axios'

const ReservationState = props => {

    const initialState = {
        reservations: [],
        selectedReservation: null
    }

    const [state, dispatch] = useReducer(ReservationReducer, initialState);

    const getReservations = async () => {
        try {
            const response = await clientAxios.get('/reservations');

            dispatch({
                type: GET_RESERVATIONS,
                payload: response.data.reservations
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addReservation = async reservation => {
        console.log(reservation);
        try {
            const response = await clientAxios.post('/reservations', reservation);
            console.log(response);
            dispatch({
                type: ADD_RESERVATION,
                payload: reservation
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteReservation = async (id) => {
        try {
            const response = await clientAxios.delete(`/reservations/${id}`);
            console.log(response);
            dispatch({
                type: DELETE_RESERVATION,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }


    const updateReservation = async reservation => {
        try {
            const response = await clientAxios.put(`/reservations/${reservation._id}`, reservation);
            console.log(response)
            dispatch({
                type: UPDATE_RESERVATION,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

     
     const saveActualReservation = reservation => {
        dispatch({
            type: ACTUAL_RESERVATION,
            payload: reservation
        })
    }

    return (
        <ReservationContext.Provider
            value={{
                reservations : state.reservations,
                selectedReservation: state.selectedReservation,
                getReservations,
                addReservation,
                deleteReservation,
                updateReservation,
                saveActualReservation
            }}
        >
            {props.children}
        </ReservationContext.Provider>
    )

} 

export default ReservationState;