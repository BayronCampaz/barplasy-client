import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import {
    SUCCESSFUL_REGISTRATION, 
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESSFUL_LOGIN, 
    ERROR_LOGIN, LOG_OUT} from '../../types'

    const AuthState = props => {
        const initialState = {
            token: localStorage.getItem('token'),
            authenticated : null,
            user: null,
            message: null,
            loading: true
        }

        const [state, dispatch] = useReducer(AuthReducer, initialState);

        const registerUser = async data => {
            try {
                const response = await clientAxios.post('/users', data)
                dispatch({
                    type: SUCCESSFUL_REGISTRATION,
                    payload: response.data
                });

                userAuthenticated();
            } catch (error){
                const alert = {
                    message: error.response.data.message
                }

                dispatch({
                    type:ERROR_REGISTRATION,
                    payload: alert
                })
            }
        }

        const registerCenter = async data => {
            try {
                const response = await clientAxios.post('/centers', data)

                dispatch({
                    type: SUCCESSFUL_REGISTRATION,
                    payload: response.data
                });

                userAuthenticated();
            } catch (error){
                const alert = {
                    message: error.response.data.message
                }

                dispatch({
                    type:ERROR_REGISTRATION,
                    payload: alert
                })
            }
        }

        const userAuthenticated = async () => {
            const token = localStorage.getItem('token');
            if(token){
                tokenAuth(token);
            }

            try {
                const response = await clientAxios.get('/auth')
                dispatch({
                    type: GET_USER,
                    payload: response.data.user
                })
            }catch (error) {
                console.log(error)
                dispatch({
                    type: ERROR_LOGIN
                })
            }
        }

        const login = async data => {
            try {
                const response = await clientAxios.post('/auth', data);
                dispatch({
                    type: SUCCESSFUL_LOGIN,
                    payload: response.data
                })
                userAuthenticated();
            } catch (error) {
                console.log(error.response.data.message)
                const alert = {
                    message: error.response.data.message
                }

                dispatch({
                    type:ERROR_LOGIN,
                    payload: alert
                })
            }
        }

        const logout = () => {
            dispatch({
                type: LOG_OUT
            })
        }

        return (
            <AuthContext.Provider
                value={{
                    token: state.token,
                    authenticated: state.authenticated,
                    user: state.user,
                    message: state.message,
                    loading: state.loading,
                    registerUser,
                    registerCenter,
                    login,
                    userAuthenticated,
                    logout
                }}>{props.children}


            </AuthContext.Provider>
        );

    }

    export default AuthState