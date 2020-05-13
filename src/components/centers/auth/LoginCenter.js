import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import AuthContext from '../../../context/auth/authContext';

const LoginCenter = (props) => {

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, authenticated, login} = authContext;

    useEffect(() => {
        if(authenticated){
            props.history.push('/home-center')
        }

        if(message){
            showAlert(message.message)
        }

    }, [message, authenticated, props.history]);
    
    const [user, saveUser] = useState({
        email: '',
        password: '',
        role: 'center'
    });

    const {email, password, role} = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            showAlert('Todos los campos son obligatorios')
        }

        login({email, password, role});
        
    }

    return (
        <div className="background-dark">
            <img src="https://i.ibb.co/RgzvMfs/logo-barplasy.png" width="500" height="500"></img>
            <div className="form-container sombra-dark">
                <h1>Iniciar Sesión <br/> Cuenta Empresarial</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" className="btn btn-blue btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/register-center'} className="account-link">
                    Obtener Cuenta Empresarial
                </Link>
                <Link to={'/'} className="account-link">
                    Ingresar como usuario 
                </Link>
                {alert &&
                            <div className="alert alert-danger" role="alert">{alert.message}</div>
                        }
            </div>
        </div>
    );
}

export default LoginCenter
