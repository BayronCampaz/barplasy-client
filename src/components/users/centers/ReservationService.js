import React, {useState} from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const ReservationService = () => {

    const[date, saveDate] = useState({
        day : new Date(),
        time : null
    })
    
   const handleDayClick = (day, { selected }) => {
        saveDate({
            ...date,
            day: selected ? undefined : day,
          });
  }

    return (
    <div className="row"> 
        <div className= "col-md-6">
        <DayPicker
          selectedDays={date.day}
          onDayClick={handleDayClick}
        />
            <button className="btn btn-blue ml-4">Reservar</button>
        </div>
        <div className="col-md-2">
            <h3>Mañana</h3>
            <button className="btn-hour"> 9:30 </button>
        </div>
        <div className="col-md-2">
            <h3>Tarde</h3>
            <button className="btn-hour"> 9:30 </button>
        </div>
        <div className="col-md-2">
            <h3>Noche</h3>
            <button className="btn-hour"> 9:30 </button>
        </div>
        
    </div>);
}
export default ReservationService