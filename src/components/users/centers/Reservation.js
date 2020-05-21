import React from 'react'
import { formatDay, formatHours , State} from '../../../config/utils'

const Reservation = ({ reservation, cancelAReservation}) => {

    let dateType = new Date(reservation.timeEstimatedStart)
    let dateTypeFinish = new Date(reservation.timeEstimatedFinish)

    let date = formatDay(dateType)
    let startHour = formatHours(dateType)
    let endedHour = formatHours(dateTypeFinish)

    const cancelReservation = () => {
        cancelAReservation(reservation);
    }

    return (
        <div className="row service-container">
            <div className="col-md-10">
                <div className="row">
                    <h3 className="col-md-4"> {reservation.service.center.name}</h3>
                    <span className="col-md-2">{reservation.service.time} minutos</span>
                </div>

                <h4>{reservation.service.name}</h4>
                <h3 className="mt-4">{date}</h3>
                <h4>Inicio  a las: {startHour}</h4>
                <h4>Fin a las: {endedHour}</h4>
            </div>
            <div className="col-md-2">
                <h3>$ {reservation.service.price.$numberDecimal}</h3>
                <h4 className="mt-5">Estado :</h4>
                <span>{reservation.state}</span>
                {reservation.state !== State.ATTENDED && <button className="btn btn-blue" onClick={cancelReservation}>Cancelar Reserva</button>}
            </div>
        </div>
    );

}
export default Reservation