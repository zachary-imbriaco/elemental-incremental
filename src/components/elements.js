import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

import { incrementElement, increaseSpeed } from '../actions/actions';

class ElementBar extends React.Component {

    

    tick = () => {
        this.props.incrementElement(this.props.element)
    }
    
    increment = (e) => {
        e.preventDefault()
        this.props.incrementElement(this.props.element)
    }

    speedUp = (e) => {
        e.preventDefault()
        this.props.increaseSpeed(this.props.element)
    }



    render() {
        if (this.props.element == 'fire') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.fire} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.fireSpeed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.fSpeedCost} {this.props.element}</button>
                    </div>
                </div>
            )
        }
        if (this.props.element == 'water') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.water} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.waterSpeed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.wSpeedCost} {this.props.element}</button>
                    </div>
                </div>
            )
        }

    }

    // Need to figure out how to tick multiple things at once + how to prevent tick from resetting on update while still preventing recursion.
    componentDidUpdate() {
        if (this.props.element === 'fire') {
            clearInterval(this.fireTock)
            if (this.props.fireSpeed >= 1) {
            this.fireTock = setInterval(this.tick, 1000 / this.props.fireSpeed)
            }
            else {
                console.log(this.props.fireSpeed)
            }
        }
        if (this.props.element === 'water') {
            clearInterval(this.waterTock)
            if (this.props.waterSpeed >= 1) {
            this.waterTock = setInterval(this.tick, 1000 / this.props.waterSpeed)
            }
            else {
                console.log(this.props.waterSpeed)
            }
        }
        if (this.props.element === 'earth') {
            clearInterval(this.earthTock)
            this.earthTock = setInterval(this.tick, 1000 / this.props.earthSpeed)
        }
        if (this.props.element === 'air') {
            clearInterval(this.airTock)
            this.airTock = setInterval(this.tick, 1000 / this.props.airSpeed)
        }
    }

}


const mapStateToProps = state => {
    return {
        fire: state.fire,
        fireSpeed: state.fireSpeed,
        fSpeedCost: state.fSpeedCost,
        water: state.water,
        waterSpeed: state.waterSpeed,
        wSpeedCost: state.wSpeedCost,
        earth: state.earth,
        earthSpeed: state.earthSpeed,
        eSpeedCost: state.eSpeedCost,
        air: state.air,
        airSpeed: state.airSpeed,
        aSpeedCost: state.aSpeedCost
        }
}
export default connect(
    mapStateToProps, 
    { incrementElement, increaseSpeed }
)(ElementBar)