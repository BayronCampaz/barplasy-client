import React, { useReducer } from 'react';
import ServiceContext from './serviceContext';
import ServiceReducer from './serviceReducer';
import {GET_SERVICES,
    GET_SERVICE, 
    ADD_SERVICE, 
    UPDATE_SERVICE, 
    DELETE_SERVICE, 
    ACTUAL_SERVICE} from '../../types';
import clientAxios from '../../config/axios'

const ServiceState = props => {

    const initialState = {
        servicesCenter: [],
        service: null,
        errorService: false,
        selectedService: null
    }

    const [state, dispatch] = useReducer(ServiceReducer, initialState);

    const getServices = async centerId => {

        try {
            const response = await clientAxios.get('/services', { params: { centerId }});

            dispatch({
                type: GET_SERVICES,
                payload: response.data.services
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getService = async serviceId => {

        try {
            const response = await clientAxios.get('/services/'+serviceId);
            dispatch({
                type: GET_SERVICE,
                payload: response.data
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

    const deleteService = async (id) => {
        try {
            const response = await clientAxios.delete(`/services/${id}`);
            console.log(response);
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
            console.log(response)
            dispatch({
                type: UPDATE_SERVICE,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

     
     const saveActualService = service => {
        dispatch({
            type: ACTUAL_SERVICE,
            payload: service
        })
    }

    return (
        <ServiceContext.Provider
            value={{
                servicesCenter : state.servicesCenter,
                errorService: state.errorService,
                selectedService: state.selectedService,
                service: state.service,
                getServices,
                getService,
                addService,
                deleteService,
                updateService,
                saveActualService
                //guardarTareaActual,
                //limpiarTarea
            }}
        >
            {props.children}
        </ServiceContext.Provider>
    )

} 

export default ServiceState;