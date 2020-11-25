import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'
import ElementBar from './elements.js'

import { tickUp, incrementElement, tickReset } from '../actions/actions.js'


//Outdated, ignore this file until deleted/updated.
class ElementWrapper extends React.Component {


    

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
        elements: ['fire', 'water', 'earth', 'air']
        }
}

export default connect(
    mapStateToProps, 
    { tickUp, tickReset, incrementElement }
)(ElementBar, ElementWrapper)