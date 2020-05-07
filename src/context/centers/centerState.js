import React, {useReducer} from 'react';
import centerContext from './centerContext'
import centerReducer from './centerReducer'

const CenterState = props => {
    const initialState = {
        form : false
    }

    const [state, dispatch] = useReducer(centerReducer, initialState)

    return (
        <centerContext.Provider
        value={
            {
                form : state.form
            }
        }>
            {props.children}
        </centerContext.Provider>
    )
}

export default CenterState