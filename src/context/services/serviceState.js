import React, { useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from './serviceReducer';
import {GET_SERVICES,
    GET_SERVICE, 
    ADD_SERVICE, 
    UPDATE_SERVICE, 
    DELETE_SERVICE} from '../../types';
import clientAxios from '../../config/axios'

const ServiceState = props => {

    const initialState = {
        servicesCenter: [],
        errorService: false,
        selectedService: null
    }

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getServices = async center => {

        console.log(center);

        try {
            const response = await clientAxios.get('/services', { params: { center }});
            console.log(response);
            dispatch({
                type: GET_SERVICES,
                payload: response.data.services
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addService = async service => {
        console.log(service);
        try {
            const response = await clientAxios.post('/services', service);
            console.log(response);
            dispatch({
                type: ADD_SERVICE,
                payload: service
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteService = async (id, center) => {
        try {
            await clientAxios.delete(`/services/${id}`, { params: { center }});
            dispatch({
                type: DELETE_SERVICE,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateService = async service => {

        try {
            const response = await clientAxios.put(`/services/${service._id}`, service);
            
            dispatch({
                type: UPDATE_SERVICE,
                payload: response.data.service
            })
        } catch (error) {
            console.log(error);
        }
    }

     /* Extrae una tarea para edición
     const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }



     Elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    } */

    return (
        <ServiceContext.Provider
            value={{
                servicesCenter : state.servicesCenter,
                errorService: state.errorService,
                selectedService: state.selectedService,
                getServices,
                addService,
                deleteService,
                updateService,
                //guardarTareaActual,
                //limpiarTarea
            }}
        >
            {props.children}
        </ServiceContext.Provider>
    )

} 

export default ServiceState;