import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';
import NavBar from '../../users/layout/NavBar';
const HomeCenter = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() =>{
        userAuthenticated();
    }, []);

    return (

        <div>
            <NavBar/>
            <div className="container">
                <h1>Manejo del centro de belleza</h1>
            </div>
        </div>
    )
}
export default HomeCenter