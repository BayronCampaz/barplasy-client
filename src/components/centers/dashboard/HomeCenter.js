import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';
import NavBarCenter from '../../centers/layout/NavBarCenter';
import InformationSideBar from '../layout/InformationSideBar'
import Schedule from './Schedule';
const HomeCenter = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated, user, loading} = authContext;



    useEffect(() => {
        async function fetchData(){
            await userAuthenticated();
        }
        fetchData();  
        // eslint-disable-next-line    
    }, [])

    if(!loading && user){
        return (

            <div>
                <NavBarCenter/>
                <div className="row">
                    <InformationSideBar center={user}/>
                    <div className="col-md-8">
                        <h1 className="mt-5 mb-0">Calendario</h1>
                        <Schedule user={user}/>
                    </div>
                </div>
            </div>
        )
    }else{
       return (
       <div>-</div>
       ) 
    }
    
}
export default HomeCenter