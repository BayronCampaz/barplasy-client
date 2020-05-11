import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import NavBar from '../layout/NavBar';
import Searcher from '../layout/Searcher'
import PublicationCenter from './PublicationCenter';

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() =>{
        userAuthenticated();
    }, []);

    return (<div> 
            <NavBar/>       
            <div className="row">
                <Searcher/>
                <div className="col-md-8">
                    <PublicationCenter/>
                    <PublicationCenter/>
                </div>
            </div>
         </div>);
}
export default Centers