import React, { useReducer } from 'react';
import ReservationContext from './reservationContext';
import ReservationReducer from './reservationReducer';
import {
    GET_RESERVATIONS, 
    ADD_RESERVATION,
    UPDATE_RESERVATION,
    ACTUAL_RESERVATION,
    DELETE_RESERVATION,
    GET_RESERVATIONS_CENTER} from '../../types';
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

    const getReservationsCenter = async centerId => {
        try {
            const response = await clientAxios.get('/reservations' , { params: { centerId }} );

            dispatch({
                type: GET_RESERVATIONS_CENTER,
                payload: response.data.reservations
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addReservation = async reservation => {
        try {
            await clientAxios.post('/reservations', reservation);
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
            await clientAxios.delete(`/reservations/${id}`);
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
            await clientAxios.put(`/reservations/${reservation._id}`, reservation);
            dispatch({
                type: UPDATE_RESERVATION,
                payload: reservation
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
                getReservationsCenter,
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