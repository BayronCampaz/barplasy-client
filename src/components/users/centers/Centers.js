import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../context/auth/authContext';
import NavBar from '../layout/NavBar';
import Searcher from '../layout/Searcher'
import PublicationCenter from './PublicationCenter';
import Center from './Center';
import InformationSideBar from '../layout/InformationSideBar';
import Books from '../centers/Books'
import CenterContext from '../../../context/centers/centerContext'

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    const centerContext = useContext(CenterContext)
    const {centers, getCenters} = centerContext;

    useEffect(() =>{
        userAuthenticated();
        getCenters();
        console.log(centers)
    }, []);

    return (

        /*<div>
            <NavBar/>
            <div className="container">
                <Books/>
            </div>
        </div>*/
        
        /*<div>
            <NavBar/>
            <div className="row">
                <InformationSideBar/>
                <div className="col-md-8">
                    <Center/>
                </div>
            </div>
        </div>*/
        
        <div> 
            <NavBar/>       
            <div className="row">
                <Searcher/>
                <div className="col-md-8">
                    {
                    centers.map(center => (
                        <PublicationCenter center={center}/>
                    ))}
                </div>
            </div>
         </div>);
}
export default Centers