import React from 'react';
import { connect } from 'react-redux';
import '../styles.css'

class Workshop extends React.Component {

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
    null
)(Workshop)