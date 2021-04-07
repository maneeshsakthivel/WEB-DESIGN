import React from "react"
import { decrement, increment, reset } from "../actions"
import Counter from "../component/counter"
import {connect} from "react-redux"

const mapStateToProps = (state) =>{
    return{
        counter: state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        reset: ()=> dispatch(reset()),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)