import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';
import NavBarCenter from '../../centers/layout/NavBarCenter';
import InformationSideBar from '../layout/InformationSideBar'
import Schedule from './Schedule';
const HomeCenter = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() =>{
        userAuthenticated();
    }, []);

    return (

        <div>
            <NavBarCenter/>
            <div className="row">
                <InformationSideBar/>
                <div className="col-md-8">
                    <h1 className="mt-5 mb-0">Calendario</h1>
                    <Schedule/>
                </div>
            </div>
        </div>
    )
}
export default HomeCenter