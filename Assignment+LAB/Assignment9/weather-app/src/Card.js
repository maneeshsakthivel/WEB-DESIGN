import React from 'react';
var moment = require('moment');

const Card = ({ showButton, reading, onClickHandler }) => {
    // componentDidMount = () => {
    //     console.log(reading.dt)
    // }
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  function showHourlyData(){
      
      //
    //   alert("Hiiii");
  }

  const imgURL = "owf owf-" + reading.weather[0].id +" owf-5x"

//   const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
//   const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x red"
if(showButton){
    return (
        <div className="col-sm-3">
          <div className="card">
            <h4 className="card-title">{reading.dt_txt.split(" ")[0]}</h4>        
            <div>
            </div>
            <h2>{Math.round(reading.main.temp_min)} °F</h2>
            <h2>{Math.round(reading.main.temp_max)} °F</h2>
            <i className={imgURL}></i>

            <div className="card-body">
              <p className="card-text">{reading.weather[0].description}</p>
                <button className="btn btn-info" onClick={() => onClickHandler(true, reading.dt_txt)}>Show Hourly Data</button>
            </div>
          </div>
        </div>
      )
}
else{

  return (
    <div className="col-sm-3">
      <div className="card">
        <h4 className="card-title">{reading.dt_txt.split(" ")[0]}</h4>        
        <div>
        </div>
        <h2>{Math.round(reading.main.temp_min)} °F</h2>
        <h2>{Math.round(reading.main.temp_max)} °F</h2>
        <div className="card-body">
        <i className={imgURL}></i>

          <p className="card-text">{reading.weather[0].description}</p>

          
          
        </div>
      </div>
    </div>
  )
}

}

export default Card;