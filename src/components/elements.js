import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

import { incrementElement, increaseSpeed } from '../actions/actions';

class ElementsBar extends React.Component {

    fireTick = () => {
        this.props.incrementElement('fire')
    }
    waterTick = () => {
        this.props.incrementElement('water')
    }
    earthTick = () => {
        this.props.incrementElement('earth')
    }
    airTick = () => {
        this.props.incrementElement('air')
    }

    incrementFire = (e) => {
        e.preventDefault()
        this.props.incrementElement('fire')
    }
    incrementWater = (e) => {
        e.preventDefault()
        this.props.incrementElement('water')
    }
    incrementEarth = (e) => {
        e.preventDefault()
        this.props.incrementElement('earth')
    }
    incrementAir = (e) => {
        e.preventDefault()
        this.props.incrementElement('air')
    }

    speedUpFire = (e) => {
        e.preventDefault()
        this.props.increaseSpeed('fire')
    }
    speedUpWater = (e) => {
        e.preventDefault()
        this.props.increaseSpeed('water')
    }
    speedUpEarth = (e) => {
        e.preventDefault()
        this.props.increaseSpeed('earth')
    }
    speedUpAir = (e) => {
        e.preventDefault()
        this.props.increaseSpeed('air')
    }

    render() {
        return (
            <div className='elements-component'>
                <div className='elements-list'>
                    <p>Current fire: {this.props.fire}</p>
                    <p>Current water: {this.props.water}</p>
                    <p>Current earth: {this.props.earth}</p>
                    <p>Current air: {this.props.air}</p>
                </div>
                <div className='elements-buttons'>
                    <button onClick={this.incrementFire}>Add Fire</button>
                    <button onClick={this.incrementWater}>Add Water</button>
                    <button onClick={this.incrementEarth}>Add Earth</button>
                    <button onClick={this.incrementAir}>Add Air</button>
                </div>
                <div className='elements-list'>
                <p>Fire Speed: {this.props.fireSpeed}</p>
                <p>Water Speed: {this.props.waterSpeed}</p>
                <p>Earth Speed: {this.props.earthSpeed}</p>
                <p>Air Speed: {this.props.airSpeed}</p>
                </div>
                <div className='elements-buttons'>
                    <button onClick={this.speedUpFire}>Increase Fire Speed: {this.props.fSpeedCost} Fire</button>
                    <button onClick={this.speedUpWater}>Increase Water Speed: {this.props.wSpeedCost} Water</button>
                    <button onClick={this.speedUpEarth}>Increase Earth Speed: {this.props.eSpeedCost} Earth</button>
                    <button onClick={this.speedUpAir}>Increase Air Speed: {this.props.aSpeedCost} Air</button>
                </div>
            </div>
        )
    }

    // Need to figure out how to tick multiple things at once + how to prevent tick from resetting on update while still preventing recursion.
    componentDidUpdate() {
        if (this.props.fireSpeed > 0) {
            clearInterval(this.tickFire)
            this.tickFire = setInterval(this.fireTick, 1000 / this.props.fireSpeed)
        }
        if (this.props.waterSpeed > 0) {
            clearInterval(this.tickWater)
            this.tickWater = setInterval(this.waterTick, 1000 / this.props.waterSpeed)
        }
        if (this.props.earthSpeed > 0) {
            clearInterval(this.tickEarth)
            this.tickEarth = setInterval(this.earthTick, 1000 / this.props.earthSpeed)
        }
        if (this.props.airSpeed > 0) {
            clearInterval(this.tickAir)
            this.tickAir = setInterval(this.airTick, 1000 / this.props.airSpeed)
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
        aSpeedCost: state.aSpeedCost,

    }
}

export default connect(
    mapStateToProps, 
    { incrementElement, increaseSpeed }
)(ElementsBar)