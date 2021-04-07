import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {dat: new Date()}
    }
    componentDidMount(){
        setInterval(() =>this.tick(), 1000)
    }
    tick(){this.setState({
        dat: new Date()
    })
       
    }

    render(){
        return(
            <div>
                <h1>
                    Hello World
                </h1>
                <h2>
                    Todays date is{this.state.dat.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}

export default Clock;