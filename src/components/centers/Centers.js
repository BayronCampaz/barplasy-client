import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() =>{
        userAuthenticated();
    }, []);

    return (<h1> Centros </h1>);
}
export default Centers