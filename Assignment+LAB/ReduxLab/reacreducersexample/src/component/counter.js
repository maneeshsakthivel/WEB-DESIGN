import React from "react"

class Counter extends React.Component{
    render(){
        const {counter, increment, decrement, reset} = this.props; 
        return (
            <div className="App">
                <div>
                    {counter}
                </div>
                <div>
                    <button onClick={increment}> 
                            Increment by 1
                    </button>
                </div>
                <div>
                    <button onClick={decrement}> 
                            Decrement by 1
                    </button>
                </div>
                <div>
                    <button onClick={reset}> 
                            Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;