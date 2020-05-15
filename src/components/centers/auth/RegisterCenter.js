
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import AuthContext from '../../../context/auth/authContext';

const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {message, authenticated, registerCenter} = authContext;

    useEffect(() => {
        if(authenticated){
            props.history.push('/home-center')
        }

        if(message){
            showAlert(message.message)
        }

    }, [message, authenticated, props.history]);

    const [company, saveCompany] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        ownerId: '',
        ownerName: '',
        cellphone: ''

    });

    const {name, email, password, confirmPassword, ownerId, ownerName, cellphone} = company;


    const onChange = e => {
        saveCompany({
            ...company,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(name.trim() === '' || email.trim() === '' || 
            password.trim() === '' || confirmPassword.trim() === ''|| ownerId.trim() === '' || ownerName.trim() === '' || cellphone.trim()=== '' ){
                
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

        registerCenter({
            name, email, password, confirmPassword, ownerId, ownerName, cellphone
        });
        
    }
    return ( 
        <div className="background-dark">
            <img src="https://i.ibb.co/RgzvMfs/logo-barplasy.png" width="500" height="500"></img>
            <div className="form-container sombra-dark">
                <h1>Registra tu Compañia</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre de la Compañia"
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
                            placeholder="Email Corporativo"
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
                            placeholder="Contraseña"
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
                            placeholder="Repite la contraseña"
                            value={confirmPassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="ownerId">Cedula del Propietario</label>
                        <input 
                            type="text"
                            id="ownerId"
                            name="ownerId"
                            placeholder="Cedula"
                            value={ownerId}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="ownerName">Nombre Propietario</label>
                        <input 
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            placeholder="Nombre Propietario"
                            value={ownerName}
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
                
                {alert &&
                            <div className="alert alert-danger" role="alert">{alert.message}</div>
                        }
            </div>
        </div>
     );
}

export default Register
