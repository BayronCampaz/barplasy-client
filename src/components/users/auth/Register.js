import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import AuthContext from '../../../context/auth/authContext';
import NavBarCenter from '../../centers/layout/NavBarCenter';

const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, authenticated, registerUser} = authContext;

    useEffect(() => {
        if(authenticated){
            props.history.push('/centers')
        }

        if(message){
            showAlert(message.message)
        }

    }, [message, authenticated, props.history]);

    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        cellphone: ''

    });

    const {name, email, password, confirmPassword, cellphone} = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(name.trim() === '' || email.trim() === '' || 
            password.trim() === '' || confirmPassword.trim() === '' || cellphone.trim()=== '' ){
                
                showAlert("No pueden haber campos vacios")
                return;
            }
        if(password.length < 6 ){
                showAlert('La contraseña debe tener al menos 6 caracteres')
            return;
        }

        if(password !== confirmPassword){
                showAlert('Las contraseñas no concuerdan')
            return;
        }

        registerUser({
            name, email, password, cellphone
        });
        
    }
    return ( 
        <div className="background-dark">
            <NavBarCenter/>
            <img src="https://i.ibb.co/RgzvMfs/logo-barplasy.png" width="400" height="400"></img>
            <div className="form-container sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input 
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Repite tu Password"
                            value={confirmPassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="cellphone">Celular</label>
                        <input 
                            type="text"
                            id="cellphone"
                            name="cellphone"
                            placeholder="Tu Celular"
                            value={cellphone}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-blue btn-block" value="Registrarse" />
                    </div>
                </form>

                <Link to={'/'} className="account-link">
                    Volver a Iniciar Sesión
                </Link>

                <Link to={'/register-center'} className="account-link">
                   Registrar Compañia
                </Link>

                {alert &&
                            <div className="alert alert-danger" role="alert">{alert.message}</div>
                        }
            </div>
        </div>
     );
}

export default Register
