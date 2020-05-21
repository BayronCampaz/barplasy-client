import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import ServiceContext from '../../../context/services/serviceContext'



const Service = ({service}) => {

    const history = useHistory();

    const serviceContext = useContext(ServiceContext)
    const {saveActualService} = serviceContext;


    const confirmReservation = () => {

        saveActualService(service)
        history.push(service.center+"/"+service._id)
    }

    return (
    <div className="row service-container"> 
        <div className="col-md-10">
            <div className="row">
                <h3 className="col-md-6">{service.name}</h3>
                <span className="col-md-6">{service.time} min</span>
            </div>

            <h4>{service.description}</h4>
        </div>
        <div className="col-md-2">
            <span>$ {service.price.$numberDecimal}</span>
            <button className="btn btn-blue" onClick={confirmReservation}>Tomar Turno </button>
        </div>
    </div>);
}
export default Service