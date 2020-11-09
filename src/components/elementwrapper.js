import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'
import ElementBar from './elements.js'

import { tickUp, incrementElement } from '../actions/actions.js'

class ElementWrapper extends React.Component {

    this.elements.forEach(element => {
        if(element === 'fire') {
            if(this.fire.tick >= 1000) {
                incrementElement('fire')
            }
            else {
                tickUp('fire')
            }
        }
    })

    render() {
        return (
            <div>
                <ElementBar element='fire' />
                <ElementBar element='water' />
                <ElementBar element='earth' />
                <ElementBar element='air' />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fire: state.fire,
        water: state.water,
        earth: state.earth,
        air: state.air,
        elements = ['fire', 'water', 'earth', 'air']
        }
}

export default connect(
    mapStateToProps, 
    { tickUp }
)(ElementBar)