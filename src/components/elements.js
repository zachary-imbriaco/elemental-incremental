import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

import { incrementElement, increaseSpeed } from '../actions/actions';

class ElementsBar extends React.Component {

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
                <div className='elements-buttons'>
                    <button onClick={this.speedUpFire}>Increase Fire Speed: 10 Fire</button>
                    <button onClick={this.speedUpWater}>Increase Water Speed: 10 Water</button>
                    <button onClick={this.speedUpEarth}>Increase Earth Speed: 10 Earth</button>
                    <button onClick={this.speedUpAir}>Increase Air Speed: 10 Air</button>
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        fire: state.fire,
        water: state.water,
        earth: state.earth,
        air: state.air
    }
}

export default connect(
    mapStateToProps, 
    { incrementElement, increaseSpeed }
)(ElementsBar)