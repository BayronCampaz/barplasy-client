import React, {useContext, useEffect, useState} from 'react'
import Reservation from './Reservation'
import NavBar from '../layout/NavBar'
import ReservationContext from '../../../context/reservations/reservationContext'
import {State} from '../../../config/utils'

const Reservations = () => {

    const reservationContext = useContext(ReservationContext)
    const {getReservations, reservations, deleteReservation} = reservationContext;
    const [isBusy, setBusy] = useState(true)

    useEffect(() => {
        async function fetchData(){
            await getReservations()
        }
        fetchData();
        setBusy(false)
        // eslint-disable-next-line
    }, [])

    const cancelAReservation = (reservation) => {
        deleteReservation(reservation._id)
    }

    if(reservations.length > 0 && !isBusy){

        const actualReservations = reservations.filter(
            reservation => reservation.state === State.RESERVED ||
            reservation.state === State.ATTENDING );

        const oldReservations = reservations.filter(
            reservation => reservation.state === State.ATTENDED);

        return (
            <div>
                <NavBar/>
                <div className="container">
                    <p className="title mt-5">Reservas o turnos actuales</p>
                    {actualReservations.map(reservation => (
                        <Reservation key={reservation._id} reservation={reservation}
                            cancelAReservation={cancelAReservation}/>
                        ))}
                    <p className="title mt-5">Reservas o turnos anteriores</p>
                    {oldReservations.map(reservation => (
                        <Reservation key={reservation._id} reservation={reservation}
                            cancelAReservation={cancelAReservation}/>
                        ))}
                </div>
            </div> 
            );
    }else {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <p className="title mt-5">Todavia no has realizado ninguna reserva </p>
                </div>
            </div> 
            );

    }

}
export default Reservations