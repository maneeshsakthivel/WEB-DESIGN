import logo from './logo.svg';
import './App.css';
import Counter from "../src/container/counterContainer"
import React from "react"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}



export default App;
