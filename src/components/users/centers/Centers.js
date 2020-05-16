import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import NavBar from '../layout/NavBar';
import Searcher from '../layout/Searcher'
import PublicationCenter from './PublicationCenter';
import Center from './Center';
import InformationSideBar from '../layout/InformationSideBar';
import Books from '../centers/Books'
import CenterContext from '../../../context/centers/centerContext'
import ServiceContext from '../../../context/services/serviceContext'

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated} = authContext;

    const centerContext = useContext(CenterContext)
    const {centers, center, getCenters, getCenter} = centerContext;

    const serviceContext = useContext(ServiceContext)
    const {servicesCenter, getServices} = serviceContext;

    const [isBusy, setBusy] = useState(true)

    const {centerId} = useParams()

    useEffect(() => {
        async function fetchData(){
            userAuthenticated();
            console.log(centerId)
            if(centerId){
                await getCenter(centerId);
                await getServices(centerId)
            }else {
                getCenters();
            }
        }
        fetchData();
        setBusy(false);
    }, [centerId])
    
    if(centerId && center && !isBusy){
        return (          
            <div>
                <NavBar/>
                <div className="row">
                    <InformationSideBar center={center}/>
                    <div className="col-md-8">
                        <Center key={center._id} center={center} servicesCenter={servicesCenter}/>
                    </div>
                </div>
            </div> )
    }else if(!isBusy){
        return(         
        <div> 
            <NavBar/>       
            <div className="row">
                <Searcher/>
                <div className="col-md-8">
                    {
                    centers.map(center => (
                        <PublicationCenter key={center._id} center={center}/>
                    ))}
                </div>
            </div>
         </div>);

}
    /* 
                <div>
                <NavBar/>
                <div className="container">
                    <Books/>
                </div>
            </div> */

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
                        <PublicationCenter key={center._id} center={center}/>
                    ))}
                </div>
            </div>
         </div>);
}
export default Centers