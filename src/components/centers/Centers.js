import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import NavBar from '../layout/NavBar';
import Searcher from '../layout/Searcher'
import PublicationCenter from './PublicationCenter';
import Center from './Center';
import InformationSideBar from '../layout/InformationSideBar';
import Books from '../centers/Books'

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    useEffect(() =>{
        userAuthenticated();
    }, []);

    return (

        <div>
            <NavBar/>
            <div className="container">
                <Books/>
            </div>
        </div>
        
        /*<div>
            <NavBar/>
            <div className="row">
                <InformationSideBar/>
                <div className="col-md-8">
                    <Center/>
                </div>
            </div>
        </div>*/
        
        /*<div> 
            <NavBar/>       
            <div className="row">
                <Searcher/>
                <div className="col-md-8">
                    <PublicationCenter/>
                    <PublicationCenter/>
                </div>
            </div>
         </div>*/);
}
export default Centers