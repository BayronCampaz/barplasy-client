import React, {useReducer} from 'react';
import centerContext from './centerContext'
import centerReducer from './centerReducer'
import { GET_CENTERS, CENTER_ERROR, GET_CENTER } from '../../types';
import clientAxios from '../../config/axios'

const CenterState = props => {
    const initialState = {
        centers : [],
        center : null
    }

    const [state, dispatch] = useReducer(centerReducer, initialState)

    const getCenters = async () => {
        try {
            const response = await clientAxios.get('/centers');

            dispatch({
                type: GET_CENTERS,
                payload: response.data.centers
            })
        } catch (error) {
            const alert = {
                message: 'Hubo un error'
            }
            
            dispatch({
                type: CENTER_ERROR,
                payload: alert
            })
        }
    }

    const getCenter = async centerId => {
        try {
            const response = await clientAxios.get('/centers/'+centerId);
            console.log(response)
            dispatch({
                type: GET_CENTER,
                payload: response.data
                
            })
        } catch (error) {
            const alert = {
                message: 'Hubo un error'
            }
            
            dispatch({
                type: CENTER_ERROR,
                payload: alert
            })
        }
    }

    return (
        <centerContext.Provider
        value={
            {
                centers: state.centers,
                center: state.center,
                getCenters,
                getCenter
            }
        }>
            {props.children}
        </centerContext.Provider>
    )
}

export default CenterState