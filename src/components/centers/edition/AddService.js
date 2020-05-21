import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AlertContext from '../../../context/alerts/alertContext';
import NavBarCenter from '../../centers/layout/NavBarCenter';
import ServiceContext from '../../../context/services/serviceContext';

const AddService = () => {

    const history = useHistory();

    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const serviceContext = useContext(ServiceContext);
    const { addService } = serviceContext;

    const [service, saveService] = useState({
        center_id : '',
        type: '',
        name: '',
        description: '',
        time: 0,
        price : 0.0
    });

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

        addService({
            center_id, type, name, description, time, price
        }); 

        history.goBack()
        
    }
    return ( 
        <div>
            <NavBarCenter/>
            <div className="background-dark m-5" >
            <div className="form-container sombra-dark">
                <h1>Añadir Servicio</h1>
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

                    <label htmlFor="time">Tiempo en minutos</label>
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
                        <input type="submit" className="btn btn-blue btn-block" value="Agregar Servicio" />
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

export default AddService
