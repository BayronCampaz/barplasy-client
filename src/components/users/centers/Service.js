import React from 'react'

const Service = ({service}) => {

    return (
    <div className="row service-container"> 
        <div className="col-md-10">
            <div className="row">
                <h3 className="col-md-6">{service.name}s</h3>
                <span className="col-md-6">{service.time} min</span>
            </div>

            <h4>{service.description}</h4>
        </div>
        <div className="col-md-2">
            <span>$ {service.price.$numberDecimal}</span>
            <button className="btn btn-blue">Reservar</button>
        </div>
    </div>);
}
export default Service