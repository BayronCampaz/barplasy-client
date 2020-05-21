import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import ReservationContext from '../../../context/reservations/reservationContext'
import {formatDate, State} from '../../../config/utils'


const TakeTurnService = ({user, service, reservations}) => {

    const reservationContext = useContext(ReservationContext)
    const {addReservation} = reservationContext;

    const history = useHistory();

    const createReservation = () => {

        const serviceId = service._id; 
        const userId =  user._id;
        let timeEstimatedStart = new Date()
        let timeEstimatedFinish = AddMinutesToDate(timeEstimatedStart, service.time)

        if(actualReservations.length > 0){
            let lastReservation = actualReservations[0]
            timeEstimatedStart = lastReservation.timeEstimatedFinish
            timeEstimatedFinish = AddMinutesToDate(timeEstimatedStart, service.time)
        }

        addReservation({ serviceId, userId, timeEstimatedStart, timeEstimatedFinish })

        history.push('/reservations')
    }

    let actualReservations = []

    let timeStart = new Date()

    if(reservations.length > 0){

            actualReservations = reservations.filter(
            reservation => reservation.state === State.RESERVED ||
            reservation.state === State.ATTENDING );
            if(actualReservations > 0){

                let lastReservation = actualReservations[0]
                timeStart = new Date(lastReservation.timeEstimatedFinish)
            }else{
                timeStart = AddMinutesToDate(timeStart, 15)
            }

    }else{
        timeStart = AddMinutesToDate(timeStart, 15)
    }
    const probablyDate =  formatDate(timeStart)

    

    function AddMinutesToDate(date, minutes) {
        return new Date(new Date(date).getTime() + minutes * 60000);
      }   

    if(reservations.length > 0 && actualReservations.length > 0){     

        return (
            <div className="text-center mb-5"> 
                <div className="row">
                    <div className= "col-md-4 form-container">        
                        <h4>Actualmente hay</h4>
                        <p className="title">{actualReservations.length}</p>
                        <h4>personas en la cola</h4>
                    </div>
                    <div className= "col-md-4">
                    <button className="btn btn-blue pr-5 pl-5 pt-3 pb-3 mt-5" onClick={createReservation}>Confirmar Turno</button>
                    </div>
                    <div className= "col-md-4 form-container">        
                        <h4>Tu turno iniciaria alrededor del </h4>
                        <p className="title">{probablyDate}</p>
                    </div>
                </div>
                
            </div>);
    }else {
        return (
            <div className="text-center mb-5"> 
                <div className="row">
                    <div className= "col-md-4 form-container">        
                        <h4>Actualmente no hay</h4>
                        <h4>personas en la cola</h4>
                    </div>
                    <div className= "col-md-4">
                    <button className="btn btn-blue pr-5 pl-5 pt-3 pb-3 mt-5" onClick={createReservation}>Confirmar Turno</button>
                    </div>
                    <div className= "col-md-4 form-container">        
                        <h4>Puedes tomar un turno ahora mismo </h4>
                    </div>
                </div>
                
            </div>);
    }


}
export default TakeTurnService