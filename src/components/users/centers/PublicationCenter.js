import React from 'react'

const PublicationCenter = ({center}) => {

    return (
    <div className="border-color"> 
        <div className="row">
            <div className="col-md-6">
                <img className="img-publication" src="https://cms.modumb.com/storage/magazine/_800x422/5-trucos-y-consejos-para-no-equivocarte-al-elegir-un-curso-de-peluqueria.jpg"/>         
                <div className="row">
                    <div className="col mt-2">
                        <h3>{center.name}</h3>
                        <h4>{center.location.address}</h4> 
                    </div>
                    <button className="btn btn-blue col mr-4">Reservar</button>
                </div>

            </div>
            <div className="col-md-6">
                <div className="row d-flex align-items-center mb-4">
                    <div className="col">
                        <h4>Corte mohicano sencillo</h4>
                        <h5>45min</h5> 
                    </div>
                    <h4 className="col" >$10000</h4>
                    <button className="btn btn-blue col mr-4">Reservar</button>
                </div>

                <div className="row d-flex align-items-center mb-4">
                    <div className="col">
                        <h4>Corte mujer sencillo</h4>
                        <h5>45min</h5> 
                    </div>
                    <h4 className="col mt-2" >$10000</h4>
                    <button className="btn btn-blue col mr-4">Reservar</button>
                </div>

                <div className="row d-flex align-items-center mb-4">
                    <div className="col mt-2">
                        <h4>Corte sencillo</h4>
                        <h5>45min</h5> 
                    </div>
                    <h4 className="col mt-2" >$10000</h4>
                    <button className="btn btn-blue col mr-4">Reservar</button>
                </div>

            </div>

            
        </div>
    </div>);
}
export default PublicationCenter