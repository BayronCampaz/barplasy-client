import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import ServiceContext from '../../../context/services/serviceContext'

const PublicationCenter = ({center}) => {

    const history = useHistory()


    const onClick = () => {
        history.push('/centers/'+ center._id)
    }

    return (
    <div className="border-color"> 
        <div className="row">
            <div className="col-md-8">
                <img className="img-publication" src="https://cms.modumb.com/storage/magazine/_800x422/5-trucos-y-consejos-para-no-equivocarte-al-elegir-un-curso-de-peluqueria.jpg"/>         
                    <button className="btn btn-blue col mr-4" onClick={onClick}>Reservar</button>
            </div>
            <div className="col-md-4">
                <h1>{center.name}</h1>
                <h3>Ubicación</h3>
                <h4 className="mb-5">{center.location.address}</h4> 

                <h3>Celular</h3>
                <h4 className="mb-5">{center.cellphone}</h4>

                <h3>Calificacion</h3>
                <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                </div>
            </div>

            
        </div>
    </div>);
}
export default PublicationCenter