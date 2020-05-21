import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';


const NavBar = () => {

    const history = useHistory();


    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { user, userAuthenticated, logout } = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    const openReservations = () => {
        history.push('/reservations')
        history.go()
    }

    const openHome = () => {
        history.push('/centers')
    }


    return (
        <header className="app-header">
            {user ? <p className="user-name">Hola <span>{user.name} </span> </p> : null}

            <nav className="nav-principal">

                <button
                    className="btn btn-blank"
                    onClick={openHome}>Inicio</button>
            </nav>


            <nav className="nav-principal">

                <button
                    className="btn btn-blank"
                    onClick={openReservations}>Mis Reservas</button>
            </nav>

            <nav className="nav-principal">

                <button
                    className="btn btn-blank"
                    onClick={() => logout()}>Cerrar Sesión</button>
            </nav>
        </header>
    );
}

export default NavBar;