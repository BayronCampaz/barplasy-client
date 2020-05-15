import React, {useState} from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Schedule = () => {

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
    <div>
        <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
        <h3 className="ml-5 mb-5" > 14 de Mayo de 2020</h3>    
            <div className="ml-5 row">
                <p className="col-md-2"> Hora </p>
                <p className="col-md-4 ">Nombre</p>
                <p className="col-md-4 ">Celular</p>
            </div>
            
            <div className="ml-5 row">
                <p className="col-md-2 btn-hour"> 9:30 </p>
                <p className="col-md-4 btn-hour">Juan Pedro</p>
                <p className="col-md-4 btn-hour">3184465895</p>
            </div>
    </div>
    );
}
export default Schedule