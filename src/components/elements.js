import React from 'react';
import { connect } from 'react-redux';

import { addFire } from '../actions/actions';

class ElementsBar extends React.Component {

    incrementFire = (e) => {
        e.preventDefault()
        this.props.addFire(this.props.fire)
    }

    render() {
        return (
            <div>
                <p>This is dummy text.</p>
                <p>Current fire: {this.props.fire}</p>
                <button onClick={this.incrementFire}>Add Fire</button>
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
    { addFire }
)(ElementsBar)