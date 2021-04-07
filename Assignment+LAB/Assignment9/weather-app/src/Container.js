import React from 'react';
import Card from './Card'

class Container extends React.Component {
  constructor(props, val){
    super(props);
    console.log(val)
  }
  state = {
    fullData: [],
    dailyData: [],
    showDetail: false,
    showMain: true,
    param:"",
    hourPageData: []
  }

  componentDidMount = () => {
    var param = this.props.match.params.path
    console.log(this.props.match.params.path);
    this.setState({
      param: param
    })
    console.log(param)
    if(param){
      console.log("Not home")
    }
    
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=02130&units=imperial&APPID=3c94d22464514af141db63e616976e50`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      console.log(this.state.param)
      console.log(data.list)
      const hourlyData = data.list.filter(reading => reading.dt_txt.includes(this.state.param))
      if(this.state.param != ""){
        console.log(this.state.param)
      }
      //console.log(this.props.params.path)
      this.setState({
        fullData: data.list,
        dailyData: dailyData,
        hourlyData: data.list,
        hourPageData: hourlyData
      }, () => console.log(this.state))
    })
  }
  formatCards = () => {
    return this.state.dailyData.map((reading, index) => <Card showButton={true} reading={reading} key={index} onClickHandler={(val, dat) => this.updateShowDetails(val, dat) }/>)
  }

  updateShowDetails(val, dat) {
    console.log(dat.split(" ")[0])
    console.log(this.state.fullData.filter(reading => reading.dt_txt.includes(dat.split(" ")[0])))
    this.setState({showDetail:val,hourlyData:this.state.fullData.filter(reading => reading.dt_txt.includes(dat.split(" ")[0]))})
    
  }

  formatCardsHorly = () => {
    return this.state.hourlyData.map((reading, index) => <Card showButton={false} reading={reading} key={index} onClickHandler={(val, dat) => this.updateShowDetails(val, dat) }/>)
  }

  formatCardsByDay = () => {
    return this.state.hourPageData.map((reading, index) => <Card showButton={false} reading={reading} key={index} onClickHandler={(val, dat) => this.updateShowDetails(val, dat) }/>)
  }
  

 

  render() {
    if(this.props.match.params.path == "home"){
      return(
        <div className="container">
        <br></br>
      <h1 className="display-3 jumbotron-fluid">Weather Forecast</h1>
      <h5 className="display-5 .text-info">BOSTON</h5>
        <div className="row justify-content-around">

          {this.state.showMain && this.formatCards()}

        </div>
        <br>
        </br>
        <br>
        </br>
        <br></br>
          <div className="row justify-content-center">
             {this.state.showDetail && this.formatCardsHorly()}
          </div>
          <br></br>
        
      </div>
      )
    }
    else{
      return (
        <div className="container">
        <br></br>
        
        <h1 className="display-3 jumbotron-fluid">Weather Forecast</h1>
        <h5 className="display-5 .text-info">BOSTON</h5>

          <div className="row justify-content-center">
             {this.formatCardsByDay()}
          </div>
          <br></br>
  
        </div>  
      )
    }

  }
}

export default Container;