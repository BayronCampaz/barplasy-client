import React, {useReducer} from 'react';
import centerContext from './centerContext'
import centerReducer from './centerReducer'
import { GET_CENTERS, CENTER_ERROR } from '../../types';
import clientAxios from '../../config/axios'

const CenterState = props => {
    const initialState = {
        centers : []
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

    return (
        <centerContext.Provider
        value={
            {
                centers: state.centers,
                getCenters
            }
        }>
            {props.children}
        </centerContext.Provider>
    )
}

export default CenterState