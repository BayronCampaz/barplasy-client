import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import NavBarCenter from '../../centers/layout/NavBarCenter';
import ServiceContext from '../../../context/services/serviceContext';

const UpdateService = () => {

    const history = useHistory();

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const serviceContext = useContext(ServiceContext);
    const { updateService, selectedService } = serviceContext;

    const [service, saveService] = useState({
        center_id : selectedService.center_id,
        type: selectedService.type,
        name: selectedService.name,
        description: selectedService.description,
        time: selectedService.time,
        price : selectedService.price
    });

    const _id = selectedService._id;
    const {center_id, type, name, description, time, price} = service;


    const onChange = e => {
        saveService({
            ...service,
            [e.target.name] : e.target.value,
        })
    }


    const onSubmit = e => {
        e.preventDefault();

        if(type.trim() === '' || name.trim() === '' || 
            description.trim() === '' ){
                
                showAlert("No pueden haber campos vacios")
                return;
            }
        if(time <= 0 ){
                showAlert('El tiempo de duracion del servicio debe ser mayor a 0')
            return;
        }

        if(price < 0){
                showAlert('El precio debe ser positivo')
            return;
        }

        updateService({
           _id,  center_id, type, name, description, time, price
        }); 

        history.goBack()
        
    }
    return ( 
        <div>
            <NavBarCenter/>
            <div className="background-dark m-5" >
            <div className="form-container sombra-dark">
                <h1>Editar Servicio</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <label htmlFor="name">Nombre</label>
                    <div className="campo-form">
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre del Servicio"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <label htmlFor="description">Descripcion</label>
                    <div className="campo-form">
                        <textarea className="textarea" 
                            id="description" 
                            name="description"
                            value={description}
                            placeholder="Descripcion del servicio"
                            onChange={onChange}
                            rows="5"/>
                    </div>

                    <label htmlFor="time">Tipo de Servicio</label>
                    <div className="campo-form">
                        <select name="type" onChange={onChange} >
                            <option value="Peluqueria">Peluqueria</option> 
                            <option value="Barberia" selected>Barberia</option>
                            <option value="Uñas">Uñas</option>
                            <option value="Spa">Spa</option>
                        </select>
                    </div>

                    <label htmlFor="time">Tiempo</label>
                    <div className="campo-form">
                        <input 
                            type="number"
                            id="time"
                            name="time"
                            placeholder="Tiempo aproximado de duración del servicio (en minutos)"
                            value={time}
                            onChange={onChange}
                        />
                    </div>

                    <label htmlFor="price">Costo del servicio</label>
                    <div className="campo-form">
                        <input 
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Precio del servicio"
                            value={price}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-blue btn-block" value="Editar Servicio" />
                    </div>
                </form>
                {alert &&
                            <div className="alert alert-danger" role="alert">{alert.message}</div>
                        }
            </div>
        </div>
    </div>     
     );
}

export default UpdateService

