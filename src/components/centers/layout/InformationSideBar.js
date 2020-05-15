import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const InformationSideBar = () => {

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
        <aside> 
            <img src="https://i.ibb.co/RgzvMfs/logo-barplasy.png"className="little-img"></img>
            <div className="container">
                <div className="mb-3">
                    <b>Ubicación</b>
                    <h4>Cll 32 # 13 - 5</h4>
                </div>

                <div className="mb-3">
                    <b>Telefono</b>
                    <h4>3174554845</h4>
                </div>

                <div className="mb-3">
                    <b>Calificación</b>
                    <div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>

                <DayPicker
                selectedDays={date.day}
                onDayClick={handleDayClick}
        />

            </div>

        </aside>
     );
}
 
export default InformationSideBar;