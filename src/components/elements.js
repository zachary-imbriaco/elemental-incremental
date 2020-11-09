import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

import { incrementElement, increaseSpeed } from '../actions/actions';

class ElementBar extends React.Component {



    
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
        if (this.props.element == 'water') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.water.current} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.water.speed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.water.speedCost} {this.props.element}</button>
                    </div>
                </div>
            )
        }
        if (this.props.element == 'earth') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.earth.current} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.earth.speed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.earth.speedCost} {this.props.element}</button>
                    </div>
                </div>
            )
        }
        if (this.props.element == 'air') {
            return (
                <div className='elements-component'>
                    <div className='elements-list'>
                        <p>Current {this.props.element}: {this.props.air.current} </p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.increment}>Add {this.props.element}</button>
                    </div>
                    <div className='elements-list'>
                        <p>{this.props.element}/second: {this.props.air.speed}</p>
                    </div>
                    <div className='elements-buttons'>
                        <button onClick={this.speedUp}>Increase {this.props.element} Speed: {this.props.air.speedCost} {this.props.element}</button>
                    </div>
                </div>
            )
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
    { incrementElement, increaseSpeed }
)(ElementBar)