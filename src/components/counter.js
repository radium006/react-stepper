import React, { Component } from 'react';
import './counter.css'

export class Counterbutton extends Component{

    state = {counter: 0}

    constructor(props) {
        super(props);
        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }

    incrementCount(){
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    decrementCount(){
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    render(){
        return (
            <div class='stepper'>
                
                <button class='decrease' onClick={this.decrementCount}> - </button>
                    <div class='count'>
                        <p>{this.state.counter}</p>
                    </div>
                <button class='increase' onClick={this.incrementCount}> + </button>
                
            </div>
        )
    }

}

export default Counterbutton