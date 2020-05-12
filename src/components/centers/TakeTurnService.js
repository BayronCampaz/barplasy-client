import React, {useState} from 'react'

const TakeTurnService = () => {

    return (
    <div className="text-center"> 
        <div className="row">
            <div className= "col-md-4 form-container">        
                <h4>Actualmente hay</h4>
                <p className="title">4</p>
                <h4>personas en la cola</h4>
            </div>
            <div className= "col-md-4">

            </div>
            <div className= "col-md-4 form-container">        
                <h4>Tu turno iniciaria alrededor de las</h4>
                <p className="title">3:30 pm</p>
                <h4>(2 horas restantes)</h4>
            </div>
        </div>
        <button className="btn btn-blue pr-5 pl-5">Confirmar Turno</button>
    </div>);
}
export default TakeTurnService