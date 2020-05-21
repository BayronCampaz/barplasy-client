import React, {useState, useEffect} from 'react'
import {formatHours, State} from '../../../config/utils'
const ReservationItem = ({reservation, changeStateReservation, cancelReservation}) => {

    let timeStart = formatHours(new Date(reservation.timeEstimatedStart))
    let timeFinish = formatHours(new Date(reservation.timeEstimatedFinish))

    const [buttons, changeEnableButtons] = useState(
        {
            startAttending : true,
            endService: false,
            cancelService: true
        }
    ) 
    useEffect(() => {
        if(reservation.state === State.RESERVED){
            changeEnableButtons({
                startAttending : true,
                endService : false,
                cancelService: true
            })
    
        }else if(reservation.state === State.ATTENDING){
            changeEnableButtons({
                startAttending : false,
                endService : true,
                cancelService: true
            })
        }else if(reservation.state === State.ATTENDED){
            changeEnableButtons({
                startAttending : false,
                endService : false,
                cancelService: false
            })
        }
     // eslint-disable-next-line
    }, [])

   

    const startAttending = () => {
        reservation.state = State.ATTENDING;
        reservation.timeRealStart = Date.now()
        changeStateReservation(reservation)
        changeEnableButtons({
            startAttending : false,
            endService : true,
            cancelService: true
        })
    }

    const endService = () => {
        reservation.state = State.ATTENDED;
        reservation.timeRealFinish = Date.now()
        changeStateReservation(reservation)
        changeEnableButtons({
            startAttending : false,
            endService : false,
            cancelService: false
        })
    }

    const cancelService = () => {
        cancelReservation(reservation)
    }


    return (
        <div className="row service-container ml-5">
            <div className="col-md-10">
                <div className="row">
                    <h3 className="col-md-8"> {reservation.service.name}</h3>
                    <span className="col-md-2">{reservation.service.time} minutos</span>
                </div>

                <h4>Estado: {reservation.state}</h4>
                <h4>Inicio a las: {timeStart}</h4>
                <h4>Fin a las: {timeFinish}</h4>
            </div>
            <div className="col-md-2">
                <h3>$ {reservation.service.price.$numberDecimal}</h3>
            </div>
               {buttons.startAttending && <button className="btn btn-blue mr-5" onClick={startAttending}>Comenzar a atender</button>} 
               {buttons.endService && <button className="btn btn-blue mr-5" onClick={endService}>Servicio Terminado</button>}
               {buttons.cancelService &&<button className="btn btn-blue" onClick={cancelService}>Cancelar Reserva</button>}
        </div>
    );
}

export default ReservationItem