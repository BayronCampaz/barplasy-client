import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import ServiceContext from '../../../context/services/serviceContext'


const EditService = ({service}) => {

    const serviceContext = useContext(ServiceContext);
    const { deleteService, saveActualService  } = serviceContext;
    const history = useHistory();

    const removeService = () => {
        deleteService(service._id)
    }

    const openUpdateService = () => {
        saveActualService(service)
        history.push('/update-service');
    }

    return (
    <div className="row service-container"> 
        <div className="col-md-8">
            <div className="row">
                <h3 className="col-md-6">{service.name}</h3>
                <span className="col-md-6">{service.time} min</span>
            </div>

            <h4>{service.description}</h4>
        </div>
        <div className="col-md-4 row">
            <span className="col-12">$ {service.price.$numberDecimal}</span>
            <button className="col-4 btn btn-blue" onClick={openUpdateService}>Editar</button>
            <div className="col-4"></div>
            <button className="col-4 btn btn-blue" onClick={removeService}>Eliminar</button>
        </div>


    </div>);
}
export default EditService