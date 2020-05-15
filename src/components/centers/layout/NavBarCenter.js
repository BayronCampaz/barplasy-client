import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';
import { useHistory } from 'react-router-dom';

const NavBarCenter = () => {


    const history = useHistory();

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { user, userAuthenticated, logout  } = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    const openEditSite = () => {
        history.push('/edit-site');
    }
    
    const openCalendar = () => {
        history.push('/home-center');
    }

    return ( 
        <header className="app-header">
            {user ? <p className="user-name">Centro <span>{user.name} </span> </p> : null}

                        
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank"
                    onClick={openCalendar}>
                        Calendario
                </button>
            </nav>

            <nav className="nav-principal">
                <button className="btn btn-blank"
                onClick={openEditSite}>
                    Editar Sitio
                </button>
            </nav>
            
            <nav className="nav-principal">
                <button 
                    className="btn btn-blank"
                    onClick={() => logout() }>Cerrar Sesión</button>
            </nav>
        </header>
     );
}
 
export default NavBarCenter;