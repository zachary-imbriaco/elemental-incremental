import React from 'react';
import { connect } from 'react-redux';

import { addFire } from '../actions/actions';

class ElementsBar extends React.Component {

}

const mapStateToProps = state => {
    return {
        elements: [state.elements.fire, state.elements.water, state.elements.earth, state.elements.air]
    }
}

export default connect(
    mapStateToProps, 
    { addFire }
)(ElementsBar)