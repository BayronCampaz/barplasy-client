import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import NavBar from '../layout/NavBar';
import Searcher from '../layout/Searcher'
import PublicationCenter from './PublicationCenter';
import Center from './Center';
import InformationSideBar from '../layout/InformationSideBar';
import CenterContext from '../../../context/centers/centerContext'
import ServiceContext from '../../../context/services/serviceContext'

const Centers = () => {

    const authContext = useContext(AuthContext);
    const {userAuthenticated, user} = authContext;

    const centerContext = useContext(CenterContext)
    const {centers, center, getCenters, getCenter} = centerContext;

    const serviceContext = useContext(ServiceContext)
    const {servicesCenter, getServices, selectedService} = serviceContext;

    const [isBusy, setBusy] = useState(true)

    const {centerId, serviceId} = useParams()

    useEffect(() => {
        async function fetchData(){
            userAuthenticated();
            if(centerId){
                await getCenter(centerId);
                await getServices(centerId)
            }else {
                getCenters();
            }
        }
        fetchData();
        setBusy(false);
        // eslint-disable-next-line 
    }, [centerId])

    if(centerId && center && serviceId && !isBusy){
        return (
            <div>
                <NavBar/>
                <div className="row">
                    <InformationSideBar center={center}/>
                    <div className="col-md-8">
                        <Center key={center._id} center={center} servicesCenter={servicesCenter} service={selectedService}/>
                    </div>
                </div>
            </div>
        ); 
    }else if(centerId && center && !isBusy){
        return (          
            <div>
                <NavBar/>
                <div className="row">
                    <InformationSideBar center={center}/>
                    <div className="col-md-8">
                        <Center key={center._id} user={user} center={center} servicesCenter={servicesCenter}/>
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
    
    return (
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