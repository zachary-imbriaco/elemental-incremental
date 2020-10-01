import React from 'react';
import { connect } from 'react-redux';

import { addFire, addWater, addEarth, addAir } from '../actions/actions';

class ElementsBar extends React.Component {

    incrementFire = (e) => {
        e.preventDefault()
        this.props.addFire(this.props.fire)
    }
    incrementWater = (e) => {
        e.preventDefault()
        this.props.addWater(this.props.water)
    }
    incrementEarth = (e) => {
        e.preventDefault()
        this.props.addEarth(this.props.earth)
    }
    incrementAir = (e) => {
        e.preventDefault()
        this.props.addAir(this.props.air)
    }

    render() {
        return (
            <div>
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
    { addFire, addWater, addEarth, addAir }
)(ElementsBar)