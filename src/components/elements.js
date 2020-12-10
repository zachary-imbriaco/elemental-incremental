import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

import { incrementElement, increaseSpeed, tickUp, tickReset } from '../actions/actions';

class ElementBar extends React.Component {




    
    increment = (e) => {
        e.preventDefault()
        this.props.incrementElement(this.props.element)
    }

    speedUp = (e) => {
        e.preventDefault()
        this.props.increaseSpeed(this.props.element)
        this.props.tickReset(this.props.element)
    }



    render() {
        if (this.props.element === 'fire') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.fire.current} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.fire.speed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.fire.speedCost} {this.props.element}</button>
                    </div>
                </div>
            )
        }
        else {
            console.log(this.props.element)
            return (
                <div>No element found.</div>
            )
        }
    }

    componentDidMount(){
        if(this.props.fire.tick < 1000){
            this.props.tickUp('fire')
            console.log(this.props.fire.tick)
        }
        else{
            this.props.incrementElement('fire')
            this.props.tickReset('fire')
        }
    }


    componentDidUpdate(){

        if(this.props.fire.tick < 1000){
            this.props.fire.tick = this.props.fire.tick + this.props.fire.speed
            console.log(this.props.fire.tick)
        }
        else{
            this.increment('fire')
            this.props.tickReset('fire')
        }
    }


}


const mapStateToProps = state => {
    return {
        fire: state.fire,
        water: state.water,
        earth: state.earth,
        air: state.air,
        }
}
export default connect(
    mapStateToProps, 
    { incrementElement, increaseSpeed, tickUp, tickReset }
)(ElementBar)